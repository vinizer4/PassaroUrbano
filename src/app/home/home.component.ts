import { Component }    from '@angular/core';
import {OfertasService} from "../ofertas.service";
import {Oferta}         from "../shared/oferta.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService]
})
export class HomeComponent {

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService) {
    this.ngOnInit()
  }

  async ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

    await this.ofertasService.getOfertas()
      .then((ofertas: any) => {
        this.ofertas = ofertas
      })
      .catch((param: any) => {
        console.log(param)
      })
  }
}
