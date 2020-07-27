import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  @Input() faqs: [];
  @Input() faq: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
