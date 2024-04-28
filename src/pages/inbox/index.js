import { Reorder, useMotionValue } from "framer-motion";
import { useState } from "react";
import { useRaisedShadow } from "../user-raised-shadow";
import Email from "../../components/Email/Email";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../../StrictModeDroppable";
import './inbox.css';
const grid = 8;
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: '100%',
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // change background colour if dragging
  background: isDragging ? "#e9f2ff" : "#f7f8f9",
  ...draggableStyle,
});

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function InboxEmail({ data }) {
  const [emailSections, setEmailSections] = useState(data);
  const [sectionsOrder, setSectionsOrder] = useState(data.sectionsOrder)
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  const handleReorder = (reorderedKeys) => {
    const reorderedData = {};
    reorderedKeys.forEach((key) => {
      reorderedData[key] = emailSections.inboxEmails[key];
    });
    setEmailSections({ ...emailSections, inboxEmails: reorderedData });
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      sectionsOrder,
      result.source.index,
      result.destination.index
    );
    setSectionsOrder(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId={"emailSections"}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            // style={getListStyle(snapshot.isDraggingOver)}
          >
            {sectionsOrder.map(
              (section, index) => (
                <Draggable
                  key={section}
                  value={section}
                  index={index}
                  draggableId={section}
                  style={{ boxShadow, y }}
                >
                  {(provided, snapshot) => (
                    <div
                    className="draggableItem"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <p className="emailSectionHeading">
                        {emailSections?.emailSubdivisions[section]["name"]}
                      </p>
                      {emailSections?.inboxEmails[section]?.map((email) => (
                        <Email
                          key={email.id}
                          email={email}
                          emailSubDivision={
                            emailSections?.emailSubdivisions[section]
                          }
                        />
                      ))}
                    </div>
                  )}
                </Draggable>
              )
            )}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
}
