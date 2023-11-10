import TextField from "@mui/material/TextField";

export default function AmountTextField({
  label,
  set
}: {
  label: string;
  set: any;
}) {
  return (
    <div>
      <TextField
        label={label}
        id="outlined-size-small"
        size="small"
        fullWidth
        type="number"
        style={{ backgroundColor: "white" }}
        color="info"
        onChange={(e)=> set(e.target.value)}
      />
    </div>
  );
}
