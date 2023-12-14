import TextField from "@mui/material/TextField";

export default function Amount({
  label,
  set,amount
}: {
  label: string;
  set: any;
  amount?: number
}) {
  return (
    <div>
      <TextField
        label={label}
        id="outlined-size-small"
        size="small"
        fullWidth
        value={amount}
        type="number"
        style={{ backgroundColor: "white" }}
        color="info"
        onChange={(e)=> set(e.target.value)}
      />
    </div>
  );
}
