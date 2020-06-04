import React, { Component } from 'react';

class Header extends Component{
render() {
    return (
           <nav className="navbar navbar-inverse">
           	<div className="container-fluid">
           		<a href="!#" className="navbar-brand" >Items</a>
           		<ul className="nav navbar-nav">
           			<li >
           				<a href="!#">Home</a>
           			</li>
           			<li className="active">
           				<a href="!#">Link</a>
           			</li>
           		</ul>
           	</div>
           </nav>
        );
    }
}




export default Header;
