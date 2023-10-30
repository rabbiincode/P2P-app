import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordPatternValidator } from 'src/app/components/customValidation/custom-validation/custom-validation.component';

@Component({
  selector: 'cashMingle-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.scss']
})

export class LendComponent {
  loading = false
  amount = ''
  balance: number
  startDate!: Date
  endDate!: Date
  lendError!: any
  lendResponse!: any
  lendForm!: FormGroup
  loanId: string[] = ['Match available request', 'custom']
  @Output() back = new EventEmitter<boolean>()

  constructor(private savings: UserService, private formBuilder: FormBuilder){
    this.balance = savings.userData.balance
  }

  ngOnInit(): void {
    this.lendForm = this.formBuilder.group({
      amount: ['', Validators.pattern('^[0-9]*$')],
      interest: [{value: '6%', disabled: true}],
      start: [''],
      end: [''],
      loanId: [''],
      customLoanId: [''],
      password: ['', {validators: PasswordPatternValidator}]
    })
  }

  goBack(){
    this.back.emit(false)
  }

  LendMoney(){
    
  }
}