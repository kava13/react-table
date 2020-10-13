import React from 'react';
import '../../css/userInfo.css'

class UserInfo extends React.Component {
    render() {
        const { user } = this.props;
        return(
            <div className='user-info'>
                <p>{user.firstName}</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        );
    }
}

export default UserInfo;