var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var j=void 0,m=!0,n=null,p=!1,aa=encodeURIComponent,q=window,ba=Object,r=document,s=String,ca=decodeURIComponent,da="appendChild",v="push",w="test",ea="exec",x="replace",fa="getElementById",ga="concat",y="indexOf",ha="readyState",z="createElement",ia="firstChild",B="setAttribute",ja="getTime",ka="getElementsByTagName",E="length",F="split",H="location",I="style",la="call",J="getAttribute",K="href",ma="action",L="apply",M="parentNode",N="join",na="toLowerCase";var O=q,P=r,oa=O[H],pa=function(){},qa=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},ra=function(a){for(var b=0;b<this[E];b++)if(this[b]===a)return b;return-1},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=function(a){return s(a)[x](sa,"&amp;")[x](ta,"&lt;")[x](ua,"&gt;")[x](va,"&quot;")[x](wa,"&#39;")},R=function(){var a;if((a=ba.create)&&qa[w](a))a=a(n);else{a={};for(var b in a)a[b]=j}return a},S=function(a,b){return ba.prototype.hasOwnProperty[la](a,b)},ya=function(a){if(qa[w](ba.keys))return ba.keys(a);
var b=[],c;for(c in a)S(a,c)&&b[v](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},U=Q(O,"gapi",{});var za=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[ea](a)||b[ea](a)))try{c=ca(a[2])}catch(d){}return c},Aa=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ba=function(a){a=a.match(Aa);var b=R();b.i=a[1];b.c=a[3]?[a[3]]:[];b.d=a[5]?[a[5]]:[];return b},Ca=function(a){return a.i+(0<a.c[E]?"?"+a.c[N]("&"):"")+(0<a.d[E]?"#"+a.d[N]("&"):"")},Da=function(a){var b=[];if(a)for(var c in a)S(a,c)&&a[c]!=n&&b[v](aa(c)+"="+aa(a[c]));return b},Ea=function(a,
b,c){a=Ba(a);a.c[v][L](a.c,Da(b));a.d[v][L](a.d,Da(c));return Ca(a)};var Ha=function(a,b,c){if(O[b+"EventListener"])O[b+"EventListener"]("message",a,p);else if(O[c+"tachEvent"])O[c+"tachEvent"]("onmessage",a)};var V;V=Q(O,"___jsl",R());Q(V,"I",0);Q(V,"hel",10);var Ia=function(a){return!V.dpo?za(a,"jsh",V.h):V.h},Ja=function(a){return Q(Q(V,"H",R()),a,R())};var Ka=Q(V,"perf",R()),La=Q(Ka,"g",R()),Ma=Q(Ka,"i",R());Q(Ka,"r",[]);R();R();var Na=function(a,b,c){var e=Ka.r;"function"===typeof e?e(a,b,c):e[v]([a,b,c])},W=function(a,b,c){La[a]=!b&&La[a]||c||(new Date)[ja]();Na(a)},Pa=function(a,b,c){b&&0<b[E]&&(b=Oa(b),c&&0<c[E]&&(b+="___"+Oa(c)),28<b[E]&&(b=b.substr(0,28)+(b[E]-28)),c=b,b=Q(Ma,"_p",R()),Q(b,c,R())[a]=(new Date)[ja](),Na(a,"_p",c))},Oa=function(a){return a[N]("__")[x](/\./g,"_")[x](/\-/g,"_")[x](/\,/g,"_")};var Qa=R(),Ra=[],X;X={b:"callback",o:"sync",l:"config",e:"_c",g:"h",p:"platform",k:"jsl",TIMEOUT:"timeout",n:"ontimeout",q:"mh"};Ra[v]([X.k,function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?V[b]=Q(V,b,[])[ga](c):Q(V,b,c)}if(a=a.u)b=Q(V,"us",[]),b[v](a),(c=/^https:(.*)$/[ea](a))&&b[v]("http:"+c[1]),Q(V,"u",a)}]);var Sa=decodeURI("%73cript");Qa.m=function(a){var b=V.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[y](".."))throw"Bad hint";return b+"/"+a[x](/^\//,"")};
var Ta=function(a){return a[N](",")[x](/\./g,"_")[x](/-/g,"_")},Ua=function(a,b){for(var c=[],e=0;e<a[E];++e){var d=a[e];d&&0>ra[la](b,d)&&c[v](d)}return c},Va=/[@"'<>#\?&%]/,Wa=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Xa=/\/cb=/g,Ya=function(a){var b=P[z](Sa);b[B]("src",a);b.async="true";a=P[ka](Sa)[0];a[M].insertBefore(b,a)},$a=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[X.b]=b);var e=c,d=e&&e[X.e];if(d)for(var f=0;f<Ra[E];f++){var g=Ra[f][0],h=Ra[f][1];h&&S(d,g)&&h(d[g],
a,e)}e=a?a[F](":"):[];if(!(d=c[X.g]))if(d=Ia(oa[K]),!d)throw"Bad hint";f=d;g=Q(V,"ah",R());if(!g["::"]||!e[E])Za(e||[],c,f);else{d=[];for(h=n;h=e.shift();){var i=h[F]("."),i=g[h]||g[i[1]&&"ns:"+i[0]||""]||f,k=d[E]&&d[d[E]-1]||n,l=k;if(!k||k.hint!=i)l={hint:i,j:[]},d[v](l);l.j[v](h)}var t=d[E];if(1<t){var u=c[X.b];u&&(c[X.b]=function(){0==--t&&u()})}for(;e=d.shift();)Za(e.j,c,e.hint)}},Za=function(a,b,c){var e=a.sort();a=[];for(var d=j,f=0;f<e[E];f++){var g=e[f];g!=d&&a[v](g);d=g}a=a||[];var h=b[X.b],
i=b[X.l],d=b[X.TIMEOUT],k=b[X.n],l=n,t=p;if(d&&!k||!d&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=Q(Ja(c),"r",[]).sort(),u=Q(Ja(c),"L",[]).sort(),A=[][ga](e),Fa=function(a,b){if(t)return 0;O.clearTimeout(l);u[v][L](u,C);var d=((U||{}).config||{}).update;d?d(i):i&&Q(V,"cu",[])[v](i);if(b){Pa("me0",a,A);try{ab(function(){var a;a=c===Ia(oa[K])?Q(U,"_",R()):R();a=Q(Ja(c),"_",a);b(a)})}finally{Pa("me1",a,A)}}h&&h();return 1};0<d&&(l=O.setTimeout(function(){t=
m;k()},d));var C=Ua(a,u);if(C[E]){var C=Ua(a,e),G=Q(V,"CP",[]),D=G[E];G[D]=function(a){if(!a)return 0;Pa("ml1",C,A);var b=function(){G[D]=n;return Fa(C,a)};if(0<D&&G[D-1])G[D]=b;else for(b();(b=G[++D])&&b(););};if(C[E]){var Ga="loaded_"+V.I++;U[Ga]=function(a){G[D](a);U[Ga]=n};a=c[F](";");a=(d=Qa[a.shift()])&&d(a);if(!a)throw"Bad hint:"+c;d=a=a[x]("__features__",Ta(C))[x](/\/$/,"")+(e[E]?"/ed=1/exm="+Ta(e):"")+("/cb=gapi."+Ga);f=d.match(Xa);if(!f||!(1===f[E]&&Wa[w](d)&&!Va[w](d)))throw"Bad URL "+
a;e[v][L](e,C);Pa("ml0",C,A);b[X.o]||O.___gapisync?(b=a,"loading"!=P[ha]?Ya(b):P.write("<"+Sa+' src="'+encodeURI(b)+'"></'+Sa+">")):Ya(a)}else G[D](pa)}else Fa(C)};var ab=function(a){if(V.hee&&0<V.hel)try{return a()}catch(b){V.hel--,$a("debug_error",function(){q.___jsl.hefn(b)})}else return a()};U.load=function(a,b){return ab(function(){return $a(a,b)})};var bb=function(){return q.___jsl=q.___jsl||{}},cb=function(a){var b=bb();b[a]=b[a]||[];return b[a]},Y=function(a){var b=bb();b.cfg=!a&&b.cfg||{};return b.cfg},db=function(a){return"object"===typeof a&&/\[native code\]/[w](a[v])},Z=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!db(a[c])&&!db(b[c])?Z(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=db(b[c])?[]:{},Z(a[c],b[c])):a[c]=b[c])},$=function(a){if(!a)return Y();a=a[F]("/");
for(var b=Y(),c=0,e=a[E];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[E]&&b!==j?b:j};var eb=function(a){var b=r[z]("div"),c=r[z]("a");c.href=a;b[da](c);b.innerHTML=b.innerHTML;return b[ia][K]},fb=function(a){a=a||"canonical";for(var b=r[ka]("link"),c=0,e=b[E];c<e;c++){var d=b[c],f=d[J]("rel");if(f&&f[na]()==a&&(d=d[J]("href")))if(d=eb(d))return d}return q[H][K]};var gb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},hb=0,ib=function(a,b,c){var e;try{e=a[z]('<iframe frameborder="'+xa(c.frameborder)+'" scrolling="'+xa(c.scrolling)+'" name="'+xa(c.name)+'"/>')}catch(d){e=a[z]("iframe")}for(var f in c)a=c[f],"style"==f&&"object"===typeof a?T(a,e[I]):e[B](f,c[f]);for(;b[ia];)b.removeChild(b[ia]);b[da](e);c.allowtransparency&&(e.allowTransparency=m);return e};var jb=ib,ib=function(a,b,c,e,d,f){if((f||{}).allowPost&&2E3<e[E]){f=Ba(e);c.src="";c["data-postorigin"]=f.i;c=jb(a,b,c,e,d);var g;if(-1!=navigator.userAgent[y]("WebKit")){g=b[ia].contentWindow.document;g.open();e=g[z]("div");var h={},i=d+"_inner";h.name=i;h.src="";h.style="display:none";jb(a,e,h,"",i)}h=(e=f.c[0])?e[F]("&"):[];e=[];for(i=0;i<h[E];i++){var k=h[i][F]("=",2);e[v]([ca(k[0]),ca(k[1])])}f.c=[];h=Ca(f);f=a[z]("form");f.action=h;f.method="POST";f.target=d;f[I].display="none";for(d=0;d<e[E];d++)h=
a[z]("input"),h.type="hidden",h.name=e[d][0],h.value=e[d][1],f[da](h);b[da](f);f.submit();f[M].removeChild(f);g&&g.close();a=c}else a=jb(a,b,c,e,d);return a};var kb=/:([a-zA-Z_]+):/g,lb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},mb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),nb=n,ob=Q(V,"WI",R()),pb=function(){var a=$("googleapis.config/sessionIndex");a==n&&(a=q.__X_GOOG_AUTHUSER);if(a==n){var b=q.google;b&&(a=b.authuser)}a==n&&(a=j,a==n&&(a=q[H][K]),a=a?za(a,"authuser")||n:n);return a==n?n:s(a)},qb=function(a,b){if(!nb){var c=$("iframes/:socialhost:"),e=pb()||"0",d=pb();nb={socialhost:c,
session_index:e,session_prefix:d!==j&&d!==n&&""!==d?"u/"+d+"/":""}}return nb[b]||""},tb=function(a,b,c,e){if(!b[M])return n;if(!e){e=R();for(var d=0!=b.nodeName[na]()[y]("g:"),f=0,g=b.attributes[E];f<g;f++){var h=b.attributes[f],i=h.name,h=h.value;0<=ra[la](rb,i)||(d&&0!=i[y]("data-")||"null"===h)||(d&&(i=i.substr(5)),e[i[na]()]=h)}d=b[I];(f=sb(d&&d.height))&&(e.height=s(f));(d=sb(d&&d.width))&&(e.width=s(d))}d=f=a;"plus"==a&&e[ma]&&(f=a+"_"+e[ma],d=a+"/"+e[ma]);(f=$("iframes/"+f+"/url"))||(f=":socialhost:/_/widget/render/"+
d);d=f[x](kb,qb);f={};T(e,f);f.hl=$("lang")||"en-US";f.origin=q[H].origin||q[H].protocol+"//"+q[H].host;"plus"===a&&(g=f[K]?eb(f[K]):fb(e[ma]?n:"publisher"),f.url=g,delete f[K]);"plusone"===a&&(f.url=e[K]?eb(e[K]):fb(),g=e.db,i=$(),g==n&&i&&(g=i.db,g==n&&(g=i.gwidget&&i.gwidget.db)),f.db=g||j,g=e.ecp,i=$(),g==n&&i&&(g=i.ecp,g==n&&(g=i.gwidget&&i.gwidget.ecp)),f.ecp=g||j,delete f[K]);f.hl=$("lang")||"en-US";V.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;g=$("inline/css");"undefined"!==
typeof g&&(0<c&&g>=c)&&(f.ic="1");g=/^#|^fr-/;c={};for(var k in f)S(f,k)&&g[w](k)&&(c[k[x](g,"")]=f[k],delete f[k]);k=[][ga](mb);g=$("iframes/"+a+"/methods");"object"===typeof g&&qa[w](g[v])&&(k=k[ga](g));for(var l in e)if(S(e,l)&&/^on/[w](l)&&("plus"!=a||"onconnect"!=l))k[v](l),delete f[l];delete f.callback;c._methods=k[N](",");d=Ea(d,f,c);e.rd?l=b:(l=r[z]("div"),b[B]("data-gapistub",m),l[I].cssText="position:absolute;width:100px;left:-10000px;",b[M].insertBefore(l,b));l.id||(b=l,Q(ob,a,0),k="___"+
a+"_"+ob[a]++,b.id=k);b=R();b[">type"]=a;T(e,b);l[B]("data-gwattr",Da(b)[N](":"));var t;k=d;a=l;b={allowPost:1,attributes:lb};l=a.ownerDocument;f=0;do c=b.id||["I",hb++,"_",(new Date)[ja]()][N]("");while(l[fa](c)&&5>++f);if(!(5>f))throw Error("Error creating iframe id");g=l[H][K];f=R();(i=za(g,"_bsh",V.bsh))&&(f._bsh=i);(g=Ia(g))&&(f.jsh=g);g=R();g.id=c;g.parent=l[H].protocol+"//"+l[H].host;i=za(l[H][K],"id","");h=za(l[H][K],"pfname","");(i=i?h+"/"+i:"")&&(g.pfname=i);b.hintInFragment?T(f,g):t=f;
t=Ea(k,t,g);k=R();T(gb,k);k.name=k.id=c;T(b.attributes,k);k.src=t;t=ib(l,a,k,t,c,b);a={};a.userParams=e;a.url=d;a.iframeNode=t;a.id=t[J]("id");return a},rb=["style","data-gapiscan"],sb=function(a){var b=j;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},ub=function(){};var vb,wb=/(?:^|\s)g-((\S)*)(?:$|\s)/,xb=R(),yb=R(),zb=Q(V,"FW",[]),Bb=function(a,b){Ab(j,p,a,b)},Ab=function(a,b,c,e){W("ps0",m);c=("string"===typeof c?r[fa](c):c)||P;var d;d=P.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:ya(xb)[ga](ya(yb));for(var f=[],g=0;g<d[E];g++){var h=d[g];f[v](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(f[N](","))}else d=c[ka]("*");c=R();for(f=0;f<d[E];f++){g=d[f];var i=g,h=e,k=i.nodeName[na](),l=j;i[J]("data-gapiscan")?h=n:(0==k[y]("g:")?l=k.substr(2):(i=(i=s(i.className||
i[J]("class")))&&wb[ea](i))&&(l=i[1]),h=l&&(xb[l]||yb[l])&&(!h||l===h)?l:n);h&&(g[B]("data-gapiscan",m),Q(c,h,[])[v](g))}if(b)for(var t in c){b=c[t];for(e=0;e<b[E];e++)b[e][B]("data-onload",m)}for(var u in c)zb[v](u);W("ps1",m);((t=zb[N](":"))||a)&&U.load(t,a);if(Cb(vb||{}))for(var A in c){a=c[A];u=0;for(b=a[E];u<b;u++)a[u].removeAttribute("data-gapiscan");Db(A)}else{e=[];for(A in c){a=c[A];u=0;for(b=a[E];u<b;u++)if(yb[A])d={},d.iframeNode=a[u],Db(A,d);else if(d=tb(A,a[u],b))(f=d.id)&&e[v](f),Db(A,
d)}Eb(t,e)}},Fb=function(a){var b=Q(U,a,{});b.go||(b.go=function(b){return Bb(b,a)},b.render=function(b,e){var d=e||{};d.type=a;var f=d,d=f.type;delete f.type;if(!d||!xb[d])throw Error("Unsupported widget "+d||"");var g=("string"===typeof b?r[fa](b):b)||j;if(g&&1===g.nodeType){var h={},i;for(i in f)S(f,i)&&(h[i[na]()]=f[i]);f=h;f.rd=1;i=tb(d,g,0,f);Db(d,i);(i=i.id)&&Eb(d,[i])}})};var Db=function(a,b){var c=Q(V,"watt",R())[a];b&&c?c(b):U.load(a,function(){var c=Q(V,"watt",R())[a],d=b&&b.iframeNode;!d||!c?(0,U[a].go)(d&&d[M]):c(b)})},Cb=function(){return p},Eb=function(){};Q(U,"platform",{}).go=Bb;Cb=function(a){for(var b=[X.e,X.k,X.g],c=0;c<b[E]&&a;c++)a=a[b[c]];b=Ia(oa[K]);return!a||0!=a[y]("n;")&&0!=b[y]("n;")&&a!==b};Eb=function(a,b){var c=function(){Ha(e,"remove","de")},e=function(f){var e=f.data,h=f.origin;if(Gb(e,b)){var i=d;d=p;i&&W("rqe");$a(a,function(){i&&W("rqd");c();for(var a=Q(V,"RPMQ",[]),b=0;b<a[E];b++)a[b]({data:e,origin:h})})}};if(!(0===b[E]||!q.JSON||!q.JSON.parse)){var d=m;Ha(e,"add","at");$a(a,c)}};
Ra[v]([X.p,function(a,b,c){vb=c;b&&zb[v](b);for(b=0;b<a[E];b++)xb[a[b]]=1;var e=c[X.e].annotation||[];for(b=0;b<e[E];++b)yb[e[b]]=1;for(b=0;b<a[E];b++)Fb(a[b]);if(b=q.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),Q(V,"ci",[])[v](b),q.__GOOGLEAPIS=j;Y(m);e=q.___gcfg;b=cb("cu");if(e&&e!==q.___gu){var d={};Z(d,e);b[v](d);q.___gu=e}var e=cb("cu"),f=r.scripts||r[ka]("script")||[],d=[],g=[],h=bb().u;h&&g[v](h);bb().us&&g[v][L](g,bb().us);for(h=0;h<f[E];++h)for(var i=
f[h],k=0;k<g[E];++k)i.src&&0==i.src[y](g[k])&&d[v](i);0==d[E]&&f[f[E]-1].src&&d[v](f[f[E]-1]);for(f=0;f<d[E];++f)if(!d[f][J]("gapi_processed")){d[f][B]("gapi_processed",m);(g=d[f])?(h=g.nodeType,g=3==h||4==h?g.nodeValue:g.textContent||g.innerText||g.innerHTML||""):g=j;if(g){for(;0==g.charCodeAt(g[E]-1);)g=g.substring(0,g[E]-1);h=j;try{h=(new Function("return ("+g+"\n)"))()}catch(l){}if("object"===typeof h)g=h;else{try{h=(new Function("return ({"+g+"\n})"))()}catch(t){}g="object"===typeof h?h:{}}}else g=
j;g&&e[v](g)}f=cb("cd");e=0;for(d=f[E];e<d;++e)Z(Y(),f[e]);f=cb("ci");e=0;for(d=f[E];e<d;++e)Z(Y(),f[e]);e=0;for(d=b[E];e<d;++e)Z(Y(),b[e]);if("explicit"!=$("parsetags")){b=Q(V,"sws",[]);b[v][L](b,a);var u;if(c){var A=c[X.b];A&&(u=function(){O.setTimeout(A,0)},delete c[X.b])}if("complete"!==P[ha])try{Ab(j,m)}catch(Fa){}var C=function(){Ab(u,m)};if("complete"===P[ha])C();else{var G=p,D=function(){if(!G)return G=m,C[L](this,arguments)};O.addEventListener?(O.addEventListener("load",D,p),O.addEventListener("DOMContentLoaded",
D,p)):O.attachEvent&&(O.attachEvent("onreadystatechange",function(){"complete"===P[ha]&&D[L](this,arguments)}),O.attachEvent("onload",D))}}}]);var Hb=/^\{h\:'/,Ib=/^!_/,Gb=function(a,b){a=s(a);if(Hb[w](a))return m;a=a[x](Ib,"");if(!/^\{/[w](a))return p;try{var c=q.JSON.parse(a)}catch(e){return p}if(!c)return p;var d=c.f;return c.s&&d&&-1!=ra[la](b,d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=P[fa](d),c&&d&&ub(d[M],d,c)),m):p};ub=function(a,b,c){if(c.width&&c.height){a[I].cssText="";var e=c.width;c=c.height;var d=a[I];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[I].display="inline-block";a=b[I];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date)[ja]()}};W("bs0",m,q.gapi._bs);W("bs1",m);delete q.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"annotation":[],"platform":["plusone","plus","additnow"],"jsl":{"u":"https://apis.google.com/js/plusone.js","dpo":false,"hee":true,"ci":{"services":{},"inline":{"css":1},"lexps":[17,69,71,36,40,61,74,75,30,45],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv=m&abtk=AEIZW7SpjzEKGs80f1W%2B03oLl5fYU63zHKVAzmvyvqalEUD1eeE9rmNt18s0wrsVpIg2xKyPhG1PQLV%2BcV3Qnn4X4k0Cb6PqZXMq00a/9UfoBqRsAMF0M/s%3D"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=m&abtk=AEIZW7S1aPOJIyna8KJ3JO0ZoO6RdLv8z0VEhlZln1PS4N6qOrWKBmgrO5Glhgi6q/rjhNq0CUvNJ0wP/XduhWJ/WcgSDN78Cygn3aBvl8O0DHTu2HTRSg4%3D"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=m&abtk=AEIZW7Qn71yo9jngB8FyhF3aZrMtOnt7qsJm0rn7wxyiqNcxT/tnVbynyG/H82BZHTrQpRVGTl9a7iooqxU4ZsSu428ft0gi2kDqBTvbi8wvNuLQtsh4J1c%3D"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=m&abtk=AEIZW7ScCmLKrZZKbC%2BcbymVmbQ7R7CUoVWpT1%2BZXWE8tqBXkKCKimZrKBEHpJq%2BWfdnTZK%2B1BQ8CTJjJezRFMbyxdTNgpTAQaGrjsYDEEC28aUKbutqO3M%3D"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=m&abtk=AEIZW7Tt5f1N4ZwhLnaPE/bb2gDiT7j%2BedMJl/i2Ab43a%2Bi250hSiTStC80gzw3S9Hwi5LmlumJyGtvqvDMrzjgYHid1m3CpB5qW2rBJQtJ%2BEiOY7zOjxmE%3D"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=m&abtk=AEIZW7QZS2wHZoKqSJ2j5VNlqeMvdo1ti%2BFuMUqfYXCsU6EtnjwOKj7UtCdwIUMoqtBCBnGPW6LdvifVUr/2cPUgV2e3pAR11hNjd8L3lQlQ0GN4x8a%2B4yo%3D"}},"isPlusUser":false,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=T9JULgXNods.id./sv=1/am=!vjVqvImSc8CICbuUGw/d=1/rs=AItRSTPwj3vl0xVCutFZcguBhPu0EjsWbQ","fp":"2e055bf29933da8460f3a1364204e7597548e9fb"},"fp":"2e055bf29933da8460f3a1364204e7597548e9fb"}});