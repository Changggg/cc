!function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-tr"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,o){var t,s=n.helperMissing,r="function",m=a.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+m((t=null!=(t=n.result||(null!=l?l.result:l))?t:s,typeof t===r?t.call(l,{name:"result",hash:{},data:o}):t))+"');return false;\" >"+m((t=null!=(t=n.task_name||(null!=l?l.task_name:l))?t:s,typeof t===r?t.call(l,{name:"task_name",hash:{},data:o}):t))+"</a></td><td>"+m((t=null!=(t=n.timestamp||(null!=l?l.timestamp:l))?t:s,typeof t===r?t.call(l,{name:"timestamp",hash:{},data:o}):t))+"</td><td>"+m((n.json_metatags||l&&l.json_metatags||s).call(l,null!=l?l.tags:l,{name:"json_metatags",hash:{},data:o}))+"</td></tr>\n"},useData:!0}),l["tmpl-user"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,o){var t,s=n.helperMissing,r="function",m=a.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+m((t=null!=(t=n.gravator_url||(null!=l?l.gravator_url:l))?t:s,typeof t===r?t.call(l,{name:"gravator_url",hash:{},data:o}):t))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+m((t=null!=(t=n.username||(null!=l?l.username:l))?t:s,typeof t===r?t.call(l,{name:"username",hash:{},data:o}):t))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+m((t=null!=(t=n.name||(null!=l?l.name:l))?t:s,typeof t===r?t.call(l,{name:"name",hash:{},data:o}):t))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+m((t=null!=(t=n.email||(null!=l?l.email:l))?t:s,typeof t===r?t.call(l,{name:"email",hash:{},data:o}):t))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+m((t=null!=(t=n.csrftoken||(null!=l?l.csrftoken:l))?t:s,typeof t===r?t.call(l,{name:"csrftoken",hash:{},data:o}):t))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+m((t=null!=(t=n.first_name||(null!=l?l.first_name:l))?t:s,typeof t===r?t.call(l,{name:"first_name",hash:{},data:o}):t))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+m((t=null!=(t=n.last_name||(null!=l?l.last_name:l))?t:s,typeof t===r?t.call(l,{name:"last_name",hash:{},data:o}):t))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+m((t=null!=(t=n.email||(null!=l?l.email:l))?t:s,typeof t===r?t.call(l,{name:"email",hash:{},data:o}):t))+'">\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+m((t=null!=(t=n.csrftoken||(null!=l?l.csrftoken:l))?t:s,typeof t===r?t.call(l,{name:"csrftoken",hash:{},data:o}):t))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0}),l["tmpl-workflow"]=a({compiler:[7,">= 4.0.0"],main:function(a,l,n,e,o){var t,s=n.helperMissing,r="function",m=a.escapeExpression;return'     <h2>Workflow</h2>\n     <div>    \n\n        <form id="parameters" class="form-stacked">\n            <fieldset>\n            <div class="col-sm-3.5" style="float:left">\n                <div class="form-group">\n                    <label for="latitude">Latitude</label>\n                    <input type="latitude" name="latitude" class="form-control input-sm"  id="latitude" value="'+m((t=null!=(t=n.lat||(null!=l?l.lat:l))?t:s,typeof t===r?t.call(l,{name:"lat",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="longitude"> Longitude </label>\n                    <input type="longitude" name="longitude" class="form-control input-sm" id="longitude" value="'+m((t=null!=(t=n.longitude||(null!=l?l.longitude:l))?t:s,typeof t===r?t.call(l,{name:"longitude",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="wsmax"> Maximum soil water (wsmax) </label>\n                    <input type="wsmax" name="wsmax" class="form-control input-sm" id="wsmax" value="'+m((t=null!=(t=n.wsmax||(null!=l?l.wsmax:l))?t:s,typeof t===r?t.call(l,{name:"wsmax",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="wsmin"> Minimum soil water (wsmin) </label>\n                    <input type="wsmin" name="wsmin" class="form-control input-sm" id="wsmin" value="'+m((t=null!=(t=n.wsmin||(null!=l?l.wsmin:l))?t:s,typeof t===r?t.call(l,{name:"wsmin",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="LAIMAX"> Maximum Leaf Area Index (LAIMAX) </label>\n                    <input type="LAIMAX" name="LAIMAX" class="form-control input-sm" id="LAIMAX" value="'+m((t=null!=(t=n.LAIMAX||(null!=l?l.LAIMAX:l))?t:s,typeof t===r?t.call(l,{name:"LAIMAX",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="LAIMIN"> Minimum Leaf Area Index (LAIMIN) </label>\n                    <input type="LAIMIN" name="LAIMIN" class="form-control input-sm" id="LAIMIN" value="'+m((t=null!=(t=n.LAIMIN||(null!=l?l.LAIMIN:l))?t:s,typeof t===r?t.call(l,{name:"LAIMIN",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="rdepth"> Root Depth (rdepth) </label>\n                    <input type="rdepth" name="rdepth" class="form-control input-sm" id="rdepth" value="'+m((t=null!=(t=n.rdepth||(null!=l?l.rdepth:l))?t:s,typeof t===r?t.call(l,{name:"rdepth",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="Rootmax"> Maximum root biomass (Rootmax) </label>\n                    <input type="Rootmax" name="Rootmax" class="form-control input-sm" id="Rootmax" value="'+m((t=null!=(t=n.Rootmax||(null!=l?l.Rootmax:l))?t:s,typeof t===r?t.call(l,{name:"Rootmax",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="Stemmax"> Maximum Stem Biomass (Stemmax) </label>\n                    <input type="Stemmax" name="Stemmax" class="form-control input-sm" id="Stemmax" value="'+m((t=null!=(t=n.Stemmax||(null!=l?l.Stemmax:l))?t:s,typeof t===r?t.call(l,{name:"Stemmax",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SapR"> Proportion of Sapwood in Root (SapR) </label>\n                    <input type="SapR" name="SapR" class="form-control input-sm" id="SapR" value="'+m((t=null!=(t=n.SapR||(null!=l?l.SapR:l))?t:s,typeof t===r?t.call(l,{name:"SapR",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SapS"> Proportion of Sapwood in Stem (SapS) </label>\n                    <input type="SapS" name="SapS" class="form-control input-sm" id="SapS" value="'+m((t=null!=(t=n.SapS||(null!=l?l.SapS:l))?t:s,typeof t===r?t.call(l,{name:"SapS",hash:{},data:o}):t))+'">\n                </div>\n		<div class="form-group">\n                    <label for="SLA"> Specific Leaf Area (SLA) </label>\n                    <input type="SLA" name="SLA" class="form-control input-sm" id="SLA" value="'+m((t=null!=(t=n.SLA||(null!=l?l.SLA:l))?t:s,typeof t===r?t.call(l,{name:"SLA",hash:{},data:o}):t))+'">\n                </div>\n	    </div> \n\n            <div class="span1" style="float:left;COLOR:white;">.</div>\n            <div class="col-sm-3.5" style="float:left">\n                <div class="form-group">\n                    <label for="GLmax"> Maximum Leaf Growth Rate (GLmax) </label>\n                    <input type="GLmax" name="GLmax" class="form-control input-sm" id="GLmax" value="'+m((t=null!=(t=n.GLmax||(null!=l?l.GLmax:l))?t:s,typeof t===r?t.call(l,{name:"GLmax",hash:{},data:o}):t))+'">\n                </div>\n                <div class="form-group">\n                    <label for="GRmax"> Maximum Root Growth Rate (GRmax) </label>\n                    <input type="GRmax" name="GRmax" class="form-control input-sm" id="GRmax" value="'+m((t=null!=(t=n.GRmax||(null!=l?l.GRmax:l))?t:s,typeof t===r?t.call(l,{name:"GRmax",hash:{},data:o}):t))+'">\n                </div>\n                <div class="form-group">\n                    <label for="Gsmax"> Maximum Stem Growth Rate (Gsmax) </label>\n                    <input type="Gsmax" name="Gsmax" class="form-control input-sm" id="Gsmax" value="'+m((t=null!=(t=n.Gsmax||(null!=l?l.Gsmax:l))?t:s,typeof t===r?t.call(l,{name:"Gsmax",hash:{},data:o}):t))+'">\n                </div>\n                <div class="form-group">\n                    <label for="stom_n"> Stoma Number (stom_n) </label>\n                    <input type="stom_n" name="stom_n" class="form-control input-sm" id="stom_n" value="'+m((t=null!=(t=n.stom_n||(null!=l?l.stom_n:l))?t:s,typeof t===r?t.call(l,{name:"stom_n",hash:{},data:o}):t))+'">\n                </div>\n                <div class="form-group">\n                    <label for="a1"> a1 coefficient </label>\n                    <input type="a1" name="a1" class="form-control input-sm" id="a1" value="'+m((t=null!=(t=n.a1||(null!=l?l.a1:l))?t:s,typeof t===r?t.call(l,{name:"a1",hash:{},data:o}):t))+'">\n                </div>\n                <div class="form-group">\n                    <label for="Ds0"> Ds0 coefficient </label>\n                    <input type="Ds0" name="Ds0" class="form-control input-sm" id="Ds0" value="'+m((t=null!=(t=n.Ds0||(null!=l?l.Ds0:l))?t:s,typeof t===r?t.call(l,{name:"Ds0",hash:{},data:o}):t))+'">\n                </div>                \n\n		<div class="form-group">\n                    <label for="Vcmx0"> Maximum rate of Carboxylation (vcmx0) </label>\n                    <input type="Vcmx0" name="Vcmx0" class="form-control input-sm" id="Vcmx0" value="'+m((t=null!=(t=n.Vcmx0||(null!=l?l.Vcmx0:l))?t:s,typeof t===r?t.call(l,{name:"Vcmx0",hash:{},data:o}):t))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="extkU"> extkU </label>\n                    <input type="extkU" name="extkU" class="form-control input-sm" id="extkU" value="'+m((t=null!=(t=n.extkU||(null!=l?l.extkU:l))?t:s,typeof t===r?t.call(l,{name:"extkU",hash:{},data:o}):t))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="xfang"> Coefficient in Photosythesis Subroutine </label>\n                    <input type="xfang" name="xfang" class="form-control input-sm" id="xfang" value="'+m((t=null!=(t=n.xfang||(null!=l?l.xfang:l))?t:s,typeof t===r?t.call(l,{name:"xfang",hash:{},data:o}):t))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="alpha"> Light use efficiency(alpha) </label>\n                    <input type="alpha" name="alpha" class="form-control input-sm" id="alpha" value="'+m((t=null!=(t=n.alpha||(null!=l?l.alpha:l))?t:s,typeof t===r?t.call(l,{name:"alpha",hash:{},data:o}):t))+'">\n                </div>  \n		<div class="form-group">\n                    <label for="Tau_Leaf"> Turnover rate of foliage pool (Tau_Leaf)</label>\n                    <input type="Tau_Leaf" name="Tau_Leaf" class="form-control input-sm" id="Tau_Leaf" value="'+m((t=null!=(t=n.Tau_Leaf||(null!=l?l.Tau_Leaf:l))?t:s,typeof t===r?t.call(l,{name:"Tau_Leaf",hash:{},data:o}):t))+'">\n               </div>  \n		<div class="form-group">\n                    <label for="Tau_Wood"> Turnover rate of woody pool (Tau_Wood) </label>\n                    <input type="Tau_Wood" name="Tau_Wood" class="form-control input-sm" id="Tau_Wood" value="'+m((t=null!=(t=n.Tau_Wood||(null!=l?l.Tau_Wood:l))?t:s,typeof t===r?t.call(l,{name:"Tau_Wood",hash:{},data:o}):t))+'">\n               </div>  \n            </div>\n            <div class="span1" style="float:left;COLOR:white;">.</div>\n            <div class="col-sm-3.5" style="float:left">\n               <div class="form-group">\n                    <label for="Tau_Root"> Turnover rate of root pool (Tau_Root) </label>\n                    <input type="Tau_Root" name="Tau_Root" class="form-control input-sm" id="Tau_Root" value="'+m((t=null!=(t=n.Tau_Root||(null!=l?l.Tau_Root:l))?t:s,typeof t===r?t.call(l,{name:"Tau_Root",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_F"> Turnover rate of fine-root pool (Tau_F) </label>\n                    <input type="Tau_F" name="Tau_F" class="form-control input-sm" id="Tau_F" value="'+m((t=null!=(t=n.Tau_F||(null!=l?l.Tau_F:l))?t:s,typeof t===r?t.call(l,{name:"Tau_F",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_C"> Turnover rate of course-root pool (Tau_C) </label>\n                    <input type="Tau_C" name="Tau_C" class="form-control input-sm" id="Tau_C" value="'+m((t=null!=(t=n.Tau_C||(null!=l?l.Tau_C:l))?t:s,typeof t===r?t.call(l,{name:"Tau_C",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_Micro"> Turnover rate of microbial pool (Tau_Micro) </label>\n                    <input type="Tau_Micro" name="Tau_Micro" class="form-control input-sm" id="Tau_Micro" value="'+m((t=null!=(t=n.Tau_Micro||(null!=l?l.Tau_Micro:l))?t:s,typeof t===r?t.call(l,{name:"Tau_Micro",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_SlowSOM"> Turnover rate of slow SOM (Tau_SlowSOM) </label>\n                    <input type="Tau_SlowSOM" name="Tau_SlowSOM" class="form-control input-sm" id="Tau_SlowSOM" value="'+m((t=null!=(t=n.Tau_SlowSOM||(null!=l?l.Tau_SlowSOM:l))?t:s,typeof t===r?t.call(l,{name:"Tau_SlowSOM",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Tau_Passive"> Turnover rate Passive Soil(Tau_Passive) </label>\n                    <input type="Tau_Passive" name="Tau_Passive" class="form-control input-sm" id="Tau_Passive" value="'+m((t=null!=(t=n.Tau_Passive||(null!=l?l.Tau_Passive:l))?t:s,typeof t===r?t.call(l,{name:"Tau_Passive",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="gddonset"> Growing degree days (gddonset) </label>\n                    <input type="gddonset" name="gddonset" class="form-control input-sm" id="gddonset" value="'+m((t=null!=(t=n.gddonset||(null!=l?l.gddonset:l))?t:s,typeof t===r?t.call(l,{name:"gddonset",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Q10"> Q10 </label>\n                    <input type="Q10" name="Q10" class="form-control input-sm" id="Q10" value="'+m((t=null!=(t=n.Q10||(null!=l?l.Q10:l))?t:s,typeof t===r?t.call(l,{name:"Q10",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rl0"> Rl0 </label>\n                    <input type="Rl0" name="Rl0" class="form-control input-sm" id="Rl0" value="'+m((t=null!=(t=n.Rl0||(null!=l?l.Rl0:l))?t:s,typeof t===r?t.call(l,{name:"Rl0",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rs0"> Rs0 </label>\n                    <input type="Rs0" name="Rs0" class="form-control input-sm" id="Rs0" value="'+m((t=null!=(t=n.Rs0||(null!=l?l.Rs0:l))?t:s,typeof t===r?t.call(l,{name:"Rs0",hash:{},data:o}):t))+'">\n               </div>\n                <div class="form-group">\n                    <label for="Rr0"> Rr0 </label>\n                    <input type="Rr0" name="Rr0" class="form-control input-sm" id="Rr0" value="'+m((t=null!=(t=n.Rr0||(null!=l?l.Rr0:l))?t:s,typeof t===r?t.call(l,{name:"Rr0",hash:{},data:o}):t))+'">\n               </div>\n            </div>\n            </fieldset>\n        </form>\n    \n     </div>\n\n'},useData:!0})}();
