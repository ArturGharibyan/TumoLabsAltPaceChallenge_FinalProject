import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const SignUp = () => {

    const info = useSelector(res => res)
    const [config, setConfig] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const [passworddirty, setpassworddirty] = useState(false)
    const [passworderror, setPassworderror] = useState("Fill the password please!")
    const [emailDirty, setEmaildirty] = useState(false)
    const [emailerror, setEmailerror] = useState("please enter an email address")
    const [valid, setValid] = useState(false)


    useEffect(() => {

        if (emailerror || passworderror) {
            setValid(false)
        }
        if (config.email && config.password) {
            setValid(true)
        } else {
            setValid(false)
        }


    }, [passworderror, emailerror, config.email, config.password])


    const blurhandler = (e) => {
        switch (e.target.name) {
            case "email":
                setEmaildirty(true)
                break;
            case "password":
                setpassworddirty(true)
                break;
        }
    }

    const emailvalidate = (e) => {
        setConfig({ ...config, email: e.target.value })
        let filter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!filter.test(String(e.target.value)) || e.target.value > 250) {
            setEmailerror("this email incorect")

        } else {
            setEmailerror("")
        }
    }
    const passwordvalide = (e) => {
        setConfig({ ...config, password: e.target.value })
        const caseRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/
        if (!caseRegex.test((e.target.value))) {
            setPassworderror("incorect password")
        } else {
            setPassworderror("")
        }
    }


    let us = info.reducer.users.find(e => e.email == config.email && e.password == config.password)
    const to = () => {
        if (us) {
            navigate("/shop/" + us.id)
        } else {
            alert("Error")
        }
    }



    return (
        <div className="signup">
            <div className="signupChild">
                <div className="signupinputs">
                    <div>
                        <label className="form-labels">Email</label>
                    </div>
                    <input placeholder="email" name="email" onChange={(e) => emailvalidate(e)} onBlur={e => blurhandler(e)} value={config.email}></input>
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
                <div className="signupinputs">
                    <div>
                        <label className="form-labels">Password</label>
                    </div>
                    <input placeholder="password" name="password" onChange={(e) => passwordvalide(e)} onBlur={e => blurhandler(e)} value={config.password}></input>
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
                <div className="button2">
                    <button disabled={!valid} onClick={() => to()}>SignUp</button>
                </div>
            </div>
        </div>

    )
}

export default SignUp