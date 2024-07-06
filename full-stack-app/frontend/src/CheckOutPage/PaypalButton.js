import React from "react";
import PropTypes from "prop-types";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: amount,
              },
            },
          ],
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then((details) => {
          onSuccess(details);
        });
      }}
    />
  );
};

PayPalButton.propTypes = {
  amount: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

export default PayPalButton;
