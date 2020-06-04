import React, { Component } from 'react';
import Header from './components/Header'
import Products from './components/Products'

class Demo extends Component{
render() {
    return (
            <div>
                <Header />
                	<div className="row">
                		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                			<Products />
                		</div>
                		<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                			<Products />
                		</div>
                	</div>
            </div>
        );
    }
}




export default Demo;

