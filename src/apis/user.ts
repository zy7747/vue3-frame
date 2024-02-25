import request from "@/utils/request";

export function userLogin(params: any) {
  return request({
    url: "/user/login",
    method: "get",
    params,
  });
}
