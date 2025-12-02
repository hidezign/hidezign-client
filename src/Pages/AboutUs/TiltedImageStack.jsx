import React from "react";

/**
 * StaticTiltedStack
 * - Static (no animations, no framer-motion)
 * - Five centered, overlapping, tilted images matching reference layout
 * - Responsive using Tailwind percentage widths + aspect-square
 *
 * Usage:
 * - Drop into your React app; ensure Tailwind is available
 */

const DEFAULT_IMAGES = [
    "https://res.cloudinary.com/ds8buve4c/image/upload/v1764712379/Rectangle_14about_kvu3oc.png",
    "https://res.cloudinary.com/ds8buve4c/image/upload/v1764712379/Rectangle_15about_tb17zi.png",
    "https://res.cloudinary.com/ds8buve4c/image/upload/v1764712379/Rectangle_16about_vptfxa.png",
    "https://res.cloudinary.com/ds8buve4c/image/upload/v1764712379/Rectangle_17about_b3k6gp.png",
    "https://res.cloudinary.com/ds8buve4c/image/upload/v1764712379/Rectangle_18about_qkgdfk.png"
];

export default function StaticTiltedStack({ images = DEFAULT_IMAGES, rotations = [-12, -6, 0, 6, 12] }) {
    const centerIndex = Math.floor(images.length / 2);
    const spacingVW = 15; // controls horizontal spread

    const leftPercentVW = (index) => (index - centerIndex) * spacingVW;

    return (
        <section className="w-full flex justify-center py-4 ">
            <div className="relative w-full overflow-hidden">
                <div className="relative h-[36vh] md:h-[44vh] lg:h-[52vh] flex items-center justify-center " style={{ transform: "translateY(-28px)" }}>
                    {images.map((src, idx) => {
                        const baseRotate = rotations[idx % rotations.length];
                        const lpVW = leftPercentVW(idx);

                        const style = {
                            left: `calc(50% + ${lpVW}vw)`,
                            transform: `translateX(-50%) rotate(${baseRotate}deg)`,
                            zIndex: 10 + idx,
                        };

                        return (
                            <div
                                key={idx}
                                role="img"
                                aria-label={`cover-${idx + 1}`}
                                className="absolute rounded-md overflow-hidden shadow-xl bg-white"
                                style={style}
                            >
                                <div className="w-[36vw] min-w-[160px] max-w-[400px] sm:w-[30vw] md:w-[24vw] lg:w-[20vw] aspect-square">
                                    <img
                                        src={src}
                                        alt={`cover-${idx}`}
                                        className="w-full h-full object-cover block select-none"
                                        draggable={false}
                                        onDragStart={(e) => e.preventDefault()}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
