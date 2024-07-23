import{a4 as B,u as D,E as v,c as y,a5 as I,w as a,o as u,b as l,a as x,a9 as c,R as r,a7 as p,at as m,au as N,an as P}from"./index-CF5y57py.js";import{V as S}from"./VContainer-CUxjYX8F.js";import{V as _}from"./VCol-Ilwq2PdU.js";import{V as $}from"./VDivider-MSPgIvj6.js";import{V as A}from"./VDataTable-BwLTApmh.js";import"./VPagination-DpZXhmqp.js";import"./VList-BFWT0VEm.js";const E=m("h1",{class:"text-center"},"購物車",-1),R={key:0},T={key:1,class:"text-red"},M={__name:"cart",setup(U){const{apiAuth:h}=N(),C=P(),i=B(),k=D(),o=v([]),V=[{title:"品名",key:"p_id.name"},{title:"單價",key:"p_id.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:t=>t.p_id.price*t.quantity},{title:"操作",key:"action"}];(async()=>{var t,s;try{const{data:e}=await h.get("/user/cart");o.value=e.result}catch(e){console.log(e),i({text:((s=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const g=y(()=>o.value.reduce((t,s)=>t+s.quantity*s.p_id.price,0)),b=y(()=>o.value.length>0&&!o.value.some(t=>!t.p_id.sell)),f=v(!1),q=async()=>{f.value=!0;const t=await k.checkout();i({text:t.text,snackbarProps:{color:t.color}}),t.color==="green"&&C.push("/orders"),f.value=!1},d=async(t,s)=>{const e=await k.addCart(t,s);if(i({text:e.text,snackbarProps:{color:e.color}}),e.color==="green"){const n=o.value.findIndex(w=>w.p_id._id===t);o.value[n].quantity+=s,o.value[n].quantity<=0&&o.value.splice(n,1)}};return(t,s)=>(u(),I(S,null,{default:a(()=>[l(_,{cols:"12"},{default:a(()=>[E]),_:1}),l($),l(_,{cols:"12"},{default:a(()=>[l(A,{items:o.value,headers:V},{"item.p_id.name":a(({item:e})=>[e.p_id.sell?(u(),x("span",R,c(e.p_id.name),1)):(u(),x("span",T,c(e.p_id.name)+" (已下架)",1))]),"item.quantity":a(({item:e})=>[l(r,{variant:"text",color:"red",onClick:n=>d(e.p_id._id,-1)},{default:a(()=>[p("-")]),_:2},1032,["onClick"]),m("span",null,c(e.quantity),1),l(r,{variant:"text",color:"green",onClick:n=>d(e.p_id._id,1)},{default:a(()=>[p("+")]),_:2},1032,["onClick"])]),"item.action":a(({item:e})=>[l(r,{variant:"text",color:"red",icon:"mdi-delete",onClick:n=>d(e.p_id._id,e.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),l(_,{cols:"12",class:"text-center"},{default:a(()=>[m("p",null,"總金額: "+c(g.value),1),l(r,{color:"green",disabled:!b.value,onClick:q},{default:a(()=>[p("結帳")]),_:1},8,["disabled"])]),_:1})]),_:1}))}};export{M as default};
