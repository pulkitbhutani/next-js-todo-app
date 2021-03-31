

export default function Card({ title, onClick }) {
    return (
        <div className="bg-white rounded shadow-md h-9 w-full" onClick= {onClick}>
            <span className="font-bold m-3">{title}</span>
        </div>
);
}

