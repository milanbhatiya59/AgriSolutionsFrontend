import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/index";
import NotFound from "./pages/not-found";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {

  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
}

export default App;
