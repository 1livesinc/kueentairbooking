import {
  FaBed,
  FaCar,
  FaPlane,
  FaCcVisa,
  FaBus,
  FaCarSide,
} from "react-icons/fa";
import { GiCargoCrate } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FaPlane />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FaBus />
            <span>Tour</span>
          </div>
          <div className="headerListItem">
            <FaCcVisa />
            <span>Visa</span>
          </div>
          <div className="headerListItem">
            <GiCargoCrate />
            <span>Cargo</span>
          </div>
          <div className="headerListItem">
            <TbBeach />
            <span>Vacations</span>
          </div>
          <div className="headerListItem">
            <FaCar />
            <span>Airport taxis</span>
          </div>
          <div className="headerListItem">
            <FaCarSide />
            <span>Car rentals</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
