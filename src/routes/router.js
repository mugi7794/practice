import { createBrowserRouter } from "react-router-dom";
import Join from "../page/Join";
import Chat from "../page/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

export default router;
