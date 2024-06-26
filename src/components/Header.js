import { CDN_URL } from "../util/constants";
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                 <img className="logo" 
                     src={CDN_URL} />    
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;