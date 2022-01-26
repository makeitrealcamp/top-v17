import { SyntheticEvent, FormEvent, ChangeEvent, FC } from 'react'

const Form: FC = () => {
  const type = "submit"
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  const handleClick = (e: SyntheticEvent) => {
    console.log(e)
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    console.log(evt)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} />
        <button type={type} >
          hola
        </button>
      </form>

      <div onClick={handleClick}>click me</div>
    </>
  )
}

export default Form
