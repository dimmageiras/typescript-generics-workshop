import { Equal, Expect } from "@total-typescript/helpers";

const divElement = document.querySelector("div");
const spanElement = document.querySelector("span");

const divElement2 = document.querySelector<HTMLDivElement>("div.foo");

type tests = [
  Expect<Equal<typeof divElement, HTMLDivElement | null>>,
  Expect<Equal<typeof spanElement, HTMLSpanElement | null>>,
  Expect<Equal<typeof divElement2, HTMLDivElement | null>>,
];
