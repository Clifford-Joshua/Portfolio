import React from "react";
import styled from "styled-components";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Adress = () => {
  return (
    <Wrapper>
      <h2 className="title">Let's talk for your next project</h2>
      <p className="sub_title">
        Welcome! I’m glad you’re here. If you have any questions or just want to
        reach out, please feel free to send a message. I look forward to
        connecting with you!
      </p>
      <div className="address_container_holder">
        <div className="adress_container">
          <div className="address-icon_container">
            <IoLocationSharp className="address_icon" />
          </div>
          <article className="address_text_area">
            <h2 className="address_title">address</h2>
            <p className="address">
              Assembles Of God Church at Akara Junction inside Gariki, Enugu
              State
            </p>
          </article>
        </div>
        <div className="adress_container">
          <div className="address-icon_container">
            <IoIosMail className="message_icon" />
          </div>
          <article className="address_text_area">
            <h2 className="address_title">email address</h2>
            <p className="address">cliffordgb45@gmail.com</p>
          </article>
        </div>
        <div className="adress_container">
          <div className="address-icon_container">
            <IoCall className="call_icon" />
          </div>
          <article className="address_text_area">
            <h2 className="address_title">phone number</h2>
            <p className="address">(+234) 816-548-7439</p>
          </article>
        </div>
        <div className="adress_container">
          <div className="address-icon_container">
            <FaWhatsapp className="whatsapp_icon" />
          </div>
          <article className="address_text_area">
            <h2 className="address_title">whatapp number</h2>
            <p className="address">(+234) 816-342-8439</p>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* ========================================== */
  /* Mobile View */
  gap: 0.5rem;
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  font-family: "Roboto", serif;
  .title {
    font-size: 1.3rem;
    color: var(--clr-text-black-white);
    font-family: "Roboto Slab", serif;
  }
  .sub_title {
    font-size: 0.9rem;
    color: var(--clr-text-ash-steel);
  }
  .address_container_holder {
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
  .adress_container {
    gap: 1rem;
    display: flex;
    padding: 0.5rem 0;
    align-items: center;
    color: var(--clr-black-lightgray);
  }
  .address-icon_container {
    padding: 0.5rem;
    border-radius: 10px;
    border: 2px solid var(--clr-black-lightgray);
  }
  :is(.address_icon, .whatsapp_icon, .message_icon, .call_icon) {
    font-size: 1.6rem;
  }
  .address_text_area {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .address_title {
    margin: 0;
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  .address {
    margin: 0;
    font-size: 0.9rem;
  }

  /* ============================================== */
  /* Ipad View */
  @media screen and (width >= 764px) {
    width: 45%;
    .title {
      font-size: 1.5rem;
    }
    .address_title {
      font-size: 1.1rem;
    }
    .address {
      font-size: 0.8rem;
    }

    /* ============================================== */
    /* desktop View */
    @media screen and (width >= 1023px) {
      .title {
        font-size: 1.8rem;
      }
    }
  }
`;
export default Adress;
