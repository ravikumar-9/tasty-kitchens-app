import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/dppqkea7f/image/upload/v1625742512/Frame_274_zlrzwk.svg"
          alt="website-footer-logo"
          className="footer-logo"
        />
        <h1 className="footer-website-heading">Tasty Kitchens</h1>
      </div>
      <p className="footer-des">The only thing we are serious about is food.</p>
      <p className="footer-des">Contact us on</p>
      <div className="media-icons-container">
        <FaPinterestSquare
          fill="white"
          size="34"
          data-testid="pintrest-social-icon"
        />
        <FaInstagramSquare
          fill="white"
          size="34"
          data-testid="instagram-social-icon"
        />
        <FaTwitter fill="white" size="34" data-testid="twitter-social-icon" />
        <FaFacebookSquare
          fill="white"
          size="34"
          data-testid="facebook-social-icon"
        />
      </div>
    </div>
  )
}
