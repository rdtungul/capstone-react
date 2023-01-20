import "./App.css";
// importing logo for header
import headerLogo from "./Logo.svg";

function App() {
  const navLinks = {
    home: "#home",
    blog: "#blog",
    about: "#about",
  };
  const Nav = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href={navLinks.home} rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href={navLinks.blog} rel="noopener noreferrer">
                Blog
              </a>
            </li>
            <li>
              <a href={navLinks.about} rel="noopener noreferrer">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };

  const Header = () => {
    return (
      <div>
        <header>
          <img src={headerLogo} alt="logo" />
          <Nav />
        </header>
      </div>
    );
  };

  const Main = () => {
    return (
      <div>
        <main>
          <div>
            <h1>This is the Main Section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nihil
              necessitatibus illum libero praesentium! Cupiditate officiis magni
              voluptatem eum reprehenderit omnis! Officia facere obcaecati hic
              pariatur soluta consequatur sequi quaerat.
            </p>
          </div>
        </main>
      </div>
    );
  };

  const Footer = () => {
    const date = new Date().toString;
    return (
      <div>
        <footer>
          <p>
            &copy; {date}{" "}
            <a
              href="https://rdtungul.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              rosephdarl
            </a>{" "}
            - Instructor/ Web Developer. Made with ❤ & ☕.
          </p>
        </footer>
      </div>
    );
  };
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
