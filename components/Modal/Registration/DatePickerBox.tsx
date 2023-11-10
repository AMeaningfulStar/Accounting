import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerBox({
  label,
  set
}: {
  label: string;
  set: any;
}) {
  return(
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                className="bg-white w-full"
                label={label}
                format="YYYY-MM-DD"
                showDaysOutsideCurrentMonth
                onChange={(e:any) => set(new Date(e.$d))}
              />
            </DemoContainer>
          </LocalizationProvider>
    </div>
  )
}