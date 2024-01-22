import localFont from "next/font/local";

const graffont1 = localFont({
  src: "../../fonts/docallismeonstreet.otf",
  variable: "--graffont1",
});

const graffont2 = localFont({
  src: "../../fonts/graffiticity.otf",
  variable: "--graffont2",
});

const graffont3 = localFont({
  src: "../../fonts/graffitiyouth.otf",
  variable: "--graffont3",
});

const graffont4 = localFont({
  src: "../../fonts/throwupz.ttf",
  variable: "--graffont4",
});

import "./GraffitiText.module.css";

export function GraffitiText1({ children, className = "" }) {
  return (
    <p id="graff1" className={`${graffont1.className} ${className}`}>
      {children}
    </p>
  );
}

export function GraffitiText2({ children, className = "" }) {
  return (
    <p id="graff2" className={`${graffont2.className} ${className}`}>
      {children}
    </p>
  );
}

export function GraffitiText3({ children, className = "" }) {
  return (
    <p id="graff3" className={`${graffont3.className} ${className}`}>
      {children}
    </p>
  );
}

export function GraffitiText4({ children, className = "" }) {
  return (
    <p id="graff4" className={`${graffont4.className} ${className}`}>
      {children}
    </p>
  );
}
