import React, { useState, useEffect } from 'react';
import { useCars } from "./Context/CarContext";
import { useNavigate } from 'react-router-dom';


const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [speaking, setSpeaking] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // contexts
  const { cars } = useCars();

  // filter cars
  useEffect(() => {
    if (searchTerm) {
      const filteredCars = cars.filter(
        (car) =>
          car.carName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.carType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.price.toString().includes(searchTerm) ||
          car.transmission.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.color?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredCars);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, cars]);

  // Initialize speech recognition
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please try Chrome or Edge.');
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      const userInput = event.results[0][0].transcript;
      setTranscript(userInput);
      handleUserInput(userInput);
    };
    
    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      setListening(false);
    };
    
    recognition.onend = () => {
      setListening(false);
    };
    
    window.recognition = recognition;
    
    return () => {
      recognition.abort();
    };
  }, []);

  const handleCarSelect = (carId) => {
    const selectedCar = cars.find(car => car.id === carId);
    if (selectedCar) {
      navigate(`/details/${carId}`, { state: { car: selectedCar } });
      setSearchTerm("");
      setSearchResults([]);
    }
  };

  // Start listening
  const startListening = () => {
    setResponse('');
    setTranscript('');
    setListening(true);
    window.recognition.start();
  };

  // Process user input
  const handleUserInput = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Extract relevant information from the sentence
    const keywords = {
      carNames: cars.map(car => car.carName.toLowerCase()),
      carTypes: [...new Set(cars.map(car => car.carType.toLowerCase()))],
      colors: [...new Set(cars.map(car => car.color?.toLowerCase()).filter(Boolean))],
      prices: cars.map(car => car.price.toString())
    };

    let searchTerms = [];
    
    // Check for car names
    keywords.carNames.forEach(name => {
      if (lowerInput.includes(name)) {
        searchTerms.push(name);
      }
    });

    // Check for car types
    keywords.carTypes.forEach(type => {
      if (lowerInput.includes(type)) {
        searchTerms.push(type);
      }
    });

    // Check for colors
    keywords.colors.forEach(color => {
      if (lowerInput.includes(color)) {
        searchTerms.push(color);
      }
    });

    // Check for prices
    keywords.prices.forEach(price => {
      if (lowerInput.includes(price)) {
        searchTerms.push(price);
      }
    });

    const combinedSearchTerm = searchTerms.join(' ');
    setSearchTerm(combinedSearchTerm);
    
    let aiResponse = searchTerms.length > 0 
      ? `${searchTerms.join(', ')}. Searching now...`
      : `I couldn't find any specific car details in your request. Please try again with more specific information.`;
    
    setResponse(aiResponse);
    speakResponse(aiResponse);
  };

  // Text-to-speech functionality
  const speakResponse = (text) => {
    if (!('speechSynthesis' in window)) {
      alert('Your browser does not support speech synthesis. Please try Chrome or Edge.');
      return;
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    utterance.pitch = 1;
    
    utterance.onstart = () => {
      setSpeaking(true);
    };
    
    utterance.onend = () => {
      setSpeaking(false);
    };
    
    speechSynthesis.speak(utterance);
  };

  // Stop speaking
  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <div className="p-3 w-full sm:max-w-[280px] mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold mb-3 text-blue-700">Voice Assistant</h2>
      
      <div className="relative mb-3">
        <div className="px-3 py-1.5 flex items-center bg-white shadow-sm">
          <input
            type="text"
            className="text-xs w-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {searchResults.length > 0 && (
          <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-y-auto z-10">
            {searchResults.map((car) => (
              <div
                key={car.id}
                onClick={() => handleCarSelect(car.id)}
                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer transition duration-150 ease-in-out">
                <img
                  src={car.image}
                  alt={car.carName}
                  className="w-8 sm:w-10 h-8 sm:h-10 object-cover rounded-md mr-2"
                />
                <div className="flex-grow">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-800">{car.carName}</h3>
                  <p className="text-[10px] text-gray-600">{car.carType}</p>
                  <div className="flex justify-between mt-0.5">
                    <span className="text-[10px] font-medium text-gray-700">${car.price}</span>
                    <span className="text-[10px] text-gray-500">{car.transmission}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="mb-3 flex flex-wrap gap-1.5">
        <button
          onClick={startListening}
          disabled={listening || speaking}
          className="bg-blue-600 text-white px-2 sm:px-3 py-1.5 rounded-full disabled:bg-gray-400 text-xs sm:text-sm"
        >
          {listening ? 'Listening...' : 'Ask a Question'}
        </button>
        
        {speaking && (
          <button
            onClick={stopSpeaking}
            className="bg-red-600 text-white px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm"
          >
            Stop Speaking
          </button>
        )}
      </div>
      
      {transcript && (
        <div className="mb-3 p-2 bg-gray-100 rounded-lg text-xs sm:text-sm">
          <strong>You said:</strong> {transcript}
        </div>
      )}
      
      {response && (
        <div className="p-2 bg-blue-50 rounded-lg border border-blue-200 text-xs sm:text-sm">
          <strong>Assistant:</strong> {response}
        </div>
      )}
      
    </div>  
    );
  };

export default VoiceAssistant;