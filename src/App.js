import './App.scss';
import Logo from './img/Logo'

function App() {
  return (
      <header className="header">
        <div className="container">
              <div className="App row">
                  <div className="logo col-6">
                      <Logo/>
                  </div>
                  <div className="nav col-6">
                      <div className='items'>
                          <div><a href="">features</a></div>
                          <div><a href="">works</a></div>
                          <div><a href="">our team</a></div>
                          <div><a href="">testimonials</a></div>
                          <div><a href="">download</a></div>
                      </div>
                  </div>
              </div>
            <div className="main-content row">
                <h2>Your Favorite One Page Multi Purpose Template</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos explicabo nulla quam quidem tenetur veniam.</h3>
                <button>find out more</button>
            </div>
        </div>
      </header>
  );
}

export default App;
