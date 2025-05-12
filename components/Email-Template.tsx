import React from "react";

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: Readonly<EmailTemplateProps>) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff8e1",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        color: "#333",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#d97706" }}>
        Enes <span style={{ color: "#b45309" }}>SARIHAN</span>
      </h1>
      <h2>From: {name}</h2>
      <h3>Email: {email}</h3>
      <h4>Subject: {subject}</h4>
      <p style={{ marginTop: "16px" }}>Message: {message}</p>
    </div>
  );
}
