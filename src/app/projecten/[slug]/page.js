import Gallery from "@/section/gallery";
import styles from "./styles.module.scss";

export default function Project() {
    return (
        <section className={styles.project}>
            <h3 className="visually-hidden">The project</h3>
            <div>
                <Gallery/>
            </div>
            <section>
                <h1>Shift Savy</h1>
            </section>
        </section>
    )
}