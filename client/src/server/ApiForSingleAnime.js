const ApiForSingleAnime = (id) => {
  let query = `
    query($id: Int){
        Media(id: $id, type: ANIME){
          title {
            romaji
            english 
            native
            userPreferred
          },
          id,
          status,
          description,
          episodes,
          bannerImage,
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
        }`

  let variables = {
    id: id
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

export default ApiForSingleAnime

