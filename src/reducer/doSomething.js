const inint={
	num:1
}

export function add(state =inint,action){
	switch (action.type){
		case 'ADD':
		return Object.assign({},{num:state.num+1},data);
		case 'SUBTRACT':
		const data =action.data;
		return Object.assign({},{num:state.num-1},data);
		default:
		return state;
	}
} 