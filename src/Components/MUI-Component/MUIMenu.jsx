import { Menu } from '@mui/material';
import React from 'react'

const MUIMenu = (props) => {
    const { children, ...rest } = props;
    return <Menu {...rest}>{children}</Menu>
}
export default MUIMenu