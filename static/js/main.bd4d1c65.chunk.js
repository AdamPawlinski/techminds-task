(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){e.exports=a(219)},109:function(e,t,a){},113:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),o=a.n(c),i=(a(109),a(91)),l=a(92),u=a(102),m=a(93),s=a(101),A=a(225),d=a(229),p=a(222),f=a(221),E=a(228),b=a(6),v=a(95),y=a.n(v),h=(a(113),Object(E.a)(Object(b.b)(function(e){return{basketProducts:e.productReducer.basketProducts}})(function(e){var t=e.basketProducts.length;return r.a.createElement("header",{className:"navigation-header"},r.a.createElement(f.a,{to:"/"},r.a.createElement("img",{className:"navigation-logo",src:y.a,alt:"logo"})),r.a.createElement("div",{className:"navigation-basket"},r.a.createElement(f.a,{to:"/basket"},r.a.createElement("i",{className:"fas fa-cart-arrow-down"})),r.a.createElement("span",{className:"navigation-basket-count"},t)))}))),N=a(18),S=a(98),O=a.n(S),j=a(224),V=a(223),k=a(227),q=function(e){return{type:"DELETE_PRODUCT",key:e}},T=function(e){e.option.values.map(function(t){return{label:t.name,labelId:t.id,value:t.priceModifier,option:e.option.id}});return r.a.createElement("form",{className:"container"},r.a.createElement(j.a,{component:function(t){var a=t.input;return r.a.createElement("label",null,a.name.split("-")[1],r.a.createElement("select",a,e.option.values.map(function(e){return r.a.createElement("option",{key:e.id,value:e.priceModifier},e.name)})))},onChange:function(t){var a=parseFloat(e.name.split("-")[0]),n=(e.name,t.target.options[t.target.selectedIndex].text,t.target.value),r=0;if(console.log(e.formValue),!e.formValue)return 0;r=Object.values(e.formValue).reduce(function(e,t){return parseFloat(e)+parseFloat(t)},0);var c=e.products.find(function(e){return e.id===a}),o=parseFloat(c.price);console.log(o,r,n);var i={price:(o+parseFloat(r)+parseFloat(n)).toFixed(2)};console.log(i),e.optionHandler(a,i)},name:e.name,type:"select"}))};T=Object(V.a)({form:"option-form"})(T),T=Object(b.b)(function(e){return{formValue:Object(k.a)("option-form")(e)}})(T);var K=Object(b.b)(function(e){return{options:e.productReducer.products.options,products:e.productReducer.products}},{optionHandler:function(e,t){return{type:"OPTION_CHANGE",productId:e,priceModified:t}}})(T),U=(a(214),Object(E.a)(Object(b.b)(function(e){return{products:e.productReducer.basketProducts}},{addProduct:function(e,t){return{type:"ADD_PRODUCT",id:e,key:t}}})(function(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2);a[0],a[1];return r.a.createElement("div",{className:"container product-container"},r.a.createElement("img",{className:"product-image",src:"/shop-app"+e.item.img,alt:e.item.name}),r.a.createElement("div",{key:e.item.id,className:"product-form"},r.a.createElement("div",{className:"product-input-text header-3 productFeature"},e.item.name),r.a.createElement("div",{className:"product-old-price"},"$",e.item.oldPrice),r.a.createElement("div",{className:"product-input-text productFeature"},"$".concat(e.item.price)),e.item.options.map(function(t){return r.a.createElement(K,{name:"".concat(e.item.id,"-").concat(t.name),option:t,key:t.id})}),r.a.createElement("button",{className:"submit-button",onClick:function(t){t.preventDefault();var a=e.item.id,n=O()();console.log(a,n),e.addProduct(a,n)}},"Buy")))}))),M=function(e){return r.a.createElement("div",{className:"product-list"},console.log(e),e.products.map(function(e){return r.a.createElement(U,{item:e,key:e.id})}))},F=(a(215),Object(E.a)(Object(b.b)(function(e){return{products:e.productReducer.products}},{getProducts:function(){return{type:"GET_PRODUCTS"}}})(function(e){return r.a.createElement("div",{className:"container product-list-container"},r.a.createElement(M,{products:e.products}))}))),g=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(F,null))},R=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"header-2"},"Error 404 - Page Not Found"),r.a.createElement("h3",{className:"header-3"},"Please go to the ",r.a.createElement(f.a,{to:"/"},"main page")))},L=(a(89),Object(b.b)(function(e){return{}},{deleteProduct:q})(function(e){var t=e.item;return r.a.createElement("div",{className:"basket-item",id:"product"},console.log(t),r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.price),r.a.createElement("button",{onClick:function(){return a=t.key,void e.deleteProduct(a);var a}},"delete"))})),x=(a(216),Object(E.a)(Object(b.b)(function(e){return{productsInBasket:e.productReducer.basketProducts}})(function(e){var t=e.formData,a=e.productsInBasket;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"header-2 summary-header"},"OrderSummary:"),r.a.createElement("h3",{className:"header-3"},t.name),r.a.createElement("h3",{className:"header-3"},t.surname),r.a.createElement("span",null,t.email),r.a.createElement("h2",{className:"header-2"},"Products:"),a.map(function(e){return r.a.createElement("div",{key:e.key},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.options[0].name,": ",e.options[0].values.name),r.a.createElement("div",null,e.options[1].name,": ",e.options[1].values.name),r.a.createElement("div",null,e.price,"  "))}),r.a.createElement("h2",{className:"header-2"},"Sending address:"),r.a.createElement("span",null,t.street," ",t.houseNumber),r.a.createElement("span",null,t.city,", ",t.postcode))}))),X=(a(217),function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),l=Object(N.a)(i,2),u=l[0],m=l[1];return!0===c?r.a.createElement(x,{products:e.products,formData:u}):r.a.createElement("div",{className:"container container-user-form"},r.a.createElement("form",{className:"user-form",id:"userForm",onSubmit:function(t){return function(t){if(t.preventDefault(),!t.target.checkValidity())return document.querySelector(".empty-form-warning").classList.toggle("active");for(var a=t.target,n={},r=0;r<a.length;r++)n[a[r].name]=a[r].value;console.log(n);var c={user:{name:n.name,surname:n.surname,email:n.email,address:{street:n.street,houseNumber:n.houseNamber,city:n.city,postcode:n.postcode}},product:e.products.map(function(e){return{id:e.id,options:[e.options.map(function(e){return{id:e.id,value:e.value}})],amount:e.price}})};console.log(c),m(n),o(!0)}(t)},noValidate:!0},r.a.createElement("fieldset",{className:"user-form-fieldset"},r.a.createElement("legend",null,"Your personal data:"),r.a.createElement("label",{className:"form-label",htmlFor:"name"},"Name:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"name",id:"name",placeholder:"John",required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"surname"},"Surname:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"surname",id:"surname",placeholder:"Doe",required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"email"},"Email:"),r.a.createElement("input",{className:"user-form-input email-input",type:"email",name:"email",id:"email",placeholder:"john.doe@fake.com",onBlur:function(e){return function(e){return e.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?"":e.target.classList.toggle("invalid")&&document.querySelector(".invalid-warning").classList.toggle("active")}(e)},required:!0}),r.a.createElement("div",{className:"invalid-warning"},"Invalid email address")),r.a.createElement("fieldset",{className:"user-form-fieldset"},r.a.createElement("legend",null,"Address:"),r.a.createElement("label",{className:"form-label",htmlFor:"street"},"Street:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"street",id:"street",required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"houseNumber"},"No:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"houseNumber",id:"houseNumber",required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"city"},"City:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"city",id:"city",required:!0}),r.a.createElement("label",{className:"form-label",htmlFor:"postcode"},"Post code:"),r.a.createElement("input",{className:"user-form-input",type:"text",name:"postcode",id:"postcode",required:!0})),r.a.createElement("div",{className:"empty-form-warning"},"Fill the empty fields in the form"),r.a.createElement("input",{className:"submit-button",type:"submit",name:"send",target:"_self",value:"Send"})))}),G=Object(b.b)(function(e){return{products:e.productReducer.basketProducts}},{deleteProduct:q})(function(e){var t=Object(n.useState)(!1),a=Object(N.a)(t,2),c=a[0],o=a[1],i=e.products;return!0===c?r.a.createElement(X,{products:i}):r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"header-2"},"Products you have chosen:"),!0===!i?r.a.createElement("div",null,"There are no products in your basket"):r.a.createElement(r.a.Fragment,null,i.map(function(e){return r.a.createElement(L,{item:e,key:e.key})}),r.a.createElement("button",{className:"submit-button",onClick:function(){o(!0)}},"Accept purchase")))}),P=r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/",component:g,exact:!0}),r.a.createElement(p.a,{path:"/basket",component:G}),r.a.createElement(p.a,{path:"/userForm",component:X}),r.a.createElement(p.a,{path:"/orderSummary",component:x}),r.a.createElement(p.a,{component:R})),w=a(7),D=a(100),Q=a(29),Z=a(99),J=a(226),B={products:Z,currentProducts:[],basketProducts:[]},Y=Object(w.b)({productReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCTS":return Object.assign({},e,{products:e.products});case"OPTION_CHANGE":var a=t.productId-1;return Object(Q.a)({},e,{products:e.products.map(function(e,n){return n!==a?e:Object(Q.a)({},e,t.priceModified)})});case"ADD_PRODUCT":var n=e.products.find(function(e){return e.id===t.id});return n=Object.assign({},n,{key:t.key}),Object(Q.a)({},e,{basketProducts:[].concat(Object(D.a)(e.basketProducts),[n])});case"DELETE_PRODUCT":var r=e.basketProducts.filter(function(e){return e.key!==t.key});return Object(Q.a)({},e,{basketProducts:r});default:return e}},form:J.a}),I=(a(218),Object(w.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{store:I},r.a.createElement(A.a,null,P))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){},95:function(e,t){e.exports="data:image/jpeg;base64,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"},99:function(e){e.exports=[{id:1,name:"iPhone 8",img:"../images/iphone8.jpg",price:99.99,oldPrice:599,options:[{id:100,name:"Color",values:[{id:1e3,name:"Silver",priceModifier:0},{id:1001,name:"Space Gray",priceModifier:0},{id:1002,name:"Gold",priceModifier:0}]},{id:101,name:"Capacity",values:[{id:1100,name:"64 GB",priceModifier:0},{id:1101,name:"256 GB",priceModifier:40}]}]},{id:2,name:"iPhone 8 Plus",img:"../images/iphone8-plus.jpg",price:129.99,oldPrice:699,options:[{id:100,name:"Color",values:[{id:1e3,name:"Silver",priceModifier:0},{id:1001,name:"Space Gray",priceModifier:0},{id:1002,name:"Gold",priceModifier:0},{id:1003,name:"Red",priceModifier:10}]},{id:101,name:"Capacity",values:[{id:1100,name:"64 GB",priceModifier:0},{id:1101,name:"256 GB",priceModifier:40}]}]}]}},[[104,1,2]]]);
//# sourceMappingURL=main.bd4d1c65.chunk.js.map