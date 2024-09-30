import { Navbar } from "../_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-dark-color text-white flex items-center justify-center py-4">
      <Navbar />
      <div className="md:ml-64 mt-16">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;

