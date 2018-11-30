import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import TransactionRow from "./TransactionRow";

function TransactionsPanel(props) {
  return ( 
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
      </div>
      <div className="panel-body">
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Order Date</th>
                <th>Order Time</th>
                <th>Amount (USD)</th>
              </tr>
            </thead>
            <tbody>
              {
                props.orders.map((order,i) => {
                  return <TransactionRow key={i} order={order} />;
                })
              }

            </tbody>
          </table>
        </div>
        <div className="text-right">
          <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
        </div>
      </div>
    </div> );
}

// propTypes for the prop that was connected from redux
TransactionsPanel.propTypes = {
  orders: PropTypes.array
};

// connect the redux state to this.props of this component
const mapStateToProps = state => ({
  orders: state.orders
});

// make a container component and connect the main component to redux store
const TransactionPanelContainer = connect(mapStateToProps)(TransactionsPanel);
export default TransactionPanelContainer;
