import axios from "axios"

let LOGIN_URL="http://localhost:5000/api/login"

export let signIn = async(login)=> {
    let result = await axios.post(`${LOGIN_URL}/signin`,login);
    console.log(result)
    return result
}

export let signUp = async(login)=> {
    let result = await axios.post(`${LOGIN_URL}/signup`,login);
    return result
}