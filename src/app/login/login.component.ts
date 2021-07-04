 import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

 @Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
 })

 export class LoginComponent implements OnInit {
   constructor(){}
   ngOnInit(): void {
     throw new Error('Method not implemented.');
   }
 }

//   constructor(private fb: FormBuilder,
//     private auth: AuthService,
//     private fauth: AuthService,
//     private router: Router) { }

//   LoginFrm: FormGroup;
//   ngOnInit(): void {
//     this.LoginFrm = this.fb.group({
//       email: ['', Validators.required],
//       password: ['', [Validators.required]],
//     });
//   }

//   tryGoogleLogin() {
//     this.auth.signinGmail().then(() => {
//       console.log("Prossessing Auth ....")
//       // this.router.navigate(["/home"]);
//       // su dung href nhu ben duoi khi dang nhap se load lai nguyen trang nhu url ben duoi
//       // location.href="/tableSP" // dong nay nghia la sau khi dang nhap thanh cong se chuyen huong trang den noi chi dinh
//       this.router.navigate(["tableSP"]);
//     }).catch((err: any) => {
//       console.log(err);
//     })
//   }

//   tryFirebaseAccount() {
//     // alert("this button not have done yet !!!")
//     this.auth.siginFirebase(this.LoginFrm.controls['email'].value, this.LoginFrm.controls['password'].value).then(res => {
//       console.log("Prossessing Auth by firebase account ....")
//       this.router.navigate(["tableSP"]);
//     }).catch((err: any) => {
//       console.log(err);
//       alert("invalid account")
//     })
//   }

// }
