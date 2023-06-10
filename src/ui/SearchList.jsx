import { useSelector } from "react-redux";
import { Card, Box } from "@mui/material";

const SearchList = () => {
  const anime = useSelector((state) => state.fetchData.animeData);

  return (
    <div className="text-center">
      <Box className="flex gap-4">
        {anime.map((a) =>
          a.Page.media.map((m) => (
            <Card
              key={m.id}
              className="flex flex-col items-center justify-center flex-wrap w-28"
              onClick={() => {}}
            >
              <img src={m.coverImage.medium} alt="not found" />
              <a>
                {m.title.english != null ? m.title.english : m.title.romaji}
              </a>
            </Card>
          ))
        )}
      </Box>
    </div>
  );
};

export default SearchList;
