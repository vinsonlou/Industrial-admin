(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d75451d"],{2290:function(e,t,n){"use strict";for(var r=n("96eb"),i=n.n(r),a=[],c=100,s=0;s<c;s++)a.push(i.a.mock({number:/^[0-9A-Z]{11}$/,lineNumber:/^[0-9]{2}[#]$/,testBeginTime:'@datetime("yyyy-MM-dd HH:mm:ss")',testCompleteTime:'@datetime("yyyy-MM-dd HH:mm:ss")',testInspector:"@cname","veer1|1":[1],"veer1Slip|1":[1],veer1cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,"veer2|1":[1],"veer2Slip|1":[1],veer2cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,"veer3|1":[0,1],"veer3Slip|1":[0,1],veer3cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,"turn1|1":[1],"turn1Slip|1":[1],turn1cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,"turn2|1":[1],"turn2Slip|1":[1],turn2cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,"turn3|1":[1],"turn3Slip|1":[1],turn3cm:/^[1-9][0-9][.][1-9][1-9][c][m]$/,current:/^[0-9][.][1-9][0-9][A]$/,voltage:/^[1-2][0-9]{2}[.][0-9][1-9][V]$/,power:/^[1-2][0-9]{2}[.][0-9][1-9][W]$/,muteBeginTime:'@datetime("yyyy-MM-dd HH:mm:ss")',muteCompleteTime:'@datetime("yyyy-MM-dd HH:mm:ss")',muteInspector:"@cname","lowPressure|1":[1],"decibel|1":[1],"landing|1":[1],"pressurization|1":[1],"appearance|1":[1],appearanceTime:'@datetime("yyyy-MM-dd HH:mm:ss")',appearanceInspector:"@cname"}));t["a"]=a},ac0d:function(e,t,n){"use strict";var r=n("d0e9"),i=n.n(r);i.a},cdd7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dooya-container"},[n("Card",[n("Table",{attrs:{data:e.tableData,columns:e.tableColumns,stripe:""}}),n("div",{staticStyle:{margin:"10px",overflow:"hidden"}},[n("div",{staticStyle:{float:"right"}},[n("Page",{attrs:{"show-sizer":"",total:e.tableDataOrg.length,current:1},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)])],1)],1)},i=[],a=(n("ac6a"),n("2290")),c={data:function(){var e=this;return{tableDataOrg:[],tableData:[],tableColumns:[{title:"编号",key:"number",align:"center",minWidth:150},{title:"线号",key:"lineNumber",align:"center",render:function(e,t){var n=t.row.lineNumber;return e("div",n)},minWidth:100},{title:"综合测试",key:"testing",align:"center",render:function(e,t){var n=t.row,r=n.testing?"success":"error",i=n.testing?"合格":"不合格";return e("Tag",{props:{color:r}},i)},minWidth:100},{title:"综合测试开始时间",key:"testBeginTime",align:"center",minWidth:150},{title:"综合测试检测人",key:"testInspector",align:"center",minWidth:120},{title:"静音结果",key:"mute",align:"center",render:function(e,t){var n=t.row,r=n.mute?"success":"error",i=n.mute?"合格":"不合格";return e("Tag",{props:{color:r}},i)},minWidth:100},{title:"静音开始时间",key:"muteBeginTime",align:"center",minWidth:150},{title:"静音间检测人",key:"muteInspector",align:"center",minWidth:120},{title:"外观检测人",key:"appearanceInspector",align:"center",minWidth:120},{title:"检测结果",key:"appearance",align:"center",render:function(e,t){var n=t.row,r=1===n.appearance?"success":"error",i=1===n.appearance?"合格":"不合格";return e("Tag",{props:{color:r}},i)},minWidth:100},{title:"操作",key:"action",fixed:"right",minWidth:100,align:"center",render:function(t,n){return t("div",[t("Button",{props:{type:"primary",size:"small"},on:{click:function(){e.show(n.row)}}},"详情")])}}],pageNum:1,pageSize:10}},created:function(){this.getData()},methods:{getData:function(){var e=this;a["a"].forEach(function(t){return e.$set(t,"veer",1===t.veer1Slip&&1===t.veer2Slip&&1===t.veer3Slip),e.$set(t,"turn",1===t.turn1Slip&&1===t.turn2Slip&&1===t.turn3Slip),e.$set(t,"testing",t.veer&&t.turn),e.$set(t,"mute",1===t.lowPressure&&1===t.decibel&&1===t.landing&&1===t.pressurization),t}),this.tableDataOrg=a["a"],this.tableData=a["a"].slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize)},changePage:function(e){this.pageNum=e,this.getData()},changePageSize:function(e){this.pageSize=e,this.getData()},show:function(e){this.$router.push({path:"/systemManage/checkSearch",name:"checkSearch",params:{checkSearchNumber:e.number}})}}},s=c,u=(n("ac0d"),n("2877")),m=Object(u["a"])(s,r,i,!1,null,"dd23d9e8",null);m.options.__file="electricSearch.vue";t["default"]=m.exports},d0e9:function(e,t,n){}}]);