import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProtectedRoutes from "../guards/ProtectedRoutes";
import ProjectPage from "../pages/projects/ProjectPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/app"
          element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects/:projectId" element={<ProjectPage />} />
        </Route>
        <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
