import {  SAVE } from "./Types"
import { SIGN_IN } from "./Types"
import { DELETE } from "./Types"

export const change = (x, y) => {
  return {
    type: "change",
    index: x,
    b: y
  }
}


export const save = (value, url, userid, count,price) => {
  return {
    type: SAVE,
    value,
    url,
    userid,
    count,
    price
  }
}

export const signin = (value) => {
  return {
    type: SIGN_IN,
    value
  }
}

export const deleteUser =(id)=>{
  return{
    type:DELETE,
    id
  }
}

