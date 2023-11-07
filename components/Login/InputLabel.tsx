interface Label {
  label: string;
  htmlFor: string;
}

export default function InputLabel({ label, htmlFor }: Label) {
  return (
    <label className="text-gray-700" htmlFor={htmlFor}>
      { label }
    </label>
  );
}
