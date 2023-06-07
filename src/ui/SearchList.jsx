import { useSelector } from "react-redux";
import { Card, Box } from "@mui/material";

const SearchList = () => {
  const anime = useSelector((state) => state.fetchData.animeData);

  anime.map((a) =>
    a.Page.media.map((m) =>
      m.coverImage != null ? console.log(m) : console.log("image not found")
    )
  );
  
  return (
    <div className="text-center">
      <Box className="flex gap-4">
        {anime.map((a) =>
          a.Page.media.map((m) =>
            m.title.english != null ? (
              <Card
                key={m.id}
                className="flex flex-col items-center justify-center flex-wrap w-28"
              >
                <img src={m.coverImage.medium} alt="not found" />
                <a href="">{m.title.english}</a>
              </Card>
            ) : (
              <Card
                key={m.id}
                className="flex flex-col items-center justify-center flex-wrap"
              >
                <img src={m.coverImage.medium} alt="not found" />
                <a href="">{m.title.romaji}</a>
              </Card>
            )
          )
        )}
      </Box>
    </div>
  );
};

export default SearchList;
