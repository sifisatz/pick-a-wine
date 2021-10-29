import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { toast } from 'react-toastify';
import { OPERATORS } from '../../assets/options/enums';
import { OPERATOR } from '../../assets/options/operator';

export default function Language() {
    const [language, setLanguage] = React.useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
        toast.success(`Language succesfully changed to ${event.target.value}`, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };
    return (
        <FormControl variant="standard" style={{ minWidth: '70px' }} >
            <TextField
                color="primary"
                select
                style={{ outline: 'none' }}
                disableUnderline
                variant="standard"
                name={'lagnuage'}
                id={'lagnuage'}
                value={language}
                onChange={handleChange}
                SelectProps={{
                    MenuProps: {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'left',
                        },
                        getContentAnchorEl: null,
                    },
                }}
            >
                {OPERATORS[OPERATOR.LANGUAGE].map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}{' '}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
    )
}
