import React from "react";
import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67b794ada22ab1191259363e/1ikihphvd";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return null; // This component only injects the script
};

export default TawkMessenger;
