(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],[,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return h})),n.d(t,"g",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"o",(function(){return g}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",i="SET_INGREDIENTS",c="FETCH_INGREDIENTS_FAILED",o="PURCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FETCH_ORDERS_INIT",h="FETCH_ORDERS_SUCCESS",j="FETCH_ORDERS_FAIL",b="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",O="AUTH_LOGOUT",g="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"c",(function(){return _}));var r=n(3),a=n(20),i=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.n,ingredientName:e}},o=function(){return function(e){a.a.get("/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},s=n(2),u=function(e,t){return function(n){n({type:r.k}),a.a.post("./orders.json?auth="+t,e).then((function(a){console.log(t),n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(a.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},l=function(e,t){return function(n){n({type:r.h});var i="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+i).then((function(e){var t,a=[];for(var i in e.data)a.push(Object(s.a)(Object(s.a)({},e.data[i]),{},{id:i}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},h=n(32),j=n.n(h),b=function(e,t){return{type:r.e,userId:t,idToken:e}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*e)}},O=function(e,t,n){return function(a){a({type:r.d});var i={email:e,password:t,returnSecureToken:!0},c="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBoDYJaTkoTQeVTC4_7DEtw7cAayCh-HyA";n||(c="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoDYJaTkoTQeVTC4_7DEtw7cAayCh-HyA"),j.a.post(c,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);console.log("response.data.idToken :",e.data.idToken),localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(b(e.data.idToken,e.data.localId)),a(f(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},g=function(e){return{type:r.o,path:e}},_=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(p());else{var r=localStorage.getItem("userId");e(b(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(2),a=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},i=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},function(e,t,n){e.exports={BreadBottom:"Burgeringredient_BreadBottom__3jbLU",BreadTop:"Burgeringredient_BreadTop__Y92I8",Seeds1:"Burgeringredient_Seeds1__2bLcT",Seeds2:"Burgeringredient_Seeds2__2JDOL",Meat:"Burgeringredient_Meat__3eaFn",Cheese:"Burgeringredient_Cheese__2FKpw",Salad:"Burgeringredient_Salad__tLk2n",Bacon:"Burgeringredient_Bacon__3gH6R"}},function(e,t,n){"use strict";var r=n(32),a=n.n(r).a.create({baseURL:"https://react-my-burger-e0155-default-rtdb.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2e-zY",Open:"SideDrawer_Open__iU1_i",Close:"SideDrawer_Close__2cASr",Logo:"SideDrawer_Logo__2PX3p"}},,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1qOxP",Label:"BuildControl_Label__2NmQF",Less:"BuildControl_Less__1d7Td",More:"BuildControl_More__1cgLr"}},,,function(e,t,n){"use strict";var r=n(0),a=(n(1),n(59)),i=n.n(a);t.a=function(e){return e.show?Object(r.jsx)("div",{onClick:e.clicked,className:i.a.Backdrop}):null}},function(e,t,n){"use strict";var r=n(0),a=n(6),i=n(7),c=n(9),o=n(8),s=n(1),u=n(62),d=n.n(u),l=n(12),h=n(30),j=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(h.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(r.jsx)("div",{style:{transform:this.props.show?"translateX(0)":"translateX(-100vh)",opacity:this.props.show?"1":"0"},className:d.a.Modal,children:this.props.children})]})}}]),n}(s.Component);t.a=j},,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__23dyR",Logo:"Toolbar_Logo__1o_7J",DesktopOnly:"Toolbar_DesktopOnly__eld8t"}},function(e,t,n){"use strict";var r=n(0),a=(n(1),n(42)),i=n.n(a);t.a=function(e){return Object(r.jsx)("button",{className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,disabled:e.disabled,children:e.children})}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1QxWU",active:"NavigationItem_active__3Fk_I"}},,,,function(e,t,n){e.exports={BuildControls:"BuilControls_BuildControls__3VdlS",OrderButton:"BuilControls_OrderButton__5w1fB",enable:"BuilControls_enable__1_UKU"}},function(e,t,n){e.exports={Button:"Button_Button__1JJJ_",Success:"Button_Success__dSt_m",Danger:"Button_Danger__l4a67"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=(n(1),n(63)),i=n.n(a);function c(){return Object(r.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),a=n(2),i=n(6),c=n(7),o=n(9),s=n(8),u=n(1),d=n(12),l=n(31);function h(e,t){return function(n){Object(o.a)(h,n);var u=Object(s.a)(h);function h(e){var t;return Object(i.a)(this,h),(t=u.call(this,e)).errorConfirmedHandler=function(){t.setState({error:null})},t.state={error:null},t}return Object(c.a)(h,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(d.a,{children:[Object(r.jsx)(l.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(a.a)({},this.props))]})}}]),h}(u.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(0),a=n(65),i=n(1),c=n(61),o=n.n(c),s=n(6),u=n(7),d=n(9),l=n(8),h=n(19),j=n.n(h),b=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:j.a.BreadBottom,children:" "});break;case"bread-top":e=Object(r.jsxs)("div",{className:j.a.BreadTop,children:[Object(r.jsx)("div",{className:j.a.Seeds1,children:" "}),Object(r.jsx)("div",{className:j.a.Seeds2,children:" "})]});break;case"meat":e=Object(r.jsx)("div",{className:j.a.Meat,children:" "});break;case"cheese":e=Object(r.jsx)("div",{className:j.a.Cheese,children:" "});break;case"salad":e=Object(r.jsx)("div",{className:j.a.Salad,children:" "});break;case"bacon":e=Object(r.jsx)("div",{className:j.a.Bacon,children:" "});break;default:e=null}return e}}]),n}(i.Component);t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(a.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(b,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Add Something"})),Object(r.jsxs)("div",{className:o.a.Burger,children:[Object(r.jsx)(b,{type:"bread-top"}),t,Object(r.jsx)(b,{type:"bread-bottom"})]})}},function(e,t,n){e.exports={Content:"Layout_Content__kaq-d"}},function(e,t,n){e.exports={Logo:"Logo_Logo__C5LMf"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1O4JQ"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__ybw1Q"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__1bKfX"}},,function(e,t,n){e.exports={Burger:"Burger_Burger__-vn7_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3rwIg"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1N4oj",load2:"Spinner_load2__RiodS"}},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n.n(a),c=n(28),o=n.n(c),s=(n(71),n(6)),u=n(7),d=n(9),l=n(8),h=n(5),j=n(12),b=n(55),p=n.n(b),f=n(33),O=n.n(f),g=n.p+"static/media/burger-logo.ec69c7f6.png",_=n(56),m=n.n(_);function v(e){return Object(r.jsx)("div",{className:m.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:g,alt:"MyBurger"})})}var x=n(57),y=n.n(x),k=n(37),C=n.n(k),S=n(22);function I(e){return Object(r.jsx)("li",{className:C.a.NavigationItem,children:Object(r.jsx)(S.b,{exact:e.exact,activeClassName:C.a.active,to:e.link,children:e.children})})}function T(e){return Object(r.jsxs)("ul",{className:y.a.NavigationItems,children:[Object(r.jsx)(I,{link:"/",exact:!0,children:" Burger Builder  "}),e.isAuthenticated?Object(r.jsx)(I,{link:"/orders",children:"Orders "}):null,e.isAuthenticated?Object(r.jsx)(I,{link:"/logout",children:"Logout "}):Object(r.jsx)(I,{link:"/auth",children:"Authenticate "})]})}var B=n(58),N=n.n(B),w=function(e){return Object(r.jsxs)("div",{className:N.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},D=function(e){return Object(r.jsxs)("header",{className:O.a.Toolbar,children:[Object(r.jsx)(w,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:O.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{className:O.a.DesktopOnly,children:Object(r.jsx)(T,{isAuthenticated:e.isAuth})})]})},A=n(24),L=n.n(A),R=n(30);function E(e){var t=[L.a.SideDrawer,L.a.Close];return e.openState&&(t=[L.a.SideDrawer,L.a.Open]),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(R.a,{show:e.openState,clicked:e.closeHandler}),Object(r.jsxs)("div",{className:t.join(" "),onClick:e.closeHandler,children:[Object(r.jsx)("div",{className:L.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(T,{isAuthenticated:e.isAuth})})]})]})}var H=n(16),P=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerCloseHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(j.a,{children:[Object(r.jsx)(D,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(E,{isAuth:this.props.isAuthenticated,openState:this.state.showSideDrawer,closeHandler:this.sideDrawerCloseHandler}),Object(r.jsx)("main",{className:p.a.Content,children:this.props.children})]})}}]),n}(a.Component),U=Object(H.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(P),M=n(2),F=n(54),z=n(41),J=n.n(z),G=n(27),q=n.n(G),Q=function(e){return Object(r.jsxs)("div",{className:q.a.BuildControl,children:[Object(r.jsx)("div",{className:q.a.Label,children:e.label}),Object(r.jsx)("button",{className:q.a.Less,onClick:function(){return e.removed(e.type)},disabled:e.disabledInfo,children:"less"}),Object(r.jsx)("button",{className:q.a.More,onClick:function(){return e.added(e.type)},children:"more"})]})},W=[{label:"Meat",type:"meat"},{label:"Cheese",type:"cheese"},{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"}],Y=function(e){return Object(r.jsxs)("div",{className:J.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price:",Object(r.jsx)("strong",{children:e.finalPrice.toFixed(2)})]}),W.map((function(t){return Object(r.jsx)(Q,{type:t.type,added:e.ingredientAdded,removed:e.ingredientRemoved,label:t.label,disabledInfo:e.disabledInfo[t.type]},t.label)})),Object(r.jsx)("button",{className:J.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"})]})},V=n(31),X=n(34),K=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(j.a,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious Burger with Following Ingredients"}),Object(r.jsx)("ul",{children:t}),Object(r.jsxs)("p",{children:["Total Price :",Object(r.jsx)("strong",{children:this.props.totalPrice.toFixed(2)})]}),Object(r.jsx)("p",{children:"Continue to checkout"}),Object(r.jsx)(X.a,{clicked:this.props.purchaseCancelled,btnType:"Danger",children:"CANCEL"}),Object(r.jsx)(X.a,{clicked:this.props.purchaseContinued,btnType:"Success",children:" CONTINUE"})]})}}]),n}(a.Component),$=n(43),Z=n(44),ee=n(17),te=n(20),ne=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchasedHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):(e.props.onSetAuthRedirectPath("/checkout"),e.props.history.push("/auth"))},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push({pathname:"/checkout"})},e.updatePurchaseState=function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"render",value:function(){var e=Object(M.a)({},this.props.ings);for(var t in e)e[t]=0===e[t];var n=null,a=this.props.error?Object(r.jsx)("p",{children:"Ingredients cannot be loaded"}):Object(r.jsx)($.a,{});return this.props.ings&&(a=Object(r.jsxs)(j.a,{children:[Object(r.jsx)(F.a,{ingredients:this.props.ings}),Object(r.jsx)(Y,{isAuth:this.props.isAuthenticated,finalPrice:this.props.price,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabledInfo:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchasedHandler})]}),n=Object(r.jsx)(K,{totalPrice:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,ingredients:this.props.ings})),Object(r.jsxs)(j.a,{children:[Object(r.jsx)(V.a,{modalClosed:this.purchaseCancelHandler,show:this.state.purchasing,children:n}),a]})}}]),n}(a.Component),re=Object(H.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e(ee.a(t))},onIngredientRemoved:function(t){return e(ee.i(t))},onInitIngredients:function(){return e(ee.e())},onInitPurchase:function(){return e(ee.h())},onSetAuthRedirectPath:function(t){return e(ee.j(t))}}}))(Object(Z.a)(ne,te.a)),ae=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(h.a,{to:"/"})}}]),n}(a.Component),ie=Object(H.b)(null,(function(e){return{onLogout:function(){return e(ee.f())}}}))(ae),ce=function(e){return function(t){Object(d.a)(a,t);var n=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={component:null},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(r.jsx)(e,Object(M.a)({},this.props)):null}}]),a}(a.Component)},oe=ce((function(){return n.e(3).then(n.bind(null,104))})),se=ce((function(){return n.e(5).then(n.bind(null,105))})),ue=ce((function(){return n.e(4).then(n.bind(null,102))})),de=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:"/auth",component:ue}),Object(r.jsx)(h.b,{path:"/",exact:!0,component:re}),Object(r.jsx)(h.a,{to:"/"})]});return this.props.isAuthenticated&&(e=Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:"/checkout",component:oe}),Object(r.jsx)(h.b,{path:"/orders",component:se}),Object(r.jsx)(h.b,{path:"/logout",component:ie}),Object(r.jsx)(h.b,{path:"/auth",component:ue}),Object(r.jsx)(h.b,{path:"/",exact:!0,component:re}),Object(r.jsx)(h.a,{to:"/"})]})),Object(r.jsx)("div",{children:Object(r.jsx)(U,{children:Object(r.jsx)(h.d,{children:e})})})}}]),n}(a.Component),le=Object(h.g)(Object(H.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ee.c())}}}))(de)),he=n(21),je=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,103)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))},be=n(25),pe=n(3),fe=n(18),Oe={ingredients:null,totalPrice:4,error:!1,building:!1},ge={salad:.5,cheese:.4,meat:1.3,bacon:.7},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.a:var n=Object(be.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=Object(fe.b)(e.ingredients,n),a={ingredients:r,totalPrice:e.totalPrice+ge[t.ingredientName],building:!0};return Object(fe.b)(e,a);case pe.n:return Object(M.a)(Object(M.a)({},e),{},{ingredients:Object(M.a)(Object(M.a)({},e.ingredients),{},Object(be.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),building:!0,totalPrice:e.totalPrice-ge[t.ingredientName]});case pe.p:return Object(M.a)(Object(M.a)({},e),{},{ingredients:t.ingredients,error:!1,totalPrice:4,building:!1});case pe.f:return Object(M.a)(Object(M.a)({},e),{},{error:!0});default:return e}},me={orders:[],purchased:!1,loading:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.m:return Object(M.a)(Object(M.a)({},e),{},{purchased:!1});case pe.k:return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case pe.l:var n=Object(M.a)(Object(M.a)({},t.orderData),{},{id:t.orderId});return Object(M.a)(Object(M.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case pe.j:return Object(M.a)(Object(M.a)({},e),{},{loading:!1});case pe.h:return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case pe.i:return Object(M.a)(Object(M.a)({},e),{},{loading:!1,orders:t.orders});case pe.g:return Object(M.a)(Object(M.a)({},e),{},{loading:!1});default:return e}},xe={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},ye=function(e,t){return Object(fe.b)(e,{error:null,loading:!0})},ke=function(e,t){return Object(fe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ce=function(e,t){return Object(fe.b)(e,{error:t.error,loading:!1})},Se=function(e,t){return Object(fe.b)(e,{token:null,userId:null})},Ie=function(e,t){return Object(fe.b)(e,{authRedirectPath:t.path})},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe.d:return ye(e);case pe.e:return ke(e,t);case pe.b:return Ce(e,t);case pe.c:return Se(e);case pe.o:return Ie(e,t);default:return e}},Be=n(64),Ne=he.d,we=Object(he.c)({burgerBuilder:_e,order:ve,auth:Te}),De=Object(he.e)(we,Ne(Object(he.a)(Be.a)));o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(H.a,{store:De,children:Object(r.jsx)(S.a,{children:Object(r.jsx)(le,{})})})}),document.getElementById("root")),je()}],[[95,1,2]]]);
//# sourceMappingURL=main.196aa049.chunk.js.map