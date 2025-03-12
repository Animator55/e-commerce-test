import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../assets/_product.css"

type Props = {
    el: {image: string, name: string, category: string, price: string} 
}
export default function ProductHorizontal ({el}: Props){
    return <li
            className="product_block --horizontal"
            key={Math.random()}
        >
            <img 
            // style={{
            //     background:el.image
            // }}
            src={el.image}
            ></img>
            <div className="action-zone">
                <div className="action_zone--content">
                    <p>{el.category}</p>
                    <h4>{el.name}</h4>
                    <p>{el.price}</p>
                </div>
                <button>
                    <FontAwesomeIcon icon={faCaretRight} />
                </button>
            </div>
        </li>
}