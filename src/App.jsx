import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import {TodosContextProvider}  from './TodosContext.jsx';



function App() {
  return (
    <>
        <main>
      <TodosContextProvider>

          <Header appName="To-Do List with React" />

          <Home />

      </TodosContextProvider>
        </main>
    </>
  )
}

export default App
