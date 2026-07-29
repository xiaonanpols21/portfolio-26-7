
import styles from "./styles.module.scss";

export default function Hamburger({classes}) {

    return (
        <label
            aria-label="Menu knop"
            className={`${styles.hamburger} ${classes}`}
            tabIndex={0}
        >
            <input type="checkbox"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    );
}
