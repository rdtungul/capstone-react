import React from "react";
import Main from "../components/Main";
import FullScreenSection from "../components/FullScreenSection";

export default function HomePage() {
  return (
    <div>
      <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#495E57"
      >
        <Main />
      </FullScreenSection>
    </div>
  );
}
