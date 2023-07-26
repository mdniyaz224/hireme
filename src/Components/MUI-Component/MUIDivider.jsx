/* eslint-disable react/prop-types */
import { Divider } from '@mui/material';


const MUIDivider = (props) => {
    const { children, ...rest } = props;
    return <Divider {...rest}>{children}</Divider>
}

export default MUIDivider