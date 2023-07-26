import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimeWithId } from "../api/modules/Singlemedia.api";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SingleAnime = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    getAnimeWithId(id, setData);
  }, []);

  const title = data.data?.Page?.media[0].title;
  const description = data.data?.Page?.media[0].description;
  const img = data.data?.Page?.media[0].bannerImage;
  return (
    <section>
      <div>{<img src={img}></img>}</div>
      <div>
        <h1>{title?.english}</h1>
        <p>
          <ReactMarkdown skipHtml={true}>{description}</ReactMarkdown>
        </p>
      </div>
    </section>
  );
};

export default SingleAnime;
