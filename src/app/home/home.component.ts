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

  ngOnInit() {
    this.ofertas = this.ofertasService.getOfertas()
    console.log(this.ofertas)
  }
}
