"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[231],{5231:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(2637),c=a(502),r=a(9439),s=a(2791),l="ContactForm_contactForm__y0Rca",o="ContactForm_formLabel__TSwxK",i="ContactForm_formInput__GszVU",d="ContactForm_formAddBtn__d8AZy",m="ContactForm_iconPhone__BYUts",u=a(9434),h=a(6299),f=a(2286),v=a(9529),_=a(7462),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"}}]},name:"phone",theme:"outlined"},p=a(3717),C=function(e,t){return s.createElement(p.Z,(0,_.Z)({},e,{ref:t,icon:x}))};var j=s.forwardRef(C),N=a(3329),b=function(){var e=(0,u.v9)(f.DI),t=(0,u.I0)(),a=(0,s.useState)(""),n=(0,r.Z)(a,2),c=n[0],_=n[1],x=(0,s.useState)(""),p=(0,r.Z)(x,2),C=p[0],b=p[1],g=function(e){switch(e.target.name){case"name":b(e.target.value);break;case"number":_(e.target.value);break;default:return}};return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)("form",{className:l,onSubmit:function(a){a.preventDefault();var n={name:C,number:c},r=e.find((function(e){return e.name===C}));if(r)return alert("".concat(C," is already in contacts.")),b(""),void _("");t((0,h.je)(n)),b(""),_("")},children:[(0,N.jsxs)("label",{className:o,children:["Name",(0,N.jsx)(v.Z,{className:m}),(0,N.jsx)("input",{className:i,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter your name",value:C,onChange:g})]}),(0,N.jsxs)("label",{className:o,children:["Number",(0,N.jsx)(j,{className:m}),(0,N.jsx)("input",{className:i,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter your number",value:c,onChange:g})]}),(0,N.jsx)("button",{className:d,type:"submit",children:"Add contact "})]})})},g={contactList:"ContactList_contactList__UFVCg",contactItem:"ContactList_contactItem__ppNQ5",contact:"ContactList_contact__0STHS",deleteContactBtn:"ContactList_deleteContactBtn__PWCBT",deleteIcon:"ContactList_deleteIcon__-gWLm"},y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},F=function(e,t){return s.createElement(p.Z,(0,_.Z)({},e,{ref:t,icon:y}))};var I=s.forwardRef(F),L=function(){var e=(0,u.v9)(f.DI),t=(0,u.I0)();return(0,N.jsxs)("ul",{className:g.contactList,children:[0===e.length&&(0,N.jsx)("p",{children:"There are no contacts found!"}),e.length>0&&e.map((function(e){return(0,N.jsxs)("li",{className:g.contactItem,children:[(0,N.jsxs)("div",{className:g.contactName,children:[e.name,":"]}),(0,N.jsxs)("div",{className:g.contact,children:[(0,N.jsx)("div",{className:g.contactNumber,children:e.number}),(0,N.jsxs)("button",{type:"button",className:g.deleteContactBtn,onClick:function(){return a=e.id,void t((0,h.xX)(a));var a},children:["Delete",(0,N.jsx)(I,{className:g.deleteIcon})]})]})]},e.id)}))]})},z="Filter_filterInput__1Cysk",Z="Filter_filterTitle__5SDqd",w="Filter_filterContainer__8G57N",B="Filter_filterIcon__QWr7x",k=a(2581),A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},S=function(e,t){return s.createElement(p.Z,(0,_.Z)({},e,{ref:t,icon:A}))};var M=s.forwardRef(S),D=function(e){var t=e.filter,a=(0,u.I0)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("p",{className:Z,children:"Find contacts by name"}),(0,N.jsxs)("div",{className:w,children:[(0,N.jsx)("span",{className:B,children:(0,N.jsx)(M,{})}),(0,N.jsx)("input",{className:z,type:"text",name:"filter",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:function(e){var t=e.target.value;a((0,k.Tv)(t))}})]})]})},E=function(){var e=(0,u.v9)(f.xU),t=(0,u.v9)(f.Uv),a=(0,u.v9)(f.AD),r=(0,u.I0)(),l=(0,u.v9)(f.$B);return(0,s.useEffect)((function(){l&&r((0,h.VC)())}),[l,r]),(0,N.jsxs)(c.PQ,{children:[(0,N.jsx)(c.Wl,{children:"Phonebook"}),e&&!t&&(0,N.jsx)(c.Nm,{className:"loadingContainer",children:(0,N.jsx)(n.Z,{size:"large"})}),t&&(0,N.jsxs)("p",{children:[" Oops, some error occured... ",t]}),(0,N.jsx)(b,{}),(0,N.jsx)(c.Wl,{children:"Contacts"}),(0,N.jsx)(D,{filter:a}),(0,N.jsx)(L,{})]})}}}]);
//# sourceMappingURL=231.0275d59b.chunk.js.map