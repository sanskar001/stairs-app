import Navbar from "@/components/Navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
  console.log("Landing Layout Executing...");

  return (
    <div>
      <Navbar />
      <main className="pt-14 min-h-screen">{children}</main>
    </div>
  );
};

export default MarketingLayout;
