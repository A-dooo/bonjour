import React, { Component, PropTypes } from "react";
import configureSrore from "./src/store/index.js";
import { Provider } from "react-redux";
import { Router,Route ,IndexRoute, IndexLink, Redirect, hashHistory, browserHistory} from "react-router";
import rootReducer from "./src/reducer/index.js";
import App from './src/routes/App.js';
import First from './src/components/First/first.jsx';
import About from './src/components/About/about.jsx';
import Error from './src/components/Error/error.jsx';
import ReactDom from "react-dom";
const store = configureSrore(rootReducer);






const routerConfig=[
	{
		path:'/',
		component:App,
		indexRoute:{
			component:First 
		},
		childRoutes:[
      		{
      			path:'about',
      			component:About
      		}
    	]
	},
	{
		path:"*",
		component:Error
	}

]

ReactDom.render((
  	<Provider store={store}>			
		<Router  history={hashHistory} routes={routerConfig} />
	</Provider>
), document.getElementById('container'))