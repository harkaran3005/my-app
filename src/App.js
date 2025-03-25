import './App.css';
import { Form } from './form';
import { Terms } from './terms';
import { Buttons } from './buttons';
import image from './signup.jpg';

function App() {
  return (
    <div class="container">
      <img src={image} alt='signup'/>
      <div class="login">
        <h1>Sign Up</h1>
        
        <Form />
        <Terms />
        <Buttons/>
        
          </div>
    </div>

  );
}




export default App;
