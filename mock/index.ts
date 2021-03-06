import { Catch } from "decorator/property/Catch";

class User {
  users = 1000;

  @Catch()
  logUsers() {
    console.log(this.users);
    throw new Error("error");
  }
  constructor(public age: number) {}
}

const user = {
  name: "Vital",
  age: 35,
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const roles = ["user", "admin", "super-user"] as const;

export default {
  user,
  nums,
  roles,
  User,
};
