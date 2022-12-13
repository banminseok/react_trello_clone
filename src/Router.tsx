import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import DemoSelector from "./routes/DemoSelector";
import NotFound from "./routes/NotFound";
import Price from "./routes/Price";


const BASE_URL = process.env.PUBLIC_URL;

const defaultRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <DemoSelector />
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: ":price",
            element: <Price />,
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
], {
  basename: BASE_URL
});


export default defaultRouter;