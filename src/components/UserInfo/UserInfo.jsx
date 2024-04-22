import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./UserInfo.module.scss";
import { Button, Input, Skeleton, Stack } from "@chakra-ui/react";

const UserInfo = ({ id }) => {
  const [profileData, setProfileData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    birth_date: "",
  });

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
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleEdit = () => {
    setEditing(true);
    setFormData({
      full_name: profileData.full_name || "",
      phone_number: profileData.phone_number || "",
      birth_date: profileData.birth_date || "",
    });
  };

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `https://delivery-q991.onrender.com/api/v1/user/profile/${id}/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setProfileData(response.data);
      setEditing(false);
    } catch (error) {
      window.location.href = "/"; 
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
            {editing ? (
              <div className={s.profile__form_edit}>
                <h2 className={s.profile__main_title}>Личные данные</h2>
                <div className={s.profile__item_edit}>
                  <Input
                    type="text"
                    value={formData.full_name}
                    placeholder="Введите ваше имя"
                    onChange={(e) =>
                      setFormData({ ...formData, full_name: e.target.value })
                    }
                  />
                  <Input
                    type="tel"
                    value={formData.phone_number}
                    placeholder="Введите ваш номер телефона"
                    onChange={(e) =>
                      setFormData({ ...formData, phone_number: e.target.value })
                    }
                  />
                </div>
                <div className={s.profile__user_data}>
                  <div className={s.profile__item_edit}>
                    <Input
                      type="date"
                      value={formData.birth_date}
                      placeholder="Введите вашу дату рождения"
                      onChange={(e) =>
                        setFormData({ ...formData, birth_date: e.target.value })
                      }
                    />
                  </div>
                  <div className={s.profile__item}>
                    <Input
                      type="number"
                      placeholder={profileData.phone_number}
                      disabled
                    />
                  </div>
                </div>
                <div className={s.profile__buttons_edit}>
                  <Button colorScheme="blue" onClick={() => setEditing(false)}>
                    Отменить
                  </Button>
                  <Button
                    className={s.gg}
                    colorScheme="blue"
                    onClick={handleSave}
                  >
                    Сохранить
                  </Button>
                </div>
              </div>
            ) : (
              <div className={s.profile__view}>
                <div className={s.profile__item}>
                  <h2>Личные данные</h2>
                  <p>{profileData.full_name}</p>
                </div>
                <div className={s.profile__birth_data}>
                  <div className={s.profile__item}>
                    <h2>Дата рождения</h2>
                    <p>{profileData.birth_date || "Неизвестно"}</p>
                  </div>
                  <div className={s.profile__item}>
                    <h2>Номер телефона</h2>
                    <p>{profileData.phone_number}</p>
                  </div>
                </div>
              </div>
            )}
            <div className={s.profile__main_edit}>
              <button className={s.profile__edit} onClick={handleEdit}>
                Изменить данные
              </button>
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
      </div>
      <button className={s.profile__logOut} onClick={handleLogout}>
        Выйти из аккаунта
      </button>
    </div>
  );
};

export default UserInfo;
