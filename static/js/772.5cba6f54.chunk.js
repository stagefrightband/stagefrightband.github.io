"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[772],{772:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t(169),n=(t(252),t(813));function i(e){let{cookieName:s,className:t}=e;const a="true"===function(e){const s=e+"=",t=decodeURIComponent(document.cookie).split(";");for(let a=0;a<t.length;a++){let e=t[a].trim();if(0===e.indexOf(s))return e.substring(s.length,e.length)}return null}(s);a?document.documentElement.classList.add(t):document.documentElement.classList.remove(t)}const l=()=>{const[e,s]=(0,a.useState)(!1),[t,l]=(0,a.useState)(!1),[c,r]=(0,a.useState)(!1),[o,d]=(0,a.useState)(!1),[u,m]=(0,a.useState)(1),[h,v]=(0,a.useState)("House of Blues, Houston"),[x,j]=(0,a.useState)("M"),[g,p]=(0,a.useState)("Digital Version (.mp3)");(0,a.useEffect)((()=>{i({cookieName:"highcontrast",className:"high-contrast"}),i({cookieName:"opendyslexic",className:"open-dyslexic"});const e=e=>{"Escape"===e.key&&(s(!1),l(!1),r(!1),d(!1))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]);const b=e=>{const s=parseInt(e.target.value,10);m(s>=1?s:1)},N=(e,s,t,a,n)=>{const i=localStorage.getItem("cartItems");let l=i?JSON.parse(i):[];const c=l.findIndex((s=>s.name===e&&s.venue===t&&s.size===a&&s.type===n));-1!==c?l[c].quantity+=s:l.push({name:e,quantity:s,venue:t,size:a,type:n}),localStorage.setItem("cartItems",JSON.stringify(l))};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:{textAlign:"center"},children:"Store"}),(0,n.jsxs)("div",{className:"products-container",children:[(0,n.jsxs)("div",{className:"product-tile",children:[(0,n.jsx)("div",{className:"product-image",children:(0,n.jsx)("button",{className:"product-button merch-button",style:{backgroundImage:"url('/Images/stagefrightmerch.webp')"},onClick:()=>{s(!0)},"aria-label":"Stage Fright Merch"})}),(0,n.jsx)("div",{className:"product-info",children:(0,n.jsx)("p",{children:"Stage Fright T-Shirt"})})]}),(0,n.jsxs)("div",{className:"product-tile",children:[(0,n.jsx)("div",{className:"product-image",children:(0,n.jsx)("button",{className:"product-button ticket-button",style:{backgroundImage:"url('/Images/ticket.webp')"},onClick:()=>{l(!0)},"aria-label":"Stage Fright Tickets"})}),(0,n.jsx)("div",{className:"product-info",children:(0,n.jsx)("p",{children:"Stage Fright Tickets"})})]}),(0,n.jsxs)("div",{className:"product-tile",children:[(0,n.jsx)("div",{className:"product-image",children:(0,n.jsx)("button",{className:"product-button album-button",style:{backgroundImage:"url('/Images/albumcover.webp')"},onClick:()=>{r(!0)},"aria-label":"Album: S-Gate"})}),(0,n.jsxs)("div",{className:"product-info",children:[(0,n.jsx)("p",{children:"Album: S-Gate"})," "]})]})]}),(0,n.jsxs)("div",{className:"overlay ".concat(e?"active":""),children:[(0,n.jsx)("button",{className:"close-button",onClick:()=>s(!1),children:"X"}),(0,n.jsx)("div",{className:"overlay-left",children:(0,n.jsx)("img",{src:"/Images/stagefrightmerch.webp",alt:"Stage Fright Merch"})}),(0,n.jsx)("div",{className:"overlay-right",children:(0,n.jsxs)("div",{className:"overlay-content",children:[(0,n.jsx)("p",{children:"Stage Fright Merch"}),(0,n.jsxs)("div",{className:"size-container",children:[(0,n.jsx)("span",{children:"Size:"}),(0,n.jsxs)("select",{value:x,onChange:e=>j(e.target.value),children:[(0,n.jsx)("option",{value:"S",children:"Small"}),(0,n.jsx)("option",{value:"M",children:"Medium"}),(0,n.jsx)("option",{value:"L",children:"Large"}),(0,n.jsx)("option",{value:"XL",children:"Extra Large"})]})]}),(0,n.jsxs)("div",{className:"quantity-container",children:[(0,n.jsx)("span",{children:"Quantity:"}),(0,n.jsx)("input",{type:"number",min:"1",value:u,onChange:b})]}),(0,n.jsx)("button",{className:"submit-button",onClick:()=>{N("Merch",u,void 0,x),s(!1)},children:"Add to Cart"})]})})]}),(0,n.jsxs)("div",{className:"overlay ".concat(t?"active":""),children:[(0,n.jsx)("button",{className:"close-button",onClick:()=>l(!1),children:"X"}),(0,n.jsx)("div",{className:"overlay-left",children:(0,n.jsx)("img",{src:"/Images/ticket.webp",alt:"Stage Fright Tickets"})}),(0,n.jsx)("div",{className:"overlay-right",children:(0,n.jsxs)("div",{className:"overlay-content",children:[(0,n.jsx)("p",{children:"Stage Fright Tickets"}),(0,n.jsxs)("div",{className:"venue-container",children:[(0,n.jsx)("span",{children:"Venue:"}),(0,n.jsxs)("select",{value:h,onChange:e=>{v(e.target.value)},children:[(0,n.jsx)("option",{value:"House of Blues, Houston",children:"House of Blues Houston"}),(0,n.jsx)("option",{value:"Emo's",children:"Emo's"}),(0,n.jsx)("option",{value:"Ferris Wheeler's Backyard & BBQ",children:"Ferris Wheeler's Backyard & BBQ"}),(0,n.jsx)("option",{value:"The Nile Theatre",children:"The Nile Theatre"}),(0,n.jsx)("option",{value:"House of Blues San Diego",children:"House of Blues San Diego"})]})]}),(0,n.jsxs)("div",{className:"size-container",children:[(0,n.jsx)("span",{children:"Quantity:"}),(0,n.jsx)("input",{type:"number",min:"1",value:u,onChange:b})]}),(0,n.jsx)("button",{className:"submit-button",onClick:()=>{N("Tickets",u,h),l(!1)},children:"Add to Cart"})]})})]}),(0,n.jsxs)("div",{className:"overlay ".concat(c?"active":""),children:[(0,n.jsx)("button",{className:"close-button",onClick:()=>r(!1),children:"X"}),(0,n.jsx)("div",{className:"overlay-left",children:(0,n.jsx)("img",{src:"CD"===g?"/Images/cdimage.webp":"/Images/albumcover.webp",alt:"Album: S-Gate"})}),(0,n.jsx)("div",{className:"overlay-right",children:(0,n.jsxs)("div",{className:"overlay-content",children:[(0,n.jsx)("p",{children:"Album: S-Gate"})," ",(0,n.jsxs)("div",{className:"type-container",children:[(0,n.jsx)("span",{children:"Type:"}),(0,n.jsxs)("select",{value:g,onChange:e=>{p(e.target.value)},children:[(0,n.jsx)("option",{value:"mp3",children:"mp3"}),(0,n.jsx)("option",{value:"CD",children:"CD"})]})]}),(0,n.jsxs)("div",{className:"quantity-container",children:[(0,n.jsx)("span",{children:"Quantity:"}),(0,n.jsx)("input",{type:"number",min:"1",value:u,onChange:b})]}),(0,n.jsx)("button",{className:"submit-button",onClick:()=>{N("S-Gate",u,void 0,void 0,g),r(!1)},children:"Add to Cart"})]})})]}),(0,n.jsxs)("div",{className:"overlay ".concat(o?"active":""),children:[(0,n.jsx)("button",{className:"close-button",onClick:()=>d(!1),children:"X"}),(0,n.jsx)("div",{className:"overlay-left",children:(0,n.jsx)("img",{src:"/Images/digitalsgate.webp",alt:"Digital S-Gate"})}),(0,n.jsx)("div",{className:"overlay-right",children:(0,n.jsxs)("div",{className:"overlay-content",children:[(0,n.jsx)("p",{children:"Digital S-Gate"}),(0,n.jsxs)("div",{className:"quantity-container",children:[(0,n.jsx)("span",{children:"Quantity:"}),(0,n.jsx)("input",{type:"number",min:"1",value:u,onChange:b})]}),(0,n.jsx)("button",{className:"submit-button",onClick:()=>{N("Digital S-Gate",u,void 0,void 0,"mp3"),d(!1)},children:"Add to Cart"})]})})]})]})}}}]);