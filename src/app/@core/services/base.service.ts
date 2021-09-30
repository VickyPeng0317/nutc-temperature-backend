import {HttpHeaders} from '@angular/common/http';

export class BaseService {
  public POST_OPTION = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
  dataToFormBody(params: any) {
    const body = new URLSearchParams();
    Object.keys(params).forEach(key => body.set(key, params[key]));
    return body.toString();
  }
}
