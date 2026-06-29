import React from "react";
import FitnessDashboard from "@/components/dashboard/fitness-dashboard";
import ScrollToTopWaterFill from "@/components/ui/back-to-top";

const Dashboard = () => {
  return (
    <>
      <FitnessDashboard />
      <ScrollToTopWaterFill />
    </>
  );
};

export default Dashboard;