import DashboardDataList from "../dashboard/page";
import Image from "next/image";
import DashboardImg from "../../../public/dashboard-logo.jpg";

const Dashboard = () => {
  return (
    <>
      <Image
        src={DashboardImg}
        alt="Dashboard Logo"
        className="mask-t-from-30%"
      />
      <DashboardDataList />
    </>
  );
};

export default Dashboard;
