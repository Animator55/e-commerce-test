import "../assets/categories.css"

const categories : {name: string, image: string}[]=[
    {name: "Smart Phone", image: "lightpink"},
    {name: "Laptop", image: "lightblue"},
    {name: "Headphones", image: "gray"},
    {name: "Smart Watch", image: "lightgray"},
]


export default function Categories (){
    return <ul className="block --categories" id="Categories">
        {categories.map(el=>{
            return <li
                key={Math.random()} 
                className="categories_block"
            >
                <img 
                style={{backgroundColor: el.image}}
                // src={el.image} 
                alt="" 
                />
                <h3>{el.name}</h3>
            </li>
        })}
    </ul>
}