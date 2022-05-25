import mock from "../mock";
import {Constructor} from "../types/basic";

export function CreateAt(constructor: Constructor) {
    return class extends constructor {
        createAt = new Date()
    }
}


