import { createContext, useContext, useEffect, useCallback, useState  } from "react";
import placeholderImage from "../../assets/Images/carplaceholder.png";
import * as assetsImages from "../../assets/assets";

const CarContext = createContext();

export const CarProvider = ({children}) => {
  const [cars, setCars] = useState([]);
  const [recommendedCars, setRecommendedCars] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

 //fetch cars from api

  const fetchCars = useCallback(async() => {
    setIsLoading(true);
    const requestObject = {method: "GET", redirect: "follow"};


    try {
      const response = await fetch("https://morentb.vercel.app/api/cars", requestObject);
      if(!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const data = await response.json();
      const processedCars = processCarData(data);
      setCars(processedCars);

     // filter cars with a rating of 5 for recommendations
     const topRatedCars = processedCars.filter((car) => car.ratings === 5);
     setRecommendedCars(topRatedCars);


    } catch (error) {
      console.error("Error fetching car Data:", error);
      setError("Failed to fetch car data. please try again later");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const loadInitialData = async () => {
      await fetchCars();
    };
    loadInitialData();
  }, [fetchCars]);

  const processCarData = (carArray) => {
    return carArray.map((car) => {
      const validImage  = car.img && car.img.startsWith("http") ? car.img : null;
      
      return {
        ...car,
        id: car._id || car.id,
        price: Number(car.price),
        image:
        assetsImages[validImage?.split("/")?.pop()?.split(".")[0]] ||
        validImage ||
        placeholderImage,
      };
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen mt-2">
        Loading...
      </div>
    );
  }

  return (
    <CarContext.Provider
    value = {{cars, recommendedCars, isLoading, error, refetch: fetchCars }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => useContext(CarContext);







