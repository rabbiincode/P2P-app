import { Component, Input } from '@angular/core';
import { Accordion } from '../../interfaces/body';

@Component({
  selector: 'cashMingle-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {
  @Input() scrollPagePosition!: string
  questions: Accordion[] = [
    {
      position: 'first',
      title: 'How do i open an account?',
      content: 'Opening an account is as easy as making a coffee. Just click on the register button on the home page, choose your account type, and fill the form.'
    },
    {
      position: 'second',
      title: 'How do the loan services work?',
      content: 'Your withdrawal limit depends on the type of account you operate. It is higher for business account holders. You can also set your withdrawal limit per day or per week to help checkmate your expenses.'
    },
    {
      position: 'third',
      title: 'Is there guarantee my money would be paid back to me after the loan deadline?',
      content: 'Your withdrawal limit depends on the type of account you operate. It is higher for business account holders. You can also set your withdrawal limit per day or per week to help checkmate your expenses.'
    },
    {
      position: 'fourth',
      title: 'How long does it take for withdrawal to be completed?',
      content: 'Withdrawal is Instant and free of charge.'
    },
    {
      position: 'fifth',
      title: 'How secure is my account and personal data?',
      content: 'Here, we take security very seriously. We use the latest encryption technologies to protect your sensitive financial information and no third-party can access your personal information even in the event of an attack.'
    },
    {
      position: 'sixth',
      title: 'In case of failed transactions, how long does it take before reversal?',
      content: "We reverse any failed transaction as soon as possible. In the event that it takes longer than expected, kindly reach out to us and we'll resolve it immediately."
    },
    {
      position: 'seventh',
      title: 'How does the savings services work?',
      content: 'This service allows you to save money for a specified duration of time. During this time, you cannot have access to the money until the time elapses. This instills the discipline to save in order to achieve your desired financial goals.'
    }
  ]
}