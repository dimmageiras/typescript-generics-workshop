import { Equal, Expect } from "@total-typescript/helpers";

const makeStatus = <TStatuses extends string[]>(statuses: TStatuses) => {
  return statuses;
};

const statuses = makeStatus(["INFO", "DEBUG", "ERROR", "WARNING"]);

type tests = [
  Expect<Equal<typeof statuses, Array<"INFO" | "DEBUG" | "ERROR" | "WARNING">>>,
];
