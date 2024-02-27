import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { Main } from "./pages/Main";
// import { DragDrop } from "./pages/inbox/dragdrop";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Signup } from "./pages/login/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
