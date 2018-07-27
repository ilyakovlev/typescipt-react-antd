type FunctionType = ( ...args: any[]) => any
type ActionCreatorsMap = { [actionCreator: string]: FunctionType}

export type ActionsUnion<A extends ActionCreatorsMap> = ReturnType<A[keyof A]>
