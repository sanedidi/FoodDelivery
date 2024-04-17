import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const useHeaderProps = () => {
  const { register, handleSubmit } = useForm();
  const { login, handleLogin } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);
  const [activePage, setActivePage] = useState("/");
  const [lang, setLang] = useState("ru");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showPersonalInfoInput, setShowPersonalInfoInput] = useState(false);
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [resendButtonText, setResendButtonText] = useState(
    "Отправить код еще раз?"
  );
  const [showTimer, setShowTimer] = useState(false);
  const [Btn, setBtn] = useState(false);

  const links = [
    {
      id: 1,
      link: "Профиль",
      path: "/profile",
    },
    {
      id: 2,
      link: "Мои заказы",
      path: "/order",
    },
    {
      id: 3,
      link: "Мои адреса",
      path: "/address",
    },
  ];
  const address = [
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
    {
      name:'Food Delivery Atlas',
      desc:'улица Катартал, 28, Ташкент',
      close:'Ресторан закроется в 22:00'
    },
  ]

  return {
    setShowPersonalInfoInput,
    showPersonalInfoInput,
    setIsOpenSecondModal,
    setResendButtonText,
    setShowEmailInput,
    isOpenSecondModal,
    setResendDisabled,
    setShowCodeInput,
    resendButtonText,
    setIsOpenBurger,
    setPhoneNumber,
    resendDisabled,
    showEmailInput,
    setIsCodeValid,
    setActivePage,
    setIsLoggedIn,
    showCodeInput,
    handleSubmit,
    isOpenBurger,
    setShowTimer,
    setFullName,
    isCodeValid,
    phoneNumber,
    setTimeLeft,
    isLoggedIn,
    showTimer,
    setEmail,
    register,
    timeLeft,
    fullName,
    onClose,
    setCode,
    setLang,
    onOpen,
    isOpen,
    email,
    lang,
    code,
    links,
    Btn,
    setBtn,
    address
  };
};

export default useHeaderProps;
