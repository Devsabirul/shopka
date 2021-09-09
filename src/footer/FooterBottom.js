import React from 'react';
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const FooterBottom = () => {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="#">Computers</a></li>
                                <li><a href="#">Shoes</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Collectibles</a></li>
                                <li><a href="#">Kitchen Accessories</a></li>
                                <li><a href="#">Home & Garden</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Developer Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                <a href="http://www.facebook.com/devsabirul80" target="blank">Developer Shishir</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><FacebookIcon /></a></li>
                                <li><a className="twitter" href="#"><InstagramIcon /></a></li>
                                <li><a className="dribbble" href="#"><LinkedInIcon /></a></li>
                                <li><a className="linkedin" href="#"><TwitterIcon /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterBottom;