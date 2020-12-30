import React ,{Component}from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';



class OrderSummary extends Component  {


render(){
    const ingredientSummary=Object.keys(this.props.ingredients)
    .map(igkey=>{
        return(
        <li key={igkey}>
            <span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
        </li>
        );
       
    })
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious Burger with Following Ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price :<strong>{this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button 
              clicked={this.props.purchaseCancelled} 
              btnType='Danger'>CANCEL</Button>
            <Button 
               clicked={this.props.purchaseContinued} 
               btnType='Success'> CONTINUE</Button>
        </Auxi>
    );
}
};

export default OrderSummary;