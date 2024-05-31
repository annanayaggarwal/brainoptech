import "./App.css";
import { useEffect } from "react";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./components/pages/Blogs";
import SingleBlog from "./components/pages/SingleBlog";
import SignUp from "./components/pages/SignUp";
import ProtectedRoute from "./route/ProtectedRoute";
import { loadUser } from "./actions/userAction";
import store from "./store";
import Terms from "./components/pages/Terms";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Blogs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/:id"
            element={
              <ProtectedRoute>
                <SingleBlog />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" Component={SignUp} />
          <Route path="/term" Component={Terms} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
