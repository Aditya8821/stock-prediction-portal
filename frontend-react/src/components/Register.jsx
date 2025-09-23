import React, {useState} from 'react'
import axiosInstance from '../axiosInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleRegistration = async (e) =>{
    e.preventDefault();
    setLoading(true);
    
    const userData = {
      username, email, password
    }
    
    try{
      const response = await axiosInstance.post('/register/', userData)
      console.log('response.data==>', response.data)
      console.log('Registration successful');
      setErrors({})
      setSuccess(true)
    }catch(error){
      console.error('Registration error: ', error);
      
      // Set a default error message
      let errorMessage = 'An error occurred while processing your request.';
      
      try {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setErrors(error.response.data);
          console.error('Error response data: ', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request: ', error.request);
          errorMessage = 'Unable to connect to the server. Please make sure the backend server is running.';
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message: ', error.message);
          errorMessage = error.message || errorMessage;
        }
      } catch (e) {
        console.error('Error handling error: ', e);
      }
      
      // Set a generic error if we couldn't extract specific errors
      if (!error.response || !error.response.data) {
        setErrors({ non_field_errors: [errorMessage] });
      }
    }finally{
      setLoading(false)
    }
  }
  return (
    <>
    <div className='container'>
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-5 rounded">
                <h3 className='text-light text-center mb-4'>Create an Account</h3>
                <form onSubmit={handleRegistration}>
                  <div className='mb-3'>
                    <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <small>{errors.username && <div className='text-danger'>{errors.username}</div>}</small>
                  </div>
                    <div className='mb-3'>
                      <input type="email" className='form-control' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                    <div className='mb-3'>
                    <input type="password" className='form-control ' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <small>{errors.password && <div className='text-danger'>{errors.password}</div>}</small>
                    </div>
                    {errors.non_field_errors && (
                      <div className='alert alert-danger'>
                        {errors.non_field_errors.map((error, index) => (
                          <div key={index}>{error}</div>
                        ))}
                      </div>
                    )}
                    {success && <div className='alert alert-success'>Registration Successful</div>}
                    {loading ? (
                      <button type='submit' className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>
                    ) : (
                      <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                    )}
                    
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register
