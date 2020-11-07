import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public title = 'hello-goodbye-angular-ionic-v1';

  private textInput: string = null;

  public handleHello() {
    this.textInput = 'Hello';
  }

  public handleGoodbye() {
    this.textInput = 'Goodbye';
  }

  public handleUpperCase() {
    this.textInput = this.textInput.toUpperCase();
  }

  public handleLowerCase() {
    this.textInput = this.textInput.toLowerCase();
  }

  public handleMessage() {
    alert(this.textInput);
  }

  public handleClear() {
    this.textInput = null;
  }

}
