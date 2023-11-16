import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import PhotoDetailPage from "../../pages/PhotoDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/detail/:id" element={<PhotoDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
