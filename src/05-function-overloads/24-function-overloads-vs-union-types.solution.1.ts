import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

function runGenerator(generator: () => string): string;
function runGenerator(generator: { run: () => string }): string;
function runGenerator(generator: { run: () => string } | (() => string)) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
