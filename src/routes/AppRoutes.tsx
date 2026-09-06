import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProductListPage from"../components/pages/ProductListPage";
import ProductDetailsPage from "../components/pages/ProductDetailsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/products"
          element={<ProductListPage />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;