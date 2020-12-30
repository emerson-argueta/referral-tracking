import { Reducer } from "react"

export const reducerFactory = <S, A>(initialState: S, handlers: { [key: string]: Reducer<S, any> }) => {

    const reducer: Reducer<S, A> = (state = initialState, action) => {
        const type = (action as any).type
        const handler = handlers[type]
        if (handler) {
            return handler(state, action)
        }

        return state
    }

    return reducer
}