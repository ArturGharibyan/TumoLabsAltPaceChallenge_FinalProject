import { useEffect, useState } from "react"
import Button from "./Button"

const Showitem = ({ foods, delet }) => {


    return (
        <div>
            <div className="showimgDiv">
                <img src={"http://localhost:3000/img/" + foods.url} style={{
                    width: "200px",
                    height: "200px"
                }} />
            </div>
            <div className="option2">
                <h1>count {foods.count}</h1>
                <h6 className="price_h6">Price {foods.price} $</h6>
                <Button foods={foods} delet={delet} />
            </div>

        </div>
    )
}


export default Showitem