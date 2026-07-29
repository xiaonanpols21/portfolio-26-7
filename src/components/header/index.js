import Link from "next/link";
import Hamburger from "../hamburger";
import Nav from "../nav";
import styles from "./styles.module.scss";


export default function Menu() {
    return (
        <>
            <header className={styles.header}>
                <Link className={styles.logo} href="/">Xiao Nan</Link>
                <Nav classes={styles.desktopNav}/>
                <Hamburger/>
            </header>

            

     
        </>
    )
}