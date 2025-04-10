import Image from "next/image";
import DashboardImg from "../../../public/dashboard-logo.jpg";
import About from "../dashboard/page";

const Dashboard = () => {
  return (
    <>
      <Image
        src={DashboardImg}
        alt="Dashboard Logo"
        className="mask-t-from-30%"
      />
      <About />
    </>
  );
};

export default Dashboard;
