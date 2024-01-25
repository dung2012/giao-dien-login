import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content row">
          <div className="col-12 text-login">WELCOME</div>
          <div className="col-12 form-group login-input">
              <div>Username</div>
              {/* <i class="fa-solid fa-user"></i> */}
              <input type = "text" className="form-control" placeholder="Enter your usename" />
          </div>
          <div className="col-12 form-group login-input">
              <div>Password</div>
              <input type = "text" className="form-control" placeholder="Enter your password" />
          </div>
          <div className="col-12 forgot-password">
              <label className="forgot-password">Forgot Password?</label>
          </div>
          <div className="col-12">
              <button className="btn-login">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
