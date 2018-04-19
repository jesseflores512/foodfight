import React from 'react';
import Header from './header'

export default class NewChallenger extends React.Component {
  render() {
    return (

      <div>
      <Header/>
        <h3 className="NewChallenger">Nominate New Challenger</h3>
            <div className="home">Home Page</div>
            <div className="wrap-contact100">
              <form className="contact100-form validate-form">

                <div className="wrap-input100 validate-input" data-validate="Please enter your name">
                  <input className="input100" type="text" name="name" placeholder="Name of Restaurant" />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                  <input className="input100" type="text" name="email" placeholder="Address" />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="text" name="phone" placeholder="City" />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="text" name="phone" placeholder="State" />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="text" name="phone" placeholder="Zip Code" />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                  <textarea className="input100" name="message" placeholder="Favorite Food"></textarea>
                  <span className="focus-input100"></span>
                </div>

                <div className="myButton">Nominate a challenger</div>

              </form>
            </div>
          </div>
        )
        }
        }
