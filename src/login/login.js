import React,{Component} from 'react'
import Editable from '../tableEdit'
import banner from '../banner03.gif'
import  "../styleBanner.css"
/*
const Welcome = ({user, onSignOut})=> {
    // This is a dumb "stateless" component
    return (
      <div>
        Welcome <strong>{user.username}</strong>!
        <a href="javascript:;" onClick={onSignOut}>Sign out</a>
      </div>
    )
  }*/
  
  class LoginForm extends Component {
    
    // Using a class based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }
    
    render() {
      return (
<body>
  <div class="container">
  <img src={banner} alt="scytl" width="1400px"/>
    <div class="row centeredLogin">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body centeredLogin">
            <form class="form-signin" onSubmit={this.handleSignIn.bind(this)}>
            <h3>Sign in</h3>
              <div class="form-label-group">
    
                <input type="text" id="inputEmail" ref="username" placeholder="enter you username" autocomplete="off"  class="form-control" />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password"  ref="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr class="my-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>




    
      )
    }
  
  }
  
  
  class App extends Component {
    
    constructor(props) {
      super(props)
      // the initial application state
      this.state = {
        user: null
      }
    }
    
    // App "actions" (functions that modify state)
    signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      this.setState({
        user: {
          username,
          password,
        }
      })
    }
    
    signOut() {
      // clear out user from state
      this.setState({user: null})
    }
    
    render() {
      // Here we pass relevant state to our child components
      // as props. Note that functions are passed using `bind` to
      // make sure we keep our scope to App
      return (
        <div>
          { 
            (this.state.user) ? 
            <Editable 
            user={this.state.user} 
            onSignOut={this.signOut.bind(this)}
            />
              /*<Welcome 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />*/
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      )
      
    }
    
  }
  export default App