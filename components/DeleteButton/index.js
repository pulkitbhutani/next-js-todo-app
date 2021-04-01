export default function Button({ text, onClick}) {
  return (
    <div className = "inline-block align-right">
      <button
        className="m-2 align-right bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={onClick}
      >{text}</button>
    </div>
  );
}
