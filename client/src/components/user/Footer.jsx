import React from 'react';
// import './Footer.css'; // optional for custom styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          
          {/* About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Shopkart</h5>
            <p>Your one-stop shop for the latest electronics — laptops, mobiles, cameras, and more!</p>
          </div>

          {/* Products */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
            <p><a href="#" className="text-white text-decoration-none">Mobiles</a></p>
            <p><a href="#" className="text-white text-decoration-none">Laptops</a></p>
            <p><a href="#" className="text-white text-decoration-none">Cameras</a></p>
            <p><a href="#" className="text-white text-decoration-none">Headphones</a></p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
            <p><a href="#" className="text-white text-decoration-none">Your Account</a></p>
            <p><a href="#" className="text-white text-decoration-none">Become a Seller</a></p>
            <p><a href="#" className="text-white text-decoration-none">Shipping</a></p>
            <p><a href="#" className="text-white text-decoration-none">Help</a></p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
            <p><i className="fas fa-home me-2"></i> Delhi, India</p>
            <p><i className="fas fa-envelope me-2"></i> support@shopkart.com</p>
            <p><i className="fas fa-phone me-2"></i> +91 9876543210</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="row d-flex justify-content-center mt-3">
          <div>
            <a href="#" className="text-white me-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white me-4"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="row d-flex justify-content-center mt-3">
          <p className="text-center mb-0">&copy; 2025 Shopkart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
