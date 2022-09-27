import { useRoutes } from "react-router-dom";
import Header from "./components/Header/Header";
import { ROUTES } from "./helpers/routes";

const App = () => {
  const routes = useRoutes(ROUTES)

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
