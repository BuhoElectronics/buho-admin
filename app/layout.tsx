import "./globals.css";

export const metadata = {
  title: "Bienvenido a Brooklyn",
  description: "Administrar Búho Electronics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ display: "flex", background: "#111", color: "#fff" }}>
        <aside
          style={{
            width: "250px",
            background: "#000",
            padding: "20px",
            height: "100vh",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>Brooklyn</h2>

          <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <a href="/" style={{ color: "#fff" }}>Dashboard</a>
            <a href="/ventas" style={{ color: "#fff" }}>Ventas del día</a>
            <a href="/pedidos" style={{ color: "#fff" }}>Pedidos TakeApp</a>
            <a href="/cierres" style={{ color: "#fff" }}>Cierres de caja</a>
            <a href="/reportes" style={{ color: "#fff" }}>Reportes</a>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: "40px" }}>{children}</main>
      </body>
    </html>
  );
}
