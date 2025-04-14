import { User } from "./user";

export function getUserFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}
