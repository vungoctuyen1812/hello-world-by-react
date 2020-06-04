import React, { Component } from 'react';
import Header from './Components/Header'
import Products from './Components/Products'
import Person from './Person/Person'

class Demo extends Component{
render() {
    return (
            <div>
                <Header />
                	<div className="row">
                		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                			<Products />
                		</div>
                		<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                			<Products />
                		</div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Products />
                        </div>
                	</div>
                <Person />  
                <Person />
                <Person />  
            </div>
        );
    }
}




export default Demo;

