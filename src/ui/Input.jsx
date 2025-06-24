export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="number" // ✅ More appropriate for numeric input
      value={value}
      onChange={onChange}
      className="bg-white text-black outline-none rounded-lg p-2 opacity-65 col-span-1"
      placeholder={placeholder}
    />
  );
}
