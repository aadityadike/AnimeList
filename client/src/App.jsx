import { Route, Routes } from "react-router-dom";
import AppShell from "./ui/AppShell";
import SingleAnime from "./ui/SingleAnime";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <Routes>
        <Route path="/" element={<AppShell />} />
        <Route path="/search/:id" element={<SingleAnime />} />
      </Routes>
    </div>
  );
};

export default App;
