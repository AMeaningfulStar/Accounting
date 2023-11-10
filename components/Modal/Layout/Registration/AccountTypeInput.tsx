import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AccountTypeInput({
  formdata,
  set,
}: {
  formdata: any;
  set: any;
}) {
  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-select-small-label">회계 구분</InputLabel>
        <Select
          color="info"
          className="bg-white"
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={formdata.accountType}
          label="회계 구분"
          onChange={(e) => set(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"current"}>당기</MenuItem>
          <MenuItem value={"prior"}>전기</MenuItem>
          <MenuItem value={"broughtForwardFromPrior"}>전기이월</MenuItem>
          <MenuItem value={"next"}>차기</MenuItem>
          <MenuItem value={"carriedForwardToNext"}>차기이월</MenuItem>
          <MenuItem value={"budget"}>예산</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
