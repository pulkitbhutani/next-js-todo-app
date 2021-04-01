export default function Checkbox({ isCompleted, onChange }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onChange}
        className="form-checkbox h-4 w-4 m-4 bg-green-500"
      />
    </div>
  );
}
