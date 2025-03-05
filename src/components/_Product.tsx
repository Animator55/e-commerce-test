import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {
    el: {image: string, name: string, price: string} 
}

export default function Product({ el }:Props) {
    return <li
        key={Math.random()}
    >
        <img src={el.image}></img>
        <div className="action-zone">
            <div>
                <h4>{el.name}</h4>
                <p>{el.price}</p>
            </div>
            <button>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    </li>
}