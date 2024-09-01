import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingManagement = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/payment/view-payments")
      .then((response) => setPayments(response.data))
      .catch((error) => console.error("Error fetching payments:", error));
  }, []);

  const handleConfirm = (paymentId) => {
    axios
      .put(`http://localhost:3000/api/payment/update-payment/${paymentId}`)
      .then((response) => {
        setPayments((prevPayments) =>
          prevPayments.map((payment) =>
            payment._id === paymentId
              ? { ...payment, status: "accepted" }
              : payment
          )
        );
      })
      .catch((error) => console.error("Error confirming payment:", error));
  };

  const handleDelete = (paymentId) => {
    axios
      .delete(`http://localhost:3000/api/payment/delete-payment/${paymentId}`)
      .then((response) => {
        setPayments((prevPayments) =>
          prevPayments.filter((payment) => payment._id !== paymentId)
        );
      })
      .catch((error) => console.error("Error deleting payment:", error));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Customer Email</th>
          <th>Price</th>
          <th>Payment Status</th>
          <th>Confirm</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) =>
          payment.participant && payment.participant.email ? (
            <tr key={payment._id}>
              <td>{payment.event?.name || "Unknown Event"}</td>
              <td>{payment.participant.email}</td>
              <td>${payment.amount}</td>
              <td>{payment.status}</td>
              <td>
                <button
                  onClick={() => handleConfirm(payment._id)}
                  disabled={payment.status === "accepted"}
                >
                  {payment.status === "accepted" ? "Accepted" : "Confirm"}
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(payment._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default BookingManagement;
