import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../container/Home"
import Show from "../container/Show"
import Menu from "../container/Menu"
import SignIn from "../container/SignIn"
import SignUp from "../container/SignUp"
import Shop from "../container/Shop"
import Buy from "../container/Buy"



export const MyRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/shop/:id" element={<Shop />} />
                    <Route path="/buy/:id/:userid" element={<Buy />} />
                    <Route path="/show/:userid" element={<Show />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

