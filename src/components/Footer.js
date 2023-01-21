import { Link, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  // automatic update for the footer year
  const year = new Date().getFullYear();

  return (
    <div>
      <footer>
        <VStack>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>
              &copy; {year}{" "}
              <Link
                href="https://rdtungul.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                rosephdarl
              </Link>{" "}
              - Instructor/ Web Developer. Made with ❤ & ☕.
            </Text>
          </Box>
        </VStack>
      </footer>
    </div>
  );
}
