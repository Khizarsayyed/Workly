import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BiddingPage.scss";

const BiddingPage = () => {
  const { gigId } = useParams();
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [bids, setBids] = useState([]); // 🔥 NEW

  const handleBidSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/bids",
        {
          gigId,
          amount,
          message,
        },
        {
          withCredentials: true,
        }
      );
      setResult("Bid submitted successfully!");
      fetchBids(); // 🔥 Refresh bids list
    } catch (err) {
      console.error(err);
      setResult("Failed to submit bid.");
    }
  };

  const fetchBids = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/bids/${gigId}`);
      setBids(res.data);
    } catch (err) {
      console.error("Failed to fetch bids", err);
    }
  };

  React.useEffect(() => {
    fetchBids(); // 🔥 Load bids on mount
  }, [gigId]);

  return (
    <div className="bidding-page">
      <h2>Place Your Bid</h2>
      <form className="bid-form" onSubmit={handleBidSubmit}>
        <label>Bid Amount (₹):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Bid</button>
      </form>
      {result && <div className="bid-result">{result}</div>}

      {/* 🔥 BID LIST */}
      <div className="bids-list">
        <h3>All Bids for this Gig</h3>
        {bids.length > 0 ? (
          bids.map((bid) => (
            <div key={bid._id} className="bid-entry">
              <p><strong>{bid.userId?.username || "User"}:</strong> ${bid.amount}</p>
              <p>{bid.message}</p>
              <small>{new Date(bid.createdAt).toLocaleString()}</small>
              <hr />
            </div>
          ))
        ) : (
          <p>No bids yet.</p>
        )}
      </div>
    </div>
  );
};

export default BiddingPage;