import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../login/login.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  user = new Login();

  constructor() {}

  ngOnInit() {
    // this.user = window.history.state.data;
    // console.log(this.user);
  }

  showUsername(user: Login) {
    console.log(user);
    this.user = user;
  }
}
