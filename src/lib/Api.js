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
    name: "demon slayer"
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


export const Api = fetch(url, options)

