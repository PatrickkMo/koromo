
import axios from 'axios';
import './App.css';
import React, {useState,useEffect} from 'react';



// API Test
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}




function App() {



  // Animated Scrollbar
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the scroll position as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <div className="App">
      <div className = "className={`navbar ${scrolling ? 'navbar-hidden' : ''}`}">
        <div className = "Buttons-Container">
          <div className = "Buttons">
            <h2>DigiSign</h2>
            <div></div>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Request Demo</h3>
            <h3>Login</h3>

            
          </div>

        </div>

      </div>


      <header className="App-header">
        
        
      </header>
    </div>
  );
}

export default App;
