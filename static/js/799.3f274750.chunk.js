"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[799],{2036:function(n,e,t){t.d(e,{B2:function(){return d},Xe:function(){return u},ZE:function(){return p},tv:function(){return f},yt:function(){return x}});var r,a,o,s,c,i=t(168),l=t(3517),p=l.ZP.form(r||(r=(0,i.Z)(["\n display: flex;\n    flex-direction: column;\n    gap: 30px;\n    /* max-width: 380px; */\n    height: 300px;\n    margin: 0 auto;\n    padding-left: 15px;\n    padding-right:15px;\n\n    @media screen and (min-width: 768px){\n    width: 740px;\n    }\n"]))),u=l.ZP.h2(a||(a=(0,i.Z)(["\n text-align: center;\n    margin-top:50px;\n    margin-bottom: 45px;\n    font-size: 35px;\n    font-weight: 700;\n    color: rgb(40, 39, 39); \n\n"]))),d=l.ZP.label(o||(o=(0,i.Z)(["\nposition: relative;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    font-size: 20px;\n    font-weight: 500;\n\n    .formIcon{\n        position: absolute;\n        left: 15px; \n        top: 59px; \n        transform: translateY(-50%);\n        color: rgb(87, 87, 87);\n    }\n\n    .passwordIcon{\n        position: absolute;\n        right: 15px; \n        top: 60px; \n        transform: translateY(-50%);\n        color: rgb(87, 87, 87);\n        font-size: '30px';\n    }\n\n"]))),x=l.ZP.input(s||(s=(0,i.Z)(["\nfont-size: 18px;\n    padding: 13px 13px 13px 47px;\n    margin-top: 8px;\n    border-radius: 4px;\n    outline: none;\n    cursor: pointer;\n    border-color: transparent;\n    box-shadow: 0px 1px 2px 0px  rgba(107, 169, 174, 0.989);\n    \n    &:focus {\n     border-color: transparent; \n     box-shadow: 0px 1px 4px 1px #5fd38e; }\n\n\n    \n\n"]))),f=l.ZP.button(c||(c=(0,i.Z)(["\n font-size: 17px;\n    font-weight: 600;\n    padding: 10px 15px;\n    margin-top: 15px;\n    border-radius: 4px;\n     color: white; \n   background-color: rgba(99, 212, 240, 0.989);\n  width: 130px;\n  background: #83c080;\n  border-color: transparent;\n  box-shadow: 0px 1px  2px 0px rgba(86, 114, 110, 0.856); \n\n    cursor: pointer;\n    letter-spacing: 0.5px;\n\n\n    &:hover,\n    &:focus{\n        background-color: #72ac6f;\n    box-shadow: 0px 1px  2px 1px rgba(86, 114, 110, 0.856); \n    }\n"])))},3799:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r=t(9439),a=t(9434),o=t(6299),s=t(9529),c=t(9214),i=t(8999),l=t(4215),p=t(8272),u=t(2036),d=t(2791),x=t(3329),f=function(){var n=(0,d.useState)(!1),e=(0,r.Z)(n,2),t=e[0],f=e[1],m=(0,a.I0)(),h=function(){f(!t)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(u.Xe,{children:"Register Your Account"}),(0,x.jsxs)(u.ZE,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var e=n.currentTarget;console.log(e),m((0,o.tu)({name:e.elements.userName.value,email:e.elements.userEmail.value,password:e.elements.userPassword.value})),e.reset()},children:[(0,x.jsxs)(u.B2,{children:["Name",(0,x.jsx)(s.Z,{className:"formIcon"}),(0,x.jsx)(u.yt,{className:"registrationInput",type:"text",name:"userName",placeholder:"Enter your name",required:!0})]}),(0,x.jsxs)(u.B2,{children:["Email",(0,x.jsx)(c.Z,{className:"formIcon"}),(0,x.jsx)(u.yt,{className:"registrationInput",type:"email",name:"userEmail",placeholder:"Enter your email address",required:!0})]}),(0,x.jsxs)(u.B2,{children:["Password",(0,x.jsx)(i.Z,{className:"formIcon",style:{fontSize:23}}),t?(0,x.jsx)(l.Z,{className:"passwordIcon",onClick:h}):(0,x.jsx)(p.Z,{onClick:h,className:"passwordIcon"}),(0,x.jsx)(u.yt,{className:"registrationInput",type:t?"text":"password",name:"userPassword",required:!0,minLength:7,placeholder:"Enter your password"})]}),(0,x.jsx)(u.tv,{type:"submit",children:"Sign up"})]})]})},m=t(7689),h=t(2286),g=function(){return(0,a.v9)(h.$B)?(0,x.jsx)(m.Fg,{to:"/contacts"}):(0,x.jsx)("div",{children:(0,x.jsx)(f,{})})}},8272:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(7462),a=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},s=t(3717),c=function(n,e){return a.createElement(s.Z,(0,r.Z)({},n,{ref:e,icon:o}))};var i=a.forwardRef(c)},4215:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(7462),a=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},s=t(3717),c=function(n,e){return a.createElement(s.Z,(0,r.Z)({},n,{ref:e,icon:o}))};var i=a.forwardRef(c)},8999:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(7462),a=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},s=t(3717),c=function(n,e){return a.createElement(s.Z,(0,r.Z)({},n,{ref:e,icon:o}))};var i=a.forwardRef(c)},9214:function(n,e,t){t.d(e,{Z:function(){return i}});var r=t(7462),a=t(2791),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"},s=t(3717),c=function(n,e){return a.createElement(s.Z,(0,r.Z)({},n,{ref:e,icon:o}))};var i=a.forwardRef(c)}}]);
//# sourceMappingURL=799.3f274750.chunk.js.map