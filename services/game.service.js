import axios from 'axios'

export const getWords = () => {
    return axios.get('https://random-word-api.herokuapp.com/word?number=5').then((response) => response.data)
}
