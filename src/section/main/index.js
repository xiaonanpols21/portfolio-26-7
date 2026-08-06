"use client";
import useIsMobile from "@/app/js/useIsMobile";
import Card from "@/components/card";
import Swiper from "@/components/swiper";
import styles from "./styles.module.scss";

export default function Main() {
    const isMobile = useIsMobile();

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