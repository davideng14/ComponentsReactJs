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

function getInfo() {
  return new Promise((resolve, reject) => {
    resolve('Data')
  });
}

function App() {
  const [foo, setFoo] = useState(2);
  const [bar, setBar] = useState(20);

  const handleAsync = async () => {
    const data = await getInfo();
    
    try {
      // procesar la data
      console.log(data);
    } catch(err) {
      console.err();
    }
    
  } 

  //ComponentDidUpdate
  useEffect(() => {
    getInfo
  .then(
    (res) => {
      //throw new Error('Ooops!');
      console.log("Resolved: " + res);
    },
    (err) => {
      console.log("Rejected: " + err);
    }
  )
  .catch((err) => {
    console.log("Problema en lectura de resultado");
    return "default_value";
  })
    handleAsync();
  });


  
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
