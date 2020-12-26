import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuilControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// import BackDrop from '../../components/UI/Backdrop/Backdrop'
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

 class BurgerBuilder extends Component {
  
 state={
         ingredients:null,
         totalPrice:4,
         purchasable:false,
         purchased:false,
         loading:false,
         error:false
     }




     componentDidMount(){

           axios.get('/ingredients.json')
           .then(response=>{
               this.setState({ingredients:response.data})
           })
           .catch(error=>{
               this.setState({error:true})

           })

     }
purchasedHandler=()=>{

    this.setState({
        purchased:true
    })
}

purchaseCancelHandler=()=>{
    this.setState({
        purchased:false
    })
}

purchaseContinueHandler=()=>{
   const queryParams=[];
   for(let i in this.state.ingredients)
   {
       queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]))
   }
   queryParams.push('price='+this.state.totalPrice);
   
    const queryString=queryParams.join('&');

    this.props.history.push({
        pathname:'/checkout',
        search:'?'+queryString
         
    });
}


updatePurchaseState(ingredients){

    
    const sum=Object.keys(ingredients)
        .map(el=>ingredients[el])
        .reduce((s,el)=>{

             return s+el;
        },0)
     
     this.setState({purchasable: sum>0})

}
 addIngredientHandler=(type)=>{

    const oldCount=this.state.ingredients[type];
    const updatedCount=oldCount+1;
    const updatedIngridients={
        ...this.state.ingredients
    };
    updatedIngridients[type]=updatedCount;
    const priceAddition=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const updatedPrice=oldPrice+priceAddition;

    this.setState({ingredients:updatedIngridients,
                   totalPrice:updatedPrice});
     this.updatePurchaseState(updatedIngridients);
 }    

 
 removeIngredientHandler=(type)=>{
 
    const oldCount=this.state.ingredients[type];
    if(oldCount===0)
    return;

    const updatedCount=oldCount-1;
    const updatedIngridients={
        ...this.state.ingredients
    };
    updatedIngridients[type]=updatedCount;
    const priceRemoval=INGREDIENT_PRICES[type];
    const oldPrice=this.state.totalPrice;
    const updatedPrice=oldPrice-priceRemoval;

    this.setState({ingredients:updatedIngridients,
                   totalPrice:updatedPrice});
     this.updatePurchaseState(updatedIngridients);
 }   
 
 

    render() {
       const disabledInfo={...this.state.ingredients};
       for(let key in disabledInfo){
           disabledInfo[key]= (disabledInfo[key]===0);
       }
       
       let orderSummary=null;

      
    

       let burger=this.state.error?<p>Ingredients cannot be loaded</p>:<Spinner/>
       if(this.state.ingredients)
       {
           burger=(  
                 <Auxi>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        finalPrice={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledInfo={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchasedHandler}
                        />
                 </Auxi>
                )

            orderSummary=<OrderSummary 
                            totalPrice={this.state.totalPrice} 
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                            ingredients={this.state.ingredients}/>;
                
            if(this.state.loading){
                orderSummary=<Spinner/>
                }
       
        }
        return (
            <Auxi>
                
                <Modal
                 modalClosed={this.purchaseCancelHandler}
                       show={this.state.purchased}>
                           {orderSummary}
                </Modal>
              {
                  burger
              }

            </Auxi>
        )
    }
}
export default withErrorHandler(BurgerBuilder,axios)