(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{43057:(e,s,t)=>{Promise.resolve().then(t.bind(t,37544))},37544:(e,s,t)=>{"use strict";t.d(s,{SipCalculator:()=>M});var a=t(95155),r=t(12115),l=t(43463),n=t(69795);function i(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,n.QP)((0,l.$)(s))}let d=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("rounded-lg border bg-card text-card-foreground shadow-sm",t),...r})});d.displayName="Card";let c=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("flex flex-col space-y-1.5 p-6",t),...r})});c.displayName="CardHeader";let o=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("text-2xl font-semibold leading-none tracking-tight",t),...r})});o.displayName="CardTitle";let m=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("text-sm text-muted-foreground",t),...r})});m.displayName="CardDescription";let u=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("p-6 pt-0",t),...r})});u.displayName="CardContent",r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)("div",{ref:s,className:i("flex items-center p-6 pt-0",t),...r})}).displayName="CardFooter";let x=r.forwardRef((e,s)=>{let{className:t,type:r,...l}=e;return(0,a.jsx)("input",{type:r,className:i("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:s,...l})});x.displayName="Input";var f=t(46195);let h=(0,t(31027).F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),p=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(f.b,{ref:s,className:i(h(),t),...r})});p.displayName=f.b.displayName;var g=t(41214);let j=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsxs)(g.bL,{ref:s,className:i("relative flex w-full touch-none select-none items-center",t),...r,children:[(0,a.jsx)(g.CC,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,a.jsx)(g.Q6,{className:"absolute h-full bg-primary"})}),(0,a.jsx)(g.zi,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});j.displayName=g.bL.displayName;var v=t(2062);let b=v.bL,N=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(v.B8,{ref:s,className:i("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...r})});N.displayName=v.B8.displayName;let y=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(v.l9,{ref:s,className:i("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...r})});y.displayName=v.l9.displayName;let w=r.forwardRef((e,s)=>{let{className:t,...r}=e;return(0,a.jsx)(v.UC,{ref:s,className:i("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...r})});w.displayName=v.UC.displayName;var C=t(58581),R=t(28064),k=t(15255),I=t(12800),S=t(66963),F=t(27112),E=t(14969);function M(){let[e,s]=(0,r.useState)(5e3),[t,l]=(0,r.useState)(12),[n,i]=(0,r.useState)(10),[f,h]=(0,r.useState)(0),[g,v]=(0,r.useState)(0),[M,P]=(0,r.useState)(0),[_,L]=(0,r.useState)([]),[V,K]=(0,r.useState)("calculator");(0,r.useEffect)(()=>{T()},[e,t,n]);let T=()=>{let s=t/12/100,a=12*n,r=e*a,l=(Math.pow(1+s,a)-1)/s*e*(1+s);h(r),v(Math.max(0,l-r)),P(l);let i=[];for(let t=1;t<=n;t++){let a=12*t,r=e*a,l=(Math.pow(1+s,a)-1)/s*e*(1+s),n=l-r;i.push({year:"Year ".concat(t),investment:Math.round(r),returns:Math.round(n),total:Math.round(l)})}L(i)},D=e=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(e);return(0,a.jsxs)(d,{className:"w-full",children:[(0,a.jsxs)(c,{children:[(0,a.jsx)(o,{children:"SIP Calculator"}),(0,a.jsx)(m,{children:"Calculate the future value of your regular investments"})]}),(0,a.jsx)(u,{children:(0,a.jsxs)(b,{value:V,onValueChange:K,children:[(0,a.jsxs)(N,{className:"grid w-full grid-cols-2",children:[(0,a.jsx)(y,{value:"calculator",children:"Calculator"}),(0,a.jsx)(y,{value:"chart",children:"Chart"})]}),(0,a.jsxs)(w,{value:"calculator",className:"space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(p,{htmlFor:"monthlyInvestment",children:"Monthly Investment (₹)"}),(0,a.jsx)(x,{id:"monthlyInvestment",type:"text",className:"w-24 text-right",value:e.toLocaleString(),onChange:e=>{s(Number.parseInt(e.target.value.replace(/,/g,""))||0)}})]}),(0,a.jsx)(j,{id:"monthlyInvestmentSlider",min:500,max:1e5,step:500,value:[e],onValueChange:e=>s(e[0])}),(0,a.jsxs)("div",{className:"flex justify-between text-xs text-muted-foreground",children:[(0,a.jsx)("span",{children:"₹500"}),(0,a.jsx)("span",{children:"₹100,000"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(p,{htmlFor:"expectedReturnRate",children:"Expected Return Rate (%)"}),(0,a.jsx)(x,{id:"expectedReturnRate",type:"number",className:"w-24 text-right",value:t,onChange:e=>l(Number(e.target.value))})]}),(0,a.jsx)(j,{id:"expectedReturnRateSlider",min:1,max:30,step:.5,value:[t],onValueChange:e=>l(e[0])}),(0,a.jsxs)("div",{className:"flex justify-between text-xs text-muted-foreground",children:[(0,a.jsx)("span",{children:"1%"}),(0,a.jsx)("span",{children:"30%"})]})]}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(p,{htmlFor:"timePeriod",children:"Time Period (Years)"}),(0,a.jsx)(x,{id:"timePeriod",type:"number",className:"w-24 text-right",value:n,onChange:e=>i(Number(e.target.value))})]}),(0,a.jsx)(j,{id:"timePeriodSlider",min:1,max:30,step:1,value:[n],onValueChange:e=>i(e[0])}),(0,a.jsxs)("div",{className:"flex justify-between text-xs text-muted-foreground",children:[(0,a.jsx)("span",{children:"1 year"}),(0,a.jsx)("span",{children:"30 years"})]})]})]}),(0,a.jsxs)("div",{className:"mt-8 rounded-lg bg-muted p-6",children:[(0,a.jsx)("h3",{className:"mb-4 text-lg font-medium",children:"Investment Summary"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Total Investment"}),(0,a.jsx)("p",{className:"text-2xl font-bold text-primary",children:D(f)})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Estimated Returns"}),(0,a.jsx)("p",{className:"text-2xl font-bold text-green-600",children:D(g)})]}),(0,a.jsxs)("div",{className:"space-y-1",children:[(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Total Value"}),(0,a.jsx)("p",{className:"text-2xl font-bold",children:D(M)})]})]})]})]}),(0,a.jsxs)(w,{value:"chart",children:[(0,a.jsx)("div",{className:"h-[400px] w-full",children:(0,a.jsx)(C.u,{width:"100%",height:"100%",children:(0,a.jsxs)(R.E,{data:_,margin:{top:20,right:30,left:20,bottom:60},children:[(0,a.jsx)(k.d,{strokeDasharray:"3 3"}),(0,a.jsx)(I.W,{dataKey:"year",angle:-45,textAnchor:"end",height:60}),(0,a.jsx)(S.h,{tickFormatter:e=>"₹".concat(e/1e3,"K")}),(0,a.jsx)(F.m,{formatter:e=>["₹".concat(e.toLocaleString()),void 0],labelFormatter:e=>"".concat(e)}),(0,a.jsx)(E.y,{dataKey:"investment",name:"Investment",stackId:"a",fill:"#8884d8"}),(0,a.jsx)(E.y,{dataKey:"returns",name:"Returns",stackId:"a",fill:"#82ca9d"})]})})}),(0,a.jsxs)("div",{className:"mt-4 flex justify-center space-x-6",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-2 h-3 w-3 rounded-full bg-[#8884d8]"}),(0,a.jsx)("span",{className:"text-sm",children:"Investment"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("div",{className:"mr-2 h-3 w-3 rounded-full bg-[#82ca9d]"}),(0,a.jsx)("span",{className:"text-sm",children:"Returns"})]})]})]})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[998,441,517,358],()=>s(43057)),_N_E=e.O()}]);