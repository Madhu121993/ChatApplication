import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { RouterModule } from "@angular/router";
import { chatsRoutes } from "./chat/chat.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(chatsRoutes),
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ChatModule { }
