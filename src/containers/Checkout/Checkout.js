import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    checkoutCanelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        console.log(this.props);
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings} 
                    checkoutCanelled={this.checkoutCanelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                
                <Route path={this.props.match.path + '/contact-data'} 
                 component={ContactData}/>
            </div>
        );
    }
}

//Take the state from the reducer and export as (props): access as props.ings.
const mapStateToProps = state => {
    return {
        ings: state.ingredients
    };
}

export default connect(mapStateToProps)(Checkout);