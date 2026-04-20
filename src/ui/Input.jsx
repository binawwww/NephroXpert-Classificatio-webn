export default function Input({ placeholder, value, onChange, name, type = "number", step = "0.1", unit }) {
  return (
    <div className="relative flex items-center">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        step={step}
        placeholder={placeholder}
        className="w-full h-[38px] pl-3 pr-9 bg-white text-black border border-gray-200 rounded-lg text-sm outline-none transition-all placeholder:text-gray-400 hover:border-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-100 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      {unit && (
        <span className="absolute right-3 text-xs text-gray-400 pointer-events-none">
          {unit}
        </span>
      )}
    </div>
  );
}