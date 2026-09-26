import { ImageResponse } from "next/og";

export const alt = "Amaka Oyelaran, Senior Social Media Manager (sample portfolio)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ff6a2b",
          color: "#2a140d",
          padding: 64,
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>Amaka Oyelaran, Senior Social Media Manager</div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, maxWidth: 940 }}>
          I make Nigerian brands worth following.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <span>Lagos, Nigeria</span>
          <span style={{ background: "#2a140d", color: "#d9f23a", padding: "8px 20px", borderRadius: 40 }}>
            Sample portfolio, class demo
          </span>
        </div>
      </div>
    ),
    size,
  );
}
