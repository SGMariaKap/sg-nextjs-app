(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{945:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Login",function(){return n(3918)}])},3918:function(t,e,n){"use strict";n.r(e);var i=n(5893),s=n(5989);let r=()=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Authentification"}),(0,i.jsx)(s.default,{}),(0,i.jsx)("a",{href:"",children:"Forget your password?"})]});e.default=r},5989:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return s}});var i=n(5893);function s(){let t=async t=>{t.preventDefault();let e={username:t.target.first.value,password:t.target.last.value,rememberMe:!0},n=JSON.stringify(e),i=await fetch("https://dev-sg.azurewebsites.net/api/AccountLoginApi/Login",{method:"POST",headers:{"Content-Type":"application/json"},body:n}),s=await i.json();alert("Is this your full name: ".concat(s.data))};return(0,i.jsxs)("form",{style:{display:"table-caption"},onSubmit:t,children:[(0,i.jsx)("label",{htmlFor:"first",children:"First Name"}),(0,i.jsx)("input",{type:"text",id:"first",name:"first",required:!0}),(0,i.jsx)("label",{htmlFor:"last",children:"Last Name"}),(0,i.jsx)("input",{type:"text",id:"last",name:"last",required:!0}),(0,i.jsx)("button",{type:"submit",children:"Submit"})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=945)}),_N_E=t.O()}]);