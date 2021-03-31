

export default function ProjectItemCard({ title, onClick }) {
    return (
        <div className="bg-white rounded shadow-md h-12 justify-self-end m-3" onClick= {onClick}>
            <p className="font-bold m-3">{title}</p>
        </div>
);
}