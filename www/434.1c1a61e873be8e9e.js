"use strict";(self.webpackChunkagaclocking=self.webpackChunkagaclocking||[]).push([[434],{1434:(F,u,f)=>{f.r(u),f.d(u,{HomeModule:()=>O});var c=f(9808),s=f(2382),l=f(5439),_=f(5861),t=f(1223),p=f(4073),g=f(4832);function S(i,o){if(1&i&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function v(i,o){if(1&i&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function M(i,o){if(1&i&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}function T(i,o){if(1&i&&(t.TgZ(0,"option",17),t._uU(1),t.qZA()),2&i){const e=o.$implicit;t.Q6J("value",e),t.xp6(1),t.Oqu(e)}}const m=function(){return{standalone:!0}};let Z=(()=>{class i{constructor(e,n){this.activeModal=e,this.shiftsService=n,this.startShiftHour=0,this.startShiftMinute=0,this.endShiftHour=0,this.endShiftMinute=0,this.today=new Date,this.shiftForm=new s.cw({startShift:new s.NI(""),activity:new s.NI(""),endShift:new s.NI(""),shiftId:new s.NI("")})}get shiftDate(){return this.shiftsService.date}get hours(){let e=new Array(24);for(let n=0;n<e.length;n++)e[n]=n;return e}get minutes(){let e=new Array(60);for(let n=0;n<e.length;n++)e[n]=n;return e}ngOnInit(){}cancel(){this.activeModal.close()}updateShift(){var e=this;return(0,_.Z)(function*(){e.shiftForm.valid&&(yield e.shiftsService.updateShift(e.shiftForm.value),e.activeModal.close())})()}changeHour(e){let n=0;n="endShift"===e?this.endShiftHour:this.startShiftHour,this.shiftForm.get(e).setValue(l().set("hours",Number(n)).format("YYYY-MM-DDTHH:mm:ss"))}changeMinute(e){let n=0;n="endShift"===e?this.endShiftMinute:this.startShiftMinute,this.shiftForm.get(e).setValue(l().set("minutes",Number(n)).format("YYYY-MM-DDTHH:mm:ss"))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.Kz),t.Y36(g.U))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-update-shift"]],decls:39,vars:21,consts:[[1,"modal-header","d-flex","justify-content-between"],[1,"d-block"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"d-flex","align-items-center","mt-3"],[1,"text-nowrap","me-2"],[1,"w-100","me-2"],[1,"form-group"],[1,"form-select",3,"ngModelOptions","ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[1,"w-100"],[1,"form-group","mt-3"],["for","activity"],["formControlName","activity","rows","3",1,"form-control"],[1,"d-flex","flex-column","mt-5"],["type","button",1,"secondary-btn","w-100",3,"click"],[1,"primary-btn","w-100","mt-3"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._uU(1," Finalizar turno "),t.TgZ(2,"span",1),t._uU(3),t.ALo(4,"date"),t.qZA()(),t.TgZ(5,"div",2)(6,"form",3),t.NdJ("ngSubmit",function(){return n.updateShift()}),t.TgZ(7,"div",4)(8,"label",5),t._uU(9,"In\xedcio do turno"),t.qZA(),t.TgZ(10,"div",6)(11,"div",7)(12,"select",8),t.NdJ("ngModelChange",function(r){return n.startShiftHour=r})("change",function(){return n.changeHour("startShift")}),t.YNc(13,S,2,2,"option",9),t.qZA()()(),t.TgZ(14,"div",10)(15,"div",7)(16,"select",8),t.NdJ("ngModelChange",function(r){return n.startShiftMinute=r})("change",function(){return n.changeMinute("startShift")}),t.YNc(17,v,2,2,"option",9),t.qZA()()()(),t.TgZ(18,"div",4)(19,"label",5),t._uU(20,"Fim do turno"),t.qZA(),t.TgZ(21,"div",6)(22,"div",7)(23,"select",8),t.NdJ("ngModelChange",function(r){return n.endShiftHour=r})("change",function(){return n.changeHour("endShift")}),t.YNc(24,M,2,2,"option",9),t.qZA()()(),t.TgZ(25,"div",10)(26,"div",7)(27,"select",8),t.NdJ("ngModelChange",function(r){return n.endShiftMinute=r})("change",function(){return n.changeMinute("endShift")}),t.YNc(28,T,2,2,"option",9),t.qZA()()()(),t.TgZ(29,"div",10)(30,"div",11)(31,"label",12),t._uU(32,"Atividades"),t.qZA(),t._UZ(33,"textarea",13),t.qZA()(),t.TgZ(34,"div",14)(35,"button",15),t.NdJ("click",function(){return n.cancel()}),t._uU(36,"Cancelar"),t.qZA(),t.TgZ(37,"button",16),t._uU(38,"Finalizar"),t.qZA()()()()),2&e&&(t.xp6(3),t.Oqu(t.xi3(4,14,n.shiftDate,"dd/MM/yyyy")),t.xp6(3),t.Q6J("formGroup",n.shiftForm),t.xp6(6),t.Q6J("ngModelOptions",t.DdM(17,m))("ngModel",n.startShiftHour),t.xp6(1),t.Q6J("ngForOf",n.hours),t.xp6(3),t.Q6J("ngModelOptions",t.DdM(18,m))("ngModel",n.startShiftMinute),t.xp6(1),t.Q6J("ngForOf",n.minutes),t.xp6(6),t.Q6J("ngModelOptions",t.DdM(19,m))("ngModel",n.endShiftHour),t.xp6(1),t.Q6J("ngForOf",n.hours),t.xp6(3),t.Q6J("ngModelOptions",t.DdM(20,m))("ngModel",n.endShiftMinute),t.xp6(1),t.Q6J("ngForOf",n.minutes))},directives:[s._Y,s.JL,s.sg,s.EJ,s.JJ,s.On,c.sg,s.YN,s.Kr,s.Fj,s.u],pipes:[c.uU],styles:[""]}),i})();var C=f(1346);function y(i,o){1&i&&t._UZ(0,"img",6)}function H(i,o){1&i&&t._UZ(0,"img",7)}function U(i,o){1&i&&(t.TgZ(0,"span"),t._uU(1,"\xe0s"),t.qZA())}const x=function(i){return{"border-top":i}};let I=(()=>{class i{constructor(){this.shift=new C.e1}ngOnInit(){}calculateDifference(e){let n=new Date(e.startShift),a=new Date(e.endShift);if(e.finished){var r=a.getTime()-n.getTime();return`${Math.floor(r%864e5/36e5)}:${Math.round(r%864e5%36e5/6e4)}hr`}return"Aberto"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-shift-item"]],inputs:{shift:"shift",index:"index"},decls:14,vars:16,consts:[[1,"shift",3,"ngStyle"],[1,"d-flex","align-items-center"],["src","../../../assets/icons/shift-finished-icon.svg","alt","",4,"ngIf"],["src","../../../assets/icons/shift-initiated-icon.svg","alt","",4,"ngIf"],[1,"d-block","ms-2"],[4,"ngIf"],["src","../../../assets/icons/shift-finished-icon.svg","alt",""],["src","../../../assets/icons/shift-initiated-icon.svg","alt",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,y,1,0,"img",2),t.YNc(3,H,1,0,"img",3),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.TgZ(6,"span"),t._uU(7),t.ALo(8,"date"),t.YNc(9,U,2,0,"span",5),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"span"),t._uU(13),t.qZA()()),2&e&&(t.Q6J("ngStyle",t.VKq(14,x,0===n.index?"1px solid var(--borders)":"")),t.xp6(2),t.Q6J("ngIf",n.shift.finished),t.xp6(1),t.Q6J("ngIf",!n.shift.finished),t.xp6(2),t.Oqu(n.shift.project),t.xp6(2),t.hij("",t.xi3(8,8,n.shift.startShift,"HH:mm")," "),t.xp6(2),t.Q6J("ngIf",n.shift.finished),t.xp6(1),t.hij(" ",t.xi3(11,11,n.shift.endShift,"HH:mm"),""),t.xp6(3),t.Oqu(n.calculateDifference(n.shift)))},directives:[c.PC,c.O5],pipes:[c.uU],styles:[".shift[_ngcontent-%COMP%]{height:74px;padding:20px 28px;border-bottom:1px solid var(--borders);width:100%;display:flex;justify-content:space-between;align-items:center}"]}),i})();function D(i,o){1&i&&(t.TgZ(0,"div"),t._uU(1,"Hoje"),t.qZA())}function A(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw(2).updateShift(r)}),t._UZ(1,"app-shift-item",11),t.qZA()}if(2&i){const e=o.$implicit,n=o.index;t.xp6(1),t.Q6J("index",n)("shift",e)}}function N(i,o){if(1&i&&(t.TgZ(0,"div",8),t.YNc(1,A,2,2,"div",9),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.shifts)}}function w(i,o){1&i&&(t.TgZ(0,"div",12),t._UZ(1,"img",13),t.TgZ(2,"div",14),t._uU(3,"Nenhum ponto registrado"),t.qZA()())}let J=(()=>{class i{constructor(e,n){this.shiftsService=e,this.ngbModal=n,this.today=new Date,this.shiftsService.listShifts()}get shifts(){return this.shiftsService.shifts}get shiftDate(){return this.shiftsService.date}ngOnInit(){}calculateDifference(e){let n=new Date(e.startShift),a=new Date(e.endShift);if(e.finished){var r=a.getTime()-n.getTime();return`${Math.floor(r%864e5/36e5)}:${Math.round(r%864e5%36e5/6e4)}hr`}return"Aberto"}isToday(){let e=new Date(this.today).setHours(0),n=new Date(this.shiftDate).setHours(0);return new Date(e).getDate()===new Date(n).getDate()}previousShiftDate(){this.shiftsService.previousShiftDate()}nextShiftDate(){this.shiftsService.nextShiftDate()}updateShift(e){const n=this.ngbModal.open(Z,{size:"md",centered:!0});n.componentInstance.shiftForm=new s.cw({endShift:new s.NI(l(this.shiftDate).format("YYYY-MM-DDTHH:mm:ss")),startShift:new s.NI(l(e.startShift).format("YYYY-MM-DDTHH:mm:ss")),activity:new s.NI(e.activity),shiftId:new s.NI(e._id.$oid)}),n.componentInstance.activity=e.activity,!0===e.finished?(n.componentInstance.startShiftHour=Number(l(e.startShift).format("HH")),n.componentInstance.startShiftMinute=Number(l(e.startShift).format("mm")),n.componentInstance.endShiftHour=Number(l(e.endShift).format("HH")),n.componentInstance.endShiftMinute=Number(l(e.endShift).format("mm"))):(n.componentInstance.startShiftHour=Number(l(e.startShift).format("HH")),n.componentInstance.startShiftMinute=Number(l(e.startShift).format("mm")))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(g.U),t.Y36(p.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],decls:13,vars:7,consts:[[2,"height","102px"],[1,"date-time","d-flex","align-items-center","justify-content-between"],["src","../../../assets/icons/left-arrow-icon.svg","alt","",3,"click"],[1,"d-flex","flex-column","align-items-center"],[4,"ngIf"],["src","../../../assets/icons/right-arrow-icon.svg","alt","",3,"click"],["class","body",4,"ngIf","ngIfElse"],["noShifts",""],[1,"body"],["class","shifts",3,"click",4,"ngFor","ngForOf"],[1,"shifts",3,"click"],[3,"index","shift"],[1,"no-shifts","d-flex","flex-column","justify-content-center","align-items-center"],["src","../../../assets/icons/alert-icon.svg","alt",""],[1,"text-center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"main"),t._UZ(1,"div",0),t.TgZ(2,"div",1)(3,"img",2),t.NdJ("click",function(){return n.previousShiftDate()}),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,D,2,0,"div",4),t.TgZ(6,"div"),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"img",5),t.NdJ("click",function(){return n.nextShiftDate()}),t.qZA()(),t.YNc(10,N,2,1,"div",6),t.YNc(11,w,4,0,"ng-template",null,7,t.W1O),t.qZA()),2&e){const a=t.MAs(12);t.xp6(5),t.Q6J("ngIf",n.isToday()),t.xp6(2),t.Oqu(t.xi3(8,4,n.shiftDate,"dd/MM/yyyy")),t.xp6(3),t.Q6J("ngIf",n.shifts.length>0)("ngIfElse",a)}},directives:[c.O5,c.sg,I],pipes:[c.uU],styles:["main[_ngcontent-%COMP%]{padding:28px 0;position:relative;height:100vh}.date-time[_ngcontent-%COMP%]{padding:0 38px}.no-shifts[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.body[_ngcontent-%COMP%]{margin-top:40px}"]}),i})();var Y=f(9560);let b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez]]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,b,Y.Bz.forChild([{path:"",component:J}])]]}),i})()}}]);