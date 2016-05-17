export function onAdd(){
	return{
		type:'ADD'
	}
}

export function onSubtract(){
	return{
		type:'SUBTRACT',
		data:{
			time:1,
			name:'zhangsan'
		}
	}
}