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

	un: string = "vietanh";
	pwd: string = "123456";

	user = new Login();
	constructor(private router: Router) { }

	ngOnInit() { }

	onLogin() {
		console.log();
		if (this.username === this.un && this.password === this.pwd) {
			this.user.username = this.username;
			this.user.password = this.password;

			this.router.navigate(["main"], { state: { data: this.user } });
		} else {
			alert("Check your username or password.");
		}
	}
}
