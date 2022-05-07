# setState

# Recancelation алгоритм

    https://ru.reactjs.org/docs/reconciliation.html

    При сравнении двух React DOM-элементов одного типа, React смотрит на атрибуты обоих, сохраняет лежащий в основе этих элементов DOM-узел и обновляет только изменённые атрибуты.

# React Hooks

## Основные хуки

    useState
    useEffect  = работает асинхронно. Сначала вычисляет state, затем отрисовывает.
      функция отписок будет вызываться:
    1) всегда при размонтировании компонента
    2) при отсутсвии массива зависимостей каждый раз при обновлении любого стейта
    3) при обновлении переменной, которая есть в массиве зависимостей


    useContext

## Дополнительные хуки

    useMemo
    useCallback
    useRef =
        Изменение рефа не вызывает ререндер компонента. Его изменения отобразятся только тогда, когда что-то заставит
          компонент отрендерится
    useReducer
    useImperativeHandle
    useLayoutEffect = работает с синхронным кодом. Сначал вычисляет state, затем отрисовывает.
    useDebugValue

# Redux

    store = хранилище состояния.
        Методы store: dispatch, getState, subscribe.
    action =  объект типа {type, payload}
    actionCreator =  fn returns объект типа {type, payload}
    dispatch - метод store, котороый принмает аргумент action и вызывает под капотом reducer  и передает ей в action
    Reducer -  Чистая функция!
    Принимает cuurent state, action  и возвращает новый state.

    Provider from react-redux   -  работает как provider в context

    connect(mapStateToProps, mapDispathcToProps)  = передает state и actionCreators в пропсы компонента

    mapStateToProps = объект, который получает пропсы-свойства из стейта redux

    mapDispathcToProps = объект, который получает в пропсы actionCreators. Можно передать объект, который в качестве полей содержит все необходимые actionCreators
    Может иметь функциональный вид, у которого параметы dispatch, ownProps
    ownProps = объект пропсов, которые пришли из hoc. Если помимо connect  есть другой hoc, то новые добавленные свойства можно получить из ownProps

    middleWare в redux =  функция, которая модифицирут dispatch. Если middleWare несколько, то они будут вызываться по цепочке.
