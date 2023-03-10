import {deleteUser} from "./action"

export const deleteUserAction = (id) => {
    return  (dispatch) => {
       fetch(`http://localhost:5000/postfoods/${id}`, {method: "DELETE"})
            .then(response => {
                dispatch(deleteUser(id));
            })
            
    }
}
