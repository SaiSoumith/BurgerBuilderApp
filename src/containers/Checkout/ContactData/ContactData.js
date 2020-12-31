import React, { Component } from 'react'
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

import { updateObject,checkValidity} from '../../../shared/utility';


class ContactData extends Component {
  state = {
    orderForm: {
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your Name'
            },
            value: '',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation:{
                required:true,
                minLength:5,
                maxLength:5,
                isNumeric:true
            },
            valid:false,
            touched:false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Country'
            },
            value: '',
            validation:{
                required:true
            },
            valid:false,
            touched:false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your E-Mail'
            },
            value: '',
            validation:{
                required:true,
                isEmail: true
            },
            valid:false,
            touched:false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {value: 'fastest', displayValue: 'Fastest'},
                    {value: 'cheapest', displayValue: 'Cheapest'}
                ]
            },
            value: 'fastest',
            validation:{},
            valid:true
        }
    },
  
    formIsValid:false
}
  


onChangeHandler=(event,id)=>{

  
  const updatedFormElement = updateObject(this.state.orderForm[id], {
    value: event.target.value,
    valid: checkValidity(event.target.value, this.state.orderForm[id].validation),
    touched: true
});


  const updatedOrderForm = updateObject(this.state.orderForm, {
    [id]: updatedFormElement
});

  let formIsValid = true;
  for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
  }
  this.setState({
    orderForm:updatedOrderForm,
    formIsValid:formIsValid
  })

}
  orderHandler=(event)=>{
     event.preventDefault();
     
    // this.setState({loading:true})
    const formData={};
    for(let formElementIdentifier in this.state.orderForm){
      formData[formElementIdentifier]=this.state.orderForm[formElementIdentifier].value;
    }

     const order={
         ingredients:this.props.ings,
         price:this.props.price,
         orderData:formData,
         userId:this.props.userId
        //  customer: this.state
            
     }

     this.props.onOrderBurger(order,this.props.token);
     
    // axios.post('./orders.json',order)
    //   .then(response=>{
    //     this.setState({loading:false})
    //     this.props.history.push('/')
    //    }
    //     )
    //   .catch(error=>
    //     this.setState({loading:false})
    //   )
    //   alert('You continue!');
  }
    render() {


      const formElementsArray=[];
      for(let key in this.state.orderForm){
        formElementsArray.push({
             id:key,
             config:this.state.orderForm[key]  
        });
      }

        let form =( <form onSubmit={this.orderHandler}>
            
            {
              formElementsArray.map(formElement=>(
                <Input 
                     key={formElement.id}
                     elementType={formElement.config.elementType}
                     elementConfig={formElement.config.elementConfig}
                     invalid={!formElement.config.valid}
                     value={formElement.config.value}
                     touched={formElement.config.touched}
                     shouldValidate={formElement.config.validation}
                     changed={(event)=>this.onChangeHandler(event,formElement.id)}/>))
            }
            <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
        
    </form>)
        if(this.props.loading)
        form=<Spinner/>
        return (
            <div className={classes.ContactData}>
            <h4>Enter Contact details</h4>
              {
                  form
              }
        </div>
            
        )
    }
}


const mapStateToProps=(state)=>{

  return{
      ings:state.burgerBuilder.ingredients,
      price:state.burgerBuilder.totalPrice,
      loading:state.order.loading,
      token:state.auth.token,
      userId: state.auth.userId
  }
}


const mapDispatchToProps=(dispatch)=>{

  return{
        onOrderBurger:(orderData,token)=>{dispatch(actions.purchaseBurger(orderData,token))}
  }
}

export default  connect( mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));