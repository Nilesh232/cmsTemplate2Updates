import React from "react";
import logo from '../assets/logo-black.png';



function NavTemplate2Component() {

  return (
    <nav className="ec-nav sticky-top bg-white">
        <div className="container">
            <div style= {{marginBottom:"0px"}} className="navbar p-0 navbar-expand-lg">
                <div className="navbar-brand"><a className="logo-default" href="#"><img alt=""
                            src={logo} /></a></div><span aria-expanded="false"
                    className="navbar-toggler ml-auto collapsed" data-target="#ec-nav__collapsible" data-toggle="collapse">
                    <div className="hamburger hamburger--spin js-hamburger">
                        <div className="hamburger-box">
                            <div className="hamburger-inner"></div>
                        </div>
                    </div>
                </span>
                <div className="collapse navbar-collapse when-collapsed" id="ec-nav__collapsible">
                    <ul className="nav navbar-nav ec-nav__navbar ml-auto">
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a style={{background:"white"}} className="nav-link "
                                href="#" >Home</a>
                        </li>
                        <li class="nav-item nav-item__has-dropdown"><a  style={{background:"white"}} class="nav-link dropdown-toggle" href="#"
                                data-toggle="dropdown">About Us</a>
                            <ul class="dropdown-menu">
                                <li><a style={{background:"white"}} href="page-sp-all-courcess.html" class="nav-link__list">Principal's Message</a></li>
                                <li><a style={{background:"white"}} href="page-sp-all-courcess-with-sidebar.html" class="nav-link__list">Mission & Vision
                                        </a></li>
                                <li><a style={{background:"white"}} href="page-sp-all-courcess-list-with-sidebar.html" class="nav-link__list">Teachers
                                        </a></li>
                                <li><a style={{background:"white"}} href="page-sp-all-courcess-with-sidebar.html" class="nav-link__list">
                                        Achivements</a></li>
                            </ul>
                        </li>
                        <li class="nav-item nav-item__has-dropdown"><a style={{background:"white"}} class="nav-link dropdown-toggle" href="#"
                                data-toggle="dropdown">Activities</a>
                            <ul class="dropdown-menu">
                                <li><a style={{background:"white"}} href="page-sp-all-courcess.html" class="nav-link__list">News</a></li>
                                <li><a style={{background:"white"}} href="page-sp-all-courcess-with-sidebar.html" class="nav-link__list">Events
                                        </a></li>
                                <li><a style={{background:"white"}} href="page-sp-all-courcess-list-with-sidebar.html" class="nav-link__list">Extra Curricular
                                        </a></li>
                            </ul>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a style={{background:"white"}} className="nav-link "
                                href="#" >Academics</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a style={{background:"white"}} className="nav-link "
                                href="#" >Facilities</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a style={{background:"white"}} className="nav-link "
                                href="#" >Gallery</a>
                        </li>
                        <li className="nav-item nav-item__has-megamenu megamenu-col-2"><a style={{background:"white"}} className="nav-link "
                                href="#" >Contact Us</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </nav>
  );
}

export default NavTemplate2Component;
