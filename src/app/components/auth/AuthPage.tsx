import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { LOGIN } from "../../helpers/routesConstant";

const AuthPage = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />
      <Route index element={<Navigate to={LOGIN} />} />
    </Route>
  </Routes>
);

export { AuthPage };
