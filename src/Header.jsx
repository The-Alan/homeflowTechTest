import {FaSearch} from "react-icons/fa";

function Header({handleSearch}) {
    function onChange(e) {
        handleSearch(e.target.value);
    }

    return (
        <header className="flex flex-col md:flex-row justify-between">
            <h1 className="text-8xl">
            Posh Properties
            </h1>

            <div className="mt-5 relative">
            <input role="textbox" onChange={onChange} placeholder="Enter a search term" className="px-5 py-3 border-gray-400 border rounded w-full" />
                <FaSearch className="absolute top-3.5 right-3.5 text-gray-400" size={20} />
            </div>
        </header>
    );
};

export default Header;
