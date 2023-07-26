/* eslint-disable react/prop-types */
import { CssBaseline } from '@mui/material';


const MUICssBaseline = (props) => {
    const { children, ...rest } = props;
    return <CssBaseline {...rest}>{children}</CssBaseline >
}

export default MUICssBaseline