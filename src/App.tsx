import { Container } from '@mui/material';
import AppBar from './components/AppBar';
import Hero from './components/Hero';
import Experience from './components/experience';

function App() {
  return (
    <>
      <AppBar />
      <Container component="main" maxWidth="xl">
        <Hero />
        <Experience />
      </Container>
    </>
  );
}

export default App;
