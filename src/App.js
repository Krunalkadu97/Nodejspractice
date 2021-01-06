import {useState} from 'react';
import {Navbar,NavbarBrand,Alert,Button,ButtonGroup,ButtonToolbar} from 'reactstrap';
//import Menu from './components/MenuComponent';
import Menu from './components/ProfileComponent';
import './App.css';


function App() {
  const [visible , setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <div>
      <Navbar dark color='danger' onOpen={visible} toggle={onDismiss}>
      <div className='container'>
        <NavbarBrand herf='#'>Home</NavbarBrand>
      </div>
        
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
