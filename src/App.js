import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Box from './Box';

function App() {
  return (
    <Container fluid className='bg-white text-center p-5' style={{height: '100%'}}>
      <h1 className="mb-5">TEN TEN</h1>
      <Box></Box>
    </Container>
  );
}

export default App;
