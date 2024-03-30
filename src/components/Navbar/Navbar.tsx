import { AppRoutes } from "../../Routing/AppRoutes";
import { Link } from "react-router-dom";
import { FC, useState, useEffect, useRef } from "react";
import './Navbar.scss';
import Container from 'react-bootstrap/Container';

const Navbar: FC = () => {

    const [burger, setBurger] = useState(false);
    let menuRef: any = useRef();

    useEffect(() => {
        let handler = (e: any)=>{
          if(!menuRef.current.contains(e.target)){
            setBurger(false);
          }      
        };
    
        document.addEventListener("mousedown", handler);
            
        return () => {
          document.removeEventListener("mousedown", handler);
        }
    
      });

    const changeActive = () => {
        setBurger(!burger)
    }

    return (
        <header>
            <nav className="navbar">
                <Container fluid>
                    <div className="header-inner">
                        {/* Logo */}
                        <Link key={1} to={AppRoutes.MAIN} className="Link header-logo navbar-brand la-brand logo">
                            <img src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="Головна" />
                        </Link>
                        {/* Navigation */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                            <Link key={2} to={AppRoutes.DISCOUNTS} className="nav-item hover-line">
                                <li className="nav-link">
                                        <img
                                            src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-gift.svg"
                                            alt="Акції"
                                        />
                                        <span>Акції</span>
                                </li>
                            </Link>
                            <Link key={3} to={AppRoutes.ROLLS} className="nav-item hover-line">
                                <li className="nav-link">
                                        <img
                                            src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-rolls.svg"
                                            alt="Роли"
                                        />
                                        <span>Роли</span>
                                </li>
                            </Link>
                            <Link key={4} to={AppRoutes.SETS} className="nav-item hover-line">
                                <li className="nav-link">
                                        <img
                                            src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-sets.svg"
                                            alt="Сети"
                                        />
                                        <span>Сети</span>
                                </li>
                            </Link>
                            <Link key={5} to={AppRoutes.DRINKS} className="nav-item hover-line">
                                <li className="nav-link">
                                        <img
                                            src="https://monosushi.com.ua/wp-content/uploads/2020/10/nav-img-drinks.svg"
                                            alt="Напої"
                                        />
                                        <span>Напої</span>
                                </li>
                            </Link>
                            <Link key={6} to={AppRoutes.SAUCES} className="nav-item hover-line">
                                <li className="nav-link">
                                        <img
                                            src="https://monosushi.com.ua/wp-content/uploads/2021/09/icon.svg"
                                            alt="Соуси"
                                        />
                                        <span>Соуси</span>
                                </li>
                            </Link>
                            {/* Burger menu */}
                            <li className={!burger ? "burger__menu hover-line" : "burger__menu"} onClick={changeActive} ref={menuRef}>
                                <a>
                                    <div></div>
                                    <svg className={!burger ? 'ham hamRotate ham8' : 'active ham hamRotate ham8'} viewBox="0 0 100 100" width="80">
                                        <path
                                                className="line top"
                                                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
                                        <path
                                                className="line middle"
                                                d="m 30,50 h 40" />
                                        <path
                                                className="line bottom"
                                                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
                                    </svg>
                                </a>

                                {burger &&
                                    <ul className="menu__burger-list" >
                                    <li><a><div>Доставка та оплата</div></a></li>
                                    <li><a><div>Про нас</div></a></li>
                                    <li><a href="#"><div>Акції</div></a></li>
                                </ul>}
                            </li>

                            {/* Call */}
                            <li className="nav-item call">
                                <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/phone.svg" alt="" />
                                <p>Ми зателефонуємо</p>
                            </li>

                            {/* Header info */}
                            <li className="header-info">
                                <a href="tel:0978780837" className="header-phone">(097) 878 08 37</a>
                                <div className="header-work-time">
                                    <span>Працюємо з </span>
                                    <b>11:00</b>
                                    <span> до </span>
                                    <b>23:59</b>
                                </div>
                            </li>
                            
                            {/* Cabinet */}
                            <li className="header-user hover-line" >
                                <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/user.svg" alt="" />
                            </li>

                        </ul>

                        {/* Busket */}
                        <div className="header-basket">
                        <i>
                            <img src="https://monosushi.com.ua/wp-content/themes/monosushi/img/basket.svg" alt="" />
                            <span> 0 </span>
                        </i>
                        <div className="basket-price">
                            <b className="card-total-price"> 0 </b>
                            <span> грн</span>
                        </div>
                    </div>
                    </div>
                </Container>              
            </nav>
        </header>
    );
}

export default Navbar;