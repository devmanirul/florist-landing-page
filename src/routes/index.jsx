import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import HelpChoose from "../Components/Home/HelpChoose";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/halpchoose",
    element: <HelpChoose />,
  },
]);

export default routers;
