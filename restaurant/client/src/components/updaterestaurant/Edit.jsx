import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addrestaurant/add.css";
import toast from "react-hot-toast";

const Edit = () => {
  const initialRestaurant = {
    name: "",
    location: "",
    rating: "",
    top_food: "",
    type: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to load restaurant data", { position: "top-right" });
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, restaurant)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update restaurant", { position: "top-right" });
      });
  };

  return (
    <div className="addRestaurant">
      <Link to="/">Back</Link>
      <h3>Update Restaurant</h3>
      <form className="addRestaurantForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Restaurant Name</label>
          <input
            type="text"
            value={restaurant.name}
            onChange={inputChangeHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="type">Type</label>
          <input
            type="text"
            value={restaurant.type}
            onChange={inputChangeHandler}
            id="type"
            name="type"
            autoComplete="off"
            placeholder="Type"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            value={restaurant.location}
            onChange={inputChangeHandler}
            id="location"
            name="location"
            autoComplete="off"
            placeholder="Location"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="top_food">Top Food</label>
          <input
            type="text"
            value={restaurant.top_food}
            onChange={inputChangeHandler}
            id="top_food"
            name="top_food"
            autoComplete="off"
            placeholder="Top Food"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            value={restaurant.rating}
            onChange={inputChangeHandler}
            id="rating"
            name="rating"
            autoComplete="off"
            placeholder="Rating"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE Restaurant</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
