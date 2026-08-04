"use client";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import Swiper from "@/components/swiper";
import styles from "./styles.module.scss";

export default function Main() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    function handleResize() {
        setIsMobile(window.innerWidth < 768);
    }

    handleResize(); // Controleer direct bij het laden

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    return (
        <main className={styles.main}>
            {isMobile ? (
                <ul className={styles.cardList}>
                    <li><Card /></li>
                    <li><Card /></li>
                    <li><Card /></li>
                    <li><Card /></li>
                    <li><Card /></li>
                    <li><Card /></li>
                    <li><Card /></li>
                </ul>
            ) : (
                <>
                    <div className={styles.divider}></div>
                    <Swiper />
                </>
            )}
            
        </main>
    )
}