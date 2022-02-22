import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.styles.css';

const Footer = () => {
    return (
			
           
				<footer className="pt-4 footer">
				
					<div className="container">

						<div className="row">

						
						<div className="col-md-6 mb-4">
						<form className="form-inline">
							<input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
								aria-label="Search" />
							<i className="fas fa-search" aria-hidden="true"></i>
							</form>
					</div>
						</div>
						</div>
					

					
					<div className="footer-copyright text-center py-3">© 2022 Copyright:
						<h5> Keita'sBeauty.com</h5>
							<div className=" mb-4 text-center py-3">
							<i className="fa-brands fa-instagram"></i>
							<i className="fa-brands fa-facebook"></i>
							<i className="fa-brands fa-linkedin-in"></i>
						</div>
					</div>
				

				</footer>     
		)
};

export default Footer;