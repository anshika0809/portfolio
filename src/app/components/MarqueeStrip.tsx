const items = [
  "Figma", "·", "Wireframing", "·", "Prototyping", "·", "Adobe Illustrator", "·",
  "Information Architecture", "·", "Usability Testing", "·", "Power BI", "·",
  "WordPress", "·", "Interaction Design", "·", "Canva", "·", "UX Strategy", "·",
  "Responsive Web Design", "·", "Product UI Design", "·", "Claude AI", "·",
  "User Flows", "·", "Design Systems", "·", "Client Communication", "·",
];

const allItems = [...items, ...items];

export function MarqueeStrip() {
  return (
    <div
      style={{
        overflow: "hidden",
        padding: "1.5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(255,255,255,0.012)",
        position: "relative",
      }}
    >
      {/* Left fade */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to right, #050508, transparent)", zIndex: 2, pointerEvents: "none" }} />
      {/* Right fade */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(to left, #050508, transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marqueeScroll 35s linear infinite",
          willChange: "transform",
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              whiteSpace: "nowrap",
              padding: "0 0.875rem",
              fontSize: item === "·" ? "0.6rem" : "0.78rem",
              fontWeight: item === "·" ? 400 : 500,
              color: item === "·" ? "#1E293B" : "#334155",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: item === "·" ? 0 : "0.04em",
              textTransform: item === "·" ? "none" : "uppercase",
            }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
