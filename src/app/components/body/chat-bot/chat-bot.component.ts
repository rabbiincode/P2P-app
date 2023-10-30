import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BodyService } from '../body-service/body.service';

@Component({
  selector: 'cashMingle-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})

export class ChatBotComponent {
  question = ''
  chatBotResponse!: string
  chatBotError!: any
  chatBotForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private mail: BodyService){}

  ngOnInit(): void {
    this.chatBotForm = this.formBuilder.group({
      message: [''],
      username: ['esteemed customer'],
    })
  }

  chatBot(){
    this.question = this.chatBotForm.value.message
    this.chatBotForm.reset()
    this.mail.chatBot(this.chatBotForm.value).subscribe((data: any) => {
      this.chatBotResponse = data
    }, (error) => {
      this.chatBotError = error
    })
  }
}