import React from "react";
import "./ShipmentForm.css";
import { useState, useEffect } from "react";
import Popup from "./Popup/Popup";

const ShipmentForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const [receiverModal, setReceiverModal] = useState([]);
  const [receiverdata, setReceiverdata] = useState();
  const [item, setItem] = useState([]);
  const [addNewItem, setAddNewItem] = useState({
    item_name: "",
    weight: "",
    quantity: "",
    length: "",
    width: "",
    height: "",
  });
  const [receiverInput, setReceiverInput] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    city: "",
    user: "2",
  });
  const [Error, setError] = useState({
    nameerr: "",
    numbererr: "",
    cityerr: "",
    addresserr: "",
    submiterr: "",
    itemerr: "",
    weighterr: "",
    quatityerr: "",
    lengtherr: "",
    widtherr: "",
    heighterr: "",
    add_item_submiterr: "",
  });
  const Itemsubmit = (e) => {
    e.preventDefault();
    if (
      addNewItem.item_name !== "" &&
      addNewItem.weight !== "" &&
      addNewItem.quantity !== "" &&
      addNewItem.length !== "" &&
      addNewItem.width !== "" &&
      addNewItem.height !== ""
    ) {
      setItem([...item, addNewItem]);
    } else {
      setError({
        ...Error,
        add_item_submiterr: "All field are required",
      });
    }
  };
  const modalsubmit = (e) => {
    e.preventDefault();
    if (
      receiverInput.name !== "" &&
      receiverInput.phoneNumber !== "" &&
      receiverInput.city !== "" &&
      receiverInput.address !== ""
    ) {
      let result = fetch(
        "http://182.191.66.30:5000/api/receiver/create_receiver",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(receiverInput),
        }
      ).then((result) => {
        console.log(result);
        result.json().then((data) => {
          console.log(data);
        });
      });

      setReceiverModal([receiverInput]);
    } else {
      setError({
        ...Error,
        submiterr: "All field are required",
      });
    }
  };
  const handleItem = (e) => {
    if (e.target.id === "item_name") {
      if (e.target.value === "") {
        setError({ ...Error, itemerr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, item_name: "" });
      } else {
        setAddNewItem({ ...addNewItem, item_name: e.target.value });
        setError({ ...Error, itemerr: "" });
      }
    }
    if (e.target.id === "weight") {
      if (e.target.value === "") {
        setError({ ...Error, weighterr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, weight: "" });
      } else {
        setAddNewItem({ ...addNewItem, weight: e.target.value });
        setError({ ...Error, widtherr: "" });
      }
    }
    if (e.target.id === "quantity") {
      if (e.target.value === "") {
        setError({ ...Error, quatityerr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, quantity: "" });
      } else {
        setAddNewItem({ ...addNewItem, quantity: e.target.value });
        setError({ ...Error, quatityerr: "" });
      }
    }
    if (e.target.id === "length") {
      if (e.target.value === "") {
        setError({ ...Error, lengtherr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, length: "" });
      } else {
        setAddNewItem({ ...addNewItem, length: e.target.value });
        setError({ ...Error, lengtherr: "" });
      }
    }
    if (e.target.id === "width") {
      if (e.target.value === "") {
        setError({ ...Error, widtherr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, width: "" });
      } else {
        setAddNewItem({ ...addNewItem, width: e.target.value });
        setError({ ...Error, widtherr: "" });
      }
    }
    if (e.target.id === "height") {
      if (e.target.value === "") {
        setError({ ...Error, heighterr: "Please enter tha value..." });
        setAddNewItem({ ...addNewItem, height: "" });
      } else {
        setAddNewItem({ ...addNewItem, height: e.target.value });
        setError({ ...Error, heighterr: "" });
      }
    }
  };
  const handleChange = (e) => {
    if (e.target.id === "name") {
      if (e.target.value === "") {
        setError({ ...Error, nameerr: "Please enter tha value..." });
        setReceiverInput({ ...receiverInput, name: "" });
      } else {
        setReceiverInput({ ...receiverInput, name: e.target.value });
        setError({ ...Error, nameerr: "" });
      }
    }
    if (e.target.id === "number") {
      if (e.target.value === "") {
        setError({ ...Error, numbererr: "Please enter tha value..." });
        setReceiverInput({ ...receiverInput, phoneNumber: "" });
      } else {
        setReceiverInput({ ...receiverInput, phoneNumber: e.target.value });
        setError({ ...Error, numbererr: "" });
      }
    }
    if (e.target.id === "city") {
      if (e.target.value === "") {
        setError({ ...Error, cityerr: "Please enter tha value..." });
        setReceiverInput({ ...receiverInput, city: "" });
      } else {
        setReceiverInput({ ...receiverInput, city: e.target.value });
        setError({ ...Error, cityerr: "" });
      }
    }
    if (e.target.id === "address") {
      if (e.target.value === "") {
        setError({ ...Error, addresserr: "Please enter tha value..." });
        setReceiverInput({ ...receiverInput, address: "" });
      } else {
        setReceiverInput({ ...receiverInput, address: e.target.value });
        setError({ ...Error, addresserr: "" });
      }
    }
  };
  const collapsButton = () => {
    setError({
      ...Error,
      add_item_submiterr: "",
      itemerr: "",
      weighterr: "",
      quatityerr: "",
      lengtherr: "",
      widtherr: "",
      heighterr: "",
      add_item_submiterr: "",
    });
  };
  useEffect(() => {
    fetch("http://182.191.66.30:5000/api/receiver/user_receivers/2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    }).then((result) => {
      console.log(result);
      result.json().then((data) => {
        console.log(data.recipients);
        setReceiverdata(data.recipients);
      });
    });
  }, []);
  console.log(receiverdata);
  console.log(item);

  return (
    <>
      <div className="container bg-info p-5 m-5">
        <div className="row">
          <div className="col-md-4">
            <label className="form-label">Place of Transaction</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-md-4">
            <label class="form-label">Place of Destination</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="col-md-4">
            <label class="form-label">Select Shipment Type</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Shipment Type</option>
              <option>Air</option>
              <option>Sea</option>
            </select>
          </div>
          <div className="col-md-12">
            <label className="form-label">Select Shipment Type</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option value="null">Select a Recipient</option>
              {receiverdata &&
                receiverdata.map((data, index) => (
                  <option
                    key={index}
                    value={data?.id}
                  >{`${data?.name} - ${data?.address}`}</option>
                ))}
            </select>

            <input
              type="button"
              className="my-2"
              value="Click to Open Popup"
              onClick={togglePopup}
            />
            {isOpen && (
              <Popup
                content={
                  <form>
                    <input
                      type="text"
                      className="my-2 w-100"
                      id="name"
                      value={receiverInput.name}
                      onChange={handleChange}
                      placeholder="Recipient's Name"
                    />
                    <p>{Error.nameerr}</p>

                    <input
                      type="number"
                      className="my-2 w-100"
                      id="number"
                      onChange={handleChange}
                      value={receiverInput.phoneNumber}
                      placeholder="Phone Number"
                    />
                    <p>{Error.numbererr}</p>

                    <input
                      type="text"
                      className="my-2 w-100"
                      id="city"
                      onChange={handleChange}
                      value={receiverInput.city}
                      placeholder="City"
                    />
                    <p>{Error.cityerr}</p>

                    <input
                      type="text"
                      className="my-2 w-100"
                      id="address"
                      onChange={handleChange}
                      value={receiverInput.address}
                      placeholder="Address"
                    />
                    <p>{Error.addresserr}</p>
                    <br />
                    <p>{Error.submiterr}</p>
                    <button
                      className="btn btn-primary my-2"
                      onClick={modalsubmit}
                    >
                      Submit
                    </button>
                  </form>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
          <div className="col-md-11 m-2">
            {/* <table class="table">
              <thead>
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">length</th>
                  <th scope="col">width</th>
                  <th scope="col">height</th>
                </tr>
              </thead>
              <tbody>
                <tr>
              <td >{item.item_name}</td>
                  <td>{item.weight}</td>
                  <td>{item.quantity}</td>
                  <td>{item.length}</td>
                  <td>{item.width}</td>
                  <td>{item.height}</td>
                </tr>
                
              </tbody>
            </table> */}
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={collapsButton}
                  >
                    Add new Items
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <form>
                      <div className="row ">
                        <div className="col-md-4 my-2">
                          <input
                            type="text"
                            id="item_name"
                            onChange={handleItem}
                            value={addNewItem.item_name}
                            placeholder="Item Name"
                          />
                          <p>{Error.itemerr}</p>
                        </div>
                        <div className="col-md-4 my-2">
                          <input
                            type="number"
                            id="weight"
                            onChange={handleItem}
                            value={addNewItem.weight}
                            placeholder="Weight in Kgs"
                          />
                          <p>{Error.weighterr}</p>
                        </div>
                        <div className="col-md-4 my-2">
                          <input
                            type="number"
                            id="quantity"
                            onChange={handleItem}
                            value={addNewItem.quantity}
                            placeholder="Quantity"
                          />
                          <p>{Error.quatityerr}</p>
                        </div>
                        <div className="col-md-4 my-2">
                          <input
                            type="text"
                            id="length"
                            onChange={handleItem}
                            value={addNewItem.length}
                            placeholder="Length in cm"
                          />
                          <p>{Error.lengtherr}</p>
                        </div>
                        <div className="col-md-4 my-2">
                          <input
                            type="number"
                            id="width"
                            onChange={handleItem}
                            value={addNewItem.width}
                            placeholder="Width in cm"
                          />{" "}
                          <p>{Error.widtherr}</p>
                        </div>
                        <div className="col-md-4 my-2">
                          <input
                            type="number"
                            id="height"
                            onChange={handleItem}
                            value={addNewItem.height}
                            placeholder="Height in cm"
                          />
                          <p>{Error.heighterr}</p>
                        </div>
                        <p>{Error.add_item_submiterr}</p>
                        <button
                          className="btn btn-primary"
                          onClick={Itemsubmit}
                        >
                          Add Item
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Submit</button>
      </div>
    </>
  );
};
export default ShipmentForm;
