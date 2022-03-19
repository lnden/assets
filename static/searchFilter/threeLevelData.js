const response = {
	"code": 0,
	"msg": "success",
	"data": [
		{
			"expand": true,
			"children": [
				{
					"num": 2,
					"name": "人口统计学特征",
					"expand": false,
					"children": [
						{
							"field": "age",
							"field_name": "年龄",
						},
						{
							"field": "gender",
							"field_name": "性别",
						}
					]
				},
				{
					"num": 19,
					"name": "用户属性",
					"expand": false,
					"children": [
						{
							"field": "name",
							"field_name": "用户认证身份",
						},
						{
							"field": "days",
							"field_name": "注册天数",
						},
						{
							"field": "uid",
							"field_name": "UID",
						},
						{
							"field": "user_name",
							"field_name": "用户名",
						},
					]
				},
			],
			"name": "用户基础信息"
		},
		{
			"expand": true,
			"children": [
				{
					"num": 3,
					"name": "行为风险特征",
					"expand": false,
					"children": [
						{
							"field": "score",
							"field_name": "用户风险分数",
						},
						{
							"field": "risk",
							"field_name": "创蓝风险评级",
						},
						{
							"field": "risk",
							"field_name": "数美风险评级",
						}
					]
				},
			],
			"name": "用户价值"
		},
		{
			"expand": true,
			"children": [
				{
					"num": 15,
					"name": "商品交易",
					"expand": false,
					"children": [
						{
							"field": "cancel_order_cnt",
							"field_name": "取消订单数",
						},
						{
							"field": "cash_back_cnt",
							"field_name": "累计退款订单数",
						},
						{
							"field": "is_hospital_secondpay",
							"field_name": "是否同机构复购",
						},
					]
				},
				{
					"num": 3,
					"name": "偏好预测",
					"expand": false,
					"children": [
						{
							"field": "haiwai_info",
							"field_name": "异地偏好(海外)",
						},
						{
							"field": "predict_menu_preference",
							"field_name": "类目偏好",
						},
						{
							"field": "yidi_info",
							"field_name": "异地偏好(国内)",
						}
					]
				},
				{
					"num": 24,
					"name": "内容交互",
					"expand": false,
					"children": [
						{
							"field": "answer_belike_cnt",
							"field_name": "答案被赞数",
						},
						{
							"field": "answer_cnt",
							"field_name": "答案数",
						},
						{
							"field": "belike_cnt",
							"field_name": "发布内容集赞数",
						},
					]
				}
			],
			"name": "用户行为"
		}
	]
}