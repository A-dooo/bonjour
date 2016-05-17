import React,{Component} from 'react';
 require('./about.css');

export default class About extends Component{
	componentDidMount(){

		window.addEventListener('scroll',(e)=>{
			const uuu = document.getElementById('threeD');
			uuu.style.transform=`translate3d(0px, 0px,${document.body.scrollTop}px )`;
		})
	}
	render(){
		return <div>
		  	<div  id="showMsg">
		  		<div>
		  			<div id="threeD" className="threeD"></div>
		  		</div>
		  	</div>
		  	<div></div>
		</div>
	}

}
