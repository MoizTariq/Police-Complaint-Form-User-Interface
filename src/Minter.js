import { useEffect, useState } from "react";
// import {
//   connectWallet,
//   getCurrentWalletConnected,
//   mintNFT,
// } from "./util/interact.js";

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [complaintName, setComplaintName] = useState("");
  const [complaintAddress, setComplaintAddress] = useState("");
  const [incident, setIncident] = useState("");
  const [timeofIncident, setTimeofIncident] = useState("");
  const [involvedPeople, setInvolvedPeople] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="Minter">
      <button id="walletButton">
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <div className="formContainer">
        <br></br>
        <div id="title">
          <h1 id="title">	&#x1f46e; Police Complaint Form</h1>
          <p>
            Register your Complain and submit form
          </p>
        </div>
        <form>
          <h2>Complaint Name: </h2>
          <input
            type="text"
            placeholder="e.g. John"
            onChange={(event) => setComplaintName(event.target.value)}
          />

          <h2>Complaint Address: </h2>
          <input
            type="text"
            placeholder="e.g. A/22 West Street  "
            onChange={(event) => setComplaintAddress(event.target.value)}
          />

          <h2>Phone Number </h2>
          <input
            type="text"
            placeholder="e.g. 0322293237849"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <h2>Incident: </h2>
          <input
            type="text"
            placeholder="e.g. harassement"
            onChange={(event) => setIncident(event.target.value)}
          />
          <h2>Time of Incident: </h2>
          <input
            type="text"
            placeholder="e.g. 10:10 pm"
            onChange={(event) => setTimeofIncident(event.target.value)}
          />
          <h2>Involved People: </h2>
          <input
            type="text"
            placeholder="e.g. 12"
            onChange={(event) => setInvolvedPeople(event.target.value)}
          />
        </form>
        <button id="mintButton" style={{ marginBottom: "10px" }}>
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default Minter;
