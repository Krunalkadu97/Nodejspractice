import {useState} from 'react';
import {Alert,Button,ButtonGroup,ButtonToolbar} from 'reactstrap';
import './App.css';

function App() {
  const [visible , setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <div className="App">
      <Alert color='primary' isOpen={visible} toggle={onDismiss}>Welcome To ReactJs Home</Alert>
      <ButtonToolbar>
          <ButtonGroup>
             <Button color='primary'>Home</Button>
             <Button color='danger'>Exit</Button>
          </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default App;
