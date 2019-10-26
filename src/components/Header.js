import React from 'react';
import { Link } from 'gatsby';
import mainLogo from "../assets/images/svgs/logo.svg";
import Container from 'components/Container';

const Header = () => {
  return (

      <div className={"header"}>
     <div className={"header__logo"}>
         <Link to="/" ><img className={"header__image"} src={mainLogo}/></Link>

     </div>
          <div className="mobile-hamburger">
              <div className={"mobile-hamburger__line"}></div>
              <div className={"mobile-hamburger__line"}></div>
              <div className={"mobile-hamburger__line"}></div>
          </div>
        <ul className={"header__links"}>

          <li className={'header__links-container'}>
            <Link to="/projects/" className={"header__link"}>projects</Link>
              <Link to="/bio/" className={"header__link"}>bio</Link>
              <Link to="/contact/" className={"header__link"}>contact</Link>
          </li>
        </ul>

      </div>

  );
};

export default Header;