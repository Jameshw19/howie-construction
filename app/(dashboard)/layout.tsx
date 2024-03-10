import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Testimonials from "./_components/testimonials";
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
      <Testimonials />
      <Footer />
    </main>
  );
};

export default DashboardLayout;
