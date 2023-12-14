import TextField from "@mui/material/TextField";

export default function Description({
  label,
  set,
  description
}: {
  label: string;
  set: any;
  description?: string;
}) {
  return (
    <div>
      <TextField
        label={label}
        id="outlined-size-small"
        size="small"
        fullWidth
        type="text"
        value={description}
        style={{ backgroundColor: "white" }}
        color="info"
        onChange={(e)=> set(e.target.value)}
      />
    </div>
  );
}
