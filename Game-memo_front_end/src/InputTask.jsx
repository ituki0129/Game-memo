function InputTask({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="予定を入力"
    />
  );
}

export default InputTask;