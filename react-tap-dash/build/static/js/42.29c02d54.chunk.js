(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[42],{632:function(e,a,t){"use strict";t.d(a,"b",(function(){return s})),t.d(a,"a",(function(){return r}));var n=t(635),l=t.n(n),s=function(e){return l.a.post("users/register",{f_name:e.f_name,l_name:e.l_name,u_email:e.u_email,u_password:e.u_password}).then((function(e){console.log("registerd")}))},r=function(e){return l.a.post("users/login",{u_email:e.u_email,u_password:e.u_password}).then((function(e){return localStorage.setItem("usertoken",e.data),console.log("loged in"),e.data})).catch((function(e){localStorage.setItem("usertoken",""),console.log(e)}))}},711:function(e,a,t){"use strict";t.r(a);var n=t(165),l=t(160),s=t(161),r=t(164),c=t(163),m=t(162),o=t(1),u=t.n(o),i=t(615),p=t(620),h=t(632),E=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={f_name:"",l_nameu_email:"",u_email:"",u_password:""},e.onChange=e.onChange.bind(Object(r.a)(e)),e.onSubmit=e.onSubmit.bind(Object(r.a)(e)),e}return Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var a=this;e.preventDefault();var t={f_name:this.state.f_name,l_name:this.state.l_name,u_email:this.state.u_email,u_password:this.state.u_password};Object(h.b)(t).then((function(e){a.props.history.push("/login")}))}},{key:"render",value:function(){return u.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},u.a.createElement(i.w,null,u.a.createElement(i.wb,{className:"justify-content-center"},u.a.createElement(i.u,{md:"9",lg:"7",xl:"6"},u.a.createElement(i.j,{className:"mx-4"},u.a.createElement(i.k,{className:"p-4"},u.a.createElement(i.J,{noValidate:!0,onSubmit:this.onSubmit},u.a.createElement("h1",null,"Register"),u.a.createElement("p",{className:"text-muted"},"Create your account"),u.a.createElement(i.V,{className:"mb-3"},u.a.createElement(i.X,null,u.a.createElement(i.Y,null,u.a.createElement(p.a,{name:"cil-user"}))),u.a.createElement(i.S,{type:"text",placeholder:"First Name",name:"f_name",autoComplete:"username",value:this.state.f_name,onChange:this.onChange})),u.a.createElement(i.V,{className:"mb-3"},u.a.createElement(i.X,null,u.a.createElement(i.Y,null,u.a.createElement(p.a,{name:"cil-user"}))),u.a.createElement(i.S,{type:"text",placeholder:"Last Name",name:"l_name",autoComplete:"username",value:this.state.l_name,onChange:this.onChange})),u.a.createElement(i.V,{className:"mb-3"},u.a.createElement(i.X,null,u.a.createElement(i.Y,null,"@")),u.a.createElement(i.S,{type:"email",placeholder:"Email",name:"u_email",autoComplete:"Email",value:this.state.u_email,onChange:this.onChange})),u.a.createElement(i.V,{className:"mb-3"},u.a.createElement(i.X,null,u.a.createElement(i.Y,null,u.a.createElement(p.a,{name:"cil-lock-locked"}))),u.a.createElement(i.S,{type:"password",name:"u_password",placeholder:"Password",autoComplete:"current-password",value:this.state.u_password,onChange:this.onChange})),u.a.createElement(i.f,{type:"submit",color:"success",block:!0},"Create Account"))),u.a.createElement(i.l,{className:"p-4"},u.a.createElement(i.wb,null,u.a.createElement(i.u,{xs:"12",sm:"6"},u.a.createElement(i.f,{className:"btn-facebook mb-1",block:!0},u.a.createElement("span",null,"facebook"))),u.a.createElement(i.u,{xs:"12",sm:"6"},u.a.createElement(i.f,{className:"btn-twitter mb-1",block:!0},u.a.createElement("span",null,"twitter"))))))))))}}]),t}(o.Component);a.default=E}}]);
//# sourceMappingURL=42.29c02d54.chunk.js.map