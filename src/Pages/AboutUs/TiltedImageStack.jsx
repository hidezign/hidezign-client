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
    "https://images.unsplash.com/photo-1762496991966-584520e6ff1a?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    "https://images.unsplash.com/photo-1761872936081-344b9b67cedc?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1761839257661-c2392c65ea72?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
    "https://images.unsplash.com/photo-1762498322297-10a7035e9334?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    "https://plus.unsplash.com/premium_photo-1761295138950-9399ff74650f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070",
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
