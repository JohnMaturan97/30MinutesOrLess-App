import React from 'react';
import pizzaswings from '../pizzaswingsdata';
import PizzaWing from '../components/PizzaWing'

export default function Homescreen() {
    return (
        <div>
            <div className="row">
              
            {pizzaswings.map(pizzawing => {
                
                return <div className = "col-md-4">
                    <div>
                        <PizzaWing pizzawing={pizzawing} />
                    </div>
                </div>
                
                })}

            </div>
        </div>
    )
}
    