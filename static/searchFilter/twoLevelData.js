const response = {
	"code": 0,
	"msg": "success",
	"data": [
		{
			"expand": true,
			"children": [
				{
					"id": 1,
					"field": "age",
					"field_name": "年龄",
				},
				{
					"id": 2,
					"field": "gender",
					"field_name": "性别",
				},
				{
					"id": 3,
					"field": "email",
					"field_name": "邮箱地址",
				},
				{
					"id": 4,
					"field": "card",
					"field_name": "身份证",
				},
				{
					"id": 5,
					"field": "address",
					"field_name": "家庭地址",
				},
				{
					"id": 6,
					"field": "phone",
					"field_name": "电话号码",
				},
			],
			"name": "用户信息"
		},
		{
			"expand": true,
			"children": [
				{
					"id": 1,
					"field": "cheat_score",
					"field_name": "用户风险分数",
				},
				{
					"id": 2,
					"field": "cl_risk",
					"field_name": "创蓝风险评级",
				},
				{
					"id": 3,
					"field": "sm_risk",
					"field_name": "数美风险评级",
				},
				{
					"id": 4,
					"field": "predict_consume",
					"field_name": "消费潜力",
				},
			],
			"name": "用户价值"
		},
		{
			"expand": true,
			"children": [
				{
					"id": 1,
					"field": "cancel_order_cnt",
					"field_name": "取消订单数",
				},
				{
					"id": 2,
					"field": "is_item_secondpay",
					"field_name": "是否同类目复购",
				},
				{
					"id": 3,
					"field": "cash_back_cnt",
					"field_name": "累计退款订单数",
				},
				{
					"id": 4,
					"field": "pay_gmv",
					"field_name": "累计支付GMV",
				},
				{
					"id": 5,
					"field": "pay_order_cnt",
					"field_name": "累计支付订单数",
				},
				{
					"id": 6,
					"field": "product_cnt",
					"field_name": "购物车商品数",
				},
			],
			"name": "用户行为"
		}
	]
}