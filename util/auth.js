import axios from 'axios'

const API_KEY = 'AIzaSyC2HuA3L0cl97KRwcBeyBeE_9KAfRL4P9A'

export async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true 
    })

    console.log(response.data)
}

export async function createUser(email, password) {
    await authenticate('signUp', email, password)
}

export async function login(email, password) {
    return authenticate('signInWithPassword', email, password)
}