(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{257:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(6),r=n(114),s=n(27),i=n(21);class o{constructor(e){this.http=e,this.separator="."}checkHealth(){return this.http.get(s.b+"management/health")}transformHealthData(e){const t=[];return this.flattenHealthData(t,null,e.details),t}getBaseName(e){if(e){return e.split(".")[0]}}getSubSystemName(e){if(e){const t=e.split(".");t.splice(0,1);const n=t.join(".");return n?" - "+n:""}}addHealthObject(e,t,n,a){const l={name:a},r={};let s=!1;for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e)){const t=n[e];"status"===e||"error"===e?l[e]=t:this.isHealthObject(t)||(r[e]=t,s=!0)}return s&&(l.details=r),(t||s||l.error)&&e.push(l),l}flattenHealthData(e,t,n){for(const a in n)if(Object.prototype.hasOwnProperty.call(n,a)){const l=n[a];this.isHealthObject(l)&&(this.hasSubSystem(l)?(this.addHealthObject(e,!1,l,this.getModuleName(t,a)),this.flattenHealthData(e,this.getModuleName(t,a),l)):this.addHealthObject(e,!0,l,this.getModuleName(t,a)))}return e}getModuleName(e,t){let n;return n=e&&t?e+this.separator+t:e||(t||""),n}hasSubSystem(e){let t=!1;for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){const a=e[n];a&&a.status&&(t=!0)}return t}isHealthObject(e){let t=!1;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&"status"===n&&(t=!0);return t}}o.ɵfac=function(e){return new(e||o)(a["ɵɵinject"](i.b))},o.ɵprov=a["ɵɵdefineInjectable"]({token:o,factory:o.ɵfac,providedIn:"root"}),("undefined"==typeof ngDevMode||ngDevMode)&&a["ɵsetClassMetadata"](o,[{type:a.Injectable,args:[{providedIn:"root"}]}],(function(){return[{type:i.b}]}),null);var d=n(12),c=n(1),h=n(14),m=n(22);function p(e,t){if(1&e&&(a["ɵɵelementStart"](0,"tr"),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"td",14),a["ɵɵtext"](3),a["ɵɵelementEnd"](),a["ɵɵtext"](4," "),a["ɵɵelementStart"](5,"td",14),a["ɵɵtext"](6),a["ɵɵelementEnd"](),a["ɵɵtext"](7," "),a["ɵɵelementEnd"]()),2&e){const e=t.$implicit,n=a["ɵɵnextContext"](2);a["ɵɵadvance"](3),a["ɵɵtextInterpolate"](e.key),a["ɵɵadvance"](3),a["ɵɵtextInterpolate"](n.readableValue(e.value))}}function u(e,t){if(1&e&&(a["ɵɵelementStart"](0,"div"),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"h5",8),a["ɵɵtext"](3,"Properties"),a["ɵɵelementEnd"](),a["ɵɵtext"](4," "),a["ɵɵelementStart"](5,"div",9),a["ɵɵtext"](6," "),a["ɵɵelementStart"](7,"table",10),a["ɵɵtext"](8," "),a["ɵɵelementStart"](9,"thead"),a["ɵɵtext"](10," "),a["ɵɵelementStart"](11,"tr"),a["ɵɵtext"](12," "),a["ɵɵelementStart"](13,"th",11),a["ɵɵtext"](14,"Name"),a["ɵɵelementEnd"](),a["ɵɵtext"](15," "),a["ɵɵelementStart"](16,"th",12),a["ɵɵtext"](17,"Value"),a["ɵɵelementEnd"](),a["ɵɵtext"](18," "),a["ɵɵelementEnd"](),a["ɵɵtext"](19," "),a["ɵɵelementEnd"](),a["ɵɵtext"](20," "),a["ɵɵelementStart"](21,"tbody"),a["ɵɵtext"](22," "),a["ɵɵtemplate"](23,p,8,2,"tr",13),a["ɵɵpipe"](24,"keys"),a["ɵɵtext"](25," "),a["ɵɵelementEnd"](),a["ɵɵtext"](26," "),a["ɵɵelementEnd"](),a["ɵɵtext"](27," "),a["ɵɵelementEnd"](),a["ɵɵtext"](28," "),a["ɵɵelementEnd"]()),2&e){const e=a["ɵɵnextContext"]();a["ɵɵadvance"](23),a["ɵɵproperty"]("ngForOf",a["ɵɵpipeBind1"](24,1,e.currentHealth.details.details))}}function x(e,t){if(1&e&&(a["ɵɵelementStart"](0,"div"),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"h4",15),a["ɵɵtext"](3,"Error"),a["ɵɵelementEnd"](),a["ɵɵtext"](4," "),a["ɵɵelementStart"](5,"pre"),a["ɵɵtext"](6),a["ɵɵelementEnd"](),a["ɵɵtext"](7," "),a["ɵɵelementEnd"]()),2&e){const e=a["ɵɵnextContext"]();a["ɵɵadvance"](6),a["ɵɵtextInterpolate"](e.currentHealth.error)}}class f{constructor(e,t){this.healthService=e,this.activeModal=t}baseName(e){return this.healthService.getBaseName(e)}subSystemName(e){return this.healthService.getSubSystemName(e)}readableValue(e){if("diskSpace"===this.currentHealth.name){const t=e/1073741824;return t>1?t.toFixed(2)+" GB":(e/1048576).toFixed(2)+" MB"}return"object"==typeof e?JSON.stringify(e):e.toString()}}f.ɵfac=function(e){return new(e||f)(a["ɵɵdirectiveInject"](o),a["ɵɵdirectiveInject"](d.a))},f.ɵcmp=a["ɵɵdefineComponent"]({type:f,selectors:[["dhpp-health-modal"]],decls:25,vars:6,consts:[[1,"modal-header"],["id","showHealthLabel",1,"modal-title"],["aria-label","Close","data-dismiss","modal","type","button",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","pad"],[4,"ngIf"],[1,"modal-footer"],["data-dismiss","modal","type","button",1,"btn","btn-secondary","float-left",3,"click"],["jhiTranslate","health.details.properties"],[1,"table-responsive"],["aria-describedby","showHealthLabel",1,"table","table-striped"],["scope","col","jhiTranslate","health.details.name",1,"text-left"],["scope","col","jhiTranslate","health.details.value",1,"text-left"],[4,"ngFor","ngForOf"],[1,"text-left"],["jhiTranslate","health.details.error"]],template:function(e,t){1&e&&(a["ɵɵelementStart"](0,"div",0),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"h4",1),a["ɵɵtext"](3),a["ɵɵpipe"](4,"translate"),a["ɵɵelementEnd"](),a["ɵɵtext"](5," "),a["ɵɵelementStart"](6,"button",2),a["ɵɵlistener"]("click",(function(){return t.activeModal.dismiss("closed")})),a["ɵɵelementStart"](7,"span",3),a["ɵɵtext"](8,"×"),a["ɵɵelementEnd"](),a["ɵɵtext"](9," "),a["ɵɵelementEnd"](),a["ɵɵtext"](10," "),a["ɵɵelementEnd"](),a["ɵɵtext"](11," "),a["ɵɵelementStart"](12,"div",4),a["ɵɵtext"](13," "),a["ɵɵtemplate"](14,u,29,3,"div",5),a["ɵɵtext"](15," "),a["ɵɵtemplate"](16,x,8,1,"div",5),a["ɵɵtext"](17," "),a["ɵɵelementEnd"](),a["ɵɵtext"](18," "),a["ɵɵelementStart"](19,"div",6),a["ɵɵtext"](20," "),a["ɵɵelementStart"](21,"button",7),a["ɵɵlistener"]("click",(function(){return t.activeModal.dismiss("closed")})),a["ɵɵtext"](22,"Done"),a["ɵɵelementEnd"](),a["ɵɵtext"](23," "),a["ɵɵelementEnd"](),a["ɵɵtext"](24," ")),2&e&&(a["ɵɵadvance"](3),a["ɵɵtextInterpolate2"](" ",a["ɵɵpipeBind1"](4,4,"health.indicator."+t.baseName(t.currentHealth.name))," ",t.subSystemName(t.currentHealth.name)," "),a["ɵɵadvance"](11),a["ɵɵproperty"]("ngIf",t.currentHealth.details),a["ɵɵadvance"](2),a["ɵɵproperty"]("ngIf",t.currentHealth.error))},directives:[c.NgIf,h.n,c.NgForOf],pipes:[m.d,h.f],encapsulation:2}),("undefined"==typeof ngDevMode||ngDevMode)&&a["ɵsetClassMetadata"](f,[{type:a.Component,args:[{selector:"dhpp-health-modal",templateUrl:"./health-modal.component.html"}]}],(function(){return[{type:o},{type:d.a}]}),null);var S=n(29);function b(e,t){if(1&e){const e=a["ɵɵgetCurrentView"]();a["ɵɵelementStart"](0,"a",13),a["ɵɵlistener"]("click",(function(){a["ɵɵrestoreView"](e);const t=a["ɵɵnextContext"]().$implicit;return a["ɵɵnextContext"]().showHealth(t)})),a["ɵɵtext"](1," "),a["ɵɵelement"](2,"fa-icon",2),a["ɵɵtext"](3," "),a["ɵɵelementEnd"]()}2&e&&(a["ɵɵadvance"](2),a["ɵɵproperty"]("icon","eye"))}function g(e,t){if(1&e&&(a["ɵɵelementStart"](0,"tr"),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"td"),a["ɵɵtext"](3),a["ɵɵpipe"](4,"translate"),a["ɵɵelementEnd"](),a["ɵɵtext"](5," "),a["ɵɵelementStart"](6,"td",10),a["ɵɵtext"](7," "),a["ɵɵelementStart"](8,"span",11),a["ɵɵtext"](9),a["ɵɵelementEnd"](),a["ɵɵtext"](10," "),a["ɵɵelementEnd"](),a["ɵɵtext"](11," "),a["ɵɵelementStart"](12,"td",10),a["ɵɵtext"](13," "),a["ɵɵtemplate"](14,b,4,1,"a",12),a["ɵɵtext"](15," "),a["ɵɵelementEnd"](),a["ɵɵtext"](16," "),a["ɵɵelementEnd"]()),2&e){const e=t.$implicit,n=a["ɵɵnextContext"]();a["ɵɵadvance"](3),a["ɵɵtextInterpolate2"]("",a["ɵɵpipeBind1"](4,6,"health.indicator."+n.baseName(e.name))," ",n.subSystemName(e.name),""),a["ɵɵadvance"](5),a["ɵɵpropertyInterpolate"]("jhiTranslate","health.status."+e.status),a["ɵɵproperty"]("ngClass",n.getBadgeClass(e.status)),a["ɵɵadvance"](1),a["ɵɵtextInterpolate1"](" ",e.status," "),a["ɵɵadvance"](5),a["ɵɵproperty"]("ngIf",e.details||e.error)}}class v{constructor(e,t){this.modalService=e,this.healthService=t}ngOnInit(){this.refresh()}baseName(e){return this.healthService.getBaseName(e)}getBadgeClass(e){return"UP"===e?"badge-success":"badge-danger"}refresh(){this.updatingHealth=!0,this.healthService.checkHealth().subscribe(e=>{this.healthData=this.healthService.transformHealthData(e),this.updatingHealth=!1},e=>{503===e.status&&(this.healthData=this.healthService.transformHealthData(e.error),this.updatingHealth=!1)})}showHealth(e){this.modalService.open(f).componentInstance.currentHealth=e}subSystemName(e){return this.healthService.getSubSystemName(e)}}v.ɵfac=function(e){return new(e||v)(a["ɵɵdirectiveInject"](d.j),a["ɵɵdirectiveInject"](o))},v.ɵcmp=a["ɵɵdefineComponent"]({type:v,selectors:[["dhpp-health"]],decls:43,vars:2,consts:[["id","health-page-heading","jhiTranslate","health.title"],[1,"btn","btn-primary","float-right",3,"click"],[3,"icon"],["jhiTranslate","health.refresh.button"],[1,"table-responsive"],["id","healthCheck","aria-describedby","health-page-heading",1,"table","table-striped"],["scope","col","jhiTranslate","health.table.service"],["scope","col","jhiTranslate","health.table.status",1,"text-center"],["scope","col","jhiTranslate","health.details.details",1,"text-center"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"badge",3,"ngClass","jhiTranslate"],["class","hand",3,"click",4,"ngIf"],[1,"hand",3,"click"]],template:function(e,t){1&e&&(a["ɵɵelementStart"](0,"div"),a["ɵɵtext"](1," "),a["ɵɵelementStart"](2,"h2"),a["ɵɵtext"](3," "),a["ɵɵelementStart"](4,"span",0),a["ɵɵtext"](5,"Health Checks"),a["ɵɵelementEnd"](),a["ɵɵtext"](6," "),a["ɵɵelementStart"](7,"button",1),a["ɵɵlistener"]("click",(function(){return t.refresh()})),a["ɵɵtext"](8," "),a["ɵɵelement"](9,"fa-icon",2),a["ɵɵtext"](10," "),a["ɵɵelementStart"](11,"span",3),a["ɵɵtext"](12,"Refresh"),a["ɵɵelementEnd"](),a["ɵɵtext"](13," "),a["ɵɵelementEnd"](),a["ɵɵtext"](14," "),a["ɵɵelementEnd"](),a["ɵɵtext"](15," "),a["ɵɵelementStart"](16,"div",4),a["ɵɵtext"](17," "),a["ɵɵelementStart"](18,"table",5),a["ɵɵtext"](19," "),a["ɵɵelementStart"](20,"thead"),a["ɵɵtext"](21," "),a["ɵɵelementStart"](22,"tr"),a["ɵɵtext"](23," "),a["ɵɵelementStart"](24,"th",6),a["ɵɵtext"](25,"Service Name"),a["ɵɵelementEnd"](),a["ɵɵtext"](26," "),a["ɵɵelementStart"](27,"th",7),a["ɵɵtext"](28,"Status"),a["ɵɵelementEnd"](),a["ɵɵtext"](29," "),a["ɵɵelementStart"](30,"th",8),a["ɵɵtext"](31,"Details"),a["ɵɵelementEnd"](),a["ɵɵtext"](32," "),a["ɵɵelementEnd"](),a["ɵɵtext"](33," "),a["ɵɵelementEnd"](),a["ɵɵtext"](34," "),a["ɵɵelementStart"](35,"tbody"),a["ɵɵtext"](36," "),a["ɵɵtemplate"](37,g,17,8,"tr",9),a["ɵɵtext"](38," "),a["ɵɵelementEnd"](),a["ɵɵtext"](39," "),a["ɵɵelementEnd"](),a["ɵɵtext"](40," "),a["ɵɵelementEnd"](),a["ɵɵtext"](41," "),a["ɵɵelementEnd"](),a["ɵɵtext"](42," ")),2&e&&(a["ɵɵadvance"](9),a["ɵɵproperty"]("icon","sync"),a["ɵɵadvance"](28),a["ɵɵproperty"]("ngForOf",t.healthData))},directives:[h.n,S.a,c.NgForOf,c.NgClass,c.NgIf],pipes:[m.d],encapsulation:2}),("undefined"==typeof ngDevMode||ngDevMode)&&a["ɵsetClassMetadata"](v,[{type:a.Component,args:[{selector:"dhpp-health",templateUrl:"./health.component.html"}]}],(function(){return[{type:d.j},{type:o}]}),null);const y={path:"",component:v,data:{pageTitle:"health.title"}};n.d(t,"HealthModule",(function(){return E}));class E{}E.ɵmod=a["ɵɵdefineNgModule"]({type:E}),E.ɵinj=a["ɵɵdefineInjector"]({factory:function(e){return new(e||E)},imports:[[r.a,l.h.forChild([y])]]}),("undefined"==typeof ngJitMode||ngJitMode)&&a["ɵɵsetNgModuleScope"](E,{declarations:[v,f],imports:[r.a,l.h]}),("undefined"==typeof ngDevMode||ngDevMode)&&a["ɵsetClassMetadata"](E,[{type:a.NgModule,args:[{imports:[r.a,l.h.forChild([y])],declarations:[v,f],entryComponents:[f]}]}],null,null)}}]);