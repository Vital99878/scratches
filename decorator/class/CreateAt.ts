import { Constructor } from "../../types/basic";

export function CreateAt<T extends Constructor>(constructor: T) {
  return class extends constructor {
    createAt = new Date();
  };
}
