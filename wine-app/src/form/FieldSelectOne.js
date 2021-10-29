import React from 'react';

import { OPERATORS } from 'shared/components/form/constants';
import { doublesStyles } from 'shared/styles/doublesStyles';

import { FormControl, Grid, MenuItem, TextField } from '@material-ui/core';

export default function FieldSelectOne(props) {
  const { title, fieldName, operatorType, options, formik } = props;

  const classes = doublesStyles();

  let selectOptions = operatorType ? OPERATORS[operatorType] : options;

  return (
    <Grid item>
      <div>
        <FormControl className={classes.margin}>
          <div className={classes.label}>{title}</div>
        </FormControl>
      </div>
      <FormControl className={classes.margin}>
        <TextField
          select
          name={fieldName}
          id={fieldName}
          value={formik.values[fieldName]}
          onChange={formik.handleChange}
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              },
              getContentAnchorEl: null,
            },
          }}
          helperText={formik.errors[fieldName]}
          error={Boolean(formik.errors[fieldName])}
        >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          {selectOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}{' '}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
    </Grid>
  );
}
