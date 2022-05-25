import {actionCreator_1} from './basic'
export type Infer<T extends object=object> = T extends infer R ? R[keyof R] : never

//<editor-fold desc="typeof for initialState">
type Role = 'Admin' | "User"

const initialState = {
    login: 'lihoy84@yandex.ru',
    age: 36,
    role: 'User' as Role,
    photo: null as string | null
}

type State = typeof initialState // для вывода типа из initialState

// example

function reducer(): State {
    return {age: 5, login: 'log', photo: 'path', role: 'Admin' }
}

//</editor-fold>

//<editor-fold desc="Properties Type">
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

// example
const obj = {
    a: {name: 'Vital', age: 50},
    b: {lastname: 'Vital', male: 'man'},
}
const a: PropertiesType<typeof obj> = {name: 'Kolya', age: 50}
const b: PropertiesType<typeof obj> = {lastname: 'Kolya', male: 'man'}

//</editor-fold>

type FnArgType<T> = T extends (...args: infer U) => any ? U : never

type ActionT = FnArgType<typeof actionCreator_1>

