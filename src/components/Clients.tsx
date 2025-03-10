import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "../assets/clients.css"
import person1 from "../assets/images/people/person1.jpg"
import person4 from "../assets/images/people/person4.jpg"
import person5 from "../assets/images/people/person5.jpg"
import person6 from "../assets/images/people/person6.jpg"
import person7 from "../assets/images/people/person7.jpg"
import person8 from "../assets/images/people/person8.jpg"
import person9 from "../assets/images/people/person9.jpg"

export default function Clients() {
    const [carrouselIndex, setIndex] = React.useState(0)

    const clientsList: { image: any, quote: string, name: string, description: string }[] = [
        {
            image: person1,
            quote: "The service was absolutely impeccable. I felt like royalty from the moment I stepped in.",
            name: "Emily Carter",
            description: "Frequent traveler, New York"
        },
        {
            image: person7,
            quote: "Best sleep I've had in months! The bed was so comfortable, and the atmosphere was so peaceful.",
            name: "Laura Chen",
            description: "Writer, Melbourne"
        },
        {
            image: person5,
            quote: "The breakfast buffet was divine. Fresh ingredients, amazing variety, and great coffee!",
            name: "Marco Rossi",
            description: "Food critic, Rome"
        },
        {
            image: person6,
            quote: "I've stayed in many luxury hotels, but this one felt like home. The warmth of the staff made all the difference.",
            name: "Ethan Walker",
            description: "Fashion designer, Paris"
        },
        {
            image: person4,
            quote: "Location is perfect, right in the heart of the city. Walkable distance to all major attractions.",
            name: "Samuel Kim",
            description: "Tourist, Seoul"
        },
        {
            image: person8,
            quote: "An absolute gem! The spa services were top-notch, and I left feeling completely rejuvenated.",
            name: "Olivia White",
            description: "Wellness coach, Toronto"
        },
        {
            image: person9,
            quote: "I felt incredibly safe and well taken care of throughout my stay. Perfect for solo travelers!",
            name: "Isabelle Dupont",
            description: "Solo adventurer, Cape Town"
        }
    ];

    const QuoteItem = ({ index }: { index: number }) => {
        const quoteData = clientsList[index]
        return <div className="quote-item">
            <img src={ quoteData.image}/>
            <div className="quote-content">
                <p>"{quoteData.quote}"</p>
                <h5>{quoteData.name}</h5>
                <p className="title">{quoteData.description}</p>
            </div>
        </div>
    }
    const prevIndex = carrouselIndex - 1 === -1 ? (clientsList.length - 1) : (carrouselIndex - 1)
    const nexIndex = carrouselIndex + 1 === clientsList.length ? 0 : (carrouselIndex + 1)

    const move = (index: number, toLeft: boolean)=>{
        let carrousel = document.querySelector(".carrousel") as HTMLDivElement
        if(carrousel) carrousel.classList.add(toLeft ? "rotate-toLeft": "rotate-toRight")
            setTimeout(()=>{
                setIndex(index)
                if(carrousel) carrousel.classList.remove(toLeft ? "rotate-toLeft": "rotate-toRight")
        }, 300)
    }

    return <section className="block clients-block" id="Clients">
        <h4>What our <b style={{color: "var(--cmain)"}}>Clients</b> say</h4>
        <div className="carrousel">
            <button onClick={() => { move(prevIndex, true) }}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <QuoteItem index={prevIndex} />
            <QuoteItem index={carrouselIndex} />
            <QuoteItem index={nexIndex} />
            <button onClick={() => { move(nexIndex, false) }}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    </section>
}