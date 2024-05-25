import image1 from "../../img/rasm.jpg"
import "./Header.css"

export default function Header() {
    return (
        <div className="container">
                <div className="border">
                    <div className="photo-info-1">
                    <div className="text-1">Easy to Use Cloud Budget Management Software</div>
                    <div className="text-2">Our software is made so you can access and manage your budget and expenses online at
                        any
                        time from any device. It provides detailed income and expense reports with graphs so you can easilly
                        see
                        your spending patterns and budget at a glance. Read below to find out more.
                        <div className="text-btn">Learn More</div>
                    </div>
                  </div>
                    <div className="photo-info-2">
                        <div className="photo">
                                <div className="icon">
                                    <img src={image1} alt="" />
                                        <div className="play_icon">
                                            <i className="fa-solid fa-play"></i>
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}