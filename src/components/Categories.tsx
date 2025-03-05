

const categories : {name: string, image: string}[]=[
    {name: "Smart Phone", image: ""},
    {name: "Laptop", image: ""},
    {name: "Headphones", image: ""},
    {name: "Smart Watch", image: ""},
]


export default function Categories (){
    return <ul className="block">
        {categories.map(el=>{
            return <li
                key={Math.random()}
            >
                <img src={el.image} alt="" />
                <h3>{el.name}</h3>
            </li>
        })}
    </ul>
}