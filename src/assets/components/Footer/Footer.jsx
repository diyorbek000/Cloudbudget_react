import "./Footer.css";

export default function Footer() {
    return (
        <div className="container">



            <div className="footer-menu">

                <div className="footer-input">
                    <div className="footer1">
                        <h1 className="footer__header">Contact</h1>
                        <p className="footer__paragraph">Questions or concerns? Just fill out the form below and our support <br /> team will get back to you within 24 hours</p>
                    </div>
                    <div className="footer2">
                        <div className="footer_input">
                            <input className="name1-input" type="text" placeholder="     First Name" />
                            <input className="name2-input" type="text" placeholder="     Last Name" />
                        </div>
                        <input className="number-input" type="text" placeholder="     Phone Number" /><br />
                        <input className="servis-input" type="text" placeholder="     Select Service" /><br />
                        <button className="input-btn">SUBMIT NOW</button>
                    </div>
                </div>

                <div className="footer-part">

                    <div className="footer-1">
                        <div className="footer-header-1">Address</div>
                        <p className="footer-paragraph-1">Pipang Ltd, Griva Digeni,<br />
                            81-83 Jacovides Tower, 1st Floor<br />
                            1090 Picosia USA
                        </p>
                        <div className="footer-date">Copyright 2018 CloudBudget</div>
                    </div>

                    <div className="footer-2">
                        <div className="footer-header-2">Services</div>
                        <div className="footer-bar">Overview <br />
                            Features <br />
                            Technology <br />
                            Terms & Conditions <br />
                            Privacy
                        </div>
                    </div>

                    <div className="footer-3">
                        <div className="footer-header-3">Get in Touch</div>
                        <div className="footer-email">info@cloudbudget.com <br />
                            +1 844-721-7120
                        </div>
                        <div className="footer-icons">
                            <div className="footer-icon"></div>
                        </div>
                    </div>

                    <div className="footer-4">
                        <div className="footer-header-4">We Support</div>
                    </div>
                </div>
            </div>
        </div>
    )
}