import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../assets/header.css"

const clientsList: { image: any, name: string, description: string, price: string }[] = [
    { "image": "white", "name": "Apple iPhone 16 Pro", "description": "Smartphone de 128GB con pantalla Super Retina XDR de 6,1 pulgadas, chip A18 Bionic y sistema de cámara Pro.", "price": "1.167 €" },
    { "image": "white", "name": "Apple iPad 10,9\" (2024) Wi-Fi (10ª Gen)", "description": "Tablet con pantalla de 10,9 pulgadas, chip A14 Bionic y 64GB de almacenamiento.", "price": "369 €" },
    { "image": "white", "name": "Apple AirPods 4", "description": "Auriculares inalámbricos Bluetooth con estuche de carga y cancelación activa de ruido.", "price": "149 €" },
    { "image": "white", "name": "Samsung Galaxy S25", "description": "Smartphone con pantalla AMOLED de 6,2 pulgadas, procesador Exynos 2200 y cámara triple de 50MP.", "price": "799 €" },
]


export default function Header() {
    const [carrouselIndex, setIndex] = React.useState(0)


    const QuoteItem = ({ index }: { index: number }) => {
        const quoteData = clientsList[index]
        return <div className="header-item">
            <img
                style={{backgroundColor: quoteData.image}}
                // src={quoteData.image}
            />
            <div className="header-content">
                <h3 className="header-title">{quoteData.name}</h3>
                <p className="header-description">{quoteData.description}</p>
                <p className="header-price">{quoteData.price}</p>
                <button className="btn">Shop Now</button>
            </div>
        </div>
    }
    const prevIndex = carrouselIndex - 1 === -1 ? (clientsList.length - 1) : (carrouselIndex - 1)
    const nexIndex = carrouselIndex + 1 === clientsList.length ? 0 : (carrouselIndex + 1)

    const move = (index: number, toLeft: boolean) => {
        let carrousel = document.querySelector(".carrousel") as HTMLDivElement
        if (carrousel) carrousel.classList.add(toLeft ? "rotate-toLeft" : "rotate-toRight")
        setTimeout(() => {
            setIndex(index)
            if (carrousel) carrousel.classList.remove(toLeft ? "rotate-toLeft" : "rotate-toRight")
        }, 300)
    }

    return <ul className="header-carrousel">
        <button className="router-buttons" onClick={() => { move(prevIndex, true) }}>
            <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <QuoteItem index={prevIndex} />
        <QuoteItem index={carrouselIndex} />
        <QuoteItem index={nexIndex} /> 
        <button className="router-buttons" onClick={() => { move(nexIndex, false) }}>
            <FontAwesomeIcon icon={faCaretRight} />
        </button>
    </ul>
}