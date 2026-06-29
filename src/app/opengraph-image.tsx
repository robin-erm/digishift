import { ImageResponse } from "next/og";

export const alt = "DigiShift – KI-Automatisierungen für Unternehmen";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d0f14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,110,246,0.18) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Background glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,110,246,0.10) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Logo row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "rgba(59,110,246,0.15)",
              border: "1.5px solid rgba(59,110,246,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#4a7aff",
                fontWeight: 700,
                fontSize: 22,
                letterSpacing: -1,
              }}
            >
              D
            </span>
          </div>
          <span
            style={{
              color: "#ffffff",
              fontWeight: 600,
              fontSize: 22,
              letterSpacing: -0.3,
            }}
          >
            DigiShift
          </span>
        </div>

        {/* Main headline — two lines via flexDirection column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              color: "#ffffff",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            KI-Automatisierungen
          </span>
          <span
            style={{
              color: "#4a7aff",
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            für Ihr Unternehmen.
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#8b9ab8",
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 640,
            marginBottom: 56,
            display: "flex",
          }}
        >
          Wiederkehrende Prozesse automatisieren – Zeit sparen, Kosten senken,
          Produktivität steigern.
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 32,
          }}
        >
          {[
            { value: "–70%", label: "manuelle Arbeit" },
            { value: "–40%", label: "Betriebskosten" },
            { value: "3×", label: "Produktivität" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                padding: "16px 24px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
              }}
            >
              <span
                style={{
                  color: "#4a7aff",
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: -0.5,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  color: "#6b7a99",
                  fontSize: 14,
                  fontWeight: 400,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain tag bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 96,
            color: "#3d4f70",
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: 0.3,
            display: "flex",
          }}
        >
          digishift-ai.de
        </div>
      </div>
    ),
    size
  );
}
