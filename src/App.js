import "./App.css";

import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/expertise/Services";
import Resume from "./components/experience/Resume";
import Portfolio from "./components/recent_projects/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/workshops/Blog";
import Contact from "./components/contact/Contact";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Sidebar theme={theme} switchTheme={switchTheme} />
      <main className="main">
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Blog />
        <Testimonials />
        <Contact theme={theme} />
      </main>
    </div>
  );
}

export default App;
