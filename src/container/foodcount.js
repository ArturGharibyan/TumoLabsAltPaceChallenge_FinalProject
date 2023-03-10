import {  useSelector } from "react-redux"

const Foodcount = () => {
    const data = useSelector(res => res.reducer.foodarray.length)

    return (
        <>
            <p>{data}</p>
        </>
    )
}

export default Foodcount