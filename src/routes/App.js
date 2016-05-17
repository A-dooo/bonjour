import Index from '../components/index/index.jsx';
import { bindActionCreators } from 'redux'
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as fnObj from "../actions/index.js";

// class App extends Component {

// 	constructor(props) {
//         super(props);
//     }

// 	render(){
// 		return <div>
// 			<Index/>
// 		</div>
// 	}
// }

//function mapDispatchToProps(dispatch) {
 // return bindActionCreators({onAdd}, dispatch)
//}

export default connect(state => ({
	num:state.add
}),fnObj)(Index)

