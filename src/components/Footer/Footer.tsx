import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-top">
                    <a href="#" className="logo">
                        <img src="https://monosushi.com.ua/wp-content/uploads/2021/06/logo.svg" alt="" />
                    </a>
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#">Акції на суші</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Про нас</a>
                        </li>
                        <li className="menu-item">
                            <a href="#">Оферта</a>
                        </li>
                    </ul>
                    <div className="footer-info">
                        <div className="s-delivery-address">
                            <p>
                                <strong>Точки самовивозу</strong>
                            </p>
                            <ul>
                                <li>вул. Володимира Великого, 10в</li>
                                <li>вул. Чорновола, 95</li>
                                <li>вул. Зелена 204б</li>
                            </ul>
                        </div>
                        <div className="order-phone">
                            <p>
                                <strong>Оформити замовлення</strong>
                            </p>
                            <a href="tel:0978780837">
                                +380978780837
                            </a>
                        </div>
                        <div className="work-time">
                            <p>
                                <strong>Графік роботи</strong>
                            </p>
                            <p>
                                працюємо з 
                                <span>11:00</span>
                                до
                                <span>22:30</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        <p>© 2024 Monosushi</p>
                    </div>
                    <div className="pay-cards">
                        <div className="pay-card-item">
                            <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/pay-card-img-1.svg" alt="" />
                        </div>
                        <div className="pay-card-item">
                            <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/pay-card-img-2.svg" alt="" />
                        </div>
                        <div className="pay-card-item">
                            <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/pay-card-img-3.svg" alt="" />
                        </div>
                    </div>
                    <div className="social">
                        <span>Слідкуйте за нами</span>
                        <ul>
                            <li>
                                <a href="#" className="icon-btn">
                                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/facebook-icon.svg" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="icon-btn">
                                    <img src="https://monosushi.com.ua/wp-content/uploads/2020/10/instagram-icon.svg" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="develope">
                        <a href="#" target="_blank" className="footer-dev-logo">
                            <span><span className="createSites">Створення сайтів</span><span className="redstone"></span></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;