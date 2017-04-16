import React from 'react';
import Tab from './tab.jsx';

const tabData = [
	{
		title: 'HELLO ONE',
		content: 'CONTENT ONE'
	},{
		title: 'HELLO TWO',
		content: 'CONTENT TWO'
	},{
		title: 'HELLO THREE',
		content: 'CONTENT THREE'
	},
]

export default class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			activeTab: 0
		}
	}

	handleClick(index) {
	    this.setState({activeTab: index});
	    return false;
	}

	render(){
		return(
			<div>
				<dl className="tabs">
		          {this.props.data.map(function (tab, index) {
		            var activeClass = this.state.activeTab === index ? 'active' : '';

		            return (
		              <dd className={'tab ' + activeClass} >
		                <a href="#" onClick={this.handleClick.bind(this, index)}>
		                	{tab.title}
		                </a>
		              </dd>
		            )
		          }, this)}
		        </dl>
			    <div className="tabs-content">
		          {this.props.data.map(function (tab, index) {
		            var activeClass = this.state.activeTab === index ? 'active' : '';

		            return (
		              <div className={'content ' + activeClass}>
		                <p>{tab.content}</p>
		              </div>
		            )
		          }, this)}
		        </div>
		        <Tab data={tabData}/>
		    </div>
		)
	}
}

/*
* @React JS: https://dominikpiatek.com/building-a-simple-tabs-component-with-react/
*/