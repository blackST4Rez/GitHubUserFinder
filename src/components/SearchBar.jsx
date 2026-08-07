const SearchBar = ({
    searchTerm,      
    handleChange,
    handleKeyDown, 
}) => {
    return (
        <>
            <div className='mx-auto mt-8 flex w-full max-w-3xl items-center justify-center px-4'>
                <input 
                    className='w-full border p-4 focus:outline-none' 
                    type='text' 
                    placeholder='Search User (e.g., octocat)' 
                    value={searchTerm}          
                    onChange={handleChange}      
                    onKeyDown={handleKeyDown}    
                />
            </div>
        </>
    )
}

export default SearchBar