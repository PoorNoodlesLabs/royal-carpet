export const validateForm = (values) => {
  let errors: any = {}

  if (!values.name || values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!values.message || values.message.length < 5) {
    errors.message = 'Tell us a little more about how we can help you'
  }

  if(!values.email) {
    errors.email = 'Email address is required'
  }

  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email'
  }

  return errors
}
