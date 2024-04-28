import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { Main } from "./pages/Main";
// import { DragDrop } from "./pages/inbox/dragdrop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/login/signup";
import { Provider, useSelector } from "react-redux";
import { selectAuth } from "./redux/auth/selectors";

const DefaultApp = () => {
  return (
    <Routes>
    <Route path="/" element={<Main />} />
    </Routes>
  )
};
function App() {
  const { isLoggedIn } = useSelector(selectAuth);
  if (!isLoggedIn) {
    return (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
    );
  } else {
    return <DefaultApp />;
  }
}

export default App;
