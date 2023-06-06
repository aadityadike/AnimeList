import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Fetchdata } from "../store/fetchedStore";
import Api from "../lib/Api";

const AppShell = () => {
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
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        inputRef={valRef}
      />
      <Button variant="outlined" size="large" onClick={userInput}>
        click me
      </Button>
    </div>
  );
};

export default AppShell;
