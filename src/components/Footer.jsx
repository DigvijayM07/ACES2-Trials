import React from "react";
import "./Footer.css";
import logo from "../assets/pwa/icon.png";

const locationUrl =
  "https://www.google.com/maps/place/D.Y.+Patil+College+of+Engineering/@18.6449794,73.7562764,16.5z/data=!4m9!1m2!2m1!1sD.+Y.+Patil+College+of+Engineering,+D.+Y.+Patil+Educational+Complex,+Sector+29,+Nigdi+Pradhikaran,+Akurdi,+Pune+411044.!3m5!1s0x3bc2b9f1ca8dab03:0x6237cfbd36f9acf9!8m2!3d18.6448378!4d73.7582119!15sCndELiBZLiBQYXRpbCBDb2xsZWdlIG9mIEVuZ2luZWVyaW5nLCBELiBZLiBQYXRpbCBFZHVjYXRpb25hbCBDb21wbGV4LCBTZWN0b3IgMjksIE5pZ2RpIFByYWRoaWthcmFuLCBBa3VyZGksIFB1bmUgNDExMDQ0LlptImtkeSBwYXRpbCBjb2xsZWdlIG9mIGVuZ2luZWVyaW5nIGR5IHBhdGlsIGVkdWNhdGlvbmFsIGNvbXBsZXggc2VjdG9yIDI5IG5pZ2RpIHByYWRoaWthcmFuIGFrdXJkaSBwdW5lIDQxMTA0NJIBB2NvbGxlZ2WaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUnZNM010VEdGbkVBRQ";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer">
          <a className="creator_a" href="/creators">
            <div className="footer_intro">
              <img
                loading="lazy"
                decoding="async"
                src={logo}
                className="footer_image"
                alt="DRAIC Logo"
              />
              <h1>ACES DYPCOE</h1>
              <p>Let's get ready to dive into Robotics</p>
            </div>
          </a>
          <div className="footer_as_section">
            <div className="footer_as">
              <h1 className="footer_as_name">aS</h1>
              <ul>
                <li className="footer_a">
                  <a className="footer_a" href="/">
                    Home
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/project">
                    Projects
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/achievements">
                    Achievements
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/about">
                    About
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/team">
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_as">
              <h1 className="footer_as_name">DEPARTMENTS</h1>
              <ul>
                <li className="footer_a">
                  <a className="footer_a" href="/programmingDepartment">
                    Programming
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/MechanicalDepartment">
                    Mechanical
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/ElectricalDepartment">
                    Electronics
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/PublicRelations">
                    Public Relations
                  </a>
                </li>
                <li className="footer_a">
                  <a className="footer_a" href="/Creators">
                    Creators
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_address">
            <div className="footer_locate">
              <img
                loading="lazy"
                decoding="async"
                alt=" "
                className="footer_location_pin"
                src="https://img.icons8.com/color-glass/48/4a90e2/google-maps-new.png"
              />
              <h1 className="footer_locateus">Locate Us</h1>
            </div>
            <a
              href={locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer_location"
            >
              D. Y. Patil College of Engineering, Dr. D. Y. Patil
              <br />
              Educational Complex, Sector 29, Nigdi
              <br />
              Pradhikaran, Akurdi, Pune 411044.
            </a>
          </div>
          <div className="footer_social">
            {/* <a
              className="footer_social_as"
              href="//www.aedin.com/company/d-y-patil-robotics-ai-club"
              target="_blank"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://www.instagram.com/draicdypcoe/"
                alt="Aedin"
              />
            </a> */}
            <a
              className="footer_social_as"
              href="https://www.instagram.com/draicdypcoe/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
            <a
              className="footer_social_as"
              href="https://twitter.com/DraicDypcoe"
              target="_blank"
              rel="noreferrer"
            >
              <img
                loading="lazy"
                decoding="async"
                className="footer_social_img"
                src="https://img.icons8.com/color/48/000000/twitter-squared.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
        <div className="footer_copyrights">
          <div className="footer_ruler"></div>
          <p className="footer_copyright">
            © 2022 D.Y. Patil Robotics & AI Club. <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
