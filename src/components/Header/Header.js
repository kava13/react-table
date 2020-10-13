import React from 'react';
import '../../css/header.css'

class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <div className='logo'>
                    <h2>TABLE</h2>
                </div>
            </div>
        );
    }
}

export default Header;