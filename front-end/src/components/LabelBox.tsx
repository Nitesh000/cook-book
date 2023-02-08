type Props = {
  label: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const LabelBox = ({ label, type, name, value, onChange }: Props) => {
  return (
    <div className="grid grid-cols-3 px-14 py-4">
      <label
        className="text-lg text-black font-semibold mx-auto col-span-1"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="border border-gray-400 focus:border-blue-500 focus:outline-none px-2 py-1 rounded-md col-span-2"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
    </div>
  );
};

export default LabelBox;
