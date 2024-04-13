import { useMutation } from "@tanstack/react-query";
import request from "./HttpRequest/index";
const AuthService = {
  login: (data) => request.post("https://delivery-q991.onrender.com/api/v1/auth/login/", data),
  verifyCode: (data) => request.post('https://delivery-q991.onrender.com/api/v1/auth/verify-code/', data)
};


export const useLogin = ()=>{
    return useMutation({mutationFn: (data) => AuthService.login(data)})
}
export const useVerifyCode = ()=>{
  return useMutation({mutationFn: (data) => AuthService.verifyCode(data)})
}

export default AuthService