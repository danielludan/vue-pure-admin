import{t as r}from"./data-33b9b6a6.js";import{d as n,c as o,f as l,e as p,u}from"./index-cf07ebc0.js";const i=n({__name:"status",setup(_){const a=({rowIndex:e})=>e===1||e===5?"pure-warning-row":e===3||e===7?"pure-success-row":"",t=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"}];return(e,c)=>{const s=o("pure-table");return l(),p(s,{data:u(r),columns:t,"row-class-name":a},null,8,["data"])}}});export{i as _};