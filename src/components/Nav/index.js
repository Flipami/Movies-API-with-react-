import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link className="link" to='Search'>Search</Link>
                <Link className="link" to='Home'>Home</Link>
            </div>
        );
    }
}

export default Nav;