"use strict";(self.webpackChunkagaclocking=self.webpackChunkagaclocking||[]).push([[231],{231:(v,s,c)=>{c.r(s),c.d(s,{ProjectsModule:()=>C});var i=c(9808),t=c(1223),l=c(3225),a=c(3765),d=c(4073);const u=function(e){return{"border-top":e}},m=function(e){return{"enable-delete":e}};let g=(()=>{class e{constructor(n){this.ngbModal=n,this.project=new a.IK,this.deleteOutput=new t.vpe,this.updateOutput=new t.vpe,this.deleteState=!1}ngOnInit(){}swipeRight(){this.deleteState=!0}swipeLeft(){this.deleteState=!1}deleteProject(){this.deleteOutput.emit(this.project)}updateProject(){this.updateOutput.emit(this.project)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.FF))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-project-item"]],inputs:{project:"project",index:"index"},outputs:{deleteOutput:"deleteOutput",updateOutput:"updateOutput"},decls:11,vars:8,consts:[[1,"project-parent",3,"ngStyle"],[1,"project",3,"ngClass","click","swiperight","swipeLeft"],[1,"d-flex","align-items-center","text-start"],["src","../../../assets/icons/project.svg","alt",""],[1,"d-block","ms-2","text-start"],[1,"d-flex","align-items-center"],[1,"under-layer",3,"click"],["src","../../../assets/icons/trash-can-icon.svg","alt",""]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return r.updateProject()})("swiperight",function(){return r.swipeRight()})("swipeLeft",function(){return r.swipeLeft()}),t.TgZ(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t._UZ(6,"div"),t.TgZ(7,"div",5),t._uU(8),t.qZA()(),t.TgZ(9,"div",6),t.NdJ("click",function(){return r.deleteProject()}),t._UZ(10,"img",7),t.qZA()()),2&n&&(t.Q6J("ngStyle",t.VKq(4,u,0===r.index?"1px solid var(--borders)":"")),t.xp6(1),t.Q6J("ngClass",t.VKq(6,m,r.deleteState)),t.xp6(4),t.Oqu(r.project.projectName),t.xp6(3),t.hij(" ",r.project.active?"Ativo":"Inativo"," "))},directives:[i.PC,i.mk],styles:[".project-parent[_ngcontent-%COMP%]{border-bottom:1px solid var(--borders);position:relative;overflow:hidden}.project-parent[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{transition:.3s;height:74px;padding:20px;width:100%;display:grid;grid-template-columns:1fr .5fr .5fr;transform:translate(0);background-color:#fff;position:relative;z-index:1}.project-parent[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px}.project-parent[_ngcontent-%COMP%]   .under-layer[_ngcontent-%COMP%]{position:absolute;background-color:var(--delete-background);width:100%;height:100%;top:0;z-index:0;display:flex;align-items:center;width:65px;justify-content:center}.enable-delete[_ngcontent-%COMP%]{transform:translate(65px)!important}"]}),e})();function j(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"app-project-item",3),t.NdJ("deleteOutput",function(p){return t.CHM(n),t.oxw().deleteUser(p)}),t.qZA()}2&e&&t.Q6J("project",o.$implicit)}let f=(()=>{class e{constructor(n){this.projectService=n,this.projectService.listProjects()}get projectList(){return this.projectService.projects}ngOnInit(){}deleteUser(n){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.m))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-projects"]],decls:4,vars:1,consts:[[2,"height","90px"],[1,"project-list"],[3,"project","deleteOutput",4,"ngFor","ngForOf"],[3,"project","deleteOutput"]],template:function(n,r){1&n&&(t.TgZ(0,"main"),t._UZ(1,"div",0),t.TgZ(2,"div",1),t.YNc(3,j,1,1,"app-project-item",2),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("ngForOf",r.projectList))},directives:[i.sg,g],styles:["main[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]{height:80px;padding:24px;display:flex;align-items:center;justify-content:start;border-bottom:1px solid var(--gray-light)}main[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin:0}main[_ngcontent-%COMP%]   .project-list[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;margin-right:12px}"]}),e})();var P=c(981);let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez]]}),e})(),C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[i.ez,h,P.Bz.forChild([{path:"",component:f}])]]}),e})()}}]);