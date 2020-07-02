import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: [];

  curr_item: number = 0;

  icon_plus: string = "/assets/img/icons/circle-plus.svg";
  icon_minus: string = "/assets/img/icons/circle-minus.svg";



  constructor() { }

  ngOnInit(): void {
  }

  onClickItem(i : number) : void {
    this.curr_item = i;
  }

}
