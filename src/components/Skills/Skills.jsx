import { useState, useEffect, useRef } from "react";
import "./Skills.css";

export default function Hero() {
  const staticMessage = "hello";
  const openMyWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=+923074029959&text=${staticMessage}`,
      "_blank"
    );
  };

  const skills = [
    { title: "React.js" },
    { title: "JavaScript" },
    { title: "Redux" },
    { title: "TypeScript" },
    { title: "HTML5" },
    { title: "CSS3" },
    { title: "Bootstrap" },
    { title: "Tailwind CSS" },
    { title: "Kendo UI" },
    { title: "Google Charts" },
    { title: "Lightweight Charts" },
    { title: "Next.js" },
    { title: "Vue.js" },
    { title: "Three.js" },
    { title: "R3F" },
    { title: "2D/3D Web Development" },
    { title: "Figma" },
    { title: "React Native" },
    { title: "Angular" },
    { title: "Electron.js" },
    { title: "Node.js" },
    { title: "Express.js" },
    { title: "REST APIs" },
    { title: "SOAP APIs" },
    { title: "Microservices" },
    { title: "Sockets" },
    { title: "Lightstreamer" },
    { title: "Apache Kafka" },
    { title: "JWT" },
    { title: "OAuth" },
    { title: "MongoDB" },
    { title: "MySQL" },
    { title: "Redis" },
    { title: "Git" },
    { title: "GitHub" },
    { title: "Docker" },
    { title: "CI/CD" },
    { title: "Vercel" },
    { title: "Agile / Scrum" },
    { title: "AI Prompt Engineering" },
    { title: "ChatGPT" },
    { title: "Gemini" },
    { title: "Lovable" },
    { title: "AI Fiesta" },
  ];

  const [pickedItems, setPickedItems] = useState([]);
  const rectsRef = useRef([]);

  // NEW: ref for the flashed area + dynamic area size
  const areaRef = useRef(null);
  const areaSizeRef = useRef({ width: 520, height: 320 });

  const PADDING = 10;

  const estimateRect = (title, top, left) => {
    const charW = 9;
    const h = 28;
    const w = Math.min(340, Math.max(60, title.length * charW + 18));
    return { top, left, right: left + w, bottom: top + h, w, h };
  };

  const intersects = (a, b) =>
    !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);

  const randomPos = (rectW, rectH) => {
    const { width, height } = areaSizeRef.current;

    const maxLeft = Math.max(PADDING, width - rectW - PADDING);
    const maxTop = Math.max(PADDING, height - rectH - PADDING);

    const left = Math.floor(Math.random() * (maxLeft - PADDING + 1)) + PADDING;
    const top = Math.floor(Math.random() * (maxTop - PADDING + 1)) + PADDING;

    return { top, left };
  };

  // NEW: keep area size in sync on load + resize
  useEffect(() => {
    const updateArea = () => {
      if (!areaRef.current) return;
      const r = areaRef.current.getBoundingClientRect();
      areaSizeRef.current = {
        width: Math.floor(r.width),
        height: Math.floor(r.height),
      };
    };

    updateArea();
    window.addEventListener("resize", updateArea);
    return () => window.removeEventListener("resize", updateArea);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomItem = skills[Math.floor(Math.random() * skills.length)];
      let placed = null;

      for (let tries = 0; tries < 40; tries++) {
        const tempRect = estimateRect(randomItem.title, 0, 0);
        const { top, left } = randomPos(tempRect.w, tempRect.h);
        const rect = estimateRect(randomItem.title, top, left);

        const collision = rectsRef.current.some((r) => intersects(rect, r));
        if (!collision) {
          placed = { ...randomItem, top, left, _rect: rect };
          break;
        }
      }

      if (!placed) return;

      setPickedItems((prev) => {
        const updated = [...prev, placed];
        const maxLength = 5;

        if (updated.length > maxLength) {
          const removed = updated.shift();
          rectsRef.current = rectsRef.current.filter((r) => r !== removed._rect);
        }

        rectsRef.current = [...rectsRef.current, placed._rect];
        return updated;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const clearAll = () => {
    rectsRef.current = [];
    setPickedItems([]);
  };

  return (
    <section id="skills">
      <div className="wrapper-skills">
        <div className="inner-wrapper-skills">
          <p className="skills">Skills</p>
          <hr className="neon-line" />

          <div className="content-skills">
            <div className="code-robot" onClick={clearAll} />

            <div className="flashing-skills-area">
              {/* add ref here */}
              <div
                ref={areaRef}
                className="flashed-area"
                style={{ position: "relative" }}
              >
                {pickedItems.map((p, i) => (
                  <span
                    key={`${p.title}-${i}`}
                    className="text"
                    style={{
                      top: `${p.top}px`,
                      left: `${p.left}px`,
                      position: "absolute",
                      whiteSpace: "nowrap",
                      padding:"5px"
                    }}
                  >
                    {p.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a onClick={openMyWhatsApp} href="#" className="hire-me">
            Awesome? Hire me!
          </a>
        </div>
      </div>
    </section>
  );
}
