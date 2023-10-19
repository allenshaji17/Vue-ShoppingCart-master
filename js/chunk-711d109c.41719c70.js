(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-711d109c"],{1305:function(e,s,t){e.exports=t.p+"img/login-img.b79e577f.png"},"405e":function(e,s,t){"use strict";t("b0e6")},"73fe":function(e,s,t){e.exports=t.p+"img/create-account.0de83603.svg"},"97fc":function(e,s,t){"use strict";t("e684")},b0e6:function(e,s,t){},dd7b:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e._self._c;return s("div",{staticClass:"login"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[e.isSignUp?s("createAccount"):e._e(),e.isSignUp?e._e():s("form",{staticClass:"form-signin",on:{submit:function(s){return s.preventDefault(),e.login.apply(null,arguments)}}},[s("img",{staticClass:"mb-4",attrs:{src:t("1305"),alt:"",width:"72",height:"72"}}),s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Please sign in")]),s("label",{staticClass:"sr-only",attrs:{for:"email"}},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email address",required:"",autocomplete:"email"},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}}),s("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password",required:"",autocomplete:"current-password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._m(0),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e.showLoader?s("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):e._e(),e._v(" Log In ")])]),s("p",{staticClass:"mt-3 text-muted"},[e.isSignUp?s("span",[e._v(" Already a member? "),s("a",{attrs:{href:"javascript:;;"},on:{click:e.toggleForm}},[e._v("Sign in")])]):e._e(),e.isSignUp?e._e():s("span",[e._v(" New to lumineye? "),s("a",{attrs:{href:"javascript:;;"},on:{click:e.toggleForm}},[e._v("Create an Account")])])])],1)])])},r=[function(){var e=this,s=e._self._c;return s("p",{staticClass:"text-muted"},[s("a",{attrs:{href:"javascript:;;"}},[e._v("Forget password ?")])])}],i=(t("14d9"),function(){var e=this,s=e._self._c;return s("div",{staticClass:"create-account"},[s("form",{staticClass:"form-signup",on:{submit:function(s){return s.preventDefault(),e.createAccount.apply(null,arguments)}}},[s("img",{staticClass:"mb-4",attrs:{src:t("73fe"),alt:"",width:"72",height:"72"}}),s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Create an account")]),e._l(e.errorMessage,(function(t,a){return s("div",{key:a,staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(t)+" ")])})),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6 mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",placeholder:"First Name",required:""},domProps:{value:e.user.firstName},on:{input:function(s){s.target.composing||e.$set(e.user,"firstName",s.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])]),s("div",{staticClass:"col-md-6 mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"lastName",placeholder:"Last Name",value:"",required:""},domProps:{value:e.user.lastName},on:{input:function(s){s.target.composing||e.$set(e.user,"lastName",s.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v("Valid last name is required.")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"emailId",placeholder:"Email address",value:"",required:""},domProps:{value:e.user.email},on:{input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"text",id:"act-password",placeholder:"New password",value:"",required:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[e._v("Valid first name is required.")])])]),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e.showLoader?s("i",{staticClass:"fa fa-spinner fa-spin mr-1"}):e._e(),e._v("Sign Up ")])],2)])}),o=[],l=t("bc3a"),n=t.n(l),c=t("6b22"),d={name:"CreateAccount",data(){return{showLoader:!1,user:{firstName:"",lastName:"",email:"",password:""},errorMessage:[]}},methods:{createAccount(){this.showLoader=!0,this.errorMessage=[],this.user.firstName.length<5&&this.errorMessage.push("FirstName should contains more than 5 character"),!1===this.ValidateEmail(this.user.email)&&this.errorMessage.push("Please provide a valid Email address"),0===this.errorMessage.length&&n.a.post(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL+"/users",this.user).then(()=>{this.showLoader=!1,Object(c["c"])("Registered Successfully","User Registered Successfully")}).catch(e=>{console.log(e),Object(c["a"])("Registeration Failed","Please try again after sometime")})},ValidateEmail(e){return!!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)}}},u=d,m=(t("405e"),t("2877")),p=Object(m["a"])(u,i,o,!1,null,null,null),v=p.exports,g=t("2f62"),f={name:"login",components:{CreateAccount:v},data(){return{email:"",password:"",showLoader:!1,isSignUp:!1}},methods:{toggleForm(){this.isSignUp=!this.isSignUp},...Object(g["b"])(["ADD_LOGGED_USER"]),login(e){this.showLoader=!0;const s={email:this.email,password:this.password};n.a.post(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL+"/login",s).then(s=>{this.showLoader=!1,this.ADD_LOGGED_USER(s.data[0]),e.target.reset(),this.$router.push(this.$route.query.from||"/")}).catch(e=>{this.showLoader=!1,Object(c["a"])("Invalid Credentials",""),console.log(e)})}}},h=f,w=(t("97fc"),Object(m["a"])(h,a,r,!1,null,null,null));s["default"]=w.exports},e684:function(e,s,t){}}]);
//# sourceMappingURL=chunk-711d109c.41719c70.js.map