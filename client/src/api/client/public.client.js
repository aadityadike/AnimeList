import axios from "axios";

const baseURL = "https://graphql.anilist.co";

const graphqlClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    }
});

graphqlClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        throw err.response.data;
    }
);

export default graphqlClient;
