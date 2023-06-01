import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Api from "../lib/Api";

const AppShell = () => {
  const valRef = useRef("");
  const [title, setTitle] = useState("");
  const [animeData, updateAnimeData] = useState({});

  const fetchReq = (animeApi) =>
    animeApi
      .then((res) =>
        res.json().then((json) => (res.ok ? json : Promise.reject(json)))
      )
      .then((data) => updateAnimeData(data))
      .catch((err) => console.error(err));

  //user input from textfield
  const userInput = () => {
    const animeApiApi = Api(valRef.current.value);
    fetchReq(animeApiApi);
  };

  // Optional chaining: To avoid errors when accessing nested properties like animeData.data.Media.title.english, you can use optional chaining (?.) to handle cases where the properties are not defined.
  useEffect(() => {
    setTitle(animeData?.data?.Media?.title?.english);
  }, [animeData]);

  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        inputRef={valRef}
      />
      <Button variant="outlined" size="large" onClick={userInput}>
        click me
      </Button>
      <div>{title}</div>
    </div>
  );
};

export default AppShell;
