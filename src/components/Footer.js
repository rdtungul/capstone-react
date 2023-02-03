import React from "react";

export default function Footer() {
  // automatic update for the footer year
  const year = new Date().getFullYear();

  return (
    <div className="Footer text-align-center">
      <footer>
        <p>
          &copy; {year}{" "}
          <a
            href="https://rdtungul.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            rosephdarl
          </a>{" "}
          - Instructor/ Web Developer. Made with ❤ & ☕.
        </p>
      </footer>
    </div>
  );
}
