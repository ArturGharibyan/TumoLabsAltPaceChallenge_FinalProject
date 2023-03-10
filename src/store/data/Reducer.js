import { data } from "./State";
import { SAVE, SIGN_IN} from "./Types"

const reducer = (state = data, action) => {
    switch (action.type) {
        case SIGN_IN:
            state.users.push(action.value)
            break;
        case SAVE:
            const foods = { value: action.value, url: action.url, userid: action.userid, count: action.count,price:action.price }
            fetch("http://localhost:5000/postfoods", {
                method: "POST", headers: { "Content-type": "application/json" },
                body: JSON.stringify(foods)
            })
    }
    return state
}

export default reducer



