const SearchBar = ({
    searchTerm,      
    handleChange,
    handleKeyDown, 
}) => {
    return (
        <>
            <div className='flex item-center justify-center mt-8'>
                <input 
                    className='p-4 border w-2xl focus:outline-none' 
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