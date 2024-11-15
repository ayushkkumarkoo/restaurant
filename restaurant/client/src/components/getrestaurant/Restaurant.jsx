import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./restaurant.css";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch all restaurants
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/getall");
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load restaurants", { position: "top-right" });
      }
    };

    fetchData();
  }, []);

  // Delete restaurant
  const deleteRestaurant = async (restaurantId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/${restaurantId}`);
      toast.success(response.data.msg, { position: "top-right" });
      setRestaurants((prevRestaurants) => 
        prevRestaurants.filter((restaurant) => restaurant._id !== restaurantId)
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete restaurant", { position: "top-right" });
    }
  };

  return (
    <div className="restaurantTable">
      <Link to={"/add"} className="addButton">Add Restaurant</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Restaurant Name</th>
            <th>Type</th>
            <th>Rating</th>
            <th>Location</th>
            <th>Top Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant, index) => {
            return (
              <tr key={restaurant._id}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.type}</td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.location}</td>
                <td>{restaurant.top_food}</td>
                <td className="actionButtons">
                  <Link to={`/edit/${restaurant._id}`} className="editButton">Edit</Link>
                  <button onClick={() => deleteRestaurant(restaurant._id)} className="deleteButton">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Restaurant;
