import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //get token from localstorage/session storage
    let token=sessionStorage.getItem("token")
     
    if(token)
    {

      //add token to the header of the request obj
      let copyReqObj=req.clone({
       headers:req.headers.set( "Authorization","Bearer "+token)
      })
      //handover the request to the next interceptor or to the server
      return next.handle(copyReqObj);
    }
    else{
      
     return next.handle(req);
    }

  }
}
