(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27297c24"],{1317:function(t,s,r){},f7b1:function(t,s,r){"use strict";r.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"product-details"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row mb-3"},[s("div",{staticClass:"col-sm-4"},[s("div",{staticClass:"product-image"},[s("div",{staticClass:"view hm-zoom z-depth-2",staticStyle:{cursor:"pointer"}},[s("img",{staticClass:"img-fluid rounded",staticStyle:{"max-height":"700px","max-width":"127.135px",margin:"auto"},attrs:{src:t.product.productImage,alt:t.product.productName}})]),s("div",{staticStyle:{"margin-top":"15px"}},[s("ul",{staticClass:"list-group mb-3"},[s("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[t._m(0),s("span",{staticClass:"text-muted",staticStyle:{color:"crimson !important"}},[t._v("₹ "+t._s(t.product.productPrice))])]),s("li",{staticClass:"list-group-item d-flex justify-content-between lh-condensed"},[t._m(1),s("span",{staticClass:"text-muted",staticStyle:{color:"crimson !important"}},[t._v(t._s(t.product.productSeller))])])]),s("button",{staticClass:"btn btn-primary",on:{click:function(s){return t.addToCart(t.product)}}},[t._v(" Add to Cart ")])])])]),s("div",{staticClass:"col-sm-8"},[s("div",{staticClass:"product-detail"},[s("h5",{staticClass:"product-head"},[t._v("Product Details")]),s("table",{staticClass:"table",staticStyle:{"max-height":"28px"},attrs:{cellspacing:"0"}},[s("tbody",[s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Product Name")]),s("td",[t._v(t._s(t.product.productName))])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Product Description")]),s("td",[t._v(t._s(t.product.productDescription))])]),s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Product Category")]),s("td",[t._v(t._s(t.product.productCategory))])]),t._m(2)])])])])]),t._m(3),s("div",{staticClass:"row"},t._l(t.similarProduct,(function(t,r){return s("div",{key:r,staticClass:"col-md-3 mt-3"},[s("card-template",{attrs:{item:t}})],1)})),0)])])},c=[function(){var t=this,s=t._self._c;return s("div",[s("h6",{staticClass:"my-0"},[t._v("Product Price")])])},function(){var t=this,s=t._self._c;return s("div",[s("h6",{staticClass:"my-0"},[t._v("Product Seller")])])},function(){var t=this,s=t._self._c;return s("tr",[s("th",{attrs:{scope:"row"}},[t._v("Product Rating")]),s("td",[s("div",{staticClass:"stars-outer"},[s("div",{staticClass:"stars-inner"})])])])},function(){var t=this,s=t._self._c;return s("nav",{attrs:{"aria-label":"breadcrumb "}},[s("ol",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(" Similar Products ")])])])}],i=r("bc3a"),e=r.n(i),o=r("2f62"),d=r("0873"),l=r("6b22"),u={name:"productDetail",components:{CardTemplate:d["a"]},data(){return{product:new Object,similarProduct:[]}},methods:{getSimilarProduct(t){e.a.get(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL+"/products/similarProduct",{params:{productSeller:t}}).then(t=>{this.similarProduct=t.data}).catch(t=>{console.log(t)})},...Object(o["b"])(["ADD_CART_LOCAL"]),addToCart(t){this.ADD_CART_LOCAL(t)}},created(){e.a.get(`${Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_BASE_URL}/products/${this.$route.params.id}`).then(t=>{this.product=t.data;const s=5,r=Number(this.product.productRating)/s*100,a=10*Math.round(r/10)+"%";document.querySelector(".stars-inner").style.width=a,this.getSimilarProduct(this.product.productSeller)}).catch(t=>{console.log(t),Object(l["a"])("Error while fetching similar products","")})}},n=u,p=(r("fddc"),r("2877")),m=Object(p["a"])(n,a,c,!1,null,null,null);s["default"]=m.exports},fddc:function(t,s,r){"use strict";r("1317")}}]);
//# sourceMappingURL=chunk-27297c24.314274ca.js.map