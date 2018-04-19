import React from 'react';
import Header from './header'
import axios from 'axios';

export default class NewChallenger extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState = this.onChangeState.bind(this);
    this.onChangeZip = this.onChangeZip.bind(this);
    this.onChangePic = this.onChangePic.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      picture: '',
      likes: 0
    }
  }

  onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

  onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

  onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

  onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }
  onChangeZip(e) {
        this.setState({
            zipcode: e.target.value
        });
    }

  onChangePic(e) {
        this.setState({
            picture: e.target.value
        });
    }

  onSubmit(e) {
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode,
            picture: this.state.picture,
            likes: this.state.likes

        }
        axios.post('http://localhost:4200/serverport/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            picture: '',
            likes: 0,
        })
    }
  render() {
    return (

      <div>
      <Header/>
        <h3 className="NewChallenger">Nominate New Challenger</h3>

            <div className="wrap-contact100">
              <form onSubmit={this.onSubmit} className="contact100-form validate-form">

                <div className="wrap-input100 validate-input">
                  <input className="input100" type="text" name="name" value={this.state.name} placeholder="Name of Restaurant" onChange={this.onChangeName} />
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your email: e@a.x">
                  <input className="input100" type="text"  name="address" value={this.state.address} placeholder="Address" onChange={this.onChangeAddress}/>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="text"  name="city" value={this.state.city} placeholder="City" onChange={this.onChangeCity}/>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="text"  name="state" value={this.state.state} placeholder="State" onChange={this.onChangeState}/>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your phone">
                  <input className="input100" type="number" name="zipcode" value={this.state.zipcode} placeholder="Zip Code" onChange={this.onChangeZip}/>
                  <span className="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Please enter your message">
                  <input className="input100" name="message" value={this.state.picture} placeholder="add picture" onChange={this.onChangePic}></input>
                  <span className="focus-input100"></span>
                </div>

                <input type='submit' className="myButton" value='Submit Challenger' />
              </form>
            </div>
          </div>
        )
        }
        }
