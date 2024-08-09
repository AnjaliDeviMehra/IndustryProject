import './Footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
          <div className="footer__left">
              <span>🌐 English (United States)</span>
              <span className="footer__privacy-choices">🔘 Your Privacy Choices</span>
              <span>☀ Theme ▼</span>
          </div>
          <div className="footer__right">
              <span>Manage cookies</span>
              <span>Previous Versions</span>
              <span><a href="#">Blog</a></span>
              <span><a href="#">Contribute</a></span>
              <span><a href="#">Privacy</a></span>
              <span><a href="#">Terms of Use</a></span>
              <span><a href="#">Trademarks</a></span>
              <span>© Microsoft 2024</span>
          </div>
      </footer>
    );
};

export default Footer;
