import React, { useState, useEffect } from 'react'

const AddCarForm = () => {
  const [carName, setCarName] = useState("")
  const [carType, setCarType] = useState("")
  const [carImage, setCarImage] = useState(null)
  const [fuelCapacity, setFuelCapacity] = useState("")
  const [transmission, setTransmission] = useState("")
  const [seatingCapacity, setSeatingCapacity] = useState("")
  const [price, setPrice] = useState("")
  const [ratings, setRatings] = useState("")
  const [description, setDescription] = useState("")
  const [showForm, setShowForm] = useState(false)
  const [cars, setCars] = useState([])
  const [editingCar, setEditingCar] = useState(null)

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
    try {
      const response = await fetch("https://morentb.vercel.app/api/cars")
      if (response.ok) {
        const data = await response.json()
        setCars(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = async(e) => {
      e.preventDefault()
      try {
          const response = await fetch("https://morentb.vercel.app/api/cars", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  carName,
                  carType,
                  carImage,
                  fuelCapacity,
                  transmission,
                  seatingCapacity,
                  price,
                  description,
                  ratings
              }),
          })
          if(response.ok) {
              const data = await response.json();
              AddCarForm(data);
              setShowForm(false);
              fetchCars()
              resetForm()
          } else {
              const errorData = await response.json();
              alert(errorData.message || "Failed to add car")
          };
      } catch (error) {
          console.log(error)
      }
  }

  const handleDelete = async (carId) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      try {
        const response = await fetch(`https://morentb.vercel.app/api/cars/${carId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Car deleted successfully");
          fetchCars()
        } else {
          const errorData = await response.json();
          alert(errorData.message || "Failed to delete car");
        }
      } catch (error) {
        console.error(error);
        alert("Error deleting car");
      }
    }
  };

  const handleUpdate = async (car) => {
    setEditingCar(car);
    setCarName(car.carName);
    setCarType(car.carType);
    setCarImage(car.carImage);
    setFuelCapacity(car.fuelCapacity);
    setTransmission(car.transmission);
    setSeatingCapacity(car.seatingCapacity);
    setPrice(car.price);
    setRatings(car.ratings);
    setDescription(car.description);
    setShowForm(true);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://morentb.vercel.app/api/cars/${editingCar._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carName,
          carType,
          carImage,
          fuelCapacity,
          transmission,
          seatingCapacity,
          price,
          description,
          ratings
        }),
      });
      if (response.ok) {
        alert("Car updated successfully");
        setEditingCar(null);
        setShowForm(false);
        resetForm();
        fetchCars();
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to update car");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating car");
    }
  };

  const resetForm = () => {
    setCarName("");
    setCarType("");
    setCarImage(null);
    setFuelCapacity("");
    setTransmission("");
    setSeatingCapacity("");
    setPrice("");
    setRatings("");
    setDescription("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 w-full">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Car Management</h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
          
          {/* Car List with Update and Delete Options */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Car List</h3>
            {cars.map((car) => (
              <div key={car._id} className="border-b border-gray-200 py-4 flex justify-between items-center">
                <div>
                  <h4 className="font-medium">{car.carName}</h4>
                  <p className="text-sm text-gray-600">{car.carType}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(car)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

          <button
            onClick={() => {
              setShowForm(!showForm);
              if (editingCar) {
                setEditingCar(null);
                resetForm();
              }
            }}
            className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6"
          >
            {showForm ? 'Hide Form' : 'Create New Car'}
          </button>

          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                  {editingCar ? 'Update Car' : 'Create New Car'}
                </h2>
                <form
                  onSubmit={editingCar ? handleUpdateSubmit : handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Car Name</label>
                      <input type="text" placeholder="Enter car name" value={carName} onChange={(e) => setCarName(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Car Type</label>
                      <input type="text" placeholder="Enter car type" value={carType} onChange={(e) => setCarType(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Car Image</label>
                    <input type="file" accept="image/*" onChange={(e) => setCarImage(e.target.files[0])} 
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fuel Capacity</label>
                      <input type="text" placeholder="Enter fuel capacity" value={fuelCapacity} onChange={(e) => setFuelCapacity(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Transmission</label>
                      <input type="text" placeholder="Enter transmission type" value={transmission} onChange={(e) => setTransmission(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Seating Capacity</label>
                      <input type="text" placeholder="Enter seating capacity" value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                      <input type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} 
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <input type="value" placeholder='ratings' value={ratings} onChange={(e) => setRatings(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea placeholder="Enter car description" value={description} onChange={(e) => setDescription(e.target.value)} 
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-24 sm:h-32 resize-none"/>
                  </div>

                  <div className="flex gap-4">
                    <button type="submit" 
                      className="flex-1 bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      {editingCar ? 'Update Car' : 'Add Car'}
                    </button>
                    <button type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditingCar(null);
                        resetForm();
                      }}
                      className="flex-1 bg-gray-500 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

export default AddCarForm