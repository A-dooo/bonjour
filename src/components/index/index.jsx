import React,{Component} from 'react';
import {Link} from 'react-router'


export default class Index extends Component{

	constructor(props) {
        super(props);
    }
	render(){
		const { onAdd,num,onSubtract,name } = this.props;
		console.log(this.props)
		return <div>
			<p>{num}</p>
			<p>{name}</p>
			<p className="abcd"  onClick={onAdd}>add </p>
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