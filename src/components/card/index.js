import Link from "next/link";
import Image from "next/image";
import Tag from "../Tag";
import styles from "./styles.module.scss";

export default function Card() {
    return (
        <article className={styles.card}>
            <Link href="">
                <h2>Shift savy</h2>
                <p>De jonge supermarktmedewerkers motiveren om extra te gaan werken.</p>
                <Image
                    src="/img/deka.webp"
                    width={380}
                    height={178}
                    alt="Project"
                />

                <ul className={styles.tags}>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </ul>

            </Link>
        </article>
    )
}