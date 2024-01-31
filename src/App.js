import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { Main } from "./pages/Main";
import { DragDrop } from "./pages/inbox/dragdrop";

function App() {
  return (
    <>
      <Main />
      <DragDrop />
    </>
  );
}

export default App;
