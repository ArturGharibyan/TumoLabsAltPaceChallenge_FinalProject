import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Shopnavigate = () => {
    const params = useParams()

    
    return (
        <ul className="shopping_cart">
            <li>
                <Link style={{ textDecoration: "none", }} to={"/show/" + params.userid}><img style={{
                    width: "40px",
                    height: "40px"
                }} src={"http://localhost:3000/img/icons8-shopping-cart-48.png"} /></Link>
            </li>
        </ul>
    )
}

export default Shopnavigate