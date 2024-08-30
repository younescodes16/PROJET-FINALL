import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>
                        We are a leading e-commerce platform offering a wide range of products at unbeatable prices. Our mission is to provide the best online shopping experience.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-phone"></i> +213 770221559</p>
                    <p><i className="fas fa-envelope"></i> AGshopping@gmail.com</p>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 E-commerce Site | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
