import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Api from "../server/Api";
import { useDispatch } from "react-redux";
import { Fetchdata } from "../store/fetchedStore";

const Search = () => {
  const valRef = useRef("");
  const dispatch = useDispatch();
  const fetchReq = (animeApi) =>
    animeApi
      .then((res) =>
        res.json().then((json) => (res.ok ? json : Promise.reject(json)))
      )
      .then((data) => dispatch(Fetchdata.getFetchData(data)))
      .catch((err) => console.error(err));

  const userInput = () => {
    const animeApi = Api(valRef.current.value);
    fetchReq(animeApi);
    return;
  };
  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="Enter Anime Name"
          id="fullWidth"
          inputRef={valRef}
          onInput={userInput}
        />
      </Box>
    </div>
  );
};

export default Search;
