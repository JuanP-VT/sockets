//Factory function to create new users
import type { NewUser } from "@/types/user";

export default function newUserFactory(newUser: NewUser): NewUser {
  return {
    name: newUser.name,
    password: newUser.password,
  };
}
