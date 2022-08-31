

import Navbar from "../nav";
import {FaPinterest} from "react-icons/fa"
import {FaTelegram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
function Footer() {
    return ( 
       <>
       
        <footer className="footer">
            
            <div className="footerH1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/UN_emblem_gold.svg/1207px-UN_emblem_gold.svg.png" />
                <h1>United Nations Global Movement</h1>
                <p>A call to companies to align strategies and operations with universal principles on human rights, labour, environment and anti-corruption, and take actions that advance societal goals.</p>
            </div>
            <div className="navfooter">
                <h3 >SEARCH EASY</h3>
            <Navbar/>
            </div>
            <div className="QUICKLINKS">
                <h3>QUICKLINKS</h3>
                <a href="https://www.unglobalcompact.org/what-is-gc/mission/principles" >The ten principles</a>
                <a href="https://www.unglobalcompact.org/sdgs"> Sustainable development goals</a>
                <a href="https://www.unglobalcompact.org/what-is-gc/participants"> Our participants</a>
                <a href="https://www.unglobalcompact.org/what-is-gc/our-work/all"> All our work</a>
                <a href="https://www.unglobalcompact.org/take-action/action"> What you can do</a>
                <a href="https://www.unglobalcompact.org/about/opportunities">Careers & opportunities</a>
                <a href="https://www.unglobalcompact.org/participation/join/application">Join now</a>
                <a href="https://www.unglobalcompact.org/participation/report/cop/create-and-submit">Submit your CoP</a>
            </div>
            <div className="follow_us">
                <h3>FOLLOW US</h3>
                <a> <FaPinterest/></a>
                <a> <FaTelegram/></a>
                <a> <FaTwitter/></a>
                <a> <FaFacebook/></a>
                <a> <FaLinkedin/></a>
             
            </div>

        </footer>
        </>
     );
}

export default Footer;