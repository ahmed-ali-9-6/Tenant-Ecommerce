import SiteHeader from "containers/SiteHeader";
import Sidebar from "../Sidebar";
import withRouter from "../withRouter";
import { ReactNode } from "react";

interface VerticalLayoutProps {
  children: ReactNode;
}

const VerticalLayout = ({ children }: VerticalLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" basis-full">
        <SiteHeader />
        {children}
      </div>
    </div>
  );
};

export default withRouter(VerticalLayout);
