import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiForSingleAnime from "../server/ApiForSingleAnime";

const SingleAnime = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getData = ApiForSingleAnime(id);
    fetchReq(getData);
  }, []);

  const fetchReq = (animeApi) => {
    animeApi
      .then((res) =>
        res.json().then((json) => (res.ok ? json : Promise.reject(json)))
      )
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  };
  
  console.log(data.data?.Media.bannerImage);


  return (
    <section>
      <div>{<img src={data.data?.Media.bannerImage}></img>}</div>
      <div>
        <h1>{data.data?.Media?.title?.english}</h1>
        <p>{data.data?.Media?.description}</p>
      </div>
    </section>
  );
};

export default SingleAnime;
