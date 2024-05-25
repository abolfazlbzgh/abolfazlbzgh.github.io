import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

export default function DraggableList({ items, setItems }) {
    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const reorderedItems = Array.from(items);
        const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
        reorderedItems.splice(result.destination.index, 0, reorderedItem);

        setItems(reorderedItems);
    };

    const handleRemove = (id) => {
        setItems(items.filter(item => item.id !== id));

    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="list">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-2">
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-md flex items-center justify-between"
                                    >
                                        <p className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600">
                                            {item.type && 'type: ' + item.type + ', '}
                                            {item.content && 'content: ' + item.content + ', '}
                                            {item.src && 'src: ' + item.src + ', '}
                                            {item.lang && 'lang: ' + item.src + ', '}
                                            {item.items && 'items: ' + item.items + ', '}
                                            {item.code && 'code: ' + item.code + ', '}
                                        </p>
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="ml-2 text-red-600 hover:text-red-800"
                                        >
                                            ✕
                                        </button>
                                        <span className="ml-2 cursor-pointer">☰</span>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}