/* eslint-disable react/prop-types */
import { Drawer } from '@mui/material';


const MUIDrawer = (props) => {
    const { children, ...rest } = props;
    return <Drawer {...rest}>{children}</Drawer>
}

export default MUIDrawer