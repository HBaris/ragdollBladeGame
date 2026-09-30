(()=>{var Vu=0,zc=1,Gu=2;var qi=1,Wu=2,Gs=3,Ri=0,Ne=1,ln=2,qn=0,Ws=1,Fc=2,Oc=3,Bc=4,Xu=5;var Yi=100,qu=101,Yu=102,Zu=103,Ku=104,Ju=200,$u=201,ju=202,Qu=203,kc=204,Hc=205,td=206,ed=207,nd=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,Ja=0,$a=1,ja=2,Ts=3,Qa=4,to=5,eo=6,no=7,No=0,cd=1,hd=2,Tn=0,Vc=1,Gc=2,Wc=3,Jr=4,Xc=5,qc=6,Yc=7;var Zc=300,Ci=301,Zi=302,Do=303,Uo=304,$r=306,si=1e3,Fn=1001,io=1002,Fe=1003,ud=1004;var jr=1005;var ke=1006,zo=1007;var Pi=1008;var tn=1009,Kc=1010,Jc=1011,Xs=1012,Fo=1013,An=1014,pn=1015,Rn=1016,Oo=1017,Bo=1018,qs=1020,$c=35902,jc=35899,Qc=1021,th=1022,mn=1023,Bn=1026,Ii=1027,ko=1028,Ho=1029,Li=1030,Vo=1031;var Go=1033,Qr=33776,ta=33777,ea=33778,na=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,Ko=37492,Jo=37496,$o=37488,jo=37489,ia=37490,Qo=37491,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,xl=36283,yl=36284,sa=36285,_l=36286;var xr=2300,so=2301,Za=2302,Sc=2303,bc=2400,wc=2401,Ec=2402;var dd=3200;var ra=0,fd=1,ci="",Oe="srgb",yr="srgb-linear",_r="linear",me="srgb";var Ka=7680;var pd=519,md=512,gd=513,xd=514,vl=515,yd=516,_d=517,Ml=518,vd=519,eh=35044,Ys=35048;var nh="300 es",bn=2e3,As=2001;function ip(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function sp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Md(){let s=vr("canvas");return s.style.display="block",s}var au={},Rs=null;function Mr(...s){let t="THREE."+s.shift();Rs?Rs("log",t,...s):console.log(t,...s)}function Sd(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=Sd(s);let t="THREE."+s.shift();if(Rs)Rs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Gt(...s){s=Sd(s);let t="THREE."+s.shift();if(Rs)Rs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Gi(...s){let t=s.join(" ");t in au||(au[t]=!0,Wt(...s))}function bd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wd={[Ja]:$a,[ja]:eo,[Qa]:no,[Ts]:to,[$a]:Ja,[eo]:ja,[no]:Qa,[to]:Ts},kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,fr=Math.PI/180,Cs=180/Math.PI;function On(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function ih(s,t){return(s%t+t)%t}function rp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ap(s,t,e){return s!==t?(e-s)/(t-s):0}function pr(s,t,e){return(1-e)*s+e*t}function op(s,t,e,n){return pr(s,t,1-Math.exp(-e*n))}function lp(s,t=1){return t-Math.abs(ih(s,t*2)-t)}function cp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function up(s,t){return s+Math.floor(Math.random()*(t-s+1))}function dp(s,t){return s+Math.random()*(t-s)}function fp(s){return s*(.5-Math.random())}function pp(s){s!==void 0&&(ou=s);let t=ou+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mp(s){return s*fr}function gp(s){return s*Cs}function xp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function yp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function _p(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var sh={DEG2RAD:fr,RAD2DEG:Cs,generateUUID:On,clamp:Qt,euclideanModulo:ih,mapLinear:rp,inverseLerp:ap,lerp:pr,damp:op,pingpong:lp,smoothstep:cp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:xp,ceilPowerOfTwo:yp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:vp,normalize:xe,denormalize:Sn},hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var at=hh,$e=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var P=uh,$l=new P,lu=new $e,dh=class dh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=i[0],g=i[3],m=i[6],v=i[1],w=i[4],y=i[7],S=i[2],M=i[5],A=i[8];return r[0]=a*x+o*v+l*S,r[3]=a*g+o*w+l*M,r[6]=a*m+o*y+l*A,r[1]=c*x+h*v+f*S,r[4]=c*g+h*w+f*M,r[7]=c*m+h*y+f*A,r[2]=u*x+d*v+p*S,r[5]=u*g+d*w+p*M,r[8]=u*m+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(t,e)),this}rotate(t){return Gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-t)),this}translate(t,e){return Gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dh.prototype.isMatrix3=!0;var Zt=dh,jl=new Zt,cu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let s={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?_r:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[yr]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),s}var oe=Mp();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var os,ro=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{os===void 0&&(os=vr("canvas")),os.width=t.width,os.height=t.height;let i=os.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=os}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sp=0,Ps=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ql(i[a].image)):r.push(Ql(i[a]))}else r=Ql(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ql(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ro.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var bp=0,tc=new P,Ze=class s extends kn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Fn,i=Fn,r=ke,a=Pi,o=mn,l=tn,c=s.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=On(),this.name="",this.source=new Ps(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Zc;Ze.DEFAULT_ANISOTROPY=1;var fh=class fh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(d+1)/2,S=(m+1)/2,M=(h+u)/4,A=(f+x)/4,_=(p+g)/4;return w>y&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=M/n,r=A/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=_/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fh.prototype.isVector4=!0;var Ee=fh,ao=class extends kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ze(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ps(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Sr=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Ze{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lo=class Lo{constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Ep)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),gi.crossVectors(n,sn),gi.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),gi.crossVectors(n,sn)),gi.normalize(),Ma.crossVectors(sn,gi),i[0]=gi.x,i[4]=Ma.x,i[8]=sn.x,i[1]=gi.y,i[5]=Ma.y,i[9]=sn.y,i[2]=gi.z,i[6]=Ma.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],w=n[7],y=n[11],S=n[15],M=i[0],A=i[4],_=i[8],E=i[12],R=i[1],L=i[5],D=i[9],B=i[13],I=i[2],O=i[6],W=i[10],H=i[14],tt=i[3],q=i[7],J=i[11],nt=i[15];return r[0]=a*M+o*R+l*I+c*tt,r[4]=a*A+o*L+l*O+c*q,r[8]=a*_+o*D+l*W+c*J,r[12]=a*E+o*B+l*H+c*nt,r[1]=h*M+f*R+u*I+d*tt,r[5]=h*A+f*L+u*O+d*q,r[9]=h*_+f*D+u*W+d*J,r[13]=h*E+f*B+u*H+d*nt,r[2]=p*M+x*R+g*I+m*tt,r[6]=p*A+x*L+g*O+m*q,r[10]=p*_+x*D+g*W+m*J,r[14]=p*E+x*B+g*H+m*nt,r[3]=v*M+w*R+y*I+S*tt,r[7]=v*A+w*L+y*O+S*q,r[11]=v*_+w*D+y*W+S*J,r[15]=v*E+w*B+y*H+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*d-c*u,w=o*d-c*f,y=o*u-l*f,S=a*d-c*h,M=a*u-l*h,A=a*f-o*h;return e*(x*v-g*w+m*y)-n*(p*v-g*S+m*M)+i*(p*w-x*S+m*A)-r*(p*y-x*M+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,w=e*l-i*a,y=e*c-r*a,S=n*l-i*o,M=n*c-r*o,A=i*c-r*l,_=h*x-f*p,E=h*g-u*p,R=h*m-d*p,L=f*g-u*x,D=f*m-d*x,B=u*m-d*g,I=v*B-w*D+y*L+S*R-M*E+A*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/I;return t[0]=(o*B-l*D+c*L)*O,t[1]=(i*D-n*B-r*L)*O,t[2]=(x*A-g*M+m*S)*O,t[3]=(u*M-f*A-d*S)*O,t[4]=(l*R-a*B-c*E)*O,t[5]=(e*B-i*R+r*E)*O,t[6]=(g*y-p*A-m*w)*O,t[7]=(h*A-u*y+d*w)*O,t[8]=(a*D-o*R+c*_)*O,t[9]=(n*R-e*D-r*_)*O,t[10]=(p*M-x*y+m*v)*O,t[11]=(f*y-h*M-d*v)*O,t[12]=(o*E-a*L-l*_)*O,t[13]=(e*L-n*E+i*_)*O,t[14]=(x*w-p*S-g*v)*O,t[15]=(h*S-f*w+u*v)*O,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,x=a*h,g=a*f,m=o*f,v=l*c,w=l*h,y=l*f,S=n.x,M=n.y,A=n.z;return i[0]=(1-(x+m))*S,i[1]=(d+y)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(d-y)*M,i[5]=(1-(u+m))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(p+w)*A,i[9]=(g-v)*A,i[10]=(1-(u+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ls.set(i[0],i[1],i[2]).length(),o=ls.set(i[4],i[5],i[6]).length(),l=ls.set(i[8],i[9],i[10]).length();r<0&&(a=-a),yn.copy(this);let c=1/a,h=1/o,f=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===As)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===bn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===As)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Lo.prototype.isMatrix4=!0;var ee=Lo,ls=new P,yn=new ee,wp=new P(0,0,0),Ep=new P(1,1,1),gi=new P,Ma=new P,sn=new P,uu=new ee,du=new $e,Hn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return uu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(uu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return du.setFromEuler(this),this.setFromQuaternion(du,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hn.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,fu=new P,cs=new $e,$n=new ee,Sa=new P,ir=new P,Ap=new P,Rp=new $e,pu=new P(1,0,0),mu=new P(0,1,0),gu=new P(0,0,1),xu={type:"added"},Cp={type:"removed"},hs={type:"childadded",child:null},ec={type:"childremoved",child:null},Ie=class s extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new Hn,n=new $e,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(pu,t)}rotateY(t){return this.rotateOnAxis(mu,t)}rotateZ(t){return this.rotateOnAxis(gu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(pu,t)}translateY(t){return this.translateOnAxis(mu,t)}translateZ(t){return this.translateOnAxis(gu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sa.copy(t):Sa.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ir,Sa,this.up):$n.lookAt(Sa,ir,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),cs.setFromRotationMatrix($n),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),hs.child=t,this.dispatchEvent(hs),hs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cp),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,t,Ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ir,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pp={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function nc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=ih(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=nc(a,r,t+1/3),this.g=nc(a,r,t),this.b=nc(a,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=Ed[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return oe.workingToColorSpace(Ge.copy(this),t),Math.round(Qt(Ge.r*255,0,255))*65536+Math.round(Qt(Ge.g*255,0,255))*256+Math.round(Qt(Ge.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,i=Ge.g,r=Ge.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Oe){oe.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,i=Ge.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(xi),this.setHSL(xi.h+t,xi.s+e,xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xi),t.getHSL(ba);let n=pr(xi.h,ba.h,e),i=pr(xi.s,ba.s,e),r=pr(xi.l,ba.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Ot;Ot.NAMES=Ed;var br=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new P,jn=new P,ic=new P,Qn=new P,us=new P,ds=new P,yu=new P,sc=new P,rc=new P,ac=new P,oc=new Ee,lc=new Ee,cc=new Ee,ni=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),jn.subVectors(n,e),ic.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(jn),l=_n.dot(ic),c=jn.dot(jn),h=jn.dot(ic),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(t,e),lc.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),jn.subVectors(t,e),_n.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),_n.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;us.subVectors(i,n),ds.subVectors(r,n),sc.subVectors(t,n);let l=us.dot(sc),c=ds.dot(sc);if(l<=0&&c<=0)return e.copy(n);rc.subVectors(t,i);let h=us.dot(rc),f=ds.dot(rc);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(us,a);ac.subVectors(t,r);let d=us.dot(ac),p=ds.dot(ac);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ds,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return yu.subVectors(r,i),o=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(yu,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sr),Ea.subVectors(this.max,sr),fs.subVectors(t.a,sr),ps.subVectors(t.b,sr),ms.subVectors(t.c,sr),yi.subVectors(ps,fs),_i.subVectors(ms,ps),Oi.subVectors(fs,ms);let e=[0,-yi.z,yi.y,0,-_i.z,_i.y,0,-Oi.z,Oi.y,yi.z,0,-yi.x,_i.z,0,-_i.x,Oi.z,0,-Oi.x,-yi.y,yi.x,0,-_i.y,_i.x,0,-Oi.y,Oi.x,0];return!hc(e,fs,ps,ms,Ea)||(e=[1,0,0,0,1,0,0,0,1],!hc(e,fs,ps,ms,Ea))?!1:(Ta.crossVectors(yi,_i),e=[Ta.x,Ta.y,Ta.z],hc(e,fs,ps,ms,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new P,new P,new P,new P,new P,new P,new P,new P],vn=new P,wa=new Vn,fs=new P,ps=new P,ms=new P,yi=new P,_i=new P,Oi=new P,sr=new P,Ea=new P,Ta=new P,Bi=new P;function hc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bi.fromArray(s,r);let o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new P,Aa=new at,Ip=0,Ae=class extends kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var wr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Er=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lp=new Vn,rr=new P,uc=new P,ri=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Lp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rr.subVectors(t,this.center);let e=rr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(rr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(uc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rr.copy(t.center).add(uc)),this.expandByPoint(rr.copy(t.center).sub(uc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Np=0,fn=new ee,dc=new Ie,gs=new P,rn=new Vn,ar=new Vn,ze=new P,ve=class s extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ip(t)?Er:wr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(rn.min,ar.min),rn.expandByPoint(ze),ze.addVectors(rn.max,ar.max),rn.expandByPoint(ze)):(rn.expandByPoint(ar.min),rn.expandByPoint(ar.max))}rn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ze.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(t,c),ze.add(gs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,h=new P,f=new P,u=new at,d=new at,p=new at,x=new P,g=new P;function m(_,E,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),o[_].add(x),o[E].add(x),o[R].add(x),l[_].add(g),l[E].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,E=v.length;_<E;++_){let R=v[_],L=R.start,D=R.count;for(let B=L,I=L+D;B<I;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let w=new P,y=new P,S=new P,M=new P;function A(_){S.fromBufferAttribute(i,_),M.copy(S);let E=o[_];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(M,E);let L=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,E=v.length;_<E;++_){let R=v[_],L=R.start,D=R.count;for(let B=L,I=L+D;B<I;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Ae(u,h,f)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ye=new P,Ns=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Mr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Mr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fc=new P,Dp=new P,Up=new Zt,Mn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fc.subVectors(n,e).cross(Dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Up.getNormalMatrix(t),i=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},zp=0,wn=class extends kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=On(),this.name="",this.type="Material",this.blending=Ws,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Mn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gn=class extends wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,or=new P,ys=new P,_s=new P,vs=new at,lr=new at,Td=new ee,Ra=new P,cr=new P,Ca=new P,_u=new at,pc=new at,vu=new at,ai=class extends Ie{constructor(t=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tr(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Ns(n,3,0,!1)),xs.setAttribute("uv",new Ns(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Td.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_s.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-_s.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Pa(Ra.set(-.5,-.5,0),_s,a,ys,i,r),Pa(cr.set(.5,-.5,0),_s,a,ys,i,r),Pa(Ca.set(.5,.5,0),_s,a,ys,i,r),_u.set(0,0),pc.set(1,0),vu.set(1,1);let o=t.ray.intersectTriangle(Ra,cr,Ca,!1,or);if(o===null&&(Pa(cr.set(-.5,.5,0),_s,a,ys,i,r),pc.set(0,1),o=t.ray.intersectTriangle(Ra,Ca,cr,!1,or),o===null))return;let l=t.ray.origin.distanceTo(or);l<t.near||l>t.far||e.push({distance:l,point:or.clone(),uv:ni.getInterpolation(or,Ra,cr,Ca,_u,pc,vu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pa(s,t,e,n,i,r){vs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(lr.x=r*vs.x-i*vs.y,lr.y=i*vs.x+r*vs.y):lr.copy(vs),s.copy(t),s.x+=lr.x,s.y+=lr.y,s.applyMatrix4(Td)}var ei=new P,mc=new P,Ia=new P,La=new P,Ds=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mc.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),La.copy(this.origin).sub(mc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ia),o=La.dot(this.direction),l=-La.dot(Ia),c=La.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(mc).addScaledVector(Ia,u),d}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,w=n.z-a.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(h),A,_,E,R,L,D,B,I,O,W,H,tt;if(y>=S&&y>=M?(E=l,D=f,O=p,tt=m,l>=0?(A=c,_=h,R=u,L=d,B=x,I=g,W=v,H=w):(A=h,_=c,R=d,L=u,B=g,I=x,W=w,H=v)):S>=M?(E=c,D=u,O=x,tt=v,c>=0?(A=h,_=l,R=d,L=f,B=g,I=p,W=w,H=m):(A=l,_=h,R=f,L=d,B=p,I=g,W=m,H=w)):(E=h,D=d,O=g,tt=w,h>=0?(A=l,_=c,R=f,L=u,B=p,I=x,W=m,H=v):(A=c,_=l,R=u,L=f,B=x,I=p,W=v,H=m)),E===0)return null;let q=A/E,J=_/E,nt=1/E,Ct=R-q*D,Et=L-J*D,ie=B-q*O,Yt=I-J*O,se=W-q*tt,K=H-J*tt,et=se*Yt-K*ie,pt=Ct*K-Et*se,kt=ie*Et-Yt*Ct;if(i){if(et<0||pt<0||kt<0)return null}else if((et<0||pt<0||kt<0)&&(et>0||pt>0||kt>0))return null;let Tt=et+pt+kt;if(Tt===0)return null;let Xt=nt*(et*D+pt*O+kt*tt);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Mu=new ee,ki=new Ds,Na=new ri,Su=new P,Da=new P,Ua=new P,za=new P,gc=new P,Fa=new P,bu=new P,Oa=new P,Pt=class extends Ie{constructor(t=new ve,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(gc.fromBufferAttribute(f,t),a?Fa.addScaledVector(gc,h):Fa.addScaledVector(gc.sub(e),h))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(Na.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Na,Su)===null||ki.origin.distanceToSquared(Su)>(t.far-t.near)**2))&&(Mu.copy(r).invert(),ki.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),w=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,S=w;y<S;y+=3){let M=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);i=Ba(this,m,t,n,c,h,f,M,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=Ba(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),w=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,S=w;y<S;y+=3){let M=y,A=y+1,_=y+2;i=Ba(this,m,t,n,c,h,f,M,A,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let v=g,w=g+1,y=g+2;i=Ba(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Fp(s,t,e,n,i,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ri,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:s}}function Ba(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Da),s.getVertexPosition(l,Ua),s.getVertexPosition(c,za);let h=Fp(s,t,e,n,Da,Ua,za,bu);if(h){let f=new P;ni.getBarycoord(bu,Da,Ua,za,f),i&&(h.uv=ni.getInterpolatedAttribute(i,o,l,c,f,new at)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,l,c,f,new at)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,l,c,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};ni.getNormal(Da,Ua,za,u.normal),h.face=u,h.barycoord=f}return h}var Ar=class extends Ze{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Fe,h=Fe,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends Ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new ee,wu=new ee,ka=[],Eu=new Vn,Op=new ee,hr=new Pt,ur=new ri,Wn=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Op)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),Eu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(Eu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ur.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ms),wu.multiplyMatrices(n,Ms),hr.matrixWorld=wu,hr.raycast(t,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,e.push(l)}ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(i*this.count),i,this.count,ko,pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new ri,Bp=new at(.5,.5),Ha=new P,zs=class{constructor(t=new Mn,e=new Mn,n=new Mn,i=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],w=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-a,d-h,m-p,S-v).normalize(),i[1].setComponents(c+a,d+h,m+p,S+v).normalize(),i[2].setComponents(c+o,d+f,m+x,S+w).normalize(),i[3].setComponents(c-o,d-f,m-x,S-w).normalize(),n)i[4].setComponents(l,u,g,y).normalize(),i[5].setComponents(c-l,d-u,m-g,S-y).normalize();else if(i[4].setComponents(c-l,d-u,m-g,S-y).normalize(),e===bn)i[5].setComponents(c+l,d+u,m+g,S+y).normalize();else if(e===As)i[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=Bp.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Ha.x=i.normal.x>0?t.max.x:t.min.x,Ha.y=i.normal.y>0?t.max.y:t.min.y,Ha.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xn=class extends wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Tu=new ee,Tc=new Ds,Va=new ri,Ga=new P,Rr=class extends Ie{constructor(t=new ve,e=new Xn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=r,t.ray.intersectsSphere(Va)===!1)return;Tu.copy(i).invert(),Tc.copy(t.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++){let g=c.getX(p);Ga.fromBufferAttribute(f,g),Au(Ga,g,l,i,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,x=d;p<x;p++)Ga.fromBufferAttribute(f,p),Au(Ga,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Au(s,t,e,n,i,r,a){let o=Tc.distanceSqToPoint(s);if(o<e){let l=new P;Tc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Cr=class extends Ze{constructor(t=[],e=Ci,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mi=class extends Ze{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends Ze{constructor(t,e,n=An,i,r,a,o=Fe,l=Fe,c,h=Bn,f=1){if(h!==Bn&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ps(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},lo=class extends Si{constructor(t,e=An,n=Ci,i,r,a=Fe,o=Fe,l,c=Bn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Pr=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Le=class s extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function p(x,g,m,v,w,y,S,M,A,_,E){let R=y/A,L=S/_,D=y/2,B=S/2,I=M/2,O=A+1,W=_+1,H=0,tt=0,q=new P;for(let J=0;J<W;J++){let nt=J*L-B;for(let Ct=0;Ct<O;Ct++){let Et=Ct*R-D;q[x]=Et*v,q[g]=nt*w,q[m]=I,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=M>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ct/A),f.push(1-J/_),H+=1}}for(let J=0;J<_;J++)for(let nt=0;nt<A;nt++){let Ct=u+nt+O*J,Et=u+nt+O*(J+1),ie=u+(nt+1)+O*(J+1),Yt=u+(nt+1)+O*J;l.push(Ct,Et,Yt),l.push(Et,ie,Yt),tt+=6}o.addGroup(d,tt,E),d+=tt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},li=class s extends ve{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,p=n*2+r,x=i+1,g=new P,m=new P;for(let v=0;v<=p;v++){let w=0,y=0,S=0,M=0;if(v<=n){let E=v/n,R=E*Math.PI/2;y=-h-t*Math.cos(R),S=t*Math.sin(R),M=-t*Math.cos(R),w=E*f}else if(v<=n+r){let E=(v-n)/r;y=-h+E*e,S=t,M=0,w=f+E*u}else{let E=(v-n-r)/n,R=E*Math.PI/2;y=h+t*Math.sin(R),S=t*Math.cos(R),M=t*Math.sin(R),w=f+u+E*f}let A=Math.max(0,Math.min(1,w/d)),_=0;v===0?_=.5/i:v===p&&(_=-.5/i);for(let E=0;E<=i;E++){let R=E/i,L=R*Math.PI*2,D=Math.sin(L),B=Math.cos(L);m.x=-S*B,m.y=y,m.z=S*D,o.push(m.x,m.y,m.z),g.set(-S*B,M,S*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,A)}if(v>0){let E=(v-1)*x;for(let R=0;R<i;R++){let L=E+R,D=E+R+1,B=v*x+R,I=v*x+R+1;a.push(L,D,B),a.push(D,I,B)}}}this.setIndex(a),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ir=class s extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class s extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],g=n/2,m=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function v(){let y=new P,S=new P,M=0,A=(e-t)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,L=R*(e-t)+t;for(let D=0;D<=i;D++){let B=D/i,I=B*l+o,O=Math.sin(I),W=Math.cos(I);S.x=L*O,S.y=-R*n+g,S.z=L*W,f.push(S.x,S.y,S.z),y.set(O,A,W).normalize(),u.push(y.x,y.y,y.z),d.push(B,1-R),E.push(p++)}x.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let R=x[E][_],L=x[E+1][_],D=x[E+1][_+1],B=x[E][_+1];(t>0||E!==0)&&(h.push(R,L,B),M+=3),(e>0||E!==r-1)&&(h.push(L,D,B),M+=3)}c.addGroup(m,M,0),m+=M}function w(y){let S=p,M=new at,A=new P,_=0,E=y===!0?t:e,R=y===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;let L=p;for(let D=0;D<=i;D++){let I=D/i*l+o,O=Math.cos(I),W=Math.sin(I);A.x=E*W,A.y=g*R,A.z=E*O,f.push(A.x,A.y,A.z),u.push(0,R,0),M.x=O*.5+.5,M.y=W*.5*R+.5,d.push(M.x,M.y),p++}for(let D=0;D<i;D++){let B=S+D,I=L+D;y===!0?h.push(I,I+1,B):h.push(I+1,I,B),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class s extends Ke{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},co=class s extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new P,y=new P,S=new P;for(let M=0;M<e.length;M+=3)d(e[M+0],w),d(e[M+1],y),d(e[M+2],S),l(w,y,S,v)}function l(v,w,y,S){let M=S+1,A=[];for(let _=0;_<=M;_++){A[_]=[];let E=v.clone().lerp(y,_/M),R=w.clone().lerp(y,_/M),L=M-_;for(let D=0;D<=L;D++)D===0&&_===M?A[_][D]=E:A[_][D]=E.clone().lerp(R,D/L)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let R=Math.floor(E/2);E%2===0?(u(A[_][R+1]),u(A[_+1][R]),u(A[_][R])):(u(A[_][R+1]),u(A[_+1][R+1]),u(A[_+1][R]))}}function c(v){let w=new P;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let v=new P;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let y=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(y,1-S)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){let w=a[v+0],y=a[v+2],S=a[v+4],M=Math.max(w,y,S),A=Math.min(w,y,S);M>.9&&A<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,w){let y=v*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){let v=new P,w=new P,y=new P,S=new P,M=new at,A=new at,_=new at;for(let E=0,R=0;E<r.length;E+=9,R+=6){v.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),M.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),S.copy(v).add(w).add(y).divideScalar(3);let L=g(S);x(M,R+0,v,L),x(A,R+2,w,L),x(_,R+4,y,L)}}function x(v,w,y,S){S<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Fs=class s extends co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Wt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new at:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],r=[],a=[],o=new P,l=new ee;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Qt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Os=class extends an{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ho=class extends Os{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Ru=new P,Cu=new P,xc=new rh,yc=new rh,_c=new rh,uo=class extends an{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Cu.subVectors(i[0],i[1]).add(i[0]),c=Cu);let f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ru.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),xc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,g),yc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,g),_c.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),yc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_c.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(xc.calc(l),yc.calc(l),_c.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Pu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function kp(s,t){let e=1-s;return e*e*t}function Hp(s,t){return 2*(1-s)*s*t}function Vp(s,t){return s*s*t}function mr(s,t,e,n){return kp(s,t)+Hp(s,e)+Vp(s,n)}function Gp(s,t){let e=1-s;return e*e*e*t}function Wp(s,t){let e=1-s;return 3*e*e*s*t}function Xp(s,t){return 3*(1-s)*s*s*t}function qp(s,t){return s*s*s*t}function gr(s,t,e,n,i){return Gp(s,t)+Wp(s,e)+Xp(s,n)+qp(s,i)}var Lr=class extends an{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,i.x,r.x,a.x,o.x),gr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fo=class extends an{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(gr(t,i.x,r.x,a.x,o.x),gr(t,i.y,r.y,a.y,o.y),gr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends an{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},po=class extends an{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends an{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,i.x,r.x,a.x),mr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends an{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(mr(t,i.x,r.x,a.x),mr(t,i.y,r.y,a.y),mr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Pu(o,l.x,c.x,h.x,f.x),Pu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new at().fromArray(i))}return this}},Ac=Object.freeze({__proto__:null,ArcCurve:ho,CatmullRomCurve3:uo,CubicBezierCurve:Lr,CubicBezierCurve3:fo,EllipseCurve:Os,LineCurve:Nr,LineCurve3:po,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:mo,SplineCurve:Ur}),go=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Ac[i.type]().fromJSON(i))}return this}},zr=class extends go{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Dr(this.currentPoint.clone(),new at(t,e),new at(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Lr(this.currentPoint.clone(),new at(t,e),new at(n,i),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ur(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Os(t,e,n,i,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Bs=class extends zr{constructor(t){super(t),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zr().fromJSON(i))}return this}};function Yp(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Ad(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jp(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let u=e;u<i;u+=e){let d=s[u],p=s[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Fr(r,a,e,o,l,c,0),a}function Ad(s,t,e,n,i){let r;if(i===cm(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Iu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Iu(a/n|0,s[a],s[a+1],r);return r&&ks(r,r.next)&&(Br(r),r=r.next),r}function Xi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||Te(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&im(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Kp(s,n,i,r):Zp(s)){t.push(l.i,s.i,c.i),Br(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Jp(Xi(s),t),Fr(s,t,e,n,i,r,2)):a===2&&$p(s,t,e,n,i,r):Fr(Xi(s),t,e,n,i,r,1);break}}}function Zp(s){let t=s.prev,e=s,n=s.next;if(Te(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),u=Math.max(i,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&dr(i,o,r,l,a,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Kp(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Te(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),m=Rc(d,p,t,e,n),v=Rc(x,g,t,e,n),w=s.prevZ,y=s.nextZ;for(;w&&w.z>=m&&y&&y.z<=v;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&dr(o,h,l,f,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&dr(o,h,l,f,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&dr(o,h,l,f,c,u,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&dr(o,h,l,f,c,u,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jp(s,t){let e=s;do{let n=e.prev,i=e.next.next;!ks(n,i)&&Cd(n,e,e.next,i)&&Or(n,i)&&Or(i,n)&&(t.push(n.i,e.i,i.i),Br(e),Br(e.next),e=s=i),e=e.next}while(e!==s);return Xi(e)}function $p(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&am(a,o)){let l=Pd(a,o);a=Xi(a,a.next),l=Xi(l,l.next),Fr(a,t,e,n,i,r,0),Fr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function jp(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Ad(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(rm(c))}i.sort(Qp);for(let r=0;r<i.length;r++)e=tm(i[r],e);return e}function Qp(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function tm(s,t){let e=em(s,t);if(!e)return t;let n=Pd(e,s);return Xi(n,n.next),Xi(e,e.next)}function em(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(ks(s,e))return e;do{if(ks(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Rd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Or(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&nm(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function nm(s,t){return Te(s.prev,s,t.prev)<0&&Te(t.next,s,s.next)<0}function im(s,t,e,n){let i=s;do i.z===0&&(i.z=Rc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sm(i)}function sm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Rc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function rm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Rd(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function dr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Rd(s,t,e,n,i,r,a,o)}function am(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!om(s,t)&&(Or(s,t)&&Or(t,s)&&lm(s,t)&&(Te(s.prev,s,t.prev)||Te(s,t.prev,t))||ks(s,t)&&Te(s.prev,s,s.next)>0&&Te(t.prev,t,t.next)>0)}function Te(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ks(s,t){return s.x===t.x&&s.y===t.y}function Cd(s,t,e,n){let i=Xa(Te(s,t,e)),r=Xa(Te(s,t,n)),a=Xa(Te(e,n,s)),o=Xa(Te(e,n,t));return!!(i!==r&&a!==o||i===0&&Wa(s,e,t)||r===0&&Wa(s,n,t)||a===0&&Wa(e,s,n)||o===0&&Wa(e,t,n))}function Wa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Xa(s){return s>0?1:s<0?-1:0}function om(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Cd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Or(s,t){return Te(s.prev,s,s.next)<0?Te(s,t,s.next)>=0&&Te(s,s.prev,t)>=0:Te(s,t,s.prev)<0||Te(s,s.next,t)<0}function lm(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Pd(s,t){let e=Cc(s.i,s.x,s.y),n=Cc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Iu(s,t,e,n){let i=Cc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Br(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Pc=class{static triangulate(t,e,n=2){return Yp(t,e,n)}},Vi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Lu(t),Nu(n,t);let a=t.length;e.forEach(Lu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Nu(n,e[l]);let o=Pc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Lu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Nu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var kr=class s extends ve{constructor(t=new Bs([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:hm,w,y=!1,S,M,A,_;if(m){w=m.getSpacedPoints(h),y=!0,u=!1;let st=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,st),M=new P,A=new P,_=new P}u||(g=0,d=0,p=0,x=0);let E=o.extractPoints(c),R=E.shape,L=E.holes;if(!Vi.isClockWise(R)){R=R.reverse();for(let st=0,lt=L.length;st<lt;st++){let ct=L[st];Vi.isClockWise(ct)&&(L[st]=ct.reverse())}}function B(st){let ct=10000000000000001e-36,ht=st[0];for(let ft=1;ft<=st.length;ft++){let Ht=ft%st.length,Bt=st[Ht],qt=Bt.x-ht.x,Kt=Bt.y-ht.y,N=qt*qt+Kt*Kt,ue=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ht.x),Math.abs(ht.y)),re=ct*ue*ue;if(N<=re){st.splice(Ht,1),ft--;continue}ht=Bt}}B(R),L.forEach(B);let I=L.length,O=R;for(let st=0;st<I;st++){let lt=L[st];R=R.concat(lt)}function W(st,lt,ct){return lt||Gt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(lt,ct)}let H=R.length;function tt(st,lt,ct){let ht,ft,Ht,Bt=st.x-lt.x,qt=st.y-lt.y,Kt=ct.x-st.x,N=ct.y-st.y,ue=Bt*Bt+qt*qt,re=Bt*N-qt*Kt;if(Math.abs(re)>Number.EPSILON){let C=Math.sqrt(ue),b=Math.sqrt(Kt*Kt+N*N),k=lt.x-qt/C,X=lt.y+Bt/C,$=ct.x-N/b,ut=ct.y+Kt/b,dt=(($-k)*N-(ut-X)*Kt)/(Bt*N-qt*Kt);ht=k+Bt*dt-st.x,ft=X+qt*dt-st.y;let j=ht*ht+ft*ft;if(j<=2)return new at(ht,ft);Ht=Math.sqrt(j/2)}else{let C=!1;Bt>Number.EPSILON?Kt>Number.EPSILON&&(C=!0):Bt<-Number.EPSILON?Kt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(N)&&(C=!0),C?(ht=-qt,ft=Bt,Ht=Math.sqrt(ue)):(ht=Bt,ft=qt,Ht=Math.sqrt(ue/2))}return new at(ht/Ht,ft/Ht)}let q=[];for(let st=0,lt=O.length,ct=lt-1,ht=st+1;st<lt;st++,ct++,ht++)ct===lt&&(ct=0),ht===lt&&(ht=0),q[st]=tt(O[st],O[ct],O[ht]);let J=[],nt,Ct=q.concat();for(let st=0,lt=I;st<lt;st++){let ct=L[st];nt=[];for(let ht=0,ft=ct.length,Ht=ft-1,Bt=ht+1;ht<ft;ht++,Ht++,Bt++)Ht===ft&&(Ht=0),Bt===ft&&(Bt=0),nt[ht]=tt(ct[ht],ct[Ht],ct[Bt]);J.push(nt),Ct=Ct.concat(nt)}let Et;if(g===0)Et=Vi.triangulateShape(O,L);else{let st=[],lt=[];for(let ct=0;ct<g;ct++){let ht=ct/g,ft=d*Math.cos(ht*Math.PI/2),Ht=p*Math.sin(ht*Math.PI/2)+x;for(let Bt=0,qt=O.length;Bt<qt;Bt++){let Kt=W(O[Bt],q[Bt],Ht);pt(Kt.x,Kt.y,-ft),ht===0&&st.push(Kt)}for(let Bt=0,qt=I;Bt<qt;Bt++){let Kt=L[Bt];nt=J[Bt];let N=[];for(let ue=0,re=Kt.length;ue<re;ue++){let C=W(Kt[ue],nt[ue],Ht);pt(C.x,C.y,-ft),ht===0&&N.push(C)}ht===0&&lt.push(N)}}Et=Vi.triangulateShape(st,lt)}let ie=Et.length,Yt=p+x;for(let st=0;st<H;st++){let lt=u?W(R[st],Ct[st],Yt):R[st];y?(A.copy(S.normals[0]).multiplyScalar(lt.x),M.copy(S.binormals[0]).multiplyScalar(lt.y),_.copy(w[0]).add(A).add(M),pt(_.x,_.y,_.z)):pt(lt.x,lt.y,0)}for(let st=1;st<=h;st++)for(let lt=0;lt<H;lt++){let ct=u?W(R[lt],Ct[lt],Yt):R[lt];y?(A.copy(S.normals[st]).multiplyScalar(ct.x),M.copy(S.binormals[st]).multiplyScalar(ct.y),_.copy(w[st]).add(A).add(M),pt(_.x,_.y,_.z)):pt(ct.x,ct.y,f/h*st)}for(let st=g-1;st>=0;st--){let lt=st/g,ct=d*Math.cos(lt*Math.PI/2),ht=p*Math.sin(lt*Math.PI/2)+x;for(let ft=0,Ht=O.length;ft<Ht;ft++){let Bt=W(O[ft],q[ft],ht);pt(Bt.x,Bt.y,f+ct)}for(let ft=0,Ht=L.length;ft<Ht;ft++){let Bt=L[ft];nt=J[ft];for(let qt=0,Kt=Bt.length;qt<Kt;qt++){let N=W(Bt[qt],nt[qt],ht);y?pt(N.x,N.y+w[h-1].y,w[h-1].x+ct):pt(N.x,N.y,f+ct)}}}se(),K();function se(){let st=i.length/3;if(u){let lt=0,ct=H*lt;for(let ht=0;ht<ie;ht++){let ft=Et[ht];kt(ft[2]+ct,ft[1]+ct,ft[0]+ct)}lt=h+g*2,ct=H*lt;for(let ht=0;ht<ie;ht++){let ft=Et[ht];kt(ft[0]+ct,ft[1]+ct,ft[2]+ct)}}else{for(let lt=0;lt<ie;lt++){let ct=Et[lt];kt(ct[2],ct[1],ct[0])}for(let lt=0;lt<ie;lt++){let ct=Et[lt];kt(ct[0]+H*h,ct[1]+H*h,ct[2]+H*h)}}n.addGroup(st,i.length/3-st,0)}function K(){let st=i.length/3,lt=0;et(O,lt),lt+=O.length;for(let ct=0,ht=L.length;ct<ht;ct++){let ft=L[ct];et(ft,lt),lt+=ft.length}n.addGroup(st,i.length/3-st,1)}function et(st,lt){let ct=st.length;for(;--ct>=0;){let ht=ct,ft=ct-1;ft<0&&(ft=st.length-1);for(let Ht=0,Bt=h+g*2;Ht<Bt;Ht++){let qt=H*Ht,Kt=H*(Ht+1),N=lt+ht+qt,ue=lt+ft+qt,re=lt+ft+Kt,C=lt+ht+Kt;Tt(N,ue,re,C)}}}function pt(st,lt,ct){l.push(st),l.push(lt),l.push(ct)}function kt(st,lt,ct){Xt(st),Xt(lt),Xt(ct);let ht=i.length/3,ft=v.generateTopUV(n,i,ht-3,ht-2,ht-1);ge(ft[0]),ge(ft[1]),ge(ft[2])}function Tt(st,lt,ct,ht){Xt(st),Xt(lt),Xt(ht),Xt(lt),Xt(ct),Xt(ht);let ft=i.length/3,Ht=v.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);ge(Ht[0]),ge(Ht[1]),ge(Ht[3]),ge(Ht[1]),ge(Ht[2]),ge(Ht[3])}function Xt(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function ge(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return um(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ac[i.type]().fromJSON(i)),new s(n,t.options)}},hm={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-f),new at(u,1-p),new at(x,1-m)]:[new at(o,1-l),new at(h,1-f),new at(d,1-p),new at(g,1-m)]}};function um(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Hr=class s extends ve{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new P,u=new at,d=new P,p=new P,x=new P,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let v=0;v<=e;v++){let w=n+v*h*i,y=Math.sin(w),S=Math.cos(w);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*y,f.y=t[M].y,f.z=t[M].x*S,a.push(f.x,f.y,f.z),u.x=v/e,u.y=M/(t.length-1),o.push(u.x,u.y);let A=l[3*M+0]*y,_=l[3*M+1],E=l[3*M+0]*S;c.push(A,_,E)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let y=w+v*t.length,S=y,M=y+t.length,A=y+t.length+1,_=y+1;r.push(S,M,_),r.push(A,_,M)}this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("uv",new le(o,2)),this.setAttribute("normal",new le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var En=class s extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-a;for(let w=0;w<c;w++){let y=w*f-r;p.push(y,-v,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let w=v+c*m,y=v+c*(m+1),S=v+1+c*(m+1),M=v+1+c*m;d.push(w,y,M),d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qe=class s extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new P,u=new P,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],w=m/n,y=a+w*o,S=t*Math.cos(y),M=Math.sqrt(t*t-S*S),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let E=_/e,R=i+E*r;f.x=-M*Math.cos(R),f.y=S,f.z=M*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(E+A,1-w),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let w=h[m][v+1],y=h[m][v],S=h[m+1][v],M=h[m+1][v+1];(m!==0||a>0)&&d.push(w,y,M),(m!==n-1||l<Math.PI)&&d.push(y,S,M)}this.setIndex(d),this.setAttribute("position",new le(p,3)),this.setAttribute("normal",new le(x,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ki(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Du(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Du(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Xe(s){let t={};for(let e=0;e<s.length;e++){let n=Ki(s[e]);for(let i in n)t[i]=n[i]}return t}function Du(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function dm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ah(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Sl={clone:Ki,merge:Xe},fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=dm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new at().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},xo=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wi=class extends $t{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Vr=class extends wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=No,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yo=class extends wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_o=class extends wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function vc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ei=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:r=t,o=2*e-n;break;case Ec:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:a=t,l=2*n-e;break;case Ec:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+v*a[c+S]+w*a[l+S]+y*a[f+S];return r}},Mo=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},So=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bo=class extends Ei{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,d=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=d*u+p*2,v=f[m],w=f[m+1],y=t*u+p*2,S=h[y],M=h[y+1],A=gm(n,e,v,S,i);r[p]=Id(A,x,w,M,g)}return r}};function Id(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function mm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function gm(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Id(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=mm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var on=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),vc(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case Sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;vc(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Gt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Gt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&sp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Gt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[u+p]||x!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,vc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Uu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=so;var Ti=class extends on{constructor(t,e,n){super(t,e,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=xr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};wo.prototype.ValueTypeName="color";var Eo=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};Eo.prototype.ValueTypeName="number";var To=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends on{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends on{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=xr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends on{constructor(t,e,n,i){super(t,e,n,i)}};Ao.prototype.ValueTypeName="vector";var Ro=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ld=new Ro,Co=class{constructor(t){this.manager=t!==void 0?t:Ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hs=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wr=class extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Mc=new ee,zu=new P,Fu=new P,Xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===As||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Mc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qa=new P,Ya=new $e,zn=new P,qr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,Ya,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qa,Ya,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vi=new P,Ou=new at,Bu=new at,Be=class extends qr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,Bu),e.subVectors(Bu,Ou)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ic=class extends Xr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Yr=class extends Hs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Vs=class extends qr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Lc=class extends Xr{constructor(){super(new Vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Lc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var bs=-90,ws=1,Po=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(bs,ws,t,e);i.layers=this.layers,this.add(i);let r=new Be(bs,ws,t,e);r.layers=this.layers,this.add(r);let a=new Be(bs,ws,t,e);a.layers=this.layers,this.add(a);let o=new Be(bs,ws,t,e);o.layers=this.layers,this.add(o);let l=new Be(bs,ws,t,e);l.layers=this.layers,this.add(l);let c=new Be(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Io=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var oh="\\[\\]\\.:\\/",xm=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",ym="[^"+oh.replace("\\.","")+"]",_m=/((?:WC+[\/:])*)/.source.replace("WC",lh),vm=/(WCOD+)?/.source.replace("WCOD",ym),Mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Sm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),bm=new RegExp("^"+_m+vm+Mm+Sm+"$"),wm=["material","materials","bones","map"],Nc=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xm,"")}static parseTrackName(t){let e=bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Nc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zv=new Float32Array(1);var ku=new ee,Kr=class{constructor(t,e,n=0,i=1/0){this.ray=new Ds(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Gt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ku.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ku),this}intersectObject(t,e=!0,n=[]){return Dc(t,this,n,e),n.sort(Hu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dc(t[i],this,n,e);return n.sort(Hu),n}};function Hu(s,t){return s.distance-t.distance}function Dc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],t,e,!0)}}var ph=class ph{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};ph.prototype.isMatrix2=!0;var Uc=ph;function ch(s,t,e,n){let i=Em(n);switch(e){case Qc:return s*t;case ko:return s*t/i.components*i.byteLength;case Ho:return s*t/i.components*i.byteLength;case Li:return s*t*2/i.components*i.byteLength;case Vo:return s*t*2/i.components*i.byteLength;case th:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case Go:return s*t*4/i.components*i.byteLength;case Qr:case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xo:case Yo:return Math.max(s,16)*Math.max(t,8)/4;case Wo:case qo:return Math.max(s,8)*Math.max(t,8)/2;case Zo:case Ko:case $o:case jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Jo:case ia:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xl:case yl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case sa:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Em(s){switch(s){case tn:case Kc:return{byteLength:1,components:1};case Xs:case Jc:case Rn:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case An:case Fo:case pn:return{byteLength:4,components:1};case $c:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Pm(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,b0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,w0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ug=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Og=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ax=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Im,alphahash_pars_fragment:Lm,alphamap_fragment:Nm,alphamap_pars_fragment:Dm,alphatest_fragment:Um,alphatest_pars_fragment:zm,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:km,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Gm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Km,color_fragment:Jm,color_pars_fragment:$m,color_pars_vertex:jm,color_vertex:Qm,common:t0,cube_uv_reflection_fragment:e0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:a0,colorspace_fragment:o0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:x0,gradientmap_pars_fragment:y0,lightmap_pars_fragment:_0,lights_lambert_fragment:v0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:w0,lights_toon_pars_fragment:E0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:I0,lights_fragment_end:L0,lightprobes_pars_fragment:N0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:z0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:B0,map_particle_fragment:k0,map_particle_pars_fragment:H0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:G0,morphinstance_vertex:W0,morphcolor_vertex:X0,morphnormal_vertex:q0,morphtarget_pars_vertex:Y0,morphtarget_vertex:Z0,normal_fragment_begin:K0,normal_fragment_maps:J0,normal_pars_fragment:$0,normal_pars_vertex:j0,normal_vertex:Q0,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:ng,clearcoat_pars_fragment:ig,iridescence_pars_fragment:sg,opaque_fragment:rg,packing:ag,premultiplied_alpha_fragment:og,project_vertex:lg,dithering_fragment:cg,dithering_pars_fragment:hg,roughnessmap_fragment:ug,roughnessmap_pars_fragment:dg,shadowmap_pars_fragment:fg,shadowmap_pars_vertex:pg,shadowmap_vertex:mg,shadowmask_pars_fragment:gg,skinbase_vertex:xg,skinning_pars_vertex:yg,skinning_vertex:_g,skinnormal_vertex:vg,specularmap_fragment:Mg,specularmap_pars_fragment:Sg,tonemapping_fragment:bg,tonemapping_pars_fragment:wg,transmission_fragment:Eg,transmission_pars_fragment:Tg,uv_pars_fragment:Ag,uv_pars_vertex:Rg,uv_vertex:Cg,worldpos_vertex:Pg,background_vert:Ig,background_frag:Lg,backgroundCube_vert:Ng,backgroundCube_frag:Dg,cube_vert:Ug,cube_frag:zg,depth_vert:Fg,depth_frag:Og,distance_vert:Bg,distance_frag:kg,equirect_vert:Hg,equirect_frag:Vg,linedashed_vert:Gg,linedashed_frag:Wg,meshbasic_vert:Xg,meshbasic_frag:qg,meshlambert_vert:Yg,meshlambert_frag:Zg,meshmatcap_vert:Kg,meshmatcap_frag:Jg,meshnormal_vert:$g,meshnormal_frag:jg,meshphong_vert:Qg,meshphong_frag:tx,meshphysical_vert:ex,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:sx,points_vert:rx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:hx},_t={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Zn={basic:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Xe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Xe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Xe([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Xe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Xe([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Xe([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Xe([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Xe([_t.lights,_t.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Zn.physical={uniforms:Xe([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var bl={r:0,b:0,g:0},ux=new ee,ef=new Zt;ef.set(-1,0,0,0,1,0,0,0,1);function dx(s,t,e,n,i,r){let a=new Ot(0),o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1,y=d(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,w){let y=d(w);y&&(y.isCubeTexture||y.mapping===$r)?(c===void 0&&(c=new Pt(new Le(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Ki(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ux.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ef),c.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,(h!==y||f!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Pt(new En(2,2),new We({name:"BackgroundMaterial",uniforms:Ki(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(bl,ah(s)),e.buffers.color.setClear(bl.r,bl.g,bl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function fx(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(L,D,B,I,O){let W=!1,H=f(L,I,B,D);r!==H&&(r=H,c(r.object)),W=d(L,I,B,O),W&&p(L,I,B,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(L,D,B,I),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function f(L,D,B,I){let O=I.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let H=L.isInstancedMesh===!0?L.id:0,tt=W[H];tt===void 0&&(tt={},W[H]=tt);let q=tt[B.id];q===void 0&&(q={},tt[B.id]=q);let J=q[O];return J===void 0&&(J=u(l()),q[O]=J),J}function u(L){let D=[],B=[],I=[];for(let O=0;O<e;O++)D[O]=0,B[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:I,object:L,attributes:{},index:null}}function d(L,D,B,I){let O=r.attributes,W=D.attributes,H=0,tt=B.getAttributes();for(let q in tt)if(tt[q].location>=0){let nt=O[q],Ct=W[q];if(Ct===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),nt===void 0||nt.attribute!==Ct||Ct&&nt.data!==Ct.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function p(L,D,B,I){let O={},W=D.attributes,H=0,tt=B.getAttributes();for(let q in tt)if(tt[q].location>=0){let nt=W[q];nt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let Ct={};Ct.attribute=nt,nt&&nt.data&&(Ct.data=nt.data),O[q]=Ct,H++}r.attributes=O,r.attributesNum=H,r.index=I}function x(){let L=r.newAttributes;for(let D=0,B=L.length;D<B;D++)L[D]=0}function g(L){m(L,0)}function m(L,D){let B=r.newAttributes,I=r.enabledAttributes,O=r.attributeDivisors;B[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),O[L]!==D&&(s.vertexAttribDivisor(L,D),O[L]=D)}function v(){let L=r.newAttributes,D=r.enabledAttributes;for(let B=0,I=D.length;B<I;B++)D[B]!==L[B]&&(s.disableVertexAttribArray(B),D[B]=0)}function w(L,D,B,I,O,W,H){H===!0?s.vertexAttribIPointer(L,D,B,O,W):s.vertexAttribPointer(L,D,B,I,O,W)}function y(L,D,B,I){x();let O=I.attributes,W=B.getAttributes(),H=D.defaultAttributeValues;for(let tt in W){let q=W[tt];if(q.location>=0){let J=O[tt];if(J===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),J!==void 0){let nt=J.normalized,Ct=J.itemSize,Et=t.get(J);if(Et===void 0)continue;let ie=Et.buffer,Yt=Et.type,se=Et.bytesPerElement,K=Yt===s.INT||Yt===s.UNSIGNED_INT||J.gpuType===Fo;if(J.isInterleavedBufferAttribute){let et=J.data,pt=et.stride,kt=J.offset;if(et.isInstancedInterleavedBuffer){for(let Tt=0;Tt<q.locationSize;Tt++)m(q.location+Tt,et.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Tt=0;Tt<q.locationSize;Tt++)g(q.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Tt=0;Tt<q.locationSize;Tt++)w(q.location+Tt,Ct/q.locationSize,Yt,nt,pt*se,(kt+Ct/q.locationSize*Tt)*se,K)}else{if(J.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)m(q.location+et,J.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let et=0;et<q.locationSize;et++)g(q.location+et);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let et=0;et<q.locationSize;et++)w(q.location+et,Ct/q.locationSize,Yt,nt,Ct*se,Ct/q.locationSize*et*se,K)}}else if(H!==void 0){let nt=H[tt];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(q.location,nt);break;case 3:s.vertexAttrib3fv(q.location,nt);break;case 4:s.vertexAttrib4fv(q.location,nt);break;default:s.vertexAttrib1fv(q.location,nt)}}}}v()}function S(){E();for(let L in n){let D=n[L];for(let B in D){let I=D[B];for(let O in I){let W=I[O];for(let H in W)h(W[H].object),delete W[H];delete I[O]}}delete n[L]}}function M(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let B in D){let I=D[B];for(let O in I){let W=I[O];for(let H in W)h(W[H].object),delete W[H];delete I[O]}}delete n[L.id]}function A(L){for(let D in n){let B=n[D];for(let I in B){let O=B[I];if(O[L.id]===void 0)continue;let W=O[L.id];for(let H in W)h(W[H].object),delete W[H];delete O[L.id]}}}function _(L){for(let D in n){let B=n[D],I=L.isInstancedMesh===!0?L.id:0,O=B[I];if(O!==void 0){for(let W in O){let H=O[W];for(let tt in H)h(H[tt].object),delete H[tt];delete O[W]}delete B[I],Object.keys(B).length===0&&delete n[D]}}}function E(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function px(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function mx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==mn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Rn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==tn&&A!==pn&&!_&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:M}}function gx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Mn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,w=v*4,y=m.clippingState||null;l.value=y,y=h(p,u,w,d);for(let S=0;S!==w;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Ks=4,xx=6,yx=20,_x=256,aa=new Vs,Nd=new Ot,mh=null,gh=0,xh=0,yh=!1,vx=new P,Ji=new P,$s=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=vx}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,xh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Rn,format:mn,colorSpace:yr,depthBuffer:!1},i=Dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Mx(r)),this._blurMaterial=bx(r,t,e),this._ggxMaterial=Sx(r,t,e)}return i}_compileMaterial(t){let e=new Pt(new ve,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,i,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Nd),f.toneMapping=Tn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Le,new oi({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(Nd),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Zs(i,y*S,w>2?S:0,S,S),f.setRenderTarget(i),m&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ci||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Ks?n-p+Ks:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Zs(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Zs(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(o,aa)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-Ks?i-this._lodMax+Ks:0),u=4*(this._cubeSize-h);Zs(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,aa)}};function Mx(s){let t=[],e=[],n=s,i=s-Ks+1+xx;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){let v=m%3*2/3-1,w=m>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];p.set(y,d*u*m);for(let S=0;S<u;S++){let M=h[S*2]*2-1,A=h[S*2+1]*2-1;m===0?Ji.set(1,A,M):m===1?Ji.set(-M,1,-A):m===2?Ji.set(-M,A,1):m===3?Ji.set(-1,A,-M):m===4?Ji.set(-M,-1,A):Ji.set(M,A,-1),Ji.toArray(x,(m*u+S)*d)}}let g=new ve;g.setAttribute("position",new Ae(p,d)),g.setAttribute("outputDirection",new Ae(x,d)),e.push(new Pt(g,null)),n>Ks&&n--}return{lodMeshes:e,sizeLods:t}}function Dd(s,t,e){let n=new je(s,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Sx(s,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_x,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function bx(s,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:yx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ud(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zd(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var El=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Le(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:qn});r.uniforms.tEquirect.value=e;let a=new Pt(i,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=ke),new Po(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function wx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Do||d===Uo)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new El(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===Do||d===Uo,x=d===Ci||d===Zi;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new $s(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new $s(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Do?u.mapping=Ci:d===Uo&&(u.mapping=Zi),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Ex(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Gi("WebGLRenderer: "+n+" extension not supported."),i}}}function Tx(s,t,e,n){let i={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],s.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let w=0,y=v.length;w<y;w+=3){let S=v[w+0],M=v[w+1],A=v[w+2];u.push(S,M,M,A,A,S)}}else{let v=p.array;x=p.version;for(let w=0,y=v.length/3-1;w<y;w+=3){let S=w+0,M=w+1,A=w+2;u.push(S,M,M,A,A,S)}}let g=new(p.count>=65535?Er:wr)(u,1);g.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ax(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Rx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Cx(s,t,e){let n=new WeakMap,i=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*S*4*f),A=new Sr(M,y,S,f);A.type=pn,A.needsUpdate=!0;let _=w*4;for(let R=0;R<f;R++){let L=g[R],D=m[R],B=v[R],I=y*S*4*R;for(let O=0;O<L.count;O++){let W=O*_;d===!0&&(i.fromBufferAttribute(L,O),M[I+W+0]=i.x,M[I+W+1]=i.y,M[I+W+2]=i.z,M[I+W+3]=0),p===!0&&(i.fromBufferAttribute(D,O),M[I+W+4]=i.x,M[I+W+5]=i.y,M[I+W+6]=i.z,M[I+W+7]=0),x===!0&&(i.fromBufferAttribute(B,O),M[I+W+8]=i.x,M[I+W+9]=i.y,M[I+W+10]=i.z,M[I+W+11]=B.itemSize===4?i.w:1)}}u={count:f,texture:A,size:new at(y,S)},n.set(o,u),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Px(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ix={[Vc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function Lx(s,t,e,n,i,r){let a=new je(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ve;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));let h=new xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(c,h),u=new Vs(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,v=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<v.length;M++){let A=v[M];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){v=y,w=v.length>0&&v[0].isRenderPass===!0;let S=a.width,M=a.height;v.length>0&&o===null&&(o=new je(S,M,{type:Rn,depthBuffer:!1,stencilBuffer:!1}),l=new je(S,M,{type:Rn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(S,M)}},this.begin=function(y,S){if(x||y.toneMapping===Tn&&v.length===0)return!1;if(m=S,S!==null){let M=S.width,A=S.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Tn,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=g,x=!0;let M=a,A=o;for(let _=0;_<v.length;_++){let E=v[_];E.enabled!==!1&&(E.render(y,A,M,S),E.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},oe.getTransfer(d)===me&&(h.defines.SRGB_TRANSFER="");let _=Ix[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var nf=new Ze,Mh=new Si(1,1),sf=new Sr,rf=new oo,af=new Cr,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),Hd=new Float32Array(4);function js(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Fd[i];if(r===void 0&&(r=new Float32Array(i),Fd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Rl(s,t){let e=Od[t];e===void 0&&(e=new Int32Array(t),Od[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Nx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Dx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function Ux(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function zx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function Fx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Hd.set(n),s.uniformMatrix2fv(this.addr,!1,Hd),Ue(e,n)}}function Ox(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;kd.set(n),s.uniformMatrix3fv(this.addr,!1,kd),Ue(e,n)}}function Bx(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Bd.set(n),s.uniformMatrix4fv(this.addr,!1,Bd),Ue(e,n)}}function kx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Hx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function Vx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function Gx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function Wx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function Yx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function Zx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?Ml:vl,r=Mh):r=nf,e.setTexture2D(t||r,i)}function Kx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||rf,i)}function Jx(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||af,i)}function $x(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||sf,i)}function jx(s){switch(s){case 5126:return Nx;case 35664:return Dx;case 35665:return Ux;case 35666:return zx;case 35674:return Fx;case 35675:return Ox;case 35676:return Bx;case 5124:case 35670:return kx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return qx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return $x}}function Qx(s,t){s.uniform1fv(this.addr,t)}function ty(s,t){let e=js(t,this.size,2);s.uniform2fv(this.addr,e)}function ey(s,t){let e=js(t,this.size,3);s.uniform3fv(this.addr,e)}function ny(s,t){let e=js(t,this.size,4);s.uniform4fv(this.addr,e)}function iy(s,t){let e=js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sy(s,t){let e=js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ry(s,t){let e=js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ay(s,t){s.uniform1iv(this.addr,t)}function oy(s,t){s.uniform2iv(this.addr,t)}function ly(s,t){s.uniform3iv(this.addr,t)}function cy(s,t){s.uniform4iv(this.addr,t)}function hy(s,t){s.uniform1uiv(this.addr,t)}function uy(s,t){s.uniform2uiv(this.addr,t)}function dy(s,t){s.uniform3uiv(this.addr,t)}function fy(s,t){s.uniform4uiv(this.addr,t)}function py(s,t,e){let n=this.cache,i=t.length,r=Rl(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Mh:a=nf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function my(s,t,e){let n=this.cache,i=t.length,r=Rl(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||rf,r[a])}function gy(s,t,e){let n=this.cache,i=t.length,r=Rl(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||af,r[a])}function xy(s,t,e){let n=this.cache,i=t.length,r=Rl(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||sf,r[a])}function yy(s){switch(s){case 5126:return Qx;case 35664:return ty;case 35665:return ey;case 35666:return ny;case 35674:return iy;case 35675:return sy;case 35676:return ry;case 5124:case 35670:return ay;case 35667:case 35671:return oy;case 35668:case 35672:return ly;case 35669:case 35673:return cy;case 5125:return hy;case 36294:return uy;case 36295:return dy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return py;case 35679:case 36299:case 36307:return my;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return xy}}var Sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jx(e.type)}},bh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yy(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},_h=/(\w+)(\])?(\[|\.)?/g;function Vd(s,t){s.seq.push(t),s.map[t.id]=t}function _y(s,t,e){let n=s.name,i=n.length;for(_h.lastIndex=0;;){let r=_h.exec(n),a=_h.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vd(e,c===void 0?new Sh(o,s,t):new bh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new wh(o),Vd(e,f)),e=f}}}var Js=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);_y(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Gd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vy=37297,My=0;function Sy(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Wd=new Zt;function by(s){oe._getMatrix(Wd,oe.workingColorSpace,s);let t=`mat3( ${Wd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case _r:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xd(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Sy(s.getShaderSource(t),o)}else return r}function wy(s,t){let e=by(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ey={[Vc]:"Linear",[Gc]:"Reinhard",[Wc]:"Cineon",[Jr]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function Ty(s,t){let e=Ey[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new P;function Ay(){oe.getLuminanceCoefficients(wl);let s=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Cy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Py(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function la(s){return s!==""}function qd(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(s){return s.replace(Iy,Ny)}var Ly=new Map;function Ny(s,t){let e=te[t];if(e===void 0){let n=Ly.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Eh(e)}var Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zd(s){return s.replace(Dy,Uy)}function Uy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var zy={[qi]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function Fy(s){return zy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Oy={[Ci]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function By(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Oy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var ky={[Zi]:"ENVMAP_MODE_REFRACTION"};function Hy(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ky[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vy={[No]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function Gy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Vy[s.combine]||"ENVMAP_BLENDING_NONE"}function Wy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Xy(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Fy(e),c=By(e),h=Hy(e),f=Gy(e),u=Wy(e),d=Ry(e),p=Cy(r),x=i.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(la).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(la).join(`
`),m.length>0&&(m+=`
`)):(g=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),m=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?te.tonemapping_pars_fragment:"",e.toneMapping!==Tn?Ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),Ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),a=Eh(a),a=qd(a,e),a=Yd(a,e),o=Eh(o),o=qd(o,e),o=Yd(o,e),a=Zd(a),o=Zd(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=v+g+a,y=v+m+o,S=Gd(i,i.VERTEX_SHADER,w),M=Gd(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(M)||"",O=D.trim(),W=B.trim(),H=I.trim(),tt=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,M);else{let J=Xd(i,S,"vertex"),nt=Xd(i,M,"fragment");Gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+J+`
`+nt)}else O!==""?Wt("WebGLProgram: Program Info Log:",O):(W===""||H==="")&&(q=!1);q&&(L.diagnostics={runnable:tt,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:H,prefix:m}})}i.deleteShader(S),i.deleteShader(M),_=new Js(i,x),E=Py(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,vy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=My++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var qy=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ah(t),e.set(t,n)),n}},Ah=class{constructor(t){this.id=qy++,this.code=t,this.usedTimes=0}};function Yy(s){return s===Li||s===ia||s===sa}function Zy(s,t,e,n,i,r){let a=new Is,o=new Th,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,L,D,B){let I=L.fog,O=D.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||W,H),q=tt&&tt.mapping===$r?tt.image.height:null,J=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ct=nt!==void 0?nt.length:0,Et=0;O.morphAttributes.position!==void 0&&(Et=1),O.morphAttributes.normal!==void 0&&(Et=2),O.morphAttributes.color!==void 0&&(Et=3);let ie,Yt,se,K;if(J){let Me=Zn[J];ie=Me.vertexShader,Yt=Me.fragmentShader}else{ie=_.vertexShader,Yt=_.fragmentShader;let Me=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,Me,de),se=Me.id,K=de.id}let et=s.getRenderTarget(),pt=s.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,Xt=!!_.map,ge=!!_.matcap,st=!!tt,lt=!!_.aoMap,ct=!!_.lightMap,ht=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,Ht=!!_.displacementMap,Bt=!!_.emissiveMap,qt=!!_.metalnessMap,Kt=!!_.roughnessMap,N=_.anisotropy>0,ue=_.clearcoat>0,re=_.dispersion>0,C=_.retroreflectivity>0,b=_.iridescence>0,k=_.sheen>0,X=_.transmission>0,$=N&&!!_.anisotropyMap,ut=ue&&!!_.clearcoatMap,dt=ue&&!!_.clearcoatNormalMap,j=ue&&!!_.clearcoatRoughnessMap,it=b&&!!_.iridescenceMap,mt=b&&!!_.iridescenceThicknessMap,Ut=k&&!!_.sheenColorMap,vt=k&&!!_.sheenRoughnessMap,gt=!!_.specularMap,zt=!!_.specularColorMap,Vt=!!_.specularIntensityMap,Jt=X&&!!_.transmissionMap,F=X&&!!_.thicknessMap,xt=!!_.gradientMap,Q=!!_.alphaMap,yt=_.alphaTest>0,wt=!!_.alphaHash,rt=!!_.extensions,Ft=Tn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ft=s.toneMapping);let Nt={shaderID:J,shaderType:_.type,shaderName:_.name,vertexShader:ie,fragmentShader:Yt,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xt,matcap:ge,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:ct,bumpMap:ht,normalMap:ft,displacementMap:Ht,emissiveMap:Bt,normalMapObjectSpace:ft&&_.normalMapType===fd,normalMapTangentSpace:ft&&_.normalMapType===ra,packedNormalMap:ft&&_.normalMapType===ra&&Yy(_.normalMap.format),metalnessMap:qt,roughnessMap:Kt,anisotropy:N,anisotropyMap:$,clearcoat:ue,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:j,dispersion:re,retroreflection:C,iridescence:b,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:k,sheenColorMap:Ut,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:zt,specularIntensityMap:Vt,transmission:X,transmissionMap:Jt,thicknessMap:F,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:yt,alphaHash:wt,combine:_.combine,mapUv:Xt&&p(_.map.channel),aoMapUv:lt&&p(_.aoMap.channel),lightMapUv:ct&&p(_.lightMap.channel),bumpMapUv:ht&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:Ht&&p(_.displacementMap.channel),emissiveMapUv:Bt&&p(_.emissiveMap.channel),metalnessMapUv:qt&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:$&&p(_.anisotropyMap.channel),clearcoatMapUv:ut&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:vt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:zt&&p(_.specularColorMap.channel),specularIntensityMapUv:Vt&&p(_.specularIntensityMap.channel),transmissionMapUv:Jt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:Q&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ft||N),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Xt||Q),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Et,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ln,flipSided:_.side===Ne,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),v(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let E=d[_.type],R;if(E){let L=Zn[E];R=Sl.clone(L.uniforms)}else R=_.uniforms;return R}function y(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new Xy(s,E,_,i),c.push(R),h.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:A}}function Ky(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Jy(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Jd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function $d(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,x,g,m){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},s[t]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,d,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let w=o(u,d,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(u,d,p,x,g,m){let v=o(u,d,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,d){e.length>1&&e.sort(u||Jy),n.length>1&&n.sort(d||Jd),i.length>1&&i.sort(d||Jd)}function f(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function $y(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new $d,s.set(n,[a])):i>=r.length?(a=new $d,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function jy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ot};break;case"SpotLight":e={position:new P,direction:new P,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Qy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var t_=0;function e_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function n_(s){let t=new jy,e=Qy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new ee,a=new ee;function o(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,v=0,w=0,y=0,S=0,M=0,A=0,_=0,E=0,R=0;c.sort(e_);for(let D=0,B=c.length;D<B;D++){let I=c[D],O=I.color,W=I.intensity,H=I.distance,tt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Li?tt=I.shadow.map.texture:tt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=O.r*W,f+=O.g*W,u+=O.b*W;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],W);R++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,nt=e.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=tt;let Ct=J.getViewportCount();for(let Et=0;Et<Ct;Et++)n.sunShadowMatrix[x+Et]=J.getMatrix(Et),n.sunShadowCascade[x+Et]=J._cascadeData[Et];x+=Ct,p++}n.sun[d]=q,d++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,nt=e.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=I.shadow.matrix,S++}n.directional[g]=q,g++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=H,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[v]=q;let J=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,I.castShadow){let nt=e.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.spotShadow[v]=nt,n.spotShadowMap[v]=tt,A++}v++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=q,w++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let J=I.shadow,nt=e.get(I);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=I.shadow.matrix,M++}n.point[m]=q,m++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(W),q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[y]=q,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==w||L.hemiLength!==y||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==M||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=v,L.rectAreaLength=w,L.hemiLength=y,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=M,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=R,n.version=t_++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function jd(s){let t=new n_(s),e=[],n=[],i=[];function r(u){f.camera=u,e.length=0,n.length=0,i.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function i_(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new jd(s),t.set(i,[o])):r>=a.length?(o=new jd(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var s_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],o_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Qd=new ee,oa=new P,vh=new P;function l_(s,t,e){let n=new zs,i=new at,r=new at,a=new Ee,o=new yo,l=new _o,c={},h=e.maxTextureSize,f={[Ri]:Ne,[Ne]:Ri,[ln]:ln},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:s_,fragmentShader:r_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new ve;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qi;let m=this.type;this.render=function(M,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Wu&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=qi);let E=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(qn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=m!==this.type;B&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(O=>O.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,O=M.length;I<O;I++){let W=M[I],H=W.shadow;if(H===void 0){Wt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let tt=H.getFrameExtents();i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Gs){if(W.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new je(i.x,i.y,{format:Li,type:Rn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new Si(i.x,i.y,pn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Bn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe}else W.isPointLight?(H.map=new El(i.x),H.map.depthTexture=new lo(i.x,An)):(H.map=new je(i.x,i.y),H.map.depthTexture=new Si(i.x,i.y,An)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Bn,this.type===qi?(H.map.depthTexture.compareFunction=q?Ml:vl,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Fe,H.map.depthTexture.magFilter=Fe);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let J=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,_);for(let nt=0;nt<J;nt++){let Ct=H.getCamera(nt);if(W.isPointLight){let Et=H.camera,ie=H.matrix,Yt=W.distance||Et.far;Yt!==Et.far&&(Et.far=Yt,Et.updateProjectionMatrix()),oa.setFromMatrixPosition(W.matrixWorld),Et.position.copy(oa),vh.copy(Et.position),vh.add(a_[nt]),Et.up.copy(o_[nt]),Et.lookAt(vh),Et.updateMatrixWorld(),ie.makeTranslation(-oa.x,-oa.y,-oa.z),Qd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Qd,Et.coordinateSystem,Et.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,nt),s.clear();else{nt===0&&(s.setRenderTarget(H.map),s.clear());let Et=H.getViewport(nt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),D.viewport(a)}n=H.getFrustum(nt),y(A,_,Ct,W,this.type)}H.isPointLightShadow!==!0&&this.type===Gs&&v(H,_),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,R,L)};function v(M,A){let _=t.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new je(i.x,i.y,{format:Li,type:Rn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,_,u,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,_,d,x,null)}function w(M,A,_,E){let R=null,L=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)R=L;else if(R=_.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,B=A.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let O=I[B];O===void 0&&(O=R.clone(),I[B]=O,A.addEventListener("dispose",S)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Gs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=s.properties.get(R);D.light=_}return R}function y(M,A,_,E,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Gs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let B=t.update(M),I=M.material;if(Array.isArray(I)){let O=B.groups;for(let W=0,H=O.length;W<H;W++){let tt=O[W],q=I[tt.materialIndex];if(q&&q.visible){let J=w(M,q,E,R);M.onBeforeShadow(s,M,A,_,B,J,tt),s.renderBufferDirect(_,null,B,J,M,tt),M.onAfterShadow(s,M,A,_,B,J,tt)}}}else if(I.visible){let O=w(M,I,E,R);M.onBeforeShadow(s,M,A,_,B,O,null),s.renderBufferDirect(_,null,B,O,M,null),M.onAfterShadow(s,M,A,_,B,O,null)}}let D=M.children;for(let B=0,I=D.length;B<I;B++)y(D[B],A,_,E,R)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function c_(s,t){function e(){let F=!1,xt=new Ee,Q=null,yt=new Ee(0,0,0,0);return{setMask:function(wt){Q!==wt&&!F&&(s.colorMask(wt,wt,wt,wt),Q=wt)},setLocked:function(wt){F=wt},setClear:function(wt,rt,Ft,Nt,Me){Me===!0&&(wt*=Nt,rt*=Nt,Ft*=Nt),xt.set(wt,rt,Ft,Nt),yt.equals(xt)===!1&&(s.clearColor(wt,rt,Ft,Nt),yt.copy(xt))},reset:function(){F=!1,Q=null,yt.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,Q=null,yt=null,wt=null;return{setReversed:function(rt){if(xt!==rt){let Ft=t.get("EXT_clip_control");rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let Nt=wt;wt=null,this.setClear(Nt)}},getReversed:function(){return xt},setTest:function(rt){rt?et(s.DEPTH_TEST):pt(s.DEPTH_TEST)},setMask:function(rt){Q!==rt&&!F&&(s.depthMask(rt),Q=rt)},setFunc:function(rt){if(xt&&(rt=wd[rt]),yt!==rt){switch(rt){case Ja:s.depthFunc(s.NEVER);break;case $a:s.depthFunc(s.ALWAYS);break;case ja:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Qa:s.depthFunc(s.EQUAL);break;case to:s.depthFunc(s.GEQUAL);break;case eo:s.depthFunc(s.GREATER);break;case no:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){wt!==rt&&(wt=rt,xt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){F=!1,Q=null,yt=null,wt=null,xt=!1}}}function i(){let F=!1,xt=null,Q=null,yt=null,wt=null,rt=null,Ft=null,Nt=null,Me=null;return{setTest:function(de){F||(de?et(s.STENCIL_TEST):pt(s.STENCIL_TEST))},setMask:function(de){xt!==de&&!F&&(s.stencilMask(de),xt=de)},setFunc:function(de,xn,Dn){(Q!==de||yt!==xn||wt!==Dn)&&(s.stencilFunc(de,xn,Dn),Q=de,yt=xn,wt=Dn)},setOp:function(de,xn,Dn){(rt!==de||Ft!==xn||Nt!==Dn)&&(s.stencilOp(de,xn,Dn),rt=de,Ft=xn,Nt=Dn)},setLocked:function(de){F=de},setClear:function(de){Me!==de&&(s.clearStencil(de),Me=de)},reset:function(){F=!1,xt=null,Q=null,yt=null,wt=null,rt=null,Ft=null,Nt=null,Me=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,S=null,M=null,A=null,_=new Ot(0,0,0),E=0,R=!1,L=null,D=null,B=null,I=null,O=null,W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=tt>=2);let J=null,nt={},Ct=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),ie=new Ee().fromArray(Ct),Yt=new Ee().fromArray(Et);function se(F,xt,Q,yt){let wt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(F,rt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Q;Ft++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(xt+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return rt}let K={};K[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),K[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),K[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Ts),ht(!1),ft(zc),et(s.CULL_FACE),lt(qn);function et(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function pt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function kt(F,xt){return u[F]!==xt?(s.bindFramebuffer(F,xt),u[F]=xt,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xt),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(F,xt){let Q=p,yt=!1;if(F){Q=d.get(xt),Q===void 0&&(Q=[],d.set(xt,Q));let wt=F.textures;if(Q.length!==wt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Ft=wt.length;rt<Ft;rt++)Q[rt]=s.COLOR_ATTACHMENT0+rt;Q.length=wt.length,yt=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,yt=!0);yt&&s.drawBuffers(Q)}function Xt(F){return x!==F?(s.useProgram(F),x=F,!0):!1}let ge={[Yi]:s.FUNC_ADD,[qu]:s.FUNC_SUBTRACT,[Yu]:s.FUNC_REVERSE_SUBTRACT};ge[Zu]=s.MIN,ge[Ku]=s.MAX;let st={[Ju]:s.ZERO,[$u]:s.ONE,[ju]:s.SRC_COLOR,[kc]:s.SRC_ALPHA,[sd]:s.SRC_ALPHA_SATURATE,[nd]:s.DST_COLOR,[td]:s.DST_ALPHA,[Qu]:s.ONE_MINUS_SRC_COLOR,[Hc]:s.ONE_MINUS_SRC_ALPHA,[id]:s.ONE_MINUS_DST_COLOR,[ed]:s.ONE_MINUS_DST_ALPHA,[rd]:s.CONSTANT_COLOR,[ad]:s.ONE_MINUS_CONSTANT_COLOR,[od]:s.CONSTANT_ALPHA,[ld]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(F,xt,Q,yt,wt,rt,Ft,Nt,Me,de){if(F===qn){g===!0&&(pt(s.BLEND),g=!1);return}if(g===!1&&(et(s.BLEND),g=!0),F!==Xu){if(F!==m||de!==R){if((v!==Yi||S!==Yi)&&(s.blendEquation(s.FUNC_ADD),v=Yi,S=Yi),de)switch(F){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFunc(s.ONE,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Oc:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",F);break}w=null,y=null,M=null,A=null,_.set(0,0,0),E=0,m=F,R=de}return}wt=wt||xt,rt=rt||Q,Ft=Ft||yt,(xt!==v||wt!==S)&&(s.blendEquationSeparate(ge[xt],ge[wt]),v=xt,S=wt),(Q!==w||yt!==y||rt!==M||Ft!==A)&&(s.blendFuncSeparate(st[Q],st[yt],st[rt],st[Ft]),w=Q,y=yt,M=rt,A=Ft),(Nt.equals(_)===!1||Me!==E)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Me),_.copy(Nt),E=Me),m=F,R=!1}function ct(F,xt){F.side===ln?pt(s.CULL_FACE):et(s.CULL_FACE);let Q=F.side===Ne;xt&&(Q=!Q),ht(Q),F.blending===Ws&&F.transparent===!1?lt(qn):lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let yt=F.stencilWrite;o.setTest(yt),yt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(F){L!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),L=F)}function ft(F){F!==Vu?(et(s.CULL_FACE),F!==D&&(F===zc?s.cullFace(s.BACK):F===Gu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pt(s.CULL_FACE),D=F}function Ht(F){F!==B&&(H&&s.lineWidth(F),B=F)}function Bt(F,xt,Q){F?(et(s.POLYGON_OFFSET_FILL),(I!==xt||O!==Q)&&(I=xt,O=Q,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,Q))):pt(s.POLYGON_OFFSET_FILL)}function qt(F){F?et(s.SCISSOR_TEST):pt(s.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=s.TEXTURE0+W-1),J!==F&&(s.activeTexture(F),J=F)}function N(F,xt,Q){Q===void 0&&(J===null?Q=s.TEXTURE0+W-1:Q=J);let yt=nt[Q];yt===void 0&&(yt={type:void 0,texture:void 0},nt[Q]=yt),(yt.type!==F||yt.texture!==xt)&&(J!==Q&&(s.activeTexture(Q),J=Q),s.bindTexture(F,xt||K[F]),yt.type=F,yt.texture=xt)}function ue(){let F=nt[J];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function b(){try{s.texSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function k(){try{s.texSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function $(){try{s.compressedTexSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ut(){try{s.texStorage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function dt(){try{s.texStorage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function j(){try{s.texImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function it(){try{s.texImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function mt(F){return f[F]!==void 0?f[F]:s.getParameter(F)}function Ut(F,xt){f[F]!==xt&&(s.pixelStorei(F,xt),f[F]=xt)}function vt(F){ie.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ie.copy(F))}function gt(F){Yt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Yt.copy(F))}function zt(F,xt){let Q=c.get(xt);Q===void 0&&(Q=new WeakMap,c.set(xt,Q));let yt=Q.get(F);yt===void 0&&(yt=s.getUniformBlockIndex(xt,F.name),Q.set(F,yt))}function Vt(F,xt){let yt=c.get(xt).get(F);l.get(xt)!==yt&&(s.uniformBlockBinding(xt,yt,F.__bindingPointIndex),l.set(xt,yt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},J=null,nt={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,S=null,M=null,A=null,_=new Ot(0,0,0),E=0,R=!1,L=null,D=null,B=null,I=null,O=null,ie.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:pt,bindFramebuffer:kt,drawBuffers:Tt,useProgram:Xt,setBlending:lt,setMaterial:ct,setFlipSided:ht,setCullFace:ft,setLineWidth:Ht,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:Kt,bindTexture:N,unbindTexture:ue,compressedTexImage2D:re,compressedTexImage3D:C,texImage2D:j,texImage3D:it,pixelStorei:Ut,getParameter:mt,updateUBOMapping:zt,uniformBlockBinding:Vt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:b,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:vt,viewport:gt,reset:Jt}}function h_(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return p?new OffscreenCanvas(C,b):vr("canvas")}function g(C,b,k){let X=1,$=re(C);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ut=Math.floor(X*$.width),dt=Math.floor(X*$.height);u===void 0&&(u=x(ut,dt));let j=b?x(ut,dt):u;return j.width=ut,j.height=dt,j.getContext("2d").drawImage(C,0,0,ut,dt),Wt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ut+"x"+dt+")."),j}else return"data"in C&&Wt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,b,k,X,$,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;X&&(dt=t.get("EXT_texture_norm16"),dt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.R16_EXT),k===s.SHORT&&dt&&(j=dt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),b===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.RG16_EXT),k===s.SHORT&&dt&&(j=dt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),b===s.RGB&&(k===s.UNSIGNED_SHORT&&dt&&(j=dt.RGB16_EXT),k===s.SHORT&&dt&&(j=dt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),b===s.RGBA){let it=ut?_r:oe.getTransfer($);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=it===me?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.RGBA16_EXT),k===s.SHORT&&dt&&(j=dt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(C,b){let k;return C?b===null||b===An||b===qs?k=s.DEPTH24_STENCIL8:b===pn?k=s.DEPTH32F_STENCIL8:b===Xs&&(k=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===An||b===qs?k=s.DEPTH_COMPONENT24:b===pn?k=s.DEPTH_COMPONENT32F:b===Xs&&(k=s.DEPTH_COMPONENT16),k}function M(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==ke?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function _(C){let b=C.target;b.removeEventListener("dispose",_),L(b)}function E(C){let b=n.get(C);if(b.__webglInit===void 0)return;let k=C.source,X=d.get(k);if(X){let $=X[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&d.delete(k)}n.remove(C)}function R(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let k=C.source,X=d.get(k);delete X[b.__cacheKey],a.memory.textures--}function L(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let $=0;$<b.__webglFramebuffer[X].length;$++)s.deleteFramebuffer(b.__webglFramebuffer[X][$]);else s.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)s.deleteFramebuffer(b.__webglFramebuffer[X]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=C.textures;for(let X=0,$=k.length;X<$;X++){let ut=n.get(k[X]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(C)}let D=0;function B(){D=0}function I(){return D}function O(C){D=C}function W(){let C=D;return C>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function H(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function tt(C,b){let k=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let X=C.image;if(X===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,C,b);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function q(C,b){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,b);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function J(C,b){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function nt(C,b){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){kt(k,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}let Ct={[si]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[io]:s.MIRRORED_REPEAT},Et={[Fe]:s.NEAREST,[ud]:s.NEAREST_MIPMAP_NEAREST,[jr]:s.NEAREST_MIPMAP_LINEAR,[ke]:s.LINEAR,[zo]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},ie={[md]:s.NEVER,[vd]:s.ALWAYS,[gd]:s.LESS,[vl]:s.LEQUAL,[xd]:s.EQUAL,[Ml]:s.GEQUAL,[yd]:s.GREATER,[_d]:s.NOTEQUAL};function Yt(C,b){if(b.type===pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ke||b.magFilter===zo||b.magFilter===jr||b.magFilter===Pi||b.minFilter===ke||b.minFilter===zo||b.minFilter===jr||b.minFilter===Pi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ct[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ct[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ct[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Et[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Et[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ie[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Fe||b.minFilter!==jr&&b.minFilter!==Pi||b.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function se(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let X=b.source,$=d.get(X);$===void 0&&($={},d.set(X,$));let ut=H(b);if(ut!==C.__cacheKey){$[ut]===void 0&&($[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ut].usedTimes++;let dt=$[C.__cacheKey];dt!==void 0&&($[C.__cacheKey].usedTimes--,dt.usedTimes===0&&R(b)),C.__cacheKey=ut,C.__webglTexture=$[ut].texture}return k}function K(C,b,k){return Math.floor(Math.floor(C/k)/b)}function et(C,b,k,X){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,k,X,b.data);else{ut.sort((Ut,vt)=>Ut.start-vt.start);let dt=0;for(let Ut=1;Ut<ut.length;Ut++){let vt=ut[dt],gt=ut[Ut],zt=vt.start+vt.count,Vt=K(gt.start,b.width,4),Jt=K(vt.start,b.width,4);gt.start<=zt+1&&Vt===Jt&&K(gt.start+gt.count-1,b.width,4)===Vt?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++dt,ut[dt]=gt)}ut.length=dt+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ut=0,vt=ut.length;Ut<vt;Ut++){let gt=ut[Ut],zt=Math.floor(gt.start/4),Vt=Math.ceil(gt.count/4),Jt=zt%b.width,F=Math.floor(zt/b.width),xt=Vt,Q=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,Jt,F,xt,Q,k,X,b.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function pt(C,b,k){let X=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=s.TEXTURE_3D);let $=se(C,b),ut=b.source;e.bindTexture(X,C.__webglTexture,s.TEXTURE0+k);let dt=n.get(ut);if(ut.version!==dt.__version||$===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let Q=oe.getPrimaries(oe.workingColorSpace),yt=b.colorSpace===ci?null:oe.getPrimaries(b.colorSpace),wt=b.colorSpace===ci||Q===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let it=g(b.image,!1,i.maxTextureSize);it=ue(b,it);let mt=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),vt=y(b.internalFormat,mt,Ut,b.normalized,b.colorSpace,b.isVideoTexture);Yt(X,b);let gt,zt=b.mipmaps,Vt=b.isVideoTexture!==!0,Jt=dt.__version===void 0||$===!0,F=ut.dataReady,xt=M(b,it);if(b.isDepthTexture)vt=S(b.format===Ii,b.type),Jt&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,vt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Ut,null));else if(b.isDataTexture)if(zt.length>0){Vt&&Jt&&e.texStorage2D(s.TEXTURE_2D,xt,vt,zt[0].width,zt[0].height);for(let Q=0,yt=zt.length;Q<yt;Q++)gt=zt[Q],Vt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(s.TEXTURE_2D,Q,vt,gt.width,gt.height,0,mt,Ut,gt.data);b.generateMipmaps=!1}else Vt?(Jt&&e.texStorage2D(s.TEXTURE_2D,xt,vt,it.width,it.height),F&&et(b,it,mt,Ut)):e.texImage2D(s.TEXTURE_2D,0,vt,it.width,it.height,0,mt,Ut,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,vt,zt[0].width,zt[0].height,it.depth);for(let Q=0,yt=zt.length;Q<yt;Q++)if(gt=zt[Q],b.format!==mn)if(mt!==null)if(Vt){if(F)if(b.layerUpdates.size>0){let wt=ch(gt.width,gt.height,b.format,b.type);for(let rt of b.layerUpdates){let Ft=gt.data.subarray(rt*wt/gt.data.BYTES_PER_ELEMENT,(rt+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,rt,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,vt,gt.width,gt.height,it.depth,0,gt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,gt.width,gt.height,it.depth,mt,Ut,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,vt,gt.width,gt.height,it.depth,0,mt,Ut,gt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Vt&&Jt&&e.texStorage2D(s.TEXTURE_2D,xt,vt,zt[0].width,zt[0].height);for(let Q=0,yt=zt.length;Q<yt;Q++)gt=zt[Q],b.format!==mn?mt!==null?Vt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,vt,gt.width,gt.height,0,gt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,gt.width,gt.height,mt,Ut,gt.data):e.texImage2D(s.TEXTURE_2D,Q,vt,gt.width,gt.height,0,mt,Ut,gt.data)}else if(b.isDataArrayTexture)if(Vt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,vt,it.width,it.height,it.depth),F)if(b.layerUpdates.size>0){let Q=ch(it.width,it.height,b.format,b.type);for(let yt of b.layerUpdates){let wt=it.data.subarray(yt*Q/it.data.BYTES_PER_ELEMENT,(yt+1)*Q/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,it.width,it.height,1,mt,Ut,wt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Ut,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,it.width,it.height,it.depth,0,mt,Ut,it.data);else if(b.isData3DTexture)Vt?(Jt&&e.texStorage3D(s.TEXTURE_3D,xt,vt,it.width,it.height,it.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Ut,it.data)):e.texImage3D(s.TEXTURE_3D,0,vt,it.width,it.height,it.depth,0,mt,Ut,it.data);else if(b.isFramebufferTexture){if(Jt)if(Vt)e.texStorage2D(s.TEXTURE_2D,xt,vt,it.width,it.height);else{let Q=it.width,yt=it.height;for(let wt=0;wt<xt;wt++)e.texImage2D(s.TEXTURE_2D,wt,vt,Q,yt,0,mt,Ut,null),Q>>=1,yt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),it.parentNode!==Q){Q.appendChild(it),f.add(b),Q.onpaint=yt=>{let wt=yt.changedElements;for(let rt of f)wt.includes(rt.image)&&(rt.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let wt=s.RGBA,rt=s.RGBA,Ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,rt,Ft,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Vt&&Jt){let Q=re(zt[0]);e.texStorage2D(s.TEXTURE_2D,xt,vt,Q.width,Q.height)}for(let Q=0,yt=zt.length;Q<yt;Q++)gt=zt[Q],Vt?F&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,mt,Ut,gt):e.texImage2D(s.TEXTURE_2D,Q,vt,mt,Ut,gt);b.generateMipmaps=!1}else if(Vt){if(Jt){let Q=re(it);e.texStorage2D(s.TEXTURE_2D,xt,vt,Q.width,Q.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Ut,it)}else e.texImage2D(s.TEXTURE_2D,0,vt,mt,Ut,it);m(b)&&v(X),dt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function kt(C,b,k){if(b.image.length!==6)return;let X=se(C,b),$=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ut=n.get($);if($.version!==ut.__version||X===!0){e.activeTexture(s.TEXTURE0+k);let dt=oe.getPrimaries(oe.workingColorSpace),j=b.colorSpace===ci?null:oe.getPrimaries(b.colorSpace),it=b.colorSpace===ci||dt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ut=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!mt&&!Ut?vt[rt]=g(b.image[rt],!0,i.maxCubemapSize):vt[rt]=Ut?b.image[rt].image:b.image[rt],vt[rt]=ue(b,vt[rt]);let gt=vt[0],zt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type),Jt=y(b.internalFormat,zt,Vt,b.normalized,b.colorSpace),F=b.isVideoTexture!==!0,xt=ut.__version===void 0||X===!0,Q=$.dataReady,yt=M(b,gt);Yt(s.TEXTURE_CUBE_MAP,b);let wt;if(mt){F&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Jt,gt.width,gt.height);for(let rt=0;rt<6;rt++){wt=vt[rt].mipmaps;for(let Ft=0;Ft<wt.length;Ft++){let Nt=wt[Ft];b.format!==mn?zt!==null?F?Q&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,Nt.width,Nt.height,zt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,Jt,Nt.width,Nt.height,0,Nt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,Nt.width,Nt.height,zt,Vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,Jt,Nt.width,Nt.height,0,zt,Vt,Nt.data)}}}else{if(wt=b.mipmaps,F&&xt){wt.length>0&&yt++;let rt=re(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,zt,Vt,vt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,vt[rt].width,vt[rt].height,0,zt,Vt,vt[rt].data);for(let Ft=0;Ft<wt.length;Ft++){let Me=wt[Ft].image[rt].image;F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,Me.width,Me.height,zt,Vt,Me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,Jt,Me.width,Me.height,0,zt,Vt,Me.data)}}else{F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,Vt,vt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,zt,Vt,vt[rt]);for(let Ft=0;Ft<wt.length;Ft++){let Nt=wt[Ft];F?Q&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,zt,Vt,Nt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,Jt,zt,Vt,Nt.image[rt])}}}m(b)&&v(s.TEXTURE_CUBE_MAP),ut.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Tt(C,b,k,X,$,ut){let dt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),it=y(k.internalFormat,dt,j,k.normalized,k.colorSpace),mt=n.get(b),Ut=n.get(k);if(Ut.__renderTarget=b,!mt.__hasExternalTextures){let vt=Math.max(1,b.width>>ut),gt=Math.max(1,b.height>>ut);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,ut,it,vt,gt,b.depth,0,dt,j,null):e.texImage2D($,ut,it,vt,gt,0,dt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Kt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,$,Ut.__webglTexture,0,qt(b)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,$,Ut.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(C,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let X=b.depthTexture,$=X&&X.isDepthTexture?X.type:null,ut=S(b.stencilBuffer,$),dt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(b),ut,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(b),ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,C)}else{let X=b.textures;for(let $=0;$<X.length;$++){let ut=X[$],dt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),it=y(ut.internalFormat,dt,j,ut.normalized,ut.colorSpace);Kt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(b),it,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(b),it,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,it,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(C,b,k){let X=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(b.depthTexture);if($.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,b.depthTexture);let mt=r.convert(b.depthTexture.format),Ut=r.convert(b.depthTexture.type),vt;b.depthTexture.format===Bn?vt=s.DEPTH_COMPONENT24:b.depthTexture.format===Ii&&(vt=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,b.width,b.height,0,mt,Ut,null)}}else tt(b.depthTexture,0);let ut=$.__webglTexture,dt=qt(b),j=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,it=b.depthTexture.format===Ii?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Bn)Kt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,j,ut,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,it,j,ut,0);else if(b.depthTexture.format===Ii)Kt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,j,ut,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,it,j,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){let $=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),b.__depthDisposeCallback=$}b.__boundDepthTexture=X}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ge(b.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?ge(b.__webglFramebuffer[0],C,0):ge(b.__webglFramebuffer,C,0)}else if(k){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=s.createRenderbuffer(),Xt(b.__webglDepthbuffer[X],C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ut)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Xt(b.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(C,b,k){let X=n.get(C);b!==void 0&&Tt(X.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&st(C)}function ct(C){let b=C.texture,k=n.get(C),X=n.get(b);C.addEventListener("dispose",_);let $=C.textures,ut=C.isWebGLCubeRenderTarget===!0,dt=$.length>1;if(dt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=b.version,a.memory.textures++),ut){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let it=0;it<b.mipmaps.length;it++)k.__webglFramebuffer[j][it]=s.createFramebuffer()}else k.__webglFramebuffer[j]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)k.__webglFramebuffer[j]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(dt)for(let j=0,it=$.length;j<it;j++){let mt=n.get($[j]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let it=$[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let mt=r.convert(it.format,it.colorSpace),Ut=r.convert(it.type),vt=y(it.internalFormat,mt,Ut,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),gt=qt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,vt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)Tt(k.__webglFramebuffer[j][it],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else Tt(k.__webglFramebuffer[j],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(b)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let j=0,it=$.length;j<it;j++){let mt=$[j],Ut=n.get(mt),vt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ut.__webglTexture),Yt(vt,mt),Tt(k.__webglFramebuffer,C,mt,s.COLOR_ATTACHMENT0+j,vt,0),m(mt)&&v(vt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Yt(j,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)Tt(k.__webglFramebuffer[it],C,b,s.COLOR_ATTACHMENT0,j,it);else Tt(k.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,j,0);m(b)&&v(j),e.unbindTexture()}C.depthBuffer&&st(C)}function ht(C){let b=C.textures;for(let k=0,X=b.length;k<X;k++){let $=b[k];if(m($)){let ut=w(C),dt=n.get($).__webglTexture;e.bindTexture(ut,dt),v(ut),e.unbindTexture()}}}let ft=[],Ht=[];function Bt(C){if(C.samples>0){if(Kt(C)===!1){let b=C.textures,k=C.width,X=C.height,$=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=n.get(C),j=b.length>1;if(j)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Ut=n.get(b[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,k,X,0,0,k,X,$,s.NEAREST),l===!0&&(ft.length=0,Ht.length=0,ft.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(ut),Ht.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Ut=n.get(b[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function qt(C){return Math.min(i.maxSamples,C.samples)}function Kt(C){let b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function ue(C,b){let k=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==yr&&k!==ci&&(oe.getTransfer(k)===me?(X!==mn||$!==tn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",k)),b}function re(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=nt,this.rebindTextures=lt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function u_(s,t){function e(n,i=ci){let r,a=oe.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===Oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Bo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return s.BYTE;if(n===Jc)return s.SHORT;if(n===Xs)return s.UNSIGNED_SHORT;if(n===Fo)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===Rn)return s.HALF_FLOAT;if(n===Qc)return s.ALPHA;if(n===th)return s.RGB;if(n===mn)return s.RGBA;if(n===Bn)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===ko)return s.RED;if(n===Ho)return s.RED_INTEGER;if(n===Li)return s.RG;if(n===Vo)return s.RG_INTEGER;if(n===Go)return s.RGBA_INTEGER;if(n===Qr||n===ta||n===ea||n===na)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===Ko||n===Jo||n===$o||n===jo||n===ia||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===Ko)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$o)return r.COMPRESSED_R11_EAC;if(n===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===yl||n===sa||n===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Pr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends kn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new Rh,m={},v=e.getContextAttributes(),w=null,y=null,S=[],M=[],A=new at,_=null,E=null,R=new Be;R.viewport=new Ee;let L=new Be;L.viewport=new Ee;let D=[R,L],B=new Io,I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=S[K];return et===void 0&&(et=new Ls,S[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=S[K];return et===void 0&&(et=new Ls,S[K]=et),et.getGripSpace()},this.getHand=function(K){let et=S[K];return et===void 0&&(et=new Ls,S[K]=et),et.getHandSpace()};function W(K){let et=M.indexOf(K.inputSource);if(et===-1)return;let pt=S[et];pt!==void 0&&(pt.update(K.inputSource,K.frame,c||a),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",tt);for(let K=0;K<S.length;K++){let et=M[K];et!==null&&(M[K]=null,S[K].disconnect(et))}I=null,O=null,g.reset();for(let K in m)delete m[K];if(t.setRenderTarget(w),d=null,u=null,f=null,i=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",tt),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,kt=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=v.stencil?Ii:Bn,kt=v.stencil?qs:An);let Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Xt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new je(u.textureWidth,u.textureHeight,{format:mn,type:tn,depthTexture:new Si(u.textureWidth,u.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let pt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,pt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new je(d.framebufferWidth,d.framebufferHeight,{format:mn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(K){for(let et=0;et<K.removed.length;et++){let pt=K.removed[et],kt=M.indexOf(pt);kt>=0&&(M[kt]=null,S[kt].disconnect(pt))}for(let et=0;et<K.added.length;et++){let pt=K.added[et],kt=M.indexOf(pt);if(kt===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=M.length){M.push(pt),kt=Xt;break}else if(M[Xt]===null){M[Xt]=pt,kt=Xt;break}if(kt===-1)break}let Tt=S[kt];Tt&&Tt.connect(pt)}}let q=new P,J=new P;function nt(K,et,pt){q.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(pt.matrixWorld);let kt=q.distanceTo(J),Tt=et.projectionMatrix.elements,Xt=pt.projectionMatrix.elements,ge=Tt[14]/(Tt[10]-1),st=Tt[14]/(Tt[10]+1),lt=(Tt[9]+1)/Tt[5],ct=(Tt[9]-1)/Tt[5],ht=(Tt[8]-1)/Tt[0],ft=(Xt[8]+1)/Xt[0],Ht=ge*ht,Bt=ge*ft,qt=kt/(-ht+ft),Kt=qt*-ht;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Kt),K.translateZ(qt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Tt[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=ge+qt,ue=st+qt,re=Ht-Kt,C=Bt+(kt-Kt),b=lt*st/ue*N,k=ct*st/ue*N;K.projectionMatrix.makePerspective(re,C,b,k,N,ue),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,pt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(pt=g.depthFar)),B.near=L.near=R.near=et,B.far=L.far=R.far=pt,(I!==B.near||O!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,O=B.far),B.layers.mask=K.layers.mask|6,R.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let kt=K.parent,Tt=B.cameras;Ct(B,kt);for(let Xt=0;Xt<Tt.length;Xt++)Ct(Tt[Xt],kt);Tt.length===2?nt(B,R,L):B.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),Et(K,B,kt)};function Et(K,et,pt){pt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Cs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(K){return m[K]};let ie=null;function Yt(K,et){if(h=et.getViewerPose(c||a),p=et,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let kt=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,kt=!0);for(let st=0;st<pt.length;st++){let lt=pt[st],ct=null;if(d!==null)ct=d.getViewport(lt);else{let ft=f.getViewSubImage(u,lt);ct=ft.viewport,st===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let ht=D[st];ht===void 0&&(ht=new Be,ht.layers.enable(st),ht.viewport=new Ee,D[st]=ht),ht.matrix.fromArray(lt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(lt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ct.x,ct.y,ct.width,ct.height),st===0&&(B.matrix.copy(ht.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),kt===!0&&B.cameras.push(ht)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let st=f.getDepthInformation(pt[0]);st&&st.isValid&&st.texture&&g.init(st,i.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<pt.length;st++){let lt=pt[st].camera;if(lt){let ct=m[lt];ct||(ct=new Pr,m[lt]=ct);let ht=f.getCameraImage(lt);ct.sourceTexture=ht}}}}for(let pt=0;pt<S.length;pt++){let kt=M[pt],Tt=S[pt];kt!==null&&Tt!==void 0&&Tt.update(kt,et,c||a)}ie&&ie(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let se=new tf;se.setAnimationLoop(Yt),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},p_=new ee,of=new Zt;of.set(-1,0,0,0,1,0,0,0,1);function m_(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ah(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ne&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ne&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(of),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ne&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g_(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",v));let A=S.program;n.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let S=f();y.__bindingPointIndex=S;let M=s.createBuffer(),A=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,E=M.length;_<E;_++){let R=M[_];if(Array.isArray(R))for(let L=0,D=R.length;L<D;L++)d(R[L],_,L,A);else d(R,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,S,M,A){if(x(y,S,M,A)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let R=0;for(let L=0;L<E.length;L++){let D=E[L],B=m(D);p(D,y.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function x(y,S,M,A){let _=y.value,E=S+"_"+M;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(y){let S=y.uniforms,M=0,A=16;for(let E=0,R=S.length;E<R;E++){let L=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,B=L.length;D<B;D++){let I=L[D],O=Array.isArray(I.value)?I.value:[I.value];for(let W=0,H=O.length;W<H;W++){let tt=O[W],q=m(tt),J=M%A,nt=J%q.boundary,Ct=J+nt;M+=nt,Ct!==0&&A-Ct<q.storage&&(M+=A-Ct),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=q.storage}}}let _=M%A;return _>0&&(M+=A-_),y.__size=M,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){let S=y.target;S.removeEventListener("dispose",v);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var x_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function y_(){return Yn===null&&(Yn=new Ar(x_,16,16,Li,Rn),Yn.name="DFG_LUT",Yn.minFilter=ke,Yn.magFilter=ke,Yn.wrapS=Fn,Yn.wrapT=Fn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Tl=class{constructor(t={}){let{canvas:e=Md(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=d,g=new Set([Go,Vo,Ho]),m=new Set([tn,An,Xs,qs,Oo,Bo]),v=new Uint32Array(4),w=new Int32Array(4),y=new P,S=null,M=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,D=null,B=null,I=null,O=null;this._outputColorSpace=Oe;let W=0,H=0,tt=null,q=-1,J=null,nt=new Ee,Ct=new Ee,Et=null,ie=new Ot(0),Yt=0,se=e.width,K=e.height,et=1,pt=null,kt=null,Tt=new Ee(0,0,se,K),Xt=new Ee(0,0,se,K),ge=!1,st=new zs,lt=!1,ct=!1,ht=new ee,ft=new P,Ht=new Ee,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Kt(){return tt===null?et:1}let N=n;function ue(T,z){return e.getContext(T,z)}let re,C,b,k,X,$,ut,dt,j,it,mt,Ut,vt,gt,zt,Vt,Jt,F,xt,Q,yt,wt,rt;try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",xn,!1),N===null){let z="webgl2";if(N=ue(z,T),N===null)throw ue(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(T){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Gt("WebGLRenderer: "+T.message),T}function Ft(){re=new Ex(N),re.init(),yt=new u_(N,re),C=new mx(N,re,t,yt),b=new c_(N,re),C.reversedDepthBuffer&&u&&b.buffers.depth.setReversed(!0),B=N.createFramebuffer(),I=N.createFramebuffer(),O=N.createFramebuffer(),k=new Rx(N),X=new Ky,$=new h_(N,re,b,X,C,yt,k),ut=new wx(R),dt=new Pm(N),wt=new fx(N,dt),j=new Tx(N,dt,k,wt),it=new Px(N,j,dt,wt,k),F=new Cx(N,C,$),zt=new gx(X),mt=new Zy(R,ut,re,C,wt,zt),Ut=new m_(R,X),vt=new $y,gt=new i_(re),Jt=new dx(R,ut,b,it,p,l),Vt=new l_(R,it,C),rt=new g_(N,k,C,b),xt=new px(N,re,k),Q=new Ax(N,re,k),k.programs=mt.programs,R.capabilities=C,R.extensions=re,R.properties=X,R.renderLists=vt,R.shadowMap=Vt,R.state=b,R.info=k}x!==tn&&(E=new Lx(x,e.width,e.height,o,i,r));let Nt=new Ch(R,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(T){T!==void 0&&(et=T,this.setSize(se,K,!1))},this.getSize=function(T){return T.set(se,K)},this.setSize=function(T,z,Z=!0){if(Nt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=T,K=z,e.width=Math.floor(T*et),e.height=Math.floor(z*et),Z===!0&&(e.style.width=T+"px",e.style.height=z+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(se*et,K*et).floor()},this.setDrawingBufferSize=function(T,z,Z){se=T,K=z,et=Z,e.width=Math.floor(T*Z),e.height=Math.floor(z*Z),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(x===tn){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(nt)},this.getViewport=function(T){return T.copy(Tt)},this.setViewport=function(T,z,Z,V){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,z,Z,V),b.viewport(nt.copy(Tt).multiplyScalar(et).round())},this.getScissor=function(T){return T.copy(Xt)},this.setScissor=function(T,z,Z,V){T.isVector4?Xt.set(T.x,T.y,T.z,T.w):Xt.set(T,z,Z,V),b.scissor(Ct.copy(Xt).multiplyScalar(et).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(T){b.setScissorTest(ge=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){kt=T},this.getClearColor=function(T){return T.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,Z=!0){let V=0;if(T){let G=!1;if(tt!==null){let bt=tt.texture.format;G=g.has(bt)}if(G){let bt=tt.texture.type,Rt=m.has(bt),Mt=Jt.getClearColor(),It=Jt.getClearAlpha(),Dt=Mt.r,jt=Mt.g,ae=Mt.b;Rt?(v[0]=Dt,v[1]=jt,v[2]=ae,v[3]=It,N.clearBufferuiv(N.COLOR,0,v)):(w[0]=Dt,w[1]=jt,w[2]=ae,w[3]=It,N.clearBufferiv(N.COLOR,0,w))}else V|=N.COLOR_BUFFER_BIT}z&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Jt.dispose(),vt.dispose(),gt.dispose(),X.dispose(),ut.dispose(),it.dispose(),wt.dispose(),rt.dispose(),mt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",$h),Nt.removeEventListener("sessionend",jh),Fi.stop()};function Me(T){T.preventDefault(),Mr("WebGLRenderer: Context Lost."),L=!0}function de(){Mr("WebGLRenderer: Context Restored."),L=!1;let T=k.autoReset,z=Vt.enabled,Z=Vt.autoUpdate,V=Vt.needsUpdate,G=Vt.type;Ft(),k.autoReset=T,Vt.enabled=z,Vt.autoUpdate=Z,Vt.needsUpdate=V,Vt.type=G}function xn(T){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){let z=T.target;z.removeEventListener("dispose",Dn),Jf(z)}function Jf(T){$f(T),X.remove(T)}function $f(T){let z=X.get(T).programs;z!==void 0&&(z.forEach(function(Z){mt.releaseProgram(Z)}),T.isShaderMaterial&&mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,Z,V,G,bt){z===null&&(z=Bt);let Rt=G.isMesh&&G.matrixWorld.determinantAffine()<0,Mt=tp(T,z,Z,V,G);b.setMaterial(V,Rt);let It=Z.index,Dt=1;if(V.wireframe===!0){if(It=j.getWireframeAttribute(Z),It===void 0)return;Dt=2}let jt=Z.drawRange,ae=Z.attributes.position,Lt=jt.start*Dt,fe=(jt.start+jt.count)*Dt;bt!==null&&(Lt=Math.max(Lt,bt.start*Dt),fe=Math.min(fe,(bt.start+bt.count)*Dt)),It!==null?(Lt=Math.max(Lt,0),fe=Math.min(fe,It.count)):ae!=null&&(Lt=Math.max(Lt,0),fe=Math.min(fe,ae.count));let Ce=fe-Lt;if(Ce<0||Ce===1/0)return;wt.setup(G,V,Mt,Z,It);let be,_e=xt;if(It!==null&&(be=dt.get(It),_e=Q,_e.setIndex(be)),G.isMesh)V.wireframe===!0?(b.setLineWidth(V.wireframeLinewidth*Kt()),_e.setMode(N.LINES)):_e.setMode(N.TRIANGLES);else if(G.isLine){let He=V.linewidth;He===void 0&&(He=1),b.setLineWidth(He*Kt()),G.isLineSegments?_e.setMode(N.LINES):G.isLineLoop?_e.setMode(N.LINE_LOOP):_e.setMode(N.LINE_STRIP)}else G.isPoints?_e.setMode(N.POINTS):G.isSprite&&_e.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(re.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let He=G._multiDrawStarts,At=G._multiDrawCounts,qe=G._multiDrawCount,he=It?dt.get(It).bytesPerElement:1,dn=X.get(V).currentProgram.getUniforms();for(let Un=0;Un<qe;Un++)dn.setValue(N,"_gl_DrawID",Un),_e.render(He[Un]/he,At[Un])}else if(G.isInstancedMesh)_e.renderInstances(Lt,Ce,G.count);else if(Z.isInstancedBufferGeometry){let He=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,At=Math.min(Z.instanceCount,He);_e.renderInstances(Lt,Ce,At)}else _e.render(Lt,Ce)};function Jh(T,z,Z,V){D!==null&&T.isNodeMaterial&&D.setObject(V,T),lt===!0&&zt.setState(T,Z,!1),T.transparent===!0&&T.side===ln&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,va(T,z,V),T.side=Ri,T.needsUpdate=!0,va(T,z,V),T.side=ln):va(T,z,V)}this.compile=function(T,z,Z=null){Z===null&&(Z=T),D!==null&&D.renderStart(T,z,Z),M=gt.get(Z),M.init(z),_.push(M),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),T!==Z&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),ct=this.localClippingEnabled,lt=zt.init(this.clippingPlanes,ct),lt===!0&&zt.setGlobalState(this.clippingPlanes,z),D!==null&&Vt.render(M.state.shadowsArray,Z,z);let V=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let bt=G.material;if(bt)if(Array.isArray(bt))for(let Rt=0;Rt<bt.length;Rt++){let Mt=bt[Rt];Jh(Mt,Z,z,G),V.add(Mt)}else Jh(bt,Z,z,G),V.add(bt)}),M=_.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(T,z,Z=null){let V=this.compile(T,z,Z);return new Promise(G=>{function bt(){if(V.forEach(function(Rt){let It=X.get(Rt).currentProgram;(It===void 0||It.isReady())&&V.delete(Rt)}),V.size===0){G(T);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Kl=null;function jf(T){Kl&&Kl(T)}function $h(){Fi.stop()}function jh(){Fi.start()}let Fi=new tf;Fi.setAnimationLoop(jf),typeof self!="undefined"&&Fi.setContext(self),this.setAnimationLoop=function(T){Kl=T,Nt.setAnimationLoop(T),T===null?Fi.stop():Fi.start()},Nt.addEventListener("sessionstart",$h),Nt.addEventListener("sessionend",jh),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,z);let Z=Nt.enabled===!0&&Nt.isPresenting===!0,V=E!==null&&(tt===null||Z)&&E.begin(R,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(z),z=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,z,tt),M=gt.get(T,_.length),M.init(z),M.state.textureUnits=$.getTextureUnits(),_.push(M),ht.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),st.setFromProjectionMatrix(ht,bn,z.reversedDepth),ct=this.localClippingEnabled,lt=zt.init(this.clippingPlanes,ct),S=vt.get(T,A.length),S.init(),A.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&Jl(Rt,z,-1/0,R.sortObjects)}Jl(T,z,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(pt,kt),qt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,qt&&Jt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&zt.beginShadows();let G=M.state.shadowsArray;if(Vt.render(G,T,z),lt===!0&&zt.endShadows(),(V&&E.hasRenderPass())===!1){let Rt=S.opaque,Mt=S.transmissive;if(M.setupLights(),z.isArrayCamera){let It=z.cameras;if(Mt.length>0)for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt];tu(Rt,Mt,T,ae)}qt&&Jt.render(T);for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt];Qh(S,T,ae,ae.viewport)}}else Mt.length>0&&tu(Rt,Mt,T,z),qt&&Jt.render(T),Qh(S,T,z)}tt!==null&&H===0&&($.updateMultisampleRenderTarget(tt),$.updateRenderTargetMipmap(tt)),V&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,z),wt.resetDefaultState(),q=-1,J=null,_.pop(),_.length>0?(M=_[_.length-1],$.setTextureUnits(M.state.textureUnits),lt===!0&&zt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,D!==null&&D.renderEnd()};function Jl(T,z,Z,V){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(st)){V&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);let Rt=it.update(T),Mt=T.material;Mt.visible&&S.push(T,Rt,Mt,Z,Ht.z,null,z)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(st))){let Rt=it.update(T),Mt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ht.copy(Rt.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Mt)){let It=Rt.groups;for(let Dt=0,jt=It.length;Dt<jt;Dt++){let ae=It[Dt],Lt=Mt[ae.materialIndex];Lt&&Lt.visible&&S.push(T,Rt,Lt,Z,Ht.z,ae,z)}}else Mt.visible&&S.push(T,Rt,Mt,Z,Ht.z,null,z)}}let bt=T.children;for(let Rt=0,Mt=bt.length;Rt<Mt;Rt++)Jl(bt[Rt],z,Z,V)}function Qh(T,z,Z,V){let{opaque:G,transmissive:bt,transparent:Rt}=T;M.setupLightsView(Z),lt===!0&&zt.setGlobalState(R.clippingPlanes,Z),V&&b.viewport(nt.copy(V)),G.length>0&&_a(G,z,Z),bt.length>0&&_a(bt,z,Z),Rt.length>0&&_a(Rt,z,Z),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function tu(T,z,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){let Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new je(1,1,{generateMipmaps:!0,type:Lt?Rn:tn,minFilter:Pi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let bt=M.state.transmissionRenderTarget[V.id],Rt=V.viewport||nt;bt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),It=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(ie),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Jt.render(Z);let jt=R.toneMapping;R.toneMapping=Tn;let ae=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),lt===!0&&zt.setGlobalState(R.clippingPlanes,V),_a(T,Z,V),$.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let fe=0,Ce=z.length;fe<Ce;fe++){let be=z[fe],{object:_e,geometry:He,material:At,group:qe}=be;if(At.side===ln&&_e.layers.test(V.layers)){let he=At.side;At.side=Ne,At.needsUpdate=!0,eu(_e,Z,V,He,At,qe),At.side=he,At.needsUpdate=!0,Lt=!0}}Lt===!0&&($.updateMultisampleRenderTarget(bt),$.updateRenderTargetMipmap(bt))}R.setRenderTarget(Mt,It,Dt),R.setClearColor(ie,Yt),ae!==void 0&&(V.viewport=ae),R.toneMapping=jt}function _a(T,z,Z){let V=z.isScene===!0?z.overrideMaterial:null;for(let G=0,bt=T.length;G<bt;G++){let Rt=T[G],{object:Mt,geometry:It,group:Dt}=Rt,jt=Rt.material;jt.allowOverride===!0&&V!==null&&(jt=V),Mt.layers.test(Z.layers)&&eu(Mt,z,Z,It,jt,Dt)}}function eu(T,z,Z,V,G,bt){D!==null&&G.isNodeMaterial&&D.setObject(T,G),T.onBeforeRender(R,z,Z,V,G,bt),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(R,z,Z,V,T,bt),G.transparent===!0&&G.side===ln&&G.forceSinglePass===!1?(G.side=Ne,G.needsUpdate=!0,R.renderBufferDirect(Z,z,V,G,T,bt),G.side=Ri,G.needsUpdate=!0,R.renderBufferDirect(Z,z,V,G,T,bt),G.side=ln):R.renderBufferDirect(Z,z,V,G,T,bt),T.onAfterRender(R,z,Z,V,G,bt)}function va(T,z,Z){z.isScene!==!0&&(z=Bt);let V=X.get(T),G=M.state.lights,bt=M.state.shadowsArray,Rt=G.state.version,Mt=mt.getParameters(T,G.state,bt,z,Z,M.state.lightProbeGridArray),It=mt.getProgramCacheKey(Mt),Dt=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,V.fog=z.fog;let jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=ut.get(T.envMap||V.environment,jt),V.envMapRotation=V.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Dn),Dt=new Map,V.programs=Dt);let ae=Dt.get(It);if(ae!==void 0){if(V.currentProgram===ae&&V.lightsStateVersion===Rt)return iu(T,Mt),ae}else Mt.uniforms=mt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,Z,Mt),T.onBeforeCompile(Mt,R),ae=mt.acquireProgram(Mt,It),Dt.set(It,ae),V.uniforms=Mt.uniforms;let Lt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),iu(T,Mt),V.needsLights=np(T),V.lightsStateVersion=Rt,V.needsLights&&(Lt.ambientLightColor.value=G.state.ambient,Lt.lightProbe.value=G.state.probe,Lt.sunLights.value=G.state.sun,Lt.sunLightShadows.value=G.state.sunShadow,Lt.directionalLights.value=G.state.directional,Lt.directionalLightShadows.value=G.state.directionalShadow,Lt.spotLights.value=G.state.spot,Lt.spotLightShadows.value=G.state.spotShadow,Lt.rectAreaLights.value=G.state.rectArea,Lt.ltc_1.value=G.state.rectAreaLTC1,Lt.ltc_2.value=G.state.rectAreaLTC2,Lt.pointLights.value=G.state.point,Lt.pointLightShadows.value=G.state.pointShadow,Lt.hemisphereLights.value=G.state.hemi,Lt.sunShadowMatrix.value=G.state.sunShadowMatrix,Lt.sunShadowCascade.value=G.state.sunShadowCascade,Lt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Lt.spotLightMatrix.value=G.state.spotLightMatrix,Lt.spotLightMap.value=G.state.spotLightMap,Lt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=M.state.lightProbeGridArray.length>0,V.currentProgram=ae,V.uniformsList=null,ae}function nu(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function iu(T,z){let Z=X.get(T);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Qf(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(z.matrixWorld);for(let Z=0,V=T.length;Z<V;Z++){let G=T[Z];if(G.texture!==null&&G.boundingBox.containsPoint(y))return G}return null}function tp(T,z,Z,V,G){z.isScene!==!0&&(z=Bt),$.resetTextureUnits();let bt=z.fog,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?z.environment:null,Mt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,It=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Dt=ut.get(V.envMap||Rt,It),jt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ae=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Lt=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,Ce=!!Z.morphAttributes.color,be=Tn;V.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(be=R.toneMapping);let _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,He=_e!==void 0?_e.length:0,At=X.get(V),qe=M.state.lights;if(lt===!0&&(ct===!0||T!==J)){let Se=T===J&&V.id===q;zt.setState(V,T,Se)}let he=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==qe.state.version||At.outputColorSpace!==Mt||G.isBatchedMesh&&At.batching===!1||!G.isBatchedMesh&&At.batching===!0||G.isBatchedMesh&&At.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&At.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&At.instancing===!1||!G.isInstancedMesh&&At.instancing===!0||G.isSkinnedMesh&&At.skinning===!1||!G.isSkinnedMesh&&At.skinning===!0||G.isInstancedMesh&&At.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&At.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&At.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&At.instancingMorph===!1&&G.morphTexture!==null||At.envMap!==Dt||V.fog===!0&&At.fog!==bt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==zt.numPlanes||At.numIntersection!==zt.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==ae||At.morphTargets!==Lt||At.morphNormals!==fe||At.morphColors!==Ce||At.toneMapping!==be||At.morphTargetsCount!==He||!!At.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,At.__version=V.version);let dn=At.currentProgram;he===!0&&(dn=va(V,z,G),D&&V.isNodeMaterial&&D.onUpdateProgram(V,dn,At));let Un=!1,fi=!1,rs=!1,ye=dn.getUniforms(),Re=At.uniforms;if(b.useProgram(dn.program)&&(Un=!0,fi=!0,rs=!0),V.id!==q&&(q=V.id,fi=!0),At.needsLights){let Se=Qf(M.state.lightProbeGridArray,G);At.lightProbeGrid!==Se&&(At.lightProbeGrid=Se,fi=!0)}if(Un||J!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",T.projectionMatrix),ye.setValue(N,"viewMatrix",T.matrixWorldInverse);let mi=ye.map.cameraPosition;mi!==void 0&&mi.setValue(N,ft.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ye.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,fi=!0,rs=!0)}if(At.needsLights&&(qe.state.sunShadowMap.length>0&&ye.setValue(N,"sunShadowMap",qe.state.sunShadowMap,$),qe.state.directionalShadowMap.length>0&&ye.setValue(N,"directionalShadowMap",qe.state.directionalShadowMap,$),qe.state.spotShadowMap.length>0&&ye.setValue(N,"spotShadowMap",qe.state.spotShadowMap,$),qe.state.pointShadowMap.length>0&&ye.setValue(N,"pointShadowMap",qe.state.pointShadowMap,$)),G.isSkinnedMesh){ye.setOptional(N,G,"bindMatrix"),ye.setOptional(N,G,"bindMatrixInverse");let Se=G.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ye.setValue(N,"boneTexture",Se.boneTexture,$))}G.isBatchedMesh&&(ye.setOptional(N,G,"batchingTexture"),ye.setValue(N,"batchingTexture",G._matricesTexture,$),ye.setOptional(N,G,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",G._indirectTexture,$),ye.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",G._colorsTexture,$));let pi=Z.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&F.update(G,Z,dn),(fi||At.receiveShadow!==G.receiveShadow)&&(At.receiveShadow=G.receiveShadow,ye.setValue(N,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&z.environment!==null&&(Re.envMapIntensity.value=z.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=y_()),fi){if(ye.setValue(N,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&ep(Re,rs),bt&&V.fog===!0&&Ut.refreshFogUniforms(Re,bt),Ut.refreshMaterialUniforms(Re,V,et,K,M.state.transmissionRenderTarget[T.id]),At.needsLights&&At.lightProbeGrid){let Se=At.lightProbeGrid;Re.probesSH.value=Se.texture,Re.probesMin.value.copy(Se.boundingBox.min),Re.probesMax.value.copy(Se.boundingBox.max),Re.probesResolution.value.copy(Se.resolution)}Js.upload(N,nu(At),Re,$)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Js.upload(N,nu(At),Re,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ye.setValue(N,"center",G.center),ye.setValue(N,"modelViewMatrix",G.modelViewMatrix),ye.setValue(N,"normalMatrix",G.normalMatrix),ye.setValue(N,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){let Se=V.uniformsGroups;for(let mi=0,as=Se.length;mi<as;mi++){let ru=Se[mi];rt.update(ru,dn),rt.bind(ru,dn)}}return dn}function ep(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function np(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,z,Z){let V=X.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),X.get(T.texture).__webglTexture=z,X.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let Z=X.get(T);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,Z=0){tt=T,W=z,H=Z;let V=null,G=!1,bt=!1;if(T){let Mt=X.get(T);if(Mt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,Mt.__webglFramebuffer),nt.copy(T.viewport),Ct.copy(T.scissor),Et=T.scissorTest,b.viewport(nt),b.scissor(Ct),b.setScissorTest(Et),q=-1;return}else if(Mt.__webglFramebuffer===void 0)$.setupRenderTarget(T);else if(Mt.__hasExternalTextures)$.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let jt=T.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&X.has(jt)&&(T.width!==jt.image.width||T.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(bt=!0);let Dt=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?V=Dt[z][Z]:V=Dt[z],G=!0):T.samples>0&&$.useMultisampledRTT(T)===!1?V=X.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?V=Dt[Z]:V=Dt,nt.copy(T.viewport),Ct.copy(T.scissor),Et=T.scissorTest}else nt.copy(Tt).multiplyScalar(et).floor(),Ct.copy(Xt).multiplyScalar(et).floor(),Et=ge;if(Z!==0&&(V=B),b.bindFramebuffer(N.FRAMEBUFFER,V)&&b.drawBuffers(T,V),b.viewport(nt),b.scissor(Ct),b.setScissorTest(Et),G){let Mt=X.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,Mt.__webglTexture,Z)}else if(bt){let Mt=z;for(let It=0;It<T.textures.length;It++){let Dt=X.get(T.textures[It]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+It,Dt.__webglTexture,Z,Mt)}}else if(T!==null&&Z!==0){let Mt=X.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,Z)}q=-1};function su(T){let z=X.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=C.textureFormatReadable(T.format),z.__typeReadable=C.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,Z,V,G,bt,Rt,Mt=0){if(!(T&&T.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){b.bindFramebuffer(N.FRAMEBUFFER,It);try{let Dt=T.textures[Mt],jt=Dt.format,ae=Dt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let Lt=su(Dt);if(Lt.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-V&&Z>=0&&Z<=T.height-G&&N.readPixels(z,Z,V,G,yt.convert(jt),yt.convert(ae),bt)}finally{let Dt=tt!==null?X.get(tt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,z,Z,V,G,bt,Rt,Mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(z>=0&&z<=T.width-V&&Z>=0&&Z<=T.height-G){b.bindFramebuffer(N.FRAMEBUFFER,It);let Dt=T.textures[Mt],jt=Dt.format,ae=Dt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let Lt=su(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.bufferData(N.PIXEL_PACK_BUFFER,bt.byteLength,N.STREAM_READ),N.readPixels(z,Z,V,G,yt.convert(jt),yt.convert(ae),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ce=tt!==null?X.get(tt).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Ce);let be=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bd(N,be,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,bt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(fe),N.deleteSync(be),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,Z=0){let V=Math.pow(2,-Z),G=Math.floor(T.image.width*V),bt=Math.floor(T.image.height*V),Rt=z!==null?z.x:0,Mt=z!==null?z.y:0;$.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Rt,Mt,G,bt),b.unbindTexture()},this.copyTextureToTexture=function(T,z,Z=null,V=null,G=0,bt=0){let Rt,Mt,It,Dt,jt,ae,Lt,fe,Ce,be=T.isCompressedTexture?T.mipmaps[bt]:T.image;if(Z!==null)Rt=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,It=Z.isBox3?Z.max.z-Z.min.z:1,Dt=Z.min.x,jt=Z.min.y,ae=Z.isBox3?Z.min.z:0;else{let Re=Math.pow(2,-G);Rt=Math.floor(be.width*Re),Mt=Math.floor(be.height*Re),T.isDataArrayTexture?It=be.depth:T.isData3DTexture?It=Math.floor(be.depth*Re):It=1,Dt=0,jt=0,ae=0}V!==null?(Lt=V.x,fe=V.y,Ce=V.z):(Lt=0,fe=0,Ce=0);let _e=yt.convert(z.format),He=yt.convert(z.type),At;z.isData3DTexture?($.setTexture3D(z,0),At=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?($.setTexture2DArray(z,0),At=N.TEXTURE_2D_ARRAY):($.setTexture2D(z,0),At=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);let qe=b.getParameter(N.UNPACK_ROW_LENGTH),he=b.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=b.getParameter(N.UNPACK_SKIP_PIXELS),Un=b.getParameter(N.UNPACK_SKIP_ROWS),fi=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(N.UNPACK_SKIP_ROWS,jt),b.pixelStorei(N.UNPACK_SKIP_IMAGES,ae);let rs=T.isDataArrayTexture||T.isData3DTexture,ye=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let Re=X.get(T),pi=X.get(z),Se=X.get(Re.__renderTarget),mi=X.get(pi.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,Se.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let as=0;as<It;as++)rs&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(T).__webglTexture,G,ae+as),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(z).__webglTexture,bt,Ce+as)),N.blitFramebuffer(Dt,jt,Rt,Mt,Lt,fe,Rt,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||X.has(T)){let Re=X.get(T),pi=X.get(z);b.bindFramebuffer(N.READ_FRAMEBUFFER,I),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let Se=0;Se<It;Se++)rs?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,G,ae+Se):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,G),ye?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,pi.__webglTexture,bt,Ce+Se):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,pi.__webglTexture,bt),G!==0?N.blitFramebuffer(Dt,jt,Rt,Mt,Lt,fe,Rt,Mt,N.COLOR_BUFFER_BIT,N.NEAREST):ye?N.copyTexSubImage3D(At,bt,Lt,fe,Ce+Se,Dt,jt,Rt,Mt):N.copyTexSubImage2D(At,bt,Lt,fe,Dt,jt,Rt,Mt);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ye?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(At,bt,Lt,fe,Ce,Rt,Mt,It,_e,He,be.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(At,bt,Lt,fe,Ce,Rt,Mt,It,_e,be.data):N.texSubImage3D(At,bt,Lt,fe,Ce,Rt,Mt,It,_e,He,be):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,bt,Lt,fe,Rt,Mt,_e,He,be.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,bt,Lt,fe,be.width,be.height,_e,be.data):N.texSubImage2D(N.TEXTURE_2D,bt,Lt,fe,Rt,Mt,_e,He,be);b.pixelStorei(N.UNPACK_ROW_LENGTH,qe),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),b.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),b.pixelStorei(N.UNPACK_SKIP_ROWS,Un),b.pixelStorei(N.UNPACK_SKIP_IMAGES,fi),bt===0&&z.generateMipmaps&&N.generateMipmap(At),b.unbindTexture()},this.initRenderTarget=function(T){X.get(T).__webglFramebuffer===void 0&&$.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$.setTextureCube(T,0):T.isData3DTexture?$.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$.setTexture2DArray(T,0):$.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){W=0,H=0,tt=null,b.reset(),wt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Cl=class extends Wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Le;t.deleteAttribute("uv");let e=new $t({side:Ne}),n=new $t,i=new Yr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Wn(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(t,tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(t,tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pt(t,tr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Pt(t,tr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Pt(t,tr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Pt(t,tr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function tr(s){return new Vr({color:0,emissive:16777215,emissiveIntensity:s})}var lf=Math.PI*2,Je=18,St=(s,t,e)=>s<t?t:s>e?e:s,ot=(s,t,e)=>s+(t-s)*e,Y=(s,t)=>s+Math.random()*(t-s);var $i=s=>s[Math.floor(Math.random()*s.length)];var cn=(s,t)=>1-Math.exp(-s*t),ca=s=>1-(1-s)*(1-s),ha=s=>.5-.5*Math.cos(Math.PI*s);function en(s){return s=(s+Math.PI)%lf,s<0&&(s+=lf),s-Math.PI}function hi(s,t,e){let n=en(t-s);return s+St(n,-e,e)}function Cn(s){let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}var ce={s:0,t:0,d2:0};function ji(s,t,e,n,i,r,a,o,l,c,h,f,u=ce){let d=n-s,p=i-t,x=r-e,g=c-a,m=h-o,v=f-l,w=s-a,y=t-o,S=e-l,M=d*d+p*p+x*x,A=g*g+m*m+v*v,_=g*w+m*y+v*S,E,R;if(M<1e-9&&A<1e-9)E=0,R=0;else if(M<1e-9)E=0,R=St(_/A,0,1);else{let I=d*w+p*y+x*S;if(A<1e-9)R=0,E=St(-I/M,0,1);else{let O=d*g+p*m+x*v,W=M*A-O*O;E=W>1e-12?St((O*_-I*A)/W,0,1):0,R=(O*E+_)/A,R<0?(R=0,E=St(-I/M,0,1)):R>1&&(R=1,E=St((O-I)/M,0,1))}}let L=s+d*E-(a+g*R),D=t+p*E-(o+m*R),B=e+x*E-(l+v*R);return u.s=E,u.t=R,u.d2=L*L+D*D+B*B,u}var Pn={t:0,d2:0};function ua(s,t,e,n,i,r,a,o,l,c=Pn){let h=a-n,f=o-i,u=l-r,d=h*h+f*f+u*u,p=d>0?St(((s-n)*h+(t-i)*f+(e-r)*u)/d,0,1):0,x=n+h*p-s,g=i+f*p-t,m=r+u*p-e;return c.t=p,c.d2=x*x+g*g+m*m,c}function Ph(s,t){try{let e=parseInt(localStorage.getItem(s),10);return Number.isFinite(e)?e:t}catch{return t}}function Ih(s,t){try{localStorage.setItem(s,String(t))}catch{}}var ne=(()=>{let s=null,t=null,e=null,n=!1,i={};function r(){if(s){s.state==="suspended"&&s.resume();return}let h=window.AudioContext||window.webkitAudioContext;if(!h)return;try{s=new h}catch{s=null;return}t=s.createGain(),t.gain.value=.5;let f=s.createDynamicsCompressor();t.connect(f),f.connect(s.destination),e=s.createBuffer(1,s.sampleRate,s.sampleRate);let u=e.getChannelData(0);for(let d=0;d<u.length;d++)u[d]=Math.random()*2-1}function a(h,f){if(!s||n||s.state!=="running")return!1;let u=s.currentTime;return i[h]!==void 0&&u-i[h]<f?!1:(i[h]=u,!0)}function o(h,f,u,d){h.gain.setValueAtTime(1e-4,f),h.gain.exponentialRampToValueAtTime(d,f+Math.min(.012,u*.25)),h.gain.exponentialRampToValueAtTime(1e-4,f+u)}function l(h,f,u,d,p,x,g){let m=s.createBufferSource();m.buffer=e,m.loop=!0;let v=s.createBiquadFilter();v.type=u,v.Q.value=x,v.frequency.setValueAtTime(d,h),v.frequency.exponentialRampToValueAtTime(p,h+f);let w=s.createGain();o(w,h,f,g),m.connect(v),v.connect(w),w.connect(t),m.start(h,Math.random()*.8),m.stop(h+f+.05)}function c(h,f,u,d,p,x){let g=s.createOscillator();g.type=u,g.frequency.setValueAtTime(d,h),g.frequency.exponentialRampToValueAtTime(p,h+f);let m=s.createGain();o(m,h,f,x),g.connect(m),m.connect(t),g.start(h),g.stop(h+f+.05)}return{init:r,toggleMute(){return n=!n,n},suspend(){s&&s.state==="running"&&s.suspend()},resume(){s&&s.state==="suspended"&&s.resume()},get muted(){return n},swoosh(h){if(!a("swoosh",.03))return;let f=s.currentTime,u=h===2;l(f,u?.28:.16,"bandpass",u?400:700,u?2600:3400,1.4,.32)},slice(){if(!a("slice",.02))return;let h=s.currentTime;l(h,.08,"highpass",2500,7e3,.7,.3),c(h,.2,"triangle",Y(1800,2300),1100,.06),l(h+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!a("wound",.03))return;let h=s.currentTime;l(h,.18,"lowpass",900,150,1,.45),c(h,.12,"sine",160,60,.25)},punch(){if(!a("punch",.05))return;let h=s.currentTime;c(h,.15,"sine",140,45,.5),l(h,.1,"lowpass",1500,200,1,.35)},hurt(){if(!a("hurt",.1))return;let h=s.currentTime;c(h,.3,"sawtooth",320,90,.12)},die(){if(!a("die",.5))return;let h=s.currentTime;c(h,1,"sawtooth",240,40,.14),l(h,.6,"lowpass",800,60,1,.3)},thud(h){if(!a("thud",.06))return;let f=s.currentTime,u=St(h/2500,.04,.3);c(f,.12,"sine",120,45,u),l(f,.07,"lowpass",500,120,1,u*.8)},clang(){if(!a("clang",.05))return;let h=s.currentTime;c(h,.35,"square",1750,1600,.05),c(h,.3,"triangle",2650,2500,.07),l(h,.06,"highpass",4e3,8e3,1,.25)},jump(h){if(!a("jump",.05))return;let f=s.currentTime,u=h||1;c(f,.12,"sine",260*u,560*u,.07)},combo(h){if(!a("combo",.04))return;let f=s.currentTime,u=520*Math.pow(1.06,Math.min(h,24));c(f,.14,"triangle",u,u*1.5,.07)},enemySwing(){a("eswing",.05)&&l(s.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!a("splash",.1))return;let h=s.currentTime;l(h,.5,"lowpass",2400,300,.8,.4),l(h+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!a("win",1))return;let h=s.currentTime;[523,659,784,1047].forEach((f,u)=>c(h+u*.09,.22,"triangle",f,f,.08))},skid(){if(!a("skid",.2))return;let h=s.currentTime;c(h,.22,"sine",Y(950,1150),720,.05),l(h,.25,"bandpass",2200,1400,2,.12)},scrape(){if(!a("scrape",.12))return;let h=s.currentTime;l(h,.12,"bandpass",3200,1700,3,.1)},twang(){if(!a("twang",.08))return;let h=s.currentTime;c(h,.6,"triangle",Y(170,210),70,.22),c(h,.35,"sawtooth",340,120,.05),l(h,.07,"highpass",2500,6e3,1,.35)},hiss(h){if(!a(h?"hissB":"hiss",.3))return;let f=s.currentTime;h?(l(f,.9,"lowpass",3e3,400,.7,.4),c(f,.4,"sine",90,40,.3)):l(f,1.2,"highpass",5e3,3e3,.8,.09)},heal(){if(!a("heal",.2))return;let h=s.currentTime;c(h,.12,"sine",660,660,.08),c(h+.1,.18,"sine",990,990,.08)}}})();var U={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14,SPINE:15},Ni=16,__=45,v_=[.3,.3,1.4,.3,.45,.8,.3,.45,.8,.75,.4,.55,.75,.4,.55,.9],M_=[.6,.9,1,.9,1,1,.9,1,1,.8,.6,.6,.8,.6,.6,1],S_=[3,4,1.5,4,1,1,4,1,1,1,1,1,1,1,1,4],b_=[.14,.07,.14,.08,.06,.06,.08,.06,.06,.09,.08,.07,.09,.08,.07,.15],Lh=.12,w_=5,E_=[[U.NECK,U.SPINE,.17,"torso",1,.5],[U.SPINE,U.PELVIS,.17,"torso",.5,0],[U.NECK,U.HEAD,.07,"neck"],[U.NECK,U.LSH,0,"struct"],[U.NECK,U.RSH,0,"struct"],[U.LSH,U.RSH,0,"struct"],[U.PELVIS,U.LHIP,0,"struct"],[U.PELVIS,U.RHIP,0,"struct"],[U.LHIP,U.RHIP,0,"struct"],[U.LSH,U.LELB,.068,"arm"],[U.LELB,U.LHAND,.06,"arm"],[U.RSH,U.RELB,.068,"arm"],[U.RELB,U.RHAND,.06,"arm"],[U.LHIP,U.LKNEE,.092,"leg"],[U.LKNEE,U.LFOOT,.074,"leg"],[U.RHIP,U.RKNEE,.092,"leg"],[U.RKNEE,U.RFOOT,.074,"leg"]];function Nh(s){return{spine:.52*s,neck:.24*s,shW:.2*s,hipW:.11*s,ua:.29*s,fa:.27*s,th:.44*s,sh:.43*s,headR:.14*s}}function cf(s,t,e,n,i,r=1,a=1){return{x:s,y:t,z:e,px:s,py:t,pz:e,r:n,k:i,c:r,ky:a,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var T_=1,Pl=class{constructor(t,e,n){this.id=T_++,this.S=t,this.d=Nh(t),this.kBase=n.k,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(Ni*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let i=0;i<Ni;i++){let r=e[i*3],a=e[i*3+1],o=e[i*3+2];this.pts.push(cf(r,a,o,b_[i]*t,v_[i],M_[i],S_[i])),this.tgt[i*3]=r,this.tgt[i*3+1]=a,this.tgt[i*3+2]=o}this.pts[U.HEAD].r=this.d.headR,this.pts[U.HEAD].im=.8,this.pts[U.PELVIS].pin=!1;for(let[i,r,a,o,l,c]of E_)this.addBone(i,r,a*t,o,l,c);this.addAux(U.LSH,U.SPINE,!1),this.addAux(U.RSH,U.SPINE,!1),this.addAux(U.LHIP,U.SPINE,!1),this.addAux(U.RHIP,U.SPINE,!1),this.addAux(U.NECK,U.PELVIS,!0,.8),this.addAux(U.LSH,U.PELVIS,!0,.78),this.addAux(U.RSH,U.PELVIS,!0,.78),this.addAux(U.HEAD,U.PELVIS,!0,.8),this.addAux(U.HEAD,U.LSH,!0,.9),this.addAux(U.HEAD,U.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,i,r=0,a=1){let o=this.pts[t],l=this.pts[e];this.bones.push({a:t,b:e,r:n,kind:i,sa:r,sb:a,len:Math.hypot(l.x-o.x,l.y-o.y,l.z-o.z),vis:i!=="struct",part:t*100+e})}addAux(t,e,n,i=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*i})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let i=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,f=1/t,u=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],g=(x.x-x.px)*i,m=(x.y-x.py)*i,v=(x.z-x.pz)*i,w=g*g+m*m+v*v,y=__*t;if(w>y*y){let M=y/Math.sqrt(w);g*=M,m*=M,v*=M}x.px=x.x,x.py=x.y,x.pz=x.z;let S=-Je;if(x.y<u){let M=Math.exp(-4*t);g*=M,m*=M,v*=M,S+=Je*St((u-x.y)*6,0,1.6)}else g*=.999,m*=.999,v*=.999;if(a&&x.attached&&p<Ni){let M=this.tgt[p*3],A=this.tgt[p*3+1],_=this.tgt[p*3+2];if(x.pin){x.x=M,x.y=A,x.z=_;continue}if(o>0){let E=l*x.k,R=c*x.c,L=(M-x.x)*E-(g*f-this.cvx)*R;S+=(A-x.y)*E*x.ky-(m*f-this.cvy)*R*Math.sqrt(x.ky);let D=(_-x.z)*E-(v*f-this.cvz)*R;x.x+=g+L*h,x.y+=m+S*h,x.z+=v+D*h;continue}}x.x+=g,x.y+=m+S*h,x.z+=v}for(let p=0;p<w_;p++){for(let x=0;x<this.bones.length;x++){let g=this.bones[x];this.solve(g.a,g.b,g.len,!1)}for(let x=0;x<this.aux.length;x++){let g=this.aux[x];this.solve(g.a,g.b,g.len,g.min)}for(let x=0;x<r.length;x++){let g=r[x],m=n.ground(g.x,g.z);g.y<m+g.r&&g.py>m-.25&&(g.y=m+g.r)}}let d=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],g=n.ground(x.x,x.z);if(x.y>g+x.r+.002||x.py<g-.25)continue;let m=x.y-x.py;m<0&&(-m*f>this.impact&&(this.impact=-m*f),x.py=x.y+m*.2),x.px=x.x-(x.x-x.px)*d,x.pz=x.z-(x.z-x.pz)*d}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,i){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||i&&h>=n)return;let f=this.invMass(r),u=this.invMass(a),d=f+u;if(d===0)return;let p=(h-n)/(h*d);r.x+=o*p*f,r.y+=l*p*f,r.z+=c*p*f,a.x-=o*p*u,a.y-=l*p*u,a.z-=c*p*u}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),i=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=i,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=i,r.push(c))}i++}let a=n[U.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=St(e,.18,.82);let i=this.pts[n.a],r=this.pts[n.b],a=()=>{let d=cf(ot(i.x,r.x,e),ot(i.y,r.y,e),ot(i.z,r.z,e),n.r*.9,0);return d.px=ot(i.px,r.px,e),d.py=ot(i.py,r.py,e),d.pz=ot(i.pz,r.pz,e),d.stump=!0,d.stumpR=n.r,d},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=ot(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),f=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,f),this.updateConnectivity(),this.version++;let u=this.pts[o];return{i1:o,i2:l,x:u.x,y:u.y,z:u.z,kind:n.kind}}addVel(t,e,n,i,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*i,o.py-=e*i,o.pz-=n*i}}addSpin(t,e,n,i){let r=this.comp?this.comp[U.PELVIS]:void 0,a=f=>r===void 0||this.comp[f]===r,o=0,l=0,c=0,h=0;if(this.pts.forEach((f,u)=>{a(u)&&(o+=f.x,l+=f.y,c+=f.z,h++)}),!!h){o/=h,l/=h,c/=h;for(let f=0;f<this.pts.length;f++){if(!a(f))continue;let u=this.pts[f],d=u.x-o,p=u.y-l,x=u.z-c;u.px-=(e*x-n*p)*i,u.py-=(n*d-t*x)*i,u.pz-=(t*p-e*d)*i}}}bounds(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<i&&(i=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=i,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[U.PELVIS]}};function Dh(s,t,e,n){let i=s.bones,r=s.pts,a=r[U.HEAD],o=s.d.headR;for(let l=1;l<=n;l++){let c=l/n,h=ot(t.bx,e.bx,c),f=ot(t.by,e.by,c),u=ot(t.bz,e.bz,c),d=ot(t.tx,e.tx,c),p=ot(t.ty,e.ty,c),x=ot(t.tz,e.tz,c),g=null,m=1/0;for(let v=0;v<i.length;v++){let w=i[v];if(!w.vis)continue;let y=r[w.a],S=r[w.b];ji(h,f,u,d,p,x,y.x,y.y,y.z,S.x,S.y,S.z);let M=w.r+.02;ce.d2<M*M&&ce.d2<m&&(m=ce.d2,g={bone:v,u:ce.t,t:ce.s,x:ot(y.x,S.x,ce.t),y:ot(y.y,S.y,ce.t),z:ot(y.z,S.z,ce.t),head:!1})}if(ua(a.x,a.y,a.z,h,f,u,d,p,x),Pn.d2<o*o&&Pn.d2<m&&(g={bone:-1,u:.5,t:Pn.t,x:a.x,y:a.y,z:a.z,head:!0}),g)return g}return null}var A_=.22;function hf(s,t,e,n){let i=s.pts,r=i[U.HEAD],a=s.d.headR,o=s.boneWith(U.HEAD),l=s.bones.findIndex(c=>c.kind==="torso"&&(c.a===U.NECK||c.b===U.NECK));if(o<0||!i[U.HEAD].attached)return null;for(let c=1;c<=n;c++){let h=c/n,f=ot(t.bx,e.bx,h),u=ot(t.by,e.by,h),d=ot(t.bz,e.bz,h),p=ot(t.tx,e.tx,h),x=ot(t.ty,e.ty,h),g=ot(t.tz,e.tz,h),m=s.bones[o],v=i[m.a],w=i[m.b];if(ji(f,u,d,p,x,g,v.x,v.y,v.z,w.x,w.y,w.z),ce.d2<(m.r+.02)**2)return{bone:o,u:ce.t,t:ce.s,x:ot(v.x,w.x,ce.t),y:ot(v.y,w.y,ce.t),z:ot(v.z,w.z,ce.t),head:!1,zone:"neck"};if(ua(r.x,r.y,r.z,f,u,d,p,x,g),Pn.d2<a*a)return{bone:-1,u:.5,t:Pn.t,x:r.x,y:r.y,z:r.z,head:!0,zone:"neck"};if(l>=0&&s.bones[l].vis){let y=s.bones[l],S=i[y.a],M=i[y.b];if(ji(f,u,d,p,x,g,S.x,S.y,S.z,M.x,M.y,M.z),(y.a===U.NECK?ce.t:1-ce.t)<A_&&ce.d2<(y.r+.02)**2)return{bone:o,u:.25,t:ce.s,x:ot(S.x,M.x,ce.t),y:ot(S.y,M.y,ce.t),z:ot(S.z,M.z,ce.t),head:!1,zone:"collar"}}}return null}function Uh(s,t,e,n,i){let r=i*i;for(let a=1;a<=n;a++){let o=a/n;if(ji(ot(s.bx,t.bx,o),ot(s.by,t.by,o),ot(s.bz,t.bz,o),ot(s.tx,t.tx,o),ot(s.ty,t.ty,o),ot(s.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),ce.d2<r)return{x:ot(e.bx,e.tx,ce.t),y:ot(e.by,e.ty,ce.t),z:ot(e.bz,e.tz,ce.t)}}return null}var zh=["lean","hunch","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Di(){let s={};for(let t of zh)s[t]=0;return s}function Qi(s,t,e,n){for(let i of zh)s[i]=t[i]+(e[i]-t[i])*n;return s}function ff(s,t,e){for(let n of zh)s[n]+=(t[n]-s[n])*e}var hn={guard(s,t){return s.lean=.2,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.3,s.lP=.62,s.lB=1.15,s.lS=.16,s.rP=.28,s.rB=.95,s.rS=.14,s.bob=Math.sin(t*2.4)*.012,s},crouch(s,t){return s.lean=.4,s.hunch=.6+.06*Math.sin(t*2.2),s.twist=0,s.side=.08*Math.sin(t*1.3),s.headP=-.55,s.lP=1.05,s.lB=1.95,s.lS=.2,s.rP=.8,s.rB=1.85,s.rS=.18,s.bob=Math.sin(t*2.2)*.02,s},run(s,t){let e=Math.sin(t);return s.lean=.22,s.hunch=.72,s.twist=-e*.16,s.side=0,s.headP=-.32,s.lP=.2+.78*e,s.lB=.8+1.2*Math.max(0,Math.cos(t+.5)),s.rP=.2-.78*e,s.rB=.8+1.2*Math.max(0,Math.cos(t+Math.PI+.5)),s.lS=.08+.06*Math.sin(t+1.3),s.rS=.08-.06*Math.sin(t+1.3),s.bob=-Math.abs(Math.cos(t))*.07+.05,s},kneel(s){return s.lean=.25,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.2,s.lP=1.2,s.lB=1.3,s.lS=.1,s.rP=-.25,s.rB=1.9,s.rS=.08,s.bob=-.06,s},lunge(s){return s.lean=.3,s.hunch=.3,s.side=0,s.headP=-.3,s.lP=.85,s.lB=1,s.lS=.1,s.rP=-.45,s.rB=.35,s.rS=.1,s.bob=-.02,s},skid(s,t,e){let n=Math.sin(t*1.7);s.lean=.12,s.hunch=.2,s.twist=0,s.side=.4*e,s.headP=-.1;let i=.25,r=.12,a=.62,o=.55+.45*n,l=1.3+.3*Math.cos(t*1.7),c=-.12;return e>0?(s.rP=i,s.rB=r,s.rS=a,s.lP=o,s.lB=l,s.lS=c):(s.lP=i,s.lB=r,s.lS=a,s.rP=o,s.rB=l,s.rS=c),s.bob=-.05,s},hop(s,t,e){let n=Math.abs(Math.sin(t));return s.lean=.2,s.hunch=.3,s.twist=0,s.side=0,s.headP=-.25,s.lP=.15+(e?.25*Math.sin(t):0),s.lB=.35+(e?.5*n:0),s.lS=.05,s.rP=s.lP,s.rB=s.lB,s.rS=.05,s.bob=e?n*.13:Math.sin(t)*.01,s},stumps(s,t,e){let n=Math.sin(t);return s.lean=.35,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.45,s.lP=.3+(e?.7*n:0),s.lB=0,s.lS=.2,s.rP=.3-(e?.7*n:0),s.rB=0,s.rS=.2,s.bob=e?Math.abs(n)*.1:0,s},ride(s,t){return s.lean=.12,s.hunch=.25,s.twist=0,s.side=0,s.headP=-.1,s.lP=.95,s.lB=1.55,s.lS=1.15,s.rP=.95,s.rB=1.55,s.rS=1.15,s.bob=Math.sin(t)*.03,s},air(s){return s.lean=.1,s.hunch=.35,s.twist=0,s.side=0,s.headP=.1,s.lP=1,s.lB=1.6,s.lS=.12,s.rP=.4,s.rB=1.4,s.rS=.12,s.bob=0,s}};function In(s,t,e,n,i){s[t*3]=e,s[t*3+1]=n,s[t*3+2]=i}function uf(s,t,e,n){return(n.th*Math.cos(s)+n.sh*Math.cos(s-t))*Math.cos(e)}function df(s,t,e,n,i,r,a,o,l,c,h){let f=Math.cos(c),u=Math.sin(c),d=Math.cos(o),p=i+d*u*h.th,x=r-d*f*h.th,g=a+Math.sin(o)*h.th;In(s,e,p,x,g),d=Math.cos(o-l),In(s,n,p+d*u*h.sh,x-d*f*h.sh,g+Math.sin(o-l)*h.sh),In(s,t,i,r,a)}var Il=[0,0,0];function da(s,t,e,n,i,r){let a=Math.cos(s),o=Math.sin(s),l=i*a-r*o,c=i*o+r*a;a=Math.cos(t),o=Math.sin(t);let h=n*a-l*o,f=n*o+l*a;return a=Math.cos(e),o=Math.sin(e),Il[0]=h*a+c*o,Il[1]=f,Il[2]=-h*o+c*a,Il}function Fh(s,t,e,n,i=3,r=null){let a=-s.lS,o=s.rS,l=0;i&1&&(l=Math.max(l,uf(s.lP,s.lB,a,t))),i&2&&(l=Math.max(l,uf(s.rP,s.rB,o,t)));let c=(r!==null?r:l+n)+s.bob;In(e,U.PELVIS,0,c,0);let h=t.spine*.5,f=s.lean+s.hunch,u=da(s.lean,s.side*.4,s.twist*.25,0,h,0),d=u[0],p=c+u[1],x=u[2];In(e,U.SPINE,d,p,x),u=da(f,s.side,s.twist,0,h,0);let g=d+u[0],m=p+u[1],v=x+u[2];In(e,U.NECK,g,m,v);let w=s.headP-.8*s.hunch,y=Math.cos(w),S=Math.sin(w);u=da(f,s.side,s.twist,0,t.neck*y,t.neck*S+.03*t.neck),In(e,U.HEAD,g+u[0],m+u[1],v+u[2]),u=da(f,s.side,s.twist,-t.shW,-.03,0),In(e,U.LSH,g+u[0],m+u[1],v+u[2]),u=da(f,s.side,s.twist,t.shW,-.03,0),In(e,U.RSH,g+u[0],m+u[1],v+u[2]);for(let[_,E,R,L]of[[U.LSH,U.LELB,U.LHAND,-1],[U.RSH,U.RELB,U.RHAND,1]]){let D=e[_*3],B=e[_*3+1],I=e[_*3+2];In(e,E,D+L*.04,B-t.ua,I+.05),In(e,R,D+L*.04,B-t.ua-t.fa*.9,I+.16)}let M=Math.cos(s.twist*.25),A=Math.sin(s.twist*.25);df(e,U.LHIP,U.LKNEE,U.LFOOT,-t.hipW*M,c,t.hipW*A,s.lP,s.lB,a,t),df(e,U.RHIP,U.RKNEE,U.RFOOT,t.hipW*M,c,-t.hipW*A,s.rP,s.rB,o,t)}function pf(s,t,e,n,i,r,a,o,l,c,h,f){let u=n-s,d=i-t,p=r-e,x=Math.hypot(u,d,p),g=(a+o)*.999;x<1e-5&&(u=0,d=-1,p=0,x=1e-5);let m=u/x,v=d/x,w=p/x;x>g&&(x=g);let y=(a*a-o*o+x*x)/(2*x),S=Math.sqrt(Math.max(0,a*a-y*y)),M=l*m+c*v+h*w,A=l-m*M,_=c-v*M,E=h-w*M,R=Math.hypot(A,_,E);return R<1e-5&&(A=0,_=-1,E=0,R=1),A/=R,_/=R,E/=R,f[0]=s+m*y+A*S,f[1]=t+v*y+_*S,f[2]=e+w*y+E*S,f[3]=s+m*x,f[4]=t+v*x,f[5]=e+w*x,f}var gn=.135;function R_(s,t,e){let n=gn,i=gn+s*.86,r=gn+s,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([u,,d])=>[u,i,d]),l=[0,r,0],c=[],h=(u,d,p)=>c.push(...u,...d,...p);for(let u=0;u<4;u++){let d=(u+1)%4;h(a[u],o[u],o[d]),h(a[u],o[d],a[d]),h(o[u],l,o[d])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let f=new ve;return f.setAttribute("position",new le(c,3)),f.computeVertexNormals(),f}var er={};function C_(){return er.guard||(er.guard=new $t({color:4869975,metalness:.85,roughness:.35}),er.grip=new $t({color:2760989,roughness:.85})),er}function Oh(s,t=.07){let n=C_(),i=new pe,r=new $t({color:14936302,metalness:.95,roughness:.2}),a=new Pt(R_(s,t*1,.018*1*t/.07),r),o=new Pt(new Le(.24*1,.035*1,.05*1),n.guard);o.position.y=.12*1;let l=new Pt(new Ke(.019*1,.022*1,.22*1,10),n.grip),c=new Pt(new Qe(.032*1,12,8),n.guard);c.position.y=-.125*1;for(let h of[a,o,l,c])h.castShadow=h===a,i.add(h);return i.userData.bladeMat=r,i}function Ll(s){s.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==er.guard&&t.material!==er.grip&&t.material.dispose())})}var mf=new ee,Ui=new P,ts=new P,gf=new P;function Nl(s,t,e,n,i,r,a,o,l,c){ts.set(i,r,a).normalize(),Ui.set(o,l,c),Ui.addScaledVector(ts,-Ui.dot(ts)),Ui.lengthSq()<1e-8&&Ui.set(1,0,0).addScaledVector(ts,-ts.x),Ui.normalize(),gf.crossVectors(Ui,ts),mf.makeBasis(Ui,ts,gf),s.quaternion.setFromRotationMatrix(mf),s.position.set(t,e,n)}var fa=class{constructor(t,e,n,i,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:i.x,y:i.y,z:i.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let i=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*i,c=(o.y-o.py)*i,h=(o.z-o.pz)*i;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-Je*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,f=Math.hypot(l,c,h)||1,u=(f-this.L)/(2*f);this.a.x+=l*u,this.a.y+=c*u,this.a.z+=h*u,this.b.x-=l*u,this.b.y-=c*u,this.b.z-=h*u;for(let d of[this.a,this.b]){let p=n.ground(d.x,d.z);if(d.y<p+.02&&d.py>p-.2){if(d===r&&!n.noStick&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,d.y=p-.12;return}d.y=p+.02,d.px=d.x-(d.x-d.px)*.6,d.pz=d.z-(d.z-d.pz)*.6}}}}render(){let t=this.a,e=this.b;Nl(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var pa=[[0,.165],[.2,.162],[.45,.142],[.72,.172],[.9,.168],[1,.118]];function P_(s){for(let t=1;t<pa.length;t++){let[e,n]=pa[t];if(s<=e){let[i,r]=pa[t-1],a=(s-i)/(e-i);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return pa[pa.length-1][1]}var I_={100:[.066,.06],304:[.072,.058],607:[.072,.058],405:[.058,.05],708:[.058,.05],910:[.108,.076],1213:[.108,.076],1011:[.078,.056],1314:[.078,.056]};function Bh(s,t){if(s.kind==="torso")return P_(t);let e=I_[s.part]||[s.r,s.r];return e[0]+(e[1]-e[0])*t}var xf=new Map;function L_(s,t,e,n){let i=`${s.part}|${s.sa.toFixed(3)}|${s.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=xf.get(i);if(r)return r;let a=s.len,o=[],l=Bh(s,s.sa)*t,c=Bh(s,s.sb)*t;if(e)for(let f=0;f<5;f++){let u=-Math.PI/2+f/5*Math.PI/2;o.push(new at(l*Math.cos(u),l*Math.sin(u)))}else o.push(new at(1e-4,0));let h=s.kind==="torso"?14:4;for(let f=0;f<=h;f++){let u=f/h;o.push(new at(Bh(s,s.sa+(s.sb-s.sa)*u)*t,u*a))}if(n)for(let f=1;f<=5;f++){let u=f/5*Math.PI/2;o.push(new at(Math.max(1e-4,c*Math.cos(u)),a+c*Math.sin(u)))}else o.push(new at(1e-4,a));return r=new Hr(o,12),xf.set(i,r),r}var N_=new Qe(1,18,12),D_=new Qe(1,10,8),U_=new Qe(1,14,10),yf=new Qe(1,12,8),z_=new $t({color:14680092,roughness:.45,emissive:3801093}),F_=new $t({color:16777215,roughness:.25}),O_=new $t({color:1118481,roughness:.3}),_f=new P(0,1,0),nr=new P,vf=new P,un=new P,zi=new P,Dl=new P,Mf=new ee;function Sf(s,t,e){zi.copy(t).addScaledVector(s,-t.dot(s)),zi.lengthSq()<1e-8&&zi.set(1,0,0).addScaledVector(s,-s.x),zi.normalize(),Dl.crossVectors(zi,s),Mf.makeBasis(zi,s,Dl),e.setFromRotationMatrix(Mf)}var Ul=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new pe,this.mat=new wi({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new pe;let i=new Pt(N_,this.mat),r=this.rag.d.headR;i.scale.set(r*.95,r*1.12,r*1.08),i.castShadow=!0,this.headGroup.add(i),this.pupils=[];for(let a of[-1,1]){let o=new Pt(U_,F_);o.scale.setScalar(.062*n),o.position.set(a*.058*n,.05*n,.105*n);let l=new Pt(D_,O_);l.scale.setScalar(.027*n),l.userData.base=new P(a*.058*n,.05*n,.105*n+.05*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new P(1,0,0),this.headLateral=new P(1,0,0),this.pupilOff=new at,this.pupilVel=new at,this.prevHead=new P,this.deadLook=[new at(Y(-1,1),Y(-1,1)),new at(Y(-1,1),Y(-1,1))],this.extremities=[];for(let[a,o,l]of[[U.LHAND,.07,1],[U.RHAND,.07,1],[U.LFOOT,.082,.75],[U.RFOOT,.082,.75]]){let c=new Pt(yf,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let i=new Pt(L_(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);i.castShadow=!this.shadowOff,n.kind==="torso"&&i.scale.set(1.15,1,.86),this.boneMeshes.set(n,i),this.group.add(i)}for(let[n,i]of this.boneMeshes)e.has(n)||(this.group.remove(i),this.boneMeshes.delete(n));t.pts.forEach((n,i)=>{if(!n.stump||this.stumpMeshes.has(i))return;let r=new Pt(yf,z_);r.userData.r=n.stumpR,this.stumpMeshes.set(i,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,i=this.ch,r=e.comp;nr.set(n[U.LSH].x-n[U.RSH].x,n[U.LSH].y-n[U.RSH].y,n[U.LSH].z-n[U.RSH].z),nr.lengthSq()>1e-6&&this.lateral.copy(nr).normalize(),vf.set(n[U.LHIP].x-n[U.RHIP].x,n[U.LHIP].y-n[U.RHIP].y,n[U.LHIP].z-n[U.RHIP].z).normalize();for(let[h,f]of this.boneMeshes){let u=n[h.a],d=n[h.b];un.set(d.x-u.x,d.y-u.y,d.z-u.z);let p=un.length();if(!(p<1e-6))if(un.multiplyScalar(1/p),f.position.set(u.x,u.y,u.z),h.kind==="torso"){let g=!(h.part===U.SPINE*100+U.PELVIS)&&(r[h.a]===r[U.NECK]||r[h.b]===r[U.NECK]);Sf(un,g?this.lateral:vf,f.quaternion)}else f.quaternion.setFromUnitVectors(_f,un)}let a=n[U.HEAD],o=e.neighborOf(U.HEAD);if(o>=0?un.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():un.set(0,1,0),r[U.HEAD]===r[U.LSH]&&this.headLateral.copy(this.lateral),Sf(un,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){nr.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),zi.set(1,0,0).applyQuaternion(this.headGroup.quaternion),Dl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-nr.dot(zi)*.004,f=-nr.dot(Dl)*.004,u=this.pupilOff,d=this.pupilVel;d.x+=((h-u.x)*260-d.x*10)*t,d.y+=((f-u.y)*260-d.y*10)*t,u.x=St(u.x+d.x*t,-.022,.022),u.y=St(u.y+d.y*t,-.022,.022)}let l=i.S;this.pupils.forEach((h,f)=>{let u=h.userData.base;if(i.alive)h.position.set(u.x+this.pupilOff.x*l,u.y+this.pupilOff.y*l,u.z);else{let d=this.deadLook[f];h.position.set(u.x+d.x*.02*l,u.y+d.y*.02*l,u.z-.004*l)}});for(let h of this.extremities){let f=n[h.userData.idx];h.position.set(f.x,f.y,f.z),i.alive&&h.rotation.set(0,i.yaw,0)}for(let[h,f]of this.stumpMeshes){let u=n[h],d=e.neighborOf(h);if(d<0){f.visible=!1;continue}un.set(u.x-n[d].x,u.y-n[d].y,u.z-n[d].z).normalize();let p=f.userData.r;f.position.set(u.x+un.x*p*.45,u.y+un.y*p*.45,u.z+un.z*p*.45),f.quaternion.setFromUnitVectors(_f,un),f.scale.set(p*1.06,p*.55,p*1.06)}let c=i.flash>0?.55:0;this.mat.emissive.setScalar(c),!i.alive&&!this.shadowOff&&i.game.time-i.deathT>3&&(this.shadowOff=!0,this.group.traverse(h=>{h.castShadow=!1}))}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var Rf=7,ga=.95,Bl=1.65,B_=-1.95,k_=1.7,bf=1.9,wf=230,Ef=15,H_=3.2,V_=2.2,G_=2,kh=36,W_=3.2,X_=4.2,q_=.07,Y_=[[0,-1],[.7,-.7],[-.7,-.7],[1,-.25],[-1,-.25]],Z_=[[.8,.6],[-.8,.6],[0,1],[1,0],[-1,0]],Cf=.42,ma=[0,0,1],Ln=[1,0,0],es=[0,0,0],K_=[[U.RSH,U.RELB,U.RHAND,0,.8]],J_=[[U.LSH,U.LELB,U.LHAND,0,-.8]],$_=.25,j_=.12,Q_=[[U.RSH,U.RELB,U.RHAND,.05,.8,0],[U.LSH,U.LELB,U.LHAND,-.065,-.8,0]],tv=[[U.RSH,U.RELB,U.RHAND,0,.8,0],[U.LSH,U.LELB,U.LHAND,0,-.8,1]],ev={x:0,y:0,z:0},nv=[-.45,-.35,-.2,-.1,0,.1,.25],iv=[[U.HEAD,1.3,1.7],[U.NECK,1,1.3],[U.SPINE,.8,1.1],[U.LSH,1,2.1],[U.RSH,1,1.9],[U.LKNEE,1.6,2.5],[U.RKNEE,1.6,2.3]],zl={vy:0,px:0,pz:0},sv=Di(),rv=Di(),Hh=Di(),Tf=Di(),Af=Di(),Fl=[0,0,0,0,0,0],Ol=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.team=e.team||"enemy",this.side=this.team==="enemy"?1:0,this.target=null,this.tgT=0,this.passSide=1,this.titan=!!e.titan,this.flyer=!!e.flyer,this.hookCd=Y(.5,2),this.heavy=!!e.heavy,this.boss=!!e.boss,this.aimCtl=!this.titan,this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.gy=0,this.vx=0,this.vz=0,this.vy=0,this.slideX=0,this.slideZ=0,this.slip=0,this.slipDir=1,this.skidding=!1,this.brakeK=0,this.low=0,this.lowPref=!0,this.runK=0,this.pelvisPrev={x:0,y:0,z:0,ok:!1},this.swingBias=0,this.swinging=!1,this.lowSwing=0,this.gait=Y(.9,1.12),this.gaitOff=Y(0,Math.PI*2),this.launchT=0,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.hasSword2=!!e.dual,this.t=Y(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.mount=null,this.rope=null,this.flying=!1,this.stickW={x:0,z:1,mag:0},this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.aimK=this.isPlayer?wf:this.heavy?80:this.boss?100:ot(150,wf,this.skill),this.aimMaxW=this.isPlayer?Ef:this.heavy?8:this.boss?10:ot(12,Ef,this.skill),this.aimC=1.52*Math.sqrt(this.aimK),this.aimA=this.yaw,this.plan=null,this.grudge=null,this.grudgeT=0,this.pitchAdj=0,this.state="approach",this.timer=Y(.6,1.2),this.cool=Y(.3,.9)*ot(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=Nh(this.S),this.footR=.07*this.S,this.pose=hn.guard(Di(),0),this.tpose=Di(),this.local=new Float32Array(Ni*3),this.world=new Float32Array(Ni*3),Fh(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new Pl(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.lg2=[0,0,0],this.ld2=[0,0,1],this.sw2={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.b2Cur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.b2Prev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bladeLen=e.bladeLen||ga,this.tip={init:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gx:0,gy:0,gz:0,gvx:0,gvy:0,gvz:0,dx:0,dy:1,dz:0,w:0},this.bladeKRest=this.isPlayer?70:this.heavy?50:60,this.bladeKSwing=this.isPlayer?420:this.heavy?200:this.boss?260:ot(300,420,this.skill),this.swordMesh=Oh(this.bladeLen,this.titan?.1:.07),this.swordMesh.scale.setScalar(this.S),this.sword2Mesh=this.hasSword2?Oh(this.bladeLen):null,this.view=new Ul(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,i=this.world;for(let r=0;r<Ni;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];i[r*3]=this.x-e*a+t*l,i[r*3+1]=this.y+o,i[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let i=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+i*t[2],e[n+1]=t[1],e[n+2]=i*t[0]+r*t[2]}get legMask(){let t=this.rag.pts;return(t[U.LFOOT].attached?1:0)|(t[U.RFOOT].attached?2:0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.grudgeT=Math.max(0,this.grudgeT-t),this.launchT=Math.max(0,this.launchT-t),this.isPlayer?this.thinkPlayer():this.aimCtl?this.thinkEnemy(t):this.thinkTitan(t),this.aimCtl&&(this.applyStick(),this.updateAim(t)),this.mount?this.ride():this.move(t),!!this.alive)){if(this.aimCtl){let e=this.mount?2.3:G_,n=en(this.swYaw-this.yaw);Math.abs(n)>e&&(this.mount?(this.swYaw=en(this.yaw+Math.sign(n)*e),this.swW=0):this.yaw=this.swYaw-Math.sign(n)*e)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t),this.skidFx(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let i=Math.hypot(t,e)||1;t/=i,e/=i;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:B_,a1:k_,wind:n?.05:ot(.62,.24,r)*(this.counterT>0?.6:1)*1.8,dur:n?.2:.5,rec:n?.18:ot(.55,.35,r),hits:new Set,rolled:new Set,kills:0,tx:0,ty:0,tz:0,high:!1,tg:this.target||this.game.player},this.titan&&this.aimTitan(),this.game.onSwingStart(this)}aimTitan(){let t=this.swing,e=t.tg,n=Math.max(0,t.wind-t.t)+t.dur*.3,i=ot(.35,.85,this.skill);t.tx=e.x+(e.vx+e.slideX)*n*i,t.ty=e.y+.75+e.vy*n*i*.5,t.tz=e.z+(e.vz+e.slideZ)*n*i}get gripR(){return this.rag.pts[U.RHAND].attached}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.aimCtl)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}get curEp(){return this.aimCtl?this.episode:this.swing}thinkPlayer(){let t=this.game,e=t.input.move(),n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),r=n*e.y-i*e.x,a=i*e.y+n*e.x,o=Math.hypot(r,a)||1;this.stickW.x=r/o,this.stickW.z=a/o,this.stickW.mag=e.mag}applyStick(){let t=this.stickW,e=this.legMask,n=e===3?1:e?.62:.42,i=St((t.mag-.4)/.45,0,1)*this.speed*n;this.want.x=t.x*i,this.want.z=t.z*i,t.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(t.x,t.z))}updateAim(t){let e=en(this.aimYaw-this.swYaw);this.swW=St(this.swW+(this.aimK*e-this.aimC*this.swW)*t,-this.aimMaxW,this.aimMaxW),this.swYaw=en(this.swYaw+this.swW*t),this.faceYaw=this.swYaw,this.flying=(!!this.rope||this.y-this.gy>.4)&&Math.hypot(this.vx,this.vy,this.vz)>8}ride(){let t=this.mount,e=t.saddle(ev);this.x=e.x,this.y=e.y,this.z=e.z,this.vx=t.vx,this.vz=t.vz,this.vy=0,this.yaw=t.yaw,this.faceYaw=t.yaw,this.phase=t.phase,this.low=0,this.runK=0}moveAir(t){let e=this.game.world;this.rope&&this.rope.valid&&!this.rope.valid()&&(this.rope=null);let n=this.rope;if(this.low+=(0-this.low)*cn(5,t),n){let h=n.anchor(),f=h.x-this.x,u=h.y-(this.y+1.1*this.S),d=h.z-this.z,p=Math.hypot(f,u,d)||1;this.vx+=f/p*n.pull*t,this.vy+=u/p*n.pull*t,this.vz+=d/p*n.pull*t,n.t+=t,(p<n.release||n.t>n.maxT)&&(this.rope=null)}this.vy-=Je*(n?.55:.9)*t;let i=Math.exp(-.3*t);this.vx*=i,this.vz*=i;let r=this.stickW;r.mag>.3&&(this.vx+=r.x*7*t,this.vz+=r.z*7*t);let a=Math.hypot(this.vx,this.vy,this.vz);a>30&&(this.vx*=30/a,this.vy*=30/a,this.vz*=30/a),this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let o=Math.hypot(this.x,this.z),l=e.radius-.5;!e.grid&&o>l&&(this.x*=l/o,this.z*=l/o,this.vx*=.3,this.vz*=.3);let c=e.ground(this.x,this.z);if(c>-1/0&&this.y<=c){let h=e.tileMotion(this.x,this.z,zl).vy;this.vy<=h&&(this.y=c,this.gy=c,h>2.5?this.launch(zl):(this.vy=0,this.kb=.35))}c===-1/0&&this.y<this.gy-.3&&(this.falling=!0)}launch(t){this.vy=Math.max(this.vy,Math.min(t.vy*1.1,12)),this.y=this.gy+.13,this.launchT<=0&&(this.vx+=t.px,this.vz+=t.pz,this.isPlayer||(this.stun=Math.max(this.stun,.45))),this.launchT=.4}thinkEnemy(t){let e=this.game,n=this.stickW,i=e.player;this.grudge&&(this.grudgeT<=0||!this.grudge.alive)&&(this.grudge=null);let r=this.grudge||this.pickTarget(t),a=r||i;this.lowPref=!a.mount;let o=a.x-this.x,l=a.z-this.z,c=Math.hypot(o,l)||1,h=Math.atan2(o,l),f=(S,M)=>{this.aimA=en(S);let A=S+this.aimNoise();n.x=Math.sin(A),n.z=Math.cos(A),n.mag=M},u=(S,M,A)=>f(hi(this.aimA,S,M*t),A);n.mag=0;let d=this.local,p=a.local,x=this.y+ot(d[U.NECK*3+1],d[U.PELVIS*3+1],.28)-.1*this.S,g=this.flyer&&this.rope?this.rope.pt.y:a.titan?a.y+.9:a.y+ot(p[U.NECK*3+1],p[U.PELVIS*3+1],.4),m=St(Math.atan2(g-x,Math.max(.8,c-.3)),-.6,.35);if(this.pitchAdj+=(m-this.pitchAdj)*cn(6,t),e.time<.8){u(h,3,.25);return}if(this.timer-=t,this.cool-=t,(!r||this.side&&!i.alive)&&this.state!=="panic"&&(this.state="cheer"),this.mount&&this.state!=="cheer"){this.thinkRider(t,a,o,l,c,h,u);return}if(this.flyer&&this.state!=="cheer"&&this.thinkFlyer(t,a,c,h,f))return;let v=this.skill,w=a.titan?2.1:1.6*this.S,y=ot(2.5,5.5,v)*(this.heavy?.6:1);switch(this.state){case"approach":{let S=Math.hypot(this.vx,this.vz);if(c<w+.25+S*S*ot(.05,.1,v)){this.state="fight",u(h,y,.25);break}if(this.cool<=0&&c<w+1+S*.3&&Math.random()<t*ot(.4,2.5,v)&&this.mayAttack(a,!0)){this.startFlick(!0);break}let M=Math.atan2(-o,-l)+St(this.spread(a,o,l)*.45,-1,1),A=a.x+Math.sin(M)*w-this.x,_=a.z+Math.cos(M)*w-this.z;u(Math.atan2(A,_),4,.95);break}case"fight":if(c>w+.8){this.state="approach";break}u(h,y,c>w+.2?.4+.45*St((c-w)/1.5,.15,.6):.25),(this.counterT>0||this.cool<=0&&c<w+.35&&this.mayAttack(a))&&this.startFlick(!1);break;case"attack":this.runPlan(t,h,y);break;case"stagger":this.stun<=0&&(this.state="fight",this.plan=null,this.cool=Y(.2,.6));break;case"panic":{let S=this.x-i.x,M=this.z-i.z;f(Math.atan2(S,M),Math.min(.95,.4+.45*3.4/this.speed));break}case"cheer":this.y<=this.gy&&!this.falling&&Math.random()<t*2.2&&(this.vy=Y(3.2,4.5));break}}pickTarget(t){this.tgT-=t;let e=this.target;if(e&&e.alive&&this.tgT>0)return e;this.tgT=Y(.4,.8);let n=null,i=1/0;for(let r of this.game.hostilesOf(this)){if(!r.alive)continue;let a=Math.hypot(r.x-this.x,r.z-this.z);r===e&&(a*=.7),this.titan&&r.isPlayer&&(a*=.6),a<i&&(i=a,n=r)}return this.target=n,n}thinkFlyer(t,e,n,i,r){this.hookCd-=t;let a=this.rope;if(a||this.y>this.gy+.3){let o=a?a.pt:e;return r(Math.atan2(o.x-this.x,o.z-this.z),.5),!0}return!e.titan||this.stun>0||this.kb>0?!1:this.hookCd<=0&&n<24&&n>3?(this.hookCd=Y(1.2,2.6)*ot(1.3,.8,this.skill),this.game.allyHook(this,e),!0):(r(i+(n<9?this.strafeDir*1.4:0),n>9?.95:.7),!0)}thinkRider(t,e,n,i,r,a,o){if(this.state==="attack"){this.runPlan(t,a,5);return}if(this.state==="stagger"){this.stun<=0&&(this.state="fight",this.cool=Y(.3,.7));return}let l=Math.min(r*.3,e.titan?2.8:1.8)*this.passSide,c=i/r,h=-n/r;o(Math.atan2(e.x+c*l-this.x,e.z+h*l-this.z),5,.95),this.cool<=0&&r<(e.titan?4.2:3.3*this.S)&&this.mayAttack(e,!0)&&(this.passSide=Math.random()<.5?-1:1,this.startFlick(!0))}aimNoise(){let t=this.t,e=this.gaitOff;return(.2*Math.sin(t*1.7+e)+.1*Math.sin(t*4.3+e*2))*(1.2-.6*this.skill)}spread(t,e,n){let i=Math.atan2(-e,-n),r=0;for(let a of this.game.matesOf(this)){if(a===this||a===t||!a.alive||a.state==="panic")continue;let o=en(Math.atan2(a.x-t.x,a.z-t.z)-i);Math.abs(o)<1.6&&(r-=Math.sign(o)*(1.6-Math.abs(o)))}return r*(1.2+this.skill*1.5)}mayAttack(t,e=!1){let n=this.game;if(e||n.spec.type==="battle"||n.spec.type==="titanwar"||Math.random()<.6+.35*this.skill){let i=Math.atan2(t.x-this.x,t.z-this.z),r=2.2*this.S;for(let a of n.matesOf(this))if(!(a===this||a===t||!a.alive)&&!(Math.hypot(a.x-this.x,a.z-this.z)>r)&&Math.abs(en(Math.atan2(a.x-this.x,a.z-this.z)-i))<1.6)return this.cool=Y(.25,.5),!1}return t!==n.player||n.takeAttackToken(this)}mateNear(t){for(let e of this.game.matesOf(this))if(e!==this&&e.alive&&Math.hypot(e.x-this.x,e.z-this.z)<t*this.S)return!0;return!1}startFlick(t){let e=this.skill,n=Math.random()<.5?-1:1;if(!t&&e>.2&&!this.heavy&&Math.random()<.05+.13*e&&!this.mateNear(3))this.plan={kind:"spin",t:0,side:n,base:this.aimA,dur:Y(.7,1.1),rec:.35};else{let i=Y(1.1,1.5),r=ot(2.3,4.2,e)*(this.heavy?.55:this.boss?.7:1)*(this.counterT>0?1.6:1);this.plan={kind:"flick",t:0,side:n,base:this.aimA,th:i,th2:Math.min(2.9-i,Y(1.2,1.5)),wind:i/r,slash:this.heavy?.45:.28,rec:.3,run:t,fired:!1}}this.counterT=0,this.state="attack"}runPlan(t,e,n){let i=this.plan,r=this.stickW;if(!i){this.state="fight";return}i.t+=t,i.base=hi(i.base,e,n*t);let a=(l,c)=>{this.aimA=en(l);let h=l+this.aimNoise();r.x=Math.sin(h),r.z=Math.cos(h),r.mag=c};if(i.kind==="spin"){i.t<i.dur?a(i.base+i.side*10*i.t,.3):i.t<i.dur+i.rec?a(hi(this.aimA,e,5*t),.25):this.endPlan();return}let o=i.run?.7:.3;i.t<i.wind?a(i.base+i.side*i.th*(i.t/i.wind),o):i.t<i.wind+i.slash?a(i.base-i.side*i.th2,o):i.t<i.wind+i.slash+i.rec?a(hi(this.aimA,e,4*t),.25):this.endPlan()}endPlan(){this.plan=null,this.state="fight",this.cool=Y(.5,1.2)*ot(1.3,.5,this.skill)*(this.boss?1.5:1)}thinkTitan(t){let e=this.game,n=this.pickTarget(t)||e.player,i=n.x-this.x,r=n.z-this.z,a=Math.hypot(i,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(i,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=.5*this.S;switch((!n.alive||!e.player.alive)&&(this.state="cheer"),this.state){case"approach":{let l=this.legMask,c=this.speed*(l===3?1:l?.6:.4);a>o+.2?(this.want.x=i/a*c,this.want.z=r/a*c):this.state="fight";break}case"fight":{this.want.x=i/a*St((a-o)*3,-2,this.speed),this.want.z=r/a*St((a-o)*3,-2,this.speed);let l=n.y>3;if(this.hasSword&&this.cool<=0&&a<o+1+this.skill*.8+(l?4:0)&&(n!==e.player||e.takeAttackToken(this))){let[c,h]=$i(l?Z_:Y_);this.startSwing(c,h,!1),this.swing.high=l,l&&(this.swing.wind*=.4),this.state="attack"}break}case"attack":this.swing||(this.state="fight",this.cool=Y(.5,1.3)*ot(1.3,.55,this.skill)*(n===e.player?1:2.2));break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=Y(.2,.6));break;default:break}}move(t){var S;let e=this.game.world,n=this.y>this.gy+.02||this.vy>.01;if((this.isPlayer||this.flyer)&&!this.falling&&(this.rope||n)){this.moveAir(t),this.turn(t);return}let i=this.want.x,r=this.want.z;if((this.stun>0||this.hurtT>0)&&(i*=.2,r*=.2),this.kb>0||this.falling){let M=Math.exp(-5*t);this.vx*=M,this.vz*=M}else if(this.aimCtl&&!n)this.drive(i,r,t);else{let M=(n?3:14)*t,A=i-this.vx,_=r-this.vz,E=Math.hypot(A,_);E>M?(this.vx+=A/E*M,this.vz+=_/E*M):(this.vx=i,this.vz=r)}let a=e.gx,o=e.gz,l=Math.hypot(a,o),c=(S=e.slideMin)!=null?S:q_;if(!n&&!this.falling&&l>c){let M=Je*.85*(l-c)/l*(e.slideGain||1)*t;this.slideX-=a*M,this.slideZ-=o*M}let h=Math.exp(-1.2*t);this.slideX*=h,this.slideZ*=h;let f=this.vx+this.slideX,u=this.vz+this.slideZ;if(this.falling)this.x+=f*t,this.z+=u*t;else{let M=this.x+f*t,A=this.z+u*t,_=.35*this.S;e.solidAt(M,A,this.y)&&(e.solidAt(M,this.z,this.y)?e.solidAt(this.x,A,this.y)?(M=this.x,A=this.z,this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0):(M=this.x,this.vx=0,this.slideX=0):(A=this.z,this.vz=0,this.slideZ=0)),e.inside(M,A,_)||(this.kb>0||n)&&e.canFall&&!e.wallH?(this.x=M,this.z=A):this.overWall(e,f,u)?(this.x=M,this.z=A):e.clampInside(M,A,_,this)||(e.inside(M,this.z,_)?(this.x=M,this.vz=0,this.slideZ=0):e.inside(this.x,A,_)?(this.z=A,this.vx=0,this.slideX=0):(this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0));let E=e.ground(this.x,this.z);E===-1/0?this.falling=!0:this.falling||(this.gy=E)}!this.falling&&e.grid&&this.y<=this.gy+.12&&e.tileMotion(this.x,this.z,zl).vy>2.5&&this.launch(zl),!this.falling&&this.vy<=0&&this.y<=this.gy+.12?(this.y=this.gy,this.vy=0):(this.vy-=Je*t,this.y+=this.vy*t,!this.falling&&this.y<=this.gy&&(this.y=this.gy,this.vy=0)),this.falling&&this.y<this.gy-e.fallDepth&&this.game.onFell(this);let d=Math.sin(this.yaw),p=Math.cos(this.yaw),x=-f*p+u*d,g=n||this.falling?0:St((Math.abs(x)-.7)/2,0,1);this.slip+=(g-this.slip)*cn(10,t),Math.abs(x)>.3&&(this.slipDir=Math.sign(x));let m=Math.hypot(f,u),v=Math.max(this.speed,1),w=0;if(!n&&!this.falling&&m>.45*v){let M=(this.want.x*f+this.want.z*u)/m;w=St((m-.45*v)/(.35*v),0,1)*St(1-M/m,0,1)}this.brakeK+=(w-this.brakeK)*cn(w>this.brakeK?12:5,t);let y=!n&&!this.falling&&this.lowPref&&Math.hypot(this.want.x,this.want.z)<.5&&m<2.5?1:0;y=Math.max(y,this.brakeK),this.low+=(y-this.low)*cn(y>this.low?7:5,t),this.turn(t)}drive(t,e,n){let i=Math.hypot(this.vx,this.vz);if(i<.3){let m=kh*n,v=t-this.vx,w=e-this.vz,y=Math.hypot(v,w);y>m?(this.vx+=v/y*m,this.vz+=w/y*m):(this.vx=t,this.vz=e);return}let r=Math.max(this.speed,1),a=Math.sqrt(St((i-.15*r)/(.55*r),0,1)),o=this.legMask===3?1:.7,l=(this.isPlayer?20:15)*o,c=ot(kh,W_,a)*o,h=ot(kh,X_,a)*o,f=this.vx/i,u=this.vz/i,d=t*f+e*u,p=-t*u+e*f,x=St(d-i,-h*n,l*n),g=St(p,-c*n,c*n);this.vx+=f*x-u*g,this.vz+=u*x+f*g}overWall(t,e,n){if(!t.wallH)return!1;let i=Math.abs(this.x),r=Math.abs(this.z),a=i>r?Math.sign(this.x):0,o=i>r?0:Math.sign(this.z);return a*e+o*n<t.overSpeed?!1:(this.falling=!0,this.vx=e,this.vz=n,this.slideX=0,this.slideZ=0,this.vy=3,this.kb=1,!0)}turn(t){let e=this.isPlayer?8:this.titan?1.2:this.heavy?2.5:7;this.yaw=hi(this.yaw,this.faceYaw,e*t);let n=this.vx+this.slideX,i=this.vz+this.slideZ,r=Math.hypot(n,i),a=n*this.forwardX+i*this.forwardZ<-.3*r?-1:1,o=this.legMask;this.phase+=(a*r+this.slip*5)*t/((o===3?bf:bf*.6)*this.gait*this.S)*Math.PI*2}skidFx(t){let e=Math.max(this.slip,this.brakeK);if(e>.4&&this.y<=this.gy+.05&&Math.random()<t*45*e){let n=this.rag.pts[Math.random()<.5?U.LFOOT:U.RFOOT];n.attached&&this.game.fx.dust(n.x,n.y,n.z,-this.vx*.2,-this.vz*.2)}if(e>.55&&!this.skidding){this.skidding=!0;let n=this.game.player;(this.isPlayer||Math.hypot(n.x-this.x,n.z-this.z)<7)&&ne.skid()}else e<.3&&(this.skidding=!1)}animate(t){let e=this.tpose,n=Math.hypot(this.vx+this.slideX,this.vz+this.slideZ),i=this.legMask,r=null;if(this.mount)hn.ride(e,this.mount.phase),r=.02;else if(this.y>this.gy+.05||this.falling)hn.air(e,this.t);else if(i===3){let g=St(n/(this.isPlayer?3.2:2),0,1);this.runK=g,Qi(Af,hn.guard(sv,this.t),hn.crouch(Hh,this.t+this.gaitOff),this.low),Qi(e,Af,hn.run(rv,this.phase),g);let m=this.gaitOff;e.side+=Math.sin(this.phase*.5+m)*.16*g+Math.sin(this.t*1.1+m)*.05*(1-g),e.hunch+=Math.sin(this.phase*2+.6)*.12*g,e.headP+=Math.sin(this.phase*2)*.09*g,this.slip>.02&&Qi(e,e,hn.skid(Tf,this.phase,this.slipDir),this.slip*.85),this.brakeK>.03&&Qi(e,e,hn.kneel(Tf),this.brakeK*.9*(1-this.slip*.6))}else if(i)hn.hop(e,this.phase,n>.5),e.side=i===1?.1:-.1,this.runK=0;else{hn.stumps(e,this.phase,n>.5);let g=this.rag.pts;r=g[U.LKNEE].attached&&g[U.RKNEE].attached?this.d.th*.85+.08*this.S:.3*this.S}let a=this.swingMode(),o=this.swing,l=0,c=0;if(this.aimCtl){let g=en(this.yaw-this.swYaw);e.twist=St(g*.75,-1.1,1.1)+Math.sin(this.phase)*.2*this.runK;let m=this.lowSwing;e.hunch+=.3*m,e.lB+=.35*m,e.rB+=.35*m,e.lP+=.2*m,e.rP+=.1*m;let v=St(Math.abs(this.swW)/15,0,1);e.hunch+=v*.3,e.side+=St(-this.swW/15,-1,1)*.25}else if(a){let g=m=>o.ux*Math.sin(m)*.55;if(a===1){let m=ha(o.t/o.wind);l=g(o.a0)*m,c=m*.5}else if(a===2){let m=ca((o.t-o.wind)/o.dur);l=g(ot(o.a0,o.a1,m)),c=1}else{let m=ha((o.t-o.wind-o.dur)/o.rec);l=g(o.a1)*(1-m),c=1-m}this.titan&&!o.high?(Qi(e,e,hn.crouch(Hh,this.t),c),e.lean+=.2*c,e.hunch+=.25*c):Qi(e,e,hn.lunge(Hh),c*(n>1.5?.4:1)),e.twist=l,o.uy<-.5&&a===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.2,e.hunch=-.15,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.hunch=-.1,e.headP=-.4),ff(this.pose,e,cn(a===2||this.aimCtl?24:12,t)),Fh(this.pose,this.d,this.local,this.footR,i,r),this.aimCtl&&this.jiggle(),this.computeSword(t),this.applyArms(),this.localToWorld();let h=this.rag,f=this.world,u=U.PELVIS*3,d=this.pelvisPrev;t>0&&d.ok?h.setVel((f[u]-d.x)/t,(f[u+1]-d.y)/t,(f[u+2]-d.z)/t):h.setVel(this.vx,this.vy,this.vz),d.x=f[u],d.y=f[u+1],d.z=f[u+2],d.ok=!0,h.tgt.set(f);let p=this.hasSword,x=this.titan;h.pts[U.LHAND].pin=p&&(!x||!this.gripR),h.pts[U.RHAND].pin=p&&(!x||this.gripR)}jiggle(){let t=this.local,e=this.t,n=this.gaitOff,i=(.03+.03*this.runK)*this.S;for(let[r,a,o]of iv){let l=r*3,c=n+r*1.7;t[l]+=Math.sin(e*o*2.1+c)*i*a,t[l+1]+=Math.sin(e*o*1.3+c*1.3)*i*a*.5,t[l+2]+=Math.sin(e*o*1.7+c*.7)*i*a}}computeSword(t=0){let e=this.local,n=this.S,i=e[U.NECK*3],r=e[U.NECK*3+1],a=e[U.NECK*3+2],o=e[U.PELVIS*3],l=e[U.PELVIS*3+1],c=e[U.PELVIS*3+2],h=ot(i,o,.28),f=ot(r,l,.28),u=ot(a,c,.28)+.1*n,d=[.38,.78,.5],p=Math.hypot(d[0],d[1],d[2]);d[0]/=p,d[1]/=p,d[2]/=p;let x=[h+.14*n,f-.16*n,u+.26*n],g=this.swing,m=this.swingMode(),v=.3*n;m&&(m===1&&this.aimTitan(),v=this.titanBasis(g));let w=(I,O,W,H)=>{let tt=Math.sin(I),q=Math.cos(I);for(let J=0;J<3;J++)O[J]=ma[J]*q+Ln[J]*tt,W[J]=Ln[J]*q-ma[J]*tt,H[J]=es[J]+O[J]*v},y=this.ld,S=this.lw,M=this.lg,A=this.aimCtl&&this.hasSword;if(this.aimCtl&&!this.hasSword&&(this.episode=null),A&&!(this.blockT>0&&!this.isPlayer)){let I=en(this.yaw-this.swYaw),O=this.flying?1:St(Math.abs(this.swW)/6,0,1),W=this.mount?0:this.low,H=this.runK,tt=ot(ot(.75,1,H),.62,W),q=Math.abs(this.swW);q>2.5&&!this.swinging?(this.swinging=!0,this.swingBias=$i(nv)):q<1&&(this.swinging=!1);let J=St((.8-this.stickW.mag)/.5,0,1),nt=(this.mount?-.35:ot(-.1,-.46,Math.max(W,J*.8)))+this.swingBias+.12*Math.sign(this.swW),Ct=Math.max(-.8,ot(tt,nt,O)+this.pitchAdj);this.lowSwing=O*St((-.1-nt)/.45,0,1);let Et=Math.sin(I),ie=Math.cos(I),Yt=Math.cos(Ct),se=I+(this.hasSword2?$_:0),K=Math.sin(se),et=Math.cos(se);y[0]=K*Yt,y[1]=Math.sin(Ct),y[2]=et*Yt,S[0]=et,S[1]=0,S[2]=-K;let pt=(.3+O*(.12+.18*W))*n,kt=Math.sin(this.phase*2)*.045*n*H;M[0]=h+Et*pt+.07*n*H*(1-O),M[1]=f-ot(.12,.3,W)*n+kt-.18*n*this.lowSwing,M[2]=u-.1*n+ie*pt}else if(this.blockT>0&&!m){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(y[0]=1,y[1]=.15,y[2]=.2,M[0]=h-.3*n,M[1]=f+.38*n,M[2]=u+.22*n):(y[0]=.1,y[1]=1,y[2]=.15,M[0]=h+this.blockUx*.3*n,M[1]=f-.05*n,M[2]=u+.3*n);let I=Math.hypot(y[0],y[1],y[2]);y[0]/=I,y[1]/=I,y[2]/=I,S[0]=0,S[1]=0,S[2]=1}else if(!m||!this.hasSword)y[0]=d[0],y[1]=d[1],y[2]=d[2],S[0]=1,S[1]=0,S[2]=0,M[0]=x[0],M[1]=x[1],M[2]=x[2];else if(m===2){let I=ca((g.t-g.wind)/g.dur);w(ot(g.a0,g.a1,I),y,S,M),M[2]+=.08*n*I}else{let I=[0,0,0],O=[0,0,0],W=[0,0,0],H;m===1?(w(g.a0,I,O,W),H=1-ha(g.t/g.wind)):(w(g.a1,I,O,W),H=ha((g.t-g.wind-g.dur)/g.rec));for(let q=0;q<3;q++)y[q]=ot(I[q],d[q],H),S[q]=ot(O[q],q===0?1:0,H),M[q]=ot(W[q],x[q],H);let tt=Math.hypot(y[0],y[1],y[2])||1;y[0]/=tt,y[1]/=tt,y[2]/=tt}this.hasSword2&&(M[0]+=j_*n);let _=Math.sin(this.yaw),E=Math.cos(this.yaw),R=this.sw;R.gx=this.x-E*M[0]+_*M[2],R.gy=this.y+M[1],R.gz=this.z+_*M[0]+E*M[2],R.dx=-E*y[0]+_*y[2],R.dy=y[1],R.dz=_*y[0]+E*y[2],R.wx=-E*S[0]+_*S[2],R.wy=S[1],R.wz=_*S[0]+E*S[2],A&&this.simBlade(t);let L=gn*n,D=(gn+this.bladeLen)*n,B=this.bCur;B.bx=R.gx+R.dx*L,B.by=R.gy+R.dy*L,B.bz=R.gz+R.dz*L,B.tx=R.gx+R.dx*D,B.ty=R.gy+R.dy*D,B.tz=R.gz+R.dz*D,this.hasSword2&&this.hasSword&&this.computeSword2(h,L,D)}computeSword2(t,e,n){let i=this.lg,r=this.ld,a=this.lg2,o=this.ld2;a[0]=2*t-i[0],a[1]=i[1],a[2]=i[2],o[0]=-r[0],o[1]=r[1],o[2]=r[2];let l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=this.sw2;h.gx=this.x-c*a[0]+l*a[2],h.gy=this.y+a[1],h.gz=this.z+l*a[0]+c*a[2],h.dx=-c*o[0]+l*o[2],h.dy=o[1],h.dz=l*o[0]+c*o[2];let f=h.dz,u=-h.dx,d=Math.hypot(f,u);d<.2?(f=-c,u=l):(f/=d,u/=d),h.wx=f,h.wy=0,h.wz=u;let p=this.b2Cur;p.bx=h.gx+h.dx*e,p.by=h.gy+h.dy*e,p.bz=h.gz+h.dz*e,p.tx=h.gx+h.dx*n,p.ty=h.gy+h.dy*n,p.tz=h.gz+h.dz*n}copyBlade(){let t=this.bCur,e=this.bPrev;if(e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz,!this.hasSword2)return;let n=this.b2Cur,i=this.b2Prev;i.bx=n.bx,i.by=n.by,i.bz=n.bz,i.tx=n.tx,i.ty=n.ty,i.tz=n.tz}simBlade(t){let e=this.sw,n=this.tip,i=(gn+this.bladeLen)*this.S,r=e.gx,a=e.gy,o=e.gz;if(!n.init||t<=0){n.x=r+e.dx*i,n.y=a+e.dy*i,n.z=o+e.dz*i,n.vx=n.vy=n.vz=0,n.gvx=n.gvy=n.gvz=0,n.gx=r,n.gy=a,n.gz=o,n.dx=e.dx,n.dy=e.dy,n.dz=e.dz,n.w=0,n.init=!0;return}let l=(r-n.gx)/t,c=(a-n.gy)/t,h=(o-n.gz)/t;n.gx=r,n.gy=a,n.gz=o,n.gvx=l,n.gvy=c,n.gvz=h;let f=this.flying||this.blockT>0?1:St(Math.abs(this.swW)/4,0,1),u=ot(this.mount?this.bladeKRest*2:this.bladeKRest,this.bladeKSwing,f),d=2*ot(.35,.6,f)*Math.sqrt(u),p=r+e.dx*i,x=a+e.dy*i,g=o+e.dz*i;n.vx+=((p-n.x)*u-(n.vx-l)*d)*t,n.vy+=((x-n.y)*u-(n.vy-c)*d-Je*.8)*t,n.vz+=((g-n.z)*u-(n.vz-h)*d)*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;let m=n.x-r,v=n.y-a,w=n.z-o,y=Math.hypot(m,v,w)||1e-6;m/=y,v/=y,w/=y;let M=this.game.world.ground(r+m*i,o+w*i);if(M>-1/0&&a+v*i<M+.03){let Et=St((M+.03-a)/i,-1,1),ie=Math.hypot(m,w),Yt=Math.sqrt(Math.max(0,1-Et*Et));if(ie>1e-4?(m=m/ie*Yt,w=w/ie*Yt):(m=Math.sin(this.swYaw)*Yt,w=Math.cos(this.swYaw)*Yt),v=Et,n.vy<c&&(n.vy=c),Math.hypot(n.vx-l,n.vz-h)>3){Math.random()<.5&&this.game.fx.sparks(r+m*i,M+.03,o+w*i,2);let K=this.game.player;(this.isPlayer||Math.hypot(K.x-this.x,K.z-this.z)<6)&&ne.scrape()}}n.x=r+m*i,n.y=a+v*i,n.z=o+w*i;let A=n.vx-l,_=n.vy-c,E=n.vz-h,R=A*m+_*v+E*w;n.vx-=m*R,n.vy-=v*R,n.vz-=w*R;let L=m-n.dx,D=v-n.dy,B=w-n.dz,I=Math.hypot(L,D,B),O=n.dz*m-n.dx*w;n.dx=m,n.dy=v,n.dz=w,n.w=I/t,e.dx=m,e.dy=v,e.dz=w;let W=w,H=-m,tt=Math.hypot(W,H);tt<.2?(W=-Math.cos(this.yaw),H=Math.sin(this.yaw)):(W/=tt,H/=tt),e.wx=W,e.wy=0,e.wz=H;let q=Math.sin(this.yaw),J=Math.cos(this.yaw);this.ld[0]=-J*m+q*w,this.ld[1]=v,this.ld[2]=q*m+J*w;let Ct=(this.isPlayer?Math.abs(this.swW)>2:this.state==="attack")||this.flying?H_:this.isPlayer?7.5:10;this.updateEpisode(n.w,Ct,I>1e-6&&Math.abs(O)>.3*I?Math.sign(O):0)}updateEpisode(t,e,n){let i=this.episode;if((t>e||this.flying)&&this.hasSword){let r=t>e?n||(i&&i.dir!==2?i.dir:3):2;i&&i.dir===3&&(r===1||r===-1)&&(i.dir=r,i.ux=-r,i.uy=0,r=i.dir),(!i||i.dir!==r)&&(this.episode={hits:new Set,hits2:new Set,rolled:new Set,kills:0,dir:r,ux:r===3?0:r===2?1:-r,uy:r===3?-1:0},this.game.onSwingStart(this),r!==2&&t>6&&(this.isPlayer?ne.swoosh(1):ne.enemySwing()))}else t<V_&&(this.episode=null)}bounceBlade(){let t=this.tip;t.init&&(t.vx=t.gvx-(t.vx-t.gvx)*.45,t.vy=t.gvy-(t.vy-t.gvy)*.45,t.vz=t.gvz-(t.vz-t.gvz)*.45)}titanBasis(t){let e=this.local,n=this.S,i=(this.gripR?U.RSH:U.LSH)*3;es[0]=e[i],es[1]=e[i+1],es[2]=e[i+2];let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=t.tx-this.x,l=t.tz-this.z,c=-a*o+r*l-es[0],h=t.ty-this.y-es[1],f=r*o+a*l-es[2],u=Math.hypot(c,h,f)||1;if(c/=u,h/=u,f/=u,f<-.3){let M=Math.sqrt(.91)/(Math.hypot(c,h)||1);c*=M,h*=M,f=-.3}ma[0]=c,ma[1]=h,ma[2]=f;let d=f,p=-c,x=Math.hypot(d,p);x<.2&&(d=1,p=0,x=1),d/=x,p/=x;let g=h*p,m=f*d-c*p,v=-h*d;Ln[0]=t.ux*d+t.uy*g,Ln[1]=t.uy*m,Ln[2]=t.ux*p+t.uy*v;let w=Math.hypot(Ln[0],Ln[1],Ln[2])||1;Ln[0]/=w,Ln[1]/=w,Ln[2]/=w;let y=gn*n,S=(gn+this.bladeLen)*n;return St(u-ot(y,S,.6),.2*n,.5*n)}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,i=this.titan?this.gripR?K_:J_:this.hasSword2?tv:Q_;for(let[r,a,o,l,c,h]of i){let f=h?this.lg2:this.lg,u=h?this.ld2:this.ld,d=l*e,p=f[0]+u[0]*d,x=f[1]+u[1]*d,g=f[2]+u[2]*d;pf(t[r*3],t[r*3+1],t[r*3+2],p,x,g,n.ua,n.fa,c,-1,-.3,Fl),t[a*3]=Fl[0],t[a*3+1]=Fl[1],t[a*3+2]=Fl[2],t[o*3]=p,t[o*3+1]=x,t[o*3+2]=g}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;this.hasSword2&&(!t[U.LHAND].attached||!t[U.RHAND].attached)&&this.game.dropSword2(this,!t[U.RHAND].attached),!t[U.LHAND].attached&&!t[U.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.plan=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function av(){let s=document.createElement("canvas");s.width=s.height=32;let t=s.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new Mi(s)}function ov(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createLinearGradient(0,8,0,60);e.addColorStop(0,"#ffffff"),e.addColorStop(.5,"#f1efec"),e.addColorStop(1,"#a9a4a0"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=t.createRadialGradient(32,32,0,32,32,31);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.6,"rgba(0,0,0,1)"),n.addColorStop(.85,"rgba(0,0,0,0.55)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,64,64),new Mi(s)}var Vh=class{constructor(t,e){let n=ov();this.free=[],this.live=[];for(let i=0;i<e;i++){let r=new ai(new Gn({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,r.renderOrder=2,t.add(r),this.free.push({m:r,x:0,y:0,z:0,vx:0,vy:0,vz:0,s:1,a:1,age:0,life:1})}}add(t,e,n,i,r,a,o,l,c){let h=this.free.pop()||this.live.shift();h&&(Object.assign(h,{x:t,y:e,z:n,vx:i,vy:r,vz:a,s:o,life:l,a:c,age:0}),h.m.visible=!0,this.live.push(h))}update(t){let e=this.live,n=Math.exp(-2.4*t),i=0;for(let r=0;r<e.length;r++){let a=e[r];if(a.age+=t,a.age>=a.life){a.m.visible=!1,this.free.push(a);continue}a.vx*=n,a.vz*=n,a.vy=a.vy*n+2.2*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,e[i++]=a}e.length=i}flush(){for(let t of this.live){let e=t.age/t.life;t.m.position.set(t.x,t.y,t.z),t.m.scale.setScalar(t.s*(1+1.5*Math.sqrt(e))),t.m.material.opacity=t.a*Math.min(1,t.age/.08)*(1-e*e)}}clear(){for(let t of this.live)t.m.visible=!1,this.free.push(t);this.live.length=0}},ns=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new ve,this.attr=new Ae(this.pos,3),this.attr.setUsage(Ys),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new Rr(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max?this.list[Math.random()*this.max|0]=t:this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},kl=class{constructor(t){let e=av();this.blood=new ns(t,2600,new Xn({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.bigBlood=new ns(t,1800,new Xn({color:11730970,size:.24,map:e,alphaTest:.5,sizeAttenuation:!0})),this.quiet=!1,this.spark=new ns(t,400,new Xn({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new ns(t,600,new Xn({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.steamPool=new Vh(t,56),this.dustPool=new ns(t,500,new Xn({color:15327956,size:.11,map:e,alphaTest:.5,sizeAttenuation:!0,transparent:!0,opacity:.75})),this.maxDecals=1100;let n=new Ir(1,12).rotateX(-Math.PI/2),i=new oi({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new Wn(n,i,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new ee,this._q=new $e,this._s=new P,this._p=new P,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.bigBlood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.dustPool.list.length=0,this.steamPool.clear(),this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,i,r,a,o,l,c,h=!1){let f=Math.hypot(i,r,a)||1,u=i/f,d=r/f,p=a/f,x=h?this.bigBlood:this.blood;for(let g=0;g<o;g++){let m=c*Y(.25,1.15);x.add({x:t,y:e,z:n,vx:(u+Y(-l,l))*m,vy:(d+Y(-l,l))*m+Y(0,1),vz:(p+Y(-l,l))*m,life:Y(1,2)})}}sparks(t,e,n,i){for(let r=0;r<i;r++)this.spark.add({x:t,y:e,z:n,vx:Y(-5,5),vy:Y(-2,5),vz:Y(-5,5),life:Y(.15,.35)})}dust(t,e,n,i,r){for(let a=0;a<2;a++)this.dustPool.add({x:t+Y(-.08,.08),y:e+.03,z:n+Y(-.08,.08),vx:i+Y(-.5,.5),vy:Y(.3,1.1),vz:r+Y(-.5,.5),life:Y(.3,.6)})}steam(t,e,n,i,r,a,o,l,c=.85){this.steamPool.add(t,e,n,i,r,a,o,l,c)}setDecalParent(t){this.decals.parent!==t&&t.add(this.decals)}splash(t,e,n){for(let i=0;i<40;i++)this.water.add({x:t+Y(-.3,.3),y:e,z:n+Y(-.3,.3),vx:Y(-1.5,1.5),vy:Y(2,6),vz:Y(-1.5,1.5),life:Y(.5,1)})}bleed(t,e,n,i={}){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0,big:!!i.big,rate:i.rate||120,spd:i.spd||1})}wound(t,e,n,i,r={}){let a=0;for(let l of this.bleeders)l.rag===t&&l.bone!==void 0&&a++;if(a>=(r.max||10))return;let o=[Y(-1,1),Y(-.2,1),Y(-1,1)];this.bleeders.push({rag:t,bone:e,u:n,d:o,t:0,dur:i,acc:0,big:r.big!==!1,rate:r.rate||50,spd:r.spd||1})}popup(t,e,n,i,r,a,o,l=!1){if(this.quiet&&!l)return;let c=0;for(let h of this.popups)h.age<.4&&Math.hypot(h.x-t,h.z-n)<1.2&&c++;this.popups.push({x:t,y:e+c*.42,z:n,text:i,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,i){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),Y(0,Math.PI));let a=i*Y(.8,1.4);r.compose(this._p,this._q,new P(a,1,i)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let n of this.bleeders){n.t+=t;let i=n.rag;if(i.removed){n.t=n.dur;continue}let r,a,o,l,c,h,f,u,d;if(n.bone!==void 0){let v=i.bones[n.bone];if(!v){n.t=n.dur;continue}let w=i.pts[v.a],y=i.pts[v.b];r=w.x+(y.x-w.x)*n.u,a=w.y+(y.y-w.y)*n.u,o=w.z+(y.z-w.z)*n.u;let S=y.x-w.x,M=y.y-w.y,A=y.z-w.z,_=Math.hypot(S,M,A)||1;S/=_,M/=_,A/=_;let E=n.d[0]*S+n.d[1]*M+n.d[2]*A;l=n.d[0]-S*E,c=n.d[1]-M*E,h=n.d[2]-A*E;let R=v.r*.9,L=Math.hypot(l,c,h)||1;l/=L,c/=L,h/=L,r+=l*R,a+=c*R,o+=h*R,f=(w.x-w.px+(y.x-y.px))*.5/t,u=(w.y-w.py+(y.y-y.py))*.5/t,d=(w.z-w.pz+(y.z-y.pz))*.5/t}else{let v=i.pts[n.idx],w=i.neighborOf(n.idx);if(w<0)continue;let y=i.pts[w];l=v.x-y.x,c=v.y-y.y,h=v.z-y.z;let S=Math.hypot(l,c,h)||1;l/=S,c/=S,h/=S,r=v.x,a=v.y,o=v.z,f=(v.x-v.px)/t,u=(v.y-v.py)/t,d=(v.z-v.pz)/t}let p=n.t/n.dur,x=n.big?1-p*p*p:1-p,g=n.big?.72+.28*Math.sin(n.t*9):.55+.45*Math.sin(n.t*16);n.acc+=t*n.rate*x*g;let m=n.big?this.bigBlood:this.blood;for(;n.acc>=1;){n.acc-=1;let v=Y(1.5,3.8)*(.4+x)*n.spd,w=n.big?1.5:.6;m.add({x:r,y:a,z:o,vx:l*v+Y(-w,w)+f*.5,vy:c*v+Y(-w,w)+u*.5,vz:h*v+Y(-w,w)+d*.5,life:Y(.8,1.5)*(n.big?1.8:1)})}}this.bleeders=this.bleeders.filter(n=>n.t<n.dur);for(let n of[this.blood,this.bigBlood]){let i=n.list,r=n===this.bigBlood,a=0;for(let o=0;o<i.length;o++){let l=i[o];l.life-=t,l.vy-=Je*.8*t,l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t;let c=e.ground(l.x,l.z);if(l.y<=c+.01){Math.random()<(r?.35:.55)&&this.addDecal(l.x,e.decalLocal?0:c,l.z,r?Y(.12,.34):Y(.025,.07));continue}l.y<e.waterY||l.life>0&&(i[a++]=l)}i.length=a}for(let n of[this.spark,this.water,this.dustPool]){let i=n.list,r=0;for(let a=0;a<i.length;a++){let o=i[a];if(o.life-=t,n===this.spark)o.vx*=.92,o.vz*=.92,o.vy-=6*t;else if(n===this.dustPool){let l=Math.exp(-3*t);o.vx*=l,o.vz*=l,o.vy*=l}else o.vy-=Je*.6*t;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.life>0&&(i[r++]=o)}i.length=r}this.steamPool.update(t);for(let n of this.popups)n.age+=t,n.y+=.5*t;this.popups=this.popups.filter(n=>n.age<n.life)}flush(){this.blood.flush(),this.bigBlood.flush(),this.spark.flush(),this.water.flush(),this.dustPool.flush(),this.steamPool.flush()}};function If(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ve,c=0;for(let h=0;h<s.length;++h){let f=s[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<s.length;++u){let d=s[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Pf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let p=Pf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Pf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function Kn(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new Mi(i);return r.colorSpace=Oe,n&&(r.wrapS=r.wrapT=si,r.repeat.set(n,n)),r.anisotropy=8,r}function lv(s,t,e){let i=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*i,(o+.15+Math.random()*.7)*i,Math.random()]);let a=s.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/i),h=Math.floor(o/i),f=1e9,u=1e9,d=0;for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){let w=(c+v+7)%7,y=(h+m+7)%7,S=r[y*7+w],M=S[0]+(c+v-w)*i,A=S[1]+(h+m-y)*i,_=Math.hypot(M-l,A-o);_<f?(u=f,f=_,d=S[2]):_<u&&(u=_)}let p=St((u-f)/5,0,1),x=(o*t+l)*4,g=222+d*18-f/i*18;a.data[x]=Gh(120,g-14,p),a.data[x+1]=Gh(160,g+6,p),a.data[x+2]=Gh(200,g+20,p),a.data[x+3]=255}s.putImageData(a,0,0)}function Gh(s,t,e){return s+(t-s)*e}function cv(s,t,e){s.fillStyle="#4c9427",s.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];s.lineCap="round";for(let i=0;i<4200;i++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;s.strokeStyle=n[i%n.length],s.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])s.beginPath(),s.moveTo(r+c,a+h),s.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),s.stroke()}}function hv(s,t,e){s.fillStyle="#d9a66e",s.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)s.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",s.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);s.strokeStyle="rgba(170,120,70,0.25)",s.lineWidth=2;for(let n=8;n<e;n+=22){s.beginPath();for(let i=0;i<=t;i+=8)s.lineTo(i,n+Math.sin(i/t*Math.PI*4+n)*4);s.stroke()}}function uv(s,t,e){s.clearRect(0,0,t,e);let n=t/2;s.strokeStyle="#6f9a2b",s.lineWidth=3,s.beginPath(),s.moveTo(n,e),s.quadraticCurveTo(n+4,e*.5,n,6),s.stroke();for(let i=0;i<26;i++){let r=i/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;s.fillStyle=l;for(let c of[-1,1])s.save(),s.translate(n,a),s.rotate(c*(1.05-r*.25)),s.beginPath(),s.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),s.fill(),s.restore()}}function dv(s,t,e){s.clearRect(0,0,t,e),s.lineCap="round";for(let n=0;n<18;n++){let i=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;s.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],s.lineWidth=2+Math.random()*2,s.beginPath(),s.moveTo(i,e),s.quadraticCurveTo(i,e*.6,i+a,r),s.stroke()}}function Lf(s,t,e){s.clearRect(0,0,t,e);for(let n=0;n<14;n++){let i=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=s.createRadialGradient(i,r,0,i,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.beginPath(),s.arc(i,r,a,0,Math.PI*2),s.fill()}}function Nf(s,t,e,n){let i=new bi(s,t,11,6);i.index&&(i=i.toNonIndexed());let r=i.attributes.position,a=new P;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);let u=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,d=1-(a.y+t/2)/t;a.x+=(Cn(u)-.5)*s*.35*d,a.z+=(Cn(u+1)-.5)*s*.35*d,a.y+=(Cn(u+2)-.5)*t*.12*d,r.setXYZ(f,a.x,a.y,a.z)}i.computeVertexNormals();let o=new Float32Array(r.count*3),l=i.attributes.normal,c=new Ot;for(let f=0;f<r.count;f+=3){let d=((r.getY(f)+r.getY(f+1)+r.getY(f+2))/3+t/2)/t,p=l.getY(f);d>.82?c.set(n.snow):p>.55&&d<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(Cn(f*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(f+x)*3]=c.r,o[(f+x)*3+1]=c.g,o[(f+x)*3+2]=c.b}i.setAttribute("color",new Ae(o,3));let h=new Pt(i,new $t({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function Df(s,t,e){let n=new Fs(s,0);n.index&&(n=n.toNonIndexed());let i=n.attributes.position;for(let a=0;a<i.count;a++){let o=Math.round(i.getX(a)*50)+Math.round(i.getY(a)*30)*3+Math.round(i.getZ(a)*70)*7+t;i.setXYZ(a,i.getX(a)*(1+(Cn(o)-.5)*.3),i.getY(a)*.7,i.getZ(a)*(1+(Cn(o+3)-.5)*.3))}n.computeVertexNormals();let r=new Pt(n,new $t({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function Uf(s,t,e,n){let i=[];for(let o=0;o<s;o++){let l=new En(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/s*Math.PI*2+Math.random()*.5),i.push(l)}let r=If(i),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function zf(s,t,e,n,i,r,a,o){let l=new Wn(s,t,e),c=new ee,h=new $e,f=new P,u=new P,d=new P(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let g=Math.random()*Math.PI*2,m=n+Math.sqrt(Math.random())*(i-n),v=Math.cos(g)*m,w=Math.sin(g)*m;if(o&&o(v,w))continue;let y=r+Math.random()*(a-r);u.set(v,0,w),h.setFromAxisAngle(d,Math.random()*Math.PI*2),f.set(y,y*(.8+Math.random()*.4),y),c.compose(u,h,f),l.setMatrixAt(p++,c)}return l.count=p,l}function fv(s,t,e){s.fillStyle="#cfd3d8",s.fillRect(0,0,t,e);for(let r=0;r<2600;r++)s.fillStyle=Math.random()<.5?"rgba(0,0,0,0.035)":"rgba(255,255,255,0.07)",s.fillRect(Math.random()*t,Math.random()*e,2,2);s.strokeStyle="#a3a9b0",s.lineWidth=3;let n=4,i=t/n;for(let r=0;r<=n;r++)s.beginPath(),s.moveTo(r*i,0),s.lineTo(r*i,e),s.stroke(),s.beginPath(),s.moveTo(0,r*i),s.lineTo(t,r*i),s.stroke()}function pv(s,t,e){s.fillStyle="#f3efe8",s.fillRect(0,0,t,e),s.fillStyle="#d7262d";for(let n=-t;n<=2*t;n+=t/2)s.beginPath(),s.moveTo(n,0),s.lineTo(n+t/4,0),s.lineTo(n+t/4-e,e),s.lineTo(n-e,e),s.closePath(),s.fill()}var Vf=.45,di=8;function mv(s,t){let e=new ve,n=s*(di+1);e.setAttribute("position",new Ae(new Float32Array(n*3),3).setUsage(Ys)),e.setAttribute("normal",new Ae(new Float32Array(n*3),3).setUsage(Ys));let i=new Float32Array(n*2),r=[];for(let a=0;a<s;a++)for(let o=0;o<=di;o++){let l=a*(di+1)+o;if(i[l*2]=o/di,i[l*2+1]=a*t/Vf,a<s-1&&o<di){let c=l+di+1;r.push(l,c,l+1,c,c+1,l+1)}}return e.setAttribute("uv",new Ae(i,2)),e.setIndex(r),e}var ui=new P,Jn=new P,Hl=new P,xa=new P,gv=new P(0,1,0);function Ff(s,t,e){let n=s.attributes.position.array,i=s.attributes.normal.array,r=t.length-1;for(let a=0;a<=r;a++){let o=t[Math.max(0,a-1)],l=t[Math.min(r,a+1)];ui.set(l.x-o.x,l.y-o.y,l.z-o.z),ui.lengthSq()<1e-10&&ui.set(0,1,0),ui.normalize(),a===0?(Jn.crossVectors(ui,xa.set(1,0,0)),Jn.lengthSq()<1e-6&&Jn.crossVectors(ui,xa.set(0,0,1))):Jn.addScaledVector(ui,-ui.dot(Jn)),Jn.normalize(),Hl.crossVectors(ui,Jn);let c=t[a];for(let h=0;h<=di;h++){let f=h/di*Math.PI*2,u=Math.cos(f),d=Math.sin(f),p=(a*(di+1)+h)*3,x=Jn.x*u+Hl.x*d,g=Jn.y*u+Hl.y*d,m=Jn.z*u+Hl.z*d;i[p]=x,i[p+1]=g,i[p+2]=m,n[p]=c.x+x*e,n[p+1]=c.y+g*e,n[p+2]=c.z+m*e}}s.attributes.position.needsUpdate=!0,s.attributes.normal.needsUpdate=!0}function Of(s,t,e,n,i,r,a,o){xa.set(r-e,a-n,o-i);let l=xa.length()||.001;s.position.set(e,n,i),s.scale.set(1,l/t,1),s.quaternion.setFromUnitVectors(gv,xa.multiplyScalar(1/l))}var xv=[[8.4,8.4],[-8.4,8.4],[8.4,-8.4],[-8.4,-8.4]],Bf=.56,Wh=.42,kf=.05,Hf=.018,Xh=.07,yv=.4,_v=1.4,vv=29,Mv=new Ot(2614271),Sv=new Ot(16722902),bv=new Ot(2829876);function wv(){let s=new We({uniforms:{top:{value:new Ot},horizon:{value:new Ot},bottom:{value:new Ot}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:Ne,depthWrite:!1,fog:!1}),t=new Pt(new Qe(400,32,16),s);return t.renderOrder=-10,t.frustumCulled=!1,t}function Ev(s,t){let e=Sl.merge([_t.fog,{time:{value:0},deep:{value:new Ot(s)},light:{value:new Ot(t)}}]);return new We({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
      #include <fog_pars_vertex>
      void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`uniform float time; uniform vec3 deep; uniform vec3 light; varying vec3 vW;
      #include <fog_pars_fragment>
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      void main(){
        vec2 p = vW.xz;
        float wave = sin(p.x*0.35 + time*0.8) * sin(p.y*0.3 - time*0.6);
        vec3 c = mix(deep, light, 0.45 + 0.25 * wave);
        vec2 g = p * vec2(1.4, 3.2);
        vec2 id = floor(g);
        float r = h(id + floor(time * 1.5 + h(id) * 7.0));
        vec2 f = fract(g) - 0.5;
        float glint = step(0.93, r) * smoothstep(0.35, 0.0, abs(f.y) * 2.0 + abs(f.x) * 0.6);
        c = mix(c, vec3(1.0), glint * 0.9);
        gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`})}var Vl=class{constructor(t){this.scene=t,this.t=0,this.sky=wv(),t.add(this.sky),this.hemi=new Wr(16777215,7829367,1.1),t.add(this.hemi);let e=new Zr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new P(.5,1,.35).normalize(),this.gx=0,this.gz=0,this.gvx=0,this.gvz=0,this.tgx=0,this.tgz=0,this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo(),roof:this.buildRoof(),grid:this.buildGrid()},this._m4=new ee,this._col=new Ot;for(let i of Object.values(this.envs))i.group.visible=!1,t.add(i.group);this.env=null}set(t,e=!1){this.env&&(this.env.group.visible=!1);let n=this.envs[t];this.env=n,this.name=t,n.group.visible=!0,this.radius=e?62:n.radius;for(let o of n.props||[])o.visible=!e;let i=this.sun.shadow.camera,r=e?26:14;i.right!==r&&(i.left=-r,i.right=r,i.top=r,i.bottom=-r,i.far=e?120:70,i.updateProjectionMatrix()),this.shadowDist=e?60:30;let a=this.sky.material.uniforms;a.top.value.set(n.sky[0]),a.horizon.value.set(n.sky[1]),a.bottom.value.set(n.sky[2]),this.scene.fog=new br(n.sky[1],n.fog[0],n.fog[1]),this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.sun.color.set(n.sun[0]),this.sun.intensity=n.sun[1],this.sunDir.set(n.sun[2],n.sun[3],n.sun[4]).normalize(),this.waterY=n.waterY,this.canFall=n.canFall,this.wallH=n.wallH||0,this.overSpeed=n.overSpeed||0,this.fallDepth=n.fallDepth||.9,this.gx=this.gz=this.gvx=this.gvz=this.tgx=this.tgz=0,this.loadX=this.loadZ=0,this.slideMin=n.floe?.004:.07,this.slideGain=n.floe?2.5:1,this.noStick=!!n.grid,n.roof&&this.resetRoof(),n.grid&&this.resetGrid()}get decalLocal(){return!!(this.env&&(this.env.roof||this.env.grid||this.env.floe))}get ropes(){return this.env&&this.env.roof?this.env.ropes:null}get grid(){return!!(this.env&&this.env.grid)}get tilt(){return Math.hypot(this.tgx,this.tgz)}ground(t,e){let n=this.env;if(n.grid){let r=this.tileAt(t,e);return r<0?-1/0:n.h[r]}if(n.roof)return Math.abs(t)<=n.half&&Math.abs(e)<=n.half?this.gx*t+this.gz*e:-1/0;if(!n.floe)return 0;if(Math.hypot(t,e)>=this.floeRadius(Math.atan2(e,t)))return-1/0;let i=this.gx*t+this.gz*e;return i<n.waterY-yv?-1/0:i}inside(t,e,n){let i=this.env;return i.grid?Math.abs(t)<i.half-n&&Math.abs(e)<i.half-n:i.roof?Math.abs(t)<i.inner-n&&Math.abs(e)<i.inner-n:i.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n:Math.hypot(t,e)<this.radius-n}clampInside(t,e,n,i){let r=this.env;if(r.floe)return!1;if(r.roof||r.grid){let a=(r.grid?r.half:r.inner)-n-.001;Math.abs(t)>a&&(t=Math.sign(t)*a,i.vx=0,i.slideX=0),Math.abs(e)>a&&(e=Math.sign(e)*a,i.vz=0,i.slideZ=0)}else{let a=Math.hypot(t,e),o=this.radius-n-.001;if(a>o){let l=t/a,c=e/a;t=l*o,e=c*o;let h=i.vx*l+i.vz*c;h>0&&(i.vx-=l*h,i.vz-=c*h);let f=i.slideX*l+i.slideZ*c;f>0&&(i.slideX-=l*f,i.slideZ-=c*f)}}return i.x=t,i.z=e,!0}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let i=0;i<n;i++){let r=e[i],a=e[(i+1)%n],o=i+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,f=a.z-r.z,u=l*f-c*h;return Math.abs(u)<1e-9?r.r:(r.x*f-r.z*h)/u}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e);let i=this.shadowDist||30;this.sun.position.set(t+n.x*i,n.y*i,e+n.z*i)}update(t,e){if(this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t),this.env.roof&&this.renderRoof(e),this.env.floe){let n=this.env.plat;n.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),n.matrixWorldNeedsUpdate=!0}this.env.grid&&this.renderGrid();for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,i,r){let a=Kn(256,128,Lf),o=[];for(let l=0;l<e;l++){let c=new ai(new Gn({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,f=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*f,Y(i,r),Math.sin(h)*f);let u=Y(60,120);c.scale.set(u,u*.45,1),t.add(c),o.push(c)}return o}tileAt(t,e){let n=this.env,i=n.N,r=Math.floor(t/n.S+i/2),a=Math.floor(e/n.S+i/2);return r<0||a<0||r>=i||a>=i?-1:a*i+r}tileMotion(t,e,n){let i=this.env;if(n.vy=0,n.px=0,n.pz=0,!i.grid)return n;let r=this.tileAt(t,e);return r<0||(n.vy=i.v[r],n.px=i.px[r],n.pz=i.pz[r]),n}solidAt(t,e,n){let i=this.env;if(!i.grid)return!1;let r=this.tileAt(t,e);return r>=0&&i.h[r]>n+.45}resetGrid(){let t=this.envs.grid;t.h.fill(0),t.v.fill(0),t.px.fill(0),t.pz.fill(0),t.glow.fill(0),t.events.length=0,t.nextEv=3,t.dirty.fill(1),this.renderGrid()}spawnGridEvent(t){let e=this.env,n=e.N,i=e.S,r=t?t.x:0,a=t?t.z:0,o=e.half-2;if(Math.random()<.5){let u=Y(0,Math.PI*2),d=Y(2,7);e.events.push({kind:"ring",t:0,warn:1.1,x:St(r+Math.cos(u)*d,-o,o),z:St(a+Math.sin(u)*d,-o,o),speed:9,maxR:24,amp:1.25,width:1.9});return}let l=St(Math.floor(r/i+n/2),0,n-1),c=St(Math.floor(a/i+n/2),0,n-1),h=[],f=Math.floor(Y(0,3));if(f===0){let u=Math.random()<.5?0:1;for(let d=c-4;d<=c+4;d++)for(let p=l-4;p<=l+4;p++)p>=0&&d>=0&&p<n&&d<n&&(p+d)%2===u&&h.push(d*n+p)}else if(f===1){let u=St(l+Math.floor(Y(-2,3)),0,n-1),d=St(c+Math.floor(Y(-2,3)),0,n-1);for(let p=0;p<n;p++)h.push(d*n+p),p!==d&&h.push(p*n+u)}else for(let u=0;u<16;u++){let d=St(l+Math.floor(Y(-5,6)),0,n-1),p=St(c+Math.floor(Y(-5,6)),0,n-1);h.push(p*n+d)}e.events.push({kind:"piston",t:0,warn:1,up:.2,hold:.7,down:.6,amp:1.6,tiles:h})}stepGrid(t,e){let n=this.env,i=n.N,r=n.S,a=n.h,o=n.v;n.nextEv-=t,n.nextEv<=0&&(this.spawnGridEvent(e),n.nextEv=Y(3.5,6.5));let l=n.tgt,c=n.glow,h=n.px,f=n.pz;l.fill(0),c.fill(0),h.fill(0),f.fill(0);for(let d of n.events)if(d.t+=t,d.kind==="ring"){let p=(d.t-d.warn)*d.speed-d.width,x=Math.floor(d.x/r+i/2),g=Math.floor(d.z/r+i/2);if(d.t<d.warn){let _=.5+.5*Math.sin(d.t*22);for(let E=g-1;E<=g+1;E++)for(let R=x-1;R<=x+1;R++){if(R<0||E<0||R>=i||E>=i)continue;let L=E*i+R;c[L]=Math.max(c[L],_*(R===x&&E===g?1:.5)),n.gcol[L]=0}continue}let m=d.amp*(1-.5*p/d.maxR),v=Math.max(0,p-d.width),w=p+d.width,y=Math.max(0,Math.floor((d.x-w)/r+i/2)),S=Math.min(i-1,Math.floor((d.x+w)/r+i/2)),M=Math.max(0,Math.floor((d.z-w)/r+i/2)),A=Math.min(i-1,Math.floor((d.z+w)/r+i/2));for(let _=M;_<=A;_++)for(let E=y;E<=S;E++){let R=(E-i/2+.5)*r,L=(_-i/2+.5)*r,D=R-d.x,B=L-d.z,I=Math.hypot(D,B);if(I<v||I>w)continue;let O=(I-p)/d.width,W=(1-O*O)*(1-O*O),H=_*i+E;if(m*W>l[H]){l[H]=m*W,c[H]=Math.max(c[H],W),n.gcol[H]=0;let tt=I||1;h[H]=D/tt*3.5*W,f[H]=B/tt*3.5*W}}d.done=p>d.maxR+d.width}else{let p=d.t,x=0,g=0;p<d.warn?g=.35+.65*(.5+.5*Math.sin(p*26)):p<d.warn+d.up?(x=d.amp*(p-d.warn)/d.up,g=1):p<d.warn+d.up+d.hold?(x=d.amp,g=1):(x=d.amp*Math.max(0,1-(p-d.warn-d.up-d.hold)/d.down),g=x/d.amp);for(let m of d.tiles)x>l[m]&&(l[m]=x),g>c[m]&&(c[m]=g,n.gcol[m]=1);d.done=p>d.warn+d.up+d.hold+d.down}n.events.length&&(n.events=n.events.filter(d=>!d.done));let u=1/t;for(let d=0;d<i*i;d++){let p=l[d];o[d]=St((p-a[d])*u,-20,12),(p!==a[d]||c[d]!==n.lastGlow[d])&&(n.dirty[d]=1),a[d]=p}}renderGrid(){let t=this.env,e=t.N,n=t.S,i=this._m4,r=this._col,a=!1,o=!1;for(let l=0;l<e*e;l++){if(!t.dirty[l])continue;t.dirty[l]=0;let c=l%e,h=l/e|0;i.makeTranslation((c-e/2+.5)*n,t.h[l],(h-e/2+.5)*n),t.tiles.setMatrixAt(l,i),a=!0;let f=t.glow[l];f!==t.lastGlow[l]&&(t.lastGlow[l]=f,r.copy(t.base[l]).lerp(t.gcol[l]?Sv:Mv,St(f,0,1)*.85),t.tiles.setColorAt(l,r),o=!0)}a&&(t.tiles.instanceMatrix.needsUpdate=!0),o&&(t.tiles.instanceColor.needsUpdate=!0)}buildGrid(){let t=new pe,e=vv,n=_v,i=e*n/2,r=new Le(n-.08,4,n-.08).translate(0,-2,0),a=new $t({color:16777215,roughness:.28,metalness:.3,envMapIntensity:.45}),o=new Wn(r,a,e*e);o.receiveShadow=!0,o.castShadow=!0,o.frustumCulled=!1;let l=[];for(let f=0;f<e*e;f++){let u=bv.clone().offsetHSL(0,0,(Cn(f*3.7)-.5)*.025);l.push(u),o.setColorAt(f,u)}t.add(o);let c=new Pt(new En(i*2,i*2),new oi({color:197379}));c.rotation.x=-Math.PI/2,c.position.y=-.35,t.add(c);let h=e*e;return{group:t,grid:!0,tiles:o,base:l,N:e,S:n,half:i,h:new Float32Array(h),v:new Float32Array(h),tgt:new Float32Array(h),px:new Float32Array(h),pz:new Float32Array(h),glow:new Float32Array(h),lastGlow:new Float32Array(h).fill(-1),gcol:new Uint8Array(h),dirty:new Uint8Array(h).fill(1),events:[],nextEv:3,radius:i-.3,floe:null,water:null,waterY:-1/0,canFall:!0,fallDepth:2.5,clouds:[],sky:[1051404,1905686,197122],fog:[16,55],hemi:[16774380,1710618,.6],sun:[16777215,2.4,.35,1,.25]}}resetRoof(){let t=this.envs.roof;for(let e of t.ropes)e.intact=!0,e.up=null,e.stub&&(t.group.remove(e.stub.mesh),e.stub.mesh.geometry.dispose(),e.stub=null),e.mesh.visible=!0;this.renderRoof()}updateTilt(t=!0){let e=this.env,n=0,i=0,r=0;for(let h of e.ropes)h.intact&&(i+=h.x,r+=h.z,n++);n&&(i/=n,r/=n);let a=Bf*i/e.half,o=Bf*r/e.half,l=n>=4?0:n===3?.3:1;a-=l*kf*this.loadX,o-=l*kf*this.loadZ;let c=Math.hypot(a,o);c>Wh&&(a*=Wh/c,o*=Wh/c),t&&(this.gvx+=(a-this.tgx)*3,this.gvz+=(o-this.tgz)*3),this.tgx=a,this.tgz=o}setLoad(t){let e=this.env;if(!e||!(e.floe||e.roof))return;let n=e.floe?15.5:e.half,i=0,r=0;for(let a of t){if(a.S>2||a.falling)continue;let o=a.rag.pts[U.PELVIS],l=a.alive?a.x:o.x,c=a.alive?a.z:o.z,h=this.ground(l,c);if(h===-1/0||(a.alive?a.y:o.y)>h+1.5)continue;let f=a.alive?1:.8;i+=f*l/n,r+=f*c/n}this.loadX=i,this.loadZ=r}cutRope(t,e,n,i){let r=this.env;t.intact=!1,e=St(e,.3,3.2);let a=this.ground(t.x,t.z),o=Math.max(3,Math.round(e/.2)),l=e/o,c=Math.hypot(n,i)||1,h=n/c*.03,f=i/c*.03,u=[];for(let p=0;p<=o;p++){let x=p/o,g=a+e*x;u.push({x:t.x,y:g,z:t.z,px:t.x-h*x,py:g,pz:t.z-f*x})}let d=new Pt(mv(o+1,l),r.ropeMat);d.castShadow=!0,d.frustumCulled=!1,r.group.add(d),t.stub={pts:u,seg:l,mesh:d},Ff(d.geometry,u,t.r),t.up={y:a+e,len:t.top-(a+e),v:0,t:0,wx:h/.03,wz:f/.03},this.updateTilt()}step(t,e){let n=this.env;if(n&&n.grid){this.stepGrid(t,e);return}if(n&&n.floe){this.stepFloe(t);return}if(!n||!n.roof)return;this.updateTilt(!1);let i=18,r=3.4;this.gvx+=(i*(this.tgx-this.gx)-r*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(i*(this.tgz-this.gz)-r*this.gvz)*t,this.gz+=this.gvz*t;for(let a of n.ropes)a.up&&(a.up.t+=t,a.up.v+=60*t,a.up.y+=a.up.v*t,a.up.t>2.5&&(a.up=null)),a.stub&&this.stepStub(a,t)}stepFloe(t){let e=-Hf*this.loadX,n=-Hf*this.loadZ,i=Math.hypot(e,n);i>Xh&&(e*=Xh/i,n*=Xh/i),this.tgx=e,this.tgz=n;let r=5,a=2.2;this.gvx+=(r*(e-this.gx)-a*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(r*(n-this.gz)-a*this.gvz)*t,this.gz+=this.gvz*t}stepStub(t,e){let n=t.stub.pts,i=t.stub.seg,r=t.r,a=n[0];a.x=t.x,a.y=this.ground(t.x,t.z),a.z=t.z;for(let o=1;o<n.length;o++){let l=n[o],c=(l.x-l.px)*.99,h=(l.y-l.py)*.99,f=(l.z-l.pz)*.99;l.px=l.x,l.py=l.y,l.pz=l.z,l.x+=c,l.y+=h-Je*e*e,l.z+=f}for(let o=0;o<6;o++){for(let l=1;l<n.length;l++){let c=n[l-1],h=n[l],f=h.x-c.x,u=h.y-c.y,d=h.z-c.z,p=Math.hypot(f,u,d)||1e-6,x=(p-i)/p,g=l===1?0:.5,m=1-g;c.x+=f*x*g,c.y+=u*x*g,c.z+=d*x*g,h.x-=f*x*m,h.y-=u*x*m,h.z-=d*x*m}for(let l=1;l<n.length;l++){let c=n[l],h=this.ground(c.x,c.z);c.y<h+r&&(c.y=h+r,c.px=c.x-(c.x-c.px)*.8,c.pz=c.z-(c.z-c.pz)*.8)}}}renderRoof(t){let e=this.env;e.plat.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),e.plat.matrixWorldNeedsUpdate=!0;for(let n of e.ropes){let i=n.mesh,r=t?Math.hypot(t.x-n.x,t.z-n.z):9,a=St((r-.7)/1.6,.12,1);if(i.material.opacity=a,i.material.transparent=a<1,i.material.depthWrite=a>=1,n.intact)i.visible=!0,Of(i,n.L0,n.x,this.ground(n.x,n.z),n.z,n.x,n.top,n.z);else if(n.up){let o=n.up,l=Math.sin(o.t*24)*.6*Math.exp(-o.t*2.2);i.visible=!0,Of(i,n.L0,n.x+o.wx*l,o.y,n.z+o.wz*l,n.x,o.y+o.len,n.z)}else i.visible=!1;n.stub&&Ff(n.stub.mesh.geometry,n.stub.pts,n.r)}}buildRoof(){let t=new pe,e=new pe;e.matrixAutoUpdate=!1,t.add(e);let n=11,i=.3,r=.45,a=Kn(256,256,fv);a.wrapS=a.wrapT=si,a.repeat.set(n*2/4,n*2/4);let o=new $t({map:a,roughness:.85}),l=new $t({color:9278620,roughness:.9}),c=new $t({color:6252142,roughness:.9}),h=new Pt(new Le(n*2,.8,n*2),[l,l,o,c,l,l]);h.position.y=-.4,h.receiveShadow=!0,h.castShadow=!0,e.add(h);for(let[S,M,A,_]of[[n*2,.5,0,-5],[n*2,.5,0,5],[.5,n*2,-5,0],[.5,n*2,5,0]]){let E=new Pt(new Le(S,.5,M),c);E.position.set(A,-1.05,_),e.add(E)}let f=new $t({color:11712703,roughness:.8});for(let[S,M,A,_]of[[n*2,i,0,n-i/2],[n*2,i,0,-n+i/2],[i,n*2-i*2,n-i/2,0],[i,n*2-i*2,-n+i/2,0]]){let E=new Pt(new Le(S,r,M),f);E.position.set(A,r/2,_),E.castShadow=!0,E.receiveShadow=!0,e.add(E)}let u=Kn(64,64,pv);u.wrapS=u.wrapT=si;let d=new $t({map:u,roughness:.55}),p=new $t({color:4870232,roughness:.4,metalness:.6}),x=[],g=.075,m=46;for(let[S,M]of xv){let A=m,_=new Ke(g,g,A,10,1,!0).translate(0,A/2,0),E=_.attributes.uv;for(let D=0;D<E.count;D++)E.setY(D,E.getY(D)*A/Vf);let R=new Pt(_,d.clone());R.castShadow=!0,t.add(R);let L=new Pt(new Ke(.2,.25,.07,14),p);L.position.set(S,.035,M),L.receiveShadow=!0,e.add(L),x.push({x:S,z:M,r:g,top:m,L0:A,mesh:R,intact:!0,stub:null,up:null})}let v=Kn(256,128,Lf),w=[];for(let S=0;S<16;S++){let M=new ai(new Gn({map:v,fog:!1,transparent:!0,depthWrite:!1,opacity:.95})),A=Math.random()*Math.PI*2,_=Y(25,150);M.position.set(Math.cos(A)*_,Y(-48,-12),Math.sin(A)*_);let E=Y(40,95);M.scale.set(E,E*.45,1),t.add(M),w.push(M)}let y=new $t({color:10466505,roughness:.9});for(let S=0;S<16;S++){let M=S/16*Math.PI*2+Y(-.15,.15),A=Y(40,120),_=Y(6,13),E=Y(-30,5),R=new Pt(new Le(_,200,_*Y(.7,1.3)),y);R.position.set(Math.cos(M)*A,E-100,Math.sin(M)*A),R.rotation.y=Y(0,Math.PI),t.add(R)}return{group:t,plat:e,roof:!0,half:n,inner:n-i,wallH:r,overSpeed:5,fallDepth:1.5,ropes:x,ropeMat:d,radius:n-i,floe:null,water:null,waterY:-1/0,canFall:!0,clouds:w.concat(this.clouds(t,8,170,25,70)),sky:[4165600,14084600,15857403],fog:[55,240],hemi:[15398143,11122888,1.1],sun:[16777215,2.6,.4,1,.5]}}buildMeadow(){let t=new pe,e=Kn(256,256,cv,70),n=new Pt(new En(300,300),new $t({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new $t({map:Kn(128,256,uv),alphaTest:.45,side:ln,roughness:.9}),r=(c,h)=>Math.hypot(c,h)<20&&Math.random()<.85;t.add(zf(Uf(6,.42,1,.75),i,320,1.5,45,.6,1.5,r));let a=new $t({map:Kn(64,64,dv),alphaTest:.4,side:ln,roughness:1});t.add(zf(Uf(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let c=0;c<14;c++){let h=c/14*Math.PI*2+Y(-.15,.15),f=Y(85,130),u=Nf(Y(28,50),Y(26,55),c*13.7,o);u.position.x=Math.cos(h)*f,u.position.z=Math.sin(h)*f,t.add(u)}let l=[];for(let c=0;c<16;c++){let h=Math.random()*Math.PI*2,f=Y(31,48),u=Df(Y(.8,2.6),c*31,9078398);u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),t.add(u),l.push(u)}return{group:t,props:l,radius:28,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new pe,e=12,n=[];for(let p=0;p<e;p++){let x=p/e*Math.PI*2+Y(-.1,.1)-Math.PI,g=Y(14.5,17);n.push({a:x,r:g,x:Math.cos(x)*g,z:Math.sin(x)*g})}let i=new Bs;n.forEach((p,x)=>x?i.lineTo(p.x,-p.z):i.moveTo(p.x,-p.z)),i.closePath();let r=new kr(i,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=Kn(256,256,lv);a.wrapS=a.wrapT=si,a.repeat.set(.28,.28);let o=new $t({map:a,roughness:.35,metalness:0}),l=new $t({color:8829408,roughness:.3}),c=new Pt(r,[o,l]);c.receiveShadow=!0,c.castShadow=!0;let h=new pe;h.matrixAutoUpdate=!1,h.add(c),t.add(h);let f=new Pt(new En(500,500),Ev(4869570,9080816));f.rotation.x=-Math.PI/2,f.position.y=-.35,t.add(f);let u=new $t({color:10930408,roughness:.35,flatShading:!0}),d=(p,x,g,m,v,w)=>{let y=new Le(p,x,g,3,6,3);y.index&&(y=y.toNonIndexed());let S=y.attributes.position;for(let A=0;A<S.count;A++){let _=Math.round(S.getX(A)*10)*3.3+Math.round(S.getY(A)*10)*1.7+Math.round(S.getZ(A)*10)*5.1+w;S.setXYZ(A,S.getX(A)+(Cn(_)-.5)*p*.25,S.getY(A)+(Cn(_+1)-.5)*.6,S.getZ(A)+(Cn(_+2)-.5)*g*.25)}y.computeVertexNormals();let M=new Pt(y,u);M.position.set(m,x/2-1.5,v),M.rotation.y=Y(0,Math.PI),t.add(M)};d(7,20,6,12,44,1),d(5,9,5,-38,30,2),d(9,6,7,-22,-46,3),d(4,13,4,46,-14,4);for(let p=0;p<14;p++){let x=Math.random()*Math.PI*2,g=Y(20,40),m=Df(Y(.4,1.3),p*7,14281978);m.position.set(Math.cos(x)*g,-.35,Math.sin(x)*g),m.castShadow=!1,t.add(m)}return{group:t,plat:h,floe:n,water:f,waterY:-.35,canFall:!0,radius:16,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}buildDojo(){let t=new pe,e=Kn(256,256,hv,60),n=new Pt(new En(300,300),new $t({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new $t({color:10127992,flatShading:!0,roughness:.9});for(let d=0;d<84;d++){let p=d/84*Math.PI*2,x=new Pt(new Fs(Y(.22,.34),0),i);x.position.set(Math.cos(p)*22.6,.08,Math.sin(p)*22.6),x.castShadow=!0,t.add(x)}let r=new $t({color:13116958,roughness:.6}),a=new $t({color:2759190,roughness:.7}),o=new pe;for(let d of[-2.6,2.6]){let p=new Pt(new Ke(.28,.34,6,12),r);p.position.set(d,3,0),o.add(p)}let l=new Pt(new Le(7.6,.45,.6),a);l.position.y=6.2;let c=new Pt(new Le(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),o.position.set(0,0,30),t.add(o);for(let[d,p]of[[-9,27],[9,27],[-27,-6],[27,-6],[-16,-24],[16,-24]]){let x=new pe,g=new Pt(new Ke(.35,.45,1.2,8),i);g.position.y=.6;let m=new Pt(new Le(.8,.6,.8),i);m.position.y=1.5;let v=new Pt(new bi(.75,.5,4),i);v.position.y=2.05,v.rotation.y=Math.PI/4,x.add(g,m,v),x.traverse(w=>{w.isMesh&&(w.castShadow=!0)}),x.position.set(d,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let d=0;d<12;d++){let p=d/12*Math.PI*2,x=Nf(Y(40,70),Y(10,22),d*5.3,h);x.position.x=Math.cos(p)*Y(90,130),x.position.z=Math.sin(p)*Y(90,130),t.add(x)}let f=Kn(128,128,(d,p)=>{let x=d.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),d.fillStyle=x,d.fillRect(0,0,p,p)}),u=new ai(new Gn({map:f,fog:!1,depthWrite:!1}));return u.position.set(0,38,190),u.scale.set(90,90,1),t.add(u),{group:t,radius:22,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var Tv=55,Gl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=Tv,this.taps=[],this.tapStart={t:0,x:0,y:0,moved:0},window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&this.end()}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){ne.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n}),Object.assign(this.tapStart,{t:performance.now(),x:e,y:n,moved:0})}end(){let t=this.tapStart;performance.now()-t.t<260&&t.moved<14&&this.taps.push({x:t.x,y:t.y}),this.stick.id=null}drag(t,e){let n=this.stick;n.x=t,n.y=e,this.tapStart.moved=Math.max(this.tapStart.moved,Math.hypot(t-this.tapStart.x,e-this.tapStart.y));let i=t-n.ox,r=e-n.oy,a=Math.hypot(i,r),o=this.stickR*1.3;a>o&&(n.ox=t-i/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),n==="Space"&&this.taps.push(null),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),ne.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.end()}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=St((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i,i=1),{x:t,y:e,mag:i}}clear(){this.anyPress=!1,this.taps.length=0}endFrame(){this.anyPress=!1}};var Av='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',Rv='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',Wl=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${Av}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${Rv}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-battle">Muharebeye git</button>
        <button id="s-grid">Izgara arenas\u0131na git</button>
        <button id="s-ice">Buz haritas\u0131na git</button>
        <button id="s-roof">Platform seviyesine git</button>
        <button id="s-horse">At seviyesine git</button>
        <button id="s-titan">Titan seviyesine git</button>
        <button id="s-titanwar">Titan muharebesine git</button>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let i=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",i,{passive:!0}),r.addEventListener("mousedown",i);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),n.querySelector("#s-battle").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("battle")}),n.querySelector("#s-grid").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("grid")}),n.querySelector("#s-ice").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("ice")}),n.querySelector("#s-roof").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("roof")}),n.querySelector("#s-horse").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("horse")}),n.querySelector("#s-titan").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("titan")}),n.querySelector("#s-titanwar").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("titanwar")}),this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}drawBody(t,e,n){if(!e)return;let i=this.lv.getBoundingClientRect(),r=i.left+4,a=i.bottom+4,o=1.15*n,l=e.rag.pts,c=(d,p)=>{t.setLineDash(d?[]:[3,3]),t.strokeStyle=d?"rgba(255,255,255,0.9)":"rgba(255,59,92,0.95)",t.fillStyle=t.strokeStyle,t.beginPath(),p(),t.stroke()};t.save(),t.lineCap="round",t.lineWidth=3.2*n,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=3;let h=d=>r+d*o,f=d=>a+d*o,u=e.alive;c(u||l[U.HEAD].attached,()=>t.arc(h(14),f(7),5.5*o,0,Math.PI*2)),c(!0,()=>{t.moveTo(h(14),f(14)),t.lineTo(h(14),f(31))}),c(l[U.LHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(4),f(28))}),c(l[U.RHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(24),f(28))}),c(l[U.LFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(7),f(47))}),c(l[U.RFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(21),f(47))}),t.restore()}show(t,e,n,i){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(i||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,i,r,a){let o=this.ctx,l=this.dpr;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,this.W,this.H);let c=St(Math.min(this.W,this.H)/400,.8,1.6);this.drawBody(o,r,c);let h=n.stick;if(h.id!==null||n.touchMode&&i>0){let f=n.stickR,u=h.id!==null,d=u?h.ox:this.W/2,p=u?h.oy:this.H-120*c;o.globalAlpha=u?.45:.25*St(i,0,1),o.strokeStyle="#fff",o.fillStyle="#fff",o.lineWidth=3,o.beginPath(),o.arc(d,p,f,0,Math.PI*2),o.stroke();let x=d,g=p;if(u){let m=h.x-h.ox,v=h.y-h.oy,w=Math.hypot(m,v),y=Math.min(w,f)/(w||1);x+=m*y,g+=v*y}o.beginPath(),o.arc(x,g,f*.42,0,Math.PI*2),o.fill(),o.globalAlpha=1}o.textAlign="center",o.textBaseline="middle",o.lineJoin="round";for(let f of e){let u=t(f.x,f.y,f.z);if(!u)continue;let d=1+.6*Math.max(0,1-f.age/.1),p=1-Math.max(0,(f.age/f.life-.7)/.3),x=Math.round(f.size*c*d);o.globalAlpha=p,o.font=`900 ${x}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.lineWidth=Math.max(3,x*.2),o.strokeStyle="#1a0d14",o.strokeText(f.text,u.x,u.y),o.fillStyle=f.col,o.fillText(f.text,u.x,u.y)}if(o.globalAlpha=1,this.flash>0){let f=o.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);f.addColorStop(0,"rgba(210,0,20,0)"),f.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),o.fillStyle=f,o.fillRect(0,0,this.W,this.H)}if(i>0){o.globalAlpha=St(i,0,1)*.9,o.font=`700 ${Math.round(14*c)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.fillStyle="#fff",o.strokeStyle="rgba(0,0,0,0.35)",o.lineWidth=3;let f=n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"];a==="titan"&&(f=[n.touchMode?"K\u0131sa dokun: halat at, u\xE7":"T\u0131kla / Bo\u015Fluk: halat at, u\xE7","Titana dokun: ona halat at","Sadece BOYNU \xF6ld\xFCr\xFCr (\xF6nden de): 4 darbe","\xC7ift k\u0131l\u0131\xE7: iki b\u0131\xE7ak da boyna say\u0131l\u0131r","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="titanwar"&&(f=["Maviler dost, ilk 60 sn arkandan dalga dalga gelir","Ye\u015Filimsiler halatla u\xE7ar, boynu yarar: son kesi\u015F senin",n.touchMode?"K\u0131sa dokun: halat at \xB7 titana dokun: ona u\xE7":"T\u0131k / Bo\u015Fluk: halat at \xB7 titana t\u0131kla: ona u\xE7","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="horse"&&(f=["S\xFCr\xFCkle: at o y\xF6ne ko\u015Far, k\u0131l\u0131\xE7 da","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="battle"&&(f=["Maviler dost, morlar d\xFC\u015Fman","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="grid"&&(f=["Parlayan karolardan uzak dur","Mavi halka ve pembe pistonlar havaya f\u0131rlat\u0131r","Kenardan bo\u015Flu\u011Fa d\xFC\u015Fen \xF6l\xFCr"]),a==="roof"&&(f=["D\xF6rt k\xF6\u015Fede d\xF6rt halat platformu tutuyor","Birini kes: o k\xF6\u015Feye yatar \xB7 yan yana iki: devrilir","Kenardan d\xFC\u015Fen \xF6l\xFCr"]),a==="ice"&&(f=["Buz y\xFCz\xFCyor: a\u011F\u0131rl\u0131k hangi yana toplan\u0131rsa o yan batar","Batan kenar su olur: orada duran d\xFC\u015Fer","D\xFC\u015Fmanlar\u0131 kenara topla, sen ortada kal"]),f.forEach((u,d)=>{let p=this.H*.72+d*22*c;o.strokeText(u,this.W/2,p),o.fillText(u,this.W/2,p)}),o.globalAlpha=1}}};var qh=13,Yh=28,Cv=7.5,Pv=7,Iv=14,Gf=.85,Lv=1.72*Gf,is=new Qe(1,14,10),Nv=new $t({color:16777215,roughness:.25}),Dv=new $t({color:1118481,roughness:.3});function nn(s,t,e,n,i){let r=new Pt(s,t);return r.scale.set(e,n,i),r.castShadow=!0,r}var Xl=class{constructor(t,e,n,i,r={}){var x,g;this.x=e,this.z=n,this.yaw=i,this.speed=0,this.vx=0,this.vz=0,this.phase=Math.random()*6,this.bob=0,this.slip=0,this.slipDir=1,this.rider=null;let a=new wi({color:(x=r.color)!=null?x:10115635,roughness:.3,clearcoat:1,clearcoatRoughness:.12}),o=new wi({color:(g=r.mane)!=null?g:3809812,roughness:.45,clearcoat:.6});this.mats=[a,o];let l=new pe,c=new pe;l.add(c),c.add(nn(is,a,.42,.44,.98).translateY(1.3)),c.add(nn(is,a,.36,.4,.42).translateY(1.36).translateZ(.62)),c.add(nn(is,a,.4,.42,.45).translateY(1.33).translateZ(-.6));let h=new pe;h.position.set(0,1.55,.78),h.rotation.x=.75,c.add(h),h.add(nn(new li(.2,.6,5,12),a,1,1,1).translateY(.35)),h.add(nn(new li(.07,.62,4,8),o,1,1,1.4).translateY(.35).translateZ(-.16));let f=new pe;f.position.set(0,.78,.02),f.rotation.x=1.25,h.add(f),f.add(nn(is,a,.17,.36,.2).translateY(.2)),f.add(nn(is,o,.13,.12,.15).translateY(.5).translateZ(.01));for(let m of[-1,1]){let v=nn(new bi(.05,.16,8),a,1,1,1);v.position.set(m*.08,.02,-.15),v.rotation.x=-.9,f.add(v);let w=nn(is,Nv,.07,.07,.07);w.position.set(m*.13,.12,-.06);let y=nn(is,Dv,.03,.03,.03);v.castShadow=w.castShadow=y.castShadow=!1,y.position.set(m*.19,.14,-.05),f.add(w,y)}this.head=f,this.tail=new pe,this.tail.position.set(0,1.45,-1),this.tail.add(nn(new li(.08,.6,4,8),o,1,1,1).translateY(-.35)),c.add(this.tail),this.legs=[];let u=new li(.1,.5,4,10),d=new li(.07,.5,4,10),p=new Ke(.085,.1,.1,10);for(let[m,v,w]of[[-.22,.62,0],[.22,.62,.35],[-.22,-.62,Math.PI],[.22,-.62,Math.PI+.35]]){let y=new pe;y.position.set(m,1.12,v);let S=nn(u,a,1,1,1);S.position.y=-.3;let M=new pe;M.position.y=-.58;let A=nn(d,a,1,1,1);A.position.y=-.28;let _=nn(p,o,1,1,1);_.position.y=-.55,M.add(A,_),y.add(S,M),c.add(y),this.legs.push({hip:y,knee:M,off:w,front:v>0})}this.root=c,l.scale.setScalar(Gf),this.group=l,t.add(l)}update(t,e,n){let i=0,r=0,a=e?e.mag:0;if(a>.18){let d=Math.hypot(this.vx,this.vz);this.yaw=hi(this.yaw,Math.atan2(e.x,e.z),ot(6,4,St(d/qh,0,1))*t);let p=St((a-.4)/.45,0,1)*qh;i=e.x*p,r=e.z*p}this.drive(i,r,t);let o=this.x+this.vx*t,l=this.z+this.vz*t;n.inside(o,l,1.3)||(o=this.x,l=this.z,this.vx*=-.3,this.vz*=-.3,this.yaw=hi(this.yaw,Math.atan2(-this.x,-this.z),3*t)),this.x=o,this.z=l,this.speed=Math.hypot(this.vx,this.vz);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),f=-this.vx*h+this.vz*c;this.slip+=(St((Math.abs(f)-1.2)/4,0,1)-this.slip)*Math.min(1,t*10),Math.abs(f)>.5&&(this.slipDir=Math.sign(f));let u=this.speed>.3?1.3+this.speed*.17:0;this.phase+=t*Math.PI*2*u,this.bob=this.speed>.3?-Math.abs(Math.sin(this.phase))*.09*St(this.speed/6,0,1):0}drive(t,e,n){let i=Math.hypot(this.vx,this.vz);if(i<.3){let x=Yh*n,g=t-this.vx,m=e-this.vz,v=Math.hypot(g,m);v>x?(this.vx+=g/v*x,this.vz+=m/v*x):(this.vx=t,this.vz=e);return}let r=qh,a=Math.sqrt(St((i-.15*r)/(.55*r),0,1)),o=ot(Yh,Cv,a),l=ot(Yh,Pv,a),c=this.vx/i,h=this.vz/i,f=t*c+e*h,u=-t*h+e*c,d=St(f-i,-l*n,Iv*n),p=St(u,-o*n,o*n);this.vx+=c*d-h*p,this.vz+=h*d+c*p}saddle(t){return t.x=this.x-Math.sin(this.yaw)*.05,t.y=Lv+this.bob,t.z=this.z-Math.cos(this.yaw)*.05,t}render(){let t=this.group;t.position.set(this.x,0,this.z),t.rotation.y=this.yaw;let e=St(this.speed/6,0,1),n=this.phase;this.root.position.y=this.bob,this.root.rotation.x=Math.sin(n)*.06*e,this.root.rotation.z=-this.slip*this.slipDir*.22;for(let i of this.legs){let r=n+i.off;i.hip.rotation.x=-Math.sin(r)*.6*e;let a=(.15+.9*Math.max(0,Math.sin(r+1.2)))*e;i.knee.rotation.x=i.front?a:-a*.8}this.tail.rotation.x=.4+Math.sin(n*.5)*.15+e*.5,this.head.rotation.x=1.25+Math.sin(n)*.08*e}dispose(t){t.remove(this.group);for(let e of this.mats)e.dispose()}};var ql=1/120,Wf=1.3,Uv=16753951,Xf=10820863,zv=5223679,Fv=4183752,Ov=6951618,Bv=11820272,kv={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo",roof:"Halatl\u0131 Platform",grid:"Karanl\u0131k Izgara"},qf=["ice","meadow","dojo"],ya=["duel","duel","roof","battle","duel","boss","horse","roof","titan","titanwar"],Zh=4,Yf=.8,Hv=.12,Zf=7.5,Vv=60,Gv=18,Kf=["flyer","cav","foot","foot","flyer","cav","foot","flyer","foot","cav"],Wv=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function Xv(s){if(s%2)return"grid";let t=0;for(let e=2;e<s;e+=2){let n=ya[(e-1)%ya.length];(n==="duel"||n==="boss")&&t++}return qf[t%qf.length]}function Kh(s){let t=ya[(s-1)%ya.length],e=Math.floor((s-1)/ya.length),n=St((s-1)/24,0,1);if(t==="roof")return{type:t,env:"roof",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(4,2+e)).fill("normal")};if(t==="horse")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:new Array(Math.min(6,3+e)).fill("big")};if(t==="titan")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan"]};if(t==="titanwar")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan","titan","titan"],allies:["foot","flyer","foot","cav","foot","flyer","foot","cav"]};if(t==="battle"){let o=Math.min(24,14+3*e),l=Math.floor(o/4),c=[];for(let h=0;h<o;h++)c.push(h<l?"cav":"normal");return{type:t,env:"meadow",big:!0,skill:n*.8,boss:!1,enemies:c,allies:["cav","cav","foot","foot","foot"]}}let i=Xv(s),r=t==="boss",a=[];if(r){a.push("boss");for(let o=0;o<e;o++)a.push("normal")}else{let o=Math.min(4,1+Math.floor((s-1)/4));for(let l=0;l<o;l++)a.push("normal")}return{type:t,env:i,big:!1,skill:n,boss:r,enemies:a}}var Nn=new P,qv=new P(0,1,0),ss={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},Yl=class{constructor(){let t=document.getElementById("gl"),e=new Tl({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Oe,e.toneMapping=Jr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=qi,this.renderer=e,this.scene=new Wi;let n=new $s(e);this.scene.environment=n.fromScene(new Cl,.04).texture,this.scene.environmentIntensity=.85,this.camera=new Be(55,1,.1,900),this.world=new Vl(this.scene),this.fx=new kl(this.scene);let i=document.getElementById("ui");this.input=new Gl(i),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new Wl(this,i),this.soundOn=!0,this.highQuality=Ph("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.horses=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new P,this.hintT=8,this.lastH=ql,this.lastAttackT=-9,this._bb={},this.titan=null,this.titans=[],this.allyRopes=[],this.hookSide=1,this.raycaster=new Kr,this.ropeMesh=new Pt(new Ke(.025,.025,1,6).translate(0,.5,0),new $t({color:2829104,roughness:.6})),this.ropeMesh.visible=!1,this.ropeMesh.frustumCulled=!1,this.scene.add(this.ropeMesh),this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(Ph("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=St(2*Math.atan(Math.tan(sh.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,Ih("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){ne.init(),ne.toggleMute(),this.soundOn=!ne.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),Ll(t.swordMesh)),t.sword2Mesh&&(this.scene.remove(t.sword2Mesh),Ll(t.sword2Mesh));for(let t of this.loose)this.scene.remove(t.mesh),Ll(t.mesh);for(let t of this.horses)t.dispose(this.scene);this.horses=[],this.titan=null,this.titans=[],this.ropeMesh.visible=!1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.loose=[],this.fx.clear()}addChar(t){let e=new Ol(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),e.sword2Mesh&&this.scene.add(e.sword2Mesh),this.chars.push(e),e}startLevel(t){this.clearLevel(),this.level=t,Ih("rk3dLevel",t);let e=Kh(t);this.spec=e,this.world.set(e.env,e.big),this.fx.setDecalParent(this.world.env.plat||this.scene),this.tiltWarned=!1,this.titanHinted=!1;let n=e.type==="horse"||e.type==="battle";this.titanMode=e.type==="titan"||e.type==="titanwar",this.fx.quiet=this.titanMode;let i=e.type==="titan"?-30:e.type==="horse"?0:e.type==="battle"||e.type==="titanwar"?-22:-6;this.player=this.addChar({team:"player",x:0,z:i,yaw:0,hp:1,color:Uv,speed:Rf,bladeLen:n?Bl:ga,dual:this.titanMode}),n&&this.mountOn(this.player,10115635,3809812),this.goodGuys=[this.player];let r=e.enemies.length,a=Math.min(44,r*2.4);e.enemies.forEach((l,c)=>{let h={team:"enemy",hp:1,skill:e.skill,color:Xf,yaw:Math.PI};if(l==="cav"||e.type==="battle"&&l==="normal"){let u=l==="cav",d=u?(c%2?1:-1)*Y(17,26):(r>1?(c/(r-1)-.5)*a:0)+Y(-1,1);Object.assign(h,{x:d,z:u?Y(22,28):Y(16,24),speed:ot(3.4,5.4,e.skill),bladeLen:u?Bl:ga})}else if(l==="titan"){let u=r>1?c-(r-1)/2:0;Object.assign(h,{x:u*17,z:28+Math.abs(u)*5,scale:7,titan:!0,hp:1,speed:2.6,skill:.4+e.skill*.6,color:Bv,bladeLen:Cf})}else if(l==="big"){let u=c/r*Math.PI*2+Y(-.3,.3),d=Y(16,28);Object.assign(h,{x:Math.sin(u)*d,z:Math.cos(u)*d,scale:1.6,speed:2.4,skill:e.skill*.5,heavy:!0})}else{let u=l==="boss";Object.assign(h,{x:(c-(r-1)/2)*2.6,z:6.5+c%2*1.2,hp:u?3:1,armored:u,scale:u?1.38:1,skill:u?e.skill*.5:e.skill,boss:u,color:u?Ov:Xf,speed:u?3.2:ot(3.4,5.4,e.skill)})}let f=this.addChar(h);f.titan&&(this.titan=this.titan||f,this.titans.push(f),f.neckHp=Zh,f.steamT=Y(5,7)+c*1.7),l==="cav"&&this.mountOn(f,2827554,986123),this.enemies.push(f)}),(e.allies||[]).forEach((l,c)=>{let h=l==="cav",f=c%2?1:-1,u=e.type==="titanwar";this.spawnAlly(l,u?f*(2.5+Math.floor(c/2)*2.2)+Y(-.5,.5):f*(h?Y(6,9):Y(2.5,5)),i+(u?Y(-1,4):h?Y(-2,0):Y(1.5,4)))}),this.waveT=Zf,this.waveI=0,this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t);let o=e.type==="titan"?"T\u0130TAN!":e.type==="titanwar"?`T\u0130TAN MUHAREBES\u0130! ${r} titan, ${this.allies.length} dost`:e.type==="battle"?`MUHAREBE! ${r} d\xFC\u015Fman`:e.type==="horse"?"At S\u0131rt\u0131nda":e.boss?"BOSS!":kv[e.env];this.hud.show(`SEV\u0130YE ${t}`,o,1.8,e.boss||this.titanMode||e.type==="battle"?"boss":""),(e.type!=="duel"&&e.type!=="boss"||e.env==="grid"||e.env==="ice")&&(this.hintT=Math.max(this.hintT,6)),this.input.clear()}restartLevel(){this.startLevel(this.level)}spawnAlly(t,e,n){let i=this.spec.skill,r=t==="cav",a=t==="flyer",o=this.addChar({team:"ally",hp:1,color:a?Fv:zv,yaw:0,skill:Math.min(1,i+(a?.3:.2)),speed:ot(3.4,5.4,i),x:e,z:n,bladeLen:r?Bl:ga,flyer:a,dual:a});return r&&this.mountOn(o,15260868,9071178),this.allies.push(o),this.goodGuys.push(o),o}allyWaves(t){if(this.time>Vv+.5||this.phase!=="play"||(this.waveT-=t,this.waveT>0))return;this.waveT=Zf;let e=this.allies.filter(c=>c.alive).length,n=Math.min(3,Gv-e);if(n<=0)return;let i=this.player,r=this.titans.find(c=>c.alive)||i,a=i.x-r.x,o=i.z-r.z,l=Math.hypot(a,o)||1;a/=l,o/=l;for(let c=0;c<n;c++){let h=Kf[this.waveI++%Kf.length],f=h==="cav"?Y(18,24):Y(11,15),u=(c-1)*3+Y(-.8,.8),d=i.x+a*f+o*u,p=i.z+o*f-a*u;if(!this.world.inside(d,p,3)){let x=(this.world.radius-6)/(Math.hypot(d,p)||1);d*=x,p*=x}this.spawnAlly(h,d,p)}i.alive&&this.fx.popup(i.x,i.y+2.6,i.z,`+${n} DOST GELD\u0130`,"#7cc8ff",18,1.1,!0)}allyHook(t,e){let n=e.rag,i=Math.random(),r=i<.5+.3*t.skill?U.NECK:i<.85?U.SPINE:$i([U.LSH,U.RSH,U.PELVIS]);n.pts[r].attached||(r=U.NECK);let a=n.pts[r],o={x:a.x,y:a.y,z:a.z};t.rope={pt:o,pull:44,release:1.6,maxT:2.2,t:0,titan:!0,anchor(){let l=n.pts[r];return o.x=l.x,o.y=l.y,o.z=l.z,o},valid:()=>e.alive&&n.pts[r].attached},t.y<t.gy+.05&&(t.vy=Math.max(t.vy,4.5),t.y=t.gy+.03),this.near(t,14)&&ne.swoosh(2)}mountOn(t,e,n){let i=new Xl(this.scene,t.x,t.z,t.yaw,{color:e,mane:n});return i.rider=t,t.mount=i,this.horses.push(i),i}hostilesOf(t){return t.side?this.goodGuys:this.enemies}matesOf(t){return t.side?this.enemies:this.goodGuys}jumpTo(t){let e=this.level;for(;Kh(e).type!==t&&Kh(e).env!==t;)e++;this.startLevel(e)}frame(t){this.highQuality&&this.time>3&&(this.perfT=(this.perfT||0)+t,this.perfN=(this.perfN||0)+1,this.perfT>3&&(this.perfSlow=this.perfT/this.perfN>1/35?(this.perfSlow||0)+1:0,this.perfT=0,this.perfN=0,this.perfSlow>=2&&(this.toggleQuality(),this.fx.popup(this.player.x,3,this.player.z,"Ak\u0131c\u0131l\u0131k i\xE7in grafik d\xFC\u015F\xFCr\xFCld\xFC","#fff",16,2.2,!0))));let e=this.input.taps;if(this.titanMode&&this.phase==="play"&&this.player.alive)for(let i of e)this.fireHook(i);e.length=0,this.slowT>0?(this.slowT-=t,this.timeScale=ot(this.timeScale,this.slowScale,cn(40,t))):this.timeScale=ot(this.timeScale,1,cn(6,t));let n=t*this.timeScale;if(n>1e-5){let i=Math.ceil(n/ql-1e-6),r=n/i;for(let a=0;a<i;a++)this.step(r)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t,this.world.setLoad(this.chars),this.world.step(t,this.player);for(let i of this.titans)i.alive&&(this.titanSteam(i,t),this.titanDodge(i));this.spec.type==="titanwar"&&this.allyWaves(t);for(let i of this.horses){let r=i.rider;i.update(t,r&&r.alive?r.stickW:null,this.world),i.slip>.35&&Math.random()<t*30*i.slip&&this.fx.dust(i.x+Y(-.5,.5),.05,i.z+Y(-.8,.8),-i.vx*.15,-i.vz*.15),r===this.player&&i.slip>.55&&ne.skid()}for(let i of this.chars)i.copyBlade(),i.update(t);this.separate();let e=this.world,n=this.lastH;for(let i of this.chars){let r=i.rag;r.step(t,n,e),!i.alive&&r.impact>6&&ne.thud(r.impact*250),r.impact=0;let a=r.pts[U.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),ne.splash())}for(let i of this.loose)i.step(t,n,e);this.combat(t),this.fx.update(t,e),this.lastH=t}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,i=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<i&&(i=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let i of this.enemies)i.alive&&i.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<ot(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars,e=this.world.ropes,n=this.horses;for(let i=0;i<n.length;i++)for(let r=i+1;r<n.length;r++){let a=n[i],o=n[r],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),f=1.5;if(h<f&&h>1e-4){let u=(f-h)*.5,d=l/h,p=c/h;a.x-=d*u,a.z-=p*u,o.x+=d*u,o.z+=p*u}}for(let i=0;i<t.length;i++){let r=t[i];if(!(!r.alive||r.falling||r.mount||(r.isPlayer||r.flyer)&&r.y-r.gy>.5)){if(e)for(let a of e){if(!a.intact)continue;let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=.28*r.S+a.r;c<h&&c>1e-4&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}for(let a of n){let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l)||1,h=r.titan?1+.25*r.S:1+.3*r.S;c<h&&(r.titan?(a.x=r.x-o/c*h,a.z=r.z-l/c*h):(r.x=a.x+o/c*h,r.z=a.z+l/c*h))}for(let a=i+1;a<t.length;a++){let o=t[a];if(!o.alive||o.falling||o.mount||(o.isPlayer||o.flyer)&&o.y-o.gy>.5)continue;let l=o.x-r.x,c=o.z-r.z,h=Math.hypot(l,c),f=Math.min(r.S,o.S),u=Math.max(r.S,o.S),d=u>2*f?.34*f+.2*u:.34*(r.S+o.S);if(h<d&&h>1e-4){let p=d-h,x=l/h,g=c/h,m=p*o.S/(r.S+o.S),v=p*r.S/(r.S+o.S);this.world.inside(r.x-x*m,r.z-g*m,.3)&&(r.x-=x*m,r.z-=g*m),this.world.inside(o.x+x*v,o.z+g*v,.3)&&(o.x+=x*v,o.z+=g*v)}}}}}fireHook(t){let e=this.player,n=null,i=null;for(let a of this.titans){if(!a.alive||!t)continue;let o=this.pickTitan(a,t.x,t.y);o&&(!i||o.s<i.s)&&(i=o)}let r=this.camTarget&&this.camTarget.titan&&this.camTarget.alive?this.camTarget:this.titans.find(a=>a.alive);if(i){let a=i.t.rag,o=i.bone,l={x:i.x,y:i.y,z:i.z},c=i.t;n={pt:l,pull:48,release:1.6,maxT:2.2,t:0,titan:!0,valid:()=>c.alive,anchor(){if(o==="head"){let h=a.pts[U.HEAD];l.x=h.x,l.y=h.y,l.z=h.z}else if(a.bones.includes(o)){let h=a.pts[o.a],f=a.pts[o.b];l.x=ot(h.x,f.x,i.u),l.y=ot(h.y,f.y,i.u),l.z=ot(h.z,f.z,i.u)}return l}}}else{let a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),l=30;r&&r.alive&&(a=r.x-e.x,o=r.z-e.z,l=Math.hypot(a,o)||1,a/=l,o/=l),this.hookSide=-this.hookSide;let c=St(l-8,5,18),h=6*this.hookSide,f={x:e.x+a*c+o*h,y:St(e.y+7,10,16),z:e.z+o*c-a*h};n={pt:f,pull:24,release:4,maxT:1.2,t:0,anchor:()=>f}}e.rope=n,e.y<.05&&(e.vy=Math.max(e.vy,4.5),e.y=.03),ne.swoosh(2)}pickTitan(t,e,n){let i=t.rag;this.raycaster.setFromCamera({x:e/this.W*2-1,y:-(n/this.H)*2+1},this.camera);let r=this.raycaster.ray.origin,a=this.raycaster.ray.direction,o=r.x+a.x*400,l=r.y+a.y*400,c=r.z+a.z*400,h=null,f=1/0;for(let p of i.bones){if(!p.vis)continue;let x=i.pts[p.a],g=i.pts[p.b];ji(r.x,r.y,r.z,o,l,c,x.x,x.y,x.z,g.x,g.y,g.z);let m=p.r*1.3+.6;ce.d2<m*m&&ce.s<f&&(f=ce.s,h={t,s:f,bone:p,u:ce.t,x:ot(x.x,g.x,ce.t),y:ot(x.y,g.y,ce.t),z:ot(x.z,g.z,ce.t)})}let u=i.pts[U.HEAD];ua(u.x,u.y,u.z,r.x,r.y,r.z,o,l,c);let d=i.d.headR*1.3+.6;return Pn.d2<d*d&&Pn.t<f&&(h={t,s:Pn.t,bone:"head",u:0,x:u.x,y:u.y,z:u.z}),h}titanSteam(t,e){let n=t.rag.pts[U.NECK],i=this.player,r=t.S,a=Math.sin(t.yaw),o=Math.cos(t.yaw),l=n.x-a*.12*r,c=n.y+.05*r,h=n.z-o*.12*r;if(t.steamT-=e,t.steamT<Wf&&t.steamT>0){t.hissing||(t.hissing=!0,this.near(t,40)&&ne.hiss());let m=1-t.steamT/Wf;Math.random()<e*(12+30*m)&&this.fx.steam(l+Y(-.4,.4),c,h+Y(-.4,.4),Y(-1,1)-a*1.5,Y(3,6),Y(-1,1)-o*1.5,Y(1.2,2)*(.7+.6*m),Y(.7,1.1),.9)}for(let m of t.rag.pts)m.stump&&Math.random()<e*5&&this.fx.steam(m.x,m.y,m.z,Y(-.4,.4),Y(1,2),Y(-.4,.4),Y(.6,1.1),Y(.8,1.3),.55);if(t.steamT>0)return;t.hissing=!1,t.steamT=Y(6,9)*ot(1,.7,t.skill);for(let m=0;m<24;m++){let v=Y(0,Math.PI*2),w=Y(-.2,.9),y=Y(8,17),S=Math.sqrt(1-w*w);this.fx.steam(l,c,h,Math.cos(v)*S*y,w*y+2,Math.sin(v)*S*y,Y(2,3.3),Y(.8,1.3),1)}for(let m=0;m<20;m++)this.fx.dust(l+Y(-1.5,1.5),c+Y(-1,1.5),h+Y(-1.5,1.5),Y(-9,9),Y(-9,9));this.near(t,40)&&(ne.splash(),ne.hiss(!0));for(let m of this.allies){if(!m.alive)continue;let v=m.x-l,w=m.y+1-c,y=m.z-h,S=Math.hypot(v,w,y)||1;if(S>11)continue;let M=14*(1-S/14),A=Math.hypot(v,y)||1;m.vx+=v/A*M,m.vz+=y/A*M,m.kb=.5,m.rope&&(m.rope=null,m.vy=Math.max(m.vy,4))}if(!i.alive)return;let u=i.x-l,d=i.y+1-c,p=i.z-h,x=Math.hypot(u,d,p)||1;if(x>11)return;let g=16*(1-x/14);i.vx+=u/x*g,i.vz+=p/x*g,i.vy=Math.max(i.vy,5),i.y=Math.max(i.y,i.gy+.05),i.rope=null,i.kb=.5,this.fx.popup(i.x,i.y+2,i.z,"BUHAR!","#ffffff",26,1.1),this.shake(.2)}titanDodge(t){let e=t.swing;if(!(!e||e.dodged||e.t<e.wind-.05)){e.dodged=!0;for(let n of this.allies){if(!n.alive||n.stun>0||n.kb>0||n.mount)continue;let i=n.x-t.x,r=n.z-t.z;Math.hypot(i,r)>8||Math.random()>ot(.35,.7,n.skill)||(this.knock(n,i,r,9),n.vy=Math.max(n.vy,3.5))}}}knock(t,e,n,i){let r=Math.hypot(e,n)||1;t.vx+=e/r*i,t.vz+=n/r*i,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<ot(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.aimCtl){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null,t.bounceBlade(),t.isPlayer||(t.aimA=t.swYaw,t.plan=null,t.state==="attack"&&(t.state="fight",t.cool=Y(.4,.9)));return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=ot(e.a0,e.a1,ca((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword2&&this.dropSword2(t,!1),t.hasSword=!1;let e=t.sw,n=this.h||ql,i={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(gn+t.bladeLen)*t.S;this.loose.push(new fa(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},i,r)),t.swordMesh=null}dropSword2(t,e){if(!t.hasSword2)return;t.hasSword2=!1;let n=e?t.sw:t.sw2,i=e?t.bCur:t.b2Cur,r=e?t.bPrev:t.b2Prev,a=this.h||ql,o={x:(i.bx-r.bx)/a,y:(i.by-r.by)/a,z:(i.bz-r.bz)/a},l=(gn+t.bladeLen)*t.S,c=e?t.swordMesh:t.sword2Mesh;this.loose.push(new fa(c,{x:n.gx,y:n.gy,z:n.gz},{x:n.dx,y:n.dy,z:n.dz},{x:n.wx,y:n.wy,z:n.wz},o,l)),e&&(t.swordMesh=t.sword2Mesh),t.sword2Mesh=null}combat(t){for(let e of this.chars)if(!(!e.alive||!e.swingActive))for(let n=0;n<(e.hasSword2?2:1);n++)this.bladeHits(e,n,t);this.poke()}bladeHits(t,e,n){let i=e?t.b2Prev:t.bPrev,r=e?t.b2Cur:t.bCur,a=Math.min(i.bx,i.tx,r.bx,r.tx)-.2,o=Math.max(i.bx,i.tx,r.bx,r.tx)+.2,l=Math.min(i.by,i.ty,r.by,r.ty)-.2,c=Math.max(i.by,i.ty,r.by,r.ty)+.2,h=Math.min(i.bz,i.tz,r.bz,r.tz)-.2,f=Math.max(i.bz,i.tz,r.bz,r.tz)+.2;this.world.ropes&&this.cutRopes(t,i,r,a,o,h,f);let u=t.titan?this.goodGuys:this.chars;for(let d of u){let p=t.curEp;if(!p||t.titan&&!t.swingActive)break;let x=e?p.hits2:p.hits,g=d.titan&&d.alive;if(d===t||!g&&x.has(d)||!t.isPlayer&&!d.alive||t.isPlayer&&!d.alive&&d.side===0)continue;let m=d.rag.bounds(this._bb);if(m.x1<a||m.x0>o||m.y1<l||m.y0>c||m.z1<h||m.z0>f)continue;if(d.alive&&d.hasSword&&!d.titan&&!t.titan&&!p.rolled.has(d)&&!(t.side===d.side&&this.spec.type==="titanwar")){let _=Uh(i,r,d.bCur,3,.05);if(_){if(d.swingActive){this.parry(t,d,_);break}if(p.rolled.add(d),Math.random()<(d.isPlayer?.4:ot(.15,.45,d.skill))){this.block(t,d,_);break}}}let v=g&&hf(d.rag,i,r,4)||Dh(d.rag,i,r,4);if(!v)continue;if(g){let _=v.head||v.zone?"neck":d.rag.bones[v.bone].kind;if(_==="torso"){if(p.thick||(p.thick=new Set),p.thick.has(d))continue;p.thick.add(d)}else{let E=d.rag.id*100+(_==="neck"?99:v.bone);if(x.has(E))continue;x.add(E)}}if(t.side!==d.side&&!d.isPlayer&&!d.titan&&d.alive&&d.hasSword&&d.stun<=0&&d.state!=="attack"&&d.state!=="panic"&&!p.rolled.has(d)&&(p.rolled.add(d),Math.random()<ot(.08,.45,d.skill))){d.blockT=.35,d.blockUx=p.ux,d.blockUy=p.uy,d.counterT=.3,this.block(t,d,v);break}g||x.add(d),v.blade=e;let w=ot(r.bx-i.bx,r.tx-i.tx,v.t)/n,y=ot(r.by-i.by,r.ty-i.ty,v.t)/n,S=ot(r.bz-i.bz,r.tz-i.tz,v.t)/n,M=Math.hypot(w,y,S)||1,A=St(M,4,13);w=w/M*A,y=y/M*A,S=S/M*A,this.onHit(t,d,v,w,y,S)}}cutRopes(t,e,n,i,r,a,o){let l=this.world,c=this.h;for(let h of l.ropes){if(!h.intact||h.x<i-h.r||h.x>r+h.r||h.z<a-h.r||h.z>o+h.r)continue;let f=l.ground(h.x,h.z);ss.bx=h.x,ss.by=f,ss.bz=h.z,ss.tx=h.x,ss.ty=f+3.2,ss.tz=h.z;let u=Uh(e,n,ss,3,h.r+.03);u&&(l.cutRope(h,u.y-f,(n.tx-e.tx)/c,(n.tz-e.tz)/c),this.fx.sparks(u.x,u.y,u.z,16),this.fx.popup(u.x,u.y+.6,u.z,"HALAT KOPTU!","#ff7a5c",22,1.2),ne.twang(),this.shake(.14),this.slowmo(.15,.35),!this.tiltWarned&&l.tilt>.17&&(this.tiltWarned=!0,this.fx.popup(this.player.x,2.6,this.player.z,"PLATFORM YATIYOR!","#ffd23f",26,1.6)))}}poke(){for(let t of this.chars){if(!t.alive||!t.aimCtl||!t.hasSword||t.swingActive||t.pokeCd>0||t.y-t.gy>.3&&!t.mount)continue;let e=this.chars;for(let n of e){if(n===t||!n.alive||n.kb>0||n.titan)continue;let i=n.rag.bounds(this._bb),r=t.bCur;if(i.x1<Math.min(r.bx,r.tx)||i.x0>Math.max(r.bx,r.tx)||i.z1<Math.min(r.bz,r.tz)||i.z0>Math.max(r.bz,r.tz))continue;let a=Dh(n.rag,t.bPrev,t.bCur,2);if(a){if(t.isPlayer&&n.state==="panic"){this.fx.popup(n.x,2.3*n.S,n.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,n,a,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),n.alive&&this.killEnemy(n,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(n,t.sw.dx,t.sw.dz,t.isPlayer?2.4:n.isPlayer?1.8:1.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,ne.punch();break}}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let i of[t,e])i.stun=.35,i.isPlayer||(i.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),ne.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),ne.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,i=e.u;return e.head&&(n=t.boneWith(U.HEAD),n>=0&&(i=t.bones[n].b===U.HEAD?.7:.3)),n<0||t.bones[n].len<Lh*t.S?null:t.cut(n,i)}gore(t,e,n,i,r,a){let o=this.h,l=t.S>3;if(e){let c=t.comp[e.i1],h=t.comp[e.i2],f=t.compSize(c)<t.compSize(h)?c:h;if(t.addVel(i*.35,r*.35+2,a*.35,o,f),l){this.fx.spray(e.x,e.y,e.z,i,r,a,70,.6,9,!0),this.fx.spray(e.x,e.y,e.z,0,1,0,34,.9,7,!0);let u=e.kind==="neck",d={big:!0,rate:u?130:100,spd:2.6};this.fx.bleed(t,e.i1,u?Y(9,12):Y(5,8),d),this.fx.bleed(t,e.i2,u?Y(9,12):Y(5,8),d)}else this.fx.spray(e.x,e.y,e.z,i,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,Y(1.2,2.2)),this.fx.bleed(t,e.i2,Y(1.2,2.2));this.fx.sparks(e.x,e.y,e.z,5),ne.slice()}else if(l){this.fx.spray(n.x,n.y,n.z,i,r,a,24,.8,6,!0);let c=n.head?t.boneWith(U.HEAD):n.bone;c>=0&&this.fx.wound(t,c,n.head?.8:n.u,Y(3,5),{rate:35,spd:1.6}),ne.wound()}else this.fx.spray(n.x,n.y,n.z,i,r,a,16,.7,3),ne.wound()}neckWound(t,e){let n=t.rag.boneWith(U.HEAD);if(n<0)return;let i=t.rag.pts[U.NECK];this.fx.spray(i.x,i.y+.5,i.z,0,1,0,60,1,8,!0),this.fx.wound(t.rag,n,Y(.15,.5),14,{rate:40+30*e,spd:2.2,max:16})}onHit(t,e,n,i,r,a){let o=e.rag,l=e.alive,c=t.side===e.side&&t!==e;if(c&&l&&Math.random()<.55&&(e.grudge=t,e.grudgeT=4),c&&l&&this.spec.type==="titanwar"){this.knock(e,e.x-t.x,e.z-t.z,3),this.time>(e.heyT||0)&&this.near(e)&&(e.heyT=this.time+2,this.fx.popup(e.x,2.2,e.z,"HEY!","#fff",16,.8));return}if(t.titan&&!e.isPlayer&&l&&this.cancelSwing(t),e.isPlayer&&l){this.hitPlayer(t,e,n,i,r,a);return}let h=n.head?"neck":o.bones[n.bone].kind,f=n.head||o.pts[o.bones[n.bone].a].attached,u=n.blade?"neckCd2":"neckCd",d=e.titan&&(e.neckHp>1||this.time<(e[u]||0)||this.time<(e.neckCutT||0)),p=e.titan&&!t.isPlayer&&Math.random()>Hv,x=l&&(e.armored&&e.hp>1||e.titan&&(h==="torso"||h==="neck"&&(d||!t.isPlayer)||p)),g=o.pts,m=[U.LHAND,U.RHAND,U.LFOOT,U.RFOOT].map(S=>g[S].attached),v=x?null:this.applyCut(o,n),w=[U.LHAND,U.RHAND,U.LFOOT,U.RFOOT].some((S,M)=>m[M]&&!g[S].attached);e.titan||o.addVel(i*.2,r*.2+.6,a*.2,this.h),this.gore(o,v,n,i,r,a);let y=n.blade?t.sword2Mesh:t.swordMesh;if(y){let S=y.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),S.color.setRGB(ot(.89,.75,t.blood),ot(.91,.12,t.blood),ot(.93,.15,t.blood))}if(l){if(e.titan){f&&this.hitTitan(e,t,v&&v.kind==="neck"||w?v:null,h,i,r,a,u);return}if(v?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,i,a,3),this.fx.popup(e.x,2.3*e.S,e.z,c?"HEY!":`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,v,i,r,a)}}hitTitan(t,e,n,i,r,a,o,l="neckCd"){if(n&&n.kind==="neck"){this.killEnemy(t,e,n,r,a,o);return}t.flash=.15;let c=t.rag.pts[U.NECK].y+1;if(!e.isPlayer&&!n){if(i==="neck"&&e.flyer&&t.neckHp>1&&this.time>(t.neckCdAlly||0)){t.neckCdAlly=this.time+1.5,t.neckHp--,t.neckCutT=this.time+Yf,t.stun=Math.max(t.stun,.3),this.neckWound(t,Zh-t.neckHp),this.near(t,30)&&(this.fx.popup(t.x,c,t.z,`DOST BOYNUNU YARDI! ${t.neckHp} darbe kald\u0131`,"#7cf0e0",22,1.3),ne.slice());return}this.near(t,14)&&ne.thud(600);return}if(i==="neck"){if(this.time<(t[l]||0)||t.neckHp<=1)return;t[l]=this.time+.8,t.neckHp--,t.neckCutT=this.time+Yf,t.stun=.6,t.state="stagger",this.cancelSwing(t),t.steamT=Math.min(t.steamT,1),this.neckWound(t,Zh-t.neckHp),this.fx.popup(t.x,c,t.z,`BOYUN! ${t.neckHp} darbe kald\u0131`,"#ffd23f",26,1.3),this.slowmo(.2,.3),this.shake(.2),ne.slice();return}n?(n.kind==="arm"&&t.checkGrip(),t.stun=.35,t.state="stagger",this.cancelSwing(t),(e.isPlayer||this.near(t,25))&&this.fx.popup(t.x,c,t.z,n.kind==="leg"?"BACA\u011EI G\u0130TT\u0130!":"KOLU G\u0130TT\u0130!","#ffd23f",26,1.2),this.titanHinted||(this.titanHinted=!0,this.fx.popup(t.x,c-1.6,t.z,"\xD6lmedi! BOYNUNU kes","#fff",20,1.8)),this.slowmo(.15,.35),this.shake(.15)):(this.fx.popup(e.x,e.y+2.2,e.z,i==="torso"?"\xC7OK KALIN!":"SIYRIK","#fff",18,.8),ne.thud(900))}hitPlayer(t,e,n,i,r,a){if(e.invuln>0)return;let o=e.rag,l=n.head?"neck":o.bones[n.bone].kind;this.hud.flash=.6,this.shake(.15),this.cancelSwing(e);let c=l==="torso"||t.titan&&l==="neck"?null:this.applyCut(o,n);if(!c&&t.titan){let u=[];o.bones.forEach((d,p)=>{(d.kind==="arm"||d.kind==="leg")&&o.pts[d.a].attached&&o.pts[d.b].attached&&d.len>Lh&&u.push(p)}),u.length&&(c=o.cut($i(u),.5))}o.addVel(i*.25,r*.2+1.2,a*.25,this.h),this.gore(o,c,n,i,r,a);let h=o.pts;if(c&&(c.kind==="neck"||!h[U.LHAND].attached&&!h[U.RHAND].attached)){e.die(),o.addVel(i*.5,3,a*.5,this.h),this.lose(c.kind==="neck"?"Kafan gitti.":"\u0130ki kolun da gitti.");return}if(e.hurtT=.3,e.invuln=c?.9:.6,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,t.titan?10:c?4:5),t.titan&&!e.mount&&(e.vy=7,e.y=Math.max(e.y,.05),e.rope=null),ne.hurt(),!c){this.slowmo(.12,.4);return}e.checkGrip();let f=2.1*e.S;c.kind==="arm"?this.fx.popup(e.x,f,e.z,"KOLUN G\u0130TT\u0130!","#ff5a6e",22,1.3):c.kind==="leg"&&this.fx.popup(e.x,f,e.z,e.legMask?"TEK AYAK!":"BACAKSIZ DEVAM!","#ff5a6e",22,1.3),this.slowmo(.25,.3)}near(t,e=12){let n=this.player;return!!n&&Math.hypot(t.x-n.x,t.z-n.z)<e}killEnemy(t,e,n,i,r,a){t.die();let o=this.h;t.titan?t.rag.addVel(i*.08,1,a*.08,o,t.rag.comp?t.rag.comp[U.PELVIS]:void 0):(t.rag.addVel(i*.45,r*.3+2.5,a*.45,o),t.rag.addSpin(Y(-5,5),Y(-3,3),Y(-5,5),o));let l=2.2*t.S;if(t.titan&&(this.fx.popup(t.x,8,t.z,"BOYNU KES\u0130LD\u0130! T\u0130TAN D\xDC\u015ET\xDC!","#ffd23f",30,1.8),this.shake(.3)),!(!e||e.isPlayer||t.titan||this.near(t))){this.checkWin();return}n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"?this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2):n.kind==="arm"&&this.fx.popup(t.x,l,t.z,"KOL G\u0130TT\u0130!","#ffd23f",24,1.2));let h=e?e.curEp:null;h&&(h.kills++,h.kills>=2&&e.isPlayer&&this.fx.popup(e.x,2.6,e.z,h.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),e&&e.side===t.side&&!t.titan?this.fx.popup(t.x,l+.5,t.z,"DOST ATE\u015E\u0130!","#ff8ad8",24,1.3):t.team==="ally"&&this.fx.popup(t.x,l+.5,t.z,"DOSTUMUZ D\xDC\u015ET\xDC!","#7cc8ff",20,1.2),ne.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){this.phase==="play"&&(this.enemies.some(t=>t.alive)||(this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",`Lv ${this.level} ge\xE7ildi`,2.6,"win"),ne.win()))}lose(t){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),ne.die(),this.hud.show("\xD6LD\xDCN",`${t||$i(Wv)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){if(!t.alive)return;t.die();let e=this.world.env,n=!!(e.roof||e.grid);this.fx.popup(t.x,t.gy+1.2,t.z,n?"A\u015EA\u011EI D\xDC\u015ET\xDC!":"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?this.lose(e.roof?"Platformdan d\xFC\u015Ft\xFCn.":e.grid?"Bo\u015Flu\u011Fa d\xFC\u015Ft\xFCn.":"Suya d\xFC\u015Ft\xFCn."):(ne.combo(5),this.checkWin())}updateCamera(t,e){let n=this.player,i=n.rag.pts[U.PELVIS],r=n.alive?n.x:i.x,a=n.alive?n.z:i.z,o=this.spec.type,l=n.alive?n.y:Math.max(n.gy,i.y-.8),c=this.camTarget;if(this.titanMode){let S=null,M=1/0;for(let A of this.titans){if(!A.alive)continue;let _=Math.hypot(A.x-r,A.z-a);_<M&&(M=_,S=A)}(!c||!c.alive||!c.titan||S&&S!==c&&M<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}else if(o==="horse")c=null;else if(o==="battle"){let S=n.alive?this.nearestEnemy(n,24):null;(!c||!c.alive||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}else{let S=n.alive?this.nearestEnemy(n,14):null;(!c||!c.alive||c.state==="panic"&&S&&S.state!=="panic"||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}this.camTarget=c;let h=this.camYaw;c&&n.alive?h=Math.atan2(c.x-r,c.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?h=n.yaw:n.alive||(h=this.camYaw+t*.3);let f=c&&Math.hypot(c.x-r,c.z-a)<2.4*c.S,u=o==="battle"?c?1:1.8:o==="horse"?1.8:f?.6:c?2.5:1.2;this.camYaw=e?h:this.camYaw+en(h-this.camYaw)*cn(u,t);let d=this.H>this.W,p=d?4:4.1,x=d?3.5:2.6,g=1.9,m=d?.55:.8;o==="horse"&&(p=d?6.8:6.2,x=d?5.2:4.2,g=3.5,m=1.2),o==="battle"&&(p=d?8.5:7.5,x=d?6.5:5.2,g=5,m=1.2),this.titanMode&&(p=d?9.5:8.5,x=d?4.5:3.6,g=7,m=3+l*.5);let v=Math.sin(this.camYaw),w=Math.cos(this.camYaw);Nn.set(r-v*p,x+l*(this.titanMode?.85:1),a-w*p),e?this.camera.position.copy(Nn):this.camera.position.lerp(Nn,cn(7,t));let y=Nn.set(r+v*g,m+(this.titanMode?l*.5:o==="horse"||o==="battle"?0:l),a+w*g);e?this.lookAt.copy(y):this.lookAt.lerp(y,cn(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}updateRope(){this.placeRope(this.ropeMesh,this.player);let t=0;for(let e of this.allies)if(!(!e.flyer||!e.alive||!e.rope)){if(t>=this.allyRopes.length){let n=new Pt(this.ropeMesh.geometry,this.ropeMesh.material);n.frustumCulled=!1,this.scene.add(n),this.allyRopes.push(n)}this.placeRope(this.allyRopes[t++],e)}for(;t<this.allyRopes.length;t++)this.allyRopes[t].visible=!1}placeRope(t,e){let n=e.alive?e.rope:null;if(!n){t.visible=!1;return}let i=n.anchor(),r=e.rag.pts[U.NECK];Nn.set(i.x-r.x,i.y-r.y,i.z-r.z);let a=Nn.length()||.001;t.visible=!0,t.position.set(r.x,r.y,r.z),t.scale.set(1,a,1),t.quaternion.setFromUnitVectors(qv,Nn.multiplyScalar(1/a))}project(t,e,n){return Nn.set(t,e,n).project(this.camera),Nn.z>1?null:{x:(Nn.x+1)/2*this.W,y:(1-Nn.y)/2*this.H}}render(t){for(let i of this.chars)if(i.view.update(t),i.alive&&i.hasSword&&i.swordMesh){let r=i.sw;if(Nl(i.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz),i.hasSword2&&i.sword2Mesh){let a=i.sw2;Nl(i.sword2Mesh,a.gx,a.gy,a.gz,a.dx,a.dy,a.dz,a.wx,a.wy,a.wz)}}for(let i of this.loose)i.render();for(let i of this.horses)i.render();this.updateRope(),this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[U.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT,this.player,this.spec.env==="grid"||this.spec.env==="ice"?this.spec.env:this.spec.type)}};function Yv(s){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(s)}var Zl=null;try{Zl=new Yl}catch(s){Yv(s)}if(Zl){window.game=Zl;let s=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-s)/1e3));s=e,document.hidden||Zl.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t),document.addEventListener("visibilitychange",()=>{document.hidden?ne.suspend():(ne.resume(),s=performance.now())})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
