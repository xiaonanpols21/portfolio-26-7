"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export default function GalleryDesktop() {
    const dialogRef = useRef(null);  
    const [selectedImage, setSelectedImage] = useState("/img/deka.webp");

    const changeImg = (img) => {
        setSelectedImage(img); 
    };

    return (
        <section className={styles.gallery}>
            <h3 className="visually-hidden">Gallery</h3>
            <Image
                src={selectedImage}
                width={435}
                height={400}
                className={styles.heroImg}
                alt="Picture of the author"
            />

            <form>
                <label>
                    <input type="radio" name="gallery" onClick={() => changeImg("/img/deka.webp")}/>
                    <Image
                        src="/img/deka.webp"
                        width={140}
                        height={130}
                        alt="Picture of the author"
                    />
                </label>
                <label>
                    <input type="radio" name="gallery" onClick={() => changeImg("/img/me.png")}/>
                    <Image
                        src="/img/me.png"
                        width={140}
                        height={130}
                        alt="Picture of the author"
                    />
                </label>
                <label>
                    <input type="radio" name="gallery" onClick={() => changeImg("/img/deka.webp")}/>
                    <Image
                        src="/img/deka.webp"
                        width={140}
                        height={130}
                        alt="Picture of the author"
                    />
                </label>
            </form>
        </section>
    )
}