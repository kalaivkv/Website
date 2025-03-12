import React, { useState, useEffect } from "react";
import image from "./Images/image9.png"; // Import the image from assets
import { Button } from "@mui/material"; // Import Material UI Button

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Delay popup appearance by 1.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-3 md:p-8 rounded-lg shadow-lg w-[500px] max-w-full relative">
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* Popup Content */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Image Section */}
            <img
              src={image}
              alt="Newsletter"
              className="w-full md:w-1/2 rounded-lg"
            />

            {/* Text & Form Section */}
            <div className="p-4 text-center md:w-1/2">
              <h2 className="text-xl font-semibold">Newsletter.</h2>
              <p className="text-gray-600 my-2">
                Subscribe to Masterkart to stay updated.
              </p>

              {/* Email Input */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none my-2"
              />

              {/* Subscribe Button with Material UI effects */}
              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{
                  mt: 1,
                  textTransform: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#256D1B",
                  },
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
