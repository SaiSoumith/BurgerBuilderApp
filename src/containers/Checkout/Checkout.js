import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData'
import {connect} from 'react-redux'

class Checkout extends Component {
    // state = {
    //     ingredients:{},          
    //     totalPrice:0
    // }

    // componentDidMount(){
        
    //     const query=new URLSearchParams(this.props.location.search)
    //     const ingredients={}
    //     for(let param of query.entries())
    //     {
    //         if(param[0]==='price')
    //         this.setState({totalPrice: +param[1]})
    //         else
    //         ingredients[param[0]]= +param[1]

    //     }
    //     this.setState({
    //         ingredients:ingredients
    //     })
   
    // }
    checkoutCancelledHandler=()=>{
       this.props.history.goBack();

    }
   
    checkoutContinuedHandler=()=>{
          this.props.history.replace('/checkout/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.props.ings}
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
               <Route path={this.props.match.url+'/contact-data'} 
                      component={ContactData} />
            </div>
        );
    }
}


const mapStateToProps=(state)=>{

    return{
        ings:state.ingredients
    }
}



export default connect( mapStateToProps)(Checkout);