import { useState } from 'react'

import SelectPage from './SkipPage/skipPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SelectPage/>
    </>
  )
}

export default App
