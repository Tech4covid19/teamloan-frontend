import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HostListener } from '@angular/core';

import FAQS from '../../../assets/data/faqs.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {

  categ: String;
  faq: any;

  faqsa: any;

  scrHeight: any;
  scrWidth: any;
  isWide: boolean;

  observer_url: any = {
    next: params => {
      this.categ = params['id'];
      if (!this.categ) {
        this.categ = FAQS[0].id;
      }
      var faqs = FAQS.filter( elem => {
          return(elem.id == this.categ)
      });

      if (faqs.length == 1) {
        this.faq = faqs[0];
      } else {
        this.faq = { "desc": "invalid id", "items": []}
      }
      
    },
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification')
  };


  constructor(private route: ActivatedRoute) { 
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.faqsa = FAQS;
    this.route.queryParams.subscribe( this.observer_url);
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
    this.isWide = this.scrWidth > 768;
  }
}
