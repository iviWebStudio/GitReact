import "./style.css";
import HeaderLogo from "./components/HeaderLogo";
import HeaderMenu from "./components/HeaderMenu";
import HeaderNav from "./components/HeaderNav";

export default function Header(props) {
  return (
    <div className="headerContainer">
      <header className="header" role="banner">
        <HeaderLogo />

        <HeaderMenu inchvor="lkjkj" />
        <HeaderNav />
      </header>
    </div>
  );
}
