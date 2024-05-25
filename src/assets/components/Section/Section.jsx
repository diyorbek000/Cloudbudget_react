import { Image } from "react-bootstrap";
import money from "../../img/money.jpg";
import phone from "../../img/rasm-2.jpg";
import software from "../../img/rasm-3.jpg";
import icon1 from "../../img/icon-1.png"
import icon2 from "../../img/icon-2.png"
import icon3 from "../../img/icon-3.png"
import icon4 from "../../img/icon-4.png"
import money_img from "../../img/money_img.jpg"
import "./Section.css"


export default function Section() {
    return (
        <div className="container">
            <div className="card-border">
                <h1 className="text-info">Features</h1>
                <div className="jpg-border">
                    <div className="card">
                        <div className="jpg">
                            <Image src={money} className="jpg-photo"></Image>
                        </div>
                        <div className="jpg-info">
                            <h1 className="jpg-header">Supports All Currencies and Cards</h1>
                            <p className="jpg-paragraph">We support all popular currencies and is fully customizable to add</p>
                            <div className="jpg-btn">Read More</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="jpg">
                            <Image src={phone} className="jpg-photo"></Image>
                        </div>
                        <div className="jpg-info">
                            <h1 className="jpg-header">Manage your expenses on the go</h1>
                            <p className="jpg-paragraph">You can access your account from anywhere in the world on any device</p>
                            <div className="jpg-btn">Read More</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="jpg">
                            <Image src={software} className="jpg-photo"></Image>
                        </div>
                        <div className="jpg-info">
                            <h1 className="jpg-header">Cloud Budget Management Software</h1>
                            <p className="jpg-paragraph">Our software is made so you can access and manage your budget</p>
                            <div className="jpg-btn">Read More</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="technology">
                <div className="technology-header">Technology</div>
            </div>
            <div className="technology-menu">

                <div className="technology-card">
                    <div className="technology-icon">
                        <Image src={icon1} className="icons"></Image>
                    </div>
                    <div className="technology-info">Cloud Storage</div>
                    <p className="technology-paragraph">Access your account from anywhere in the world on any device</p>
                </div>
                <div className="technology-card">
                    <div className="technology-icon">
                        <Image src={icon2} className="icons"></Image>
                    </div>
                    <div className="technology-info">Cloud Storage</div>
                    <p className="technology-paragraph">Access your account from anywhere in the world on any device</p>
                </div>
                <div className="technology-card">
                    <div className="technology-icon">
                        <Image src={icon3} className="icons"></Image>
                    </div>
                    <div className="technology-info">Cloud Storage</div>
                    <p className="technology-paragraph">Access your account from anywhere in the world on any device</p>
                </div>
                <div className="technology-card">
                    <div className="technology-icon">
                        <Image src={icon4} alt="icon-1" className="icons"></Image>
                    </div>
                    <div className="technology-info">Cloud Storage</div>
                    <p className="technology-paragraph">Access your account from anywhere in the world on any device</p>
                </div>
            </div>


            <div className="money">
                <div className="money-menu">
                    <div className="money-info-1">Stay focused on saving money</div>
                    <p className="money-paragraph">It is important to stay focused on saving money in any way you can. We help
                        you monitor your spending habits so you can easily spot and cut any unnecessary expenses. Simply
                        join today to get started!</p>
                </div>
                <div className="money-photo"><Image src={money_img} alt="" className="money-wallpaper"></Image>
                </div>
                <div className="app-icons">
                    <div className="money-icon"><i className="fa-brands fa-google-play"></i></div>
                    <div className="money-icon"><i className="fa-brands fa-app-store"></i></div>
                    <div className="money-icon"><i className="fa-brands fa-windows"></i></div>
                </div>
            </div>
        </div>
    )
}