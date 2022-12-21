import './App.css';
import { useState, useEffect } from 'react';
import Header from './Containers/Header';
import HighlightedContent from './Containers/HighlightedContent';
import NewsContainer from './Containers/NewsContainer';

function MainContainer({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}

function App() {
  const [foo, setFoo] = useState(2);
  const [bar, setBar] = useState(20);

  useEffect(() => {
    console.log('App render useEffect.....');
  });

  useEffect(() => {
    console.log('App render useEffect una vez.....');
  }, []);
  
  useEffect(() => {
    console.log('App render useEffect with foo.....');
  }, [foo]);


  
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <HighlightedContent />
        <NewsContainer />
        <button onClick={() => setFoo(foo + 1)}>change {foo}</button>
        <button onClick={() => setBar(30)}>change {bar}</button>
      </MainContainer>
    </div>
  );
}

export default App;
