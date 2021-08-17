/**
 * @description 最小值排列渲染
 */

window.onload = function () {
	
	waterfallFlow('main', 'pin');
	
	const dataInt = {
		'data': [
			{
				title: 'n1',
				src: 'https://hbimg.huabanimg.com/8ec8df084d9013d3f9bbe1e7a79de01637bced398dd3-bufhzH_fw236/format/webp'
			},
			{
				title: 'n2',
				src: 'https://hbimg.huabanimg.com/8ec8df084d9013d3f9bbe1e7a79de01637bced398dd3-bufhzH_fw236/format/webp'
			},
			{
				title: 'n3',
				src: 'https://hbimg.huabanimg.com/8ec8df084d9013d3f9bbe1e7a79de01637bced398dd3-bufhzH_fw236/format/webp'
			},
			{
				title: 'n4',
				src: 'https://hbimg.huabanimg.com/8ec8df084d9013d3f9bbe1e7a79de01637bced398dd3-bufhzH_fw236/format/webp'
			}
		]
	};
	
	window.onscroll = function () {
		if (checkScrollSide()) {
			const parentElement = document.getElementById('main');
			for (let i = 0; i < dataInt.data.length; i++) {
				const childElement = document.createElement('div');
				childElement.className = 'pin';
				parentElement.appendChild(childElement);
				
				const boxElement = document.createElement('div');
				boxElement.className = 'box';
				childElement.appendChild(boxElement);
				
				const imgELement = document.createElement('img');
				imgELement.src = dataInt.data[i].src;
				imgELement.title = dataInt.data[i].title;
				boxElement.appendChild(imgELement);
				
				console.log(`
					<div id="main">
						<div class="pin">
							<div class="box">
								<img src=""  title=""/>
							</div>
						</div>
							<div class="pin">
							<div class="box">
								<img src=""  title=""/>
							</div>
						</div>
					</div>
				`)
			}
			waterfallFlow('main', 'pin');
		}
	}
};


/**
 * @description 瀑布流渲染
 * @param parent 父元素 ID
 * @param pin 子元素ID
 */
function waterfallFlow(parent, pin) {
	const eleParent = document.getElementById(parent);
	
	// 获取存储块框 pin 的数组 allElePin
	const allElePin = getAllChild(eleParent, pin);
	
	// 获取一个块框 pin 的宽
	const iPinW = allElePin[0].offsetWidth;
	
	// 每行中能容纳的 pin 个数 [窗口宽度除以一个块框宽度]
	const num = Math.floor(document.documentElement.clientWidth / iPinW);
	
	// 设置父级居中样式：定宽 + 自动水平外边距
	eleParent.style.cssText = 'width:' + iPinW * num + 'px; margin:0 auto;';
	
	const pinHArr = [];//用于存储 每列中的所有块框相加的高度。
	
	//遍历数组 allElePin 的每个块框元素
	for (let i = 0; i < allElePin.length; i++) {
		// 获取元素的高度
		const pinH = allElePin[i].offsetHeight;
		
		if (i < num) {
			// 第一行中的 num 个块框 pin 先添加进数组 pinHArr
			pinHArr[i] = pinH;
		} else {
			// 数组 pinHArr 中的最小值 minH
			const minH = Math.min.apply(null, pinHArr);
			
			// 数组 pinHArr 中的最小值 index 索引
			const minHIndex = getMinHIndex(pinHArr, minH);
			
			allElePin[i].style.position = 'absolute';
			allElePin[i].style.top = minH + 'px';
			allElePin[i].style.left = allElePin[minHIndex].offsetLeft + 'px';
			
			// 数组最小高元素的高 + 添加上的 allElePin[i] 块框高, 更新添加了块框后的列高
			pinHArr[minHIndex] += allElePin[i].offsetHeight;
		}
	}
}

/**
 * @description 获取父元素parent 下面所有子集类名为className
 * @param parent 父容器元素
 * @param className 子容器类型
 * @returns {Array} 类名为className的数组
 */
function getAllChild(parent, className) {
	// 获取父级的所有子集
	const allElement = parent.getElementsByTagName('*');
	// 创建一个数组, 用于收集子元素
	const allChild = [];
	
	// 遍历子元素、判断类名、存入数组
	for (let i = 0; i < allElement.length; i++) {
		if (allElement[i].className == className) {
			allChild.push(allElement[i]);
		}
	}
	return allChild;
}

/**
 * @description 获取pin高度 最小值的索引index
 * @param arr
 * @param minH
 * @returns {string}
 */
function getMinHIndex(arr, minH) {
	for (let i in arr) {
		if (arr[i] == minH) {
			return i;
		}
	}
}

/**
 * @description
 * @returns {boolean} 是否出发滚动
 */
function checkScrollSide() {
	const eleParent = document.getElementById('main');
	const allElePin = getAllChild(eleParent, 'pin');
	
	//创建 [触发添加块框函数 waterfallFlow()] 的高度：最后一个块框的距离网页顶部 + 自身高的一半(实现未滚到底就开始加载)
	const lastPinH = allElePin[allElePin.length - 1].offsetTop + Math.floor(allElePin[allElePin.length - 1].offsetHeight / 2);
	
	// 获取垂直滚动的偏移值 [注意兼容性]
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	// 获取页面高度
	const documentH = document.documentElement.clientHeight;
	
	// 到达指定高度后 返回true，触发 waterfallFlow 函数
	return (lastPinH < scrollTop + documentH) ? true : false;
}