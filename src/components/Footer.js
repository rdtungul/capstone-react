import React from "react";

export default function Footer() {
  // automatic update for the footer year
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <footer>
        <p>
          &copy; {year}{" "}
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
}
