import React from 'react';
import '../../css/leftMenu.css'

class LeftMenu extends React.Component {
    render() {

        const { getData } = this.props;
        return(
            <div className='left-menu'>
                <h3 className='menu-title'>Menu</h3>
                <ul>
                    <li><button onClick={getData}>Get data</button></li>
                </ul>
            </div>
        );
    }
}

export default LeftMenu;