import React,{Component} from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
	return(
			<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home"><i className="fa fa-home fa-lg"></i> Home</Link></li>
                        <li><Link to="/aboutus"><i className="fa fa-info fa-lg"></i> About Us</Link></li>
                        <li><Link to="/menu"><i className="fa fa-list fa-lg"></i> Menu</Link></li>
                        <li><Link to="/contact"><i className="fa fa-address-card fa-lg"></i> Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Gold Coin plaza<br />
		              Indore<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: +91 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +91 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kruk@gmail.com">
                         kruk@gmail.com</a>
                          </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 React App Fusion</p>
                </div>
            </div>
        </div>
    </div>
		);
}

export default Footer;