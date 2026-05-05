import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#15140f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#faf9f5" strokeWidth="1.5" fill="none">
            <line x1="32" y1="14" x2="18" y2="34" />
            <line x1="32" y1="14" x2="46" y2="34" />
            <line x1="18" y1="34" x2="11" y2="50" />
            <line x1="18" y1="34" x2="25" y2="50" />
            <line x1="46" y1="34" x2="39" y2="50" />
            <line x1="46" y1="34" x2="53" y2="50" />
          </g>
          <g fill="#faf9f5">
            <circle cx="32" cy="14" r="3.6" />
            <circle cx="18" cy="34" r="3" />
            <circle cx="46" cy="34" r="3" />
            <circle cx="11" cy="50" r="2.4" />
            <circle cx="25" cy="50" r="2.4" />
            <circle cx="39" cy="50" r="2.4" />
            <circle cx="53" cy="50" r="2.4" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
