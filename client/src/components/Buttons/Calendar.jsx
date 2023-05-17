import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export default function DateCalendarFormProps({
  open,
  onClose,
  date,
  onChange,
  renderInput,
}) {

    const [value, setValue] = React.useState(date);
    
    const handleChange = (newValue) => {
        setValue(newValue);
        onChange(newValue);
    };
    
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer>
            <DemoItem>
            <DateCalendar
                date={value}
                onChange={handleChange}
                renderInput={renderInput}
            />
            </DemoItem>
        </DemoContainer>
        </LocalizationProvider>
    );

}
git