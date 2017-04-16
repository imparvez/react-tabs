import React from 'react'

export default class Tab extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			tabIndex: 0
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(index) {
	    this.setState({
	    	tabIndex: index
	    });
	}


	render(){
		return(
			<div className="tabContainer">
				<ul className="tabTitleContainer">
					{this.props.data.map((tab, index)=>{
						var activeClass = this.state.tabIndex === index ? 'active' : '';
						return(
							<li 
								className={'tab ' + activeClass} 
								key={index} 
								onClick={() => this.handleClick(index)}>
								{tab.title}
							</li>)
					})}
				</ul>
				<div className="tabContentContainer">
					{this.props.data.map((tab, index)=>{
						var activeClass = this.state.tabIndex === index ? 'active' : '';
						return(
							<p 
								key={index} 
								className={'content '+ activeClass }>
								{tab.content}
							</p>
						)
					})}
				</div>
			</div>
		)
	}
}