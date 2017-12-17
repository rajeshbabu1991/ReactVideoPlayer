import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

// Api key that is used for accessing youtube service
const API_KEY = 'AIzaSyACn-P4V2fGflkpJ6iAB5BSko8m5we_ImU';

// Create a new component and it is inserted into the dom.
const App = () => {
    return <div>
        <SearchBar />
    </div>;
}
//Take this component and add it onto the page.
ReactDOM.render(<App />, document.querySelector('.container'));