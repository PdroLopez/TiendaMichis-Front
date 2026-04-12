import { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // 🔥 permite repetir animación
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-animado ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;