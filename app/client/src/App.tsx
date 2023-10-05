import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import FeedbackPage from "./pages/FeedbackPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<FeedbackPage />} />
        <Route path="/feedback/:slug" element={<FeedbackPage />} />
      </Route>
    </Routes>
  );
}

export default App;
