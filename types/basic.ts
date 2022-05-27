import mock from '../mock'
type Key = string | number | symbol

/**
 *  Удобно, когда нужно сделать юнион тип из массива. Массив предварительно нужно сделать as const
 */
type Role = typeof mock.roles[number]

type NullableType<T> = null | T

//<editor-fold desc="ReturnType">
type Action_1 = ReturnType<typeof actionCreator_1>;
type Action_2 = ReturnType<typeof actionCreator_2>;

export function actionCreator_1(number: number) {
  return { type: "ACTION", value: number };
}

function actionCreator_2(number: number) {
  return { type: "ACTION", value: number } as const;
}

// example
const action1: Action_1 = { value: 4, type: "fff" };
const action2: Action_2 = { value: 4, type: "ACTION" };
//</editor-fold>

//<editor-fold desc=" Fn type">
type Fn_1 = (...args: any[]) => any;
type Fn_2<T, U> = (str: T) => U;

const fn_1: Fn_1 = () => "any";

const fn_2: Fn_2<string, number> = (str) => Number(str);

const fn_3: Fn_2<number, number> = function f(str) {
  return str;
};
//</editor-fold>

const data: NullableType<string> = null;

async function as(): Promise<string> {
  return "string";
}

type Aw = Awaited<ReturnType<typeof as>>;

/**
 * Тип конструктора класса
 */
export type Constructor = { new (...args: any[]): {} };

export type Fn = (...args: any[]) => any;

export type ArgsDecoratorMethod = {
  target: Object;
  propertyKey: PropertyKey;
  descriptor: TypedPropertyDescriptor<Fn>;
};
