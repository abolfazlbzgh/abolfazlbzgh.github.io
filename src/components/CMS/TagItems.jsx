import React, { useState } from 'react'

export default function TagItems({ onResult , title , placeholder }) {

    const [inputs, setInputs] = useState([""]);

    const addInput = () => {
        setInputs([...inputs, ""]); // Add an empty string to the inputs array
    };
    const onClear = () => {
        setInputs([""]); 
        // onClear()
    };

    const onSend = () => {
        onResult(inputs.filter(input => input.length > 0).map(input=>input.trim())); 
    }

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        setInputs(newInputs);
    };

    return (

        <div className='flex flex-col justify-start gap-4'>
            <label for="first_name" className="block text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            <div className='grid grid-cols-4 gap-4'>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={input}
                        placeholder={placeholder}
                        onChange={(event) => handleInputChange(index, event)}
                    />
                ))}
            </div>
            <div className='flex w-full justify-end gap-4'>

                <button onClick={addInput} class="text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create New {title}</button>
                <button onClick={onSend} class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-44 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit {title}</button>
            </div>

        </div>
    )
}
