import { useParams } from "react-router-dom"
import { save } from "../store/data/action"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import Shopnavigate from "./shopnavigate"
import Foodcount from "./foodcount"
import { CircularProgress } from "@mui/material"


const Buy = () => {
    const params = useParams()
    const dispatch = useDispatch()
    let [count, setCount] = useState(1)
    const [info, setInfo] = useState([])
    let [price, setprice] = useState()
    const [totalprice, setttotalprice] = useState()
    let defaultprice;





    useEffect(() => {
        fetch("http://localhost:5000/foods")
            .then((respose) => respose.json())
            .then((response) => setInfo(response))
    }, [])


    

    const plus = () => {
        count++
        setCount(count)
        setprice(info.map((e) => {
            if (e.id == params.id) {
                return count * e.price
            }
        }))
    }


    return (
        <div >
            {
                info.length === 0 ? <CircularProgress /> :
                    info.map((e, i) => {
                        if (e.id == params.id) {
                            return (
                                <div key={i} className="options">
                                    <p className="buyproductname">{e.name}</p>
                                    <div>
                                        <div className="buyimgDiv">
                                            <img className="buyPhotos" src={"http://localhost:3000/img/" + e.url} />
                                        </div>
                                        {price ? <h6 className="productPrice">Price {price} $</h6> : <h6 className="productPrice" >Price  {e.price} $</h6>}
                                    </div>
                                    <div className="buttons">
                                        <Button className="actep" onClick={() => dispatch(save(e.id, e.url, params.userid, count, price))}>Actept</ Button>
                                        <Button className="plus" onClick={() => plus()}>+</Button>
                                        <Shopnavigate />
                                        <span style={{
                                            width: "20px",
                                            height: "20px",
                                            fontSize: "12px",
                                            color: "white",
                                        }}><Foodcount /></span>
                                    </div>
                                    <div className="counts">
                                        <h1> count {count}</h1>
                                    </div>
                                </div>

                            )
                        }
                    })
            }

        </div>
    )
}

export default Buy