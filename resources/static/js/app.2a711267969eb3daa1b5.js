webpackJsonp([1],{"33aG":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDA0JIAIfxYhRAAABfElEQVRIx+3TsWtTURQH4K9SlEQQ+1q6tCAtBBS66CQYFxEUFwsuLUKXTiKCKP0DXFxd1IDiKjo1ix1S6KCxVEvU0KHQwbbwQkQUM1Vpqc8hwcY65L6M4tnuhe937z2cS7o65JaqH76adTqlRWTRuuvOuKhg27W0vKKhaqC1vmQ7zS0iFXWRubaIgtk0fMGmJzJtERd8CeeJaaOtiBc+GEDeVigvmbDl6r6IG96F8gwu/xWx6WYYzzoBxtsiIg1lB8N4wVprZy/ik4q+UF6T+7077rtpC91ymJR0x3PWHJcx35kf9VZJ1n31VvvIiT1y2Lz3+v/zf5I3x+bYvrGpeSir1HlsWJLYkWh0x0fsuuKkGYvdcKZUwR3P0r6dXpxVBkPGPDdszFO3FUXO+dYp4ADyXoGyN1YVHXFXUb/znTkM+mm4bX3KTsiH3btB3obaHy3tFYWeDvfEYj2GTHpgxa6l0NObtSwR+yix6rEpI2kwPWJ1ZS+99jkdbdYvnbvB3eaA70EAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMTNUMDk6MzI6MDIrMDA6MDDmsvL0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTEzVDA5OjMyOjAyKzAwOjAwl+9KSAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},"5enT":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"ContactView"}},[e._m(0),e._v(" "),e.isErrorMessage?s("div",{staticStyle:{color:"red"}},[e._v("\n      "+e._s(e.errorMessage)+"\n  ")]):e._e(),e._v(" "),s("div",{attrs:{id:"Content"}},[e.isEditUser?s("div",{attrs:{id:"modal"}},[s("div",{attrs:{id:"modalContent"}},[e.selectedUser&&e.selectedUser.name?s("div",[e._v("\n            Name : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.name,expression:"selectedUser.name"}],attrs:{type:"text",readonly:""},domProps:{value:e.selectedUser.name},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"name",t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Age : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.age,expression:"selectedUser.age"}],attrs:{type:"number"},domProps:{value:e.selectedUser.age},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"age",t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Company : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.company,expression:"selectedUser.company"}],attrs:{type:"text"},domProps:{value:e.selectedUser.company},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"company",t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Location : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedUser.location,expression:"selectedUser.location"}],attrs:{type:"text"},domProps:{value:e.selectedUser.location},on:{input:function(t){t.target.composing||e.$set(e.selectedUser,"location",t.target.value)}}}),e._v(" "),s("br")]):s("div",[e._v("\n            Name : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Age : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userAge,expression:"userAge"}],attrs:{type:"number"},domProps:{value:e.userAge},on:{input:function(t){t.target.composing||(e.userAge=t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Company : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userCompany,expression:"userCompany"}],attrs:{type:"text"},domProps:{value:e.userCompany},on:{input:function(t){t.target.composing||(e.userCompany=t.target.value)}}}),e._v(" "),s("br"),e._v("\n            Location : "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userLocation,expression:"userLocation"}],attrs:{type:"text"},domProps:{value:e.userLocation},on:{input:function(t){t.target.composing||(e.userLocation=t.target.value)}}}),e._v(" "),s("br")])]),e._v(" "),s("div",{attrs:{id:"modalAction"}},[s("button",{on:{click:function(t){return e.triggerUserAction()}}},[e._v(" Save ")]),e._v(" "),s("button",{on:{click:function(t){return e.closeCreateModal()}}},[e._v(" Close ")])])]):s("div",{attrs:{id:"modal"}},[s("div",{attrs:{id:"commonAction"}},[s("img",{attrs:{id:"icon",src:e.addIcon,alt:" new user",title:"Create new user"},on:{click:function(t){return e.openCreateModal()}}})]),e._v(" "),s("div",{attrs:{id:"userList"}},e._l(e.users,function(t){return s("div",{key:t._id,attrs:{id:"card"}},[s("div",{attrs:{id:"cardContent"}},[s("div",{attrs:{id:"userDetail"}},[s("div",[e._v("\n                  Name : "+e._s(t.name)+"\n                ")]),e._v(" "),s("div",[e._v("\n                  Age: "+e._s(t.age)+"\n                ")]),e._v(" "),s("div",[e._v("\n                  Company: "+e._s(t.company)+"\n                ")]),e._v(" "),s("div",[e._v("\n                  Location : "+e._s(t.location)+"\n                ")])]),e._v(" "),s("div",{attrs:{id:"userAction"}},[s("img",{attrs:{id:"icon",src:e.editIcon,alt:"edit user",title:"edit"},on:{click:function(s){return e.getUserDetail(t.name)}}}),e._v(" "),s("img",{attrs:{id:"icon",src:e.deleteIcon,alt:"delete user",title:"delete"},on:{click:function(s){return e.deleteuserDetail(t)}}})])])])}),0)])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"Header"}},[s("h1",[e._v(" My userlist list ")])])}],n={render:r,staticRenderFns:a};t.a=n},FqVw:function(e,t,s){"use strict";function r(e){s("d1K9")}var a=s("UAUD"),n=s("5enT"),o=s("VU/8"),i=r,A=o(a.a,n.a,!1,i,"data-v-8a8a239a",null);t.a=A.exports},KuaY:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDA0JIBzlyrUyAAABb0lEQVRIx+3Vy0uVQRgG8F9iR7E2coJqJ1J4IwkTomUQBJILNwlBgv9FK9eCKC3auHLRBRcicrrRrm27Nm40kAjEC0X5aVRejguHPJ9nPE7b8B0+Zub5nveZeV8YHmLR6q1N5Yqx6ZWWGPVMBCv46IJn/uSwIct67EiIm8oGqtD7ynqqyfUV63MugmvY0XqEuY3rvoNVW0eFil7bzVVda+wqac73YFq/UaspFeKyR2Y8rIR+eJKYfBCTvh4s6gKwpldTcvp5N6zkmzjiuW9+Jgo0OWsw3wNueWPN+4T024r6fKj+sWQq6fynFg83dceQ+jWALh2g0b04MS7QruQOeGwC3PXSlRi1PipQINygEI5oCGjiDf4hTgVOBf4TgfhjysJHFqwkUw5IksCSNp/AsD3wTrsvJwmsBGOBhTCvh3nvL8IlG/Fyxv3SeWLR3X4bO9xWmmvRvEYvfK6R3uKBLZ3B4qriqjlZTVPLzOZdcx/grXItbFHxZAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0xM1QwOTozMjoyOCswMDowMADnqscAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMTNUMDk6MzI6MjgrMDA6MDBxuhJ7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},M93x:function(e,t,s){"use strict";function r(e){s("WeUM")}var a=s("xJD8"),n=s("ikOA"),o=s("VU/8"),i=r,A=o(a.a,n.a,!1,i,null,null);t.a=A.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),a=s("M93x"),n=s("YaEn"),o=s("mtWM"),i=s.n(o);window.axios=i.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:n.a,template:"<App/>",components:{App:a.a}})},UAUD:function(e,t,s){"use strict";var r=s("Zarb"),a=s.n(r),n=s("33aG"),o=s.n(n),i=s("KuaY"),A=s.n(i);t.a={name:"ContactView",data:function(){return{baseURL:"/v1",users:[],selectedUser:null,isEditUser:!1,userName:"",userAge:0,userCompany:"",userLocation:"",isErrorMessage:!1,errorMessage:"",addIcon:a.a,editIcon:o.a,deleteIcon:A.a}},methods:{getAllUsers:function(){var e=this,t=this;axios.get(this.baseURL+"/users").then(function(t){e.users=t.data}).catch(function(e){t.displayError(e.response.data.message),console.error(e)})},getUserDetail:function(e){var t=this,s=this;this.selectedUser=null,axios.get(this.baseURL+"/user/"+e).then(function(e){t.selectedUser=e.data,t.openCreateModal()}).catch(function(e){s.displayError(e.response.data.message),console.error(e)})},createNewUser:function(){var e=this,t=this,s={name:this.userName,age:parseInt(this.userAge),company:this.userCompany,location:this.userLocation};axios.post(this.baseURL+"/user/new",s).then(function(t){e.closeCreateModal(),e.getAllUsers()}).catch(function(e){t.displayError(e.response.data.message),console.error(e)})},editUserDetail:function(){var e=this,t=this;this.selectedUser.age=parseInt(this.selectedUser.age),axios.put(this.baseURL+"/user/"+this.selectedUser.name,this.selectedUser).then(function(t){e.closeCreateModal(),e.getAllUsers()}).catch(function(e){t.displayError(e.response.data.message),console.error(e)})},deleteuserDetail:function(e){var t=this,s=this;confirm("Are you sure you want to delete "+e.name+" ?")&&axios.delete(this.baseURL+"/user/"+e.name).then(function(e){t.getAllUsers()}).catch(function(e){s.displayError(e.response.data.message),console.error(e)})},openCreateModal:function(){this.userAge=0,this.isEditUser=!0},closeCreateModal:function(){this.isEditUser=!1,this.selectedUser=null,this.userName="",this.userEmail="",this.userPhone="",this.userCompany="",this.userLocation=""},displayError:function(e){this.isErrorMessage=!0,this.errorMessage=e,this.hideErrorMessage()},hideErrorMessage:function(){var e=this;setInterval(function(){e.isErrorMessage=!1,e.errorMessage=""},5e3)},triggerUserAction:function(){this.selectedUser?this.editUserDetail():this.userName?this.createNewUser():alert("Name required")}},created:function(){this.getAllUsers()}}},WeUM:function(e,t){},YaEn:function(e,t,s){"use strict";var r=s("7+uW"),a=s("/ocq");r.a.use(a.a),t.a=new a.a({routes:[]})},Zarb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDA0JIDDXEtnRAAAB/ElEQVRIx53VTUtUcRQG8J83X8qXskWarfKlVWLuzUW+LBRXGsgktG3RBwghggzLPkEUuMv5BoqgWeJYIEa5TrQZoVpqjpGC2EJGZ5q5o86zuuec53/Oc/733HOL5EKVPne0uq4am9atmDNpO5talOWp88R9zIj5JokqN9zW7UDUS6vy4IIRSUv6lWfFyg1YtmdMWdjxJiviBnOoOtYbkbCoNlewxS/zrjgJNRYkNP/vvirhrdITj0OpCfFMFed9EgvvLQsl3vuYzh8RP4X4zEYSXqSMOkmDIcQRT0MiEbsaDx9fWQq9+XHjIZEiy95AlR39oVLDEzAgqTLQh+kz9Z/CtEBvoMOMPwUl2DGrM3DLQkHHIaYlUG+t4ASrGopdtJnmuuaxc2l2G16n2fue+XlkbboUZGU9yFszK1rst+o0+4eHGfFxPAhNd9lWYD01TwWgyVrgq/aCE7RZCczpzrF/ToMKXd4FJh3oKShBj31TgW1Rw3nWWBgCw6J2Dq9iTySEFv4xDfmrPmWMSajJSevWldNfa8PosVli/owr7YPFTH6tuIlTL9Wo79mKm8UthDSSWSom7mZYKCGS540E7tnIV6bMc7uWDeQYrQp3fbZrNLPR7GoNHhkSmBWzagvVGrXrtC9qzHomPbfcSr06tKo/+r1/MWfqcGwy8Q9uwH55jNAi+gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0xM1QwOTozMjo0OCswMDowMMaIo0AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMTNUMDk6MzI6NDgrMDA6MDC31Rv8AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},d1K9:function(e,t){},ikOA:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("ContactView")],1)},a=[],n={render:r,staticRenderFns:a};t.a=n},xJD8:function(e,t,s){"use strict";var r=s("FqVw");t.a={name:"app",components:{ContactView:r.a}}}},["NHnr"]);
//# sourceMappingURL=app.2a711267969eb3daa1b5.js.map