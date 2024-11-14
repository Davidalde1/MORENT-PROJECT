import React, {useState} from 'react'


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
          } else {
              const errorData = await response.json();
              errorData.message || "Failed to add car"
          };
      } catch (error) {
          console.log(error)
      }
  }

  const handleDelete = async (carId) => {
    try {
      const response = await fetch(`https://morentb.vercel.app/api/cars/${carId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Car deleted successfully");
      } else {
        const errorData = await response.json();
        console.error(errorData.message || "Failed to delete car");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (carId, updatedData) => {
    try {
      const response = await fetch(`https://morentb.vercel.app/api/cars/${carId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Car updated successfully", data);
      } else {
        const errorData = await response.json();
        console.error(errorData.message || "Failed to update car");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCar = async (carId) => {
    try {
      const response = await fetch(`https://morentb.vercel.app/api/cars/${carId}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        console.error(errorData.message || "Failed to get car");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };

    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 w-full">
        <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Car Management</h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Get Car Section */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Get Car Details</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter Car ID"
                  className="w-full sm:flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => getCar("car-id")}
                  className="w-full sm:w-auto bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Car
                </button>
              </div>
            </div>

            {/* Update Car Section */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Update Car</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter Car ID"
                  className="w-full sm:flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleUpdate("car-id", {})}
                  className="w-full sm:w-auto bg-yellow-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Update Car
                </button>
              </div>
            </div>

            {/* Delete Car Section */}
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Delete Car</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Enter Car ID"
                  className="w-full sm:flex-1 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => handleDelete("car-id")}
                  className="w-full sm:w-auto bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Car
                </button>
              </div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Create New Car</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6"
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

            <button type="submit" 
              className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Add Car
            </button>
          </form>
        </div>
      </div>
    )
  }

export default AddCarForm