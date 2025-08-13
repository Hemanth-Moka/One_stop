import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const OnestopGallery = ({ gradientColor = "black" }) => {
  const gridRef = useRef(null);
  const rowRefs = useRef([]);
  const mouseXRef = useRef(window.innerWidth / 2);

  // Add all your /public/images filenames here
  const imageFiles = [
    "IMG-20250812-WA0006.jpg",
    "IMG-20250812-WA0012.jpg",
    "IMG-20250812-WA0013.jpg",
    "IMG-20250812-WA0014.jpg",
    "IMG-20250812-WA0015.jpg",
    "IMG-20250812-WA0020.jpg",
    "IMG-20250812-WA0021.jpg",
    "IMG-20250812-WA0022.jpg",
    "IMG-20250812-WA0023.jpg",
    "IMG-20250812-WA0029.jpg",
    // ... add more here
  ];

  const totalItems = 28;
  const combinedItems = imageFiles.slice(0, totalItems);

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div ref={gridRef} className="h-full w-full overflow-hidden">
      <section
        className="w-full h-screen overflow-hidden relative flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-[4] bg-[length:250px]"></div>
        <div className="gap-4 flex-none relative w-[150vw] h-[150vh] grid grid-rows-4 grid-cols-1 rotate-[-15deg] origin-center z-[2]">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-4 grid-cols-7"
              style={{ willChange: "transform, filter" }}
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {[...Array(7)].map((_, itemIndex) => {
                const imageSrc =
                  combinedItems[rowIndex * 7 + itemIndex] || null;
                return (
                  <div key={itemIndex} className="relative">
                    <div className="relative w-full h-full overflow-hidden rounded-[10px] bg-[#111] flex items-center justify-center">
                      {imageSrc ? (
                        <img
                          src={`/images/${imageSrc}`}
                          alt={`Gallery item ${rowIndex * 7 + itemIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="p-4 text-center text-white text-lg">
                          Empty
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="relative w-full h-full top-0 left-0 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default OnestopGallery;
