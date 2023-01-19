import './App.css';
import Container from './components/Fruits/Container';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  return (
    <DndProvider className="App" backend={HTML5Backend}>
        <Container />
    </DndProvider>
  );
}

export default App;
