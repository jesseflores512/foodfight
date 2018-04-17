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
               Information Card
               {values.friends &&
                 values.friends.map((friend, i) => (
                   <div>
                     <Text
                       field={["friends", i, "restaurantName"]}
                       placeholder="Restaurant Name"
                     />
                     <Text
                       field={["friends", i, "address"]}
                       placeholder="Address"
                     />
                     <Text
                       field={["friends", i, "state"]}
                       placeholder="State"
                     />
                     <Text
                       field={["friends", i, "zipCode"]}
                       placeholder="Zip Code"
                     />
                     <Text
                       field={["friends", i, "lastName"]}
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
