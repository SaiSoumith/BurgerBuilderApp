import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuilControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index' 
import axios from '../../axios-orders';

// import BackDrop from '../../components/UI/Backdrop/Backdrop'

 class BurgerBuilder extends Component {
  
 state={
        
         
        //  purchasable:false,
         purchasing:false
        //  loading:false,
        //  error:false
     }



componentDidMount(){

    this.props.onInitIngredients();
        //    axios.get('/ingredients.json')
        //    .then(response=>{
        //        this.setState({ingredients:response.data})
        //    })
        //    .catch(error=>{
        //        this.setState({error:true})

        //    })

     }
purchasedHandler=()=>{

    if(this.props.isAuthenticated){
        this.setState({
            purchasing:true
        })
    }else{
        this.props.onSetAuthRedirectPath('/checkout');
        this.props.history.push('/auth');
    }
    
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
    this.props.onInitPurchase();
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
    

       let burger=this.props.error?<p>Ingredients cannot be loaded</p>:<Spinner/>
       if(this.props.ings)
       {
           burger=(  
                 <Auxi>
                    <Burger ingredients={this.props.ings}/>
                    <BuildControls
                        isAuth={this.props.isAuthenticated}
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
                
            // if(this.state.loading){
            //     orderSummary=<Spinner/>
            //     }
       
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
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error,
        isAuthenticated: state.auth.token !== null
        
    }
}

const mapDispatchToProps=(dispatch)=>{
   return{
       onIngredientAdded:(ingredientName)=>dispatch(actions.addIngredient(ingredientName)),
       onIngredientRemoved:(ingredientName)=>dispatch(actions.removeIngredient(ingredientName)),
       onInitIngredients:()=>dispatch(actions.initIngredients()),
       onInitPurchase:()=>dispatch(actions.purchaseInit()),
       onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
   }
}



export default connect(mapStateToProps,mapDispatchToProps)( withErrorHandler(BurgerBuilder,axios))