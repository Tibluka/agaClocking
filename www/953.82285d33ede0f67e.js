"use strict";(self.webpackChunkagaclocking=self.webpackChunkagaclocking||[]).push([[953],{9953:(v,s,r)=>{r.r(s),r.d(s,{LoginModule:()=>f});var c=r(9808),e=r(2382),o=r(1223),g=r(981),p=r(4120),u=r(4471);let m=(()=>{class t{constructor(n,i,a){this.router=n,this.loginService=i,this.loadingService=a,this.userForm=new e.cw({email:new e.NI(""),password:new e.NI("")})}ngOnInit(){}login(){this.loadingService.setStatus(!0),this.loginService.login(this.userForm.value).subscribe(n=>{this.loadingService.setStatus(!1),localStorage.setItem("user_agaclocking",JSON.stringify(n.user)),localStorage.setItem("tkn_ack",n.token),this.router.navigate(["/"])},n=>{this.loadingService.setStatus(!1),alert(n.status)})}}return t.\u0275fac=function(n){return new(n||t)(o.Y36(g.F0),o.Y36(p.r),o.Y36(u.b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-login"]],decls:16,vars:1,consts:[[1,"text-center","w-100"],["src","../../../assets/logo/logo.svg","alt","",1,"text-center"],[3,"formGroup"],[1,"form-group","mb-4","position-relative"],["for","email"],["type","text","placeholder","user@agacode.com","formControlName","email",1,"form-control",3,"keyup.enter"],[1,"bi","bi-envelope"],["for","password"],["type","password","inputmode","numeric","placeholder","******","formControlName","password",1,"form-control",3,"keyup.enter"],[1,"bi","bi-lock"],["type","submit",1,"primary-btn","w-100",3,"click"]],template:function(n,i){1&n&&(o.TgZ(0,"main")(1,"header",0),o._UZ(2,"img",1),o.qZA(),o.TgZ(3,"form",2)(4,"div",3)(5,"label",4),o._uU(6,"E-mail"),o.qZA(),o.TgZ(7,"input",5),o.NdJ("keyup.enter",function(){return i.login()}),o.qZA(),o._UZ(8,"i",6),o.qZA(),o.TgZ(9,"div",3)(10,"label",7),o._uU(11,"Senha"),o.qZA(),o.TgZ(12,"input",8),o.NdJ("keyup.enter",function(){return i.login()}),o.qZA(),o._UZ(13,"i",9),o.qZA()(),o.TgZ(14,"button",10),o.NdJ("click",function(){return i.login()}),o._uU(15,"Entrar"),o.qZA()()),2&n&&(o.xp6(3),o.Q6J("formGroup",i.userForm))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:["main[_ngcontent-%COMP%]{background-color:var(--background-login);position:fixed;display:flex;flex-direction:column;justify-content:space-between;height:100vh;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;padding:80px 40px}main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px}.form-group[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;padding:10px;box-shadow:2px 2px 19px -11px #c0b2b2}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:gray}.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none!important;background-color:#fff!important;padding-left:25px;color:gray}.form-group[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{position:absolute;top:35px;left:15px;filter:invert(.5)}"]}),t})();var d=r(9017);let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.ez,d.I,e.UX,g.Bz.forChild([{path:"",component:m}])]]}),t})()}}]);