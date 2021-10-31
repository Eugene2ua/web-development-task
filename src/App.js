import './App.scss';
import Logo from './img/Logo'

function App() {
  return (
    <div className="App container">
      <header className="header">
          <div className="row logo">
              <Logo class='col'/>
          </div>
          <div className="row nav">
              <div className='col items'>
                  <div>features</div>
                  <div>works</div>
                  <div>our team</div>
                  <div>testimonials</div>
                  <div>download</div>
              </div>
          </div>
      </header>
        {/*<body>*/}
        {/*<div className="main-content">*/}
        {/*    <h2>your favorite one page multi purpose template</h2>*/}
        {/*    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolorum ipsa, molestias mollitia quos tenetur!</h3>*/}
        {/*    <button>find out more</button>*/}
        {/*</div>*/}
        {/*</body>*/}
    </div>
  );
}

export default App;
