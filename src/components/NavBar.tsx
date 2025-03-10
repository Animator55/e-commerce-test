import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../assets/navbar.css"
import { faMagnifyingGlass, faT } from "@fortawesome/free-solid-svg-icons"

export default function NavBar() {
    const points = [
        "Top",
        "Categories",
        "Best",
        "Featured",
        "News",
        "Clients",
        "Contact",
    ]

    return <nav className="nav-bar">
        <h3>
            <FontAwesomeIcon icon={faT} />
            echPill
        </h3>

        <ul className="navigation-list">
            {points.map(id => {
                return <a key={Math.random()} href={"#" + id}>{id}</a>
            })}
        </ul>
        <button><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <button className="--sign-in btn">Sign Up</button>
    </nav>
}