import React, { Component } from 'react';


class Products extends Component{
render() {
    return (
           <div>
           		<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
           			<div className="thumbnail">
           				<img src="https://picsum.photos/200/300" data-src="!#" alt="" />
           				<div className="caption">
           					<h3>Iphone6</h3>
           					<p>
           						Iphone6
           					</p>
           					<p>
           						<a href="!#" className="btn btn-success">Buy</a>
           					</p>
           				</div>
           			</div>
           		</div>
           </div>
        );
    }
}




export default Products;