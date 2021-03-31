

export default function TaskItemCard({ title, key}) {
    return (
        <div className="bg-white rounded shadow-md h-12 justify-self-end m-3">
            <input type="checkbox" className="form-checkbox h-4 w-4 m-4 bg-green-500"/>
            <span className="font-bold m-5">{title}</span>
        </div>
);
}

