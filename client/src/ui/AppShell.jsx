import Navbar from "../Components/Navbar";
import SearchList from "./SearchList";

const AppShell = () => {
  return (
    <div className="background_color flex gap-8 flex-col items-center justify-center">
      <Navbar />
      <SearchList />
    </div>
  );
};

export default AppShell;
