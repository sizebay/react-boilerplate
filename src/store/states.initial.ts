interface FooState {
  gotFoo: boolean
}

interface FooActions {
  GET_FOO: string
}

export const fooInitialState: FooState = {
  gotFoo: false,
}

export const fooActions: FooActions = {
  GET_FOO: '',
}
