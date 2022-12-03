import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userData: any;
  activeContact: any = null;
  contactList: any = [];
  message: String = '';

  activeContactMessages: any = [
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
    {name: 'Cecile', time: '2022-11-10T06:15:17.527Z', message: 'hello', senderId: '-MHRFkbySOaSg-KAAEXx'},
    {name: 'Demo', time: '2022-11-10T06:17:15.953Z', message: 'hello', senderId: '-L_7oKO2yDP8MANBdyJO'},
];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {

    let user = localStorage.getItem('userdata');
    if(user !==null) this.userData = JSON.parse(user);

    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts(this.userData.agencyId).subscribe((res: any)=> {
      if(res?.data?.status_code == 200 && res?.data?.list.length) {
        this.contactList = res.data.list;
      }      
    });
  }

  openContact(contact: any) {
    this.activeContact = contact;
    let activeUsers = [];
    activeUsers.push(this.userData.id);
    activeUsers.push(this.activeContact._id)
    let UserData = {
      firstName: contact?.firstName || '',
      lastName: contact?.lastName || '',
      activeUsers
    }
    this.contactService.emit('join',UserData);
    this.scrollToBottom();
    this.contactService.listen('online').subscribe((data: any)=> {
      console.log(data);
      this.activeContactMessages.push(data);
      this.scrollToBottom();
    })
  }

  sendMsg() {
    let formatMsg = {
      name: this.userData?.firstName,
      time: new Date(),
      message: this.message,
      senderId: this.userData.id
    }
    this.activeContactMessages.push(formatMsg);
    this.contactService.emit('new_message',formatMsg);
    this.message = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout( ()=> {
      let messageBody = document.getElementById((this.activeContactMessages.length-1).toString());
      messageBody?.scrollIntoView({behavior: 'smooth', block:'end'});
    }, 0);
  }

}
