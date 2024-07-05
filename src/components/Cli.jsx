import React, { useState } from 'react';
import { FaTerminal, FaTimes } from 'react-icons/fa';

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;
        executeCommand(input.trim());
        setInput(''); // Clear input field after command is submitted
    };

    const executeCommand = (command) => {
        let result;
        switch (command.toLowerCase()) {
            case 'help':
                result = "List of available commands:\n- help: Show this message\n- about: Show information about the terminal\n- exit: Close the terminal\n- linkedin: Show my LinkedIn profile link";
                break;
            case 'about':
                result = "This is a simple CLI built in React.\nType 'help' for available commands.";
                break;
            case 'exit':
                onClose(); // Close the terminal
                result = "Closing terminal...";
                break;
            case 'linkedin':
                result = "LinkedIn Profile: https://www.linkedin.com/in/your-profile-id"; // Replace with your LinkedIn profile URL
                break;
            default:
                result = `Command not found: ${command}`;
                break;
        }
        setOutput((prevOutput) => prevOutput + '\n\n' + '> ' + command + '\n' + result);
    };

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 mx-auto max-w-full mt-8 bg-gray-900 p-4 rounded-lg shadow-lg`}>
            <div className="flex items-center justify-between text-gray-400 mb-2">
                <div className="flex items-center">
                    <FaTerminal className="mr-2" />
                    <span>My CLI</span>
                </div>
                <button
                    className="focus:outline-none hover:bg-red-500 rounded-full p-1"
                    onClick={onClose}
                >
                    <FaTimes className="text-red-500" />
                </button>
            </div>
            <div className="h-80 bg-black text-green-400 p-2 rounded-lg overflow-y-auto">
                <pre>{output}</pre>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex items-center mt-2">
                    <span className="text-gray-300">&gt;</span>
                    <input
                        type="text"
                        placeholder='Type your commands here'
                        className="bg-transparent border-none focus:outline-none ml-2 flex-1 text-gray-300"
                        value={input}
                        onChange={handleInputChange}

                    />
                </div>
            </form>
        </div>
    );
};

export default Terminal;
