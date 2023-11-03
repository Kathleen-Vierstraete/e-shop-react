import React from 'react';
import { ErrorMessage, useField } from 'formik';

const TextField = ({label, ...props}) => {

    const [field, meta] = useField(props);
    console.log(meta);


    return (
        <div className='flex flex-col pb-5 place-items-start'>
            <label className='block text-gray-700 text-sm font-bold mb-2"' htmlFor={field.name}> {label} </label>
            <input 
            // className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${meta.touched && meta.error && 'invalid:border-pink-500'}` }
            className={
                meta.touched && meta.error 
                ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlineborder-4 border-red-600' 
                : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' }
            {...field} {...props}
            autoComplete='off' />
            <ErrorMessage component="div" name={field.name} className='error'/>
        </div>
    )

}

export default TextField;