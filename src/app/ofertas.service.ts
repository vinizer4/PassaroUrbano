import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

@Injectable()
export class OfertasService {
  URL = 'http://localhost:3000/ofertas?destaque=true';

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[] | undefined> {
    return this.http.get<Oferta[]>(this.URL).toPromise()
      .then(function (resposta) {
        console.log(resposta);
        return resposta;
      });
  }
}
