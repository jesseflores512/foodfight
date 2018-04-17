import React from 'react';
import Header from './header'
import { Form, Text } from "react-form";

export default class NewChallenger extends React.Component {
  render() {
    return (
    <div>
    <Header/>
      <h3 className="NewChallenger">Nominate New Challenger</h3>

       <Form
         render={({ submitForm, values, addValue, removeValue }) => (
           <form onSubmit={submitForm}>
             <Text field="restaurantName" placeholder="Restaurant Name" />
             <Text field="address" placeholder="Address" />
             <Text field="city" placeholder="City" />
             <Text field="state" placeholder="State" />
             <Text field="zipCode" placeholder="Zip Code" />
             <Text field="lastName" placeholder="Last Name" />
             <div>
               {values.newChallenger &&
                 values.newChallenger.map((newChallenger, i) => (
                   <div>
                     <Text
                       field={["newChallenger", i, "restaurantName"]}
                       placeholder="Restaurant Name"
                     />
                     <Text
                       field={["newChallenger", i, "address"]}
                       placeholder="Address"
                     />
                     <Text
                       field={["newChallenger", i, "state"]}
                       placeholder="State"
                     />
                     <Text
                       field={["newChallenger", i, "zipCode"]}
                       placeholder="Zip Code"
                     />
                     <Text
                       field={["newChallenger", i, "lastName"]}
                       placeholder="Last Name"
                     />

                   </div>
                 ))}
                 <div className="myButton">Nominate a challenger</div>
             </div>
           </form>
            )}
          />

    </div>
  )}
}
