import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <footer className="bg-gray-100 text-gray-700 py-4">
      <Container>
        <div className="flex flex-wrap justify-between gap-6">
          <div className="w-full md:w-1/6">
            <img
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              alt="Grabit Logo"
              className="h-10 mb-3"
            />
            <p className="text-sm">
              Grabit is the biggest market of grocery products. Get your daily
              needs from our store.
            </p>
            <div className="flex gap-2 mt-3">
              <img
                src="https://grabit-react-next.maraviyainfotech.com/assets/img/app/android.png"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://grabit-react-next.maraviyainfotech.com/assets/img/app/apple.png"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>

          <div className="w-full md:w-1/6">
            {isSmallScreen ? (
              <FooterAccordion title="Category">
                <FooterLinks
                  items={[
                    "Dried Fruit",
                    "Cookies",
                    "Foods",
                    "Fresh Fruit",
                    "Tuber Root",
                    "Vegetables",
                  ]}
                />
              </FooterAccordion>
            ) : (
              <StaticFooterSection
                title="Category"
                items={[
                  "Dried Fruit",
                  "Cookies",
                  "Foods",
                  "Fresh Fruit",
                  "Tuber Root",
                  "Vegetables",
                ]}
              />
            )}
          </div>

          <div className="w-full md:w-1/6">
            {isSmallScreen ? (
              <FooterAccordion title="Company">
                <FooterLinks
                  items={[
                    "About us",
                    "Delivery",
                    "Legal Notice",
                    "Terms & conditions",
                    "Secure payment",
                    "Contact us",
                  ]}
                />
              </FooterAccordion>
            ) : (
              <StaticFooterSection
                title="Company"
                items={[
                  "About us",
                  "Delivery",
                  "Legal Notice",
                  "Terms & conditions",
                  "Secure payment",
                  "Contact us",
                ]}
              />
            )}
          </div>

          <div className="w-full md:w-1/6">
            {isSmallScreen ? (
              <FooterAccordion title="Account">
                <FooterLinks
                  items={[
                    "Sign In",
                    "View Cart",
                    "Return Policy",
                    "Become a Vendor",
                    "Affiliate Program",
                    "Payments",
                  ]}
                />
              </FooterAccordion>
            ) : (
              <StaticFooterSection
                title="Account"
                items={[
                  "Sign In",
                  "View Cart",
                  "Return Policy",
                  "Become a Vendor",
                  "Affiliate Program",
                  "Payments",
                ]}
              />
            )}
          </div>

          <div className="w-full md:w-1/6">
            {isSmallScreen ? (
              <FooterAccordion title="Contact">
                <ContactDetails />
              </FooterAccordion>
            ) : (
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <ContactDetails />
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

const FooterAccordion = ({ title, children }) => {
  return (
    <Accordion className="bg-transparent shadow-none">
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className="font-semibold">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component="div">{children}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const StaticFooterSection = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <FooterLinks items={items} />
  </div>
);

const FooterLinks = ({ items }) => (
  <ul className="flex flex-col  gap-3  text-sm">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const ContactDetails = () => (
  <div>
    <p className="flex items-center gap-2 text-sm">
    <FaMapMarkerAlt className="text-green-400"   style={{ fontSize: window.innerWidth >= 768 ? "28px" : "20px" }}  />

    2548 Broaddus Maple Court, Madisonville KY 4783, USA.
    </p>
    <p className="flex items-center gap-2 text-sm">
      <FaWhatsapp className="text-green-400" style={{ fontSize: "20px" }}/> +00 9876543210
    </p>
    <p className="flex items-center gap-2 text-sm">
      <FaEnvelope className="text-green-400" style={{ fontSize: "20px" }}/> example@email.com
    </p>

    <div className="flex gap-4 mt-3 text-lg">
  <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white">
    <FaFacebookF />
  </div>
  <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-blue-400 hover:text-white">
    <FaTwitter />
  </div>
  <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white">
    <FaLinkedinIn />
  </div>
  <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-pink-500 hover:text-white">
    <FaInstagram />
  </div>
</div>

  </div>
);

export default Footer;
