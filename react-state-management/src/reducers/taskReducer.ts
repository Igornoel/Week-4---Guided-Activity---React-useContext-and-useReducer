type Task = { id: number; text: string }
type State = Task[]
type Action =
  | { type: 'add'; payload: string }
  | { type: 'remove'; payload: number }

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'add': {
      const text = action.payload.trim()
      if (!text) return state
      return [...state, { id: Date.now(), text }]
    }
    case 'remove':
      return state.filter((task) => task.id !== action.payload)
    default: {
      const exhaustiveCheck: never = action
      throw new Error(`Unknown action: ${String(exhaustiveCheck)}`)
    }
  }
}
