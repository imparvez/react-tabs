import React from 'react';

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
		    </div>
		)
	}
}

/*
* @React JS: https://dominikpiatek.com/building-a-simple-tabs-component-with-react/
*/