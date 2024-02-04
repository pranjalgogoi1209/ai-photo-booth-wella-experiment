import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.png";
import { IoMdCloseCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function EmailFeature({ setIsEmailOpen, generatedImage }) {
  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const handleSend = () => {
    console.log("clicked on Send Button");
    /*    axios
        .post("https://396e-103-17-110-13.ngrok-free.app/rec", {
            // generatedImage
        })
        .then(function (response) {
          console.log(response);
          toast.error("Your Image successfully sent", toastOptions);
          setTimeout(() => {
            setIsEmailOpen(false);
          }, 4200);
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Please enter an email", toastOptions);
        
        });
    } */
  };

  return (
    <EmailFeatureWrapper className="EmailFeature">
      <div className="container">
        <header>
          <div className="close" onClick={() => setIsEmailOpen(false)}>
            <IoMdCloseCircle />
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>Share Generated Image</h1>
        </header>
        <main>
          <div className="form">
            <input type="mail" placeholder="Enter an email..." />
            <button onClick={handleSend}>Send</button>
          </div>
        </main>
      </div>
      <ToastContainer />
    </EmailFeatureWrapper>
  );
}

const EmailFeatureWrapper = styled.div`
  /* border: 10px solid black; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* background-color: white; */
  position: absolute;
  /* top: 0; */
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .container {
    /* border: 2px solid black; */
    background-color: #f1f1f1;
    margin: 5vw;
    padding: 6vw;
    display: flex;
    flex-direction: column;
    gap: 5vw;
  }
  header {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 2vw;
    position: relative;
    .close {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 6vw;
      color: #c72041;
    }
    .logo {
      margin: 0 auto;
      width: 20vw;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h1 {
      /* border: 1px solid black; */
      font-size: 4.5vw;
      text-align: center;
      font-weight: 600;
    }
  }
  main {
    /* border: 1px solid black; */
    .form {
      display: flex;
      flex-direction: column;
      gap: 5vw;
      align-items: center;
      input {
        /* background-color: #c72041; */
        width: 97%;
        padding: 2vw;
      }
      button {
        /* width: 27%; */
        text-align: center;
        border: none;
        background-color: transparent;
        outline: none;
        padding: 1vw 4vw;
        font-size: 3vw;
        font-weight: 600;
        border-radius: 1vw;
        cursor: pointer;
        box-shadow: 0.3vw 0.3vw 0.8vw rgba(0, 0, 0, 0.5);
        transform: translateY(-0.4vw);
        transition: all ease 0.5s;
        background-color: #c72041;
        color: #f1f1f1;
        &:hover {
          box-shadow: none;
          transform: translateY(0);
        }
      }
    }
  }
`;
