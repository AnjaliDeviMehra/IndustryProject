import "./Nav.scss";
import logo from "../../assets/images/logo.png";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar__title">Learn</div>

                    <div className="navbar__links">
                        <a className="navbar__link">
                            <span className="navbar__link--text">Discover</span>
                            <i className="arrow-down"></i>
                        </a>
                        <a className="navbar__link">
                            <span className="navbar__link--text">Product documentation</span>
                            <i className="arrow-down"></i>
                        </a>
                        <a className="navbar__link">
                            <span className="navbar__link--text">Development languages</span>
                            <i className="arrow-down"></i>
                        </a>
                        <a className="navbar__link">
                            <span className="navbar__link--text">Topics</span>
                            <i className="arrow-down"></i>
                        </a>
                    </div>
            </div>
            <div className="navbar__right">
                <i className="search-icon"></i>
                <a href="#" className="navbar__signin">Sign in</a>
            </div>
        </div>
    );
};

export default Nav;
