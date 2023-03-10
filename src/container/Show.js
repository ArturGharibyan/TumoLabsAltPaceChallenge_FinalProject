import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import Showitem from "./showitem"
import { deleteUserAction } from "../store/data/delete"

const Show = () => {
    const params = useParams()
    const [info, setInfo] = useState([])
    const dispatchdelete = useDispatch()
    let val = 0;


    useEffect(() => {
        fetch("http://localhost:5000/postfoods")
            .then((response) => response.json())
            .then((response) => setInfo(response))
    }, [])


    const remove = (id) => {
        setInfo(info.filter((e) => e.id !== id))
    }


    val = info.map((e) => { return e.price })
    val = val.toString().split(",")
        .map((e) => { return e })
        .filter((e) => { return e !== "" })
        .map((e) => { return Number(e) })
        .reduce((a, b) => Math.ceil(a + b), 0)



    return (
        <div className="show">
            <h1>show</h1>
            <div className="your_total_div">
                <h1 >your total is {val} $</h1>
            </div>
            {
                info.map((e, i) => {
                    if (e.userid === params.userid) {
                        return (
                            <div className="ProductForms2" key={i}>
                                <Showitem foods={e} delet={() => {
                                    dispatchdelete(deleteUserAction(e.id))
                                    remove(e.id)
                                }} />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Show