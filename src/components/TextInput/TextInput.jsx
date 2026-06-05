function TextInput({ type="text", placeholder="Enter Your Input here", onChange }) {
    return (
        <div className="mt-4 flex flex-col gap-2">
            <span className="text-gray-700 font-bold">{placeholder}</span>
            <input 
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            className="border border-gray-500 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
        </div>
    )
}

export default TextInput;