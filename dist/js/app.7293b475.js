(function(e){function t(t){for(var n,i,o=t[0],l=t[1],c=t[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00b2":function(e,t,a){},"0124":function(e,t,a){},"0994":function(e,t,a){},1922:function(e,t,a){"use strict";var n=a("7304"),s=a.n(n);s.a},"1e90":function(e,t,a){},"22f4":function(e,t,a){},2550:function(e,t,a){"use strict";var n=a("cfd7"),s=a.n(n);s.a},3608:function(e,t,a){"use strict";var n=a("1e90"),s=a.n(n);s.a},"3a56":function(e,t,a){},"46ca":function(e,t,a){"use strict";var n=a("85e2"),s=a.n(n);s.a},4888:function(e,t,a){"use strict";var n=a("3a56"),s=a.n(n);s.a},"4b9b":function(e,t,a){},"514c":function(e,t,a){},"518e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i={name:"app"},o=i,l=(a("5c0b"),a("2877")),c=Object(l["a"])(o,s,r,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"show-case"}},[a("div",{staticClass:"card_container"},[e._l(e.allInvoices,(function(t){return a("CardInvoice",{key:t.policy_group_number,attrs:{detailPayment:t,payNowAction:e.payButton,title:"XXXX XXXX"},on:{onShowInvoiceProduct:e.showDetailSelectedProduct,onShowPaymentHistory:e.showPaymentHistory}})})),a("BaseModal",{attrs:{modalShow:e.showModal},on:{modalClose:e.hideModal}},["DETAIL_PRODUCT"===e.showModalType&&e.productsDetails.list?[a("InvoiceDetails",{attrs:{productsDetails:e.productsDetails.list,paymentFee:e.productsDetails.paymentFee}})]:[a("BaseRuler",{attrs:{range:12}}),a("br"),a("br"),a("BaseTable")]],2),a("br"),a("br"),a("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[a("BaseIconProductAndPlan",{attrs:{product:"life",plan:"bronze"}}),a("BaseIconProductAndPlan",{attrs:{product:"safe",plan:"gold",size:"medium"}}),a("BaseIconProductAndPlan",{attrs:{product:"strong",plan:"silver"}})],1),a("br"),a("br")],2)])},m=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon-container",class:[e.product].concat(e.iconSizeClasses)},[a("img",{staticClass:"icon-product",attrs:{src:e.getProductImg}}),a("img",{staticClass:"icon-plan",attrs:{src:e.getPlanImg}})])},y=[],f={name:"BaseIconProductAndPlan",data:function(){return{productIcon:{safe:"https://superyou.co.id/img/icons/prod-umbrella.svg",life:"https://superyou.co.id/img/icons/prod-heart.svg",strong:"https://superyou.co.id/img/icons/prod-dumbell.svg"},planIcon:{gold:"https://superyou.co.id/img/icons/badge-gold.svg",silver:"https://superyou.co.id/img/icons/badge-silver.svg",bronze:"https://superyou.co.id/img/icons/badge-bronze.svg"}}},props:{product:{type:String,default:"safe"},plan:{type:String,default:"gold"},size:{type:String,default:"medium"}},computed:{getProductImg:function(){return this.productIcon[this.product]},getPlanImg:function(){return this.planIcon[this.plan]},iconSizeClasses:function(){return{small:"small"===this.size,medium:"medium"===this.size,large:"large"===this.size}}}},b=f,v=(a("b11d"),Object(l["a"])(b,h,y,!1,null,null,null)),_=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("base-card",{attrs:{"header-style":e.cardStyles.header}},[a("div",{staticClass:"card-header-wrapper",attrs:{slot:"card-header"},slot:"card-header"},[a("h3",[e._v(e._s(e.title))]),a("h5",{staticClass:"card-header-wrapper__see-products",on:{click:e.onShowProductDetail}},[e._v("Lihat Produk")])]),a("div",{attrs:{slot:"card-body"},slot:"card-body"},[a("InvoiceBody",{attrs:{details:e.detailPayment},on:{handleInvoiceDetail:e.onShowInvoiceDetail}},[a("baseChip",{attrs:{slot:"payment-status",type:e.detailPayment.status},slot:"payment-status"},[a("span",{staticClass:"text"},[e._v(e._s(e.detailPayment.status_message))])]),a("baseButton",{attrs:{slot:"payment-button","btn-text":"BAYAR SEKARANG",isDisabled:e.isActionDisabled},on:{onClick:e.handleClickCTA},slot:"payment-button"})],1)],1)])},C=[],P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su_card"},[a("div",{staticClass:"su_card-header",style:[e.headerStyle]},[e._t("card-header",[a("h3",[e._v("Card Header")])])],2),a("div",{staticClass:"su_card-body",style:[e.bodyStyle]},[e._t("card-body",[e._v("card body")])],2)])},S=[],w={name:"BaseCard",props:{headerStyle:{type:Object,default:function(){return{backgroundColor:"#00aaae"}}},bodyStyle:{type:Object,default:function(){return{backgroundColor:"#fff"}}}}},k=w,x=(a("6fb8"),Object(l["a"])(k,P,S,!1,null,"2bfbd4af",null)),I=x.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"outline arrow",class:{size:e.size,disabled:e.isDisabled},attrs:{id:"su_btn",disabled:e.isDisabled},on:{click:e.handleClick}},[e._v(e._s(e.btnText))])},D=[],M={props:{btnText:{type:String,default:"BUTTON"},size:{type:String},onClick:{type:Function},isDisabled:{type:Boolean,default:!1}},methods:{handleClick:function(){this.$emit("onClick")}}},R=M,N=(a("8c82"),Object(l["a"])(R,B,D,!1,null,null,null)),E=N.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.type,style:e.inlineStyles,attrs:{id:"chip"}},[e._t("icon-left"),e._t("default"),e._t("icon-right")],2)},A=[],O={name:"BaseChip",props:{type:{type:String,default:"default"},inlineStyles:{type:[Object,String]}}},T=O,j=(a("88e6"),Object(l["a"])(T,F,A,!1,null,"5582b7bc",null)),$=j.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su_invoice-body"},[a("div",{staticClass:"payment-last"},[a("p",{staticClass:"title"},[e._v("Tanggal Pembayaran Terakhir")]),a("p",{staticClass:"body"},[e._v(e._s(e.details.lastPayment))])]),a("div",{staticClass:"payment-next"},[a("p",{staticClass:"title"},[e._v("Tanggal Pembayaran Berikutnya")]),a("p",{staticClass:"body"},[e._v(e._s(e.details.nextPayment))])]),a("div",{staticClass:"payment-status"},[e._t("payment-status",[a("div",[e._v(e._s(e.details.status))])])],2),a("div",{staticClass:"payment-total"},[a("p",{staticClass:"title"},[e._v("Jumlah Pembayaran")]),a("p",{staticClass:"body"},[e._v(e._s(e.details.total))])]),a("div",{staticClass:"payment-method"},[a("p",{staticClass:"title"},[e._v("Metode Pembayaran")]),a("p",{staticClass:"body"},[e._v(e._s(e.details.method))])]),a("div",{staticClass:"payment-term"},[a("p",{staticClass:"title"},[e._v("Mode Pembayaran")]),a("p",{staticClass:"body"},[e._v(e._s(e.details.mode))])]),a("div",{staticClass:"payment-detail"},[a("p",{staticClass:"body dropdown-detail",on:{click:e.onClickInvoiceDetail}},[e._v(" History Pembayaran "),a("img",{staticClass:"dropdown-detail-arrow",class:{active:e.showInvoiceDetail},attrs:{src:"https://superyou.co.id/img/icons/caret-down-darkblue.svg"}})])]),a("div",{staticClass:"payment-button"},[e._t("payment-button",[a("button",[e._v("Bayar Sekarang")])])],2)])},z=[],V={name:"invoiceBody",props:{details:{type:Object,required:!0},showModal:{type:Boolean,default:!1}},data:function(){return{showInvoiceDetail:!1}},methods:{onClickInvoiceDetail:function(){this.showInvoiceDetail=!0,this.$emit("handleInvoiceDetail","history_payment")}},computed:{paddingModal:function(){var e=this.showInvoiceDetail?"5px 10px":"15px";return e}}},J=V,Y=(a("1922"),Object(l["a"])(J,L,z,!1,null,"7c140c84",null)),H=Y.exports,q=[{id:1,active:!0,title:"Pembayaran ke 3",details:"<p>Pembayaran Terakhir</p>"},{id:2,active:!1,title:"Pembayaran ke 2",details:"<p>Pembayaran Ke Dua</p>"},{id:3,active:!1,title:"Pembayaran ke 1",details:"<p>Pembayaran Ke Pertama</p>"}],G={name:"CardInvoice",props:{detailPayment:{type:Object,required:!0},payNowAction:{type:Function},title:{type:String,default:""}},components:{BaseCard:I,BaseButton:E,BaseChip:$,InvoiceBody:H},computed:{cardStyles:function(){return{header:{backgroundColor:"#00aaae",color:"#fff"}}},isActionDisabled:function(){return!this.detailPayment||"waiting"!==this.detailPayment.status}},methods:{handleClickCTA:function(){this.payNowAction()},onShowInvoiceDetail:function(){this.$emit("onShowPaymentHistory","hola")},onShowProductDetail:function(){this.$emit("onShowInvoiceProduct",this.detailPayment.invoices,this.detailPayment.fee)}},mounted:function(){this.accordionContent=q}},K=G,X=(a("4888"),Object(l["a"])(K,g,C,!1,null,"368eac22",null)),U=X.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su_table"},[a("table",{staticClass:"table-auto"},[a("thead",[a("tr",e._l(e.thead,(function(t){return a("th",{key:t.field,staticClass:"px-4 py-4"},[e._v(e._s(t.label))])})),0)]),a("tbody",e._l(e.tdata,(function(t,n){return a("tr",{key:""+n+t.due_date},e._l(e.tdataKey,(function(n){return a("td",{key:n,staticClass:"border px-4 py-4",class:n},[e._v(e._s(t[n]))])})),0)})),0)])])},Z=[],Q=(a("b64b"),{name:"BaseTable",props:{thead:{type:Array,default:function(){return[{label:"No. Invoice",field:"invoice_number"},{label:"Pembayaran",field:"payment_term"},{label:"Jatuh Tempo",field:"due_date"},{label:"Tanggal Bayar",field:"paid_date"},{label:"Metode Bayar",field:"payment_method"},{label:"Total",field:"total"},{label:"Status",field:"status"}]}},tdata:{type:Array,default:function(){return[{invoice_number:"1234-06",payment_term:6,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 115.000",status:"Berhasil"},{invoice_number:"1234-05",payment_term:5,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 80.000",status:"Menunggu Pembayaran"},{invoice_number:"1234-04",payment_term:4,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 80.000",status:"Menunggu Pembayaran"},{invoice_number:"1234-03",payment_term:3,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 80.000",status:"Menunggu Pembayaran"},{invoice_number:"1234-02",payment_term:2,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 80.000",status:"Menunggu Pembayaran"},{invoice_number:"1234-01",payment_term:1,due_date:"dd/mm/yy",paid_date:"dd/mm/yy",payment_method:"Visa Card",total:"Rp 80.000",status:"Menunggu Pembayaran"}]}}},computed:{tdataKey:function(){return this.tdata?Object.keys(this.tdata[0]):[]}}}),ee=Q,te=(a("bca3"),Object(l["a"])(ee,W,Z,!1,null,null,null)),ae=te.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su_ruler"},e._l(e.range,(function(t,n){return a("div",{key:"ruler-item"+t,staticClass:"su_ruler__item",class:{active:e.activeRange>n}},[e._v(e._s(t))])})),0)},se=[],re=(a("a9e3"),{name:"BaseRuler",props:{range:{type:Number,default:12},activeRange:{type:Number,default:3}}}),ie=re,oe=(a("f583"),Object(l["a"])(ie,ne,se,!1,null,null,null)),le=oe.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade-slowly"}},[e.modalShow?a("div",{staticClass:"su_modal"},[a("span",{staticClass:"close",attrs:{href:"#"},on:{click:e.onCloseModal}}),a("div",{staticClass:"su_modal__overlay",on:{click:e.onCloseModal}}),a("div",{staticClass:"su_modal__container-content",style:e.modalContentCss},[e._t("default")],2)]):e._e()])},ue=[],de={name:"BaseModal",props:{modalShow:{type:Boolean,default:!1},width:{type:[String]},height:{type:[String]},maxHeight:{type:[String]},padding:{type:[String]}},methods:{onCloseModal:function(){this.$emit("modalClose")}},computed:{modalContentCss:function(){return{width:this.width?this.width:"70%",height:this.height?this.height:"auto",padding:this.padding?this.padding:"15px",maxHeight:this.maxHeight?this.maxHeight:"100%"}}}},pe=de,me=(a("46ca"),Object(l["a"])(pe,ce,ue,!1,null,null,null)),he=me.exports,ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"invoice-detail-wrapper"},[e._l(e.productsDetails,(function(e){return a("InvoiceDetail",{key:e.id,attrs:{datas:e}})})),a("div",{staticClass:"invoice-summary"},[a("div",{staticClass:"invoice-summary__wrapper"},[a("h2",[e._v("Payment Fee")]),a("span",[e._v(e._s(e.amountFee))])])])],2)},fe=[],be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"invoice-detail"},[a("div",{staticClass:"detail-left"},[a("div",{staticClass:"product-icon",staticStyle:{width:"70px"}},[a("BaseIconProductAndPlan",{attrs:{product:e.getIconProduct,plan:e.getBadgeType}})],1),a("div",{staticClass:"product-basic-rider-name"},[a("ProductCompletedName",{attrs:{details:e.allProductNameAndPolicyNumber}})],1),a("a",{staticClass:"see-product-detail",attrs:{href:"/dashboard/e-policy/"+e.datas.productId}},[e._v("Detail Produk")])]),a("div",{staticClass:"detail-right"},[a("span",{staticClass:"price",class:e.noRiders},[a("span",[e._v(e._s(e.datas.price))])]),e.datas.riders&&e.datas.riders.length?e._l(e.datas.riders,(function(t){return a("span",{key:t.price,staticClass:"price"},[a("span",[e._v(e._s(t.price))])])})):e._e()],2)])},ve=[],_e=(a("caad"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"product-completed-name",class:e.noRiders},[a("h2",{staticClass:"basic-product"},[e._v(e._s(e.details.name)+" - "+e._s(e.details.plan))]),e.details.riders?e._l(e.details.riders,(function(t,n){return a("div",{key:"rider"+n,staticClass:"rider-wrapper"},[a("h2",[e._v(e._s(t.name))]),a("BaseChip",{attrs:{inlineStyles:e.chipCustomStyle,type:"outline"}},[e._v("Add On")])],1)})):e._e(),a("p",{staticClass:"policy-number",class:e.noPolicyNumber},[e._v(e._s(e.details.policyNumber))])],2)}),ge=[],Ce={name:"ProductCompletedName",components:{BaseChip:$},props:{details:{type:Object,default:function(){return{name:"Super Safe Protection",plan:"Gold",riders:[],policyNumber:12341234}}}},computed:{chipCustomStyle:function(){return"width: 62px;align-self: center;margin-left: 7px;height: 18px;padding: 2px 4px;"},noRiders:function(){return null===this.details.riders||0===this.details.riders.length?"single":""},noPolicyNumber:function(){return null===this.details.policyNumber?"empty":""}}},Pe=Ce,Se=(a("2550"),Object(l["a"])(Pe,_e,ge,!1,null,"1c4199c8",null)),we=Se.exports,ke={name:"InvoiceDetail",components:{ProductCompletedName:we,BaseIconProductAndPlan:_},props:{datas:{type:Object,default:function(){return{}}}},computed:{allProductNameAndPolicyNumber:function(){return{name:this.datas.product,plan:this.datas.plan,riders:this.datas.riders,policyNumber:this.datas.policyNumber}},getIconProduct:function(){if(this.datas.product){var e=this.datas.product.toLowerCase();return e.includes("safe")?"safe":e.includes("life")?"life":e.includes("strong")?"strong":null}return null},getBadgeType:function(){return this.datas?this.datas.plan.toLowerCase():""},noRiders:function(){return null===this.datas.riders||0===this.datas.riders.length?"single":null}}},xe=ke,Ie=(a("b4c9"),Object(l["a"])(xe,be,ve,!1,null,"468e3584",null)),Be=Ie.exports,De={name:"InvoiceDetails",components:{InvoiceDetail:Be},props:{productsDetails:{type:Array,required:!0},paymentFee:{type:String}},computed:{amountFee:function(){return this.paymentFee&&"Rp 0"===this.paymentFee?"-":this.paymentFee}}},Me=De,Re=(a("3608"),Object(l["a"])(Me,ye,fe,!1,null,null,null)),Ne=Re.exports,Ee=a("93ab"),Fe={lastPayment:"3 January 2018",nextPayment:"3 Agustus 2018",status:"waiting",status_message:"Pembayaran Berhasil",total:"Rp 57.500",fee:"Rp 5.000",mode:"Bulanan",method:"Debit Card",invoices:[{product:"Super Safe Protection",productId:"1",plan:"Gold",policyNumber:1919000112,price:"Rp 1.280.900",fee:"5.000",riders:[{name:"Super Motor",price:"Rp 9.000"},{name:"Super Holiday",price:"Rp 12.000"}]},{product:"Super Life Protection",productId:"2",plan:"Silver",policyNumber:null,price:"Rp 22.100",riders:null},{product:"Super Strong Protection",productId:"3",plan:"Bronze",policyNumber:1919000114,price:"Rp 22.100",riders:null}],policy_group_number:"3191783",summary_token:"b6b7a3b0768ed2d2601ac37fcbfbf4560f4b2bcc",payment_method_id:22},Ae=function(){return alert("from paynow")},Oe={name:"ShowCase",data:function(){return{paymentDetail:null,payButton:null,showModal:!1,showModalType:"",allInvoices:null,selectedInvoiceProduct:null,productsDetails:{list:null,paymentFee:null}}},components:{BaseIconProductAndPlan:_,CardInvoice:U,BaseTable:ae,BaseRuler:le,BaseModal:he,InvoiceDetails:Ne},methods:{handleModal:function(){this.showModal=!this.showModal},abcdtest:function(){console.log("asdasd")},showDetailSelectedProduct:function(e,t){this.productsDetails.list=e,this.productsDetails.paymentFee=t,this.showModalType="DETAIL_PRODUCT",this.showModal=!0},showPaymentHistory:function(e){e&&(this.showModalType="PAYMENT_HISTORY",this.showModal=!0)},hideModal:function(){this.showModal=!1}},computed:{cardStyles:function(){return{header:{backgroundColor:"#00aaae",color:"#fff"}}}},created:function(){this.paymentDetail=Fe,this.payButton=Ae,this.allInvoices=Ee}},Te=Oe,je=(a("a669"),Object(l["a"])(Te,p,m,!1,null,null,null)),$e=je.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"form-container"}},[a("BaseStepper",{attrs:{dataSteps:e.dataSteps}}),a("h1",[e._v("Form")]),a("form",[a("base-input",{attrs:{value:e.userName,label:"Nama Lengkap",name:"userName",note:"Note: Nama Lengkap",char:"^[A-Za-z ]+$","min-length":6,required:""},on:{handleChange:e.handleInputChange}}),a("br"),a("base-input",{attrs:{value:e.citizenId,label:"Nomor Kartu Indentitas",name:"citizenId",inputType:"tel",char:"^[0-9]*$","max-length":16,required:""},on:{handleChange:e.handleInputChange}}),a("br"),a("base-input",{attrs:{value:e.insuredName,label:"Email",name:"insuredName",inputType:"email",required:""},on:{handleChange:e.handleInputChange}}),a("br"),a("base-select",{attrs:{name:"relations",label:"Hubungan",options:e.dataSelectOpt},on:{handleChange:e.handleInputChange}}),a("br"),a("base-checkbox-and-radio",{attrs:{name:"gender",axis:"row",inputType:"checkbox"},on:{handleChange:e.handleInputChange}}),a("br"),a("base-input-date",{attrs:{label:"Tanggal Lahir",name:"dob",value:e.dob,"min-age":17,"max-age":40},on:{input:e.handleInputChange}})],1)],1)},ze=[],Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su-input",class:{"with-note":e.note,"input-error":e.isError}},[a("div",{staticClass:"su-input_control",class:{"is-focused":e.isFocused}},[a("label",{staticClass:"su-input_label"},[e._v(" "+e._s(e.label)+" "),a("input",{staticClass:"su-input_text",attrs:{type:e.inputType,name:e.name,autocomplete:"off"},domProps:{value:e.value},on:{focus:e.onInputFocus,blur:e.onInputBlur,beforeinput:function(t){return e.expectedCharacters(t)},input:function(t){return e.onInputChange(t)}}}),e.icon?a("span",{staticClass:"su-input_icon"},[a("img",{attrs:{src:e.icon,alt:"input icon"}})]):e._e()]),e.isError?a("span",{staticClass:"su-input_error message"},[e._v(e._s(e.errorMessage))]):a("span",{staticClass:"su-input_note message"},[e._v(e._s(e.note))])])])},Je=[],Ye=(a("4d63"),a("ac1f"),a("25f0"),{name:"BaseInput",data:function(){return{isFocused:!1,isError:!1,isReadOnly:!1,errorMessage:null}},props:{value:{type:String},name:String,inputType:{type:String,default:"text"},label:{type:String,default:null},note:{type:String,default:null},char:{type:String,default:null},maxLength:{type:Number,default:null},minLength:{type:Number,default:0},required:{type:Boolean,default:!1},icon:{type:String,default:null}},methods:{onInputBlur:function(){if(this.isFocused=!1,this.required&&(null===this.value||0===this.value.length))return this.errorMessage="".concat(this.label," wajib di isi"),this.isError=!0,this.isError;this.checkMinLength()?(this.errorMessage="Minimal ".concat(this.minLength," karakter"),this.isError=!0):(this.errorMessage="",this.isError=!1),"email"===this.inputType&&this.validateEmail(this.value)},onInputFocus:function(){this.isFocused=!0},onInputChange:function(e){this.$emit("handleChange",e.target.value,e.target.getAttribute("name"))},expectedCharacters:function(e){return this.checkMaxLength(e),this.checkCharRegexMatch(e),!0},checkMaxLength:function(e){if(this.maxLength&&e.target.value.length>=this.maxLength&&"deleteContentBackward"!==e.inputType)return e.preventDefault(),!1},checkMinLength:function(){var e=this.value?this.value.length:0;return this.minLength>e},checkCharRegexMatch:function(e){if(this.char){var t=new RegExp(this.char);return!(!t.test(e.data)&&"deleteContentBackward"!==e.inputType)||(e.preventDefault(),!1)}},validateEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if(console.log(t.test(e)),t.test(e))return this.isError=!1,this.errorMessage="",!0;this.isError=!0,this.errorMessage="Format email tidak valid"}}}),He=Ye,qe=(a("afa6"),Object(l["a"])(He,Ve,Je,!1,null,"7c3612c4",null)),Ge=qe.exports,Ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su-stepper-wrapper"},[a("div",{attrs:{id:"su-stepper"}},[a("div",{staticClass:"su-progress"},[a("div",{staticClass:"bar",style:{width:e.barWidth+"%"}})]),e._l(e.dataSteps,(function(t,n){return a("div",{key:t.info,staticClass:"su-step"},[a("div",{staticClass:"rounded",class:{passed:e.isStepPassed(n)}},[e._v(" "+e._s(t.title)+" ")]),a("div",{staticClass:"info"},[e._v(e._s(t.info))])])}))],2)])},Xe=[],Ue={name:"BaseStepper",props:{dataSteps:{type:Array,default:function(){return[{title:"1",info:"Info 1"},{title:"2",info:"Info 2"},{title:"3",info:"Info 3"},{title:"4",info:"Info 4"}]}},currentStep:{type:Number,default:1}},methods:{isStepPassed:function(e){return e<this.currentStep}},computed:{barWidth:function(){if(0===this.currentStep||1===this.currentStep)return 0;var e=this.dataSteps.length-1,t=this.currentStep-1,a=1/e*100,n=a*t;return n}}},We=Ue,Ze=(a("78f0"),Object(l["a"])(We,Ke,Xe,!1,null,"3be8f0d3",null)),Qe=Ze.exports,et=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"input-error":e.isError},attrs:{id:"su-base-select"}},[a("label",{class:{active:e.isFocused}},[e._v(e._s(e.label))]),a("v-select",{staticClass:"base-select",attrs:{options:e.options,searchable:!1,selectable:function(e){return"INA"!==e.val},"select-on-key-codes":[8]},on:{input:e.onSelectOption,"search:focus":e.onFocus,"search:blur":e.onBlur}}),e.isError?a("span",{staticClass:"su-input_error message"},[e._v(e._s(e.errorMessage))]):e._e()],1)},tt=[],at=(a("b0c0"),a("4a7a")),nt=a.n(at),st={name:"BaseSelect",data:function(){return{selectedData:null,isFocused:!1,isError:!1,errorMessage:""}},components:{vSelect:nt.a},props:{options:{type:Array,default:function(){return[{label:"Indonesia",val:"INA"},{label:"Canada",val:"CA"},{label:"Australia",val:"AUS"}]}},label:{type:String,default:"Label"},name:{type:String,default:null}},methods:{onSelectOption:function(e){e&&(this.selectedData=e)},onFocus:function(){this.isFocused=!0},onBlur:function(){return this.isFocused=!1,null===this.selectedData?(this.isError=!0,this.errorMessage="Wajib di isi",this.isError):(this.isError=!1,this.errorMessage="",this.isError)}},watch:{selectedData:function(e){this.$emit("handleChange",e,this.name)}}},rt=st,it=(a("9666"),Object(l["a"])(rt,et,tt,!1,null,null,null)),ot=it.exports,lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su-input_checkboxes",class:e.axis},[a("label",{staticClass:"main"},[e._v("Jenis Kelamin")]),e._l(e.options,(function(t){return a("div",{key:t.val,staticClass:"checkbox-wrapper"},["checkbox"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedData,expression:"checkedData"}],attrs:{id:t.name,name:e.name,type:"checkbox"},domProps:{value:t.val,checked:Array.isArray(e.checkedData)?e._i(e.checkedData,t.val)>-1:e.checkedData},on:{change:function(a){var n=e.checkedData,s=a.target,r=!!s.checked;if(Array.isArray(n)){var i=t.val,o=e._i(n,i);s.checked?o<0&&(e.checkedData=n.concat([i])):o>-1&&(e.checkedData=n.slice(0,o).concat(n.slice(o+1)))}else e.checkedData=r}}}):"radio"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedData,expression:"checkedData"}],attrs:{id:t.name,name:e.name,type:"radio"},domProps:{value:t.val,checked:e._q(e.checkedData,t.val)},on:{change:function(a){e.checkedData=t.val}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedData,expression:"checkedData"}],attrs:{id:t.name,name:e.name,type:e.inputType},domProps:{value:t.val,value:e.checkedData},on:{input:function(t){t.target.composing||(e.checkedData=t.target.value)}}}),a("label",{attrs:{for:t.name}},[e._v(e._s(t.name))])])})),e.isError?a("span",{staticClass:"su-input_error message"},[e._v(e._s(e.errorMessage))]):e._e()],2)},ct=[],ut={name:"BaseCheckboxAndRadio",data:function(){return{checkedData:[],isError:!1,errorMessage:""}},props:{options:{type:Array,default:function(){return[{val:"male",name:"Laki-laki"},{val:"female",name:"Perempuan"}]}},axis:{type:String,default:"column"},name:{type:String,default:null},inputType:{type:String,default:"checkbox"}},watch:{checkedData:function(e){this.$emit("handleChange",e,this.name)}}},dt=ut,pt=(a("eab7"),Object(l["a"])(dt,lt,ct,!1,null,"226967cf",null)),mt=pt.exports,ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"su-date-wrapper"},[a("label",{class:{"date-focused":e.isFocused,"is-error":e.isError}},[e._v(e._s(e.label))]),a("div",{staticClass:"su-date",class:{"date-focused":e.isFocused,"is-error":e.isError},on:{"!keyup":function(t){return e.updateValue(t)},"!focus":function(t){return e.onFocused(t)},"!blur":function(t){return e.onBlured(t)}}},[e.showDay?a("input",{directives:[{name:"model",rawName:"v-model",value:e.day,expression:"day"}],ref:"day",staticClass:"su-date__input su-date__input--day",attrs:{type:"tel",placeholder:"dd"},domProps:{value:e.day},on:{input:[function(t){t.target.composing||(e.day=t.target.value)},e.updateDay],blur:function(t){return e.eachBlur("day",2)}}}):e._e(),e.showDay&&e.showMonth?a("span",{staticClass:"su-date__divider"},[e._v("/")]):e._e(),e.showMonth?a("input",{directives:[{name:"model",rawName:"v-model",value:e.month,expression:"month"}],ref:"month",staticClass:"su-date__input su-date__input--month",attrs:{type:"tel",placeholder:"mm"},domProps:{value:e.month},on:{input:[function(t){t.target.composing||(e.month=t.target.value)},e.updateMonth],blur:function(t){return e.eachBlur("month",2)},focus:function(t){return e.eachFocus("month")}}}):e._e(),e.showYear&&(e.showDay||e.showMonth)?a("span",{staticClass:"su-date__divider"},[e._v("/")]):e._e(),e.showYear?a("input",{directives:[{name:"model",rawName:"v-model",value:e.year,expression:"year"}],ref:"year",staticClass:"su-date__input su-date__input--year",attrs:{type:"tel",placeholder:"yyyy"},domProps:{value:e.year},on:{input:[function(t){t.target.composing||(e.year=t.target.value)},e.updateYear],blur:function(t){return e.eachBlur("year",4)},focus:function(t){return e.eachFocus("year")},beforeinput:e.beforeInputYear}}):e._e()]),e.isError?a("span",{staticClass:"su-input_error message"},[e._v(e._s(e.errorMessage))]):a("span",{staticClass:"su-input_note message"},[e._v(e._s(e.note))])])},yt=[],ft=(a("99af"),a("0d03"),a("9129"),a("e25e"),a("4d90"),{name:"su-date",props:{value:{type:[Number,String],required:!0},showDay:{type:Boolean,default:!0},showMonth:{type:Boolean,default:!0},showYear:{type:Boolean,default:!0},note:{type:String},minAge:{type:Number},maxAge:{type:Number},label:{type:String},name:{type:String}},data:function(){return{day:"".concat(this.value?new Date(this.value).getDate():""),month:"".concat(this.value?new Date(this.value).getMonth()+1:""),year:"".concat(this.value?new Date(this.value).getFullYear():""),isFocused:!1,isError:!1,errorMessage:"",dateFlag:{day:0,month:0,year:0}}},watch:{year:function(e,t){e>9999&&(this.year=t)},submittedDate:function(){if(console.log("data change"),this.isError=!1,this.errorMessage="",this.dateFlag.day&&this.dateFlag.month&&this.dateFlag.year){if(!this.checkValidDate())return this.isError=!0,this.errorMessage="Tanggal lahir tidak valid",!1;this.minAge&&!this.validateMinMaxYear(this.minAge)&&(this.isError=!0,this.errorMessage="Umur harus ".concat(17," tahun ke atas")),this.maxAge&&this.validateMinMaxYear(this.maxAge)&&(this.isError=!0,this.errorMessage="Umur harus dibawah ".concat(this.maxAge," tahun ke atas"))}}},methods:{updateDay:function(){this.day&&this.day.length>=2&&this.$refs.month.select(),this.day>31&&(this.day="31"),!this.day.length||parseInt(this.day,10)<4||(this.showMonth?this.$refs.month.select():this.showYear&&this.$refs.year.select())},updateMonth:function(){this.month&&this.month.length>=2&&this.$refs.year.select(),this.month>12&&(this.month="12"),!this.month.length||parseInt(this.month,10)<2||this.showYear&&this.$refs.year.select()},updateYear:function(){!["1","2"].includes(this.year[0])&&this.year.length<2&&(this.year="")},updateValue:function(){var e=Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day));Number.isNaN(e)||this.$emit("input",e,this.name)},checkValidDate:function(){var e=Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day));return!(2!==this.day.length||2!==this.month.length||4!==this.year.length||!e)},validateMinMaxYear:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=(new Date).getMonth()+1,a=(new Date).getFullYear()-e,n=(new Date).getDate(),s="".concat(t,"/").concat(n,"/").concat(a),r=new Date(s).getTime();return console.log(r),r>this.submittedDate},eachBlur:function(e,t){this[e].length&&(this[e]=this[e].padStart(t,0),this.dateFlag[e]+=1)},eachFocus:function(e){"year"===e?0===this.month.length&&this.$refs.month.select():"month"===e&&0===this.day.length&&0===this.month.length&&(this.$refs.day.select(),this.errorMessage="",this.isError=!1)},onFocused:function(){this.isFocused=!0},onBlured:function(){this.isFocused=!1},beforeInputYear:function(e){this.year.length>=4&&"deleteContentBackward"!==e.inputType&&e.preventDefault()}},computed:{submittedDate:function(){return Date.parse("".concat(this.year.padStart(4,0),"-").concat(this.month,"-").concat(this.day))}}}),bt=ft,vt=(a("daff"),Object(l["a"])(bt,ht,yt,!1,null,null,null)),_t=vt.exports,gt={name:"FormComponets",data:function(){return{userName:null,citizenId:null,insuredName:null,relations:null,gender:null,dob:"",email:{val:null,isError:!1,errorMsg:null,min:4},dataSteps:[{title:"1",info:"Pilih Produk"},{title:"2",info:"Isi Data"},{title:"3",info:"Review"},{title:"4",info:"Pembayaran"}],dataSelectOpt:[{label:"Saya Sendiri",val:"self"},{label:"Ayah Kandung",val:"father"},{label:"Ibu Kandung",val:"mother"},{label:"Saudara Kandung",val:"brother"}]}},components:{BaseInput:Ge,BaseStepper:Qe,BaseSelect:ot,BaseCheckboxAndRadio:mt,BaseInputDate:_t},methods:{handleInputChange:function(e,t){this[t]=e},testaja:function(e,t){console.log("test aja",e,t)}}},Ct=gt,Pt=(a("5d7a"),Object(l["a"])(Ct,Le,ze,!1,null,"33e79510",null)),St=Pt.exports;n["a"].use(d["a"]);var wt=new d["a"]({mode:"history",routes:[{path:"/components",name:"components",component:$e},{path:"/form-components",name:"formComponents",component:St}]}),kt=wt;n["a"].config.productionTip=!1,new n["a"]({router:kt,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"5d7a":function(e,t,a){"use strict";var n=a("518e"),s=a.n(n);s.a},"66e0":function(e,t,a){},"6fb8":function(e,t,a){"use strict";var n=a("86cc"),s=a.n(n);s.a},7304:function(e,t,a){},"78f0":function(e,t,a){"use strict";var n=a("22f4"),s=a.n(n);s.a},"85e2":function(e,t,a){},"86cc":function(e,t,a){},"88e6":function(e,t,a){"use strict";var n=a("9cae"),s=a.n(n);s.a},"8c82":function(e,t,a){"use strict";var n=a("66e0"),s=a.n(n);s.a},"93ab":function(e){e.exports=JSON.parse('[{"lastPayment":"10 January 2020","nextPayment":"10 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 67.000","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Safe Protection","productId":736,"plan":"Bronze","policyNumber":"3006008457","price":"Rp 67.000","riders":[{"name":"Super Motor Protection","price":"Rp 9.500"},{"name":"Super Holiday Protection","price":"Rp 21.000"}]}],"policy_group_number":"3191500","summary_token":"cc4b2f7171620344a6b2fdd5eed293ffea4c1b25","payment_method_id":1,"invoice_no":"319150020200210-85"},{"lastPayment":"10 January 2020","nextPayment":"10 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 115.000","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Safe Protection","productId":720,"plan":"Silver","policyNumber":"3006008392","price":"Rp 115.000","riders":[{"name":"Super Motor Protection","price":"Rp 24.000"}]}],"policy_group_number":"3191484","summary_token":"8416c1fa3f6aef0fef2a65436f9a5da6befd73e4","payment_method_id":1,"invoice_no":"319148420200210-69"},{"lastPayment":"10 January 2020","nextPayment":"10 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 334.000","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Safe Protection","productId":719,"plan":"Gold","policyNumber":"3006008384","price":"Rp 334.000","riders":[{"name":"Super Motor Protection","price":"Rp 47.500"},{"name":"Super Holiday Protection","price":"Rp 105.000"}]}],"policy_group_number":"3191483","summary_token":"17523fd4b7f24616426952fa9ede96b3e0f63067","payment_method_id":1,"invoice_no":"319148320200210-68"},{"lastPayment":"10 January 2020","nextPayment":"10 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 334.000","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Safe Protection","productId":714,"plan":"Gold","policyNumber":null,"price":"Rp 334.000","riders":[{"name":"Super Motor Protection","price":"Rp 47.500"},{"name":"Super Holiday Protection","price":"Rp 105.000"}]}],"policy_group_number":"3191473","summary_token":"c94cfee284572d08b89a29cf48f78202bbe46308","payment_method_id":1,"invoice_no":"319147320200210-57"},{"lastPayment":"24 October 2019","nextPayment":"25 October 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 910.000","fee":"Rp 0","mode":"Tahunan","method":"Visa Master","invoices":[{"product":"Super Life Protection","productId":615,"plan":"Gold","policyNumber":"3006007613","price":"Rp 910.000","riders":[]}],"policy_group_number":"3191375","summary_token":"2bb142e0162a38638548382ed48d22eff0929467","payment_method_id":1,"invoice_no":"319137520201025-54"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 88.800","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Strong Protection","productId":614,"plan":"Silver","policyNumber":"3006007605","price":"Rp 88.800","riders":[]}],"policy_group_number":"3191374","summary_token":"ea9852f9d05fb7c44817a7b9891a940ecedf52b0","payment_method_id":1,"invoice_no":"319137420200225-53"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 77.300","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Life Protection","productId":598,"plan":"Gold","policyNumber":"3006007532","price":"Rp 77.300","riders":[]}],"policy_group_number":"3191358","summary_token":"17e9751a3b7e9cdd71b1ebcd469511bcfacd2e79","payment_method_id":1,"invoice_no":"319135820200225-37"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 52.800","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Life Protection","productId":597,"plan":"Silver","policyNumber":"3006007524","price":"Rp 52.800","riders":[]}],"policy_group_number":"3191357","summary_token":"176ea36bd434f28eb0cc9b357c9d48f8401ab42c","payment_method_id":1,"invoice_no":"319135720200225-36"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 85.600","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Strong Protection","productId":595,"plan":"Gold","policyNumber":"3006007516","price":"Rp 85.600","riders":[]}],"policy_group_number":"3191355","summary_token":"950a2a66973efe8b0df89bc06f1ad147417f3672","payment_method_id":1,"invoice_no":"319135520200225-34"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 181.500","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Strong Protection","productId":579,"plan":"Gold","policyNumber":"3006007485","price":"Rp 181.500","riders":[]}],"policy_group_number":"3191339","summary_token":"7788e79bdcfae0e33804a1df975a2e2fe0c0c954","payment_method_id":1,"invoice_no":"319133920200225-18"},{"lastPayment":"25 January 2020","nextPayment":"25 February 2020","status":"success","status_message":"Pembayaran Berhasil","total":"Rp 115.000","fee":"Rp 0","mode":"Bulanan","method":"Visa Master","invoices":[{"product":"Super Strong Protection","productId":577,"plan":"Gold","policyNumber":"3006007451","price":"Rp 115.000","riders":[]},{"product":"Super Life Protection","productId":597,"plan":"Silver","policyNumber":"3006007524","price":"Rp 52.800","riders":[]}],"policy_group_number":"3191337","summary_token":"b43c729fe5463be5dad9a04532224f25de203734","payment_method_id":1,"invoice_no":"319133720200225-16"}]')},9666:function(e,t,a){"use strict";var n=a("d3b4"),s=a.n(n);s.a},"9c0c":function(e,t,a){},"9cae":function(e,t,a){},a669:function(e,t,a){"use strict";var n=a("00b2"),s=a.n(n);s.a},afa6:function(e,t,a){"use strict";var n=a("0124"),s=a.n(n);s.a},b11d:function(e,t,a){"use strict";var n=a("514c"),s=a.n(n);s.a},b4c9:function(e,t,a){"use strict";var n=a("de5b"),s=a.n(n);s.a},b853:function(e,t,a){},bca3:function(e,t,a){"use strict";var n=a("d35c"),s=a.n(n);s.a},cfd7:function(e,t,a){},d35c:function(e,t,a){},d3b4:function(e,t,a){},daff:function(e,t,a){"use strict";var n=a("b853"),s=a.n(n);s.a},de5b:function(e,t,a){},eab7:function(e,t,a){"use strict";var n=a("0994"),s=a.n(n);s.a},f583:function(e,t,a){"use strict";var n=a("4b9b"),s=a.n(n);s.a}});
//# sourceMappingURL=app.7293b475.js.map