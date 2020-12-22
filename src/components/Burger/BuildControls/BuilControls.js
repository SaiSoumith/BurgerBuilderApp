import React from 'react';
import classes from './BuilControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls=[
  {label:'Meat',type:'meat'},
  {label:'Cheese',type:'cheese'},
  {label:'Salad',type:'salad'},
  {label:'Bacon',type:'bacon'}
];

const builControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:<strong>{props.finalPrice.toFixed(2)}</strong></p>
            {
              controls.map(ctrl=>{
                  return <BuildControl
                            type={ctrl.type}
                            added={props.ingredientAdded}
                            removed={props.ingredientRemoved}
                            key={ctrl.label} 
                            label={ctrl.label}
                            disabledInfo={props.disabledInfo[ctrl.type]}/>
              })
           }    
           <button 
           className={classes.OrderButton} 
           disabled={!props.purchasable}
           onClick={props.ordered}>ORDER NOW</button>        
        </div>
    );
};

export default builControls;