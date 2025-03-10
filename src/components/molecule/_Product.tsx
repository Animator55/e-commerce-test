import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../assets/_product.css"

type Props = {
    el: {image: string, name: string, price: string} 
    height: string
}

export default function Product({ el, height }:Props) {
    return <li
        className="product_block"
        key={Math.random()}
    >
        <img 
        style={{
            background:el.image,
            height: height
        }}
        // src={el.image}
        ></img>
        <div className="action-zone">
            <div className="action_zone--content">
                <h4>{el.name}</h4>
                <p>{el.price}</p>
            </div>
            <button>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    </li>
}