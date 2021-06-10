import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  model = 'BMW';
  speed = '244';
  salon = 'black';
  color_car = 'white';
  shini = '17';
  options = [ "abs", "Автопилот","паркинг" ];
  isEdit:boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.model = 'Audi';
    this.speed = '233';
    this.salon = 'Чёрный';
    this.color_car = 'Белый';
    this.shini = '17';
    this.options = [ "abs", "Автопилот","паркинг" ];

  }
  showEdit(){
      this.isEdit = !this.isEdit;
  }

  BMWSelect(){
    this.model = 'BMW';
    this.speed = '450';
    this.salon = 'Чёрный';
    this.color_car = 'Чёрная';
    this.shini = '17';
    this.options = [ "abs", "Автопилот","паркинг" ];
}
  AudiSelect(){
    this.model = 'Audi';
    this.speed = '290';
    this.salon = 'Белый';
    this.color_car = 'Синий';
    this.shini = '17';
    this.options = [ "abs", "Автопилот","паркинг" ];

  }
  MersSelect(){
    this.model = 'Mers';
    this.speed = '500';
    this.salon = 'Чёрный';
    this.color_car = 'Чёрная';
    this.shini = '19';
    this.options = [ "abs", "Автопилот","паркинг" ];
    }


}

interface Colors {
  car:string,
  salon:string,
  wheels:string
}
