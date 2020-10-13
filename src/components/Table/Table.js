import React from 'react';
import '../../css/table.css'

class Table extends React.Component {
    render() {
        const { data } = this.props;

        return(
            <div className='table'>
                <table className='main-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FIRST NAME</th>
                            <th>LAST NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE NUMBER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user) => {
                                return (
                                    <tr>
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