import { Box, Card } from "@mui/material";
import { FcLike } from "react-icons/fc";
import { TbPlaylistAdd } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchList = () => {
  const anime = useSelector((state) => state.fetchData.animeData);

  return (
    <div className="text-center">
      <Box className="flex gap-4">
        {anime.map((a) =>
          a.Page.media.map((m) => (
            <Link key={m.id} to={`/search/${m.id}`}>
              <Card
                key={m.id}
                className="flex flex-col items-center justify-center flex-wrap w-28 gap-2"
              >
                <img src={m.coverImage.medium} alt="not found" />
                <a>
                  {m.title.english != null ? m.title.english : m.title.romaji}
                </a>
                <div className="flex gap-7">
                  <button onClick={() => {}}>
                    <FcLike />
                  </button>
                  <button onClick={() => {}}>
                    <TbPlaylistAdd />
                  </button>
                </div>
              </Card>
            </Link>
          ))
        )}
      </Box>
    </div>
  );
};

export default SearchList;
