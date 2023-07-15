import { Injectable } from '@angular/core';
import { Temple } from '../models/temple.model';

@Injectable({
  providedIn: 'root'
})
export class TempleAdapter {
  adapt(response: any): Temple {
    return {
      id: response._id,
      name: response.name,
      address: response.address,
      telephone: response.telephone,
      photoUrl: response.photoUrl
    };
  }
}
