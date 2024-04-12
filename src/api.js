import axios from 'axios'

const searchImage = async(term) => {
    const url ='https://api.unsplash.com/search/photos/?client_id=nDEjJKiGaSxeCRAWm-pZRNDDc5U0wkqFjCs83p20m2E'
    const response = await axios.get(url, {
        params: {
            query: 'cars'
        }
    })
    console.log(response)
}

export default searchImage