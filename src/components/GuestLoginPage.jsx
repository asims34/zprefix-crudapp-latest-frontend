import { useEffect, useState, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import { Button } from "react-bootstrap";
// import "../App.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { InventoryContext } from "./InventoryContext";
import { BACKEND_URL } from "../utils";

const GuestLoginPage = () => {
  const [guestData, setGuestData] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/inventory`)
      .then((res) => res.json())
      .then((data) => setGuestData(data));
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Guest, Welcome to our Inventory Page </h1>
      {guestData.map((item, index) => (
        <div
          key={index}
          style={{
            border: "solid lightgray 1px",
            borderRadius: "8px",
            marginBottom: "1rem",
            width: "50%",
            textAlign: "center",
          }}
          // onClick={() => navigate(`/guest/${item.id}`)}
        >
          <div>
            <div variant="outlined">{item.item_name}</div>
            <h1>
              {item.description.length > 100
                ? item.description.substring(0, 99) + "..."
                : item.description}
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GuestLoginPage;
