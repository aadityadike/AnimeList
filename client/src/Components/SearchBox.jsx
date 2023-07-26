import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getAnime } from "../api/modules/media.api";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Search = () => {
  const valRef = useRef("");
  const dispatch = useDispatch();
  const userInput = () => getAnime(valRef.current.value, dispatch);

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
