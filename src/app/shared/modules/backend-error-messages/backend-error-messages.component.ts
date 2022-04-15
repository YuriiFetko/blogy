import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInterface} from "../../types/backendErrors.interface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.sass']
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface | any

  errorMessages!: string[]

  constructor() {
  }

  ngOnInit(): void {
      this.errorMessages = Object.keys(this.backendErrorsProps).map((name: string) => {
        const messages = this.backendErrorsProps[name].join(', ')

        return `${name} ${messages}`
      })
  }

}
