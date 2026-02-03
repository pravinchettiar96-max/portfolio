import Link from "next/link";   // IMPORT

export default function Home() {   // EXPORT
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Domino’s Pizza 🍕</h1>
      <p style={styles.text}>
        Hot & Fresh Pizza Delivered Fast at your doorstep.
      </p>

      <button style={styles.button}>ORDER NOW</button>

      <div style={{ marginTop: "40px" }}>
        {/* LINK TO ABOUT PAGE */}
        <Link href="/about">
          <span style={styles.link}>Go to About Me →</span>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#e31837",
    color: "white",
    minHeight: "100vh",
    textAlign: "center",
    paddingTop: "150px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "48px",
  },
  text: {
    fontSize: "20px",
    margin: "20px 0",
  },
  button: {
    padding: "14px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  link: {
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    textDecoration: "underline",
  },
};
