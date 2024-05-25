import { navbarMenu } from '../../utils';
import "./Navbar.css"

export default function Header() {



    return (
        <>
            <header className="header">
                <div className="row">
                    <h3 className="nav_text">CLOUDBUDGET</h3>
                    <ul className="list">
                        {navbarMenu.map((value) => {
                            return (
                                <>
                                    <li className="list_item">{value.name}</li>
                                </>
                            )
                        })}
                    </ul>
                    <button className='btn'>LOGIN</button>
                </div>
                <div className="text_bottom">
                    <h1 className="text_info">CloudBudget</h1>
                    <p className="text_paragraph">Cloud budget management for everyone. Only <br /> €69.95 a Month After a 7 Day Trial of <br />
                        Up to €4.99</p>
                    <button className="btn_head">Sign up</button>
                </div>
            </header>
        </>
    )
}