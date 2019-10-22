import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "./login.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @Input() username: string = "";
  @Input() password: string = "";
  @Output() afterLogin = new EventEmitter<Login>();

  user = new Login();
  constructor(private router: Router) {}

  ngOnInit() {}

  onLogin() {
    this.user.username = this.username;
    this.user.password = this.password;
	this.afterLogin.emit(this.user);
    // this.router.navigate(["/main"], {});
  }
}
