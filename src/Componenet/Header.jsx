import "../CssFiles/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
function Header() {
  return (
    <>
      <div className="header">
        <div className="headers_icon">
          <div className="header_icons header_icons--active">
            <HomeIcon />
            <p>Home</p>
          </div>
          <div className="header_icons">
            <FlashOnIcon />
            <p>Trending</p>
          </div>
          <div className="header_icons">
            <LiveTvIcon />
            <p>Verified</p>
          </div>
          <div className="header_icons">
            <VideoLibraryIcon />
            <p>Collections</p>
          </div>
          <div className="header_icons">
            <SearchIcon />
            <p>Search</p>
          </div>
          <div className="header_icons">
            <PersonOutlineIcon />
            <p>Account</p>
          </div>
        </div>
        <img
          src="https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
