import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  UserForm: FormGroup;

  ngonint() {
    this.CreateUserForm();
  }

  CreateUserForm() {
    this.UserForm = new FormGroup({
      FirstName: new FormControl(),
      MiddleName: new FormControl(),
      Address: new FormControl(),
      Gender: new FormControl()
    });
  }
}
