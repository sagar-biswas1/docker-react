
import React from 'react';
const Navbar = ({name}) => {
    return (
        <div>
            {name? <h1>hello {name}</h1>: <button>login</button>}
        </div>
    );
};

export default Navbar;