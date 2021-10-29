import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'

export default function SearchBar(props) {
    return (
        <TextField
            placeholder={'Search any wine'}
            id="margin-normal"
            margin="normal"
            InputProps={{
                startAdornment: <SearchIcon color="disabled" position="start" />,
            }}
            {...props}
        />
    )
}
