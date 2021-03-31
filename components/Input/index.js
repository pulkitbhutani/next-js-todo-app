

export default function Input({ text,setText }) {
    return (
        <input type="text"
        value={text} 
        onChange={({target:{value}})=>setText(value)} 
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
);
}