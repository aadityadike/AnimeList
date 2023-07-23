const Api = (name) => {
  let query = `
  query($name: String, $type: MediaType){
      Page(page:1, perPage:3){
      media(search: $name, type: $type){
        title {
          romaji
          english
          native
          userPreferred
        },
        id,
        bannerImage
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
      }  
    }`

  const variables = {
    name: name,
    type: "ANIME"
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

