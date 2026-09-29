(()=>{var Uu=0,Cc=1,Fu=2;var Xi=1,zu=2,zs=3,wi=0,Ne=1,ln=2,Hn=0,Os=1,Ic=2,Pc=3,Lc=4,Ou=5;var qi=100,Bu=101,ku=102,Hu=103,Vu=104,Gu=200,Wu=201,Xu=202,qu=203,Nc=204,Dc=205,Yu=206,Zu=207,Ku=208,Ju=209,$u=210,ju=211,Qu=212,td=213,ed=214,Wa=0,Xa=1,qa=2,vs=3,Ya=4,Za=5,Ka=6,Ja=7,Ao=0,nd=1,id=2,En=0,Uc=1,Fc=2,zc=3,Yr=4,Oc=5,Bc=6,kc=7;var Hc=300,Ei=301,Yi=302,Ro=303,Co=304,Zr=306,Qn=1e3,Dn=1001,$a=1002,ze=1003,sd=1004;var Kr=1005;var ke=1006,Io=1007;var Ti=1008;var tn=1009,Vc=1010,Gc=1011,Bs=1012,Po=1013,Tn=1014,fn=1015,An=1016,Lo=1017,No=1018,ks=1020,Wc=35902,Xc=35899,qc=1021,Yc=1022,pn=1023,Fn=1026,Ai=1027,Do=1028,Uo=1029,Ri=1030,Fo=1031;var zo=1033,Jr=33776,$r=33777,jr=33778,Qr=33779,Oo=35840,Bo=35841,ko=35842,Ho=35843,Vo=36196,Go=37492,Wo=37496,Xo=37488,qo=37489,ta=37490,Yo=37491,Zo=37808,Ko=37809,Jo=37810,$o=37811,jo=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,sl=37818,rl=37819,al=37820,ol=37821,ll=36492,cl=36494,hl=36495,ul=36283,dl=36284,ea=36285,fl=36286;var pr=2300,ja=2301,Va=2302,mc=2303,gc=2400,xc=2401,_c=2402;var rd=3200;var na=0,ad=1,si="",Oe="srgb",mr="srgb-linear",gr="linear",de="srgb";var Ga=7680;var od=519,ld=512,cd=513,hd=514,pl=515,ud=516,dd=517,ml=518,fd=519,Zc=35044,Hs=35048;var Kc="300 es",Sn=2e3,Ms=2001;function Wf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=xr("canvas");return i.style.display="block",i}var Qh={},Ss=null;function _r(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function md(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=md(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=md(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ki(...i){let t=i.join(" ");t in Qh||(Qh[t]=!0,Gt(...i))}function gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xd={[Wa]:Xa,[qa]:Ka,[Ya]:Ja,[vs]:Za,[Xa]:Wa,[Ka]:qa,[Ja]:Ya,[Za]:vs},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,hr=Math.PI/180,bs=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Jc(i,t){return(i%t+t)%t}function qf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Yf(i,t,e){return i!==t?(e-i)/(t-i):0}function ur(i,t,e){return(1-e)*i+e*t}function Zf(i,t,e,n){return ur(i,t,1-Math.exp(-e*n))}function Kf(i,t=1){return t-Math.abs(Jc(i,t*2)-t)}function Jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function $f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qf(i,t){return i+Math.random()*(t-i)}function tp(i){return i*(.5-Math.random())}function ep(i){i!==void 0&&(tu=i);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function np(i){return i*hr}function ip(i){return i*bs}function sp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $c={DEG2RAD:hr,RAD2DEG:bs,generateUUID:Un,clamp:Qt,euclideanModulo:Jc,mapLinear:qf,inverseLerp:Yf,lerp:ur,damp:Zf,pingpong:Kf,smoothstep:Jf,smootherstep:$f,randInt:jf,randFloat:Qf,randFloatSpread:tp,seededRandom:ep,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:op,normalize:me,denormalize:Mn},ih=class ih{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var at=ih,$e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*x;m<0&&(u=-u,d=-d,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);g=Math.sin(g*M)/w,o=Math.sin(o*M)/w,l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+x*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wl.copy(this).projectOnVector(t),this.sub(Wl)}reflect(t){return this.sub(Wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var I=sh,Wl=new I,eu=new $e,rh=class rh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],M=s[1],w=s[4],_=s[7],S=s[2],b=s[5],R=s[8];return r[0]=a*x+o*M+l*S,r[3]=a*m+o*w+l*b,r[6]=a*g+o*_+l*R,r[1]=c*x+h*M+f*S,r[4]=c*m+h*w+f*b,r[7]=c*g+h*_+f*R,r[2]=u*x+d*M+p*S,r[5]=u*m+d*w+p*b,r[8]=u*g+d*_+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(t,e)),this}rotate(t){return ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-t)),this}translate(t,e){return ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var Zt=rh,Xl=new Zt,nu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[mr]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:t,whitePoint:n,transfer:de,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}}),i}var ae=lp();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=xr("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cp=0,ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Qa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var hp=0,Yl=new I,Ze=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=ke,a=Ti,o=pn,l=tn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Un(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Hc;Ze.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(d+1)/2,S=(g+1)/2,b=(h+u)/4,R=(f+x)/4,y=(p+m)/4;return w>_&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=R/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var we=ah,to=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends to{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var eo=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var To=class To{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new To().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(up,t,dp)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),di.crossVectors(n,sn),di.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),di.crossVectors(n,sn)),di.normalize(),ma.crossVectors(sn,di),s[0]=di.x,s[4]=ma.x,s[8]=sn.x,s[1]=di.y,s[5]=ma.y,s[9]=sn.y,s[2]=di.z,s[6]=ma.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],M=n[3],w=n[7],_=n[11],S=n[15],b=s[0],R=s[4],y=s[8],T=s[12],A=s[1],L=s[5],D=s[9],O=s[13],P=s[2],F=s[6],V=s[10],H=s[14],tt=s[3],X=s[7],j=s[11],et=s[15];return r[0]=a*b+o*A+l*P+c*tt,r[4]=a*R+o*L+l*F+c*X,r[8]=a*y+o*D+l*V+c*j,r[12]=a*T+o*O+l*H+c*et,r[1]=h*b+f*A+u*P+d*tt,r[5]=h*R+f*L+u*F+d*X,r[9]=h*y+f*D+u*V+d*j,r[13]=h*T+f*O+u*H+d*et,r[2]=p*b+x*A+m*P+g*tt,r[6]=p*R+x*L+m*F+g*X,r[10]=p*y+x*D+m*V+g*j,r[14]=p*T+x*O+m*H+g*et,r[3]=M*b+w*A+_*P+S*tt,r[7]=M*R+w*L+_*F+S*X,r[11]=M*y+w*D+_*V+S*j,r[15]=M*T+w*O+_*H+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],M=l*d-c*u,w=o*d-c*f,_=o*u-l*f,S=a*d-c*h,b=a*u-l*h,R=a*f-o*h;return e*(x*M-m*w+g*_)-n*(p*M-m*S+g*b)+s*(p*w-x*S+g*R)-r*(p*_-x*b+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=e*o-n*a,w=e*l-s*a,_=e*c-r*a,S=n*l-s*o,b=n*c-r*o,R=s*c-r*l,y=h*x-f*p,T=h*m-u*p,A=h*g-d*p,L=f*m-u*x,D=f*g-d*x,O=u*g-d*m,P=M*O-w*D+_*L+S*A-b*T+R*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return t[0]=(o*O-l*D+c*L)*F,t[1]=(s*D-n*O-r*L)*F,t[2]=(x*R-m*b+g*S)*F,t[3]=(u*b-f*R-d*S)*F,t[4]=(l*A-a*O-c*T)*F,t[5]=(e*O-s*A+r*T)*F,t[6]=(m*_-p*R-g*w)*F,t[7]=(h*R-u*_+d*w)*F,t[8]=(a*D-o*A+c*y)*F,t[9]=(n*A-e*D-r*y)*F,t[10]=(p*b-x*_+g*M)*F,t[11]=(f*_-h*b-d*M)*F,t[12]=(o*T-a*L-l*y)*F,t[13]=(e*L-n*T+s*y)*F,t[14]=(x*w-p*S-m*M)*F,t[15]=(h*S-f*w+u*M)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,x=a*h,m=a*f,g=o*f,M=l*c,w=l*h,_=l*f,S=n.x,b=n.y,R=n.z;return s[0]=(1-(x+g))*S,s[1]=(d+_)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(u+g))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(p+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let c=1/a,h=1/o,f=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Sn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Sn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Sn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};To.prototype.isMatrix4=!0;var ne=To,ns=new I,xn=new ne,up=new I(0,0,0),dp=new I(1,1,1),di=new I,ma=new I,sn=new I,su=new ne,ru=new $e,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fp=0,au=new I,is=new $e,qn=new ne,ga=new I,tr=new I,pp=new I,mp=new $e,ou=new I(1,0,0),lu=new I(0,1,0),cu=new I(0,0,1),hu={type:"added"},gp={type:"removed"},ss={type:"childadded",child:null},Zl={type:"childremoved",child:null},Pe=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new On,n=new $e,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Zt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return au.copy(t).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(tr,ga,this.up):qn.lookAt(ga,tr,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(qn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),ss.child=t,this.dispatchEvent(ss),ss.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gp),Zl.child=t,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,t,pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new I(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},xp={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},xa={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=Jc(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kl(a,r,t+1/3),this.g=Kl(a,r,t),this.b=Kl(a,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){let n=_d[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return ae.workingToColorSpace(Ge.copy(this),t),Math.round(Qt(Ge.r*255,0,255))*65536+Math.round(Qt(Ge.g*255,0,255))*256+Math.round(Qt(Ge.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=Oe){ae.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(xa);let n=ur(fi.h,xa.h,e),s=ur(fi.s,xa.s,e),r=ur(fi.l,xa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Ot;Ot.NAMES=_d;var vr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hi=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},_n=new I,Yn=new I,Jl=new I,Zn=new I,rs=new I,as=new I,uu=new I,$l=new I,jl=new I,Ql=new I,tc=new we,ec=new we,nc=new we,$n=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Yn.subVectors(n,e),Jl.subVectors(t,e);let a=_n.dot(_n),o=_n.dot(Yn),l=_n.dot(Jl),c=Yn.dot(Yn),h=Yn.dot(Jl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return tc.setScalar(0),ec.setScalar(0),nc.setScalar(0),tc.fromBufferAttribute(t,e),ec.fromBufferAttribute(t,n),nc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Yn.subVectors(t,e),_n.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),$l.subVectors(t,n);let l=rs.dot($l),c=as.dot($l);if(l<=0&&c<=0)return e.copy(n);jl.subVectors(t,s);let h=rs.dot(jl),f=as.dot(jl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Ql.subVectors(t,r);let d=rs.dot(Ql),p=as.dot(Ql);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(as,o);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return uu.subVectors(r,s),o=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(uu,o);let g=1/(m+x+u);return a=x*g,o=u*g,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(er),ya.subVectors(this.max,er),os.subVectors(t.a,er),ls.subVectors(t.b,er),cs.subVectors(t.c,er),pi.subVectors(ls,os),mi.subVectors(cs,ls),Ui.subVectors(os,cs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ui.z,Ui.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ui.z,0,-Ui.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ui.y,Ui.x,0];return!ic(e,os,ls,cs,ya)||(e=[1,0,0,0,1,0,0,0,1],!ic(e,os,ls,cs,ya))?!1:(va.crossVectors(pi,mi),e=[va.x,va.y,va.z],ic(e,os,ls,cs,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new I,new I,new I,new I,new I,new I,new I,new I],yn=new I,_a=new Bn,os=new I,ls=new I,cs=new I,pi=new I,mi=new I,Ui=new I,er=new I,ya=new I,va=new I,Fi=new I;function ic(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=t.dot(Fi),c=e.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ie=new I,Ma=new at,_p=0,Te=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_p++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ma.fromBufferAttribute(this,e),Ma.applyMatrix3(t),this.setXY(e,Ma.x,Ma.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Mr=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Sr=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},yp=new Bn,nr=new I,sc=new I,ti=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;nr.subVectors(t,this.center);let e=nr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(nr.copy(t.center).add(sc)),this.expandByPoint(nr.copy(t.center).sub(sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vp=0,dn=new ne,rc=new Pe,hs=new I,rn=new Bn,ir=new Bn,Fe=new I,ye=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wf(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return rc.lookAt(t),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new oe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(rn.min,ir.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,ir.max),rn.expandByPoint(Fe)):(rn.expandByPoint(ir.min),rn.expandByPoint(ir.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Fe.add(hs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new I,l[y]=new I;let c=new I,h=new I,f=new I,u=new at,d=new at,p=new at,x=new I,m=new I;function g(y,T,A){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),o[y].add(x),o[T].add(x),o[A].add(x),l[y].add(m),l[T].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,T=M.length;y<T;++y){let A=M[y],L=A.start,D=A.count;for(let O=L,P=L+D;O<P;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new I,_=new I,S=new I,b=new I;function R(y){S.fromBufferAttribute(s,y),b.copy(S);let T=o[y];w.copy(T),w.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(b,T);let L=_.dot(l[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,L)}for(let y=0,T=M.length;y<T;++y){let A=M[y],L=A.start,D=A.count;for(let O=L,P=L+D;O<P;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,f=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Te(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},br=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zc,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ye=new I,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){_r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ac=new I,Mp=new I,Sp=new Zt,vn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ac.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sp.getNormalMatrix(t),s=this.coplanarPoint(ac).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bp=0,bn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=Os,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Dc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ga,this.stencilZFail=Ga,this.stencilZPass=Ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},xi=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,sr=new I,ds=new I,fs=new I,ps=new at,rr=new at,yd=new ne,Sa=new I,ar=new I,ba=new I,du=new at,oc=new at,fu=new at,Vi=class extends Pe{constructor(t=new xi){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new br(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new As(n,3,0,!1)),us.setAttribute("uv",new As(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;wa(Sa.set(-.5,-.5,0),fs,a,ds,s,r),wa(ar.set(.5,-.5,0),fs,a,ds,s,r),wa(ba.set(.5,.5,0),fs,a,ds,s,r),du.set(0,0),oc.set(1,0),fu.set(1,1);let o=t.ray.intersectTriangle(Sa,ar,ba,!1,sr);if(o===null&&(wa(ar.set(-.5,.5,0),fs,a,ds,s,r),oc.set(0,1),o=t.ray.intersectTriangle(Sa,ba,ar,!1,sr),o===null))return;let l=t.ray.origin.distanceTo(sr);l<t.near||l>t.far||e.push({distance:l,point:sr.clone(),uv:$n.getInterpolation(sr,Sa,ar,ba,du,oc,fu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wa(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(rr.x=r*ps.x-s*ps.y,rr.y=s*ps.x+r*ps.y):rr.copy(ps),i.copy(t),i.x+=rr.x,i.y+=rr.y,i.applyMatrix4(yd)}var Jn=new I,lc=new I,Ea=new I,Ta=new I,Rs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(lc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ea),o=Ta.dot(this.direction),l=-Ta.dot(Ea),c=Ta.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lc).addScaledVector(Ea,u),d}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,w=n.z-a.z,_=Math.abs(l),S=Math.abs(c),b=Math.abs(h),R,y,T,A,L,D,O,P,F,V,H,tt;if(_>=S&&_>=b?(T=l,D=f,F=p,tt=g,l>=0?(R=c,y=h,A=u,L=d,O=x,P=m,V=M,H=w):(R=h,y=c,A=d,L=u,O=m,P=x,V=w,H=M)):S>=b?(T=c,D=u,F=x,tt=M,c>=0?(R=h,y=l,A=d,L=f,O=m,P=p,V=w,H=g):(R=l,y=h,A=f,L=d,O=p,P=m,V=g,H=w)):(T=h,D=d,F=m,tt=w,h>=0?(R=l,y=c,A=f,L=u,O=p,P=x,V=g,H=M):(R=c,y=l,A=u,L=f,O=x,P=p,V=M,H=g)),T===0)return null;let X=R/T,j=y/T,et=1/T,Ct=A-X*D,wt=L-j*D,ee=O-X*F,Yt=P-j*F,ie=V-X*tt,Z=H-j*tt,it=ie*Yt-Z*ee,vt=Ct*Z-wt*ie,Wt=ee*wt-Yt*Ct;if(s){if(it<0||vt<0||Wt<0)return null}else if((it<0||vt<0||Wt<0)&&(it>0||vt>0||Wt>0))return null;let Tt=it+vt+Wt;if(Tt===0)return null;let Xt=et*(it*D+vt*F+Wt*tt);return(Tt>0?Xt<0:Xt>0)?null:this.at(Xt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},pu=new ne,zi=new Rs,Aa=new ti,mu=new I,Ra=new I,Ca=new I,Ia=new I,cc=new I,Pa=new I,gu=new I,La=new I,Lt=class extends Pe{constructor(t=new ye,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(cc.fromBufferAttribute(f,t),a?Pa.addScaledVector(cc,h):Pa.addScaledVector(cc.sub(e),h))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Aa.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Aa,mu)===null||zi.origin.distanceToSquared(mu)>(t.far-t.near)**2))&&(pu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(pu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,S=w;_<S;_+=3){let b=o.getX(_),R=o.getX(_+1),y=o.getX(_+2);s=Na(this,g,t,n,c,h,f,b,R,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let M=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=Na(this,a,t,n,c,h,f,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,S=w;_<S;_+=3){let b=_,R=_+1,y=_+2;s=Na(this,g,t,n,c,h,f,b,R,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let M=m,w=m+1,_=m+2;s=Na(this,a,t,n,c,h,f,M,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wp(i,t,e,n,s,r,a,o){let l;if(t.side===Ne?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;La.copy(o),La.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(La);return c<e.near||c>e.far?null:{distance:c,point:La.clone(),object:i}}function Na(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ra),i.getVertexPosition(l,Ca),i.getVertexPosition(c,Ia);let h=wp(i,t,e,n,Ra,Ca,Ia,gu);if(h){let f=new I;$n.getBarycoord(gu,Ra,Ca,Ia,f),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,f,new at)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,f,new at)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};$n.getNormal(Ra,Ca,Ia,u.normal),h.face=u,h.barycoord=f}return h}var wr=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ze,h=ze,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new ne,xu=new ne,Da=[],_u=new Bn,Ep=new ne,or=new Lt,lr=new ti,kn=class extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ep)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),_u.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(_u)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),lr.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(lr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lr.copy(this.boundingSphere),lr.applyMatrix4(n),t.ray.intersectsSphere(lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),xu.multiplyMatrices(n,ms),or.matrixWorld=xu,or.raycast(t,Da);for(let a=0,o=Da.length;a<o;a++){let l=Da[a];l.instanceId=r,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wr(new Float32Array(s*this.count),s,this.count,Do,fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oi=new ti,Tp=new at(.5,.5),Ua=new I,Is=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],M=r[12],w=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,d-h,g-p,S-M).normalize(),s[1].setComponents(c+a,d+h,g+p,S+M).normalize(),s[2].setComponents(c+o,d+f,g+x,S+w).normalize(),s[3].setComponents(c-o,d-f,g-x,S-w).normalize(),n)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,d-u,g-m,S-_).normalize();else if(s[4].setComponents(c-l,d-u,g-m,S-_).normalize(),e===Sn)s[5].setComponents(c+l,d+u,g+m,S+_).normalize();else if(e===Ms)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=Tp.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ua.x=s.normal.x>0?t.max.x:t.min.x,Ua.y=s.normal.y>0?t.max.y:t.min.y,Ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ni=class extends bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yu=new ne,yc=new Rs,Fa=new ti,za=new I,Er=class extends Pe{constructor(t=new ye,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,t.ray.intersectsSphere(Fa)===!1)return;yu.copy(s).invert(),yc.copy(t.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++){let m=c.getX(p);za.fromBufferAttribute(f,m),vu(za,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,x=d;p<x;p++)za.fromBufferAttribute(f,p),vu(za,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vu(i,t,e,n,s,r,a){let o=yc.distanceSqToPoint(i);if(o<e){let l=new I;yc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Tr=class extends Ze{constructor(t=[],e=Ei,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gi=class extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends Ze{constructor(t,e,n=Tn,s,r,a,o=ze,l=ze,c,h=Fn,f=1){if(h!==Fn&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},no=class extends _i{constructor(t,e=Tn,n=Ei,s,r,a=ze,o=ze,l,c=Fn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ar=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Le=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function p(x,m,g,M,w,_,S,b,R,y,T){let A=_/R,L=S/y,D=_/2,O=S/2,P=b/2,F=R+1,V=y+1,H=0,tt=0,X=new I;for(let j=0;j<V;j++){let et=j*L-O;for(let Ct=0;Ct<F;Ct++){let wt=Ct*A-D;X[x]=wt*M,X[m]=et*w,X[g]=P,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[g]=b>0?1:-1,h.push(X.x,X.y,X.z),f.push(Ct/R),f.push(1-j/y),H+=1}}for(let j=0;j<y;j++)for(let et=0;et<R;et++){let Ct=u+et+F*j,wt=u+et+F*(j+1),ee=u+(et+1)+F*(j+1),Yt=u+(et+1)+F*j;l.push(Ct,wt,Yt),l.push(wt,ee,Yt),tt+=6}o.addGroup(d,tt,T),d+=tt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ii=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,p=n*2+r,x=s+1,m=new I,g=new I;for(let M=0;M<=p;M++){let w=0,_=0,S=0,b=0;if(M<=n){let T=M/n,A=T*Math.PI/2;_=-h-t*Math.cos(A),S=t*Math.sin(A),b=-t*Math.cos(A),w=T*f}else if(M<=n+r){let T=(M-n)/r;_=-h+T*e,S=t,b=0,w=f+T*u}else{let T=(M-n-r)/n,A=T*Math.PI/2;_=h+t*Math.sin(A),S=t*Math.cos(A),b=t*Math.sin(A),w=f+u+T*f}let R=Math.max(0,Math.min(1,w/d)),y=0;M===0?y=.5/s:M===p&&(y=-.5/s);for(let T=0;T<=s;T++){let A=T/s,L=A*Math.PI*2,D=Math.sin(L),O=Math.cos(L);g.x=-S*O,g.y=_,g.z=S*D,o.push(g.x,g.y,g.z),m.set(-S*O,b,S*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(A+y,R)}if(M>0){let T=(M-1)*x;for(let A=0;A<s;A++){let L=T+A,D=T+A+1,O=M*x+A,P=M*x+A+1;a.push(L,D,O),a.push(D,P,O)}}}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Rr=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],m=n/2,g=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function M(){let _=new I,S=new I,b=0,R=(e-t)/n;for(let y=0;y<=r;y++){let T=[],A=y/r,L=A*(e-t)+t;for(let D=0;D<=s;D++){let O=D/s,P=O*l+o,F=Math.sin(P),V=Math.cos(P);S.x=L*F,S.y=-A*n+m,S.z=L*V,f.push(S.x,S.y,S.z),_.set(F,R,V).normalize(),u.push(_.x,_.y,_.z),d.push(O,1-A),T.push(p++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let A=x[T][y],L=x[T+1][y],D=x[T+1][y+1],O=x[T][y+1];(t>0||T!==0)&&(h.push(A,L,O),b+=3),(e>0||T!==r-1)&&(h.push(L,D,O),b+=3)}c.addGroup(g,b,0),g+=b}function w(_){let S=p,b=new at,R=new I,y=0,T=_===!0?t:e,A=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,m*A,0),u.push(0,A,0),d.push(.5,.5),p++;let L=p;for(let D=0;D<=s;D++){let P=D/s*l+o,F=Math.cos(P),V=Math.sin(P);R.x=T*V,R.y=m*A,R.z=T*F,f.push(R.x,R.y,R.z),u.push(0,A,0),b.x=F*.5+.5,b.y=V*.5*A+.5,d.push(b.x,b.y),p++}for(let D=0;D<s;D++){let O=S+D,P=L+D;_===!0?h.push(P,P+1,O):h.push(P+1,P,O),y+=3}c.addGroup(g,y,_===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},yi=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},io=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new I,_=new I,S=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],_),d(e[b+2],S),l(w,_,S,M)}function l(M,w,_,S){let b=S+1,R=[];for(let y=0;y<=b;y++){R[y]=[];let T=M.clone().lerp(_,y/b),A=w.clone().lerp(_,y/b),L=b-y;for(let D=0;D<=L;D++)D===0&&y===b?R[y][D]=T:R[y][D]=T.clone().lerp(A,D/L)}for(let y=0;y<b;y++)for(let T=0;T<2*(b-y)-1;T++){let A=Math.floor(T/2);T%2===0?(u(R[y][A+1]),u(R[y+1][A]),u(R[y][A])):(u(R[y][A+1]),u(R[y+1][A+1]),u(R[y+1][A]))}}function c(M){let w=new I;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(M),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let M=new I;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let _=m(M)/2/Math.PI+.5,S=g(M)/Math.PI+.5;a.push(_,1-S)}p(),f()}function f(){for(let M=0;M<a.length;M+=6){let w=a[M+0],_=a[M+2],S=a[M+4],b=Math.max(w,_,S),R=Math.min(w,_,S);b>.9&&R<.1&&(w<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,w){let _=M*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function p(){let M=new I,w=new I,_=new I,S=new I,b=new at,R=new at,y=new at;for(let T=0,A=0;T<r.length;T+=9,A+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),b.set(a[A+0],a[A+1]),R.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),S.copy(M).add(w).add(_).divideScalar(3);let L=m(S);x(b,A+0,M,L),x(R,A+2,w,L),x(y,A+4,_,L)}}function x(M,w,_,S){S<0&&M.x===1&&(a[w]=M.x-1),_.x===0&&_.z===0&&(a[w]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ps=class i extends io{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ne;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ls=class extends an{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},so=class extends Ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Mu=new I,Su=new I,hc=new jc,uc=new jc,dc=new jc,ro=class extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Su.subVectors(s[0],s[1]).add(s[0]),c=Su);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),hc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,m),uc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,m),dc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),uc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),dc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(hc.calc(l),uc.calc(l),dc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Ap(i,t){let e=1-i;return e*e*t}function Rp(i,t){return 2*(1-i)*i*t}function Cp(i,t){return i*i*t}function dr(i,t,e,n){return Ap(i,t)+Rp(i,e)+Cp(i,n)}function Ip(i,t){let e=1-i;return e*e*e*t}function Pp(i,t){let e=1-i;return 3*e*e*i*t}function Lp(i,t){return 3*(1-i)*i*i*t}function Np(i,t){return i*i*i*t}function fr(i,t,e,n,s){return Ip(i,t)+Pp(i,e)+Lp(i,n)+Np(i,s)}var Cr=class extends an{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,s.x,r.x,a.x,o.x),fr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ao=class extends an{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(fr(t,s.x,r.x,a.x,o.x),fr(t,s.y,r.y,a.y,o.y),fr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends an{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends an{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends an{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(t,s.x,r.x,a.x),dr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lo=class extends an{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(dr(t,s.x,r.x,a.x),dr(t,s.y,r.y,a.y),dr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(bu(o,l.x,c.x,h.x,f.x),bu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},vc=Object.freeze({__proto__:null,ArcCurve:so,CatmullRomCurve3:ro,CubicBezierCurve:Cr,CubicBezierCurve3:ao,EllipseCurve:Ls,LineCurve:Ir,LineCurve3:oo,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:lo,SplineCurve:Lr}),co=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vc[s.type]().fromJSON(s))}return this}},Nr=class extends co{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ir(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Pr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Cr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ns=class extends Nr{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Nr().fromJSON(s))}return this}};function Dp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=vd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Bp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],p=i[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Dr(r,a,e,o,l,c,0),a}function vd(i,t,e,n,s){let r;if(s===Jp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wu(a/n|0,i[a],i[a+1],r);return r&&Ds(r,r.next)&&(Fr(r),r=r.next),r}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ds(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Fp(i,n,s,r):Up(i)){t.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=zp(Wi(i),t),Dr(i,t,e,n,s,r,2)):a===2&&Op(i,t,e,n,s,r):Dr(Wi(i),t,e,n,s,r,1);break}}}function Up(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&cr(s,o,r,l,a,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Fp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),x=Math.max(o,l,c),m=Math.max(h,f,u),g=Mc(d,p,t,e,n),M=Mc(x,m,t,e,n),w=i.prevZ,_=i.nextZ;for(;w&&w.z>=g&&_&&_.z<=M;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&cr(o,h,l,f,c,u,w.x,w.y)&&Ee(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&cr(o,h,l,f,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==a&&cr(o,h,l,f,c,u,w.x,w.y)&&Ee(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==a&&cr(o,h,l,f,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function zp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ds(n,s)&&Sd(n,e,e.next,s)&&Ur(n,s)&&Ur(s,n)&&(t.push(n.i,e.i,s.i),Fr(e),Fr(e.next),e=i=s),e=e.next}while(e!==i);return Wi(e)}function Op(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Yp(a,o)){let l=bd(a,o);a=Wi(a,a.next),l=Wi(l,l.next),Dr(a,t,e,n,s,r,0),Dr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Bp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=vd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(qp(c))}s.sort(kp);for(let r=0;r<s.length;r++)e=Hp(s[r],e);return e}function kp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hp(i,t){let e=Vp(i,t);if(!e)return t;let n=bd(e,i);return Wi(n,n.next),Wi(e,e.next)}function Vp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ds(i,e))return e;do{if(Ds(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Ur(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Gp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Gp(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Wp(i,t,e,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Mc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Md(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function cr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Md(i,t,e,n,s,r,a,o)}function Yp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Zp(i,t)&&(Ur(i,t)&&Ur(t,i)&&Kp(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Ds(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ds(i,t){return i.x===t.x&&i.y===t.y}function Sd(i,t,e,n){let s=Ba(Ee(i,t,e)),r=Ba(Ee(i,t,n)),a=Ba(Ee(e,n,i)),o=Ba(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Oa(i,e,t)||r===0&&Oa(i,n,t)||a===0&&Oa(e,i,n)||o===0&&Oa(e,t,n))}function Oa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ba(i){return i>0?1:i<0?-1:0}function Zp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ur(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Kp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bd(i,t){let e=Sc(i.i,i.x,i.y),n=Sc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wu(i,t,e,n){let s=Sc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bc=class{static triangulate(t,e,n=2){return Dp(t,e,n)}},Bi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Eu(t),Tu(n,t);let a=t.length;e.forEach(Eu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Tu(n,e[l]);let o=bc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Eu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var zr=class i extends ye{constructor(t=new Ns([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:$p,w,_=!1,S,b,R,y;if(g){w=g.getSpacedPoints(h),_=!0,u=!1;let st=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,st),b=new I,R=new I,y=new I}u||(m=0,d=0,p=0,x=0);let T=o.extractPoints(c),A=T.shape,L=T.holes;if(!Bi.isClockWise(A)){A=A.reverse();for(let st=0,ot=L.length;st<ot;st++){let lt=L[st];Bi.isClockWise(lt)&&(L[st]=lt.reverse())}}function O(st){let lt=10000000000000001e-36,ct=st[0];for(let ft=1;ft<=st.length;ft++){let kt=ft%st.length,Bt=st[kt],qt=Bt.x-ct.x,Kt=Bt.y-ct.y,N=qt*qt+Kt*Kt,ce=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ct.x),Math.abs(ct.y)),se=lt*ce*ce;if(N<=se){st.splice(kt,1),ft--;continue}ct=Bt}}O(A),L.forEach(O);let P=L.length,F=A;for(let st=0;st<P;st++){let ot=L[st];A=A.concat(ot)}function V(st,ot,lt){return ot||Vt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ot,lt)}let H=A.length;function tt(st,ot,lt){let ct,ft,kt,Bt=st.x-ot.x,qt=st.y-ot.y,Kt=lt.x-st.x,N=lt.y-st.y,ce=Bt*Bt+qt*qt,se=Bt*N-qt*Kt;if(Math.abs(se)>Number.EPSILON){let C=Math.sqrt(ce),v=Math.sqrt(Kt*Kt+N*N),B=ot.x-qt/C,q=ot.y+Bt/C,K=lt.x-N/v,ht=lt.y+Kt/v,dt=((K-B)*N-(ht-q)*Kt)/(Bt*N-qt*Kt);ct=B+Bt*dt-st.x,ft=q+qt*dt-st.y;let J=ct*ct+ft*ft;if(J<=2)return new at(ct,ft);kt=Math.sqrt(J/2)}else{let C=!1;Bt>Number.EPSILON?Kt>Number.EPSILON&&(C=!0):Bt<-Number.EPSILON?Kt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(N)&&(C=!0),C?(ct=-qt,ft=Bt,kt=Math.sqrt(ce)):(ct=Bt,ft=qt,kt=Math.sqrt(ce/2))}return new at(ct/kt,ft/kt)}let X=[];for(let st=0,ot=F.length,lt=ot-1,ct=st+1;st<ot;st++,lt++,ct++)lt===ot&&(lt=0),ct===ot&&(ct=0),X[st]=tt(F[st],F[lt],F[ct]);let j=[],et,Ct=X.concat();for(let st=0,ot=P;st<ot;st++){let lt=L[st];et=[];for(let ct=0,ft=lt.length,kt=ft-1,Bt=ct+1;ct<ft;ct++,kt++,Bt++)kt===ft&&(kt=0),Bt===ft&&(Bt=0),et[ct]=tt(lt[ct],lt[kt],lt[Bt]);j.push(et),Ct=Ct.concat(et)}let wt;if(m===0)wt=Bi.triangulateShape(F,L);else{let st=[],ot=[];for(let lt=0;lt<m;lt++){let ct=lt/m,ft=d*Math.cos(ct*Math.PI/2),kt=p*Math.sin(ct*Math.PI/2)+x;for(let Bt=0,qt=F.length;Bt<qt;Bt++){let Kt=V(F[Bt],X[Bt],kt);vt(Kt.x,Kt.y,-ft),ct===0&&st.push(Kt)}for(let Bt=0,qt=P;Bt<qt;Bt++){let Kt=L[Bt];et=j[Bt];let N=[];for(let ce=0,se=Kt.length;ce<se;ce++){let C=V(Kt[ce],et[ce],kt);vt(C.x,C.y,-ft),ct===0&&N.push(C)}ct===0&&ot.push(N)}}wt=Bi.triangulateShape(st,ot)}let ee=wt.length,Yt=p+x;for(let st=0;st<H;st++){let ot=u?V(A[st],Ct[st],Yt):A[st];_?(R.copy(S.normals[0]).multiplyScalar(ot.x),b.copy(S.binormals[0]).multiplyScalar(ot.y),y.copy(w[0]).add(R).add(b),vt(y.x,y.y,y.z)):vt(ot.x,ot.y,0)}for(let st=1;st<=h;st++)for(let ot=0;ot<H;ot++){let lt=u?V(A[ot],Ct[ot],Yt):A[ot];_?(R.copy(S.normals[st]).multiplyScalar(lt.x),b.copy(S.binormals[st]).multiplyScalar(lt.y),y.copy(w[st]).add(R).add(b),vt(y.x,y.y,y.z)):vt(lt.x,lt.y,f/h*st)}for(let st=m-1;st>=0;st--){let ot=st/m,lt=d*Math.cos(ot*Math.PI/2),ct=p*Math.sin(ot*Math.PI/2)+x;for(let ft=0,kt=F.length;ft<kt;ft++){let Bt=V(F[ft],X[ft],ct);vt(Bt.x,Bt.y,f+lt)}for(let ft=0,kt=L.length;ft<kt;ft++){let Bt=L[ft];et=j[ft];for(let qt=0,Kt=Bt.length;qt<Kt;qt++){let N=V(Bt[qt],et[qt],ct);_?vt(N.x,N.y+w[h-1].y,w[h-1].x+lt):vt(N.x,N.y,f+lt)}}}ie(),Z();function ie(){let st=s.length/3;if(u){let ot=0,lt=H*ot;for(let ct=0;ct<ee;ct++){let ft=wt[ct];Wt(ft[2]+lt,ft[1]+lt,ft[0]+lt)}ot=h+m*2,lt=H*ot;for(let ct=0;ct<ee;ct++){let ft=wt[ct];Wt(ft[0]+lt,ft[1]+lt,ft[2]+lt)}}else{for(let ot=0;ot<ee;ot++){let lt=wt[ot];Wt(lt[2],lt[1],lt[0])}for(let ot=0;ot<ee;ot++){let lt=wt[ot];Wt(lt[0]+H*h,lt[1]+H*h,lt[2]+H*h)}}n.addGroup(st,s.length/3-st,0)}function Z(){let st=s.length/3,ot=0;it(F,ot),ot+=F.length;for(let lt=0,ct=L.length;lt<ct;lt++){let ft=L[lt];it(ft,ot),ot+=ft.length}n.addGroup(st,s.length/3-st,1)}function it(st,ot){let lt=st.length;for(;--lt>=0;){let ct=lt,ft=lt-1;ft<0&&(ft=st.length-1);for(let kt=0,Bt=h+m*2;kt<Bt;kt++){let qt=H*kt,Kt=H*(kt+1),N=ot+ct+qt,ce=ot+ft+qt,se=ot+ft+Kt,C=ot+ct+Kt;Tt(N,ce,se,C)}}}function vt(st,ot,lt){l.push(st),l.push(ot),l.push(lt)}function Wt(st,ot,lt){Xt(st),Xt(ot),Xt(lt);let ct=s.length/3,ft=M.generateTopUV(n,s,ct-3,ct-2,ct-1);pe(ft[0]),pe(ft[1]),pe(ft[2])}function Tt(st,ot,lt,ct){Xt(st),Xt(ot),Xt(ct),Xt(ot),Xt(lt),Xt(ct);let ft=s.length/3,kt=M.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);pe(kt[0]),pe(kt[1]),pe(kt[3]),pe(kt[1]),pe(kt[2]),pe(kt[3])}function Xt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function pe(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vc[s.type]().fromJSON(s)),new i(n,t.options)}},$p={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-f),new at(u,1-p),new at(x,1-g)]:[new at(o,1-l),new at(h,1-f),new at(d,1-p),new at(m,1-g)]}};function jp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Or=class i extends ye{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new I,u=new at,d=new I,p=new I,x=new I,m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let M=0;M<=e;M++){let w=n+M*h*s,_=Math.sin(w),S=Math.cos(w);for(let b=0;b<=t.length-1;b++){f.x=t[b].x*_,f.y=t[b].y,f.z=t[b].x*S,a.push(f.x,f.y,f.z),u.x=M/e,u.y=b/(t.length-1),o.push(u.x,u.y);let R=l[3*b+0]*_,y=l[3*b+1],T=l[3*b+0]*S;c.push(R,y,T)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let _=w+M*t.length,S=_,b=_+t.length,R=_+t.length+1,y=_+1;r.push(S,b,y),r.push(R,y,b)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var wn=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let M=g*u-a;for(let w=0;w<c;w++){let _=w*f-r;p.push(_,-M,0),x.push(0,0,1),m.push(w/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){let w=M+c*g,_=M+c*(g+1),S=M+1+c*(g+1),b=M+1+c*g;d.push(w,_,b),d.push(_,S,b)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Qe=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new I,u=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let M=[],w=g/n,_=a+w*o,S=t*Math.cos(_),b=Math.sqrt(t*t-S*S),R=0;g===0&&a===0?R=.5/e:g===n&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let T=y/e,A=s+T*r;f.x=-b*Math.cos(A),f.y=S,f.z=b*Math.sin(A),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(T+R,1-w),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let w=h[g][M+1],_=h[g][M],S=h[g+1][M],b=h[g+1][M+1];(g!==0||a>0)&&d.push(w,_,b),(g!==n-1||l<Math.PI)&&d.push(_,S,b)}this.setIndex(d),this.setAttribute("position",new oe(p,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Au(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var gl={clone:Zi,merge:Xe},tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tm,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ho=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$t=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vi=class extends $t{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Br=class extends bn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},uo=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function fc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},po=class extends Mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xc:r=t,o=2*e-n;break;case _c:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xc:a=t,l=2*n-e;break;case _c:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,_=d*m-d*x;for(let S=0;S!==o;++S)r[S]=g*a[h+S]+M*a[c+S]+w*a[l+S]+_*a[f+S];return r}},mo=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},go=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xo=class extends Mi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,d=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=d*u+p*2,M=f[g],w=f[g+1],_=t*u+p*2,S=h[_],b=h[_+1],R=im(n,e,M,S,s);r[p]=wd(R,x,w,b,m)}return r}};function wd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function nm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function im(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=wd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=nm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),fc(t.settings)&&(n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new go(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case pr:e=this.InterpolantFactoryMethodDiscrete;break;case ja:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break;case mc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;fc(this.settings)&&(Ru(this.settings.inTangents,t),Ru(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Va,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[u+p]||x!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,fc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ru(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=ja;var Si=class extends on{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=pr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};_o.prototype.ValueTypeName="color";var yo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="number";var vo=class extends Mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)$e.slerpFlat(r,0,a,c-o,a,c,l);return r}},kr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}};kr.prototype.ValueTypeName="quaternion";kr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends on{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=pr;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Mo.prototype.ValueTypeName="vector";var So=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new So,bo=class{constructor(t){this.manager=t!==void 0?t:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Hr=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},pc=new ne,Cu=new I,Iu=new I,Vr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(pc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ka=new I,Ha=new $e,Nn=new I,Gr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ka,Ha,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ha,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ka,Ha,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ka,Ha,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gi=new I,Pu=new at,Lu=new at,Be=class extends Gr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var wc=class extends Vr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Fs=class extends Gr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ec=class extends Vr{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Ec}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,_s=1,wo=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Be(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new Be(xs,_s,t,e);a.layers=this.layers,this.add(a);let o=new Be(xs,_s,t,e);o.layers=this.layers,this.add(o);let l=new Be(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Be(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Eo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var th="\\[\\]\\.:\\/",sm=new RegExp("["+th+"]","g"),eh="[^"+th+"]",rm="[^"+th.replace("\\.","")+"]",am=/((?:WC+[\/:])*)/.source.replace("WC",eh),om=/(WCOD+)?/.source.replace("WCOD",rm),lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),cm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),hm=new RegExp("^"+am+om+lm+cm+"$"),um=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sm,"")}static parseTrackName(t){let e=hm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);um.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Tc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yv=new Float32Array(1);var Nu=new ne,qr=class{constructor(t,e,n=0,s=1/0){this.ray=new Rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Du),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Du),n}};function Du(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],t,e,!0)}}var oh=class oh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Rc=oh;function nh(i,t,e,n){let s=dm(n);switch(e){case qc:return i*t;case Do:return i*t/s.components*s.byteLength;case Uo:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case Fo:return i*t*2/s.components*s.byteLength;case Yc:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case zo:return i*t*4/s.components*s.byteLength;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bo:case Ho:return Math.max(i,16)*Math.max(t,8)/4;case Oo:case ko:return Math.max(i,8)*Math.max(t,8)/2;case Vo:case Go:case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case ta:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case el:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case al:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ol:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ll:case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ul:case dl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dm(i){switch(i){case tn:case Vc:return{byteLength:1,components:1};case Bs:case Gc:case An:return{byteLength:2,components:1};case Lo:case No:return{byteLength:2,components:4};case Tn:case Po:case fn:return{byteLength:4,components:1};case Wc:case Xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
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
#endif`,Am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
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
#endif`,Lm=`#ifdef USE_BUMPMAP
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hm=`#define PI 3.141592653589793
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
} // validated`,Vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Km=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,x0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,U0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,V0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ng=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ig=`float getShadowMask() {
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
}`,sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ug=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_TRANSMISSION
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yg=`uniform sampler2D t2D;
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Eg=`#if DEPTH_PACKING == 3200
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`#define DISTANCE
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`uniform float scale;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Ug=`#define LAMBERT
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
}`,Fg=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define NORMAL
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
}`,kg=`#define PHONG
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
}`,Hg=`#define PHONG
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define STANDARD
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
}`,Wg=`#define TOON
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
}`,Xg=`#define TOON
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
}`,qg=`uniform float size;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:_m,alphahash_pars_fragment:ym,alphamap_fragment:vm,alphamap_pars_fragment:Mm,alphatest_fragment:Sm,alphatest_pars_fragment:bm,aomap_fragment:wm,aomap_pars_fragment:Em,batching_pars_vertex:Tm,batching_vertex:Am,begin_vertex:Rm,beginnormal_vertex:Cm,bsdfs:Im,iridescence_fragment:Pm,bumpmap_pars_fragment:Lm,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Um,clipping_planes_vertex:Fm,color_fragment:zm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:km,common:Hm,cube_uv_reflection_fragment:Vm,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:Km,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:h0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:x0,lights_fragment_maps:_0,lights_fragment_end:y0,lightprobes_pars_fragment:v0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:w0,map_fragment:E0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:I0,morphinstance_vertex:P0,morphcolor_vertex:L0,morphnormal_vertex:N0,morphtarget_pars_vertex:D0,morphtarget_vertex:U0,normal_fragment_begin:F0,normal_fragment_maps:z0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:k0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:V0,clearcoat_normal_fragment_maps:G0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:Z0,project_vertex:K0,dithering_fragment:J0,dithering_pars_fragment:$0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tg,shadowmap_pars_vertex:eg,shadowmap_vertex:ng,shadowmask_pars_fragment:ig,skinbase_vertex:sg,skinning_pars_vertex:rg,skinning_vertex:ag,skinnormal_vertex:og,specularmap_fragment:lg,specularmap_pars_fragment:cg,tonemapping_fragment:hg,tonemapping_pars_fragment:ug,transmission_fragment:dg,transmission_pars_fragment:fg,uv_pars_fragment:pg,uv_pars_vertex:mg,uv_vertex:gg,worldpos_vertex:xg,background_vert:_g,background_frag:yg,backgroundCube_vert:vg,backgroundCube_frag:Mg,cube_vert:Sg,cube_frag:bg,depth_vert:wg,depth_frag:Eg,distance_vert:Tg,distance_frag:Ag,equirect_vert:Rg,equirect_frag:Cg,linedashed_vert:Ig,linedashed_frag:Pg,meshbasic_vert:Lg,meshbasic_frag:Ng,meshlambert_vert:Dg,meshlambert_frag:Ug,meshmatcap_vert:Fg,meshmatcap_frag:zg,meshnormal_vert:Og,meshnormal_frag:Bg,meshphong_vert:kg,meshphong_frag:Hg,meshphysical_vert:Vg,meshphysical_frag:Gg,meshtoon_vert:Wg,meshtoon_frag:Xg,points_vert:qg,points_frag:Yg,shadow_vert:Zg,shadow_frag:Kg,sprite_vert:Jg,sprite_frag:$g},_t={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Gn={basic:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Xe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Xe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Xe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Xe([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Xe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Xe([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Xe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Xe([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Xe([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Xe([_t.lights,_t.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Gn.physical={uniforms:Xe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var xl={r:0,b:0,g:0},jg=new ne,Zd=new Zt;Zd.set(-1,0,0,0,1,0,0,0,1);function Qg(i,t,e,n,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let _=M.backgroundBlurriness>0;w=t.get(w,_)}return w}function p(M){let w=!1,_=d(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let _=d(w);_&&(_.isCubeTexture||_.mapping===Zr)?(c===void 0&&(c=new Lt(new Le(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Zi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jg.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=ae.getTransfer(_.colorSpace)!==de,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new wn(2,2),new We({name:"BackgroundMaterial",uniforms:Zi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,w){M.getRGB(xl,Qc(i)),e.buffers.color.setClear(xl.r,xl.g,xl.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:x,dispose:g}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,D,O,P,F){let V=!1,H=f(L,P,O,D);r!==H&&(r=H,c(r.object)),V=d(L,P,O,F),V&&p(L,P,O,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(L,D,O,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function f(L,D,O,P){let F=P.wireframe===!0,V=n[D.id];V===void 0&&(V={},n[D.id]=V);let H=L.isInstancedMesh===!0?L.id:0,tt=V[H];tt===void 0&&(tt={},V[H]=tt);let X=tt[O.id];X===void 0&&(X={},tt[O.id]=X);let j=X[F];return j===void 0&&(j=u(l()),X[F]=j),j}function u(L){let D=[],O=[],P=[];for(let F=0;F<e;F++)D[F]=0,O[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,D,O,P){let F=r.attributes,V=D.attributes,H=0,tt=O.getAttributes();for(let X in tt)if(tt[X].location>=0){let et=F[X],Ct=V[X];if(Ct===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),et===void 0||et.attribute!==Ct||Ct&&et.data!==Ct.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function p(L,D,O,P){let F={},V=D.attributes,H=0,tt=O.getAttributes();for(let X in tt)if(tt[X].location>=0){let et=V[X];et===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let Ct={};Ct.attribute=et,et&&et.data&&(Ct.data=et.data),F[X]=Ct,H++}r.attributes=F,r.attributesNum=H,r.index=P}function x(){let L=r.newAttributes;for(let D=0,O=L.length;D<O;D++)L[D]=0}function m(L){g(L,0)}function g(L,D){let O=r.newAttributes,P=r.enabledAttributes,F=r.attributeDivisors;O[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),F[L]!==D&&(i.vertexAttribDivisor(L,D),F[L]=D)}function M(){let L=r.newAttributes,D=r.enabledAttributes;for(let O=0,P=D.length;O<P;O++)D[O]!==L[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function w(L,D,O,P,F,V,H){H===!0?i.vertexAttribIPointer(L,D,O,F,V):i.vertexAttribPointer(L,D,O,P,F,V)}function _(L,D,O,P){x();let F=P.attributes,V=O.getAttributes(),H=D.defaultAttributeValues;for(let tt in V){let X=V[tt];if(X.location>=0){let j=F[tt];if(j===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){let et=j.normalized,Ct=j.itemSize,wt=t.get(j);if(wt===void 0)continue;let ee=wt.buffer,Yt=wt.type,ie=wt.bytesPerElement,Z=Yt===i.INT||Yt===i.UNSIGNED_INT||j.gpuType===Po;if(j.isInterleavedBufferAttribute){let it=j.data,vt=it.stride,Wt=j.offset;if(it.isInstancedInterleavedBuffer){for(let Tt=0;Tt<X.locationSize;Tt++)g(X.location+Tt,it.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)m(X.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Tt=0;Tt<X.locationSize;Tt++)w(X.location+Tt,Ct/X.locationSize,Yt,et,vt*ie,(Wt+Ct/X.locationSize*Tt)*ie,Z)}else{if(j.isInstancedBufferAttribute){for(let it=0;it<X.locationSize;it++)g(X.location+it,j.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let it=0;it<X.locationSize;it++)m(X.location+it);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let it=0;it<X.locationSize;it++)w(X.location+it,Ct/X.locationSize,Yt,et,Ct*ie,Ct/X.locationSize*it*ie,Z)}}else if(H!==void 0){let et=H[tt];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(X.location,et);break;case 3:i.vertexAttrib3fv(X.location,et);break;case 4:i.vertexAttrib4fv(X.location,et);break;default:i.vertexAttrib1fv(X.location,et)}}}}M()}function S(){T();for(let L in n){let D=n[L];for(let O in D){let P=D[O];for(let F in P){let V=P[F];for(let H in V)h(V[H].object),delete V[H];delete P[F]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let O in D){let P=D[O];for(let F in P){let V=P[F];for(let H in V)h(V[H].object),delete V[H];delete P[F]}}delete n[L.id]}function R(L){for(let D in n){let O=n[D];for(let P in O){let F=O[P];if(F[L.id]===void 0)continue;let V=F[L.id];for(let H in V)h(V[H].object),delete V[H];delete F[L.id]}}}function y(L){for(let D in n){let O=n[D],P=L.isInstancedMesh===!0?L.id:0,F=O[P];if(F!==void 0){for(let V in F){let H=F[V];for(let tt in H)h(H[tt].object),delete H[tt];delete F[V]}delete O[P],Object.keys(O).length===0&&delete n[D]}}}function T(){A(),a=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==tn&&R!==fn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:_,maxSamples:S,samples:b}}function ix(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,w=M*4,_=g.clippingState||null;l.value=_,_=h(p,u,w,d);for(let S=0;S!==w;++S)_[S]=e[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=d;w!==x;++w,_+=4)a.copy(f[w]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Gs=4,sx=6,rx=20,ax=256,ia=new Fs,Td=new Ot,lh=null,ch=0,hh=0,uh=!1,ox=new I,Ki=new I,Xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ox}=r;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(lh,ch,hh),this._renderer.xr.enabled=uh,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:An,format:pn,colorSpace:mr,depthBuffer:!1},s=Ad(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=hx(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){let e=new Lt(new ye,t);this._renderer.compile(e,ia)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Td),f.toneMapping=En,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new Le,new ei({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(Td),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Vs(s,_*S,w>2?S:0,S,S),f.setRenderTarget(s),g&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ei||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ia)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Gs?n-p+Gs:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Vs(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(o,ia),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Vs(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(o,ia)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),u=4*(this._cubeSize-h);Vs(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ia)}};function lx(i){let t=[],e=[],n=i,s=i-Gs+1+sx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let g=0;g<f;g++){let M=g%3*2/3-1,w=g>2?0:-1,_=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(_,d*u*g);for(let S=0;S<u;S++){let b=h[S*2]*2-1,R=h[S*2+1]*2-1;g===0?Ki.set(1,R,b):g===1?Ki.set(-b,1,-R):g===2?Ki.set(-b,R,1):g===3?Ki.set(-1,R,-b):g===4?Ki.set(-b,-1,R):Ki.set(b,R,-1),Ki.toArray(x,(g*u+S)*d)}}let m=new ye;m.setAttribute("position",new Te(p,d)),m.setAttribute("outputDirection",new Te(x,d)),e.push(new Lt(m,null)),n>Gs&&n--}return{lodMeshes:e,sizeLods:t}}function Ad(i,t,e){let n=new je(i,t,e);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cx(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function hx(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Rd(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ml(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Cd(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yl=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Hn});r.uniforms.tEquirect.value=e;let a=new Lt(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=ke),new wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Ro||d===Co)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new yl(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===Ro||d===Co,x=d===Ei||d===Yi;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Xs(i)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Xs(i)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Ro?u.mapping=Ei:d===Co&&(u.mapping=Yi),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function dx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ki("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let w=0,_=M.length;w<_;w+=3){let S=M[w+0],b=M[w+1],R=M[w+2];u.push(S,b,b,R,R,S)}}else{let M=p.array;x=p.version;for(let w=0,_=M.length/3-1;w<_;w+=3){let S=w+0,b=w+1,R=w+2;u.push(S,b,b,R,R,S)}}let m=new(p.count>=65535?Sr:Mr)(u,1);m.version=x;let g=r.get(f);g&&t.remove(g),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function px(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){let n=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=o.attributes.position.count*w,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let b=new Float32Array(_*S*4*f),R=new yr(b,_,S,f);R.type=fn,R.needsUpdate=!0;let y=w*4;for(let A=0;A<f;A++){let L=m[A],D=g[A],O=M[A],P=_*S*4*A;for(let F=0;F<L.count;F++){let V=F*y;d===!0&&(s.fromBufferAttribute(L,F),b[P+V+0]=s.x,b[P+V+1]=s.y,b[P+V+2]=s.z,b[P+V+3]=0),p===!0&&(s.fromBufferAttribute(D,F),b[P+V+4]=s.x,b[P+V+5]=s.y,b[P+V+6]=s.z,b[P+V+7]=0),x===!0&&(s.fromBufferAttribute(O,F),b[P+V+8]=s.x,b[P+V+9]=s.y,b[P+V+10]=s.z,b[P+V+11]=O.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new at(_,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _x={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[zc]:"CINEON_TONE_MAPPING",[Yr]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function yx(i,t,e,n,s,r){let a=new je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ye;c.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new oe([0,2,0,0,2,0],2));let h=new ho({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Lt(c,h),u=new Fs(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,M=[],w=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let b=0;b<M.length;b++){let R=M[b];R.setSize&&R.setSize(_,S)}},this.setEffects=function(_){M=_,w=M.length>0&&M[0].isRenderPass===!0;let S=a.width,b=a.height;M.length>0&&o===null&&(o=new je(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new je(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let y=M[R];y.setSize&&y.setSize(S,b)}},this.begin=function(_,S){if(x||_.toneMapping===En&&M.length===0)return!1;if(g=S,S!==null){let b=S.width,R=S.height;(a.width!==b||a.height!==R)&&this.setSize(b,R)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=En,!0},this.hasRenderPass=function(){return w},this.end=function(_,S){_.toneMapping=m,x=!0;let b=a,R=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(_,R,b,S),T.needsSwap!==!1&&(b=R,R=R===o?l:o))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},ae.getTransfer(d)===de&&(h.defines.SRGB_TRANSFER="");let y=_x[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(g),_.render(f,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Kd=new Ze,ph=new _i(1,1),Jd=new yr,$d=new eo,jd=new Tr,Id=[],Pd=[],Ld=new Float32Array(16),Nd=new Float32Array(9),Dd=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sl(i,t){let e=Pd[t];e===void 0&&(e=new Int32Array(t),Pd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Dd.set(n),i.uniformMatrix2fv(this.addr,!1,Dd),Ue(e,n)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),Ue(e,n)}}function Tx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ld.set(n),i.uniformMatrix4fv(this.addr,!1,Ld),Ue(e,n)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ph.compareFunction=e.isReversedDepthBuffer()?ml:pl,r=ph):r=Kd,e.setTexture2D(t||r,s)}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$d,s)}function zx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jd,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Jd,s)}function Bx(i){switch(i){case 5126:return vx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return wx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Lx;case 36295:return Nx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Ox}}function kx(i,t){i.uniform1fv(this.addr,t)}function Hx(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Vx(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Gx(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qx(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yx(i,t){i.uniform1iv(this.addr,t)}function Zx(i,t){i.uniform2iv(this.addr,t)}function Kx(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function $x(i,t){i.uniform1uiv(this.addr,t)}function jx(i,t){i.uniform2uiv(this.addr,t)}function Qx(i,t){i.uniform3uiv(this.addr,t)}function t_(i,t){i.uniform4uiv(this.addr,t)}function e_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ph:a=Kd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function n_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$d,r[a])}function i_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jd,r[a])}function s_(i,t,e){let n=this.cache,s=t.length,r=Sl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Jd,r[a])}function r_(i){switch(i){case 5126:return kx;case 35664:return Hx;case 35665:return Vx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return Zx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return $x;case 36294:return jx;case 36295:return Qx;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}var mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}},gh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r_(e.type)}},xh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Ud(i,t){i.seq.push(t),i.map[t.id]=t}function a_(i,t,e){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ud(e,c===void 0?new mh(o,i,t):new gh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new xh(o),Ud(e,f)),e=f}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);a_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Fd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o_=37297,l_=0;function c_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zd=new Zt;function h_(i){ae._getMatrix(zd,ae.workingColorSpace,i);let t=`mat3( ${zd.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case gr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Od(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+c_(i.getShaderSource(t),o)}else return r}function u_(i,t){let e=h_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var d_={[Uc]:"Linear",[Fc]:"Reinhard",[zc]:"Cineon",[Yr]:"ACESFilmic",[Bc]:"AgX",[kc]:"Neutral",[Oc]:"Custom"};function f_(i,t){let e=d_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _l=new I;function p_(){ae.getLuminanceCoefficients(_l);let i=_l.x.toFixed(4),t=_l.y.toFixed(4),e=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function g_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ra(i){return i!==""}function Bd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var __=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(__,v_)}var y_=new Map;function v_(i,t){let e=te[t];if(e===void 0){let n=y_.get(t);if(n!==void 0)e=te[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _h(e)}var M_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(M_,S_)}function S_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var b_={[Xi]:"SHADOWMAP_TYPE_PCF",[zs]:"SHADOWMAP_TYPE_VSM"};function w_(i){return b_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E_={[Ei]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE_UV"};function T_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":E_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A_={[Yi]:"ENVMAP_MODE_REFRACTION"};function R_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C_={[Ao]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function I_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C_[i.combine]||"ENVMAP_BLENDING_NONE"}function P_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=w_(e),c=T_(e),h=R_(e),f=I_(e),u=P_(e),d=m_(e),p=g_(r),x=s.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ra).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ra).join(`
`),g.length>0&&(g+=`
`)):(m=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),g=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?te.tonemapping_pars_fragment:"",e.toneMapping!==En?f_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,u_("linearToOutputTexel",e.outputColorSpace),p_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=_h(a),a=Bd(a,e),a=kd(a,e),o=_h(o),o=Bd(o,e),o=kd(o,e),a=Hd(a),o=Hd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=M+m+a,_=M+g+o,S=Fd(s,s.VERTEX_SHADER,w),b=Fd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(S)||"",P=s.getShaderInfoLog(b)||"",F=D.trim(),V=O.trim(),H=P.trim(),tt=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let j=Od(s,S,"vertex"),et=Od(s,b,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+j+`
`+et)}else F!==""?Gt("WebGLProgram: Program Info Log:",F):(V===""||H==="")&&(X=!1);X&&(L.diagnostics={runnable:tt,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(S),s.deleteShader(b),y=new Ws(s,x),T=x_(s,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,o_)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var N_=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vh(t),e.set(t,n)),n}},vh=class{constructor(t){this.id=N_++,this.code=t,this.usedTimes=0}};function D_(i){return i===Ri||i===ta||i===ea}function U_(i,t,e,n,s,r){let a=new Es,o=new yh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,A,L,D,O){let P=L.fog,F=D.geometry,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,tt=t.get(y.envMap||V,H),X=tt&&tt.mapping===Zr?tt.image.height:null,j=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Gt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ct=et!==void 0?et.length:0,wt=0;F.morphAttributes.position!==void 0&&(wt=1),F.morphAttributes.normal!==void 0&&(wt=2),F.morphAttributes.color!==void 0&&(wt=3);let ee,Yt,ie,Z;if(j){let ve=Gn[j];ee=ve.vertexShader,Yt=ve.fragmentShader}else{ee=y.vertexShader,Yt=y.fragmentShader;let ve=o.getVertexShaderStage(y),he=o.getFragmentShaderStage(y);o.update(y,ve,he),ie=ve.id,Z=he.id}let it=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Wt=D.isInstancedMesh===!0,Tt=D.isBatchedMesh===!0,Xt=!!y.map,pe=!!y.matcap,st=!!tt,ot=!!y.aoMap,lt=!!y.lightMap,ct=!!y.bumpMap&&y.wireframe===!1,ft=!!y.normalMap,kt=!!y.displacementMap,Bt=!!y.emissiveMap,qt=!!y.metalnessMap,Kt=!!y.roughnessMap,N=y.anisotropy>0,ce=y.clearcoat>0,se=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,B=y.sheen>0,q=y.transmission>0,K=N&&!!y.anisotropyMap,ht=ce&&!!y.clearcoatMap,dt=ce&&!!y.clearcoatNormalMap,J=ce&&!!y.clearcoatRoughnessMap,nt=v&&!!y.iridescenceMap,pt=v&&!!y.iridescenceThicknessMap,Ut=B&&!!y.sheenColorMap,yt=B&&!!y.sheenRoughnessMap,mt=!!y.specularMap,Ft=!!y.specularColorMap,Ht=!!y.specularIntensityMap,Jt=q&&!!y.transmissionMap,z=q&&!!y.thicknessMap,gt=!!y.gradientMap,Q=!!y.alphaMap,xt=y.alphaTest>0,Et=!!y.alphaHash,rt=!!y.extensions,zt=En;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Nt={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Yt,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&D._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&D.instanceColor!==null,instancingMorph:Wt&&D.morphTexture!==null,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:pe,envMap:st,envMapMode:st&&tt.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:lt,bumpMap:ct,normalMap:ft,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:ft&&y.normalMapType===ad,normalMapTangentSpace:ft&&y.normalMapType===na,packedNormalMap:ft&&y.normalMapType===na&&D_(y.normalMap.format),metalnessMap:qt,roughnessMap:Kt,anisotropy:N,anisotropyMap:K,clearcoat:ce,clearcoatMap:ht,clearcoatNormalMap:dt,clearcoatRoughnessMap:J,dispersion:se,retroreflection:C,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:pt,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:mt,specularColorMap:Ft,specularIntensityMap:Ht,transmission:q,transmissionMap:Jt,thicknessMap:z,gradientMap:gt,opaque:y.transparent===!1&&y.blending===Os&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:xt,alphaHash:Et,combine:y.combine,mapUv:Xt&&p(y.map.channel),aoMapUv:ot&&p(y.aoMap.channel),lightMapUv:lt&&p(y.lightMap.channel),bumpMapUv:ct&&p(y.bumpMap.channel),normalMapUv:ft&&p(y.normalMap.channel),displacementMapUv:kt&&p(y.displacementMap.channel),emissiveMapUv:Bt&&p(y.emissiveMap.channel),metalnessMapUv:qt&&p(y.metalnessMap.channel),roughnessMapUv:Kt&&p(y.roughnessMap.channel),anisotropyMapUv:K&&p(y.anisotropyMap.channel),clearcoatMapUv:ht&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(y.sheenRoughnessMap.channel),specularMapUv:mt&&p(y.specularMap.channel),specularColorMapUv:Ft&&p(y.specularColorMap.channel),specularIntensityMapUv:Ht&&p(y.specularIntensityMap.channel),transmissionMapUv:Jt&&p(y.transmissionMap.channel),thicknessMapUv:z&&p(y.thicknessMap.channel),alphaMapUv:Q&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ft||N),vertexNormals:!!F.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Xt||Q),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||F.attributes.normal===void 0&&ft===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Ne,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)T.push(A),T.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(g(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let T=d[y.type],A;if(T){let L=Gn[T];A=gl.clone(L.uniforms)}else A=y.uniforms;return A}function _(y,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new L_(i,T,y,s),c.push(A),h.set(T,A)),A}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:R}}function F_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function z_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,x,m,g){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},i[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,d,p,x,m,g,M){M.reversedDepth===!0&&(m=-m);let w=o(u,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,d,p,x,m,g){let M=o(u,d,p,x,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||z_),n.length>1&&n.sort(d||Gd),s.length>1&&s.sort(d||Gd)}function f(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function O_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Wd,i.set(n,[a])):s>=r.length?(a=new Wd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ot};break;case"SpotLight":e={position:new I,direction:new I,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function k_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var H_=0;function V_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G_(i){let t=new B_,e=k_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ne,a=new ne;function o(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,M=0,w=0,_=0,S=0,b=0,R=0,y=0,T=0,A=0;c.sort(V_);for(let D=0,O=c.length;D<O;D++){let P=c[D],F=P.color,V=P.intensity,H=P.distance,tt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ri?tt=P.shadow.map.texture:tt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*V,f+=F.g*V,u+=F.b*V;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],V);A++}else if(P.isSunLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,et=e.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=et,n.sunShadowMap[p]=tt;let Ct=j.getViewportCount();for(let wt=0;wt<Ct;wt++)n.sunShadowMatrix[x+wt]=j.getMatrix(wt),n.sunShadowCascade[x+wt]=j._cascadeData[wt];x+=Ct,p++}n.sun[d]=X,d++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,et=e.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.directionalShadow[m]=et,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=P.shadow.matrix,S++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(V),X.distance=H,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;let j=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=j.matrix,P.castShadow){let et=e.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=tt,R++}M++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(F).multiplyScalar(V),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=X,w++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let j=P.shadow,et=e.get(P);et.shadowIntensity=j.intensity,et.shadowBias=j.bias,et.shadowNormalBias=j.normalBias,et.shadowRadius=j.radius,et.shadowMapSize=j.mapSize,et.shadowCameraNear=j.camera.near,et.shadowCameraFar=j.camera.far,n.pointShadow[g]=et,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(V),X.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[_]=X,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==_||L.numSunShadows!==p||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=_,L.numSunShadows=p,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=y,L.numLightProbes=A,n.version=H_++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let _=c[M];if(_.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),f++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Xd(i){let t=new G_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function W_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Xd(i),t.set(s,[o])):r>=a.length?(o=new Xd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`,Y_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Z_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qd=new ne,sa=new I,fh=new I;function K_(i,t,e){let n=new Is,s=new at,r=new at,a=new we,o=new uo,l=new fo,c={},h=e.maxTextureSize,f={[wi]:Ne,[Ne]:wi,[ln]:ln},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Lt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xi;let g=this.type;this.render=function(b,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===zu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Xi);let T=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Hn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=g!==this.type;O&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=b.length;P<F;P++){let V=b[P],H=V.shadow;if(H===void 0){Gt("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let tt=H.getFrameExtents();s.multiply(tt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===zs){if(V.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new je(s.x,s.y,{format:Ri,type:An,minFilter:ke,magFilter:ke,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new _i(s.x,s.y,fn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Fn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze}else V.isPointLight?(H.map=new yl(s.x),H.map.depthTexture=new no(s.x,Tn)):(H.map=new je(s.x,s.y),H.map.depthTexture=new _i(s.x,s.y,Tn)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Fn,this.type===Xi?(H.map.depthTexture.compareFunction=X?ml:pl,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,y);for(let et=0;et<j;et++){let Ct=H.getCamera(et);if(V.isPointLight){let wt=H.camera,ee=H.matrix,Yt=V.distance||wt.far;Yt!==wt.far&&(wt.far=Yt,wt.updateProjectionMatrix()),sa.setFromMatrixPosition(V.matrixWorld),wt.position.copy(sa),fh.copy(wt.position),fh.add(Y_[et]),wt.up.copy(Z_[et]),wt.lookAt(fh),wt.updateMatrixWorld(),ee.makeTranslation(-sa.x,-sa.y,-sa.z),qd.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(qd,wt.coordinateSystem,wt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,et),i.clear();else{et===0&&(i.setRenderTarget(H.map),i.clear());let wt=H.getViewport(et);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),D.viewport(a)}n=H.getFrustum(et),_(R,y,Ct,V,this.type)}H.isPointLightShadow!==!0&&this.type===zs&&M(H,y),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,A,L)};function M(b,R){let y=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new je(s.x,s.y,{format:Ri,type:An}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,y,u,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,y,d,x,null)}function w(b,R,y,T){let A=null,L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=A.uuid,O=R.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let F=P[O];F===void 0&&(F=A.clone(),P[O]=F,R.addEventListener("dispose",S)),A=F}if(A.visible=R.visible,A.wireframe=R.wireframe,T===zs?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:f[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=i.properties.get(A);D.light=y}return A}function _(b,R,y,T,A){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===zs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let O=t.update(b),P=b.material;if(Array.isArray(P)){let F=O.groups;for(let V=0,H=F.length;V<H;V++){let tt=F[V],X=P[tt.materialIndex];if(X&&X.visible){let j=w(b,X,T,A);b.onBeforeShadow(i,b,R,y,O,j,tt),i.renderBufferDirect(y,null,O,j,b,tt),b.onAfterShadow(i,b,R,y,O,j,tt)}}}else if(P.visible){let F=w(b,P,T,A);b.onBeforeShadow(i,b,R,y,O,F,null),i.renderBufferDirect(y,null,O,F,b,null),b.onAfterShadow(i,b,R,y,O,F,null)}}let D=b.children;for(let O=0,P=D.length;O<P;O++)_(D[O],R,y,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let y in c){let T=c[y],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function J_(i,t){function e(){let z=!1,gt=new we,Q=null,xt=new we(0,0,0,0);return{setMask:function(Et){Q!==Et&&!z&&(i.colorMask(Et,Et,Et,Et),Q=Et)},setLocked:function(Et){z=Et},setClear:function(Et,rt,zt,Nt,ve){ve===!0&&(Et*=Nt,rt*=Nt,zt*=Nt),gt.set(Et,rt,zt,Nt),xt.equals(gt)===!1&&(i.clearColor(Et,rt,zt,Nt),xt.copy(gt))},reset:function(){z=!1,Q=null,xt.set(-1,0,0,0)}}}function n(){let z=!1,gt=!1,Q=null,xt=null,Et=null;return{setReversed:function(rt){if(gt!==rt){let zt=t.get("EXT_clip_control");rt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),gt=rt;let Nt=Et;Et=null,this.setClear(Nt)}},getReversed:function(){return gt},setTest:function(rt){rt?it(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(rt){Q!==rt&&!z&&(i.depthMask(rt),Q=rt)},setFunc:function(rt){if(gt&&(rt=xd[rt]),xt!==rt){switch(rt){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){Et!==rt&&(Et=rt,gt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){z=!1,Q=null,xt=null,Et=null,gt=!1}}}function s(){let z=!1,gt=null,Q=null,xt=null,Et=null,rt=null,zt=null,Nt=null,ve=null;return{setTest:function(he){z||(he?it(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(he){gt!==he&&!z&&(i.stencilMask(he),gt=he)},setFunc:function(he,gn,Pn){(Q!==he||xt!==gn||Et!==Pn)&&(i.stencilFunc(he,gn,Pn),Q=he,xt=gn,Et=Pn)},setOp:function(he,gn,Pn){(rt!==he||zt!==gn||Nt!==Pn)&&(i.stencilOp(he,gn,Pn),rt=he,zt=gn,Nt=Pn)},setLocked:function(he){z=he},setClear:function(he){ve!==he&&(i.clearStencil(he),ve=he)},reset:function(){z=!1,gt=null,Q=null,xt=null,Et=null,rt=null,zt=null,Nt=null,ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,m=!1,g=null,M=null,w=null,_=null,S=null,b=null,R=null,y=new Ot(0,0,0),T=0,A=!1,L=null,D=null,O=null,P=null,F=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=tt>=1):X.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=tt>=2);let j=null,et={},Ct=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),ee=new we().fromArray(Ct),Yt=new we().fromArray(wt);function ie(z,gt,Q,xt){let Et=new Uint8Array(4),rt=i.createTexture();i.bindTexture(z,rt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<Q;zt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(gt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return rt}let Z={};Z[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(i.DEPTH_TEST),a.setFunc(vs),ct(!1),ft(Cc),it(i.CULL_FACE),ot(Hn);function it(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function vt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Wt(z,gt){return u[z]!==gt?(i.bindFramebuffer(z,gt),u[z]=gt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Tt(z,gt){let Q=p,xt=!1;if(z){Q=d.get(gt),Q===void 0&&(Q=[],d.set(gt,Q));let Et=z.textures;if(Q.length!==Et.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,zt=Et.length;rt<zt;rt++)Q[rt]=i.COLOR_ATTACHMENT0+rt;Q.length=Et.length,xt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,xt=!0);xt&&i.drawBuffers(Q)}function Xt(z){return x!==z?(i.useProgram(z),x=z,!0):!1}let pe={[qi]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};pe[Hu]=i.MIN,pe[Vu]=i.MAX;let st={[Gu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Ku]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[td]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(z,gt,Q,xt,Et,rt,zt,Nt,ve,he){if(z===Hn){m===!0&&(vt(i.BLEND),m=!1);return}if(m===!1&&(it(i.BLEND),m=!0),z!==Ou){if(z!==g||he!==A){if((M!==qi||S!==qi)&&(i.blendEquation(i.FUNC_ADD),M=qi,S=qi),he)switch(z){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",z);break}else switch(z){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",z);break}w=null,_=null,b=null,R=null,y.set(0,0,0),T=0,g=z,A=he}return}Et=Et||gt,rt=rt||Q,zt=zt||xt,(gt!==M||Et!==S)&&(i.blendEquationSeparate(pe[gt],pe[Et]),M=gt,S=Et),(Q!==w||xt!==_||rt!==b||zt!==R)&&(i.blendFuncSeparate(st[Q],st[xt],st[rt],st[zt]),w=Q,_=xt,b=rt,R=zt),(Nt.equals(y)===!1||ve!==T)&&(i.blendColor(Nt.r,Nt.g,Nt.b,ve),y.copy(Nt),T=ve),g=z,A=!1}function lt(z,gt){z.side===ln?vt(i.CULL_FACE):it(i.CULL_FACE);let Q=z.side===Ne;gt&&(Q=!Q),ct(Q),z.blending===Os&&z.transparent===!1?ot(Hn):ot(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let xt=z.stencilWrite;o.setTest(xt),xt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Bt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(z){L!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),L=z)}function ft(z){z!==Uu?(it(i.CULL_FACE),z!==D&&(z===Cc?i.cullFace(i.BACK):z===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=z}function kt(z){z!==O&&(H&&i.lineWidth(z),O=z)}function Bt(z,gt,Q){z?(it(i.POLYGON_OFFSET_FILL),(P!==gt||F!==Q)&&(P=gt,F=Q,a.getReversed()&&(gt=-gt),i.polygonOffset(gt,Q))):vt(i.POLYGON_OFFSET_FILL)}function qt(z){z?it(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Kt(z){z===void 0&&(z=i.TEXTURE0+V-1),j!==z&&(i.activeTexture(z),j=z)}function N(z,gt,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+V-1:Q=j);let xt=et[Q];xt===void 0&&(xt={type:void 0,texture:void 0},et[Q]=xt),(xt.type!==z||xt.texture!==gt)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(z,gt||Z[z]),xt.type=z,xt.texture=gt)}function ce(){let z=et[j];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function v(){try{i.texSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function B(){try{i.texSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ht(){try{i.texStorage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function dt(){try{i.texStorage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function J(){try{i.texImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function nt(){try{i.texImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function pt(z){return f[z]!==void 0?f[z]:i.getParameter(z)}function Ut(z,gt){f[z]!==gt&&(i.pixelStorei(z,gt),f[z]=gt)}function yt(z){ee.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function mt(z){Yt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Yt.copy(z))}function Ft(z,gt){let Q=c.get(gt);Q===void 0&&(Q=new WeakMap,c.set(gt,Q));let xt=Q.get(z);xt===void 0&&(xt=i.getUniformBlockIndex(gt,z.name),Q.set(z,xt))}function Ht(z,gt){let xt=c.get(gt).get(z);l.get(gt)!==xt&&(i.uniformBlockBinding(gt,xt,z.__bindingPointIndex),l.set(gt,xt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,et={},u={},d=new WeakMap,p=[],x=null,m=!1,g=null,M=null,w=null,_=null,S=null,b=null,R=null,y=new Ot(0,0,0),T=0,A=!1,L=null,D=null,O=null,P=null,F=null,ee.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:vt,bindFramebuffer:Wt,drawBuffers:Tt,useProgram:Xt,setBlending:ot,setMaterial:lt,setFlipSided:ct,setCullFace:ft,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:Kt,bindTexture:N,unbindTexture:ce,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:J,texImage3D:nt,pixelStorei:Ut,getParameter:pt,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:dt,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:K,scissor:yt,viewport:mt,reset:Jt}}function $_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):xr("canvas")}function m(C,v,B){let q=1,K=se(C);if((K.width>B||K.height>B)&&(q=B/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ht=Math.floor(q*K.width),dt=Math.floor(q*K.height);u===void 0&&(u=x(ht,dt));let J=v?x(ht,dt):u;return J.width=ht,J.height=dt,J.getContext("2d").drawImage(C,0,0,ht,dt),Gt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ht+"x"+dt+")."),J}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,B,q,K,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;q&&(dt=t.get("EXT_texture_norm16"),dt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),B===i.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),B===i.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),B===i.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let nt=ht?gr:ae.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=nt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),B===i.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function S(C,v){let B;return C?v===null||v===Tn||v===ks?B=i.DEPTH24_STENCIL8:v===fn?B=i.DEPTH32F_STENCIL8:v===Bs&&(B=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Tn||v===ks?B=i.DEPTH_COMPONENT24:v===fn?B=i.DEPTH_COMPONENT32F:v===Bs&&(B=i.DEPTH_COMPONENT16),B}function b(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){let v=C.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),L(v)}function T(C){let v=n.get(C);if(v.__webglInit===void 0)return;let B=C.source,q=d.get(B);if(q){let K=q[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(C),Object.keys(q).length===0&&d.delete(B)}n.remove(C)}function A(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let B=C.source,q=d.get(B);delete q[v.__cacheKey],a.memory.textures--}function L(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let K=0;K<v.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[q][K]);else i.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)i.deleteFramebuffer(v.__webglFramebuffer[q]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let q=0,K=B.length;q<K;q++){let ht=n.get(B[q]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(B[q])}n.remove(C)}let D=0;function O(){D=0}function P(){return D}function F(C){D=C}function V(){let C=D;return C>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function H(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function tt(C,v){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let q=C.image;if(q===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function X(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function j(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function et(C,v){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Wt(B,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Ct={[Qn]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},wt={[ze]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Io]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},ee={[ld]:i.NEVER,[fd]:i.ALWAYS,[cd]:i.LESS,[pl]:i.LEQUAL,[hd]:i.EQUAL,[ml]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Yt(C,v){if(v.type===fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Io||v.magFilter===Kr||v.magFilter===Ti||v.minFilter===ke||v.minFilter===Io||v.minFilter===Kr||v.minFilter===Ti)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ct[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ct[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ct[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,wt[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,wt[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ee[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ze||v.minFilter!==Kr&&v.minFilter!==Ti||v.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));let q=v.source,K=d.get(q);K===void 0&&(K={},d.set(q,K));let ht=H(v);if(ht!==C.__cacheKey){K[ht]===void 0&&(K[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ht].usedTimes++;let dt=K[C.__cacheKey];dt!==void 0&&(K[C.__cacheKey].usedTimes--,dt.usedTimes===0&&A(v)),C.__cacheKey=ht,C.__webglTexture=K[ht].texture}return B}function Z(C,v,B){return Math.floor(Math.floor(C/B)/v)}function it(C,v,B,q){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,q,v.data);else{ht.sort((Ut,yt)=>Ut.start-yt.start);let dt=0;for(let Ut=1;Ut<ht.length;Ut++){let yt=ht[dt],mt=ht[Ut],Ft=yt.start+yt.count,Ht=Z(mt.start,v.width,4),Jt=Z(yt.start,v.width,4);mt.start<=Ft+1&&Ht===Jt&&Z(mt.start+mt.count-1,v.width,4)===Ht?yt.count=Math.max(yt.count,mt.start+mt.count-yt.start):(++dt,ht[dt]=mt)}ht.length=dt+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ut=0,yt=ht.length;Ut<yt;Ut++){let mt=ht[Ut],Ft=Math.floor(mt.start/4),Ht=Math.ceil(mt.count/4),Jt=Ft%v.width,z=Math.floor(Ft/v.width),gt=Ht,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Jt,z,gt,Q,B,q,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function vt(C,v,B){let q=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=i.TEXTURE_3D);let K=ie(C,v),ht=v.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+B);let dt=n.get(ht);if(ht.version!==dt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let Q=ae.getPrimaries(ae.workingColorSpace),xt=v.colorSpace===si?null:ae.getPrimaries(v.colorSpace),Et=v.colorSpace===si||Q===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=m(v.image,!1,s.maxTextureSize);nt=ce(v,nt);let pt=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),yt=_(v.internalFormat,pt,Ut,v.normalized,v.colorSpace,v.isVideoTexture);Yt(q,v);let mt,Ft=v.mipmaps,Ht=v.isVideoTexture!==!0,Jt=dt.__version===void 0||K===!0,z=ht.dataReady,gt=b(v,nt);if(v.isDepthTexture)yt=S(v.format===Ai,v.type),Jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,yt,nt.width,nt.height,0,pt,Ut,null));else if(v.isDataTexture)if(Ft.length>0){Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,gt,yt,Ft[0].width,Ft[0].height);for(let Q=0,xt=Ft.length;Q<xt;Q++)mt=Ft[Q],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,pt,Ut,mt.data);v.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(i.TEXTURE_2D,gt,yt,nt.width,nt.height),z&&it(v,nt,pt,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,nt.width,nt.height,0,pt,Ut,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,yt,Ft[0].width,Ft[0].height,nt.depth);for(let Q=0,xt=Ft.length;Q<xt;Q++)if(mt=Ft[Q],v.format!==pn)if(pt!==null)if(Ht){if(z)if(v.layerUpdates.size>0){let Et=nh(mt.width,mt.height,v.format,v.type);for(let rt of v.layerUpdates){let zt=mt.data.subarray(rt*Et/mt.data.BYTES_PER_ELEMENT,(rt+1)*Et/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,rt,mt.width,mt.height,1,pt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,mt.width,mt.height,nt.depth,pt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,yt,mt.width,mt.height,nt.depth,0,mt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,mt.width,mt.height,nt.depth,pt,Ut,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,yt,mt.width,mt.height,nt.depth,0,pt,Ut,mt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,gt,yt,Ft[0].width,Ft[0].height);for(let Q=0,xt=Ft.length;Q<xt;Q++)mt=Ft[Q],v.format!==pn?pt!==null?Ht?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,mt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,mt.width,mt.height,pt,Ut,mt.data):e.texImage2D(i.TEXTURE_2D,Q,yt,mt.width,mt.height,0,pt,Ut,mt.data)}else if(v.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,yt,nt.width,nt.height,nt.depth),z)if(v.layerUpdates.size>0){let Q=nh(nt.width,nt.height,v.format,v.type);for(let xt of v.layerUpdates){let Et=nt.data.subarray(xt*Q/nt.data.BYTES_PER_ELEMENT,(xt+1)*Q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,nt.width,nt.height,1,pt,Ut,Et)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(v.isData3DTexture)Ht?(Jt&&e.texStorage3D(i.TEXTURE_3D,gt,yt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,pt,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,yt,nt.width,nt.height,nt.depth,0,pt,Ut,nt.data);else if(v.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,gt,yt,nt.width,nt.height);else{let Q=nt.width,xt=nt.height;for(let Et=0;Et<gt;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,Q,xt,0,pt,Ut,null),Q>>=1,xt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),nt.parentNode!==Q){Q.appendChild(nt),f.add(v),Q.onpaint=xt=>{let Et=xt.changedElements;for(let rt of f)Et.includes(rt.image)&&(rt.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let Et=i.RGBA,rt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,rt,zt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ht&&Jt){let Q=se(Ft[0]);e.texStorage2D(i.TEXTURE_2D,gt,yt,Q.width,Q.height)}for(let Q=0,xt=Ft.length;Q<xt;Q++)mt=Ft[Q],Ht?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,pt,Ut,mt):e.texImage2D(i.TEXTURE_2D,Q,yt,pt,Ut,mt);v.generateMipmaps=!1}else if(Ht){if(Jt){let Q=se(nt);e.texStorage2D(i.TEXTURE_2D,gt,yt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,yt,pt,Ut,nt);g(v)&&M(q),dt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Wt(C,v,B){if(v.image.length!==6)return;let q=ie(C,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let ht=n.get(K);if(K.version!==ht.__version||q===!0){e.activeTexture(i.TEXTURE0+B);let dt=ae.getPrimaries(ae.workingColorSpace),J=v.colorSpace===si?null:ae.getPrimaries(v.colorSpace),nt=v.colorSpace===si||dt===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pt=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!pt&&!Ut?yt[rt]=m(v.image[rt],!0,s.maxCubemapSize):yt[rt]=Ut?v.image[rt].image:v.image[rt],yt[rt]=ce(v,yt[rt]);let mt=yt[0],Ft=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type),Jt=_(v.internalFormat,Ft,Ht,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,gt=ht.__version===void 0||q===!0,Q=K.dataReady,xt=b(v,mt);Yt(i.TEXTURE_CUBE_MAP,v);let Et;if(pt){z&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Jt,mt.width,mt.height);for(let rt=0;rt<6;rt++){Et=yt[rt].mipmaps;for(let zt=0;zt<Et.length;zt++){let Nt=Et[zt];v.format!==pn?Ft!==null?z?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,Nt.width,Nt.height,Ft,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,Jt,Nt.width,Nt.height,0,Nt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,0,0,Nt.width,Nt.height,Ft,Ht,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt,Jt,Nt.width,Nt.height,0,Ft,Ht,Nt.data)}}}else{if(Et=v.mipmaps,z&&gt){Et.length>0&&xt++;let rt=se(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){z?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Ft,Ht,yt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,yt[rt].width,yt[rt].height,0,Ft,Ht,yt[rt].data);for(let zt=0;zt<Et.length;zt++){let ve=Et[zt].image[rt].image;z?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,ve.width,ve.height,Ft,Ht,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,Jt,ve.width,ve.height,0,Ft,Ht,ve.data)}}else{z?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Ht,yt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,Ft,Ht,yt[rt]);for(let zt=0;zt<Et.length;zt++){let Nt=Et[zt];z?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,0,0,Ft,Ht,Nt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,zt+1,Jt,Ft,Ht,Nt.image[rt])}}}g(v)&&M(i.TEXTURE_CUBE_MAP),ht.__version=K.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Tt(C,v,B,q,K,ht){let dt=r.convert(B.format,B.colorSpace),J=r.convert(B.type),nt=_(B.internalFormat,dt,J,B.normalized,B.colorSpace),pt=n.get(v),Ut=n.get(B);if(Ut.__renderTarget=v,!pt.__hasExternalTextures){let yt=Math.max(1,v.width>>ht),mt=Math.max(1,v.height>>ht);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ht,nt,yt,mt,v.depth,0,dt,J,null):e.texImage2D(K,ht,nt,yt,mt,0,dt,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Ut.__webglTexture,0,qt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Ut.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let q=v.depthTexture,K=q&&q.isDepthTexture?q.type:null,ht=S(v.stencilBuffer,K),dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),ht,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,C)}else{let q=v.textures;for(let K=0;K<q.length;K++){let ht=q[K],dt=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),nt=_(ht.internalFormat,dt,J,ht.normalized,ht.colorSpace);Kt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),nt,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),nt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,nt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(C,v,B){let q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,v.depthTexture);let pt=r.convert(v.depthTexture.format),Ut=r.convert(v.depthTexture.type),yt;v.depthTexture.format===Fn?yt=i.DEPTH_COMPONENT24:v.depthTexture.format===Ai&&(yt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,yt,v.width,v.height,0,pt,Ut,null)}}else tt(v.depthTexture,0);let ht=K.__webglTexture,dt=qt(v),J=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,nt=v.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fn)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,J,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,J,ht,0);else if(v.depthTexture.format===Ai)Kt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,J,ht,0,dt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=q}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)pe(v.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?pe(v.__webglFramebuffer[0],C,0):pe(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=i.createRenderbuffer(),Xt(v.__webglDepthbuffer[q],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xt(v.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,v,B){let q=n.get(C);v!==void 0&&Tt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&st(C)}function lt(C){let v=C.texture,B=n.get(C),q=n.get(v);C.addEventListener("dispose",y);let K=C.textures,ht=C.isWebGLCubeRenderTarget===!0,dt=K.length>1;if(dt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=v.version,a.memory.textures++),ht){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let nt=0;nt<v.mipmaps.length;nt++)B.__webglFramebuffer[J][nt]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(dt)for(let J=0,nt=K.length;J<nt;J++){let pt=n.get(K[J]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let nt=K[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let pt=r.convert(nt.format,nt.colorSpace),Ut=r.convert(nt.type),yt=_(nt.internalFormat,pt,Ut,nt.normalized,nt.colorSpace,C.isXRRenderTarget===!0),mt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Yt(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)Tt(B.__webglFramebuffer[J][nt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else Tt(B.__webglFramebuffer[J],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);g(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let J=0,nt=K.length;J<nt;J++){let pt=K[J],Ut=n.get(pt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),Yt(yt,pt),Tt(B.__webglFramebuffer,C,pt,i.COLOR_ATTACHMENT0+J,yt,0),g(pt)&&M(yt)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,q.__webglTexture),Yt(J,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)Tt(B.__webglFramebuffer[nt],C,v,i.COLOR_ATTACHMENT0,J,nt);else Tt(B.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,J,0);g(v)&&M(J),e.unbindTexture()}C.depthBuffer&&st(C)}function ct(C){let v=C.textures;for(let B=0,q=v.length;B<q;B++){let K=v[B];if(g(K)){let ht=w(C),dt=n.get(K).__webglTexture;e.bindTexture(ht,dt),M(ht),e.unbindTexture()}}}let ft=[],kt=[];function Bt(C){if(C.samples>0){if(Kt(C)===!1){let v=C.textures,B=C.width,q=C.height,K=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(C),J=v.length>1;if(J)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let nt=C.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Ut=n.get(v[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,B,q,0,0,B,q,K,i.NEAREST),l===!0&&(ft.length=0,kt.length=0,ft.push(i.COLOR_ATTACHMENT0+pt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(ht),kt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,dt.__webglColorRenderbuffer[pt]);let Ut=n.get(v[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Kt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ce(C,v){let B=C.colorSpace,q=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==mr&&B!==si&&(ae.getTransfer(B)===de?(q!==pn||K!==tn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",B)),v}function se(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=tt,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=et,this.rebindTextures=ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function j_(i,t){function e(n,s=si){let r,a=ae.getTransfer(s);if(n===tn)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===No)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Po)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===qc)return i.ALPHA;if(n===Yc)return i.RGB;if(n===pn)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Do)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Jr||n===$r||n===jr||n===Qr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===ko||n===Ho)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Go||n===Wo||n===Xo||n===qo||n===ta||n===Yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Go)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xo)return r.COMPRESSED_R11_EAC;if(n===qo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Yo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zo||n===Ko||n===Jo||n===$o||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===al)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ol)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ll||n===cl||n===hl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ll)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===dl||n===ea||n===fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ar(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:Q_,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding!="undefined",m=new Mh,g={},M=e.getContextAttributes(),w=null,_=null,S=[],b=[],R=new at,y=null,T=null,A=new Be;A.viewport=new we;let L=new Be;L.viewport=new we;let D=[A,L],O=new Eo,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new Ts,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new Ts,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new Ts,S[Z]=it),it.getHandSpace()};function V(Z){let it=b.indexOf(Z.inputSource);if(it===-1)return;let vt=S[it];vt!==void 0&&(vt.update(Z.inputSource,Z.frame,c||a),vt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",tt);for(let Z=0;Z<S.length;Z++){let it=b[Z];it!==null&&(b[Z]=null,S[Z].disconnect(it))}P=null,F=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(w),d=null,u=null,f=null,s=null,_=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",H),s.addEventListener("inputsourceschange",tt),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Wt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Ai:Fn,Wt=M.stencil?ks:Tn);let Xt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new je(u.textureWidth,u.textureHeight,{format:pn,type:tn,depthTexture:new _i(u.textureWidth,u.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new je(d.framebufferWidth,d.framebufferHeight,{format:pn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Z){for(let it=0;it<Z.removed.length;it++){let vt=Z.removed[it],Wt=b.indexOf(vt);Wt>=0&&(b[Wt]=null,S[Wt].disconnect(vt))}for(let it=0;it<Z.added.length;it++){let vt=Z.added[it],Wt=b.indexOf(vt);if(Wt===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=b.length){b.push(vt),Wt=Xt;break}else if(b[Xt]===null){b[Xt]=vt,Wt=Xt;break}if(Wt===-1)break}let Tt=S[Wt];Tt&&Tt.connect(vt)}}let X=new I,j=new I;function et(Z,it,vt){X.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Wt=X.distanceTo(j),Tt=it.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,pe=Tt[14]/(Tt[10]-1),st=Tt[14]/(Tt[10]+1),ot=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],ct=(Tt[8]-1)/Tt[0],ft=(Xt[8]+1)/Xt[0],kt=pe*ct,Bt=pe*ft,qt=Wt/(-ct+ft),Kt=qt*-ct;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Kt),Z.translateZ(qt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let N=pe+qt,ce=st+qt,se=kt-Kt,C=Bt+(Wt-Kt),v=ot*st/ce*N,B=lt*st/ce*N;Z.projectionMatrix.makePerspective(se,C,v,B,N,ce),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Ct(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,vt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),O.near=L.near=A.near=it,O.far=L.far=A.far=vt,(P!==O.near||F!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),P=O.near,F=O.far),O.layers.mask=Z.layers.mask|6,A.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Wt=Z.parent,Tt=O.cameras;Ct(O,Wt);for(let Xt=0;Xt<Tt.length;Xt++)Ct(Tt[Xt],Wt);Tt.length===2?et(O,A,L):O.projectionMatrix.copy(A.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),wt(Z,O,Wt)};function wt(Z,it,vt){vt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(vt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=bs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return g[Z]};let ee=null;function Yt(Z,it){if(h=it.getViewerPose(c||a),p=it,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Wt=!1;vt.length!==O.cameras.length&&(O.cameras.length=0,Wt=!0);for(let st=0;st<vt.length;st++){let ot=vt[st],lt=null;if(d!==null)lt=d.getViewport(ot);else{let ft=f.getViewSubImage(u,ot);lt=ft.viewport,st===0&&(t.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(_))}let ct=D[st];ct===void 0&&(ct=new Be,ct.layers.enable(st),ct.viewport=new we,D[st]=ct),ct.matrix.fromArray(ot.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ot.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),st===0&&(O.matrix.copy(ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Wt===!0&&O.cameras.push(ct)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let st=f.getDepthInformation(vt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<vt.length;st++){let ot=vt[st].camera;if(ot){let lt=g[ot];lt||(lt=new Ar,g[ot]=lt);let ct=f.getCameraImage(ot);lt.sourceTexture=ct}}}}for(let vt=0;vt<S.length;vt++){let Wt=b[vt],Tt=S[vt];Wt!==null&&Tt!==void 0&&Tt.update(Wt,it,c||a)}ee&&ee(Z,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}let ie=new Yd;ie.setAnimationLoop(Yt),this.setAnimationLoop=function(Z){ee=Z},this.dispose=function(){}}},ey=new ne,Qd=new Zt;Qd.set(-1,0,0,0,1,0,0,0,1);function ny(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Qc(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,M,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ne&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ne&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),w=M.envMap,_=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ne&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let b=S.program;n.uniformBlockBinding(_,b)}function c(_,S){let b=s[_.id];b===void 0&&(m(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",M));let R=S.program;n.updateUBOMapping(_,R);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let S=f();_.__bindingPointIndex=S;let b=i.createBuffer(),R=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],b=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=b.length;y<T;y++){let A=b[y];if(Array.isArray(A))for(let L=0,D=A.length;L<D;L++)d(A[L],y,L,R);else d(A,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,S,b,R){if(x(_,S,b,R)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let A=0;for(let L=0;L<T.length;L++){let D=T[L],O=g(D);p(D,_.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,S,b){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,b)}function x(_,S,b,R){let y=_.value,T=S+"_"+b;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{let A=R[T];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(_){let S=_.uniforms,b=0,R=16;for(let T=0,A=S.length;T<A;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,O=L.length;D<O;D++){let P=L[D],F=Array.isArray(P.value)?P.value:[P.value];for(let V=0,H=F.length;V<H;V++){let tt=F[V],X=g(tt),j=b%R,et=j%X.boundary,Ct=j+et;b+=et,Ct!==0&&R-Ct<X.storage&&(b+=R-Ct),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=X.storage}}}let y=b%R;return y>0&&(b+=R-y),_.__size=b,_.__cache={},this}function g(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){let S=_.target;S.removeEventListener("dispose",M);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var sy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function ry(){return Vn===null&&(Vn=new wr(sy,16,16,Ri,An),Vn.name="DFG_LUT",Vn.minFilter=ke,Vn.magFilter=ke,Vn.wrapS=Dn,Vn.wrapT=Dn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var vl=class{constructor(t={}){let{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=tn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=d,m=new Set([zo,Fo,Uo]),g=new Set([tn,Tn,Bs,ks,Lo,No]),M=new Uint32Array(4),w=new Int32Array(4),_=new I,S=null,b=null,R=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,O=null,P=null,F=null;this._outputColorSpace=Oe;let V=0,H=0,tt=null,X=-1,j=null,et=new we,Ct=new we,wt=null,ee=new Ot(0),Yt=0,ie=e.width,Z=e.height,it=1,vt=null,Wt=null,Tt=new we(0,0,ie,Z),Xt=new we(0,0,ie,Z),pe=!1,st=new Is,ot=!1,lt=!1,ct=new ne,ft=new I,kt=new we,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Kt(){return tt===null?it:1}let N=n;function ce(E,U){return e.getContext(E,U)}let se,C,v,B,q,K,ht,dt,J,nt,pt,Ut,yt,mt,Ft,Ht,Jt,z,gt,Q,xt,Et,rt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",gn,!1),N===null){let U="webgl2";if(N=ce(U,E),N===null)throw ce(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(E){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Vt("WebGLRenderer: "+E.message),E}function zt(){se=new dx(N),se.init(),xt=new j_(N,se),C=new nx(N,se,t,xt),v=new J_(N,se),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=N.createFramebuffer(),P=N.createFramebuffer(),F=N.createFramebuffer(),B=new mx(N),q=new F_,K=new $_(N,se,v,q,C,xt,B),ht=new ux(A),dt=new xm(N),Et=new tx(N,dt),J=new fx(N,dt,B,Et),nt=new xx(N,J,dt,Et,B),z=new gx(N,C,K),Ft=new ix(q),pt=new U_(A,ht,se,C,Et,Ft),Ut=new ny(A,q),yt=new O_,mt=new W_(se),Jt=new Qg(A,ht,v,nt,p,l),Ht=new K_(A,nt,C),rt=new iy(N,B,C,v),gt=new ex(N,se,B),Q=new px(N,se,B),B.programs=pt.programs,A.capabilities=C,A.extensions=se,A.properties=q,A.renderLists=yt,A.shadowMap=Ht,A.state=v,A.info=B}x!==tn&&(T=new yx(x,e.width,e.height,o,s,r));let Nt=new Sh(A,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(ie,Z,!1))},this.getSize=function(E){return E.set(ie,Z)},this.setSize=function(E,U,Y=!0){if(Nt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=E,Z=U,e.width=Math.floor(E*it),e.height=Math.floor(U*it),Y===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ie*it,Z*it).floor()},this.setDrawingBufferSize=function(E,U,Y){ie=E,Z=U,it=Y,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===tn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,U,Y,G){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,U,Y,G),v.viewport(et.copy(Tt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,U,Y,G){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,U,Y,G),v.scissor(Ct.copy(Xt).multiplyScalar(it).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(E){v.setScissorTest(pe=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let G=0;if(E){let W=!1;if(tt!==null){let St=tt.texture.format;W=m.has(St)}if(W){let St=tt.texture.type,Rt=g.has(St),Mt=Jt.getClearColor(),It=Jt.getClearAlpha(),Dt=Mt.r,jt=Mt.g,re=Mt.b;Rt?(M[0]=Dt,M[1]=jt,M[2]=re,M[3]=It,N.clearBufferuiv(N.COLOR,0,M)):(w[0]=Dt,w[1]=jt,w[2]=re,w[3]=It,N.clearBufferiv(N.COLOR,0,w))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Jt.dispose(),yt.dispose(),mt.dispose(),q.dispose(),ht.dispose(),nt.dispose(),Et.dispose(),rt.dispose(),pt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Wh),Nt.removeEventListener("sessionend",Xh),Di.stop()};function ve(E){E.preventDefault(),_r("WebGLRenderer: Context Lost."),L=!0}function he(){_r("WebGLRenderer: Context Restored."),L=!1;let E=B.autoReset,U=Ht.enabled,Y=Ht.autoUpdate,G=Ht.needsUpdate,W=Ht.type;zt(),B.autoReset=E,Ht.enabled=U,Ht.autoUpdate=Y,Ht.needsUpdate=G,Ht.type=W}function gn(E){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pn(E){let U=E.target;U.removeEventListener("dispose",Pn),zf(U)}function zf(E){Of(E),q.remove(E)}function Of(E){let U=q.get(E).programs;U!==void 0&&(U.forEach(function(Y){pt.releaseProgram(Y)}),E.isShaderMaterial&&pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,G,W,St){U===null&&(U=Bt);let Rt=W.isMesh&&W.matrixWorld.determinantAffine()<0,Mt=Hf(E,U,Y,G,W);v.setMaterial(G,Rt);let It=Y.index,Dt=1;if(G.wireframe===!0){if(It=J.getWireframeAttribute(Y),It===void 0)return;Dt=2}let jt=Y.drawRange,re=Y.attributes.position,Pt=jt.start*Dt,ue=(jt.start+jt.count)*Dt;St!==null&&(Pt=Math.max(Pt,St.start*Dt),ue=Math.min(ue,(St.start+St.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),ue=Math.min(ue,It.count)):re!=null&&(Pt=Math.max(Pt,0),ue=Math.min(ue,re.count));let Ce=ue-Pt;if(Ce<0||Ce===1/0)return;Et.setup(W,G,Mt,Y,It);let Se,_e=gt;if(It!==null&&(Se=dt.get(It),_e=Q,_e.setIndex(Se)),W.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Kt()),_e.setMode(N.LINES)):_e.setMode(N.TRIANGLES);else if(W.isLine){let He=G.linewidth;He===void 0&&(He=1),v.setLineWidth(He*Kt()),W.isLineSegments?_e.setMode(N.LINES):W.isLineLoop?_e.setMode(N.LINE_LOOP):_e.setMode(N.LINE_STRIP)}else W.isPoints?_e.setMode(N.POINTS):W.isSprite&&_e.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(se.get("WEBGL_multi_draw"))_e.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let He=W._multiDrawStarts,At=W._multiDrawCounts,qe=W._multiDrawCount,le=It?dt.get(It).bytesPerElement:1,un=q.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<qe;Ln++)un.setValue(N,"_gl_DrawID",Ln),_e.render(He[Ln]/le,At[Ln])}else if(W.isInstancedMesh)_e.renderInstances(Pt,Ce,W.count);else if(Y.isInstancedBufferGeometry){let He=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,He);_e.renderInstances(Pt,Ce,At)}else _e.render(Pt,Ce)};function Gh(E,U,Y,G){D!==null&&E.isNodeMaterial&&D.setObject(G,E),ot===!0&&Ft.setState(E,Y,!1),E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=Ne,E.needsUpdate=!0,pa(E,U,G),E.side=wi,E.needsUpdate=!0,pa(E,U,G),E.side=ln):pa(E,U,G)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),D!==null&&D.renderStart(E,U,Y),b=mt.get(Y),b.init(U),y.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),lt=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,lt),ot===!0&&Ft.setGlobalState(this.clippingPlanes,U),D!==null&&Ht.render(b.state.shadowsArray,Y,U);let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let St=W.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let Mt=St[Rt];Gh(Mt,Y,U,W),G.add(Mt)}else Gh(St,Y,U,W),G.add(St)}),b=y.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(E,U,Y=null){let G=this.compile(E,U,Y);return new Promise(W=>{function St(){if(G.forEach(function(Rt){let It=q.get(Rt).currentProgram;(It===void 0||It.isReady())&&G.delete(Rt)}),G.size===0){W(E);return}setTimeout(St,10)}se.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Vl=null;function Bf(E){Vl&&Vl(E)}function Wh(){Di.stop()}function Xh(){Di.start()}let Di=new Yd;Di.setAnimationLoop(Bf),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(E){Vl=E,Nt.setAnimationLoop(E),E===null?Di.stop():Di.start()},Nt.addEventListener("sessionstart",Wh),Nt.addEventListener("sessionend",Xh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,U);let Y=Nt.enabled===!0&&Nt.isPresenting===!0,G=T!==null&&(tt===null||Y)&&T.begin(A,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(U),U=Nt.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,U,tt),b=mt.get(E,y.length),b.init(U),b.state.textureUnits=K.getTextureUnits(),y.push(b),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(ct,Sn,U.reversedDepth),lt=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,lt),S=yt.get(E,R.length),S.init(),R.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let Rt=A.xr.getDepthSensingMesh();Rt!==null&&Gl(Rt,U,-1/0,A.sortObjects)}Gl(E,U,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(vt,Wt),qt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,qt&&Jt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ft.beginShadows();let W=b.state.shadowsArray;if(Ht.render(W,E,U),ot===!0&&Ft.endShadows(),(G&&T.hasRenderPass())===!1){let Rt=S.opaque,Mt=S.transmissive;if(b.setupLights(),U.isArrayCamera){let It=U.cameras;if(Mt.length>0)for(let Dt=0,jt=It.length;Dt<jt;Dt++){let re=It[Dt];Yh(Rt,Mt,E,re)}qt&&Jt.render(E);for(let Dt=0,jt=It.length;Dt<jt;Dt++){let re=It[Dt];qh(S,E,re,re.viewport)}}else Mt.length>0&&Yh(Rt,Mt,E,U),qt&&Jt.render(E),qh(S,E,U)}tt!==null&&H===0&&(K.updateMultisampleRenderTarget(tt),K.updateRenderTargetMipmap(tt)),G&&T.end(A),E.isScene===!0&&E.onAfterRender(A,E,U),Et.resetDefaultState(),X=-1,j=null,y.pop(),y.length>0?(b=y[y.length-1],K.setTextureUnits(b.state.textureUnits),ot===!0&&Ft.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,D!==null&&D.renderEnd()};function Gl(E,U,Y,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(st)){G&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);let Rt=nt.update(E),Mt=E.material;Mt.visible&&S.push(E,Rt,Mt,Y,kt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(st))){let Rt=nt.update(E),Mt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),kt.copy(Rt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){let It=Rt.groups;for(let Dt=0,jt=It.length;Dt<jt;Dt++){let re=It[Dt],Pt=Mt[re.materialIndex];Pt&&Pt.visible&&S.push(E,Rt,Pt,Y,kt.z,re,U)}}else Mt.visible&&S.push(E,Rt,Mt,Y,kt.z,null,U)}}let St=E.children;for(let Rt=0,Mt=St.length;Rt<Mt;Rt++)Gl(St[Rt],U,Y,G)}function qh(E,U,Y,G){let{opaque:W,transmissive:St,transparent:Rt}=E;b.setupLightsView(Y),ot===!0&&Ft.setGlobalState(A.clippingPlanes,Y),G&&v.viewport(et.copy(G)),W.length>0&&fa(W,U,Y),St.length>0&&fa(St,U,Y),Rt.length>0&&fa(Rt,U,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Yh(E,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Pt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new je(1,1,{generateMipmaps:!0,type:Pt?An:tn,minFilter:Ti,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let St=b.state.transmissionRenderTarget[G.id],Rt=G.viewport||et;St.setSize(Rt.z*A.transmissionResolutionScale,Rt.w*A.transmissionResolutionScale);let Mt=A.getRenderTarget(),It=A.getActiveCubeFace(),Dt=A.getActiveMipmapLevel();A.setRenderTarget(St),A.getClearColor(ee),Yt=A.getClearAlpha(),Yt<1&&A.setClearColor(16777215,.5),A.clear(),qt&&Jt.render(Y);let jt=A.toneMapping;A.toneMapping=En;let re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ot===!0&&Ft.setGlobalState(A.clippingPlanes,G),fa(E,Y,G),K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St),se.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ue=0,Ce=U.length;ue<Ce;ue++){let Se=U[ue],{object:_e,geometry:He,material:At,group:qe}=Se;if(At.side===ln&&_e.layers.test(G.layers)){let le=At.side;At.side=Ne,At.needsUpdate=!0,Zh(_e,Y,G,He,At,qe),At.side=le,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St))}A.setRenderTarget(Mt,It,Dt),A.setClearColor(ee,Yt),re!==void 0&&(G.viewport=re),A.toneMapping=jt}function fa(E,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,St=E.length;W<St;W++){let Rt=E[W],{object:Mt,geometry:It,group:Dt}=Rt,jt=Rt.material;jt.allowOverride===!0&&G!==null&&(jt=G),Mt.layers.test(Y.layers)&&Zh(Mt,U,Y,It,jt,Dt)}}function Zh(E,U,Y,G,W,St){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(A,U,Y,G,W,St),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(A,U,Y,G,E,St),W.transparent===!0&&W.side===ln&&W.forceSinglePass===!1?(W.side=Ne,W.needsUpdate=!0,A.renderBufferDirect(Y,U,G,W,E,St),W.side=wi,W.needsUpdate=!0,A.renderBufferDirect(Y,U,G,W,E,St),W.side=ln):A.renderBufferDirect(Y,U,G,W,E,St),E.onAfterRender(A,U,Y,G,W,St)}function pa(E,U,Y){U.isScene!==!0&&(U=Bt);let G=q.get(E),W=b.state.lights,St=b.state.shadowsArray,Rt=W.state.version,Mt=pt.getParameters(E,W.state,St,U,Y,b.state.lightProbeGridArray),It=pt.getProgramCacheKey(Mt),Dt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ht.get(E.envMap||G.environment,jt),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Pn),Dt=new Map,G.programs=Dt);let re=Dt.get(It);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===Rt)return Jh(E,Mt),re}else Mt.uniforms=pt.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Y,Mt),E.onBeforeCompile(Mt,A),re=pt.acquireProgram(Mt,It),Dt.set(It,re),G.uniforms=Mt.uniforms;let Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),Jh(E,Mt),G.needsLights=Gf(E),G.lightsStateVersion=Rt,G.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=re,G.uniformsList=null,re}function Kh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Jh(E,U){let Y=q.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function kf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=E.length;Y<G;Y++){let W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Hf(E,U,Y,G,W){U.isScene!==!0&&(U=Bt),K.resetTextureUnits();let St=U.fog,Rt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Mt=tt===null?A.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ae.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Dt=ht.get(G.envMap||Rt,It),jt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,re=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Y.morphAttributes.position,ue=!!Y.morphAttributes.normal,Ce=!!Y.morphAttributes.color,Se=En;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=A.toneMapping);let _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,He=_e!==void 0?_e.length:0,At=q.get(G),qe=b.state.lights;if(ot===!0&&(lt===!0||E!==j)){let Me=E===j&&G.id===X;Ft.setState(G,E,Me)}let le=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==qe.state.version||At.outputColorSpace!==Mt||W.isBatchedMesh&&At.batching===!1||!W.isBatchedMesh&&At.batching===!0||W.isBatchedMesh&&At.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&At.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&At.instancing===!1||!W.isInstancedMesh&&At.instancing===!0||W.isSkinnedMesh&&At.skinning===!1||!W.isSkinnedMesh&&At.skinning===!0||W.isInstancedMesh&&At.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&At.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&At.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&At.instancingMorph===!1&&W.morphTexture!==null||At.envMap!==Dt||G.fog===!0&&At.fog!==St||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ft.numPlanes||At.numIntersection!==Ft.numIntersection)||At.vertexAlphas!==jt||At.vertexTangents!==re||At.morphTargets!==Pt||At.morphNormals!==ue||At.morphColors!==Ce||At.toneMapping!==Se||At.morphTargetsCount!==He||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,At.__version=G.version);let un=At.currentProgram;le===!0&&(un=pa(G,U,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,un,At));let Ln=!1,ci=!1,Qi=!1,xe=un.getUniforms(),Re=At.uniforms;if(v.useProgram(un.program)&&(Ln=!0,ci=!0,Qi=!0),G.id!==X&&(X=G.id,ci=!0),At.needsLights){let Me=kf(b.state.lightProbeGridArray,W);At.lightProbeGrid!==Me&&(At.lightProbeGrid=Me,ci=!0)}if(Ln||j!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(N,"projectionMatrix",E.projectionMatrix),xe.setValue(N,"viewMatrix",E.matrixWorldInverse);let ui=xe.map.cameraPosition;ui!==void 0&&ui.setValue(N,ft.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&xe.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ci=!0,Qi=!0)}if(At.needsLights&&(qe.state.sunShadowMap.length>0&&xe.setValue(N,"sunShadowMap",qe.state.sunShadowMap,K),qe.state.directionalShadowMap.length>0&&xe.setValue(N,"directionalShadowMap",qe.state.directionalShadowMap,K),qe.state.spotShadowMap.length>0&&xe.setValue(N,"spotShadowMap",qe.state.spotShadowMap,K),qe.state.pointShadowMap.length>0&&xe.setValue(N,"pointShadowMap",qe.state.pointShadowMap,K)),W.isSkinnedMesh){xe.setOptional(N,W,"bindMatrix"),xe.setOptional(N,W,"bindMatrixInverse");let Me=W.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue(N,"boneTexture",Me.boneTexture,K))}W.isBatchedMesh&&(xe.setOptional(N,W,"batchingTexture"),xe.setValue(N,"batchingTexture",W._matricesTexture,K),xe.setOptional(N,W,"batchingIdTexture"),xe.setValue(N,"batchingIdTexture",W._indirectTexture,K),xe.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(N,"batchingColorTexture",W._colorsTexture,K));let hi=Y.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&z.update(W,Y,un),(ci||At.receiveShadow!==W.receiveShadow)&&(At.receiveShadow=W.receiveShadow,xe.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Re.envMapIntensity.value=U.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=ry()),ci){if(xe.setValue(N,"toneMappingExposure",A.toneMappingExposure),At.needsLights&&Vf(Re,Qi),St&&G.fog===!0&&Ut.refreshFogUniforms(Re,St),Ut.refreshMaterialUniforms(Re,G,it,Z,b.state.transmissionRenderTarget[E.id]),At.needsLights&&At.lightProbeGrid){let Me=At.lightProbeGrid;Re.probesSH.value=Me.texture,Re.probesMin.value.copy(Me.boundingBox.min),Re.probesMax.value.copy(Me.boundingBox.max),Re.probesResolution.value.copy(Me.resolution)}Ws.upload(N,Kh(At),Re,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(N,Kh(At),Re,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&xe.setValue(N,"center",W.center),xe.setValue(N,"modelViewMatrix",W.modelViewMatrix),xe.setValue(N,"normalMatrix",W.normalMatrix),xe.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Me=G.uniformsGroups;for(let ui=0,ts=Me.length;ui<ts;ui++){let jh=Me[ui];rt.update(jh,un),rt.bind(jh,un)}}return un}function Vf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Gf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,U,Y){let G=q.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=U,q.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Y=q.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){tt=E,V=U,H=Y;let G=null,W=!1,St=!1;if(E){let Mt=q.get(E);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Mt.__webglFramebuffer),et.copy(E.viewport),Ct.copy(E.scissor),wt=E.scissorTest,v.viewport(et),v.scissor(Ct),v.setScissorTest(wt),X=-1;return}else if(Mt.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(Mt.__hasExternalTextures)K.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let jt=E.depthTexture;if(Mt.__boundDepthTexture!==jt){if(jt!==null&&q.has(jt)&&(E.width!==jt.image.width||E.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(St=!0);let Dt=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?G=Dt[U][Y]:G=Dt[U],W=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?G=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?G=Dt[Y]:G=Dt,et.copy(E.viewport),Ct.copy(E.scissor),wt=E.scissorTest}else et.copy(Tt).multiplyScalar(it).floor(),Ct.copy(Xt).multiplyScalar(it).floor(),wt=pe;if(Y!==0&&(G=O),v.bindFramebuffer(N.FRAMEBUFFER,G)&&v.drawBuffers(E,G),v.viewport(et),v.scissor(Ct),v.setScissorTest(wt),W){let Mt=q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,Y)}else if(St){let Mt=U;for(let It=0;It<E.textures.length;It++){let Dt=q.get(E.textures[It]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+It,Dt.__webglTexture,Y,Mt)}}else if(E!==null&&Y!==0){let Mt=q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,Y)}X=-1};function $h(E){let U=q.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,G,W,St,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It){v.bindFramebuffer(N.FRAMEBUFFER,It);try{let Dt=E.textures[Mt],jt=Dt.format,re=Dt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let Pt=$h(Dt);if(Pt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&Y>=0&&Y<=E.height-W&&N.readPixels(U,Y,G,W,xt.convert(jt),xt.convert(re),St)}finally{let Dt=tt!==null?q.get(tt).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,G,W,St,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(It=It[Rt]),It)if(U>=0&&U<=E.width-G&&Y>=0&&Y<=E.height-W){v.bindFramebuffer(N.FRAMEBUFFER,It);let Dt=E.textures[Mt],jt=Dt.format,re=Dt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let Pt=$h(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.bufferData(N.PIXEL_PACK_BUFFER,St.byteLength,N.STREAM_READ),N.readPixels(U,Y,G,W,xt.convert(jt),xt.convert(re),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ce=tt!==null?q.get(tt).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ce);let Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await gd(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,St),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ue),N.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(E.image.width*G),St=Math.floor(E.image.height*G),Rt=U!==null?U.x:0,Mt=U!==null?U.y:0;K.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Rt,Mt,W,St),v.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,G=null,W=0,St=0){let Rt,Mt,It,Dt,jt,re,Pt,ue,Ce,Se=E.isCompressedTexture?E.mipmaps[St]:E.image;if(Y!==null)Rt=Y.max.x-Y.min.x,Mt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,jt=Y.min.y,re=Y.isBox3?Y.min.z:0;else{let Re=Math.pow(2,-W);Rt=Math.floor(Se.width*Re),Mt=Math.floor(Se.height*Re),E.isDataArrayTexture?It=Se.depth:E.isData3DTexture?It=Math.floor(Se.depth*Re):It=1,Dt=0,jt=0,re=0}G!==null?(Pt=G.x,ue=G.y,Ce=G.z):(Pt=0,ue=0,Ce=0);let _e=xt.convert(U.format),He=xt.convert(U.type),At;U.isData3DTexture?(K.setTexture3D(U,0),At=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),At=N.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),At=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let qe=v.getParameter(N.UNPACK_ROW_LENGTH),le=v.getParameter(N.UNPACK_IMAGE_HEIGHT),un=v.getParameter(N.UNPACK_SKIP_PIXELS),Ln=v.getParameter(N.UNPACK_SKIP_ROWS),ci=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(N.UNPACK_SKIP_ROWS,jt),v.pixelStorei(N.UNPACK_SKIP_IMAGES,re);let Qi=E.isDataArrayTexture||E.isData3DTexture,xe=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Re=q.get(E),hi=q.get(U),Me=q.get(Re.__renderTarget),ui=q.get(hi.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Me.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let ts=0;ts<It;ts++)Qi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,re+ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,q.get(U).__webglTexture,St,Ce+ts)),N.blitFramebuffer(Dt,jt,Rt,Mt,Pt,ue,Rt,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){let Re=q.get(E),hi=q.get(U);v.bindFramebuffer(N.READ_FRAMEBUFFER,P),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let Me=0;Me<It;Me++)Qi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,W,re+Me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,W),xe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hi.__webglTexture,St,Ce+Me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hi.__webglTexture,St),W!==0?N.blitFramebuffer(Dt,jt,Rt,Mt,Pt,ue,Rt,Mt,N.COLOR_BUFFER_BIT,N.NEAREST):xe?N.copyTexSubImage3D(At,St,Pt,ue,Ce+Me,Dt,jt,Rt,Mt):N.copyTexSubImage2D(At,St,Pt,ue,Dt,jt,Rt,Mt);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(At,St,Pt,ue,Ce,Rt,Mt,It,_e,He,Se.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(At,St,Pt,ue,Ce,Rt,Mt,It,_e,Se.data):N.texSubImage3D(At,St,Pt,ue,Ce,Rt,Mt,It,_e,He,Se):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,St,Pt,ue,Rt,Mt,_e,He,Se.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,St,Pt,ue,Se.width,Se.height,_e,Se.data):N.texSubImage2D(N.TEXTURE_2D,St,Pt,ue,Rt,Mt,_e,He,Se);v.pixelStorei(N.UNPACK_ROW_LENGTH,qe),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,le),v.pixelStorei(N.UNPACK_SKIP_PIXELS,un),v.pixelStorei(N.UNPACK_SKIP_ROWS,Ln),v.pixelStorei(N.UNPACK_SKIP_IMAGES,ci),St===0&&U.generateMipmaps&&N.generateMipmap(At),v.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){V=0,H=0,tt=null,v.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var bl=class extends Hi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Le;t.deleteAttribute("uv");let e=new $t({side:Ne}),n=new $t,s=new Wr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Lt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new kn(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Lt(t,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Lt(t,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Lt(t,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Lt(t,Zs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Lt(t,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Lt(t,Zs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zs(i){return new Br({color:0,emissive:16777215,emissiveIntensity:i})}var tf=Math.PI*2,Je=18,bt=(i,t,e)=>i<t?t:i>e?e:i,ut=(i,t,e)=>i+(t-i)*e,$=(i,t)=>i+Math.random()*(t-i);var Ks=i=>i[Math.floor(Math.random()*i.length)];var cn=(i,t)=>1-Math.exp(-i*t),aa=i=>1-(1-i)*(1-i),oa=i=>.5-.5*Math.cos(Math.PI*i);function en(i){return i=(i+Math.PI)%tf,i<0&&(i+=tf),i-Math.PI}function ri(i,t,e){let n=en(t-i);return i+bt(n,-e,e)}function Rn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}var Ae={s:0,t:0,d2:0};function la(i,t,e,n,s,r,a,o,l,c,h,f,u=Ae){let d=n-i,p=s-t,x=r-e,m=c-a,g=h-o,M=f-l,w=i-a,_=t-o,S=e-l,b=d*d+p*p+x*x,R=m*m+g*g+M*M,y=m*w+g*_+M*S,T,A;if(b<1e-9&&R<1e-9)T=0,A=0;else if(b<1e-9)T=0,A=bt(y/R,0,1);else{let P=d*w+p*_+x*S;if(R<1e-9)A=0,T=bt(-P/b,0,1);else{let F=d*m+p*g+x*M,V=b*R-F*F;T=V>1e-12?bt((F*y-P*R)/V,0,1):0,A=(F*T+y)/R,A<0?(A=0,T=bt(-P/b,0,1)):A>1&&(A=1,T=bt((F-P)/b,0,1))}}let L=i+d*T-(a+m*A),D=t+p*T-(o+g*A),O=e+x*T-(l+M*A);return u.s=T,u.t=A,u.d2=L*L+D*D+O*O,u}var Ci={t:0,d2:0};function wl(i,t,e,n,s,r,a,o,l,c=Ci){let h=a-n,f=o-s,u=l-r,d=h*h+f*f+u*u,p=d>0?bt(((i-n)*h+(t-s)*f+(e-r)*u)/d,0,1):0,x=n+h*p-i,m=s+f*p-t,g=r+u*p-e;return c.t=p,c.d2=x*x+m*m+g*g,c}function bh(i,t){try{let e=parseInt(localStorage.getItem(i),10);return Number.isFinite(e)?e:t}catch{return t}}function wh(i,t){try{localStorage.setItem(i,String(t))}catch{}}var fe=(()=>{let i=null,t=null,e=null,n=!1,s={};function r(){if(i){i.state==="suspended"&&i.resume();return}let h=window.AudioContext||window.webkitAudioContext;if(!h)return;try{i=new h}catch{i=null;return}t=i.createGain(),t.gain.value=.5;let f=i.createDynamicsCompressor();t.connect(f),f.connect(i.destination),e=i.createBuffer(1,i.sampleRate,i.sampleRate);let u=e.getChannelData(0);for(let d=0;d<u.length;d++)u[d]=Math.random()*2-1}function a(h,f){if(!i||n||i.state!=="running")return!1;let u=i.currentTime;return s[h]!==void 0&&u-s[h]<f?!1:(s[h]=u,!0)}function o(h,f,u,d){h.gain.setValueAtTime(1e-4,f),h.gain.exponentialRampToValueAtTime(d,f+Math.min(.012,u*.25)),h.gain.exponentialRampToValueAtTime(1e-4,f+u)}function l(h,f,u,d,p,x,m){let g=i.createBufferSource();g.buffer=e,g.loop=!0;let M=i.createBiquadFilter();M.type=u,M.Q.value=x,M.frequency.setValueAtTime(d,h),M.frequency.exponentialRampToValueAtTime(p,h+f);let w=i.createGain();o(w,h,f,m),g.connect(M),M.connect(w),w.connect(t),g.start(h,Math.random()*.8),g.stop(h+f+.05)}function c(h,f,u,d,p,x){let m=i.createOscillator();m.type=u,m.frequency.setValueAtTime(d,h),m.frequency.exponentialRampToValueAtTime(p,h+f);let g=i.createGain();o(g,h,f,x),m.connect(g),g.connect(t),m.start(h),m.stop(h+f+.05)}return{init:r,toggleMute(){return n=!n,n},get muted(){return n},swoosh(h){if(!a("swoosh",.03))return;let f=i.currentTime,u=h===2;l(f,u?.28:.16,"bandpass",u?400:700,u?2600:3400,1.4,.32)},slice(){if(!a("slice",.02))return;let h=i.currentTime;l(h,.08,"highpass",2500,7e3,.7,.3),c(h,.2,"triangle",$(1800,2300),1100,.06),l(h+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!a("wound",.03))return;let h=i.currentTime;l(h,.18,"lowpass",900,150,1,.45),c(h,.12,"sine",160,60,.25)},punch(){if(!a("punch",.05))return;let h=i.currentTime;c(h,.15,"sine",140,45,.5),l(h,.1,"lowpass",1500,200,1,.35)},hurt(){if(!a("hurt",.1))return;let h=i.currentTime;c(h,.3,"sawtooth",320,90,.12)},die(){if(!a("die",.5))return;let h=i.currentTime;c(h,1,"sawtooth",240,40,.14),l(h,.6,"lowpass",800,60,1,.3)},thud(h){if(!a("thud",.06))return;let f=i.currentTime,u=bt(h/2500,.04,.3);c(f,.12,"sine",120,45,u),l(f,.07,"lowpass",500,120,1,u*.8)},clang(){if(!a("clang",.05))return;let h=i.currentTime;c(h,.35,"square",1750,1600,.05),c(h,.3,"triangle",2650,2500,.07),l(h,.06,"highpass",4e3,8e3,1,.25)},jump(h){if(!a("jump",.05))return;let f=i.currentTime,u=h||1;c(f,.12,"sine",260*u,560*u,.07)},combo(h){if(!a("combo",.04))return;let f=i.currentTime,u=520*Math.pow(1.06,Math.min(h,24));c(f,.14,"triangle",u,u*1.5,.07)},enemySwing(){a("eswing",.05)&&l(i.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!a("splash",.1))return;let h=i.currentTime;l(h,.5,"lowpass",2400,300,.8,.4),l(h+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!a("win",1))return;let h=i.currentTime;[523,659,784,1047].forEach((f,u)=>c(h+u*.09,.22,"triangle",f,f,.08))},skid(){if(!a("skid",.2))return;let h=i.currentTime;c(h,.22,"sine",$(950,1150),720,.05),l(h,.25,"bandpass",2200,1400,2,.12)},scrape(){if(!a("scrape",.12))return;let h=i.currentTime;l(h,.12,"bandpass",3200,1700,3,.1)},twang(){if(!a("twang",.08))return;let h=i.currentTime;c(h,.6,"triangle",$(170,210),70,.22),c(h,.35,"sawtooth",340,120,.05),l(h,.07,"highpass",2500,6e3,1,.35)},heal(){if(!a("heal",.2))return;let h=i.currentTime;c(h,.12,"sine",660,660,.08),c(h+.1,.18,"sine",990,990,.08)}}})();var k={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14,SPINE:15},Ii=16,ay=[.3,.3,1.4,.3,.45,.8,.3,.45,.8,.75,.4,.55,.75,.4,.55,.9],oy=[.6,.9,1,.9,1,1,.9,1,1,.8,.6,.6,.8,.6,.6,1],ly=[3,4,1.5,4,1,1,4,1,1,1,1,1,1,1,1,4],cy=[.14,.07,.14,.08,.06,.06,.08,.06,.06,.09,.08,.07,.09,.08,.07,.15],Eh=.12,hy=5,uy=[[k.NECK,k.SPINE,.17,"torso",1,.5],[k.SPINE,k.PELVIS,.17,"torso",.5,0],[k.NECK,k.HEAD,.07,"neck"],[k.NECK,k.LSH,0,"struct"],[k.NECK,k.RSH,0,"struct"],[k.LSH,k.RSH,0,"struct"],[k.PELVIS,k.LHIP,0,"struct"],[k.PELVIS,k.RHIP,0,"struct"],[k.LHIP,k.RHIP,0,"struct"],[k.LSH,k.LELB,.068,"arm"],[k.LELB,k.LHAND,.06,"arm"],[k.RSH,k.RELB,.068,"arm"],[k.RELB,k.RHAND,.06,"arm"],[k.LHIP,k.LKNEE,.092,"leg"],[k.LKNEE,k.LFOOT,.074,"leg"],[k.RHIP,k.RKNEE,.092,"leg"],[k.RKNEE,k.RFOOT,.074,"leg"]];function Th(i){return{spine:.52*i,neck:.24*i,shW:.2*i,hipW:.11*i,ua:.29*i,fa:.27*i,th:.44*i,sh:.43*i,headR:.14*i}}function ef(i,t,e,n,s,r=1,a=1){return{x:i,y:t,z:e,px:i,py:t,pz:e,r:n,k:s,c:r,ky:a,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var dy=1,El=class{constructor(t,e,n){this.id=dy++,this.S=t,this.d=Th(t),this.kBase=n.k,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(Ii*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let s=0;s<Ii;s++){let r=e[s*3],a=e[s*3+1],o=e[s*3+2];this.pts.push(ef(r,a,o,cy[s]*t,ay[s],oy[s],ly[s])),this.tgt[s*3]=r,this.tgt[s*3+1]=a,this.tgt[s*3+2]=o}this.pts[k.HEAD].r=this.d.headR,this.pts[k.HEAD].im=.8,this.pts[k.PELVIS].pin=!1;for(let[s,r,a,o,l,c]of uy)this.addBone(s,r,a*t,o,l,c);this.addAux(k.LSH,k.SPINE,!1),this.addAux(k.RSH,k.SPINE,!1),this.addAux(k.LHIP,k.SPINE,!1),this.addAux(k.RHIP,k.SPINE,!1),this.addAux(k.NECK,k.PELVIS,!0,.8),this.addAux(k.LSH,k.PELVIS,!0,.78),this.addAux(k.RSH,k.PELVIS,!0,.78),this.addAux(k.HEAD,k.PELVIS,!0,.8),this.addAux(k.HEAD,k.LSH,!0,.9),this.addAux(k.HEAD,k.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,s,r=0,a=1){let o=this.pts[t],l=this.pts[e];this.bones.push({a:t,b:e,r:n,kind:s,sa:r,sb:a,len:Math.hypot(l.x-o.x,l.y-o.y,l.z-o.z),vis:s!=="struct",part:t*100+e})}addAux(t,e,n,s=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*s})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let s=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,f=1/t,u=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],m=(x.x-x.px)*s,g=(x.y-x.py)*s,M=(x.z-x.pz)*s;x.px=x.x,x.py=x.y,x.pz=x.z;let w=-Je;if(x.y<u){let _=Math.exp(-4*t);m*=_,g*=_,M*=_,w+=Je*bt((u-x.y)*6,0,1.6)}else m*=.999,g*=.999,M*=.999;if(a&&x.attached&&p<Ii){let _=this.tgt[p*3],S=this.tgt[p*3+1],b=this.tgt[p*3+2];if(x.pin){x.x=_,x.y=S,x.z=b;continue}if(o>0){let R=l*x.k,y=c*x.c,T=(_-x.x)*R-(m*f-this.cvx)*y;w+=(S-x.y)*R*x.ky-(g*f-this.cvy)*y*Math.sqrt(x.ky);let A=(b-x.z)*R-(M*f-this.cvz)*y;x.x+=m+T*h,x.y+=g+w*h,x.z+=M+A*h;continue}}x.x+=m,x.y+=g+w*h,x.z+=M}for(let p=0;p<hy;p++){for(let x=0;x<this.bones.length;x++){let m=this.bones[x];this.solve(m.a,m.b,m.len,!1)}for(let x=0;x<this.aux.length;x++){let m=this.aux[x];this.solve(m.a,m.b,m.len,m.min)}for(let x=0;x<r.length;x++){let m=r[x],g=n.ground(m.x,m.z);m.y<g+m.r&&m.py>g-.25&&(m.y=g+m.r)}}let d=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],m=n.ground(x.x,x.z);if(x.y>m+x.r+.002||x.py<m-.25)continue;let g=x.y-x.py;g<0&&(-g*f>this.impact&&(this.impact=-g*f),x.py=x.y+g*.2),x.px=x.x-(x.x-x.px)*d,x.pz=x.z-(x.z-x.pz)*d}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||s&&h>=n)return;let f=this.invMass(r),u=this.invMass(a),d=f+u;if(d===0)return;let p=(h-n)/(h*d);r.x+=o*p*f,r.y+=l*p*f,r.z+=c*p*f,a.x-=o*p*u,a.y-=l*p*u,a.z-=c*p*u}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),s=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=s,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=s,r.push(c))}s++}let a=n[k.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=bt(e,.18,.82);let s=this.pts[n.a],r=this.pts[n.b],a=()=>{let d=ef(ut(s.x,r.x,e),ut(s.y,r.y,e),ut(s.z,r.z,e),n.r*.9,0);return d.px=ut(s.px,r.px,e),d.py=ut(s.py,r.py,e),d.pz=ut(s.pz,r.pz,e),d.stump=!0,d.stumpR=n.r,d},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=ut(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),f=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,f),this.updateConnectivity(),this.version++;let u=this.pts[o];return{i1:o,i2:l,x:u.x,y:u.y,z:u.z,kind:n.kind}}addVel(t,e,n,s,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*s,o.py-=e*s,o.pz-=n*s}}addSpin(t,e,n,s){let r=0,a=0,o=0;for(let c of this.pts)r+=c.x,a+=c.y,o+=c.z;let l=this.pts.length;r/=l,a/=l,o/=l;for(let c of this.pts){let h=c.x-r,f=c.y-a,u=c.z-o;c.px-=(e*u-n*f)*s,c.py-=(n*h-t*u)*s,c.pz-=(t*f-e*h)*s}}bounds(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<s&&(s=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=s,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[k.PELVIS]}};function Ah(i,t,e,n){let s=i.bones,r=i.pts,a=r[k.HEAD],o=i.d.headR;for(let l=1;l<=n;l++){let c=l/n,h=ut(t.bx,e.bx,c),f=ut(t.by,e.by,c),u=ut(t.bz,e.bz,c),d=ut(t.tx,e.tx,c),p=ut(t.ty,e.ty,c),x=ut(t.tz,e.tz,c),m=null,g=1/0;for(let M=0;M<s.length;M++){let w=s[M];if(!w.vis)continue;let _=r[w.a],S=r[w.b];la(h,f,u,d,p,x,_.x,_.y,_.z,S.x,S.y,S.z);let b=w.r+.02;Ae.d2<b*b&&Ae.d2<g&&(g=Ae.d2,m={bone:M,u:Ae.t,t:Ae.s,x:ut(_.x,S.x,Ae.t),y:ut(_.y,S.y,Ae.t),z:ut(_.z,S.z,Ae.t),head:!1})}if(wl(a.x,a.y,a.z,h,f,u,d,p,x),Ci.d2<o*o&&Ci.d2<g&&(m={bone:-1,u:.5,t:Ci.t,x:a.x,y:a.y,z:a.z,head:!0}),m)return m}return null}function Rh(i,t,e,n,s){let r=s*s;for(let a=1;a<=n;a++){let o=a/n;if(la(ut(i.bx,t.bx,o),ut(i.by,t.by,o),ut(i.bz,t.bz,o),ut(i.tx,t.tx,o),ut(i.ty,t.ty,o),ut(i.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),Ae.d2<r)return{x:ut(e.bx,e.tx,Ae.t),y:ut(e.by,e.ty,Ae.t),z:ut(e.bz,e.tz,Ae.t)}}return null}var Ch=["lean","hunch","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Pi(){let i={};for(let t of Ch)i[t]=0;return i}function Js(i,t,e,n){for(let s of Ch)i[s]=t[s]+(e[s]-t[s])*n;return i}function rf(i,t,e){for(let n of Ch)i[n]+=(t[n]-i[n])*e}var mn={guard(i,t){return i.lean=.2,i.hunch=.35,i.twist=0,i.side=0,i.headP=-.3,i.lP=.62,i.lB=1.15,i.lS=.34,i.rP=.28,i.rB=.95,i.rS=.3,i.bob=Math.sin(t*2.4)*.012,i},crouch(i,t){return i.lean=.4,i.hunch=.6+.06*Math.sin(t*2.2),i.twist=0,i.side=.08*Math.sin(t*1.3),i.headP=-.55,i.lP=1.05,i.lB=1.95,i.lS=.42,i.rP=.8,i.rB=1.85,i.rS=.38,i.bob=Math.sin(t*2.2)*.02,i},run(i,t){let e=Math.sin(t);return i.lean=.22,i.hunch=.72,i.twist=-e*.16,i.side=0,i.headP=-.32,i.lP=.2+.78*e,i.lB=.8+1.2*Math.max(0,Math.cos(t+.5)),i.rP=.2-.78*e,i.rB=.8+1.2*Math.max(0,Math.cos(t+Math.PI+.5)),i.lS=.18+.1*Math.sin(t+1.3),i.rS=.18-.1*Math.sin(t+1.3),i.bob=-Math.abs(Math.cos(t))*.07+.05,i},kneel(i){return i.lean=.25,i.hunch=.35,i.twist=0,i.side=0,i.headP=-.2,i.lP=1.2,i.lB=1.3,i.lS=.18,i.rP=-.25,i.rB=1.9,i.rS=.15,i.bob=-.06,i},lunge(i){return i.lean=.3,i.hunch=.3,i.side=0,i.headP=-.3,i.lP=.85,i.lB=1,i.lS=.22,i.rP=-.45,i.rB=.35,i.rS=.2,i.bob=-.02,i},skid(i,t,e){let n=Math.sin(t*1.7);i.lean=.12,i.hunch=.2,i.twist=0,i.side=.4*e,i.headP=-.1;let s=.25,r=.12,a=.62,o=.55+.45*n,l=1.3+.3*Math.cos(t*1.7),c=-.12;return e>0?(i.rP=s,i.rB=r,i.rS=a,i.lP=o,i.lB=l,i.lS=c):(i.lP=s,i.lB=r,i.lS=a,i.rP=o,i.rB=l,i.rS=c),i.bob=-.05,i},hop(i,t,e){let n=Math.abs(Math.sin(t));return i.lean=.2,i.hunch=.3,i.twist=0,i.side=0,i.headP=-.25,i.lP=.15+(e?.25*Math.sin(t):0),i.lB=.35+(e?.5*n:0),i.lS=.05,i.rP=i.lP,i.rB=i.lB,i.rS=.05,i.bob=e?n*.13:Math.sin(t)*.01,i},stumps(i,t,e){let n=Math.sin(t);return i.lean=.35,i.hunch=.35,i.twist=0,i.side=0,i.headP=-.45,i.lP=.3+(e?.7*n:0),i.lB=0,i.lS=.2,i.rP=.3-(e?.7*n:0),i.rB=0,i.rS=.2,i.bob=e?Math.abs(n)*.1:0,i},ride(i,t){return i.lean=.12,i.hunch=.25,i.twist=0,i.side=0,i.headP=-.1,i.lP=.95,i.lB=1.55,i.lS=1.15,i.rP=.95,i.rB=1.55,i.rS=1.15,i.bob=Math.sin(t)*.03,i},air(i){return i.lean=.1,i.hunch=.35,i.twist=0,i.side=0,i.headP=.1,i.lP=1,i.lB=1.6,i.lS=.25,i.rP=.4,i.rB=1.4,i.rS=.25,i.bob=0,i}};function Cn(i,t,e,n,s){i[t*3]=e,i[t*3+1]=n,i[t*3+2]=s}function nf(i,t,e,n){return(n.th*Math.cos(i)+n.sh*Math.cos(i-t))*Math.cos(e)}function sf(i,t,e,n,s,r,a,o,l,c,h){let f=Math.cos(c),u=Math.sin(c),d=Math.cos(o),p=s+d*u*h.th,x=r-d*f*h.th,m=a+Math.sin(o)*h.th;Cn(i,e,p,x,m),d=Math.cos(o-l),Cn(i,n,p+d*u*h.sh,x-d*f*h.sh,m+Math.sin(o-l)*h.sh),Cn(i,t,s,r,a)}var Tl=[0,0,0];function ca(i,t,e,n,s,r){let a=Math.cos(i),o=Math.sin(i),l=s*a-r*o,c=s*o+r*a;a=Math.cos(t),o=Math.sin(t);let h=n*a-l*o,f=n*o+l*a;return a=Math.cos(e),o=Math.sin(e),Tl[0]=h*a+c*o,Tl[1]=f,Tl[2]=-h*o+c*a,Tl}function Ih(i,t,e,n,s=3,r=null){let a=-i.lS,o=i.rS,l=0;s&1&&(l=Math.max(l,nf(i.lP,i.lB,a,t))),s&2&&(l=Math.max(l,nf(i.rP,i.rB,o,t)));let c=(r!==null?r:l+n)+i.bob;Cn(e,k.PELVIS,0,c,0);let h=t.spine*.5,f=i.lean+i.hunch,u=ca(i.lean,i.side*.4,i.twist*.25,0,h,0),d=u[0],p=c+u[1],x=u[2];Cn(e,k.SPINE,d,p,x),u=ca(f,i.side,i.twist,0,h,0);let m=d+u[0],g=p+u[1],M=x+u[2];Cn(e,k.NECK,m,g,M);let w=i.headP-.8*i.hunch,_=Math.cos(w),S=Math.sin(w);u=ca(f,i.side,i.twist,0,t.neck*_,t.neck*S+.03*t.neck),Cn(e,k.HEAD,m+u[0],g+u[1],M+u[2]),u=ca(f,i.side,i.twist,-t.shW,-.03,0),Cn(e,k.LSH,m+u[0],g+u[1],M+u[2]),u=ca(f,i.side,i.twist,t.shW,-.03,0),Cn(e,k.RSH,m+u[0],g+u[1],M+u[2]);for(let[y,T,A,L]of[[k.LSH,k.LELB,k.LHAND,-1],[k.RSH,k.RELB,k.RHAND,1]]){let D=e[y*3],O=e[y*3+1],P=e[y*3+2];Cn(e,T,D+L*.04,O-t.ua,P+.05),Cn(e,A,D+L*.04,O-t.ua-t.fa*.9,P+.16)}let b=Math.cos(i.twist*.25),R=Math.sin(i.twist*.25);sf(e,k.LHIP,k.LKNEE,k.LFOOT,-t.hipW*b,c,t.hipW*R,i.lP,i.lB,a,t),sf(e,k.RHIP,k.RKNEE,k.RFOOT,t.hipW*b,c,-t.hipW*R,i.rP,i.rB,o,t)}function af(i,t,e,n,s,r,a,o,l,c,h,f){let u=n-i,d=s-t,p=r-e,x=Math.hypot(u,d,p),m=(a+o)*.999;x<1e-5&&(u=0,d=-1,p=0,x=1e-5);let g=u/x,M=d/x,w=p/x;x>m&&(x=m);let _=(a*a-o*o+x*x)/(2*x),S=Math.sqrt(Math.max(0,a*a-_*_)),b=l*g+c*M+h*w,R=l-g*b,y=c-M*b,T=h-w*b,A=Math.hypot(R,y,T);return A<1e-5&&(R=0,y=-1,T=0,A=1),R/=A,y/=A,T/=A,f[0]=i+g*_+R*S,f[1]=t+M*_+y*S,f[2]=e+w*_+T*S,f[3]=i+g*x,f[4]=t+M*x,f[5]=e+w*x,f}var ai=.135;function fy(i,t,e){let n=ai,s=ai+i*.86,r=ai+i,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([u,,d])=>[u,s,d]),l=[0,r,0],c=[],h=(u,d,p)=>c.push(...u,...d,...p);for(let u=0;u<4;u++){let d=(u+1)%4;h(a[u],o[u],o[d]),h(a[u],o[d],a[d]),h(o[u],l,o[d])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let f=new ye;return f.setAttribute("position",new oe(c,3)),f.computeVertexNormals(),f}var $s={};function py(){return $s.guard||($s.guard=new $t({color:4869975,metalness:.85,roughness:.35}),$s.grip=new $t({color:2760989,roughness:.85})),$s}function cf(i){let e=py(),n=new ge,s=new $t({color:14936302,metalness:.95,roughness:.2}),r=new Lt(fy(i,.07*1,.018*1),s),a=new Lt(new Le(.24*1,.035*1,.05*1),e.guard);a.position.y=.12*1;let o=new Lt(new Ke(.019*1,.022*1,.22*1,10),e.grip),l=new Lt(new Qe(.032*1,12,8),e.guard);l.position.y=-.125*1;for(let c of[r,a,o,l])c.castShadow=c===r,n.add(c);return n.userData.bladeMat=s,n}function Ph(i){i.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==$s.guard&&t.material!==$s.grip&&t.material.dispose())})}var of=new ne,Li=new I,Ji=new I,lf=new I;function Lh(i,t,e,n,s,r,a,o,l,c){Ji.set(s,r,a).normalize(),Li.set(o,l,c),Li.addScaledVector(Ji,-Li.dot(Ji)),Li.lengthSq()<1e-8&&Li.set(1,0,0).addScaledVector(Ji,-Ji.x),Li.normalize(),lf.crossVectors(Li,Ji),of.makeBasis(Li,Ji,lf),i.quaternion.setFromRotationMatrix(of),i.position.set(t,e,n)}var Al=class{constructor(t,e,n,s,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:s.x,y:s.y,z:s.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let s=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*s,c=(o.y-o.py)*s,h=(o.z-o.pz)*s;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-Je*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,f=Math.hypot(l,c,h)||1,u=(f-this.L)/(2*f);this.a.x+=l*u,this.a.y+=c*u,this.a.z+=h*u,this.b.x-=l*u,this.b.y-=c*u,this.b.z-=h*u;for(let d of[this.a,this.b]){let p=n.ground(d.x,d.z);if(d.y<p+.02&&d.py>p-.2){if(d===r&&!n.noStick&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,d.y=p-.12;return}d.y=p+.02,d.px=d.x-(d.x-d.px)*.6,d.pz=d.z-(d.z-d.pz)*.6}}}}render(){let t=this.a,e=this.b;Lh(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var ha=[[0,.165],[.2,.162],[.45,.142],[.72,.172],[.9,.168],[1,.118]];function my(i){for(let t=1;t<ha.length;t++){let[e,n]=ha[t];if(i<=e){let[s,r]=ha[t-1],a=(i-s)/(e-s);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return ha[ha.length-1][1]}var gy={100:[.066,.06],304:[.072,.058],607:[.072,.058],405:[.058,.05],708:[.058,.05],910:[.108,.076],1213:[.108,.076],1011:[.078,.056],1314:[.078,.056]};function Nh(i,t){if(i.kind==="torso")return my(t);let e=gy[i.part]||[i.r,i.r];return e[0]+(e[1]-e[0])*t}var hf=new Map;function xy(i,t,e,n){let s=`${i.part}|${i.sa.toFixed(3)}|${i.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=hf.get(s);if(r)return r;let a=i.len,o=[],l=Nh(i,i.sa)*t,c=Nh(i,i.sb)*t;if(e)for(let f=0;f<5;f++){let u=-Math.PI/2+f/5*Math.PI/2;o.push(new at(l*Math.cos(u),l*Math.sin(u)))}else o.push(new at(1e-4,0));let h=i.kind==="torso"?14:4;for(let f=0;f<=h;f++){let u=f/h;o.push(new at(Nh(i,i.sa+(i.sb-i.sa)*u)*t,u*a))}if(n)for(let f=1;f<=5;f++){let u=f/5*Math.PI/2;o.push(new at(Math.max(1e-4,c*Math.cos(u)),a+c*Math.sin(u)))}else o.push(new at(1e-4,a));return r=new Or(o,12),hf.set(s,r),r}var _y=new Qe(1,18,12),yy=new Qe(1,10,8),vy=new Qe(1,14,10),uf=new Qe(1,12,8),My=new $t({color:14680092,roughness:.45,emissive:3801093}),Sy=new $t({color:16777215,roughness:.25}),by=new $t({color:1118481,roughness:.3}),df=new I(0,1,0),js=new I,ff=new I,hn=new I,Ni=new I,Rl=new I,pf=new ne;function mf(i,t,e){Ni.copy(t).addScaledVector(i,-t.dot(i)),Ni.lengthSq()<1e-8&&Ni.set(1,0,0).addScaledVector(i,-i.x),Ni.normalize(),Rl.crossVectors(Ni,i),pf.makeBasis(Ni,i,Rl),e.setFromRotationMatrix(pf)}var Cl=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new ge,this.mat=new vi({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new ge;let s=new Lt(_y,this.mat),r=this.rag.d.headR;s.scale.set(r*.95,r*1.12,r*1.08),s.castShadow=!0,this.headGroup.add(s),this.pupils=[];for(let a of[-1,1]){let o=new Lt(vy,Sy);o.scale.setScalar(.062*n),o.position.set(a*.058*n,.05*n,.105*n);let l=new Lt(yy,by);l.scale.setScalar(.027*n),l.userData.base=new I(a*.058*n,.05*n,.105*n+.05*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new I(1,0,0),this.headLateral=new I(1,0,0),this.pupilOff=new at,this.pupilVel=new at,this.prevHead=new I,this.deadLook=[new at($(-1,1),$(-1,1)),new at($(-1,1),$(-1,1))],this.extremities=[];for(let[a,o,l]of[[k.LHAND,.07,1],[k.RHAND,.07,1],[k.LFOOT,.082,.75],[k.RFOOT,.082,.75]]){let c=new Lt(uf,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let s=new Lt(xy(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);s.castShadow=!this.shadowOff,n.kind==="torso"&&s.scale.set(1.15,1,.86),this.boneMeshes.set(n,s),this.group.add(s)}for(let[n,s]of this.boneMeshes)e.has(n)||(this.group.remove(s),this.boneMeshes.delete(n));t.pts.forEach((n,s)=>{if(!n.stump||this.stumpMeshes.has(s))return;let r=new Lt(uf,My);r.userData.r=n.stumpR,this.stumpMeshes.set(s,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,s=this.ch,r=e.comp;js.set(n[k.LSH].x-n[k.RSH].x,n[k.LSH].y-n[k.RSH].y,n[k.LSH].z-n[k.RSH].z),js.lengthSq()>1e-6&&this.lateral.copy(js).normalize(),ff.set(n[k.LHIP].x-n[k.RHIP].x,n[k.LHIP].y-n[k.RHIP].y,n[k.LHIP].z-n[k.RHIP].z).normalize();for(let[h,f]of this.boneMeshes){let u=n[h.a],d=n[h.b];hn.set(d.x-u.x,d.y-u.y,d.z-u.z);let p=hn.length();if(!(p<1e-6))if(hn.multiplyScalar(1/p),f.position.set(u.x,u.y,u.z),h.kind==="torso"){let m=!(h.part===k.SPINE*100+k.PELVIS)&&(r[h.a]===r[k.NECK]||r[h.b]===r[k.NECK]);mf(hn,m?this.lateral:ff,f.quaternion)}else f.quaternion.setFromUnitVectors(df,hn)}let a=n[k.HEAD],o=e.neighborOf(k.HEAD);if(o>=0?hn.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():hn.set(0,1,0),r[k.HEAD]===r[k.LSH]&&this.headLateral.copy(this.lateral),mf(hn,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){js.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),Ni.set(1,0,0).applyQuaternion(this.headGroup.quaternion),Rl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-js.dot(Ni)*.004,f=-js.dot(Rl)*.004,u=this.pupilOff,d=this.pupilVel;d.x+=((h-u.x)*260-d.x*10)*t,d.y+=((f-u.y)*260-d.y*10)*t,u.x=bt(u.x+d.x*t,-.022,.022),u.y=bt(u.y+d.y*t,-.022,.022)}let l=s.S;this.pupils.forEach((h,f)=>{let u=h.userData.base;if(s.alive)h.position.set(u.x+this.pupilOff.x*l,u.y+this.pupilOff.y*l,u.z);else{let d=this.deadLook[f];h.position.set(u.x+d.x*.02*l,u.y+d.y*.02*l,u.z-.004*l)}});for(let h of this.extremities){let f=n[h.userData.idx];h.position.set(f.x,f.y,f.z),s.alive&&h.rotation.set(0,s.yaw,0)}for(let[h,f]of this.stumpMeshes){let u=n[h],d=e.neighborOf(h);if(d<0){f.visible=!1;continue}hn.set(u.x-n[d].x,u.y-n[d].y,u.z-n[d].z).normalize();let p=f.userData.r;f.position.set(u.x+hn.x*p*.45,u.y+hn.y*p*.45,u.z+hn.z*p*.45),f.quaternion.setFromUnitVectors(df,hn),f.scale.set(p*1.06,p*.55,p*1.06)}let c=s.flash>0?.55:0;this.mat.emissive.setScalar(c),!s.alive&&!this.shadowOff&&s.game.time-s.deathT>3&&(this.shadowOff=!0,this.group.traverse(h=>{h.castShadow=!1}))}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var bf=7,ua=.95,Nl=1.65,wy=-1.95,Ey=1.7,gf=1.9,xf=230,_f=15,Ty=3.2,Ay=2.2,Ry=2,Dh=36,Cy=3.2,Iy=4.2,yf=.07,Py=[[0,-1],[.7,-.7],[-.7,-.7]],Ly=[[.8,.6],[-.8,.6],[0,1]],Ny={x:0,y:0,z:0},Dy=[-.45,-.35,-.2,-.1,0,.1,.25],Uy=[[k.HEAD,1.3,1.7],[k.NECK,1,1.3],[k.SPINE,.8,1.1],[k.LSH,1,2.1],[k.RSH,1,1.9],[k.LKNEE,1.6,2.5],[k.RKNEE,1.6,2.3]],Il={vy:0,px:0,pz:0},Fy=Pi(),zy=Pi(),vf=Pi(),Mf=Pi(),Sf=Pi(),Pl=[0,0,0,0,0,0],Ll=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.team=e.team||"enemy",this.side=this.team==="enemy"?1:0,this.target=null,this.tgT=0,this.passSide=1,this.titan=!!e.titan,this.heavy=!!e.heavy,this.boss=!!e.boss,this.aimCtl=!this.titan,this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.gy=0,this.vx=0,this.vz=0,this.vy=0,this.slideX=0,this.slideZ=0,this.slip=0,this.slipDir=1,this.skidding=!1,this.brakeK=0,this.low=0,this.lowPref=!0,this.runK=0,this.pelvisPrev={x:0,y:0,z:0,ok:!1},this.swingBias=0,this.swinging=!1,this.lowSwing=0,this.gait=$(.9,1.12),this.gaitOff=$(0,Math.PI*2),this.launchT=0,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.t=$(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.mount=null,this.rope=null,this.flying=!1,this.stickW={x:0,z:1,mag:0},this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.aimK=this.isPlayer?xf:this.heavy?80:this.boss?100:ut(150,xf,this.skill),this.aimMaxW=this.isPlayer?_f:this.heavy?8:this.boss?10:ut(12,_f,this.skill),this.aimC=1.52*Math.sqrt(this.aimK),this.aimA=this.yaw,this.plan=null,this.grudge=null,this.grudgeT=0,this.pitchAdj=0,this.state="approach",this.timer=$(.6,1.2),this.cool=$(.3,.9)*ut(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=Th(this.S),this.footR=.07*this.S,this.pose=mn.guard(Pi(),0),this.tpose=Pi(),this.local=new Float32Array(Ii*3),this.world=new Float32Array(Ii*3),Ih(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new El(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bladeLen=e.bladeLen||ua,this.tip={init:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gx:0,gy:0,gz:0,gvx:0,gvy:0,gvz:0,dx:0,dy:1,dz:0,w:0},this.bladeKRest=this.isPlayer?70:this.heavy?50:60,this.bladeKSwing=this.isPlayer?420:this.heavy?200:this.boss?260:ut(300,420,this.skill),this.swordMesh=cf(this.bladeLen),this.swordMesh.scale.setScalar(this.S),this.view=new Cl(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,s=this.world;for(let r=0;r<Ii;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];s[r*3]=this.x-e*a+t*l,s[r*3+1]=this.y+o,s[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let s=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+s*t[2],e[n+1]=t[1],e[n+2]=s*t[0]+r*t[2]}get legMask(){let t=this.rag.pts;return(t[k.LFOOT].attached?1:0)|(t[k.RFOOT].attached?2:0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.grudgeT=Math.max(0,this.grudgeT-t),this.launchT=Math.max(0,this.launchT-t),this.isPlayer?this.thinkPlayer():this.aimCtl?this.thinkEnemy(t):this.thinkTitan(t),this.aimCtl&&(this.applyStick(),this.updateAim(t)),this.mount?this.ride():this.move(t),!!this.alive)){if(this.aimCtl){let e=this.mount?2.3:Ry,n=en(this.swYaw-this.yaw);Math.abs(n)>e&&(this.mount?(this.swYaw=en(this.yaw+Math.sign(n)*e),this.swW=0):this.yaw=this.swYaw-Math.sign(n)*e)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t),this.skidFx(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let s=Math.hypot(t,e)||1;t/=s,e/=s;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:wy,a1:Ey,wind:n?.05:ut(.62,.24,r)*(this.counterT>0?.6:1)*1.8,dur:n?.2:.5,rec:n?.18:ut(.55,.35,r),hits:new Set,rolled:new Set,kills:0},this.game.onSwingStart(this)}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.aimCtl)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}get curEp(){return this.aimCtl?this.episode:this.swing}thinkPlayer(){let t=this.game,e=t.input.move(),n=Math.sin(t.camYaw),s=Math.cos(t.camYaw),r=n*e.y-s*e.x,a=s*e.y+n*e.x,o=Math.hypot(r,a)||1;this.stickW.x=r/o,this.stickW.z=a/o,this.stickW.mag=e.mag}applyStick(){let t=this.stickW,e=this.legMask,n=e===3?1:e?.62:.42,s=bt((t.mag-.4)/.45,0,1)*this.speed*n;this.want.x=t.x*s,this.want.z=t.z*s,t.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(t.x,t.z))}updateAim(t){let e=en(this.aimYaw-this.swYaw);this.swW=bt(this.swW+(this.aimK*e-this.aimC*this.swW)*t,-this.aimMaxW,this.aimMaxW),this.swYaw=en(this.swYaw+this.swW*t),this.faceYaw=this.swYaw,this.flying=(!!this.rope||this.y-this.gy>.4)&&Math.hypot(this.vx,this.vy,this.vz)>8}ride(){let t=this.mount,e=t.saddle(Ny);this.x=e.x,this.y=e.y,this.z=e.z,this.vx=t.vx,this.vz=t.vz,this.vy=0,this.yaw=t.yaw,this.faceYaw=t.yaw,this.phase=t.phase,this.low=0,this.runK=0}moveAir(t){let e=this.game.world,n=this.rope;if(this.low+=(0-this.low)*cn(5,t),n){let h=n.anchor(),f=h.x-this.x,u=h.y-(this.y+1.1*this.S),d=h.z-this.z,p=Math.hypot(f,u,d)||1;this.vx+=f/p*n.pull*t,this.vy+=u/p*n.pull*t,this.vz+=d/p*n.pull*t,n.t+=t,(p<n.release||n.t>n.maxT)&&(this.rope=null)}this.vy-=Je*(n?.55:.9)*t;let s=Math.exp(-.3*t);this.vx*=s,this.vz*=s;let r=this.stickW;r.mag>.3&&(this.vx+=r.x*7*t,this.vz+=r.z*7*t);let a=Math.hypot(this.vx,this.vy,this.vz);a>30&&(this.vx*=30/a,this.vy*=30/a,this.vz*=30/a),this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let o=Math.hypot(this.x,this.z),l=e.radius-.5;!e.grid&&o>l&&(this.x*=l/o,this.z*=l/o,this.vx*=.3,this.vz*=.3);let c=e.ground(this.x,this.z);if(c>-1/0&&this.y<=c){let h=e.tileMotion(this.x,this.z,Il).vy;this.vy<=h&&(this.y=c,this.gy=c,h>2.5?this.launch(Il):(this.vy=0,this.kb=.35))}c===-1/0&&this.y<this.gy-.3&&(this.falling=!0)}launch(t){this.vy=Math.max(this.vy,Math.min(t.vy*1.1,12)),this.y=this.gy+.13,this.launchT<=0&&(this.vx+=t.px,this.vz+=t.pz,this.isPlayer||(this.stun=Math.max(this.stun,.45))),this.launchT=.4}thinkEnemy(t){let e=this.game,n=this.stickW,s=e.player;this.grudge&&(this.grudgeT<=0||!this.grudge.alive)&&(this.grudge=null);let r=this.grudge||this.pickTarget(t),a=r||s;this.lowPref=!a.mount;let o=a.x-this.x,l=a.z-this.z,c=Math.hypot(o,l)||1,h=Math.atan2(o,l),f=(S,b)=>{this.aimA=en(S);let R=S+this.aimNoise();n.x=Math.sin(R),n.z=Math.cos(R),n.mag=b},u=(S,b,R)=>f(ri(this.aimA,S,b*t),R);n.mag=0;let d=this.local,p=a.local,x=this.y+ut(d[k.NECK*3+1],d[k.PELVIS*3+1],.28)-.1*this.S,m=a.y+ut(p[k.NECK*3+1],p[k.PELVIS*3+1],.4),g=bt(Math.atan2(m-x,Math.max(.8,c-.3)),-.6,.35);if(this.pitchAdj+=(g-this.pitchAdj)*cn(6,t),e.time<.8){u(h,3,.25);return}if(this.timer-=t,this.cool-=t,(!r||this.side&&!s.alive)&&this.state!=="panic"&&(this.state="cheer"),this.mount&&this.state!=="cheer"){this.thinkRider(t,a,o,l,c,h,u);return}let M=this.skill,w=1.6*this.S,_=ut(2.5,5.5,M)*(this.heavy?.6:1);switch(this.state){case"approach":{let S=Math.hypot(this.vx,this.vz);if(c<w+.25+S*S*ut(.05,.1,M)){this.state="fight",u(h,_,.25);break}if(this.cool<=0&&c<w+1+S*.3&&Math.random()<t*ut(.4,2.5,M)&&this.mayAttack(a,!0)){this.startFlick(!0);break}let b=Math.atan2(-o,-l)+bt(this.spread(a,o,l)*.45,-1,1),R=a.x+Math.sin(b)*w-this.x,y=a.z+Math.cos(b)*w-this.z;u(Math.atan2(R,y),4,.95);break}case"fight":if(c>w+.8){this.state="approach";break}u(h,_,c>w+.2?.4+.45*bt((c-w)/1.5,.15,.6):.25),(this.counterT>0||this.cool<=0&&c<w+.35&&this.mayAttack(a))&&this.startFlick(!1);break;case"attack":this.runPlan(t,h,_);break;case"stagger":this.stun<=0&&(this.state="fight",this.plan=null,this.cool=$(.2,.6));break;case"panic":{let S=this.x-s.x,b=this.z-s.z;f(Math.atan2(S,b),Math.min(.95,.4+.45*3.4/this.speed));break}case"cheer":this.y<=this.gy&&!this.falling&&Math.random()<t*2.2&&(this.vy=$(3.2,4.5));break}}pickTarget(t){this.tgT-=t;let e=this.target;if(e&&e.alive&&this.tgT>0)return e;this.tgT=$(.4,.8);let n=null,s=1/0;for(let r of this.game.hostilesOf(this)){if(!r.alive)continue;let a=Math.hypot(r.x-this.x,r.z-this.z);r===e&&(a*=.7),a<s&&(s=a,n=r)}return this.target=n,n}thinkRider(t,e,n,s,r,a,o){if(this.state==="attack"){this.runPlan(t,a,5);return}if(this.state==="stagger"){this.stun<=0&&(this.state="fight",this.cool=$(.3,.7));return}let l=Math.min(r*.3,1.8)*this.passSide,c=s/r,h=-n/r;o(Math.atan2(e.x+c*l-this.x,e.z+h*l-this.z),5,.95),this.cool<=0&&r<3.3*this.S&&this.mayAttack(e,!0)&&(this.passSide=Math.random()<.5?-1:1,this.startFlick(!0))}aimNoise(){let t=this.t,e=this.gaitOff;return(.2*Math.sin(t*1.7+e)+.1*Math.sin(t*4.3+e*2))*(1.2-.6*this.skill)}spread(t,e,n){let s=Math.atan2(-e,-n),r=0;for(let a of this.game.matesOf(this)){if(a===this||a===t||!a.alive||a.state==="panic")continue;let o=en(Math.atan2(a.x-t.x,a.z-t.z)-s);Math.abs(o)<1.6&&(r-=Math.sign(o)*(1.6-Math.abs(o)))}return r*(1.2+this.skill*1.5)}mayAttack(t,e=!1){let n=this.game;if(e||n.spec.type==="battle"||Math.random()<.6+.35*this.skill){let s=Math.atan2(t.x-this.x,t.z-this.z),r=2.2*this.S;for(let a of n.matesOf(this))if(!(a===this||a===t||!a.alive)&&!(Math.hypot(a.x-this.x,a.z-this.z)>r)&&Math.abs(en(Math.atan2(a.x-this.x,a.z-this.z)-s))<1.6)return this.cool=$(.25,.5),!1}return t!==n.player||n.takeAttackToken(this)}mateNear(t){for(let e of this.game.matesOf(this))if(e!==this&&e.alive&&Math.hypot(e.x-this.x,e.z-this.z)<t*this.S)return!0;return!1}startFlick(t){let e=this.skill,n=Math.random()<.5?-1:1;if(!t&&e>.2&&!this.heavy&&Math.random()<.05+.13*e&&!this.mateNear(3))this.plan={kind:"spin",t:0,side:n,base:this.aimA,dur:$(.7,1.1),rec:.35};else{let s=$(1.1,1.5),r=ut(2.3,4.2,e)*(this.heavy?.55:this.boss?.7:1)*(this.counterT>0?1.6:1);this.plan={kind:"flick",t:0,side:n,base:this.aimA,th:s,th2:Math.min(2.9-s,$(1.2,1.5)),wind:s/r,slash:this.heavy?.45:.28,rec:.3,run:t,fired:!1}}this.counterT=0,this.state="attack"}runPlan(t,e,n){let s=this.plan,r=this.stickW;if(!s){this.state="fight";return}s.t+=t,s.base=ri(s.base,e,n*t);let a=(l,c)=>{this.aimA=en(l);let h=l+this.aimNoise();r.x=Math.sin(h),r.z=Math.cos(h),r.mag=c};if(s.kind==="spin"){s.t<s.dur?a(s.base+s.side*10*s.t,.3):s.t<s.dur+s.rec?a(ri(this.aimA,e,5*t),.25):this.endPlan();return}let o=s.run?.7:.3;s.t<s.wind?a(s.base+s.side*s.th*(s.t/s.wind),o):s.t<s.wind+s.slash?a(s.base-s.side*s.th2,o):s.t<s.wind+s.slash+s.rec?a(ri(this.aimA,e,4*t),.25):this.endPlan()}endPlan(){this.plan=null,this.state="fight",this.cool=$(.5,1.2)*ut(1.3,.5,this.skill)*(this.boss?1.5:1)}thinkTitan(t){let e=this.game,n=e.player,s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(s,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=.5*this.S;switch(n.alive||(this.state="cheer"),this.state){case"approach":{let l=this.legMask,c=this.speed*(l===3?1:l?.6:.4);a>o+.2?(this.want.x=s/a*c,this.want.z=r/a*c):this.state="fight";break}case"fight":{this.want.x=s/a*bt((a-o)*3,-2,this.speed),this.want.z=r/a*bt((a-o)*3,-2,this.speed);let l=n.y>3;if(this.hasSword&&this.cool<=0&&a<o+.35+this.skill*.5+(l?4:0)&&e.takeAttackToken(this)){let[c,h]=Ks(l?Ly:Py);this.startSwing(c,h,!1),l&&(this.swing.wind*=.4),this.state="attack"}break}case"attack":this.swing||(this.state="fight",this.cool=$(.5,1.3)*ut(1.3,.55,this.skill));break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=$(.2,.6));break;default:break}}move(t){let e=this.game.world,n=this.y>this.gy+.02||this.vy>.01;if(this.isPlayer&&!this.falling&&(this.rope||n)){this.moveAir(t),this.turn(t);return}let s=this.want.x,r=this.want.z;if((this.stun>0||this.hurtT>0)&&(s*=.2,r*=.2),this.kb>0||this.falling){let _=Math.exp(-5*t);this.vx*=_,this.vz*=_}else if(this.aimCtl&&!n)this.drive(s,r,t);else{let _=(n?3:14)*t,S=s-this.vx,b=r-this.vz,R=Math.hypot(S,b);R>_?(this.vx+=S/R*_,this.vz+=b/R*_):(this.vx=s,this.vz=r)}let a=e.gx,o=e.gz,l=Math.hypot(a,o);if(!n&&!this.falling&&l>yf){let _=Je*.85*(l-yf)/l*t;this.slideX-=a*_,this.slideZ-=o*_}let c=Math.exp(-1.2*t);this.slideX*=c,this.slideZ*=c;let h=this.vx+this.slideX,f=this.vz+this.slideZ;if(this.falling)this.x+=h*t,this.z+=f*t;else{let _=this.x+h*t,S=this.z+f*t,b=.35*this.S;e.solidAt(_,S,this.y)&&(e.solidAt(_,this.z,this.y)?e.solidAt(this.x,S,this.y)?(_=this.x,S=this.z,this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0):(_=this.x,this.vx=0,this.slideX=0):(S=this.z,this.vz=0,this.slideZ=0)),e.inside(_,S,b)||(this.kb>0||n)&&e.canFall&&!e.wallH?(this.x=_,this.z=S):this.overWall(e,h,f)?(this.x=_,this.z=S):e.clampInside(_,S,b,this)||(e.inside(_,this.z,b)?(this.x=_,this.vz=0,this.slideZ=0):e.inside(this.x,S,b)?(this.z=S,this.vx=0,this.slideX=0):(this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0));let R=e.ground(this.x,this.z);R===-1/0?this.falling=!0:this.falling||(this.gy=R)}!this.falling&&e.grid&&this.y<=this.gy+.12&&e.tileMotion(this.x,this.z,Il).vy>2.5&&this.launch(Il),!this.falling&&this.vy<=0&&this.y<=this.gy+.12?(this.y=this.gy,this.vy=0):(this.vy-=Je*t,this.y+=this.vy*t,!this.falling&&this.y<=this.gy&&(this.y=this.gy,this.vy=0)),this.falling&&this.y<this.gy-e.fallDepth&&this.game.onFell(this);let u=Math.sin(this.yaw),d=Math.cos(this.yaw),p=-h*d+f*u,x=n||this.falling?0:bt((Math.abs(p)-.7)/2,0,1);this.slip+=(x-this.slip)*cn(10,t),Math.abs(p)>.3&&(this.slipDir=Math.sign(p));let m=Math.hypot(h,f),g=Math.max(this.speed,1),M=0;if(!n&&!this.falling&&m>.45*g){let _=(this.want.x*h+this.want.z*f)/m;M=bt((m-.45*g)/(.35*g),0,1)*bt(1-_/m,0,1)}this.brakeK+=(M-this.brakeK)*cn(M>this.brakeK?12:5,t);let w=!n&&!this.falling&&this.lowPref&&Math.hypot(this.want.x,this.want.z)<.5&&m<2.5?1:0;w=Math.max(w,this.brakeK),this.low+=(w-this.low)*cn(w>this.low?7:5,t),this.turn(t)}drive(t,e,n){let s=Math.hypot(this.vx,this.vz);if(s<.3){let g=Dh*n,M=t-this.vx,w=e-this.vz,_=Math.hypot(M,w);_>g?(this.vx+=M/_*g,this.vz+=w/_*g):(this.vx=t,this.vz=e);return}let r=Math.max(this.speed,1),a=Math.sqrt(bt((s-.15*r)/(.55*r),0,1)),o=this.legMask===3?1:.7,l=(this.isPlayer?20:15)*o,c=ut(Dh,Cy,a)*o,h=ut(Dh,Iy,a)*o,f=this.vx/s,u=this.vz/s,d=t*f+e*u,p=-t*u+e*f,x=bt(d-s,-h*n,l*n),m=bt(p,-c*n,c*n);this.vx+=f*x-u*m,this.vz+=u*x+f*m}overWall(t,e,n){if(!t.wallH)return!1;let s=Math.abs(this.x),r=Math.abs(this.z),a=s>r?Math.sign(this.x):0,o=s>r?0:Math.sign(this.z);return a*e+o*n<t.overSpeed?!1:(this.falling=!0,this.vx=e,this.vz=n,this.slideX=0,this.slideZ=0,this.vy=3,this.kb=1,!0)}turn(t){let e=this.isPlayer?8:this.titan?1.2:this.heavy?2.5:7;this.yaw=ri(this.yaw,this.faceYaw,e*t);let n=this.vx+this.slideX,s=this.vz+this.slideZ,r=Math.hypot(n,s),a=n*this.forwardX+s*this.forwardZ<-.3*r?-1:1,o=this.legMask;this.phase+=(a*r+this.slip*5)*t/((o===3?gf:gf*.6)*this.gait*this.S)*Math.PI*2}skidFx(t){let e=Math.max(this.slip,this.brakeK);if(e>.4&&this.y<=this.gy+.05&&Math.random()<t*45*e){let n=this.rag.pts[Math.random()<.5?k.LFOOT:k.RFOOT];n.attached&&this.game.fx.dust(n.x,n.y,n.z,-this.vx*.2,-this.vz*.2)}if(e>.55&&!this.skidding){this.skidding=!0;let n=this.game.player;(this.isPlayer||Math.hypot(n.x-this.x,n.z-this.z)<7)&&fe.skid()}else e<.3&&(this.skidding=!1)}animate(t){let e=this.tpose,n=Math.hypot(this.vx+this.slideX,this.vz+this.slideZ),s=this.legMask,r=null;if(this.mount)mn.ride(e,this.mount.phase),r=.02;else if(this.y>this.gy+.05||this.falling)mn.air(e,this.t);else if(s===3){let x=bt(n/(this.isPlayer?3.2:2),0,1);this.runK=x,Js(Sf,mn.guard(Fy,this.t),mn.crouch(vf,this.t+this.gaitOff),this.low),Js(e,Sf,mn.run(zy,this.phase),x);let m=this.gaitOff;e.side+=Math.sin(this.phase*.5+m)*.16*x+Math.sin(this.t*1.1+m)*.05*(1-x),e.hunch+=Math.sin(this.phase*2+.6)*.12*x,e.headP+=Math.sin(this.phase*2)*.09*x,this.slip>.02&&Js(e,e,mn.skid(Mf,this.phase,this.slipDir),this.slip*.85),this.brakeK>.03&&Js(e,e,mn.kneel(Mf),this.brakeK*.9*(1-this.slip*.6))}else if(s)mn.hop(e,this.phase,n>.5),e.side=s===1?.1:-.1,this.runK=0;else{mn.stumps(e,this.phase,n>.5);let x=this.rag.pts;r=x[k.LKNEE].attached&&x[k.RKNEE].attached?this.d.th*.85+.08*this.S:.3*this.S}let a=this.swingMode(),o=this.swing,l=0,c=0;if(this.aimCtl){let x=en(this.yaw-this.swYaw);e.twist=bt(x*.75,-1.1,1.1)+Math.sin(this.phase)*.2*this.runK;let m=this.lowSwing;e.hunch+=.3*m,e.lB+=.35*m,e.rB+=.35*m,e.lP+=.2*m,e.rP+=.1*m;let g=bt(Math.abs(this.swW)/15,0,1);e.hunch+=g*.3,e.side+=bt(-this.swW/15,-1,1)*.25}else if(a){let x=m=>o.ux*Math.sin(m)*.55;if(a===1){let m=oa(o.t/o.wind);l=x(o.a0)*m,c=m*.5}else if(a===2){let m=aa((o.t-o.wind)/o.dur);l=x(ut(o.a0,o.a1,m)),c=1}else{let m=oa((o.t-o.wind-o.dur)/o.rec);l=x(o.a1)*(1-m),c=1-m}Js(e,e,mn.lunge(vf),c*(n>1.5?.4:1)),e.twist=l,o.uy<-.5&&a===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.2,e.hunch=-.15,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.hunch=-.1,e.headP=-.4),rf(this.pose,e,cn(a===2||this.aimCtl?24:12,t)),Ih(this.pose,this.d,this.local,this.footR,s,r),this.aimCtl&&this.jiggle(),this.computeSword(t),this.applyArms(),this.localToWorld();let h=this.rag,f=this.world,u=k.PELVIS*3,d=this.pelvisPrev;t>0&&d.ok?h.setVel((f[u]-d.x)/t,(f[u+1]-d.y)/t,(f[u+2]-d.z)/t):h.setVel(this.vx,this.vy,this.vz),d.x=f[u],d.y=f[u+1],d.z=f[u+2],d.ok=!0,h.tgt.set(f);let p=this.hasSword;h.pts[k.LHAND].pin=p,h.pts[k.RHAND].pin=p}jiggle(){let t=this.local,e=this.t,n=this.gaitOff,s=(.03+.03*this.runK)*this.S;for(let[r,a,o]of Uy){let l=r*3,c=n+r*1.7;t[l]+=Math.sin(e*o*2.1+c)*s*a,t[l+1]+=Math.sin(e*o*1.3+c*1.3)*s*a*.5,t[l+2]+=Math.sin(e*o*1.7+c*.7)*s*a}}computeSword(t=0){let e=this.local,n=this.S,s=e[k.NECK*3],r=e[k.NECK*3+1],a=e[k.NECK*3+2],o=e[k.PELVIS*3],l=e[k.PELVIS*3+1],c=e[k.PELVIS*3+2],h=ut(s,o,.28),f=ut(r,l,.28),u=ut(a,c,.28)+.1*n,d=[.38,.78,.5],p=Math.hypot(d[0],d[1],d[2]);d[0]/=p,d[1]/=p,d[2]/=p;let x=[h+.14*n,f-.16*n,u+.26*n],m=this.swing,g=this.swingMode(),M=.3*n,w=(P,F,V,H)=>{let tt=Math.sin(P),X=Math.cos(P);F[0]=m.ux*tt,F[1]=m.uy*tt,F[2]=X,V[0]=m.ux*X,V[1]=m.uy*X,V[2]=-tt,H[0]=h+F[0]*M,H[1]=f+F[1]*M,H[2]=u+F[2]*M},_=this.ld,S=this.lw,b=this.lg,R=this.aimCtl&&this.hasSword;if(this.aimCtl&&!this.hasSword&&(this.episode=null),R&&!(this.blockT>0&&!this.isPlayer)){let P=en(this.yaw-this.swYaw),F=this.flying?1:bt(Math.abs(this.swW)/6,0,1),V=this.mount?0:this.low,H=this.runK,tt=ut(ut(.75,1,H),.62,V),X=Math.abs(this.swW);X>2.5&&!this.swinging?(this.swinging=!0,this.swingBias=Ks(Dy)):X<1&&(this.swinging=!1);let j=bt((.8-this.stickW.mag)/.5,0,1),et=(this.mount?-.35:ut(-.1,-.46,Math.max(V,j*.8)))+this.swingBias+.12*Math.sign(this.swW),Ct=Math.max(-.8,ut(tt,et,F)+this.pitchAdj);this.lowSwing=F*bt((-.1-et)/.45,0,1);let wt=Math.sin(P),ee=Math.cos(P),Yt=Math.cos(Ct);_[0]=wt*Yt,_[1]=Math.sin(Ct),_[2]=ee*Yt,S[0]=ee,S[1]=0,S[2]=-wt;let ie=(.3+F*(.12+.18*V))*n,Z=Math.sin(this.phase*2)*.045*n*H;b[0]=h+wt*ie+.07*n*H*(1-F),b[1]=f-ut(.12,.3,V)*n+Z-.18*n*this.lowSwing,b[2]=u-.1*n+ee*ie}else if(this.blockT>0&&!g){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(_[0]=1,_[1]=.15,_[2]=.2,b[0]=h-.3*n,b[1]=f+.38*n,b[2]=u+.22*n):(_[0]=.1,_[1]=1,_[2]=.15,b[0]=h+this.blockUx*.3*n,b[1]=f-.05*n,b[2]=u+.3*n);let P=Math.hypot(_[0],_[1],_[2]);_[0]/=P,_[1]/=P,_[2]/=P,S[0]=0,S[1]=0,S[2]=1}else if(!g||!this.hasSword)_[0]=d[0],_[1]=d[1],_[2]=d[2],S[0]=1,S[1]=0,S[2]=0,b[0]=x[0],b[1]=x[1],b[2]=x[2];else if(g===2){let P=aa((m.t-m.wind)/m.dur);w(ut(m.a0,m.a1,P),_,S,b),b[2]+=.08*n*P}else{let P=[0,0,0],F=[0,0,0],V=[0,0,0],H;g===1?(w(m.a0,P,F,V),H=1-oa(m.t/m.wind)):(w(m.a1,P,F,V),H=oa((m.t-m.wind-m.dur)/m.rec));for(let X=0;X<3;X++)_[X]=ut(P[X],d[X],H),S[X]=ut(F[X],X===0?1:0,H),b[X]=ut(V[X],x[X],H);let tt=Math.hypot(_[0],_[1],_[2])||1;_[0]/=tt,_[1]/=tt,_[2]/=tt}let y=Math.sin(this.yaw),T=Math.cos(this.yaw),A=this.sw;A.gx=this.x-T*b[0]+y*b[2],A.gy=this.y+b[1],A.gz=this.z+y*b[0]+T*b[2],A.dx=-T*_[0]+y*_[2],A.dy=_[1],A.dz=y*_[0]+T*_[2],A.wx=-T*S[0]+y*S[2],A.wy=S[1],A.wz=y*S[0]+T*S[2],R&&this.simBlade(t);let L=ai*n,D=(ai+this.bladeLen)*n,O=this.bCur;O.bx=A.gx+A.dx*L,O.by=A.gy+A.dy*L,O.bz=A.gz+A.dz*L,O.tx=A.gx+A.dx*D,O.ty=A.gy+A.dy*D,O.tz=A.gz+A.dz*D}copyBlade(){let t=this.bCur,e=this.bPrev;e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz}simBlade(t){let e=this.sw,n=this.tip,s=(ai+this.bladeLen)*this.S,r=e.gx,a=e.gy,o=e.gz;if(!n.init||t<=0){n.x=r+e.dx*s,n.y=a+e.dy*s,n.z=o+e.dz*s,n.vx=n.vy=n.vz=0,n.gvx=n.gvy=n.gvz=0,n.gx=r,n.gy=a,n.gz=o,n.dx=e.dx,n.dy=e.dy,n.dz=e.dz,n.w=0,n.init=!0;return}let l=(r-n.gx)/t,c=(a-n.gy)/t,h=(o-n.gz)/t;n.gx=r,n.gy=a,n.gz=o,n.gvx=l,n.gvy=c,n.gvz=h;let f=this.flying||this.blockT>0?1:bt(Math.abs(this.swW)/4,0,1),u=ut(this.mount?this.bladeKRest*2:this.bladeKRest,this.bladeKSwing,f),d=2*ut(.35,.6,f)*Math.sqrt(u),p=r+e.dx*s,x=a+e.dy*s,m=o+e.dz*s;n.vx+=((p-n.x)*u-(n.vx-l)*d)*t,n.vy+=((x-n.y)*u-(n.vy-c)*d-Je*.8)*t,n.vz+=((m-n.z)*u-(n.vz-h)*d)*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;let g=n.x-r,M=n.y-a,w=n.z-o,_=Math.hypot(g,M,w)||1e-6;g/=_,M/=_,w/=_;let b=this.game.world.ground(r+g*s,o+w*s);if(b>-1/0&&a+M*s<b+.03){let wt=bt((b+.03-a)/s,-1,1),ee=Math.hypot(g,w),Yt=Math.sqrt(Math.max(0,1-wt*wt));if(ee>1e-4?(g=g/ee*Yt,w=w/ee*Yt):(g=Math.sin(this.swYaw)*Yt,w=Math.cos(this.swYaw)*Yt),M=wt,n.vy<c&&(n.vy=c),Math.hypot(n.vx-l,n.vz-h)>3){Math.random()<.5&&this.game.fx.sparks(r+g*s,b+.03,o+w*s,2);let Z=this.game.player;(this.isPlayer||Math.hypot(Z.x-this.x,Z.z-this.z)<6)&&fe.scrape()}}n.x=r+g*s,n.y=a+M*s,n.z=o+w*s;let R=n.vx-l,y=n.vy-c,T=n.vz-h,A=R*g+y*M+T*w;n.vx-=g*A,n.vy-=M*A,n.vz-=w*A;let L=g-n.dx,D=M-n.dy,O=w-n.dz,P=Math.hypot(L,D,O),F=n.dz*g-n.dx*w;n.dx=g,n.dy=M,n.dz=w,n.w=P/t,e.dx=g,e.dy=M,e.dz=w;let V=w,H=-g,tt=Math.hypot(V,H);tt<.2?(V=-Math.cos(this.yaw),H=Math.sin(this.yaw)):(V/=tt,H/=tt),e.wx=V,e.wy=0,e.wz=H;let X=Math.sin(this.yaw),j=Math.cos(this.yaw);this.ld[0]=-j*g+X*w,this.ld[1]=M,this.ld[2]=X*g+j*w;let Ct=(this.isPlayer?Math.abs(this.swW)>2:this.state==="attack")||this.flying?Ty:this.isPlayer?7.5:10;this.updateEpisode(n.w,Ct,P>1e-6&&Math.abs(F)>.3*P?Math.sign(F):0)}updateEpisode(t,e,n){let s=this.episode;if((t>e||this.flying)&&this.hasSword){let r=t>e?n||(s&&s.dir!==2?s.dir:3):2;s&&s.dir===3&&(r===1||r===-1)&&(s.dir=r,s.ux=-r,s.uy=0,r=s.dir),(!s||s.dir!==r)&&(this.episode={hits:new Set,rolled:new Set,kills:0,dir:r,ux:r===3?0:r===2?1:-r,uy:r===3?-1:0},this.game.onSwingStart(this),r!==2&&t>6&&(this.isPlayer?fe.swoosh(1):fe.enemySwing()))}else t<Ay&&(this.episode=null)}bounceBlade(){let t=this.tip;t.init&&(t.vx=t.gvx-(t.vx-t.gvx)*.45,t.vy=t.gvy-(t.vy-t.gvy)*.45,t.vz=t.gvz-(t.vz-t.gvz)*.45)}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,s=this.lg,r=this.ld,a=[[k.RSH,k.RELB,k.RHAND,.05*e,.8],[k.LSH,k.LELB,k.LHAND,-.065*e,-.8]];for(let[o,l,c,h,f]of a){let u=s[0]+r[0]*h,d=s[1]+r[1]*h,p=s[2]+r[2]*h;af(t[o*3],t[o*3+1],t[o*3+2],u,d,p,n.ua,n.fa,f,-1,-.3,Pl),t[l*3]=Pl[0],t[l*3+1]=Pl[1],t[l*3+2]=Pl[2],t[c*3]=u,t[c*3+1]=d,t[c*3+2]=p}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;!t[k.LHAND].attached&&!t[k.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.plan=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function Oy(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new Gi(i)}var Qs=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new ye,this.attr=new Te(this.pos,3),this.attr.setUsage(Hs),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new Er(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max&&this.list.shift(),this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},Dl=class{constructor(t){let e=Oy();this.blood=new Qs(t,2600,new ni({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.spark=new Qs(t,400,new ni({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new Qs(t,600,new ni({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.dustPool=new Qs(t,500,new ni({color:15327956,size:.11,map:e,alphaTest:.5,sizeAttenuation:!0,transparent:!0,opacity:.75})),this.maxDecals=700;let n=new Rr(1,12).rotateX(-Math.PI/2),s=new ei({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new kn(n,s,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new ne,this._q=new $e,this._s=new I,this._p=new I,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.dustPool.list.length=0,this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,s,r,a,o,l,c){let h=Math.hypot(s,r,a)||1,f=s/h,u=r/h,d=a/h;for(let p=0;p<o;p++){let x=c*$(.25,1.15);this.blood.add({x:t,y:e,z:n,vx:(f+$(-l,l))*x,vy:(u+$(-l,l))*x+$(0,1),vz:(d+$(-l,l))*x,life:$(1,2)})}}sparks(t,e,n,s){for(let r=0;r<s;r++)this.spark.add({x:t,y:e,z:n,vx:$(-5,5),vy:$(-2,5),vz:$(-5,5),life:$(.15,.35)})}dust(t,e,n,s,r){for(let a=0;a<2;a++)this.dustPool.add({x:t+$(-.08,.08),y:e+.03,z:n+$(-.08,.08),vx:s+$(-.5,.5),vy:$(.3,1.1),vz:r+$(-.5,.5),life:$(.3,.6)})}setDecalParent(t){this.decals.parent!==t&&t.add(this.decals)}splash(t,e,n){for(let s=0;s<40;s++)this.water.add({x:t+$(-.3,.3),y:e,z:n+$(-.3,.3),vx:$(-1.5,1.5),vy:$(2,6),vz:$(-1.5,1.5),life:$(.5,1)})}bleed(t,e,n){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0})}popup(t,e,n,s,r,a,o){let l=0;for(let c of this.popups)c.age<.4&&Math.hypot(c.x-t,c.z-n)<1.2&&l++;this.popups.push({x:t,y:e+l*.42,z:n,text:s,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,s){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),$(0,Math.PI));let a=s*$(.8,1.4);r.compose(this._p,this._q,new I(a,1,s)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let r of this.bleeders){r.t+=t;let a=r.rag;if(a.removed){r.t=r.dur;continue}let o=a.pts[r.idx],l=a.neighborOf(r.idx);if(l<0)continue;let c=a.pts[l],h=o.x-c.x,f=o.y-c.y,u=o.z-c.z,d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d;let p=1-r.t/r.dur,x=.55+.45*Math.sin(r.t*16);r.acc+=t*120*p*x;let m=(o.x-o.px)/t,g=(o.y-o.py)/t,M=(o.z-o.pz)/t;for(;r.acc>=1;){r.acc-=1;let w=$(1.5,3.8)*(.4+p);this.blood.add({x:o.x,y:o.y,z:o.z,vx:h*w+$(-.6,.6)+m*.5,vy:f*w+$(-.6,.6)+g*.5,vz:u*w+$(-.6,.6)+M*.5,life:$(.8,1.5)})}}this.bleeders=this.bleeders.filter(r=>r.t<r.dur);let n=this.blood.list,s=0;for(let r=0;r<n.length;r++){let a=n[r];a.life-=t,a.vy-=Je*.8*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let o=e.ground(a.x,a.z);if(a.y<=o+.01){Math.random()<.55&&this.addDecal(a.x,e.decalLocal?0:o,a.z,$(.025,.07));continue}a.y<e.waterY||a.life>0&&(n[s++]=a)}n.length=s;for(let r of[this.spark,this.water,this.dustPool]){let a=r.list,o=0;for(let l=0;l<a.length;l++){let c=a[l];if(c.life-=t,r===this.spark)c.vx*=.92,c.vz*=.92,c.vy-=6*t;else if(r===this.dustPool){let h=Math.exp(-3*t);c.vx*=h,c.vz*=h,c.vy*=h}else c.vy-=Je*.6*t;c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life>0&&(a[o++]=c)}a.length=o}for(let r of this.popups)r.age+=t,r.y+=.5*t;this.popups=this.popups.filter(r=>r.age<r.life)}flush(){this.blood.flush(),this.spark.flush(),this.water.flush(),this.dustPool.flush()}};function Ef(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=wf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let p=wf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function wf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Te(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Wn(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Gi(s);return r.colorSpace=Oe,n&&(r.wrapS=r.wrapT=Qn,r.repeat.set(n,n)),r.anisotropy=8,r}function By(i,t,e){let s=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*s,(o+.15+Math.random()*.7)*s,Math.random()]);let a=i.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/s),h=Math.floor(o/s),f=1e9,u=1e9,d=0;for(let g=-1;g<=1;g++)for(let M=-1;M<=1;M++){let w=(c+M+7)%7,_=(h+g+7)%7,S=r[_*7+w],b=S[0]+(c+M-w)*s,R=S[1]+(h+g-_)*s,y=Math.hypot(b-l,R-o);y<f?(u=f,f=y,d=S[2]):y<u&&(u=y)}let p=bt((u-f)/5,0,1),x=(o*t+l)*4,m=222+d*18-f/s*18;a.data[x]=Uh(120,m-14,p),a.data[x+1]=Uh(160,m+6,p),a.data[x+2]=Uh(200,m+20,p),a.data[x+3]=255}i.putImageData(a,0,0)}function Uh(i,t,e){return i+(t-i)*e}function ky(i,t,e){i.fillStyle="#4c9427",i.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];i.lineCap="round";for(let s=0;s<4200;s++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;i.strokeStyle=n[s%n.length],i.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])i.beginPath(),i.moveTo(r+c,a+h),i.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),i.stroke()}}function Hy(i,t,e){i.fillStyle="#d9a66e",i.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)i.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",i.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);i.strokeStyle="rgba(170,120,70,0.25)",i.lineWidth=2;for(let n=8;n<e;n+=22){i.beginPath();for(let s=0;s<=t;s+=8)i.lineTo(s,n+Math.sin(s/t*Math.PI*4+n)*4);i.stroke()}}function Vy(i,t,e){i.clearRect(0,0,t,e);let n=t/2;i.strokeStyle="#6f9a2b",i.lineWidth=3,i.beginPath(),i.moveTo(n,e),i.quadraticCurveTo(n+4,e*.5,n,6),i.stroke();for(let s=0;s<26;s++){let r=s/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;i.fillStyle=l;for(let c of[-1,1])i.save(),i.translate(n,a),i.rotate(c*(1.05-r*.25)),i.beginPath(),i.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),i.fill(),i.restore()}}function Gy(i,t,e){i.clearRect(0,0,t,e),i.lineCap="round";for(let n=0;n<18;n++){let s=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;i.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],i.lineWidth=2+Math.random()*2,i.beginPath(),i.moveTo(s,e),i.quadraticCurveTo(s,e*.6,s+a,r),i.stroke()}}function Tf(i,t,e){i.clearRect(0,0,t,e);for(let n=0;n<14;n++){let s=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(s,r,a,0,Math.PI*2),i.fill()}}function Af(i,t,e,n){let s=new yi(i,t,11,6);s.index&&(s=s.toNonIndexed());let r=s.attributes.position,a=new I;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);let u=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,d=1-(a.y+t/2)/t;a.x+=(Rn(u)-.5)*i*.35*d,a.z+=(Rn(u+1)-.5)*i*.35*d,a.y+=(Rn(u+2)-.5)*t*.12*d,r.setXYZ(f,a.x,a.y,a.z)}s.computeVertexNormals();let o=new Float32Array(r.count*3),l=s.attributes.normal,c=new Ot;for(let f=0;f<r.count;f+=3){let d=((r.getY(f)+r.getY(f+1)+r.getY(f+2))/3+t/2)/t,p=l.getY(f);d>.82?c.set(n.snow):p>.55&&d<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(Rn(f*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(f+x)*3]=c.r,o[(f+x)*3+1]=c.g,o[(f+x)*3+2]=c.b}s.setAttribute("color",new Te(o,3));let h=new Lt(s,new $t({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function Rf(i,t,e){let n=new Ps(i,0);n.index&&(n=n.toNonIndexed());let s=n.attributes.position;for(let a=0;a<s.count;a++){let o=Math.round(s.getX(a)*50)+Math.round(s.getY(a)*30)*3+Math.round(s.getZ(a)*70)*7+t;s.setXYZ(a,s.getX(a)*(1+(Rn(o)-.5)*.3),s.getY(a)*.7,s.getZ(a)*(1+(Rn(o+3)-.5)*.3))}n.computeVertexNormals();let r=new Lt(n,new $t({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function Cf(i,t,e,n){let s=[];for(let o=0;o<i;o++){let l=new wn(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/i*Math.PI*2+Math.random()*.5),s.push(l)}let r=Ef(s),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function If(i,t,e,n,s,r,a,o){let l=new kn(i,t,e),c=new ne,h=new $e,f=new I,u=new I,d=new I(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let m=Math.random()*Math.PI*2,g=n+Math.sqrt(Math.random())*(s-n),M=Math.cos(m)*g,w=Math.sin(m)*g;if(o&&o(M,w))continue;let _=r+Math.random()*(a-r);u.set(M,0,w),h.setFromAxisAngle(d,Math.random()*Math.PI*2),f.set(_,_*(.8+Math.random()*.4),_),c.compose(u,h,f),l.setMatrixAt(p++,c)}return l.count=p,l}function Wy(i,t,e){i.fillStyle="#cfd3d8",i.fillRect(0,0,t,e);for(let r=0;r<2600;r++)i.fillStyle=Math.random()<.5?"rgba(0,0,0,0.035)":"rgba(255,255,255,0.07)",i.fillRect(Math.random()*t,Math.random()*e,2,2);i.strokeStyle="#a3a9b0",i.lineWidth=3;let n=4,s=t/n;for(let r=0;r<=n;r++)i.beginPath(),i.moveTo(r*s,0),i.lineTo(r*s,e),i.stroke(),i.beginPath(),i.moveTo(0,r*s),i.lineTo(t,r*s),i.stroke()}function Xy(i,t,e){i.fillStyle="#f3efe8",i.fillRect(0,0,t,e),i.fillStyle="#d7262d";for(let n=-t;n<=2*t;n+=t/2)i.beginPath(),i.moveTo(n,0),i.lineTo(n+t/4,0),i.lineTo(n+t/4-e,e),i.lineTo(n-e,e),i.closePath(),i.fill()}var Df=.45,li=8;function qy(i,t){let e=new ye,n=i*(li+1);e.setAttribute("position",new Te(new Float32Array(n*3),3).setUsage(Hs)),e.setAttribute("normal",new Te(new Float32Array(n*3),3).setUsage(Hs));let s=new Float32Array(n*2),r=[];for(let a=0;a<i;a++)for(let o=0;o<=li;o++){let l=a*(li+1)+o;if(s[l*2]=o/li,s[l*2+1]=a*t/Df,a<i-1&&o<li){let c=l+li+1;r.push(l,c,l+1,c,c+1,l+1)}}return e.setAttribute("uv",new Te(s,2)),e.setIndex(r),e}var oi=new I,Xn=new I,Ul=new I,da=new I,Yy=new I(0,1,0);function Pf(i,t,e){let n=i.attributes.position.array,s=i.attributes.normal.array,r=t.length-1;for(let a=0;a<=r;a++){let o=t[Math.max(0,a-1)],l=t[Math.min(r,a+1)];oi.set(l.x-o.x,l.y-o.y,l.z-o.z),oi.lengthSq()<1e-10&&oi.set(0,1,0),oi.normalize(),a===0?(Xn.crossVectors(oi,da.set(1,0,0)),Xn.lengthSq()<1e-6&&Xn.crossVectors(oi,da.set(0,0,1))):Xn.addScaledVector(oi,-oi.dot(Xn)),Xn.normalize(),Ul.crossVectors(oi,Xn);let c=t[a];for(let h=0;h<=li;h++){let f=h/li*Math.PI*2,u=Math.cos(f),d=Math.sin(f),p=(a*(li+1)+h)*3,x=Xn.x*u+Ul.x*d,m=Xn.y*u+Ul.y*d,g=Xn.z*u+Ul.z*d;s[p]=x,s[p+1]=m,s[p+2]=g,n[p]=c.x+x*e,n[p+1]=c.y+m*e,n[p+2]=c.z+g*e}}i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0}function Lf(i,t,e,n,s,r,a,o){da.set(r-e,a-n,o-s);let l=da.length()||.001;i.position.set(e,n,s),i.scale.set(1,l/t,1),i.quaternion.setFromUnitVectors(Yy,da.multiplyScalar(1/l))}var zh=[[8.4,8.4],[-8.4,8.4],[8.4,-8.4],[-8.4,-8.4],[9.6,1.3],[-9.6,-1.3],[-3.2,9.6],[3.2,-9.6]];for(let i=0;i<6;i++){let t=(20+i*60)*Math.PI/180,e=(50+i*60)*Math.PI/180;zh.push([+(Math.sin(t)*4.5).toFixed(2),+(Math.cos(t)*4.5).toFixed(2)]),zh.push([+(Math.sin(e)*7.2).toFixed(2),+(Math.cos(e)*7.2).toFixed(2)])}var Nf=1.6,Fh=.42,Zy=1.4,Ky=29,Jy=new Ot(2614271),$y=new Ot(16722902),jy=new Ot(2829876);function Qy(){let i=new We({uniforms:{top:{value:new Ot},horizon:{value:new Ot},bottom:{value:new Ot}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:Ne,depthWrite:!1,fog:!1}),t=new Lt(new Qe(400,32,16),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function tv(i,t){let e=gl.merge([_t.fog,{time:{value:0},deep:{value:new Ot(i)},light:{value:new Ot(t)}}]);return new We({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
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
      }`})}var Fl=class{constructor(t){this.scene=t,this.t=0,this.sky=Qy(),t.add(this.sky),this.hemi=new Hr(16777215,7829367,1.1),t.add(this.hemi);let e=new Xr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new I(.5,1,.35).normalize(),this.gx=0,this.gz=0,this.gvx=0,this.gvz=0,this.tgx=0,this.tgz=0,this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo(),roof:this.buildRoof(),grid:this.buildGrid()},this._m4=new ne,this._col=new Ot;for(let s of Object.values(this.envs))s.group.visible=!1,t.add(s.group);this.env=null}set(t,e=!1){this.env&&(this.env.group.visible=!1);let n=this.envs[t];this.env=n,this.name=t,n.group.visible=!0,this.radius=e?62:n.radius;for(let o of n.props||[])o.visible=!e;let s=this.sun.shadow.camera,r=e?26:14;s.right!==r&&(s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.far=e?120:70,s.updateProjectionMatrix()),this.shadowDist=e?60:30;let a=this.sky.material.uniforms;a.top.value.set(n.sky[0]),a.horizon.value.set(n.sky[1]),a.bottom.value.set(n.sky[2]),this.scene.fog=new vr(n.sky[1],n.fog[0],n.fog[1]),this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.sun.color.set(n.sun[0]),this.sun.intensity=n.sun[1],this.sunDir.set(n.sun[2],n.sun[3],n.sun[4]).normalize(),this.waterY=n.waterY,this.canFall=n.canFall,this.wallH=n.wallH||0,this.overSpeed=n.overSpeed||0,this.fallDepth=n.fallDepth||.9,this.gx=this.gz=this.gvx=this.gvz=this.tgx=this.tgz=0,this.noStick=!!n.grid,n.roof&&this.resetRoof(),n.grid&&this.resetGrid()}get decalLocal(){return!!(this.env&&(this.env.roof||this.env.grid))}get ropes(){return this.env&&this.env.roof?this.env.ropes:null}get grid(){return!!(this.env&&this.env.grid)}get tilt(){return Math.hypot(this.tgx,this.tgz)}ground(t,e){let n=this.env;if(n.grid){let s=this.tileAt(t,e);return s<0?-1/0:n.h[s]}return n.roof?Math.abs(t)<=n.half&&Math.abs(e)<=n.half?this.gx*t+this.gz*e:-1/0:n.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))?0:-1/0:0}inside(t,e,n){let s=this.env;return s.grid?Math.abs(t)<s.half-n&&Math.abs(e)<s.half-n:s.roof?Math.abs(t)<s.inner-n&&Math.abs(e)<s.inner-n:s.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n:Math.hypot(t,e)<this.radius-n}clampInside(t,e,n,s){let r=this.env;if(r.floe)return!1;if(r.roof||r.grid){let a=(r.grid?r.half:r.inner)-n-.001;Math.abs(t)>a&&(t=Math.sign(t)*a,s.vx=0,s.slideX=0),Math.abs(e)>a&&(e=Math.sign(e)*a,s.vz=0,s.slideZ=0)}else{let a=Math.hypot(t,e),o=this.radius-n-.001;if(a>o){let l=t/a,c=e/a;t=l*o,e=c*o;let h=s.vx*l+s.vz*c;h>0&&(s.vx-=l*h,s.vz-=c*h);let f=s.slideX*l+s.slideZ*c;f>0&&(s.slideX-=l*f,s.slideZ-=c*f)}}return s.x=t,s.z=e,!0}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let s=0;s<n;s++){let r=e[s],a=e[(s+1)%n],o=s+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,f=a.z-r.z,u=l*f-c*h;return Math.abs(u)<1e-9?r.r:(r.x*f-r.z*h)/u}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e);let s=this.shadowDist||30;this.sun.position.set(t+n.x*s,n.y*s,e+n.z*s)}update(t,e){this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t),this.env.roof&&this.renderRoof(e),this.env.grid&&this.renderGrid();for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,s,r){let a=Wn(256,128,Tf),o=[];for(let l=0;l<e;l++){let c=new Vi(new xi({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,f=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*f,$(s,r),Math.sin(h)*f);let u=$(60,120);c.scale.set(u,u*.45,1),t.add(c),o.push(c)}return o}tileAt(t,e){let n=this.env,s=n.N,r=Math.floor(t/n.S+s/2),a=Math.floor(e/n.S+s/2);return r<0||a<0||r>=s||a>=s?-1:a*s+r}tileMotion(t,e,n){let s=this.env;if(n.vy=0,n.px=0,n.pz=0,!s.grid)return n;let r=this.tileAt(t,e);return r<0||(n.vy=s.v[r],n.px=s.px[r],n.pz=s.pz[r]),n}solidAt(t,e,n){let s=this.env;if(!s.grid)return!1;let r=this.tileAt(t,e);return r>=0&&s.h[r]>n+.45}resetGrid(){let t=this.envs.grid;t.h.fill(0),t.v.fill(0),t.px.fill(0),t.pz.fill(0),t.glow.fill(0),t.events.length=0,t.nextEv=3,t.dirty.fill(1),this.renderGrid()}spawnGridEvent(t){let e=this.env,n=e.N,s=e.S,r=t?t.x:0,a=t?t.z:0,o=e.half-2;if(Math.random()<.5){let u=$(0,Math.PI*2),d=$(2,7);e.events.push({kind:"ring",t:0,warn:1.1,x:bt(r+Math.cos(u)*d,-o,o),z:bt(a+Math.sin(u)*d,-o,o),speed:9,maxR:24,amp:1.25,width:1.9});return}let l=bt(Math.floor(r/s+n/2),0,n-1),c=bt(Math.floor(a/s+n/2),0,n-1),h=[],f=Math.floor($(0,3));if(f===0){let u=Math.random()<.5?0:1;for(let d=c-4;d<=c+4;d++)for(let p=l-4;p<=l+4;p++)p>=0&&d>=0&&p<n&&d<n&&(p+d)%2===u&&h.push(d*n+p)}else if(f===1){let u=bt(l+Math.floor($(-2,3)),0,n-1),d=bt(c+Math.floor($(-2,3)),0,n-1);for(let p=0;p<n;p++)h.push(d*n+p),p!==d&&h.push(p*n+u)}else for(let u=0;u<16;u++){let d=bt(l+Math.floor($(-5,6)),0,n-1),p=bt(c+Math.floor($(-5,6)),0,n-1);h.push(p*n+d)}e.events.push({kind:"piston",t:0,warn:1,up:.2,hold:.7,down:.6,amp:1.6,tiles:h})}stepGrid(t,e){let n=this.env,s=n.N,r=n.S,a=n.h,o=n.v;n.nextEv-=t,n.nextEv<=0&&(this.spawnGridEvent(e),n.nextEv=$(3.5,6.5));let l=n.tgt,c=n.glow,h=n.px,f=n.pz;l.fill(0),c.fill(0),h.fill(0),f.fill(0);for(let d of n.events)if(d.t+=t,d.kind==="ring"){let p=(d.t-d.warn)*d.speed-d.width,x=Math.floor(d.x/r+s/2),m=Math.floor(d.z/r+s/2);if(d.t<d.warn){let y=.5+.5*Math.sin(d.t*22);for(let T=m-1;T<=m+1;T++)for(let A=x-1;A<=x+1;A++){if(A<0||T<0||A>=s||T>=s)continue;let L=T*s+A;c[L]=Math.max(c[L],y*(A===x&&T===m?1:.5)),n.gcol[L]=0}continue}let g=d.amp*(1-.5*p/d.maxR),M=Math.max(0,p-d.width),w=p+d.width,_=Math.max(0,Math.floor((d.x-w)/r+s/2)),S=Math.min(s-1,Math.floor((d.x+w)/r+s/2)),b=Math.max(0,Math.floor((d.z-w)/r+s/2)),R=Math.min(s-1,Math.floor((d.z+w)/r+s/2));for(let y=b;y<=R;y++)for(let T=_;T<=S;T++){let A=(T-s/2+.5)*r,L=(y-s/2+.5)*r,D=A-d.x,O=L-d.z,P=Math.hypot(D,O);if(P<M||P>w)continue;let F=(P-p)/d.width,V=(1-F*F)*(1-F*F),H=y*s+T;if(g*V>l[H]){l[H]=g*V,c[H]=Math.max(c[H],V),n.gcol[H]=0;let tt=P||1;h[H]=D/tt*3.5*V,f[H]=O/tt*3.5*V}}d.done=p>d.maxR+d.width}else{let p=d.t,x=0,m=0;p<d.warn?m=.35+.65*(.5+.5*Math.sin(p*26)):p<d.warn+d.up?(x=d.amp*(p-d.warn)/d.up,m=1):p<d.warn+d.up+d.hold?(x=d.amp,m=1):(x=d.amp*Math.max(0,1-(p-d.warn-d.up-d.hold)/d.down),m=x/d.amp);for(let g of d.tiles)x>l[g]&&(l[g]=x),m>c[g]&&(c[g]=m,n.gcol[g]=1);d.done=p>d.warn+d.up+d.hold+d.down}n.events.length&&(n.events=n.events.filter(d=>!d.done));let u=1/t;for(let d=0;d<s*s;d++){let p=l[d];o[d]=bt((p-a[d])*u,-20,12),(p!==a[d]||c[d]!==n.lastGlow[d])&&(n.dirty[d]=1),a[d]=p}}renderGrid(){let t=this.env,e=t.N,n=t.S,s=this._m4,r=this._col,a=!1,o=!1;for(let l=0;l<e*e;l++){if(!t.dirty[l])continue;t.dirty[l]=0;let c=l%e,h=l/e|0;s.makeTranslation((c-e/2+.5)*n,t.h[l],(h-e/2+.5)*n),t.tiles.setMatrixAt(l,s),a=!0;let f=t.glow[l];f!==t.lastGlow[l]&&(t.lastGlow[l]=f,r.copy(t.base[l]).lerp(t.gcol[l]?$y:Jy,bt(f,0,1)*.85),t.tiles.setColorAt(l,r),o=!0)}a&&(t.tiles.instanceMatrix.needsUpdate=!0),o&&(t.tiles.instanceColor.needsUpdate=!0)}buildGrid(){let t=new ge,e=Ky,n=Zy,s=e*n/2,r=new Le(n-.08,4,n-.08).translate(0,-2,0),a=new $t({color:16777215,roughness:.28,metalness:.3,envMapIntensity:.45}),o=new kn(r,a,e*e);o.receiveShadow=!0,o.castShadow=!0,o.frustumCulled=!1;let l=[];for(let f=0;f<e*e;f++){let u=jy.clone().offsetHSL(0,0,(Rn(f*3.7)-.5)*.025);l.push(u),o.setColorAt(f,u)}t.add(o);let c=new Lt(new wn(s*2,s*2),new ei({color:197379}));c.rotation.x=-Math.PI/2,c.position.y=-.35,t.add(c);let h=e*e;return{group:t,grid:!0,tiles:o,base:l,N:e,S:n,half:s,h:new Float32Array(h),v:new Float32Array(h),tgt:new Float32Array(h),px:new Float32Array(h),pz:new Float32Array(h),glow:new Float32Array(h),lastGlow:new Float32Array(h).fill(-1),gcol:new Uint8Array(h),dirty:new Uint8Array(h).fill(1),events:[],nextEv:3,radius:s-.3,floe:null,water:null,waterY:-1/0,canFall:!0,fallDepth:2.5,clouds:[],sky:[1051404,1905686,197122],fog:[16,55],hemi:[16774380,1710618,.6],sun:[16777215,2.4,.35,1,.25]}}resetRoof(){let t=this.envs.roof;for(let e of t.ropes)e.intact=!0,e.up=null,e.stub&&(t.group.remove(e.stub.mesh),e.stub.mesh.geometry.dispose(),e.stub=null),e.mesh.visible=!0;this.renderRoof()}updateTilt(){let t=this.env,e=0,n=0,s=0;for(let l of t.ropes)l.intact&&(n+=l.x,s+=l.z,e++);e&&(n/=e,s/=e);let r=Nf*n/t.half,a=Nf*s/t.half,o=Math.hypot(r,a);o>Fh&&(r*=Fh/o,a*=Fh/o),this.gvx+=(r-this.tgx)*3,this.gvz+=(a-this.tgz)*3,this.tgx=r,this.tgz=a}cutRope(t,e,n,s){let r=this.env;t.intact=!1,e=bt(e,.3,3.2);let a=this.ground(t.x,t.z),o=Math.max(3,Math.round(e/.2)),l=e/o,c=Math.hypot(n,s)||1,h=n/c*.03,f=s/c*.03,u=[];for(let p=0;p<=o;p++){let x=p/o,m=a+e*x;u.push({x:t.x,y:m,z:t.z,px:t.x-h*x,py:m,pz:t.z-f*x})}let d=new Lt(qy(o+1,l),r.ropeMat);d.castShadow=!0,d.frustumCulled=!1,r.group.add(d),t.stub={pts:u,seg:l,mesh:d},Pf(d.geometry,u,t.r),t.up={y:a+e,len:t.top-(a+e),v:0,t:0,wx:h/.03,wz:f/.03},this.updateTilt()}step(t,e){let n=this.env;if(n&&n.grid){this.stepGrid(t,e);return}if(!n||!n.roof)return;let s=18,r=3.4;this.gvx+=(s*(this.tgx-this.gx)-r*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(s*(this.tgz-this.gz)-r*this.gvz)*t,this.gz+=this.gvz*t;for(let a of n.ropes)a.up&&(a.up.t+=t,a.up.v+=60*t,a.up.y+=a.up.v*t,a.up.t>2.5&&(a.up=null)),a.stub&&this.stepStub(a,t)}stepStub(t,e){let n=t.stub.pts,s=t.stub.seg,r=t.r,a=n[0];a.x=t.x,a.y=this.ground(t.x,t.z),a.z=t.z;for(let o=1;o<n.length;o++){let l=n[o],c=(l.x-l.px)*.99,h=(l.y-l.py)*.99,f=(l.z-l.pz)*.99;l.px=l.x,l.py=l.y,l.pz=l.z,l.x+=c,l.y+=h-Je*e*e,l.z+=f}for(let o=0;o<6;o++){for(let l=1;l<n.length;l++){let c=n[l-1],h=n[l],f=h.x-c.x,u=h.y-c.y,d=h.z-c.z,p=Math.hypot(f,u,d)||1e-6,x=(p-s)/p,m=l===1?0:.5,g=1-m;c.x+=f*x*m,c.y+=u*x*m,c.z+=d*x*m,h.x-=f*x*g,h.y-=u*x*g,h.z-=d*x*g}for(let l=1;l<n.length;l++){let c=n[l],h=this.ground(c.x,c.z);c.y<h+r&&(c.y=h+r,c.px=c.x-(c.x-c.px)*.8,c.pz=c.z-(c.z-c.pz)*.8)}}}renderRoof(t){let e=this.env;e.plat.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),e.plat.matrixWorldNeedsUpdate=!0;for(let n of e.ropes){let s=n.mesh,r=t?Math.hypot(t.x-n.x,t.z-n.z):9,a=bt((r-.7)/1.6,.12,1);if(s.material.opacity=a,s.material.transparent=a<1,s.material.depthWrite=a>=1,n.intact)s.visible=!0,Lf(s,n.L0,n.x,this.ground(n.x,n.z),n.z,n.x,n.top,n.z);else if(n.up){let o=n.up,l=Math.sin(o.t*24)*.6*Math.exp(-o.t*2.2);s.visible=!0,Lf(s,n.L0,n.x+o.wx*l,o.y,n.z+o.wz*l,n.x,o.y+o.len,n.z)}else s.visible=!1;n.stub&&Pf(n.stub.mesh.geometry,n.stub.pts,n.r)}}buildRoof(){let t=new ge,e=new ge;e.matrixAutoUpdate=!1,t.add(e);let n=11,s=.3,r=.45,a=Wn(256,256,Wy);a.wrapS=a.wrapT=Qn,a.repeat.set(n*2/4,n*2/4);let o=new $t({map:a,roughness:.85}),l=new $t({color:9278620,roughness:.9}),c=new $t({color:6252142,roughness:.9}),h=new Lt(new Le(n*2,.8,n*2),[l,l,o,c,l,l]);h.position.y=-.4,h.receiveShadow=!0,h.castShadow=!0,e.add(h);for(let[S,b,R,y]of[[n*2,.5,0,-5],[n*2,.5,0,5],[.5,n*2,-5,0],[.5,n*2,5,0]]){let T=new Lt(new Le(S,.5,b),c);T.position.set(R,-1.05,y),e.add(T)}let f=new $t({color:11712703,roughness:.8});for(let[S,b,R,y]of[[n*2,s,0,n-s/2],[n*2,s,0,-n+s/2],[s,n*2-s*2,n-s/2,0],[s,n*2-s*2,-n+s/2,0]]){let T=new Lt(new Le(S,r,b),f);T.position.set(R,r/2,y),T.castShadow=!0,T.receiveShadow=!0,e.add(T)}let u=Wn(64,64,Xy);u.wrapS=u.wrapT=Qn;let d=new $t({map:u,roughness:.55}),p=new $t({color:4870232,roughness:.4,metalness:.6}),x=[],m=.075,g=46;for(let[S,b]of zh){let R=g,y=new Ke(m,m,R,10,1,!0).translate(0,R/2,0),T=y.attributes.uv;for(let D=0;D<T.count;D++)T.setY(D,T.getY(D)*R/Df);let A=new Lt(y,d.clone());A.castShadow=!0,t.add(A);let L=new Lt(new Ke(.2,.25,.07,14),p);L.position.set(S,.035,b),L.receiveShadow=!0,e.add(L),x.push({x:S,z:b,r:m,top:g,L0:R,mesh:A,intact:!0,stub:null,up:null})}let M=Wn(256,128,Tf),w=[];for(let S=0;S<16;S++){let b=new Vi(new xi({map:M,fog:!1,transparent:!0,depthWrite:!1,opacity:.95})),R=Math.random()*Math.PI*2,y=$(25,150);b.position.set(Math.cos(R)*y,$(-48,-12),Math.sin(R)*y);let T=$(40,95);b.scale.set(T,T*.45,1),t.add(b),w.push(b)}let _=new $t({color:10466505,roughness:.9});for(let S=0;S<16;S++){let b=S/16*Math.PI*2+$(-.15,.15),R=$(40,120),y=$(6,13),T=$(-30,5),A=new Lt(new Le(y,200,y*$(.7,1.3)),_);A.position.set(Math.cos(b)*R,T-100,Math.sin(b)*R),A.rotation.y=$(0,Math.PI),t.add(A)}return{group:t,plat:e,roof:!0,half:n,inner:n-s,wallH:r,overSpeed:5,fallDepth:1.5,ropes:x,ropeMat:d,radius:n-s,floe:null,water:null,waterY:-1/0,canFall:!0,clouds:w.concat(this.clouds(t,8,170,25,70)),sky:[4165600,14084600,15857403],fog:[55,240],hemi:[15398143,11122888,1.1],sun:[16777215,2.6,.4,1,.5]}}buildMeadow(){let t=new ge,e=Wn(256,256,ky,70),n=new Lt(new wn(300,300),new $t({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new $t({map:Wn(128,256,Vy),alphaTest:.45,side:ln,roughness:.9}),r=(c,h)=>Math.hypot(c,h)<20&&Math.random()<.85;t.add(If(Cf(6,.42,1,.75),s,320,1.5,45,.6,1.5,r));let a=new $t({map:Wn(64,64,Gy),alphaTest:.4,side:ln,roughness:1});t.add(If(Cf(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let c=0;c<14;c++){let h=c/14*Math.PI*2+$(-.15,.15),f=$(85,130),u=Af($(28,50),$(26,55),c*13.7,o);u.position.x=Math.cos(h)*f,u.position.z=Math.sin(h)*f,t.add(u)}let l=[];for(let c=0;c<16;c++){let h=Math.random()*Math.PI*2,f=$(31,48),u=Rf($(.8,2.6),c*31,9078398);u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),t.add(u),l.push(u)}return{group:t,props:l,radius:28,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new ge,e=12,n=[];for(let d=0;d<e;d++){let p=d/e*Math.PI*2+$(-.1,.1)-Math.PI,x=$(14.5,17);n.push({a:p,r:x,x:Math.cos(p)*x,z:Math.sin(p)*x})}let s=new Ns;n.forEach((d,p)=>p?s.lineTo(d.x,-d.z):s.moveTo(d.x,-d.z)),s.closePath();let r=new zr(s,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=Wn(256,256,By);a.wrapS=a.wrapT=Qn,a.repeat.set(.28,.28);let o=new $t({map:a,roughness:.35,metalness:0}),l=new $t({color:8829408,roughness:.3}),c=new Lt(r,[o,l]);c.receiveShadow=!0,t.add(c);let h=new Lt(new wn(500,500),tv(4869570,9080816));h.rotation.x=-Math.PI/2,h.position.y=-.35,t.add(h);let f=new $t({color:10930408,roughness:.35,flatShading:!0}),u=(d,p,x,m,g,M)=>{let w=new Le(d,p,x,3,6,3);w.index&&(w=w.toNonIndexed());let _=w.attributes.position;for(let b=0;b<_.count;b++){let R=Math.round(_.getX(b)*10)*3.3+Math.round(_.getY(b)*10)*1.7+Math.round(_.getZ(b)*10)*5.1+M;_.setXYZ(b,_.getX(b)+(Rn(R)-.5)*d*.25,_.getY(b)+(Rn(R+1)-.5)*.6,_.getZ(b)+(Rn(R+2)-.5)*x*.25)}w.computeVertexNormals();let S=new Lt(w,f);S.position.set(m,p/2-1.5,g),S.rotation.y=$(0,Math.PI),t.add(S)};u(7,20,6,12,44,1),u(5,9,5,-38,30,2),u(9,6,7,-22,-46,3),u(4,13,4,46,-14,4);for(let d=0;d<14;d++){let p=Math.random()*Math.PI*2,x=$(20,40),m=Rf($(.4,1.3),d*7,14281978);m.position.set(Math.cos(p)*x,-.35,Math.sin(p)*x),m.castShadow=!1,t.add(m)}return{group:t,floe:n,water:h,waterY:-.35,canFall:!0,radius:16,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}buildDojo(){let t=new ge,e=Wn(256,256,Hy,60),n=new Lt(new wn(300,300),new $t({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new $t({color:10127992,flatShading:!0,roughness:.9});for(let d=0;d<84;d++){let p=d/84*Math.PI*2,x=new Lt(new Ps($(.22,.34),0),s);x.position.set(Math.cos(p)*22.6,.08,Math.sin(p)*22.6),x.castShadow=!0,t.add(x)}let r=new $t({color:13116958,roughness:.6}),a=new $t({color:2759190,roughness:.7}),o=new ge;for(let d of[-2.6,2.6]){let p=new Lt(new Ke(.28,.34,6,12),r);p.position.set(d,3,0),o.add(p)}let l=new Lt(new Le(7.6,.45,.6),a);l.position.y=6.2;let c=new Lt(new Le(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),o.position.set(0,0,30),t.add(o);for(let[d,p]of[[-9,27],[9,27],[-27,-6],[27,-6],[-16,-24],[16,-24]]){let x=new ge,m=new Lt(new Ke(.35,.45,1.2,8),s);m.position.y=.6;let g=new Lt(new Le(.8,.6,.8),s);g.position.y=1.5;let M=new Lt(new yi(.75,.5,4),s);M.position.y=2.05,M.rotation.y=Math.PI/4,x.add(m,g,M),x.traverse(w=>{w.isMesh&&(w.castShadow=!0)}),x.position.set(d,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let d=0;d<12;d++){let p=d/12*Math.PI*2,x=Af($(40,70),$(10,22),d*5.3,h);x.position.x=Math.cos(p)*$(90,130),x.position.z=Math.sin(p)*$(90,130),t.add(x)}let f=Wn(128,128,(d,p)=>{let x=d.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),d.fillStyle=x,d.fillRect(0,0,p,p)}),u=new Vi(new xi({map:f,fog:!1,depthWrite:!1}));return u.position.set(0,38,190),u.scale.set(90,90,1),t.add(u),{group:t,radius:22,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var ev=55,zl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=ev,this.taps=[],this.tapStart={t:0,x:0,y:0,moved:0},window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&this.end()}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){fe.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n}),Object.assign(this.tapStart,{t:performance.now(),x:e,y:n,moved:0})}end(){let t=this.tapStart;performance.now()-t.t<260&&t.moved<14&&this.taps.push({x:t.x,y:t.y}),this.stick.id=null}drag(t,e){let n=this.stick;n.x=t,n.y=e,this.tapStart.moved=Math.max(this.tapStart.moved,Math.hypot(t-this.tapStart.x,e-this.tapStart.y));let s=t-n.ox,r=e-n.oy,a=Math.hypot(s,r),o=this.stickR*1.3;a>o&&(n.ox=t-s/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),n==="Space"&&this.taps.push(null),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),fe.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.end()}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=bt((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let s=Math.hypot(t,e);return s>1&&(t/=s,e/=s,s=1),{x:t,y:e,mag:s}}clear(){this.anyPress=!1,this.taps.length=0}endFrame(){this.anyPress=!1}};var nv='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',iv='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',Ol=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${nv}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${iv}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-battle">Muharebeye git</button>
        <button id="s-grid">Izgara arenas\u0131na git</button>
        <button id="s-roof">Platform seviyesine git</button>
        <button id="s-horse">At seviyesine git</button>
        <button id="s-titan">Titan seviyesine git</button>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let s=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("mousedown",s);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),n.querySelector("#s-battle").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("battle")}),n.querySelector("#s-grid").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("grid")}),n.querySelector("#s-roof").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("roof")}),n.querySelector("#s-horse").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("horse")}),n.querySelector("#s-titan").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("titan")}),this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}drawBody(t,e,n){if(!e)return;let s=this.lv.getBoundingClientRect(),r=s.left+4,a=s.bottom+4,o=1.15*n,l=e.rag.pts,c=(d,p)=>{t.setLineDash(d?[]:[3,3]),t.strokeStyle=d?"rgba(255,255,255,0.9)":"rgba(255,59,92,0.95)",t.fillStyle=t.strokeStyle,t.beginPath(),p(),t.stroke()};t.save(),t.lineCap="round",t.lineWidth=3.2*n,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=3;let h=d=>r+d*o,f=d=>a+d*o,u=e.alive;c(u||l[k.HEAD].attached,()=>t.arc(h(14),f(7),5.5*o,0,Math.PI*2)),c(!0,()=>{t.moveTo(h(14),f(14)),t.lineTo(h(14),f(31))}),c(l[k.LHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(4),f(28))}),c(l[k.RHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(24),f(28))}),c(l[k.LFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(7),f(47))}),c(l[k.RFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(21),f(47))}),t.restore()}show(t,e,n,s){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(s||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,s,r,a){let o=this.ctx,l=this.dpr;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,this.W,this.H);let c=bt(Math.min(this.W,this.H)/400,.8,1.6);this.drawBody(o,r,c);let h=n.stick;if(h.id!==null||n.touchMode&&s>0){let f=n.stickR,u=h.id!==null,d=u?h.ox:this.W/2,p=u?h.oy:this.H-120*c;o.globalAlpha=u?.45:.25*bt(s,0,1),o.strokeStyle="#fff",o.fillStyle="#fff",o.lineWidth=3,o.beginPath(),o.arc(d,p,f,0,Math.PI*2),o.stroke();let x=d,m=p;if(u){let g=h.x-h.ox,M=h.y-h.oy,w=Math.hypot(g,M),_=Math.min(w,f)/(w||1);x+=g*_,m+=M*_}o.beginPath(),o.arc(x,m,f*.42,0,Math.PI*2),o.fill(),o.globalAlpha=1}o.textAlign="center",o.textBaseline="middle",o.lineJoin="round";for(let f of e){let u=t(f.x,f.y,f.z);if(!u)continue;let d=1+.6*Math.max(0,1-f.age/.1),p=1-Math.max(0,(f.age/f.life-.7)/.3),x=Math.round(f.size*c*d);o.globalAlpha=p,o.font=`900 ${x}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.lineWidth=Math.max(3,x*.2),o.strokeStyle="#1a0d14",o.strokeText(f.text,u.x,u.y),o.fillStyle=f.col,o.fillText(f.text,u.x,u.y)}if(o.globalAlpha=1,this.flash>0){let f=o.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);f.addColorStop(0,"rgba(210,0,20,0)"),f.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),o.fillStyle=f,o.fillRect(0,0,this.W,this.H)}if(s>0){o.globalAlpha=bt(s,0,1)*.9,o.font=`700 ${Math.round(14*c)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.fillStyle="#fff",o.strokeStyle="rgba(0,0,0,0.35)",o.lineWidth=3;let f=n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"];a==="titan"&&(f=[n.touchMode?"K\u0131sa dokun: halat at, u\xE7":"T\u0131kla / Bo\u015Fluk: halat at, u\xE7","Titana dokun: ona halat at","Sadece ENSES\u0130 \xF6ld\xFCr\xFCr: 3 kez kes","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="horse"&&(f=["S\xFCr\xFCkle: at o y\xF6ne ko\u015Far, k\u0131l\u0131\xE7 da","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="battle"&&(f=["Maviler dost, morlar d\xFC\u015Fman","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="grid"&&(f=["Parlayan karolardan uzak dur","Mavi halka ve pembe pistonlar havaya f\u0131rlat\u0131r","Kenardan bo\u015Flu\u011Fa d\xFC\u015Fen \xF6l\xFCr"]),a==="roof"&&(f=["Halatlar platformu tutuyor","Kesersen platform yan yatar, herkes kayar","Kenardan d\xFC\u015Fen \xF6l\xFCr"]),f.forEach((u,d)=>{let p=this.H*.72+d*22*c;o.strokeText(u,this.W/2,p),o.fillText(u,this.W/2,p)}),o.globalAlpha=1}}};var Oh=13,Bh=28,sv=7.5,rv=7,av=14,Uf=.85,ov=1.72*Uf,$i=new Qe(1,14,10),lv=new $t({color:16777215,roughness:.25}),cv=new $t({color:1118481,roughness:.3});function nn(i,t,e,n,s){let r=new Lt(i,t);return r.scale.set(e,n,s),r.castShadow=!0,r}var Bl=class{constructor(t,e,n,s,r={}){var x,m;this.x=e,this.z=n,this.yaw=s,this.speed=0,this.vx=0,this.vz=0,this.phase=Math.random()*6,this.bob=0,this.slip=0,this.slipDir=1,this.rider=null;let a=new vi({color:(x=r.color)!=null?x:10115635,roughness:.3,clearcoat:1,clearcoatRoughness:.12}),o=new vi({color:(m=r.mane)!=null?m:3809812,roughness:.45,clearcoat:.6});this.mats=[a,o];let l=new ge,c=new ge;l.add(c),c.add(nn($i,a,.42,.44,.98).translateY(1.3)),c.add(nn($i,a,.36,.4,.42).translateY(1.36).translateZ(.62)),c.add(nn($i,a,.4,.42,.45).translateY(1.33).translateZ(-.6));let h=new ge;h.position.set(0,1.55,.78),h.rotation.x=.75,c.add(h),h.add(nn(new ii(.2,.6,5,12),a,1,1,1).translateY(.35)),h.add(nn(new ii(.07,.62,4,8),o,1,1,1.4).translateY(.35).translateZ(-.16));let f=new ge;f.position.set(0,.78,.02),f.rotation.x=1.25,h.add(f),f.add(nn($i,a,.17,.36,.2).translateY(.2)),f.add(nn($i,o,.13,.12,.15).translateY(.5).translateZ(.01));for(let g of[-1,1]){let M=nn(new yi(.05,.16,8),a,1,1,1);M.position.set(g*.08,.02,-.15),M.rotation.x=-.9,f.add(M);let w=nn($i,lv,.07,.07,.07);w.position.set(g*.13,.12,-.06);let _=nn($i,cv,.03,.03,.03);M.castShadow=w.castShadow=_.castShadow=!1,_.position.set(g*.19,.14,-.05),f.add(w,_)}this.head=f,this.tail=new ge,this.tail.position.set(0,1.45,-1),this.tail.add(nn(new ii(.08,.6,4,8),o,1,1,1).translateY(-.35)),c.add(this.tail),this.legs=[];let u=new ii(.1,.5,4,10),d=new ii(.07,.5,4,10),p=new Ke(.085,.1,.1,10);for(let[g,M,w]of[[-.22,.62,0],[.22,.62,.35],[-.22,-.62,Math.PI],[.22,-.62,Math.PI+.35]]){let _=new ge;_.position.set(g,1.12,M);let S=nn(u,a,1,1,1);S.position.y=-.3;let b=new ge;b.position.y=-.58;let R=nn(d,a,1,1,1);R.position.y=-.28;let y=nn(p,o,1,1,1);y.position.y=-.55,b.add(R,y),_.add(S,b),c.add(_),this.legs.push({hip:_,knee:b,off:w,front:M>0})}this.root=c,l.scale.setScalar(Uf),this.group=l,t.add(l)}update(t,e,n){let s=0,r=0,a=e?e.mag:0;if(a>.18){let d=Math.hypot(this.vx,this.vz);this.yaw=ri(this.yaw,Math.atan2(e.x,e.z),ut(6,4,bt(d/Oh,0,1))*t);let p=bt((a-.4)/.45,0,1)*Oh;s=e.x*p,r=e.z*p}this.drive(s,r,t);let o=this.x+this.vx*t,l=this.z+this.vz*t;n.inside(o,l,1.3)||(o=this.x,l=this.z,this.vx*=-.3,this.vz*=-.3,this.yaw=ri(this.yaw,Math.atan2(-this.x,-this.z),3*t)),this.x=o,this.z=l,this.speed=Math.hypot(this.vx,this.vz);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),f=-this.vx*h+this.vz*c;this.slip+=(bt((Math.abs(f)-1.2)/4,0,1)-this.slip)*Math.min(1,t*10),Math.abs(f)>.5&&(this.slipDir=Math.sign(f));let u=this.speed>.3?1.3+this.speed*.17:0;this.phase+=t*Math.PI*2*u,this.bob=this.speed>.3?-Math.abs(Math.sin(this.phase))*.09*bt(this.speed/6,0,1):0}drive(t,e,n){let s=Math.hypot(this.vx,this.vz);if(s<.3){let x=Bh*n,m=t-this.vx,g=e-this.vz,M=Math.hypot(m,g);M>x?(this.vx+=m/M*x,this.vz+=g/M*x):(this.vx=t,this.vz=e);return}let r=Oh,a=Math.sqrt(bt((s-.15*r)/(.55*r),0,1)),o=ut(Bh,sv,a),l=ut(Bh,rv,a),c=this.vx/s,h=this.vz/s,f=t*c+e*h,u=-t*h+e*c,d=bt(f-s,-l*n,av*n),p=bt(u,-o*n,o*n);this.vx+=c*d-h*p,this.vz+=h*d+c*p}saddle(t){return t.x=this.x-Math.sin(this.yaw)*.05,t.y=ov+this.bob,t.z=this.z-Math.cos(this.yaw)*.05,t}render(){let t=this.group;t.position.set(this.x,0,this.z),t.rotation.y=this.yaw;let e=bt(this.speed/6,0,1),n=this.phase;this.root.position.y=this.bob,this.root.rotation.x=Math.sin(n)*.06*e,this.root.rotation.z=-this.slip*this.slipDir*.22;for(let s of this.legs){let r=n+s.off;s.hip.rotation.x=-Math.sin(r)*.6*e;let a=(.15+.9*Math.max(0,Math.sin(r+1.2)))*e;s.knee.rotation.x=s.front?a:-a*.8}this.tail.rotation.x=.4+Math.sin(n*.5)*.15+e*.5,this.head.rotation.x=1.25+Math.sin(n)*.08*e}dispose(t){t.remove(this.group);for(let e of this.mats)e.dispose()}};var kh=1/120,hv=16753951,Ff=10820863,uv=5223679,dv=6951618,fv=11820272,pv={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo",roof:"Halatl\u0131 Platform",grid:"Karanl\u0131k Izgara"},mv=["meadow","ice","dojo"],Hh=["duel","duel","roof","battle","duel","boss","horse","roof","titan"],gv=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function Vh(i){let t=Hh[(i-1)%Hh.length],e=Math.floor((i-1)/Hh.length),n=bt((i-1)/24,0,1);if(t==="roof")return{type:t,env:"roof",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(4,2+e)).fill("normal")};if(t==="horse")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:new Array(Math.min(6,3+e)).fill("big")};if(t==="titan")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan"]};if(t==="battle"){let o=Math.min(24,14+3*e),l=Math.floor(o/4),c=[];for(let h=0;h<o;h++)c.push(h<l?"cav":"normal");return{type:t,env:"meadow",big:!0,skill:n*.8,boss:!1,enemies:c,allies:["cav","cav","foot","foot","foot"]}}let s=i%2?"grid":mv[Math.floor(i/2)%3],r=t==="boss",a=[];if(r){a.push("boss");for(let o=0;o<e;o++)a.push("normal")}else{let o=Math.min(4,1+Math.floor((i-1)/4));for(let l=0;l<o;l++)a.push("normal")}return{type:t,env:s,big:!1,skill:n,boss:r,enemies:a}}var In=new I,xv=new I(0,1,0),ji={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},kl=class{constructor(){let t=document.getElementById("gl"),e=new vl({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Oe,e.toneMapping=Yr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Xi,this.renderer=e,this.scene=new Hi;let n=new Xs(e);this.scene.environment=n.fromScene(new bl,.04).texture,this.scene.environmentIntensity=.85,this.camera=new Be(55,1,.1,900),this.world=new Fl(this.scene),this.fx=new Dl(this.scene);let s=document.getElementById("ui");this.input=new zl(s),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new Ol(this,s),this.soundOn=!0,this.highQuality=bh("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.horses=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new I,this.hintT=8,this.lastH=kh,this.lastAttackT=-9,this._bb={},this.titan=null,this.hookSide=1,this.raycaster=new qr,this.ropeMesh=new Lt(new Ke(.025,.025,1,6).translate(0,.5,0),new $t({color:2829104,roughness:.6})),this.ropeMesh.visible=!1,this.ropeMesh.frustumCulled=!1,this.scene.add(this.ropeMesh),this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(bh("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=bt(2*Math.atan(Math.tan($c.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,wh("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){fe.init(),fe.toggleMute(),this.soundOn=!fe.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),Ph(t.swordMesh));for(let t of this.loose)this.scene.remove(t.mesh),Ph(t.mesh);for(let t of this.horses)t.dispose(this.scene);this.horses=[],this.titan=null,this.ropeMesh.visible=!1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.loose=[],this.fx.clear()}addChar(t){let e=new Ll(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),this.chars.push(e),e}startLevel(t){this.clearLevel(),this.level=t,wh("rk3dLevel",t);let e=Vh(t);this.spec=e,this.world.set(e.env,e.big),this.fx.setDecalParent(this.world.env.plat||this.scene),this.tiltWarned=!1,this.titanHinted=!1;let n=e.type==="horse"||e.type==="battle",s=e.type==="titan"?-30:e.type==="horse"?0:e.type==="battle"?-22:-6;this.player=this.addChar({team:"player",x:0,z:s,yaw:0,hp:1,color:hv,speed:bf,bladeLen:n?Nl:ua}),n&&this.mountOn(this.player,10115635,3809812),this.goodGuys=[this.player];let r=e.enemies.length,a=Math.min(44,r*2.4);e.enemies.forEach((l,c)=>{let h={team:"enemy",hp:1,skill:e.skill,color:Ff,yaw:Math.PI};if(l==="cav"||e.type==="battle"&&l==="normal"){let u=l==="cav",d=u?(c%2?1:-1)*$(17,26):(r>1?(c/(r-1)-.5)*a:0)+$(-1,1);Object.assign(h,{x:d,z:u?$(22,28):$(16,24),speed:ut(3.4,5.4,e.skill),bladeLen:u?Nl:ua})}else if(l==="titan")Object.assign(h,{x:0,z:28,scale:7,titan:!0,hp:1,speed:2.6,skill:.4+e.skill*.6,color:fv});else if(l==="big"){let u=c/r*Math.PI*2+$(-.3,.3),d=$(16,28);Object.assign(h,{x:Math.sin(u)*d,z:Math.cos(u)*d,scale:1.6,speed:2.4,skill:e.skill*.5,heavy:!0})}else{let u=l==="boss";Object.assign(h,{x:(c-(r-1)/2)*2.6,z:6.5+c%2*1.2,hp:u?3:1,armored:u,scale:u?1.38:1,skill:u?e.skill*.5:e.skill,boss:u,color:u?dv:Ff,speed:u?3.2:ut(3.4,5.4,e.skill)})}let f=this.addChar(h);f.titan&&(this.titan=f,f.swordMesh.visible=!1,f.neckHp=3,f.steamT=$(5,7)),l==="cav"&&this.mountOn(f,2827554,986123),this.enemies.push(f)}),(e.allies||[]).forEach((l,c)=>{let h=l==="cav",f=c%2?1:-1,u=this.addChar({team:"ally",hp:1,color:uv,yaw:0,skill:Math.min(1,e.skill+.2),speed:ut(3.4,5.4,e.skill),x:f*(h?$(6,9):$(2.5,5)),z:s+(h?$(-2,0):$(1.5,4)),bladeLen:h?Nl:ua});h&&this.mountOn(u,15260868,9071178),this.allies.push(u),this.goodGuys.push(u)}),this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t);let o=e.type==="titan"?"T\u0130TAN!":e.type==="battle"?`MUHAREBE! ${r} d\xFC\u015Fman`:e.type==="horse"?"At S\u0131rt\u0131nda":e.boss?"BOSS!":pv[e.env];this.hud.show(`SEV\u0130YE ${t}`,o,1.8,e.boss||e.type==="titan"||e.type==="battle"?"boss":""),(e.type!=="duel"&&e.type!=="boss"||e.env==="grid")&&(this.hintT=Math.max(this.hintT,6)),this.input.clear()}restartLevel(){this.startLevel(this.level)}mountOn(t,e,n){let s=new Bl(this.scene,t.x,t.z,t.yaw,{color:e,mane:n});return s.rider=t,t.mount=s,this.horses.push(s),s}hostilesOf(t){return t.side?this.goodGuys:this.enemies}matesOf(t){return t.side?this.enemies:this.goodGuys}jumpTo(t){let e=this.level;for(;Vh(e).type!==t&&Vh(e).env!==t;)e++;this.startLevel(e)}frame(t){this.highQuality&&this.time>3&&(this.perfT=(this.perfT||0)+t,this.perfN=(this.perfN||0)+1,this.perfT>3&&(this.perfSlow=this.perfT/this.perfN>1/35?(this.perfSlow||0)+1:0,this.perfT=0,this.perfN=0,this.perfSlow>=2&&(this.toggleQuality(),this.fx.popup(this.player.x,3,this.player.z,"Ak\u0131c\u0131l\u0131k i\xE7in grafik d\xFC\u015F\xFCr\xFCld\xFC","#fff",16,2.2))));let e=this.input.taps;if(this.spec.type==="titan"&&this.phase==="play"&&this.player.alive)for(let s of e)this.fireHook(s);e.length=0,this.slowT>0?(this.slowT-=t,this.timeScale=ut(this.timeScale,this.slowScale,cn(40,t))):this.timeScale=ut(this.timeScale,1,cn(6,t));let n=t*this.timeScale;if(n>1e-5){let s=Math.ceil(n/kh-1e-6),r=n/s;for(let a=0;a<s;a++)this.step(r)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t,this.world.step(t,this.player),this.titan&&this.titan.alive&&this.titanSteam(this.titan,t);for(let s of this.horses){let r=s.rider;s.update(t,r&&r.alive?r.stickW:null,this.world),s.slip>.35&&Math.random()<t*30*s.slip&&this.fx.dust(s.x+$(-.5,.5),.05,s.z+$(-.8,.8),-s.vx*.15,-s.vz*.15),r===this.player&&s.slip>.55&&fe.skid()}for(let s of this.chars)s.copyBlade(),s.update(t);this.separate();let e=this.world,n=this.lastH;for(let s of this.chars){let r=s.rag;r.step(t,n,e),!s.alive&&r.impact>6&&fe.thud(r.impact*250),r.impact=0;let a=r.pts[k.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),fe.splash())}for(let s of this.loose)s.step(t,n,e);this.combat(t),this.fx.update(t,e),this.lastH=t}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,s=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<s&&(s=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let s of this.enemies)s.alive&&s.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<ut(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars,e=this.world.ropes,n=this.horses;for(let s=0;s<n.length;s++)for(let r=s+1;r<n.length;r++){let a=n[s],o=n[r],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),f=1.5;if(h<f&&h>1e-4){let u=(f-h)*.5,d=l/h,p=c/h;a.x-=d*u,a.z-=p*u,o.x+=d*u,o.z+=p*u}}for(let s=0;s<t.length;s++){let r=t[s];if(!(!r.alive||r.falling||r.mount||r.isPlayer&&r.y-r.gy>.5)){if(e)for(let a of e){if(!a.intact)continue;let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=.28*r.S+a.r;c<h&&c>1e-4&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}for(let a of n){let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l)||1,h=1+.3*r.S;c<h&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}for(let a=s+1;a<t.length;a++){let o=t[a];if(!o.alive||o.falling||o.mount||o.isPlayer&&o.y-o.gy>.5)continue;let l=o.x-r.x,c=o.z-r.z,h=Math.hypot(l,c),f=.34*(r.S+o.S);if(h<f&&h>1e-4){let u=(f-h)*.5,d=l/h,p=c/h;this.world.inside(r.x-d*u,r.z-p*u,.3)&&(r.x-=d*u,r.z-=p*u),this.world.inside(o.x+d*u,o.z+p*u,.3)&&(o.x+=d*u,o.z+=p*u)}}}}}fireHook(t){let e=this.player,n=this.titan,s=null,r=t&&n&&n.alive?this.pickTitan(t.x,t.y):null;if(r){let a=n.rag,o=r.bone,l={x:r.x,y:r.y,z:r.z};s={pt:l,pull:48,release:1.6,maxT:2.2,t:0,titan:!0,anchor(){if(o==="head"){let c=a.pts[k.HEAD];l.x=c.x,l.y=c.y,l.z=c.z}else if(a.bones.includes(o)){let c=a.pts[o.a],h=a.pts[o.b];l.x=ut(c.x,h.x,r.u),l.y=ut(c.y,h.y,r.u),l.z=ut(c.z,h.z,r.u)}return l}}}else{let a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),l=30;n&&n.alive&&(a=n.x-e.x,o=n.z-e.z,l=Math.hypot(a,o)||1,a/=l,o/=l),this.hookSide=-this.hookSide;let c=bt(l-8,5,18),h=6*this.hookSide,f={x:e.x+a*c+o*h,y:bt(e.y+7,10,16),z:e.z+o*c-a*h};s={pt:f,pull:24,release:4,maxT:1.2,t:0,anchor:()=>f}}e.rope=s,e.y<.05&&(e.vy=Math.max(e.vy,4.5),e.y=.03),fe.swoosh(2)}pickTitan(t,e){let n=this.titan,s=n.rag;this.raycaster.setFromCamera({x:t/this.W*2-1,y:-(e/this.H)*2+1},this.camera);let r=this.raycaster.ray.origin,a=this.raycaster.ray.direction,o=r.x+a.x*400,l=r.y+a.y*400,c=r.z+a.z*400,h=null,f=1/0;for(let p of s.bones){if(!p.vis)continue;let x=s.pts[p.a],m=s.pts[p.b];la(r.x,r.y,r.z,o,l,c,x.x,x.y,x.z,m.x,m.y,m.z);let g=p.r*1.3+.6;Ae.d2<g*g&&Ae.s<f&&(f=Ae.s,h={bone:p,u:Ae.t,x:ut(x.x,m.x,Ae.t),y:ut(x.y,m.y,Ae.t),z:ut(x.z,m.z,Ae.t)})}let u=s.pts[k.HEAD];wl(u.x,u.y,u.z,r.x,r.y,r.z,o,l,c);let d=s.d.headR*1.3+.6;return Ci.d2<d*d&&Ci.t<f&&(h={bone:"head",u:0,x:u.x,y:u.y,z:u.z}),h}titanSteam(t,e){let n=t.rag.pts[k.NECK],s=this.player;if(t.steamT-=e,t.steamT<.9&&t.steamT>0&&Math.random()<e*40&&this.fx.dust(n.x+$(-1,1),n.y+.5,n.z+$(-1,1),$(-2,2),$(-2,2)),t.steamT>0)return;t.steamT=$(6,9)*ut(1,.7,t.skill);for(let f=0;f<40;f++)this.fx.dust(n.x+$(-1.5,1.5),n.y+$(-1,1.5),n.z+$(-1.5,1.5),$(-9,9),$(-9,9));if(fe.splash(),!s.alive)return;let a=s.x-n.x,o=s.y+1-n.y,l=s.z-n.z,c=Math.hypot(a,o,l)||1;if(c>11)return;let h=16*(1-c/14);s.vx+=a/c*h,s.vz+=l/c*h,s.vy=Math.max(s.vy,5),s.y=Math.max(s.y,s.gy+.05),s.rope=null,s.kb=.5,this.fx.popup(s.x,s.y+2,s.z,"BUHAR!","#ffffff",26,1.1),this.shake(.2)}knock(t,e,n,s){let r=Math.hypot(e,n)||1;t.vx+=e/r*s,t.vz+=n/r*s,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<ut(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.aimCtl){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null,t.bounceBlade(),t.isPlayer||(t.aimA=t.swYaw,t.plan=null,t.state==="attack"&&(t.state="fight",t.cool=$(.4,.9)));return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=ut(e.a0,e.a1,aa((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword=!1;let e=t.sw,n=this.h||kh,s={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(ai+t.bladeLen)*t.S;this.loose.push(new Al(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},s,r)),t.swordMesh=null}combat(t){for(let e of this.chars){if(!e.alive||!e.swingActive)continue;let n=e.bPrev,s=e.bCur,r=Math.min(n.bx,n.tx,s.bx,s.tx)-.2,a=Math.max(n.bx,n.tx,s.bx,s.tx)+.2,o=Math.min(n.by,n.ty,s.by,s.ty)-.2,l=Math.max(n.by,n.ty,s.by,s.ty)+.2,c=Math.min(n.bz,n.tz,s.bz,s.tz)-.2,h=Math.max(n.bz,n.tz,s.bz,s.tz)+.2;this.world.ropes&&this.cutRopes(e,n,s,r,a,c,h);let f=e.titan?[this.player]:this.chars;for(let u of f){let d=e.curEp;if(!d)break;if(u===e||d.hits.has(u)||!e.isPlayer&&!u.alive||e.isPlayer&&!u.alive&&u.side===0)continue;let p=u.rag.bounds(this._bb);if(p.x1<r||p.x0>a||p.y1<o||p.y0>l||p.z1<c||p.z0>h)continue;if(u.alive&&u.hasSword&&!u.titan&&!e.titan&&!d.rolled.has(u)){let S=Rh(n,s,u.bCur,3,.05);if(S){if(u.swingActive){this.parry(e,u,S);break}if(d.rolled.add(u),Math.random()<(u.isPlayer?.4:ut(.15,.45,u.skill))){this.block(e,u,S);break}}}let x=Ah(u.rag,n,s,4);if(!x)continue;if(e.side!==u.side&&!u.isPlayer&&!u.titan&&u.alive&&u.hasSword&&u.stun<=0&&u.state!=="attack"&&u.state!=="panic"&&!d.rolled.has(u)&&(d.rolled.add(u),Math.random()<ut(.08,.45,u.skill))){u.blockT=.35,u.blockUx=d.ux,u.blockUy=d.uy,u.counterT=.3,this.block(e,u,x);break}d.hits.add(u);let m=ut(s.bx-n.bx,s.tx-n.tx,x.t)/t,g=ut(s.by-n.by,s.ty-n.ty,x.t)/t,M=ut(s.bz-n.bz,s.tz-n.tz,x.t)/t,w=Math.hypot(m,g,M)||1,_=bt(w,4,13);m=m/w*_,g=g/w*_,M=M/w*_,this.onHit(e,u,x,m,g,M)}}this.poke()}cutRopes(t,e,n,s,r,a,o){let l=this.world,c=this.h;for(let h of l.ropes){if(!h.intact||h.x<s-h.r||h.x>r+h.r||h.z<a-h.r||h.z>o+h.r)continue;let f=l.ground(h.x,h.z);ji.bx=h.x,ji.by=f,ji.bz=h.z,ji.tx=h.x,ji.ty=f+3.2,ji.tz=h.z;let u=Rh(e,n,ji,3,h.r+.03);u&&(l.cutRope(h,u.y-f,(n.tx-e.tx)/c,(n.tz-e.tz)/c),this.fx.sparks(u.x,u.y,u.z,16),this.fx.popup(u.x,u.y+.6,u.z,"HALAT KOPTU!","#ff7a5c",22,1.2),fe.twang(),this.shake(.14),this.slowmo(.15,.35),!this.tiltWarned&&l.tilt>.17&&(this.tiltWarned=!0,this.fx.popup(this.player.x,2.6,this.player.z,"PLATFORM YATIYOR!","#ffd23f",26,1.6)))}}poke(){for(let t of this.chars){if(!t.alive||!t.aimCtl||!t.hasSword||t.swingActive||t.pokeCd>0||t.y-t.gy>.3&&!t.mount)continue;let e=this.chars;for(let n of e){if(n===t||!n.alive||n.kb>0||n.titan)continue;let s=n.rag.bounds(this._bb),r=t.bCur;if(s.x1<Math.min(r.bx,r.tx)||s.x0>Math.max(r.bx,r.tx)||s.z1<Math.min(r.bz,r.tz)||s.z0>Math.max(r.bz,r.tz))continue;let a=Ah(n.rag,t.bPrev,t.bCur,2);if(a){if(t.isPlayer&&n.state==="panic"){this.fx.popup(n.x,2.3*n.S,n.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,n,a,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),n.alive&&this.killEnemy(n,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(n,t.sw.dx,t.sw.dz,t.isPlayer?2.4:n.isPlayer?1.8:1.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,fe.punch();break}}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let s of[t,e])s.stun=.35,s.isPlayer||(s.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),fe.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),fe.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,s=e.u;return e.head&&(n=t.boneWith(k.HEAD),n>=0&&(s=t.bones[n].b===k.HEAD?.7:.3)),n<0||t.bones[n].len<Eh*t.S?null:t.cut(n,s)}gore(t,e,n,s,r,a){let o=this.h;if(e){let l=t.comp[e.i1],c=t.comp[e.i2],h=t.compSize(l)<t.compSize(c)?l:c;t.addVel(s*.35,r*.35+2,a*.35,o,h),this.fx.spray(e.x,e.y,e.z,s,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,$(1.2,2.2)),this.fx.bleed(t,e.i2,$(1.2,2.2)),this.fx.sparks(e.x,e.y,e.z,5),fe.slice()}else this.fx.spray(n.x,n.y,n.z,s,r,a,16,.7,3),fe.wound()}onHit(t,e,n,s,r,a){let o=e.rag,l=e.alive,c=t.side===e.side&&t!==e;if(c&&l&&Math.random()<.55&&(e.grudge=t,e.grudgeT=4),e.isPlayer&&l){this.hitPlayer(t,e,n,s,r,a);return}let h=n.head?"neck":o.bones[n.bone].kind,f=n.head||o.pts[o.bones[n.bone].a].attached,u=e.titan&&(e.neckHp>1||this.time<(e.neckCd||0)),d=l&&(e.armored&&e.hp>1||e.titan&&(h==="torso"||h==="neck"&&u)),p=o.pts,x=[k.LHAND,k.RHAND,k.LFOOT,k.RFOOT].map(M=>p[M].attached),m=d?null:this.applyCut(o,n),g=[k.LHAND,k.RHAND,k.LFOOT,k.RFOOT].some((M,w)=>x[w]&&!p[M].attached);if(o.addVel(s*.2,r*.2+.6,a*.2,this.h),this.gore(o,m,n,s,r,a),t.swordMesh){let M=t.swordMesh.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),M.color.setRGB(ut(.89,.75,t.blood),ut(.91,.12,t.blood),ut(.93,.15,t.blood))}if(l){if(e.titan){f&&this.hitTitan(e,t,m&&m.kind==="neck"||g?m:null,h,s,r,a);return}if(m?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,s,a,3),this.fx.popup(e.x,2.3*e.S,e.z,c?"HEY!":`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,m,s,r,a)}}hitTitan(t,e,n,s,r,a,o){if(n&&n.kind==="neck"){this.killEnemy(t,e,n,r,a,o);return}t.flash=.15;let l=t.rag.pts[k.NECK].y+1;if(s==="neck"){if(this.time<(t.neckCd||0))return;t.neckCd=this.time+.8,t.neckHp--,t.stun=.6,t.state="stagger",this.cancelSwing(t),t.steamT=Math.min(t.steamT,.9),this.fx.spray(e.x,e.y+1,e.z,r,a,o,30,.6,6),this.fx.popup(t.x,l,t.z,`ENSE! ${t.neckHp} darbe kald\u0131`,"#ffd23f",26,1.3),this.slowmo(.2,.3),this.shake(.2),fe.slice();return}n?(n.kind==="arm"&&t.checkGrip(),t.stun=.35,t.state="stagger",this.cancelSwing(t),this.fx.popup(t.x,l,t.z,n.kind==="leg"?"BACA\u011EI G\u0130TT\u0130!":"KOLU G\u0130TT\u0130!","#ffd23f",26,1.2),this.titanHinted||(this.titanHinted=!0,this.fx.popup(t.x,l-1.6,t.z,"\xD6lmedi! ENSES\u0130N\u0130 kes","#fff",20,1.8)),this.slowmo(.15,.35),this.shake(.15)):(this.fx.popup(e.x,e.y+2.2,e.z,s==="torso"?"\xC7OK KALIN!":"SIYRIK","#fff",18,.8),fe.thud(900))}hitPlayer(t,e,n,s,r,a){if(e.invuln>0)return;let o=e.rag,l=n.head?"neck":o.bones[n.bone].kind;this.hud.flash=.6,this.shake(.15),this.cancelSwing(e);let c=l==="torso"?null:this.applyCut(o,n);if(!c&&t.titan){let u=[];o.bones.forEach((d,p)=>{(d.kind==="arm"||d.kind==="leg")&&o.pts[d.a].attached&&o.pts[d.b].attached&&d.len>Eh&&u.push(p)}),u.length&&(c=o.cut(Ks(u),.5))}o.addVel(s*.25,r*.2+1.2,a*.25,this.h),this.gore(o,c,n,s,r,a);let h=o.pts;if(c&&(c.kind==="neck"||!h[k.LHAND].attached&&!h[k.RHAND].attached)){e.die(),o.addVel(s*.5,3,a*.5,this.h),this.lose(c.kind==="neck"?"Kafan gitti.":"\u0130ki kolun da gitti.");return}if(e.hurtT=.3,e.invuln=c?.9:.6,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,t.titan?10:c?4:5),t.titan&&!e.mount&&(e.vy=7,e.y=Math.max(e.y,.05),e.rope=null),fe.hurt(),!c){this.slowmo(.12,.4);return}e.checkGrip();let f=2.1*e.S;c.kind==="arm"?this.fx.popup(e.x,f,e.z,"KOLUN G\u0130TT\u0130!","#ff5a6e",22,1.3):c.kind==="leg"&&this.fx.popup(e.x,f,e.z,e.legMask?"TEK AYAK!":"BACAKSIZ DEVAM!","#ff5a6e",22,1.3),this.slowmo(.25,.3)}near(t,e=12){let n=this.player;return!!n&&Math.hypot(t.x-n.x,t.z-n.z)<e}killEnemy(t,e,n,s,r,a){t.die();let o=this.h;t.rag.addVel(s*.45,r*.3+2.5,a*.45,o),t.rag.addSpin($(-5,5),$(-3,3),$(-5,5),o);let l=2.2*t.S;if(t.titan&&(this.fx.popup(t.x,8,t.z,"ENSES\u0130 KES\u0130LD\u0130! T\u0130TAN D\xDC\u015ET\xDC!","#ffd23f",30,1.8),this.shake(.3)),!(!e||e.isPlayer||t.titan||this.near(t))){this.checkWin();return}n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"?this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2):n.kind==="arm"&&this.fx.popup(t.x,l,t.z,"KOL G\u0130TT\u0130!","#ffd23f",24,1.2));let h=e?e.curEp:null;h&&(h.kills++,h.kills>=2&&e.isPlayer&&this.fx.popup(e.x,2.6,e.z,h.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),e&&e.side===t.side&&!t.titan?this.fx.popup(t.x,l+.5,t.z,"DOST ATE\u015E\u0130!","#ff8ad8",24,1.3):t.team==="ally"&&this.fx.popup(t.x,l+.5,t.z,"DOSTUMUZ D\xDC\u015ET\xDC!","#7cc8ff",20,1.2),fe.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){this.phase==="play"&&(this.enemies.some(t=>t.alive)||(this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",`Lv ${this.level} ge\xE7ildi`,2.6,"win"),fe.win()))}lose(t){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),fe.die(),this.hud.show("\xD6LD\xDCN",`${t||Ks(gv)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){if(!t.alive)return;t.die();let e=this.world.env,n=!!(e.roof||e.grid);this.fx.popup(t.x,t.gy+1.2,t.z,n?"A\u015EA\u011EI D\xDC\u015ET\xDC!":"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?this.lose(e.roof?"Platformdan d\xFC\u015Ft\xFCn.":e.grid?"Bo\u015Flu\u011Fa d\xFC\u015Ft\xFCn.":"Suya d\xFC\u015Ft\xFCn."):(fe.combo(5),this.checkWin())}updateCamera(t,e){let n=this.player,s=n.rag.pts[k.PELVIS],r=n.alive?n.x:s.x,a=n.alive?n.z:s.z,o=this.spec.type,l=n.alive?n.y:Math.max(n.gy,s.y-.8),c=this.camTarget;if(o==="titan")c=this.titan&&this.titan.alive?this.titan:null;else if(o==="horse")c=null;else if(o==="battle"){let S=n.alive?this.nearestEnemy(n,24):null;(!c||!c.alive||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}else{let S=n.alive?this.nearestEnemy(n,14):null;(!c||!c.alive||c.state==="panic"&&S&&S.state!=="panic"||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}this.camTarget=c;let h=this.camYaw;c&&n.alive?h=Math.atan2(c.x-r,c.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?h=n.yaw:n.alive||(h=this.camYaw+t*.3);let f=c&&Math.hypot(c.x-r,c.z-a)<2.4*c.S,u=o==="battle"?c?1:1.8:o==="horse"?1.8:f?.6:c?2.5:1.2;this.camYaw=e?h:this.camYaw+en(h-this.camYaw)*cn(u,t);let d=this.H>this.W,p=d?4:4.1,x=d?3.5:2.6,m=1.9,g=d?.55:.8;o==="horse"&&(p=d?6.8:6.2,x=d?5.2:4.2,m=3.5,g=1.2),o==="battle"&&(p=d?8.5:7.5,x=d?6.5:5.2,m=5,g=1.2),o==="titan"&&(p=d?9.5:8.5,x=d?4.5:3.6,m=7,g=3+l*.5);let M=Math.sin(this.camYaw),w=Math.cos(this.camYaw);In.set(r-M*p,x+l*(o==="titan"?.85:1),a-w*p),e?this.camera.position.copy(In):this.camera.position.lerp(In,cn(7,t));let _=In.set(r+M*m,g+(o==="titan"?l*.5:o==="horse"||o==="battle"?0:l),a+w*m);e?this.lookAt.copy(_):this.lookAt.lerp(_,cn(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}updateRope(){let t=this.player,e=t.alive?t.rope:null,n=this.ropeMesh;if(!e){n.visible=!1;return}let s=e.anchor(),r=t.rag.pts[k.NECK];In.set(s.x-r.x,s.y-r.y,s.z-r.z);let a=In.length();n.visible=!0,n.position.set(r.x,r.y,r.z),n.scale.set(1,a,1),n.quaternion.setFromUnitVectors(xv,In.multiplyScalar(1/a))}project(t,e,n){return In.set(t,e,n).project(this.camera),In.z>1?null:{x:(In.x+1)/2*this.W,y:(1-In.y)/2*this.H}}render(t){for(let s of this.chars)if(s.view.update(t),s.alive&&s.hasSword&&s.swordMesh){let r=s.sw;Lh(s.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz)}for(let s of this.loose)s.render();for(let s of this.horses)s.render();this.updateRope(),this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[k.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT,this.player,this.spec.env==="grid"?"grid":this.spec.type)}};function _v(i){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(i)}var Hl=null;try{Hl=new kl}catch(i){_v(i)}if(Hl){window.game=Hl;let i=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-i)/1e3));i=e,Hl.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
