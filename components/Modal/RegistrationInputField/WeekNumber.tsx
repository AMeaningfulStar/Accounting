import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function WeekNumber({
  weekNumber,
  set,
}: {
  weekNumber: string;
  set: any;
}) {
  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-select-small-label">주차</InputLabel>
        <Select
          color="info"
          className="bg-white"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={weekNumber}
          label="주차"
          onChange={(e) => set(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"week1"}>1주차</MenuItem>
          <MenuItem value={"week2"}>2주차</MenuItem>
          <MenuItem value={"week3"}>3주차</MenuItem>
          <MenuItem value={"week4"}>4주차</MenuItem>
          <MenuItem value={"week5"}>5주차</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
