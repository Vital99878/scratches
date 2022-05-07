// ---------- CSS ---------- //

# Checking types

    https://www.youtube.com/watch?v=eJ6R1knfsoc&t=251s
    https://codesandbox.io/s/typescript-june-2021-forked-vfe1u?file=/src/assertions.ts:0-254

## Type predicates

    const isAdmin = (user: Admin | User): user is Admin => {
        return user.type === 'admin'
    }

## key in object

    exsemple

    if ('key' in object) { some logic  }

## Lookup types

    exemple

    type Role = Admin['field of another type']


# Interface

## Использрвание в функции для описания параметра

    Пример:
        interface Car {
            year: number
        }
        const car = {
            year: 2015,
            speed: 200
        }
        const showCar = (car: Car): void => {
            console.log(car.year)
        }

## 
