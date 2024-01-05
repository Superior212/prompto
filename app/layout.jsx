import Nav from "@components/Nav";
import Providder from "@components/Providder";
import "@styles/globals.css";

export const metadata = {
  title: "Prompto",
  description: "Discover & Share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providder>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Providder>
      </body>
    </html>
  );
};

export default RootLayout;
