import { useSelector } from "react-redux";

const SearchList = () => {
  const anime = useSelector((state) => state.fetchData.animeData);
  console.log(anime);

  return <div>SearchList</div>;
};

export default SearchList;
