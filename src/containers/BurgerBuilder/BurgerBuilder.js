import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuilControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions' 

// import BackDrop from '../../components/UI/Backdrop/Backdrop'

 class BurgerBuilder extends Component {
  
 state={
        
         
        //  purchasable:false,
         purchasing:false,
         loading:false,
         error:false
     }



// componentDidMount(){

//         //    axios.get('/ingredients.json')
//         //    .then(response=>{
//         //        this.setState({ingredients:response.data})
//         //    })
//         //    .catch(error=>{
//         //        this.setState({error:true})

//         //    })

//      }
purchasedHandler=()=>{

    this.setState({
        purchasing:true
    })
}

purchaseCancelHandler=()=>{
    this.setState({
        purchasing:false
    })
}

purchaseContinueHandler=()=>{
//    const queryParams=[];
//    for(let i in this.state.ingredients)
//    {
//        queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
//    }
//    queryParams.push('price='+this.props.price);
   
//     const queryString=queryParams.join('&');

    this.props.history.push({
        pathname:'/checkout',
        // search:'?'+queryString
         
    });
}


updatePurchaseState=(ingredients)=>{

    
    const sum=Object.keys(ingredients)
        .map(el=>ingredients[el])
        .reduce((s,el)=>{

             return s+el;
        },0)
     
     return sum>0;

}
 
// addIngredientHandler=(type)=>{

//     const oldCount=this.state.ingredients[type];
//     const updatedCount=oldCount+1;
//     const updatedIngridients={
//         ...this.state.ingredients
//     };
//     updatedIngridients[type]=updatedCount;
//     const priceAddition=INGREDIENT_PRICES[type];
//     const oldPrice=this.state.totalPrice;
//     const updatedPrice=oldPrice+priceAddition;

//     this.setState({ingredients:updatedIngridients,
//                    totalPrice:updatedPrice});
//      this.updatePurchaseState(updatedIngridients);
//  }    

 
//  removeIngredientHandler=(type)=>{
 
//     const oldCount=this.state.ingredients[type];
//     if(oldCount===0)
//     return;

//     const updatedCount=oldCount-1;
//     const updatedIngridients={
//         ...this.state.ingredients
//     };
//     updatedIngridients[type]=updatedCount;
//     const priceRemoval=INGREDIENT_PRICES[type];
//     const oldPrice=this.state.totalPrice;
//     const updatedPrice=oldPrice-priceRemoval;

//     this.setState({ingredients:updatedIngridients,
//                    totalPrice:updatedPrice});
//      this.updatePurchaseState(updatedIngridients);
//  }   
 
 

    render() {
       const disabledInfo={...this.props.ings};
       for(let key in disabledInfo){
           disabledInfo[key]= (disabledInfo[key]===0);
       }
       
       let orderSummary=null;

      console.log(this.props.ings)
    

       let burger=this.state.error?<p>Ingredients cannot be loaded</p>:<Spinner/>
       if(this.props.ings)
       {
           burger=(  
                 <Auxi>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        finalPrice={this.props.price}
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        disabledInfo={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchasedHandler}
                        />
                 </Auxi>
                )

            orderSummary=<OrderSummary 
                            totalPrice={this.props.price} 
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            ingredients={this.props.ings}/>;
                
            if(this.state.loading){
                orderSummary=<Spinner/>
                }
       
        }
        return (
            <Auxi>
                
                <Modal
                 modalClosed={this.purchaseCancelHandler}
                       show={this.state.purchasing}>
                           {orderSummary}
                </Modal>
              {
                  burger
              }

            </Auxi>
        )
    }
}

const mapStateToProps=(state)=>{

    return{
        ings:state.ingredients,
        price:state.totalPrice
    }
}

const mapDispatchToProps=(dispatch)=>{
   return{
       onIngredientAdded:(ingredientName)=>dispatch({type:actionTypes.ADD_INGREDIENT,ingredientName:ingredientName}),
       onIngredientRemoved:(ingredientName)=>dispatch({type:actionTypes.REMOVE_INGREDIENT,ingredientName:ingredientName})
   }
}



export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(BurgerBuilder,axios))