
const ErrorMessage = ({ message = 'No results found.' }) => {
    return (
        <div className='text-center mt-6'>
            <h5 className='font-bold text-2xl text-red-600'>{message}</h5>
        </div>
    )
}

export default ErrorMessage