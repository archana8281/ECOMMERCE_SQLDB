
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping ,faUser} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
function Header (){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/login")
    }
    return(
        <>
        <div className="container"> 
        <div className="header">
        <a href="/"><img src="/images/shop.png" alt="loading" /></a>
        <input type="search" name="search" id="" placeholder="  Serch for products"/>
        <div className="fa"><FontAwesomeIcon icon={faUser} /></div>
        <div className="fa"><a href="/cartpg"><FontAwesomeIcon icon={faCartShopping} /></a></div>
        <button onClick={handleClick}>login</button>
        </div>
        </div>
        </>
    )
}
export default Header;