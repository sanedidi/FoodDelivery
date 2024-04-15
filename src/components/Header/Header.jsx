import React, { useState, useEffect } from 'react';
import s from './Header.module.scss';
import logo from '../../assets/svg/logo.svg';
import LocationIcon from '../../assets/svg/LocationIcon.svg';
import russian from '../../assets/svg/russian.svg';
import { SlBasket } from 'react-icons/sl';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { Box } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { GiHamburgerMenu } from 'react-icons/gi';
import useHeaderProps from './useHeaderProps';
import { useLogin } from '../../Services/auth.service';
import { useCart } from 'react-use-cart';

export const Header = () => {
  const { totalItems } = useCart();
  const location = useLocation();
  const {
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
  } = useHeaderProps();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setShowTimer(false);
        setResendButtonText('Отправить код еще раз');
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  const { mutate: login } = useLogin();

  const handleSendCode = async () => {
    try {
      const response = await login({ email });
      setShowCodeInput(true);
      setResendDisabled(true);
      setTimeLeft(60);
      setShowTimer(true);
      setResendButtonText(
        `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft} сек`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post(
        'https://delivery-q991.onrender.com/api/v1/auth/verify-code/',
        {
          email: email,
          verification_code: code,
        }
      );
      if (response.status === 200) {
        setIsLoggedIn(true);
        setShowPersonalInfoInput(false);
        setIsOpenSecondModal(false);
        setIsCodeValid(true);
      } else if (response.status === 201) {
        setShowPersonalInfoInput(true);
        setShowCodeInput(false);
      }
      const accessToken = response.data.access;
      localStorage.setItem('token', accessToken);
      console.log(response);
    } catch (error) {
      console.log(error);
      setIsCodeValid(false);
      setResendDisabled(false);
      setShowTimer(false);
      setResendButtonText('Отправить код еще раз');
    }
  };

  const handleRegistration = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'https://delivery-q991.onrender.com/api/v1/user/profile/',
        {
          full_name: fullName,
          phone_number: phoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem('token', response.data.token);
      setIsLoggedIn(true);
      setIsOpenSecondModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailButtonClick = async () => {
    try {
      await handleSendCode();
      setShowEmailInput(false);
      setShowTimer(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const handlePageClick = (path) => {
    setActivePage(path);
  };

  const toggleDrawer = () => {
    setIsOpenBurger((prevState) => !prevState);
  };

  return (
    <>
      <header id='header' className={s.header}>
        <div className='container'>
          <div className={s.header__wrapper}>
            <div className={s.header__links}>
              <div onClick={toggleDrawer} className={s.header__burger}>
                <GiHamburgerMenu />
              </div>
              <Link to='/' className={s.header__link}>
                <img src={logo} alt='Логотип' />
              </Link>
              <div className={s.header__main_link}>
                <Link
                  to='/'
                  className={`${s.header__link} ${
                    location.pathname === '/' ? s.active : ''
                  }`}
                >
                  Меню
                </Link>
                <Link
                  to='/branches'
                  className={`${s.header__link} ${
                    location.pathname === '/branches' ? s.active : ''
                  }`}
                >
                  Филиалы
                </Link>
                <Link
                  to='/aboutus'
                  className={`${s.header__link} ${
                    location.pathname === '/aboutus' ? s.active : ''
                  }`}
                >
                  О нас
                </Link>
                <Link
                  to='/contact'
                  className={`${s.header__link} ${
                    location.pathname === '/contact' ? s.active : ''
                  }`}
                >
                  Контакты
                </Link>
              </div>
            </div>
            <div className={s.header__details}>
              <div className={s.header__options}>
                <div className={s.header__loc}>
                  <img src={LocationIcon} alt='Иконка местоположения' />
                </div>
                <div className={s.header__options_info}>
                  <p>Доставка или Самовызов</p>
                  <button onClick={onOpen}>Выберите способ получения</button>
                </div>
              </div>
              <div className={s.header__language}>
                <button>
                  {lang === 'ru' ? (
                    <img src={russian} alt='Флаг России' />
                  ) : (
                    <img src={russian} alt='Флаг Узбекистана' />
                  )}
                </button>
                <select
                  className={s.header__select}
                  value={lang}
                  onChange={handleLangChange}
                >
                  <option value='ru'>RU</option>
                  <option value='uz'>UZ</option>
                </select>
              </div>
              <div className={s.header__basket}>
                <Link className={s.header__basket_icon} to={'/cart'}>
                  <SlBasket className={s.header__icon} />
                  <p>{totalItems} количества</p>
                </Link>
              </div>
              <div className={s.header__account}>
                {isLoggedIn ? (
                  <button onClick={handleLogout}>Выход</button>
                ) : (
                  <RiAccountCircleLine
                    onClick={() => setIsOpenSecondModal(true)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>oiewoief</ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        className={s.header__registration}
        isOpen={isOpenSecondModal}
        onClose={() => setIsOpenSecondModal(false)}
      >
        <ModalOverlay />
        <ModalContent className={s.header__modal_main}>
          <Box className={s.header__modal_cont}>
            <Box>
              <ModalCloseButton />
            </Box>
            <ModalHeader className={s.header__modal__title}>
              Вход на сайт
            </ModalHeader>
            <p className={s.header__modal_subTitle}>
              Войдите с вашим email или номером телефона
            </p>
          </Box>

          <ModalBody className={s.header__email}>
            <Box className={s.header__email_act}>
              {showEmailInput && (
                <Stack spacing={4}>
                  <Box>
                    <p>Email или номер телефона</p>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.300' />
                      </InputLeftElement>
                      <Input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </Box>
                </Stack>
              )}
              {showCodeInput && (
                <Box>
                  <p>Код подтверждения из email</p>
                  <Stack spacing={4}>
                    <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <LockIcon color='gray.300' />
                      </InputLeftElement>
                      <Input
                        type='text'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className={`${s.input} ${!isCodeValid ? s.error : ''}`}
                      />
                    </InputGroup>
                  </Stack>
                  <div>
                    {showTimer ? (
                      <p
                        style={{
                          display: showTimer
                            ? 'none'
                            : 'block' && !showTimer
                            ? 'none'
                            : 'block',
                        }}
                      >
                        00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft} сек
                      </p>
                    ) : (
                      <p style={{ color: 'red' }} onClick={handleSendCode}>
                        {resendButtonText} ?
                      </p>
                    )}
                  </div>
                  <Button
                    className={s.header__btn}
                    onClick={handleVerifyCode}
                    style={{ backgroundColor: code ? '#7e5fa5' : 'gray' }}
                  >
                    Отправить код
                  </Button>
                </Box>
              )}
              {showPersonalInfoInput && (
                <Box>
                  <p>ФИО</p>
                  <Stack spacing={4}>
                    <InputGroup>
                      <Input
                        type='text'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </InputGroup>
                  </Stack>
                  <p>Номер телефона</p>
                  <Stack spacing={4}>
                    <InputGroup>
                      <Input
                        type='tel'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </InputGroup>
                  </Stack>
                  <Button
                    onClick={handleRegistration}
                    className={s.header__btn}
                    style={{
                      backgroundColor:
                        fullName && phoneNumber ? '#7e5fa5' : 'gray',
                    }}
                  >
                    Зарегистрироваться
                  </Button>
                </Box>
              )}
              {!showCodeInput && !showPersonalInfoInput && (
                <Button
                  className={s.header__btn}
                  onClick={handleEmailButtonClick}
                  style={{
                    backgroundColor:
                      email && !resendDisabled ? '#7e5fa5' : 'gray',
                  }}
                  disabled={resendDisabled}
                >
                  Отправить код
                </Button>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Drawer
        open={isOpenBurger}
        onClose={toggleDrawer}
        direction='right'
        className={s.header__main_burger}
      >
        <div className={s.header__main_link}>
          <Link
            to='/'
            className={`${s.header__link} ${
              location.pathname === '/' ? s.active : ''
            }`}
          >
            Меню
          </Link>
          <Link
            to='/branches'
            className={`${s.header__link} ${
              location.pathname === '/branches' ? s.active : ''
            }`}
          >
            Филиалы
          </Link>
          <Link
            to='/aboutus'
            className={`${s.header__link} ${
              location.pathname === '/aboutus' ? s.active : ''
            }`}
          >
            О нас
          </Link>
          <Link
            to='/contact'
            className={`${s.header__link} ${
              location.pathname === '/contact' ? s.active : ''
            }`}
          >
            Контакты
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
