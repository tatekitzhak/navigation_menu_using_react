import React, { Component } from "react";
import ReactDOM from "react-dom";
class Header extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1> Hello from Header Component! </h1>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100" alt="..."/>
                            <h1>1</h1>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                            <h1>2</h1>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..."/>
                            <h1>3</h1>
                        </div>
                    </div>{/*carousel-inner */}
                </div>
            </div>
        );
    }
}

export default Header;
 