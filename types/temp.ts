import mock from '../mock'
const data = {
    name: {
    a: '',
    b: 5
    }}


type Num = typeof mock.nums[number]

const n: Num = 5

type Name = typeof data['name']


