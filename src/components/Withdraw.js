import React from 'react';
import {connect} from "react-redux";
import {actionbal, actionwithdraw} from "../actions/useractions";
import { Card,Button } from 'reactstrap';
import NavHeaderLogin from './NavHeaderLogin';
import PieChart from 'react-minimal-pie-chart';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';
//import image from './mainlogo.JPG';
class Withdraw extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            withdraw: ''
        };
    }
    // navigate()
    // {
    //     history.push('/myproject');
    // }
    render()
    {
        return (
            <div>
            <NavHeaderLogin/>
                <h1 align="center">Withdraw Payments</h1>
                <Card style={{width:300, marginLeft:500}}>
                <div className="row justify-content-lg">
                    <div className="col-lg-12" align="center">

                        <div className="form-group">
                            <Button
                            
                                type="button"
                                onClick={() => this.props.bal()}>
                                Check Balance
                            </Button>

                            <p>Current Balance:{this.props.balance}</p>
                        </div>
<br/>
<br/>
                    <div className="form-group">
                    <h6>Amount</h6>
                        <input
                            className="form-control"
                            type="Number"
                            placeholder="Enter Balance to withdraw"
                            value={this.state.withdraw}
                            onChange={(event) => {
                                this.setState({
                                    withdraw: event.target.value
                                });
                            }}
                        />
                        <br/>
                        <Button
                            color="success"
                            type="button"
                            onClick={() =>{

                           
                                this.props.withdraw(this.state) }
                                }>
                            Withdraw Balance
                        </Button>
                    </div>
                    </div>
                </div>
                <h5> Pie Chart</h5>
                <PieChart radius={25}
                data={[
                    { value: this.props.balance, key: 1, color: '#99ccff' },
                    { value: this.state.withdraw, key: 2, color: '#ff6699' }
                ]}
                 />
                </Card>



            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        bal : (data) => dispatch(actionbal(data)),
        withdraw : (data) => dispatch(actionwithdraw(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores.user.withdraw.amount);
    return {
       balance : stores.user.withdraw.amount
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Withdraw);