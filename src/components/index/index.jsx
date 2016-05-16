import React,{Component} from 'react';
import {Link} from 'react-router'


export default class Index extends Component{

	constructor(props) {
        super(props);
    }
	render(){
		console.log(this.props)
		const { onAdd,num,onSubtract } = this.props;
		return <div>
			<p>{num}</p>
			<p className="dfgh"  onClick={onAdd}>ADD </p>
			<p onClick={onSubtract}> subtract</p>
			<div>
				<Link to="/about">about</Link>
			</div>
			<div>
				{this.props.children}
			</div>
		</div>
	}
}