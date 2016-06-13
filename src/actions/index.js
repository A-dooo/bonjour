export function onAdd(){
	return dispatch => {
		dispatch({
			type: 'ADD'
		})
	}
}

export function onSubtract(){
	// alert(6666)
	return dispatch => {
		dispatch({		
			type:'SUBTRACT',
			data:{
				time:1,
				name:'zhangsan'
			}
		})
	}
}
