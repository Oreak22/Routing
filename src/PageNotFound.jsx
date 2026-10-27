import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page not found</h2>
        <p style={styles.text}>
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <a href="/" style={styles.link}>
          Go back home
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f7fb",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    textAlign: "center",
    background: "#ffffff",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
    maxWidth: "420px",
    width: "100%",
  },
  code: {
    margin: 0,
    fontSize: "72px",
    color: "#1f2937",
    lineHeight: 1,
  },
  title: {
    margin: "12px 0 8px",
    color: "#111827",
    fontSize: "28px",
  },
  text: {
    margin: "0 0 20px",
    color: "#6b7280",
    fontSize: "16px",
    lineHeight: 1.5,
  },
  link: {
    display: "inline-block",
    background: "#2563eb",
    color: "#ffffff",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "600",
  },
};

export default PageNotFound;
