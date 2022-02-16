import { useState } from "react";
import { gql, useMutation } from '@apollo/client'

const CREATE_ACCOUNT = gql`
  mutation ($inputData: CreateAccountInput!) {
    createAccount(input: $inputData){
      username
      name
      dateCreated
    }
  }
`

const RegisterForm = () => {
  const [form, setForm] = useState("");
  const [createAccount, {data, loading, error}]= useMutation(CREATE_ACCOUNT);
  console.log("🚀 ~ file: RegisterForm.jsx ~ line 17 ~ RegisterForm ~ data", data)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createAccount({ variables: { inputData: form } });
    } catch (error) {
      console.log("🚀 ~ file: RegisterForm.jsx ~ line 30 ~ handleSubmit ~ error", error)
    }
  }

  if (loading) return <p>Submitting...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
