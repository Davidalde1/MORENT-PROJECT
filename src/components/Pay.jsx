import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
// import Logo from "../assets/Tron TRX Icon.png";

const KEY = import.meta.env.VITE_STRIPE_KEY || "your_stripe_publishable_key";

const Pay = ({ amount }) => {
      const [stripeToken, setStripeToken] = useState(null);
      const navigate = useNavigate();

      const handleToken = (token) => {
        setStripeToken(token);
      };

      useEffect(() => {
        const makeRequest = async () => {
          try {
              const res = await axios.post(
                  "https://morentb.vercel.app/api/checkout/payment",
                  {
                      tokenId: stripeToken.id,
                      amount: amount,
                  }
              );
              console.log(res.data);
              navigate("/success");
          } catch (error) {
              console.log(error);
          }
        };
        if (stripeToken) {
          makeRequest();
        }
      }, [stripeToken, navigate, amount])
    
    return (
      <div>
          {stripeToken ? (
            <span>Processing your payment......Please wait</span>
          ) : (
              <StripeCheckout
                name="Morent E-commerce"
                // image={Logo}
                billingAddress
                shippingAddress
                description="Your Total Is Down Here"
                amount={amount * 100} // Stripe expects amount in cents
                token={handleToken}
                stripeKey={KEY}
              >
              </StripeCheckout>
          )}
      </div>
    )
}

export default Pay