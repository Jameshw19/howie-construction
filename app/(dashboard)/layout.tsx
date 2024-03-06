import Navbar from "./_components/navbar";
import Works from "./_components/works";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Navbar />
      {children}
      <Works />
    </main>
  );
};

export default DashboardLayout;
