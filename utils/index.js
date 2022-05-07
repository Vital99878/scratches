// DATA
const nums = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7,
]
let users = [
  { name: "John", age: 20, surname: "BJohnson" },
  { name: "Pete", age: 18, surname: "APeterson" },
  { name: "Ann", age: 19, surname: "AAathaway" },
]
export const people = [
  {
    name: "Denis",
    age: 25,
  },
  {
    name: "Ivan",
  },
  {
    name: "Ann",
    age: 18,
  },
]

//  REDUCE

/**
 * @description Считает кол-во повторяющихся элементов
 * @param arr string []
 * @return obj: {item: quantity}
 */
function tallyFrom(arr) {
  return arr.reduce((tally, item) => {
    tally[item] = (tally[item] || 0) + 1
    return tally
  }, {})
}

/**
 * @description вернуть уникальные элементы
 * @param []
 * @returns uniqs elements []
 */
const uniq = [...new Set(nums)]

// вернуть ind последнего вхождения
let findLastInd = nums.lastIndexOf(false)

// найти ind первого вхождения
let findFirstInd = nums.findIndex((item) => item === 5)

// найти пересечения массивов
let crossing = [...new Set(nums)].filter((num) => nums.includes(num))

// создать объект из массива с пронумерованными ключами

const names = Array.from(people, ({ name }) => name)

// clear  array
nums.splice(0, nums.length)

// delete = удаляет первый найденный элемент, длинна массива сохраняется. Вместо удаленного элемента undefined
delete nums[4]

function slice_Delete(arr) {
  const ind = arr.findIndex((el) => el.id === id)
  const newArray = [...arr.slice(0, ind), ...arr.slice(ind + 1)]
  return { todoData: newArray }
}

let expensesOfDay = [{ nameExp: "Name_1", value: 150, scratch: "first" }]
// filter and sorting for budget

// console.dir()  можно посмотреть узел HTML-документа как объект

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str
}

function create_pages(arr, divider) {
  let pages = []
  while (arr.length >= divider) {
    let page = arr.splice(0, divider)
    pages.push(page)
  }
  if (arr.length !== 0) {
    pages.push(arr)
  }
  return pages
}

function num_round_half(num) {
  let d = Math.floor(num),
    i = num % d
  return i < 0.25 ? d : i < 0.75 ? d + 0.5 : d + 1
}

const debounce = (fn, debounceTime) => {
  let timeout

  return function () {
    let fn_call = () => {
      fn.apply(this, arguments)
    }
    clearTimeout(timeout)
    timeout = setTimeout(fn_call, debounceTime)
  }

  // https://www.youtube.com/watch?v=YaM0CaDTshc
  // https://platform.java-mentor.com/user/courses/1/3/2/11
}

const foundIndex = nums.findIndex((el, value, curentArray) => {
  if (el === 11) return true
}, 1)

function inBetween(min, max) {
  return (item) => item >= min && item <= max
}
function inArray(arr) {
  return (item) => arr.includes(item)
}
function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1)
}
console.log(users.sort(byField("age")))
console.log(nums.filter(inBetween(3, 6)))
console.log(nums.filter(inArray([1, 2, 3])))

/**
 * @description Из двух массивов возвращает пересечение.
 * @param arr []
 * @param arr []
 * @return intersection []
 */

function intersection(arr_1, arr_2) {
  let res = []
  const prerRes = arr_1.reduce((acc, item) => {
    acc[item] = 1
    return acc
  }, {})
  arr_2.forEach((number) => {
    if (prerRes.hasOwnProperty(number)) {
      res.push(number)
    }
  })
  return res
}
// filter by substring
data_2.filter((item) => item.indexOf("ab") > -1)

async function processArray(array) {
  for (const item of array) {
    await delayedLog(item)
  }
  console.log("Done!")
}

function incrementVersion(version) {
  let updatedNumber = +version.split(".").join("") + 1

  const digits = []
  while (updatedNumber > 0) {
    digits.push(updatedNumber % 10)
    updatedNumber = parseInt(updatedNumber / 10)
  }

  const updatedVersion = digits.reverse().join(".")
  return updatedVersion
}

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

export { tallyFrom, curry, debounce, incrementVersion, processArray, truncate }
