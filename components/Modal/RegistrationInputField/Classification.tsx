import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Classification({
  classification,
  set,
}: {
  classification: string;
  set: any;
}) {
  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-select-small-label">분류</InputLabel>
        <Select
          color="info"
          className="bg-white"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={classification}
          label="분류"
          onChange={(e) => set(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"haha"}>채워야함</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
