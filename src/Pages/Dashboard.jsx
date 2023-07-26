import DonutsCharts from "../Components/UI-Components/DonutsCharts";
import MultiCharts from "../Components/UI-Components/MultiCharts";
import { MUIBox, MUIGrid, MUITypography } from "../Components/MUI-Component";
// import MyTables from "../Components/UI-Components/MyTables";
import SortedTable from "../Components/UI-Components/SortedTable";
const Dashboard = () => {
  // ------------------------------------------------------------------------

  return (
    <MUIBox sx={{ marginLeft: "16%" ,marginTop:'40px'}}>
      <MUITypography varient="h2" sx={{marginLeft:'30px'}}>Dashboard</MUITypography>
      <MUIGrid container spacing={5}>
        <MUIGrid item xs={12} sm={6}>
          <DonutsCharts />
        </MUIGrid>
        <MUIGrid item xs={12} sm={6} sx={{ paddingRight: "50px" }}>
          <MultiCharts />
        </MUIGrid>
      </MUIGrid>
      <MUIBox sx={{ marginLeft: "50px",marginTop:'80px' }}>
       <SortedTable/>
      </MUIBox>
    </MUIBox>
  );
};

export default Dashboard;
