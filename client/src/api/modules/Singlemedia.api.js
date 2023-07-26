import graphqlClient from "../client/public.client";

const GET_ANIME_QUERY = `
query($Id: Int){
  Page(page:1, perPage:1){
    media(id:$Id){
      title {
        romaji
        english
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
  }  
  }
  `;

export async function getAnimeWithId(id, setData) {
  try {
    const response = await graphqlClient.post("", {
      query: GET_ANIME_QUERY,
      variables: {
        Id: id
      },
    });
    // Handle the response data here.
    setData(response)
  } catch (error) {
    // Handle errors here.
    console.error("Error fetching user data:", error);
  }
}
