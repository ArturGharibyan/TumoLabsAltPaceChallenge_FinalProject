import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { signin } from "../store/data/action"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


const SignIn = () => {
    
    const info = useSelector(res => res.reducer)
    const dispatch = useDispatch()
    const [user, setUser] = useState({ id: Date.now(), name: "", surname: "", email: "", password: "" })
    const navigate = useNavigate()
    const [nameDirty, setNameDirty] = useState(false)
    const [nameerror, setNameerror] = useState("minimum 3 characters")
    const [surnameDirty, setSurnamedirty] = useState(false)
    const [surnameerror, setSurnameerror] = useState("minimum 3 characters")
    const [passworddirty, setpassworddirty] = useState(false)
    const [passworderror, setPassworderror] = useState("Fill the password please!")
    const [emailDirty, setEmaildirty] = useState(false)
    const [emailerror, setEmailerror] = useState("please enter an email address")
    const [valid, setValid] = useState(false)



    useEffect(() => {

        if (nameerror || surnameerror || emailerror || passworderror) {
            setValid(false)
        }
        if (user.name && user.surname && user.email && user.password) {
            setValid(true)
        } else {
            setValid(false)
        }


    }, [nameerror, surnameerror, emailerror, user.name, user.surname, user.email, user.password])


    const blurhandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true)
                break;
            case "surname":
                setSurnamedirty(true)
                break;
            case "email":
                setEmaildirty(true)
                break;
            case "password":
                setpassworddirty(true)
                break;
        }
    }
    const namevalide = (e) => {
        setUser({ ...user, name: e.target.value })
        if (e.target.value.length < 3) {
            setNameerror("minimum 3 characters")
        } else {
            setNameerror("")
        }
    }
    const surnamenamevalide = (e) => {
        setUser({ ...user, surname: e.target.value })
        if (e.target.value.length < 3) {
            setSurnameerror("minimum 3 characters")
        } else {
            setSurnameerror("")
        }
    }


    const emailvalidate = (e) => {
        setUser({ ...user, email: e.target.value })
        let filter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (e.target.value.match(!filter)) {

            setEmailerror("this email incorect")
        } else {
            setEmailerror("")
        }
    }


    const passwordvalide = (e) => {
        setUser({ ...user, password: e.target.value })
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
        if (!passwordRegex.test(e.target.value)) {
            setPassworderror("must contain symbols and numbers")
        }
        else {
            setPassworderror("")
        }
    }




    return (
        <div className="signin">
            <div className="signinchild">

                <div >
                    <label className="form-labels">Name</label>
                    <div className="inputs">
                        <input placeholder="name" name="name" onChange={(e) => namevalide(e)} onBlur={e => blurhandler(e)} value={user.name}  ></input>
                        {(nameDirty && nameerror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px"
                        }} >{nameerror}</span>}
                    </div>

                </div>
                <div>
                    <label className="form-labels">Surname</label>
                    <div className="inputs">
                        <input placeholder="surname" name="surname" onChange={(e) => surnamenamevalide(e)} onBlur={e => blurhandler(e)} value={user.surname}  ></input>
                        {(surnameDirty && surnameerror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px",
                        }}>{surnameerror}</span>}

                    </div>
                </div>
                <div>
                    <label className="form-labels">Email</label>
                    <div className="inputs">
                        <input placeholder="email" name="email" onChange={(e) => emailvalidate(e)} onBlur={e => blurhandler(e)} value={user.email}  ></input>
                        {(emailDirty && emailerror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px"
                        }}>{emailerror}</span>}

                    </div>
                </div>
                <div>
                    <label className="form-labels">Passwors</label>
                    <div className="inputs">
                        <input type="password" name="password" placeholder="password" onChange={(e) => passwordvalide(e)} onBlur={e => blurhandler(e)} value={user.password}  ></input>
                        {(passworddirty && passworderror) && <span style={{
                            color: "red",
                            fontSize: "12px",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            marginLeft: "13px"
                        }}>{passworderror}</span>}

                    </div>
                </div>
                <div className="button"><button disabled={!valid} onClick={(e) => {
                    dispatch(signin(user))
                    setUser({ name: "", surname: "", email: "", password: "" })
                    navigate("/signup")
                }}
                >SignIn</button></div>
            </div>
        </div>
    )
}

export default SignIn