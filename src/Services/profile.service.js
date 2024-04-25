import { useMutation } from "react-query";
import axios from "axios";

const ProfService = {
  edit: (id, data) =>
    axios.patch(`https://delivery-q991.onrender.com/api/v1/user/profile/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }),
};

export const useEdit = () => {
  return useMutation(( id, data) => ProfService.edit(id, data));
};
