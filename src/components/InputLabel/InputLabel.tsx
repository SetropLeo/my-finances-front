import "./InputLabel.scss";

const InputLabel = ({ value, label, required, type, autoComplete, onChange }: InputLabelProps) => {
  return (
    <div>
      <label htmlFor={type}>{label}</label>
      <div>
        <input
          value={value}
          id={type}
          name={type}
          type={type}
          autoComplete={autoComplete}
          required={required}
          onChange={(e) => onChange(e.target.value, e.target.name)}
        />
      </div>
    </div>
  );
};

export default InputLabel;

interface InputLabelProps {
  value: string;
  type: string;
  label: string;
  required: boolean;
  autoComplete?: string;
  onChange: (value: string, name: string) => void;
}
