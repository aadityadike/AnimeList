import { Fetchdata } from "../../store/fetchedStore";
import graphqlClient from "../client/public.client";
import anilistConfigs from "../configs/anilist.configs";

const GET_ANIME_QUERY = `
query($NAME: String, $TYPE: MediaType){
  Page(page:1, perPage:3){
    media(search: $NAME, type: $TYPE){
      title {
        romaji
        english
        userPreferred
      },
      id,
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

export async function getAnime(name, dispatch) {
  try {
    const response = await graphqlClient.post("", {
      query: GET_ANIME_QUERY,
      variables: {
        NAME: name,
        TYPE: anilistConfigs.mediaType.anime,
      },
    });
    console.log("here is response : ", response);
    // Handle the response data here.
    dispatch(Fetchdata.getFetchData(response));
  } catch (error) {
    // Handle errors here.
    console.error("Error fetching user data:", error);
  }
}
