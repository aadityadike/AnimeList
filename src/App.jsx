import AppShell from "./ui/AppShell";
import SearchList from "./ui/SearchList";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <AppShell />
      <SearchList />
    </div>
  );
};

export default App;
