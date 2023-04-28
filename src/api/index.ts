import { createAlova } from "alova";
import GlobalFetch from "alova/GlobalFetch";
import reactHook from "alova/react";

const request = createAlova({
  statesHook: reactHook,
  requestAdapter: GlobalFetch(),
  baseURL: "http://localhost:3001/",
  timeout:3000,
  shareRequest:true,
  beforeRequest: (method) => {
    console.log("method",method);
    method.config.headers = {
        ...method.config.headers,
        "authorization": "Bear eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjdXJyZW50VGltZU1pbGxpcyI6IjE2ODIwNDAwMjk4NTciLCJhY2Nlc3NDb2RlIjoicWIucWJlZS5hbGwiLCJuZWVkUmVmcmVzaCI6dHJ1ZSwiZXhwIjoxNjgyNjQ0ODI5LCJ1c2VySWQiOiIxIiwiYWNjb3VudEtleSI6IjEifQ.CivVD2oMkT10fY9FqDGWkbNWyb0mol-7OHzW1Stz67E.MTAwMDAw"
    }
  },
  responsed:{
    onSuccess:(response,methods)=>{
        console.log("response",response);
        
    },
    onError:(error,methods)=>{
        console.log(error,methods)
    }
  }
});


export default request;