import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./UserInfo.module.scss";
import { Skeleton, Stack } from "@chakra-ui/react";

export const UserInfo = ({ id }) => {
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        `https://delivery-q991.onrender.com/api/v1/user/profile/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setProfileData(response.data);
    } catch (error) {
      console.error("Ошибка при получении данных профиля:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`https://delivery-q991.onrender.com/logout`,
    {
      headers:{
        Authorization: `Bearer ${localStorage.removeItem('token')}`
      }
    });
      console.log("Успешный выход из аккаунта");
    } catch (error) {
      console.error("Ошибка при выходе из аккаунта:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [id]);

  return (
    <div className={s.profile__wrapper}>
      <div className={s.profile__title}>
        <h2>Профиль</h2>
      </div>
      <div className={s.profile__main_data}>
        {profileData ? (
          <div className={s.profile__data}>
            <div className={s.profile__item}>
              <h2>Личные данные</h2>
              <p> {profileData.full_name}</p>
            </div>
            <div className={s.profile__item2}>
              <div className={s.profile__user_data}>
                <h3> Дата рождение</h3>
                <p> неизвестный</p>
              </div>
              <div className={s.profile__user_data}>
                <h3> Номер телефона</h3>
                <p> {profileData.phone_number}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={s.profile__loading}>
            <Stack>
              <Skeleton padding={"20px"} height="20px" />
              <Skeleton padding={"20px"} height="20px" />
              <Skeleton padding={"20px"} height="20px" />
              <Skeleton padding={"20px"} height="20px" />
            </Stack>
          </div>
        )}
        <div className={s.profile__edit}>
          <button>Изменить данные</button>
        </div>
      </div>
      <button className={s.profile__logOut} onClick={handleLogout}>Выйти из аккаунта</button>
    </div>
  );
};

export default UserInfo;
