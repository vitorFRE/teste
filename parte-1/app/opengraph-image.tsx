import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Positivus — Digital Marketing Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#191a23",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 22px",
            background: "#b9ff66",
            borderRadius: 10,
            marginBottom: 28,
            fontSize: 22,
            color: "#191a23",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Positivus
        </div>
        <div
          style={{
            fontSize: 52,
            color: "white",
            fontWeight: 500,
            lineHeight: 1.08,
            maxWidth: 980,
            letterSpacing: "-0.03em",
          }}
        >
          Navigating the digital landscape for success
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#b9ff66",
            marginTop: 20,
            fontWeight: 400,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          SEO, PPC, social media marketing & content that grows your business
        </div>
      </div>
    ),
    { ...size },
  );
}
