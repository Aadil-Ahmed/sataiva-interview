import React from "react";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';
import Button from '@mui/material/Button';


function Calender(){

    return(
        <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateRangePicker',
          'MobileDateRangePicker',
          'DesktopDateRangePicker',
          'StaticDateRangePicker',
        ]}>
      
        <DemoItem  component="StaticDateRangePicker">
          <StaticDateRangePicker
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
            sx={{
              [`.${pickersLayoutClasses.contentWrapper}`]: {
                alignItems: 'center',
              },
            }}
          />
        </DemoItem>

        <DemoItem label="start and end date" component="DesktopDateRangePicker">
          <DesktopDateRangePicker
            defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>   
   <a href=""><Button variant="outlined" >next</Button></a> 

     </>
    );
}

export default Calender;