import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { InventoryContext } from "./InventoryContext";
import { BACKEND_URL } from "../utils";

const UserHomePage = () => {
  const [userItems, setUserItems] = useState([]);
  const [currentInventory, setCurrentInventory] = useState([]);

  const { item, setItem, inventoryItems, setInventoryItems } =
    useContext(InventoryContext);

  //   useEffect(() => {
  //     axios
  //       .get("/inventory")
  //       .then((response) =>
  //         console.log(response).catch((error) => console.log(error))
  //       );
  //   });

  //   useEffect(() => {
  //     const user = LoginForm.getCurrentUser();
  //     if (user) {
  //       setCurrentUser(user);
  //     }
  //   }, []);

  // const Card2 = styled.div`
  //   background-color: lightblue;
  //   width: 300px;
  //   margin: 30px auto;
  //   minheight: 200px;
  //   boxsizing: border-box;
  // `;

  const CardComponent = {
    //top div
    width: "300px",
    margin: "30px auto",
    background: "lightblue",
    minHeight: "200px",
    boxSizing: "border-box",
  };

  const Header = {
    //h1
    padding: "10px",
    textAlign: "center",
    color: "white",
    fontSize: "22px",
  };

  useEffect(() => {
    fetch(`${BACKEND_URL}/inventory/`)
      .then((response) => response.json())
      .then((data) => setCurrentInventory(data));
  }, []);
  //   console.log(currentUser);
  const navigate = useNavigate();
  return (
    <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
      <h1>Welcome to your inventory Page </h1> <h1>{item.first_name}</h1>
      {/* {currentInventory.map((product) => console.log("my map", product))} */}
      <h1>{item.id}</h1>
      <h2>{item.username}</h2>
      {currentInventory.map((products, index) => {
        if (products.users_id === item.id) {
          return (
            <h1
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                width: "300px",
                margin: "30px auto",
                background: "lightblue",
                minHeight: "200px",
                boxSizing: "border-box",
              }}
              key={index}
            >
              {products.item_name}
            </h1>
          );
        }
      })}
      <Button
        style={{
          width: "30%",
          marginLeft: "1rem",
          justifyContent: "space-between",
        }}
        onClick={() => navigate("/modify")}
      >
        Create
      </Button>
      <Button
        // variant="outline-info"
        style={{ width: "30%", marginRight: "1rem" }}
        onClick={() => navigate("/view-all")}
      >
        All Items
      </Button>
    </div>
  );
};

export default UserHomePage;
