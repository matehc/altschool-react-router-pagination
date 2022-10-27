import { Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SharedNavLayout from "./pages/SharedNavLayout";
import SingleUser from "./pages/single_user/singleUser";
import ErrorPage from "./pages/error_page/ErrorPage.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedNavLayout />}>
        <Route index element={<Users />} />
        <Route path="/users">
          <Route path="/users/user/:id" element={<SingleUser />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
