import React from 'react';
import axios from 'axios';
import './App.css';
import './css/interface.css'
import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Search from './components/Search/Search'
import Table from './components/Table/Table'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData = async () => {
    const response = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
    this.setState({data: response.data});
  }

  renderTable = () => {
    const { data } = this.state;
    console.log('data from server', data);
    console.log('current state', this.state);
    return (
      <Table data={data}/>
    );
  }
  render() {
    return (
    <div>
      <Header/>
      <main>
        <LeftMenu getData={this.getData}/>
        <div className='table-wrapper'>
          <Search/>
          {this.renderTable()}
        </div>
      </main>
    </div>
  );
  }
  
}

export default App;
