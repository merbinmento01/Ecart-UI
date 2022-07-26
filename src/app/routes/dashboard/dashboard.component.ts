import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items:any ;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {sno: '1', label: 'Table-1', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      {sno: '2', label: 'Table-2', price: '2500', url: 'https://media.istockphoto.com/photos/contemporary-dining-chair-in-leather-and-stainless-steel-picture-id186691240?s=612x612'},
      {sno: '3', label: 'Table-3', price: '2500', url: 'https://media.istockphoto.com/photos/wooden-chair-isolated-on-white-background-picture-id1159905517?s=612x612'},
      {sno: '4', label: 'Table-4', price: '2500', url: 'https://media.istockphoto.com/photos/3d-modern-chair-picture-id185298516?s=612x612'},
      {sno: '5', label: 'Table-5', price: '2500', url: 'https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?t=st=1658829598~exp=1658830198~hmac=8b6a7717d441d4b7c160f1c563f3b1a747f2ba8b1a0c5b6ee04ed917ebc97557&w=740'},
      {sno: '6', label: 'Table-6', price: '2500', url: 'https://img.freepik.com/free-photo/beautiful-shot-modern-black-grey-chair-isolated-white_181624-22598.jpg?t=st=1658829608~exp=1658830208~hmac=7fdf2bbdb544541e171727bc64fd63a635e51e34ead1ed8b2b5e0955803a4727&w=740'},
      {sno: '7', label: 'Table-7', price: '2500', url: 'https://img.freepik.com/premium-photo/3d-rendered-modern-gray-chair-with-wooden-legs-white-background_181624-57980.jpg?size=626&ext=jpg&ga=GA1.2.523764454.1646463257'},
      {sno: '8', label: 'Table-8', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      {sno: '9', label: 'Table-9', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      {sno: '10', label: 'Table-10', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      {sno: '11', label: 'Table-11', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      {sno: '12', label: 'Table-12', price: '2500', url: 'https://m.media-amazon.com/images/I/61mzStPa9dL._SL1500_.jpg'},
      ];
  }

}
