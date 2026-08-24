import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Inter, Arial, sans-serif", maxWidth: 600, margin: "0 auto", backgroundColor: "#0a0a0a", color: "#ffffff", borderRadius: 12, overflow: "hidden" }}>
    {/* Header */}
    <div style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", padding: "32px 40px" }}>
      <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: "#ffffff" }}>
        📬 New Portfolio Message
      </h1>
      <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.8)", fontSize: 14 }}>
        Someone reached out via your portfolio contact form
      </p>
    </div>

    {/* Body */}
    <div style={{ padding: "32px 40px" }}>
      <div style={{ marginBottom: 24, padding: "16px 20px", backgroundColor: "#1a1a1a", borderRadius: 8, borderLeft: "4px solid #6366f1" }}>
        <p style={{ margin: 0, fontSize: 12, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>From</p>
        <p style={{ margin: "4px 0 0", fontSize: 18, fontWeight: 600, color: "#fff" }}>{fullName}</p>
        <a href={`mailto:${email}`} style={{ color: "#818cf8", fontSize: 14, textDecoration: "none" }}>{email}</a>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>Message</p>
        <div style={{ padding: "20px", backgroundColor: "#1a1a1a", borderRadius: 8, fontSize: 15, lineHeight: 1.7, color: "#e2e8f0", whiteSpace: "pre-wrap" }}>
          {message}
        </div>
      </div>

      <a
        href={`mailto:${email}?subject=Re: Your Portfolio Inquiry`}
        style={{
          display: "inline-block",
          padding: "12px 28px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#ffffff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Reply to {fullName} →
      </a>
    </div>

    {/* Footer */}
    <div style={{ padding: "20px 40px", borderTop: "1px solid #1a1a1a", fontSize: 12, color: "#555" }}>
      Sent from <strong style={{ color: "#888" }}>simhadripadmakar.dev</strong> portfolio contact form
    </div>
  </div>
);

