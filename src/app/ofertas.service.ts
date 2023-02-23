import {Oferta}     from './shared/oferta.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs';
import {URL_API}    from "./app.api";

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {
    }

    public getOfertas(): Promise<Oferta[] | undefined> {
        return this.http.get<Oferta[]>(`${URL_API}?destaque=true`)
            .toPromise()
            .then(function (resposta) {
                console.log(resposta);
                return resposta;
            });
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get<Oferta[]>(
            `${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0]
            })
    }
}
