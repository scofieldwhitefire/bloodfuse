import { ClientJS } from "clientjs";
import { Route, Routes } from "react-router";
import ViewOnDesktop from "./Components/ViewOnDesktop";
import Home from "./Pages/Home";

const App = () => {
  const client = new ClientJS();
  const isMobile = client.isMobile();
  return (
    <>
      {!isMobile ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <ViewOnDesktop />
      )}
    </>
  );
};

export default App;
