import { useRef, useState } from "react"

export default function DragDropList() {
    const [people, setPeople] = useState([
        {id: 1, name: "Aaple"},
        {id: 2, name: "Banana"},
        {id: 3, name: "Corn"},
        {id: 4, name: "Date"},
        {id: 5, name: "Eelephant"}
    ])
    const dragPerson = useRef(0);
    const draggedOverPerson = useRef(0);
    function handleSort() {
        const peopleClone = [...people];
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current];
        peopleClone[draggedOverPerson.current] = temp;
        setPeople(peopleClone)
    }
    return (
        <main className="" style={{display: "flex", minHeight: "screen", flexDirection: "column", alignItems:"center", gap: "10px"}}>
            <h1>list</h1>
            {people.map((person, index) => (
                <div key={index} style={{position: "relative", display: "flex", border: "", backgroundColor: "#e3dadb", borderRadius: "10px", padding: "12px"}}
                 draggable
                 onDragStart={() => (dragPerson.current = index)}
                 onDragEnter={() => (draggedOverPerson.current = index)}
                 onDragEnd={handleSort}
                
                >
                    <p>{person.name}</p>
                </div>
            ))}
        </main>
    )
}