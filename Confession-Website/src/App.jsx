import { useState } from 'react'
import './App.css'
import FirstMessage from './components/FirstMessage'
import SecondMessage from './components/SecondMessage'
import ThirdMessage from './components/ThirdMessage'

function App() {
  const [currentMessage, setCurrentMessage] = useState(1);

  const handleNextMessage = () => {
    setCurrentMessage((prev) => prev + 1);
  }

  const renderMessage = () => {
    switch (currentMessage) {
      case 1:
        return <FirstMessage onContinue={handleNextMessage} />;
      case 2:
        return <SecondMessage onContinue={handleNextMessage} />;
      case 3:
        return <ThirdMessage/>
      default:
        return <h1>Something went wrong!</h1>;
    }
  };

  return <div className="App">{renderMessage()}</div>;
}

export default App
