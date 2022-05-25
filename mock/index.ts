import {CreateAt} from "../decorators";

// @CreateAt
class User {
    constructor(public age: number) { }
}
const user = {
    name: 'Vital',
    age: 35,
}

const nums = [1,2,3,4,5,6,7,8,9,]

const roles = ['user', 'admin', 'super-user'] as const

export default {
    user, nums, roles, User
}
