import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserInfo = ({ id, fullName, phoneNumber }) => {
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(`https://delivery-q991.onrender.com/api/v1/user/profile/${id}`);
      setProfileData(response.data);
    } catch (error) {
      console.error('Ошибка при получении данных профиля:', error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [id]); 

  if (!profileData) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div>
      <h2>Данные профиля</h2>
      <p>Имя: {fullName}</p>
      <p>Номер телефона: {phoneNumber}</p>
    </div>
  );
};

export default UserInfo;
