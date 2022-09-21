import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'

export const App: Component = () => {
  const [count, setCount] = createSignal(0)
  return (
    <div
      overflow-x-hidden min-h="100vh" min-w="100vh"
      bg="#7EA1C4" text="#1B365C"
      flex="~" justify-center items-center
    >
      <div w-100 flex="~ wrap" justify-center items-center>
        <div
          w-full flex="~"
          justify-center text-12
        >{count()}</div>
        <button w-full class="btn" onClick={() => setCount(count() + 1) }>increment count</button>
      </div>
    </div>
  )
}
