import React from 'react';
import {Formik, Form} from 'formik'; 
import  TextField  from './TextField'
import * as Yup from 'yup';


const SignUp = () => {

    const validate = Yup.object({
        firstName: Yup.string()
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
        lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
                    .required("Required"),
        email: Yup.string()
                    .email("Invalid email")
                    .required("Required"),
        password: Yup.string()
                    .min(6, "Password must be at least 6 characters")
                    .required("Required"),
        confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), undefined], "Passwords must match")
                    .required("Required"),
    })

return (

    <div>
        <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Welcome to the Sign Up page </h1>
        <Formik
            initialValues = {{
                firstName: '', 
                lastName: '', 
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => 
        <div className='flex justify-center' >
            <div className='flex flex-col bg-stone-200 items-center pb-5 pt-5 mb-10 w-1/2  '>
                <div className="w-full max-w-xs ">
                    <h1 className='text-lg uppercase font-bold pb-5' >Sign up</h1>
                    {/* {console.log(formik.values)} */}

                        <Form>
                            <TextField  label="FirstName" name="firstName" type="text"/>
                            <TextField  label="LastName" name="lastName" type="text"/>
                            <TextField  label="Email" name="email" type="email"/>
                            <TextField  label="Password" name="password" type="password"/>
                            <TextField  label="confirmPassword" name="confirmPassword" type="password"/>

                            <button className='px-4 py-2 bg-green-400 text-white text-xs font-bold uppercase rounded hover:bg-green-700 focus:outline-none focus:bg-green-700' type='submit'>Sign in</button>
                        </Form>
                    
                </div>
            </div>
        </div>
            }
            
        </Formik>
    </div>
)

}

export default SignUp;