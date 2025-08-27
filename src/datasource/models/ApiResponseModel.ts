 export interface ApiResponseModel<T>{
    message:string;
    statusCode:number;
    data:T;
}
