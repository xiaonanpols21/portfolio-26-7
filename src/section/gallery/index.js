"use client";
import useIsMobile from "@/app/js/useIsMobile";
import GalleryDesktop from "@/components/galleryDesktop";
import GalleryMobile from "@/components/galleryMobile";

export default function Gallery() {
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile ? (
                <GalleryMobile/>
            ) : (
                <GalleryDesktop/>
            )}
        </>
    )
}