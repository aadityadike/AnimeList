const Api = (name) => {
    let query = `
    query ($name: String){
        Media(search: $name, popularity_greater:95555){
            popularity
            title {
                english
            }
    }
}`

    const variables = {
        name: name
    }

    const url = 'https://graphql.anilist.co'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }

    return fetch(url, options)
}

export default Api

