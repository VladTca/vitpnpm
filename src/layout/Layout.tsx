import {Outlet} from "react-router";
import styles from "./Layout.module.css";
import {Footer} from "./footer/Footer";
import {FlexWrapper} from "../components/FlexWrapper";
import {Header} from "./header/Header.tsx";

export default function Layout() {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      {/*<header className={styles.header}>*/}
      {/*  {navLinks.map((el, index) => (*/}
      {/*    <NavLink*/}
      {/*      key={index}*/}
      {/*      className={({ isActive }) => (isActive ? styles.isActive : "")}*/}
      {/*      to={el.to}*/}
      {/*    >*/}
      {/*      {el.title}*/}
      {/*    </NavLink>*/}
      {/*  ))}*/}
      {/*</header>*/}
        <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </FlexWrapper>
  );
}
