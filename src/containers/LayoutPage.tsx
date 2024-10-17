import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import Footer from "shared/Footer/Footer";

interface LayoutPageProps {
  children: ReactNode;
}

function LayoutPage({ children }: LayoutPageProps) {
  return (
    <div className="">
      <SiteHeader />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default LayoutPage;
