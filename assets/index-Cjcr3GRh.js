import{g as q,a as z,k as D,s as g,c as d,_ as n,b as R,r as m,u as F,d as K,j as s,e as L,f as U,T as _}from"./index-CzmAnhFQ.js";import{u as w,B as M,P as I,a as b,A as Q,f as A,b as W,Q as G,E as V}from"./react-error-boundary.esm-DYGFDnLk.js";function Z(r){return q("MuiCircularProgress",r)}z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const H=["className","color","disableShrink","size","style","thickness","value","variant"];let u=r=>r,P,S,$,N;const i=44,J=D(P||(P=u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),O=D(S||(S=u`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),X=r=>{const{classes:e,variant:a,color:t,disableShrink:o}=r,x={root:["root",a,`color${d(t)}`],svg:["svg"],circle:["circle",`circle${d(a)}`,o&&"circleDisableShrink"]};return U(x,Z,e)},Y=g("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[a.variant],e[`color${d(a.color)}`]]}})(({ownerState:r,theme:e})=>n({display:"inline-block"},r.variant==="determinate"&&{transition:e.transitions.create("transform")},r.color!=="inherit"&&{color:(e.vars||e).palette[r.color].main}),({ownerState:r})=>r.variant==="indeterminate"&&R($||($=u`
      animation: ${0} 1.4s linear infinite;
    `),J)),rr=g("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),er=g("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.circle,e[`circle${d(a.variant)}`],a.disableShrink&&e.circleDisableShrink]}})(({ownerState:r,theme:e})=>n({stroke:"currentColor"},r.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},r.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink&&R(N||(N=u`
      animation: ${0} 1.4s ease-in-out infinite;
    `),O)),sr=m.forwardRef(function(e,a){const t=F({props:e,name:"MuiCircularProgress"}),{className:o,color:x="primary",disableShrink:B=!1,size:h=40,style:E,thickness:c=3.6,value:p=0,variant:k="indeterminate"}=t,T=K(t,H),l=n({},t,{color:x,disableShrink:B,size:h,thickness:c,value:p,variant:k}),f=X(l),y={},v={},j={};if(k==="determinate"){const C=2*Math.PI*((i-c)/2);y.strokeDasharray=C.toFixed(3),j["aria-valuenow"]=Math.round(p),y.strokeDashoffset=`${((100-p)/100*C).toFixed(3)}px`,v.transform="rotate(-90deg)"}return s.jsx(Y,n({className:L(f.root,o),style:n({width:h,height:h},v,E),ownerState:l,ref:a,role:"progressbar"},j,T,{children:s.jsx(rr,{className:f.svg,ownerState:l,viewBox:`${i/2} ${i/2} ${i} ${i}`,children:s.jsx(er,{className:f.circle,style:y,ownerState:l,cx:i,cy:i,r:(i-c)/2,fill:"none",strokeWidth:c})})}))}),ar=sr;function tr({description:r}){return s.jsxs("div",{className:"flex flex-row items-center my-2",children:[s.jsx(ar,{size:20,className:"mr-2"})," ",s.jsx(_,{variant:"body2",children:r})]})}function ir(){const[r,e]=m.useState(null),a=w({queryKey:["pokemons"],queryFn:A});return s.jsx("div",{children:a.data.results.map((t,o)=>s.jsxs("div",{className:"my-1 p-1",children:[s.jsx(M,{variant:"text",onClick:()=>e(t),children:t.name}),(r==null?void 0:r.name)===t.name&&s.jsx(m.Suspense,{fallback:s.jsx(tr,{description:"Loading pokemon..."}),children:s.jsx(or,{name:r==null?void 0:r.name,url:r==null?void 0:r.url})})]},o))})}const or=({name:r,url:e})=>{const{data:a}=w({queryKey:["pokemon",r],queryFn:()=>W(e)});return console.log(a,"pokemon details"),s.jsx(I,{elevation:3,className:"bg-primary text-gray-100 my-2",children:s.jsxs(b,{className:"flex flex-row items-center",children:[s.jsx(Q,{className:"h-16 w-16",src:a.sprites.front_default}),s.jsx(b,{className:"flex flex-row",children:s.jsx(_,{className:"text-gray-500",children:a.abilities.map((t,o)=>`${t.ability.name}${o!==a.abilities.length-1?", ":""}`)})})]})})};function lr(){return s.jsx(G,{children:({reset:r})=>s.jsx(V,{fallbackRender:({error:e,resetErrorBoundary:a})=>s.jsxs("div",{children:["There was an error!"," ",s.jsx(M,{onClick:()=>a(),children:"Try again"}),s.jsx("pre",{style:{whiteSpace:"normal"},children:e.message})]}),onReset:r,children:s.jsx(m.Suspense,{fallback:s.jsx("div",{children:"Loading pokemons..."}),children:s.jsx(ir,{})})})})}export{lr as Suspense};
