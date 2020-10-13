import React from 'react';
import _ from 'lodash';
import '../../css/table.css'

class Table extends React.Component {
    render() {
        const { data, sortTable, onClickRowHandle } = this.props;

        return(
            <div className='table'>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th onClick={() => sortTable('id')}>ID</th>
                            <th onClick={() => sortTable('firstName')}>FIRST NAME</th>
                            <th onClick={() => sortTable('lastName')}>LAST NAME</th>
                            <th onClick={() => sortTable('email')}>EMAIL</th>
                            <th onClick={() => sortTable('phone')}>PHONE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user) => {
                                return (
                                    <tr key={_.uniqueId()} onClick={() => onClickRowHandle(user)}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;