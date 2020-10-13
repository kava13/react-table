import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import './css/interface.css'
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
import UserInfo from './components/UserInfo/UserInfo'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortedField: 'id',
      sortedDirection: 'asc',
      selectedUser: null
    }
  }

  getData = async () => {
    const response = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    this.setState({data: response.data});
  }

  sortTable = (sortedField) => {
    const { data, sortedField: prevSortedField, sortedDirection: prevSortedDirection } = this.state;
    let sortedDirection = '';

    if (sortedField === prevSortedField) {
      sortedDirection = prevSortedDirection === 'asc'? 'desc':'asc';
    } else {
      sortedDirection = 'asc';
    }
    
    const sortedData = _.orderBy(data, sortedField, sortedDirection);
    this.setState({ data: sortedData, sortedField: sortedField, sortedDirection: sortedDirection });
  }

  renderUserInfo = (userInfo) => {
    this.setState({ selectedUser: userInfo});
  }

  renderTable = () => {
    const { data } = this.state;
    return (
      <Table data={data} sortTable={this.sortTable} onClickRowHandle={this.renderUserInfo}/>
    );
  }

  render() {
    const { data, selectedUser } = this.state;
    console.log(this.state)
    return (
    <div>
      <Header/>
      <main>
        <LeftMenu getData={this.getData}/>
        <div className='table-wrapper'>
        {data.length > 0? <Search/> : null}
        {data.length > 0? this.renderTable() : null}
        {selectedUser? <UserInfo user={selectedUser}/> : null}
        </div>
        
      </main>
    </div>
  );
  }
  
}

export default App;
