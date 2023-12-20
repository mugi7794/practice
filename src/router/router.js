import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages";
import Tailwind from "../pages/tailwind";
import Chakra from "../pages/Chakra";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tailwind",
    element: <Tailwind />,
  },
  {
    path: "/chakra",
    element: <Chakra />,
  },
]);
export default router;
