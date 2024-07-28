import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';

export default function DraggableList({ items, setItems }) {
    const [editingItemId, setEditingItemId] = useState(null);
    const [editContent, setEditContent] = useState('');

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


    const handleEdit = (item) => {
        setEditingItemId(item.id);
        setEditContent(item.content);
    };

    const handleSave = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, content: editContent } : item));
        setEditingItemId(null);
    };

    const handleDuplicate = (index) => {
        const newItem = { ...items[index], id: uuidv4() };
        const updatedItems = [...items];
        updatedItems.splice(index + 1, 0, newItem);
        setItems(updatedItems);
    };

    const isEditableType = (type) => {
        return ['p', 'h1', 'h2', 'h3', 'h4'].includes(type);
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
                                        className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-md flex items-center justify-between"
                                    >
                                        {editingItemId === item.id ? (
                                            <textarea
                                                className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                                value={editContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                            />
                                        ) : (
                                            <p className="flex-grow p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600">
                                                {item.type && <>type: {item.type} <br /></>}
                                                {item.content && <>content: {item.content} <br /></>}
                                                {item.src && <>src: {item.src} <br /></>}
                                                {item.lang && <>lang: {item.lang} <br /></>}
                                                {item.items && <>items: {item.items} <br /></>}
                                                {item.code && <>code: {item.code} <br /></>}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => handleRemove(item.id)}
                                            className="ml-2 text-red-600 hover:text-red-800"
                                        >
                                            ✕
                                        </button>
                                        {isEditableType(item.type) && (
                                            editingItemId === item.id ? (
                                                <button
                                                    onClick={() => handleSave(item.id)}
                                                    className="ml-2 text-green-600 hover:text-green-800"
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() => handleEdit(item)}
                                                    className="ml-2 text-yellow-600 hover:text-yellow-800"
                                                >
                                                    Edit
                                                </button>
                                            )
                                        )}
                                        {item.type === 'br' && (
                                            <button
                                                onClick={() => handleDuplicate(index)}
                                                className="ml-2 text-purple-600 hover:text-purple-800"
                                            >
                                                ➕
                                            </button>
                                        )}
                                        <span
                                            {...provided.dragHandleProps}
                                            className="ml-2 cursor-pointer"
                                        >
                                            ☰
                                        </span>
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
