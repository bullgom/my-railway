import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const url = `https://${import.meta.env.BACKEND_URL}:${import.meta.env.BACKEND_PORT}/`;
  console.log(`Fetching data from: ${url}`);

  useEffect(() => {
    // Define the function to fetch data
    const fetchData = async () => {
      try {
        // Fetch data from the FastAPI endpoint
        // Make sure the URL matches your FastAPI server address
        // this should be changed to ENV
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Assuming your FastAPI returns a JSON with a 'message' key
        setMessage(data.message);
        console.log("Data fetched successfully:", data);
      } catch (e) {
        console.error("Fetch error: ", e);
        setError(e.message);
      }
    };

    // Call the function
    fetchData();
  }, []); // The empty array [] means this effect runs only once after the initial render
  
  console.log(message)
  console.log(error)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h1>React & FastAPI</h1>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <p>Message from server: <strong>{message}</strong></p>
      )}
    </>
  )
}

export default App
