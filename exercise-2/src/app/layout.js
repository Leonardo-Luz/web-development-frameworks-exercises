import "./globals.css";
import NavBar from "@/components/navbar"

export const metadata = {
  title: "Notícias ADS",
  description: "Exemplo feito em aula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}