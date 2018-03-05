import React, { Component } from 'react';
import NavHeader from './NavHeader'
import { Table } from 'reactstrap';
class HomeMain extends Component {
  render() {
    return ( <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th className="col-sm-2">Projects</th>
            <th>Bids</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td >Mark</td>
            <td>1</td>
            <td>02/23/2017</td>
          </tr>
        </tbody>
      </Table> );
  }
}

export default HomeMain;