import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ value, onChange }) {
    return (
        <div className="relative md:w-1/2 w-2/3 max-w-md">
            <input
                type="text"
                placeholder="Search posts..."
                value={value}
                onChange={onChange}
                className="w-full text-lg px-10 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
        </div>
    );
}

export default SearchBar;
