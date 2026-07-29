import Link from "next/link";
import styles from "./styles.module.scss";

export default function Nav({classes}) {
    return (
        <nav className={`${styles.nav} ${classes}`}>
            <ul>
                <li><Link href="">Over mij</Link></li>
                <li><Link className="btn-1" href="">C.V.</Link></li>
            </ul>
        </nav>
    )
}