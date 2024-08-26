function SearchBar({value, onChange}) {
    return (
        <>
            <input
                type="text"
                placeholder="Search posts..."
                value={value}
                onChange={onChange}
                className='w-1/2 sm:w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500'
            />
        </>
    )
}

export default SearchBar