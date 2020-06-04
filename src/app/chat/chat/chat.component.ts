import { Component, OnInit } from '@angular/core';
import { StreamChat, ChannelData, Message, User } from 'stream-chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  channelList = [];
  messages = [];
  constructor() { }

  ngOnInit() {
   this.channelList = [
      {data:{name:"Madhu"},state:{messages:[{text:"hello"},{text:"hi"}]}}
    
    ];
    this.messages=[{text:"Hello"},{text:"Hi"}]
  }
  // title = 'angular-chat';
  // channel: ChannelData;
  username = '';
  // messages: Message[] = [];
   newMessage = '';
  // channelList: ChannelData[];
  chatClient: any;
  currentUser: User;

  
 

  async joinChat() {
    const { username } = this;
    console.log("username",username)
    this.currentUser =  {
      id: 'honey',
      name: 'honey',
    }
  }


  async sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    try {
      // await this.channel.sendMessage({
      //   text: this.newMessage,
        
      // });
      this.newMessage = '';
    } catch (err) {
      console.log(err);
    }
  }
}
