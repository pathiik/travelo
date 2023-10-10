import footerPopularData from "./footerPopularData";
import footerInstagramData from "./footerInstagramData"

export default function Footer() {

    const hoverColor = (e) => {
        e.target.style.color = '#ff4a52'
    }

    const normalColor = (e) => {
        e.target.style.color = '#aab1b7'
    }

    return (
        <footer className="footer-sec">
            <div className="container">
                <div className="footer-wrapper">

                    <div className="footer-top">

                        <div className="footer-top-left">
                            <img src="assets/footerAssets/footerLogo.webp" alt="Trevlo Logo" />
                            <div className="footer-top-left-details">
                                <p>5th flora, 700/D kings road, green</p>
                                <p>lane New York-1782 </p>
                                <p><a href="tel:+103678262567">+10 367 826 2567</a></p>
                                <p><a href="mailto:contact@carpenter.com">contact@carpenter.com</a></p>
                            </div>

                            <div className="footer-top-left-socials">
                                <a className='footer-t-l-social' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-facebook-f" style={{ color: '#aab1b7' }}></i></a>

                                <a className='footer-t-l-social' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-x-twitter" style={{ color: '#aab1b7' }}></i></a>

                                <a className='footer-t-l-social' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-instagram" style={{ color: '#aab1b7' }}></i></a>

                                <a className='footer-t-l-social' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-pinterest-p" style={{ color: '#aab1b7' }}></i></a>

                                <a className='footer-t-l-social' href="#" onMouseOver={hoverColor} onMouseLeave={normalColor}><i class="fa-brands fa-youtube" style={{ color: '#aab1b7' }}></i></a>
                            </div>

                        </div>

                        <div className="footer-top-mid-1">
                            <h3 className="footer-top-title">Company</h3>
                            <ul className="footer-top-list">
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-mid-2">
                            <h3 className="footer-top-title">Popular Destination</h3>
                            <ul id="footer-top-mid-2-list" className="footer-top-list">
                                {footerPopularData.map((item) => {
                                    return (
                                        <li><a href="#">{item.destination}</a></li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="footer-top-right">
                            <h3 className="footer-top-title">Instagram</h3>
                            <div className="footer-top-right-images">
                                {footerInstagramData.map((item) => {
                                    return (
                                        <div className="footer-top-right-image">
                                            <a href="#"><img src={`assets/footerAssets/${item.pic}`} alt={item.alt} /></a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        
                    </div>

                    <div className="footer-bottom">
                        <hr id="footer-bottom-line" />
                        <p>Copyright &copy;2023 All rights reserved<br/><b>Pathik Bhattarai</b></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}