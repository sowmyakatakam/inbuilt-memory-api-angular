import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact : any;


  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(){
   this.route.paramMap.subscribe(params => {
     console.log(params.get('id'))
     this.contactService.getContact(params.get('id')).subscribe(c =>{
       console.log(c);
       this.contact = c;
     })
   });
  }

}
