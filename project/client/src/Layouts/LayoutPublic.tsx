import { ReactNode } from "react";
import Navbar from "../Containers/Navbar";

/**
 * layout component
 * @param {object} obj
 * @param {object} obj.children
 * @returns JSX element
 */
const LayoutPublic = ({ children }: { children: ReactNode }) => {
  return (
    <div data-theme="bumblebee" className="min-h-screen">
      <Navbar />
      <main className="px-12">{children}</main>
    </div>
  );
};

export default LayoutPublic;
