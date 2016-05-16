const inint=[]

export function add(state =1,action){
	switch (action.type){
		case 'ADD':
		return state+1;
		case 'SUBTRACT':
		return state-1;
		default:
		return state;
	}
} 