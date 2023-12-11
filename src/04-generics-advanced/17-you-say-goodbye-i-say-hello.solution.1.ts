import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

function youSayGoodbyeISayHello<TGreeting extends "hello" | "goodbye">(
  greeting: TGreeting
): TGreeting extends "hello" ? "goodbye" : "hello" {
  return (greeting === "goodbye" ? "hello" : "goodbye") as any;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
