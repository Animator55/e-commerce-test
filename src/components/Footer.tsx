import {faMapMarker, faPhone, faT } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/footer.css"

export default function Footer () {
    return <footer id="Contact" className="block">
        <section className="footer">

            <div className="footer-column">
                <h2>
                    <FontAwesomeIcon icon={faT}/>
                    echPill
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni totam.</p>
            </div>
            <div className="footer-column">
                <h2>About</h2>
                <p>Home</p>
                <p>Terms</p>
                <p>Privacy & Policy</p>
                <p>Finance</p>
            </div>
            <div className="footer-column">
                <h2>Support</h2>
                <p>Support</p>
                <p>Service</p>
                <p>Blog</p>
                <p>Customer</p>
            </div>
            <div className="footer-column">
                <h2>Contact Us</h2>
                <div>
                    <FontAwesomeIcon icon={faMapMarker}/>
                    <p>Random, Ubication, Some Country</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone}/>
                    <p>+1 67 482 483</p>
                </div>
            </div>
        </section>
        <p className="paragraph">All Rights Reserved by Nahuel Ibarra</p>
    </footer>
}