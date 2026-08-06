import Image from "next/image";
import styles from "./styles.module.scss";


export default function GalleryMobile() {
    return (
        <ul className={styles.gallery}>
            <li>
                <Image
                    src="/img/deka.webp"
                    width={250}
                    height={220}
                    alt="Picture of the author"
                />
            </li>
            <li>
                <Image
                    src="/img/deka.webp"
                    width={250}
                    height={220}
                    alt="Picture of the author"
                />
            </li>
            <li>
                <Image
                    src="/img/deka.webp"
                    width={250}
                    height={220}
                    alt="Picture of the author"
                />
            </li>
        </ul>
    )
}