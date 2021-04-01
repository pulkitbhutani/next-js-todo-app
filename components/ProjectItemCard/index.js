export default function ProjectItemCard({ title, onClick }) {
  return (
    <li>
      <div
        className="bg-white rounded shadow-md h-12 justify-self-end m-3"
        onClick={onClick}
      >
        <span className="font-bold inline-block m-3 align-center">{title}</span>
      </div>
    </li>
  );
}
