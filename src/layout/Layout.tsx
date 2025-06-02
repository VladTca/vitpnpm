import {Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
import {Footer} from "./footer/Footer";
import {FlexWrapper} from "../components/FlexWrapper";
import {Header} from "./header/Header.tsx";

export default function Layout() {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </FlexWrapper>
  );
}
