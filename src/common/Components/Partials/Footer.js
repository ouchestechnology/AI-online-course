import React, {Component} from 'react';
import config from './../../../config';

class Footer extends Component{


    render(){
        return (
            <footer className="footer-section bg-white">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <h3>About {config.appName}</h3>
                        <p>it is an online Academy That not only teach but give you an equal opportunity in the business world, We make fashion your goals desire using the best tools.</p>
                    </div>

                    <div className="col-md-3 ml-auto">
                        <h3>Links</h3>
                        <ul className="list-unstyled footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Teachers</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h3>Subscribe</h3>
                        <p>Get awesome updates and information from our news letter</p>
                        <form action="#" className="footer-subscribe">
                        <div className="d-flex mb-5">
                            <input type="text" className="form-control rounded-0" placeholder="Email"/>
                            <input type="submit" className="btn btn-primary rounded-0" value="Subscribe"/>
                        </div>
                        </form>
                    </div>

                    </div>

                    <div className="row pt-5 mt-5 text-center">
                    <div className="col-md-12">
                        <div className="border-top pt-5">
                        <p>
                            Copyright 
                            &copy; <script>document.write(new Date().getFullYear());</script> 
                            All rights reserved
                        </p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;