import { User } from "../user";
import { getUserFullName } from "../utils";

describe("Get user's fullname", () => {
  it("should return the user's fullName", () => {
    const user: User = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      role: "admin",
      isActive: true,
      products: [],
    };

    const result = getUserFullName(user);
    expect(result).toEqual("John Doe");
  });
});
