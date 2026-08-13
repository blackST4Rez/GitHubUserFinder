import { BiSearch } from 'react-icons/bi'

const SearchBar = ({
    searchTerm,
    handleChange,
    handleKeyDown,
    handleSearch,
}) => {
    return (
        <>
            <div className='mx-auto mt-6 sm:mt-8 flex w-full max-w-3xl items-center justify-center px-4'>
                <div className='relative w-full'>
                    <input
                        className='w-full border border-gray-900 py-3 sm:py-4 pl-3 sm:pl-4 pr-12 sm:pr-14 lg:pr-16 focus:border-black focus:outline-none text-sm sm:text-base'
                        type='text'
                        placeholder='Search any User'
                        value={searchTerm}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        type='button'
                        onClick={handleSearch}
                        className='absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 lg:p-2.5 transition-all hover:scale-110'
                        aria-label='Search GitHub user'
                    >
                        <BiSearch 
                            size={20} 
                            className="sm:size-6.5 lg:size-7.5 xl:size-8.5"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchBar