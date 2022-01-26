import { useState } from 'react'

const useUser = () => {
  const [value, setValue] = useState(0)

  const increment = () => setValue(prevState => prevState + 1)
  const decrement = () => setValue(prevState => prevState - 1)

  return {
    value,
    increment,
    decrement,
  }
}

export default useUser
