import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LoginPage from "../pages/signin";
import App from "../App";
import ProtectedRoutes from "./protected-routes";
import StorePage from "../pages/store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/signin" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<StorePage />} />
      </Route>
    </Route>
  )
);

export default router;
