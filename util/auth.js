import axios from 'axios'

const API_KEY = 'AIzaSyC2HuA3L0cl97KRwcBeyBeE_9KAfRL4P9A'

export async function createUser(email, password) {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
        { email, password, returnSecureToken: true }
    )

    console.log(response.data)
}