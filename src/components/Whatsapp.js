import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappButton.css";

const WhatsappButton = () => {
  const phoneNumber = "7505266931"; // <-- Replace with your WhatsApp number
  const message = "Hello! I visited your portfolio and would like to connect.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;
