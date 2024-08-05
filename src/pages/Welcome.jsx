import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import {  useNavigate } from "react-router-dom";
const Welcome = () => {
  const [name,setName]=useState("");
  const [phone, setPhone]= useState("");
  const [nameError,setNameError]= useState(false);
  const [phoneError,setPhoneError]= useState(false);
  const navigate = useNavigate()
  const[buttonError,setButtonError]=useState(true);

  const regex = /^[A-Za-zА-Яа-яЁё]+$/
  const regexNum = /^\+?(\d{1,4}|\(\d{1,4}\))[-.\s]?(\d{1,4}[-.\s]?){1,3}\d{1,4}$/
  
  const handleClick = () =>{
    if(!regex.test(name)){
      setNameError(true);
    } else if(!regexNum.test(phone)){
      setPhoneError(true);
    } else {
      setNameError(false);
      setPhoneError(false);
      navigate("/step-one");
      localStorage.setItem("userName", JSON.stringify(name,phone))
      localStorage.setItem("userPhone", JSON.stringify(phone))
    }
  };

  useEffect(() =>{
    name.length >0 && phone.length > 0 
    ? setButtonError(false) 
    : setButtonError(true);
  }, [name,phone]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Header 
          hederType="h1"
          headerText="Добро пожаловать в квиз от лучшего учебног центра"
          />
          <form className="welcome__form">
            <AppInput 
              inputText= "Ваше имя"
              errorText="Введите Имя в правильном формате"
              inputPlaceholder="Введите ваше имя"
              inputType="text"
              inputValue={name}
              inputChange={setName}
              hasError={nameError}
              />
            <AppInput 
              inputText= "Ваш номер"
              errortext=" Введите номер в правильном формате"
              inputPlaceholder="Ввелите ваш номер"
              inputType="text"
              inputValue={phone}
              inputChange={setPhone}
              hasError={phoneError}
              />
             
                 <AppButton isDisabled={buttonError} buttonClick={handleClick} />
              
          </form>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
