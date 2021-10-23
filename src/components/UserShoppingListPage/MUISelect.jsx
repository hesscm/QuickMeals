import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MUISelect(props) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">List</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={(event) => props.handleDayOfWeek(event.target.value)}
                >
                    <MenuItem value={'Monday'}>Monday</MenuItem>
                    <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
                    <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
                    <MenuItem value={'Thursday'}>Thursday</MenuItem>
                    <MenuItem value={'Friday'}>Friday</MenuItem>
                    <MenuItem value={'Saturday'}>Saturday</MenuItem>
                    <MenuItem value={'Sunday'}>Sunday</MenuItem>
                    <MenuItem value={'Total'}>Total</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}