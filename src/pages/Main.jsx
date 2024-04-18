import { Header } from "../apps/Header/HeaderContainer";
import { Sidebar } from "../components/Sidebar";
import InboxEmail from "./inbox";
import dummyJSON from "./inbox/dumyData.json";
import DragDropList from "./inbox/list";

export function Main() {
    return <> 
        <Header />
        {/* <Sidebar /> */}
        <InboxEmail data={dummyJSON}/>
        {/* <DragDropList/> */}
    </>
}