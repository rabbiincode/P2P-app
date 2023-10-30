import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';

@Component({
  selector: 'cashMingle-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})

export class LoanComponent {
  lend = false
  loading = false
  amount = ''
  balance: number
  startDate!: Date
  endDate!: Date
  eligibility: string
  creditScore: number
  eligibleAmount: number
  loanError!: any
  loanResponse!: any
  loanForm!: FormGroup
  urgency: string[] = ['immediately', '2-5 days', 'a week', '2-3 weeks', 'custom']

  constructor(private savings: UserService, private formBuilder: FormBuilder){
    this.balance = savings.userData.balance
    this.eligibility = 'Eligible'
    this.creditScore = 100
    this.eligibleAmount = 5000
  }

  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      start: [''],
      end: [''],
      interest: [{value: '8%', disabled: true}],
      urgency: [''],
      customUrgency: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }

  LendMoney(){
    this.lend = !this.lend
  }

  GetLoan(){
    
  }
}