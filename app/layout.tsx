import "./globals.css";

export const metadata = {
  title: "Helix UI Docs",
  description: "Documentation for Helix UI components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar */}
          <aside
            style={{
              width: "240px",
              background: "#0f172a",
              color: "white",
              padding: "20px",
            }}
          >
            <h2>Helix UI</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>Introduction</li>
              <li>Button</li>
              <li>Input</li>
              <li>Card</li>
            </ul>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, padding: "40px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}
