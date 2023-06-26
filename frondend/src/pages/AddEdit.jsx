 import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
import "./View.css";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    } else {
      toast.error("Something went wrong!");
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
      navigate("/");
    } else {
      toast.error("Something went wrong!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide a value into each input section!");
    } else {
      if (!id) {
        addUser(state);
        navigate("/");
      } else {
        updateUser(state, id);
      }
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Enter a Name..."
          value={name}
          id="name"
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter a Email..."
          value={email}
          id="email"
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          name="contact"
          type="text"
          placeholder="Enter a Contact..."
          value={contact}
          id="contact"
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Add"}></input>
      </form>
    </div>
  );
};

export default AddEdit;
