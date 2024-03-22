// import logo from './logo.svg';
import './App.css';
import Head from './Componets/Heading';
import Paragraph from './Componets/Paragraph';
import Image from './Componets/Image';
import Lst from './Componets/List';

function App() {
  return (
    <div className="App">
      <Head/>
      <Paragraph/>
      <Image/>
      <div className="list" id='order'><Lst/></div>
    </div>
  );
}

export default App;
