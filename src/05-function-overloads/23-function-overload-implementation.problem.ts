import { Equal, Expect } from "@total-typescript/helpers";
import { it } from "vitest";

interface AnonymousPrivileges {
  sitesCanVisit: string[];
}

interface UserPrivileges extends AnonymousPrivileges {
  sitesCanEdit: string[];
}

interface AdminPrivileges extends UserPrivileges {
  sitesCanDelete: string[];
}

function getRolePrivileges(role: "admin"): AdminPrivileges;
function getRolePrivileges(role: "user"): UserPrivileges;
function getRolePrivileges(role: string): AnonymousPrivileges {
  switch (role) {
    case "admin":
      return {
        sitesCanDelete: [],
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    case "user":
      return {
        sitesCanEdit: [],
        sitesCanVisit: [],
      };
    default:
      return {
        sitesCanVisit: [],
      };
  }
}

it("Should return the correct privileges", () => {
  const adminPrivileges = getRolePrivileges("admin");

  const userPrivileges = getRolePrivileges("user");
  const anonymousPrivileges = getRolePrivileges("anonymous");

  type tests = [
    Expect<Equal<typeof adminPrivileges, AdminPrivileges>>,
    Expect<Equal<typeof userPrivileges, UserPrivileges>>,
    Expect<Equal<typeof anonymousPrivileges, AnonymousPrivileges>>,
  ];
});
