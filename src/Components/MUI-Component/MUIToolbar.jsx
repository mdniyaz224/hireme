import { Toolbar } from '@mui/material';
import React from 'react'

const MUIToolbar = (props) => {
    const { children, ...rest } = props;
    return <Toolbar {...rest}>{children}</Toolbar>
}

export default MUIToolbar