(()=>{var ed=0,Xc=1,nd=2;var ji=1,id=2,Zs=3,Ci=0,De=1,Je=2,Jn=0,Ks=1,qc=2,Yc=3,Zc=4,sd=5;var Qi=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,dd=203,Kc=204,Jc=205,fd=206,pd=207,md=208,gd=209,xd=210,yd=211,_d=212,vd=213,Md=214,io=0,so=1,ro=2,Ls=3,ao=4,oo=5,lo=6,co=7,ko=0,Sd=1,bd=2,In=0,$c=1,jc=2,Qc=3,ta=4,th=5,eh=6,nh=7;var ih=300,Ii=301,ts=302,Ho=303,Vo=304,ea=306,gn=1e3,Hn=1001,ho=1002,Oe=1003,wd=1004;var na=1005;var He=1006,Go=1007;var Pi=1008;var nn=1009,sh=1010,rh=1011,Js=1012,Wo=1013,Pn=1014,yn=1015,Ln=1016,Xo=1017,qo=1018,$s=1020,ah=35902,oh=35899,lh=1021,ch=1022,_n=1023,Gn=1026,Li=1027,Yo=1028,Zo=1029,Ni=1030,Ko=1031;var Jo=1033,ia=33776,sa=33777,ra=33778,aa=33779,$o=35840,jo=35841,Qo=35842,tl=35843,el=36196,nl=37492,il=37496,sl=37488,rl=37489,oa=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,yl=37819,_l=37820,vl=37821,Ml=36492,Sl=36494,bl=36495,wl=36283,El=36284,la=36285,Tl=36286;var br=2300,uo=2301,eo=2302,Pc=2303,Lc=2400,Nc=2401,Dc=2402;var Ed=3200;var ca=0,Td=1,ui="",Be="srgb",wr="srgb-linear",Er="linear",me="srgb";var no=7680;var Ad=519,Rd=512,Cd=513,Id=514,Al=515,Pd=516,Ld=517,Rl=518,Nd=519,hh=35044,js=35048;var uh="300 es",Rn=2e3,Ns=2001;function vp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dd(){let s=Tr("canvas");return s.style.display="block",s}var _u={},Ds=null;function Ar(...s){let t="THREE."+s.shift();Ds?Ds("log",t,...s):console.log(t,...s)}function Ud(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Zt(...s){s=Ud(s);let t="THREE."+s.shift();if(Ds)Ds("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=Ud(s);let t="THREE."+s.shift();if(Ds)Ds("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Xi(...s){let t=s.join(" ");t in _u||(_u[t]=!0,Zt(...s))}function zd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fd={[io]:so,[ro]:lo,[ao]:co,[Ls]:oo,[so]:io,[lo]:ro,[co]:ao,[oo]:Ls},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=1234567,_r=Math.PI/180,Us=180/Math.PI;function Vn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function dh(s,t){return(s%t+t)%t}function Sp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function bp(s,t,e){return s!==t?(e-s)/(t-s):0}function vr(s,t,e){return(1-e)*s+e*t}function wp(s,t,e,n){return vr(s,t,1-Math.exp(-e*n))}function Ep(s,t=1){return t-Math.abs(dh(s,t*2)-t)}function Tp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ap(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Rp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Cp(s,t){return s+Math.random()*(t-s)}function Ip(s){return s*(.5-Math.random())}function Pp(s){s!==void 0&&(vu=s);let t=vu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lp(s){return s*_r}function Np(s){return s*Us}function Dp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Up(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*u,o*h,o*c);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fh={DEG2RAD:_r,RAD2DEG:Us,generateUUID:Vn,clamp:ne,euclideanModulo:dh,mapLinear:Sp,inverseLerp:bp,lerp:vr,damp:wp,pingpong:Ep,smoothstep:Tp,smootherstep:Ap,randInt:Rp,randFloat:Cp,randFloatSpread:Ip,seededRandom:Pp,degToRad:Lp,radToDeg:Np,isPowerOfTwo:Dp,ceilPowerOfTwo:Up,floorPowerOfTwo:zp,setQuaternionFromProperEuler:Fp,normalize:xe,denormalize:An},_h=class _h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;var ot=_h,je=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[a+0],u=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==d||c!==u||h!==p){let g=l*d+c*u+h*p+f*x;g<0&&(d=-d,u=-u,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),w=Math.sin(v);m=Math.sin(m*v)/w,o=Math.sin(o*v)/w,l=l*m+d*o,c=c*m+u*o,h=h*m+p*o,f=f*m+x*o}else{l=l*m+d*o,c=c*m+u*o,h=h*m+p*o,f=f*m+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*u-c*d,t[e+1]=l*p+h*d+c*f-o*u,t[e+2]=c*p+h*u+o*d-l*f,t[e+3]=h*p-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),d=l(n/2),u=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-i)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-c)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vh=class vh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vh.prototype.isVector3=!0;var L=vh,ac=new L,Mu=new je,Mh=class Mh{constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],p=n[8],x=i[0],g=i[3],m=i[6],v=i[1],w=i[4],y=i[7],S=i[2],M=i[5],R=i[8];return r[0]=a*x+o*v+l*S,r[3]=a*g+o*w+l*M,r[6]=a*m+o*y+l*R,r[1]=c*x+h*v+f*S,r[4]=c*g+h*w+f*M,r[7]=c*m+h*y+f*R,r[2]=d*x+u*v+p*S,r[5]=d*g+u*w+p*M,r[8]=d*m+u*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,p=e*f+n*d+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=u*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oc.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mh.prototype.isMatrix3=!0;var $t=Mh,oc=new $t,Su=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){let s={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Er:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wr]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Su,fromXYZ:bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),s}var le=Op();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var fs,fo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{fs===void 0&&(fs=Tr("canvas")),fs.width=t.width,fs.height=t.height;let i=fs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=fs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bp=0,zs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Vn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(lc(i[a].image)):r.push(lc(i[a]))}else r=lc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function lc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?fo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var kp=0,cc=new L,Ke=class s extends Wn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Hn,i=Hn,r=He,a=Pi,o=_n,l=nn,c=s.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=Vn(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=ih;Ke.DEFAULT_ANISOTROPY=1;var Sh=class Sh{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,y=(u+1)/2,S=(m+1)/2,M=(h+d)/4,R=(f+x)/4,_=(p+g)/4;return w>y&&w>S?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=M/n,r=R/n):y>S?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=M/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=R/r,i=_/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sh.prototype.isVector4=!0;var Te=Sh,po=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new Ke(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new zs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends po{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mo=class extends Ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Bo=class Bo{constructor(t,e,n,i,r,a,o,l,c,h,f,d,u,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,d,u,p,x,g)}set(t,e,n,i,r,a,o,l,c,h,f,d,u,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),a=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;e[0]=d+x*o,e[4]=p*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-u,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=u*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*f,e[8]=p*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+p,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*l,u=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=a*h,e[9]=u*f-p,e[2]=p*f-u,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hp,t,Vp)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),yi.crossVectors(n,on),yi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),yi.crossVectors(n,on)),yi.normalize(),Ra.crossVectors(on,yi),i[0]=yi.x,i[4]=Ra.x,i[8]=on.x,i[1]=yi.y,i[5]=Ra.y,i[9]=on.y,i[2]=yi.z,i[6]=Ra.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],w=n[7],y=n[11],S=n[15],M=i[0],R=i[4],_=i[8],E=i[12],C=i[1],N=i[5],U=i[9],H=i[13],T=i[2],I=i[6],D=i[10],z=i[14],Z=i[3],V=i[7],K=i[11],$=i[15];return r[0]=a*M+o*C+l*T+c*Z,r[4]=a*R+o*N+l*I+c*V,r[8]=a*_+o*U+l*D+c*K,r[12]=a*E+o*H+l*z+c*$,r[1]=h*M+f*C+d*T+u*Z,r[5]=h*R+f*N+d*I+u*V,r[9]=h*_+f*U+d*D+u*K,r[13]=h*E+f*H+d*z+u*$,r[2]=p*M+x*C+g*T+m*Z,r[6]=p*R+x*N+g*I+m*V,r[10]=p*_+x*U+g*D+m*K,r[14]=p*E+x*H+g*z+m*$,r[3]=v*M+w*C+y*T+S*Z,r[7]=v*R+w*N+y*I+S*V,r[11]=v*_+w*U+y*D+S*K,r[15]=v*E+w*H+y*z+S*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*u-c*d,w=o*u-c*f,y=o*d-l*f,S=a*u-c*h,M=a*d-l*h,R=a*f-o*h;return e*(x*v-g*w+m*y)-n*(p*v-g*S+m*M)+i*(p*w-x*S+m*R)-r*(p*y-x*M+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,w=e*l-i*a,y=e*c-r*a,S=n*l-i*o,M=n*c-r*o,R=i*c-r*l,_=h*x-f*p,E=h*g-d*p,C=h*m-u*p,N=f*g-d*x,U=f*m-u*x,H=d*m-u*g,T=v*H-w*U+y*N+S*C-M*E+R*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=(o*H-l*U+c*N)*I,t[1]=(i*U-n*H-r*N)*I,t[2]=(x*R-g*M+m*S)*I,t[3]=(d*M-f*R-u*S)*I,t[4]=(l*C-a*H-c*E)*I,t[5]=(e*H-i*C+r*E)*I,t[6]=(g*y-p*R-m*w)*I,t[7]=(h*R-d*y+u*w)*I,t[8]=(a*U-o*C+c*_)*I,t[9]=(n*C-e*U-r*_)*I,t[10]=(p*M-x*y+m*v)*I,t[11]=(f*y-h*M-u*v)*I,t[12]=(o*E-a*N-l*_)*I,t[13]=(e*N-n*E+i*_)*I,t[14]=(x*w-p*S-g*v)*I,t[15]=(h*S-f*w+d*v)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,p=r*f,x=a*h,g=a*f,m=o*f,v=l*c,w=l*h,y=l*f,S=n.x,M=n.y,R=n.z;return i[0]=(1-(x+m))*S,i[1]=(u+y)*S,i[2]=(p-w)*S,i[3]=0,i[4]=(u-y)*M,i[5]=(1-(d+m))*M,i[6]=(g+v)*M,i[7]=0,i[8]=(p+w)*R,i[9]=(g-v)*R,i[10]=(1-(d+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ps.set(i[0],i[1],i[2]).length(),o=ps.set(i[4],i[5],i[6]).length(),l=ps.set(i[8],i[9],i[10]).length();r<0&&(a=-a),bn.copy(this);let c=1/a,h=1/o,f=1/l;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Rn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Rn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Rn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ns)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Bo.prototype.isMatrix4=!0;var se=Bo,ps=new L,bn=new se,Hp=new L(0,0,0),Vp=new L(1,1,1),yi=new L,Ra=new L,on=new L,wu=new se,Eu=new je,Xn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gp=0,Tu=new L,ms=new je,ti=new se,Ca=new L,cr=new L,Wp=new L,Xp=new je,Au=new L(1,0,0),Ru=new L(0,1,0),Cu=new L(0,0,1),Iu={type:"added"},qp={type:"removed"},gs={type:"childadded",child:null},hc={type:"childremoved",child:null},Le=class s extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new L,e=new Xn,n=new je,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new $t}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Au,t)}rotateY(t){return this.rotateOnAxis(Ru,t)}rotateZ(t){return this.rotateOnAxis(Cu,t)}translateOnAxis(t,e){return Tu.copy(t).applyQuaternion(this.quaternion),this.position.add(Tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Au,t)}translateY(t){return this.translateOnAxis(Ru,t)}translateZ(t){return this.translateOnAxis(Cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ca.copy(t):Ca.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(cr,Ca,this.up):ti.lookAt(Ca,cr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(ti),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Iu),gs.child=t,this.dispatchEvent(gs),gs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qp),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Iu),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,Wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var he=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yp={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new he,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new he,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new he,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new he;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function uc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=dh(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uc(a,r,t+1/3),this.g=uc(a,r,t),this.b=uc(a,r,t-1/3)}return le.colorSpaceToWorking(this,i),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=Od[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return le.workingToColorSpace(We.copy(this),t),Math.round(ne(We.r*255,0,255))*65536+Math.round(ne(We.g*255,0,255))*256+Math.round(ne(We.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(We.copy(this),e);let n=We.r,i=We.g,r=We.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Be){le.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,i=We.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Ia);let n=vr(_i.h,Ia.h,e),i=vr(_i.s,Ia.s,e),r=vr(_i.l,Ia.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Bt;Bt.NAMES=Od;var Cr=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new L,ei=new L,dc=new L,ni=new L,xs=new L,ys=new L,Pu=new L,fc=new L,pc=new L,mc=new L,gc=new Te,xc=new Te,yc=new Te,ri=class s{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){wn.subVectors(i,e),ei.subVectors(n,e),dc.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(ei),l=wn.dot(dc),c=ei.dot(ei),h=ei.dot(dc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return gc.setScalar(0),xc.setScalar(0),yc.setScalar(0),gc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),yc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(gc,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(yc,r.z),a}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),ei.subVectors(t,e),wn.cross(ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),wn.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;xs.subVectors(i,n),ys.subVectors(r,n),fc.subVectors(t,n);let l=xs.dot(fc),c=ys.dot(fc);if(l<=0&&c<=0)return e.copy(n);pc.subVectors(t,i);let h=xs.dot(pc),f=ys.dot(pc);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(xs,a);mc.subVectors(t,r);let u=xs.dot(mc),p=ys.dot(mc);if(p>=0&&u<=p)return e.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(ys,o);let g=h*p-u*f;if(g<=0&&f-h>=0&&u-p>=0)return Pu.subVectors(r,i),o=(f-h)/(f-h+(u-p)),e.copy(i).addScaledVector(Pu,o);let m=1/(g+x+d);return a=x*m,o=d*m,e.copy(n).addScaledVector(xs,a).addScaledVector(ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),La.subVectors(this.max,hr),_s.subVectors(t.a,hr),vs.subVectors(t.b,hr),Ms.subVectors(t.c,hr),vi.subVectors(vs,_s),Mi.subVectors(Ms,vs),ki.subVectors(_s,Ms);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-ki.z,ki.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,ki.z,0,-ki.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-ki.y,ki.x,0];return!_c(e,_s,vs,Ms,La)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,_s,vs,Ms,La))?!1:(Na.crossVectors(vi,Mi),e=[Na.x,Na.y,Na.z],_c(e,_s,vs,Ms,La))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ii=[new L,new L,new L,new L,new L,new L,new L,new L],En=new L,Pa=new qn,_s=new L,vs=new L,Ms=new L,vi=new L,Mi=new L,ki=new L,hr=new L,La=new L,Na=new L,Hi=new L;function _c(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hi.fromArray(s,r);let o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new L,Da=new ot,Zp=0,Ee=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ir=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pr=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kp=new qn,ur=new L,vc=new L,oi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ur,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(vc)),this.expandByPoint(ur.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jp=0,mn=new se,Mc=new Le,Ss=new L,ln=new qn,dr=new qn,Fe=new L,ye=class s extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vp(t)?Pr:Ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(ln.min,dr.min),ln.expandByPoint(Fe),Fe.addVectors(ln.max,dr.max),ln.expandByPoint(Fe)):(ln.expandByPoint(dr.min),ln.expandByPoint(dr.max))}ln.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Ss.fromBufferAttribute(t,c),Fe.add(Ss)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ee(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new L,l[_]=new L;let c=new L,h=new L,f=new L,d=new ot,u=new ot,p=new ot,x=new L,g=new L;function m(_,E,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),h.sub(c),f.sub(c),u.sub(d),p.sub(d);let N=1/(u.x*p.y-p.x*u.y);isFinite(N)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-u.y).multiplyScalar(N),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(N),o[_].add(x),o[E].add(x),o[C].add(x),l[_].add(g),l[E].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,E=v.length;_<E;++_){let C=v[_],N=C.start,U=C.count;for(let H=N,T=N+U;H<T;H+=3)m(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let w=new L,y=new L,S=new L,M=new L;function R(_){S.fromBufferAttribute(i,_),M.copy(S);let E=o[_];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),y.crossVectors(M,E);let N=y.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,N)}for(let _=0,E=v.length;_<E;++_){let C=v[_],N=C.start,U=C.count;for(let H=N,T=N+U;H<T;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let m=0;m<h;m++)d[p++]=c[u++]}return new Ee(d,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ze=new L,Bs=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ar("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ar("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Sc=new L,$p=new L,jp=new $t,Tn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Sc.subVectors(n,e).cross($p.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jp.getNormalMatrix(t),i=this.coplanarPoint(Sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qp=0,Cn=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Ks,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kc,this.blendDst=Jc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yn=class extends Cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},bs,fr=new L,ws=new L,Es=new L,Ts=new ot,pr=new ot,Bd=new se,Ua=new L,mr=new L,za=new L,Lu=new ot,bc=new ot,Nu=new ot,li=class extends Le{constructor(t=new Yn){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(e,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Bs(n,3,0,!1)),bs.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=bs,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Bd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-Es.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Fa(Ua.set(-.5,-.5,0),Es,a,ws,i,r),Fa(mr.set(.5,-.5,0),Es,a,ws,i,r),Fa(za.set(.5,.5,0),Es,a,ws,i,r),Lu.set(0,0),bc.set(1,0),Nu.set(1,1);let o=t.ray.intersectTriangle(Ua,mr,za,!1,fr);if(o===null&&(Fa(mr.set(-.5,.5,0),Es,a,ws,i,r),bc.set(0,1),o=t.ray.intersectTriangle(Ua,za,mr,!1,fr),o===null))return;let l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:ri.getInterpolation(fr,Ua,mr,za,Lu,bc,Nu,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fa(s,t,e,n,i,r){Ts.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(pr.x=r*Ts.x-i*Ts.y,pr.y=i*Ts.x+r*Ts.y):pr.copy(Ts),s.copy(t),s.x+=pr.x,s.y+=pr.y,s.applyMatrix4(Bd)}var si=new L,wc=new L,Oa=new L,Ba=new L,ks=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wc.copy(t).add(e).multiplyScalar(.5),Oa.copy(e).sub(t).normalize(),Ba.copy(this.origin).sub(wc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Oa),o=Ba.dot(this.direction),l=-Ba.dot(Oa),c=Ba.lengthSq(),h=Math.abs(1-a*a),f,d,u,p;if(h>0)if(f=a*l-o,d=a*o-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wc).addScaledVector(Oa,d),u}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);let n=si.dot(this.direction),i=si.dot(si)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,w=n.z-a.z,y=Math.abs(l),S=Math.abs(c),M=Math.abs(h),R,_,E,C,N,U,H,T,I,D,z,Z;if(y>=S&&y>=M?(E=l,U=f,I=p,Z=m,l>=0?(R=c,_=h,C=d,N=u,H=x,T=g,D=v,z=w):(R=h,_=c,C=u,N=d,H=g,T=x,D=w,z=v)):S>=M?(E=c,U=d,I=x,Z=v,c>=0?(R=h,_=l,C=u,N=f,H=g,T=p,D=w,z=m):(R=l,_=h,C=f,N=u,H=p,T=g,D=m,z=w)):(E=h,U=u,I=g,Z=w,h>=0?(R=l,_=c,C=f,N=d,H=p,T=x,D=m,z=v):(R=c,_=l,C=d,N=f,H=x,T=p,D=v,z=m)),E===0)return null;let V=R/E,K=_/E,$=1/E,mt=C-V*U,ct=N-K*U,Ht=H-V*I,Ft=T-K*I,Qt=D-V*Z,j=z-K*Z,nt=Qt*Ft-j*Ht,yt=mt*j-ct*Qt,Wt=Ht*ct-Ft*mt;if(i){if(nt<0||yt<0||Wt<0)return null}else if((nt<0||yt<0||Wt<0)&&(nt>0||yt>0||Wt>0))return null;let Rt=nt+yt+Wt;if(Rt===0)return null;let Kt=$*(nt*U+yt*I+Wt*Z);return(Rt>0?Kt<0:Kt>0)?null:this.at(Kt/Rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zn=class extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Du=new se,Vi=new ks,ka=new oi,Uu=new L,Ha=new L,Va=new L,Ga=new L,Ec=new L,Wa=new L,zu=new L,Xa=new L,xt=class extends Le{constructor(t=new ye,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Ec.fromBufferAttribute(f,t),a?Wa.addScaledVector(Ec,h):Wa.addScaledVector(Ec.sub(e),h))}e.add(Wa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(ka.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(ka,Uu)===null||Vi.origin.distanceToSquared(Uu)>(t.far-t.near)**2))&&(Du.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,u.start),w=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=v,S=w;y<S;y+=3){let M=o.getX(y),R=o.getX(y+1),_=o.getX(y+2);i=qa(this,m,t,n,c,h,f,M,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);i=qa(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],v=Math.max(g.start,u.start),w=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let y=v,S=w;y<S;y+=3){let M=y,R=y+1,_=y+2;i=qa(this,m,t,n,c,h,f,M,R,_),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let g=p,m=x;g<m;g+=3){let v=g,w=g+1,y=g+2;i=qa(this,a,t,n,c,h,f,v,w,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function tm(s,t,e,n,i,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ci,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Xa);return c<e.near||c>e.far?null:{distance:c,point:Xa.clone(),object:s}}function qa(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ha),s.getVertexPosition(l,Va),s.getVertexPosition(c,Ga);let h=tm(s,t,e,n,Ha,Va,Ga,zu);if(h){let f=new L;ri.getBarycoord(zu,Ha,Va,Ga,f),i&&(h.uv=ri.getInterpolatedAttribute(i,o,l,c,f,new ot)),r&&(h.uv1=ri.getInterpolatedAttribute(r,o,l,c,f,new ot)),a&&(h.normal=ri.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ri.getNormal(Ha,Va,Ga,d.normal),h.face=d,h.barycoord=f}return h}var Nr=class extends Ke{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Oe,h=Oe,f,d){super(null,a,o,l,c,h,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hs=class extends Ee{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},As=new se,Fu=new se,Ya=[],Ou=new qn,em=new se,gr=new xt,xr=new oi,Kn=class extends xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,em)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),Ou.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(Ou)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,As),xr.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,As),Fu.multiplyMatrices(n,As),gr.matrixWorld=Fu,gr.raycast(t,Ya);for(let a=0,o=Ya.length;a<o;a++){let l=Ya[a];l.instanceId=r,l.object=this,e.push(l)}Ya.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nr(new Float32Array(i*this.count),i,this.count,Yo,yn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new oi,nm=new ot(.5,.5),Za=new L,Vs=class{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],w=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-a,u-h,m-p,S-v).normalize(),i[1].setComponents(c+a,u+h,m+p,S+v).normalize(),i[2].setComponents(c+o,u+f,m+x,S+w).normalize(),i[3].setComponents(c-o,u-f,m-x,S-w).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,u-d,m-g,S-y).normalize();else if(i[4].setComponents(c-l,u-d,m-g,S-y).normalize(),e===Rn)i[5].setComponents(c+l,u+d,m+g,S+y).normalize();else if(e===Ns)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=nm.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Za.x=i.normal.x>0?t.max.x:t.min.x,Za.y=i.normal.y>0?t.max.y:t.min.y,Za.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xn=class extends Cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bu=new se,Uc=new ks,Ka=new oi,Ja=new L,Yi=class extends Le{constructor(t=new ye,e=new xn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,t.ray.intersectsSphere(Ka)===!1)return;Bu.copy(i).invert(),Uc.copy(t.ray).applyMatrix4(Bu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,x=u;p<x;p++){let g=c.getX(p);Ja.fromBufferAttribute(f,g),ku(Ja,g,l,i,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let p=d,x=u;p<x;p++)Ja.fromBufferAttribute(f,p),ku(Ja,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ku(s,t,e,n,i,r,a){let o=Uc.distanceSqToPoint(s);if(o<e){let l=new L;Uc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Dr=class extends Ke{constructor(t=[],e=Ii,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},bi=class extends Ke{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends Ke{constructor(t,e,n=Pn,i,r,a,o=Oe,l=Oe,c,h=Gn,f=1){if(h!==Gn&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new zs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},go=class extends wi{constructor(t,e=Pn,n=Ii,i,r,a=Oe,o=Oe,l,c=Gn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ae=class s extends ye{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function p(x,g,m,v,w,y,S,M,R,_,E){let C=y/R,N=S/_,U=y/2,H=S/2,T=M/2,I=R+1,D=_+1,z=0,Z=0,V=new L;for(let K=0;K<D;K++){let $=K*N-H;for(let mt=0;mt<I;mt++){let ct=mt*C-U;V[x]=ct*v,V[g]=$*w,V[m]=T,c.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[m]=M>0?1:-1,h.push(V.x,V.y,V.z),f.push(mt/R),f.push(1-K/_),z+=1}}for(let K=0;K<_;K++)for(let $=0;$<R;$++){let mt=d+$+I*K,ct=d+$+I*(K+1),Ht=d+($+1)+I*(K+1),Ft=d+($+1)+I*K;l.push(mt,ct,Ft),l.push(ct,Ht,Ft),Z+=6}o.addGroup(u,Z,E),u+=Z,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ci=class s extends ye{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,d=e,u=2*f+d,p=n*2+r,x=i+1,g=new L,m=new L;for(let v=0;v<=p;v++){let w=0,y=0,S=0,M=0;if(v<=n){let E=v/n,C=E*Math.PI/2;y=-h-t*Math.cos(C),S=t*Math.sin(C),M=-t*Math.cos(C),w=E*f}else if(v<=n+r){let E=(v-n)/r;y=-h+E*e,S=t,M=0,w=f+E*d}else{let E=(v-n-r)/n,C=E*Math.PI/2;y=h+t*Math.sin(C),S=t*Math.cos(C),M=t*Math.sin(C),w=f+d+E*f}let R=Math.max(0,Math.min(1,w/u)),_=0;v===0?_=.5/i:v===p&&(_=-.5/i);for(let E=0;E<=i;E++){let C=E/i,N=C*Math.PI*2,U=Math.sin(N),H=Math.cos(N);m.x=-S*H,m.y=y,m.z=S*U,o.push(m.x,m.y,m.z),g.set(-S*H,M,S*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,R)}if(v>0){let E=(v-1)*x;for(let C=0;C<i;C++){let N=E+C,U=E+C+1,H=v*x+C,T=v*x+C+1;a.push(N,U,H),a.push(U,T,H)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Zi=class s extends ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new L,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ne=class s extends ye{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],g=n/2,m=0;v(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(u,2));function v(){let y=new L,S=new L,M=0,R=(e-t)/n;for(let _=0;_<=r;_++){let E=[],C=_/r,N=C*(e-t)+t;for(let U=0;U<=i;U++){let H=U/i,T=H*l+o,I=Math.sin(T),D=Math.cos(T);S.x=N*I,S.y=-C*n+g,S.z=N*D,f.push(S.x,S.y,S.z),y.set(I,R,D).normalize(),d.push(y.x,y.y,y.z),u.push(H,1-C),E.push(p++)}x.push(E)}for(let _=0;_<i;_++)for(let E=0;E<r;E++){let C=x[E][_],N=x[E+1][_],U=x[E+1][_+1],H=x[E][_+1];(t>0||E!==0)&&(h.push(C,N,H),M+=3),(e>0||E!==r-1)&&(h.push(N,U,H),M+=3)}c.addGroup(m,M,0),m+=M}function w(y){let S=p,M=new ot,R=new L,_=0,E=y===!0?t:e,C=y===!0?1:-1;for(let U=1;U<=i;U++)f.push(0,g*C,0),d.push(0,C,0),u.push(.5,.5),p++;let N=p;for(let U=0;U<=i;U++){let T=U/i*l+o,I=Math.cos(T),D=Math.sin(T);R.x=E*D,R.y=g*C,R.z=E*I,f.push(R.x,R.y,R.z),d.push(0,C,0),M.x=I*.5+.5,M.y=D*.5*C+.5,u.push(M.x,M.y),p++}for(let U=0;U<i;U++){let H=S+U,T=N+U;y===!0?h.push(T,T+1,H):h.push(T+1,T,H),_+=3}c.addGroup(m,_,y===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},hi=class s extends Ne{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xo=class s extends ye{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let w=new L,y=new L,S=new L;for(let M=0;M<e.length;M+=3)u(e[M+0],w),u(e[M+1],y),u(e[M+2],S),l(w,y,S,v)}function l(v,w,y,S){let M=S+1,R=[];for(let _=0;_<=M;_++){R[_]=[];let E=v.clone().lerp(y,_/M),C=w.clone().lerp(y,_/M),N=M-_;for(let U=0;U<=N;U++)U===0&&_===M?R[_][U]=E:R[_][U]=E.clone().lerp(C,U/N)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let C=Math.floor(E/2);E%2===0?(d(R[_][C+1]),d(R[_+1][C]),d(R[_][C])):(d(R[_][C+1]),d(R[_+1][C+1]),d(R[_+1][C]))}}function c(v){let w=new L;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(v),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){let v=new L;for(let w=0;w<r.length;w+=3){v.x=r[w+0],v.y=r[w+1],v.z=r[w+2];let y=g(v)/2/Math.PI+.5,S=m(v)/Math.PI+.5;a.push(y,1-S)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){let w=a[v+0],y=a[v+2],S=a[v+4],M=Math.max(w,y,S),R=Math.min(w,y,S);M>.9&&R<.1&&(w<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),S<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,w){let y=v*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function p(){let v=new L,w=new L,y=new L,S=new L,M=new ot,R=new ot,_=new ot;for(let E=0,C=0;E<r.length;E+=9,C+=6){v.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),M.set(a[C+0],a[C+1]),R.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),S.copy(v).add(w).add(y).divideScalar(3);let N=g(S);x(M,C+0,v,N),x(R,C+2,w,N),x(_,C+4,y,N)}}function x(v,w,y,S){S<0&&v.x===1&&(a[w]=v.x-1),y.x===0&&y.z===0&&(a[w]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},Gs=class s extends xo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,u=(a-h)/d;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new ot:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,i=[],r=[],a=[],o=new L,l=new se;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ne(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,p))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(ne(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],u*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ws=class extends cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yo=class extends Ws{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,i(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Hu=new L,Vu=new L,Tc=new ph,Ac=new ph,Rc=new ph,_o=class extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Vu.subVectors(i[0],i[1]).add(i[0]),c=Vu);let f=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Hu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Tc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,g),Ac.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,g),Rc.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Ac.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),Rc.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Tc.calc(l),Ac.calc(l),Rc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gu(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function im(s,t){let e=1-s;return e*e*t}function sm(s,t){return 2*(1-s)*s*t}function rm(s,t){return s*s*t}function Mr(s,t,e,n){return im(s,t)+sm(s,e)+rm(s,n)}function am(s,t){let e=1-s;return e*e*e*t}function om(s,t){let e=1-s;return 3*e*e*s*t}function lm(s,t){return 3*(1-s)*s*s*t}function cm(s,t){return s*s*s*t}function Sr(s,t,e,n,i){return am(s,t)+om(s,e)+lm(s,n)+cm(s,i)}var zr=class extends cn{constructor(t=new ot,e=new ot,n=new ot,i=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,i.x,r.x,a.x,o.x),Sr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vo=class extends cn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Sr(t,i.x,r.x,a.x,o.x),Sr(t,i.y,r.y,a.y,o.y),Sr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends cn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends cn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends cn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(t,i.x,r.x,a.x),Mr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},So=class extends cn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Mr(t,i.x,r.x,a.x),Mr(t,i.y,r.y,a.y),Mr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(Gu(o,l.x,c.x,h.x,f.x),Gu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ot().fromArray(i))}return this}},zc=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:_o,CubicBezierCurve:zr,CubicBezierCurve3:vo,EllipseCurve:Ws,LineCurve:Fr,LineCurve3:Mo,QuadraticBezierCurve:Or,QuadraticBezierCurve3:So,SplineCurve:Br}),bo=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new zc[i.type]().fromJSON(i))}return this}},kr=class extends bo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Or(this.currentPoint.clone(),new ot(t,e),new ot(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new zr(this.currentPoint.clone(),new ot(t,e),new ot(n,i),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Ws(t,e,n,i,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ki=class extends kr{constructor(t){super(t),this.uuid=Vn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new kr().fromJSON(i))}return this}};function hm(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=kd(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=mm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let d=e;d<i;d+=e){let u=s[d],p=s[d+1];u<o&&(o=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Hr(r,a,e,o,l,c,0),a}function kd(s,t,e,n,i){let r;if(i===Tm(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Wu(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Wu(a/n|0,s[a],s[a+1],r);return r&&Xs(r,r.next)&&(Gr(r),r=r.next),r}function Ji(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Xs(e,e.next)||Re(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&vm(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?dm(s,n,i,r):um(s)){t.push(l.i,s.i,c.i),Gr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=fm(Ji(s),t),Hr(s,t,e,n,i,r,2)):a===2&&pm(s,t,e,n,i,r):Hr(Ji(s),t,e,n,i,r,1);break}}}function um(s){let t=s.prev,e=s,n=s.next;if(Re(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(i,r,a),f=Math.min(o,l,c),d=Math.max(i,r,a),u=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&yr(i,o,r,l,a,c,p.x,p.y)&&Re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dm(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Re(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,f=r.y,d=a.y,u=Math.min(o,l,c),p=Math.min(h,f,d),x=Math.max(o,l,c),g=Math.max(h,f,d),m=Fc(u,p,t,e,n),v=Fc(x,g,t,e,n),w=s.prevZ,y=s.nextZ;for(;w&&w.z>=m&&y&&y.z<=v;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&yr(o,h,l,f,c,d,w.x,w.y)&&Re(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=u&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&yr(o,h,l,f,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=m;){if(w.x>=u&&w.x<=x&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&yr(o,h,l,f,c,d,w.x,w.y)&&Re(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=x&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&yr(o,h,l,f,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fm(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Xs(n,i)&&Vd(n,e,e.next,i)&&Vr(n,i)&&Vr(i,n)&&(t.push(n.i,e.i,i.i),Gr(e),Gr(e.next),e=s=i),e=e.next}while(e!==s);return Ji(e)}function pm(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bm(a,o)){let l=Gd(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Hr(a,t,e,n,i,r,0),Hr(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function mm(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=kd(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Sm(c))}i.sort(gm);for(let r=0;r<i.length;r++)e=xm(i[r],e);return e}function gm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function xm(s,t){let e=ym(s,t);if(!e)return t;let n=Gd(e,s);return Ji(n,n.next),Ji(e,e.next)}function ym(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Xs(s,e))return e;do{if(Xs(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Hd(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);Vr(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&_m(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function _m(s,t){return Re(s.prev,s,t.prev)<0&&Re(t.next,s,s.next)<0}function vm(s,t,e,n){let i=s;do i.z===0&&(i.z=Fc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Mm(i)}function Mm(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Fc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Sm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Hd(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function yr(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Hd(s,t,e,n,i,r,a,o)}function bm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!wm(s,t)&&(Vr(s,t)&&Vr(t,s)&&Em(s,t)&&(Re(s.prev,s,t.prev)||Re(s,t.prev,t))||Xs(s,t)&&Re(s.prev,s,s.next)>0&&Re(t.prev,t,t.next)>0)}function Re(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Xs(s,t){return s.x===t.x&&s.y===t.y}function Vd(s,t,e,n){let i=ja(Re(s,t,e)),r=ja(Re(s,t,n)),a=ja(Re(e,n,s)),o=ja(Re(e,n,t));return!!(i!==r&&a!==o||i===0&&$a(s,e,t)||r===0&&$a(s,n,t)||a===0&&$a(e,s,n)||o===0&&$a(e,t,n))}function $a(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ja(s){return s>0?1:s<0?-1:0}function wm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Vd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Vr(s,t){return Re(s.prev,s,s.next)<0?Re(s,t,s.next)>=0&&Re(s,s.prev,t)>=0:Re(s,t,s.prev)<0||Re(s,s.next,t)<0}function Em(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Gd(s,t){let e=Oc(s.i,s.x,s.y),n=Oc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wu(s,t,e,n){let i=Oc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Oc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tm(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Bc=class{static triangulate(t,e,n=2){return hm(t,e,n)}},Wi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Xu(t),qu(n,t);let a=t.length;e.forEach(Xu);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,qu(n,e[l]);let o=Bc.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Xu(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qu(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var $i=class s extends ye{constructor(t=new Ki([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Am,w,y=!1,S,M,R,_;if(m){w=m.getSpacedPoints(h),y=!0,d=!1;let st=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,st),M=new L,R=new L,_=new L}d||(g=0,u=0,p=0,x=0);let E=o.extractPoints(c),C=E.shape,N=E.holes;if(!Wi.isClockWise(C)){C=C.reverse();for(let st=0,lt=N.length;st<lt;st++){let ht=N[st];Wi.isClockWise(ht)&&(N[st]=ht.reverse())}}function H(st){let ht=10000000000000001e-36,ut=st[0];for(let gt=1;gt<=st.length;gt++){let Xt=gt%st.length,Vt=st[Xt],Jt=Vt.x-ut.x,jt=Vt.y-ut.y,F=Jt*Jt+jt*jt,de=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(ut.x),Math.abs(ut.y)),ae=ht*de*de;if(F<=ae){st.splice(Xt,1),gt--;continue}ut=Vt}}H(C),N.forEach(H);let T=N.length,I=C;for(let st=0;st<T;st++){let lt=N[st];C=C.concat(lt)}function D(st,lt,ht){return lt||Yt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(lt,ht)}let z=C.length;function Z(st,lt,ht){let ut,gt,Xt,Vt=st.x-lt.x,Jt=st.y-lt.y,jt=ht.x-st.x,F=ht.y-st.y,de=Vt*Vt+Jt*Jt,ae=Vt*F-Jt*jt;if(Math.abs(ae)>Number.EPSILON){let P=Math.sqrt(de),b=Math.sqrt(jt*jt+F*F),G=lt.x-Jt/P,Y=lt.y+Vt/P,Q=ht.x-F/b,dt=ht.y+jt/b,ft=((Q-G)*F-(dt-Y)*jt)/(Vt*F-Jt*jt);ut=G+Vt*ft-st.x,gt=Y+Jt*ft-st.y;let tt=ut*ut+gt*gt;if(tt<=2)return new ot(ut,gt);Xt=Math.sqrt(tt/2)}else{let P=!1;Vt>Number.EPSILON?jt>Number.EPSILON&&(P=!0):Vt<-Number.EPSILON?jt<-Number.EPSILON&&(P=!0):Math.sign(Jt)===Math.sign(F)&&(P=!0),P?(ut=-Jt,gt=Vt,Xt=Math.sqrt(de)):(ut=Vt,gt=Jt,Xt=Math.sqrt(de/2))}return new ot(ut/Xt,gt/Xt)}let V=[];for(let st=0,lt=I.length,ht=lt-1,ut=st+1;st<lt;st++,ht++,ut++)ht===lt&&(ht=0),ut===lt&&(ut=0),V[st]=Z(I[st],I[ht],I[ut]);let K=[],$,mt=V.concat();for(let st=0,lt=T;st<lt;st++){let ht=N[st];$=[];for(let ut=0,gt=ht.length,Xt=gt-1,Vt=ut+1;ut<gt;ut++,Xt++,Vt++)Xt===gt&&(Xt=0),Vt===gt&&(Vt=0),$[ut]=Z(ht[ut],ht[Xt],ht[Vt]);K.push($),mt=mt.concat($)}let ct;if(g===0)ct=Wi.triangulateShape(I,N);else{let st=[],lt=[];for(let ht=0;ht<g;ht++){let ut=ht/g,gt=u*Math.cos(ut*Math.PI/2),Xt=p*Math.sin(ut*Math.PI/2)+x;for(let Vt=0,Jt=I.length;Vt<Jt;Vt++){let jt=D(I[Vt],V[Vt],Xt);yt(jt.x,jt.y,-gt),ut===0&&st.push(jt)}for(let Vt=0,Jt=T;Vt<Jt;Vt++){let jt=N[Vt];$=K[Vt];let F=[];for(let de=0,ae=jt.length;de<ae;de++){let P=D(jt[de],$[de],Xt);yt(P.x,P.y,-gt),ut===0&&F.push(P)}ut===0&&lt.push(F)}}ct=Wi.triangulateShape(st,lt)}let Ht=ct.length,Ft=p+x;for(let st=0;st<z;st++){let lt=d?D(C[st],mt[st],Ft):C[st];y?(R.copy(S.normals[0]).multiplyScalar(lt.x),M.copy(S.binormals[0]).multiplyScalar(lt.y),_.copy(w[0]).add(R).add(M),yt(_.x,_.y,_.z)):yt(lt.x,lt.y,0)}for(let st=1;st<=h;st++)for(let lt=0;lt<z;lt++){let ht=d?D(C[lt],mt[lt],Ft):C[lt];y?(R.copy(S.normals[st]).multiplyScalar(ht.x),M.copy(S.binormals[st]).multiplyScalar(ht.y),_.copy(w[st]).add(R).add(M),yt(_.x,_.y,_.z)):yt(ht.x,ht.y,f/h*st)}for(let st=g-1;st>=0;st--){let lt=st/g,ht=u*Math.cos(lt*Math.PI/2),ut=p*Math.sin(lt*Math.PI/2)+x;for(let gt=0,Xt=I.length;gt<Xt;gt++){let Vt=D(I[gt],V[gt],ut);yt(Vt.x,Vt.y,f+ht)}for(let gt=0,Xt=N.length;gt<Xt;gt++){let Vt=N[gt];$=K[gt];for(let Jt=0,jt=Vt.length;Jt<jt;Jt++){let F=D(Vt[Jt],$[Jt],ut);y?yt(F.x,F.y+w[h-1].y,w[h-1].x+ht):yt(F.x,F.y,f+ht)}}}Qt(),j();function Qt(){let st=i.length/3;if(d){let lt=0,ht=z*lt;for(let ut=0;ut<Ht;ut++){let gt=ct[ut];Wt(gt[2]+ht,gt[1]+ht,gt[0]+ht)}lt=h+g*2,ht=z*lt;for(let ut=0;ut<Ht;ut++){let gt=ct[ut];Wt(gt[0]+ht,gt[1]+ht,gt[2]+ht)}}else{for(let lt=0;lt<Ht;lt++){let ht=ct[lt];Wt(ht[2],ht[1],ht[0])}for(let lt=0;lt<Ht;lt++){let ht=ct[lt];Wt(ht[0]+z*h,ht[1]+z*h,ht[2]+z*h)}}n.addGroup(st,i.length/3-st,0)}function j(){let st=i.length/3,lt=0;nt(I,lt),lt+=I.length;for(let ht=0,ut=N.length;ht<ut;ht++){let gt=N[ht];nt(gt,lt),lt+=gt.length}n.addGroup(st,i.length/3-st,1)}function nt(st,lt){let ht=st.length;for(;--ht>=0;){let ut=ht,gt=ht-1;gt<0&&(gt=st.length-1);for(let Xt=0,Vt=h+g*2;Xt<Vt;Xt++){let Jt=z*Xt,jt=z*(Xt+1),F=lt+ut+Jt,de=lt+gt+Jt,ae=lt+gt+jt,P=lt+ut+jt;Rt(F,de,ae,P)}}}function yt(st,lt,ht){l.push(st),l.push(lt),l.push(ht)}function Wt(st,lt,ht){Kt(st),Kt(lt),Kt(ht);let ut=i.length/3,gt=v.generateTopUV(n,i,ut-3,ut-2,ut-1);ge(gt[0]),ge(gt[1]),ge(gt[2])}function Rt(st,lt,ht,ut){Kt(st),Kt(lt),Kt(ut),Kt(lt),Kt(ht),Kt(ut);let gt=i.length/3,Xt=v.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);ge(Xt[0]),ge(Xt[1]),ge(Xt[3]),ge(Xt[1]),ge(Xt[2]),ge(Xt[3])}function Kt(st){i.push(l[st*3+0]),i.push(l[st*3+1]),i.push(l[st*3+2])}function ge(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new zc[i.type]().fromJSON(i)),new s(n,t.options)}},Am={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],p=t[i*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-f),new ot(d,1-p),new ot(x,1-m)]:[new ot(o,1-l),new ot(h,1-f),new ot(u,1-p),new ot(g,1-m)]}};function Rm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wr=class s extends ye{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ne(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new L,d=new ot,u=new L,p=new L,x=new L,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-g,u.z=m*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-g,u.z=m*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let v=0;v<=e;v++){let w=n+v*h*i,y=Math.sin(w),S=Math.cos(w);for(let M=0;M<=t.length-1;M++){f.x=t[M].x*y,f.y=t[M].y,f.z=t[M].x*S,a.push(f.x,f.y,f.z),d.x=v/e,d.y=M/(t.length-1),o.push(d.x,d.y);let R=l[3*M+0]*y,_=l[3*M+1],E=l[3*M+0]*S;c.push(R,_,E)}}for(let v=0;v<e;v++)for(let w=0;w<t.length-1;w++){let y=w+v*t.length,S=y,M=y+t.length,R=y+t.length+1,_=y+1;r.push(S,M,_),r.push(R,_,M)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var tn=class s extends ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,d=e/l,u=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*d-a;for(let w=0;w<c;w++){let y=w*f-r;p.push(y,-v,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let w=v+c*m,y=v+c*(m+1),S=v+1+c*(m+1),M=v+1+c*m;u.push(w,y,M),u.push(y,S,M)}this.setIndex(u),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Xr=class s extends ye{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],f=t,d=(e-t)/i,u=new L,p=new ot;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;u.x=f*Math.cos(m),u.y=f*Math.sin(m),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let m=0;m<n;m++){let v=m+g,w=v,y=v+n+1,S=v+n+2,M=v+1;o.push(w,y,M),o.push(y,S,M)}}this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var en=class s extends ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new L,d=new L,u=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],w=m/n,y=a+w*o,S=t*Math.cos(y),M=Math.sqrt(t*t-S*S),R=0;m===0&&a===0?R=.5/e:m===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let E=_/e,C=i+E*r;f.x=-M*Math.cos(C),f.y=S,f.z=M*Math.sin(C),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),g.push(E+R,1-w),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let w=h[m][v+1],y=h[m][v],S=h[m+1][v],M=h[m+1][v+1];(m!==0||a>0)&&u.push(w,y,M),(m!==n-1||l<Math.PI)&&u.push(y,S,M)}this.setIndex(u),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function es(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Yu(i))i.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Yu(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function qe(s){let t={};for(let e=0;e<s.length;e++){let n=es(s[e]);for(let i in n)t[i]=n[i]}return t}function Yu(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function mh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var Cl={clone:es,merge:qe},Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xe=class extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Cm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wo=class extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends Cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ei=class extends Gt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var qr=class extends Cn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Eo=class extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},To=class extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Rs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ti=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Ti{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nc:r=t,o=2*e-n;break;case Dc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nc:a=t,l=2*n-e;break;case Dc:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,w=(-1-u)*g+(1.5+u)*x+.5*p,y=u*g-u*x;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+v*a[c+S]+w*a[l+S]+y*a[f+S];return r}},Ro=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},Co=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Io=class extends Ti{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let d=o*2,u=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=u*d+p*2,v=f[m],w=f[m+1],y=t*d+p*2,S=h[y],M=h[y+1],R=Nm(n,e,v,S,i);r[p]=Wd(R,x,w,M,g)}return r}};function Wd(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Lm(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Nm(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Wd(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Lm(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rs(e,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Rs(t.times,Array),values:Rs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Cc(t.settings)&&(n.settings={inTangents:Rs(t.settings.inTangents,Array),outTangents:Rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Io(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case br:e=this.InterpolantFactoryMethodDiscrete;break;case uo:e=this.InterpolantFactoryMethodLinear;break;case eo:e=this.InterpolantFactoryMethodSmooth;break;case Pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return uo;case this.InterpolantFactoryMethodSmooth:return eo;case this.InterpolantFactoryMethodBezier:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Cc(this.settings)&&(Zu(this.settings.inTangents,t),Zu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Mp(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let f=o*n,d=f-n,u=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[d+p]||x!==e[u+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Cc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Zu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=uo;var Ai=class extends hn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=br;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Po.prototype.ValueTypeName="color";var Lo=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Lo.prototype.ValueTypeName="number";var No=class extends Ti{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)je.slerpFlat(r,0,a,c-o,a,c,l);return r}},Yr=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new No(this.times,this.values,this.getValueSize(),t)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends hn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=br;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Do.prototype.ValueTypeName="vector";var Uo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xd=new Uo,zo=class{constructor(t){this.manager=t!==void 0?t:Xd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zr=class extends qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ic=new se,Ku=new L,Ju=new L,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vs,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ku.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ku),Ju.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ju),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ic,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Qa=new L,to=new je,kn=new L,Jr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qa,to,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,to,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qa,to,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,to,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new L,$u=new ot,ju=new ot,ke=class extends Jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,$u,ju),e.subVectors(ju,$u)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var kc=class extends Kr{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0}},$r=class extends qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ys=class extends Jr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hc=class extends Kr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Hc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Cs=-90,Is=1,Fo=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(Cs,Is,t,e);i.layers=this.layers,this.add(i);let r=new ke(Cs,Is,t,e);r.layers=this.layers,this.add(r);let a=new ke(Cs,Is,t,e);a.layers=this.layers,this.add(a);let o=new ke(Cs,Is,t,e);o.layers=this.layers,this.add(o);let l=new ke(Cs,Is,t,e);l.layers=this.layers,this.add(l);let c=new ke(Cs,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oo=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var gh="\\[\\]\\.:\\/",Dm=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Um="[^"+gh.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",xh),Fm=/(WCOD+)?/.source.replace("WCOD",Um),Om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),km=new RegExp("^"+zm+Fm+Om+Bm+"$"),Hm=["material","materials","bones","map"],Vc=class{constructor(t,e,n){let i=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Dm,"")}static parseTrackName(t){let e=km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Hm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Vc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fM=new Float32Array(1);var Qu=new se,Qr=class{constructor(t,e,n=0,i=1/0){this.ray=new ks(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Yt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qu),this}intersectObject(t,e=!0,n=[]){return Gc(t,this,n,e),n.sort(td),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Gc(t[i],this,n,e);return n.sort(td),n}};function td(s,t){return s.distance-t.distance}function Gc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Gc(r[a],t,e,!0)}}var bh=class bh{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};bh.prototype.isMatrix2=!0;var Wc=bh;function yh(s,t,e,n){let i=Vm(n);switch(e){case lh:return s*t;case Yo:return s*t/i.components*i.byteLength;case Zo:return s*t/i.components*i.byteLength;case Ni:return s*t*2/i.components*i.byteLength;case Ko:return s*t*2/i.components*i.byteLength;case ch:return s*t*3/i.components*i.byteLength;case _n:return s*t*4/i.components*i.byteLength;case Jo:return s*t*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jo:case tl:return Math.max(s,16)*Math.max(t,8)/4;case $o:case Qo:return Math.max(s,8)*Math.max(t,8)/2;case el:case nl:case sl:case rl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case il:case oa:case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ml:case Sl:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wl:case El:return Math.ceil(s/4)*Math.ceil(t/4)*8;case la:case Tl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vm(s){switch(s){case nn:case sh:return{byteLength:1,components:1};case Js:case rh:case Ln:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case Pn:case Wo:case yn:return{byteLength:4,components:1};case ah:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function pf(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ym(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Km=`#ifdef USE_ALPHAHASH
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
#endif`,Jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x0=`#define PI 3.141592653589793
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
} // validated`,y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,D0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,k0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,q0=`uniform sampler2D dfgLUT;
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
}`,Y0=`
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xg=`#ifdef USE_NORMALMAP
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
#endif`,yg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ng=`float getShadowMask() {
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
}`,Dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kg=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tx=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
}`,nx=`#define DISTANCE
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
}`,ix=`#define DISTANCE
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
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,lx=`#include <common>
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
}`,cx=`uniform vec3 diffuse;
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
}`,hx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,px=`#define NORMAL
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
}`,mx=`#define NORMAL
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
}`,gx=`#define PHONG
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
}`,xx=`#define PHONG
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
}`,yx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,vx=`#define TOON
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
}`,Mx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,bx=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,Ex=`uniform vec3 color;
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
}`,Tx=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Zm,alphahash_pars_fragment:Km,alphamap_fragment:Jm,alphamap_pars_fragment:$m,alphatest_fragment:jm,alphatest_pars_fragment:Qm,aomap_fragment:t0,aomap_pars_fragment:e0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:x0,cube_uv_reflection_fragment:y0,defaultnormal_vertex:_0,displacementmap_pars_vertex:v0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:b0,colorspace_fragment:w0,colorspace_pars_fragment:E0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:R0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:k0,envmap_vertex:I0,fog_vertex:P0,fog_pars_vertex:L0,fog_fragment:N0,fog_pars_fragment:D0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:z0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:B0,lights_toon_fragment:H0,lights_toon_pars_fragment:V0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:q0,lights_fragment_begin:Y0,lights_fragment_maps:Z0,lights_fragment_end:K0,lightprobes_pars_fragment:J0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphinstance_vertex:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:xg,clearcoat_normal_fragment_begin:yg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Eg,dithering_fragment:Tg,dithering_pars_fragment:Ag,roughnessmap_fragment:Rg,roughnessmap_pars_fragment:Cg,shadowmap_pars_fragment:Ig,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Ng,skinbase_vertex:Dg,skinning_pars_vertex:Ug,skinning_vertex:zg,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:kg,tonemapping_pars_fragment:Hg,transmission_fragment:Vg,transmission_pars_fragment:Gg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Zg,background_frag:Kg,backgroundCube_vert:Jg,backgroundCube_frag:$g,cube_vert:jg,cube_frag:Qg,depth_vert:tx,depth_frag:ex,distance_vert:nx,distance_frag:ix,equirect_vert:sx,equirect_frag:rx,linedashed_vert:ax,linedashed_frag:ox,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:hx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:xx,meshphysical_vert:yx,meshphysical_frag:_x,meshtoon_vert:vx,meshtoon_frag:Mx,points_vert:Sx,points_frag:bx,shadow_vert:wx,shadow_frag:Ex,sprite_vert:Tx,sprite_frag:Ax},bt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},jn={basic:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:qe([bt.points,bt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:qe([bt.common,bt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:qe([bt.sprite,bt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:qe([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:qe([bt.lights,bt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};jn.physical={uniforms:qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Il={r:0,b:0,g:0},Rx=new se,mf=new $t;mf.set(-1,0,0,0,1,0,0,0,1);function Cx(s,t,e,n,i,r){let a=new Bt(0),o=i===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){let y=v.backgroundBlurriness>0;w=t.get(w,y)}return w}function p(v){let w=!1,y=u(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),w=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,w){let y=u(w);y&&(y.isCubeTexture||y.mapping===ea)?(c===void 0&&(c=new xt(new Ae(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:es(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mf),c.material.toneMapped=le.getTransfer(y.colorSpace)!==me,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new xt(new tn(2,2),new Xe({name:"BackgroundMaterial",uniforms:es(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,w){v.getRGB(Il,mh(s)),e.buffers.color.setClear(Il.r,Il.g,Il.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Ix(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(N,U,H,T,I){let D=!1,z=f(N,T,H,U);r!==z&&(r=z,c(r.object)),D=u(N,T,H,I),D&&p(N,T,H,I),I!==null&&t.update(I,s.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,y(N,U,H,T),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function f(N,U,H,T){let I=T.wireframe===!0,D=n[U.id];D===void 0&&(D={},n[U.id]=D);let z=N.isInstancedMesh===!0?N.id:0,Z=D[z];Z===void 0&&(Z={},D[z]=Z);let V=Z[H.id];V===void 0&&(V={},Z[H.id]=V);let K=V[I];return K===void 0&&(K=d(l()),V[I]=K),K}function d(N){let U=[],H=[],T=[];for(let I=0;I<e;I++)U[I]=0,H[I]=0,T[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:T,object:N,attributes:{},index:null}}function u(N,U,H,T){let I=r.attributes,D=U.attributes,z=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let $=I[V],mt=D[V];if(mt===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(mt=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(mt=N.instanceColor)),$===void 0||$.attribute!==mt||mt&&$.data!==mt.data)return!0;z++}return r.attributesNum!==z||r.index!==T}function p(N,U,H,T){let I={},D=U.attributes,z=0,Z=H.getAttributes();for(let V in Z)if(Z[V].location>=0){let $=D[V];$===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&($=N.instanceColor));let mt={};mt.attribute=$,$&&$.data&&(mt.data=$.data),I[V]=mt,z++}r.attributes=I,r.attributesNum=z,r.index=T}function x(){let N=r.newAttributes;for(let U=0,H=N.length;U<H;U++)N[U]=0}function g(N){m(N,0)}function m(N,U){let H=r.newAttributes,T=r.enabledAttributes,I=r.attributeDivisors;H[N]=1,T[N]===0&&(s.enableVertexAttribArray(N),T[N]=1),I[N]!==U&&(s.vertexAttribDivisor(N,U),I[N]=U)}function v(){let N=r.newAttributes,U=r.enabledAttributes;for(let H=0,T=U.length;H<T;H++)U[H]!==N[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function w(N,U,H,T,I,D,z){z===!0?s.vertexAttribIPointer(N,U,H,I,D):s.vertexAttribPointer(N,U,H,T,I,D)}function y(N,U,H,T){x();let I=T.attributes,D=H.getAttributes(),z=U.defaultAttributeValues;for(let Z in D){let V=D[Z];if(V.location>=0){let K=I[Z];if(K===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){let $=K.normalized,mt=K.itemSize,ct=t.get(K);if(ct===void 0)continue;let Ht=ct.buffer,Ft=ct.type,Qt=ct.bytesPerElement,j=Ft===s.INT||Ft===s.UNSIGNED_INT||K.gpuType===Wo;if(K.isInterleavedBufferAttribute){let nt=K.data,yt=nt.stride,Wt=K.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt,nt.meshPerAttribute);N.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)g(V.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let Rt=0;Rt<V.locationSize;Rt++)w(V.location+Rt,mt/V.locationSize,Ft,$,yt*Qt,(Wt+mt/V.locationSize*Rt)*Qt,j)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt,K.meshPerAttribute);N.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<V.locationSize;nt++)g(V.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let nt=0;nt<V.locationSize;nt++)w(V.location+nt,mt/V.locationSize,Ft,$,mt*Qt,mt/V.locationSize*nt*Qt,j)}}else if(z!==void 0){let $=z[Z];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(V.location,$);break;case 3:s.vertexAttrib3fv(V.location,$);break;case 4:s.vertexAttrib4fv(V.location,$);break;default:s.vertexAttrib1fv(V.location,$)}}}}v()}function S(){E();for(let N in n){let U=n[N];for(let H in U){let T=U[H];for(let I in T){let D=T[I];for(let z in D)h(D[z].object),delete D[z];delete T[I]}}delete n[N]}}function M(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let H in U){let T=U[H];for(let I in T){let D=T[I];for(let z in D)h(D[z].object),delete D[z];delete T[I]}}delete n[N.id]}function R(N){for(let U in n){let H=n[U];for(let T in H){let I=H[T];if(I[N.id]===void 0)continue;let D=I[N.id];for(let z in D)h(D[z].object),delete D[z];delete I[N.id]}}}function _(N){for(let U in n){let H=n[U],T=N.isInstancedMesh===!0?N.id:0,I=H[T];if(I!==void 0){for(let D in I){let z=I[D];for(let Z in z)h(z[Z].object),delete z[Z];delete I[D]}delete H[T],Object.keys(H).length===0&&delete n[U]}}}function E(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Px(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==_n&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==nn&&R!==yn&&!_&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:S,samples:M}}function Nx(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Tn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,w=v*4,y=m.clippingState||null;l.value=y,y=h(p,d,w,u);for(let S=0;S!==w;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=u+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,y=u;w!==x;++w,y+=4)a.copy(f[w]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var tr=4,Dx=6,Ux=20,zx=256,ha=new Ys,qd=new Bt,wh=null,Eh=0,Th=0,Ah=!1,Fx=new L,ns=new L,nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=Fx}=r;wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wh,Eh,Th),this._renderer.xr.enabled=Ah,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wh=this._renderer.getRenderTarget(),Eh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ln,format:_n,colorSpace:wr,depthBuffer:!1},i=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ox(r)),this._blurMaterial=kx(r,t,e),this._ggxMaterial=Bx(r,t,e)}return i}_compileMaterial(t){let e=new xt(new ye,t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,i,r){let l=new ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(qd),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Ae,new Zn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,m=!0):(g.color.copy(qd),m=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Qs(i,y*S,w>2?S:0,S,S),f.setRenderTarget(i),m&&f.render(x,l),f.render(t,l)}f.toneMapping=u,f.autoClear=d,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ii||t.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=c*1.25,u=f*d,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-tr?n-p+tr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=p-e,Qs(r,g,m,3*x,2*x),i.setRenderTarget(r),i.render(o,ha),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Qs(t,g,m,3*x,2*x),i.setRenderTarget(t),i.render(o,ha)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-tr?i-this._lodMax+tr:0),d=4*(this._cubeSize-h);Qs(e,f,d,3*h,2*h),a.setRenderTarget(e),a.render(l,ha)}};function Ox(s){let t=[],e=[],n=s,i=s-tr+1+Dx;for(let r=0;r<i;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,u=3,p=new Float32Array(u*d*f),x=new Float32Array(u*d*f);for(let m=0;m<f;m++){let v=m%3*2/3-1,w=m>2?0:-1,y=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];p.set(y,u*d*m);for(let S=0;S<d;S++){let M=h[S*2]*2-1,R=h[S*2+1]*2-1;m===0?ns.set(1,R,M):m===1?ns.set(-M,1,-R):m===2?ns.set(-M,R,1):m===3?ns.set(-1,R,-M):m===4?ns.set(-M,-1,R):ns.set(M,R,-1),ns.toArray(x,(m*d+S)*u)}}let g=new ye;g.setAttribute("position",new Ee(p,u)),g.setAttribute("outputDirection",new Ee(x,u)),e.push(new xt(g,null)),n>tr&&n--}return{lodMeshes:e,sizeLods:t}}function Yd(s,t,e){let n=new Qe(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Bx(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function kx(s,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:Ux,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Zd(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Kd(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ll=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Dr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ae(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Jn});r.uniforms.tEquirect.value=e;let a=new xt(i,r),o=e.minFilter;return e.minFilter===Pi&&(e.minFilter=He),new Fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}};function Hx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Ho||u===Vo)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Ll(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,p=u===Ho||u===Vo,x=u===Ii||u===ts;if(p||x){let g=e.get(d),m=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new nr(s)),g=p?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new nr(s)),g=p?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===Ho?d.mapping=Ii:u===Vo&&(d.mapping=ts),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Vx(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xi("WebGLRenderer: "+n+" extension not supported."),i}}}function Gx(s,t,e,n){let i={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(u!==null){let v=u.array;x=u.version;for(let w=0,y=v.length;w<y;w+=3){let S=v[w+0],M=v[w+1],R=v[w+2];d.push(S,M,M,R,R,S)}}else{let v=p.array;x=p.version;for(let w=0,y=v.length/3-1;w<y;w+=3){let S=w+0,M=w+1,R=w+2;d.push(S,M,M,R,R,S)}}let g=new(p.count>=65535?Pr:Ir)(d,1);g.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Wx(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let g=0;g<u;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xx(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qx(s,t,e){let n=new WeakMap,i=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let E=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],w=0;u===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let M=new Float32Array(y*S*4*f),R=new Rr(M,y,S,f);R.type=yn,R.needsUpdate=!0;let _=w*4;for(let C=0;C<f;C++){let N=g[C],U=m[C],H=v[C],T=y*S*4*C;for(let I=0;I<N.count;I++){let D=I*_;u===!0&&(i.fromBufferAttribute(N,I),M[T+D+0]=i.x,M[T+D+1]=i.y,M[T+D+2]=i.z,M[T+D+3]=0),p===!0&&(i.fromBufferAttribute(U,I),M[T+D+4]=i.x,M[T+D+5]=i.y,M[T+D+6]=i.z,M[T+D+7]=0),x===!0&&(i.fromBufferAttribute(H,I),M[T+D+8]=i.x,M[T+D+9]=i.y,M[T+D+10]=i.z,M[T+D+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:R,size:new ot(y,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yx(s,t,e,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Zx={[$c]:"LINEAR_TONE_MAPPING",[jc]:"REINHARD_TONE_MAPPING",[Qc]:"CINEON_TONE_MAPPING",[ta]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[nh]:"NEUTRAL_TONE_MAPPING",[th]:"CUSTOM_TONE_MAPPING"};function Kx(s,t,e,n,i,r){let a=new Qe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ye;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xt(c,h),d=new Ys(-1,1,1,-1,0,1),u=null,p=null,x=!1,g,m=null,v=[],w=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let M=0;M<v.length;M++){let R=v[M];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){v=y,w=v.length>0&&v[0].isRenderPass===!0;let S=a.width,M=a.height;v.length>0&&o===null&&(o=new Qe(S,M,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(S,M,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let _=v[R];_.setSize&&_.setSize(S,M)}},this.begin=function(y,S){if(x||y.toneMapping===In&&v.length===0)return!1;if(m=S,S!==null){let M=S.width,R=S.height;(a.width!==M||a.height!==R)&&this.setSize(M,R)}return w===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=In,!0},this.hasRenderPass=function(){return w},this.end=function(y,S){y.toneMapping=g,x=!0;let M=a,R=o;for(let _=0;_<v.length;_++){let E=v[_];E.enabled!==!1&&(E.render(y,R,M,S),E.needsSwap!==!1&&(M=R,R=R===o?l:o))}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,h.defines={},le.getTransfer(u)===me&&(h.defines.SRGB_TRANSFER="");let _=Zx[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(f,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var gf=new Ke,Ih=new wi(1,1),xf=new Rr,yf=new mo,_f=new Dr,Jd=[],$d=[],jd=new Float32Array(16),Qd=new Float32Array(9),tf=new Float32Array(4);function ir(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Jd[i];if(r===void 0&&(r=new Float32Array(i),Jd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ue(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ul(s,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Jx(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function $x(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function jx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function Qx(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function ty(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;tf.set(n),s.uniformMatrix2fv(this.addr,!1,tf),ze(e,n)}}function ey(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;Qd.set(n),s.uniformMatrix3fv(this.addr,!1,Qd),ze(e,n)}}function ny(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Ue(e,n))return;jd.set(n),s.uniformMatrix4fv(this.addr,!1,jd),ze(e,n)}}function iy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function oy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ly(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function uy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ih.compareFunction=e.isReversedDepthBuffer()?Rl:Al,r=Ih):r=gf,e.setTexture2D(t||r,i)}function dy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||yf,i)}function fy(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_f,i)}function py(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xf,i)}function my(s){switch(s){case 5126:return Jx;case 35664:return $x;case 35665:return jx;case 35666:return Qx;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(s,t){s.uniform1fv(this.addr,t)}function xy(s,t){let e=ir(t,this.size,2);s.uniform2fv(this.addr,e)}function yy(s,t){let e=ir(t,this.size,3);s.uniform3fv(this.addr,e)}function _y(s,t){let e=ir(t,this.size,4);s.uniform4fv(this.addr,e)}function vy(s,t){let e=ir(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function My(s,t){let e=ir(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sy(s,t){let e=ir(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function by(s,t){s.uniform1iv(this.addr,t)}function wy(s,t){s.uniform2iv(this.addr,t)}function Ey(s,t){s.uniform3iv(this.addr,t)}function Ty(s,t){s.uniform4iv(this.addr,t)}function Ay(s,t){s.uniform1uiv(this.addr,t)}function Ry(s,t){s.uniform2uiv(this.addr,t)}function Cy(s,t){s.uniform3uiv(this.addr,t)}function Iy(s,t){s.uniform4uiv(this.addr,t)}function Py(s,t,e){let n=this.cache,i=t.length,r=Ul(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Ih:a=gf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Ly(s,t,e){let n=this.cache,i=t.length,r=Ul(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||yf,r[a])}function Ny(s,t,e){let n=this.cache,i=t.length,r=Ul(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||_f,r[a])}function Dy(s,t,e){let n=this.cache,i=t.length,r=Ul(e,i);Ue(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||xf,r[a])}function Uy(s){switch(s){case 5126:return gy;case 35664:return xy;case 35665:return yy;case 35666:return _y;case 35674:return vy;case 35675:return My;case 35676:return Sy;case 5124:case 35670:return by;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return Iy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Dy}}var Ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=my(e.type)}},Lh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uy(e.type)}},Nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function ef(s,t){s.seq.push(t),s.map[t.id]=t}function zy(s,t,e){let n=s.name,i=n.length;for(Rh.lastIndex=0;;){let r=Rh.exec(n),a=Rh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ef(e,c===void 0?new Ph(o,s,t):new Lh(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new Nh(o),ef(e,f)),e=f}}}var er=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);zy(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function nf(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Fy=37297,Oy=0;function By(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var sf=new $t;function ky(s){le._getMatrix(sf,le.workingColorSpace,s);let t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(s)){case Er:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rf(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+By(s.getShaderSource(t),o)}else return r}function Hy(s,t){let e=ky(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Vy={[$c]:"Linear",[jc]:"Reinhard",[Qc]:"Cineon",[ta]:"ACESFilmic",[eh]:"AgX",[nh]:"Neutral",[th]:"Custom"};function Gy(s,t){let e=Vy[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Pl=new L;function Wy(){le.getLuminanceCoefficients(Pl);let s=Pl.x.toFixed(4),t=Pl.y.toFixed(4),e=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function qy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yy(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function da(s){return s!==""}function af(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(s){return s.replace(Zy,Jy)}var Ky=new Map;function Jy(s,t){let e=ie[t];if(e===void 0){let n=Ky.get(t);if(n!==void 0)e=ie[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Dh(e)}var $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lf(s){return s.replace($y,jy)}function jy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var Qy={[ji]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function t_(s){return Qy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[Ii]:"ENVMAP_TYPE_CUBE",[ts]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE_UV"};function n_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":e_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[ts]:"ENVMAP_MODE_REFRACTION"};function s_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[ko]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function a_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":r_[s.combine]||"ENVMAP_BLENDING_NONE"}function o_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function l_(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=t_(e),c=n_(e),h=s_(e),f=a_(e),d=o_(e),u=Xy(e),p=qy(r),x=i.createProgram(),g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(da).join(`
`),m.length>0&&(m+=`
`)):(g=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?ie.tonemapping_pars_fragment:"",e.toneMapping!==In?Gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),Wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Dh(a),a=af(a,e),a=of(a,e),o=Dh(o),o=af(o,e),o=of(o,e),a=lf(a),o=lf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=v+g+a,y=v+m+o,S=nf(i,i.VERTEX_SHADER,w),M=nf(i,i.FRAGMENT_SHADER,y);i.attachShader(x,S),i.attachShader(x,M),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(N){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(S)||"",T=i.getShaderInfoLog(M)||"",I=U.trim(),D=H.trim(),z=T.trim(),Z=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,M);else{let K=rf(i,S,"vertex"),$=rf(i,M,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+I+`
`+K+`
`+$)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(D===""||z==="")&&(V=!1);V&&(N.diagnostics={runnable:Z,programLog:I,vertexShader:{log:D,prefix:g},fragmentShader:{log:z,prefix:m}})}i.deleteShader(S),i.deleteShader(M),_=new er(i,x),E=Yy(i,x)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Fy)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Oy++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var c_=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zh(t),e.set(t,n)),n}},zh=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function h_(s){return s===Ni||s===oa||s===la}function u_(s,t,e,n,i,r){let a=new Fs,o=new Uh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,C,N,U,H){let T=N.fog,I=U.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=t.get(_.envMap||D,z),V=Z&&Z.mapping===ea?Z.image.height:null,K=u[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,mt=$!==void 0?$.length:0,ct=0;I.morphAttributes.position!==void 0&&(ct=1),I.morphAttributes.normal!==void 0&&(ct=2),I.morphAttributes.color!==void 0&&(ct=3);let Ht,Ft,Qt,j;if(K){let Me=jn[K];Ht=Me.vertexShader,Ft=Me.fragmentShader}else{Ht=_.vertexShader,Ft=_.fragmentShader;let Me=o.getVertexShaderStage(_),fe=o.getFragmentShaderStage(_);o.update(_,Me,fe),Qt=Me.id,j=fe.id}let nt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Wt=U.isInstancedMesh===!0,Rt=U.isBatchedMesh===!0,Kt=!!_.map,ge=!!_.matcap,st=!!Z,lt=!!_.aoMap,ht=!!_.lightMap,ut=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,Xt=!!_.displacementMap,Vt=!!_.emissiveMap,Jt=!!_.metalnessMap,jt=!!_.roughnessMap,F=_.anisotropy>0,de=_.clearcoat>0,ae=_.dispersion>0,P=_.retroreflectivity>0,b=_.iridescence>0,G=_.sheen>0,Y=_.transmission>0,Q=F&&!!_.anisotropyMap,dt=de&&!!_.clearcoatMap,ft=de&&!!_.clearcoatNormalMap,tt=de&&!!_.clearcoatRoughnessMap,it=b&&!!_.iridescenceMap,_t=b&&!!_.iridescenceThicknessMap,Ut=G&&!!_.sheenColorMap,wt=G&&!!_.sheenRoughnessMap,vt=!!_.specularMap,zt=!!_.specularColorMap,qt=!!_.specularIntensityMap,te=Y&&!!_.transmissionMap,k=Y&&!!_.thicknessMap,Mt=!!_.gradientMap,et=!!_.alphaMap,St=_.alphaTest>0,At=!!_.alphaHash,at=!!_.extensions,Ot=In;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ot=s.toneMapping);let Nt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:Ht,fragmentShader:Ft,defines:_.defines,customVertexShaderID:Qt,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Rt,batchingColor:Rt&&U._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&U.instanceColor!==null,instancingMorph:Wt&&U.morphTexture!==null,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Kt,matcap:ge,envMap:st,envMapMode:st&&Z.mapping,envMapCubeUVHeight:V,aoMap:lt,lightMap:ht,bumpMap:ut,normalMap:gt,displacementMap:Xt,emissiveMap:Vt,normalMapObjectSpace:gt&&_.normalMapType===Td,normalMapTangentSpace:gt&&_.normalMapType===ca,packedNormalMap:gt&&_.normalMapType===ca&&h_(_.normalMap.format),metalnessMap:Jt,roughnessMap:jt,anisotropy:F,anisotropyMap:Q,clearcoat:de,clearcoatMap:dt,clearcoatNormalMap:ft,clearcoatRoughnessMap:tt,dispersion:ae,retroreflection:P,iridescence:b,iridescenceMap:it,iridescenceThicknessMap:_t,sheen:G,sheenColorMap:Ut,sheenRoughnessMap:wt,specularMap:vt,specularColorMap:zt,specularIntensityMap:qt,transmission:Y,transmissionMap:te,thicknessMap:k,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Ks&&_.alphaToCoverage===!1,alphaMap:et,alphaTest:St,alphaHash:At,combine:_.combine,mapUv:Kt&&p(_.map.channel),aoMapUv:lt&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:ut&&p(_.bumpMap.channel),normalMapUv:gt&&p(_.normalMap.channel),displacementMapUv:Xt&&p(_.displacementMap.channel),emissiveMapUv:Vt&&p(_.emissiveMap.channel),metalnessMapUv:Jt&&p(_.metalnessMap.channel),roughnessMapUv:jt&&p(_.roughnessMap.channel),anisotropyMapUv:Q&&p(_.anisotropyMap.channel),clearcoatMapUv:dt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&p(_.sheenRoughnessMap.channel),specularMapUv:vt&&p(_.specularMap.channel),specularColorMapUv:zt&&p(_.specularColorMap.channel),specularIntensityMapUv:qt&&p(_.specularIntensityMap.channel),transmissionMapUv:te&&p(_.transmissionMap.channel),thicknessMapUv:k&&p(_.thicknessMap.channel),alphaMapUv:et&&p(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||F),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Kt||et),fog:!!T,useFog:_.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:yt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:ct,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Kt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Vt&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Je,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:at&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&_.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(E,_),v(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function v(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let E=u[_.type],C;if(E){let N=jn[E];C=Cl.clone(N.uniforms)}else C=_.uniforms;return C}function y(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new l_(s,E,_,i),c.push(C),h.set(E,C)),C}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){o.remove(_)}function R(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:y,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:R}}function d_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function f_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function hf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uf(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,x,g,m){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},s[t]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=g,v.group=m),t++,v}function l(d,u,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let w=o(d,u,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):e.push(w)}function c(d,u,p,x,g,m){let v=o(d,u,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(d,u){e.length>1&&e.sort(d||f_),n.length>1&&n.sort(u||hf),i.length>1&&i.sort(u||hf)}function f(){for(let d=t,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function p_(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new uf,s.set(n,[a])):i>=r.length?(a=new uf,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function m_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Bt};break;case"SpotLight":e={position:new L,direction:new L,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function g_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var x_=0;function y_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function __(s){let t=new m_,e=g_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new se,a=new se;function o(c){let h=0,f=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,p=0,x=0,g=0,m=0,v=0,w=0,y=0,S=0,M=0,R=0,_=0,E=0,C=0;c.sort(y_);for(let U=0,H=c.length;U<H;U++){let T=c[U],I=T.color,D=T.intensity,z=T.distance,Z=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Ni?Z=T.shadow.map.texture:Z=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=I.r*D,f+=I.g*D,d+=I.b*D;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],D);C++}else if(T.isSunLight){let V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,$=e.get(T);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=Z;let mt=K.getViewportCount();for(let ct=0;ct<mt;ct++)n.sunShadowMatrix[x+ct]=K.getMatrix(ct),n.sunShadowCascade[x+ct]=K._cascadeData[ct];x+=mt,p++}n.sun[u]=V,u++}else if(T.isDirectionalLight){let V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let K=T.shadow,$=e.get(T);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=Z,n.directionalShadowMatrix[g]=T.shadow.matrix,S++}n.directional[g]=V,g++}else if(T.isSpotLight){let V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(I).multiplyScalar(D),V.distance=z,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[v]=V;let K=T.shadow;if(T.map&&(n.spotLightMap[_]=T.map,_++,K.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[v]=K.matrix,T.castShadow){let $=e.get(T);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Z,R++}v++}else if(T.isRectAreaLight){let V=t.get(T);V.color.copy(I).multiplyScalar(D),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[w]=V,w++}else if(T.isPointLight){let V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){let K=T.shadow,$=e.get(T);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=T.shadow.matrix,M++}n.point[m]=V,m++}else if(T.isHemisphereLight){let V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(D),V.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[y]=V,y++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let N=n.hash;(N.sunLength!==u||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==w||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==S||N.numPointShadows!==M||N.numSpotShadows!==R||N.numSpotMaps!==_||N.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=v,n.rectArea.length=w,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,N.sunLength=u,N.directionalLength=g,N.pointLength=m,N.spotLength=v,N.rectAreaLength=w,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=S,N.numPointShadows=M,N.numSpotShadows=R,N.numSpotMaps=_,N.numLightProbes=C,n.version=x_++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){let y=c[v];if(y.isSunLight){let S=n.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),d++}else if(y.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let S=n.point[u];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function df(s){let t=new __(s),e=[],n=[],i=[];function r(d){f.camera=d,e.length=0,n.length=0,i.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function v_(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new df(s),t.set(i,[o])):r>=a.length?(o=new df(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`,b_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],w_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],ff=new se,ua=new L,Ch=new L;function E_(s,t,e){let n=new Vs,i=new ot,r=new ot,a=new Te,o=new Eo,l=new To,c={},h=e.maxTextureSize,f={[Ci]:De,[De]:Ci,[Je]:Je},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new xt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ji;let m=this.type;this.render=function(M,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===id&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ji);let E=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Jn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=m!==this.type;H&&R.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(I=>I.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,I=M.length;T<I;T++){let D=M[T],z=D.shadow;if(z===void 0){Zt("WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Z=z.getFrameExtents();i.multiply(Z),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,z.mapSize.y=r.y));let V=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Zs){if(D.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Qe(i.x,i.y,{format:Ni,type:Ln,minFilter:He,magFilter:He,generateMipmaps:!1}),z.map.texture.name=D.name+".shadowMap",z.map.depthTexture=new wi(i.x,i.y,yn),z.map.depthTexture.name=D.name+".shadowMapDepth",z.map.depthTexture.format=Gn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe}else D.isPointLight?(z.map=new Ll(i.x),z.map.depthTexture=new go(i.x,Pn)):(z.map=new Qe(i.x,i.y),z.map.depthTexture=new wi(i.x,i.y,Pn)),z.map.depthTexture.name=D.name+".shadowMap",z.map.depthTexture.format=Gn,this.type===ji?(z.map.depthTexture.compareFunction=V?Rl:Al,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Oe,z.map.depthTexture.magFilter=Oe);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let K=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();D.isPointLight!==!0&&z.updateMatrices(D,_);for(let $=0;$<K;$++){let mt=z.getCamera($);if(D.isPointLight){let ct=z.camera,Ht=z.matrix,Ft=D.distance||ct.far;Ft!==ct.far&&(ct.far=Ft,ct.updateProjectionMatrix()),ua.setFromMatrixPosition(D.matrixWorld),ct.position.copy(ua),Ch.copy(ct.position),Ch.add(b_[$]),ct.up.copy(w_[$]),ct.lookAt(Ch),ct.updateMatrixWorld(),Ht.makeTranslation(-ua.x,-ua.y,-ua.z),ff.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ff,ct.coordinateSystem,ct.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,$),s.clear();else{$===0&&(s.setRenderTarget(z.map),s.clear());let ct=z.getViewport($);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),U.viewport(a)}n=z.getFrustum($),y(R,_,mt,D,this.type)}z.isPointLightShadow!==!0&&this.type===Zs&&v(z,_),z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,C,N)};function v(M,R){let _=t.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,u.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),M.mapPass===null?M.mapPass=new Qe(i.x,i.y,{format:Ni,type:Ln}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(R,null,_,d,x,null),u.uniforms.shadow_pass.value=M.mapPass.texture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(R,null,_,u,x,null)}function w(M,R,_,E){let C=null,N=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)C=N;else if(C=_.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=C.uuid,H=R.uuid,T=c[U];T===void 0&&(T={},c[U]=T);let I=T[H];I===void 0&&(I=C.clone(),T[H]=I,R.addEventListener("dispose",S)),C=I}if(C.visible=R.visible,C.wireframe=R.wireframe,E===Zs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=s.properties.get(C);U.light=_}return C}function y(M,R,_,E,C){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===Zs)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let H=t.update(M),T=M.material;if(Array.isArray(T)){let I=H.groups;for(let D=0,z=I.length;D<z;D++){let Z=I[D],V=T[Z.materialIndex];if(V&&V.visible){let K=w(M,V,E,C);M.onBeforeShadow(s,M,R,_,H,K,Z),s.renderBufferDirect(_,null,H,K,M,Z),M.onAfterShadow(s,M,R,_,H,K,Z)}}}else if(T.visible){let I=w(M,T,E,C);M.onBeforeShadow(s,M,R,_,H,I,null),s.renderBufferDirect(_,null,H,I,M,null),M.onAfterShadow(s,M,R,_,H,I,null)}}let U=M.children;for(let H=0,T=U.length;H<T;H++)y(U[H],R,_,E,C)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],C=M.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function T_(s,t){function e(){let k=!1,Mt=new Te,et=null,St=new Te(0,0,0,0);return{setMask:function(At){et!==At&&!k&&(s.colorMask(At,At,At,At),et=At)},setLocked:function(At){k=At},setClear:function(At,at,Ot,Nt,Me){Me===!0&&(At*=Nt,at*=Nt,Ot*=Nt),Mt.set(At,at,Ot,Nt),St.equals(Mt)===!1&&(s.clearColor(At,at,Ot,Nt),St.copy(Mt))},reset:function(){k=!1,et=null,St.set(-1,0,0,0)}}}function n(){let k=!1,Mt=!1,et=null,St=null,At=null;return{setReversed:function(at){if(Mt!==at){let Ot=t.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Mt=at;let Nt=At;At=null,this.setClear(Nt)}},getReversed:function(){return Mt},setTest:function(at){at?nt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(at){et!==at&&!k&&(s.depthMask(at),et=at)},setFunc:function(at){if(Mt&&(at=Fd[at]),St!==at){switch(at){case io:s.depthFunc(s.NEVER);break;case so:s.depthFunc(s.ALWAYS);break;case ro:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ao:s.depthFunc(s.EQUAL);break;case oo:s.depthFunc(s.GEQUAL);break;case lo:s.depthFunc(s.GREATER);break;case co:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=at}},setLocked:function(at){k=at},setClear:function(at){At!==at&&(At=at,Mt&&(at=1-at),s.clearDepth(at))},reset:function(){k=!1,et=null,St=null,At=null,Mt=!1}}}function i(){let k=!1,Mt=null,et=null,St=null,At=null,at=null,Ot=null,Nt=null,Me=null;return{setTest:function(fe){k||(fe?nt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(fe){Mt!==fe&&!k&&(s.stencilMask(fe),Mt=fe)},setFunc:function(fe,Sn,On){(et!==fe||St!==Sn||At!==On)&&(s.stencilFunc(fe,Sn,On),et=fe,St=Sn,At=On)},setOp:function(fe,Sn,On){(at!==fe||Ot!==Sn||Nt!==On)&&(s.stencilOp(fe,Sn,On),at=fe,Ot=Sn,Nt=On)},setLocked:function(fe){k=fe},setClear:function(fe){Me!==fe&&(s.clearStencil(fe),Me=fe)},reset:function(){k=!1,Mt=null,et=null,St=null,At=null,at=null,Ot=null,Nt=null,Me=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,S=null,M=null,R=null,_=new Bt(0,0,0),E=0,C=!1,N=null,U=null,H=null,T=null,I=null,D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=Z>=2);let K=null,$={},mt=s.getParameter(s.SCISSOR_BOX),ct=s.getParameter(s.VIEWPORT),Ht=new Te().fromArray(mt),Ft=new Te().fromArray(ct);function Qt(k,Mt,et,St){let At=new Uint8Array(4),at=s.createTexture();s.bindTexture(k,at),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<et;Ot++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Mt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return at}let j={};j[s.TEXTURE_2D]=Qt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(Ls),ut(!1),gt(Xc),nt(s.CULL_FACE),lt(Jn);function nt(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function yt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Wt(k,Mt){return d[k]!==Mt?(s.bindFramebuffer(k,Mt),d[k]=Mt,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Mt),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Rt(k,Mt){let et=p,St=!1;if(k){et=u.get(Mt),et===void 0&&(et=[],u.set(Mt,et));let At=k.textures;if(et.length!==At.length||et[0]!==s.COLOR_ATTACHMENT0){for(let at=0,Ot=At.length;at<Ot;at++)et[at]=s.COLOR_ATTACHMENT0+at;et.length=At.length,St=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,St=!0);St&&s.drawBuffers(et)}function Kt(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let ge={[Qi]:s.FUNC_ADD,[rd]:s.FUNC_SUBTRACT,[ad]:s.FUNC_REVERSE_SUBTRACT};ge[od]=s.MIN,ge[ld]=s.MAX;let st={[cd]:s.ZERO,[hd]:s.ONE,[ud]:s.SRC_COLOR,[Kc]:s.SRC_ALPHA,[xd]:s.SRC_ALPHA_SATURATE,[md]:s.DST_COLOR,[fd]:s.DST_ALPHA,[dd]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[gd]:s.ONE_MINUS_DST_COLOR,[pd]:s.ONE_MINUS_DST_ALPHA,[yd]:s.CONSTANT_COLOR,[_d]:s.ONE_MINUS_CONSTANT_COLOR,[vd]:s.CONSTANT_ALPHA,[Md]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(k,Mt,et,St,At,at,Ot,Nt,Me,fe){if(k===Jn){g===!0&&(yt(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),k!==sd){if(k!==m||fe!==C){if((v!==Qi||S!==Qi)&&(s.blendEquation(s.FUNC_ADD),v=Qi,S=Qi),fe)switch(k){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case Yc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yc:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",k);break}w=null,y=null,M=null,R=null,_.set(0,0,0),E=0,m=k,C=fe}return}At=At||Mt,at=at||et,Ot=Ot||St,(Mt!==v||At!==S)&&(s.blendEquationSeparate(ge[Mt],ge[At]),v=Mt,S=At),(et!==w||St!==y||at!==M||Ot!==R)&&(s.blendFuncSeparate(st[et],st[St],st[at],st[Ot]),w=et,y=St,M=at,R=Ot),(Nt.equals(_)===!1||Me!==E)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Me),_.copy(Nt),E=Me),m=k,C=!1}function ht(k,Mt){k.side===Je?yt(s.CULL_FACE):nt(s.CULL_FACE);let et=k.side===De;Mt&&(et=!et),ut(et),k.blending===Ks&&k.transparent===!1?lt(Jn):lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let St=k.stencilWrite;o.setTest(St),St&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(k){N!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),N=k)}function gt(k){k!==ed?(nt(s.CULL_FACE),k!==U&&(k===Xc?s.cullFace(s.BACK):k===nd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),U=k}function Xt(k){k!==H&&(z&&s.lineWidth(k),H=k)}function Vt(k,Mt,et){k?(nt(s.POLYGON_OFFSET_FILL),(T!==Mt||I!==et)&&(T=Mt,I=et,a.getReversed()&&(Mt=-Mt),s.polygonOffset(Mt,et))):yt(s.POLYGON_OFFSET_FILL)}function Jt(k){k?nt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function jt(k){k===void 0&&(k=s.TEXTURE0+D-1),K!==k&&(s.activeTexture(k),K=k)}function F(k,Mt,et){et===void 0&&(K===null?et=s.TEXTURE0+D-1:et=K);let St=$[et];St===void 0&&(St={type:void 0,texture:void 0},$[et]=St),(St.type!==k||St.texture!==Mt)&&(K!==et&&(s.activeTexture(et),K=et),s.bindTexture(k,Mt||j[k]),St.type=k,St.texture=Mt)}function de(){let k=$[K];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ae(){try{s.compressedTexImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function b(){try{s.texSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function G(){try{s.texSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function dt(){try{s.texStorage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function ft(){try{s.texStorage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function tt(){try{s.texImage2D(...arguments)}catch(k){Yt("WebGLState:",k)}}function it(){try{s.texImage3D(...arguments)}catch(k){Yt("WebGLState:",k)}}function _t(k){return f[k]!==void 0?f[k]:s.getParameter(k)}function Ut(k,Mt){f[k]!==Mt&&(s.pixelStorei(k,Mt),f[k]=Mt)}function wt(k){Ht.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ht.copy(k))}function vt(k){Ft.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ft.copy(k))}function zt(k,Mt){let et=c.get(Mt);et===void 0&&(et=new WeakMap,c.set(Mt,et));let St=et.get(k);St===void 0&&(St=s.getUniformBlockIndex(Mt,k.name),et.set(k,St))}function qt(k,Mt){let St=c.get(Mt).get(k);l.get(Mt)!==St&&(s.uniformBlockBinding(Mt,St,k.__bindingPointIndex),l.set(Mt,St))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},K=null,$={},d={},u=new WeakMap,p=[],x=null,g=!1,m=null,v=null,w=null,y=null,S=null,M=null,R=null,_=new Bt(0,0,0),E=0,C=!1,N=null,U=null,H=null,T=null,I=null,Ht.set(0,0,s.canvas.width,s.canvas.height),Ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:yt,bindFramebuffer:Wt,drawBuffers:Rt,useProgram:Kt,setBlending:lt,setMaterial:ht,setFlipSided:ut,setCullFace:gt,setLineWidth:Xt,setPolygonOffset:Vt,setScissorTest:Jt,activeTexture:jt,bindTexture:F,unbindTexture:de,compressedTexImage2D:ae,compressedTexImage3D:P,texImage2D:tt,texImage3D:it,pixelStorei:Ut,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:dt,texStorage3D:ft,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:Q,scissor:wt,viewport:vt,reset:te}}function A_(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,b){return p?new OffscreenCanvas(P,b):Tr("canvas")}function g(P,b,G){let Y=1,Q=ae(P);if((Q.width>G||Q.height>G)&&(Y=G/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let dt=Math.floor(Y*Q.width),ft=Math.floor(Y*Q.height);d===void 0&&(d=x(dt,ft));let tt=b?x(dt,ft):d;return tt.width=dt,tt.height=ft,tt.getContext("2d").drawImage(P,0,0,dt,ft),Zt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+dt+"x"+ft+")."),tt}else return"data"in P&&Zt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function m(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(P,b,G,Y,Q,dt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ft;Y&&(ft=t.get("EXT_texture_norm16"),ft||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=b;if(b===s.RED&&(G===s.FLOAT&&(tt=s.R32F),G===s.HALF_FLOAT&&(tt=s.R16F),G===s.UNSIGNED_BYTE&&(tt=s.R8),G===s.UNSIGNED_SHORT&&ft&&(tt=ft.R16_EXT),G===s.SHORT&&ft&&(tt=ft.R16_SNORM_EXT)),b===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.R8UI),G===s.UNSIGNED_SHORT&&(tt=s.R16UI),G===s.UNSIGNED_INT&&(tt=s.R32UI),G===s.BYTE&&(tt=s.R8I),G===s.SHORT&&(tt=s.R16I),G===s.INT&&(tt=s.R32I)),b===s.RG&&(G===s.FLOAT&&(tt=s.RG32F),G===s.HALF_FLOAT&&(tt=s.RG16F),G===s.UNSIGNED_BYTE&&(tt=s.RG8),G===s.UNSIGNED_SHORT&&ft&&(tt=ft.RG16_EXT),G===s.SHORT&&ft&&(tt=ft.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RG8UI),G===s.UNSIGNED_SHORT&&(tt=s.RG16UI),G===s.UNSIGNED_INT&&(tt=s.RG32UI),G===s.BYTE&&(tt=s.RG8I),G===s.SHORT&&(tt=s.RG16I),G===s.INT&&(tt=s.RG32I)),b===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),G===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),G===s.UNSIGNED_INT&&(tt=s.RGB32UI),G===s.BYTE&&(tt=s.RGB8I),G===s.SHORT&&(tt=s.RGB16I),G===s.INT&&(tt=s.RGB32I)),b===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),G===s.UNSIGNED_INT&&(tt=s.RGBA32UI),G===s.BYTE&&(tt=s.RGBA8I),G===s.SHORT&&(tt=s.RGBA16I),G===s.INT&&(tt=s.RGBA32I)),b===s.RGB&&(G===s.UNSIGNED_SHORT&&ft&&(tt=ft.RGB16_EXT),G===s.SHORT&&ft&&(tt=ft.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),b===s.RGBA){let it=dt?Er:le.getTransfer(Q);G===s.FLOAT&&(tt=s.RGBA32F),G===s.HALF_FLOAT&&(tt=s.RGBA16F),G===s.UNSIGNED_BYTE&&(tt=it===me?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&ft&&(tt=ft.RGBA16_EXT),G===s.SHORT&&ft&&(tt=ft.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function S(P,b){let G;return P?b===null||b===Pn||b===$s?G=s.DEPTH24_STENCIL8:b===yn?G=s.DEPTH32F_STENCIL8:b===Js&&(G=s.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pn||b===$s?G=s.DEPTH_COMPONENT24:b===yn?G=s.DEPTH_COMPONENT32F:b===Js&&(G=s.DEPTH_COMPONENT16),G}function M(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Oe&&P.minFilter!==He?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function R(P){let b=P.target;b.removeEventListener("dispose",R),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function _(P){let b=P.target;b.removeEventListener("dispose",_),N(b)}function E(P){let b=n.get(P);if(b.__webglInit===void 0)return;let G=P.source,Y=u.get(G);if(Y){let Q=Y[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(P),Object.keys(Y).length===0&&u.delete(G)}n.remove(P)}function C(P){let b=n.get(P);s.deleteTexture(b.__webglTexture);let G=P.source,Y=u.get(G);delete Y[b.__cacheKey],a.memory.textures--}function N(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let Q=0;Q<b.__webglFramebuffer[Y].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Y][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)s.deleteFramebuffer(b.__webglFramebuffer[Y]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=P.textures;for(let Y=0,Q=G.length;Y<Q;Y++){let dt=n.get(G[Y]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(G[Y])}n.remove(P)}let U=0;function H(){U=0}function T(){return U}function I(P){U=P}function D(){let P=U;return P>=i.maxTextures&&Zt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,P}function z(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function Z(P,b){let G=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let Y=P.image;if(Y===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(G,P,b);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+b)}function V(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){yt(G,P,b);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+b)}function K(P,b){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){yt(G,P,b);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+b)}function $(P,b){let G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Wt(G,P,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+b)}let mt={[gn]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},ct={[Oe]:s.NEAREST,[wd]:s.NEAREST_MIPMAP_NEAREST,[na]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Go]:s.LINEAR_MIPMAP_NEAREST,[Pi]:s.LINEAR_MIPMAP_LINEAR},Ht={[Rd]:s.NEVER,[Nd]:s.ALWAYS,[Cd]:s.LESS,[Al]:s.LEQUAL,[Id]:s.EQUAL,[Rl]:s.GEQUAL,[Pd]:s.GREATER,[Ld]:s.NOTEQUAL};function Ft(P,b){if(b.type===yn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===He||b.magFilter===Go||b.magFilter===na||b.magFilter===Pi||b.minFilter===He||b.minFilter===Go||b.minFilter===na||b.minFilter===Pi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,mt[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,mt[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,mt[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ct[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ct[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Oe||b.minFilter!==na&&b.minFilter!==Pi||b.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(P,b){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",R));let Y=b.source,Q=u.get(Y);Q===void 0&&(Q={},u.set(Y,Q));let dt=z(b);if(dt!==P.__cacheKey){Q[dt]===void 0&&(Q[dt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),Q[dt].usedTimes++;let ft=Q[P.__cacheKey];ft!==void 0&&(Q[P.__cacheKey].usedTimes--,ft.usedTimes===0&&C(b)),P.__cacheKey=dt,P.__webglTexture=Q[dt].texture}return G}function j(P,b,G){return Math.floor(Math.floor(P/G)/b)}function nt(P,b,G,Y){let dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,G,Y,b.data);else{dt.sort((Ut,wt)=>Ut.start-wt.start);let ft=0;for(let Ut=1;Ut<dt.length;Ut++){let wt=dt[ft],vt=dt[Ut],zt=wt.start+wt.count,qt=j(vt.start,b.width,4),te=j(wt.start,b.width,4);vt.start<=zt+1&&qt===te&&j(vt.start+vt.count-1,b.width,4)===qt?wt.count=Math.max(wt.count,vt.start+vt.count-wt.start):(++ft,dt[ft]=vt)}dt.length=ft+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),_t=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ut=0,wt=dt.length;Ut<wt;Ut++){let vt=dt[Ut],zt=Math.floor(vt.start/4),qt=Math.ceil(vt.count/4),te=zt%b.width,k=Math.floor(zt/b.width),Mt=qt,et=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,te),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,te,k,Mt,et,G,Y,b.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function yt(P,b,G){let Y=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=s.TEXTURE_3D);let Q=Qt(P,b),dt=b.source;e.bindTexture(Y,P.__webglTexture,s.TEXTURE0+G);let ft=n.get(dt);if(dt.version!==ft.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap!="undefined"&&b.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),St=b.colorSpace===ui?null:le.getPrimaries(b.colorSpace),At=b.colorSpace===ui||et===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let it=g(b.image,!1,i.maxTextureSize);it=de(b,it);let _t=r.convert(b.format,b.colorSpace),Ut=r.convert(b.type),wt=y(b.internalFormat,_t,Ut,b.normalized,b.colorSpace,b.isVideoTexture);Ft(Y,b);let vt,zt=b.mipmaps,qt=b.isVideoTexture!==!0,te=ft.__version===void 0||Q===!0,k=dt.dataReady,Mt=M(b,it);if(b.isDepthTexture)wt=S(b.format===Li,b.type),te&&(qt?e.texStorage2D(s.TEXTURE_2D,1,wt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,wt,it.width,it.height,0,_t,Ut,null));else if(b.isDataTexture)if(zt.length>0){qt&&te&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,zt[0].width,zt[0].height);for(let et=0,St=zt.length;et<St;et++)vt=zt[et],qt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,vt.width,vt.height,_t,Ut,vt.data):e.texImage2D(s.TEXTURE_2D,et,wt,vt.width,vt.height,0,_t,Ut,vt.data);b.generateMipmaps=!1}else qt?(te&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,it.width,it.height),k&&nt(b,it,_t,Ut)):e.texImage2D(s.TEXTURE_2D,0,wt,it.width,it.height,0,_t,Ut,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){qt&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,wt,zt[0].width,zt[0].height,it.depth);for(let et=0,St=zt.length;et<St;et++)if(vt=zt[et],b.format!==_n)if(_t!==null)if(qt){if(k)if(b.layerUpdates.size>0){let At=yh(vt.width,vt.height,b.format,b.type);for(let at of b.layerUpdates){let Ot=vt.data.subarray(at*At/vt.data.BYTES_PER_ELEMENT,(at+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,at,vt.width,vt.height,1,_t,Ot)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,vt.width,vt.height,it.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,wt,vt.width,vt.height,it.depth,0,vt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,vt.width,vt.height,it.depth,_t,Ut,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,wt,vt.width,vt.height,it.depth,0,_t,Ut,vt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{qt&&te&&e.texStorage2D(s.TEXTURE_2D,Mt,wt,zt[0].width,zt[0].height);for(let et=0,St=zt.length;et<St;et++)vt=zt[et],b.format!==_n?_t!==null?qt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,wt,vt.width,vt.height,0,vt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,vt.width,vt.height,_t,Ut,vt.data):e.texImage2D(s.TEXTURE_2D,et,wt,vt.width,vt.height,0,_t,Ut,vt.data)}else if(b.isDataArrayTexture)if(qt){if(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,wt,it.width,it.height,it.depth),k)if(b.layerUpdates.size>0){let et=yh(it.width,it.height,b.format,b.type);for(let St of b.layerUpdates){let At=it.data.subarray(St*et/it.data.BYTES_PER_ELEMENT,(St+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,it.width,it.height,1,_t,Ut,At)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,Ut,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,it.width,it.height,it.depth,0,_t,Ut,it.data);else if(b.isData3DTexture)qt?(te&&e.texStorage3D(s.TEXTURE_3D,Mt,wt,it.width,it.height,it.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,Ut,it.data)):e.texImage3D(s.TEXTURE_3D,0,wt,it.width,it.height,it.depth,0,_t,Ut,it.data);else if(b.isFramebufferTexture){if(te)if(qt)e.texStorage2D(s.TEXTURE_2D,Mt,wt,it.width,it.height);else{let et=it.width,St=it.height;for(let At=0;At<Mt;At++)e.texImage2D(s.TEXTURE_2D,At,wt,et,St,0,_t,Ut,null),et>>=1,St>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let et=s.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),f.add(b),et.onpaint=St=>{let At=St.changedElements;for(let at of f)At.includes(at.image)&&(at.needsUpdate=!0)},et.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let At=s.RGBA,at=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,At,at,Ot,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&te){let et=ae(zt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,wt,et.width,et.height)}for(let et=0,St=zt.length;et<St;et++)vt=zt[et],qt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,_t,Ut,vt):e.texImage2D(s.TEXTURE_2D,et,wt,_t,Ut,vt);b.generateMipmaps=!1}else if(qt){if(te){let et=ae(it);e.texStorage2D(s.TEXTURE_2D,Mt,wt,et.width,et.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Ut,it)}else e.texImage2D(s.TEXTURE_2D,0,wt,_t,Ut,it);m(b)&&v(Y),ft.__version=dt.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Wt(P,b,G){if(b.image.length!==6)return;let Y=Qt(P,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);let dt=n.get(Q);if(Q.version!==dt.__version||Y===!0){e.activeTexture(s.TEXTURE0+G);let ft=le.getPrimaries(le.workingColorSpace),tt=b.colorSpace===ui?null:le.getPrimaries(b.colorSpace),it=b.colorSpace===ui||ft===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let _t=b.isCompressedTexture||b.image[0].isCompressedTexture,Ut=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let at=0;at<6;at++)!_t&&!Ut?wt[at]=g(b.image[at],!0,i.maxCubemapSize):wt[at]=Ut?b.image[at].image:b.image[at],wt[at]=de(b,wt[at]);let vt=wt[0],zt=r.convert(b.format,b.colorSpace),qt=r.convert(b.type),te=y(b.internalFormat,zt,qt,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,Mt=dt.__version===void 0||Y===!0,et=Q.dataReady,St=M(b,vt);Ft(s.TEXTURE_CUBE_MAP,b);let At;if(_t){k&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,te,vt.width,vt.height);for(let at=0;at<6;at++){At=wt[at].mipmaps;for(let Ot=0;Ot<At.length;Ot++){let Nt=At[Ot];b.format!==_n?zt!==null?k?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Nt.width,Nt.height,zt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,te,Nt.width,Nt.height,0,Nt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,0,0,Nt.width,Nt.height,zt,qt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot,te,Nt.width,Nt.height,0,zt,qt,Nt.data)}}}else{if(At=b.mipmaps,k&&Mt){At.length>0&&St++;let at=ae(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,te,at.width,at.height)}for(let at=0;at<6;at++)if(Ut){k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,wt[at].width,wt[at].height,zt,qt,wt[at].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,te,wt[at].width,wt[at].height,0,zt,qt,wt[at].data);for(let Ot=0;Ot<At.length;Ot++){let Me=At[Ot].image[at].image;k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,Me.width,Me.height,zt,qt,Me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,te,Me.width,Me.height,0,zt,qt,Me.data)}}else{k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,zt,qt,wt[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,te,zt,qt,wt[at]);for(let Ot=0;Ot<At.length;Ot++){let Nt=At[Ot];k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,0,0,zt,qt,Nt.image[at]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ot+1,te,zt,qt,Nt.image[at])}}}m(b)&&v(s.TEXTURE_CUBE_MAP),dt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Rt(P,b,G,Y,Q,dt){let ft=r.convert(G.format,G.colorSpace),tt=r.convert(G.type),it=y(G.internalFormat,ft,tt,G.normalized,G.colorSpace),_t=n.get(b),Ut=n.get(G);if(Ut.__renderTarget=b,!_t.__hasExternalTextures){let wt=Math.max(1,b.width>>dt),vt=Math.max(1,b.height>>dt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,dt,it,wt,vt,b.depth,0,ft,tt,null):e.texImage2D(Q,dt,it,wt,vt,0,ft,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),jt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,Q,Ut.__webglTexture,0,Jt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,Q,Ut.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(P,b,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){let Y=b.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,dt=S(b.stencilBuffer,Q),ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(b),dt,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(b),dt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,dt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,P)}else{let Y=b.textures;for(let Q=0;Q<Y.length;Q++){let dt=Y[Q],ft=r.convert(dt.format,dt.colorSpace),tt=r.convert(dt.type),it=y(dt.internalFormat,ft,tt,dt.normalized,dt.colorSpace);jt(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt(b),it,b.width,b.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt(b),it,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,it,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(P,b,G){let Y=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,b.depthTexture);let _t=r.convert(b.depthTexture.format),Ut=r.convert(b.depthTexture.type),wt;b.depthTexture.format===Gn?wt=s.DEPTH_COMPONENT24:b.depthTexture.format===Li&&(wt=s.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,wt,b.width,b.height,0,_t,Ut,null)}}else Z(b.depthTexture,0);let dt=Q.__webglTexture,ft=Jt(b),tt=Y?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,it=b.depthTexture.format===Li?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Gn)jt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,dt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,dt,0);else if(b.depthTexture.format===Li)jt(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,tt,dt,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,it,tt,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(P){let b=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)ge(b.__webglFramebuffer[Y],P,Y);else{let Y=P.texture.mipmaps;Y&&Y.length>0?ge(b.__webglFramebuffer[0],P,0):ge(b.__webglFramebuffer,P,0)}else if(G){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=s.createRenderbuffer(),Kt(b.__webglDepthbuffer[Y],P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,dt)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Kt(b.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(P,b,G){let Y=n.get(P);b!==void 0&&Rt(Y.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&st(P)}function ht(P){let b=P.texture,G=n.get(P),Y=n.get(b);P.addEventListener("dispose",_);let Q=P.textures,dt=P.isWebGLCubeRenderTarget===!0,ft=Q.length>1;if(ft||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=b.version,a.memory.textures++),dt){G.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[tt]=[];for(let it=0;it<b.mipmaps.length;it++)G.__webglFramebuffer[tt][it]=s.createFramebuffer()}else G.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let tt=0;tt<b.mipmaps.length;tt++)G.__webglFramebuffer[tt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ft)for(let tt=0,it=Q.length;tt<it;tt++){let _t=n.get(Q[tt]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&jt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let tt=0;tt<Q.length;tt++){let it=Q[tt];G.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[tt]);let _t=r.convert(it.format,it.colorSpace),Ut=r.convert(it.type),wt=y(it.internalFormat,_t,Ut,it.normalized,it.colorSpace,P.isXRRenderTarget===!0),vt=Jt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,wt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,G.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Kt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(s.TEXTURE_CUBE_MAP,b);for(let tt=0;tt<6;tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)Rt(G.__webglFramebuffer[tt][it],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else Rt(G.__webglFramebuffer[tt],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(b)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let tt=0,it=Q.length;tt<it;tt++){let _t=Q[tt],Ut=n.get(_t),wt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(wt,Ut.__webglTexture),Ft(wt,_t),Rt(G.__webglFramebuffer,P,_t,s.COLOR_ATTACHMENT0+tt,wt,0),m(_t)&&v(wt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),Ft(tt,b),b.mipmaps&&b.mipmaps.length>0)for(let it=0;it<b.mipmaps.length;it++)Rt(G.__webglFramebuffer[it],P,b,s.COLOR_ATTACHMENT0,tt,it);else Rt(G.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,tt,0);m(b)&&v(tt),e.unbindTexture()}P.depthBuffer&&st(P)}function ut(P){let b=P.textures;for(let G=0,Y=b.length;G<Y;G++){let Q=b[G];if(m(Q)){let dt=w(P),ft=n.get(Q).__webglTexture;e.bindTexture(dt,ft),v(dt),e.unbindTexture()}}}let gt=[],Xt=[];function Vt(P){if(P.samples>0){if(jt(P)===!1){let b=P.textures,G=P.width,Y=P.height,Q=s.COLOR_BUFFER_BIT,dt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=n.get(P),tt=b.length>1;if(tt)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let it=P.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ut=n.get(b[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,G,Y,0,0,G,Y,Q,s.NEAREST),l===!0&&(gt.length=0,Xt.length=0,gt.push(s.COLOR_ATTACHMENT0+_t),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(gt.push(dt),Xt.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ut=n.get(b[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Jt(P){return Math.min(i.maxSamples,P.samples)}function jt(P){let b=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function de(P,b){let G=P.colorSpace,Y=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==wr&&G!==ui&&(le.getTransfer(G)===me?(Y!==_n||Q!==nn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",G)),b}function ae(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=H,this.getTextureUnits=T,this.setTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(s,t){function e(n,i=ui){let r,a=le.getTransfer(i);if(n===nn)return s.UNSIGNED_BYTE;if(n===Xo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ah)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return s.BYTE;if(n===rh)return s.SHORT;if(n===Js)return s.UNSIGNED_SHORT;if(n===Wo)return s.INT;if(n===Pn)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===Ln)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===ch)return s.RGB;if(n===_n)return s.RGBA;if(n===Gn)return s.DEPTH_COMPONENT;if(n===Li)return s.DEPTH_STENCIL;if(n===Yo)return s.RED;if(n===Zo)return s.RED_INTEGER;if(n===Ni)return s.RG;if(n===Ko)return s.RG_INTEGER;if(n===Jo)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===aa)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===jo||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===nl||n===il||n===sl||n===rl||n===oa||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===nl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===oa)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===yl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===bl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===El||n===la||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
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

}`,Fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xe({vertexShader:C_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends Wn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new Fh,m={},v=e.getContextAttributes(),w=null,y=null,S=[],M=[],R=new ot,_=null,E=null,C=new ke;C.viewport=new Te;let N=new ke;N.viewport=new Te;let U=[C,N],H=new Oo,T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=S[j];return nt===void 0&&(nt=new Os,S[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=S[j];return nt===void 0&&(nt=new Os,S[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=S[j];return nt===void 0&&(nt=new Os,S[j]=nt),nt.getHandSpace()};function D(j){let nt=M.indexOf(j.inputSource);if(nt===-1)return;let yt=S[nt];yt!==void 0&&(yt.update(j.inputSource,j.frame,c||a),yt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Z);for(let j=0;j<S.length;j++){let nt=M[j];nt!==null&&(M[j]=null,S[j].disconnect(nt))}T=null,I=null,g.reset();for(let j in m)delete m[j];if(t.setRenderTarget(w),u=null,d=null,f=null,i=null,y=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),E!==null){let j=E.camera;j.fov=E.fov,j.zoom=E.zoom,j.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Wt=null,Rt=null;v.depth&&(Rt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?Li:Gn,Wt=v.stencil?$s:Pn);let Kt={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Qe(d.textureWidth,d.textureHeight,{format:_n,type:nn,depthTexture:new wi(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Qe(u.framebufferWidth,u.framebufferHeight,{format:_n,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qt.setContext(i),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(j){for(let nt=0;nt<j.removed.length;nt++){let yt=j.removed[nt],Wt=M.indexOf(yt);Wt>=0&&(M[Wt]=null,S[Wt].disconnect(yt))}for(let nt=0;nt<j.added.length;nt++){let yt=j.added[nt],Wt=M.indexOf(yt);if(Wt===-1){for(let Kt=0;Kt<S.length;Kt++)if(Kt>=M.length){M.push(yt),Wt=Kt;break}else if(M[Kt]===null){M[Kt]=yt,Wt=Kt;break}if(Wt===-1)break}let Rt=S[Wt];Rt&&Rt.connect(yt)}}let V=new L,K=new L;function $(j,nt,yt){V.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);let Wt=V.distanceTo(K),Rt=nt.projectionMatrix.elements,Kt=yt.projectionMatrix.elements,ge=Rt[14]/(Rt[10]-1),st=Rt[14]/(Rt[10]+1),lt=(Rt[9]+1)/Rt[5],ht=(Rt[9]-1)/Rt[5],ut=(Rt[8]-1)/Rt[0],gt=(Kt[8]+1)/Kt[0],Xt=ge*ut,Vt=ge*gt,Jt=Wt/(-ut+gt),jt=Jt*-ut;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(jt),j.translateZ(Jt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Rt[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let F=ge+Jt,de=st+Jt,ae=Xt-jt,P=Vt+(Wt-jt),b=lt*st/de*F,G=ht*st/de*F;j.projectionMatrix.makePerspective(ae,P,b,G,F,de),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function mt(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let nt=j.near,yt=j.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),H.near=N.near=C.near=nt,H.far=N.far=C.far=yt,(T!==H.near||I!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),T=H.near,I=H.far),H.layers.mask=j.layers.mask|6,C.layers.mask=H.layers.mask&-5,N.layers.mask=H.layers.mask&-3;let Wt=j.parent,Rt=H.cameras;mt(H,Wt);for(let Kt=0;Kt<Rt.length;Kt++)mt(Rt[Kt],Wt);Rt.length===2?$(H,C,N):H.projectionMatrix.copy(C.projectionMatrix),E===null&&j.isPerspectiveCamera&&(E={camera:j,fov:j.fov,zoom:j.zoom}),ct(j,H,Wt)};function ct(j,nt,yt){yt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(yt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Us*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(j){return m[j]};let Ht=null;function Ft(j,nt){if(h=nt.getViewerPose(c||a),p=nt,h!==null){let yt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let Wt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,Wt=!0);for(let st=0;st<yt.length;st++){let lt=yt[st],ht=null;if(u!==null)ht=u.getViewport(lt);else{let gt=f.getViewSubImage(d,lt);ht=gt.viewport,st===0&&(t.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(y))}let ut=U[st];ut===void 0&&(ut=new ke,ut.layers.enable(st),ut.viewport=new Te,U[st]=ut),ut.matrix.fromArray(lt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(lt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),st===0&&(H.matrix.copy(ut.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Wt===!0&&H.cameras.push(ut)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let st=f.getDepthInformation(yt[0]);st&&st.isValid&&st.texture&&g.init(st,i.renderState)}if(Rt&&Rt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let st=0;st<yt.length;st++){let lt=yt[st].camera;if(lt){let ht=m[lt];ht||(ht=new Ur,m[lt]=ht);let ut=f.getCameraImage(lt);ht.sourceTexture=ut}}}}for(let yt=0;yt<S.length;yt++){let Wt=M[yt],Rt=S[yt];Wt!==null&&Rt!==void 0&&Rt.update(Wt,nt,c||a)}Ht&&Ht(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),p=null}let Qt=new pf;Qt.setAnimationLoop(Ft),this.setAnimationLoop=function(j){Ht=j},this.dispose=function(){}}},P_=new se,vf=new $t;vf.set(-1,0,0,0,1,0,0,0,1);function L_(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,mh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&u(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===De&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===De&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),w=v.envMap,y=v.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N_(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let M=S.program;n.uniformBlockBinding(y,M)}function c(y,S){let M=i[y.id];M===void 0&&(g(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",v));let R=S.program;n.updateUBOMapping(y,R);let _=t.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function h(y){let S=f();y.__bindingPointIndex=S;let M=s.createBuffer(),R=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=i[y.id],M=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,E=M.length;_<E;_++){let C=M[_];if(Array.isArray(C))for(let N=0,U=C.length;N<U;N++)u(C[N],_,N,R);else u(C,_,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(y,S,M,R){if(x(y,S,M,R)===!0){let _=y.__offset,E=y.value;if(Array.isArray(E)){let C=0;for(let N=0;N<E.length;N++){let U=E[N],H=m(U);p(U,y.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,S,M){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,M)}function x(y,S,M,R){let _=y.value,E=S+"_"+M;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{let C=R[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(y){let S=y.uniforms,M=0,R=16;for(let E=0,C=S.length;E<C;E++){let N=Array.isArray(S[E])?S[E]:[S[E]];for(let U=0,H=N.length;U<H;U++){let T=N[U],I=Array.isArray(T.value)?T.value:[T.value];for(let D=0,z=I.length;D<z;D++){let Z=I[D],V=m(Z),K=M%R,$=K%V.boundary,mt=K+$;M+=$,mt!==0&&R-mt<V.storage&&(M+=R-mt),T.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=M,M+=V.storage}}}let _=M%R;return _>0&&(M+=R-_),y.__size=M,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",y),S}function v(y){let S=y.target;S.removeEventListener("dispose",v);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function w(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:w}}var D_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function U_(){return $n===null&&($n=new Nr(D_,16,16,Ni,Ln),$n.name="DFG_LUT",$n.minFilter=He,$n.magFilter=He,$n.wrapS=Hn,$n.wrapT=Hn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var Nl=class{constructor(t={}){let{canvas:e=Dd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=u,g=new Set([Jo,Ko,Zo]),m=new Set([nn,Pn,Js,$s,Xo,qo]),v=new Uint32Array(4),w=new Int32Array(4),y=new L,S=null,M=null,R=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,U=null,H=null,T=null,I=null;this._outputColorSpace=Be;let D=0,z=0,Z=null,V=-1,K=null,$=new Te,mt=new Te,ct=null,Ht=new Bt(0),Ft=0,Qt=e.width,j=e.height,nt=1,yt=null,Wt=null,Rt=new Te(0,0,Qt,j),Kt=new Te(0,0,Qt,j),ge=!1,st=new Vs,lt=!1,ht=!1,ut=new se,gt=new L,Xt=new Te,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function jt(){return Z===null?nt:1}let F=n;function de(A,B){return e.getContext(A,B)}let ae,P,b,G,Y,Q,dt,ft,tt,it,_t,Ut,wt,vt,zt,qt,te,k,Mt,et,St,At,at;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Sn,!1),F===null){let B="webgl2";if(F=de(B,A),F===null)throw de(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(A){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),Yt("WebGLRenderer: "+A.message),A}function Ot(){ae=new Vx(F),ae.init(),St=new R_(F,ae),P=new Lx(F,ae,t,St),b=new T_(F,ae),P.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),H=F.createFramebuffer(),T=F.createFramebuffer(),I=F.createFramebuffer(),G=new Xx(F),Y=new d_,Q=new A_(F,ae,b,Y,P,St,G),dt=new Hx(C),ft=new Ym(F),At=new Ix(F,ft),tt=new Gx(F,ft,G,At),it=new Yx(F,tt,ft,At,G),k=new qx(F,P,Q),zt=new Nx(Y),_t=new u_(C,dt,ae,P,At,zt),Ut=new L_(C,Y),wt=new p_,vt=new v_(ae),te=new Cx(C,dt,b,it,p,l),qt=new E_(C,it,P),at=new N_(F,G,P,b),Mt=new Px(F,ae,G),et=new Wx(F,ae,G),G.programs=_t.programs,C.capabilities=P,C.extensions=ae,C.properties=Y,C.renderLists=wt,C.shadowMap=qt,C.state=b,C.info=G}x!==nn&&(E=new Kx(x,e.width,e.height,o,i,r));let Nt=new Oh(C,F);this.xr=Nt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(A){A!==void 0&&(nt=A,this.setSize(Qt,j,!1))},this.getSize=function(A){return A.set(Qt,j)},this.setSize=function(A,B,J=!0){if(Nt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Qt=A,j=B,e.width=Math.floor(A*nt),e.height=Math.floor(B*nt),J===!0&&(e.style.width=A+"px",e.style.height=B+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Qt*nt,j*nt).floor()},this.setDrawingBufferSize=function(A,B,J){Qt=A,j=B,nt=J,e.width=Math.floor(A*J),e.height=Math.floor(B*J),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(x===nn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(Rt)},this.setViewport=function(A,B,J,X){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,B,J,X),b.viewport($.copy(Rt).multiplyScalar(nt).round())},this.getScissor=function(A){return A.copy(Kt)},this.setScissor=function(A,B,J,X){A.isVector4?Kt.set(A.x,A.y,A.z,A.w):Kt.set(A,B,J,X),b.scissor(mt.copy(Kt).multiplyScalar(nt).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){b.setScissorTest(ge=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){Wt=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,J=!0){let X=0;if(A){let q=!1;if(Z!==null){let Tt=Z.texture.format;q=g.has(Tt)}if(q){let Tt=Z.texture.type,It=m.has(Tt),Et=te.getClearColor(),Pt=te.getClearAlpha(),Dt=Et.r,ee=Et.g,oe=Et.b;It?(v[0]=Dt,v[1]=ee,v[2]=oe,v[3]=Pt,F.clearBufferuiv(F.COLOR,0,v)):(w[0]=Dt,w[1]=ee,w[2]=oe,w[3]=Pt,F.clearBufferiv(F.COLOR,0,w))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Sn,!1),te.dispose(),wt.dispose(),vt.dispose(),Y.dispose(),dt.dispose(),it.dispose(),At.dispose(),at.dispose(),_t.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",hu),Nt.removeEventListener("sessionend",uu),Bi.stop()};function Me(A){A.preventDefault(),Ar("WebGLRenderer: Context Lost."),N=!0}function fe(){Ar("WebGLRenderer: Context Restored."),N=!1;let A=G.autoReset,B=qt.enabled,J=qt.autoUpdate,X=qt.needsUpdate,q=qt.type;Ot(),G.autoReset=A,qt.enabled=B,qt.autoUpdate=J,qt.needsUpdate=X,qt.type=q}function Sn(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function On(A){let B=A.target;B.removeEventListener("dispose",On),fp(B)}function fp(A){pp(A),Y.remove(A)}function pp(A){let B=Y.get(A).programs;B!==void 0&&(B.forEach(function(J){_t.releaseProgram(J)}),A.isShaderMaterial&&_t.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,J,X,q,Tt){B===null&&(B=Vt);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,Et=xp(A,B,J,X,q);b.setMaterial(X,It);let Pt=J.index,Dt=1;if(X.wireframe===!0){if(Pt=tt.getWireframeAttribute(J),Pt===void 0)return;Dt=2}let ee=J.drawRange,oe=J.attributes.position,Lt=ee.start*Dt,pe=(ee.start+ee.count)*Dt;Tt!==null&&(Lt=Math.max(Lt,Tt.start*Dt),pe=Math.min(pe,(Tt.start+Tt.count)*Dt)),Pt!==null?(Lt=Math.max(Lt,0),pe=Math.min(pe,Pt.count)):oe!=null&&(Lt=Math.max(Lt,0),pe=Math.min(pe,oe.count));let Ie=pe-Lt;if(Ie<0||Ie===1/0)return;At.setup(q,X,Et,J,Pt);let be,ve=Mt;if(Pt!==null&&(be=ft.get(Pt),ve=et,ve.setIndex(be)),q.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*jt()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(q.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),b.setLineWidth(Ve*jt()),q.isLineSegments?ve.setMode(F.LINES):q.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else q.isPoints?ve.setMode(F.POINTS):q.isSprite&&ve.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ve=q._multiDrawStarts,Ct=q._multiDrawCounts,Ye=q._multiDrawCount,ue=Pt?ft.get(Pt).bytesPerElement:1,pn=Y.get(X).currentProgram.getUniforms();for(let Bn=0;Bn<Ye;Bn++)pn.setValue(F,"_gl_DrawID",Bn),ve.render(Ve[Bn]/ue,Ct[Bn])}else if(q.isInstancedMesh)ve.renderInstances(Lt,Ie,q.count);else if(J.isInstancedBufferGeometry){let Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ct=Math.min(J.instanceCount,Ve);ve.renderInstances(Lt,Ie,Ct)}else ve.render(Lt,Ie)};function cu(A,B,J,X){U!==null&&A.isNodeMaterial&&U.setObject(X,A),lt===!0&&zt.setState(A,J,!1),A.transparent===!0&&A.side===Je&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,Aa(A,B,X),A.side=Ci,A.needsUpdate=!0,Aa(A,B,X),A.side=Je):Aa(A,B,X)}this.compile=function(A,B,J=null){J===null&&(J=A),U!==null&&U.renderStart(A,B,J),M=vt.get(J),M.init(B),_.push(M),J.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),A!==J&&A.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),U!==null&&U.updateLights(M.state.lightsArray),ht=this.localClippingEnabled,lt=zt.init(this.clippingPlanes,ht),lt===!0&&zt.setGlobalState(this.clippingPlanes,B),U!==null&&qt.render(M.state.shadowsArray,J,B);let X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){let Et=Tt[It];cu(Et,J,B,q),X.add(Et)}else cu(Tt,J,B,q),X.add(Tt)}),M=_.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(A,B,J=null){let X=this.compile(A,B,J);return new Promise(q=>{function Tt(){if(X.forEach(function(It){let Pt=Y.get(It).currentProgram;(Pt===void 0||Pt.isReady())&&X.delete(It)}),X.size===0){q(A);return}setTimeout(Tt,10)}ae.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let sc=null;function mp(A){sc&&sc(A)}function hu(){Bi.stop()}function uu(){Bi.start()}let Bi=new pf;Bi.setAnimationLoop(mp),typeof self!="undefined"&&Bi.setContext(self),this.setAnimationLoop=function(A){sc=A,Nt.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},Nt.addEventListener("sessionstart",hu),Nt.addEventListener("sessionend",uu),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(A,B);let J=Nt.enabled===!0&&Nt.isPresenting===!0,X=E!==null&&(Z===null||J)&&E.begin(C,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(B),B=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,B,Z),M=vt.get(A,_.length),M.init(B),M.state.textureUnits=Q.getTextureUnits(),_.push(M),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),st.setFromProjectionMatrix(ut,Rn,B.reversedDepth),ht=this.localClippingEnabled,lt=zt.init(this.clippingPlanes,ht),S=wt.get(A,R.length),S.init(),R.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let It=C.xr.getDepthSensingMesh();It!==null&&rc(It,B,-1/0,C.sortObjects)}rc(A,B,0,C.sortObjects),S.finish(),U!==null&&U.updateLights(M.state.lightsArray),C.sortObjects===!0&&S.sort(yt,Wt),Jt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Jt&&te.addToRenderList(S,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),lt===!0&&zt.beginShadows();let q=M.state.shadowsArray;if(qt.render(q,A,B),lt===!0&&zt.endShadows(),(X&&E.hasRenderPass())===!1){let It=S.opaque,Et=S.transmissive;if(M.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(Et.length>0)for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let oe=Pt[Dt];fu(It,Et,A,oe)}Jt&&te.render(A);for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let oe=Pt[Dt];du(S,A,oe,oe.viewport)}}else Et.length>0&&fu(It,Et,A,B),Jt&&te.render(A),du(S,A,B)}Z!==null&&z===0&&(Q.updateMultisampleRenderTarget(Z),Q.updateRenderTargetMipmap(Z)),X&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,B),At.resetDefaultState(),V=-1,K=null,_.pop(),_.length>0?(M=_[_.length-1],Q.setTextureUnits(M.state.textureUnits),lt===!0&&zt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?S=R[R.length-1]:S=null,U!==null&&U.renderEnd()};function rc(A,B,J,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(st)){X&&Xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);let It=it.update(A),Et=A.material;Et.visible&&S.push(A,It,Et,J,Xt.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(st))){let It=it.update(A),Et=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xt.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Xt.copy(It.boundingSphere.center)),Xt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Et)){let Pt=It.groups;for(let Dt=0,ee=Pt.length;Dt<ee;Dt++){let oe=Pt[Dt],Lt=Et[oe.materialIndex];Lt&&Lt.visible&&S.push(A,It,Lt,J,Xt.z,oe,B)}}else Et.visible&&S.push(A,It,Et,J,Xt.z,null,B)}}let Tt=A.children;for(let It=0,Et=Tt.length;It<Et;It++)rc(Tt[It],B,J,X)}function du(A,B,J,X){let{opaque:q,transmissive:Tt,transparent:It}=A;M.setupLightsView(J),lt===!0&&zt.setGlobalState(C.clippingPlanes,J),X&&b.viewport($.copy(X)),q.length>0&&Ta(q,B,J),Tt.length>0&&Ta(Tt,B,J),It.length>0&&Ta(It,B,J),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function fu(A,B,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){let Lt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Qe(1,1,{generateMipmaps:!0,type:Lt?Ln:nn,minFilter:Pi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Tt=M.state.transmissionRenderTarget[X.id],It=X.viewport||$;Tt.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);let Et=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(Ht),Ft=C.getClearAlpha(),Ft<1&&C.setClearColor(16777215,.5),C.clear(),Jt&&te.render(J);let ee=C.toneMapping;C.toneMapping=In;let oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),lt===!0&&zt.setGlobalState(C.clippingPlanes,X),Ta(A,J,X),Q.updateMultisampleRenderTarget(Tt),Q.updateRenderTargetMipmap(Tt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let pe=0,Ie=B.length;pe<Ie;pe++){let be=B[pe],{object:ve,geometry:Ve,material:Ct,group:Ye}=be;if(Ct.side===Je&&ve.layers.test(X.layers)){let ue=Ct.side;Ct.side=De,Ct.needsUpdate=!0,pu(ve,J,X,Ve,Ct,Ye),Ct.side=ue,Ct.needsUpdate=!0,Lt=!0}}Lt===!0&&(Q.updateMultisampleRenderTarget(Tt),Q.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Et,Pt,Dt),C.setClearColor(Ht,Ft),oe!==void 0&&(X.viewport=oe),C.toneMapping=ee}function Ta(A,B,J){let X=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Tt=A.length;q<Tt;q++){let It=A[q],{object:Et,geometry:Pt,group:Dt}=It,ee=It.material;ee.allowOverride===!0&&X!==null&&(ee=X),Et.layers.test(J.layers)&&pu(Et,B,J,Pt,ee,Dt)}}function pu(A,B,J,X,q,Tt){U!==null&&q.isNodeMaterial&&U.setObject(A,q),A.onBeforeRender(C,B,J,X,q,Tt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(C,B,J,X,A,Tt),q.transparent===!0&&q.side===Je&&q.forceSinglePass===!1?(q.side=De,q.needsUpdate=!0,C.renderBufferDirect(J,B,X,q,A,Tt),q.side=Ci,q.needsUpdate=!0,C.renderBufferDirect(J,B,X,q,A,Tt),q.side=Je):C.renderBufferDirect(J,B,X,q,A,Tt),A.onAfterRender(C,B,J,X,q,Tt)}function Aa(A,B,J){B.isScene!==!0&&(B=Vt);let X=Y.get(A),q=M.state.lights,Tt=M.state.shadowsArray,It=q.state.version,Et=_t.getParameters(A,q.state,Tt,B,J,M.state.lightProbeGridArray),Pt=_t.getProgramCacheKey(Et),Dt=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=dt.get(A.envMap||X.environment,ee),X.envMapRotation=X.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Dt===void 0&&(A.addEventListener("dispose",On),Dt=new Map,X.programs=Dt);let oe=Dt.get(Pt);if(oe!==void 0){if(X.currentProgram===oe&&X.lightsStateVersion===It)return gu(A,Et),oe}else Et.uniforms=_t.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,J,Et),A.onBeforeCompile(Et,C),oe=_t.acquireProgram(Et,Pt),Dt.set(Pt,oe),X.uniforms=Et.uniforms;let Lt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=zt.uniform),gu(A,Et),X.needsLights=_p(A),X.lightsStateVersion=It,X.needsLights&&(Lt.ambientLightColor.value=q.state.ambient,Lt.lightProbe.value=q.state.probe,Lt.sunLights.value=q.state.sun,Lt.sunLightShadows.value=q.state.sunShadow,Lt.directionalLights.value=q.state.directional,Lt.directionalLightShadows.value=q.state.directionalShadow,Lt.spotLights.value=q.state.spot,Lt.spotLightShadows.value=q.state.spotShadow,Lt.rectAreaLights.value=q.state.rectArea,Lt.ltc_1.value=q.state.rectAreaLTC1,Lt.ltc_2.value=q.state.rectAreaLTC2,Lt.pointLights.value=q.state.point,Lt.pointLightShadows.value=q.state.pointShadow,Lt.hemisphereLights.value=q.state.hemi,Lt.sunShadowMatrix.value=q.state.sunShadowMatrix,Lt.sunShadowCascade.value=q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=q.state.spotLightMatrix,Lt.spotLightMap.value=q.state.spotLightMap,Lt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=M.state.lightProbeGridArray.length>0,X.currentProgram=oe,X.uniformsList=null,oe}function mu(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=er.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function gu(A,B){let J=Y.get(A);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function gp(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let J=0,X=A.length;J<X;J++){let q=A[J];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function xp(A,B,J,X,q){B.isScene!==!0&&(B=Vt),Q.resetTextureUnits();let Tt=B.fog,It=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Et=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:le.workingColorSpace,Pt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Dt=dt.get(X.envMap||It,Pt),ee=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,oe=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Lt=!!J.morphAttributes.position,pe=!!J.morphAttributes.normal,Ie=!!J.morphAttributes.color,be=In;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(be=C.toneMapping);let ve=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ve=ve!==void 0?ve.length:0,Ct=Y.get(X),Ye=M.state.lights;if(lt===!0&&(ht===!0||A!==K)){let Se=A===K&&X.id===V;zt.setState(X,A,Se)}let ue=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ye.state.version||Ct.outputColorSpace!==Et||q.isBatchedMesh&&Ct.batching===!1||!q.isBatchedMesh&&Ct.batching===!0||q.isBatchedMesh&&Ct.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ct.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ct.instancing===!1||!q.isInstancedMesh&&Ct.instancing===!0||q.isSkinnedMesh&&Ct.skinning===!1||!q.isSkinnedMesh&&Ct.skinning===!0||q.isInstancedMesh&&Ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ct.instancingMorph===!1&&q.morphTexture!==null||Ct.envMap!==Dt||X.fog===!0&&Ct.fog!==Tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==zt.numPlanes||Ct.numIntersection!==zt.numIntersection)||Ct.vertexAlphas!==ee||Ct.vertexTangents!==oe||Ct.morphTargets!==Lt||Ct.morphNormals!==pe||Ct.morphColors!==Ie||Ct.toneMapping!==be||Ct.morphTargetsCount!==Ve||!!Ct.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Ct.__version=X.version);let pn=Ct.currentProgram;ue===!0&&(pn=Aa(X,B,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,pn,Ct));let Bn=!1,mi=!1,us=!1,_e=pn.getUniforms(),Ce=Ct.uniforms;if(b.useProgram(pn.program)&&(Bn=!0,mi=!0,us=!0),X.id!==V&&(V=X.id,mi=!0),Ct.needsLights){let Se=gp(M.state.lightProbeGridArray,q);Ct.lightProbeGrid!==Se&&(Ct.lightProbeGrid=Se,mi=!0)}if(Bn||K!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_e.setValue(F,"projectionMatrix",A.projectionMatrix),_e.setValue(F,"viewMatrix",A.matrixWorldInverse);let xi=_e.map.cameraPosition;xi!==void 0&&xi.setValue(F,gt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&_e.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,mi=!0,us=!0)}if(Ct.needsLights&&(Ye.state.sunShadowMap.length>0&&_e.setValue(F,"sunShadowMap",Ye.state.sunShadowMap,Q),Ye.state.directionalShadowMap.length>0&&_e.setValue(F,"directionalShadowMap",Ye.state.directionalShadowMap,Q),Ye.state.spotShadowMap.length>0&&_e.setValue(F,"spotShadowMap",Ye.state.spotShadowMap,Q),Ye.state.pointShadowMap.length>0&&_e.setValue(F,"pointShadowMap",Ye.state.pointShadowMap,Q)),q.isSkinnedMesh){_e.setOptional(F,q,"bindMatrix"),_e.setOptional(F,q,"bindMatrixInverse");let Se=q.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),_e.setValue(F,"boneTexture",Se.boneTexture,Q))}q.isBatchedMesh&&(_e.setOptional(F,q,"batchingTexture"),_e.setValue(F,"batchingTexture",q._matricesTexture,Q),_e.setOptional(F,q,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",q._indirectTexture,Q),_e.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",q._colorsTexture,Q));let gi=J.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&k.update(q,J,pn),(mi||Ct.receiveShadow!==q.receiveShadow)&&(Ct.receiveShadow=q.receiveShadow,_e.setValue(F,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(Ce.envMapIntensity.value=B.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=U_()),mi){if(_e.setValue(F,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&yp(Ce,us),Tt&&X.fog===!0&&Ut.refreshFogUniforms(Ce,Tt),Ut.refreshMaterialUniforms(Ce,X,nt,j,M.state.transmissionRenderTarget[A.id]),Ct.needsLights&&Ct.lightProbeGrid){let Se=Ct.lightProbeGrid;Ce.probesSH.value=Se.texture,Ce.probesMin.value.copy(Se.boundingBox.min),Ce.probesMax.value.copy(Se.boundingBox.max),Ce.probesResolution.value.copy(Se.resolution)}er.upload(F,mu(Ct),Ce,Q)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(er.upload(F,mu(Ct),Ce,Q),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&_e.setValue(F,"center",q.center),_e.setValue(F,"modelViewMatrix",q.modelViewMatrix),_e.setValue(F,"normalMatrix",q.normalMatrix),_e.setValue(F,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Se=X.uniformsGroups;for(let xi=0,ds=Se.length;xi<ds;xi++){let yu=Se[xi];at.update(yu,pn),at.bind(yu,pn)}}return pn}function yp(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function _p(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,B,J){let X=Y.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Y.get(A.texture).__webglTexture=B,Y.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let J=Y.get(A);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,J=0){Z=A,D=B,z=J;let X=null,q=!1,Tt=!1;if(A){let Et=Y.get(A);if(Et.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Et.__webglFramebuffer),$.copy(A.viewport),mt.copy(A.scissor),ct=A.scissorTest,b.viewport($),b.scissor(mt),b.setScissorTest(ct),V=-1;return}else if(Et.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Et.__hasExternalTextures)Q.rebindTextures(A,Y.get(A.texture).__webglTexture,Y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ee=A.depthTexture;if(Et.__boundDepthTexture!==ee){if(ee!==null&&Y.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}let Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Tt=!0);let Dt=Y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?X=Dt[B][J]:X=Dt[B],q=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?X=Y.get(A).__webglMultisampledFramebuffer:Array.isArray(Dt)?X=Dt[J]:X=Dt,$.copy(A.viewport),mt.copy(A.scissor),ct=A.scissorTest}else $.copy(Rt).multiplyScalar(nt).floor(),mt.copy(Kt).multiplyScalar(nt).floor(),ct=ge;if(J!==0&&(X=H),b.bindFramebuffer(F.FRAMEBUFFER,X)&&b.drawBuffers(A,X),b.viewport($),b.scissor(mt),b.setScissorTest(ct),q){let Et=Y.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,J)}else if(Tt){let Et=B;for(let Pt=0;Pt<A.textures.length;Pt++){let Dt=Y.get(A.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,J,Et)}}else if(A!==null&&J!==0){let Et=Y.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Et.__webglTexture,J)}V=-1};function xu(A){let B=Y.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=P.textureFormatReadable(A.format),B.__typeReadable=P.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,J,X,q,Tt,It,Et=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt){b.bindFramebuffer(F.FRAMEBUFFER,Pt);try{let Dt=A.textures[Et],ee=Dt.format,oe=Dt.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let Lt=xu(Dt);if(Lt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&J>=0&&J<=A.height-q&&F.readPixels(B,J,X,q,St.convert(ee),St.convert(oe),Tt)}finally{let Dt=Z!==null?Y.get(Z).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(A,B,J,X,q,Tt,It,Et=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Pt=Pt[It]),Pt)if(B>=0&&B<=A.width-X&&J>=0&&J<=A.height-q){b.bindFramebuffer(F.FRAMEBUFFER,Pt);let Dt=A.textures[Et],ee=Dt.format,oe=Dt.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Et);let Lt=xu(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(B,J,X,q,St.convert(ee),St.convert(oe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ie=Z!==null?Y.get(Z).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Ie);let be=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zd(F,be,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pe),F.deleteSync(be),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,J=0){let X=Math.pow(2,-J),q=Math.floor(A.image.width*X),Tt=Math.floor(A.image.height*X),It=B!==null?B.x:0,Et=B!==null?B.y:0;Q.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,J,0,0,It,Et,q,Tt),b.unbindTexture()},this.copyTextureToTexture=function(A,B,J=null,X=null,q=0,Tt=0){let It,Et,Pt,Dt,ee,oe,Lt,pe,Ie,be=A.isCompressedTexture?A.mipmaps[Tt]:A.image;if(J!==null)It=J.max.x-J.min.x,Et=J.max.y-J.min.y,Pt=J.isBox3?J.max.z-J.min.z:1,Dt=J.min.x,ee=J.min.y,oe=J.isBox3?J.min.z:0;else{let Ce=Math.pow(2,-q);It=Math.floor(be.width*Ce),Et=Math.floor(be.height*Ce),A.isDataArrayTexture?Pt=be.depth:A.isData3DTexture?Pt=Math.floor(be.depth*Ce):Pt=1,Dt=0,ee=0,oe=0}X!==null?(Lt=X.x,pe=X.y,Ie=X.z):(Lt=0,pe=0,Ie=0);let ve=St.convert(B.format),Ve=St.convert(B.type),Ct;B.isData3DTexture?(Q.setTexture3D(B,0),Ct=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Ct=F.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Ct=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let Ye=b.getParameter(F.UNPACK_ROW_LENGTH),ue=b.getParameter(F.UNPACK_IMAGE_HEIGHT),pn=b.getParameter(F.UNPACK_SKIP_PIXELS),Bn=b.getParameter(F.UNPACK_SKIP_ROWS),mi=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(F.UNPACK_SKIP_ROWS,ee),b.pixelStorei(F.UNPACK_SKIP_IMAGES,oe);let us=A.isDataArrayTexture||A.isData3DTexture,_e=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Ce=Y.get(A),gi=Y.get(B),Se=Y.get(Ce.__renderTarget),xi=Y.get(gi.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Se.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let ds=0;ds<Pt;ds++)us&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(A).__webglTexture,q,oe+ds),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Y.get(B).__webglTexture,Tt,Ie+ds)),F.blitFramebuffer(Dt,ee,It,Et,Lt,pe,It,Et,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Y.has(A)){let Ce=Y.get(A),gi=Y.get(B);b.bindFramebuffer(F.READ_FRAMEBUFFER,T),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let Se=0;Se<Pt;Se++)us?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ce.__webglTexture,q,oe+Se):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ce.__webglTexture,q),_e?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gi.__webglTexture,Tt,Ie+Se):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gi.__webglTexture,Tt),q!==0?F.blitFramebuffer(Dt,ee,It,Et,Lt,pe,It,Et,F.COLOR_BUFFER_BIT,F.NEAREST):_e?F.copyTexSubImage3D(Ct,Tt,Lt,pe,Ie+Se,Dt,ee,It,Et):F.copyTexSubImage2D(Ct,Tt,Lt,pe,Dt,ee,It,Et);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ct,Tt,Lt,pe,Ie,It,Et,Pt,ve,Ve,be.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ct,Tt,Lt,pe,Ie,It,Et,Pt,ve,be.data):F.texSubImage3D(Ct,Tt,Lt,pe,Ie,It,Et,Pt,ve,Ve,be):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,Lt,pe,It,Et,ve,Ve,be.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,Lt,pe,be.width,be.height,ve,be.data):F.texSubImage2D(F.TEXTURE_2D,Tt,Lt,pe,It,Et,ve,Ve,be);b.pixelStorei(F.UNPACK_ROW_LENGTH,Ye),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ue),b.pixelStorei(F.UNPACK_SKIP_PIXELS,pn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Bn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,mi),Tt===0&&B.generateMipmaps&&F.generateMipmap(Ct),b.unbindTexture()},this.initRenderTarget=function(A){Y.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){D=0,z=0,Z=null,b.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var zl=class extends qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ae;t.deleteAttribute("uv");let e=new Gt({side:De}),n=new Gt,i=new $r(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Kn(t,n,6),o=new Le;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new xt(t,rr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new xt(t,rr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new xt(t,rr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new xt(t,rr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new xt(t,rr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new xt(t,rr(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function rr(s){return new qr({color:0,emissive:16777215,emissiveIntensity:s})}var Mf=Math.PI*2,$e=18,pt=(s,t,e)=>s<t?t:s>e?e:s,rt=(s,t,e)=>s+(t-s)*e,W=(s,t)=>s+Math.random()*(t-s);var is=s=>s[Math.floor(Math.random()*s.length)];var un=(s,t)=>1-Math.exp(-s*t),fa=s=>1-(1-s)*(1-s),pa=s=>.5-.5*Math.cos(Math.PI*s);function sn(s){return s=(s+Math.PI)%Mf,s<0&&(s+=Mf),s-Math.PI}function di(s,t,e){let n=sn(t-s);return s+pt(n,-e,e)}function Nn(s){let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}var ce={s:0,t:0,d2:0};function ss(s,t,e,n,i,r,a,o,l,c,h,f,d=ce){let u=n-s,p=i-t,x=r-e,g=c-a,m=h-o,v=f-l,w=s-a,y=t-o,S=e-l,M=u*u+p*p+x*x,R=g*g+m*m+v*v,_=g*w+m*y+v*S,E,C;if(M<1e-9&&R<1e-9)E=0,C=0;else if(M<1e-9)E=0,C=pt(_/R,0,1);else{let T=u*w+p*y+x*S;if(R<1e-9)C=0,E=pt(-T/M,0,1);else{let I=u*g+p*m+x*v,D=M*R-I*I;E=D>1e-12?pt((I*_-T*R)/D,0,1):0,C=(I*E+_)/R,C<0?(C=0,E=pt(-T/M,0,1)):C>1&&(C=1,E=pt((I-T)/M,0,1))}}let N=s+u*E-(a+g*C),U=t+p*E-(o+m*C),H=e+x*E-(l+v*C);return d.s=E,d.t=C,d.d2=N*N+U*U+H*H,d}var Dn={t:0,d2:0};function ma(s,t,e,n,i,r,a,o,l,c=Dn){let h=a-n,f=o-i,d=l-r,u=h*h+f*f+d*d,p=u>0?pt(((s-n)*h+(t-i)*f+(e-r)*d)/u,0,1):0,x=n+h*p-s,g=i+f*p-t,m=r+d*p-e;return c.t=p,c.d2=x*x+g*g+m*m,c}function Bh(s,t){try{let e=parseInt(localStorage.getItem(s),10);return Number.isFinite(e)?e:t}catch{return t}}function kh(s,t){try{localStorage.setItem(s,String(t))}catch{}}var kt=(()=>{let s=null,t=null,e=null,n=!1,i=null,r=null,a=.6,o={},l=[];function c(){if(s){s.state==="suspended"&&s.resume();return}let T=window.AudioContext||window.webkitAudioContext;if(!T)return;try{s=new T}catch{s=null;return}t=s.createGain(),t.gain.value=.5;let I=s.createDynamicsCompressor();t.connect(I),I.connect(s.destination),e=s.createBuffer(1,s.sampleRate,s.sampleRate);let D=e.getChannelData(0);for(let V=0;V<D.length;V++)D[V]=Math.random()*2-1;i=s.createGain(),i.gain.value=a;let z=s.createGain();z.gain.value=1.2;let Z=s.createDynamicsCompressor();Z.threshold.value=-30,Z.knee.value=10,Z.ratio.value=5,Z.attack.value=.004,Z.release.value=.2,i.connect(Z),Z.connect(z),z.connect(t),r=s.createGain(),r.gain.value=.35,r.connect(t);for(let V of l)V()}function h(T,I){if(!s||n||s.state!=="running")return!1;let D=s.currentTime;return o[T]!==void 0&&D-o[T]<I?!1:(o[T]=D,!0)}function f(T,I,D,z){T.gain.setValueAtTime(1e-4,I),T.gain.exponentialRampToValueAtTime(z,I+Math.min(.012,D*.25)),T.gain.exponentialRampToValueAtTime(1e-4,I+D)}function d(T,I,D,z,Z,V,K,$){let mt=s.createBufferSource();mt.buffer=e,mt.loop=!0;let ct=s.createBiquadFilter();ct.type=D,ct.Q.value=V,ct.frequency.setValueAtTime(z,T),ct.frequency.exponentialRampToValueAtTime(Z,T+I);let Ht=s.createGain();f(Ht,T,I,K),mt.connect(ct),ct.connect(Ht),Ht.connect($||t),mt.start(T,Math.random()*.8),mt.stop(T+I+.05)}function u(T,I,D,z,Z,V,K){let $=s.createOscillator();$.type=D,$.frequency.setValueAtTime(z,T),$.frequency.exponentialRampToValueAtTime(Z,T+I);let mt=s.createGain();f(mt,T,I,V),$.connect(mt),mt.connect(K||t),$.start(T),$.stop(T+I+.05)}function p(T,I,D,z,Z,V,K,$=.005,mt){let ct=s.createOscillator();ct.type=D,ct.frequency.setValueAtTime(z,T);let Ht=s.createBiquadFilter();Ht.type="lowpass",Ht.frequency.setValueAtTime(V,T),Ht.frequency.exponentialRampToValueAtTime(Math.max(60,K),T+I);let Ft=s.createGain();Ft.gain.setValueAtTime(1e-4,T),Ft.gain.exponentialRampToValueAtTime(Z,T+$),Ft.gain.exponentialRampToValueAtTime(1e-4,T+I),ct.connect(Ht),Ht.connect(Ft),Ft.connect(mt||i),ct.start(T),ct.stop(T+I+.05)}let x=T=>440*Math.pow(2,(T-69)/12),g={samurai:{bpm:104,steps:16,root:50,scale:[0,3,5,7,10],lead:"pluck",drums:"taiko",chords:[[0],[-2],[-4],[-5]]},war:{bpm:132,steps:16,root:45,scale:[0,2,3,5,7,8,10],lead:"brass",drums:"gallop",chords:[[0],[-4],[-2],[-5]]},epic:{bpm:88,steps:16,root:45,scale:[0,2,3,5,7,8,10],lead:"brass",drums:"epic",chords:[[0,3,7],[-4,0,3],[-9,-5,-2],[-2,2,5]]},sea:{bpm:104,steps:12,root:50,scale:[0,2,3,5,7,9,10],lead:"squeeze",drums:"sea",chords:[[0,3,7],[-2,2,5],[-5,-2,2],[-7,-3,0]]}},m={style:null,want:null,on:!0,timer:null,next:0,step:0,bar:0,inten:0,target:0,motif:null,seed:1};try{m.on=localStorage.getItem("rk3dMusic")!=="0"}catch{}let v=()=>(m.seed=m.seed*16807%2147483647,m.seed/2147483647);function w(T){let I=T.steps===12?12:16,D=[],z=2+Math.floor(v()*3);for(let Z=0;Z<I;Z++){if(v()<.3){D.push(null);continue}z=Math.max(0,Math.min(9,z+Math.floor(v()*5)-2)),D.push(z)}return D}function y(T,I,D){let z=T.scale.length;return T.root+12*(D+Math.floor(I/z))+T.scale[I%z]}function S(T,I,D,z,Z,V){u(T,z,"sine",I,D,Z*.8,i),u(T,z*.7,"triangle",I*2.6,D*2.2,Z*.45,i),d(T,.05,"bandpass",V,V*.7,1.4,Z*.5,i)}function M(T,I,D,z){T.drums==="taiko"?(z>=1&&(I===0||I===6||I===8||I===14&&m.bar%2)&&S(D,130,55,.32,.6,1100),z>=1&&(I===4||I===12)&&d(D,.06,"bandpass",2600,2e3,2.5,.3,i),I%2===0&&d(D,.03,"highpass",6e3,8e3,1,z>=1?.09:.05,i)):T.drums==="gallop"?(z>=1&&[0,3,6,8,11,14].includes(I)&&S(D,120,55,.18,I%8===0?.55:.36,1500),z>=1&&(I===4||I===12)&&d(D,.09,"bandpass",1900,1300,1.3,.38,i),d(D,.025,"highpass",7e3,9e3,1,.07,i)):T.drums==="epic"?(z>=1&&(I===0||I===10)&&(S(D,90,35,.7,.75,700),d(D,.4,"lowpass",900,120,1,.3,i)),z>=1&&(I===6||I===14)&&S(D,160,80,.25,.4,1300),z>=1&&I%2===1&&d(D,.04,"bandpass",3200,2600,2,z>=2?.12:.06,i)):(z>=1&&(I===0||I===6)&&S(D,110,55,.25,.5,1200),z>=1&&(I===3||I===9)&&d(D,.07,"bandpass",2200,1600,1.6,.3,i),I%3===0&&d(D,.03,"highpass",6500,8500,1,.07,i))}let R=[0,2,4,2,0,2,4,5];function _(T,I,D,z,Z){let V=T.scale.indexOf((z[0]%12+12)%12),K=V<0?0:V;if(m.style==="samurai"){if(I%2)return;let $=x(y(T,K+R[(I>>1)%8],1));p(D,.45,"square",$,.12,3200,500,.003),p(D,.3,"triangle",$*2,.06,2600,900,.003)}else if(m.style==="war"){let $=I%4===0;p(D,Z*1.8,"sawtooth",x(T.root+24+z[0]+(I%8===6?7:0)),$?.15:.1,2600,900,.004)}else if(m.style==="epic"){if(I%2)return;for(let $ of z)p(D,Z*1.6,"sawtooth",x(T.root+24+$),I%8===0?.09:.06,1800,700,.01)}else if(I%3===0)p(D,Z*1.5,"sawtooth",x(T.root+z[0]),.13,1500,400,.006);else for(let $ of z)p(D,Z*.9,"square",x(T.root+12+$),I%3===1?.1:.06,2400,1e3,.006)}function E(T){let I=g[m.style],D=m.step%I.steps,z=m.inten>.5?2:m.inten>.25?1:0;D===0&&(m.bar++,(!m.motif||m.bar%8===1)&&(m.motif=w(I)));let Z=I.chords[Math.floor(m.bar/2)%I.chords.length],V=60/I.bpm,K=I.steps===12?V/3:V/4;if(M(I,D,T,z),(D===0||D===I.steps/2)&&(p(T,V*1.6,"sine",x(I.root-12+Z[0]),.2,400,200,.01),p(T,V*1.4,"sawtooth",x(I.root+Z[0]),.13,1600,300,.01)),z>=1&&_(I,D,T,Z,K),(m.style==="epic"||m.style==="sea")&&D===0)for(let mt of Z)for(let ct of[-6,6]){let Ht=s.createOscillator();Ht.type="sawtooth",Ht.frequency.value=x(I.root+mt),Ht.detune.value=ct;let Ft=s.createBiquadFilter();Ft.type="lowpass",Ft.frequency.value=m.style==="epic"?700:1100;let Qt=s.createGain(),j=V*(I.steps===12?3:4);Qt.gain.setValueAtTime(1e-4,T),Qt.gain.exponentialRampToValueAtTime(.03,T+.35),Qt.gain.exponentialRampToValueAtTime(1e-4,T+j),Ht.connect(Ft),Ft.connect(Qt),Qt.connect(i),Ht.start(T),Ht.stop(T+j+.05)}let $=I.steps===12?D:D>>1;if(z>=2&&(I.steps===12||D%2===0)){let mt=m.motif[($+m.bar%2*(I.steps===12?6:8))%m.motif.length];if(mt!==null){let ct=x(y(I,mt,I.root<48?2:1));I.lead==="pluck"?(p(T,.7,"square",ct,.1,4200,800,.003),p(T,.5,"triangle",ct*2,.045,3e3,1e3,.003)):I.lead==="brass"?(p(T,K*2.2,"sawtooth",ct,.09,2600,1e3,.03),p(T,K*2.2,"square",ct*1.002,.04,2e3,900,.03)):p(T,K*2.4,"square",ct,.08,2200,1200,.02)}}return K}function C(){if(!(!s||s.state!=="running"||!m.style))for(m.inten+=(m.target-m.inten)*.08;m.next<s.currentTime+.15;)m.next<s.currentTime-.3&&(m.next=s.currentTime+.05),m.next+=E(m.next),m.step++}function N(){!s||!m.on||!m.want||(m.style!==m.want&&(m.style=m.want,m.step=0,m.bar=0,m.motif=null,m.seed=1+Math.floor(Math.random()*1e6),m.next=s.currentTime+.1),i.gain.cancelScheduledValues(s.currentTime),i.gain.setTargetAtTime(a,s.currentTime,.3),m.timer||(m.timer=setInterval(C,40)))}l.push(N);let U={kind:null,nodes:null,want:null};function H(){if(!s||U.kind===U.want)return;if(U.nodes){let V=U.nodes;V.g.gain.setTargetAtTime(1e-4,s.currentTime,.3),setTimeout(()=>{try{V.src.stop(),V.lfo.stop()}catch{}},1500),U.nodes=null}if(U.kind=U.want,!U.kind)return;let T=s.createBufferSource();T.buffer=e,T.loop=!0;let I=s.createBiquadFilter();I.type=U.kind==="sea"?"lowpass":"bandpass",I.frequency.value=U.kind==="sea"?520:420,I.Q.value=U.kind==="sea"?.7:.9;let D=s.createGain();D.gain.value=1e-4;let z=s.createOscillator();z.frequency.value=U.kind==="sea"?.13:.07;let Z=s.createGain();Z.gain.value=U.kind==="sea"?.25:.12,z.connect(Z),Z.connect(D.gain),T.connect(I),I.connect(D),D.connect(r),D.gain.setTargetAtTime(U.kind==="sea"?.4:.2,s.currentTime,.8),T.start(),z.start(),U.nodes={src:T,lfo:z,g:D}}return l.push(H),{init:c,toggleMute(){return n=!n,t&&t.gain.setTargetAtTime(n?0:.5,s.currentTime,.05),n},music(T){m.want=T,N()},intensity(T){m.target=Math.max(0,Math.min(1,T))},get musicOn(){return m.on},toggleMusic(){m.on=!m.on;try{localStorage.setItem("rk3dMusic",m.on?"1":"0")}catch{}return s&&(m.on?(m.style=null,N()):(i.gain.setTargetAtTime(1e-4,s.currentTime,.2),m.style=null)),m.on},ambience(T){U.want=T||null,H()},suspend(){s&&s.state==="running"&&s.suspend()},resume(){s&&s.state==="suspended"&&s.resume()},get muted(){return n},swoosh(T){if(!h("swoosh",.03))return;let I=s.currentTime,D=T===2;d(I,D?.28:.16,"bandpass",D?400:700,D?2600:3400,1.4,.32)},slice(){if(!h("slice",.02))return;let T=s.currentTime;d(T,.08,"highpass",2500,7e3,.7,.3),u(T,.2,"triangle",W(1800,2300),1100,.06),d(T+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!h("wound",.03))return;let T=s.currentTime;d(T,.18,"lowpass",900,150,1,.45),u(T,.12,"sine",160,60,.25)},punch(){if(!h("punch",.05))return;let T=s.currentTime;u(T,.15,"sine",140,45,.5),d(T,.1,"lowpass",1500,200,1,.35)},hurt(){if(!h("hurt",.1))return;let T=s.currentTime;u(T,.3,"sawtooth",320,90,.12)},die(){if(!h("die",.5))return;let T=s.currentTime;u(T,1,"sawtooth",240,40,.14),d(T,.6,"lowpass",800,60,1,.3)},thud(T){if(!h("thud",.06))return;let I=s.currentTime,D=pt(T/2500,.04,.3);u(I,.12,"sine",120,45,D),d(I,.07,"lowpass",500,120,1,D*.8)},clang(){if(!h("clang",.05))return;let T=s.currentTime;u(T,.35,"square",1750,1600,.05),u(T,.3,"triangle",2650,2500,.07),d(T,.06,"highpass",4e3,8e3,1,.25)},jump(T){if(!h("jump",.05))return;let I=s.currentTime,D=T||1;u(I,.12,"sine",260*D,560*D,.07)},combo(T){if(!h("combo",.04))return;let I=s.currentTime,D=520*Math.pow(1.06,Math.min(T,24));u(I,.14,"triangle",D,D*1.5,.07)},enemySwing(){h("eswing",.05)&&d(s.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!h("splash",.1))return;let T=s.currentTime;d(T,.5,"lowpass",2400,300,.8,.4),d(T+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!h("win",1))return;let T=s.currentTime;[523,659,784,1047].forEach((I,D)=>u(T+D*.09,.22,"triangle",I,I,.08))},skid(){if(!h("skid",.2))return;let T=s.currentTime;u(T,.22,"sine",W(950,1150),720,.05),d(T,.25,"bandpass",2200,1400,2,.12)},scrape(){if(!h("scrape",.12))return;let T=s.currentTime;d(T,.12,"bandpass",3200,1700,3,.1)},twang(){if(!h("twang",.08))return;let T=s.currentTime;u(T,.6,"triangle",W(170,210),70,.22),u(T,.35,"sawtooth",340,120,.05),d(T,.07,"highpass",2500,6e3,1,.35)},hiss(T){if(!h(T?"hissB":"hiss",.3))return;let I=s.currentTime;T?(d(I,.9,"lowpass",3e3,400,.7,.4),u(I,.4,"sine",90,40,.3)):d(I,1.2,"highpass",5e3,3e3,.8,.09)},horn(){if(!h("horn",1))return;let T=s.currentTime;for(let[I,D]of[[146.8,0],[220,.05]])p(T+D,1.1,"sawtooth",I,.16,900,500,.15,t)},wave(){if(!h("wave",1))return;let T=s.currentTime;d(T,1.6,"lowpass",300,1400,.8,.35),d(T+.6,1.2,"lowpass",1400,200,.8,.3)},thunder(){if(!h("thunder",2))return;let T=s.currentTime+W(.15,.6);d(T,.25,"highpass",1500,600,.7,.25),d(T+.05,2.4,"lowpass",500,60,.9,.55)},rope(){if(!h("rope",.08))return;let T=s.currentTime;d(T,.22,"bandpass",900,3600,4,.22),u(T,.12,"triangle",600,1400,.04)},thunk(){if(!h("thunk",.08))return;let T=s.currentTime;u(T,.14,"sine",190,70,.3),d(T,.06,"lowpass",1600,300,1,.25)},hoof(T){if(!h("hoof",.05)||T<.03)return;let I=s.currentTime;u(I,.08,"sine",95,50,.22*T),d(I,.05,"bandpass",500,300,1.5,.18*T)},titanStep(T){if(!h("titanStep",.12)||T<.03)return;let I=s.currentTime;u(I,.6,"sine",62,26,.6*T),d(I,.35,"lowpass",300,60,1,.35*T)},saw(T){if(!h("saw",.28)||T<.05)return;let I=s.currentTime;d(I,.16,"bandpass",2600,1800,6,.12*T),u(I,.14,"sawtooth",210,180,.03*T)},click(){h("click",.03)&&u(s.currentTime,.04,"triangle",1500,900,.06)},heal(){if(!h("heal",.2))return;let T=s.currentTime;u(T,.12,"sine",660,660,.08),u(T+.1,.18,"sine",990,990,.08)}}})();var O={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14,SPINE:15},Di=16,z_=45,F_=[.3,.3,1.4,.3,.45,.8,.3,.45,.8,.75,.4,.55,.75,.4,.55,.9],O_=[.6,.9,1,.9,1,1,.9,1,1,.8,.6,.6,.8,.6,.6,1],B_=[3,4,1.5,4,1,1,4,1,1,1,1,1,1,1,1,4],k_=[.14,.045,.1,.05,.04,.045,.05,.04,.045,.065,.05,.048,.065,.05,.048,.1],Hh=.12,H_=5,V_=[[O.NECK,O.SPINE,.145,"torso",1,.5],[O.SPINE,O.PELVIS,.145,"torso",.5,0],[O.NECK,O.HEAD,.05,"neck"],[O.NECK,O.LSH,0,"struct"],[O.NECK,O.RSH,0,"struct"],[O.LSH,O.RSH,0,"struct"],[O.PELVIS,O.LHIP,0,"struct"],[O.PELVIS,O.RHIP,0,"struct"],[O.LHIP,O.RHIP,0,"struct"],[O.LSH,O.LELB,.048,"arm"],[O.LELB,O.LHAND,.042,"arm"],[O.RSH,O.RELB,.048,"arm"],[O.RELB,O.RHAND,.042,"arm"],[O.LHIP,O.LKNEE,.068,"leg"],[O.LKNEE,O.LFOOT,.052,"leg"],[O.RHIP,O.RKNEE,.068,"leg"],[O.RKNEE,O.RFOOT,.052,"leg"]];function Vh(s){return{spine:.52*s,neck:.24*s,shW:.14*s,hipW:.085*s,ua:.29*s,fa:.27*s,th:.44*s,sh:.43*s,headR:.14*s}}function Sf(s,t,e,n,i,r=1,a=1){return{x:s,y:t,z:e,px:s,py:t,pz:e,r:n,k:i,c:r,ky:a,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var G_=1,Fl=class{constructor(t,e,n){this.id=G_++,this.S=t,this.d=Vh(t),this.kBase=n.k,this.hitK=n.hitK||1,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(Di*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let i=0;i<Di;i++){let r=e[i*3],a=e[i*3+1],o=e[i*3+2];this.pts.push(Sf(r,a,o,k_[i]*t,F_[i],O_[i],B_[i])),this.tgt[i*3]=r,this.tgt[i*3+1]=a,this.tgt[i*3+2]=o}this.pts[O.HEAD].r=this.d.headR*.8,this.headHitR=this.d.headR*(this.hitK>1?1:.86),this.pts[O.HEAD].im=.8,this.pts[O.PELVIS].pin=!1;for(let[i,r,a,o,l,c]of V_)this.addBone(i,r,a*t*this.hitK,o,l,c);this.addAux(O.LSH,O.SPINE,!1),this.addAux(O.RSH,O.SPINE,!1),this.addAux(O.LHIP,O.SPINE,!1),this.addAux(O.RHIP,O.SPINE,!1),this.addAux(O.NECK,O.PELVIS,!0,.8),this.addAux(O.LSH,O.PELVIS,!0,.78),this.addAux(O.RSH,O.PELVIS,!0,.78),this.addAux(O.HEAD,O.PELVIS,!0,.8),this.addAux(O.HEAD,O.LSH,!0,.9),this.addAux(O.HEAD,O.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,i,r=0,a=1){let o=this.pts[t],l=this.pts[e];this.bones.push({a:t,b:e,r:n,kind:i,sa:r,sb:a,len:Math.hypot(l.x-o.x,l.y-o.y,l.z-o.z),vis:i!=="struct",part:t*100+e})}addAux(t,e,n,i=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*i})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let i=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,f=1/t,d=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],g=(x.x-x.px)*i,m=(x.y-x.py)*i,v=(x.z-x.pz)*i,w=g*g+m*m+v*v,y=z_*t;if(w>y*y){let M=y/Math.sqrt(w);g*=M,m*=M,v*=M}x.px=x.x,x.py=x.y,x.pz=x.z;let S=-$e;if(x.y<d){let M=Math.exp(-4*t);g*=M,m*=M,v*=M,S+=$e*pt((d-x.y)*6,0,1.6)}else g*=.999,m*=.999,v*=.999;if(a&&x.attached&&p<Di){let M=this.tgt[p*3],R=this.tgt[p*3+1],_=this.tgt[p*3+2];if(x.pin){x.x=M,x.y=R,x.z=_;continue}if(o>0){let E=l*x.k,C=c*x.c,N=(M-x.x)*E-(g*f-this.cvx)*C;S+=(R-x.y)*E*x.ky-(m*f-this.cvy)*C*Math.sqrt(x.ky);let U=(_-x.z)*E-(v*f-this.cvz)*C;x.x+=g+N*h,x.y+=m+S*h,x.z+=v+U*h;continue}}x.x+=g,x.y+=m+S*h,x.z+=v}for(let p=0;p<H_;p++){for(let x=0;x<this.bones.length;x++){let g=this.bones[x];this.solve(g.a,g.b,g.len,!1)}for(let x=0;x<this.aux.length;x++){let g=this.aux[x];this.solve(g.a,g.b,g.len,g.min)}for(let x=0;x<r.length;x++){let g=r[x],m=n.ground(g.x,g.z);g.y<m+g.r&&g.py>m-.25&&(g.y=m+g.r)}}let u=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],g=n.ground(x.x,x.z);if(x.y>g+x.r+.002||x.py<g-.25)continue;let m=x.y-x.py;m<0&&(-m*f>this.impact&&(this.impact=-m*f),x.py=x.y+m*.2),x.px=x.x-(x.x-x.px)*u,x.pz=x.z-(x.z-x.pz)*u}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,i){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||i&&h>=n)return;let f=this.invMass(r),d=this.invMass(a),u=f+d;if(u===0)return;let p=(h-n)/(h*u);r.x+=o*p*f,r.y+=l*p*f,r.z+=c*p*f,a.x-=o*p*d,a.y-=l*p*d,a.z-=c*p*d}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),i=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=i,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=i,r.push(c))}i++}let a=n[O.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=pt(e,.18,.82);let i=this.pts[n.a],r=this.pts[n.b],a=()=>{let u=n.r/this.hitK*.82,p=Sf(rt(i.x,r.x,e),rt(i.y,r.y,e),rt(i.z,r.z,e),u*.9,0);return p.px=rt(i.px,r.px,e),p.py=rt(i.py,r.py,e),p.pz=rt(i.pz,r.pz,e),p.stump=!0,p.stumpR=u,p},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=rt(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),f=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,f),this.updateConnectivity(),this.version++;let d=this.pts[o];return{i1:o,i2:l,x:d.x,y:d.y,z:d.z,kind:n.kind}}addVel(t,e,n,i,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*i,o.py-=e*i,o.pz-=n*i}}addSpin(t,e,n,i){let r=this.comp?this.comp[O.PELVIS]:void 0,a=f=>r===void 0||this.comp[f]===r,o=0,l=0,c=0,h=0;if(this.pts.forEach((f,d)=>{a(d)&&(o+=f.x,l+=f.y,c+=f.z,h++)}),!!h){o/=h,l/=h,c/=h;for(let f=0;f<this.pts.length;f++){if(!a(f))continue;let d=this.pts[f],u=d.x-o,p=d.y-l,x=d.z-c;d.px-=(e*x-n*p)*i,d.py-=(n*u-t*x)*i,d.pz-=(t*p-e*u)*i}}}bounds(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<i&&(i=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=i,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[O.PELVIS]}};function Ol(s,t,e,n){let i=s.bones,r=s.pts,a=r[O.HEAD],o=s.headHitR;for(let l=1;l<=n;l++){let c=l/n,h=rt(t.bx,e.bx,c),f=rt(t.by,e.by,c),d=rt(t.bz,e.bz,c),u=rt(t.tx,e.tx,c),p=rt(t.ty,e.ty,c),x=rt(t.tz,e.tz,c),g=null,m=1/0;for(let v=0;v<i.length;v++){let w=i[v];if(!w.vis)continue;let y=r[w.a],S=r[w.b];ss(h,f,d,u,p,x,y.x,y.y,y.z,S.x,S.y,S.z);let M=w.r+.02;ce.d2<M*M&&ce.d2<m&&(m=ce.d2,g={bone:v,u:ce.t,t:ce.s,x:rt(y.x,S.x,ce.t),y:rt(y.y,S.y,ce.t),z:rt(y.z,S.z,ce.t),head:!1})}if(ma(a.x,a.y,a.z,h,f,d,u,p,x),Dn.d2<o*o&&Dn.d2<m&&(g={bone:-1,u:.5,t:Dn.t,x:a.x,y:a.y,z:a.z,head:!0}),g)return g}return null}var W_=.22;function bf(s,t,e,n){let i=s.pts,r=i[O.HEAD],a=s.headHitR,o=s.boneWith(O.HEAD),l=s.bones.findIndex(c=>c.kind==="torso"&&(c.a===O.NECK||c.b===O.NECK));if(o<0||!i[O.HEAD].attached)return null;for(let c=1;c<=n;c++){let h=c/n,f=rt(t.bx,e.bx,h),d=rt(t.by,e.by,h),u=rt(t.bz,e.bz,h),p=rt(t.tx,e.tx,h),x=rt(t.ty,e.ty,h),g=rt(t.tz,e.tz,h),m=s.bones[o],v=i[m.a],w=i[m.b];if(ss(f,d,u,p,x,g,v.x,v.y,v.z,w.x,w.y,w.z),ce.d2<(m.r+.02)**2)return{bone:o,u:ce.t,t:ce.s,x:rt(v.x,w.x,ce.t),y:rt(v.y,w.y,ce.t),z:rt(v.z,w.z,ce.t),head:!1,zone:"neck"};if(ma(r.x,r.y,r.z,f,d,u,p,x,g),Dn.d2<a*a)return{bone:-1,u:.5,t:Dn.t,x:r.x,y:r.y,z:r.z,head:!0,zone:"neck"};if(l>=0&&s.bones[l].vis){let y=s.bones[l],S=i[y.a],M=i[y.b];if(ss(f,d,u,p,x,g,S.x,S.y,S.z,M.x,M.y,M.z),(y.a===O.NECK?ce.t:1-ce.t)<W_&&ce.d2<(y.r+.02)**2)return{bone:o,u:.25,t:ce.s,x:rt(S.x,M.x,ce.t),y:rt(S.y,M.y,ce.t),z:rt(S.z,M.z,ce.t),head:!1,zone:"collar"}}}return null}function Gh(s,t,e,n,i){let r=i*i;for(let a=1;a<=n;a++){let o=a/n;if(ss(rt(s.bx,t.bx,o),rt(s.by,t.by,o),rt(s.bz,t.bz,o),rt(s.tx,t.tx,o),rt(s.ty,t.ty,o),rt(s.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),ce.d2<r)return{x:rt(e.bx,e.tx,ce.t),y:rt(e.by,e.ty,ce.t),z:rt(e.bz,e.tz,ce.t)}}return null}var Wh=["lean","hunch","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Ui(){let s={};for(let t of Wh)s[t]=0;return s}function zi(s,t,e,n){for(let i of Wh)s[i]=t[i]+(e[i]-t[i])*n;return s}function Tf(s,t,e){for(let n of Wh)s[n]+=(t[n]-s[n])*e}var rn={guard(s,t){return s.lean=.2,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.3,s.lP=.62,s.lB=1.15,s.lS=.16,s.rP=.28,s.rB=.95,s.rS=.14,s.bob=Math.sin(t*2.4)*.012,s},crouch(s,t){return s.lean=.4,s.hunch=.6+.06*Math.sin(t*2.2),s.twist=0,s.side=.08*Math.sin(t*1.3),s.headP=-.55,s.lP=1.05,s.lB=1.95,s.lS=.2,s.rP=.8,s.rB=1.85,s.rS=.18,s.bob=Math.sin(t*2.2)*.02,s},run(s,t){let e=Math.sin(t);return s.lean=.22,s.hunch=.72,s.twist=-e*.16,s.side=0,s.headP=-.32,s.lP=.2+.78*e,s.lB=.8+1.2*Math.max(0,Math.cos(t+.5)),s.rP=.2-.78*e,s.rB=.8+1.2*Math.max(0,Math.cos(t+Math.PI+.5)),s.lS=.08+.06*Math.sin(t+1.3),s.rS=.08-.06*Math.sin(t+1.3),s.bob=-Math.abs(Math.cos(t))*.07+.05,s},walk(s,t){let e=Math.sin(t);return s.lean=.08,s.hunch=.5,s.twist=-e*.1,s.side=0,s.headP=-.22,s.lP=.12+.42*e,s.lB=.45+.6*Math.max(0,Math.cos(t+.5)),s.rP=.12-.42*e,s.rB=.45+.6*Math.max(0,Math.cos(t+Math.PI+.5)),s.lS=.07+.03*Math.sin(t+1.3),s.rS=.07-.03*Math.sin(t+1.3),s.bob=-Math.abs(Math.cos(t))*.03+.015,s},kneel(s){return s.lean=.25,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.2,s.lP=1.2,s.lB=1.3,s.lS=.1,s.rP=-.25,s.rB=1.9,s.rS=.08,s.bob=-.06,s},lunge(s){return s.lean=.3,s.hunch=.3,s.side=0,s.headP=-.3,s.lP=.85,s.lB=1,s.lS=.1,s.rP=-.45,s.rB=.35,s.rS=.1,s.bob=-.02,s},skid(s,t,e){let n=Math.sin(t*1.7);s.lean=.12,s.hunch=.2,s.twist=0,s.side=.4*e,s.headP=-.1;let i=.25,r=.12,a=.62,o=.55+.45*n,l=1.3+.3*Math.cos(t*1.7),c=-.12;return e>0?(s.rP=i,s.rB=r,s.rS=a,s.lP=o,s.lB=l,s.lS=c):(s.lP=i,s.lB=r,s.lS=a,s.rP=o,s.rB=l,s.rS=c),s.bob=-.05,s},hop(s,t,e){let n=Math.abs(Math.sin(t));return s.lean=.2,s.hunch=.3,s.twist=0,s.side=0,s.headP=-.25,s.lP=.15+(e?.25*Math.sin(t):0),s.lB=.35+(e?.5*n:0),s.lS=.05,s.rP=s.lP,s.rB=s.lB,s.rS=.05,s.bob=e?n*.13:Math.sin(t)*.01,s},stumps(s,t,e){let n=Math.sin(t);return s.lean=.35,s.hunch=.35,s.twist=0,s.side=0,s.headP=-.45,s.lP=.3+(e?.7*n:0),s.lB=0,s.lS=.2,s.rP=.3-(e?.7*n:0),s.rB=0,s.rS=.2,s.bob=e?Math.abs(n)*.1:0,s},ride(s,t){return s.lean=.12,s.hunch=.25,s.twist=0,s.side=0,s.headP=-.1,s.lP=.95,s.lB=1.55,s.lS=1.15,s.rP=.95,s.rB=1.55,s.rS=1.15,s.bob=Math.sin(t)*.03,s},air(s){return s.lean=.1,s.hunch=.35,s.twist=0,s.side=0,s.headP=.1,s.lP=1,s.lB=1.6,s.lS=.12,s.rP=.4,s.rB=1.4,s.rS=.12,s.bob=0,s}};function Un(s,t,e,n,i){s[t*3]=e,s[t*3+1]=n,s[t*3+2]=i}function wf(s,t,e,n){return(n.th*Math.cos(s)+n.sh*Math.cos(s-t))*Math.cos(e)}function Ef(s,t,e,n,i,r,a,o,l,c,h){let f=Math.cos(c),d=Math.sin(c),u=Math.cos(o),p=i+u*d*h.th,x=r-u*f*h.th,g=a+Math.sin(o)*h.th;Un(s,e,p,x,g),u=Math.cos(o-l),Un(s,n,p+u*d*h.sh,x-u*f*h.sh,g+Math.sin(o-l)*h.sh),Un(s,t,i,r,a)}var Bl=[0,0,0];function ga(s,t,e,n,i,r){let a=Math.cos(s),o=Math.sin(s),l=i*a-r*o,c=i*o+r*a;a=Math.cos(t),o=Math.sin(t);let h=n*a-l*o,f=n*o+l*a;return a=Math.cos(e),o=Math.sin(e),Bl[0]=h*a+c*o,Bl[1]=f,Bl[2]=-h*o+c*a,Bl}function Xh(s,t,e,n,i=3,r=null){let a=-s.lS,o=s.rS,l=0;i&1&&(l=Math.max(l,wf(s.lP,s.lB,a,t))),i&2&&(l=Math.max(l,wf(s.rP,s.rB,o,t)));let c=(r!==null?r:l+n)+s.bob;Un(e,O.PELVIS,0,c,0);let h=t.spine*.5,f=s.lean+s.hunch,d=ga(s.lean,s.side*.4,s.twist*.25,0,h,0),u=d[0],p=c+d[1],x=d[2];Un(e,O.SPINE,u,p,x),d=ga(f,s.side,s.twist,0,h,0);let g=u+d[0],m=p+d[1],v=x+d[2];Un(e,O.NECK,g,m,v);let w=s.headP-.8*s.hunch,y=Math.cos(w),S=Math.sin(w);d=ga(f,s.side,s.twist,0,t.neck*y,t.neck*S+.03*t.neck),Un(e,O.HEAD,g+d[0],m+d[1],v+d[2]),d=ga(f,s.side,s.twist,-t.shW,-.03,0),Un(e,O.LSH,g+d[0],m+d[1],v+d[2]),d=ga(f,s.side,s.twist,t.shW,-.03,0),Un(e,O.RSH,g+d[0],m+d[1],v+d[2]);for(let[_,E,C,N]of[[O.LSH,O.LELB,O.LHAND,-1],[O.RSH,O.RELB,O.RHAND,1]]){let U=e[_*3],H=e[_*3+1],T=e[_*3+2];Un(e,E,U+N*.04,H-t.ua,T+.05),Un(e,C,U+N*.04,H-t.ua-t.fa*.9,T+.16)}let M=Math.cos(s.twist*.25),R=Math.sin(s.twist*.25);Ef(e,O.LHIP,O.LKNEE,O.LFOOT,-t.hipW*M,c,t.hipW*R,s.lP,s.lB,a,t),Ef(e,O.RHIP,O.RKNEE,O.RFOOT,t.hipW*M,c,-t.hipW*R,s.rP,s.rB,o,t)}function Af(s,t,e,n,i,r,a,o,l,c,h,f){let d=n-s,u=i-t,p=r-e,x=Math.hypot(d,u,p),g=(a+o)*.999;x<1e-5&&(d=0,u=-1,p=0,x=1e-5);let m=d/x,v=u/x,w=p/x;x>g&&(x=g);let y=(a*a-o*o+x*x)/(2*x),S=Math.sqrt(Math.max(0,a*a-y*y)),M=l*m+c*v+h*w,R=l-m*M,_=c-v*M,E=h-w*M,C=Math.hypot(R,_,E);return C<1e-5&&(R=0,_=-1,E=0,C=1),R/=C,_/=C,E/=C,f[0]=s+m*y+R*S,f[1]=t+v*y+_*S,f[2]=e+w*y+E*S,f[3]=s+m*x,f[4]=t+v*x,f[5]=e+w*x,f}var vn=.135;function X_(s,t,e){let n=vn,i=vn+s*.86,r=vn+s,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([d,,u])=>[d,i,u]),l=[0,r,0],c=[],h=(d,u,p)=>c.push(...d,...u,...p);for(let d=0;d<4;d++){let u=(d+1)%4;h(a[d],o[d],o[u]),h(a[d],o[u],a[u]),h(o[d],l,o[u])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let f=new ye;return f.setAttribute("position",new re(c,3)),f.computeVertexNormals(),f}var ar={};function q_(){return ar.guard||(ar.guard=new Gt({color:4869975,metalness:.85,roughness:.35}),ar.grip=new Gt({color:2760989,roughness:.85})),ar}function qh(s,t=.07){let n=q_(),i=new he,r=new Gt({color:14936302,metalness:.95,roughness:.2}),a=new xt(X_(s,t*1,.018*1*t/.07),r),o=new xt(new Ae(.24*1,.035*1,.05*1),n.guard);o.position.y=.12*1;let l=new xt(new Ne(.019*1,.022*1,.22*1,10),n.grip),c=new xt(new en(.032*1,12,8),n.guard);c.position.y=-.125*1;for(let h of[a,o,l,c])h.castShadow=h===a,i.add(h);return i.userData.bladeMat=r,i}function kl(s){s.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==ar.guard&&t.material!==ar.grip&&t.material.dispose())})}var Rf=new se,Fi=new L,rs=new L,Cf=new L;function Hl(s,t,e,n,i,r,a,o,l,c){rs.set(i,r,a).normalize(),Fi.set(o,l,c),Fi.addScaledVector(rs,-Fi.dot(rs)),Fi.lengthSq()<1e-8&&Fi.set(1,0,0).addScaledVector(rs,-rs.x),Fi.normalize(),Cf.crossVectors(Fi,rs),Rf.makeBasis(Fi,rs,Cf),s.quaternion.setFromRotationMatrix(Rf),s.position.set(t,e,n)}var xa=class{constructor(t,e,n,i,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:i.x,y:i.y,z:i.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let i=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*i,c=(o.y-o.py)*i,h=(o.z-o.pz)*i;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-$e*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,f=Math.hypot(l,c,h)||1,d=(f-this.L)/(2*f);this.a.x+=l*d,this.a.y+=c*d,this.a.z+=h*d,this.b.x-=l*d,this.b.y-=c*d,this.b.z-=h*d;for(let u of[this.a,this.b]){let p=n.ground(u.x,u.z);if(u.y<p+.02&&u.py>p-.2){if(u===r&&!n.noStick&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,u.y=p-.12;return}u.y=p+.02,u.px=u.x-(u.x-u.px)*.6,u.pz=u.z-(u.z-u.pz)*.6}}}}render(){let t=this.a,e=this.b;Hl(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var ya=[[0,.1],[.2,.094],[.45,.078],[.72,.106],[.9,.1],[1,.064]];function Y_(s){for(let t=1;t<ya.length;t++){let[e,n]=ya[t];if(s<=e){let[i,r]=ya[t-1],a=(s-i)/(e-i);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return ya[ya.length-1][1]}var Z_={100:[.04,.036],304:[.04,.032],607:[.04,.032],405:[.033,.027],708:[.033,.027],910:[.06,.042],1213:[.06,.042],1011:[.044,.03],1314:[.044,.03]};function Yh(s,t){if(s.kind==="torso")return Y_(t);let e=Z_[s.part]||[s.r,s.r];return e[0]+(e[1]-e[0])*t}var If=new Map;function K_(s,t,e,n){let i=`${s.part}|${s.sa.toFixed(3)}|${s.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=If.get(i);if(r)return r;let a=s.len,o=[],l=Yh(s,s.sa)*t,c=Yh(s,s.sb)*t;if(e)for(let f=0;f<5;f++){let d=-Math.PI/2+f/5*Math.PI/2;o.push(new ot(l*Math.cos(d),l*Math.sin(d)))}else o.push(new ot(1e-4,0));let h=s.kind==="torso"?14:4;for(let f=0;f<=h;f++){let d=f/h;o.push(new ot(Yh(s,s.sa+(s.sb-s.sa)*d)*t,d*a))}if(n)for(let f=1;f<=5;f++){let d=f/5*Math.PI/2;o.push(new ot(Math.max(1e-4,c*Math.cos(d)),a+c*Math.sin(d)))}else o.push(new ot(1e-4,a));return r=new Wr(o,12),If.set(i,r),r}var J_=new en(1,18,12),$_=new en(1,10,8),j_=new en(1,14,10),Pf=new en(1,12,8),Q_=new Gt({color:14680092,roughness:.45,emissive:3801093}),tv=new Gt({color:16777215,roughness:.25}),ev=new Gt({color:1118481,roughness:.3}),Lf=new L(0,1,0),or=new L,Nf=new L,dn=new L,Oi=new L,Vl=new L,Df=new se;function Uf(s,t,e){Oi.copy(t).addScaledVector(s,-t.dot(s)),Oi.lengthSq()<1e-8&&Oi.set(1,0,0).addScaledVector(s,-s.x),Oi.normalize(),Vl.crossVectors(Oi,s),Df.makeBasis(Oi,s,Vl),e.setFromRotationMatrix(Df)}var Gl=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new he,this.mat=new Ei({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new he;let i=new xt(J_,this.mat),r=this.rag.d.headR*.8;i.scale.set(r*.95,r*1.12,r*1.08),i.castShadow=!0,this.headGroup.add(i),this.pupils=[];for(let a of[-1,1]){let o=new xt(j_,tv);o.scale.setScalar(.058*n),o.position.set(a*.05*n,.06*n,.088*n);let l=new xt($_,ev);l.scale.setScalar(.025*n),l.userData.base=new L(a*.05*n,.06*n,.088*n+.047*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new L(1,0,0),this.headLateral=new L(1,0,0),this.pupilOff=new ot,this.pupilVel=new ot,this.prevHead=new L,this.deadLook=[new ot(W(-1,1),W(-1,1)),new ot(W(-1,1),W(-1,1))],this.extremities=[];for(let[a,o,l]of[[O.LHAND,.045,1],[O.RHAND,.045,1],[O.LFOOT,.058,.75],[O.RFOOT,.058,.75]]){let c=new xt(Pf,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let i=new xt(K_(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);i.castShadow=!this.shadowOff,n.kind==="torso"&&i.scale.set(1.15,1,.86),this.boneMeshes.set(n,i),this.group.add(i)}for(let[n,i]of this.boneMeshes)e.has(n)||(this.group.remove(i),this.boneMeshes.delete(n));t.pts.forEach((n,i)=>{if(!n.stump||this.stumpMeshes.has(i))return;let r=new xt(Pf,Q_);r.userData.r=n.stumpR,this.stumpMeshes.set(i,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,i=this.ch,r=e.comp;or.set(n[O.LSH].x-n[O.RSH].x,n[O.LSH].y-n[O.RSH].y,n[O.LSH].z-n[O.RSH].z),or.lengthSq()>1e-6&&this.lateral.copy(or).normalize(),Nf.set(n[O.LHIP].x-n[O.RHIP].x,n[O.LHIP].y-n[O.RHIP].y,n[O.LHIP].z-n[O.RHIP].z).normalize();for(let[h,f]of this.boneMeshes){let d=n[h.a],u=n[h.b];dn.set(u.x-d.x,u.y-d.y,u.z-d.z);let p=dn.length();if(!(p<1e-6))if(dn.multiplyScalar(1/p),f.position.set(d.x,d.y,d.z),h.kind==="torso"){let g=!(h.part===O.SPINE*100+O.PELVIS)&&(r[h.a]===r[O.NECK]||r[h.b]===r[O.NECK]);Uf(dn,g?this.lateral:Nf,f.quaternion)}else f.quaternion.setFromUnitVectors(Lf,dn)}let a=n[O.HEAD],o=e.neighborOf(O.HEAD);if(o>=0?dn.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():dn.set(0,1,0),r[O.HEAD]===r[O.LSH]&&this.headLateral.copy(this.lateral),Uf(dn,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){or.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),Oi.set(1,0,0).applyQuaternion(this.headGroup.quaternion),Vl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-or.dot(Oi)*.004,f=-or.dot(Vl)*.004,d=this.pupilOff,u=this.pupilVel;u.x+=((h-d.x)*260-u.x*10)*t,u.y+=((f-d.y)*260-u.y*10)*t,d.x=pt(d.x+u.x*t,-.022,.022),d.y=pt(d.y+u.y*t,-.022,.022)}let l=i.S;this.pupils.forEach((h,f)=>{let d=h.userData.base;if(i.alive)h.position.set(d.x+this.pupilOff.x*l,d.y+this.pupilOff.y*l,d.z);else{let u=this.deadLook[f];h.position.set(d.x+u.x*.02*l,d.y+u.y*.02*l,d.z-.004*l)}});for(let h of this.extremities){let f=n[h.userData.idx];h.position.set(f.x,f.y,f.z),i.alive&&h.rotation.set(0,i.yaw,0)}for(let[h,f]of this.stumpMeshes){let d=n[h],u=e.neighborOf(h);if(u<0){f.visible=!1;continue}dn.set(d.x-n[u].x,d.y-n[u].y,d.z-n[u].z).normalize();let p=f.userData.r;f.position.set(d.x+dn.x*p*.45,d.y+dn.y*p*.45,d.z+dn.z*p*.45),f.quaternion.setFromUnitVectors(Lf,dn),f.scale.set(p*1.06,p*.55,p*1.06)}let c=i.flash>0?.55:0;this.mat.emissive.setScalar(c),!i.alive&&!this.shadowOff&&i.game.time-i.deathT>3&&(this.shadowOff=!0,this.group.traverse(h=>{h.castShadow=!1}))}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var kf=7,va=.95,Yl=1.65,nv=-1.95,iv=1.7,zf=1.9,Ff=230,Of=15,sv=3.2,rv=2.2,av=2,Zh=36,ov=3.2,lv=4.2,cv=.07,hv=[[0,-1],[.7,-.7],[-.7,-.7],[1,-.25],[-1,-.25]],uv=[[.8,.6],[-.8,.6],[0,1],[1,0],[-1,0]],Hf=.42,_a=[0,0,1],zn=[1,0,0],as=[0,0,0],dv=[[O.RSH,O.RELB,O.RHAND,0,.8]],fv=[[O.LSH,O.LELB,O.LHAND,0,-.8]],pv=.25,mv=.12,gv=[[O.RSH,O.RELB,O.RHAND,.05,.8,0],[O.LSH,O.LELB,O.LHAND,-.065,-.8,0]],xv=[[O.RSH,O.RELB,O.RHAND,0,.8,0],[O.LSH,O.LELB,O.LHAND,0,-.8,1]],yv={x:0,y:0,z:0},_v=[-.45,-.35,-.2,-.1,0,.1,.25],vv=[[O.HEAD,1.3,1.7],[O.NECK,1,1.3],[O.SPINE,.8,1.1],[O.LSH,1,2.1],[O.RSH,1,1.9],[O.LKNEE,1.6,2.5],[O.RKNEE,1.6,2.3]],Wl={vy:0,px:0,pz:0},Mv=Ui(),Kh=Ui(),Jh=Ui(),$h=Ui(),Bf=Ui(),Xl=[0,0,0,0,0,0],ql=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.team=e.team||"enemy",this.side=this.team==="enemy"?1:0,this.target=null,this.tgT=0,this.passSide=1,this.titan=!!e.titan,this.flyer=!!e.flyer,this.hookCd=W(.5,2),this.heavy=!!e.heavy,this.boss=!!e.boss,this.aimCtl=!this.titan,this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.gy=0,this.vx=0,this.vz=0,this.vy=0,this.slideX=0,this.slideZ=0,this.slip=0,this.slipDir=1,this.skidding=!1,this.brakeK=0,this.low=0,this.lowPref=!0,this.runK=0,this.pelvisPrev={x:0,y:0,z:0,ok:!1},this.swingBias=0,this.swinging=!1,this.lowSwing=0,this.gait=W(.9,1.12),this.gaitOff=W(0,Math.PI*2),this.launchT=0,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.hasSword2=!!e.dual,this.t=W(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.mount=null,this.rope=null,this.flying=!1,this.stickW={x:0,z:1,mag:0},this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.aimK=this.isPlayer?Ff:this.heavy?80:this.boss?100:rt(150,Ff,this.skill),this.aimMaxW=this.isPlayer?Of:this.heavy?8:this.boss?10:rt(12,Of,this.skill),this.aimC=1.52*Math.sqrt(this.aimK),this.aimA=this.yaw,this.plan=null,this.grudge=null,this.grudgeT=0,this.pitchAdj=0,this.state="approach",this.timer=W(.6,1.2),this.cool=W(.3,.9)*rt(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=Vh(this.S),this.footR=.048*this.S,this.pose=rn.guard(Ui(),0),this.tpose=Ui(),this.local=new Float32Array(Di*3),this.world=new Float32Array(Di*3),Xh(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new Fl(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24,hitK:this.titan?1.4:1}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.lg2=[0,0,0],this.ld2=[0,0,1],this.sw2={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.b2Cur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.b2Prev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bladeLen=e.bladeLen||va,this.tip={init:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,gx:0,gy:0,gz:0,gvx:0,gvy:0,gvz:0,dx:0,dy:1,dz:0,w:0},this.bladeKRest=this.isPlayer?70:this.heavy?50:60,this.bladeKSwing=this.isPlayer?420:this.heavy?200:this.boss?260:rt(300,420,this.skill),this.swordMesh=qh(this.bladeLen,this.titan?.1:.07),this.swordMesh.scale.setScalar(this.S),this.sword2Mesh=this.hasSword2?qh(this.bladeLen):null,this.view=new Gl(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,i=this.world;for(let r=0;r<Di;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];i[r*3]=this.x-e*a+t*l,i[r*3+1]=this.y+o,i[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let i=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+i*t[2],e[n+1]=t[1],e[n+2]=i*t[0]+r*t[2]}get legMask(){let t=this.rag.pts;return(t[O.LFOOT].attached?1:0)|(t[O.RFOOT].attached?2:0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.grudgeT=Math.max(0,this.grudgeT-t),this.launchT=Math.max(0,this.launchT-t),this.isPlayer?this.thinkPlayer():this.aimCtl?this.thinkEnemy(t):this.thinkTitan(t),this.aimCtl&&(this.applyStick(),this.updateAim(t)),this.mount?this.ride():this.move(t),!!this.alive)){if(this.aimCtl){let e=this.mount?2.3:av,n=sn(this.swYaw-this.yaw);Math.abs(n)>e&&(this.mount?(this.swYaw=sn(this.yaw+Math.sign(n)*e),this.swW=0):this.yaw=this.swYaw-Math.sign(n)*e)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t),this.skidFx(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let i=Math.hypot(t,e)||1;t/=i,e/=i;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:nv,a1:iv,wind:n?.05:rt(.62,.24,r)*(this.counterT>0?.6:1)*1.8,dur:n?.2:.5,rec:n?.18:rt(.55,.35,r),hits:new Set,rolled:new Set,kills:0,tx:0,ty:0,tz:0,high:!1,tg:this.target||this.game.player},this.titan&&this.aimTitan(),this.game.onSwingStart(this)}aimTitan(){let t=this.swing,e=t.tg,n=Math.max(0,t.wind-t.t)+t.dur*.3,i=rt(.35,.85,this.skill);t.tx=e.x+(e.vx+e.slideX)*n*i,t.ty=e.y+.75+e.vy*n*i*.5,t.tz=e.z+(e.vz+e.slideZ)*n*i}get gripR(){return this.rag.pts[O.RHAND].attached}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.aimCtl)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}get curEp(){return this.aimCtl?this.episode:this.swing}thinkPlayer(){let t=this.game,e=t.input.move(),n=Math.sin(t.camYaw),i=Math.cos(t.camYaw),r=n*e.y-i*e.x,a=i*e.y+n*e.x,o=Math.hypot(r,a)||1;this.stickW.x=r/o,this.stickW.z=a/o,this.stickW.mag=e.mag}applyStick(){let t=this.stickW,e=this.legMask,n=e===3?1:e?.62:.42,i=pt((t.mag-.4)/.45,0,1)*this.speed*n;this.want.x=t.x*i,this.want.z=t.z*i,t.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(t.x,t.z))}updateAim(t){let e=sn(this.aimYaw-this.swYaw);this.swW=pt(this.swW+(this.aimK*e-this.aimC*this.swW)*t,-this.aimMaxW,this.aimMaxW),this.swYaw=sn(this.swYaw+this.swW*t),this.faceYaw=this.swYaw,this.flying=(!!this.rope||this.y-this.gy>.4)&&Math.hypot(this.vx,this.vy,this.vz)>8}ride(){let t=this.mount,e=t.saddle(yv);this.x=e.x,this.y=e.y,this.z=e.z,this.vx=t.vx,this.vz=t.vz,this.vy=0,this.yaw=t.yaw,this.faceYaw=t.yaw,this.phase=t.phase,this.low=0,this.runK=0}moveAir(t){let e=this.game.world;this.rope&&this.rope.valid&&!this.rope.valid()&&(this.rope=null);let n=this.rope;if(this.low+=(0-this.low)*un(5,t),n){let h=n.anchor(),f=h.x-this.x,d=h.y-(this.y+1.1*this.S),u=h.z-this.z,p=Math.hypot(f,d,u)||1;this.vx+=f/p*n.pull*t,this.vy+=d/p*n.pull*t,this.vz+=u/p*n.pull*t,n.t+=t,(p<n.release||n.t>n.maxT)&&(this.rope=null)}this.vy-=$e*(n?.55:.9)*t;let i=Math.exp(-.3*t);this.vx*=i,this.vz*=i;let r=this.stickW;r.mag>.3&&(this.vx+=r.x*7*t,this.vz+=r.z*7*t);let a=Math.hypot(this.vx,this.vy,this.vz);a>30&&(this.vx*=30/a,this.vy*=30/a,this.vz*=30/a),this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let o=Math.hypot(this.x,this.z),l=e.radius-.5;!e.grid&&o>l&&(this.x*=l/o,this.z*=l/o,this.vx*=.3,this.vz*=.3);let c=e.ground(this.x,this.z);if(c>-1/0&&this.y<=c){let h=e.tileMotion(this.x,this.z,Wl).vy;this.vy<=h&&(this.y=c,this.gy=c,h>2.5?this.launch(Wl):(this.vy=0,this.kb=.35))}c===-1/0&&this.y<this.gy-.3&&(this.falling=!0)}launch(t){this.isPlayer&&this.launchT<=0&&kt.jump(1.3),this.vy=Math.max(this.vy,Math.min(t.vy*1.1,12)),this.y=this.gy+.13,this.launchT<=0&&(this.vx+=t.px,this.vz+=t.pz,this.isPlayer||(this.stun=Math.max(this.stun,.45))),this.launchT=.4}thinkEnemy(t){let e=this.game,n=this.stickW,i=e.player;this.grudge&&(this.grudgeT<=0||!this.grudge.alive)&&(this.grudge=null);let r=this.grudge||this.pickTarget(t),a=r||i;this.lowPref=!a.mount;let o=a.x-this.x,l=a.z-this.z,c=Math.hypot(o,l)||1,h=Math.atan2(o,l),f=(M,R)=>{this.aimA=sn(M);let _=M+this.aimNoise();n.x=Math.sin(_),n.z=Math.cos(_),n.mag=R},d=(M,R,_)=>f(di(this.aimA,M,R*t),_);n.mag=0;let u=this.local,p=a.local,x=this.y+rt(u[O.NECK*3+1],u[O.PELVIS*3+1],.28)-.1*this.S,g=this.flyer&&this.rope?this.rope.pt.y:a.titan?a.y+.9:a.y+rt(p[O.NECK*3+1],p[O.PELVIS*3+1],.4),m=pt(Math.atan2(g-x,Math.max(.8,c-.3)),-.6,.35);if(this.pitchAdj+=(m-this.pitchAdj)*un(6,t),e.time<.8){d(h,3,.25);return}if(this.timer-=t,this.cool-=t,(!r||this.side&&!i.alive)&&this.state!=="panic"&&(this.state="cheer"),this.mount&&this.state!=="cheer"){this.thinkRider(t,a,o,l,c,h,d);return}if(this.flyer&&this.state!=="cheer"&&this.thinkFlyer(t,a,c,h,f))return;let v=this.skill,w=a.titan?2.1:1.6*this.S,y=rt(2.5,5.5,v)*(this.heavy?.6:1);switch(this.state){case"approach":{let M=Math.hypot(this.vx,this.vz);if(c<w+.25+M*M*rt(.05,.1,v)){this.state="fight",d(h,y,.25);break}if(this.cool<=0&&c<w+1+M*.3&&Math.random()<t*rt(.4,2.5,v)&&this.mayAttack(a,!0)){this.startFlick(!0);break}let R=Math.atan2(-o,-l)+pt(this.spread(a,o,l)*.45,-1,1),_=a.x+Math.sin(R)*w-this.x,E=a.z+Math.cos(R)*w-this.z;d(Math.atan2(_,E),4,.95);break}case"fight":if(c>w+.8){this.state="approach";break}d(h,y,c>w+.2?.4+.45*pt((c-w)/1.5,.15,.6):.25),(this.counterT>0||this.cool<=0&&c<w+.35&&this.mayAttack(a))&&this.startFlick(!1);break;case"attack":this.runPlan(t,h,y);break;case"stagger":this.stun<=0&&(this.state="fight",this.plan=null,this.cool=W(.2,.6));break;case"panic":{let M=this.x-i.x,R=this.z-i.z;f(Math.atan2(M,R),Math.min(.95,.4+.45*3.4/this.speed));break}case"cheer":this.y<=this.gy&&!this.falling&&Math.random()<t*2.2&&(this.vy=W(3.2,4.5));break}let S=e.world.traps;S&&(this.state==="approach"||this.state==="panic"||this.state==="fight")&&this.avoidTraps(S,this.state==="fight")}avoidTraps(t,e){let n=this.stickW;this.trapSense===void 0&&(this.trapSense=W(.3,.7)+this.skill*.25);let i=this.trapSense,r=n.x*n.mag,a=n.z*n.mag,o=!1;for(let c of t){if(!c.danger)continue;let h=this.x-c.x,f=this.z-c.z,d=Math.hypot(h,f)||.01,u=c.r+.7*this.S,p=u+2.6*i;if(d>p)continue;let x=h/d,g=f/d;if(d<u){r+=x*1.1*i,a+=g*1.1*i,o=!0;continue}if(e)continue;let m=-(r*x+a*g);if(m<=0)continue;let v=pt((p-d)/(p-u),0,1)*i,w=-g,y=x,S=Math.sign(r*w+a*y)||1;r+=(x+w*S*.8)*m*v,a+=(g+y*S*.8)*m*v,o=!0}if(!o)return;let l=Math.hypot(r,a);l<.001||(n.x=r/l,n.z=a/l,n.mag=pt(l,.3,.95))}pickTarget(t){this.tgT-=t;let e=this.target;if(e&&e.alive&&this.tgT>0)return e;this.tgT=W(.4,.8);let n=null,i=1/0;for(let r of this.game.hostilesOf(this)){if(!r.alive)continue;let a=Math.hypot(r.x-this.x,r.z-this.z);r===e&&(a*=.7),this.titan&&r.isPlayer&&(a*=.6),a<i&&(i=a,n=r)}return this.target=n,n}thinkFlyer(t,e,n,i,r){this.hookCd-=t;let a=this.rope;if(a||this.y>this.gy+.3){let o=a?a.pt:e;return r(Math.atan2(o.x-this.x,o.z-this.z),.5),!0}return!e.titan||this.stun>0||this.kb>0?!1:this.hookCd<=0&&n<24&&n>3?(this.hookCd=W(1.2,2.6)*rt(1.3,.8,this.skill),this.game.allyHook(this,e),!0):(r(i+(n<9?this.strafeDir*1.4:0),n>9?.95:.7),!0)}thinkRider(t,e,n,i,r,a,o){if(this.state==="attack"){this.runPlan(t,a,5);return}if(this.state==="stagger"){this.stun<=0&&(this.state="fight",this.cool=W(.3,.7));return}let l=Math.min(r*.3,e.titan?2.8:1.8)*this.passSide,c=i/r,h=-n/r;o(Math.atan2(e.x+c*l-this.x,e.z+h*l-this.z),5,.95),this.cool<=0&&r<(e.titan?4.2:3.3*this.S)&&this.mayAttack(e,!0)&&(this.passSide=Math.random()<.5?-1:1,this.startFlick(!0))}aimNoise(){let t=this.t,e=this.gaitOff;return(.2*Math.sin(t*1.7+e)+.1*Math.sin(t*4.3+e*2))*(1.2-.6*this.skill)}spread(t,e,n){let i=Math.atan2(-e,-n),r=0;for(let a of this.game.matesOf(this)){if(a===this||a===t||!a.alive||a.state==="panic")continue;let o=sn(Math.atan2(a.x-t.x,a.z-t.z)-i);Math.abs(o)<1.6&&(r-=Math.sign(o)*(1.6-Math.abs(o)))}return r*(1.2+this.skill*1.5)}mayAttack(t,e=!1){let n=this.game;if(e||n.spec.type==="battle"||n.spec.type==="titanwar"||Math.random()<.6+.35*this.skill){let i=Math.atan2(t.x-this.x,t.z-this.z),r=2.2*this.S;for(let a of n.matesOf(this))if(!(a===this||a===t||!a.alive)&&!(Math.hypot(a.x-this.x,a.z-this.z)>r)&&Math.abs(sn(Math.atan2(a.x-this.x,a.z-this.z)-i))<1.6)return this.cool=W(.25,.5),!1}return t!==n.player||n.takeAttackToken(this)}mateNear(t){for(let e of this.game.matesOf(this))if(e!==this&&e.alive&&Math.hypot(e.x-this.x,e.z-this.z)<t*this.S)return!0;return!1}startFlick(t){let e=this.skill,n=Math.random()<.5?-1:1;if(!t&&e>.2&&!this.heavy&&Math.random()<.05+.13*e&&!this.mateNear(3))this.plan={kind:"spin",t:0,side:n,base:this.aimA,dur:W(.7,1.1),rec:.35};else{let i=W(1.1,1.5),r=rt(2.3,4.2,e)*(this.heavy?.55:this.boss?.7:1)*(this.counterT>0?1.6:1);this.plan={kind:"flick",t:0,side:n,base:this.aimA,th:i,th2:Math.min(2.9-i,W(1.2,1.5)),wind:i/r,slash:this.heavy?.45:.28,rec:.3,run:t,fired:!1}}this.counterT=0,this.state="attack"}runPlan(t,e,n){let i=this.plan,r=this.stickW;if(!i){this.state="fight";return}i.t+=t,i.base=di(i.base,e,n*t);let a=(l,c)=>{this.aimA=sn(l);let h=l+this.aimNoise();r.x=Math.sin(h),r.z=Math.cos(h),r.mag=c};if(i.kind==="spin"){i.t<i.dur?a(i.base+i.side*10*i.t,.3):i.t<i.dur+i.rec?a(di(this.aimA,e,5*t),.25):this.endPlan();return}let o=i.run?.7:.3;i.t<i.wind?a(i.base+i.side*i.th*(i.t/i.wind),o):i.t<i.wind+i.slash?a(i.base-i.side*i.th2,o):i.t<i.wind+i.slash+i.rec?a(di(this.aimA,e,4*t),.25):this.endPlan()}endPlan(){this.plan=null,this.state="fight",this.cool=W(.5,1.2)*rt(1.3,.5,this.skill)*(this.boss?1.5:1)}thinkTitan(t){let e=this.game,n=this.pickTarget(t)||e.player,i=n.x-this.x,r=n.z-this.z,a=Math.hypot(i,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(i,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=.5*this.S;switch((!n.alive||!e.player.alive)&&(this.state="cheer"),this.state){case"approach":{let l=this.legMask,c=this.speed*(l===3?1:l?.6:.4);a>o+.2?(this.want.x=i/a*c,this.want.z=r/a*c):this.state="fight";break}case"fight":{this.want.x=i/a*pt((a-o)*3,-2,this.speed),this.want.z=r/a*pt((a-o)*3,-2,this.speed);let l=n.y>3;if(this.hasSword&&this.cool<=0&&a<o+1+this.skill*.8+(l?4:0)&&(n!==e.player||e.takeAttackToken(this))){let[c,h]=is(l?uv:hv);this.startSwing(c,h,!1),this.swing.high=l,l&&(this.swing.wind*=.4),this.state="attack"}break}case"attack":this.swing||(this.state="fight",this.cool=W(.5,1.3)*rt(1.3,.55,this.skill)*(n===e.player?1:2.2));break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=W(.2,.6));break;default:break}}move(t){var S;let e=this.game.world,n=this.y>this.gy+.02||this.vy>.01;if((this.isPlayer||this.flyer)&&!this.falling&&(this.rope||n)){this.moveAir(t),this.turn(t);return}let i=this.want.x,r=this.want.z;if((this.stun>0||this.hurtT>0)&&(i*=.2,r*=.2),this.kb>0||this.falling){let M=Math.exp(-5*t);this.vx*=M,this.vz*=M}else if(this.aimCtl&&!n)this.drive(i,r,t);else{let M=(n?3:14)*t,R=i-this.vx,_=r-this.vz,E=Math.hypot(R,_);E>M?(this.vx+=R/E*M,this.vz+=_/E*M):(this.vx=i,this.vz=r)}let a=e.gx,o=e.gz,l=Math.hypot(a,o),c=(S=e.slideMin)!=null?S:cv;if(!n&&!this.falling&&l>c){let M=$e*.85*(l-c)/l*(e.slideGain||1)*t;this.slideX-=a*M,this.slideZ-=o*M}let h=Math.exp(-1.2*t);this.slideX*=h,this.slideZ*=h;let f=this.vx+this.slideX,d=this.vz+this.slideZ;if(this.falling)this.x+=f*t,this.z+=d*t;else{let M=this.x+f*t,R=this.z+d*t,_=.35*this.S;e.solidAt(M,R,this.y)&&(e.solidAt(M,this.z,this.y)?e.solidAt(this.x,R,this.y)?(M=this.x,R=this.z,this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0):(M=this.x,this.vx=0,this.slideX=0):(R=this.z,this.vz=0,this.slideZ=0)),e.inside(M,R,_)||(this.kb>0||n)&&e.canFall&&!e.wallH?(this.x=M,this.z=R):this.overWall(e,f,d)?(this.x=M,this.z=R):e.clampInside(M,R,_,this)||(e.inside(M,this.z,_)?(this.x=M,this.vz=0,this.slideZ=0):e.inside(this.x,R,_)?(this.z=R,this.vx=0,this.slideX=0):(this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0));let E=e.ground(this.x,this.z);E===-1/0?this.falling=!0:this.falling||(this.gy=E)}!this.falling&&e.grid&&this.y<=this.gy+.12&&e.tileMotion(this.x,this.z,Wl).vy>2.5&&this.launch(Wl),!this.falling&&this.vy<=0&&this.y<=this.gy+.12?(this.y=this.gy,this.vy=0):(this.vy-=$e*t,this.y+=this.vy*t,!this.falling&&this.y<=this.gy&&(this.y=this.gy,this.vy=0)),this.falling&&this.y<this.gy-e.fallDepth&&this.game.onFell(this);let u=Math.sin(this.yaw),p=Math.cos(this.yaw),x=-f*p+d*u,g=n||this.falling?0:pt((Math.abs(x)-.7)/2,0,1);this.slip+=(g-this.slip)*un(10,t),Math.abs(x)>.3&&(this.slipDir=Math.sign(x));let m=Math.hypot(f,d),v=Math.max(this.speed,1),w=0;if(!n&&!this.falling&&m>.45*v){let M=(this.want.x*f+this.want.z*d)/m;w=pt((m-.45*v)/(.35*v),0,1)*pt(1-M/m,0,1)}this.brakeK+=(w-this.brakeK)*un(w>this.brakeK?12:5,t);let y=!n&&!this.falling&&this.lowPref&&Math.hypot(this.want.x,this.want.z)<.5&&m<2.5?1:0;y=Math.max(y,this.brakeK),this.low+=(y-this.low)*un(y>this.low?7:5,t),this.turn(t)}drive(t,e,n){let i=Math.hypot(this.vx,this.vz);if(i<.3){let v=Zh*n,w=t-this.vx,y=e-this.vz,S=Math.hypot(w,y);S>v?(this.vx+=w/S*v,this.vz+=y/S*v):(this.vx=t,this.vz=e);return}let r=Math.max(this.speed,1),a=Math.sqrt(pt((i-.15*r)/(.55*r),0,1)),o=this.legMask===3?1:.7,l=pt(i/r,0,1),c=(this.isPlayer?rt(3.8,6.5,l):rt(3.2,5.5,l))*o,h=rt(Zh,ov,a)*o,f=rt(Zh,lv,a)*o,d=this.vx/i,u=this.vz/i,p=t*d+e*u,x=-t*u+e*d,g=pt(p-i,-f*n,c*n),m=pt(x,-h*n,h*n);this.vx+=d*g-u*m,this.vz+=u*g+d*m}overWall(t,e,n){if(!t.wallH)return!1;let[i,r]=t.wallNormal(this.x,this.z),a=this.isPlayer&&this.kb<=0,o=a?this.slideX:e,l=a?this.slideZ:n;return i*o+r*l<t.overSpeed?!1:(this.falling=!0,this.vx=e,this.vz=n,this.slideX=0,this.slideZ=0,this.vy=3,this.kb=1,!0)}turn(t){let e=this.isPlayer?8:this.titan?1.2:this.heavy?2.5:7;this.yaw=di(this.yaw,this.faceYaw,e*t);let n=this.vx+this.slideX,i=this.vz+this.slideZ,r=Math.hypot(n,i),a=n*this.forwardX+i*this.forwardZ<-.3*r?-1:1,o=this.legMask,l=zf*rt(.6,1.1,pt(r/Math.max(this.speed,1),0,1));this.phase+=(a*r+this.slip*5)*t/((o===3?l:zf*.6)*this.gait*this.S)*Math.PI*2}skidFx(t){let e=Math.max(this.slip,this.brakeK);if(e>.4&&this.y<=this.gy+.05&&Math.random()<t*45*e){let n=this.rag.pts[Math.random()<.5?O.LFOOT:O.RFOOT];n.attached&&this.game.fx.dust(n.x,n.y,n.z,-this.vx*.2,-this.vz*.2)}if(e>.55&&!this.skidding){this.skidding=!0;let n=this.game.player;(this.isPlayer||Math.hypot(n.x-this.x,n.z-this.z)<7)&&kt.skid()}else e<.3&&(this.skidding=!1)}animate(t){let e=this.tpose,n=Math.hypot(this.vx+this.slideX,this.vz+this.slideZ),i=this.legMask,r=null;if(this.mount)rn.ride(e,this.mount.phase),r=.02;else if(this.y>this.gy+.05||this.falling)rn.air(e,this.t);else if(i===3){let g=pt(n/1.1,0,1),m=pt(n/Math.max(this.speed,1),0,1),v=m*m*(3-2*m),w=g*rt(.45,1,v);this.runK=w,zi(Bf,rn.guard(Mv,this.t),rn.crouch(Jh,this.t+this.gaitOff),this.low),zi(Kh,rn.walk(Kh,this.phase),rn.run($h,this.phase),v),zi(e,Bf,Kh,g);let y=this.gaitOff;e.side+=Math.sin(this.phase*.5+y)*.16*w+Math.sin(this.t*1.1+y)*.05*(1-w),e.hunch+=Math.sin(this.phase*2+.6)*.12*w,e.headP+=Math.sin(this.phase*2)*.09*w,this.slip>.02&&zi(e,e,rn.skid($h,this.phase,this.slipDir),this.slip*.85),this.brakeK>.03&&zi(e,e,rn.kneel($h),this.brakeK*.9*(1-this.slip*.6))}else if(i)rn.hop(e,this.phase,n>.5),e.side=i===1?.1:-.1,this.runK=0;else{rn.stumps(e,this.phase,n>.5);let g=this.rag.pts;r=g[O.LKNEE].attached&&g[O.RKNEE].attached?this.d.th*.85+.08*this.S:.3*this.S}let a=this.swingMode(),o=this.swing,l=0,c=0;if(this.aimCtl){let g=sn(this.yaw-this.swYaw);e.twist=pt(g*.75,-1.1,1.1)+Math.sin(this.phase)*.2*this.runK;let m=this.lowSwing;e.hunch+=.3*m,e.lB+=.35*m,e.rB+=.35*m,e.lP+=.2*m,e.rP+=.1*m;let v=pt(Math.abs(this.swW)/15,0,1);e.hunch+=v*.3,e.side+=pt(-this.swW/15,-1,1)*.25}else if(a){let g=m=>o.ux*Math.sin(m)*.55;if(a===1){let m=pa(o.t/o.wind);l=g(o.a0)*m,c=m*.5}else if(a===2){let m=fa((o.t-o.wind)/o.dur);l=g(rt(o.a0,o.a1,m)),c=1}else{let m=pa((o.t-o.wind-o.dur)/o.rec);l=g(o.a1)*(1-m),c=1-m}this.titan&&!o.high?(zi(e,e,rn.crouch(Jh,this.t),c),e.lean+=.2*c,e.hunch+=.25*c):zi(e,e,rn.lunge(Jh),c*(n>1.5?.4:1)),e.twist=l,o.uy<-.5&&a===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.2,e.hunch=-.15,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.hunch=-.1,e.headP=-.4),Tf(this.pose,e,un(a===2||this.aimCtl?24:12,t)),Xh(this.pose,this.d,this.local,this.footR,i,r),this.aimCtl&&this.jiggle(),this.computeSword(t),this.applyArms(),this.localToWorld();let h=this.rag,f=this.world,d=O.PELVIS*3,u=this.pelvisPrev;t>0&&u.ok?h.setVel((f[d]-u.x)/t,(f[d+1]-u.y)/t,(f[d+2]-u.z)/t):h.setVel(this.vx,this.vy,this.vz),u.x=f[d],u.y=f[d+1],u.z=f[d+2],u.ok=!0,h.tgt.set(f);let p=this.hasSword,x=this.titan;h.pts[O.LHAND].pin=p&&(!x||!this.gripR),h.pts[O.RHAND].pin=p&&(!x||this.gripR)}jiggle(){let t=this.local,e=this.t,n=this.gaitOff,i=(.03+.03*this.runK)*this.S;for(let[r,a,o]of vv){let l=r*3,c=n+r*1.7;t[l]+=Math.sin(e*o*2.1+c)*i*a,t[l+1]+=Math.sin(e*o*1.3+c*1.3)*i*a*.5,t[l+2]+=Math.sin(e*o*1.7+c*.7)*i*a}}computeSword(t=0){let e=this.local,n=this.S,i=e[O.NECK*3],r=e[O.NECK*3+1],a=e[O.NECK*3+2],o=e[O.PELVIS*3],l=e[O.PELVIS*3+1],c=e[O.PELVIS*3+2],h=rt(i,o,.28),f=rt(r,l,.28),d=rt(a,c,.28)+.1*n,u=[.38,.78,.5],p=Math.hypot(u[0],u[1],u[2]);u[0]/=p,u[1]/=p,u[2]/=p;let x=[h+.14*n,f-.16*n,d+.26*n],g=this.swing,m=this.swingMode(),v=.3*n;m&&(m===1&&this.aimTitan(),v=this.titanBasis(g));let w=(T,I,D,z)=>{let Z=Math.sin(T),V=Math.cos(T);for(let K=0;K<3;K++)I[K]=_a[K]*V+zn[K]*Z,D[K]=zn[K]*V-_a[K]*Z,z[K]=as[K]+I[K]*v},y=this.ld,S=this.lw,M=this.lg,R=this.aimCtl&&this.hasSword;if(this.aimCtl&&!this.hasSword&&(this.episode=null),R&&!(this.blockT>0&&!this.isPlayer)){let T=sn(this.yaw-this.swYaw),I=this.flying?1:pt(Math.abs(this.swW)/6,0,1),D=this.mount?0:this.low,z=this.runK,Z=rt(rt(.42,.46,z),.42,D),V=Math.abs(this.swW);V>2.5&&!this.swinging?(this.swinging=!0,this.swingBias=is(_v)):V<1&&(this.swinging=!1);let K=pt((.8-this.stickW.mag)/.5,0,1),$=(this.mount?-.35:rt(-.1,-.46,Math.max(D,K*.8)))+this.swingBias+.12*Math.sign(this.swW),mt=Math.max(-.8,rt(Z,$,I)+this.pitchAdj);this.lowSwing=I*pt((-.1-$)/.45,0,1);let ct=Math.sin(T),Ht=Math.cos(T),Ft=Math.cos(mt),Qt=T+(this.hasSword2?pv:0),j=Math.sin(Qt),nt=Math.cos(Qt);y[0]=j*Ft,y[1]=Math.sin(mt),y[2]=nt*Ft,S[0]=nt,S[1]=0,S[2]=-j;let yt=(.3+I*(.12+.18*D))*n,Wt=Math.sin(this.phase*2)*.045*n*z;M[0]=h+ct*yt+.07*n*z*(1-I),M[1]=f-rt(.12,.3,D)*n+Wt-.18*n*this.lowSwing,M[2]=d-.1*n+Ht*yt}else if(this.blockT>0&&!m){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(y[0]=1,y[1]=.15,y[2]=.2,M[0]=h-.3*n,M[1]=f+.38*n,M[2]=d+.22*n):(y[0]=.1,y[1]=1,y[2]=.15,M[0]=h+this.blockUx*.3*n,M[1]=f-.05*n,M[2]=d+.3*n);let T=Math.hypot(y[0],y[1],y[2]);y[0]/=T,y[1]/=T,y[2]/=T,S[0]=0,S[1]=0,S[2]=1}else if(!m||!this.hasSword)y[0]=u[0],y[1]=u[1],y[2]=u[2],S[0]=1,S[1]=0,S[2]=0,M[0]=x[0],M[1]=x[1],M[2]=x[2];else if(m===2){let T=fa((g.t-g.wind)/g.dur);w(rt(g.a0,g.a1,T),y,S,M),M[2]+=.08*n*T}else{let T=[0,0,0],I=[0,0,0],D=[0,0,0],z;m===1?(w(g.a0,T,I,D),z=1-pa(g.t/g.wind)):(w(g.a1,T,I,D),z=pa((g.t-g.wind-g.dur)/g.rec));for(let V=0;V<3;V++)y[V]=rt(T[V],u[V],z),S[V]=rt(I[V],V===0?1:0,z),M[V]=rt(D[V],x[V],z);let Z=Math.hypot(y[0],y[1],y[2])||1;y[0]/=Z,y[1]/=Z,y[2]/=Z}this.hasSword2&&(M[0]+=mv*n);let _=Math.sin(this.yaw),E=Math.cos(this.yaw),C=this.sw;C.gx=this.x-E*M[0]+_*M[2],C.gy=this.y+M[1],C.gz=this.z+_*M[0]+E*M[2],C.dx=-E*y[0]+_*y[2],C.dy=y[1],C.dz=_*y[0]+E*y[2],C.wx=-E*S[0]+_*S[2],C.wy=S[1],C.wz=_*S[0]+E*S[2],R&&this.simBlade(t);let N=vn*n,U=(vn+this.bladeLen)*n,H=this.bCur;H.bx=C.gx+C.dx*N,H.by=C.gy+C.dy*N,H.bz=C.gz+C.dz*N,H.tx=C.gx+C.dx*U,H.ty=C.gy+C.dy*U,H.tz=C.gz+C.dz*U,this.hasSword2&&this.hasSword&&this.computeSword2(h,N,U)}computeSword2(t,e,n){let i=this.lg,r=this.ld,a=this.lg2,o=this.ld2;a[0]=2*t-i[0],a[1]=i[1],a[2]=i[2],o[0]=-r[0],o[1]=r[1],o[2]=r[2];let l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=this.sw2;h.gx=this.x-c*a[0]+l*a[2],h.gy=this.y+a[1],h.gz=this.z+l*a[0]+c*a[2],h.dx=-c*o[0]+l*o[2],h.dy=o[1],h.dz=l*o[0]+c*o[2];let f=h.dz,d=-h.dx,u=Math.hypot(f,d);u<.2?(f=-c,d=l):(f/=u,d/=u),h.wx=f,h.wy=0,h.wz=d;let p=this.b2Cur;p.bx=h.gx+h.dx*e,p.by=h.gy+h.dy*e,p.bz=h.gz+h.dz*e,p.tx=h.gx+h.dx*n,p.ty=h.gy+h.dy*n,p.tz=h.gz+h.dz*n}copyBlade(){let t=this.bCur,e=this.bPrev;if(e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz,!this.hasSword2)return;let n=this.b2Cur,i=this.b2Prev;i.bx=n.bx,i.by=n.by,i.bz=n.bz,i.tx=n.tx,i.ty=n.ty,i.tz=n.tz}simBlade(t){let e=this.sw,n=this.tip,i=(vn+this.bladeLen)*this.S,r=e.gx,a=e.gy,o=e.gz;if(!n.init||t<=0){n.x=r+e.dx*i,n.y=a+e.dy*i,n.z=o+e.dz*i,n.vx=n.vy=n.vz=0,n.gvx=n.gvy=n.gvz=0,n.gx=r,n.gy=a,n.gz=o,n.dx=e.dx,n.dy=e.dy,n.dz=e.dz,n.w=0,n.init=!0;return}let l=(r-n.gx)/t,c=(a-n.gy)/t,h=(o-n.gz)/t;n.gx=r,n.gy=a,n.gz=o,n.gvx=l,n.gvy=c,n.gvz=h;let f=this.flying||this.blockT>0?1:pt(Math.abs(this.swW)/4,0,1),d=rt(this.mount?this.bladeKRest*2:this.bladeKRest,this.bladeKSwing,f),u=2*rt(.35,.6,f)*Math.sqrt(d),p=r+e.dx*i,x=a+e.dy*i,g=o+e.dz*i;n.vx+=((p-n.x)*d-(n.vx-l)*u)*t,n.vy+=((x-n.y)*d-(n.vy-c)*u-$e*.8)*t,n.vz+=((g-n.z)*d-(n.vz-h)*u)*t,n.x+=n.vx*t,n.y+=n.vy*t,n.z+=n.vz*t;let m=n.x-r,v=n.y-a,w=n.z-o,y=Math.hypot(m,v,w)||1e-6;m/=y,v/=y,w/=y;let M=this.game.world.ground(r+m*i,o+w*i);if(M>-1/0&&a+v*i<M+.03){let ct=pt((M+.03-a)/i,-1,1),Ht=Math.hypot(m,w),Ft=Math.sqrt(Math.max(0,1-ct*ct));if(Ht>1e-4?(m=m/Ht*Ft,w=w/Ht*Ft):(m=Math.sin(this.swYaw)*Ft,w=Math.cos(this.swYaw)*Ft),v=ct,n.vy<c&&(n.vy=c),Math.hypot(n.vx-l,n.vz-h)>3){Math.random()<.5&&this.game.fx.sparks(r+m*i,M+.03,o+w*i,2);let j=this.game.player;(this.isPlayer||Math.hypot(j.x-this.x,j.z-this.z)<6)&&kt.scrape()}}n.x=r+m*i,n.y=a+v*i,n.z=o+w*i;let R=n.vx-l,_=n.vy-c,E=n.vz-h,C=R*m+_*v+E*w;n.vx-=m*C,n.vy-=v*C,n.vz-=w*C;let N=m-n.dx,U=v-n.dy,H=w-n.dz,T=Math.hypot(N,U,H),I=n.dz*m-n.dx*w;n.dx=m,n.dy=v,n.dz=w,n.w=T/t,e.dx=m,e.dy=v,e.dz=w;let D=w,z=-m,Z=Math.hypot(D,z);Z<.2?(D=-Math.cos(this.yaw),z=Math.sin(this.yaw)):(D/=Z,z/=Z),e.wx=D,e.wy=0,e.wz=z;let V=Math.sin(this.yaw),K=Math.cos(this.yaw);this.ld[0]=-K*m+V*w,this.ld[1]=v,this.ld[2]=V*m+K*w;let mt=(this.isPlayer?Math.abs(this.swW)>2:this.state==="attack")||this.flying?sv:this.isPlayer?7.5:10;this.updateEpisode(n.w,mt,T>1e-6&&Math.abs(I)>.3*T?Math.sign(I):0)}updateEpisode(t,e,n){let i=this.episode;if((t>e||this.flying)&&this.hasSword){let r=t>e?n||(i&&i.dir!==2?i.dir:3):2;i&&i.dir===3&&(r===1||r===-1)&&(i.dir=r,i.ux=-r,i.uy=0,r=i.dir),(!i||i.dir!==r)&&(this.episode={hits:new Set,hits2:new Set,rolled:new Set,kills:0,dir:r,ux:r===3?0:r===2?1:-r,uy:r===3?-1:0},this.game.onSwingStart(this),r!==2&&t>6&&(this.isPlayer?kt.swoosh(1):kt.enemySwing()))}else t<rv&&(this.episode=null)}bounceBlade(){let t=this.tip;t.init&&(t.vx=t.gvx-(t.vx-t.gvx)*.45,t.vy=t.gvy-(t.vy-t.gvy)*.45,t.vz=t.gvz-(t.vz-t.gvz)*.45)}titanBasis(t){let e=this.local,n=this.S,i=(this.gripR?O.RSH:O.LSH)*3;as[0]=e[i],as[1]=e[i+1],as[2]=e[i+2];let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=t.tx-this.x,l=t.tz-this.z,c=-a*o+r*l-as[0],h=t.ty-this.y-as[1],f=r*o+a*l-as[2],d=Math.hypot(c,h,f)||1;if(c/=d,h/=d,f/=d,f<-.3){let M=Math.sqrt(.91)/(Math.hypot(c,h)||1);c*=M,h*=M,f=-.3}_a[0]=c,_a[1]=h,_a[2]=f;let u=f,p=-c,x=Math.hypot(u,p);x<.2&&(u=1,p=0,x=1),u/=x,p/=x;let g=h*p,m=f*u-c*p,v=-h*u;zn[0]=t.ux*u+t.uy*g,zn[1]=t.uy*m,zn[2]=t.ux*p+t.uy*v;let w=Math.hypot(zn[0],zn[1],zn[2])||1;zn[0]/=w,zn[1]/=w,zn[2]/=w;let y=vn*n,S=(vn+this.bladeLen)*n;return pt(d-rt(y,S,.6),.2*n,.5*n)}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,i=this.titan?this.gripR?dv:fv:this.hasSword2?xv:gv;for(let[r,a,o,l,c,h]of i){let f=h?this.lg2:this.lg,d=h?this.ld2:this.ld,u=l*e,p=f[0]+d[0]*u,x=f[1]+d[1]*u,g=f[2]+d[2]*u;Af(t[r*3],t[r*3+1],t[r*3+2],p,x,g,n.ua,n.fa,c,-1,-.3,Xl),t[a*3]=Xl[0],t[a*3+1]=Xl[1],t[a*3+2]=Xl[2],t[o*3]=p,t[o*3+1]=x,t[o*3+2]=g}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;this.hasSword2&&(!t[O.LHAND].attached||!t[O.RHAND].attached)&&this.game.dropSword2(this,!t[O.RHAND].attached),!t[O.LHAND].attached&&!t[O.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.plan=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function Sv(){let s=document.createElement("canvas");s.width=s.height=32;let t=s.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new bi(s)}function bv(){let s=document.createElement("canvas");s.width=s.height=64;let t=s.getContext("2d"),e=t.createLinearGradient(0,8,0,60);e.addColorStop(0,"#ffffff"),e.addColorStop(.5,"#f1efec"),e.addColorStop(1,"#a9a4a0"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=t.createRadialGradient(32,32,0,32,32,31);return n.addColorStop(0,"rgba(0,0,0,1)"),n.addColorStop(.6,"rgba(0,0,0,1)"),n.addColorStop(.85,"rgba(0,0,0,0.55)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.globalCompositeOperation="destination-in",t.fillStyle=n,t.fillRect(0,0,64,64),new bi(s)}var jh=class{constructor(t,e){let n=bv();this.free=[],this.live=[];for(let i=0;i<e;i++){let r=new li(new Yn({map:n,transparent:!0,depthWrite:!1,opacity:0}));r.visible=!1,r.renderOrder=2,t.add(r),this.free.push({m:r,x:0,y:0,z:0,vx:0,vy:0,vz:0,s:1,a:1,age:0,life:1})}}add(t,e,n,i,r,a,o,l,c){let h=this.free.pop()||this.live.shift();h&&(Object.assign(h,{x:t,y:e,z:n,vx:i,vy:r,vz:a,s:o,life:l,a:c,age:0}),h.m.visible=!0,this.live.push(h))}update(t){let e=this.live,n=Math.exp(-2.4*t),i=0;for(let r=0;r<e.length;r++){let a=e[r];if(a.age+=t,a.age>=a.life){a.m.visible=!1,this.free.push(a);continue}a.vx*=n,a.vz*=n,a.vy=a.vy*n+2.2*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t,e[i++]=a}e.length=i}flush(){for(let t of this.live){let e=t.age/t.life;t.m.position.set(t.x,t.y,t.z),t.m.scale.setScalar(t.s*(1+1.5*Math.sqrt(e))),t.m.material.opacity=t.a*Math.min(1,t.age/.08)*(1-e*e)}}clear(){for(let t of this.live)t.m.visible=!1,this.free.push(t);this.live.length=0}},os=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new ye,this.attr=new Ee(this.pos,3),this.attr.setUsage(js),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new Yi(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max?this.list[Math.random()*this.max|0]=t:this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},Zl=class{constructor(t){let e=Sv();this.blood=new os(t,2600,new xn({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.bigBlood=new os(t,1800,new xn({color:11730970,size:.24,map:e,alphaTest:.5,sizeAttenuation:!0})),this.quiet=!1,this.spark=new os(t,400,new xn({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new os(t,600,new xn({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.steamPool=new jh(t,56),this.dustPool=new os(t,500,new xn({color:15327956,size:.11,map:e,alphaTest:.5,sizeAttenuation:!0,transparent:!0,opacity:.75})),this.maxDecals=1100;let n=new Zi(1,12).rotateX(-Math.PI/2),i=new Zn({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new Kn(n,i,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new se,this._q=new je,this._s=new L,this._p=new L,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.bigBlood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.dustPool.list.length=0,this.steamPool.clear(),this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,i,r,a,o,l,c,h=!1){let f=Math.hypot(i,r,a)||1,d=i/f,u=r/f,p=a/f,x=h?this.bigBlood:this.blood;for(let g=0;g<o;g++){let m=c*W(.25,1.15);x.add({x:t,y:e,z:n,vx:(d+W(-l,l))*m,vy:(u+W(-l,l))*m+W(0,1),vz:(p+W(-l,l))*m,life:W(1,2)})}}sparks(t,e,n,i){for(let r=0;r<i;r++)this.spark.add({x:t,y:e,z:n,vx:W(-5,5),vy:W(-2,5),vz:W(-5,5),life:W(.15,.35)})}dust(t,e,n,i,r){for(let a=0;a<2;a++)this.dustPool.add({x:t+W(-.08,.08),y:e+.03,z:n+W(-.08,.08),vx:i+W(-.5,.5),vy:W(.3,1.1),vz:r+W(-.5,.5),life:W(.3,.6)})}steam(t,e,n,i,r,a,o,l,c=.85){this.steamPool.add(t,e,n,i,r,a,o,l,c)}setDecalParent(t){this.decals.parent!==t&&t.add(this.decals)}splash(t,e,n){for(let i=0;i<40;i++)this.water.add({x:t+W(-.3,.3),y:e,z:n+W(-.3,.3),vx:W(-1.5,1.5),vy:W(2,6),vz:W(-1.5,1.5),life:W(.5,1)})}bleed(t,e,n,i={}){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0,big:!!i.big,rate:i.rate||120,spd:i.spd||1})}wound(t,e,n,i,r={}){let a=0;for(let l of this.bleeders)l.rag===t&&l.bone!==void 0&&a++;if(a>=(r.max||10))return;let o=[W(-1,1),W(-.2,1),W(-1,1)];this.bleeders.push({rag:t,bone:e,u:n,d:o,t:0,dur:i,acc:0,big:r.big!==!1,rate:r.rate||50,spd:r.spd||1})}popup(t,e,n,i,r,a,o,l=!1){if(this.quiet&&!l)return;let c=0;for(let h of this.popups)h.age<.4&&Math.hypot(h.x-t,h.z-n)<1.2&&c++;this.popups.push({x:t,y:e+c*.42,z:n,text:i,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,i){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),W(0,Math.PI));let a=i*W(.8,1.4);r.compose(this._p,this._q,new L(a,1,i)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let n of this.bleeders){n.t+=t;let i=n.rag;if(i.removed){n.t=n.dur;continue}let r,a,o,l,c,h,f,d,u;if(n.bone!==void 0){let v=i.bones[n.bone];if(!v){n.t=n.dur;continue}let w=i.pts[v.a],y=i.pts[v.b];r=w.x+(y.x-w.x)*n.u,a=w.y+(y.y-w.y)*n.u,o=w.z+(y.z-w.z)*n.u;let S=y.x-w.x,M=y.y-w.y,R=y.z-w.z,_=Math.hypot(S,M,R)||1;S/=_,M/=_,R/=_;let E=n.d[0]*S+n.d[1]*M+n.d[2]*R;l=n.d[0]-S*E,c=n.d[1]-M*E,h=n.d[2]-R*E;let C=v.r/i.hitK*.9,N=Math.hypot(l,c,h)||1;l/=N,c/=N,h/=N,r+=l*C,a+=c*C,o+=h*C,f=(w.x-w.px+(y.x-y.px))*.5/t,d=(w.y-w.py+(y.y-y.py))*.5/t,u=(w.z-w.pz+(y.z-y.pz))*.5/t}else{let v=i.pts[n.idx],w=i.neighborOf(n.idx);if(w<0)continue;let y=i.pts[w];l=v.x-y.x,c=v.y-y.y,h=v.z-y.z;let S=Math.hypot(l,c,h)||1;l/=S,c/=S,h/=S,r=v.x,a=v.y,o=v.z,f=(v.x-v.px)/t,d=(v.y-v.py)/t,u=(v.z-v.pz)/t}let p=n.t/n.dur,x=n.big?1-p*p*p:1-p,g=n.big?.72+.28*Math.sin(n.t*9):.55+.45*Math.sin(n.t*16);n.acc+=t*n.rate*x*g;let m=n.big?this.bigBlood:this.blood;for(;n.acc>=1;){n.acc-=1;let v=W(1.5,3.8)*(.4+x)*n.spd,w=n.big?1.5:.6;m.add({x:r,y:a,z:o,vx:l*v+W(-w,w)+f*.5,vy:c*v+W(-w,w)+d*.5,vz:h*v+W(-w,w)+u*.5,life:W(.8,1.5)*(n.big?1.8:1)})}}this.bleeders=this.bleeders.filter(n=>n.t<n.dur);for(let n of[this.blood,this.bigBlood]){let i=n.list,r=n===this.bigBlood,a=0;for(let o=0;o<i.length;o++){let l=i[o];l.life-=t,l.vy-=$e*.8*t,l.x+=l.vx*t,l.y+=l.vy*t,l.z+=l.vz*t;let c=e.ground(l.x,l.z);if(l.y<=c+.01){Math.random()<(r?.35:.55)&&this.addDecal(l.x,e.decalLocal?0:c,l.z,r?W(.12,.34):W(.025,.07));continue}l.y<e.waterY||l.life>0&&(i[a++]=l)}i.length=a}for(let n of[this.spark,this.water,this.dustPool]){let i=n.list,r=0;for(let a=0;a<i.length;a++){let o=i[a];if(o.life-=t,n===this.spark)o.vx*=.92,o.vz*=.92,o.vy-=6*t;else if(n===this.dustPool){let l=Math.exp(-3*t);o.vx*=l,o.vz*=l,o.vy*=l}else o.vy-=$e*.6*t;o.x+=o.vx*t,o.y+=o.vy*t,o.z+=o.vz*t,o.life>0&&(i[r++]=o)}i.length=r}this.steamPool.update(t);for(let n of this.popups)n.age+=t,n.y+=.5*t;this.popups=this.popups.filter(n=>n.age<n.life)}flush(){this.blood.flush(),this.bigBlood.flush(),this.spark.flush(),this.water.flush(),this.dustPool.flush(),this.steamPool.flush()}};function Gf(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<s.length;++h){let f=s[h],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Vf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][d]);let p=Vf(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Vf(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ee(a,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function fn(s,t,e,n){let i=document.createElement("canvas");i.width=s,i.height=t,e(i.getContext("2d"),s,t);let r=new bi(i);return r.colorSpace=Be,n&&(r.wrapS=r.wrapT=gn,r.repeat.set(n,n)),r.anisotropy=8,r}function wv(s,t,e){let i=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*i,(o+.15+Math.random()*.7)*i,Math.random()]);let a=s.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/i),h=Math.floor(o/i),f=1e9,d=1e9,u=0;for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){let w=(c+v+7)%7,y=(h+m+7)%7,S=r[y*7+w],M=S[0]+(c+v-w)*i,R=S[1]+(h+m-y)*i,_=Math.hypot(M-l,R-o);_<f?(d=f,f=_,u=S[2]):_<d&&(d=_)}let p=pt((d-f)/5,0,1),x=(o*t+l)*4,g=222+u*18-f/i*18;a.data[x]=Qh(120,g-14,p),a.data[x+1]=Qh(160,g+6,p),a.data[x+2]=Qh(200,g+20,p),a.data[x+3]=255}s.putImageData(a,0,0)}function Qh(s,t,e){return s+(t-s)*e}function Ev(s,t,e){s.fillStyle="#4c9427",s.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];s.lineCap="round";for(let i=0;i<4200;i++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;s.strokeStyle=n[i%n.length],s.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])s.beginPath(),s.moveTo(r+c,a+h),s.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),s.stroke()}}function Tv(s,t,e){s.fillStyle="#d9a66e",s.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)s.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",s.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);s.strokeStyle="rgba(170,120,70,0.25)",s.lineWidth=2;for(let n=8;n<e;n+=22){s.beginPath();for(let i=0;i<=t;i+=8)s.lineTo(i,n+Math.sin(i/t*Math.PI*4+n)*4);s.stroke()}}function Av(s,t,e){s.clearRect(0,0,t,e);let n=t/2;s.strokeStyle="#6f9a2b",s.lineWidth=3,s.beginPath(),s.moveTo(n,e),s.quadraticCurveTo(n+4,e*.5,n,6),s.stroke();for(let i=0;i<26;i++){let r=i/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;s.fillStyle=l;for(let c of[-1,1])s.save(),s.translate(n,a),s.rotate(c*(1.05-r*.25)),s.beginPath(),s.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),s.fill(),s.restore()}}function Rv(s,t,e){s.clearRect(0,0,t,e),s.lineCap="round";for(let n=0;n<18;n++){let i=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;s.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],s.lineWidth=2+Math.random()*2,s.beginPath(),s.moveTo(i,e),s.quadraticCurveTo(i,e*.6,i+a,r),s.stroke()}}function Wf(s,t,e){s.clearRect(0,0,t,e);for(let n=0;n<14;n++){let i=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=s.createRadialGradient(i,r,0,i,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.beginPath(),s.arc(i,r,a,0,Math.PI*2),s.fill()}}function Xf(s,t,e,n){let i=new hi(s,t,11,6);i.index&&(i=i.toNonIndexed());let r=i.attributes.position,a=new L;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);let d=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,u=1-(a.y+t/2)/t;a.x+=(Nn(d)-.5)*s*.35*u,a.z+=(Nn(d+1)-.5)*s*.35*u,a.y+=(Nn(d+2)-.5)*t*.12*u,r.setXYZ(f,a.x,a.y,a.z)}i.computeVertexNormals();let o=new Float32Array(r.count*3),l=i.attributes.normal,c=new Bt;for(let f=0;f<r.count;f+=3){let u=((r.getY(f)+r.getY(f+1)+r.getY(f+2))/3+t/2)/t,p=l.getY(f);u>.82?c.set(n.snow):p>.55&&u<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(Nn(f*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(f+x)*3]=c.r,o[(f+x)*3+1]=c.g,o[(f+x)*3+2]=c.b}i.setAttribute("color",new Ee(o,3));let h=new xt(i,new Gt({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function qf(s,t,e){let n=new Gs(s,0);n.index&&(n=n.toNonIndexed());let i=n.attributes.position;for(let a=0;a<i.count;a++){let o=Math.round(i.getX(a)*50)+Math.round(i.getY(a)*30)*3+Math.round(i.getZ(a)*70)*7+t;i.setXYZ(a,i.getX(a)*(1+(Nn(o)-.5)*.3),i.getY(a)*.7,i.getZ(a)*(1+(Nn(o+3)-.5)*.3))}n.computeVertexNormals();let r=new xt(n,new Gt({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function Yf(s,t,e,n){let i=[];for(let o=0;o<s;o++){let l=new tn(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/s*Math.PI*2+Math.random()*.5),i.push(l)}let r=Gf(i),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function Zf(s,t,e,n,i,r,a,o){let l=new Kn(s,t,e),c=new se,h=new je,f=new L,d=new L,u=new L(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let g=Math.random()*Math.PI*2,m=n+Math.sqrt(Math.random())*(i-n),v=Math.cos(g)*m,w=Math.sin(g)*m;if(o&&o(v,w))continue;let y=r+Math.random()*(a-r);d.set(v,0,w),h.setFromAxisAngle(u,Math.random()*Math.PI*2),f.set(y,y*(.8+Math.random()*.4),y),c.compose(d,h,f),l.setMatrixAt(p++,c)}return l.count=p,l}function Cv(s,t,e){s.fillStyle="#cfd3d8",s.fillRect(0,0,t,e);for(let r=0;r<2600;r++)s.fillStyle=Math.random()<.5?"rgba(0,0,0,0.035)":"rgba(255,255,255,0.07)",s.fillRect(Math.random()*t,Math.random()*e,2,2);s.strokeStyle="#a3a9b0",s.lineWidth=3;let n=4,i=t/n;for(let r=0;r<=n;r++)s.beginPath(),s.moveTo(r*i,0),s.lineTo(r*i,e),s.stroke(),s.beginPath(),s.moveTo(0,r*i),s.lineTo(t,r*i),s.stroke()}function Iv(s,t,e){s.fillStyle="#f3efe8",s.fillRect(0,0,t,e),s.fillStyle="#d7262d";for(let n=-t;n<=2*t;n+=t/2)s.beginPath(),s.moveTo(n,0),s.lineTo(n+t/4,0),s.lineTo(n+t/4-e,e),s.lineTo(n-e,e),s.closePath(),s.fill()}var np=.45,pi=8;function Pv(s,t){let e=new ye,n=s*(pi+1);e.setAttribute("position",new Ee(new Float32Array(n*3),3).setUsage(js)),e.setAttribute("normal",new Ee(new Float32Array(n*3),3).setUsage(js));let i=new Float32Array(n*2),r=[];for(let a=0;a<s;a++)for(let o=0;o<=pi;o++){let l=a*(pi+1)+o;if(i[l*2]=o/pi,i[l*2+1]=a*t/np,a<s-1&&o<pi){let c=l+pi+1;r.push(l,c,l+1,c,c+1,l+1)}}return e.setAttribute("uv",new Ee(i,2)),e.setIndex(r),e}var fi=new L,Qn=new L,Kl=new L,Sa=new L,Lv=new L(0,1,0);function Kf(s,t,e){let n=s.attributes.position.array,i=s.attributes.normal.array,r=t.length-1;for(let a=0;a<=r;a++){let o=t[Math.max(0,a-1)],l=t[Math.min(r,a+1)];fi.set(l.x-o.x,l.y-o.y,l.z-o.z),fi.lengthSq()<1e-10&&fi.set(0,1,0),fi.normalize(),a===0?(Qn.crossVectors(fi,Sa.set(1,0,0)),Qn.lengthSq()<1e-6&&Qn.crossVectors(fi,Sa.set(0,0,1))):Qn.addScaledVector(fi,-fi.dot(Qn)),Qn.normalize(),Kl.crossVectors(fi,Qn);let c=t[a];for(let h=0;h<=pi;h++){let f=h/pi*Math.PI*2,d=Math.cos(f),u=Math.sin(f),p=(a*(pi+1)+h)*3,x=Qn.x*d+Kl.x*u,g=Qn.y*d+Kl.y*u,m=Qn.z*d+Kl.z*u;i[p]=x,i[p+1]=g,i[p+2]=m,n[p]=c.x+x*e,n[p+1]=c.y+g*e,n[p+2]=c.z+m*e}}s.attributes.position.needsUpdate=!0,s.attributes.normal.needsUpdate=!0}function Jf(s,t,e,n,i,r,a,o){Sa.set(r-e,a-n,o-i);let l=Sa.length()||.001;s.position.set(e,n,i),s.scale.set(1,l/t,1),s.quaternion.setFromUnitVectors(Lv,Sa.multiplyScalar(1/l))}var Nv=[[8.4,8.4],[-8.4,8.4],[8.4,-8.4],[-8.4,-8.4]],$f=.56,tu=.42,jf=.05,Dv=[[0,.5,3.4,.42,2.3,6.3],[-8.5,8,3,.95,-2.7,0],[8.5,8,3,.42,2.6,3.4]],lr=5,Ma=.9,iu=2.6,su=.8,Qf=lr+Ma+iu+su,Mn=12,Jl=4.4,eu=[[0,-3.5],[0,4]];function ls(s){return s>6?Jl+(1.1-Jl)*Math.min(1,(s-6)/(Mn-6)):s<-10?Jl-.8*Math.min(1,(-10-s)/2):Jl}var tp=.018,nu=.07,Uv=.4,zv=1.4,Fv=29,Ov=new Bt(2614271),Bv=new Bt(16722902),kv=new Bt(2829876);function Hv(){let s=new Xe({uniforms:{top:{value:new Bt},horizon:{value:new Bt},bottom:{value:new Bt}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:De,depthWrite:!1,fog:!1}),t=new xt(new en(400,32,16),s);return t.renderOrder=-10,t.frustumCulled=!1,t}function ep(s,t){let e=Cl.merge([bt.fog,{time:{value:0},deep:{value:new Bt(s)},light:{value:new Bt(t)}}]);return new Xe({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
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
      }`})}var $l=class{constructor(t){this.scene=t,this.t=0,this.sky=Hv(),t.add(this.sky),this.hemi=new Zr(16777215,7829367,1.1),t.add(this.hemi);let e=new jr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new L(.5,1,.35).normalize(),this.gx=0,this.gz=0,this.gvx=0,this.gvz=0,this.tgx=0,this.tgz=0,this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo(),roof:this.buildRoof(),grid:this.buildGrid(),saw:this.buildSaw(),ship:this.buildShip()},this.flashT=0,this.night=!1,this.bigWave=null,this._m4=new se,this._col=new Bt;for(let i of Object.values(this.envs))i.group.visible=!1,t.add(i.group);this.env=null}set(t,e=!1){this.env&&(this.env.group.visible=!1);let n=this.envs[t];this.env=n,this.name=t,n.group.visible=!0,this.radius=e?62:n.radius;for(let o of n.props||[])o.visible=!e;let i=this.sun.shadow.camera,r=e?26:14;i.right!==r&&(i.left=-r,i.right=r,i.top=r,i.bottom=-r,i.far=e?120:70,i.updateProjectionMatrix()),this.shadowDist=e?60:30;let a=this.sky.material.uniforms;if(a.top.value.set(n.sky[0]),a.horizon.value.set(n.sky[1]),a.bottom.value.set(n.sky[2]),this.scene.fog=new Cr(n.sky[1],n.fog[0],n.fog[1]),this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.baseHemi=n.hemi[2],this.sun.color.set(n.sun[0]),this.sun.intensity=n.sun[1],this.sunDir.set(n.sun[2],n.sun[3],n.sun[4]).normalize(),this.waterY=n.waterY,this.canFall=n.canFall,this.wallH=n.wallH||0,this.overSpeed=n.overSpeed||0,this.fallDepth=n.fallDepth||.9,this.gx=this.gz=this.gvx=this.gvz=this.tgx=this.tgz=0,this.loadX=this.loadZ=0,this.night=!1,this.flashT=0,this.bigWave=null,this.shipT=0,this.dayEnvI!==void 0&&(this.scene.environmentIntensity=this.dayEnvI),n.spinners)for(let o of n.spinners)o.a=o.a0,o.t=o.t0,o.k=0,o.prev=null,o.cur=null;this.slideMin=n.floe?.004:.07,this.slideGain=n.floe?2.5:1,this.noStick=!!n.grid,n.roof&&this.resetRoof(),n.grid&&this.resetGrid()}get decalLocal(){return!!(this.env&&(this.env.roof||this.env.grid||this.env.floe||this.env.ship))}get traps(){return this.env&&this.env.spinners?this.env.spinners:null}get ropes(){return this.env&&this.env.roof?this.env.ropes:null}get grid(){return!!(this.env&&this.env.grid)}get tilt(){return Math.hypot(this.tgx,this.tgz)}ground(t,e){let n=this.env;if(n.grid){let r=this.tileAt(t,e);return r<0?-1/0:n.h[r]}if(n.roof)return Math.abs(t)<=n.half&&Math.abs(e)<=n.half?this.gx*t+this.gz*e:-1/0;if(n.ship)return Math.abs(e)<=Mn&&Math.abs(t)<=ls(e)?this.gx*t+this.gz*e:-1/0;if(!n.floe)return 0;if(Math.hypot(t,e)>=this.floeRadius(Math.atan2(e,t)))return-1/0;let i=this.gx*t+this.gz*e;return i<n.waterY-Uv?-1/0:i}inside(t,e,n){let i=this.env;if(i.grid)return Math.abs(t)<i.half-n&&Math.abs(e)<i.half-n;if(i.roof)return Math.abs(t)<i.inner-n&&Math.abs(e)<i.inner-n;if(i.floe)return Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n;if(i.ship){if(Math.abs(e)>=Mn-.25-n||Math.abs(t)>=ls(e)-.25-n)return!1;for(let[r,a]of eu)if(Math.hypot(t-r,e-a)<.4+n)return!1;return!0}return Math.hypot(t,e)<this.radius-n}wallNormal(t,e){return this.env.ship?Math.abs(t)/ls(e)>Math.abs(e)/Mn?[Math.sign(t),0]:[0,Math.sign(e)]:Math.abs(t)>Math.abs(e)?[Math.sign(t),0]:[0,Math.sign(e)]}clampInside(t,e,n,i){let r=this.env;if(r.floe)return!1;if(r.ship){let a=Mn-.25-n-.001;Math.abs(e)>a&&(e=Math.sign(e)*a,i.vz=0,i.slideZ=0);let o=ls(e)-.25-n-.001;Math.abs(t)>o&&(t=Math.sign(t)*o,i.vx=0,i.slideX=0);for(let[l,c]of eu)if(Math.hypot(t-l,e-c)<.4+n)return!1}else if(r.roof||r.grid){let a=(r.grid?r.half:r.inner)-n-.001;Math.abs(t)>a&&(t=Math.sign(t)*a,i.vx=0,i.slideX=0),Math.abs(e)>a&&(e=Math.sign(e)*a,i.vz=0,i.slideZ=0)}else{let a=Math.hypot(t,e),o=this.radius-n-.001;if(a>o){let l=t/a,c=e/a;t=l*o,e=c*o;let h=i.vx*l+i.vz*c;h>0&&(i.vx-=l*h,i.vz-=c*h);let f=i.slideX*l+i.slideZ*c;f>0&&(i.slideX-=l*f,i.slideZ-=c*f)}}return i.x=t,i.z=e,!0}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let i=0;i<n;i++){let r=e[i],a=e[(i+1)%n],o=i+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,f=a.z-r.z,d=l*f-c*h;return Math.abs(d)<1e-9?r.r:(r.x*f-r.z*h)/d}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e);let i=this.shadowDist||30;this.sun.position.set(t+n.x*i,n.y*i,e+n.z*i)}update(t,e){if(this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t),this.env.roof&&this.renderRoof(e),this.env.ship&&(this.env.plat.rotation.set(-Math.asin(pt(this.gz,-.9,.9)),0,Math.asin(pt(this.gx,-.9,.9))),this.updateRain(t,e)),this.env.spinners)for(let n of this.env.spinners){n.arm.rotation.y=-n.a;for(let i of n.discs)i.rotation.y+=t*30*n.k}if(this.flashT>0&&(this.flashT=Math.max(0,this.flashT-t),this.hemi.intensity=this.baseHemi+4*this.flashT/.18),this.env.floe){let n=this.env.plat;n.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),n.matrixWorldNeedsUpdate=!0}this.env.grid&&this.renderGrid();for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,i,r){let a=fn(256,128,Wf),o=[];for(let l=0;l<e;l++){let c=new li(new Yn({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,f=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*f,W(i,r),Math.sin(h)*f);let d=W(60,120);c.scale.set(d,d*.45,1),t.add(c),o.push(c)}return o}tileAt(t,e){let n=this.env,i=n.N,r=Math.floor(t/n.S+i/2),a=Math.floor(e/n.S+i/2);return r<0||a<0||r>=i||a>=i?-1:a*i+r}tileMotion(t,e,n){let i=this.env;if(n.vy=0,n.px=0,n.pz=0,!i.grid)return n;let r=this.tileAt(t,e);return r<0||(n.vy=i.v[r],n.px=i.px[r],n.pz=i.pz[r]),n}solidAt(t,e,n){let i=this.env;if(!i.grid)return!1;let r=this.tileAt(t,e);return r>=0&&i.h[r]>n+.45}resetGrid(){let t=this.envs.grid;t.h.fill(0),t.v.fill(0),t.px.fill(0),t.pz.fill(0),t.glow.fill(0),t.events.length=0,t.nextEv=3,t.dirty.fill(1),this.renderGrid()}spawnGridEvent(t){let e=this.env,n=e.N,i=e.S,r=t?t.x:0,a=t?t.z:0,o=e.half-2;if(Math.random()<.5){let d=W(0,Math.PI*2),u=W(2,7);e.events.push({kind:"ring",t:0,warn:1.1,x:pt(r+Math.cos(d)*u,-o,o),z:pt(a+Math.sin(d)*u,-o,o),speed:9,maxR:24,amp:1.25,width:1.9});return}let l=pt(Math.floor(r/i+n/2),0,n-1),c=pt(Math.floor(a/i+n/2),0,n-1),h=[],f=Math.floor(W(0,3));if(f===0){let d=Math.random()<.5?0:1;for(let u=c-4;u<=c+4;u++)for(let p=l-4;p<=l+4;p++)p>=0&&u>=0&&p<n&&u<n&&(p+u)%2===d&&h.push(u*n+p)}else if(f===1){let d=pt(l+Math.floor(W(-2,3)),0,n-1),u=pt(c+Math.floor(W(-2,3)),0,n-1);for(let p=0;p<n;p++)h.push(u*n+p),p!==u&&h.push(p*n+d)}else for(let d=0;d<16;d++){let u=pt(l+Math.floor(W(-5,6)),0,n-1),p=pt(c+Math.floor(W(-5,6)),0,n-1);h.push(p*n+u)}e.events.push({kind:"piston",t:0,warn:1,up:.2,hold:.7,down:.6,amp:1.6,tiles:h})}stepGrid(t,e){let n=this.env,i=n.N,r=n.S,a=n.h,o=n.v;n.nextEv-=t,n.nextEv<=0&&(this.spawnGridEvent(e),n.nextEv=W(3.5,6.5));let l=n.tgt,c=n.glow,h=n.px,f=n.pz;l.fill(0),c.fill(0),h.fill(0),f.fill(0);for(let u of n.events)if(u.t+=t,u.kind==="ring"){let p=(u.t-u.warn)*u.speed-u.width,x=Math.floor(u.x/r+i/2),g=Math.floor(u.z/r+i/2);if(u.t<u.warn){let _=.5+.5*Math.sin(u.t*22);for(let E=g-1;E<=g+1;E++)for(let C=x-1;C<=x+1;C++){if(C<0||E<0||C>=i||E>=i)continue;let N=E*i+C;c[N]=Math.max(c[N],_*(C===x&&E===g?1:.5)),n.gcol[N]=0}continue}let m=u.amp*(1-.5*p/u.maxR),v=Math.max(0,p-u.width),w=p+u.width,y=Math.max(0,Math.floor((u.x-w)/r+i/2)),S=Math.min(i-1,Math.floor((u.x+w)/r+i/2)),M=Math.max(0,Math.floor((u.z-w)/r+i/2)),R=Math.min(i-1,Math.floor((u.z+w)/r+i/2));for(let _=M;_<=R;_++)for(let E=y;E<=S;E++){let C=(E-i/2+.5)*r,N=(_-i/2+.5)*r,U=C-u.x,H=N-u.z,T=Math.hypot(U,H);if(T<v||T>w)continue;let I=(T-p)/u.width,D=(1-I*I)*(1-I*I),z=_*i+E;if(m*D>l[z]){l[z]=m*D,c[z]=Math.max(c[z],D),n.gcol[z]=0;let Z=T||1;h[z]=U/Z*3.5*D,f[z]=H/Z*3.5*D}}u.done=p>u.maxR+u.width}else{let p=u.t,x=0,g=0;p<u.warn?g=.35+.65*(.5+.5*Math.sin(p*26)):p<u.warn+u.up?(x=u.amp*(p-u.warn)/u.up,g=1):p<u.warn+u.up+u.hold?(x=u.amp,g=1):(x=u.amp*Math.max(0,1-(p-u.warn-u.up-u.hold)/u.down),g=x/u.amp);for(let m of u.tiles)x>l[m]&&(l[m]=x),g>c[m]&&(c[m]=g,n.gcol[m]=1);u.done=p>u.warn+u.up+u.hold+u.down}n.events.length&&(n.events=n.events.filter(u=>!u.done));let d=1/t;for(let u=0;u<i*i;u++){let p=l[u];o[u]=pt((p-a[u])*d,-20,12),(p!==a[u]||c[u]!==n.lastGlow[u])&&(n.dirty[u]=1),a[u]=p}}renderGrid(){let t=this.env,e=t.N,n=t.S,i=this._m4,r=this._col,a=!1,o=!1;for(let l=0;l<e*e;l++){if(!t.dirty[l])continue;t.dirty[l]=0;let c=l%e,h=l/e|0;i.makeTranslation((c-e/2+.5)*n,t.h[l],(h-e/2+.5)*n),t.tiles.setMatrixAt(l,i),a=!0;let f=t.glow[l];f!==t.lastGlow[l]&&(t.lastGlow[l]=f,r.copy(t.base[l]).lerp(t.gcol[l]?Bv:Ov,pt(f,0,1)*.85),t.tiles.setColorAt(l,r),o=!0)}a&&(t.tiles.instanceMatrix.needsUpdate=!0),o&&(t.tiles.instanceColor.needsUpdate=!0)}buildGrid(){let t=new he,e=Fv,n=zv,i=e*n/2,r=new Ae(n-.08,4,n-.08).translate(0,-2,0),a=new Gt({color:16777215,roughness:.28,metalness:.3,envMapIntensity:.45}),o=new Kn(r,a,e*e);o.receiveShadow=!0,o.castShadow=!0,o.frustumCulled=!1;let l=[];for(let f=0;f<e*e;f++){let d=kv.clone().offsetHSL(0,0,(Nn(f*3.7)-.5)*.025);l.push(d),o.setColorAt(f,d)}t.add(o);let c=new xt(new tn(i*2,i*2),new Zn({color:197379}));c.rotation.x=-Math.PI/2,c.position.y=-.35,t.add(c);let h=e*e;return{group:t,grid:!0,tiles:o,base:l,N:e,S:n,half:i,h:new Float32Array(h),v:new Float32Array(h),tgt:new Float32Array(h),px:new Float32Array(h),pz:new Float32Array(h),glow:new Float32Array(h),lastGlow:new Float32Array(h).fill(-1),gcol:new Uint8Array(h),dirty:new Uint8Array(h).fill(1),events:[],nextEv:3,radius:i-.3,floe:null,water:null,waterY:-1/0,canFall:!0,fallDepth:2.5,clouds:[],sky:[1051404,1905686,197122],fog:[16,55],hemi:[16774380,1710618,.6],sun:[16777215,2.4,.35,1,.25]}}resetRoof(){let t=this.envs.roof;for(let e of t.ropes)e.intact=!0,e.up=null,e.stub&&(t.group.remove(e.stub.mesh),e.stub.mesh.geometry.dispose(),e.stub=null),e.mesh.visible=!0;this.renderRoof()}updateTilt(t=!0){let e=this.env,n=0,i=0,r=0;for(let h of e.ropes)h.intact&&(i+=h.x,r+=h.z,n++);n&&(i/=n,r/=n);let a=$f*i/e.half,o=$f*r/e.half,l=n>=4?0:n===3?.3:1;a-=l*jf*this.loadX,o-=l*jf*this.loadZ;let c=Math.hypot(a,o);c>tu&&(a*=tu/c,o*=tu/c),t&&(this.gvx+=(a-this.tgx)*3,this.gvz+=(o-this.tgz)*3),this.tgx=a,this.tgz=o}setLoad(t){let e=this.env;if(!e||!(e.floe||e.roof))return;let n=e.floe?15.5:e.half,i=0,r=0;for(let a of t){if(a.S>2||a.falling)continue;let o=a.rag.pts[O.PELVIS],l=a.alive?a.x:o.x,c=a.alive?a.z:o.z,h=this.ground(l,c);if(h===-1/0||(a.alive?a.y:o.y)>h+1.5)continue;let f=a.alive?1:.8;i+=f*l/n,r+=f*c/n}this.loadX=i,this.loadZ=r}cutRope(t,e,n,i){let r=this.env;t.intact=!1,e=pt(e,.3,3.2);let a=this.ground(t.x,t.z),o=Math.max(3,Math.round(e/.2)),l=e/o,c=Math.hypot(n,i)||1,h=n/c*.03,f=i/c*.03,d=[];for(let p=0;p<=o;p++){let x=p/o,g=a+e*x;d.push({x:t.x,y:g,z:t.z,px:t.x-h*x,py:g,pz:t.z-f*x})}let u=new xt(Pv(o+1,l),r.ropeMat);u.castShadow=!0,u.frustumCulled=!1,r.group.add(u),t.stub={pts:d,seg:l,mesh:u},Kf(u.geometry,d,t.r),t.up={y:a+e,len:t.top-(a+e),v:0,t:0,wx:h/.03,wz:f/.03},this.updateTilt()}step(t,e){let n=this.env;if(n&&n.grid){this.stepGrid(t,e);return}if(n&&n.floe){this.stepFloe(t);return}if(n&&n.ship){this.stepShip(t);return}if(n&&n.spinners){this.stepSaw(t);return}if(!n||!n.roof)return;this.updateTilt(!1);let i=18,r=3.4;this.gvx+=(i*(this.tgx-this.gx)-r*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(i*(this.tgz-this.gz)-r*this.gvz)*t,this.gz+=this.gvz*t;for(let a of n.ropes)a.up&&(a.up.t+=t,a.up.v+=60*t,a.up.y+=a.up.v*t,a.up.t>2.5&&(a.up=null)),a.stub&&this.stepStub(a,t)}stepShip(t){let e=this.shipT+=t,n=.15*Math.sin(.85*e)+.05*Math.sin(2.1*e+1.3),i=.05*Math.sin(.62*e+.4)+.02*Math.sin(1.7*e),r=this.bigWave;if(r){r.t+=t;let a=r.t<.9?r.t/.9:r.t<2.3?1:Math.max(0,1-(r.t-2.3)/1.2);n+=r.dir*.24*a,r.t>3.5&&(this.bigWave=null)}this.overSpeed=r&&r.t>.6&&r.t<2.8?2.2:this.env.overSpeed,this.gvx=(n-this.gx)/t,this.gvz=(i-this.gz)/t,this.gx=n,this.gz=i,this.tgx=n,this.tgz=i}stepSaw(t){for(let e of this.env.spinners){e.t=(e.t+t)%Qf;let n=e.t;e.k=n<lr?1:n<lr+Ma?1-(n-lr)/Ma:n<lr+Ma+iu?0:(n-lr-Ma-iu)/su,e.armed=e.k>.4,e.danger=e.k>.1||n>Qf-su-.7,e.a+=e.w*e.k*t;let i=Math.cos(e.a),r=Math.sin(e.a),a={bx:e.x-i*e.r,by:e.h,bz:e.z-r*e.r,tx:e.x+i*e.r,ty:e.h,tz:e.z+r*e.r};e.prev=e.cur||a,e.cur=a}}applyNight(){this.night=!0;let t=this.sky.material.uniforms;t.top.value.set(329487),t.horizon.value.set(1778752),t.bottom.value.set(329226),this.scene.fog.color.set(1317680),this.hemi.color.set(9414399),this.hemi.groundColor.set(1711142),this.hemi.intensity*=.42,this.sun.color.set(12110079),this.sun.intensity*=.38,this.baseHemi=this.hemi.intensity,this.dayEnvI===void 0&&(this.dayEnvI=this.scene.environmentIntensity),this.scene.environmentIntensity=this.dayEnvI*.22;let e=this.scene.fog;e.near=Math.min(e.near,6),e.far=Math.min(e.far*.5,55)}flash(){this.flashT=.18}stepFloe(t){let e=-tp*this.loadX,n=-tp*this.loadZ,i=Math.hypot(e,n);i>nu&&(e*=nu/i,n*=nu/i),this.tgx=e,this.tgz=n;let r=5,a=2.2;this.gvx+=(r*(e-this.gx)-a*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(r*(n-this.gz)-a*this.gvz)*t,this.gz+=this.gvz*t}stepStub(t,e){let n=t.stub.pts,i=t.stub.seg,r=t.r,a=n[0];a.x=t.x,a.y=this.ground(t.x,t.z),a.z=t.z;for(let o=1;o<n.length;o++){let l=n[o],c=(l.x-l.px)*.99,h=(l.y-l.py)*.99,f=(l.z-l.pz)*.99;l.px=l.x,l.py=l.y,l.pz=l.z,l.x+=c,l.y+=h-$e*e*e,l.z+=f}for(let o=0;o<6;o++){for(let l=1;l<n.length;l++){let c=n[l-1],h=n[l],f=h.x-c.x,d=h.y-c.y,u=h.z-c.z,p=Math.hypot(f,d,u)||1e-6,x=(p-i)/p,g=l===1?0:.5,m=1-g;c.x+=f*x*g,c.y+=d*x*g,c.z+=u*x*g,h.x-=f*x*m,h.y-=d*x*m,h.z-=u*x*m}for(let l=1;l<n.length;l++){let c=n[l],h=this.ground(c.x,c.z);c.y<h+r&&(c.y=h+r,c.px=c.x-(c.x-c.px)*.8,c.pz=c.z-(c.z-c.pz)*.8)}}}renderRoof(t){let e=this.env;e.plat.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),e.plat.matrixWorldNeedsUpdate=!0;for(let n of e.ropes){let i=n.mesh,r=t?Math.hypot(t.x-n.x,t.z-n.z):9,a=pt((r-.7)/1.6,.12,1);if(i.material.opacity=a,i.material.transparent=a<1,i.material.depthWrite=a>=1,n.intact)i.visible=!0,Jf(i,n.L0,n.x,this.ground(n.x,n.z),n.z,n.x,n.top,n.z);else if(n.up){let o=n.up,l=Math.sin(o.t*24)*.6*Math.exp(-o.t*2.2);i.visible=!0,Jf(i,n.L0,n.x+o.wx*l,o.y,n.z+o.wz*l,n.x,o.y+o.len,n.z)}else i.visible=!1;n.stub&&Kf(n.stub.mesh.geometry,n.stub.pts,n.r)}}buildRoof(){let t=new he,e=new he;e.matrixAutoUpdate=!1,t.add(e);let n=11,i=.3,r=.45,a=fn(256,256,Cv);a.wrapS=a.wrapT=gn,a.repeat.set(n*2/4,n*2/4);let o=new Gt({map:a,roughness:.85}),l=new Gt({color:9278620,roughness:.9}),c=new Gt({color:6252142,roughness:.9}),h=new xt(new Ae(n*2,.8,n*2),[l,l,o,c,l,l]);h.position.y=-.4,h.receiveShadow=!0,h.castShadow=!0,e.add(h);for(let[S,M,R,_]of[[n*2,.5,0,-5],[n*2,.5,0,5],[.5,n*2,-5,0],[.5,n*2,5,0]]){let E=new xt(new Ae(S,.5,M),c);E.position.set(R,-1.05,_),e.add(E)}let f=new Gt({color:11712703,roughness:.8});for(let[S,M,R,_]of[[n*2,i,0,n-i/2],[n*2,i,0,-n+i/2],[i,n*2-i*2,n-i/2,0],[i,n*2-i*2,-n+i/2,0]]){let E=new xt(new Ae(S,r,M),f);E.position.set(R,r/2,_),E.castShadow=!0,E.receiveShadow=!0,e.add(E)}let d=fn(64,64,Iv);d.wrapS=d.wrapT=gn;let u=new Gt({map:d,roughness:.55}),p=new Gt({color:4870232,roughness:.4,metalness:.6}),x=[],g=.075,m=46;for(let[S,M]of Nv){let R=m,_=new Ne(g,g,R,10,1,!0).translate(0,R/2,0),E=_.attributes.uv;for(let U=0;U<E.count;U++)E.setY(U,E.getY(U)*R/np);let C=new xt(_,u.clone());C.castShadow=!0,t.add(C);let N=new xt(new Ne(.2,.25,.07,14),p);N.position.set(S,.035,M),N.receiveShadow=!0,e.add(N),x.push({x:S,z:M,r:g,top:m,L0:R,mesh:C,intact:!0,stub:null,up:null})}let v=fn(256,128,Wf),w=[];for(let S=0;S<16;S++){let M=new li(new Yn({map:v,fog:!1,transparent:!0,depthWrite:!1,opacity:.95})),R=Math.random()*Math.PI*2,_=W(25,150);M.position.set(Math.cos(R)*_,W(-48,-12),Math.sin(R)*_);let E=W(40,95);M.scale.set(E,E*.45,1),t.add(M),w.push(M)}let y=new Gt({color:10466505,roughness:.9});for(let S=0;S<16;S++){let M=S/16*Math.PI*2+W(-.15,.15),R=W(40,120),_=W(6,13),E=W(-30,5),C=new xt(new Ae(_,200,_*W(.7,1.3)),y);C.position.set(Math.cos(M)*R,E-100,Math.sin(M)*R),C.rotation.y=W(0,Math.PI),t.add(C)}return{group:t,plat:e,roof:!0,half:n,inner:n-i,wallH:r,overSpeed:5,fallDepth:1.5,ropes:x,ropeMat:u,radius:n-i,floe:null,water:null,waterY:-1/0,canFall:!0,clouds:w.concat(this.clouds(t,8,170,25,70)),sky:[4165600,14084600,15857403],fog:[55,240],hemi:[15398143,11122888,1.1],sun:[16777215,2.6,.4,1,.5]}}buildMeadow(){let t=new he,e=fn(256,256,Ev,70),n=new xt(new tn(300,300),new Gt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new Gt({map:fn(128,256,Av),alphaTest:.45,side:Je,roughness:.9}),r=(c,h)=>Math.hypot(c,h)<20&&Math.random()<.85;t.add(Zf(Yf(6,.42,1,.75),i,320,1.5,45,.6,1.5,r));let a=new Gt({map:fn(64,64,Rv),alphaTest:.4,side:Je,roughness:1});t.add(Zf(Yf(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let c=0;c<14;c++){let h=c/14*Math.PI*2+W(-.15,.15),f=W(85,130),d=Xf(W(28,50),W(26,55),c*13.7,o);d.position.x=Math.cos(h)*f,d.position.z=Math.sin(h)*f,t.add(d)}let l=[];for(let c=0;c<16;c++){let h=Math.random()*Math.PI*2,f=W(31,48),d=qf(W(.8,2.6),c*31,9078398);d.position.set(Math.cos(h)*f,0,Math.sin(h)*f),t.add(d),l.push(d)}return{group:t,props:l,radius:28,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new he,e=12,n=[];for(let p=0;p<e;p++){let x=p/e*Math.PI*2+W(-.1,.1)-Math.PI,g=W(14.5,17);n.push({a:x,r:g,x:Math.cos(x)*g,z:Math.sin(x)*g})}let i=new Ki;n.forEach((p,x)=>x?i.lineTo(p.x,-p.z):i.moveTo(p.x,-p.z)),i.closePath();let r=new $i(i,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=fn(256,256,wv);a.wrapS=a.wrapT=gn,a.repeat.set(.28,.28);let o=new Gt({map:a,roughness:.35,metalness:0}),l=new Gt({color:8829408,roughness:.3}),c=new xt(r,[o,l]);c.receiveShadow=!0,c.castShadow=!0;let h=new he;h.matrixAutoUpdate=!1,h.add(c),t.add(h);let f=new xt(new tn(500,500),ep(4869570,9080816));f.rotation.x=-Math.PI/2,f.position.y=-.35,t.add(f);let d=new Gt({color:10930408,roughness:.35,flatShading:!0}),u=(p,x,g,m,v,w)=>{let y=new Ae(p,x,g,3,6,3);y.index&&(y=y.toNonIndexed());let S=y.attributes.position;for(let R=0;R<S.count;R++){let _=Math.round(S.getX(R)*10)*3.3+Math.round(S.getY(R)*10)*1.7+Math.round(S.getZ(R)*10)*5.1+w;S.setXYZ(R,S.getX(R)+(Nn(_)-.5)*p*.25,S.getY(R)+(Nn(_+1)-.5)*.6,S.getZ(R)+(Nn(_+2)-.5)*g*.25)}y.computeVertexNormals();let M=new xt(y,d);M.position.set(m,x/2-1.5,v),M.rotation.y=W(0,Math.PI),t.add(M)};u(7,20,6,12,44,1),u(5,9,5,-38,30,2),u(9,6,7,-22,-46,3),u(4,13,4,46,-14,4);for(let p=0;p<14;p++){let x=Math.random()*Math.PI*2,g=W(20,40),m=qf(W(.4,1.3),p*7,14281978);m.position.set(Math.cos(x)*g,-.35,Math.sin(x)*g),m.castShadow=!1,t.add(m)}return{group:t,plat:h,floe:n,water:f,waterY:-.35,canFall:!0,radius:16,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}updateRain(t,e){let n=this.env.rain;if(!n)return;let i=n.geo.attributes.position,r=i.array;for(let a=0;a<r.length;a+=3)r[a+1]-=22*t,r[a]+=3*t,(r[a+1]<e.y-6||Math.abs(r[a]-e.x)>14||Math.abs(r[a+2]-e.z)>14)&&(r[a]=e.x+W(-14,14),r[a+1]=e.y+W(2,12),r[a+2]=e.z+W(-14,14));i.needsUpdate=!0}buildSaw(){let t=new he,e=fn(256,256,(u,p,x)=>{u.fillStyle="#5c6066",u.fillRect(0,0,p,x);for(let g=0;g<1800;g++)u.fillStyle=Math.random()<.5?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.05)",u.fillRect(Math.random()*p,Math.random()*x,2,2);u.strokeStyle="#3d4045",u.lineWidth=4;for(let g=0;g<=2;g++)u.beginPath(),u.moveTo(g*p/2,0),u.lineTo(g*p/2,x),u.stroke(),u.beginPath(),u.moveTo(0,g*x/2),u.lineTo(p,g*x/2),u.stroke();u.fillStyle="#7a7f86";for(let[g,m]of[[20,20],[p-20,20],[20,x-20],[p-20,x-20],[p/2-20,x/2-20]])u.beginPath(),u.arc(g,m,5,0,Math.PI*2),u.fill()},0);e.wrapS=e.wrapT=gn,e.repeat.set(14,14);let n=new xt(new Zi(19,48).rotateX(-Math.PI/2),new Gt({map:e,roughness:.6,metalness:.3}));n.receiveShadow=!0,t.add(n);let i=new xt(new tn(300,300).rotateX(-Math.PI/2),new Gt({color:2762274,roughness:1}));i.position.y=-.02,t.add(i);let r=new Gt({color:7234908,roughness:.95,flatShading:!0}),a=new xt(new Ne(19.8,19.8,1.6,48,1,!0),r);a.material.side=Je,a.position.y=.8,a.receiveShadow=!0,t.add(a);let o=fn(128,32,(u,p,x)=>{u.fillStyle="#f2c230",u.fillRect(0,0,p,x),u.fillStyle="#1b1b1b";for(let g=-x;g<p+x;g+=24)u.beginPath(),u.moveTo(g,0),u.lineTo(g+12,0),u.lineTo(g+12-x,x),u.lineTo(g-x,x),u.closePath(),u.fill()},0);o.wrapS=gn,o.repeat.set(6,1);let l=new Gt({color:13225942,metalness:.9,roughness:.25}),c=new Gt({color:2895667,metalness:.6,roughness:.5}),h=new Gt({map:o,roughness:.7}),f=[];for(let[u,p,x,g,m,v]of Dv){let w=new xt(new Xr(x+.1,x+.45,40).rotateX(-Math.PI/2),h);w.position.set(u,.01,p),t.add(w);let y=new xt(new Ne(.22,.3,g+.25,12),c);y.position.set(u,(g+.25)/2,p),y.castShadow=!0,t.add(y);let S=new he;S.position.set(u,g,p);let M=new xt(new Ae(x*2,.07,.22),l);M.castShadow=!0,S.add(M);let R=[];for(let E of[-1,1]){let C=new xt(new Ne(.42,.42,.04,20),l);C.position.x=E*x,C.castShadow=!0,S.add(C),R.push(C)}t.add(S);let _=Math.random()*Math.PI*2;f.push({x:u,z:p,r:x,h:g,w:m,a:_,a0:_,t:v,t0:v,k:0,armed:!1,danger:!1,arm:S,discs:R,cur:null,prev:null})}let d=new Zn({color:16752704});for(let u=0;u<10;u++){let p=u/10*Math.PI*2,x=new xt(new hi(.16,.45,8),d);x.position.set(Math.cos(p)*19.4,1.9,Math.sin(p)*19.4),t.add(x)}return{group:t,spinners:f,radius:18.6,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,4,170,50,90),sky:[3877427,9067082,2761760],fog:[30,120],hemi:[16767416,3813424,.9],sun:[16763030,2.3,.3,1,.4]}}buildShip(){let t=new he,e=new he;t.add(e);let n=[];for(let y=-Mn;y<=Mn+1e-6;y+=.5)n.push([ls(y),y]);let i=new Ki;n.forEach(([y,S],M)=>M?i.lineTo(y,-S):i.moveTo(y,-S));for(let y=n.length-1;y>=0;y--)i.lineTo(-n[y][0],-n[y][1]);i.closePath();let r=fn(256,256,(y,S,M)=>{y.fillStyle="#8a5e3b",y.fillRect(0,0,S,M);for(let R=0;R<8;R++)y.fillStyle=R%2?"#80552f":"#946640",y.fillRect(R*S/8,0,S/8-2,M);y.fillStyle="rgba(30,15,5,0.5)";for(let R=0;R<8;R++)y.fillRect(R*S/8-2,0,2,M);for(let R=0;R<900;R++)y.fillStyle="rgba(0,0,0,0.06)",y.fillRect(Math.random()*S,Math.random()*M,1,5)},0);r.wrapS=r.wrapT=gn,r.repeat.set(.35,.35);let a=new $i(i,{depth:.4,bevelEnabled:!1});a.rotateX(-Math.PI/2),a.translate(0,-.4,0);let o=new xt(a,[new Gt({map:r,roughness:.8}),new Gt({color:4861724,roughness:.9})]);o.receiveShadow=!0,e.add(o);let l=new $i(i,{depth:3.2,bevelEnabled:!0,bevelThickness:.2,bevelSize:.25,bevelSegments:2});l.rotateX(-Math.PI/2),l.translate(0,-3.6,0);let c=new xt(l,new Gt({color:3875862,roughness:.9}));e.add(c);let h=new Gt({color:7029798,roughness:.8}),f=.55,d=[];for(let y=-Mn;y<=Mn+1e-6;y+=1.5)d.push([ls(y),y]);for(let y of[-1,1])for(let S=0;S<d.length;S++){let[M,R]=d[S],_=new xt(new Ae(.12,f,.12),h);if(_.position.set(y*M,f/2,R),_.castShadow=!0,e.add(_),S){let[E,C]=d[S-1],N=Math.hypot(M-E,R-C),U=new xt(new Ae(.14,.1,N),h);U.position.set(y*(M+E)/2,f,(R+C)/2),U.rotation.y=Math.atan2(y*(M-E),R-C),e.add(U)}}let u=new xt(new Ae(ls(-Mn)*2,.1,.14),h);u.position.set(0,f,-Mn),e.add(u);let p=new Gt({color:5913122,roughness:.8}),x=new Gt({color:15261640,roughness:.9,side:Je});for(let[y,S]of eu){let M=new xt(new Ne(.16,.22,11,10),p);M.position.set(y,5.5,S),M.castShadow=!0,e.add(M);for(let[R,_]of[[4.2,6],[8,4.4]]){let E=new xt(new Ne(.07,.07,_,8),p);E.rotation.z=Math.PI/2,E.position.set(y,R+2.6,S),e.add(E);let C=new tn(_*.92,2.5,6,3),N=C.attributes.position;for(let H=0;H<N.count;H++)N.setZ(H,.45*(1-(N.getX(H)/(_*.46))**2));let U=new xt(C,x);U.position.set(y,R+1.3,S+.05),U.castShadow=!0,e.add(U)}}let g=new xt(new tn(600,600),ep(1911354,5071480));g.rotation.x=-Math.PI/2,g.position.y=-2.4,t.add(g);let m=new ye,v=new Float32Array(700*3);for(let y=0;y<v.length;y+=3)v[y]=W(-14,14),v[y+1]=W(-4,12),v[y+2]=W(-14,14);m.setAttribute("position",new Ee(v,3));let w=new Yi(m,new xn({color:12570854,size:.06,transparent:!0,opacity:.7,depthWrite:!1}));return w.frustumCulled=!1,t.add(w),{group:t,plat:e,ship:!0,rain:{geo:m},wallH:f,overSpeed:5.5,fallDepth:2.6,radius:Mn,floe:null,water:g,waterY:-2.4,canFall:!0,clouds:this.clouds(t,9,160,30,60),sky:[2831426,7174792,1712169],fog:[22,110],hemi:[13161700,3159098,.75],sun:[14213872,1.4,.3,1,.5]}}buildDojo(){let t=new he,e=fn(256,256,Tv,60),n=new xt(new tn(300,300),new Gt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let i=new Gt({color:10127992,flatShading:!0,roughness:.9});for(let u=0;u<84;u++){let p=u/84*Math.PI*2,x=new xt(new Gs(W(.22,.34),0),i);x.position.set(Math.cos(p)*22.6,.08,Math.sin(p)*22.6),x.castShadow=!0,t.add(x)}let r=new Gt({color:13116958,roughness:.6}),a=new Gt({color:2759190,roughness:.7}),o=new he;for(let u of[-2.6,2.6]){let p=new xt(new Ne(.28,.34,6,12),r);p.position.set(u,3,0),o.add(p)}let l=new xt(new Ae(7.6,.45,.6),a);l.position.y=6.2;let c=new xt(new Ae(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),o.position.set(0,0,30),t.add(o);for(let[u,p]of[[-9,27],[9,27],[-27,-6],[27,-6],[-16,-24],[16,-24]]){let x=new he,g=new xt(new Ne(.35,.45,1.2,8),i);g.position.y=.6;let m=new xt(new Ae(.8,.6,.8),i);m.position.y=1.5;let v=new xt(new hi(.75,.5,4),i);v.position.y=2.05,v.rotation.y=Math.PI/4,x.add(g,m,v),x.traverse(w=>{w.isMesh&&(w.castShadow=!0)}),x.position.set(u,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let u=0;u<12;u++){let p=u/12*Math.PI*2,x=Xf(W(40,70),W(10,22),u*5.3,h);x.position.x=Math.cos(p)*W(90,130),x.position.z=Math.sin(p)*W(90,130),t.add(x)}let f=fn(128,128,(u,p)=>{let x=u.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),u.fillStyle=x,u.fillRect(0,0,p,p)}),d=new li(new Yn({map:f,fog:!1,depthWrite:!1}));return d.position.set(0,38,190),d.scale.set(90,90,1),t.add(d),{group:t,radius:22,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var Vv=55,jl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=Vv,this.taps=[],this.tapStart={t:0,x:0,y:0,moved:0},window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&this.end()}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){kt.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n}),Object.assign(this.tapStart,{t:performance.now(),x:e,y:n,moved:0})}end(){let t=this.tapStart;performance.now()-t.t<260&&t.moved<14&&this.taps.push({x:t.x,y:t.y}),this.stick.id=null}drag(t,e){let n=this.stick;n.x=t,n.y=e,this.tapStart.moved=Math.max(this.tapStart.moved,Math.hypot(t-this.tapStart.x,e-this.tapStart.y));let i=t-n.ox,r=e-n.oy,a=Math.hypot(i,r),o=this.stickR*1.3;a>o&&(n.ox=t-i/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),n==="Space"&&this.taps.push(null),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),kt.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.end()}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=pt((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i,i=1),{x:t,y:e,mag:i}}clear(){this.anyPress=!1,this.taps.length=0}endFrame(){this.anyPress=!1}};var Gv='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',Wv='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',Ql=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${Gv}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${Wv}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-music"></button>
        <button id="s-quality"></button>
        <div class="s-head">Do\u011Frudan git</div>
        <div class="s-jumps">
          <button data-jump="battle">Muharebe</button>
          <button data-jump="grid">Izgara</button>
          <button data-jump="ice">Buz</button>
          <button data-jump="roof">Platform</button>
          <button data-jump="horse">At</button>
          <button data-jump="saw">Testere</button>
          <button data-jump="ship">Gemi</button>
          <button data-jump="waves">Dalga</button>
          <button data-jump="titan">Titan</button>
          <button data-jump="titanwar">Titan sava\u015F\u0131</button>
        </div>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let i=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",i,{passive:!0}),r.addEventListener("mousedown",i);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),n.querySelector("#s-music").addEventListener("click",()=>{kt.init(),kt.toggleMusic(),this.refreshSettings()});for(let r of n.querySelectorAll("[data-jump]"))r.addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo(r.dataset.jump)});for(let r of n.querySelectorAll("button"))r.addEventListener("click",()=>kt.click());this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`,this.settings.querySelector("#s-music").textContent=`M\xFCzik: ${kt.musicOn?"A\xE7\u0131k":"Kapal\u0131"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}drawBody(t,e,n){if(!e)return;let i=this.lv.getBoundingClientRect(),r=i.left+4,a=i.bottom+4,o=1.15*n,l=e.rag.pts,c=(u,p)=>{t.setLineDash(u?[]:[3,3]),t.strokeStyle=u?"rgba(255,255,255,0.9)":"rgba(255,59,92,0.95)",t.fillStyle=t.strokeStyle,t.beginPath(),p(),t.stroke()};t.save(),t.lineCap="round",t.lineWidth=3.2*n,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=3;let h=u=>r+u*o,f=u=>a+u*o,d=e.alive;c(d||l[O.HEAD].attached,()=>t.arc(h(14),f(7),5.5*o,0,Math.PI*2)),c(!0,()=>{t.moveTo(h(14),f(14)),t.lineTo(h(14),f(31))}),c(l[O.LHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(4),f(28))}),c(l[O.RHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(24),f(28))}),c(l[O.LFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(7),f(47))}),c(l[O.RFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(21),f(47))}),t.restore()}show(t,e,n,i){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(i||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,i,r,a){let o=this.ctx,l=this.dpr;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,this.W,this.H);let c=pt(Math.min(this.W,this.H)/400,.8,1.6);this.drawBody(o,r,c);let h=n.stick;if(h.id!==null||n.touchMode&&i>0){let f=n.stickR,d=h.id!==null,u=d?h.ox:this.W/2,p=d?h.oy:this.H-120*c;o.globalAlpha=d?.45:.25*pt(i,0,1),o.strokeStyle="#fff",o.fillStyle="#fff",o.lineWidth=3,o.beginPath(),o.arc(u,p,f,0,Math.PI*2),o.stroke();let x=u,g=p;if(d){let m=h.x-h.ox,v=h.y-h.oy,w=Math.hypot(m,v),y=Math.min(w,f)/(w||1);x+=m*y,g+=v*y}o.beginPath(),o.arc(x,g,f*.42,0,Math.PI*2),o.fill(),o.globalAlpha=1}o.textAlign="center",o.textBaseline="middle",o.lineJoin="round";for(let f of e){let d=t(f.x,f.y,f.z);if(!d)continue;let u=1+.6*Math.max(0,1-f.age/.1),p=1-Math.max(0,(f.age/f.life-.7)/.3),x=Math.round(f.size*c*u);o.globalAlpha=p,o.font=`900 ${x}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.lineWidth=Math.max(3,x*.2),o.strokeStyle="#1a0d14",o.strokeText(f.text,d.x,d.y),o.fillStyle=f.col,o.fillText(f.text,d.x,d.y)}if(o.globalAlpha=1,this.flash>0){let f=o.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);f.addColorStop(0,"rgba(210,0,20,0)"),f.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),o.fillStyle=f,o.fillRect(0,0,this.W,this.H)}if(i>0){o.globalAlpha=pt(i,0,1)*.9,o.font=`700 ${Math.round(14*c)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.fillStyle="#fff",o.strokeStyle="rgba(0,0,0,0.35)",o.lineWidth=3;let f=n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"];a==="titan"&&(f=[n.touchMode?"K\u0131sa dokun: halat at, u\xE7":"T\u0131kla / Bo\u015Fluk: halat at, u\xE7","Titana dokun: ona halat at","Sadece BOYNU \xF6ld\xFCr\xFCr (\xF6nden de): 4 darbe","\xC7ift k\u0131l\u0131\xE7: iki b\u0131\xE7ak da boyna say\u0131l\u0131r","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="titanwar"&&(f=["Maviler dost, ilk 60 sn arkandan dalga dalga gelir","Ye\u015Filimsiler halatla u\xE7ar, boynu yarar: son kesi\u015F senin",n.touchMode?"K\u0131sa dokun: halat at \xB7 titana dokun: ona u\xE7":"T\u0131k / Bo\u015Fluk: halat at \xB7 titana t\u0131kla: ona u\xE7","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="horse"&&(f=["S\xFCr\xFCkle: at o y\xF6ne ko\u015Far, k\u0131l\u0131\xE7 da","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="battle"&&(f=["Maviler dost, morlar d\xFC\u015Fman","Az it = dur \xB7 \xE7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","H\u0131zl\u0131yken sert d\xF6n: at drift atar"]),a==="grid"&&(f=["Parlayan karolardan uzak dur","Mavi halka ve pembe pistonlar havaya f\u0131rlat\u0131r","Kenardan bo\u015Flu\u011Fa d\xFC\u015Fen \xF6l\xFCr"]),a==="roof"&&(f=["D\xF6rt k\xF6\u015Fede d\xF6rt halat platformu tutuyor","Birini kes: o k\xF6\u015Feye yatar \xB7 yan yana iki: devrilir","Kenardan d\xFC\u015Fen \xF6l\xFCr"]),a==="saw"&&(f=["D\xF6nen b\u0131\xE7aklar HERKES\u0130 keser: seni de","Kollar durup dinlenir: duruyorken i\xE7inden ge\xE7","D\xFC\u015Fmanlar\u0131 d\xF6nen kollar\u0131n yoluna \xE7ek"]),a==="ship"&&(f=["G\xFCverte dalgayla yatar: herkes al\xE7ak yana kayar","B\xDCY\xDCK DALGA uyar\u0131s\u0131nda y\xFCksek yana ko\u015F","Darbeyle k\xFCpe\u015Fteden savrulan denize d\xFC\u015Fer"]),a==="waves"&&(f=["\u0130ki elinde birer k\u0131l\u0131\xE7 var: kalabal\u0131\u011F\u0131 bi\xE7","D\xFC\u015Fmanlar dalga dalga gelir","Son dalgada boss var"]),a==="ice"&&(f=["Buz y\xFCz\xFCyor: a\u011F\u0131rl\u0131k hangi yana toplan\u0131rsa o yan batar","Batan kenar su olur: orada duran d\xFC\u015Fer","D\xFC\u015Fmanlar\u0131 kenara topla, sen ortada kal"]),f.forEach((d,u)=>{let p=this.H*.72+u*22*c;o.strokeText(d,this.W/2,p),o.fillText(d,this.W/2,p)}),o.globalAlpha=1}}};var ru=13,au=28,Xv=7.5,qv=7,Yv=14,ip=.85,Zv=1.72*ip,cs=new en(1,14,10),Kv=new Gt({color:16777215,roughness:.25}),Jv=new Gt({color:1118481,roughness:.3});function an(s,t,e,n,i){let r=new xt(s,t);return r.scale.set(e,n,i),r.castShadow=!0,r}var tc=class{constructor(t,e,n,i,r={}){var x,g;this.x=e,this.z=n,this.yaw=i,this.speed=0,this.vx=0,this.vz=0,this.phase=Math.random()*6,this.bob=0,this.slip=0,this.slipDir=1,this.rider=null;let a=new Ei({color:(x=r.color)!=null?x:10115635,roughness:.3,clearcoat:1,clearcoatRoughness:.12}),o=new Ei({color:(g=r.mane)!=null?g:3809812,roughness:.45,clearcoat:.6});this.mats=[a,o];let l=new he,c=new he;l.add(c),c.add(an(cs,a,.42,.44,.98).translateY(1.3)),c.add(an(cs,a,.36,.4,.42).translateY(1.36).translateZ(.62)),c.add(an(cs,a,.4,.42,.45).translateY(1.33).translateZ(-.6));let h=new he;h.position.set(0,1.55,.78),h.rotation.x=.75,c.add(h),h.add(an(new ci(.2,.6,5,12),a,1,1,1).translateY(.35)),h.add(an(new ci(.07,.62,4,8),o,1,1,1.4).translateY(.35).translateZ(-.16));let f=new he;f.position.set(0,.78,.02),f.rotation.x=1.25,h.add(f),f.add(an(cs,a,.17,.36,.2).translateY(.2)),f.add(an(cs,o,.13,.12,.15).translateY(.5).translateZ(.01));for(let m of[-1,1]){let v=an(new hi(.05,.16,8),a,1,1,1);v.position.set(m*.08,.02,-.15),v.rotation.x=-.9,f.add(v);let w=an(cs,Kv,.07,.07,.07);w.position.set(m*.13,.12,-.06);let y=an(cs,Jv,.03,.03,.03);v.castShadow=w.castShadow=y.castShadow=!1,y.position.set(m*.19,.14,-.05),f.add(w,y)}this.head=f,this.tail=new he,this.tail.position.set(0,1.45,-1),this.tail.add(an(new ci(.08,.6,4,8),o,1,1,1).translateY(-.35)),c.add(this.tail),this.legs=[];let d=new ci(.1,.5,4,10),u=new ci(.07,.5,4,10),p=new Ne(.085,.1,.1,10);for(let[m,v,w]of[[-.22,.62,0],[.22,.62,.35],[-.22,-.62,Math.PI],[.22,-.62,Math.PI+.35]]){let y=new he;y.position.set(m,1.12,v);let S=an(d,a,1,1,1);S.position.y=-.3;let M=new he;M.position.y=-.58;let R=an(u,a,1,1,1);R.position.y=-.28;let _=an(p,o,1,1,1);_.position.y=-.55,M.add(R,_),y.add(S,M),c.add(y),this.legs.push({hip:y,knee:M,off:w,front:v>0})}this.root=c,l.scale.setScalar(ip),this.group=l,t.add(l)}update(t,e,n){let i=0,r=0,a=e?e.mag:0;if(a>.18){let u=Math.hypot(this.vx,this.vz);this.yaw=di(this.yaw,Math.atan2(e.x,e.z),rt(6,4,pt(u/ru,0,1))*t);let p=pt((a-.4)/.45,0,1)*ru;i=e.x*p,r=e.z*p}this.drive(i,r,t);let o=this.x+this.vx*t,l=this.z+this.vz*t;n.inside(o,l,1.3)||(o=this.x,l=this.z,this.vx*=-.3,this.vz*=-.3,this.yaw=di(this.yaw,Math.atan2(-this.x,-this.z),3*t)),this.x=o,this.z=l,this.speed=Math.hypot(this.vx,this.vz);let c=Math.sin(this.yaw),h=Math.cos(this.yaw),f=-this.vx*h+this.vz*c;this.slip+=(pt((Math.abs(f)-1.2)/4,0,1)-this.slip)*Math.min(1,t*10),Math.abs(f)>.5&&(this.slipDir=Math.sign(f));let d=this.speed>.3?1.3+this.speed*.17:0;this.phase+=t*Math.PI*2*d,this.bob=this.speed>.3?-Math.abs(Math.sin(this.phase))*.09*pt(this.speed/6,0,1):0}drive(t,e,n){let i=Math.hypot(this.vx,this.vz);if(i<.3){let x=au*n,g=t-this.vx,m=e-this.vz,v=Math.hypot(g,m);v>x?(this.vx+=g/v*x,this.vz+=m/v*x):(this.vx=t,this.vz=e);return}let r=ru,a=Math.sqrt(pt((i-.15*r)/(.55*r),0,1)),o=rt(au,Xv,a),l=rt(au,qv,a),c=this.vx/i,h=this.vz/i,f=t*c+e*h,d=-t*h+e*c,u=pt(f-i,-l*n,Yv*n),p=pt(d,-o*n,o*n);this.vx+=c*u-h*p,this.vz+=h*u+c*p}saddle(t){return t.x=this.x-Math.sin(this.yaw)*.05,t.y=Zv+this.bob,t.z=this.z-Math.cos(this.yaw)*.05,t}render(){let t=this.group;t.position.set(this.x,0,this.z),t.rotation.y=this.yaw;let e=pt(this.speed/6,0,1),n=this.phase;this.root.position.y=this.bob,this.root.rotation.x=Math.sin(n)*.06*e,this.root.rotation.z=-this.slip*this.slipDir*.22;for(let i of this.legs){let r=n+i.off;i.hip.rotation.x=-Math.sin(r)*.6*e;let a=(.15+.9*Math.max(0,Math.sin(r+1.2)))*e;i.knee.rotation.x=i.front?a:-a*.8}this.tail.rotation.x=.4+Math.sin(n*.5)*.15+e*.5,this.head.rotation.x=1.25+Math.sin(n)*.08*e}dispose(t){t.remove(this.group);for(let e of this.mats)e.dispose()}};var ec=1/120,sp=1.3,$v=16753951,ou=10820863,jv=5223679,Qv=4183752,rp=6951618,tM=11820272,eM={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo",roof:"Halatl\u0131 Platform",grid:"Karanl\u0131k Izgara",saw:"Testere Arenas\u0131",ship:"F\u0131rt\u0131nal\u0131 Gemi"},ap=["ice","meadow","dojo"],Ea=["duel","duel","roof","battle","saw","duel","boss","horse","ship","waves","roof","titan","titanwar"],wa={night:{name:"GECE",w:3,types:["duel","boss","roof","battle","saw","horse","ship","waves","titan","titanwar"]},giants:{name:"DEVLER",w:2,types:["duel","boss","roof","saw","ship","waves"]},dwarves:{name:"C\xDCCELER",w:2,types:["duel","roof","saw","ship","waves"]},dual:{name:"\xC7\u0130FT KILI\xC7LI D\xDC\u015EMAN",w:2,types:["duel","boss","roof","battle","saw","ship","waves"]},onehit:{name:"TEK VURU\u015E",w:.7,types:["duel","boss","roof","saw","ship","waves"]}},op=15,nM=4,lp=.8,iM=.12,cp=7.5,sM=60,rM=18,hp=["flyer","cav","foot","foot","flyer","cav","foot","flyer","foot","cav"],aM=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function oM(s){if(s%2)return"grid";let t=0;for(let e=2;e<s;e+=2){let n=dp(e);(n==="duel"||n==="boss")&&t++}return ap[t%ap.length]}function up(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ba=[Ea.slice()];function lM(s){for(;ba.length<=s;){let t=ba.length,e=up(9173+t*7919),n=ba[t-1][Ea.length-1],i;for(let r=0;r<200;r++){i=Ea.slice();for(let a=i.length-1;a>0;a--){let o=Math.floor(e()*(a+1));[i[a],i[o]]=[i[o],i[a]]}if(i.every((a,o)=>a!==(o?i[o-1]:n)))break}ba.push(i)}return ba[s]}function dp(s){let t=Ea.length,e=Math.floor((s-1)/t);return lM(e)[(s-1)%t]}function cM(s,t){if(s<op)return[];let e=up(s*2654435761),n=Math.min(.7,.4+.015*(s-op));if(e()>n)return[];let i=Object.keys(wa).filter(o=>wa[o].types.includes(t)),r=[],a=s>=40&&e()<.3?2:1;for(;r.length<a&&i.length;){let o=e()*i.reduce((h,f)=>h+wa[f].w,0),l=0;for(;l<i.length-1&&(o-=wa[i[l]].w)>0;)l++;let c=i.splice(l,1)[0];c==="giants"&&r.includes("dwarves")||c==="dwarves"&&r.includes("giants")||r.push(c)}return r}function lu(s){let t=hM(s);if(t.mutators=cM(s,t.type),t.mutators.includes("dwarves"))for(let e=0;e<2;e++)t.enemies.push("normal");return t}function hM(s){let t=dp(s),e=Math.floor((s-1)/Ea.length),n=pt((s-1)/24,0,1);if(t==="waves"){let o=[],l=Math.min(6,4+e);for(let c=0;c<l;c++){let h=[];for(let f=0;f<Math.min(7,2+c+Math.floor(e/2));f++)h.push("normal");c===l-1&&h.push("boss"),o.push(h)}return{type:t,env:"dojo",big:!1,skill:n*.85,boss:!1,enemies:o[0],waves:o}}if(t==="saw")return{type:t,env:"saw",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(5,3+e)).fill("normal")};if(t==="ship")return{type:t,env:"ship",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(5,2+e)).fill("normal")};if(t==="roof")return{type:t,env:"roof",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(4,2+e)).fill("normal")};if(t==="horse")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:new Array(Math.min(6,3+e)).fill("big")};if(t==="titan")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan"]};if(t==="titanwar")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan","titan","titan"],allies:["foot","flyer","foot","cav","foot","flyer","foot","cav"]};if(t==="battle"){let o=Math.min(24,14+3*e),l=Math.floor(o/4),c=[];for(let h=0;h<o;h++)c.push(h<l?"cav":"normal");return{type:t,env:"meadow",big:!0,skill:n*.8,boss:!1,enemies:c,allies:["cav","cav","foot","foot","foot"]}}let i=oM(s),r=t==="boss",a=[];if(r){a.push("boss");for(let o=0;o<e;o++)a.push("normal")}else{let o=Math.min(4,1+Math.floor((s-1)/4));for(let l=0;l<o;l++)a.push("normal")}return{type:t,env:i,big:!1,skill:n,boss:r,enemies:a}}var Fn=new L,uM=new L(0,1,0),hs={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},nc=class{constructor(){let t=document.getElementById("gl"),e=new Nl({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=Be,e.toneMapping=ta,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=ji,this.renderer=e,this.scene=new qi;let n=new nr(e);this.scene.environment=n.fromScene(new zl,.04).texture,this.scene.environmentIntensity=.85,this.camera=new ke(55,1,.1,900),this.world=new $l(this.scene),this.fx=new Zl(this.scene);let i=document.getElementById("ui");this.input=new jl(i),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new Ql(this,i),this.soundOn=!0,this.highQuality=Bh("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.horses=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new L,this.hintT=8,this.lastH=ec,this.lastAttackT=-9,this._bb={},this.titan=null,this.titans=[],this.allyRopes=[],this.hookSide=1,this.raycaster=new Qr,this.ropeMesh=new xt(new Ne(.025,.025,1,6).translate(0,.5,0),new Gt({color:2829104,roughness:.6})),this.ropeMesh.visible=!1,this.ropeMesh.frustumCulled=!1,this.scene.add(this.ropeMesh),this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(Bh("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=pt(2*Math.atan(Math.tan(fh.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,kh("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){kt.init(),kt.toggleMute(),this.soundOn=!kt.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),kl(t.swordMesh)),t.sword2Mesh&&(this.scene.remove(t.sword2Mesh),kl(t.sword2Mesh));for(let t of this.loose)this.scene.remove(t.mesh),kl(t.mesh);for(let t of this.horses)t.dispose(this.scene);this.horses=[],this.titan=null,this.titans=[],this.ropeMesh.visible=!1,this.chars=[],this.enemies=[],this.allies=[],this.goodGuys=[],this.loose=[],this.fx.clear()}addChar(t){let e=new ql(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),e.sword2Mesh&&this.scene.add(e.sword2Mesh),this.chars.push(e),e}startLevel(t){this.clearLevel(),this.level=t,kh("rk3dLevel",t);let e=lu(t);this.spec=e,this.world.set(e.env,e.big),this.fx.setDecalParent(this.world.env.plat||this.scene);let n=e.mutators||[];n.includes("night")&&this.world.applyNight(),this.oneHit=n.includes("onehit"),this.foeWaves=e.waves?e.waves.slice(1):null,this.foeWaveNo=1,this.foeWaveT=0,this.shipWaveT=W(9,13),this.shipWarned=!1,this.lightT=W(4,8),this.trapHit=new Map,this.tiltWarned=!1,this.titanHinted=!1;let i=e.type==="horse"||e.type==="battle";this.titanMode=e.type==="titan"||e.type==="titanwar",this.fx.quiet=this.titanMode;let r=e.type==="titan"?-30:e.type==="horse"?0:e.type==="battle"||e.type==="titanwar"?-22:-6;this.player=this.addChar({team:"player",x:0,z:r,yaw:0,hp:1,color:$v,speed:kf,bladeLen:i?Yl:va,dual:this.titanMode||e.type==="waves"}),i&&this.mountOn(this.player,10115635,3809812),this.goodGuys=[this.player];let a=e.enemies.length,o=Math.min(44,a*2.4);e.enemies.forEach((h,f)=>{let d={team:"enemy",hp:1,skill:e.skill,color:ou,yaw:Math.PI};if(h==="cav"||e.type==="battle"&&h==="normal"){let p=h==="cav",x=p?(f%2?1:-1)*W(17,26):(a>1?(f/(a-1)-.5)*o:0)+W(-1,1);Object.assign(d,{x,z:p?W(22,28):W(16,24),speed:rt(3.4,5.4,e.skill),bladeLen:p?Yl:va})}else if(h==="titan"){let p=a>1?f-(a-1)/2:0;Object.assign(d,{x:p*17,z:28+Math.abs(p)*5,scale:7,titan:!0,hp:1,speed:2.6,skill:.4+e.skill*.6,color:tM,bladeLen:Hf})}else if(h==="big"){let p=f/a*Math.PI*2+W(-.3,.3),x=W(16,28);Object.assign(d,{x:Math.sin(p)*x,z:Math.cos(p)*x,scale:1.6,speed:2.4,skill:e.skill*.5,heavy:!0})}else{let p=h==="boss";Object.assign(d,{x:(f-(a-1)/2)*2.6,z:6.5+f%2*1.2,hp:p?3:1,armored:p,scale:p?1.38:1,skill:p?e.skill*.5:e.skill,boss:p,color:p?rp:ou,speed:p?3.2:rt(3.4,5.4,e.skill)})}if(e.env==="ship"&&!d.titan&&(d.x=(f-(a-1)/2)*1.5,d.z=4.5+f%2*1.6),e.type==="waves"){let p=(a>1?f/(a-1)-.5:0)*2.2;d.x=Math.sin(p)*16,d.z=Math.cos(p)*16}this.mutate(d,h);let u=this.addChar(d);u.titan&&(this.titan=this.titan||u,this.titans.push(u),u.neckHp=nM,u.steamT=W(5,7)+f*1.7),h==="cav"&&this.mountOn(u,2827554,986123),this.enemies.push(u)}),(e.allies||[]).forEach((h,f)=>{let d=h==="cav",u=f%2?1:-1,p=e.type==="titanwar";this.spawnAlly(h,p?u*(2.5+Math.floor(f/2)*2.2)+W(-.5,.5):u*(d?W(6,9):W(2.5,5)),r+(p?W(-1,4):d?W(-2,0):W(1.5,4)))}),this.waveT=cp,this.waveI=0,this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t);let l=e.type==="titan"?"T\u0130TAN!":e.type==="titanwar"?`T\u0130TAN MUHAREBES\u0130! ${a} titan, ${this.allies.length} dost`:e.type==="battle"?`MUHAREBE! ${a} d\xFC\u015Fman`:e.type==="horse"?"At S\u0131rt\u0131nda":e.type==="waves"?`DALGA SAVUNMASI! ${e.waves.length} dalga`:e.boss?"BOSS!":eM[e.env];n.length&&(l+=" \xB7 "+n.map(h=>wa[h].name).join(" \xB7 ")),this.hud.show(`SEV\u0130YE ${t}`,l,n.length?2.6:1.8,e.boss||this.titanMode||e.type==="battle"||e.type==="waves"||n.length?"boss":""),(e.type!=="duel"&&e.type!=="boss"||e.env==="grid"||e.env==="ice")&&(this.hintT=Math.max(this.hintT,6));let c=e.type;kt.music(this.titanMode?"epic":c==="battle"||c==="horse"||c==="waves"?"war":c==="ship"?"sea":"samurai"),kt.ambience(e.env==="ship"?"sea":e.env==="ice"||e.env==="roof"?"wind":null),this.input.clear()}restartLevel(){this.startLevel(this.level)}mutate(t,e){let n=this.spec.mutators||[];t.titan||e==="cav"||(n.includes("giants")&&(t.scale=(t.scale||1)*1.5,t.speed=(t.speed||3)*.8),n.includes("dwarves")&&(t.scale=(t.scale||1)*.7,t.speed=(t.speed||3)*1.15),n.includes("dual")&&(t.dual=!0))}spawnWave(t){let e=this.spec,n=this.player,i=t.length,r=Math.atan2(-n.x,-n.z);t.forEach((a,o)=>{let l=a==="boss",c=r+(i>1?o/(i-1)-.5:0)*2.4+W(-.15,.15),h=17.5,f={team:"enemy",yaw:c+Math.PI,x:Math.sin(c)*h,z:Math.cos(c)*h,hp:l?3:1,armored:l,scale:l?1.38:1,boss:l,skill:l?e.skill*.5:e.skill,color:l?rp:ou,speed:l?3.2:rt(3.4,5.4,e.skill)};this.mutate(f,a);let d=this.addChar(f);d.state="approach",this.enemies.push(d)}),this.foeWaveNo++,this.foeWaveT=0,this.fx.popup(n.x,n.y+2.6,n.z,`DALGA ${this.foeWaveNo}/${e.waves.length}`,"#ffb347",26,1.4),kt.horn()}stepWaves(t){if(!this.foeWaves||!this.foeWaves.length||this.phase!=="play")return;this.foeWaveT+=t,(this.enemies.filter(n=>n.alive).length<=1||this.foeWaveT>22)&&this.spawnWave(this.foeWaves.shift())}trapHits(t){let e=this.world.traps;if(!e)return;let n=this.player;for(let i of e){if(!i.prev)continue;let r=Math.abs(Math.hypot(n.x-i.x,n.z-i.z)-i.r*.6);if(r<i.r+3&&i.k>.15&&kt.saw((1-r/(i.r+3))*i.k),!i.armed)continue;i.actor||(i.actor={isPlayer:!1,titan:!1,side:-1,team:"trap",x:i.x,z:i.z,swordMesh:null,curEp:null});let a=i.prev,o=i.cur;for(let l of this.chars){let c=l.x-i.x,h=l.z-i.z;if(l.alive&&Math.hypot(c,h)>i.r+1.2)continue;let f=i.x*1e3+i.z,d=this.trapHit.get(l)||{};if(this.time<(d[f]||0))continue;let u=l.rag.bounds(this._bb);if(u.y0>i.h+.2||u.y1<i.h-.2)continue;let p=Ol(l.rag,a,o,3);if(!p)continue;d[f]=this.time+.45,this.trapHit.set(l,d);let x=-(p.z-i.z),g=p.x-i.x,m=Math.hypot(x,g)||1,v=Math.sign(i.w)*9*i.k;i.actor.x=i.x,i.actor.z=i.z,this.onHit(i.actor,l,p,x/m*v,1,g/m*v),kt.slice()}}}shipEvents(t){let e=this.player;this.shipWaveT-=t,!this.shipWarned&&this.shipWaveT<1.6&&(this.shipWarned=!0,this.shipWaveDir=Math.random()<.5?-1:1,this.fx.popup(e.x,e.y+2.6,e.z,this.shipWaveDir>0?"B\xDCY\xDCK DALGA! (sol yana)":"B\xDCY\xDCK DALGA! (sa\u011F yana)","#9be7ff",24,1.5),kt.wave()),this.shipWaveT<=0&&(this.world.bigWave={t:0,dir:this.shipWaveDir},this.shipWaveT=W(11,17),this.shipWarned=!1,this.shake(.12)),this.lightT-=t,this.lightT<=0&&(this.lightT=W(6,12),this.world.flash(),kt.thunder())}spawnAlly(t,e,n){let i=this.spec.skill,r=t==="cav",a=t==="flyer",o=this.addChar({team:"ally",hp:1,color:a?Qv:jv,yaw:0,skill:Math.min(1,i+(a?.3:.2)),speed:rt(3.4,5.4,i),x:e,z:n,bladeLen:r?Yl:va,flyer:a,dual:a});return r&&this.mountOn(o,15260868,9071178),this.allies.push(o),this.goodGuys.push(o),o}allyWaves(t){if(this.time>sM+.5||this.phase!=="play"||(this.waveT-=t,this.waveT>0))return;this.waveT=cp;let e=this.allies.filter(c=>c.alive).length,n=Math.min(3,rM-e);if(n<=0)return;let i=this.player,r=this.titans.find(c=>c.alive)||i,a=i.x-r.x,o=i.z-r.z,l=Math.hypot(a,o)||1;a/=l,o/=l;for(let c=0;c<n;c++){let h=hp[this.waveI++%hp.length],f=h==="cav"?W(18,24):W(11,15),d=(c-1)*3+W(-.8,.8),u=i.x+a*f+o*d,p=i.z+o*f-a*d;if(!this.world.inside(u,p,3)){let x=(this.world.radius-6)/(Math.hypot(u,p)||1);u*=x,p*=x}this.spawnAlly(h,u,p)}i.alive&&this.fx.popup(i.x,i.y+2.6,i.z,`+${n} DOST GELD\u0130`,"#7cc8ff",18,1.1,!0)}allyHook(t,e){let n=e.rag,i=Math.random(),r=i<.5+.3*t.skill?O.NECK:i<.85?O.SPINE:is([O.LSH,O.RSH,O.PELVIS]);n.pts[r].attached||(r=O.NECK);let a=n.pts[r],o={x:a.x,y:a.y,z:a.z};t.rope={pt:o,pull:44,release:1.6,maxT:2.2,t:0,titan:!0,anchor(){let l=n.pts[r];return o.x=l.x,o.y=l.y,o.z=l.z,o},valid:()=>e.alive&&n.pts[r].attached},t.y<t.gy+.05&&(t.vy=Math.max(t.vy,4.5),t.y=t.gy+.03),this.near(t,14)&&kt.rope()}mountOn(t,e,n){let i=new tc(this.scene,t.x,t.z,t.yaw,{color:e,mane:n});return i.rider=t,t.mount=i,this.horses.push(i),i}hostilesOf(t){return t.side?this.goodGuys:this.enemies}matesOf(t){return t.side?this.enemies:this.goodGuys}jumpTo(t){let e=this.level;for(;lu(e).type!==t&&lu(e).env!==t;)e++;this.startLevel(e)}frame(t){this.highQuality&&this.time>3&&(this.perfT=(this.perfT||0)+t,this.perfN=(this.perfN||0)+1,this.perfT>3&&(this.perfSlow=this.perfT/this.perfN>1/35?(this.perfSlow||0)+1:0,this.perfT=0,this.perfN=0,this.perfSlow>=2&&(this.toggleQuality(),this.fx.popup(this.player.x,3,this.player.z,"Ak\u0131c\u0131l\u0131k i\xE7in grafik d\xFC\u015F\xFCr\xFCld\xFC","#fff",16,2.2,!0))));let e=this.input.taps;if(this.titanMode&&this.phase==="play"&&this.player.alive)for(let i of e)this.fireHook(i);e.length=0,this.slowT>0?(this.slowT-=t,this.timeScale=rt(this.timeScale,this.slowScale,un(40,t))):this.timeScale=rt(this.timeScale,1,un(6,t));let n=t*this.timeScale;if(n>1e-5){let i=Math.ceil(n/ec-1e-6),r=n/i;for(let a=0;a<i;a++)this.step(r)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.musicIntensity(),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t,this.world.setLoad(this.chars),this.world.step(t,this.player);for(let i of this.titans)i.alive&&(this.titanSteam(i,t),this.titanDodge(i));this.spec.type==="titanwar"&&this.allyWaves(t),this.foeWaves&&this.stepWaves(t),this.world.env.ship&&this.phase==="play"&&this.shipEvents(t);for(let i of this.horses){let r=i.rider;i.update(t,r&&r.alive?r.stickW:null,this.world),i.slip>.35&&Math.random()<t*30*i.slip&&this.fx.dust(i.x+W(-.5,.5),.05,i.z+W(-.8,.8),-i.vx*.15,-i.vz*.15),r===this.player&&i.slip>.55&&kt.skid();let a=Math.floor(i.phase/(Math.PI/2));if(a!==i._beat){i._beat=a;let o=Math.hypot(i.vx,i.vz),l=Math.hypot(i.x-this.player.x,i.z-this.player.z);o>1.5&&kt.hoof(Math.min(1,o/9)*Math.max(0,1-l/22))}}for(let i of this.titans)if(i.alive)for(let r of[O.LFOOT,O.RFOOT]){let a=i.rag.pts[r];if(!a.attached)continue;let o=a.y<i.gy+.9&&a.y-a.py<0,l=r===O.LFOOT?"_stepL":"_stepR";if(o&&!i[l]){let c=Math.hypot(i.x-this.player.x,i.z-this.player.z),h=Math.max(0,1-c/45);kt.titanStep(h),c<14&&this.shake(.05*(1-c/14))}i[l]=o}for(let i of this.chars)i.copyBlade(),i.update(t);this.separate();let e=this.world,n=this.lastH;for(let i of this.chars){let r=i.rag;r.step(t,n,e),!i.alive&&r.impact>6&&kt.thud(r.impact*250),r.impact=0;let a=r.pts[O.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),kt.splash())}for(let i of this.loose)i.step(t,n,e);this.combat(t),this.world.traps&&this.trapHits(t),this.fx.update(t,e),this.lastH=t}musicIntensity(){let t=this.player,e=0;if(this.phase==="play"&&t.alive){for(let n of this.enemies){if(!n.alive)continue;let i=Math.hypot(n.x-t.x,n.z-t.z);n.titan?e+=i<30?2.2:.6:i<9&&(e+=1-i/12)}e+=.7}kt.intensity(e/2.4)}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,i=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<i&&(i=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let i of this.enemies)i.alive&&i.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<rt(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars,e=this.world.ropes,n=this.horses;for(let i=0;i<n.length;i++)for(let r=i+1;r<n.length;r++){let a=n[i],o=n[r],l=o.x-a.x,c=o.z-a.z,h=Math.hypot(l,c),f=1.5;if(h<f&&h>1e-4){let d=(f-h)*.5,u=l/h,p=c/h;a.x-=u*d,a.z-=p*d,o.x+=u*d,o.z+=p*d}}for(let i=0;i<t.length;i++){let r=t[i];if(!(!r.alive||r.falling||r.mount||(r.isPlayer||r.flyer)&&r.y-r.gy>.5)){if(e)for(let a of e){if(!a.intact)continue;let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=.28*r.S+a.r;c<h&&c>1e-4&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}for(let a of n){let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l)||1,h=r.titan?1+.25*r.S:1+.3*r.S;c<h&&(r.titan?(a.x=r.x-o/c*h,a.z=r.z-l/c*h):(r.x=a.x+o/c*h,r.z=a.z+l/c*h))}for(let a=i+1;a<t.length;a++){let o=t[a];if(!o.alive||o.falling||o.mount||(o.isPlayer||o.flyer)&&o.y-o.gy>.5)continue;let l=o.x-r.x,c=o.z-r.z,h=Math.hypot(l,c),f=Math.min(r.S,o.S),d=Math.max(r.S,o.S),u=d>2*f?.34*f+.2*d:.34*(r.S+o.S);if(h<u&&h>1e-4){let p=u-h,x=l/h,g=c/h,m=p*o.S/(r.S+o.S),v=p*r.S/(r.S+o.S);this.world.inside(r.x-x*m,r.z-g*m,.3)&&(r.x-=x*m,r.z-=g*m),this.world.inside(o.x+x*v,o.z+g*v,.3)&&(o.x+=x*v,o.z+=g*v)}}}}}fireHook(t){let e=this.player,n=null,i=null;for(let a of this.titans){if(!a.alive||!t)continue;let o=this.pickTitan(a,t.x,t.y);o&&(!i||o.s<i.s)&&(i=o)}let r=this.camTarget&&this.camTarget.titan&&this.camTarget.alive?this.camTarget:this.titans.find(a=>a.alive);if(i){let a=i.t.rag,o=i.bone,l={x:i.x,y:i.y,z:i.z},c=i.t;n={pt:l,pull:48,release:1.6,maxT:2.2,t:0,titan:!0,valid:()=>c.alive,anchor(){if(o==="head"){let h=a.pts[O.HEAD];l.x=h.x,l.y=h.y,l.z=h.z}else if(a.bones.includes(o)){let h=a.pts[o.a],f=a.pts[o.b];l.x=rt(h.x,f.x,i.u),l.y=rt(h.y,f.y,i.u),l.z=rt(h.z,f.z,i.u)}return l}}}else{let a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),l=30;r&&r.alive&&(a=r.x-e.x,o=r.z-e.z,l=Math.hypot(a,o)||1,a/=l,o/=l),this.hookSide=-this.hookSide;let c=pt(l-8,5,18),h=6*this.hookSide,f={x:e.x+a*c+o*h,y:pt(e.y+7,10,16),z:e.z+o*c-a*h};n={pt:f,pull:24,release:4,maxT:1.2,t:0,anchor:()=>f}}e.rope=n,e.y<.05&&(e.vy=Math.max(e.vy,4.5),e.y=.03),kt.rope(),i&&kt.thunk()}pickTitan(t,e,n){let i=t.rag;this.raycaster.setFromCamera({x:e/this.W*2-1,y:-(n/this.H)*2+1},this.camera);let r=this.raycaster.ray.origin,a=this.raycaster.ray.direction,o=r.x+a.x*400,l=r.y+a.y*400,c=r.z+a.z*400,h=null,f=1/0;for(let p of i.bones){if(!p.vis)continue;let x=i.pts[p.a],g=i.pts[p.b];ss(r.x,r.y,r.z,o,l,c,x.x,x.y,x.z,g.x,g.y,g.z);let m=p.r*1.3+.6;ce.d2<m*m&&ce.s<f&&(f=ce.s,h={t,s:f,bone:p,u:ce.t,x:rt(x.x,g.x,ce.t),y:rt(x.y,g.y,ce.t),z:rt(x.z,g.z,ce.t)})}let d=i.pts[O.HEAD];ma(d.x,d.y,d.z,r.x,r.y,r.z,o,l,c);let u=i.d.headR*1.3+.6;return Dn.d2<u*u&&Dn.t<f&&(h={t,s:Dn.t,bone:"head",u:0,x:d.x,y:d.y,z:d.z}),h}titanSteam(t,e){let n=t.rag.pts[O.NECK],i=this.player,r=t.S,a=Math.sin(t.yaw),o=Math.cos(t.yaw),l=n.x-a*.12*r,c=n.y+.05*r,h=n.z-o*.12*r;if(t.steamT-=e,t.steamT<sp&&t.steamT>0){t.hissing||(t.hissing=!0,this.near(t,40)&&kt.hiss());let m=1-t.steamT/sp;Math.random()<e*(12+30*m)&&this.fx.steam(l+W(-.4,.4),c,h+W(-.4,.4),W(-1,1)-a*1.5,W(3,6),W(-1,1)-o*1.5,W(1.2,2)*(.7+.6*m),W(.7,1.1),.9)}for(let m of t.rag.pts)m.stump&&Math.random()<e*5&&this.fx.steam(m.x,m.y,m.z,W(-.4,.4),W(1,2),W(-.4,.4),W(.6,1.1),W(.8,1.3),.55);if(t.steamT>0)return;t.hissing=!1,t.steamT=W(6,9)*rt(1,.7,t.skill);for(let m=0;m<24;m++){let v=W(0,Math.PI*2),w=W(-.2,.9),y=W(8,17),S=Math.sqrt(1-w*w);this.fx.steam(l,c,h,Math.cos(v)*S*y,w*y+2,Math.sin(v)*S*y,W(2,3.3),W(.8,1.3),1)}for(let m=0;m<20;m++)this.fx.dust(l+W(-1.5,1.5),c+W(-1,1.5),h+W(-1.5,1.5),W(-9,9),W(-9,9));this.near(t,40)&&(kt.splash(),kt.hiss(!0));for(let m of this.allies){if(!m.alive)continue;let v=m.x-l,w=m.y+1-c,y=m.z-h,S=Math.hypot(v,w,y)||1;if(S>11)continue;let M=14*(1-S/14),R=Math.hypot(v,y)||1;m.vx+=v/R*M,m.vz+=y/R*M,m.kb=.5,m.rope&&(m.rope=null,m.vy=Math.max(m.vy,4))}if(!i.alive)return;let d=i.x-l,u=i.y+1-c,p=i.z-h,x=Math.hypot(d,u,p)||1;if(x>11)return;let g=16*(1-x/14);i.vx+=d/x*g,i.vz+=p/x*g,i.vy=Math.max(i.vy,5),i.y=Math.max(i.y,i.gy+.05),i.rope=null,i.kb=.5,this.fx.popup(i.x,i.y+2,i.z,"BUHAR!","#ffffff",26,1.1),this.shake(.2)}titanDodge(t){let e=t.swing;if(!(!e||e.dodged||e.t<e.wind-.05)){e.dodged=!0;for(let n of this.allies){if(!n.alive||n.stun>0||n.kb>0||n.mount)continue;let i=n.x-t.x,r=n.z-t.z;Math.hypot(i,r)>8||Math.random()>rt(.35,.7,n.skill)||(this.knock(n,i,r,9),n.vy=Math.max(n.vy,3.5))}}}knock(t,e,n,i){let r=Math.hypot(e,n)||1;t.vx+=e/r*i,t.vz+=n/r*i,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<rt(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.aimCtl){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null,t.bounceBlade(),t.isPlayer||(t.aimA=t.swYaw,t.plan=null,t.state==="attack"&&(t.state="fight",t.cool=W(.4,.9)));return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=rt(e.a0,e.a1,fa((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword2&&this.dropSword2(t,!1),t.hasSword=!1;let e=t.sw,n=this.h||ec,i={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(vn+t.bladeLen)*t.S;this.loose.push(new xa(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},i,r)),t.swordMesh=null}dropSword2(t,e){if(!t.hasSword2)return;t.hasSword2=!1;let n=e?t.sw:t.sw2,i=e?t.bCur:t.b2Cur,r=e?t.bPrev:t.b2Prev,a=this.h||ec,o={x:(i.bx-r.bx)/a,y:(i.by-r.by)/a,z:(i.bz-r.bz)/a},l=(vn+t.bladeLen)*t.S,c=e?t.swordMesh:t.sword2Mesh;this.loose.push(new xa(c,{x:n.gx,y:n.gy,z:n.gz},{x:n.dx,y:n.dy,z:n.dz},{x:n.wx,y:n.wy,z:n.wz},o,l)),e&&(t.swordMesh=t.sword2Mesh),t.sword2Mesh=null}combat(t){for(let e of this.chars)if(!(!e.alive||!e.swingActive))for(let n=0;n<(e.hasSword2?2:1);n++)this.bladeHits(e,n,t);this.poke()}bladeHits(t,e,n){let i=e?t.b2Prev:t.bPrev,r=e?t.b2Cur:t.bCur,a=Math.min(i.bx,i.tx,r.bx,r.tx)-.2,o=Math.max(i.bx,i.tx,r.bx,r.tx)+.2,l=Math.min(i.by,i.ty,r.by,r.ty)-.2,c=Math.max(i.by,i.ty,r.by,r.ty)+.2,h=Math.min(i.bz,i.tz,r.bz,r.tz)-.2,f=Math.max(i.bz,i.tz,r.bz,r.tz)+.2;this.world.ropes&&this.cutRopes(t,i,r,a,o,h,f);let d=t.titan?this.goodGuys:this.chars;for(let u of d){let p=t.curEp;if(!p||t.titan&&!t.swingActive)break;let x=e?p.hits2:p.hits,g=u.titan&&u.alive;if(u===t||!g&&x.has(u)||!t.isPlayer&&!u.alive||t.isPlayer&&!u.alive&&u.side===0)continue;let m=u.rag.bounds(this._bb);if(m.x1<a||m.x0>o||m.y1<l||m.y0>c||m.z1<h||m.z0>f)continue;if(u.alive&&u.hasSword&&!u.titan&&!t.titan&&!p.rolled.has(u)&&!(t.side===u.side&&this.spec.type==="titanwar")){let _=Gh(i,r,u.bCur,3,.05);if(_){if(u.swingActive){this.parry(t,u,_);break}if(p.rolled.add(u),Math.random()<(u.isPlayer?.4:rt(.15,.45,u.skill))){this.block(t,u,_);break}}}let v=g&&bf(u.rag,i,r,4)||Ol(u.rag,i,r,4);if(!v)continue;if(g){let _=v.head||v.zone?"neck":u.rag.bones[v.bone].kind;if(_==="torso"){if(p.thick||(p.thick=new Set),p.thick.has(u))continue;p.thick.add(u)}else{let E=u.rag.id*100+(_==="neck"?99:v.bone);if(x.has(E))continue;x.add(E)}}if(t.side!==u.side&&!u.isPlayer&&!u.titan&&u.alive&&u.hasSword&&u.stun<=0&&u.state!=="attack"&&u.state!=="panic"&&!p.rolled.has(u)&&(p.rolled.add(u),Math.random()<rt(.08,.45,u.skill))){u.blockT=.35,u.blockUx=p.ux,u.blockUy=p.uy,u.counterT=.3,this.block(t,u,v);break}g||x.add(u),v.blade=e;let w=rt(r.bx-i.bx,r.tx-i.tx,v.t)/n,y=rt(r.by-i.by,r.ty-i.ty,v.t)/n,S=rt(r.bz-i.bz,r.tz-i.tz,v.t)/n,M=Math.hypot(w,y,S)||1,R=pt(M,4,13);w=w/M*R,y=y/M*R,S=S/M*R,this.onHit(t,u,v,w,y,S)}}cutRopes(t,e,n,i,r,a,o){let l=this.world,c=this.h;for(let h of l.ropes){if(!h.intact||h.x<i-h.r||h.x>r+h.r||h.z<a-h.r||h.z>o+h.r)continue;let f=l.ground(h.x,h.z);hs.bx=h.x,hs.by=f,hs.bz=h.z,hs.tx=h.x,hs.ty=f+3.2,hs.tz=h.z;let d=Gh(e,n,hs,3,h.r+.03);d&&(l.cutRope(h,d.y-f,(n.tx-e.tx)/c,(n.tz-e.tz)/c),this.fx.sparks(d.x,d.y,d.z,16),this.fx.popup(d.x,d.y+.6,d.z,"HALAT KOPTU!","#ff7a5c",22,1.2),kt.twang(),this.shake(.14),this.slowmo(.15,.35),!this.tiltWarned&&l.tilt>.17&&(this.tiltWarned=!0,this.fx.popup(this.player.x,2.6,this.player.z,"PLATFORM YATIYOR!","#ffd23f",26,1.6)))}}poke(){for(let t of this.chars){if(!t.alive||!t.aimCtl||!t.hasSword||t.swingActive||t.pokeCd>0||t.y-t.gy>.3&&!t.mount)continue;let e=this.chars;for(let n of e){if(n===t||!n.alive||n.kb>0||n.titan)continue;let i=n.rag.bounds(this._bb),r=t.bCur;if(i.x1<Math.min(r.bx,r.tx)||i.x0>Math.max(r.bx,r.tx)||i.z1<Math.min(r.bz,r.tz)||i.z0>Math.max(r.bz,r.tz))continue;let a=Ol(n.rag,t.bPrev,t.bCur,2);if(a){if(t.isPlayer&&n.state==="panic"){this.fx.popup(n.x,2.3*n.S,n.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,n,a,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),n.alive&&this.killEnemy(n,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(n,t.sw.dx,t.sw.dz,t.isPlayer?2.4:n.isPlayer?1.8:1.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,kt.punch();break}}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let i of[t,e])i.stun=.35,i.isPlayer||(i.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),kt.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),kt.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,i=e.u;return e.head&&(n=t.boneWith(O.HEAD),n>=0&&(i=t.bones[n].b===O.HEAD?.7:.3)),n<0||t.bones[n].len<Hh*t.S?null:t.cut(n,i)}gore(t,e,n,i,r,a){let o=this.h,l=t.S>3;if(e){let c=t.comp[e.i1],h=t.comp[e.i2],f=t.compSize(c)<t.compSize(h)?c:h;if(t.addVel(i*.35,r*.35+2,a*.35,o,f),l){this.fx.spray(e.x,e.y,e.z,i,r,a,70,.6,9,!0),this.fx.spray(e.x,e.y,e.z,0,1,0,34,.9,7,!0);let d=e.kind==="neck",u={big:!0,rate:d?130:100,spd:2.6};this.fx.bleed(t,e.i1,d?W(9,12):W(5,8),u),this.fx.bleed(t,e.i2,d?W(9,12):W(5,8),u)}else this.fx.spray(e.x,e.y,e.z,i,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,W(1.2,2.2)),this.fx.bleed(t,e.i2,W(1.2,2.2));this.fx.sparks(e.x,e.y,e.z,5),kt.slice()}else if(l){this.fx.spray(n.x,n.y,n.z,i,r,a,24,.8,6,!0);let c=n.head?t.boneWith(O.HEAD):n.bone;c>=0&&this.fx.wound(t,c,n.head?.8:n.u,W(3,5),{rate:35,spd:1.6}),kt.wound()}else this.fx.spray(n.x,n.y,n.z,i,r,a,16,.7,3),kt.wound()}onHit(t,e,n,i,r,a){let o=e.rag,l=e.alive,c=t.side===e.side&&t!==e;if(c&&l&&Math.random()<.55&&(e.grudge=t,e.grudgeT=4),c&&l&&this.spec.type==="titanwar"){this.knock(e,e.x-t.x,e.z-t.z,3),this.time>(e.heyT||0)&&this.near(e)&&(e.heyT=this.time+2,this.fx.popup(e.x,2.2,e.z,"HEY!","#fff",16,.8));return}if(t.titan&&!e.isPlayer&&l&&this.cancelSwing(t),e.isPlayer&&l){this.hitPlayer(t,e,n,i,r,a);return}let h=n.head?"neck":o.bones[n.bone].kind,f=n.head||o.pts[o.bones[n.bone].a].attached,d=n.blade?"neckCd2":"neckCd",u=e.titan&&(e.neckHp>1||this.time<(e[d]||0)||this.time<(e.neckCutT||0)),p=e.titan&&!t.isPlayer&&Math.random()>iM,x=l&&(e.armored&&e.hp>1||e.titan&&(h==="torso"||h==="neck"&&(u||!t.isPlayer)||p)),g=o.pts,m=[O.LHAND,O.RHAND,O.LFOOT,O.RFOOT].map(S=>g[S].attached),v=x?null:this.applyCut(o,n),w=[O.LHAND,O.RHAND,O.LFOOT,O.RFOOT].some((S,M)=>m[M]&&!g[S].attached);e.titan||o.addVel(i*.2,r*.2+.6,a*.2,this.h),this.gore(o,v,n,i,r,a);let y=n.blade?t.sword2Mesh:t.swordMesh;if(y){let S=y.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),S.color.setRGB(rt(.89,.75,t.blood),rt(.91,.12,t.blood),rt(.93,.15,t.blood))}if(l){if(e.titan){f&&this.hitTitan(e,t,v&&v.kind==="neck"||w?v:null,h,i,r,a,d);return}if(v?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,i,a,3),this.fx.popup(e.x,2.3*e.S,e.z,c?"HEY!":`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,v,i,r,a)}}hitTitan(t,e,n,i,r,a,o,l="neckCd"){if(n&&n.kind==="neck"){this.killEnemy(t,e,n,r,a,o);return}t.flash=.15;let c=t.rag.pts[O.NECK].y+1;if(!e.isPlayer&&!n){if(i==="neck"&&e.flyer&&t.neckHp>1&&this.time>(t.neckCdAlly||0)){t.neckCdAlly=this.time+1.5,t.neckHp--,t.neckCutT=this.time+lp,t.stun=Math.max(t.stun,.3),this.near(t,30)&&(this.fx.popup(t.x,c,t.z,`DOST BOYNUNU YARDI! ${t.neckHp} darbe kald\u0131`,"#7cf0e0",22,1.3,!0),kt.slice());return}this.near(t,14)&&kt.thud(600);return}if(i==="neck"){if(this.time<(t[l]||0)||t.neckHp<=1)return;t[l]=this.time+.8,t.neckHp--,t.neckCutT=this.time+lp,t.stun=.6,t.state="stagger",this.cancelSwing(t),t.steamT=Math.min(t.steamT,1),this.fx.popup(t.x,c,t.z,`BOYUN! ${t.neckHp} darbe kald\u0131`,"#ffd23f",26,1.3,!0),this.slowmo(.2,.3),this.shake(.2),kt.slice();return}n?(n.kind==="arm"&&t.checkGrip(),t.stun=.35,t.state="stagger",this.cancelSwing(t),(e.isPlayer||this.near(t,25))&&this.fx.popup(t.x,c,t.z,n.kind==="leg"?"BACA\u011EI G\u0130TT\u0130!":"KOLU G\u0130TT\u0130!","#ffd23f",26,1.2),this.titanHinted||(this.titanHinted=!0,this.fx.popup(t.x,c-1.6,t.z,"\xD6lmedi! BOYNUNU kes","#fff",20,1.8)),this.slowmo(.15,.35),this.shake(.15)):(this.fx.popup(e.x,e.y+2.2,e.z,i==="torso"?"\xC7OK KALIN!":"SIYRIK","#fff",18,.8),kt.thud(900))}hitPlayer(t,e,n,i,r,a){if(e.invuln>0)return;let o=e.rag,l=n.head?"neck":o.bones[n.bone].kind;if(this.oneHit){let d=l==="torso"?null:this.applyCut(o,n);this.gore(o,d,n,i,r,a),this.hud.flash=.6,e.die(),o.addVel(i*.5,3,a*.5,this.h),this.lose("Tek vuru\u015F: bir darbe yetti.");return}this.hud.flash=.6,this.shake(.15),this.cancelSwing(e);let c=l==="torso"||t.titan&&l==="neck"?null:this.applyCut(o,n);if(!c&&t.titan){let d=[];o.bones.forEach((u,p)=>{(u.kind==="arm"||u.kind==="leg")&&o.pts[u.a].attached&&o.pts[u.b].attached&&u.len>Hh&&d.push(p)}),d.length&&(c=o.cut(is(d),.5))}o.addVel(i*.25,r*.2+1.2,a*.25,this.h),this.gore(o,c,n,i,r,a);let h=o.pts;if(c&&(c.kind==="neck"||!h[O.LHAND].attached&&!h[O.RHAND].attached)){e.die(),o.addVel(i*.5,3,a*.5,this.h),this.lose(c.kind==="neck"?"Kafan gitti.":"\u0130ki kolun da gitti.");return}if(e.hurtT=.3,e.invuln=c?.9:.6,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,t.titan?10:c?4:5),t.titan&&!e.mount&&(e.vy=7,e.y=Math.max(e.y,.05),e.rope=null),kt.hurt(),!c){this.slowmo(.12,.4);return}e.checkGrip();let f=2.1*e.S;c.kind==="arm"?this.fx.popup(e.x,f,e.z,"KOLUN G\u0130TT\u0130!","#ff5a6e",22,1.3):c.kind==="leg"&&this.fx.popup(e.x,f,e.z,e.legMask?"TEK AYAK!":"BACAKSIZ DEVAM!","#ff5a6e",22,1.3),this.slowmo(.25,.3)}near(t,e=12){let n=this.player;return!!n&&Math.hypot(t.x-n.x,t.z-n.z)<e}killEnemy(t,e,n,i,r,a){t.die();let o=this.h;t.titan?t.rag.addVel(i*.08,1,a*.08,o,t.rag.comp?t.rag.comp[O.PELVIS]:void 0):(t.rag.addVel(i*.45,r*.3+2.5,a*.45,o),t.rag.addSpin(W(-5,5),W(-3,3),W(-5,5),o));let l=2.2*t.S;if(t.titan&&(this.fx.popup(t.x,8,t.z,"BOYNU KES\u0130LD\u0130! T\u0130TAN D\xDC\u015ET\xDC!","#ffd23f",30,1.8),this.shake(.3)),!(!e||e.isPlayer||t.titan||this.near(t))){this.checkWin();return}n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"?this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2):n.kind==="arm"&&this.fx.popup(t.x,l,t.z,"KOL G\u0130TT\u0130!","#ffd23f",24,1.2));let h=e?e.curEp:null;h&&(h.kills++,h.kills>=2&&e.isPlayer&&this.fx.popup(e.x,2.6,e.z,h.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),e&&e.side===t.side&&!t.titan?this.fx.popup(t.x,l+.5,t.z,"DOST ATE\u015E\u0130!","#ff8ad8",24,1.3):t.team==="ally"&&this.fx.popup(t.x,l+.5,t.z,"DOSTUMUZ D\xDC\u015ET\xDC!","#7cc8ff",20,1.2),kt.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){if(this.phase==="play"&&!this.enemies.some(t=>t.alive)){if(this.foeWaves&&this.foeWaves.length){this.spawnWave(this.foeWaves.shift());return}this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",`Lv ${this.level} ge\xE7ildi`,2.6,"win"),kt.win()}}lose(t){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),kt.die(),this.hud.show("\xD6LD\xDCN",`${t||is(aM)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){if(!t.alive)return;t.die();let e=this.world.env,n=!!(e.roof||e.grid);this.fx.popup(t.x,t.gy+1.2,t.z,n?"A\u015EA\u011EI D\xDC\u015ET\xDC!":"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?this.lose(e.roof?"Platformdan d\xFC\u015Ft\xFCn.":e.grid?"Bo\u015Flu\u011Fa d\xFC\u015Ft\xFCn.":"Suya d\xFC\u015Ft\xFCn."):(kt.combo(5),this.checkWin())}updateCamera(t,e){let n=this.player,i=n.rag.pts[O.PELVIS],r=n.alive?n.x:i.x,a=n.alive?n.z:i.z,o=this.spec.type,l=n.alive?n.y:Math.max(n.gy,i.y-.8),c=this.camTarget;if(this.titanMode){let S=null,M=1/0;for(let R of this.titans){if(!R.alive)continue;let _=Math.hypot(R.x-r,R.z-a);_<M&&(M=_,S=R)}(!c||!c.alive||!c.titan||S&&S!==c&&M<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}else if(o==="horse")c=null;else if(o==="battle"){let S=n.alive?this.nearestEnemy(n,24):null;(!c||!c.alive||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}else{let S=n.alive?this.nearestEnemy(n,14):null;(!c||!c.alive||c.state==="panic"&&S&&S.state!=="panic"||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}this.camTarget=c;let h=this.camYaw;c&&n.alive?h=Math.atan2(c.x-r,c.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?h=n.yaw:n.alive||(h=this.camYaw+t*.3);let f=c&&Math.hypot(c.x-r,c.z-a)<2.4*c.S,d=o==="battle"?c?1:1.8:o==="horse"?1.8:f?.6:c?2.5:1.2;this.camYaw=e?h:this.camYaw+sn(h-this.camYaw)*un(d,t);let u=this.H>this.W,p=u?4:4.1,x=u?3.5:2.6,g=1.9,m=u?.55:.8;o==="horse"&&(p=u?6.8:6.2,x=u?5.2:4.2,g=3.5,m=1.2),o==="battle"&&(p=u?8.5:7.5,x=u?6.5:5.2,g=5,m=1.2),this.titanMode&&(p=u?9.5:8.5,x=u?4.5:3.6,g=7,m=3+l*.5);let v=Math.sin(this.camYaw),w=Math.cos(this.camYaw);Fn.set(r-v*p,x+l*(this.titanMode?.85:1),a-w*p),e?this.camera.position.copy(Fn):this.camera.position.lerp(Fn,un(7,t));let y=Fn.set(r+v*g,m+(this.titanMode?l*.5:o==="horse"||o==="battle"?0:l),a+w*g);e?this.lookAt.copy(y):this.lookAt.lerp(y,un(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}updateRope(){this.placeRope(this.ropeMesh,this.player);let t=0;for(let e of this.allies)if(!(!e.flyer||!e.alive||!e.rope)){if(t>=this.allyRopes.length){let n=new xt(this.ropeMesh.geometry,this.ropeMesh.material);n.frustumCulled=!1,this.scene.add(n),this.allyRopes.push(n)}this.placeRope(this.allyRopes[t++],e)}for(;t<this.allyRopes.length;t++)this.allyRopes[t].visible=!1}placeRope(t,e){let n=e.alive?e.rope:null;if(!n){t.visible=!1;return}let i=n.anchor(),r=e.rag.pts[O.NECK];Fn.set(i.x-r.x,i.y-r.y,i.z-r.z);let a=Fn.length()||.001;t.visible=!0,t.position.set(r.x,r.y,r.z),t.scale.set(1,a,1),t.quaternion.setFromUnitVectors(uM,Fn.multiplyScalar(1/a))}project(t,e,n){return Fn.set(t,e,n).project(this.camera),Fn.z>1?null:{x:(Fn.x+1)/2*this.W,y:(1-Fn.y)/2*this.H}}render(t){for(let i of this.chars)if(i.view.update(t),i.alive&&i.hasSword&&i.swordMesh){let r=i.sw;if(Hl(i.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz),i.hasSword2&&i.sword2Mesh){let a=i.sw2;Hl(i.sword2Mesh,a.gx,a.gy,a.gz,a.dx,a.dy,a.dz,a.wx,a.wy,a.wz)}}for(let i of this.loose)i.render();for(let i of this.horses)i.render();this.updateRope(),this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[O.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT,this.player,this.spec.env==="grid"||this.spec.env==="ice"?this.spec.env:this.spec.type)}};function dM(s){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(s)}var ic=null;try{ic=new nc}catch(s){dM(s)}if(ic){window.game=ic;let s=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-s)/1e3));s=e,document.hidden||ic.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t),document.addEventListener("visibilitychange",()=>{document.hidden?kt.suspend():(kt.resume(),s=performance.now())})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
