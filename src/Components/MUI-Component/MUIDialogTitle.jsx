/* eslint-disable react/prop-types */

import { DialogTitle } from '@mui/material';


const MUIDialogTitle = (props) => {
    const { children, ...rest } = props;
    return <DialogTitle {...rest}>{children}</DialogTitle >
}

export default MUIDialogTitle