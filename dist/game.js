(()=>{var uu=0,dc=1,du=2;var Li=1,fu=2,bs=3,li=0,Ie=1,nn=2,Pn=0,ws=1,fc=2,pc=3,mc=4,pu=5;var Di=100,mu=101,gu=102,xu=103,_u=104,yu=200,vu=201,Mu=202,Su=203,gc=204,xc=205,bu=206,wu=207,Eu=208,Tu=209,Au=210,Ru=211,Cu=212,Iu=213,Pu=214,Ra=0,Ca=1,Ia=2,as=3,Pa=4,La=5,Da=6,Na=7,ho=0,Lu=1,Du=2,xn=0,_c=1,yc=2,vc=3,Lr=4,Mc=5,Sc=6,bc=7;var wc=300,ci=301,Ni=302,uo=303,fo=304,Dr=306,Ti=1e3,bn=1001,Ua=1002,Ue=1003,Nu=1004;var Nr=1005;var Be=1006,po=1007;var hi=1008;var Ke=1009,Ec=1010,Tc=1011,Es=1012,mo=1013,_n=1014,on=1015,yn=1016,go=1017,xo=1018,Ts=1020,Ac=35902,Rc=35899,Cc=1021,Ic=1022,ln=1023,En=1026,ui=1027,_o=1028,yo=1029,di=1030,vo=1031;var Mo=1033,Ur=33776,Fr=33777,Or=33778,Br=33779,So=35840,bo=35841,wo=35842,Eo=35843,To=36196,Ao=37492,Ro=37496,Co=37488,Io=37489,zr=37490,Po=37491,Lo=37808,Do=37809,No=37810,Uo=37811,Fo=37812,Oo=37813,Bo=37814,zo=37815,ko=37816,Ho=37817,Vo=37818,Go=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,Zo=36495,Jo=36283,Ko=36284,kr=36285,$o=36286;var $s=2300,Fa=2301,Ta=2302,jl=2303,tc=2400,ec=2401,nc=2402;var Uu=3200;var Hr=0,Fu=1,Yn="",Fe="srgb",Qs="srgb-linear",js="linear",ue="srgb";var Aa=7680;var Ou=519,Bu=512,zu=513,ku=514,Qo=515,Hu=516,Vu=517,jo=518,Gu=519,Pc=35044,Lc=35048;var Dc="300 es",mn=2e3,os=2001;function cf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wu(){let i=tr("canvas");return i.style.display="block",i}var Ph={},ls=null;function er(...i){let t="THREE."+i.shift();ls?ls("log",t,...i):console.log(t,...i)}function Xu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Xu(i);let t="THREE."+i.shift();if(ls)ls("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=Xu(i);let t="THREE."+i.shift();if(ls)ls("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ei(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,kt(...i))}function qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yu={[Ra]:Ca,[Ia]:Da,[Pa]:Na,[as]:La,[Ca]:Ra,[Da]:Ia,[Na]:Pa,[La]:as},Tn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lh=1234567,Ys=Math.PI/180,cs=180/Math.PI;function wn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Nc(i,t){return(i%t+t)%t}function uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function df(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function ff(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function pf(i,t=1){return t-Math.abs(Nc(i,t*2)-t)}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _f(i,t){return i+Math.random()*(t-i)}function yf(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(Lh=i);let t=Lh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(i){return i*Ys}function Sf(i){return i*cs}function bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uc={DEG2RAD:Ys,RAD2DEG:cs,generateUUID:wn,clamp:Kt,euclideanModulo:Nc,mapLinear:uf,inverseLerp:df,lerp:Zs,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:xf,randFloat:_f,randFloatSpread:yf,seededRandom:vf,degToRad:Mf,radToDeg:Sf,isPowerOfTwo:bf,ceilPowerOfTwo:wf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:fe,denormalize:pn},Hc=class Hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hc.prototype.isVector2=!0;var rt=Hc,Ze=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),w=Math.sin(M);m=Math.sin(m*M)/w,o=Math.sin(o*M)/w,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var I=Vc,Rl=new I,Dh=new Ze,Gc=class Gc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],M=s[1],w=s[4],y=s[7],b=s[2],E=s[5],R=s[8];return r[0]=a*x+o*M+l*b,r[3]=a*g+o*w+l*E,r[6]=a*m+o*y+l*R,r[1]=c*x+h*M+d*b,r[4]=c*g+h*w+d*E,r[7]=c*m+h*y+d*R,r[2]=u*x+f*M+p*b,r[5]=u*g+f*w+p*E,r[8]=u*m+f*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;var qt=Gc,Cl=new qt,Nh=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uh=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Af(){let i={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qs]:{primaries:t,whitePoint:n,transfer:js,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Nh,fromXYZ:Uh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var ie=Af();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,Oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=tr("canvas")),Hi.width=t.width,Hi.height=t.height;let s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rf=0,hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Il(s[a].image)):r.push(Il(s[a]))}else r=Il(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Il(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Cf=0,Pl=new I,qe=class i extends Tn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Be,a=hi,o=ln,l=Ke,c=i.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=wn(),this.name="",this.source=new hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pl).x}get height(){return this.source.getSize(Pl).y}get depth(){return this.source.getSize(Pl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ti:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Ua:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ti:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Ua:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=wc;qe.DEFAULT_ANISOTROPY=1;var Wc=class Wc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(f+1)/2,b=(m+1)/2,E=(h+u)/4,R=(d+x)/4,_=(p+g)/4;return w>y&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=E/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;var Me=Wc,Ba=class extends Tn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Je=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var za=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var co=class co{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new co().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(If,t,Pf)}lookAt(t,e,n){let s=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Qn.crossVectors(n,Qe),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Qn.crossVectors(n,Qe)),Qn.normalize(),jr.crossVectors(Qe,Qn),s[0]=Qn.x,s[4]=jr.x,s[8]=Qe.x,s[1]=Qn.y,s[5]=jr.y,s[9]=Qe.y,s[2]=Qn.z,s[6]=jr.z,s[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],w=n[7],y=n[11],b=n[15],E=s[0],R=s[4],_=s[8],T=s[12],C=s[1],D=s[5],U=s[9],z=s[13],P=s[2],O=s[6],W=s[10],V=s[14],it=s[3],q=s[7],j=s[11],nt=s[15];return r[0]=a*E+o*C+l*P+c*it,r[4]=a*R+o*D+l*O+c*q,r[8]=a*_+o*U+l*W+c*j,r[12]=a*T+o*z+l*V+c*nt,r[1]=h*E+d*C+u*P+f*it,r[5]=h*R+d*D+u*O+f*q,r[9]=h*_+d*U+u*W+f*j,r[13]=h*T+d*z+u*V+f*nt,r[2]=p*E+x*C+g*P+m*it,r[6]=p*R+x*D+g*O+m*q,r[10]=p*_+x*U+g*W+m*j,r[14]=p*T+x*z+g*V+m*nt,r[3]=M*E+w*C+y*P+b*it,r[7]=M*R+w*D+y*O+b*q,r[11]=M*_+w*U+y*W+b*j,r[15]=M*T+w*z+y*V+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*f-c*u,w=o*f-c*d,y=o*u-l*d,b=a*f-c*h,E=a*u-l*h,R=a*d-o*h;return e*(x*M-g*w+m*y)-n*(p*M-g*b+m*E)+s*(p*w-x*b+m*R)-r*(p*y-x*E+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*o-n*a,w=e*l-s*a,y=e*c-r*a,b=n*l-s*o,E=n*c-r*o,R=s*c-r*l,_=h*x-d*p,T=h*g-u*p,C=h*m-f*p,D=d*g-u*x,U=d*m-f*x,z=u*m-f*g,P=M*z-w*U+y*D+b*C-E*T+R*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/P;return t[0]=(o*z-l*U+c*D)*O,t[1]=(s*U-n*z-r*D)*O,t[2]=(x*R-g*E+m*b)*O,t[3]=(u*E-d*R-f*b)*O,t[4]=(l*C-a*z-c*T)*O,t[5]=(e*z-s*C+r*T)*O,t[6]=(g*y-p*R-m*w)*O,t[7]=(h*R-u*y+f*w)*O,t[8]=(a*U-o*C+c*_)*O,t[9]=(n*C-e*U-r*_)*O,t[10]=(p*E-x*y+m*M)*O,t[11]=(d*y-h*E-f*M)*O,t[12]=(o*T-a*D-l*_)*O,t[13]=(e*D-n*T+s*_)*O,t[14]=(x*w-p*b-g*M)*O,t[15]=(h*b-d*w+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,M=l*c,w=l*h,y=l*d,b=n.x,E=n.y,R=n.z;return s[0]=(1-(x+m))*b,s[1]=(f+y)*b,s[2]=(p-w)*b,s[3]=0,s[4]=(f-y)*E,s[5]=(1-(u+m))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(p+w)*R,s[9]=(g-M)*R,s[10]=(1-(u+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),hn.copy(this);let c=1/a,h=1/o,d=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=mn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===mn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===os)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=mn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===mn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===os)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};co.prototype.isMatrix4=!0;var ee=co,Vi=new I,hn=new ee,If=new I(0,0,0),Pf=new I(1,1,1),Qn=new I,jr=new I,Qe=new I,Fh=new ee,Oh=new Ze,An=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lf=0,Bh=new I,Gi=new Ze,On=new ee,ta=new I,Os=new I,Df=new I,Nf=new Ze,zh=new I(1,0,0),kh=new I(0,1,0),Hh=new I(0,0,1),Vh={type:"added"},Uf={type:"removed"},Wi={type:"childadded",child:null},Ll={type:"childremoved",child:null},Re=class i extends Tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new An,n=new Ze,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(zh,t)}rotateY(t){return this.rotateOnAxis(kh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Bh.copy(t).applyQuaternion(this.quaternion),this.position.add(Bh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zh,t)}translateY(t){return this.translateOnAxis(kh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Os,ta,this.up):On.lookAt(ta,Os,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(On),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uf),Ll.child=t,this.dispatchEvent(Ll),Ll.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Re.DEFAULT_UP=new I(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ne=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ff={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ea={h:0,s:0,l:0};function Dl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Nc(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dl(a,r,t+1/3),this.g=Dl(a,r,t),this.b=Dl(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ie.workingToColorSpace(He.copy(this),t),Math.round(Kt(He.r*255,0,255))*65536+Math.round(Kt(He.g*255,0,255))*256+Math.round(Kt(He.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Fe){ie.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(ea);let n=Zs(jn.h,ea.h,e),s=Zs(jn.s,ea.s,e),r=Zs(jn.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Ot;Ot.NAMES=Zu;var sr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},un=new I,Bn=new I,Nl=new I,zn=new I,Xi=new I,qi=new I,Gh=new I,Ul=new I,Fl=new I,Ol=new I,Bl=new Me,zl=new Me,kl=new Me,Vn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),Bn.subVectors(n,e),Nl.subVectors(t,e);let a=un.dot(un),o=un.dot(Bn),l=un.dot(Nl),c=Bn.dot(Bn),h=Bn.dot(Nl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bl.setScalar(0),zl.setScalar(0),kl.setScalar(0),Bl.fromBufferAttribute(t,e),zl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bl,r.x),a.addScaledVector(zl,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),Bn.subVectors(t,e),un.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),un.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Xi.subVectors(s,n),qi.subVectors(r,n),Ul.subVectors(t,n);let l=Xi.dot(Ul),c=qi.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,s);let h=Xi.dot(Fl),d=qi.dot(Fl);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xi,a);Ol.subVectors(t,r);let f=Xi.dot(Ol),p=qi.dot(Ol);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(qi,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Gh.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Gh,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),ia.subVectors(this.max,Bs),Yi.subVectors(t.a,Bs),Zi.subVectors(t.b,Bs),Ji.subVectors(t.c,Bs),ti.subVectors(Zi,Yi),ei.subVectors(Ji,Zi),vi.subVectors(Yi,Ji);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!Hl(e,Yi,Zi,Ji,ia)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,Yi,Zi,Ji,ia))?!1:(sa.crossVectors(ti,ei),e=[sa.x,sa.y,sa.z],Hl(e,Yi,Zi,Ji,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},kn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,na=new Rn,Yi=new I,Zi=new I,Ji=new I,ti=new I,ei=new I,vi=new I,Bs=new I,ia=new I,sa=new I,Mi=new I;function Hl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Mi.fromArray(i,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Te=new I,ra=new rt,Of=0,Ae=class extends Tn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var rr=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ar=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ae=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bf=new Rn,zs=new I,Vl=new I,Wn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Vl)),this.expandByPoint(zs.copy(t.center).sub(Vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zf=0,an=new ee,Gl=new Re,Ki=new I,je=new Rn,ks=new Rn,De=new I,Se=class i extends Tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?ar:rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Gl.lookAt(t),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(je.min,ks.min),je.expandByPoint(De),De.addVectors(je.max,ks.max),je.expandByPoint(De)):(je.expandByPoint(ks.min),je.expandByPoint(ks.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),De.add(Ki)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ae(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,d=new I,u=new rt,f=new rt,p=new rt,x=new I,g=new I;function m(_,T,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(D),o[_].add(x),o[T].add(x),o[C].add(x),l[_].add(g),l[T].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,T=M.length;_<T;++_){let C=M[_],D=C.start,U=C.count;for(let z=D,P=D+U;z<P;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new I,y=new I,b=new I,E=new I;function R(_){b.fromBufferAttribute(s,_),E.copy(b);let T=o[_];w.copy(T),w.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(E,T);let D=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,T=M.length;_<T;++_){let C=M[_],D=C.start,U=C.count;for(let z=D,P=D+U;z<P;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Ae(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},or=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pc,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Xe=new I,ds=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){er("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){er("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wl=new I,kf=new I,Hf=new qt,fn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wl.subVectors(n,e).cross(kf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hf.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vf=0,gn=class extends Tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=ws,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Aa,this.stencilZFail=Aa,this.stencilZPass=Aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new fn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ri=class extends gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$i,Hs=new I,Qi=new I,ji=new I,ts=new rt,Vs=new rt,Ju=new ee,aa=new I,Gs=new I,oa=new I,Wh=new rt,Xl=new rt,Xh=new rt,fs=class extends Re{constructor(t=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new or(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new ds(n,3,0,!1)),$i.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Ju.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ji.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;la(aa.set(-.5,-.5,0),ji,a,Qi,s,r),la(Gs.set(.5,-.5,0),ji,a,Qi,s,r),la(oa.set(.5,.5,0),ji,a,Qi,s,r),Wh.set(0,0),Xl.set(1,0),Xh.set(1,1);let o=t.ray.intersectTriangle(aa,Gs,oa,!1,Hs);if(o===null&&(la(Gs.set(-.5,.5,0),ji,a,Qi,s,r),Xl.set(0,1),o=t.ray.intersectTriangle(aa,oa,Gs,!1,Hs),o===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Vn.getInterpolation(Hs,aa,Gs,oa,Wh,Xl,Xh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function la(i,t,e,n,s,r){ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*ts.x-s*ts.y,Vs.y=s*ts.x+r*ts.y):Vs.copy(ts),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Ju)}var Hn=new I,ql=new I,ca=new I,ha=new I,lr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ql.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),ha.copy(this.origin).sub(ql);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ql).addScaledVector(ca,u),f}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,M=n.y-a.y,w=n.z-a.z,y=Math.abs(l),b=Math.abs(c),E=Math.abs(h),R,_,T,C,D,U,z,P,O,W,V,it;if(y>=b&&y>=E?(T=l,U=d,O=p,it=m,l>=0?(R=c,_=h,C=u,D=f,z=x,P=g,W=M,V=w):(R=h,_=c,C=f,D=u,z=g,P=x,W=w,V=M)):b>=E?(T=c,U=u,O=x,it=M,c>=0?(R=h,_=l,C=f,D=d,z=g,P=p,W=w,V=m):(R=l,_=h,C=d,D=f,z=p,P=g,W=m,V=w)):(T=h,U=f,O=g,it=w,h>=0?(R=l,_=c,C=d,D=u,z=p,P=x,W=m,V=M):(R=c,_=l,C=u,D=d,z=x,P=p,W=M,V=m)),T===0)return null;let q=R/T,j=_/T,nt=1/T,Pt=C-q*U,Tt=D-j*U,oe=z-q*O,Qt=P-j*O,se=W-q*it,J=V-j*it,tt=se*Qt-J*oe,_t=Pt*J-Tt*se,Gt=oe*Tt-Qt*Pt;if(s){if(tt<0||_t<0||Gt<0)return null}else if((tt<0||_t<0||Gt<0)&&(tt>0||_t>0||Gt>0))return null;let St=tt+_t+Gt;if(St===0)return null;let Wt=nt*(tt*U+_t*O+Gt*it);return(St>0?Wt<0:Wt>0)?null:this.at(Wt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ci=class extends gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qh=new ee,Si=new lr,ua=new Wn,Yh=new I,da=new I,fa=new I,pa=new I,Yl=new I,ma=new I,Zh=new I,ga=new I,Vt=class extends Re{constructor(t=new Se,e=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Yl.fromBufferAttribute(d,t),a?ma.addScaledVector(Yl,h):ma.addScaledVector(Yl.sub(e),h))}e.add(ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(ua.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ua,Yh)===null||Si.origin.distanceToSquared(Yh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Si.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){let E=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);s=xa(this,m,t,n,c,h,d,E,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);s=xa(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),w=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=M,b=w;y<b;y+=3){let E=y,R=y+1,_=y+2;s=xa(this,m,t,n,c,h,d,E,R,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,w=g+1,y=g+2;s=xa(this,a,t,n,c,h,d,M,w,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Gf(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===li,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ga);return c<e.near||c>e.far?null:{distance:c,point:ga.clone(),object:i}}function xa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let h=Gf(i,t,e,n,da,fa,pa,Zh);if(h){let d=new I;Vn.getBarycoord(Zh,da,fa,pa,d),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,l,c,d,new rt)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,d,new rt)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};Vn.getNormal(da,fa,pa,u.normal),h.face=u,h.barycoord=d}return h}var cr=class extends qe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},es=new ee,Jh=new ee,_a=[],Kh=new Rn,Wf=new ee,Ws=new Vt,Xs=new Wn,Xn=class extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Kh.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Kh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Xs.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,es),Jh.multiplyMatrices(n,es),Ws.matrixWorld=Jh,Ws.raycast(t,_a);for(let a=0,o=_a.length;a<o;a++){let l=_a[a];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(s*this.count),s,this.count,_o,on));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bi=new Wn,Xf=new rt(.5,.5),ya=new I,ms=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],w=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,f-h,m-p,b-M).normalize(),s[1].setComponents(c+a,f+h,m+p,b+M).normalize(),s[2].setComponents(c+o,f+d,m+x,b+w).normalize(),s[3].setComponents(c-o,f-d,m-x,b-w).normalize(),n)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,f-u,m-g,b-y).normalize();else if(s[4].setComponents(c-l,f-u,m-g,b-y).normalize(),e===mn)s[5].setComponents(c+l,f+u,m+g,b+y).normalize();else if(e===os)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);let e=Xf.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ya.x=s.normal.x>0?t.max.x:t.min.x,ya.y=s.normal.y>0?t.max.y:t.min.y,ya.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ii=class extends gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$h=new ee,ic=new lr,va=new Wn,Ma=new I,hr=class extends Re{constructor(t=new Se,e=new ii){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;$h.copy(s).invert(),ic.copy(t.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Ma.fromBufferAttribute(d,g),Qh(Ma,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Ma.fromBufferAttribute(d,p),Qh(Ma,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qh(i,t,e,n,s,r,a){let o=ic.distanceSqToPoint(i);if(o<e){let l=new I;ic.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ur=class extends qe{constructor(t=[],e=ci,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ii=class extends qe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var si=class extends qe{constructor(t,e,n=_n,s,r,a,o=Ue,l=Ue,c,h=En,d=1){if(h!==En&&h!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ka=class extends si{constructor(t,e=_n,n=ci,s,r,a=Ue,o=Ue,l,c=En){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},dr=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ye=class i extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function p(x,g,m,M,w,y,b,E,R,_,T){let C=y/R,D=b/_,U=y/2,z=b/2,P=E/2,O=R+1,W=_+1,V=0,it=0,q=new I;for(let j=0;j<W;j++){let nt=j*D-z;for(let Pt=0;Pt<O;Pt++){let Tt=Pt*C-U;q[x]=Tt*M,q[g]=nt*w,q[m]=P,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=E>0?1:-1,h.push(q.x,q.y,q.z),d.push(Pt/R),d.push(1-j/_),V+=1}}for(let j=0;j<_;j++)for(let nt=0;nt<R;nt++){let Pt=u+nt+O*j,Tt=u+nt+O*(j+1),oe=u+(nt+1)+O*(j+1),Qt=u+(nt+1)+O*j;l.push(Pt,Tt,Qt),l.push(Tt,oe,Qt),it+=6}o.addGroup(f,it,T),f+=it,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fr=class i extends Se{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qn=class i extends Se{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;M(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function M(){let y=new I,b=new I,E=0,R=(e-t)/n;for(let _=0;_<=r;_++){let T=[],C=_/r,D=C*(e-t)+t;for(let U=0;U<=s;U++){let z=U/s,P=z*l+o,O=Math.sin(P),W=Math.cos(P);b.x=D*O,b.y=-C*n+g,b.z=D*W,d.push(b.x,b.y,b.z),y.set(O,R,W).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-C),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=x[T][_],D=x[T+1][_],U=x[T+1][_+1],z=x[T][_+1];(t>0||T!==0)&&(h.push(C,D,z),E+=3),(e>0||T!==r-1)&&(h.push(D,U,z),E+=3)}c.addGroup(m,E,0),m+=E}function w(y){let b=p,E=new rt,R=new I,_=0,T=y===!0?t:e,C=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let U=0;U<=s;U++){let P=U/s*l+o,O=Math.cos(P),W=Math.sin(P);R.x=T*W,R.y=g*C,R.z=T*O,d.push(R.x,R.y,R.z),u.push(0,C,0),E.x=O*.5+.5,E.y=W*.5*C+.5,f.push(E.x,E.y),p++}for(let U=0;U<s;U++){let z=b+U,P=D+U;y===!0?h.push(P,P+1,z):h.push(P+1,P,z),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gs=class i extends qn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class i extends Se{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let w=new I,y=new I,b=new I;for(let E=0;E<e.length;E+=3)f(e[E+0],w),f(e[E+1],y),f(e[E+2],b),l(w,y,b,M)}function l(M,w,y,b){let E=b+1,R=[];for(let _=0;_<=E;_++){R[_]=[];let T=M.clone().lerp(y,_/E),C=w.clone().lerp(y,_/E),D=E-_;for(let U=0;U<=D;U++)U===0&&_===E?R[_][U]=T:R[_][U]=T.clone().lerp(C,U/D)}for(let _=0;_<E;_++)for(let T=0;T<2*(E-_)-1;T++){let C=Math.floor(T/2);T%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function c(M){let w=new I;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(M),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let M=new I;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];let y=g(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;a.push(y,1-b)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let w=a[M+0],y=a[M+2],b=a[M+4],E=Math.max(w,y,b),R=Math.min(w,y,b);E>.9&&R<.1&&(w<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,w){let y=M*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){let M=new I,w=new I,y=new I,b=new I,E=new rt,R=new rt,_=new rt;for(let T=0,C=0;T<r.length;T+=9,C+=6){M.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),E.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),b.copy(M).add(w).add(y).divideScalar(3);let D=g(b);x(E,C+0,M,D),x(R,C+2,w,D),x(_,C+4,y,D)}}function x(M,w,y,b){b<0&&M.x===1&&(a[w]=M.x-1),y.x===0&&y.z===0&&(a[w]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},xs=class i extends Ha{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ee;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},_s=class extends tn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Va=class extends _s{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jh=new I,tu=new I,Zl=new Fc,Jl=new Fc,Kl=new Fc,Ga=class extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Zl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Jl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Kl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Zl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Jl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Kl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Zl.calc(l),Jl.calc(l),Kl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qf(i,t){let e=1-i;return e*e*t}function Yf(i,t){return 2*(1-i)*i*t}function Zf(i,t){return i*i*t}function Js(i,t,e,n){return qf(i,t)+Yf(i,e)+Zf(i,n)}function Jf(i,t){let e=1-i;return e*e*e*t}function Kf(i,t){let e=1-i;return 3*e*e*i*t}function $f(i,t){return 3*(1-i)*i*i*t}function Qf(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return Jf(i,t)+Kf(i,e)+$f(i,n)+Qf(i,s)}var pr=class extends tn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Wa=class extends tn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends tn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xa=class extends tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends tn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qa=class extends tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Js(t,s.x,r.x,a.x),Js(t,s.y,r.y,a.y),Js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(eu(o,l.x,c.x,h.x,d.x),eu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},sc=Object.freeze({__proto__:null,ArcCurve:Va,CatmullRomCurve3:Ga,CubicBezierCurve:pr,CubicBezierCurve3:Wa,EllipseCurve:_s,LineCurve:mr,LineCurve3:Xa,QuadraticBezierCurve:gr,QuadraticBezierCurve3:qa,SplineCurve:xr}),Ya=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sc[s.type]().fromJSON(s))}return this}},_r=class extends Ya{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new gr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new pr(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new xr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new _s(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ys=class extends _r{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new _r().fromJSON(s))}return this}};function jf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ku(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=sp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return yr(r,a,e,o,l,c,0),a}function Ku(i,t,e,n,s){let r;if(s===mp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=nu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=nu(a/n|0,i[a],i[a+1],r);return r&&vs(r,r.next)&&(Mr(r),r=r.next),r}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vs(e,e.next)||be(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function yr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ep(i,n,s,r):tp(i)){t.push(l.i,i.i,c.i),Mr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=np(Pi(i),t),yr(i,t,e,n,s,r,2)):a===2&&ip(i,t,e,n,s,r):yr(Pi(i),t,e,n,s,r,1);break}}}function tp(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&qs(s,o,r,l,a,c,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ep(i,t,e,n){let s=i.prev,r=i,a=i.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=rc(f,p,t,e,n),M=rc(x,g,t,e,n),w=i.prevZ,y=i.nextZ;for(;w&&w.z>=m&&y&&y.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&qs(o,h,l,d,c,u,w.x,w.y)&&be(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&qs(o,h,l,d,c,u,y.x,y.y)&&be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&qs(o,h,l,d,c,u,w.x,w.y)&&be(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&qs(o,h,l,d,c,u,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function np(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vs(n,s)&&Qu(n,e,e.next,s)&&vr(n,s)&&vr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return Pi(e)}function ip(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dp(a,o)){let l=ju(a,o);a=Pi(a,a.next),l=Pi(l,l.next),yr(a,t,e,n,s,r,0),yr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ku(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(up(c))}s.sort(rp);for(let r=0;r<s.length;r++)e=ap(s[r],e);return e}function rp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ap(i,t){let e=op(i,t);if(!e)return t;let n=ju(e,i);return Pi(n,n.next),Pi(e,e.next)}function op(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(vs(i,e))return e;do{if(vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$u(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);vr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&lp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function lp(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function cp(i,t,e,n){let s=i;do s.z===0&&(s.z=rc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hp(s)}function hp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function rc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function up(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $u(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function qs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&$u(i,t,e,n,s,r,a,o)}function dp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fp(i,t)&&(vr(i,t)&&vr(t,i)&&pp(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||vs(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vs(i,t){return i.x===t.x&&i.y===t.y}function Qu(i,t,e,n){let s=ba(be(i,t,e)),r=ba(be(i,t,n)),a=ba(be(e,n,i)),o=ba(be(e,n,t));return!!(s!==r&&a!==o||s===0&&Sa(i,e,t)||r===0&&Sa(i,n,t)||a===0&&Sa(e,i,n)||o===0&&Sa(e,t,n))}function Sa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ba(i){return i>0?1:i<0?-1:0}function fp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function vr(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function pp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ju(i,t){let e=ac(i.i,i.x,i.y),n=ac(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nu(i,t,e,n){let s=ac(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ac(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function mp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var oc=class{static triangulate(t,e,n=2){return jf(t,e,n)}},wi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];iu(t),su(n,t);let a=t.length;e.forEach(iu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,su(n,e[l]);let o=oc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function iu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Sr=class i extends Se{constructor(t=new ys([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:gp,w,y=!1,b,E,R,_;if(m){w=m.getSpacedPoints(h),y=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,et),E=new I,R=new I,_=new I}u||(g=0,f=0,p=0,x=0);let T=o.extractPoints(c),C=T.shape,D=T.holes;if(!wi.isClockWise(C)){C=C.reverse();for(let et=0,at=D.length;et<at;et++){let ot=D[et];wi.isClockWise(ot)&&(D[et]=ot.reverse())}}function z(et){let ot=10000000000000001e-36,lt=et[0];for(let ut=1;ut<=et.length;ut++){let Bt=ut%et.length,Ut=et[Bt],Xt=Ut.x-lt.x,Yt=Ut.y-lt.y,L=Xt*Xt+Yt*Yt,le=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(lt.x),Math.abs(lt.y)),jt=ot*le*le;if(L<=jt){et.splice(Bt,1),ut--;continue}lt=Ut}}z(C),D.forEach(z);let P=D.length,O=C;for(let et=0;et<P;et++){let at=D[et];C=C.concat(at)}function W(et,at,ot){return at||Ht("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(at,ot)}let V=C.length;function it(et,at,ot){let lt,ut,Bt,Ut=et.x-at.x,Xt=et.y-at.y,Yt=ot.x-et.x,L=ot.y-et.y,le=Ut*Ut+Xt*Xt,jt=Ut*L-Xt*Yt;if(Math.abs(jt)>Number.EPSILON){let A=Math.sqrt(le),v=Math.sqrt(Yt*Yt+L*L),B=at.x-Xt/A,G=at.y+Ut/A,Y=ot.x-L/v,ct=ot.y+Yt/v,ht=((Y-B)*L-(ct-G)*Yt)/(Ut*L-Xt*Yt);lt=B+Ut*ht-et.x,ut=G+Xt*ht-et.y;let Z=lt*lt+ut*ut;if(Z<=2)return new rt(lt,ut);Bt=Math.sqrt(Z/2)}else{let A=!1;Ut>Number.EPSILON?Yt>Number.EPSILON&&(A=!0):Ut<-Number.EPSILON?Yt<-Number.EPSILON&&(A=!0):Math.sign(Xt)===Math.sign(L)&&(A=!0),A?(lt=-Xt,ut=Ut,Bt=Math.sqrt(le)):(lt=Ut,ut=Xt,Bt=Math.sqrt(le/2))}return new rt(lt/Bt,ut/Bt)}let q=[];for(let et=0,at=O.length,ot=at-1,lt=et+1;et<at;et++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),q[et]=it(O[et],O[ot],O[lt]);let j=[],nt,Pt=q.concat();for(let et=0,at=P;et<at;et++){let ot=D[et];nt=[];for(let lt=0,ut=ot.length,Bt=ut-1,Ut=lt+1;lt<ut;lt++,Bt++,Ut++)Bt===ut&&(Bt=0),Ut===ut&&(Ut=0),nt[lt]=it(ot[lt],ot[Bt],ot[Ut]);j.push(nt),Pt=Pt.concat(nt)}let Tt;if(g===0)Tt=wi.triangulateShape(O,D);else{let et=[],at=[];for(let ot=0;ot<g;ot++){let lt=ot/g,ut=f*Math.cos(lt*Math.PI/2),Bt=p*Math.sin(lt*Math.PI/2)+x;for(let Ut=0,Xt=O.length;Ut<Xt;Ut++){let Yt=W(O[Ut],q[Ut],Bt);_t(Yt.x,Yt.y,-ut),lt===0&&et.push(Yt)}for(let Ut=0,Xt=P;Ut<Xt;Ut++){let Yt=D[Ut];nt=j[Ut];let L=[];for(let le=0,jt=Yt.length;le<jt;le++){let A=W(Yt[le],nt[le],Bt);_t(A.x,A.y,-ut),lt===0&&L.push(A)}lt===0&&at.push(L)}}Tt=wi.triangulateShape(et,at)}let oe=Tt.length,Qt=p+x;for(let et=0;et<V;et++){let at=u?W(C[et],Pt[et],Qt):C[et];y?(R.copy(b.normals[0]).multiplyScalar(at.x),E.copy(b.binormals[0]).multiplyScalar(at.y),_.copy(w[0]).add(R).add(E),_t(_.x,_.y,_.z)):_t(at.x,at.y,0)}for(let et=1;et<=h;et++)for(let at=0;at<V;at++){let ot=u?W(C[at],Pt[at],Qt):C[at];y?(R.copy(b.normals[et]).multiplyScalar(ot.x),E.copy(b.binormals[et]).multiplyScalar(ot.y),_.copy(w[et]).add(R).add(E),_t(_.x,_.y,_.z)):_t(ot.x,ot.y,d/h*et)}for(let et=g-1;et>=0;et--){let at=et/g,ot=f*Math.cos(at*Math.PI/2),lt=p*Math.sin(at*Math.PI/2)+x;for(let ut=0,Bt=O.length;ut<Bt;ut++){let Ut=W(O[ut],q[ut],lt);_t(Ut.x,Ut.y,d+ot)}for(let ut=0,Bt=D.length;ut<Bt;ut++){let Ut=D[ut];nt=j[ut];for(let Xt=0,Yt=Ut.length;Xt<Yt;Xt++){let L=W(Ut[Xt],nt[Xt],lt);y?_t(L.x,L.y+w[h-1].y,w[h-1].x+ot):_t(L.x,L.y,d+ot)}}}se(),J();function se(){let et=s.length/3;if(u){let at=0,ot=V*at;for(let lt=0;lt<oe;lt++){let ut=Tt[lt];Gt(ut[2]+ot,ut[1]+ot,ut[0]+ot)}at=h+g*2,ot=V*at;for(let lt=0;lt<oe;lt++){let ut=Tt[lt];Gt(ut[0]+ot,ut[1]+ot,ut[2]+ot)}}else{for(let at=0;at<oe;at++){let ot=Tt[at];Gt(ot[2],ot[1],ot[0])}for(let at=0;at<oe;at++){let ot=Tt[at];Gt(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}n.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,at=0;tt(O,at),at+=O.length;for(let ot=0,lt=D.length;ot<lt;ot++){let ut=D[ot];tt(ut,at),at+=ut.length}n.addGroup(et,s.length/3-et,1)}function tt(et,at){let ot=et.length;for(;--ot>=0;){let lt=ot,ut=ot-1;ut<0&&(ut=et.length-1);for(let Bt=0,Ut=h+g*2;Bt<Ut;Bt++){let Xt=V*Bt,Yt=V*(Bt+1),L=at+lt+Xt,le=at+ut+Xt,jt=at+ut+Yt,A=at+lt+Yt;St(L,le,jt,A)}}}function _t(et,at,ot){l.push(et),l.push(at),l.push(ot)}function Gt(et,at,ot){Wt(et),Wt(at),Wt(ot);let lt=s.length/3,ut=M.generateTopUV(n,s,lt-3,lt-2,lt-1);de(ut[0]),de(ut[1]),de(ut[2])}function St(et,at,ot,lt){Wt(et),Wt(at),Wt(lt),Wt(at),Wt(ot),Wt(lt);let ut=s.length/3,Bt=M.generateSideWallUV(n,s,ut-6,ut-3,ut-2,ut-1);de(Bt[0]),de(Bt[1]),de(Bt[3]),de(Bt[1]),de(Bt[2]),de(Bt[3])}function Wt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function de(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sc[s.type]().fromJSON(s)),new i(n,t.options)}},gp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-d),new rt(u,1-p),new rt(x,1-m)]:[new rt(o,1-l),new rt(h,1-d),new rt(f,1-p),new rt(g,1-m)]}};function xp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var br=class i extends Se{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new rt,f=new I,p=new I,x=new I,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let w=n+M*h*s,y=Math.sin(w),b=Math.cos(w);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*y,d.y=t[E].y,d.z=t[E].x*b,a.push(d.x,d.y,d.z),u.x=M/e,u.y=E/(t.length-1),o.push(u.x,u.y);let R=l[3*E+0]*y,_=l[3*E+1],T=l[3*E+0]*b;c.push(R,_,T)}}for(let M=0;M<e;M++)for(let w=0;w<t.length-1;w++){let y=w+M*t.length,b=y,E=y+t.length,R=y+t.length+1,_=y+1;r.push(b,E,_),r.push(R,_,E)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Cn=class i extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-a;for(let w=0;w<c;w++){let y=w*d-r;p.push(y,-M,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let w=M+c*m,y=M+c*(m+1),b=M+1+c*(m+1),E=M+1+c*m;f.push(w,y,E),f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var In=class i extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],w=m/n,y=a+w*o,b=t*Math.cos(y),E=Math.sqrt(t*t-b*b),R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;d.x=-E*Math.cos(C),d.y=b,d.z=E*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+R,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let w=h[m][M+1],y=h[m][M],b=h[m+1][M],E=h[m+1][M+1];(m!==0||a>0)&&f.push(w,y,E),(m!==n-1||l<Math.PI)&&f.push(y,b,E)}this.setIndex(f),this.setAttribute("position",new ae(p,3)),this.setAttribute("normal",new ae(x,3)),this.setAttribute("uv",new ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ui(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ru(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ru(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ge(i){let t={};for(let e=0;e<i.length;e++){let n=Ui(i[e]);for(let s in n)t[s]=n[s]}return t}function ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var tl={clone:Ui,merge:Ge},yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Za=class extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},me=class extends gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},wr=class extends me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Er=class extends gn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ja=class extends gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $l(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ri=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$a=class extends ri{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tc,endingEnd:tc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ec:r=t,o=2*e-n;break;case nc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ec:a=t,l=2*n-e;break;case nc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*x+.5*p,y=f*g-f*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+M*a[c+b]+w*a[l+b]+y*a[d+b];return r}},Qa=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},ja=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},to=class extends ri{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,M=d[m],w=d[m+1],y=t*u+p*2,b=h[y],E=h[y+1],R=Sp(n,e,M,b,s);r[p]=td(R,x,w,E,g)}return r}};function td(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Mp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Sp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=td(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Mp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ns(e,this.TimeBufferType),this.values=ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ns(t.times,Array),values:ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$l(t.settings)&&(n.settings={inTangents:ns(t.settings.inTangents,Array),outTangents:ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new to(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $s:e=this.InterpolantFactoryMethodDiscrete;break;case Fa:e=this.InterpolantFactoryMethodLinear;break;case Ta:e=this.InterpolantFactoryMethodSmooth;break;case jl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ta;case this.InterpolantFactoryMethodBezier:return jl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$l(this.settings)&&(au(this.settings.inTangents,t),au(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ta,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$l(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function au(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Fa;var ai=class extends en{constructor(t,e,n){super(t,e,n)}};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=$s;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};eo.prototype.ValueTypeName="color";var no=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};no.prototype.ValueTypeName="number";var io=class extends ri{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Ze.slerpFlat(r,0,a,c-o,a,c,l);return r}},Tr=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends en{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=$s;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};so.prototype.ValueTypeName="vector";var ro=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new ro,ao=class{constructor(t){this.manager=t!==void 0?t:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ms=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ar=class extends Ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ql=new ee,ou=new I,lu=new I,Rr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),lu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ql,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===os||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wa=new I,Ea=new Ze,Sn=new I,Cr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wa,Ea,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ea,Sn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wa,Ea,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ea,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new I,cu=new rt,hu=new rt,Oe=class extends Cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,cu,hu),e.subVectors(hu,cu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var lc=class extends Rr{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},Ir=class extends Ms{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ss=class extends Cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cc=class extends Rr{constructor(){super(new Ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new cc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var is=-90,ss=1,oo=class extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Oe(is,ss,t,e);r.layers=this.layers,this.add(r);let a=new Oe(is,ss,t,e);a.layers=this.layers,this.add(a);let o=new Oe(is,ss,t,e);o.layers=this.layers,this.add(o);let l=new Oe(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new Oe(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lo=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bc="\\[\\]\\.:\\/",bp=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",wp="[^"+Bc.replace("\\.","")+"]",Ep=/((?:WC+[\/:])*)/.source.replace("WC",zc),Tp=/(WCOD+)?/.source.replace("WCOD",wp),Ap=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Rp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Cp=new RegExp("^"+Ep+Tp+Ap+Rp+"$"),Ip=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bp,"")}static parseTrackName(t){let e=Cp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=hc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var Xc=class Xc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Xc.prototype.isMatrix2=!0;var uc=Xc;function kc(i,t,e,n){let s=Pp(n);switch(e){case Cc:return i*t;case _o:return i*t/s.components*s.byteLength;case yo:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case vo:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case Ur:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case So:case wo:return Math.max(i,8)*Math.max(t,8)/2;case To:case Ao:case Co:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ro:case zr:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jo:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kr:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pp(i){switch(i){case Ke:case Ec:return{byteLength:1,components:1};case Es:case Tc:case yn:return{byteLength:2,components:1};case go:case xo:return{byteLength:2,components:4};case _n:case mo:case on:return{byteLength:4,components:1};case Ac:case Rc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Fp(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bp=`#ifdef USE_ALPHAHASH
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
#endif`,zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xp=`#ifdef USE_BATCHING
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
#endif`,qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,$p=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lm=`vec3 transformedNormal = objectNormal;
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
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,um=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fm="gl_FragColor = linearToOutputTexel( gl_FragColor );",pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Um=`uniform sampler2D dfgLUT;
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
}`,Fm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`#ifdef USE_MORPHTARGETS
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
#endif`,t0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S0=`float getShadowMask() {
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
}`,b0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
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
#endif`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,X0=`#define DISTANCE
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
}`,q0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Q0=`uniform vec3 diffuse;
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
}`,j0=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,ng=`#define MATCAP
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
}`,ig=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,lg=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,pg=`uniform vec3 color;
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
}`,mg=`uniform float rotation;
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
}`,gg=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Op,alphahash_pars_fragment:Bp,alphamap_fragment:zp,alphamap_pars_fragment:kp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Gp,aomap_pars_fragment:Wp,batching_pars_vertex:Xp,batching_vertex:qp,begin_vertex:Yp,beginnormal_vertex:Zp,bsdfs:Jp,iridescence_fragment:Kp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:tm,clipping_planes_vertex:em,color_fragment:nm,color_pars_fragment:im,color_pars_vertex:sm,color_vertex:rm,common:am,cube_uv_reflection_fragment:om,defaultnormal_vertex:lm,displacementmap_pars_vertex:cm,displacementmap_vertex:hm,emissivemap_fragment:um,emissivemap_pars_fragment:dm,colorspace_fragment:fm,colorspace_pars_fragment:pm,envmap_fragment:mm,envmap_common_pars_fragment:gm,envmap_pars_fragment:xm,envmap_pars_vertex:_m,envmap_physical_pars_fragment:Cm,envmap_vertex:ym,fog_vertex:vm,fog_pars_vertex:Mm,fog_fragment:Sm,fog_pars_fragment:bm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:Em,lights_lambert_fragment:Tm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Im,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Dm,lights_physical_fragment:Nm,lights_physical_pars_fragment:Um,lights_fragment_begin:Fm,lights_fragment_maps:Om,lights_fragment_end:Bm,lightprobes_pars_fragment:zm,logdepthbuf_fragment:km,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Gm,map_fragment:Wm,map_pars_fragment:Xm,map_particle_fragment:qm,map_particle_pars_fragment:Ym,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Km,morphcolor_vertex:$m,morphnormal_vertex:Qm,morphtarget_pars_vertex:jm,morphtarget_vertex:t0,normal_fragment_begin:e0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:s0,normal_vertex:r0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:c0,iridescence_pars_fragment:h0,opaque_fragment:u0,packing:d0,premultiplied_alpha_fragment:f0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:v0,shadowmap_vertex:M0,shadowmask_pars_fragment:S0,skinbase_vertex:b0,skinning_pars_vertex:w0,skinning_vertex:E0,skinnormal_vertex:T0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:I0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:N0,uv_vertex:U0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:z0,backgroundCube_frag:k0,cube_vert:H0,cube_frag:V0,depth_vert:G0,depth_frag:W0,distance_vert:X0,distance_frag:q0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:J0,linedashed_frag:K0,meshbasic_vert:$0,meshbasic_frag:Q0,meshlambert_vert:j0,meshlambert_frag:tg,meshmatcap_vert:eg,meshmatcap_frag:ng,meshnormal_vert:ig,meshnormal_frag:sg,meshphong_vert:rg,meshphong_frag:ag,meshphysical_vert:og,meshphysical_frag:lg,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:ug,points_frag:dg,shadow_vert:fg,shadow_frag:pg,sprite_vert:mg,sprite_frag:gg},gt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Dn={basic:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ge([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ge([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ge([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ge([gt.points,gt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ge([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ge([gt.common,gt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ge([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ge([gt.sprite,gt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Ge([gt.common,gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Ge([gt.lights,gt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Dn.physical={uniforms:Ge([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var el={r:0,b:0,g:0},xg=new ee,wd=new qt;wd.set(-1,0,0,0,1,0,0,0,1);function _g(i,t,e,n,s,r){let a=new Ot(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let y=M.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(M){let w=!1,y=f(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===Dr)?(c===void 0&&(c=new Vt(new Ye(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ui(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wd),c.material.toneMapped=ie.getTransfer(y.colorSpace)!==ue,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Vt(new Cn(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ui(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,w){M.getRGB(el,Oc(i)),e.buffers.color.setClear(el.r,el.g,el.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function yg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,U,z,P,O){let W=!1,V=d(D,P,z,U);r!==V&&(r=V,c(r.object)),W=f(D,P,z,O),W&&p(D,P,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(D,U,z,P),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,U,z,P){let O=P.wireframe===!0,W=n[U.id];W===void 0&&(W={},n[U.id]=W);let V=D.isInstancedMesh===!0?D.id:0,it=W[V];it===void 0&&(it={},W[V]=it);let q=it[z.id];q===void 0&&(q={},it[z.id]=q);let j=q[O];return j===void 0&&(j=u(l()),q[O]=j),j}function u(D){let U=[],z=[],P=[];for(let O=0;O<e;O++)U[O]=0,z[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,U,z,P){let O=r.attributes,W=U.attributes,V=0,it=z.getAttributes();for(let q in it)if(it[q].location>=0){let nt=O[q],Pt=W[q];if(Pt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),nt===void 0||nt.attribute!==Pt||Pt&&nt.data!==Pt.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function p(D,U,z,P){let O={},W=U.attributes,V=0,it=z.getAttributes();for(let q in it)if(it[q].location>=0){let nt=W[q];nt===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));let Pt={};Pt.attribute=nt,nt&&nt.data&&(Pt.data=nt.data),O[q]=Pt,V++}r.attributes=O,r.attributesNum=V,r.index=P}function x(){let D=r.newAttributes;for(let U=0,z=D.length;U<z;U++)D[U]=0}function g(D){m(D,0)}function m(D,U){let z=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;z[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),O[D]!==U&&(i.vertexAttribDivisor(D,U),O[D]=U)}function M(){let D=r.newAttributes,U=r.enabledAttributes;for(let z=0,P=U.length;z<P;z++)U[z]!==D[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function w(D,U,z,P,O,W,V){V===!0?i.vertexAttribIPointer(D,U,z,O,W):i.vertexAttribPointer(D,U,z,P,O,W)}function y(D,U,z,P){x();let O=P.attributes,W=z.getAttributes(),V=U.defaultAttributeValues;for(let it in W){let q=W[it];if(q.location>=0){let j=O[it];if(j===void 0&&(it==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),it==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){let nt=j.normalized,Pt=j.itemSize,Tt=t.get(j);if(Tt===void 0)continue;let oe=Tt.buffer,Qt=Tt.type,se=Tt.bytesPerElement,J=Qt===i.INT||Qt===i.UNSIGNED_INT||j.gpuType===mo;if(j.isInterleavedBufferAttribute){let tt=j.data,_t=tt.stride,Gt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let St=0;St<q.locationSize;St++)m(q.location+St,tt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let St=0;St<q.locationSize;St++)g(q.location+St);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let St=0;St<q.locationSize;St++)w(q.location+St,Pt/q.locationSize,Qt,nt,_t*se,(Gt+Pt/q.locationSize*St)*se,J)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt,j.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<q.locationSize;tt++)g(q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let tt=0;tt<q.locationSize;tt++)w(q.location+tt,Pt/q.locationSize,Qt,nt,Pt*se,Pt/q.locationSize*tt*se,J)}}else if(V!==void 0){let nt=V[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(q.location,nt);break;case 3:i.vertexAttrib3fv(q.location,nt);break;case 4:i.vertexAttrib4fv(q.location,nt);break;default:i.vertexAttrib1fv(q.location,nt)}}}}M()}function b(){T();for(let D in n){let U=n[D];for(let z in U){let P=U[z];for(let O in P){let W=P[O];for(let V in W)h(W[V].object),delete W[V];delete P[O]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;let U=n[D.id];for(let z in U){let P=U[z];for(let O in P){let W=P[O];for(let V in W)h(W[V].object),delete W[V];delete P[O]}}delete n[D.id]}function R(D){for(let U in n){let z=n[U];for(let P in z){let O=z[P];if(O[D.id]===void 0)continue;let W=O[D.id];for(let V in W)h(W[V].object),delete W[V];delete O[D.id]}}}function _(D){for(let U in n){let z=n[U],P=D.isInstancedMesh===!0?D.id:0,O=z[P];if(O!==void 0){for(let W in O){let V=O[W];for(let it in V)h(V[it].object),delete V[it];delete O[W]}delete z[P],Object.keys(z).length===0&&delete n[U]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function vg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Ke&&R!==on&&!_&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:E}}function Sg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,w=M*4,y=m.clippingState||null;l.value=y,y=h(p,u,w,f);for(let b=0;b!==w;++b)y[b]=e[b];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=f;w!==x;++w,y+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Rs=4,bg=6,wg=20,Eg=256,Vr=new Ss,nd=new Ot,qc=null,Yc=0,Zc=0,Jc=!1,Tg=new I,Fi=new I,Is=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Tg}=r;qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,Yc,Zc),this._renderer.xr.enabled=Jc,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ci||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:yn,format:ln,colorSpace:Qs,depthBuffer:!1},s=id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ag(r)),this._blurMaterial=Cg(r,t,e),this._ggxMaterial=Rg(r,t,e)}return s}_compileMaterial(t){let e=new Vt(new Se,t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s,r){let l=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nd),d.toneMapping=xn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Ye,new Ci({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(nd),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;As(s,y*b,w>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ci||t.mapping===Ni;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Vr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Rs?n-p+Rs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,As(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,As(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,Vr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Rs?s-this._lodMax+Rs:0),u=4*(this._cubeSize-h);As(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Vr)}};function Ag(i){let t=[],e=[],n=i,s=i-Rs+1+bg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,w=m>2?0:-1,y=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];p.set(y,f*u*m);for(let b=0;b<u;b++){let E=h[b*2]*2-1,R=h[b*2+1]*2-1;m===0?Fi.set(1,R,E):m===1?Fi.set(-E,1,-R):m===2?Fi.set(-E,R,1):m===3?Fi.set(-1,R,-E):m===4?Fi.set(-E,-1,R):Fi.set(E,R,-1),Fi.toArray(x,(m*u+b)*f)}}let g=new Se;g.setAttribute("position",new Ae(p,f)),g.setAttribute("outputDirection",new Ae(x,f)),e.push(new Vt(g,null)),n>Rs&&n--}return{lodMeshes:e,sizeLods:t}}function id(i,t,e){let n=new Je(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Rg(i,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Cg(i,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function sd(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function rd(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var il=class extends Je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ye(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Pn});r.uniforms.tEquirect.value=e;let a=new Vt(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=Be),new oo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Ig(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===uo||f===fo)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new il(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===uo||f===fo,x=f===ci||f===Ni;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Is(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Is(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===uo?u.mapping=ci:f===fo&&(u.mapping=Ni),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Pg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let w=0,y=M.length;w<y;w+=3){let b=M[w+0],E=M[w+1],R=M[w+2];u.push(b,E,E,R,R,b)}}else{let M=p.array;x=p.version;for(let w=0,y=M.length/3-1;w<y;w+=3){let b=w+0,E=w+1,R=w+2;u.push(b,E,E,R,R,b)}}let g=new(p.count>=65535?ar:rr)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Dg(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ng(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ug(i,t,e){let n=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*b*4*d),R=new nr(E,y,b,d);R.type=on,R.needsUpdate=!0;let _=w*4;for(let C=0;C<d;C++){let D=g[C],U=m[C],z=M[C],P=y*b*4*C;for(let O=0;O<D.count;O++){let W=O*_;f===!0&&(s.fromBufferAttribute(D,O),E[P+W+0]=s.x,E[P+W+1]=s.y,E[P+W+2]=s.z,E[P+W+3]=0),p===!0&&(s.fromBufferAttribute(U,O),E[P+W+4]=s.x,E[P+W+5]=s.y,E[P+W+6]=s.z,E[P+W+7]=0),x===!0&&(s.fromBufferAttribute(z,O),E[P+W+8]=s.x,E[P+W+9]=s.y,E[P+W+10]=s.z,E[P+W+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new rt(y,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fg(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Og={[_c]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[vc]:"CINEON_TONE_MAPPING",[Lr]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[bc]:"NEUTRAL_TONE_MAPPING",[Mc]:"CUSTOM_TONE_MAPPING"};function Bg(i,t,e,n,s,r){let a=new Je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Se;c.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ae([0,2,0,0,2,0],2));let h=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Vt(c,h),u=new Ss(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],w=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let E=0;E<M.length;E++){let R=M[E];R.setSize&&R.setSize(y,b)}},this.setEffects=function(y){M=y,w=M.length>0&&M[0].isRenderPass===!0;let b=a.width,E=a.height;M.length>0&&o===null&&(o=new Je(b,E,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new Je(b,E,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){let _=M[R];_.setSize&&_.setSize(b,E)}},this.begin=function(y,b){if(x||y.toneMapping===xn&&M.length===0)return!1;if(m=b,b!==null){let E=b.width,R=b.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=xn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=g,x=!0;let E=a,R=o;for(let _=0;_<M.length;_++){let T=M[_];T.enabled!==!1&&(T.render(y,R,E,b),T.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},ie.getTransfer(f)===ue&&(h.defines.SRGB_TRANSFER="");let _=Og[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ed=new qe,Qc=new si(1,1),Td=new nr,Ad=new za,Rd=new ur,ad=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function Ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function al(i,t){let e=od[t];e===void 0&&(e=new Int32Array(t),od[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Gg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;hd.set(n),i.uniformMatrix2fv(this.addr,!1,hd),Le(e,n)}}function Wg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Le(e,n)}}function Xg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),Le(e,n)}}function qg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function Kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function jg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?jo:Qo,r=Qc):r=Ed,e.setTexture2D(t||r,s)}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ad,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Rd,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Td,s)}function sx(i){switch(i){case 5126:return zg;case 35664:return kg;case 35665:return Hg;case 35666:return Vg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Kg;case 36294:return $g;case 36295:return Qg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return tx;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){let e=Ps(t,this.size,2);i.uniform2fv(this.addr,e)}function ox(i,t){let e=Ps(t,this.size,3);i.uniform3fv(this.addr,e)}function lx(i,t){let e=Ps(t,this.size,4);i.uniform4fv(this.addr,e)}function cx(i,t){let e=Ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hx(i,t){let e=Ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ux(i,t){let e=Ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function fx(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function xx(i,t){i.uniform2uiv(this.addr,t)}function _x(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function vx(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qc:a=Ed;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Mx(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ad,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Rd,r[a])}function bx(i,t,e){let n=this.cache,s=t.length,r=al(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Td,r[a])}function wx(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return xx;case 36295:return _x;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}var jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sx(e.type)}},th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wx(e.type)}},eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function ud(i,t){i.seq.push(t),i.map[t.id]=t}function Ex(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),a=Kc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ud(e,c===void 0?new jc(o,i,t):new th(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new eh(o),ud(e,d)),e=d}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ex(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function dd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tx=37297,Ax=0;function Rx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var fd=new qt;function Cx(i){ie._getMatrix(fd,ie.workingColorSpace,i);let t=`mat3( ${fd.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(t),o)}else return r}function Ix(i,t){let e=Cx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Px={[_c]:"Linear",[yc]:"Reinhard",[vc]:"Cineon",[Lr]:"ACESFilmic",[Sc]:"AgX",[bc]:"Neutral",[Mc]:"Custom"};function Lx(i,t){let e=Px[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var nl=new I;function Dx(){ie.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),t=nl.y.toFixed(4),e=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function md(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function nh(i){return i.replace(Ox,zx)}var Bx=new Map;function zx(i,t){let e=$t[t];if(e===void 0){let n=Bx.get(t);if(n!==void 0)e=$t[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return nh(e)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(kx,Hx)}function Hx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _d(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Vx={[Li]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function Gx(i){return Vx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[ci]:"ENVMAP_TYPE_CUBE",[Ni]:"ENVMAP_TYPE_CUBE",[Dr]:"ENVMAP_TYPE_CUBE_UV"};function Xx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var qx={[Ni]:"ENVMAP_MODE_REFRACTION"};function Yx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Zx={[ho]:"ENVMAP_BLENDING_MULTIPLY",[Lu]:"ENVMAP_BLENDING_MIX",[Du]:"ENVMAP_BLENDING_ADD"};function Jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zx[i.combine]||"ENVMAP_BLENDING_NONE"}function Kx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gx(e),c=Xx(e),h=Yx(e),d=Jx(e),u=Kx(e),f=Nx(e),p=Ux(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Wr).join(`
`),m.length>0&&(m+=`
`)):(g=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),m=[_d(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?$t.tonemapping_pars_fragment:"",e.toneMapping!==xn?Lx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Ix("linearToOutputTexel",e.outputColorSpace),Dx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=nh(a),a=md(a,e),a=gd(a,e),o=nh(o),o=md(o,e),o=gd(o,e),a=xd(a),o=xd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=M+g+a,y=M+m+o,b=dd(s,s.VERTEX_SHADER,w),E=dd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",P=s.getShaderInfoLog(E)||"",O=U.trim(),W=z.trim(),V=P.trim(),it=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,E);else{let j=pd(s,b,"vertex"),nt=pd(s,E,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+j+`
`+nt)}else O!==""?kt("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(q=!1);q&&(D.diagnostics={runnable:it,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(b),s.deleteShader(E),_=new Cs(s,x),T=Fx(s,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Tx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ax++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=E,this}var Qx=0,ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sh(t),e.set(t,n)),n}},sh=class{constructor(t){this.id=Qx++,this.code=t,this.usedTimes=0}};function jx(i){return i===di||i===zr||i===kr}function t_(i,t,e,n,s,r){let a=new ir,o=new ih,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,C,D,U,z){let P=D.fog,O=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,it=t.get(_.envMap||W,V),q=it&&it.mapping===Dr?it.image.height:null,j=f[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Pt=nt!==void 0?nt.length:0,Tt=0;O.morphAttributes.position!==void 0&&(Tt=1),O.morphAttributes.normal!==void 0&&(Tt=2),O.morphAttributes.color!==void 0&&(Tt=3);let oe,Qt,se,J;if(j){let xe=Dn[j];oe=xe.vertexShader,Qt=xe.fragmentShader}else{oe=_.vertexShader,Qt=_.fragmentShader;let xe=o.getVertexShaderStage(_),ce=o.getFragmentShaderStage(_);o.update(_,xe,ce),se=xe.id,J=ce.id}let tt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,Wt=!!_.map,de=!!_.matcap,et=!!it,at=!!_.aoMap,ot=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,Bt=!!_.displacementMap,Ut=!!_.emissiveMap,Xt=!!_.metalnessMap,Yt=!!_.roughnessMap,L=_.anisotropy>0,le=_.clearcoat>0,jt=_.dispersion>0,A=_.retroreflectivity>0,v=_.iridescence>0,B=_.sheen>0,G=_.transmission>0,Y=L&&!!_.anisotropyMap,ct=le&&!!_.clearcoatMap,ht=le&&!!_.clearcoatNormalMap,Z=le&&!!_.clearcoatRoughnessMap,$=v&&!!_.iridescenceMap,dt=v&&!!_.iridescenceThicknessMap,Lt=B&&!!_.sheenColorMap,xt=B&&!!_.sheenRoughnessMap,ft=!!_.specularMap,Dt=!!_.specularColorMap,zt=!!_.specularIntensityMap,Zt=G&&!!_.transmissionMap,F=G&&!!_.thicknessMap,pt=!!_.gradientMap,K=!!_.alphaMap,mt=_.alphaTest>0,Mt=!!_.alphaHash,st=!!_.extensions,Nt=xn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Ct={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:oe,fragmentShader:Qt,defines:_.defines,customVertexShaderID:se,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Wt,matcap:de,envMap:et,envMapMode:et&&it.mapping,envMapCubeUVHeight:q,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:ut,displacementMap:Bt,emissiveMap:Ut,normalMapObjectSpace:ut&&_.normalMapType===Fu,normalMapTangentSpace:ut&&_.normalMapType===Hr,packedNormalMap:ut&&_.normalMapType===Hr&&jx(_.normalMap.format),metalnessMap:Xt,roughnessMap:Yt,anisotropy:L,anisotropyMap:Y,clearcoat:le,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:Z,dispersion:jt,retroreflection:A,iridescence:v,iridescenceMap:$,iridescenceThicknessMap:dt,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:xt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:zt,transmission:G,transmissionMap:Zt,thicknessMap:F,gradientMap:pt,opaque:_.transparent===!1&&_.blending===ws&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:mt,alphaHash:Mt,combine:_.combine,mapUv:Wt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:ot&&p(_.lightMap.channel),bumpMapUv:lt&&p(_.bumpMap.channel),normalMapUv:ut&&p(_.normalMap.channel),displacementMapUv:Bt&&p(_.displacementMap.channel),emissiveMapUv:Ut&&p(_.emissiveMap.channel),metalnessMapUv:Xt&&p(_.metalnessMap.channel),roughnessMapUv:Yt&&p(_.roughnessMap.channel),anisotropyMapUv:Y&&p(_.anisotropyMap.channel),clearcoatMapUv:ct&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:xt&&p(_.sheenRoughnessMap.channel),specularMapUv:ft&&p(_.specularMap.channel),specularColorMapUv:Dt&&p(_.specularColorMap.channel),specularIntensityMapUv:zt&&p(_.specularIntensityMap.channel),transmissionMapUv:Zt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:K&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||L),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Wt||K),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Tt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Wt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===ue,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Ie,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:st&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&_.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(T,_),M(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function M(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=f[_.type],C;if(T){let D=Dn[T];C=tl.clone(D.uniforms)}else C=_.uniforms;return C}function y(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new $x(i,T,_,s),c.push(C),h.set(T,C)),C}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function e_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function n_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let w=o(u,f,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(u,f,p,x,g,m){let M=o(u,f,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||n_),n.length>1&&n.sort(f||yd),s.length>1&&s.sort(f||yd)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function i_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new vd,i.set(n,[a])):s>=r.length?(a=new vd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function s_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Ot};break;case"SpotLight":e={position:new I,direction:new I,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function r_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var a_=0;function o_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function l_(i){let t=new s_,e=r_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ee,a=new ee;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,w=0,y=0,b=0,E=0,R=0,_=0,T=0,C=0;c.sort(o_);for(let U=0,z=c.length;U<z;U++){let P=c[U],O=P.color,W=P.intensity,V=P.distance,it=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===di?it=P.shadow.map.texture:it=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],W);C++}else if(P.isSunLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,nt=e.get(P);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=it;let Pt=j.getViewportCount();for(let Tt=0;Tt<Pt;Tt++)n.sunShadowMatrix[x+Tt]=j.getMatrix(Tt),n.sunShadowCascade[x+Tt]=j._cascadeData[Tt];x+=Pt,p++}n.sun[f]=q,f++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,nt=e.get(P);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=P.shadow.matrix,b++}n.directional[g]=q,g++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(O).multiplyScalar(W),q.distance=V,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[M]=q;let j=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[M]=j.matrix,P.castShadow){let nt=e.get(P);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=it,R++}M++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(O).multiplyScalar(W),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=q,w++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let j=P.shadow,nt=e.get(P);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(W),q.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[y]=q,y++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==w||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=g,D.pointLength=m,D.spotLength=M,D.rectAreaLength=w,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=C,n.version=a_++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){let y=c[M];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Md(i){let t=new l_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function c_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Md(i),t.set(s,[o])):r>=a.length?(o=new Md(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`,d_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],f_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Sd=new ee,Gr=new I,$c=new I;function p_(i,t,e){let n=new ms,s=new rt,r=new rt,a=new Me,o=new Ja,l=new Ka,c={},h=e.maxTextureSize,d={[li]:Ie,[Ie]:li,[nn]:nn},u=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Se;p.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Li;let m=this.type;this.render=function(E,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===fu&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Li);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Pn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let z=m!==this.type;z&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(O=>O.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,O=E.length;P<O;P++){let W=E[P],V=W.shadow;if(V===void 0){kt("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===bs){if(W.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Je(s.x,s.y,{format:di,type:yn,minFilter:Be,magFilter:Be,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new si(s.x,s.y,on),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=En,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue}else W.isPointLight?(V.map=new il(s.x),V.map.depthTexture=new ka(s.x,_n)):(V.map=new Je(s.x,s.y),V.map.depthTexture=new si(s.x,s.y,_n)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=En,this.type===Li?(V.map.depthTexture.compareFunction=q?jo:Qo,V.map.depthTexture.minFilter=Be,V.map.depthTexture.magFilter=Be):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ue,V.map.depthTexture.magFilter=Ue);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,_);for(let nt=0;nt<j;nt++){let Pt=V.getCamera(nt);if(W.isPointLight){let Tt=V.camera,oe=V.matrix,Qt=W.distance||Tt.far;Qt!==Tt.far&&(Tt.far=Qt,Tt.updateProjectionMatrix()),Gr.setFromMatrixPosition(W.matrixWorld),Tt.position.copy(Gr),$c.copy(Tt.position),$c.add(d_[nt]),Tt.up.copy(f_[nt]),Tt.lookAt($c),Tt.updateMatrixWorld(),oe.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Sd.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Sd,Tt.coordinateSystem,Tt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(V.map),i.clear());let Tt=V.getViewport(nt);a.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),U.viewport(a)}n=V.getFrustum(nt),y(R,_,Pt,W,this.type)}V.isPointLightShadow!==!0&&this.type===bs&&M(V,_),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,D)};function M(E,R){let _=t.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Je(s.x,s.y,{format:di,type:yn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,f,x,null)}function w(E,R,_,T){let C=null,D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=C.uuid,z=R.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let O=P[z];O===void 0&&(O=C.clone(),P[z]=O,R.addEventListener("dispose",b)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,T===bs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=_}return C}function y(E,R,_,T,C){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===bs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let z=t.update(E),P=E.material;if(Array.isArray(P)){let O=z.groups;for(let W=0,V=O.length;W<V;W++){let it=O[W],q=P[it.materialIndex];if(q&&q.visible){let j=w(E,q,T,C);E.onBeforeShadow(i,E,R,_,z,j,it),i.renderBufferDirect(_,null,z,j,E,it),E.onAfterShadow(i,E,R,_,z,j,it)}}}else if(P.visible){let O=w(E,P,T,C);E.onBeforeShadow(i,E,R,_,z,O,null),i.renderBufferDirect(_,null,z,O,E,null),E.onAfterShadow(i,E,R,_,z,O,null)}}let U=E.children;for(let z=0,P=U.length;z<P;z++)y(U[z],R,_,T,C)}function b(E){E.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function m_(i,t){function e(){let F=!1,pt=new Me,K=null,mt=new Me(0,0,0,0);return{setMask:function(Mt){K!==Mt&&!F&&(i.colorMask(Mt,Mt,Mt,Mt),K=Mt)},setLocked:function(Mt){F=Mt},setClear:function(Mt,st,Nt,Ct,xe){xe===!0&&(Mt*=Ct,st*=Ct,Nt*=Ct),pt.set(Mt,st,Nt,Ct),mt.equals(pt)===!1&&(i.clearColor(Mt,st,Nt,Ct),mt.copy(pt))},reset:function(){F=!1,K=null,mt.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,K=null,mt=null,Mt=null;return{setReversed:function(st){if(pt!==st){let Nt=t.get("EXT_clip_control");st?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let Ct=Mt;Mt=null,this.setClear(Ct)}},getReversed:function(){return pt},setTest:function(st){st?tt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(st){K!==st&&!F&&(i.depthMask(st),K=st)},setFunc:function(st){if(pt&&(st=Yu[st]),mt!==st){switch(st){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case Pa:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=st}},setLocked:function(st){F=st},setClear:function(st){Mt!==st&&(Mt=st,pt&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,K=null,mt=null,Mt=null,pt=!1}}}function s(){let F=!1,pt=null,K=null,mt=null,Mt=null,st=null,Nt=null,Ct=null,xe=null;return{setTest:function(ce){F||(ce?tt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!F&&(i.stencilMask(ce),pt=ce)},setFunc:function(ce,cn,vn){(K!==ce||mt!==cn||Mt!==vn)&&(i.stencilFunc(ce,cn,vn),K=ce,mt=cn,Mt=vn)},setOp:function(ce,cn,vn){(st!==ce||Nt!==cn||Ct!==vn)&&(i.stencilOp(ce,cn,vn),st=ce,Nt=cn,Ct=vn)},setLocked:function(ce){F=ce},setClear:function(ce){xe!==ce&&(i.clearStencil(ce),xe=ce)},reset:function(){F=!1,pt=null,K=null,mt=null,Mt=null,st=null,Nt=null,Ct=null,xe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,w=null,y=null,b=null,E=null,R=null,_=new Ot(0,0,0),T=0,C=!1,D=null,U=null,z=null,P=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=it>=2);let j=null,nt={},Pt=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),oe=new Me().fromArray(Pt),Qt=new Me().fromArray(Tt);function se(F,pt,K,mt){let Mt=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<K;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(pt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return st}let J={};J[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(as),lt(!1),ut(dc),tt(i.CULL_FACE),at(Pn);function tt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function _t(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Gt(F,pt){return u[F]!==pt?(i.bindFramebuffer(F,pt),u[F]=pt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function St(F,pt){let K=p,mt=!1;if(F){K=f.get(pt),K===void 0&&(K=[],f.set(pt,K));let Mt=F.textures;if(K.length!==Mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Nt=Mt.length;st<Nt;st++)K[st]=i.COLOR_ATTACHMENT0+st;K.length=Mt.length,mt=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,mt=!0);mt&&i.drawBuffers(K)}function Wt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let de={[Di]:i.FUNC_ADD,[mu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};de[xu]=i.MIN,de[_u]=i.MAX;let et={[yu]:i.ZERO,[vu]:i.ONE,[Mu]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Au]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[wu]:i.ONE_MINUS_DST_ALPHA,[Ru]:i.CONSTANT_COLOR,[Cu]:i.ONE_MINUS_CONSTANT_COLOR,[Iu]:i.CONSTANT_ALPHA,[Pu]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,pt,K,mt,Mt,st,Nt,Ct,xe,ce){if(F===Pn){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),F!==pu){if(F!==m||ce!==C){if((M!==Di||b!==Di)&&(i.blendEquation(i.FUNC_ADD),M=Di,b=Di),ce)switch(F){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",F);break}else switch(F){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mc:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",F);break}w=null,y=null,E=null,R=null,_.set(0,0,0),T=0,m=F,C=ce}return}Mt=Mt||pt,st=st||K,Nt=Nt||mt,(pt!==M||Mt!==b)&&(i.blendEquationSeparate(de[pt],de[Mt]),M=pt,b=Mt),(K!==w||mt!==y||st!==E||Nt!==R)&&(i.blendFuncSeparate(et[K],et[mt],et[st],et[Nt]),w=K,y=mt,E=st,R=Nt),(Ct.equals(_)===!1||xe!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,xe),_.copy(Ct),T=xe),m=F,C=!1}function ot(F,pt){F.side===nn?_t(i.CULL_FACE):tt(i.CULL_FACE);let K=F.side===Ie;pt&&(K=!K),lt(K),F.blending===ws&&F.transparent===!1?at(Pn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let mt=F.stencilWrite;o.setTest(mt),mt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function ut(F){F!==uu?(tt(i.CULL_FACE),F!==U&&(F===dc?i.cullFace(i.BACK):F===du?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),U=F}function Bt(F){F!==z&&(V&&i.lineWidth(F),z=F)}function Ut(F,pt,K){F?(tt(i.POLYGON_OFFSET_FILL),(P!==pt||O!==K)&&(P=pt,O=K,a.getReversed()&&(pt=-pt),i.polygonOffset(pt,K))):_t(i.POLYGON_OFFSET_FILL)}function Xt(F){F?tt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function Yt(F){F===void 0&&(F=i.TEXTURE0+W-1),j!==F&&(i.activeTexture(F),j=F)}function L(F,pt,K){K===void 0&&(j===null?K=i.TEXTURE0+W-1:K=j);let mt=nt[K];mt===void 0&&(mt={type:void 0,texture:void 0},nt[K]=mt),(mt.type!==F||mt.texture!==pt)&&(j!==K&&(i.activeTexture(K),j=K),i.bindTexture(F,pt||J[F]),mt.type=F,mt.texture=pt)}function le(){let F=nt[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function ht(){try{i.texStorage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function $(){try{i.texImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function dt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Lt(F,pt){d[F]!==pt&&(i.pixelStorei(F,pt),d[F]=pt)}function xt(F){oe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),oe.copy(F))}function ft(F){Qt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Qt.copy(F))}function Dt(F,pt){let K=c.get(pt);K===void 0&&(K=new WeakMap,c.set(pt,K));let mt=K.get(F);mt===void 0&&(mt=i.getUniformBlockIndex(pt,F.name),K.set(F,mt))}function zt(F,pt){let mt=c.get(pt).get(F);l.get(pt)!==mt&&(i.uniformBlockBinding(pt,mt,F.__bindingPointIndex),l.set(pt,mt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,nt={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,w=null,y=null,b=null,E=null,R=null,_=new Ot(0,0,0),T=0,C=!1,D=null,U=null,z=null,P=null,O=null,oe.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Gt,drawBuffers:St,useProgram:Wt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:ut,setLineWidth:Bt,setPolygonOffset:Ut,setScissorTest:Xt,activeTexture:Yt,bindTexture:L,unbindTexture:le,compressedTexImage2D:jt,compressedTexImage3D:A,texImage2D:Z,texImage3D:$,pixelStorei:Lt,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:zt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:xt,viewport:ft,reset:Zt}}function g_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,v){return p?new OffscreenCanvas(A,v):tr("canvas")}function g(A,v,B){let G=1,Y=jt(A);if((Y.width>B||Y.height>B)&&(G=B/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let ct=Math.floor(G*Y.width),ht=Math.floor(G*Y.height);u===void 0&&(u=x(ct,ht));let Z=v?x(ct,ht):u;return Z.width=ct,Z.height=ht,Z.getContext("2d").drawImage(A,0,0,ct,ht),kt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ct+"x"+ht+")."),Z}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function m(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,B,G,Y,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ht;G&&(ht=t.get("EXT_texture_norm16"),ht||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&ht&&(Z=ht.R16_EXT),B===i.SHORT&&ht&&(Z=ht.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&ht&&(Z=ht.RG16_EXT),B===i.SHORT&&ht&&(Z=ht.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ht&&(Z=ht.RGB16_EXT),B===i.SHORT&&ht&&(Z=ht.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let $=ct?js:ie.getTransfer(Y);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=$===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ht&&(Z=ht.RGBA16_EXT),B===i.SHORT&&ht&&(Z=ht.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(A,v){let B;return A?v===null||v===_n||v===Ts?B=i.DEPTH24_STENCIL8:v===on?B=i.DEPTH32F_STENCIL8:v===Es&&(B=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_n||v===Ts?B=i.DEPTH_COMPONENT24:v===on?B=i.DEPTH_COMPONENT32F:v===Es&&(B=i.DEPTH_COMPONENT16),B}function E(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==Be?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function R(A){let v=A.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function _(A){let v=A.target;v.removeEventListener("dispose",_),D(v)}function T(A){let v=n.get(A);if(v.__webglInit===void 0)return;let B=A.source,G=f.get(B);if(G){let Y=G[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(A),Object.keys(G).length===0&&f.delete(B)}n.remove(A)}function C(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let B=A.source,G=f.get(B);delete G[v.__cacheKey],a.memory.textures--}function D(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Y=0;Y<v.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=A.textures;for(let G=0,Y=B.length;G<Y;G++){let ct=n.get(B[G]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(A)}let U=0;function z(){U=0}function P(){return U}function O(A){U=A}function W(){let A=U;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function V(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function it(A,v){let B=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let G=A.image;if(G===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(B,A,v);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function q(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,v);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function j(A,v){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){_t(B,A,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function nt(A,v){let B=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){Gt(B,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Pt={[Ti]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},Tt={[Ue]:i.NEAREST,[Nu]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[Be]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},oe={[Bu]:i.NEVER,[Gu]:i.ALWAYS,[zu]:i.LESS,[Qo]:i.LEQUAL,[ku]:i.EQUAL,[jo]:i.GEQUAL,[Hu]:i.GREATER,[Vu]:i.NOTEQUAL};function Qt(A,v){if(v.type===on&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Be||v.magFilter===po||v.magFilter===Nr||v.magFilter===hi||v.minFilter===Be||v.minFilter===po||v.minFilter===Nr||v.minFilter===hi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Pt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Pt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Pt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Tt[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Nr&&v.minFilter!==hi||v.type===on&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(A,v){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",R));let G=v.source,Y=f.get(G);Y===void 0&&(Y={},f.set(G,Y));let ct=V(v);if(ct!==A.__cacheKey){Y[ct]===void 0&&(Y[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Y[ct].usedTimes++;let ht=Y[A.__cacheKey];ht!==void 0&&(Y[A.__cacheKey].usedTimes--,ht.usedTimes===0&&C(v)),A.__cacheKey=ct,A.__webglTexture=Y[ct].texture}return B}function J(A,v,B){return Math.floor(Math.floor(A/B)/v)}function tt(A,v,B,G){let ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,G,v.data);else{ct.sort((Lt,xt)=>Lt.start-xt.start);let ht=0;for(let Lt=1;Lt<ct.length;Lt++){let xt=ct[ht],ft=ct[Lt],Dt=xt.start+xt.count,zt=J(ft.start,v.width,4),Zt=J(xt.start,v.width,4);ft.start<=Dt+1&&zt===Zt&&J(ft.start+ft.count-1,v.width,4)===zt?xt.count=Math.max(xt.count,ft.start+ft.count-xt.start):(++ht,ct[ht]=ft)}ct.length=ht+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Lt=0,xt=ct.length;Lt<xt;Lt++){let ft=ct[Lt],Dt=Math.floor(ft.start/4),zt=Math.ceil(ft.count/4),Zt=Dt%v.width,F=Math.floor(Dt/v.width),pt=zt,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Zt,F,pt,K,B,G,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function _t(A,v,B){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let Y=se(A,v),ct=v.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+B);let ht=n.get(ct);if(ct.version!==ht.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let K=ie.getPrimaries(ie.workingColorSpace),mt=v.colorSpace===Yn?null:ie.getPrimaries(v.colorSpace),Mt=v.colorSpace===Yn||K===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let $=g(v.image,!1,s.maxTextureSize);$=le(v,$);let dt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),xt=y(v.internalFormat,dt,Lt,v.normalized,v.colorSpace,v.isVideoTexture);Qt(G,v);let ft,Dt=v.mipmaps,zt=v.isVideoTexture!==!0,Zt=ht.__version===void 0||Y===!0,F=ct.dataReady,pt=E(v,$);if(v.isDepthTexture)xt=b(v.format===ui,v.type),Zt&&(zt?e.texStorage2D(i.TEXTURE_2D,1,xt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,xt,$.width,$.height,0,dt,Lt,null));else if(v.isDataTexture)if(Dt.length>0){zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,Dt[0].width,Dt[0].height);for(let K=0,mt=Dt.length;K<mt;K++)ft=Dt[K],zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Lt,ft.data):e.texImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,dt,Lt,ft.data);v.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,$.width,$.height),F&&tt(v,$,dt,Lt)):e.texImage2D(i.TEXTURE_2D,0,xt,$.width,$.height,0,dt,Lt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,Dt[0].width,Dt[0].height,$.depth);for(let K=0,mt=Dt.length;K<mt;K++)if(ft=Dt[K],v.format!==ln)if(dt!==null)if(zt){if(F)if(v.layerUpdates.size>0){let Mt=kc(ft.width,ft.height,v.format,v.type);for(let st of v.layerUpdates){let Nt=ft.data.subarray(st*Mt/ft.data.BYTES_PER_ELEMENT,(st+1)*Mt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,st,ft.width,ft.height,1,dt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,$.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,xt,ft.width,ft.height,$.depth,0,ft.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ft.width,ft.height,$.depth,dt,Lt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,xt,ft.width,ft.height,$.depth,0,dt,Lt,ft.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(i.TEXTURE_2D,pt,xt,Dt[0].width,Dt[0].height);for(let K=0,mt=Dt.length;K<mt;K++)ft=Dt[K],v.format!==ln?dt!==null?zt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,ft.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ft.width,ft.height,dt,Lt,ft.data):e.texImage2D(i.TEXTURE_2D,K,xt,ft.width,ft.height,0,dt,Lt,ft.data)}else if(v.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,xt,$.width,$.height,$.depth),F)if(v.layerUpdates.size>0){let K=kc($.width,$.height,v.format,v.type);for(let mt of v.layerUpdates){let Mt=$.data.subarray(mt*K/$.data.BYTES_PER_ELEMENT,(mt+1)*K/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,mt,$.width,$.height,1,dt,Lt,Mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,Lt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,$.width,$.height,$.depth,0,dt,Lt,$.data);else if(v.isData3DTexture)zt?(Zt&&e.texStorage3D(i.TEXTURE_3D,pt,xt,$.width,$.height,$.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,Lt,$.data)):e.texImage3D(i.TEXTURE_3D,0,xt,$.width,$.height,$.depth,0,dt,Lt,$.data);else if(v.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(i.TEXTURE_2D,pt,xt,$.width,$.height);else{let K=$.width,mt=$.height;for(let Mt=0;Mt<pt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,xt,K,mt,0,dt,Lt,null),K>>=1,mt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),$.parentNode!==K){K.appendChild($),d.add(v),K.onpaint=mt=>{let Mt=mt.changedElements;for(let st of d)Mt.includes(st.image)&&(st.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Mt=i.RGBA,st=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Mt,st,Nt,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(zt&&Zt){let K=jt(Dt[0]);e.texStorage2D(i.TEXTURE_2D,pt,xt,K.width,K.height)}for(let K=0,mt=Dt.length;K<mt;K++)ft=Dt[K],zt?F&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,dt,Lt,ft):e.texImage2D(i.TEXTURE_2D,K,xt,dt,Lt,ft);v.generateMipmaps=!1}else if(zt){if(Zt){let K=jt($);e.texStorage2D(i.TEXTURE_2D,pt,xt,K.width,K.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Lt,$)}else e.texImage2D(i.TEXTURE_2D,0,xt,dt,Lt,$);m(v)&&M(G),ht.__version=ct.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Gt(A,v,B){if(v.image.length!==6)return;let G=se(A,v),Y=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let ct=n.get(Y);if(Y.version!==ct.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let ht=ie.getPrimaries(ie.workingColorSpace),Z=v.colorSpace===Yn?null:ie.getPrimaries(v.colorSpace),$=v.colorSpace===Yn||ht===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let st=0;st<6;st++)!dt&&!Lt?xt[st]=g(v.image[st],!0,s.maxCubemapSize):xt[st]=Lt?v.image[st].image:v.image[st],xt[st]=le(v,xt[st]);let ft=xt[0],Dt=r.convert(v.format,v.colorSpace),zt=r.convert(v.type),Zt=y(v.internalFormat,Dt,zt,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,pt=ct.__version===void 0||G===!0,K=Y.dataReady,mt=E(v,ft);Qt(i.TEXTURE_CUBE_MAP,v);let Mt;if(dt){F&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Zt,ft.width,ft.height);for(let st=0;st<6;st++){Mt=xt[st].mipmaps;for(let Nt=0;Nt<Mt.length;Nt++){let Ct=Mt[Nt];v.format!==ln?Dt!==null?F?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Ct.width,Ct.height,Dt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Zt,Ct.width,Ct.height,0,Ct.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,0,0,Ct.width,Ct.height,Dt,zt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt,Zt,Ct.width,Ct.height,0,Dt,zt,Ct.data)}}}else{if(Mt=v.mipmaps,F&&pt){Mt.length>0&&mt++;let st=jt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(Lt){F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt[st].width,xt[st].height,Dt,zt,xt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,xt[st].width,xt[st].height,0,Dt,zt,xt[st].data);for(let Nt=0;Nt<Mt.length;Nt++){let xe=Mt[Nt].image[st].image;F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,xe.width,xe.height,Dt,zt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Zt,xe.width,xe.height,0,Dt,zt,xe.data)}}else{F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Dt,zt,xt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Dt,zt,xt[st]);for(let Nt=0;Nt<Mt.length;Nt++){let Ct=Mt[Nt];F?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,0,0,Dt,zt,Ct.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Nt+1,Zt,Dt,zt,Ct.image[st])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),ct.__version=Y.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function St(A,v,B,G,Y,ct){let ht=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),$=y(B.internalFormat,ht,Z,B.normalized,B.colorSpace),dt=n.get(v),Lt=n.get(B);if(Lt.__renderTarget=v,!dt.__hasExternalTextures){let xt=Math.max(1,v.width>>ct),ft=Math.max(1,v.height>>ct);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,ct,$,xt,ft,v.depth,0,ht,Z,null):e.texImage2D(Y,ct,$,xt,ft,0,ht,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Yt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,Lt.__webglTexture,0,Xt(v)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,Lt.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let G=v.depthTexture,Y=G&&G.isDepthTexture?G.type:null,ct=b(v.stencilBuffer,Y),ht=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(v),ct,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(v),ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,A)}else{let G=v.textures;for(let Y=0;Y<G.length;Y++){let ct=G[Y],ht=r.convert(ct.format,ct.colorSpace),Z=r.convert(ct.type),$=y(ct.internalFormat,ht,Z,ct.normalized,ct.colorSpace);Yt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(v),$,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(v),$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,v,B){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(v.depthTexture);if(Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,v.depthTexture);let dt=r.convert(v.depthTexture.format),Lt=r.convert(v.depthTexture.type),xt;v.depthTexture.format===En?xt=i.DEPTH_COMPONENT24:v.depthTexture.format===ui&&(xt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,xt,v.width,v.height,0,dt,Lt,null)}}else it(v.depthTexture,0);let ct=Y.__webglTexture,ht=Xt(v),Z=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,$=v.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===En)Yt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,ct,0);else if(v.depthTexture.format===ui)Yt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,ct,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let v=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=G}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)de(v.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?de(v.__webglFramebuffer[0],A,0):de(v.__webglFramebuffer,A,0)}else if(B){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),Wt(v.__webglDepthbuffer[G],A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Wt(v.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(A,v,B){let G=n.get(A);v!==void 0&&St(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&et(A)}function ot(A){let v=A.texture,B=n.get(A),G=n.get(v);A.addEventListener("dispose",_);let Y=A.textures,ct=A.isWebGLCubeRenderTarget===!0,ht=Y.length>1;if(ht||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),ct){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let $=0;$<v.mipmaps.length;$++)B.__webglFramebuffer[Z][$]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ht)for(let Z=0,$=Y.length;Z<$;Z++){let dt=n.get(Y[Z]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Yt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let $=Y[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let dt=r.convert($.format,$.colorSpace),Lt=r.convert($.type),xt=y($.internalFormat,dt,Lt,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),ft=Xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,xt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)St(B.__webglFramebuffer[Z][$],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,$);else St(B.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Z=0,$=Y.length;Z<$;Z++){let dt=Y[Z],Lt=n.get(dt),xt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,Lt.__webglTexture),Qt(xt,dt),St(B.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+Z,xt,0),m(dt)&&M(xt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),Qt(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)St(B.__webglFramebuffer[$],A,v,i.COLOR_ATTACHMENT0,Z,$);else St(B.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,Z,0);m(v)&&M(Z),e.unbindTexture()}A.depthBuffer&&et(A)}function lt(A){let v=A.textures;for(let B=0,G=v.length;B<G;B++){let Y=v[B];if(m(Y)){let ct=w(A),ht=n.get(Y).__webglTexture;e.bindTexture(ct,ht),M(ct),e.unbindTexture()}}}let ut=[],Bt=[];function Ut(A){if(A.samples>0){if(Yt(A)===!1){let v=A.textures,B=A.width,G=A.height,Y=i.COLOR_BUFFER_BIT,ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(A),Z=v.length>1;if(Z)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let $=A.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Lt=n.get(v[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,Y,i.NEAREST),l===!0&&(ut.length=0,Bt.length=0,ut.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ut.push(ct),Bt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Lt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xt(A){return Math.min(s.maxSamples,A.samples)}function Yt(A){let v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function L(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function le(A,v){let B=A.colorSpace,G=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Qs&&B!==Yn&&(ie.getTransfer(B)===ue?(G!==ln||Y!==Ke)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),v}function jt(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function x_(i,t){function e(n,s=Yn){let r,a=ie.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ac)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===Tc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===mo)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Cc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===ln)return i.RGBA;if(n===En)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===_o)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===di)return i.RG;if(n===vo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===Ur||n===Fr||n===Or||n===Br)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ur)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ur)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===bo||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Ro||n===Co||n===Io||n===zr||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===To||n===Ao)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Co)return r.COMPRESSED_R11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===Ko||n===kr||n===$o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var __=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:__,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ah=class extends Tn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new rh,m={},M=e.getContextAttributes(),w=null,y=null,b=[],E=[],R=new rt,_=null,T=null,C=new Oe;C.viewport=new Me;let D=new Oe;D.viewport=new Me;let U=[C,D],z=new lo,P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=b[J];return tt===void 0&&(tt=new us,b[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=b[J];return tt===void 0&&(tt=new us,b[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=b[J];return tt===void 0&&(tt=new us,b[J]=tt),tt.getHandSpace()};function W(J){let tt=E.indexOf(J.inputSource);if(tt===-1)return;let _t=b[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",it);for(let J=0;J<b.length;J++){let tt=E[J];tt!==null&&(E[J]=null,b[J].disconnect(tt))}P=null,O=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,y=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Gt=null,St=null;M.depth&&(St=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=M.stencil?ui:En,Gt=M.stencil?Ts:_n);let Wt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Wt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Je(u.textureWidth,u.textureHeight,{format:ln,type:Ke,depthTexture:new si(u.textureWidth,u.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Je(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],Gt=E.indexOf(_t);Gt>=0&&(E[Gt]=null,b[Gt].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],Gt=E.indexOf(_t);if(Gt===-1){for(let Wt=0;Wt<b.length;Wt++)if(Wt>=E.length){E.push(_t),Gt=Wt;break}else if(E[Wt]===null){E[Wt]=_t,Gt=Wt;break}if(Gt===-1)break}let St=b[Gt];St&&St.connect(_t)}}let q=new I,j=new I;function nt(J,tt,_t){q.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Gt=q.distanceTo(j),St=tt.projectionMatrix.elements,Wt=_t.projectionMatrix.elements,de=St[14]/(St[10]-1),et=St[14]/(St[10]+1),at=(St[9]+1)/St[5],ot=(St[9]-1)/St[5],lt=(St[8]-1)/St[0],ut=(Wt[8]+1)/Wt[0],Bt=de*lt,Ut=de*ut,Xt=Gt/(-lt+ut),Yt=Xt*-lt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Yt),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),St[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let L=de+Xt,le=et+Xt,jt=Bt-Yt,A=Ut+(Gt-Yt),v=at*et/le*L,B=ot*et/le*L;J.projectionMatrix.makePerspective(jt,A,v,B,L,le),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Pt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,_t=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),z.near=D.near=C.near=tt,z.far=D.far=C.far=_t,(P!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,O=z.far),z.layers.mask=J.layers.mask|6,C.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let Gt=J.parent,St=z.cameras;Pt(z,Gt);for(let Wt=0;Wt<St.length;Wt++)Pt(St[Wt],Gt);St.length===2?nt(z,C,D):z.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Tt(J,z,Gt)};function Tt(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=cs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let oe=null;function Qt(J,tt){if(h=tt.getViewerPose(c||a),p=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Gt=!1;_t.length!==z.cameras.length&&(z.cameras.length=0,Gt=!0);for(let et=0;et<_t.length;et++){let at=_t[et],ot=null;if(f!==null)ot=f.getViewport(at);else{let ut=d.getViewSubImage(u,at);ot=ut.viewport,et===0&&(t.setRenderTargetTextures(y,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(y))}let lt=U[et];lt===void 0&&(lt=new Oe,lt.layers.enable(et),lt.viewport=new Me,U[et]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),et===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Gt===!0&&z.cameras.push(lt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let et=d.getDepthInformation(_t[0]);et&&et.isValid&&et.texture&&g.init(et,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let et=0;et<_t.length;et++){let at=_t[et].camera;if(at){let ot=m[at];ot||(ot=new dr,m[at]=ot);let lt=d.getCameraImage(at);ot.sourceTexture=lt}}}}for(let _t=0;_t<b.length;_t++){let Gt=E[_t],St=b[_t];Gt!==null&&St!==void 0&&St.update(Gt,tt,c||a)}oe&&oe(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let se=new bd;se.setAnimationLoop(Qt),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}},v_=new ee,Cd=new qt;Cd.set(-1,0,0,0,1,0,0,0,1);function M_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Oc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Ie&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Ie&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),w=M.envMap,y=M.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(v_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function S_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;n.uniformBlockBinding(y,E)}function c(y,b){let E=s[y.id];E===void 0&&(g(y),E=h(y),s[y.id]=E,y.addEventListener("dispose",M));let R=b.program;n.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let b=d();y.__bindingPointIndex=b;let E=i.createBuffer(),R=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,T=E.length;_<T;_++){let C=E[_];if(Array.isArray(C))for(let D=0,U=C.length;D<U;D++)f(C[D],_,D,R);else f(C,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,b,E,R){if(x(y,b,E,R)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let U=T[D],z=m(U);p(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function x(y,b,E,R){let _=y.value,T=b+"_"+E;if(R[T]===void 0)return typeof _=="number"||typeof _=="boolean"?R[T]=_:ArrayBuffer.isView(_)?R[T]=_.slice():R[T]=_.clone(),!0;{let C=R[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let b=y.uniforms,E=0,R=16;for(let T=0,C=b.length;T<C;T++){let D=Array.isArray(b[T])?b[T]:[b[T]];for(let U=0,z=D.length;U<z;U++){let P=D[U],O=Array.isArray(P.value)?P.value:[P.value];for(let W=0,V=O.length;W<V;W++){let it=O[W],q=m(it),j=E%R,nt=j%q.boundary,Pt=j+nt;E+=nt,Pt!==0&&R-Pt<q.storage&&(E+=R-Pt),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=q.storage}}}let _=E%R;return _>0&&(E+=R-_),y.__size=E,y.__cache={},this}function m(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),b}function M(y){let b=y.target;b.removeEventListener("dispose",M);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var b_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function w_(){return Ln===null&&(Ln=new cr(b_,16,16,di,yn),Ln.name="DFG_LUT",Ln.minFilter=Be,Ln.magFilter=Be,Ln.wrapS=bn,Ln.wrapT=bn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var sl=class{constructor(t={}){let{canvas:e=Wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Ke}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Mo,vo,yo]),m=new Set([Ke,_n,Es,Ts,go,xo]),M=new Uint32Array(4),w=new Int32Array(4),y=new I,b=null,E=null,R=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,U=null,z=null,P=null,O=null;this._outputColorSpace=Fe;let W=0,V=0,it=null,q=-1,j=null,nt=new Me,Pt=new Me,Tt=null,oe=new Ot(0),Qt=0,se=e.width,J=e.height,tt=1,_t=null,Gt=null,St=new Me(0,0,se,J),Wt=new Me(0,0,se,J),de=!1,et=new ms,at=!1,ot=!1,lt=new ee,ut=new I,Bt=new Me,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function Yt(){return it===null?tt:1}let L=n;function le(S,N){return e.getContext(S,N)}let jt,A,v,B,G,Y,ct,ht,Z,$,dt,Lt,xt,ft,Dt,zt,Zt,F,pt,K,mt,Mt,st;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",cn,!1),L===null){let N="webgl2";if(L=le(N,S),L===null)throw le(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(S){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Ht("WebGLRenderer: "+S.message),S}function Nt(){jt=new Pg(L),jt.init(),mt=new x_(L,jt),A=new Mg(L,jt,t,mt),v=new m_(L,jt),A.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),z=L.createFramebuffer(),P=L.createFramebuffer(),O=L.createFramebuffer(),B=new Ng(L),G=new e_,Y=new g_(L,jt,v,G,A,mt,B),ct=new Ig(C),ht=new Fp(L),Mt=new yg(L,ht),Z=new Lg(L,ht,B,Mt),$=new Fg(L,Z,ht,Mt,B),F=new Ug(L,A,Y),Dt=new Sg(G),dt=new t_(C,ct,jt,A,Mt,Dt),Lt=new M_(C,G),xt=new i_,ft=new c_(jt),Zt=new _g(C,ct,v,$,p,l),zt=new p_(C,$,A),st=new S_(L,B,A,v),pt=new vg(L,jt,B),K=new Dg(L,jt,B),B.programs=dt.programs,C.capabilities=A,C.extensions=jt,C.properties=G,C.renderLists=xt,C.shadowMap=zt,C.state=v,C.info=B}x!==Ke&&(T=new Bg(x,e.width,e.height,o,s,r));let Ct=new ah(C,L);this.xr=Ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=jt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=jt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(se,J,!1))},this.getSize=function(S){return S.set(se,J)},this.setSize=function(S,N,X=!0){if(Ct.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=S,J=N,e.width=Math.floor(S*tt),e.height=Math.floor(N*tt),X===!0&&(e.style.width=S+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(se*tt,J*tt).floor()},this.setDrawingBufferSize=function(S,N,X){se=S,J=N,tt=X,e.width=Math.floor(S*X),e.height=Math.floor(N*X),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===Ke){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(nt)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,N,X,k){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,N,X,k),v.viewport(nt.copy(St).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(Wt)},this.setScissor=function(S,N,X,k){S.isVector4?Wt.set(S.x,S.y,S.z,S.w):Wt.set(S,N,X,k),v.scissor(Pt.copy(Wt).multiplyScalar(tt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){v.setScissorTest(de=S)},this.setOpaqueSort=function(S){_t=S},this.setTransparentSort=function(S){Gt=S},this.getClearColor=function(S){return S.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,X=!0){let k=0;if(S){let H=!1;if(it!==null){let vt=it.texture.format;H=g.has(vt)}if(H){let vt=it.texture.type,wt=m.has(vt),yt=Zt.getClearColor(),At=Zt.getClearAlpha(),It=yt.r,Jt=yt.g,te=yt.b;wt?(M[0]=It,M[1]=Jt,M[2]=te,M[3]=At,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=It,w[1]=Jt,w[2]=te,w[3]=At,L.clearBufferiv(L.COLOR,0,w))}else k|=L.COLOR_BUFFER_BIT}N&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",cn,!1),Zt.dispose(),xt.dispose(),ft.dispose(),G.dispose(),ct.dispose(),$.dispose(),Mt.dispose(),st.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Sh),Ct.removeEventListener("sessionend",bh),yi.stop()};function xe(S){S.preventDefault(),er("WebGLRenderer: Context Lost."),D=!0}function ce(){er("WebGLRenderer: Context Restored."),D=!1;let S=B.autoReset,N=zt.enabled,X=zt.autoUpdate,k=zt.needsUpdate,H=zt.type;Nt(),B.autoReset=S,zt.enabled=N,zt.autoUpdate=X,zt.needsUpdate=k,zt.type=H}function cn(S){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function vn(S){let N=S.target;N.removeEventListener("dispose",vn),ef(N)}function ef(S){nf(S),G.remove(S)}function nf(S){let N=G.get(S).programs;N!==void 0&&(N.forEach(function(X){dt.releaseProgram(X)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,X,k,H,vt){N===null&&(N=Ut);let wt=H.isMesh&&H.matrixWorld.determinantAffine()<0,yt=af(S,N,X,k,H);v.setMaterial(k,wt);let At=X.index,It=1;if(k.wireframe===!0){if(At=Z.getWireframeAttribute(X),At===void 0)return;It=2}let Jt=X.drawRange,te=X.attributes.position,Rt=Jt.start*It,he=(Jt.start+Jt.count)*It;vt!==null&&(Rt=Math.max(Rt,vt.start*It),he=Math.min(he,(vt.start+vt.count)*It)),At!==null?(Rt=Math.max(Rt,0),he=Math.min(he,At.count)):te!=null&&(Rt=Math.max(Rt,0),he=Math.min(he,te.count));let Ee=he-Rt;if(Ee<0||Ee===1/0)return;Mt.setup(H,k,yt,X,At);let ye,ge=pt;if(At!==null&&(ye=ht.get(At),ge=K,ge.setIndex(ye)),H.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Yt()),ge.setMode(L.LINES)):ge.setMode(L.TRIANGLES);else if(H.isLine){let ze=k.linewidth;ze===void 0&&(ze=1),v.setLineWidth(ze*Yt()),H.isLineSegments?ge.setMode(L.LINES):H.isLineLoop?ge.setMode(L.LINE_LOOP):ge.setMode(L.LINE_STRIP)}else H.isPoints?ge.setMode(L.POINTS):H.isSprite&&ge.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))ge.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ze=H._multiDrawStarts,bt=H._multiDrawCounts,We=H._multiDrawCount,re=At?ht.get(At).bytesPerElement:1,rn=G.get(k).currentProgram.getUniforms();for(let Mn=0;Mn<We;Mn++)rn.setValue(L,"_gl_DrawID",Mn),ge.render(ze[Mn]/re,bt[Mn])}else if(H.isInstancedMesh)ge.renderInstances(Rt,Ee,H.count);else if(X.isInstancedBufferGeometry){let ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bt=Math.min(X.instanceCount,ze);ge.renderInstances(Rt,Ee,bt)}else ge.render(Rt,Ee)};function Mh(S,N,X,k){U!==null&&S.isNodeMaterial&&U.setObject(k,S),at===!0&&Dt.setState(S,X,!1),S.transparent===!0&&S.side===nn&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,Qr(S,N,k),S.side=li,S.needsUpdate=!0,Qr(S,N,k),S.side=nn):Qr(S,N,k)}this.compile=function(S,N,X=null){X===null&&(X=S),U!==null&&U.renderStart(S,N,X),E=ft.get(X),E.init(N),_.push(E),X.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),ot=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,ot),at===!0&&Dt.setGlobalState(this.clippingPlanes,N),U!==null&&zt.render(E.state.shadowsArray,X,N);let k=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let vt=H.material;if(vt)if(Array.isArray(vt))for(let wt=0;wt<vt.length;wt++){let yt=vt[wt];Mh(yt,X,N,H),k.add(yt)}else Mh(vt,X,N,H),k.add(vt)}),E=_.pop(),U!==null&&U.renderEnd(),k},this.compileAsync=function(S,N,X=null){let k=this.compile(S,N,X);return new Promise(H=>{function vt(){if(k.forEach(function(wt){let At=G.get(wt).currentProgram;(At===void 0||At.isReady())&&k.delete(wt)}),k.size===0){H(S);return}setTimeout(vt,10)}jt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Tl=null;function sf(S){Tl&&Tl(S)}function Sh(){yi.stop()}function bh(){yi.start()}let yi=new bd;yi.setAnimationLoop(sf),typeof self!="undefined"&&yi.setContext(self),this.setAnimationLoop=function(S){Tl=S,Ct.setAnimationLoop(S),S===null?yi.stop():yi.start()},Ct.addEventListener("sessionstart",Sh),Ct.addEventListener("sessionend",bh),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;U!==null&&U.renderStart(S,N);let X=Ct.enabled===!0&&Ct.isPresenting===!0,k=T!==null&&(it===null||X)&&T.begin(C,it);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(N),N=Ct.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,N,it),E=ft.get(S,_.length),E.init(N),E.state.textureUnits=Y.getTextureUnits(),_.push(E),lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(lt,mn,N.reversedDepth),ot=this.localClippingEnabled,at=Dt.init(this.clippingPlanes,ot),b=xt.get(S,R.length),b.init(),R.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&Al(wt,N,-1/0,C.sortObjects)}Al(S,N,0,C.sortObjects),b.finish(),U!==null&&U.updateLights(E.state.lightsArray),C.sortObjects===!0&&b.sort(_t,Gt),Xt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Xt&&Zt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Dt.beginShadows();let H=E.state.shadowsArray;if(zt.render(H,S,N),at===!0&&Dt.endShadows(),(k&&T.hasRenderPass())===!1){let wt=b.opaque,yt=b.transmissive;if(E.setupLights(),N.isArrayCamera){let At=N.cameras;if(yt.length>0)for(let It=0,Jt=At.length;It<Jt;It++){let te=At[It];Eh(wt,yt,S,te)}Xt&&Zt.render(S);for(let It=0,Jt=At.length;It<Jt;It++){let te=At[It];wh(b,S,te,te.viewport)}}else yt.length>0&&Eh(wt,yt,S,N),Xt&&Zt.render(S),wh(b,S,N)}it!==null&&V===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),k&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,N),Mt.resetDefaultState(),q=-1,j=null,_.pop(),_.length>0?(E=_[_.length-1],Y.setTextureUnits(E.state.textureUnits),at===!0&&Dt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,U!==null&&U.renderEnd()};function Al(S,N,X,k){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(et)){k&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);let wt=$.update(S),yt=S.material;yt.visible&&b.push(S,wt,yt,X,Bt.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(et))){let wt=$.update(S),yt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(yt)){let At=wt.groups;for(let It=0,Jt=At.length;It<Jt;It++){let te=At[It],Rt=yt[te.materialIndex];Rt&&Rt.visible&&b.push(S,wt,Rt,X,Bt.z,te,N)}}else yt.visible&&b.push(S,wt,yt,X,Bt.z,null,N)}}let vt=S.children;for(let wt=0,yt=vt.length;wt<yt;wt++)Al(vt[wt],N,X,k)}function wh(S,N,X,k){let{opaque:H,transmissive:vt,transparent:wt}=S;E.setupLightsView(X),at===!0&&Dt.setGlobalState(C.clippingPlanes,X),k&&v.viewport(nt.copy(k)),H.length>0&&$r(H,N,X),vt.length>0&&$r(vt,N,X),wt.length>0&&$r(wt,N,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Eh(S,N,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Rt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Je(1,1,{generateMipmaps:!0,type:Rt?yn:Ke,minFilter:hi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let vt=E.state.transmissionRenderTarget[k.id],wt=k.viewport||nt;vt.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),At=C.getActiveCubeFace(),It=C.getActiveMipmapLevel();C.setRenderTarget(vt),C.getClearColor(oe),Qt=C.getClearAlpha(),Qt<1&&C.setClearColor(16777215,.5),C.clear(),Xt&&Zt.render(X);let Jt=C.toneMapping;C.toneMapping=xn;let te=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),at===!0&&Dt.setGlobalState(C.clippingPlanes,k),$r(S,X,k),Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let he=0,Ee=N.length;he<Ee;he++){let ye=N[he],{object:ge,geometry:ze,material:bt,group:We}=ye;if(bt.side===nn&&ge.layers.test(k.layers)){let re=bt.side;bt.side=Ie,bt.needsUpdate=!0,Th(ge,X,k,ze,bt,We),bt.side=re,bt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt))}C.setRenderTarget(yt,At,It),C.setClearColor(oe,Qt),te!==void 0&&(k.viewport=te),C.toneMapping=Jt}function $r(S,N,X){let k=N.isScene===!0?N.overrideMaterial:null;for(let H=0,vt=S.length;H<vt;H++){let wt=S[H],{object:yt,geometry:At,group:It}=wt,Jt=wt.material;Jt.allowOverride===!0&&k!==null&&(Jt=k),yt.layers.test(X.layers)&&Th(yt,N,X,At,Jt,It)}}function Th(S,N,X,k,H,vt){U!==null&&H.isNodeMaterial&&U.setObject(S,H),S.onBeforeRender(C,N,X,k,H,vt),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(C,N,X,k,S,vt),H.transparent===!0&&H.side===nn&&H.forceSinglePass===!1?(H.side=Ie,H.needsUpdate=!0,C.renderBufferDirect(X,N,k,H,S,vt),H.side=li,H.needsUpdate=!0,C.renderBufferDirect(X,N,k,H,S,vt),H.side=nn):C.renderBufferDirect(X,N,k,H,S,vt),S.onAfterRender(C,N,X,k,H,vt)}function Qr(S,N,X){N.isScene!==!0&&(N=Ut);let k=G.get(S),H=E.state.lights,vt=E.state.shadowsArray,wt=H.state.version,yt=dt.getParameters(S,H.state,vt,N,X,E.state.lightProbeGridArray),At=dt.getProgramCacheKey(yt),It=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,k.fog=N.fog;let Jt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=ct.get(S.envMap||k.environment,Jt),k.envMapRotation=k.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener("dispose",vn),It=new Map,k.programs=It);let te=It.get(At);if(te!==void 0){if(k.currentProgram===te&&k.lightsStateVersion===wt)return Rh(S,yt),te}else yt.uniforms=dt.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,X,yt),S.onBeforeCompile(yt,C),te=dt.acquireProgram(yt,At),It.set(At,te),k.uniforms=yt.uniforms;let Rt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),Rh(S,yt),k.needsLights=lf(S),k.lightsStateVersion=wt,k.needsLights&&(Rt.ambientLightColor.value=H.state.ambient,Rt.lightProbe.value=H.state.probe,Rt.sunLights.value=H.state.sun,Rt.sunLightShadows.value=H.state.sunShadow,Rt.directionalLights.value=H.state.directional,Rt.directionalLightShadows.value=H.state.directionalShadow,Rt.spotLights.value=H.state.spot,Rt.spotLightShadows.value=H.state.spotShadow,Rt.rectAreaLights.value=H.state.rectArea,Rt.ltc_1.value=H.state.rectAreaLTC1,Rt.ltc_2.value=H.state.rectAreaLTC2,Rt.pointLights.value=H.state.point,Rt.pointLightShadows.value=H.state.pointShadow,Rt.hemisphereLights.value=H.state.hemi,Rt.sunShadowMatrix.value=H.state.sunShadowMatrix,Rt.sunShadowCascade.value=H.state.sunShadowCascade,Rt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Rt.spotLightMatrix.value=H.state.spotLightMatrix,Rt.spotLightMap.value=H.state.spotLightMap,Rt.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=te,k.uniformsList=null,te}function Ah(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Rh(S,N){let X=G.get(S);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function rf(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let X=0,k=S.length;X<k;X++){let H=S[X];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function af(S,N,X,k,H){N.isScene!==!0&&(N=Ut),Y.resetTextureUnits();let vt=N.fog,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?N.environment:null,yt=it===null?C.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ie.workingColorSpace,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,It=ct.get(k.envMap||wt,At),Jt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,te=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!X.morphAttributes.position,he=!!X.morphAttributes.normal,Ee=!!X.morphAttributes.color,ye=xn;k.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ye=C.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ze=ge!==void 0?ge.length:0,bt=G.get(k),We=E.state.lights;if(at===!0&&(ot===!0||S!==j)){let _e=S===j&&k.id===q;Dt.setState(k,S,_e)}let re=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==We.state.version||bt.outputColorSpace!==yt||H.isBatchedMesh&&bt.batching===!1||!H.isBatchedMesh&&bt.batching===!0||H.isBatchedMesh&&bt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&bt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&bt.instancing===!1||!H.isInstancedMesh&&bt.instancing===!0||H.isSkinnedMesh&&bt.skinning===!1||!H.isSkinnedMesh&&bt.skinning===!0||H.isInstancedMesh&&bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&bt.instancingMorph===!1&&H.morphTexture!==null||bt.envMap!==It||k.fog===!0&&bt.fog!==vt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Jt||bt.vertexTangents!==te||bt.morphTargets!==Rt||bt.morphNormals!==he||bt.morphColors!==Ee||bt.toneMapping!==ye||bt.morphTargetsCount!==ze||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,bt.__version=k.version);let rn=bt.currentProgram;re===!0&&(rn=Qr(k,N,H),U&&k.isNodeMaterial&&U.onUpdateProgram(k,rn,bt));let Mn=!1,Jn=!1,zi=!1,pe=rn.getUniforms(),we=bt.uniforms;if(v.useProgram(rn.program)&&(Mn=!0,Jn=!0,zi=!0),k.id!==q&&(q=k.id,Jn=!0),bt.needsLights){let _e=rf(E.state.lightProbeGridArray,H);bt.lightProbeGrid!==_e&&(bt.lightProbeGrid=_e,Jn=!0)}if(Mn||j!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pe.setValue(L,"projectionMatrix",S.projectionMatrix),pe.setValue(L,"viewMatrix",S.matrixWorldInverse);let $n=pe.map.cameraPosition;$n!==void 0&&$n.setValue(L,ut.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&pe.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Jn=!0,zi=!0)}if(bt.needsLights&&(We.state.sunShadowMap.length>0&&pe.setValue(L,"sunShadowMap",We.state.sunShadowMap,Y),We.state.directionalShadowMap.length>0&&pe.setValue(L,"directionalShadowMap",We.state.directionalShadowMap,Y),We.state.spotShadowMap.length>0&&pe.setValue(L,"spotShadowMap",We.state.spotShadowMap,Y),We.state.pointShadowMap.length>0&&pe.setValue(L,"pointShadowMap",We.state.pointShadowMap,Y)),H.isSkinnedMesh){pe.setOptional(L,H,"bindMatrix"),pe.setOptional(L,H,"bindMatrixInverse");let _e=H.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(L,"boneTexture",_e.boneTexture,Y))}H.isBatchedMesh&&(pe.setOptional(L,H,"batchingTexture"),pe.setValue(L,"batchingTexture",H._matricesTexture,Y),pe.setOptional(L,H,"batchingIdTexture"),pe.setValue(L,"batchingIdTexture",H._indirectTexture,Y),pe.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&pe.setValue(L,"batchingColorTexture",H._colorsTexture,Y));let Kn=X.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&F.update(H,X,rn),(Jn||bt.receiveShadow!==H.receiveShadow)&&(bt.receiveShadow=H.receiveShadow,pe.setValue(L,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&N.environment!==null&&(we.envMapIntensity.value=N.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=w_()),Jn){if(pe.setValue(L,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&of(we,zi),vt&&k.fog===!0&&Lt.refreshFogUniforms(we,vt),Lt.refreshMaterialUniforms(we,k,tt,J,E.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.lightProbeGrid){let _e=bt.lightProbeGrid;we.probesSH.value=_e.texture,we.probesMin.value.copy(_e.boundingBox.min),we.probesMax.value.copy(_e.boundingBox.max),we.probesResolution.value.copy(_e.resolution)}Cs.upload(L,Ah(bt),we,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Cs.upload(L,Ah(bt),we,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&pe.setValue(L,"center",H.center),pe.setValue(L,"modelViewMatrix",H.modelViewMatrix),pe.setValue(L,"normalMatrix",H.normalMatrix),pe.setValue(L,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let _e=k.uniformsGroups;for(let $n=0,ki=_e.length;$n<ki;$n++){let Ih=_e[$n];st.update(Ih,rn),st.bind(Ih,rn)}}return rn}function of(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function lf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(S,N,X){let k=G.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=N,G.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let X=G.get(S);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,X=0){it=S,W=N,V=X;let k=null,H=!1,vt=!1;if(S){let yt=G.get(S);if(yt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(L.FRAMEBUFFER,yt.__webglFramebuffer),nt.copy(S.viewport),Pt.copy(S.scissor),Tt=S.scissorTest,v.viewport(nt),v.scissor(Pt),v.setScissorTest(Tt),q=-1;return}else if(yt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(yt.__hasExternalTextures)Y.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Jt=S.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&G.has(Jt)&&(S.width!==Jt.image.width||S.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let At=S.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);let It=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[N])?k=It[N][X]:k=It[N],H=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?k=G.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?k=It[X]:k=It,nt.copy(S.viewport),Pt.copy(S.scissor),Tt=S.scissorTest}else nt.copy(St).multiplyScalar(tt).floor(),Pt.copy(Wt).multiplyScalar(tt).floor(),Tt=de;if(X!==0&&(k=z),v.bindFramebuffer(L.FRAMEBUFFER,k)&&v.drawBuffers(S,k),v.viewport(nt),v.scissor(Pt),v.setScissorTest(Tt),H){let yt=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,yt.__webglTexture,X)}else if(vt){let yt=N;for(let At=0;At<S.textures.length;At++){let It=G.get(S.textures[At]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+At,It.__webglTexture,X,yt)}}else if(S!==null&&X!==0){let yt=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,yt.__webglTexture,X)}q=-1};function Ch(S){let N=G.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=A.textureFormatReadable(S.format),N.__typeReadable=A.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,X,k,H,vt,wt,yt=0){if(!(S&&S.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){v.bindFramebuffer(L.FRAMEBUFFER,At);try{let It=S.textures[yt],Jt=It.format,te=It.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);let Rt=Ch(It);if(Rt.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-k&&X>=0&&X<=S.height-H&&L.readPixels(N,X,k,H,mt.convert(Jt),mt.convert(te),vt)}finally{let It=it!==null?G.get(it).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,N,X,k,H,vt,wt,yt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(N>=0&&N<=S.width-k&&X>=0&&X<=S.height-H){v.bindFramebuffer(L.FRAMEBUFFER,At);let It=S.textures[yt],Jt=It.format,te=It.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+yt);let Rt=Ch(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,he),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(N,X,k,H,mt.convert(Jt),mt.convert(te),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ee=it!==null?G.get(it).__webglFramebuffer:null;v.bindFramebuffer(L.FRAMEBUFFER,Ee);let ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await qu(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,he),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(he),L.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,X=0){let k=Math.pow(2,-X),H=Math.floor(S.image.width*k),vt=Math.floor(S.image.height*k),wt=N!==null?N.x:0,yt=N!==null?N.y:0;Y.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,wt,yt,H,vt),v.unbindTexture()},this.copyTextureToTexture=function(S,N,X=null,k=null,H=0,vt=0){let wt,yt,At,It,Jt,te,Rt,he,Ee,ye=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(X!==null)wt=X.max.x-X.min.x,yt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,It=X.min.x,Jt=X.min.y,te=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-H);wt=Math.floor(ye.width*we),yt=Math.floor(ye.height*we),S.isDataArrayTexture?At=ye.depth:S.isData3DTexture?At=Math.floor(ye.depth*we):At=1,It=0,Jt=0,te=0}k!==null?(Rt=k.x,he=k.y,Ee=k.z):(Rt=0,he=0,Ee=0);let ge=mt.convert(N.format),ze=mt.convert(N.type),bt;N.isData3DTexture?(Y.setTexture3D(N,0),bt=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),bt=L.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),bt=L.TEXTURE_2D),v.activeTexture(L.TEXTURE0),v.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),v.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),v.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let We=v.getParameter(L.UNPACK_ROW_LENGTH),re=v.getParameter(L.UNPACK_IMAGE_HEIGHT),rn=v.getParameter(L.UNPACK_SKIP_PIXELS),Mn=v.getParameter(L.UNPACK_SKIP_ROWS),Jn=v.getParameter(L.UNPACK_SKIP_IMAGES);v.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),v.pixelStorei(L.UNPACK_SKIP_PIXELS,It),v.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(L.UNPACK_SKIP_IMAGES,te);let zi=S.isDataArrayTexture||S.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let we=G.get(S),Kn=G.get(N),_e=G.get(we.__renderTarget),$n=G.get(Kn.__renderTarget);v.bindFramebuffer(L.READ_FRAMEBUFFER,_e.__webglFramebuffer),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let ki=0;ki<At;ki++)zi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(S).__webglTexture,H,te+ki),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(N).__webglTexture,vt,Ee+ki)),L.blitFramebuffer(It,Jt,wt,yt,Rt,he,wt,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||G.has(S)){let we=G.get(S),Kn=G.get(N);v.bindFramebuffer(L.READ_FRAMEBUFFER,P),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let _e=0;_e<At;_e++)zi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,H,te+_e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,H),pe?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Kn.__webglTexture,vt,Ee+_e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Kn.__webglTexture,vt),H!==0?L.blitFramebuffer(It,Jt,wt,yt,Rt,he,wt,yt,L.COLOR_BUFFER_BIT,L.NEAREST):pe?L.copyTexSubImage3D(bt,vt,Rt,he,Ee+_e,It,Jt,wt,yt):L.copyTexSubImage2D(bt,vt,Rt,he,It,Jt,wt,yt);v.bindFramebuffer(L.READ_FRAMEBUFFER,null),v.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pe?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(bt,vt,Rt,he,Ee,wt,yt,At,ge,ze,ye.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,vt,Rt,he,Ee,wt,yt,At,ge,ye.data):L.texSubImage3D(bt,vt,Rt,he,Ee,wt,yt,At,ge,ze,ye):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Rt,he,wt,yt,ge,ze,ye.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Rt,he,ye.width,ye.height,ge,ye.data):L.texSubImage2D(L.TEXTURE_2D,vt,Rt,he,wt,yt,ge,ze,ye);v.pixelStorei(L.UNPACK_ROW_LENGTH,We),v.pixelStorei(L.UNPACK_IMAGE_HEIGHT,re),v.pixelStorei(L.UNPACK_SKIP_PIXELS,rn),v.pixelStorei(L.UNPACK_SKIP_ROWS,Mn),v.pixelStorei(L.UNPACK_SKIP_IMAGES,Jn),vt===0&&N.generateMipmaps&&L.generateMipmap(bt),v.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){W=0,V=0,it=null,v.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var ol=class extends Ai{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ye;t.deleteAttribute("uv");let e=new me({side:Ie}),n=new me,s=new Ir(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Vt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Xn(t,n,6),o=new Re;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Vt(t,Ls(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Vt(t,Ls(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Vt(t,Ls(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Vt(t,Ls(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Vt(t,Ls(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Vt(t,Ls(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ls(i){return new Er({color:0,emissive:16777215,emissiveIntensity:i})}var Id=Math.PI*2,Nn=18,ne=(i,t,e)=>i<t?t:i>e?e:i,Ft=(i,t,e)=>i+(t-i)*e,Et=(i,t)=>i+Math.random()*(t-i);var ll=i=>i[Math.floor(Math.random()*i.length)];var fi=(i,t)=>1-Math.exp(-i*t),qr=i=>1-(1-i)*(1-i),Yr=i=>.5-.5*Math.cos(Math.PI*i);function Zn(i){return i=(i+Math.PI)%Id,i<0&&(i+=Id),i-Math.PI}function Pd(i,t,e){let n=Zn(t-i);return i+ne(n,-e,e)}function Un(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}var $e={s:0,t:0,d2:0};function oh(i,t,e,n,s,r,a,o,l,c,h,d,u=$e){let f=n-i,p=s-t,x=r-e,g=c-a,m=h-o,M=d-l,w=i-a,y=t-o,b=e-l,E=f*f+p*p+x*x,R=g*g+m*m+M*M,_=g*w+m*y+M*b,T,C;if(E<1e-9&&R<1e-9)T=0,C=0;else if(E<1e-9)T=0,C=ne(_/R,0,1);else{let P=f*w+p*y+x*b;if(R<1e-9)C=0,T=ne(-P/E,0,1);else{let O=f*g+p*m+x*M,W=E*R-O*O;T=W>1e-12?ne((O*_-P*R)/W,0,1):0,C=(O*T+_)/R,C<0?(C=0,T=ne(-P/E,0,1)):C>1&&(C=1,T=ne((O-P)/E,0,1))}}let D=i+f*T-(a+g*C),U=t+p*T-(o+m*C),z=e+x*T-(l+M*C);return u.s=T,u.t=C,u.d2=D*D+U*U+z*z,u}var Zr={t:0,d2:0};function Ld(i,t,e,n,s,r,a,o,l,c=Zr){let h=a-n,d=o-s,u=l-r,f=h*h+d*d+u*u,p=f>0?ne(((i-n)*h+(t-s)*d+(e-r)*u)/f,0,1):0,x=n+h*p-i,g=s+d*p-t,m=r+u*p-e;return c.t=p,c.d2=x*x+g*g+m*m,c}function lh(i,t){try{let e=parseInt(localStorage.getItem(i),10);return Number.isFinite(e)?e:t}catch{return t}}function ch(i,t){try{localStorage.setItem(i,String(t))}catch{}}var Ce=(()=>{let i=null,t=null,e=null,n=!1,s={};function r(){if(i){i.state==="suspended"&&i.resume();return}let h=window.AudioContext||window.webkitAudioContext;if(!h)return;try{i=new h}catch{i=null;return}t=i.createGain(),t.gain.value=.5;let d=i.createDynamicsCompressor();t.connect(d),d.connect(i.destination),e=i.createBuffer(1,i.sampleRate,i.sampleRate);let u=e.getChannelData(0);for(let f=0;f<u.length;f++)u[f]=Math.random()*2-1}function a(h,d){if(!i||n||i.state!=="running")return!1;let u=i.currentTime;return s[h]!==void 0&&u-s[h]<d?!1:(s[h]=u,!0)}function o(h,d,u,f){h.gain.setValueAtTime(1e-4,d),h.gain.exponentialRampToValueAtTime(f,d+Math.min(.012,u*.25)),h.gain.exponentialRampToValueAtTime(1e-4,d+u)}function l(h,d,u,f,p,x,g){let m=i.createBufferSource();m.buffer=e,m.loop=!0;let M=i.createBiquadFilter();M.type=u,M.Q.value=x,M.frequency.setValueAtTime(f,h),M.frequency.exponentialRampToValueAtTime(p,h+d);let w=i.createGain();o(w,h,d,g),m.connect(M),M.connect(w),w.connect(t),m.start(h,Math.random()*.8),m.stop(h+d+.05)}function c(h,d,u,f,p,x){let g=i.createOscillator();g.type=u,g.frequency.setValueAtTime(f,h),g.frequency.exponentialRampToValueAtTime(p,h+d);let m=i.createGain();o(m,h,d,x),g.connect(m),m.connect(t),g.start(h),g.stop(h+d+.05)}return{init:r,toggleMute(){return n=!n,n},get muted(){return n},swoosh(h){if(!a("swoosh",.03))return;let d=i.currentTime,u=h===2;l(d,u?.28:.16,"bandpass",u?400:700,u?2600:3400,1.4,.32)},slice(){if(!a("slice",.02))return;let h=i.currentTime;l(h,.08,"highpass",2500,7e3,.7,.3),c(h,.2,"triangle",Et(1800,2300),1100,.06),l(h+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!a("wound",.03))return;let h=i.currentTime;l(h,.18,"lowpass",900,150,1,.45),c(h,.12,"sine",160,60,.25)},punch(){if(!a("punch",.05))return;let h=i.currentTime;c(h,.15,"sine",140,45,.5),l(h,.1,"lowpass",1500,200,1,.35)},hurt(){if(!a("hurt",.1))return;let h=i.currentTime;c(h,.3,"sawtooth",320,90,.12)},die(){if(!a("die",.5))return;let h=i.currentTime;c(h,1,"sawtooth",240,40,.14),l(h,.6,"lowpass",800,60,1,.3)},thud(h){if(!a("thud",.06))return;let d=i.currentTime,u=ne(h/2500,.04,.3);c(d,.12,"sine",120,45,u),l(d,.07,"lowpass",500,120,1,u*.8)},clang(){if(!a("clang",.05))return;let h=i.currentTime;c(h,.35,"square",1750,1600,.05),c(h,.3,"triangle",2650,2500,.07),l(h,.06,"highpass",4e3,8e3,1,.25)},jump(h){if(!a("jump",.05))return;let d=i.currentTime,u=h||1;c(d,.12,"sine",260*u,560*u,.07)},combo(h){if(!a("combo",.04))return;let d=i.currentTime,u=520*Math.pow(1.06,Math.min(h,24));c(d,.14,"triangle",u,u*1.5,.07)},enemySwing(){a("eswing",.05)&&l(i.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!a("splash",.1))return;let h=i.currentTime;l(h,.5,"lowpass",2400,300,.8,.4),l(h+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!a("win",1))return;let h=i.currentTime;[523,659,784,1047].forEach((d,u)=>c(h+u*.09,.22,"triangle",d,d,.08))},heal(){if(!a("heal",.2))return;let h=i.currentTime;c(h,.12,"sine",660,660,.08),c(h+.1,.18,"sine",990,990,.08)}}})();var Q={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14},pi=15,E_=[.5,1,1,1,.45,.8,1,.45,.8,1,.8,1.1,1,.8,1.1],T_=[.14,.07,.14,.08,.06,.06,.08,.06,.06,.09,.08,.07,.09,.08,.07],Nd=.12,A_=5,R_=[[Q.NECK,Q.PELVIS,.17,"torso"],[Q.NECK,Q.HEAD,.07,"neck"],[Q.NECK,Q.LSH,0,"struct"],[Q.NECK,Q.RSH,0,"struct"],[Q.LSH,Q.RSH,0,"struct"],[Q.PELVIS,Q.LHIP,0,"struct"],[Q.PELVIS,Q.RHIP,0,"struct"],[Q.LHIP,Q.RHIP,0,"struct"],[Q.LSH,Q.LELB,.068,"arm"],[Q.LELB,Q.LHAND,.06,"arm"],[Q.RSH,Q.RELB,.068,"arm"],[Q.RELB,Q.RHAND,.06,"arm"],[Q.LHIP,Q.LKNEE,.092,"leg"],[Q.LKNEE,Q.LFOOT,.074,"leg"],[Q.RHIP,Q.RKNEE,.092,"leg"],[Q.RKNEE,Q.RFOOT,.074,"leg"]];function hh(i){return{spine:.52*i,neck:.24*i,shW:.2*i,hipW:.11*i,ua:.29*i,fa:.27*i,th:.44*i,sh:.43*i,headR:.14*i}}function Dd(i,t,e,n,s){return{x:i,y:t,z:e,px:i,py:t,pz:e,r:n,k:s,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var C_=1,cl=class{constructor(t,e,n){this.id=C_++,this.S=t,this.d=hh(t),this.kBase=n.k,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(pi*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let s=0;s<pi;s++){let r=e[s*3],a=e[s*3+1],o=e[s*3+2];this.pts.push(Dd(r,a,o,T_[s]*t,E_[s])),this.tgt[s*3]=r,this.tgt[s*3+1]=a,this.tgt[s*3+2]=o}this.pts[Q.HEAD].r=this.d.headR,this.pts[Q.HEAD].im=.8,this.pts[Q.PELVIS].pin=!0;for(let[s,r,a,o]of R_)this.addBone(s,r,a*t,o);this.addAux(Q.LSH,Q.PELVIS,!1),this.addAux(Q.RSH,Q.PELVIS,!1),this.addAux(Q.LHIP,Q.NECK,!1),this.addAux(Q.RHIP,Q.NECK,!1),this.addAux(Q.HEAD,Q.PELVIS,!0,.85),this.addAux(Q.HEAD,Q.LSH,!0,.9),this.addAux(Q.HEAD,Q.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=s==="torso"?1:0,l=s==="torso"?0:1;this.bones.push({a:t,b:e,r:n,kind:s,sa:o,sb:l,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z),vis:s!=="struct",part:t*100+e})}addAux(t,e,n,s=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*s})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let s=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,d=1/t,u=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],g=(x.x-x.px)*s,m=(x.y-x.py)*s,M=(x.z-x.pz)*s;x.px=x.x,x.py=x.y,x.pz=x.z;let w=-Nn;if(x.y<u){let y=Math.exp(-4*t);g*=y,m*=y,M*=y,w+=Nn*ne((u-x.y)*6,0,1.6)}else g*=.999,m*=.999,M*=.999;if(a&&x.attached&&p<pi){let y=this.tgt[p*3],b=this.tgt[p*3+1],E=this.tgt[p*3+2];if(x.pin){x.x=y,x.y=b,x.z=E;continue}if(o>0){let R=l*x.k,_=(y-x.x)*R-(g*d-this.cvx)*c;w+=(b-x.y)*R-(m*d-this.cvy)*c;let T=(E-x.z)*R-(M*d-this.cvz)*c;x.x+=g+_*h,x.y+=m+w*h,x.z+=M+T*h;continue}}x.x+=g,x.y+=m+w*h,x.z+=M}for(let p=0;p<A_;p++){for(let x=0;x<this.bones.length;x++){let g=this.bones[x];this.solve(g.a,g.b,g.len,!1)}for(let x=0;x<this.aux.length;x++){let g=this.aux[x];this.solve(g.a,g.b,g.len,g.min)}for(let x=0;x<r.length;x++){let g=r[x],m=n.ground(g.x,g.z);g.y<m+g.r&&g.py>m-.25&&(g.y=m+g.r)}}let f=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],g=n.ground(x.x,x.z);if(x.y>g+x.r+.002||x.py<g-.25)continue;let m=x.y-x.py;m<0&&(-m*d>this.impact&&(this.impact=-m*d),x.py=x.y+m*.2),x.px=x.x-(x.x-x.px)*f,x.pz=x.z-(x.z-x.pz)*f}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||s&&h>=n)return;let d=this.invMass(r),u=this.invMass(a),f=d+u;if(f===0)return;let p=(h-n)/(h*f);r.x+=o*p*d,r.y+=l*p*d,r.z+=c*p*d,a.x-=o*p*u,a.y-=l*p*u,a.z-=c*p*u}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),s=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=s,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=s,r.push(c))}s++}let a=n[Q.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=ne(e,.18,.82);let s=this.pts[n.a],r=this.pts[n.b],a=()=>{let f=Dd(Ft(s.x,r.x,e),Ft(s.y,r.y,e),Ft(s.z,r.z,e),n.r*.9,0);return f.px=Ft(s.px,r.px,e),f.py=Ft(s.py,r.py,e),f.pz=Ft(s.pz,r.pz,e),f.stump=!0,f.stumpR=n.r,f},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=Ft(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),d=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,d),this.updateConnectivity(),this.version++;let u=this.pts[o];return{i1:o,i2:l,x:u.x,y:u.y,z:u.z,kind:n.kind}}addVel(t,e,n,s,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*s,o.py-=e*s,o.pz-=n*s}}addSpin(t,e,n,s){let r=0,a=0,o=0;for(let c of this.pts)r+=c.x,a+=c.y,o+=c.z;let l=this.pts.length;r/=l,a/=l,o/=l;for(let c of this.pts){let h=c.x-r,d=c.y-a,u=c.z-o;c.px-=(e*u-n*d)*s,c.py-=(n*h-t*u)*s,c.pz-=(t*d-e*h)*s}}bounds(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<s&&(s=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=s,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[Q.PELVIS]}};function uh(i,t,e,n){let s=i.bones,r=i.pts,a=r[Q.HEAD],o=i.d.headR;for(let l=1;l<=n;l++){let c=l/n,h=Ft(t.bx,e.bx,c),d=Ft(t.by,e.by,c),u=Ft(t.bz,e.bz,c),f=Ft(t.tx,e.tx,c),p=Ft(t.ty,e.ty,c),x=Ft(t.tz,e.tz,c),g=null,m=1/0;for(let M=0;M<s.length;M++){let w=s[M];if(!w.vis)continue;let y=r[w.a],b=r[w.b];oh(h,d,u,f,p,x,y.x,y.y,y.z,b.x,b.y,b.z);let E=w.r+.02;$e.d2<E*E&&$e.d2<m&&(m=$e.d2,g={bone:M,u:$e.t,t:$e.s,x:Ft(y.x,b.x,$e.t),y:Ft(y.y,b.y,$e.t),z:Ft(y.z,b.z,$e.t),head:!1})}if(Ld(a.x,a.y,a.z,h,d,u,f,p,x),Zr.d2<o*o&&Zr.d2<m&&(g={bone:-1,u:.5,t:Zr.t,x:a.x,y:a.y,z:a.z,head:!0}),g)return g}return null}function Ud(i,t,e,n,s){let r=s*s;for(let a=1;a<=n;a++){let o=a/n;if(oh(Ft(i.bx,t.bx,o),Ft(i.by,t.by,o),Ft(i.bz,t.bz,o),Ft(i.tx,t.tx,o),Ft(i.ty,t.ty,o),Ft(i.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),$e.d2<r)return{x:Ft(e.bx,e.tx,$e.t),y:Ft(e.by,e.ty,$e.t),z:Ft(e.bz,e.tz,$e.t)}}return null}var dh=["lean","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Ds(){let i={};for(let t of dh)i[t]=0;return i}function fh(i,t,e,n){for(let s of dh)i[s]=t[s]+(e[s]-t[s])*n;return i}function Bd(i,t,e){for(let n of dh)i[n]+=(t[n]-i[n])*e}var Ns={guard(i,t){return i.lean=.24,i.twist=0,i.side=0,i.headP=-.2,i.lP=.62,i.lB=1.15,i.lS=.34,i.rP=.28,i.rB=.95,i.rS=.3,i.bob=Math.sin(t*2.4)*.012,i},run(i,t){let e=Math.sin(t);return i.lean=.32,i.twist=-e*.12,i.side=0,i.headP=-.25,i.lP=.15+.75*e,i.lB=.25+1.35*Math.max(0,Math.cos(t+.5)),i.rP=.15-.75*e,i.rB=.25+1.35*Math.max(0,Math.cos(t+Math.PI+.5)),i.lS=.08,i.rS=.08,i.bob=-Math.abs(Math.cos(t))*.04+.03,i},lunge(i){return i.lean=.4,i.side=0,i.headP=-.3,i.lP=.85,i.lB=1,i.lS=.22,i.rP=-.45,i.rB=.35,i.rS=.2,i.bob=-.02,i},air(i){return i.lean=.1,i.twist=0,i.side=0,i.headP=.1,i.lP=1,i.lB=1.6,i.lS=.25,i.rP=.4,i.rB=1.4,i.rS=.25,i.bob=0,i}};function Fn(i,t,e,n,s){i[t*3]=e,i[t*3+1]=n,i[t*3+2]=s}function Fd(i,t,e,n){return(n.th*Math.cos(i)+n.sh*Math.cos(i-t))*Math.cos(e)}function Od(i,t,e,n,s,r,a,o,l,c,h){let d=Math.cos(c),u=Math.sin(c),f=Math.cos(o),p=s+f*u*h.th,x=r-f*d*h.th,g=a+Math.sin(o)*h.th;Fn(i,e,p,x,g),f=Math.cos(o-l),Fn(i,n,p+f*u*h.sh,x-f*d*h.sh,g+Math.sin(o-l)*h.sh),Fn(i,t,s,r,a)}var hl=[0,0,0];function ul(i,t,e,n){let s=Math.cos(i.lean),r=Math.sin(i.lean),a=e*s-n*r,o=e*r+n*s;s=Math.cos(i.side),r=Math.sin(i.side);let l=t*s-a*r,c=t*r+a*s;return s=Math.cos(i.twist),r=Math.sin(i.twist),hl[0]=l*s+o*r,hl[1]=c,hl[2]=-l*r+o*s,hl}function ph(i,t,e,n){let s=-i.lS,r=i.rS,a=Math.max(Fd(i.lP,i.lB,s,t),Fd(i.rP,i.rB,r,t))+n+i.bob;Fn(e,Q.PELVIS,0,a,0);let o=ul(i,0,t.spine,0),l=o[0],c=a+o[1],h=o[2];Fn(e,Q.NECK,l,c,h);let d=Math.cos(i.headP),u=Math.sin(i.headP);o=ul(i,0,t.neck*d,t.neck*u+.03*t.neck),Fn(e,Q.HEAD,l+o[0],c+o[1],h+o[2]),o=ul(i,-t.shW,-.03,0),Fn(e,Q.LSH,l+o[0],c+o[1],h+o[2]),o=ul(i,t.shW,-.03,0),Fn(e,Q.RSH,l+o[0],c+o[1],h+o[2]);for(let[x,g,m,M]of[[Q.LSH,Q.LELB,Q.LHAND,-1],[Q.RSH,Q.RELB,Q.RHAND,1]]){let w=e[x*3],y=e[x*3+1],b=e[x*3+2];Fn(e,g,w+M*.04,y-t.ua,b+.05),Fn(e,m,w+M*.04,y-t.ua-t.fa*.9,b+.16)}let f=Math.cos(i.twist*.25),p=Math.sin(i.twist*.25);Od(e,Q.LHIP,Q.LKNEE,Q.LFOOT,-t.hipW*f,a,t.hipW*p,i.lP,i.lB,s,t),Od(e,Q.RHIP,Q.RKNEE,Q.RFOOT,t.hipW*f,a,-t.hipW*p,i.rP,i.rB,r,t)}function zd(i,t,e,n,s,r,a,o,l,c,h,d){let u=n-i,f=s-t,p=r-e,x=Math.hypot(u,f,p),g=(a+o)*.999;x<1e-5&&(u=0,f=-1,p=0,x=1e-5);let m=u/x,M=f/x,w=p/x;x>g&&(x=g);let y=(a*a-o*o+x*x)/(2*x),b=Math.sqrt(Math.max(0,a*a-y*y)),E=l*m+c*M+h*w,R=l-m*E,_=c-M*E,T=h-w*E,C=Math.hypot(R,_,T);return C<1e-5&&(R=0,_=-1,T=0,C=1),R/=C,_/=C,T/=C,d[0]=i+m*y+R*b,d[1]=t+M*y+_*b,d[2]=e+w*y+T*b,d[3]=i+m*x,d[4]=t+M*x,d[5]=e+w*x,d}var gi=.135;function I_(i,t,e){let n=gi,s=gi+i*.86,r=gi+i,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([u,,f])=>[u,s,f]),l=[0,r,0],c=[],h=(u,f,p)=>c.push(...u,...f,...p);for(let u=0;u<4;u++){let f=(u+1)%4;h(a[u],o[u],o[f]),h(a[u],o[f],a[f]),h(o[u],l,o[f])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let d=new Se;return d.setAttribute("position",new ae(c,3)),d.computeVertexNormals(),d}var Us={};function P_(){return Us.guard||(Us.guard=new me({color:4869975,metalness:.85,roughness:.35}),Us.grip=new me({color:2760989,roughness:.85})),Us}function Vd(i){let e=P_(),n=new Ne,s=new me({color:14936302,metalness:.95,roughness:.2}),r=new Vt(I_(i,.07*1,.018*1),s),a=new Vt(new Ye(.24*1,.035*1,.05*1),e.guard);a.position.y=.12*1;let o=new Vt(new qn(.019*1,.022*1,.22*1,10),e.grip),l=new Vt(new In(.032*1,12,8),e.guard);l.position.y=-.125*1;for(let c of[r,a,o,l])c.castShadow=!0,n.add(c);return n.userData.bladeMat=s,n}function mh(i){i.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==Us.guard&&t.material!==Us.grip&&t.material.dispose())})}var kd=new ee,mi=new I,Oi=new I,Hd=new I;function gh(i,t,e,n,s,r,a,o,l,c){Oi.set(s,r,a).normalize(),mi.set(o,l,c),mi.addScaledVector(Oi,-mi.dot(Oi)),mi.lengthSq()<1e-8&&mi.set(1,0,0).addScaledVector(Oi,-Oi.x),mi.normalize(),Hd.crossVectors(mi,Oi),kd.makeBasis(mi,Oi,Hd),i.quaternion.setFromRotationMatrix(kd),i.position.set(t,e,n)}var dl=class{constructor(t,e,n,s,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:s.x,y:s.y,z:s.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let s=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*s,c=(o.y-o.py)*s,h=(o.z-o.pz)*s;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-Nn*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,d=Math.hypot(l,c,h)||1,u=(d-this.L)/(2*d);this.a.x+=l*u,this.a.y+=c*u,this.a.z+=h*u,this.b.x-=l*u,this.b.y-=c*u,this.b.z-=h*u;for(let f of[this.a,this.b]){let p=n.ground(f.x,f.z);if(f.y<p+.02&&f.py>p-.2){if(f===r&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,f.y=p-.12;return}f.y=p+.02,f.px=f.x-(f.x-f.px)*.6,f.pz=f.z-(f.z-f.pz)*.6}}}}render(){let t=this.a,e=this.b;gh(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var Jr=[[0,.165],[.2,.162],[.45,.142],[.72,.172],[.9,.168],[1,.118]];function L_(i){for(let t=1;t<Jr.length;t++){let[e,n]=Jr[t];if(i<=e){let[s,r]=Jr[t-1],a=(i-s)/(e-s);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return Jr[Jr.length-1][1]}var D_={100:[.066,.06],304:[.072,.058],607:[.072,.058],405:[.058,.05],708:[.058,.05],910:[.108,.076],1213:[.108,.076],1011:[.078,.056],1314:[.078,.056]};function xh(i,t){if(i.kind==="torso")return L_(t);let e=D_[i.part]||[i.r,i.r];return e[0]+(e[1]-e[0])*t}var Gd=new Map;function N_(i,t,e,n){let s=`${i.part}|${i.sa.toFixed(3)}|${i.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=Gd.get(s);if(r)return r;let a=i.len,o=[],l=xh(i,i.sa)*t,c=xh(i,i.sb)*t;if(e)for(let d=0;d<5;d++){let u=-Math.PI/2+d/5*Math.PI/2;o.push(new rt(l*Math.cos(u),l*Math.sin(u)))}else o.push(new rt(1e-4,0));let h=i.kind==="torso"?14:4;for(let d=0;d<=h;d++){let u=d/h;o.push(new rt(xh(i,i.sa+(i.sb-i.sa)*u)*t,u*a))}if(n)for(let d=1;d<=5;d++){let u=d/5*Math.PI/2;o.push(new rt(Math.max(1e-4,c*Math.cos(u)),a+c*Math.sin(u)))}else o.push(new rt(1e-4,a));return r=new br(o,16),Gd.set(s,r),r}var fl=new In(1,22,16),U_=new In(1,12,10),F_=new me({color:14680092,roughness:.45,emissive:3801093}),O_=new me({color:16777215,roughness:.25}),B_=new me({color:1118481,roughness:.3}),Wd=new I(0,1,0),Fs=new I,Xd=new I,sn=new I,xi=new I,pl=new I,qd=new ee;function Yd(i,t,e){xi.copy(t).addScaledVector(i,-t.dot(i)),xi.lengthSq()<1e-8&&xi.set(1,0,0).addScaledVector(i,-i.x),xi.normalize(),pl.crossVectors(xi,i),qd.makeBasis(xi,i,pl),e.setFromRotationMatrix(qd)}var ml=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new Ne,this.mat=new wr({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new Ne;let s=new Vt(fl,this.mat),r=this.rag.d.headR;s.scale.set(r*.95,r*1.12,r*1.08),s.castShadow=!0,this.headGroup.add(s),this.pupils=[];for(let a of[-1,1]){let o=new Vt(fl,O_);o.scale.setScalar(.062*n),o.position.set(a*.058*n,.05*n,.105*n);let l=new Vt(U_,B_);l.scale.setScalar(.027*n),l.userData.base=new I(a*.058*n,.05*n,.105*n+.05*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new I(1,0,0),this.headLateral=new I(1,0,0),this.pupilOff=new rt,this.pupilVel=new rt,this.prevHead=new I,this.deadLook=[new rt(Et(-1,1),Et(-1,1)),new rt(Et(-1,1),Et(-1,1))],this.extremities=[];for(let[a,o,l]of[[Q.LHAND,.07,1],[Q.RHAND,.07,1],[Q.LFOOT,.082,.75],[Q.RFOOT,.082,.75]]){let c=new Vt(fl,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let s=new Vt(N_(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);s.castShadow=!0,n.kind==="torso"&&s.scale.set(1.15,1,.86),this.boneMeshes.set(n,s),this.group.add(s)}for(let[n,s]of this.boneMeshes)e.has(n)||(this.group.remove(s),this.boneMeshes.delete(n));t.pts.forEach((n,s)=>{if(!n.stump||this.stumpMeshes.has(s))return;let r=new Vt(fl,F_);r.userData.r=n.stumpR,this.stumpMeshes.set(s,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,s=this.ch,r=e.comp;Fs.set(n[Q.LSH].x-n[Q.RSH].x,n[Q.LSH].y-n[Q.RSH].y,n[Q.LSH].z-n[Q.RSH].z),Fs.lengthSq()>1e-6&&this.lateral.copy(Fs).normalize(),Xd.set(n[Q.LHIP].x-n[Q.RHIP].x,n[Q.LHIP].y-n[Q.RHIP].y,n[Q.LHIP].z-n[Q.RHIP].z).normalize();for(let[h,d]of this.boneMeshes){let u=n[h.a],f=n[h.b];sn.set(f.x-u.x,f.y-u.y,f.z-u.z);let p=sn.length();if(!(p<1e-6))if(sn.multiplyScalar(1/p),d.position.set(u.x,u.y,u.z),h.kind==="torso"){let x=r[h.a]===r[Q.NECK]||r[h.b]===r[Q.NECK];Yd(sn,x?this.lateral:Xd,d.quaternion)}else d.quaternion.setFromUnitVectors(Wd,sn)}let a=n[Q.HEAD],o=e.neighborOf(Q.HEAD);if(o>=0?sn.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():sn.set(0,1,0),r[Q.HEAD]===r[Q.LSH]&&this.headLateral.copy(this.lateral),Yd(sn,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){Fs.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),xi.set(1,0,0).applyQuaternion(this.headGroup.quaternion),pl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-Fs.dot(xi)*.004,d=-Fs.dot(pl)*.004,u=this.pupilOff,f=this.pupilVel;f.x+=((h-u.x)*260-f.x*10)*t,f.y+=((d-u.y)*260-f.y*10)*t,u.x=ne(u.x+f.x*t,-.022,.022),u.y=ne(u.y+f.y*t,-.022,.022)}let l=s.S;this.pupils.forEach((h,d)=>{let u=h.userData.base;if(s.alive)h.position.set(u.x+this.pupilOff.x*l,u.y+this.pupilOff.y*l,u.z);else{let f=this.deadLook[d];h.position.set(u.x+f.x*.02*l,u.y+f.y*.02*l,u.z-.004*l)}});for(let h of this.extremities){let d=n[h.userData.idx];h.position.set(d.x,d.y,d.z),s.alive&&h.rotation.set(0,s.yaw,0)}for(let[h,d]of this.stumpMeshes){let u=n[h],f=e.neighborOf(h);if(f<0){d.visible=!1;continue}sn.set(u.x-n[f].x,u.y-n[f].y,u.z-n[f].z).normalize();let p=d.userData.r;d.position.set(u.x+sn.x*p*.45,u.y+sn.y*p*.45,u.z+sn.z*p*.45),d.quaternion.setFromUnitVectors(Wd,sn),d.scale.set(p*1.06,p*.55,p*1.06)}let c=s.flash>0?.55:0;this.mat.emissive.setScalar(c)}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var _h=4.6,_l=.95,z_=-1.95,k_=1.7,H_=1.5,V_=230,G_=23,Zd=15,W_=3.2,X_=2.2,gl=2,q_=[[1,0],[-1,0],[0,-1],[.7,-.7],[-.7,-.7],[.75,.5],[-.75,.5]],Y_=Ds(),Z_=Ds(),J_=Ds(),xl=[0,0,0,0,0,0],yl=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.vx=0,this.vz=0,this.vy=0,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.t=Et(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.state="approach",this.timer=Et(.6,1.2),this.cool=Et(.3,.9)*Ft(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=hh(this.S),this.footR=.07*this.S,this.pose=Ns.guard(Ds(),0),this.tpose=Ds(),this.local=new Float32Array(pi*3),this.world=new Float32Array(pi*3),ph(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new cl(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.swordMesh=Vd(_l),this.swordMesh.scale.setScalar(this.S),this.view=new ml(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,s=this.world;for(let r=0;r<pi;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];s[r*3]=this.x-e*a+t*l,s[r*3+1]=this.y+o,s[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let s=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+s*t[2],e[n+1]=t[1],e[n+2]=s*t[0]+r*t[2]}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.isPlayer?(this.thinkPlayer(),this.updateAim(t)):this.thinkEnemy(t),this.move(t),!!this.alive)){if(this.isPlayer){let e=Zn(this.swYaw-this.yaw);e>gl?this.yaw=this.swYaw-gl:e<-gl&&(this.yaw=this.swYaw+gl)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let s=Math.hypot(t,e)||1;t/=s,e/=s;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:z_,a1:k_,wind:n?.05:Ft(.62,.24,r)*(this.counterT>0?.6:1),dur:n?.2:.24,rec:n?.18:Ft(.55,.35,r),hits:new Set,rolled:new Set,kills:0},this.game.onSwingStart(this)}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.isPlayer)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}thinkPlayer(){let t=this.game,n=t.input.move(),s=Math.sin(t.camYaw),r=Math.cos(t.camYaw),a=s*n.y-r*n.x,o=r*n.y+s*n.x,l=Math.hypot(a,o)||1,c=ne((n.mag-.4)/.45,0,1)*_h;this.want.x=a/l*c,this.want.z=o/l*c,n.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(a,o))}updateAim(t){let e=Zn(this.aimYaw-this.swYaw);this.swW=ne(this.swW+(V_*e-G_*this.swW)*t,-Zd,Zd),this.swYaw=Zn(this.swYaw+this.swW*t),this.faceYaw=this.swYaw;let n=Math.abs(this.swW),s=Math.sign(this.swW);n>W_&&this.hasSword?(!this.episode||this.episode.dir!==s)&&(this.episode={hits:new Set,rolled:new Set,kills:0,dir:s,ux:-s,uy:0},this.game.onSwingStart(this)):n<X_&&(this.episode=null)}thinkEnemy(t){let e=this.game,n=e.player,s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(s,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=1.55*this.S;switch(!n.alive&&this.state!=="panic"&&(this.state="cheer"),this.state){case"approach":a>o+.2?(this.want.x=s/a*this.speed,this.want.z=r/a*this.speed):this.state="fight";break;case"fight":{this.timer<=0&&(this.strafeDir*=-1,this.timer=Et(.8,1.8));let l=r/a,c=-s/a,h=a-o,d=.9+this.skill*.6,u=Math.atan2(-s,-r),f=0;for(let x of e.enemies){if(x===this||!x.alive||x.state==="panic")continue;let g=Math.atan2(x.x-n.x,x.z-n.z)-u,m=Math.atan2(Math.sin(g),Math.cos(g));Math.abs(m)<1.6&&(f-=Math.sign(m)*(1.6-Math.abs(m)))}let p=this.strafeDir*d*.6+f*(1.2+this.skill*1.5);if(this.want.x=l*-p+s/a*ne(h*3,-2,this.speed),this.want.z=c*-p+r/a*ne(h*3,-2,this.speed),this.counterT>0&&a<o+.5||this.cool<=0&&a<o+.35+this.skill*.5&&e.takeAttackToken(this)){let[x,g]=ll(q_);this.startSwing(x,g,!1),this.state="attack"}break}case"attack":if(!this.swing)this.state="fight",this.cool=Et(.5,1.3)*Ft(1.3,.55,this.skill);else if(this.swingMode()>=1&&this.swingMode()<=2&&a>o*.8){let l=1.5+this.skill*1.8;this.want.x=s/a*l,this.want.z=r/a*l}break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=Et(.2,.6));break;case"panic":{let l=Math.min(this.speed*1.2,3.6);this.want.x=-s/a*l,this.want.z=-r/a*l,this.faceYaw=Math.atan2(-s,-r);break}case"cheer":this.y<=0&&!this.falling&&Math.random()<t*2.2&&(this.vy=Et(3.2,4.5));break}}move(t){let e=this.game.world,n=this.want.x,s=this.want.z;if(this.swingMode()===2&&this.isPlayer&&(n*=.45,s*=.45),(this.stun>0||this.hurtT>0)&&(n*=.2,s*=.2),this.kb>0){let l=Math.exp(-5*t);this.vx*=l,this.vz*=l}else{let l=(this.isPlayer?32:14)*t,c=n-this.vx,h=s-this.vz,d=Math.hypot(c,h);d>l?(this.vx+=c/d*l,this.vz+=h/d*l):(this.vx=n,this.vz=s)}if(this.falling)this.x+=this.vx*t,this.z+=this.vz*t;else{let l=this.x+this.vx*t,c=this.z+this.vz*t,h=.35*this.S;e.inside(l,c,h)||this.kb>0&&e.canFall?(this.x=l,this.z=c):e.inside(l,this.z,h)?(this.x=l,this.vz=0):e.inside(this.x,c,h)?(this.z=c,this.vx=0):(this.vx=0,this.vz=0),e.ground(this.x,this.z)===-1/0&&(this.falling=!0)}(this.falling||this.y>0||this.vy>0)&&(this.vy-=Nn*t,this.y+=this.vy*t,!this.falling&&this.y<=0&&(this.y=0,this.vy=0)),this.falling&&this.y<-.9&&this.game.onFell(this);let r=(this.isPlayer?8:7)*t;this.yaw=Pd(this.yaw,this.faceYaw,r);let a=Math.hypot(this.vx,this.vz),o=this.vx*this.forwardX+this.vz*this.forwardZ<-.3*a?-1:1;this.phase+=o*a*t/H_*Math.PI*2}animate(t){let e=this.tpose,n=Math.hypot(this.vx,this.vz);this.y>.05||this.falling?Ns.air(e,this.t):fh(e,Ns.guard(Y_,this.t),Ns.run(Z_,this.phase),ne(n/(this.isPlayer?3.2:2),0,1));let s=this.swingMode(),r=this.swing,a=0,o=0;if(this.isPlayer){let d=Zn(this.yaw-this.swYaw);e.twist=ne(d*.75,-1.1,1.1),e.lean+=ne(Math.abs(this.swW)/15,0,1)*.15}else if(s){let d=u=>r.ux*Math.sin(u)*.55;if(s===1){let u=Yr(r.t/r.wind);a=d(r.a0)*u,o=u*.5}else if(s===2){let u=qr((r.t-r.wind)/r.dur);a=d(Ft(r.a0,r.a1,u)),o=1}else{let u=Yr((r.t-r.wind-r.dur)/r.rec);a=d(r.a1)*(1-u),o=1-u}fh(e,e,Ns.lunge(J_),o*(n>1.5?.4:1)),e.twist=a,r.uy<-.5&&s===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.25,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.headP=-.4),Bd(this.pose,e,fi(s===2||this.isPlayer?24:12,t)),ph(this.pose,this.d,this.local,this.footR),this.computeSword(t),this.applyArms(),this.localToWorld();let l=this.rag,c=this.world;l.tgt.set(c),l.setVel(this.vx,this.vy,this.vz);let h=this.hasSword;l.pts[Q.LHAND].pin=h,l.pts[Q.RHAND].pin=h}computeSword(){let t=this.local,e=this.S,n=t[Q.NECK*3],s=t[Q.NECK*3+1],r=t[Q.NECK*3+2],a=t[Q.PELVIS*3],o=t[Q.PELVIS*3+1],l=t[Q.PELVIS*3+2],c=Ft(n,a,.28),h=Ft(s,o,.28),d=Ft(r,l,.28)+.1*e,u=[.38,.78,.5],f=Math.hypot(u[0],u[1],u[2]);u[0]/=f,u[1]/=f,u[2]/=f;let p=[c+.14*e,h-.16*e,d+.26*e],x=this.swing,g=this.swingMode(),m=.3*e,M=(U,z,P,O)=>{let W=Math.sin(U),V=Math.cos(U);z[0]=x.ux*W,z[1]=x.uy*W,z[2]=V,P[0]=x.ux*V,P[1]=x.uy*V,P[2]=-W,O[0]=c+z[0]*m,O[1]=h+z[1]*m,O[2]=d+z[2]*m},w=this.ld,y=this.lw,b=this.lg;if(this.isPlayer&&this.hasSword){let U=Zn(this.yaw-this.swYaw),z=ne(Math.abs(this.swW)/7,0,1),P=Ft(.45,.02,z)+Math.sin(this.phase)*.03,O=Math.sin(U),W=Math.cos(U),V=Math.cos(P);w[0]=O*V,w[1]=Math.sin(P),w[2]=W*V,y[0]=W,y[1]=0,y[2]=-O;let it=(.33+z*.07)*e;b[0]=c+O*it,b[1]=h-.1*e,b[2]=d-.1*e+W*it}else if(this.blockT>0&&!g){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(w[0]=1,w[1]=.15,w[2]=.2,b[0]=c-.3*e,b[1]=h+.38*e,b[2]=d+.22*e):(w[0]=.1,w[1]=1,w[2]=.15,b[0]=c+this.blockUx*.3*e,b[1]=h-.05*e,b[2]=d+.3*e);let U=Math.hypot(w[0],w[1],w[2]);w[0]/=U,w[1]/=U,w[2]/=U,y[0]=0,y[1]=0,y[2]=1}else if(!g||!this.hasSword)w[0]=u[0],w[1]=u[1],w[2]=u[2],y[0]=1,y[1]=0,y[2]=0,b[0]=p[0],b[1]=p[1],b[2]=p[2];else if(g===2){let U=qr((x.t-x.wind)/x.dur);M(Ft(x.a0,x.a1,U),w,y,b),b[2]+=.08*e*U}else{let U=[0,0,0],z=[0,0,0],P=[0,0,0],O;g===1?(M(x.a0,U,z,P),O=1-Yr(x.t/x.wind)):(M(x.a1,U,z,P),O=Yr((x.t-x.wind-x.dur)/x.rec));for(let V=0;V<3;V++)w[V]=Ft(U[V],u[V],O),y[V]=Ft(z[V],V===0?1:0,O),b[V]=Ft(P[V],p[V],O);let W=Math.hypot(w[0],w[1],w[2])||1;w[0]/=W,w[1]/=W,w[2]/=W}let E=Math.sin(this.yaw),R=Math.cos(this.yaw),_=this.sw;_.gx=this.x-R*b[0]+E*b[2],_.gy=this.y+b[1],_.gz=this.z+E*b[0]+R*b[2],_.dx=-R*w[0]+E*w[2],_.dy=w[1],_.dz=E*w[0]+R*w[2],_.wx=-R*y[0]+E*y[2],_.wy=y[1],_.wz=E*y[0]+R*y[2];let T=gi*e,C=(gi+_l)*e,D=this.bCur;D.bx=_.gx+_.dx*T,D.by=_.gy+_.dy*T,D.bz=_.gz+_.dz*T,D.tx=_.gx+_.dx*C,D.ty=_.gy+_.dy*C,D.tz=_.gz+_.dz*C}copyBlade(){let t=this.bCur,e=this.bPrev;e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,s=this.lg,r=this.ld,a=[[Q.RSH,Q.RELB,Q.RHAND,.05*e,.8],[Q.LSH,Q.LELB,Q.LHAND,-.065*e,-.8]];for(let[o,l,c,h,d]of a){let u=s[0]+r[0]*h,f=s[1]+r[1]*h,p=s[2]+r[2]*h;zd(t[o*3],t[o*3+1],t[o*3+2],u,f,p,n.ua,n.fa,d,-1,-.3,xl),t[l*3]=xl[0],t[l*3+1]=xl[1],t[l*3+2]=xl[2],t[c*3]=u,t[c*3+1]=f,t[c*3+2]=p}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;!t[Q.LHAND].attached&&!t[Q.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function K_(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new Ii(i)}var Kr=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new Se,this.attr=new Ae(this.pos,3),this.attr.setUsage(Lc),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new hr(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max&&this.list.shift(),this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},vl=class{constructor(t){let e=K_();this.blood=new Kr(t,2600,new ii({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.spark=new Kr(t,400,new ii({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new Kr(t,600,new ii({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.maxDecals=700;let n=new fr(1,12).rotateX(-Math.PI/2),s=new Ci({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new Xn(n,s,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new ee,this._q=new Ze,this._s=new I,this._p=new I,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,s,r,a,o,l,c){let h=Math.hypot(s,r,a)||1,d=s/h,u=r/h,f=a/h;for(let p=0;p<o;p++){let x=c*Et(.25,1.15);this.blood.add({x:t,y:e,z:n,vx:(d+Et(-l,l))*x,vy:(u+Et(-l,l))*x+Et(0,1),vz:(f+Et(-l,l))*x,life:Et(1,2)})}}sparks(t,e,n,s){for(let r=0;r<s;r++)this.spark.add({x:t,y:e,z:n,vx:Et(-5,5),vy:Et(-2,5),vz:Et(-5,5),life:Et(.15,.35)})}splash(t,e,n){for(let s=0;s<40;s++)this.water.add({x:t+Et(-.3,.3),y:e,z:n+Et(-.3,.3),vx:Et(-1.5,1.5),vy:Et(2,6),vz:Et(-1.5,1.5),life:Et(.5,1)})}bleed(t,e,n){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0})}popup(t,e,n,s,r,a,o){let l=0;for(let c of this.popups)c.age<.4&&Math.hypot(c.x-t,c.z-n)<1.2&&l++;this.popups.push({x:t,y:e+l*.42,z:n,text:s,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,s){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),Et(0,Math.PI));let a=s*Et(.8,1.4);r.compose(this._p,this._q,new I(a,1,s)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let r of this.bleeders){r.t+=t;let a=r.rag;if(a.removed){r.t=r.dur;continue}let o=a.pts[r.idx],l=a.neighborOf(r.idx);if(l<0)continue;let c=a.pts[l],h=o.x-c.x,d=o.y-c.y,u=o.z-c.z,f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let p=1-r.t/r.dur,x=.55+.45*Math.sin(r.t*16);r.acc+=t*120*p*x;let g=(o.x-o.px)/t,m=(o.y-o.py)/t,M=(o.z-o.pz)/t;for(;r.acc>=1;){r.acc-=1;let w=Et(1.5,3.8)*(.4+p);this.blood.add({x:o.x,y:o.y,z:o.z,vx:h*w+Et(-.6,.6)+g*.5,vy:d*w+Et(-.6,.6)+m*.5,vz:u*w+Et(-.6,.6)+M*.5,life:Et(.8,1.5)})}}this.bleeders=this.bleeders.filter(r=>r.t<r.dur);let n=this.blood.list,s=0;for(let r=0;r<n.length;r++){let a=n[r];a.life-=t,a.vy-=Nn*.8*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let o=e.ground(a.x,a.z);if(a.y<=o+.01){Math.random()<.55&&this.addDecal(a.x,o,a.z,Et(.025,.07));continue}a.y<e.waterY||a.life>0&&(n[s++]=a)}n.length=s;for(let r of[this.spark,this.water]){let a=r.list,o=0;for(let l=0;l<a.length;l++){let c=a[l];c.life-=t,r===this.spark?(c.vx*=.92,c.vz*=.92,c.vy-=6*t):c.vy-=Nn*.6*t,c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life>0&&(a[o++]=c)}a.length=o}for(let r of this.popups)r.age+=t,r.y+=.5*t;this.popups=this.popups.filter(r=>r.age<r.life)}flush(){this.blood.flush(),this.spark.flush(),this.water.flush()}};function Kd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Se,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Jd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Jd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Jd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ae(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Bi(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Ii(s);return r.colorSpace=Fe,n&&(r.wrapS=r.wrapT=Ti,r.repeat.set(n,n)),r.anisotropy=8,r}function $_(i,t,e){let s=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*s,(o+.15+Math.random()*.7)*s,Math.random()]);let a=i.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/s),h=Math.floor(o/s),d=1e9,u=1e9,f=0;for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){let w=(c+M+7)%7,y=(h+m+7)%7,b=r[y*7+w],E=b[0]+(c+M-w)*s,R=b[1]+(h+m-y)*s,_=Math.hypot(E-l,R-o);_<d?(u=d,d=_,f=b[2]):_<u&&(u=_)}let p=ne((u-d)/5,0,1),x=(o*t+l)*4,g=222+f*18-d/s*18;a.data[x]=yh(120,g-14,p),a.data[x+1]=yh(160,g+6,p),a.data[x+2]=yh(200,g+20,p),a.data[x+3]=255}i.putImageData(a,0,0)}function yh(i,t,e){return i+(t-i)*e}function Q_(i,t,e){i.fillStyle="#4c9427",i.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];i.lineCap="round";for(let s=0;s<4200;s++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;i.strokeStyle=n[s%n.length],i.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])i.beginPath(),i.moveTo(r+c,a+h),i.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),i.stroke()}}function j_(i,t,e){i.fillStyle="#d9a66e",i.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)i.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",i.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);i.strokeStyle="rgba(170,120,70,0.25)",i.lineWidth=2;for(let n=8;n<e;n+=22){i.beginPath();for(let s=0;s<=t;s+=8)i.lineTo(s,n+Math.sin(s/t*Math.PI*4+n)*4);i.stroke()}}function ty(i,t,e){i.clearRect(0,0,t,e);let n=t/2;i.strokeStyle="#6f9a2b",i.lineWidth=3,i.beginPath(),i.moveTo(n,e),i.quadraticCurveTo(n+4,e*.5,n,6),i.stroke();for(let s=0;s<26;s++){let r=s/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;i.fillStyle=l;for(let c of[-1,1])i.save(),i.translate(n,a),i.rotate(c*(1.05-r*.25)),i.beginPath(),i.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),i.fill(),i.restore()}}function ey(i,t,e){i.clearRect(0,0,t,e),i.lineCap="round";for(let n=0;n<18;n++){let s=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;i.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],i.lineWidth=2+Math.random()*2,i.beginPath(),i.moveTo(s,e),i.quadraticCurveTo(s,e*.6,s+a,r),i.stroke()}}function ny(i,t,e){i.clearRect(0,0,t,e);for(let n=0;n<14;n++){let s=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(s,r,a,0,Math.PI*2),i.fill()}}function $d(i,t,e,n){let s=new gs(i,t,11,6);s.index&&(s=s.toNonIndexed());let r=s.attributes.position,a=new I;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);let u=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,f=1-(a.y+t/2)/t;a.x+=(Un(u)-.5)*i*.35*f,a.z+=(Un(u+1)-.5)*i*.35*f,a.y+=(Un(u+2)-.5)*t*.12*f,r.setXYZ(d,a.x,a.y,a.z)}s.computeVertexNormals();let o=new Float32Array(r.count*3),l=s.attributes.normal,c=new Ot;for(let d=0;d<r.count;d+=3){let f=((r.getY(d)+r.getY(d+1)+r.getY(d+2))/3+t/2)/t,p=l.getY(d);f>.82?c.set(n.snow):p>.55&&f<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(Un(d*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(d+x)*3]=c.r,o[(d+x)*3+1]=c.g,o[(d+x)*3+2]=c.b}s.setAttribute("color",new Ae(o,3));let h=new Vt(s,new me({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function Qd(i,t,e){let n=new xs(i,0);n.index&&(n=n.toNonIndexed());let s=n.attributes.position;for(let a=0;a<s.count;a++){let o=Math.round(s.getX(a)*50)+Math.round(s.getY(a)*30)*3+Math.round(s.getZ(a)*70)*7+t;s.setXYZ(a,s.getX(a)*(1+(Un(o)-.5)*.3),s.getY(a)*.7,s.getZ(a)*(1+(Un(o+3)-.5)*.3))}n.computeVertexNormals();let r=new Vt(n,new me({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function jd(i,t,e,n){let s=[];for(let o=0;o<i;o++){let l=new Cn(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/i*Math.PI*2+Math.random()*.5),s.push(l)}let r=Kd(s),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function tf(i,t,e,n,s,r,a,o){let l=new Xn(i,t,e),c=new ee,h=new Ze,d=new I,u=new I,f=new I(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let g=Math.random()*Math.PI*2,m=n+Math.sqrt(Math.random())*(s-n),M=Math.cos(g)*m,w=Math.sin(g)*m;if(o&&o(M,w))continue;let y=r+Math.random()*(a-r);u.set(M,0,w),h.setFromAxisAngle(f,Math.random()*Math.PI*2),d.set(y,y*(.8+Math.random()*.4),y),c.compose(u,h,d),l.setMatrixAt(p++,c)}return l.count=p,l}function iy(){let i=new Ve({uniforms:{top:{value:new Ot},horizon:{value:new Ot},bottom:{value:new Ot}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:Ie,depthWrite:!1,fog:!1}),t=new Vt(new In(400,32,16),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function sy(i,t){let e=tl.merge([gt.fog,{time:{value:0},deep:{value:new Ot(i)},light:{value:new Ot(t)}}]);return new Ve({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
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
      }`})}var Ml=class{constructor(t){this.scene=t,this.t=0,this.sky=iy(),t.add(this.sky),this.hemi=new Ar(16777215,7829367,1.1),t.add(this.hemi);let e=new Pr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new I(.5,1,.35).normalize(),this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo()};for(let s of Object.values(this.envs))s.group.visible=!1,t.add(s.group);this.env=null}set(t){this.env&&(this.env.group.visible=!1);let e=this.envs[t];this.env=e,this.name=t,e.group.visible=!0;let n=this.sky.material.uniforms;n.top.value.set(e.sky[0]),n.horizon.value.set(e.sky[1]),n.bottom.value.set(e.sky[2]),this.scene.fog=new sr(e.sky[1],e.fog[0],e.fog[1]),this.hemi.color.set(e.hemi[0]),this.hemi.groundColor.set(e.hemi[1]),this.hemi.intensity=e.hemi[2],this.sun.color.set(e.sun[0]),this.sun.intensity=e.sun[1],this.sunDir.set(e.sun[2],e.sun[3],e.sun[4]).normalize(),this.waterY=e.waterY,this.canFall=e.canFall}ground(t,e){return this.env.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))?0:-1/0:0}inside(t,e,n){let s=this.env;return s.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n:Math.hypot(t,e)<s.radius-n}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let s=0;s<n;s++){let r=e[s],a=e[(s+1)%n],o=s+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,d=a.z-r.z,u=l*d-c*h;return Math.abs(u)<1e-9?r.r:(r.x*d-r.z*h)/u}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e),this.sun.position.set(t+n.x*30,n.y*30,e+n.z*30)}update(t,e){this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t);for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,s,r){let a=Bi(256,128,ny),o=[];for(let l=0;l<e;l++){let c=new fs(new Ri({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,d=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*d,Et(s,r),Math.sin(h)*d);let u=Et(60,120);c.scale.set(u,u*.45,1),t.add(c),o.push(c)}return o}buildMeadow(){let t=new Ne,e=Bi(256,256,Q_,70),n=new Vt(new Cn(300,300),new me({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new me({map:Bi(128,256,ty),alphaTest:.45,side:nn,roughness:.9}),r=(l,c)=>Math.hypot(l,c)<6&&Math.random()<.85;t.add(tf(jd(6,.42,1,.75),s,320,1.5,45,.6,1.5,r));let a=new me({map:Bi(64,64,ey),alphaTest:.4,side:nn,roughness:1});t.add(tf(jd(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let l=0;l<14;l++){let c=l/14*Math.PI*2+Et(-.15,.15),h=Et(85,130),d=$d(Et(28,50),Et(26,55),l*13.7,o);d.position.x=Math.cos(c)*h,d.position.z=Math.sin(c)*h,t.add(d)}for(let l=0;l<16;l++){let c=Math.random()*Math.PI*2,h=Et(15,30),d=Qd(Et(.6,2.2),l*31,9078398);d.position.set(Math.cos(c)*h,0,Math.sin(c)*h),t.add(d)}return{group:t,radius:13,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new Ne,e=9,n=[];for(let f=0;f<e;f++){let p=f/e*Math.PI*2+Et(-.12,.12)-Math.PI,x=Et(7.4,8.8);n.push({a:p,r:x,x:Math.cos(p)*x,z:Math.sin(p)*x})}let s=new ys;n.forEach((f,p)=>p?s.lineTo(f.x,-f.z):s.moveTo(f.x,-f.z)),s.closePath();let r=new Sr(s,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=Bi(256,256,$_);a.wrapS=a.wrapT=Ti,a.repeat.set(.28,.28);let o=new me({map:a,roughness:.35,metalness:0}),l=new me({color:8829408,roughness:.3}),c=new Vt(r,[o,l]);c.receiveShadow=!0,t.add(c);let h=new Vt(new Cn(500,500),sy(4869570,9080816));h.rotation.x=-Math.PI/2,h.position.y=-.35,t.add(h);let d=new me({color:10930408,roughness:.35,flatShading:!0}),u=(f,p,x,g,m,M)=>{let w=new Ye(f,p,x,3,6,3);w.index&&(w=w.toNonIndexed());let y=w.attributes.position;for(let E=0;E<y.count;E++){let R=Math.round(y.getX(E)*10)*3.3+Math.round(y.getY(E)*10)*1.7+Math.round(y.getZ(E)*10)*5.1+M;y.setXYZ(E,y.getX(E)+(Un(R)-.5)*f*.25,y.getY(E)+(Un(R+1)-.5)*.6,y.getZ(E)+(Un(R+2)-.5)*x*.25)}w.computeVertexNormals();let b=new Vt(w,d);b.position.set(g,p/2-1.5,m),b.rotation.y=Et(0,Math.PI),t.add(b)};u(7,20,6,9,34,1),u(5,9,5,-30,26,2),u(9,6,7,-18,-40,3),u(4,13,4,38,-12,4);for(let f=0;f<12;f++){let p=Math.random()*Math.PI*2,x=Et(11,30),g=Qd(Et(.4,1.3),f*7,14281978);g.position.set(Math.cos(p)*x,-.35,Math.sin(p)*x),g.castShadow=!1,t.add(g)}return{group:t,floe:n,water:h,waterY:-.35,canFall:!0,radius:8,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}buildDojo(){let t=new Ne,e=Bi(256,256,j_,60),n=new Vt(new Cn(300,300),new me({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new me({color:10127992,flatShading:!0,roughness:.9});for(let f=0;f<44;f++){let p=f/44*Math.PI*2,x=new Vt(new xs(Et(.22,.34),0),s);x.position.set(Math.cos(p)*11.6,.08,Math.sin(p)*11.6),x.castShadow=!0,t.add(x)}let r=new me({color:13116958,roughness:.6}),a=new me({color:2759190,roughness:.7}),o=new Ne;for(let f of[-2.6,2.6]){let p=new Vt(new qn(.28,.34,6,12),r);p.position.set(f,3,0),o.add(p)}let l=new Vt(new Ye(7.6,.45,.6),a);l.position.y=6.2;let c=new Vt(new Ye(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),o.position.set(0,0,18),t.add(o);for(let[f,p]of[[-6,15],[6,15],[-15,-4],[15,-4],[-9,-14],[9,-14]]){let x=new Ne,g=new Vt(new qn(.35,.45,1.2,8),s);g.position.y=.6;let m=new Vt(new Ye(.8,.6,.8),s);m.position.y=1.5;let M=new Vt(new gs(.75,.5,4),s);M.position.y=2.05,M.rotation.y=Math.PI/4,x.add(g,m,M),x.traverse(w=>{w.isMesh&&(w.castShadow=!0)}),x.position.set(f,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let f=0;f<12;f++){let p=f/12*Math.PI*2,x=$d(Et(40,70),Et(10,22),f*5.3,h);x.position.x=Math.cos(p)*Et(90,130),x.position.z=Math.sin(p)*Et(90,130),t.add(x)}let d=Bi(128,128,(f,p)=>{let x=f.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),f.fillStyle=x,f.fillRect(0,0,p,p)}),u=new fs(new Ri({map:d,fog:!1,depthWrite:!1}));return u.position.set(0,38,190),u.scale.set(90,90,1),t.add(u),{group:t,radius:11,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var ry=55,Sl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=ry,window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&(this.stick.id=null)}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){Ce.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n})}drag(t,e){let n=this.stick;n.x=t,n.y=e;let s=t-n.ox,r=e-n.oy,a=Math.hypot(s,r),o=this.stickR*1.3;a>o&&(n.ox=t-s/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),Ce.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&(this.stick.id=null)}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=ne((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let s=Math.hypot(t,e);return s>1&&(t/=s,e/=s,s=1),{x:t,y:e,mag:s}}clear(){this.anyPress=!1}endFrame(){this.anyPress=!1}};var ay='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',oy='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',bl=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="hearts"></div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${ay}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${oy}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.hearts=n.querySelector("#hearts"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let s=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("mousedown",s);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}setHearts(t,e){let n="";for(let s=0;s<e;s++)n+=`<span class="${s<t?"on":""}">\u2665</span>`;this.hearts.innerHTML=n}show(t,e,n,s){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(s||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,s){let r=this.ctx,a=this.dpr;r.setTransform(a,0,0,a,0,0),r.clearRect(0,0,this.W,this.H);let o=ne(Math.min(this.W,this.H)/400,.8,1.6),l=n.stick;if(l.id!==null||n.touchMode&&s>0){let c=n.stickR,h=l.id!==null,d=h?l.ox:this.W/2,u=h?l.oy:this.H-120*o;r.globalAlpha=h?.45:.25*ne(s,0,1),r.strokeStyle="#fff",r.fillStyle="#fff",r.lineWidth=3,r.beginPath(),r.arc(d,u,c,0,Math.PI*2),r.stroke();let f=d,p=u;if(h){let x=l.x-l.ox,g=l.y-l.oy,m=Math.hypot(x,g),M=Math.min(m,c)/(m||1);f+=x*M,p+=g*M}r.beginPath(),r.arc(f,p,c*.42,0,Math.PI*2),r.fill(),r.globalAlpha=1}r.textAlign="center",r.textBaseline="middle",r.lineJoin="round";for(let c of e){let h=t(c.x,c.y,c.z);if(!h)continue;let d=1+.6*Math.max(0,1-c.age/.1),u=1-Math.max(0,(c.age/c.life-.7)/.3),f=Math.round(c.size*o*d);r.globalAlpha=u,r.font=`900 ${f}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,r.lineWidth=Math.max(3,f*.2),r.strokeStyle="#1a0d14",r.strokeText(c.text,h.x,h.y),r.fillStyle=c.col,r.fillText(c.text,h.x,h.y)}if(r.globalAlpha=1,this.flash>0){let c=r.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);c.addColorStop(0,"rgba(210,0,20,0)"),c.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),r.fillStyle=c,r.fillRect(0,0,this.W,this.H)}s>0&&(r.globalAlpha=ne(s,0,1)*.9,r.font=`700 ${Math.round(14*o)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,r.fillStyle="#fff",r.strokeStyle="rgba(0,0,0,0.35)",r.lineWidth=3,(n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]).forEach((h,d)=>{let u=this.H*.72+d*22*o;r.strokeText(h,this.W/2,u),r.fillText(h,this.W/2,u)}),r.globalAlpha=1)}};var vh=1/120,ly=16753951,cy=10820863,hy=6951618,uy={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo"},dy=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function fy(i){let t=["meadow","ice","dojo"],e=t[(i-1)%t.length],n=ne((i-1)/24,0,1),s=i%5===0,r=[];if(s){r.push("boss");for(let a=0;a<Math.floor(i/10);a++)r.push("normal")}else{let a=Math.min(4,1+Math.floor((i-1)/3));for(let o=0;o<a;o++)r.push("normal")}return{env:e,skill:n,boss:s,enemies:r}}var _i=new I,wl=class{constructor(){let t=document.getElementById("gl"),e=new sl({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Fe,e.toneMapping=Lr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Li,this.renderer=e,this.scene=new Ai;let n=new Is(e);this.scene.environment=n.fromScene(new ol,.04).texture,this.scene.environmentIntensity=.85,this.camera=new Oe(55,1,.1,900),this.world=new Ml(this.scene),this.fx=new vl(this.scene);let s=document.getElementById("ui");this.input=new Sl(s),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new bl(this,s),this.soundOn=!0,this.highQuality=lh("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new I,this.hintT=8,this.lastH=vh,this.lastAttackT=-9,this._bb={},this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(lh("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=ne(2*Math.atan(Math.tan(Uc.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,ch("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){Ce.init(),Ce.toggleMute(),this.soundOn=!Ce.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),mh(t.swordMesh));for(let t of this.loose)this.scene.remove(t.mesh),mh(t.mesh);this.chars=[],this.enemies=[],this.loose=[],this.fx.clear()}addChar(t){let e=new yl(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),this.chars.push(e),e}startLevel(t,e=3){this.clearLevel(),this.level=t,ch("rk3dLevel",t);let n=fy(t);this.spec=n,this.world.set(n.env),this.player=this.addChar({team:"player",x:0,z:-3.2,yaw:0,hp:3,color:ly,speed:_h}),this.player.hp=ne(e,1,3);let s=n.enemies.length;n.enemies.forEach((r,a)=>{let o=r==="boss";this.enemies.push(this.addChar({team:"enemy",x:(a-(s-1)/2)*1.9,z:3.6+a%2*.9,yaw:Math.PI,hp:o?3:1,armored:o,scale:o?1.38:1,skill:n.skill,color:o?hy:cy,speed:o?2.1:Ft(2.1,3.3,n.skill)}))}),this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t),this.hud.setHearts(this.player.hp,this.player.maxHp),this.hud.show(`SEV\u0130YE ${t}`,n.boss?"BOSS!":uy[n.env],1.5,n.boss?"boss":""),this.input.clear()}restartLevel(){this.startLevel(this.level)}frame(t){this.slowT>0?(this.slowT-=t,this.timeScale=Ft(this.timeScale,this.slowScale,fi(40,t))):this.timeScale=Ft(this.timeScale,1,fi(6,t));let e=t*this.timeScale;if(e>1e-5){let n=Math.ceil(e/vh-1e-6),s=e/n;for(let r=0;r<n;r++)this.step(s)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1,this.player.hp+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t;for(let s of this.chars)s.copyBlade(),s.update(t);this.separate();let e=this.world,n=this.lastH;for(let s of this.chars){let r=s.rag;r.step(t,n,e),!s.alive&&r.impact>6&&Ce.thud(r.impact*250),r.impact=0;let a=r.pts[Q.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),Ce.splash())}for(let s of this.loose)s.step(t,n,e);this.combat(t),this.fx.update(t,e),this.lastH=t}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,s=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<s&&(s=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let s of this.enemies)s.alive&&s.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<Ft(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars;for(let e=0;e<t.length;e++){let n=t[e];if(!(!n.alive||n.falling))for(let s=e+1;s<t.length;s++){let r=t[s];if(!r.alive||r.falling)continue;let a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o),c=.34*(n.S+r.S);if(l<c&&l>1e-4){let h=(c-l)*.5,d=a/l,u=o/l;this.world.inside(n.x-d*h,n.z-u*h,.3)&&(n.x-=d*h,n.z-=u*h),this.world.inside(r.x+d*h,r.z+u*h,.3)&&(r.x+=d*h,r.z+=u*h)}}}}knock(t,e,n,s){let r=Math.hypot(e,n)||1;t.vx+=e/r*s,t.vz+=n/r*s,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0||e.swing)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<Ft(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.isPlayer){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null;return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=Ft(e.a0,e.a1,qr((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword=!1;let e=t.sw,n=this.h||vh,s={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(gi+_l)*t.S;this.loose.push(new dl(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},s,r)),t.swordMesh=null}combat(t){for(let e of this.chars){if(!e.alive||!e.swingActive)continue;let n=e.bPrev,s=e.bCur,r=Math.min(n.bx,n.tx,s.bx,s.tx)-.2,a=Math.max(n.bx,n.tx,s.bx,s.tx)+.2,o=Math.min(n.by,n.ty,s.by,s.ty)-.2,l=Math.max(n.by,n.ty,s.by,s.ty)+.2,c=Math.min(n.bz,n.tz,s.bz,s.tz)-.2,h=Math.max(n.bz,n.tz,s.bz,s.tz)+.2,d=e.isPlayer?this.enemies:[this.player];for(let u of d){let f=e.isPlayer?e.episode:e.swing;if(!f)break;if(f.hits.has(u)||!e.isPlayer&&!u.alive)continue;let p=u.rag.bounds(this._bb);if(p.x1<r||p.x0>a||p.y1<o||p.y0>l||p.z1<c||p.z0>h)continue;if(u.alive&&u.hasSword){let b=Ud(n,s,u.bCur,3,.05);if(b){if(u.swingActive){this.parry(e,u,b);break}if(u.isPlayer&&!f.rolled.has(u)&&(f.rolled.add(u),Math.random()<.35)){this.block(e,u,b);break}}}let x=uh(u.rag,n,s,4);if(!x)continue;if(!u.isPlayer&&u.alive&&u.hasSword&&u.stun<=0&&!u.swing&&u.state!=="panic"&&!f.rolled.has(u)&&(f.rolled.add(u),Math.random()<Ft(.12,.65,u.skill))){u.blockT=.35,u.blockUx=f.ux,u.blockUy=f.uy,u.counterT=.3,this.block(e,u,x);break}f.hits.add(u);let g=Ft(s.bx-n.bx,s.tx-n.tx,x.t)/t,m=Ft(s.by-n.by,s.ty-n.ty,x.t)/t,M=Ft(s.bz-n.bz,s.tz-n.tz,x.t)/t,w=Math.hypot(g,m,M)||1,y=ne(w,4,13);g=g/w*y,m=m/w*y,M=M/w*y,this.onHit(e,u,x,g,m,M)}}this.poke()}poke(){let t=this.player;if(!(!t.alive||!t.hasSword||t.swingActive||t.pokeCd>0))for(let e of this.enemies){if(!e.alive||e.kb>0)continue;let n=uh(e.rag,t.bPrev,t.bCur,2);if(n){if(e.state==="panic"){this.fx.popup(e.x,2.3*e.S,e.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,e,n,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),e.alive&&this.killEnemy(e,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(e,t.sw.dx,t.sw.dz,2.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,Ce.punch();break}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let s of[t,e])s.stun=.35,s.isPlayer||(s.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),Ce.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),Ce.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,s=e.u;return e.head&&(n=t.boneWith(Q.HEAD),n>=0&&(s=t.bones[n].b===Q.HEAD?.7:.3)),n<0||t.bones[n].len<Nd*t.S?null:t.cut(n,s)}gore(t,e,n,s,r,a){let o=this.h;if(e){let l=t.comp[e.i1],c=t.comp[e.i2],h=t.compSize(l)<t.compSize(c)?l:c;t.addVel(s*.35,r*.35+2,a*.35,o,h),this.fx.spray(e.x,e.y,e.z,s,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,Et(1.2,2.2)),this.fx.bleed(t,e.i2,Et(1.2,2.2)),this.fx.sparks(e.x,e.y,e.z,5),Ce.slice()}else this.fx.spray(n.x,n.y,n.z,s,r,a,16,.7,3),Ce.wound()}onHit(t,e,n,s,r,a){let o=e.rag,l=e.alive;if(e.isPlayer&&l){if(e.invuln>0)return;if(e.hp--,this.hud.setHearts(e.hp,e.maxHp),this.hud.flash=.6,this.shake(.15),e.hp>0){this.cancelSwing(e),e.hurtT=.35,e.invuln=.8,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,4.5),o.addVel(s*.25,1.5,a*.25,this.h),this.fx.spray(n.x,n.y,n.z,s,r,a,18,.7,3),Ce.hurt(),Ce.wound(),this.slowmo(.15,.35);return}}let h=l&&e.armored&&e.hp>1?null:this.applyCut(o,n);if(o.addVel(s*.2,r*.2+.6,a*.2,this.h),this.gore(o,h,n,s,r,a),t.swordMesh){let d=t.swordMesh.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),d.color.setRGB(Ft(.89,.75,t.blood),Ft(.91,.12,t.blood),Ft(.93,.15,t.blood))}if(l){if(e.isPlayer){e.die(),e.rag.addVel(s*.5,3,a*.5,this.h),this.lose();return}if(h&&h.kind==="arm"){e.checkGrip(),e.flash=.1,e.hasSword?(e.stun=.45,e.state="stagger",this.fx.popup(e.x,2.1*e.S,e.z,"KOLSUZ!","#ffd23f",18,1)):(e.state="panic",this.fx.popup(e.x,2.1*e.S,e.z,"AAAA!","#fff",22,1.2)),this.knock(e,s,a,2.5),this.slowmo(.08,.35);return}if(h?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,s,a,3),this.fx.popup(e.x,2.3*e.S,e.z,`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,h,s,r,a)}}killEnemy(t,e,n,s,r,a){t.die();let o=this.h;t.rag.addVel(s*.45,r*.3+2.5,a*.45,o),t.rag.addSpin(Et(-5,5),Et(-3,3),Et(-5,5),o);let l=2.2*t.S;n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"&&this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2));let c=e?e.isPlayer?e.episode:e.swing:null;c&&(c.kills++,c.kills>=2&&this.fx.popup(e.x,2.6,e.z,c.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),Ce.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){this.phase==="play"&&(this.enemies.some(t=>t.alive)||(this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",this.player.hp<3?`Lv ${this.level} ge\xE7ildi  \xB7  +1 \u2665`:`Lv ${this.level} ge\xE7ildi`,2.6,"win"),Ce.win()))}lose(){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),Ce.die(),this.hud.show("\xD6LD\xDCN",`${ll(dy)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){t.alive&&(t.die(),this.fx.popup(t.x,1.2,t.z,"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?(this.hud.setHearts(0,t.maxHp),this.lose()):(Ce.combo(5),this.checkWin()))}updateCamera(t,e){let n=this.player,s=n.rag.pts[Q.PELVIS],r=n.alive?n.x:s.x,a=n.alive?n.z:s.z,o=this.camTarget,l=n.alive?this.nearestEnemy(n,14):null;(!o||!o.alive||o.state==="panic"&&l&&l.state!=="panic"||l&&l!==o&&Math.hypot(l.x-r,l.z-a)<.6*Math.hypot(o.x-r,o.z-a))&&(o=l),this.camTarget=o;let c=this.camYaw;o&&n.alive?c=Math.atan2(o.x-r,o.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?c=n.yaw:n.alive||(c=this.camYaw+t*.3);let h=o&&Math.hypot(o.x-r,o.z-a)<2.4;this.camYaw=e?c:this.camYaw+Zn(c-this.camYaw)*fi(h?.6:o?2.5:1.2,t);let d=this.H>this.W,u=d?4:4.1,f=d?3.5:2.6,p=Math.sin(this.camYaw),x=Math.cos(this.camYaw);_i.set(r-p*u,f+Math.max(0,n.y),a-x*u),e?this.camera.position.copy(_i):this.camera.position.lerp(_i,fi(7,t));let g=_i.set(r+p*1.9,d?.55:.8,a+x*1.9);e?this.lookAt.copy(g):this.lookAt.lerp(g,fi(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}project(t,e,n){return _i.set(t,e,n).project(this.camera),_i.z>1?null:{x:(_i.x+1)/2*this.W,y:(1-_i.y)/2*this.H}}render(t){for(let s of this.chars)if(s.view.update(t),s.alive&&s.hasSword&&s.swordMesh){let r=s.sw;gh(s.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz)}for(let s of this.loose)s.render();this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[Q.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT)}};function py(i){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(i)}var El=null;try{El=new wl}catch(i){py(i)}if(El){window.game=El;let i=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-i)/1e3));i=e,El.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
