import "./globals.css";

export const metadata = {
  title: "Bienvenido a Brooklyn",
  description: "Administrar Búho Electronics",
};

export default function RootLayout({children,}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ display: "flex", background: "#111", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}