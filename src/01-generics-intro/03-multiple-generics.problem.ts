import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {
  return {
    a,
    b,
  };
};

it("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({
    a: "a",
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
