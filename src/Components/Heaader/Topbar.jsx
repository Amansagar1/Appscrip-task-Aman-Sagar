import "./Topbar.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Topbar() {
  return (
    <div className="topbar__main">
      <div className="topbar__container">
        <h1 className="topbar__heading">
          <MdOutlineDashboardCustomize />
          Lorem ipsum
        </h1>

        <h1 className="topbar__heading">
          <MdOutlineDashboardCustomize />
          Lorem ipsum
        </h1>

        <h1 className="topbar__heading">
          <MdOutlineDashboardCustomize />
          Lorem ipsum
        </h1>
      </div>
    </div>
  );
}

export default Topbar;
