import { useState, useEffect } from 'react'

const useForm = (callback: Function, validate: Function) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    if (Object.keys(errors).length) {
      setIsSubmitting(false)
    }
  }, [errors]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = (e) => {
    e.persist()
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return {
    handleChange,
    handleSubmit,
    isSubmitting,
    setIsSubmitting,
    values,
    errors
  }
}

export default useForm
