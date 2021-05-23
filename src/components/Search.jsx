import { useState } from "react";

function Search({ handleSearch }) {
    const [searchField, setSearchField] = useState('')

    const keySubmit = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        } else {
            return null;
        }
    };

    const handleSubmit = () => {
        handleSearch(searchField);
    };

    return (
        <div className="row search-field">
            <input
                id='search-field'
                type="text"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
                className="validate search-inp"
                placeholder='Search'
                onKeyDown={keySubmit} />
            <button
                className='btn search-btn'
                onClick={handleSubmit}>
                <i className="material-icons prefix">search</i>
            </button>
        </div>
    )
}

export { Search }