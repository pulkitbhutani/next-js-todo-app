

export default function Input({ text,setText }) {
    return (
        <input type="text"
        value={text} 
        onChange={({target:{value}})=>setText(value)} 
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight w-2/5 m-3"/>
);
}