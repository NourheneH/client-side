import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
//contentHeaders.append('Content-Type', 'application/json');
contentHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
contentHeaders.append('Access-Control-Allow-Origin', 'http://localhost:4200');
 