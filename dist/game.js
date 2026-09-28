(()=>{var Du=0,Rc=1,Nu=2;var Wi=1,Uu=2,Os=3,bi=0,De=1,on=2,kn=0,zs=1,Cc=2,Ic=3,Pc=4,Fu=5;var Xi=100,Ou=101,zu=102,Bu=103,ku=104,Hu=200,Vu=201,Gu=202,Wu=203,Lc=204,Dc=205,Xu=206,qu=207,Yu=208,Zu=209,Ku=210,Ju=211,$u=212,ju=213,Qu=214,Va=0,Ga=1,Wa=2,vs=3,Xa=4,qa=5,Ya=6,Za=7,Eo=0,td=1,ed=2,bn=0,Nc=1,Uc=2,Fc=3,Xr=4,Oc=5,zc=6,Bc=7;var kc=300,wi=301,qi=302,To=303,Ao=304,qr=306,Qn=1e3,Dn=1001,Ka=1002,Oe=1003,nd=1004;var Yr=1005;var ke=1006,Ro=1007;var Ei=1008;var je=1009,Hc=1010,Vc=1011,Bs=1012,Co=1013,wn=1014,dn=1015,En=1016,Io=1017,Po=1018,ks=1020,Gc=35902,Wc=35899,Xc=1021,qc=1022,fn=1023,Un=1026,Ti=1027,Lo=1028,Do=1029,Ai=1030,No=1031;var Uo=1033,Zr=33776,Kr=33777,Jr=33778,$r=33779,Fo=35840,Oo=35841,zo=35842,Bo=35843,ko=36196,Ho=37492,Vo=37496,Go=37488,Wo=37489,jr=37490,Xo=37491,qo=37808,Yo=37809,Zo=37810,Ko=37811,Jo=37812,$o=37813,jo=37814,Qo=37815,tl=37816,el=37817,nl=37818,il=37819,sl=37820,rl=37821,al=36492,ol=36494,ll=36495,cl=36283,hl=36284,Qr=36285,ul=36286;var dr=2300,Ja=2301,ka=2302,pc=2303,mc=2400,gc=2401,xc=2402;var id=3200;var ta=0,sd=1,si="",ze="srgb",fr="srgb-linear",pr="linear",de="srgb";var Ha=7680;var rd=519,ad=512,od=513,ld=514,dl=515,cd=516,hd=517,fl=518,ud=519,Yc=35044,Hs=35048;var Zc="300 es",vn=2e3,Ms=2001;function Gf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){let i=mr("canvas");return i.style.display="block",i}var $h={},Ss=null;function gr(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function fd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=fd(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=fd(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Bi(...i){let t=i.join(" ");t in $h||($h[t]=!0,Gt(...i))}function pd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var md={[Va]:Ga,[Wa]:Ya,[Xa]:Za,[vs]:qa,[Ga]:Va,[Ya]:Wa,[Za]:Xa,[qa]:vs},Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,lr=Math.PI/180,bs=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Xf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qf(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Yf(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Zf(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function Kf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $f(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jf(i,t){return i+Math.random()*(t-i)}function Qf(i){return i*(.5-Math.random())}function tp(i){i!==void 0&&(jh=i);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(i){return i*lr}function np(i){return i*bs}function ip(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function sp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ap(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*d,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jc={DEG2RAD:lr,RAD2DEG:bs,generateUUID:Nn,clamp:jt,euclideanModulo:Kc,mapLinear:Xf,inverseLerp:qf,lerp:cr,damp:Yf,pingpong:Zf,smoothstep:Kf,smootherstep:Jf,randInt:$f,randFloat:jf,randFloatSpread:Qf,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:ip,ceilPowerOfTwo:sp,floorPowerOfTwo:rp,setQuaternionFromProperEuler:ap,normalize:pe,denormalize:yn},nh=class nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;var at=nh,Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==u||c!==d||h!==p){let g=l*u+c*d+h*p+f*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),S=Math.sin(M);m=Math.sin(m*M)/S,o=Math.sin(o*M)/S,l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+p*o,f=f*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var I=ih,Gl=new I,Qh=new Je,sh=class sh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],x=s[0],g=s[3],m=s[6],M=s[1],S=s[4],_=s[7],b=s[2],w=s[5],A=s[8];return r[0]=a*x+o*M+l*b,r[3]=a*g+o*S+l*w,r[6]=a*m+o*_+l*A,r[1]=c*x+h*M+f*b,r[4]=c*g+h*S+f*w,r[7]=c*m+h*_+f*A,r[2]=u*x+d*M+p*b,r[5]=u*g+d*S+p*w,r[8]=u*m+d*_+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var Yt=sh,Wl=new Yt,tu=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function op(){let i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:de,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var se=op();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=mr("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},lp=0,ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var cp=0,ql=new I,Ze=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=ke,a=Ei,o=fn,l=je,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Nn(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=kc;Ze.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,_=(d+1)/2,b=(m+1)/2,w=(h+u)/4,A=(f+x)/4,y=(p+g)/4;return S>_&&S>b?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):_>b?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var we=rh,ja=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qa=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wo=class wo{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u+x*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,x=c*f;e[0]=u-x*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-x*f}else if(t.order==="XZY"){let u=a*l,d=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hp,t,up)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ui.crossVectors(n,nn),ui.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ui.crossVectors(n,nn)),ui.normalize(),fa.crossVectors(nn,ui),s[0]=ui.x,s[4]=fa.x,s[8]=nn.x,s[1]=ui.y,s[5]=fa.y,s[9]=nn.y,s[2]=ui.z,s[6]=fa.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],S=n[7],_=n[11],b=n[15],w=s[0],A=s[4],y=s[8],T=s[12],R=s[1],P=s[5],D=s[9],z=s[13],L=s[2],O=s[6],W=s[10],k=s[14],st=s[3],Y=s[7],Q=s[11],nt=s[15];return r[0]=a*w+o*R+l*L+c*st,r[4]=a*A+o*P+l*O+c*Y,r[8]=a*y+o*D+l*W+c*Q,r[12]=a*T+o*z+l*k+c*nt,r[1]=h*w+f*R+u*L+d*st,r[5]=h*A+f*P+u*O+d*Y,r[9]=h*y+f*D+u*W+d*Q,r[13]=h*T+f*z+u*k+d*nt,r[2]=p*w+x*R+g*L+m*st,r[6]=p*A+x*P+g*O+m*Y,r[10]=p*y+x*D+g*W+m*Q,r[14]=p*T+x*z+g*k+m*nt,r[3]=M*w+S*R+_*L+b*st,r[7]=M*A+S*P+_*O+b*Y,r[11]=M*y+S*D+_*W+b*Q,r[15]=M*T+S*z+_*k+b*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*d-c*u,S=o*d-c*f,_=o*u-l*f,b=a*d-c*h,w=a*u-l*h,A=a*f-o*h;return e*(x*M-g*S+m*_)-n*(p*M-g*b+m*w)+s*(p*S-x*b+m*A)-r*(p*_-x*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*o-n*a,S=e*l-s*a,_=e*c-r*a,b=n*l-s*o,w=n*c-r*o,A=s*c-r*l,y=h*x-f*p,T=h*g-u*p,R=h*m-d*p,P=f*g-u*x,D=f*m-d*x,z=u*m-d*g,L=M*z-S*D+_*P+b*R-w*T+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*z-l*D+c*P)*O,t[1]=(s*D-n*z-r*P)*O,t[2]=(x*A-g*w+m*b)*O,t[3]=(u*w-f*A-d*b)*O,t[4]=(l*R-a*z-c*T)*O,t[5]=(e*z-s*R+r*T)*O,t[6]=(g*_-p*A-m*S)*O,t[7]=(h*A-u*_+d*S)*O,t[8]=(a*D-o*R+c*y)*O,t[9]=(n*R-e*D-r*y)*O,t[10]=(p*w-x*_+m*M)*O,t[11]=(f*_-h*w-d*M)*O,t[12]=(o*T-a*P-l*y)*O,t[13]=(e*P-n*T+s*y)*O,t[14]=(x*S-p*b-g*M)*O,t[15]=(h*b-f*S+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,x=a*h,g=a*f,m=o*f,M=l*c,S=l*h,_=l*f,b=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*b,s[1]=(d+_)*b,s[2]=(p-S)*b,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(u+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(p+S)*A,s[9]=(g-M)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,f=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===vn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===vn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wo.prototype.isMatrix4=!0;var te=wo,ns=new I,mn=new te,hp=new I(0,0,0),up=new I(1,1,1),ui=new I,fa=new I,nn=new I,nu=new te,iu=new Je,On=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},dp=0,su=new I,is=new Je,qn=new te,pa=new I,js=new I,fp=new I,pp=new Je,ru=new I(1,0,0),au=new I(0,1,0),ou=new I(0,0,1),lu={type:"added"},mp={type:"removed"},ss={type:"childadded",child:null},Yl={type:"childremoved",child:null},Pe=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new On,n=new Je,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Yt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(js,pa,this.up):qn.lookAt(pa,js,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(qn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),ss.child=t,this.dispatchEvent(ss),ss.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mp),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,pp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new I(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var me=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},gp={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Kc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zl(a,r,t+1/3),this.g=Zl(a,r,t),this.b=Zl(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return se.workingToColorSpace(Ge.copy(this),t),Math.round(jt(Ge.r*255,0,255))*65536+Math.round(jt(Ge.g*255,0,255))*256+Math.round(jt(Ge.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ze){se.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(ma);let n=cr(di.h,ma.h,e),s=cr(di.s,ma.s,e),r=cr(di.l,ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new zt;zt.NAMES=gd;var _r=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ki=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new I,Yn=new I,Kl=new I,Zn=new I,rs=new I,as=new I,cu=new I,Jl=new I,$l=new I,jl=new I,Ql=new we,tc=new we,ec=new we,$n=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Yn.subVectors(n,e),Kl.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(Yn),l=gn.dot(Kl),c=Yn.dot(Yn),h=Yn.dot(Kl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ql.setScalar(0),tc.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ql,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(ec,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Yn.subVectors(t,e),gn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),gn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),Jl.subVectors(t,n);let l=rs.dot(Jl),c=as.dot(Jl);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,s);let h=rs.dot($l),f=as.dot($l);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);jl.subVectors(t,r);let d=rs.dot(jl),p=as.dot(jl);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(as,o);let g=h*p-d*f;if(g<=0&&f-h>=0&&d-p>=0)return cu.subVectors(r,s),o=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(cu,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),xa.subVectors(this.max,Qs),os.subVectors(t.a,Qs),ls.subVectors(t.b,Qs),cs.subVectors(t.c,Qs),fi.subVectors(ls,os),pi.subVectors(cs,ls),Ni.subVectors(os,cs);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ni.z,Ni.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ni.z,0,-Ni.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ni.y,Ni.x,0];return!nc(e,os,ls,cs,xa)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,os,ls,cs,xa))?!1:(_a.crossVectors(fi,pi),e=[_a.x,_a.y,_a.z],nc(e,os,ls,cs,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Kn=[new I,new I,new I,new I,new I,new I,new I,new I],xn=new I,ga=new zn,os=new I,ls=new I,cs=new I,fi=new I,pi=new I,Ni=new I,Qs=new I,xa=new I,_a=new I,Ui=new I;function nc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ie=new I,ya=new at,xp=0,Te=class extends Fn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ya.fromBufferAttribute(this,e),ya.applyMatrix3(t),this.setXY(e,ya.x,ya.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yr=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},_p=new zn,tr=new I,ic=new I,ti=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_p.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ic)),this.expandByPoint(tr.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yp=0,hn=new te,sc=new Pe,hs=new I,sn=new zn,er=new zn,Fe=new I,ye=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gf(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return sc.lookAt(t),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(sn.min,er.min),sn.expandByPoint(Fe),Fe.addVectors(sn.max,er.max),sn.expandByPoint(Fe)):(sn.expandByPoint(er.min),sn.expandByPoint(er.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Fe.add(hs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new I,l[y]=new I;let c=new I,h=new I,f=new I,u=new at,d=new at,p=new at,x=new I,g=new I;function m(y,T,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),f.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),o[y].add(x),o[T].add(x),o[R].add(x),l[y].add(g),l[T].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,T=M.length;y<T;++y){let R=M[y],P=R.start,D=R.count;for(let z=P,L=P+D;z<L;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new I,_=new I,b=new I,w=new I;function A(y){b.fromBufferAttribute(s,y),w.copy(b);let T=o[y];S.copy(T),S.sub(b.multiplyScalar(b.dot(T))).normalize(),_.crossVectors(w,T);let P=_.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,P)}for(let y=0,T=M.length;y<T;++y){let R=M[y],P=R.start,D=R.count;for(let z=P,L=P+D;z<L;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,f=new I;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[d++]}return new Te(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ye=new I,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rc=new I,vp=new I,Mp=new Yt,_n=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rc.subVectors(n,e).cross(vp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mp.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sp=0,Mn=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=zs,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},gi=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,nr=new I,ds=new I,fs=new I,ps=new at,ir=new at,xd=new te,va=new I,sr=new I,Ma=new I,hu=new at,ac=new at,uu=new at,Hi=class extends Pe{constructor(t=new gi){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mr(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new As(n,3,0,!1)),us.setAttribute("uv",new As(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new at(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),xd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Sa(va.set(-.5,-.5,0),fs,a,ds,s,r),Sa(sr.set(.5,-.5,0),fs,a,ds,s,r),Sa(Ma.set(.5,.5,0),fs,a,ds,s,r),hu.set(0,0),ac.set(1,0),uu.set(1,1);let o=t.ray.intersectTriangle(va,sr,Ma,!1,nr);if(o===null&&(Sa(sr.set(-.5,.5,0),fs,a,ds,s,r),ac.set(0,1),o=t.ray.intersectTriangle(va,Ma,sr,!1,nr),o===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:$n.getInterpolation(nr,va,sr,Ma,hu,ac,uu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Sa(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*ps.x-s*ps.y,ir.y=s*ps.x+r*ps.y):ir.copy(ps),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(xd)}var Jn=new I,oc=new I,ba=new I,wa=new I,Rs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),ba.copy(e).sub(t).normalize(),wa.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ba),o=wa.dot(this.direction),l=-wa.dot(ba),c=wa.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(oc).addScaledVector(ba,u),d}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,M=n.y-a.y,S=n.z-a.z,_=Math.abs(l),b=Math.abs(c),w=Math.abs(h),A,y,T,R,P,D,z,L,O,W,k,st;if(_>=b&&_>=w?(T=l,D=f,O=p,st=m,l>=0?(A=c,y=h,R=u,P=d,z=x,L=g,W=M,k=S):(A=h,y=c,R=d,P=u,z=g,L=x,W=S,k=M)):b>=w?(T=c,D=u,O=x,st=M,c>=0?(A=h,y=l,R=d,P=f,z=g,L=p,W=S,k=m):(A=l,y=h,R=f,P=d,z=p,L=g,W=m,k=S)):(T=h,D=d,O=g,st=S,h>=0?(A=l,y=c,R=f,P=u,z=p,L=x,W=m,k=M):(A=c,y=l,R=u,P=f,z=x,L=p,W=M,k=m)),T===0)return null;let Y=A/T,Q=y/T,nt=1/T,Nt=R-Y*D,At=P-Q*D,le=z-Y*O,ee=L-Q*O,ae=W-Y*st,J=k-Q*st,tt=ae*ee-J*le,vt=Nt*J-At*ae,Wt=le*At-ee*Nt;if(s){if(tt<0||vt<0||Wt<0)return null}else if((tt<0||vt<0||Wt<0)&&(tt>0||vt>0||Wt>0))return null;let wt=tt+vt+Wt;if(wt===0)return null;let Xt=nt*(tt*D+vt*O+Wt*st);return(wt>0?Xt<0:Xt>0)?null:this.at(Xt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ei=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},du=new te,Fi=new Rs,Ea=new ti,fu=new I,Ta=new I,Aa=new I,Ra=new I,lc=new I,Ca=new I,pu=new I,Ia=new I,Pt=class extends Pe{constructor(t=new ye,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(lc.fromBufferAttribute(f,t),a?Ca.addScaledVector(lc,h):Ca.addScaledVector(lc.sub(e),h))}e.add(Ca)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(Ea.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(Ea,fu)===null||Fi.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(du.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,b=S;_<b;_+=3){let w=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Pa(this,m,t,n,c,h,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);s=Pa(this,a,t,n,c,h,f,M,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,b=S;_<b;_+=3){let w=_,A=_+1,y=_+2;s=Pa(this,m,t,n,c,h,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let M=g,S=g+1,_=g+2;s=Pa(this,a,t,n,c,h,f,M,S,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function bp(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;Ia.copy(o),Ia.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:i}}function Pa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ta),i.getVertexPosition(l,Aa),i.getVertexPosition(c,Ra);let h=bp(i,t,e,n,Ta,Aa,Ra,pu);if(h){let f=new I;$n.getBarycoord(pu,Ta,Aa,Ra,f),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,f,new at)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,f,new at)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};$n.getNormal(Ta,Aa,Ra,u.normal),h.face=u,h.barycoord=f}return h}var Sr=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Oe,h=Oe,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new te,mu=new te,La=[],gu=new zn,wp=new te,rr=new Pt,ar=new ti,Bn=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),gu.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ti),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),ar.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),mu.multiplyMatrices(n,ms),rr.matrixWorld=mu,rr.raycast(t,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,e.push(l)}La.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(s*this.count),s,this.count,Lo,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Oi=new ti,Ep=new at(.5,.5),Da=new I,Is=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],S=r[13],_=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,m-p,b-M).normalize(),s[1].setComponents(c+a,d+h,m+p,b+M).normalize(),s[2].setComponents(c+o,d+f,m+x,b+S).normalize(),s[3].setComponents(c-o,d-f,m-x,b-S).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,d-u,m-g,b-_).normalize();else if(s[4].setComponents(c-l,d-u,m-g,b-_).normalize(),e===vn)s[5].setComponents(c+l,d+u,m+g,b+_).normalize();else if(e===Ms)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=Ep.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ni=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xu=new te,_c=new Rs,Na=new ti,Ua=new I,br=class extends Pe{constructor(t=new ye,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Na.copy(n.boundingSphere),Na.applyMatrix4(s),Na.radius+=r,t.ray.intersectsSphere(Na)===!1)return;xu.copy(s).invert(),_c.copy(t.ray).applyMatrix4(xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++){let g=c.getX(p);Ua.fromBufferAttribute(f,g),_u(Ua,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,x=d;p<x;p++)Ua.fromBufferAttribute(f,p),_u(Ua,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _u(i,t,e,n,s,r,a){let o=_c.distanceSqToPoint(i);if(o<e){let l=new I;_c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wr=class extends Ze{constructor(t=[],e=wi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vi=class extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends Ze{constructor(t,e,n=wn,s,r,a,o=Oe,l=Oe,c,h=Un,f=1){if(h!==Un&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},to=class extends xi{constructor(t,e=wn,n=wi,s,r,a=Oe,o=Oe,l,c=Un){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Er=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Le=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(f,2));function p(x,g,m,M,S,_,b,w,A,y,T){let R=_/A,P=b/y,D=_/2,z=b/2,L=w/2,O=A+1,W=y+1,k=0,st=0,Y=new I;for(let Q=0;Q<W;Q++){let nt=Q*P-z;for(let Nt=0;Nt<O;Nt++){let At=Nt*R-D;Y[x]=At*M,Y[g]=nt*S,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Nt/A),f.push(1-Q/y),k+=1}}for(let Q=0;Q<y;Q++)for(let nt=0;nt<A;nt++){let Nt=u+nt+O*Q,At=u+nt+O*(Q+1),le=u+(nt+1)+O*(Q+1),ee=u+(nt+1)+O*Q;l.push(Nt,At,ee),l.push(At,le,ee),st+=6}o.addGroup(d,st,T),d+=st,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ii=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,p=n*2+r,x=s+1,g=new I,m=new I;for(let M=0;M<=p;M++){let S=0,_=0,b=0,w=0;if(M<=n){let T=M/n,R=T*Math.PI/2;_=-h-t*Math.cos(R),b=t*Math.sin(R),w=-t*Math.cos(R),S=T*f}else if(M<=n+r){let T=(M-n)/r;_=-h+T*e,b=t,w=0,S=f+T*u}else{let T=(M-n-r)/n,R=T*Math.PI/2;_=h+t*Math.sin(R),b=t*Math.cos(R),w=t*Math.sin(R),S=f+u+T*f}let A=Math.max(0,Math.min(1,S/d)),y=0;M===0?y=.5/s:M===p&&(y=-.5/s);for(let T=0;T<=s;T++){let R=T/s,P=R*Math.PI*2,D=Math.sin(P),z=Math.cos(P);m.x=-b*z,m.y=_,m.z=b*D,o.push(m.x,m.y,m.z),g.set(-b*z,w,b*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+y,A)}if(M>0){let T=(M-1)*x;for(let R=0;R<s;R++){let P=T+R,D=T+R+1,z=M*x+R,L=M*x+R+1;a.push(P,D,z),a.push(D,L,z)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tr=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new at;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,x=[],g=n/2,m=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(d,2));function M(){let _=new I,b=new I,w=0,A=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,P=R*(e-t)+t;for(let D=0;D<=s;D++){let z=D/s,L=z*l+o,O=Math.sin(L),W=Math.cos(L);b.x=P*O,b.y=-R*n+g,b.z=P*W,f.push(b.x,b.y,b.z),_.set(O,A,W).normalize(),u.push(_.x,_.y,_.z),d.push(z,1-R),T.push(p++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=x[T][y],P=x[T+1][y],D=x[T+1][y+1],z=x[T][y+1];(t>0||T!==0)&&(h.push(R,P,z),w+=3),(e>0||T!==r-1)&&(h.push(P,D,z),w+=3)}c.addGroup(m,w,0),m+=w}function S(_){let b=p,w=new at,A=new I,y=0,T=_===!0?t:e,R=_===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let D=0;D<=s;D++){let L=D/s*l+o,O=Math.cos(L),W=Math.sin(L);A.x=T*W,A.y=g*R,A.z=T*O,f.push(A.x,A.y,A.z),u.push(0,R,0),w.x=O*.5+.5,w.y=W*.5*R+.5,d.push(w.x,w.y),p++}for(let D=0;D<s;D++){let z=b+D,L=P+D;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),y+=3}c.addGroup(m,y,_===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_i=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},eo=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let S=new I,_=new I,b=new I;for(let w=0;w<e.length;w+=3)d(e[w+0],S),d(e[w+1],_),d(e[w+2],b),l(S,_,b,M)}function l(M,S,_,b){let w=b+1,A=[];for(let y=0;y<=w;y++){A[y]=[];let T=M.clone().lerp(_,y/w),R=S.clone().lerp(_,y/w),P=w-y;for(let D=0;D<=P;D++)D===0&&y===w?A[y][D]=T:A[y][D]=T.clone().lerp(R,D/P)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function c(M){let S=new I;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(M),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){let M=new I;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];let _=g(M)/2/Math.PI+.5,b=m(M)/Math.PI+.5;a.push(_,1-b)}p(),f()}function f(){for(let M=0;M<a.length;M+=6){let S=a[M+0],_=a[M+2],b=a[M+4],w=Math.max(S,_,b),A=Math.min(S,_,b);w>.9&&A<.1&&(S<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),b<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,S){let _=M*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function p(){let M=new I,S=new I,_=new I,b=new I,w=new at,A=new at,y=new at;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),b.copy(M).add(S).add(_).divideScalar(3);let P=g(b);x(w,R+0,M,P),x(A,R+2,S,P),x(y,R+4,_,P)}}function x(M,S,_,b){b<0&&M.x===1&&(a[S]=M.x-1),_.x===0&&_.z===0&&(a[S]=b/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Ps=class i extends eo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new te;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(jt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ls=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},no=class extends Ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var yu=new I,vu=new I,cc=new $c,hc=new $c,uc=new $c,io=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(vu.subVectors(s[0],s[1]).add(s[0]),c=vu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),cc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,x,g),hc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,x,g),uc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),hc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),uc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(cc.calc(l),hc.calc(l),uc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Tp(i,t){let e=1-i;return e*e*t}function Ap(i,t){return 2*(1-i)*i*t}function Rp(i,t){return i*i*t}function hr(i,t,e,n){return Tp(i,t)+Ap(i,e)+Rp(i,n)}function Cp(i,t){let e=1-i;return e*e*e*t}function Ip(i,t){let e=1-i;return 3*e*e*i*t}function Pp(i,t){return 3*(1-i)*i*i*t}function Lp(i,t){return i*i*i*t}function ur(i,t,e,n,s){return Cp(i,t)+Ip(i,e)+Pp(i,n)+Lp(i,s)}var Ar=class extends rn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},so=class extends rn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rr=class extends rn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends rn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends rn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ao=class extends rn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Mu(o,l.x,c.x,h.x,f.x),Mu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},yc=Object.freeze({__proto__:null,ArcCurve:no,CatmullRomCurve3:io,CubicBezierCurve:Ar,CubicBezierCurve3:so,EllipseCurve:Ls,LineCurve:Rr,LineCurve3:ro,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:ao,SplineCurve:Ir}),oo=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yc[s.type]().fromJSON(s))}return this}},Pr=class extends oo{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ar(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ir(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ds=class extends Pr{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Pr().fromJSON(s))}return this}};function Dp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=_d(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=zp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],p=i[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Lr(r,a,e,o,l,c,0),a}function _d(i,t,e,n,s){let r;if(s===Kp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Su(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Su(a/n|0,i[a],i[a+1],r);return r&&Ns(r,r.next)&&(Nr(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ns(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Gp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Up(i,n,s,r):Np(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fp(Gi(i),t),Lr(i,t,e,n,s,r,2)):a===2&&Op(i,t,e,n,s,r):Lr(Gi(i),t,e,n,s,r,1);break}}}function Np(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&or(s,o,r,l,a,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Up(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),x=Math.max(o,l,c),g=Math.max(h,f,u),m=vc(d,p,t,e,n),M=vc(x,g,t,e,n),S=i.prevZ,_=i.nextZ;for(;S&&S.z>=m&&_&&_.z<=M;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&or(o,h,l,f,c,u,S.x,S.y)&&Ee(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&or(o,h,l,f,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&or(o,h,l,f,c,u,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&or(o,h,l,f,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Fp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ns(n,s)&&vd(n,e,e.next,s)&&Dr(n,s)&&Dr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function Op(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qp(a,o)){let l=Md(a,o);a=Gi(a,a.next),l=Gi(l,l.next),Lr(a,t,e,n,s,r,0),Lr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function zp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=_d(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Xp(c))}s.sort(Bp);for(let r=0;r<s.length;r++)e=kp(s[r],e);return e}function Bp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function kp(i,t){let e=Hp(i,t);if(!e)return t;let n=Md(e,i);return Gi(n,n.next),Gi(e,e.next)}function Hp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ns(i,e))return e;do{if(Ns(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&yd(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Dr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Vp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Vp(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Gp(i,t,e,n){let s=i;do s.z===0&&(s.z=vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wp(s)}function Wp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function yd(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function or(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&yd(i,t,e,n,s,r,a,o)}function qp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Yp(i,t)&&(Dr(i,t)&&Dr(t,i)&&Zp(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Ns(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ns(i,t){return i.x===t.x&&i.y===t.y}function vd(i,t,e,n){let s=Oa(Ee(i,t,e)),r=Oa(Ee(i,t,n)),a=Oa(Ee(e,n,i)),o=Oa(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Fa(i,e,t)||r===0&&Fa(i,n,t)||a===0&&Fa(e,i,n)||o===0&&Fa(e,t,n))}function Fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oa(i){return i>0?1:i<0?-1:0}function Yp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Zp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Md(i,t){let e=Mc(i.i,i.x,i.y),n=Mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Su(i,t,e,n){let s=Mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Sc=class{static triangulate(t,e,n=2){return Dp(t,e,n)}},zi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];bu(t),wu(n,t);let a=t.length;e.forEach(bu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,wu(n,e[l]);let o=Sc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ur=class i extends ye{constructor(t=new Ds([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Jp,S,_=!1,b,w,A,y;if(m){S=m.getSpacedPoints(h),_=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,et),w=new I,A=new I,y=new I}u||(g=0,d=0,p=0,x=0);let T=o.extractPoints(c),R=T.shape,P=T.holes;if(!zi.isClockWise(R)){R=R.reverse();for(let et=0,ot=P.length;et<ot;et++){let lt=P[et];zi.isClockWise(lt)&&(P[et]=lt.reverse())}}function z(et){let lt=10000000000000001e-36,ct=et[0];for(let dt=1;dt<=et.length;dt++){let kt=dt%et.length,Bt=et[kt],qt=Bt.x-ct.x,Zt=Bt.y-ct.y,N=qt*qt+Zt*Zt,ce=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ct.x),Math.abs(ct.y)),ne=lt*ce*ce;if(N<=ne){et.splice(kt,1),dt--;continue}ct=Bt}}z(R),P.forEach(z);let L=P.length,O=R;for(let et=0;et<L;et++){let ot=P[et];R=R.concat(ot)}function W(et,ot,lt){return ot||Vt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(ot,lt)}let k=R.length;function st(et,ot,lt){let ct,dt,kt,Bt=et.x-ot.x,qt=et.y-ot.y,Zt=lt.x-et.x,N=lt.y-et.y,ce=Bt*Bt+qt*qt,ne=Bt*N-qt*Zt;if(Math.abs(ne)>Number.EPSILON){let C=Math.sqrt(ce),v=Math.sqrt(Zt*Zt+N*N),B=ot.x-qt/C,G=ot.y+Bt/C,Z=lt.x-N/v,ht=lt.y+Zt/v,ut=((Z-B)*N-(ht-G)*Zt)/(Bt*N-qt*Zt);ct=B+Bt*ut-et.x,dt=G+qt*ut-et.y;let K=ct*ct+dt*dt;if(K<=2)return new at(ct,dt);kt=Math.sqrt(K/2)}else{let C=!1;Bt>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Bt<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(N)&&(C=!0),C?(ct=-qt,dt=Bt,kt=Math.sqrt(ce)):(ct=Bt,dt=qt,kt=Math.sqrt(ce/2))}return new at(ct/kt,dt/kt)}let Y=[];for(let et=0,ot=O.length,lt=ot-1,ct=et+1;et<ot;et++,lt++,ct++)lt===ot&&(lt=0),ct===ot&&(ct=0),Y[et]=st(O[et],O[lt],O[ct]);let Q=[],nt,Nt=Y.concat();for(let et=0,ot=L;et<ot;et++){let lt=P[et];nt=[];for(let ct=0,dt=lt.length,kt=dt-1,Bt=ct+1;ct<dt;ct++,kt++,Bt++)kt===dt&&(kt=0),Bt===dt&&(Bt=0),nt[ct]=st(lt[ct],lt[kt],lt[Bt]);Q.push(nt),Nt=Nt.concat(nt)}let At;if(g===0)At=zi.triangulateShape(O,P);else{let et=[],ot=[];for(let lt=0;lt<g;lt++){let ct=lt/g,dt=d*Math.cos(ct*Math.PI/2),kt=p*Math.sin(ct*Math.PI/2)+x;for(let Bt=0,qt=O.length;Bt<qt;Bt++){let Zt=W(O[Bt],Y[Bt],kt);vt(Zt.x,Zt.y,-dt),ct===0&&et.push(Zt)}for(let Bt=0,qt=L;Bt<qt;Bt++){let Zt=P[Bt];nt=Q[Bt];let N=[];for(let ce=0,ne=Zt.length;ce<ne;ce++){let C=W(Zt[ce],nt[ce],kt);vt(C.x,C.y,-dt),ct===0&&N.push(C)}ct===0&&ot.push(N)}}At=zi.triangulateShape(et,ot)}let le=At.length,ee=p+x;for(let et=0;et<k;et++){let ot=u?W(R[et],Nt[et],ee):R[et];_?(A.copy(b.normals[0]).multiplyScalar(ot.x),w.copy(b.binormals[0]).multiplyScalar(ot.y),y.copy(S[0]).add(A).add(w),vt(y.x,y.y,y.z)):vt(ot.x,ot.y,0)}for(let et=1;et<=h;et++)for(let ot=0;ot<k;ot++){let lt=u?W(R[ot],Nt[ot],ee):R[ot];_?(A.copy(b.normals[et]).multiplyScalar(lt.x),w.copy(b.binormals[et]).multiplyScalar(lt.y),y.copy(S[et]).add(A).add(w),vt(y.x,y.y,y.z)):vt(lt.x,lt.y,f/h*et)}for(let et=g-1;et>=0;et--){let ot=et/g,lt=d*Math.cos(ot*Math.PI/2),ct=p*Math.sin(ot*Math.PI/2)+x;for(let dt=0,kt=O.length;dt<kt;dt++){let Bt=W(O[dt],Y[dt],ct);vt(Bt.x,Bt.y,f+lt)}for(let dt=0,kt=P.length;dt<kt;dt++){let Bt=P[dt];nt=Q[dt];for(let qt=0,Zt=Bt.length;qt<Zt;qt++){let N=W(Bt[qt],nt[qt],ct);_?vt(N.x,N.y+S[h-1].y,S[h-1].x+lt):vt(N.x,N.y,f+lt)}}}ae(),J();function ae(){let et=s.length/3;if(u){let ot=0,lt=k*ot;for(let ct=0;ct<le;ct++){let dt=At[ct];Wt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}ot=h+g*2,lt=k*ot;for(let ct=0;ct<le;ct++){let dt=At[ct];Wt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let ot=0;ot<le;ot++){let lt=At[ot];Wt(lt[2],lt[1],lt[0])}for(let ot=0;ot<le;ot++){let lt=At[ot];Wt(lt[0]+k*h,lt[1]+k*h,lt[2]+k*h)}}n.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,ot=0;tt(O,ot),ot+=O.length;for(let lt=0,ct=P.length;lt<ct;lt++){let dt=P[lt];tt(dt,ot),ot+=dt.length}n.addGroup(et,s.length/3-et,1)}function tt(et,ot){let lt=et.length;for(;--lt>=0;){let ct=lt,dt=lt-1;dt<0&&(dt=et.length-1);for(let kt=0,Bt=h+g*2;kt<Bt;kt++){let qt=k*kt,Zt=k*(kt+1),N=ot+ct+qt,ce=ot+dt+qt,ne=ot+dt+Zt,C=ot+ct+Zt;wt(N,ce,ne,C)}}}function vt(et,ot,lt){l.push(et),l.push(ot),l.push(lt)}function Wt(et,ot,lt){Xt(et),Xt(ot),Xt(lt);let ct=s.length/3,dt=M.generateTopUV(n,s,ct-3,ct-2,ct-1);fe(dt[0]),fe(dt[1]),fe(dt[2])}function wt(et,ot,lt,ct){Xt(et),Xt(ot),Xt(ct),Xt(ot),Xt(lt),Xt(ct);let dt=s.length/3,kt=M.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);fe(kt[0]),fe(kt[1]),fe(kt[3]),fe(kt[1]),fe(kt[2]),fe(kt[3])}function Xt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function fe(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $p(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yc[s.type]().fromJSON(s)),new i(n,t.options)}},Jp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-f),new at(u,1-p),new at(x,1-m)]:[new at(o,1-l),new at(h,1-f),new at(d,1-p),new at(g,1-m)]}};function $p(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fr=class i extends ye{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=jt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new I,u=new at,d=new I,p=new I,x=new I,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let M=0;M<=e;M++){let S=n+M*h*s,_=Math.sin(S),b=Math.cos(S);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*_,f.y=t[w].y,f.z=t[w].x*b,a.push(f.x,f.y,f.z),u.x=M/e,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*_,y=l[3*w+1],T=l[3*w+0]*b;c.push(A,y,T)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){let _=S+M*t.length,b=_,w=_+t.length,A=_+t.length+1,y=_+1;r.push(b,w,y),r.push(A,y,w)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Sn=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-a;for(let S=0;S<c;S++){let _=S*f-r;p.push(_,-M,0),x.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let S=M+c*m,_=M+c*(m+1),b=M+1+c*(m+1),w=M+1+c*m;d.push(S,_,w),d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var un=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new I,u=new I,d=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],S=m/n,_=a+S*o,b=t*Math.cos(_),w=Math.sqrt(t*t-b*b),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;f.x=-w*Math.cos(R),f.y=b,f.z=w*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),g.push(T+A,1-S),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let S=h[m][M+1],_=h[m][M],b=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&d.push(S,_,w),(m!==n-1||l<Math.PI)&&d.push(_,b,w)}this.setIndex(d),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Eu(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Eu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Eu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function jp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var pl={clone:Yi,merge:Xe},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new at().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},lo=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jt=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yi=class extends Jt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Or=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Eo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},co=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ho=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uo=class extends vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=t,o=2*e-n;break;case xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:a=t,l=2*n-e;break;case xc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,S=(-1-d)*g+(1.5+d)*x+.5*p,_=d*g-d*x;for(let b=0;b!==o;++b)r[b]=m*a[h+b]+M*a[c+b]+S*a[l+b]+_*a[f+b];return r}},fo=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},po=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mo=class extends vi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,d=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=d*u+p*2,M=f[m],S=f[m+1],_=t*u+p*2,b=h[_],w=h[_+1],A=nm(n,e,M,b,s);r[p]=Sd(A,x,S,w,g)}return r}};function Sd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function em(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function nm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Sd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=em(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dc(t.settings)&&(n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case Ja:e=this.InterpolantFactoryMethodLinear;break;case ka:e=this.InterpolantFactoryMethodSmooth;break;case pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Ja;case this.InterpolantFactoryMethodSmooth:return ka;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dc(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Wf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ka,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let x=e[f+p];if(x!==e[u+p]||x!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Ja;var Mi=class extends an{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=dr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="color";var xo=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="number";var _o=class extends vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends an{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=dr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};yo.prototype.ValueTypeName="vector";var vo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bd=new vo,Mo=class{constructor(t){this.manager=t!==void 0?t:bd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Br=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fc=new te,Au=new I,Ru=new I,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=je,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Is,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},za=new I,Ba=new Je,Ln=new I,Hr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,Ba,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ba,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(za,Ba,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ba,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new I,Cu=new at,Iu=new at,Be=class extends Hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Iu),e.subVectors(Iu,Cu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bc=class extends kr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Fs=class extends Hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends kr{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,_s=1,So=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Be(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new Be(xs,_s,t,e);a.layers=this.layers,this.add(a);let o=new Be(xs,_s,t,e);o.layers=this.layers,this.add(o);let l=new Be(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Be(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qc="\\[\\]\\.:\\/",im=new RegExp("["+Qc+"]","g"),th="[^"+Qc+"]",sm="[^"+Qc.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",th),am=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),cm=new RegExp("^"+rm+am+om+lm+"$"),hm=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(im,"")}static parseTrackName(t){let e=cm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Ec;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lv=new Float32Array(1);var Pu=new te,Wr=class{constructor(t,e,n=0,s=1/0){this.ray=new Rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Pu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(t,e=!0,n=[]){return Tc(t,this,n,e),n.sort(Lu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tc(t[s],this,n,e);return n.sort(Lu),n}};function Lu(i,t){return i.distance-t.distance}function Tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Tc(r[a],t,e,!0)}}var ah=class ah{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ah.prototype.isMatrix2=!0;var Ac=ah;function eh(i,t,e,n){let s=um(n);switch(e){case Xc:return i*t;case Lo:return i*t/s.components*s.byteLength;case Do:return i*t/s.components*s.byteLength;case Ai:return i*t*2/s.components*s.byteLength;case No:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Uo:return i*t*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:case Bo:return Math.max(i,16)*Math.max(t,8)/4;case Fo:case zo:return Math.max(i,8)*Math.max(t,8)/2;case ko:case Ho:case Go:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Vo:case jr:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case il:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case al:case ol:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qr:case ul:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function um(i){switch(i){case je:case Hc:return{byteLength:1,components:1};case Bs:case Vc:case En:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case wn:case Co:case dn:return{byteLength:4,components:1};case Gc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Xd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],x=f[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_m=`#ifdef USE_ALPHAHASH
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
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
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
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
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
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Im=`#ifdef USE_IRIDESCENCE
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
#endif`,Pm=`#ifdef USE_BUMPMAP
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,km=`#define PI 3.141592653589793
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
} // validated`,Hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`uniform sampler2D dfgLUT;
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
}`,g0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k0=`#ifdef USE_NORMALMAP
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
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ng=`float getShadowMask() {
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
}`,ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sg=`#ifdef USE_SKINNING
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
#endif`,rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bg=`#include <common>
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
}`,wg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,Tg=`#define DISTANCE
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
}`,Ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Pg=`#include <common>
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
}`,Lg=`uniform vec3 diffuse;
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
}`,Ng=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Fg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,Hg=`#define STANDARD
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
}`,Vg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Wg=`#define TOON
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
}`,Xg=`uniform float size;
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
}`,qg=`uniform vec3 diffuse;
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
}`,Yg=`#include <common>
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
}`,Zg=`uniform vec3 color;
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
}`,Kg=`uniform float rotation;
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:xm,alphahash_pars_fragment:_m,alphamap_fragment:ym,alphamap_pars_fragment:vm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:wm,batching_pars_vertex:Em,batching_vertex:Tm,begin_vertex:Am,beginnormal_vertex:Rm,bsdfs:Cm,iridescence_fragment:Im,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Um,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:zm,color_vertex:Bm,common:km,cube_uv_reflection_fragment:Hm,defaultnormal_vertex:Vm,displacementmap_pars_vertex:Gm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:Zm,envmap_fragment:Km,envmap_common_pars_fragment:Jm,envmap_pars_fragment:$m,envmap_pars_vertex:jm,envmap_physical_pars_fragment:c0,envmap_vertex:Qm,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:a0,lights_lambert_pars_fragment:o0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:d0,lights_phong_pars_fragment:f0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:x0,lights_fragment_end:_0,lightprobes_pars_fragment:y0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:b0,map_fragment:w0,map_pars_fragment:E0,map_particle_fragment:T0,map_particle_pars_fragment:A0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:C0,morphinstance_vertex:I0,morphcolor_vertex:P0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:N0,normal_fragment_begin:U0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:z0,normal_vertex:B0,normalmap_pars_fragment:k0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:W0,opaque_fragment:X0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:Z0,dithering_fragment:K0,dithering_pars_fragment:J0,roughnessmap_fragment:$0,roughnessmap_pars_fragment:j0,shadowmap_pars_fragment:Q0,shadowmap_pars_vertex:tg,shadowmap_vertex:eg,shadowmask_pars_fragment:ng,skinbase_vertex:ig,skinning_pars_vertex:sg,skinning_vertex:rg,skinnormal_vertex:ag,specularmap_fragment:og,specularmap_pars_fragment:lg,tonemapping_fragment:cg,tonemapping_pars_fragment:hg,transmission_fragment:ug,transmission_pars_fragment:dg,uv_pars_fragment:fg,uv_pars_vertex:pg,uv_vertex:mg,worldpos_vertex:gg,background_vert:xg,background_frag:_g,backgroundCube_vert:yg,backgroundCube_frag:vg,cube_vert:Mg,cube_frag:Sg,depth_vert:bg,depth_frag:wg,distance_vert:Eg,distance_frag:Tg,equirect_vert:Ag,equirect_frag:Rg,linedashed_vert:Cg,linedashed_frag:Ig,meshbasic_vert:Pg,meshbasic_frag:Lg,meshlambert_vert:Dg,meshlambert_frag:Ng,meshmatcap_vert:Ug,meshmatcap_frag:Fg,meshnormal_vert:Og,meshnormal_frag:zg,meshphong_vert:Bg,meshphong_frag:kg,meshphysical_vert:Hg,meshphysical_frag:Vg,meshtoon_vert:Gg,meshtoon_frag:Wg,points_vert:Xg,points_frag:qg,shadow_vert:Yg,shadow_frag:Zg,sprite_vert:Kg,sprite_frag:Jg},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Vn={basic:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Xe([xt.common,xt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Xe([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Vn.physical={uniforms:Xe([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var ml={r:0,b:0,g:0},$g=new te,qd=new Yt;qd.set(-1,0,0,0,1,0,0,0,1);function jg(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let _=M.backgroundBlurriness>0;S=t.get(S,_)}return S}function p(M){let S=!1,_=d(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),S=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,S){let _=d(S);_&&(_.isCubeTexture||_.mapping===qr)?(c===void 0&&(c=new Pt(new Le(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Yi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4($g.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qd),c.material.toneMapped=se.getTransfer(_.colorSpace)!==de,(h!==_||f!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Sn(2,2),new We({name:"BackgroundMaterial",uniforms:Yi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=se.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,S){M.getRGB(ml,jc(i)),e.buffers.color.setClear(ml.r,ml.g,ml.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Qg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(P,D,z,L,O){let W=!1,k=f(P,L,z,D);r!==k&&(r=k,c(r.object)),W=d(P,L,z,O),W&&p(P,L,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(P,D,z,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,D,z,L){let O=L.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let k=P.isInstancedMesh===!0?P.id:0,st=W[k];st===void 0&&(st={},W[k]=st);let Y=st[z.id];Y===void 0&&(Y={},st[z.id]=Y);let Q=Y[O];return Q===void 0&&(Q=u(l()),Y[O]=Q),Q}function u(P){let D=[],z=[],L=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function d(P,D,z,L){let O=r.attributes,W=D.attributes,k=0,st=z.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=O[Y],Nt=W[Y];if(Nt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Nt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Nt=P.instanceColor)),nt===void 0||nt.attribute!==Nt||Nt&&nt.data!==Nt.data)return!0;k++}return r.attributesNum!==k||r.index!==L}function p(P,D,z,L){let O={},W=D.attributes,k=0,st=z.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=W[Y];nt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor));let Nt={};Nt.attribute=nt,nt&&nt.data&&(Nt.data=nt.data),O[Y]=Nt,k++}r.attributes=O,r.attributesNum=k,r.index=L}function x(){let P=r.newAttributes;for(let D=0,z=P.length;D<z;D++)P[D]=0}function g(P){m(P,0)}function m(P,D){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),O[P]!==D&&(i.vertexAttribDivisor(P,D),O[P]=D)}function M(){let P=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==P[z]&&(i.disableVertexAttribArray(z),D[z]=0)}function S(P,D,z,L,O,W,k){k===!0?i.vertexAttribIPointer(P,D,z,O,W):i.vertexAttribPointer(P,D,z,L,O,W)}function _(P,D,z,L){x();let O=L.attributes,W=z.getAttributes(),k=D.defaultAttributeValues;for(let st in W){let Y=W[st];if(Y.location>=0){let Q=O[st];if(Q===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){let nt=Q.normalized,Nt=Q.itemSize,At=t.get(Q);if(At===void 0)continue;let le=At.buffer,ee=At.type,ae=At.bytesPerElement,J=ee===i.INT||ee===i.UNSIGNED_INT||Q.gpuType===Co;if(Q.isInterleavedBufferAttribute){let tt=Q.data,vt=tt.stride,Wt=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)m(Y.location+wt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<Y.locationSize;wt++)g(Y.location+wt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let wt=0;wt<Y.locationSize;wt++)S(Y.location+wt,Nt/Y.locationSize,ee,nt,vt*ae,(Wt+Nt/Y.locationSize*wt)*ae,J)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let tt=0;tt<Y.locationSize;tt++)S(Y.location+tt,Nt/Y.locationSize,ee,nt,Nt*ae,Nt/Y.locationSize*tt*ae,J)}}else if(k!==void 0){let nt=k[st];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}M()}function b(){T();for(let P in n){let D=n[P];for(let z in D){let L=D[z];for(let O in L){let W=L[O];for(let k in W)h(W[k].object),delete W[k];delete L[O]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let z in D){let L=D[z];for(let O in L){let W=L[O];for(let k in W)h(W[k].object),delete W[k];delete L[O]}}delete n[P.id]}function A(P){for(let D in n){let z=n[D];for(let L in z){let O=z[L];if(O[P.id]===void 0)continue;let W=O[P.id];for(let k in W)h(W[k].object),delete W[k];delete O[P.id]}}}function y(P){for(let D in n){let z=n[D],L=P.isInstancedMesh===!0?P.id:0,O=z[L];if(O!==void 0){for(let W in O){let k=O[W];for(let st in k)h(k[st].object),delete k[st];delete O[W]}delete z[L],Object.keys(z).length===0&&delete n[D]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function tx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==je&&A!==dn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:_,maxSamples:b,samples:w}}function nx(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,S=M*4,_=m.clippingState||null;l.value=_,_=h(p,u,S,d);for(let b=0;b!==S;++b)_[b]=e[b];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,_=d;S!==x;++S,_+=4)a.copy(f[S]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Gs=4,ix=6,sx=20,rx=256,ea=new Fs,wd=new zt,oh=null,lh=0,ch=0,hh=!1,ax=new I,Zi=new I,Xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ax}=r;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=hh,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:En,format:fn,colorSpace:fr,depthBuffer:!1},s=Ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ox(r)),this._blurMaterial=cx(r,t,e),this._ggxMaterial=lx(r,t,e)}return s}_compileMaterial(t){let e=new Pt(new ye,t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(wd),f.toneMapping=bn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Le,new ei({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(wd),m=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Vs(s,_*b,S>2?b:0,b,b),f.setRenderTarget(s),m&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Gs?n-p+Gs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Vs(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,ea),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Vs(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,ea)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),u=4*(this._cubeSize-h);Vs(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ea)}};function ox(i){let t=[],e=[],n=i,s=i-Gs+1+ix;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),x=new Float32Array(d*u*f);for(let m=0;m<f;m++){let M=m%3*2/3-1,S=m>2?0:-1,_=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];p.set(_,d*u*m);for(let b=0;b<u;b++){let w=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?Zi.set(1,A,w):m===1?Zi.set(-w,1,-A):m===2?Zi.set(-w,A,1):m===3?Zi.set(-1,A,-w):m===4?Zi.set(-w,-1,A):Zi.set(w,A,-1),Zi.toArray(x,(m*u+b)*d)}}let g=new ye;g.setAttribute("position",new Te(p,d)),g.setAttribute("outputDirection",new Te(x,d)),e.push(new Pt(g,null)),n>Gs&&n--}return{lodMeshes:e,sizeLods:t}}function Ed(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lx(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function cx(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:sx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Td(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ad(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xl=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:kn});r.uniforms.tEquirect.value=e;let a=new Pt(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=ke),new So(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===To||d===Ao)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new xl(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,p=d===To||d===Ao,x=d===wi||d===qi;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Xs(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Xs(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===To?u.mapping=wi:d===Ao&&(u.mapping=qi),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function ux(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bi("WebGLRenderer: "+n+" extension not supported."),s}}}function dx(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(d!==null){let M=d.array;x=d.version;for(let S=0,_=M.length;S<_;S+=3){let b=M[S+0],w=M[S+1],A=M[S+2];u.push(b,w,w,A,A,b)}}else{let M=p.array;x=p.version;for(let S=0,_=M.length/3-1;S<_;S+=3){let b=S+0,w=S+1,A=S+2;u.push(b,w,w,A,A,b)}}let g=new(p.count>=65535?vr:yr)(u,1);g.version=x;let m=r.get(f);m&&t.remove(m),r.set(f,g)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function fx(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function px(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mx(i,t,e){let n=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),x===!0&&(S=3);let _=o.attributes.position.count*S,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*b*4*f),A=new xr(w,_,b,f);A.type=dn,A.needsUpdate=!0;let y=S*4;for(let R=0;R<f;R++){let P=g[R],D=m[R],z=M[R],L=_*b*4*R;for(let O=0;O<P.count;O++){let W=O*y;d===!0&&(s.fromBufferAttribute(P,O),w[L+W+0]=s.x,w[L+W+1]=s.y,w[L+W+2]=s.z,w[L+W+3]=0),p===!0&&(s.fromBufferAttribute(D,O),w[L+W+4]=s.x,w[L+W+5]=s.y,w[L+W+6]=s.z,w[L+W+7]=0),x===!0&&(s.fromBufferAttribute(z,O),w[L+W+8]=s.x,w[L+W+9]=s.y,w[L+W+10]=s.z,w[L+W+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new at(_,b)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function gx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var xx={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function _x(i,t,e,n,s,r){let a=new $e(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ye;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new lo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Pt(c,h),u=new Fs(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,M=[],S=!1;this.setSize=function(_,b){a.setSize(_,b),o!==null&&o.setSize(_,b),l!==null&&l.setSize(_,b);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(_,b)}},this.setEffects=function(_){M=_,S=M.length>0&&M[0].isRenderPass===!0;let b=a.width,w=a.height;M.length>0&&o===null&&(o=new $e(b,w,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new $e(b,w,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(b,w)}},this.begin=function(_,b){if(x||_.toneMapping===bn&&M.length===0)return!1;if(m=b,b!==null){let w=b.width,A=b.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return S===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=bn,!0},this.hasRenderPass=function(){return S},this.end=function(_,b){_.toneMapping=g,x=!0;let w=a,A=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(_,A,w,b),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},se.getTransfer(d)===de&&(h.defines.SRGB_TRANSFER="");let y=xx[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(f,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Yd=new Ze,fh=new xi(1,1),Zd=new xr,Kd=new Qa,Jd=new wr,Rd=[],Cd=[],Id=new Float32Array(16),Pd=new Float32Array(9),Ld=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vl(i,t){let e=Cd[t];e===void 0&&(e=new Int32Array(t),Cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function bx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Ue(e,n)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Pd.set(n),i.uniformMatrix3fv(this.addr,!1,Pd),Ue(e,n)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Ue(e,n)}}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Ix(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=e.isReversedDepthBuffer()?fl:dl,r=fh):r=Yd,e.setTexture2D(t||r,s)}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kd,s)}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jd,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zd,s)}function zx(i){switch(i){case 5126:return yx;case 35664:return vx;case 35665:return Mx;case 35666:return Sx;case 35674:return bx;case 35675:return wx;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Ax;case 35668:case 35672:return Rx;case 35669:case 35673:return Cx;case 5125:return Ix;case 36294:return Px;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}function Bx(i,t){i.uniform1fv(this.addr,t)}function kx(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function Hx(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Vx(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function Gx(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wx(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xx(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qx(i,t){i.uniform1iv(this.addr,t)}function Yx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function Kx(i,t){i.uniform4iv(this.addr,t)}function Jx(i,t){i.uniform1uiv(this.addr,t)}function $x(i,t){i.uniform2uiv(this.addr,t)}function jx(i,t){i.uniform3uiv(this.addr,t)}function Qx(i,t){i.uniform4uiv(this.addr,t)}function t_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fh:a=Yd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kd,r[a])}function n_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jd,r[a])}function i_(i,t,e){let n=this.cache,s=t.length,r=vl(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zd,r[a])}function s_(i){switch(i){case 5126:return Bx;case 35664:return kx;case 35665:return Hx;case 35666:return Vx;case 35674:return Gx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Zx;case 35669:case 35673:return Kx;case 5125:return Jx;case 36294:return $x;case 36295:return jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return t_;case 35679:case 36299:case 36307:return e_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}var ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}},mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s_(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function r_(i,t,e){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Dd(e,c===void 0?new ph(o,i,t):new mh(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new gh(o),Dd(e,f)),e=f}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);r_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Nd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a_=37297,o_=0;function l_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ud=new Yt;function c_(i){se._getMatrix(Ud,se.workingColorSpace,i);let t=`mat3( ${Ud.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+l_(i.getShaderSource(t),o)}else return r}function h_(i,t){let e=c_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u_={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[Xr]:"ACESFilmic",[zc]:"AgX",[Bc]:"Neutral",[Oc]:"Custom"};function d_(i,t){let e=u_[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var gl=new I;function f_(){se.getLuminanceCoefficients(gl);let i=gl.x.toFixed(4),t=gl.y.toFixed(4),e=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function m_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ia(i){return i!==""}function Od(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(x_,y_)}var __=new Map;function y_(i,t){let e=Qt[t];if(e===void 0){let n=__.get(t);if(n!==void 0)e=Qt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xh(e)}var v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(v_,M_)}function M_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var S_={[Wi]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function b_(i){return S_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w_={[wi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function E_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var T_={[qi]:"ENVMAP_MODE_REFRACTION"};function A_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R_={[Eo]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function C_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R_[i.combine]||"ENVMAP_BLENDING_NONE"}function I_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=b_(e),c=E_(e),h=A_(e),f=C_(e),u=I_(e),d=p_(e),p=m_(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(g=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==bn?d_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,h_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),a=xh(a),a=Od(a,e),a=zd(a,e),o=xh(o),o=Od(o,e),o=zd(o,e),a=Bd(a),o=Bd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=M+g+a,_=M+m+o,b=Nd(s,s.VERTEX_SHADER,S),w=Nd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,b),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(w)||"",O=D.trim(),W=z.trim(),k=L.trim(),st=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,w);else{let Q=Fd(s,b,"vertex"),nt=Fd(s,w,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+Q+`
`+nt)}else O!==""?Gt("WebGLProgram: Program Info Log:",O):(W===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:st,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(b),s.deleteShader(w),y=new Ws(s,x),T=g_(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,a_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=w,this}var L_=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yh(t),e.set(t,n)),n}},yh=class{constructor(t){this.id=L_++,this.code=t,this.usedTimes=0}};function D_(i){return i===Ai||i===jr||i===Qr}function N_(i,t,e,n,s,r){let a=new Es,o=new _h,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,R,P,D,z){let L=P.fog,O=D.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,st=t.get(y.envMap||W,k),Y=st&&st.mapping===qr?st.image.height:null,Q=d[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Gt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Nt=nt!==void 0?nt.length:0,At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let le,ee,ae,J;if(Q){let ve=Vn[Q];le=ve.vertexShader,ee=ve.fragmentShader}else{le=y.vertexShader,ee=y.fragmentShader;let ve=o.getVertexShaderStage(y),he=o.getFragmentShaderStage(y);o.update(y,ve,he),ae=ve.id,J=he.id}let tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Wt=D.isInstancedMesh===!0,wt=D.isBatchedMesh===!0,Xt=!!y.map,fe=!!y.matcap,et=!!st,ot=!!y.aoMap,lt=!!y.lightMap,ct=!!y.bumpMap&&y.wireframe===!1,dt=!!y.normalMap,kt=!!y.displacementMap,Bt=!!y.emissiveMap,qt=!!y.metalnessMap,Zt=!!y.roughnessMap,N=y.anisotropy>0,ce=y.clearcoat>0,ne=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,B=y.sheen>0,G=y.transmission>0,Z=N&&!!y.anisotropyMap,ht=ce&&!!y.clearcoatMap,ut=ce&&!!y.clearcoatNormalMap,K=ce&&!!y.clearcoatRoughnessMap,j=v&&!!y.iridescenceMap,ft=v&&!!y.iridescenceThicknessMap,Ut=B&&!!y.sheenColorMap,yt=B&&!!y.sheenRoughnessMap,pt=!!y.specularMap,Ft=!!y.specularColorMap,Ht=!!y.specularIntensityMap,Kt=G&&!!y.transmissionMap,F=G&&!!y.thicknessMap,mt=!!y.gradientMap,$=!!y.alphaMap,gt=y.alphaTest>0,bt=!!y.alphaHash,rt=!!y.extensions,Ot=bn;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Lt={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:ee,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:wt,batchingColor:wt&&D._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&D.instanceColor!==null,instancingMorph:Wt&&D.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:fe,envMap:et,envMapMode:et&&st.mapping,envMapCubeUVHeight:Y,aoMap:ot,lightMap:lt,bumpMap:ct,normalMap:dt,displacementMap:kt,emissiveMap:Bt,normalMapObjectSpace:dt&&y.normalMapType===sd,normalMapTangentSpace:dt&&y.normalMapType===ta,packedNormalMap:dt&&y.normalMapType===ta&&D_(y.normalMap.format),metalnessMap:qt,roughnessMap:Zt,anisotropy:N,anisotropyMap:Z,clearcoat:ce,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:K,dispersion:ne,retroreflection:C,iridescence:v,iridescenceMap:j,iridescenceThicknessMap:ft,sheen:B,sheenColorMap:Ut,sheenRoughnessMap:yt,specularMap:pt,specularColorMap:Ft,specularIntensityMap:Ht,transmission:G,transmissionMap:Kt,thicknessMap:F,gradientMap:mt,opaque:y.transparent===!1&&y.blending===zs&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:gt,alphaHash:bt,combine:y.combine,mapUv:Xt&&p(y.map.channel),aoMapUv:ot&&p(y.aoMap.channel),lightMapUv:lt&&p(y.lightMap.channel),bumpMapUv:ct&&p(y.bumpMap.channel),normalMapUv:dt&&p(y.normalMap.channel),displacementMapUv:kt&&p(y.displacementMap.channel),emissiveMapUv:Bt&&p(y.emissiveMap.channel),metalnessMapUv:qt&&p(y.metalnessMap.channel),roughnessMapUv:Zt&&p(y.roughnessMap.channel),anisotropyMapUv:Z&&p(y.anisotropyMap.channel),clearcoatMapUv:ht&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(y.sheenRoughnessMap.channel),specularMapUv:pt&&p(y.specularMap.channel),specularColorMapUv:Ft&&p(y.specularColorMap.channel),specularIntensityMapUv:Ht&&p(y.specularIntensityMap.channel),transmissionMapUv:Kt&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:$&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||N),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Xt||$),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:vt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===De,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:rt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){let T=d[y.type],R;if(T){let P=Vn[T];R=pl.clone(P.uniforms)}else R=y.uniforms;return R}function _(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new P_(i,T,y,s),c.push(R),h.set(T,R)),R}function b(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:A}}function U_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,x,g,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,d,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let S=o(u,d,p,x,g,m);p.transmission>0?n.push(S):p.transparent===!0?s.push(S):e.push(S)}function c(u,d,p,x,g,m){let M=o(u,d,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||F_),n.length>1&&n.sort(d||Hd),s.length>1&&s.sort(d||Hd)}function f(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function O_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Vd,i.set(n,[a])):s>=r.length?(a=new Vd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k_=0;function H_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V_(i){let t=new z_,e=B_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new te,a=new te;function o(c){let h=0,f=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,M=0,S=0,_=0,b=0,w=0,A=0,y=0,T=0,R=0;c.sort(H_);for(let D=0,z=c.length;D<z;D++){let L=c[D],O=L.color,W=L.intensity,k=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ai?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*W,f+=O.g*W,u+=O.b*W;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],W);R++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,nt=e.get(L);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=st;let Nt=Q.getViewportCount();for(let At=0;At<Nt;At++)n.sunShadowMatrix[x+At]=Q.getMatrix(At),n.sunShadowCascade[x+At]=Q._cascadeData[At];x+=Nt,p++}n.sun[d]=Y,d++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,nt=e.get(L);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=st,n.directionalShadowMatrix[g]=L.shadow.matrix,b++}n.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=k,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let Q=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,Q.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=Q.matrix,L.castShadow){let nt=e.get(L);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=st,A++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=Y,S++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let Q=L.shadow,nt=e.get(L);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=st,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(W),Y.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[_]=Y,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let P=n.hash;(P.sunLength!==d||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=S,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=d,P.directionalLength=g,P.pointLength=m,P.spotLength=M,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=k_++)}function l(c,h){let f=0,u=0,d=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){let _=c[M];if(_.isSunLight){let b=n.sun[f];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),f++}else if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(_.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Gd(i){let t=new V_(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function G_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Gd(i),t.set(s,[o])):r>=a.length?(o=new Gd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
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
}`,q_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Y_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Wd=new te,na=new I,dh=new I;function Z_(i,t,e){let n=new Is,s=new at,r=new at,a=new we,o=new co,l=new ho,c={},h=e.maxTextureSize,f={[bi]:De,[De]:bi,[on]:on},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let m=this.type;this.render=function(w,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Uu&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let z=m!==this.type;z&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){let W=w[L],k=W.shadow;if(k===void 0){Gt("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let st=k.getFrameExtents();s.multiply(st),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,k.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Os){if(W.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $e(s.x,s.y,{format:Ai,type:En,minFilter:ke,magFilter:ke,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new xi(s.x,s.y,dn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Un,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Oe,k.map.depthTexture.magFilter=Oe}else W.isPointLight?(k.map=new xl(s.x),k.map.depthTexture=new to(s.x,wn)):(k.map=new $e(s.x,s.y),k.map.depthTexture=new xi(s.x,s.y,wn)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Un,this.type===Wi?(k.map.depthTexture.compareFunction=Y?fl:dl,k.map.depthTexture.minFilter=ke,k.map.depthTexture.magFilter=ke):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Oe,k.map.depthTexture.magFilter=Oe);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let Q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();W.isPointLight!==!0&&k.updateMatrices(W,y);for(let nt=0;nt<Q;nt++){let Nt=k.getCamera(nt);if(W.isPointLight){let At=k.camera,le=k.matrix,ee=W.distance||At.far;ee!==At.far&&(At.far=ee,At.updateProjectionMatrix()),na.setFromMatrixPosition(W.matrixWorld),At.position.copy(na),dh.copy(At.position),dh.add(q_[nt]),At.up.copy(Y_[nt]),At.lookAt(dh),At.updateMatrixWorld(),le.makeTranslation(-na.x,-na.y,-na.z),Wd.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Wd,At.coordinateSystem,At.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(k.map),i.clear());let At=k.getViewport(nt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),D.viewport(a)}n=k.getFrustum(nt),_(A,y,Nt,W,this.type)}k.isPointLightShadow!==!0&&this.type===Os&&M(k,y),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,P)};function M(w,A){let y=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new $e(s.x,s.y,{format:Ai,type:En}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,y,d,x,null)}function S(w,A,y,T){let R=null,P=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,z=A.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let O=L[z];O===void 0&&(O=R.clone(),L[z]=O,A.addEventListener("dispose",b)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Os?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=y}return R}function _(w,A,y,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Os)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let z=t.update(w),L=w.material;if(Array.isArray(L)){let O=z.groups;for(let W=0,k=O.length;W<k;W++){let st=O[W],Y=L[st.materialIndex];if(Y&&Y.visible){let Q=S(w,Y,T,R);w.onBeforeShadow(i,w,A,y,z,Q,st),i.renderBufferDirect(y,null,z,Q,w,st),w.onAfterShadow(i,w,A,y,z,Q,st)}}}else if(L.visible){let O=S(w,L,T,R);w.onBeforeShadow(i,w,A,y,z,O,null),i.renderBufferDirect(y,null,z,O,w,null),w.onAfterShadow(i,w,A,y,z,O,null)}}let D=w.children;for(let z=0,L=D.length;z<L;z++)_(D[z],A,y,T,R)}function b(w){w.target.removeEventListener("dispose",b);for(let y in c){let T=c[y],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function K_(i,t){function e(){let F=!1,mt=new we,$=null,gt=new we(0,0,0,0);return{setMask:function(bt){$!==bt&&!F&&(i.colorMask(bt,bt,bt,bt),$=bt)},setLocked:function(bt){F=bt},setClear:function(bt,rt,Ot,Lt,ve){ve===!0&&(bt*=Lt,rt*=Lt,Ot*=Lt),mt.set(bt,rt,Ot,Lt),gt.equals(mt)===!1&&(i.clearColor(bt,rt,Ot,Lt),gt.copy(mt))},reset:function(){F=!1,$=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,$=null,gt=null,bt=null;return{setReversed:function(rt){if(mt!==rt){let Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),mt=rt;let Lt=bt;bt=null,this.setClear(Lt)}},getReversed:function(){return mt},setTest:function(rt){rt?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(rt){$!==rt&&!F&&(i.depthMask(rt),$=rt)},setFunc:function(rt){if(mt&&(rt=md[rt]),gt!==rt){switch(rt){case Va:i.depthFunc(i.NEVER);break;case Ga:i.depthFunc(i.ALWAYS);break;case Wa:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Xa:i.depthFunc(i.EQUAL);break;case qa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){bt!==rt&&(bt=rt,mt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){F=!1,$=null,gt=null,bt=null,mt=!1}}}function s(){let F=!1,mt=null,$=null,gt=null,bt=null,rt=null,Ot=null,Lt=null,ve=null;return{setTest:function(he){F||(he?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(he){mt!==he&&!F&&(i.stencilMask(he),mt=he)},setFunc:function(he,pn,In){($!==he||gt!==pn||bt!==In)&&(i.stencilFunc(he,pn,In),$=he,gt=pn,bt=In)},setOp:function(he,pn,In){(rt!==he||Ot!==pn||Lt!==In)&&(i.stencilOp(he,pn,In),rt=he,Ot=pn,Lt=In)},setLocked:function(he){F=he},setClear:function(he){ve!==he&&(i.clearStencil(he),ve=he)},reset:function(){F=!1,mt=null,$=null,gt=null,bt=null,rt=null,Ot=null,Lt=null,ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,M=null,S=null,_=null,b=null,w=null,A=null,y=new zt(0,0,0),T=0,R=!1,P=null,D=null,z=null,L=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,st=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=st>=2);let Q=null,nt={},Nt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),le=new we().fromArray(Nt),ee=new we().fromArray(At);function ae(F,mt,$,gt){let bt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(F,rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<$;Ot++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(mt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return rt}let J={};J[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(vs),ct(!1),dt(Rc),tt(i.CULL_FACE),ot(kn);function tt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function vt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Wt(F,mt){return u[F]!==mt?(i.bindFramebuffer(F,mt),u[F]=mt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function wt(F,mt){let $=p,gt=!1;if(F){$=d.get(mt),$===void 0&&($=[],d.set(mt,$));let bt=F.textures;if($.length!==bt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ot=bt.length;rt<Ot;rt++)$[rt]=i.COLOR_ATTACHMENT0+rt;$.length=bt.length,gt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,gt=!0);gt&&i.drawBuffers($)}function Xt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let fe={[Xi]:i.FUNC_ADD,[Ou]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};fe[Bu]=i.MIN,fe[ku]=i.MAX;let et={[Hu]:i.ZERO,[Vu]:i.ONE,[Gu]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Yu]:i.DST_COLOR,[Xu]:i.DST_ALPHA,[Wu]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Zu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[$u]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Qu]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,mt,$,gt,bt,rt,Ot,Lt,ve,he){if(F===kn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),F!==Fu){if(F!==m||he!==R){if((M!==Xi||b!==Xi)&&(i.blendEquation(i.FUNC_ADD),M=Xi,b=Xi),he)switch(F){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",F);break}else switch(F){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",F);break}S=null,_=null,w=null,A=null,y.set(0,0,0),T=0,m=F,R=he}return}bt=bt||mt,rt=rt||$,Ot=Ot||gt,(mt!==M||bt!==b)&&(i.blendEquationSeparate(fe[mt],fe[bt]),M=mt,b=bt),($!==S||gt!==_||rt!==w||Ot!==A)&&(i.blendFuncSeparate(et[$],et[gt],et[rt],et[Ot]),S=$,_=gt,w=rt,A=Ot),(Lt.equals(y)===!1||ve!==T)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ve),y.copy(Lt),T=ve),m=F,R=!1}function lt(F,mt){F.side===on?vt(i.CULL_FACE):tt(i.CULL_FACE);let $=F.side===De;mt&&($=!$),ct($),F.blending===zs&&F.transparent===!1?ot(kn):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Bt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function dt(F){F!==Du?(tt(i.CULL_FACE),F!==D&&(F===Rc?i.cullFace(i.BACK):F===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),D=F}function kt(F){F!==z&&(k&&i.lineWidth(F),z=F)}function Bt(F,mt,$){F?(tt(i.POLYGON_OFFSET_FILL),(L!==mt||O!==$)&&(L=mt,O=$,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,$))):vt(i.POLYGON_OFFSET_FILL)}function qt(F){F?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=i.TEXTURE0+W-1),Q!==F&&(i.activeTexture(F),Q=F)}function N(F,mt,$){$===void 0&&(Q===null?$=i.TEXTURE0+W-1:$=Q);let gt=nt[$];gt===void 0&&(gt={type:void 0,texture:void 0},nt[$]=gt),(gt.type!==F||gt.texture!==mt)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(F,mt||J[F]),gt.type=F,gt.texture=mt)}function ce(){let F=nt[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ht(){try{i.texStorage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ut(){try{i.texStorage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){Vt("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){Vt("WebGLState:",F)}}function ft(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Ut(F,mt){f[F]!==mt&&(i.pixelStorei(F,mt),f[F]=mt)}function yt(F){le.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),le.copy(F))}function pt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ft(F,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let gt=$.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(mt,F.name),$.set(F,gt))}function Ht(F,mt){let gt=c.get(mt).get(F);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,F.__bindingPointIndex),l.set(mt,gt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,nt={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,M=null,S=null,_=null,b=null,w=null,A=null,y=new zt(0,0,0),T=0,R=!1,P=null,D=null,z=null,L=null,O=null,le.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:Xt,setBlending:ot,setMaterial:lt,setFlipSided:ct,setCullFace:dt,setLineWidth:kt,setPolygonOffset:Bt,setScissorTest:qt,activeTexture:Zt,bindTexture:N,unbindTexture:ce,compressedTexImage2D:ne,compressedTexImage3D:C,texImage2D:K,texImage3D:j,pixelStorei:Ut,getParameter:ft,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:ht,texStorage3D:ut,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:yt,viewport:pt,reset:Kt}}function J_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):mr("canvas")}function g(C,v,B){let G=1,Z=ne(C);if((Z.width>B||Z.height>B)&&(G=B/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ht=Math.floor(G*Z.width),ut=Math.floor(G*Z.height);u===void 0&&(u=x(ht,ut));let K=v?x(ht,ut):u;return K.width=ht,K.height=ut,K.getContext("2d").drawImage(C,0,0,ht,ut),Gt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ut+")."),K}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,B,G,Z,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;G&&(ut=t.get("EXT_texture_norm16"),ut||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.R16_EXT),B===i.SHORT&&ut&&(K=ut.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),v===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.RG16_EXT),B===i.SHORT&&ut&&(K=ut.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&(K=ut.RGB16_EXT),B===i.SHORT&&ut&&(K=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let j=ht?pr:se.getTransfer(Z);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=j===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.RGBA16_EXT),B===i.SHORT&&ut&&(K=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(C,v){let B;return C?v===null||v===wn||v===ks?B=i.DEPTH24_STENCIL8:v===dn?B=i.DEPTH32F_STENCIL8:v===Bs&&(B=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wn||v===ks?B=i.DEPTH_COMPONENT24:v===dn?B=i.DEPTH_COMPONENT32F:v===Bs&&(B=i.DEPTH_COMPONENT16),B}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),P(v)}function T(C){let v=n.get(C);if(v.__webglInit===void 0)return;let B=C.source,G=d.get(B);if(G){let Z=G[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(G).length===0&&d.delete(B)}n.remove(C)}function R(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let B=C.source,G=d.get(B);delete G[v.__cacheKey],a.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Z=0;Z<v.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Z=B.length;G<Z;G++){let ht=n.get(B[G]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(C)}let D=0;function z(){D=0}function L(){return D}function O(C){D=C}function W(){let C=D;return C>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function k(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function st(C,v){let B=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Q(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function nt(C,v){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Wt(B,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Nt={[Qn]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Ka]:i.MIRRORED_REPEAT},At={[Oe]:i.NEAREST,[nd]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Ro]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},le={[ad]:i.NEVER,[ud]:i.ALWAYS,[od]:i.LESS,[dl]:i.LEQUAL,[ld]:i.EQUAL,[fl]:i.GEQUAL,[cd]:i.GREATER,[hd]:i.NOTEQUAL};function ee(C,v){if(v.type===dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===Ro||v.magFilter===Yr||v.magFilter===Ei||v.minFilter===ke||v.minFilter===Ro||v.minFilter===Yr||v.minFilter===Ei)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Nt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Nt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Nt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,At[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Oe||v.minFilter!==Yr&&v.minFilter!==Ei||v.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let G=v.source,Z=d.get(G);Z===void 0&&(Z={},d.set(G,Z));let ht=k(v);if(ht!==C.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ht].usedTimes++;let ut=Z[C.__cacheKey];ut!==void 0&&(Z[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),C.__cacheKey=ht,C.__webglTexture=Z[ht].texture}return B}function J(C,v,B){return Math.floor(Math.floor(C/B)/v)}function tt(C,v,B,G){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,G,v.data);else{ht.sort((Ut,yt)=>Ut.start-yt.start);let ut=0;for(let Ut=1;Ut<ht.length;Ut++){let yt=ht[ut],pt=ht[Ut],Ft=yt.start+yt.count,Ht=J(pt.start,v.width,4),Kt=J(yt.start,v.width,4);pt.start<=Ft+1&&Ht===Kt&&J(pt.start+pt.count-1,v.width,4)===Ht?yt.count=Math.max(yt.count,pt.start+pt.count-yt.start):(++ut,ht[ut]=pt)}ht.length=ut+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ut=0,yt=ht.length;Ut<yt;Ut++){let pt=ht[Ut],Ft=Math.floor(pt.start/4),Ht=Math.ceil(pt.count/4),Kt=Ft%v.width,F=Math.floor(Ft/v.width),mt=Ht,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Kt,F,mt,$,B,G,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function vt(C,v,B){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let Z=ae(C,v),ht=v.source;e.bindTexture(G,C.__webglTexture,i.TEXTURE0+B);let ut=n.get(ht);if(ht.version!==ut.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let $=se.getPrimaries(se.workingColorSpace),gt=v.colorSpace===si?null:se.getPrimaries(v.colorSpace),bt=v.colorSpace===si||$===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let j=g(v.image,!1,s.maxTextureSize);j=ce(v,j);let ft=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),yt=_(v.internalFormat,ft,Ut,v.normalized,v.colorSpace,v.isVideoTexture);ee(G,v);let pt,Ft=v.mipmaps,Ht=v.isVideoTexture!==!0,Kt=ut.__version===void 0||Z===!0,F=ht.dataReady,mt=w(v,j);if(v.isDepthTexture)yt=b(v.format===Ti,v.type),Kt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,yt,j.width,j.height,0,ft,Ut,null));else if(v.isDataTexture)if(Ft.length>0){Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,mt,yt,Ft[0].width,Ft[0].height);for(let $=0,gt=Ft.length;$<gt;$++)pt=Ft[$],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,Ut,pt.data):e.texImage2D(i.TEXTURE_2D,$,yt,pt.width,pt.height,0,ft,Ut,pt.data);v.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(i.TEXTURE_2D,mt,yt,j.width,j.height),F&&tt(v,j,ft,Ut)):e.texImage2D(i.TEXTURE_2D,0,yt,j.width,j.height,0,ft,Ut,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,yt,Ft[0].width,Ft[0].height,j.depth);for(let $=0,gt=Ft.length;$<gt;$++)if(pt=Ft[$],v.format!==fn)if(ft!==null)if(Ht){if(F)if(v.layerUpdates.size>0){let bt=eh(pt.width,pt.height,v.format,v.type);for(let rt of v.layerUpdates){let Ot=pt.data.subarray(rt*bt/pt.data.BYTES_PER_ELEMENT,(rt+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,rt,pt.width,pt.height,1,ft,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,j.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,yt,pt.width,pt.height,j.depth,0,pt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,j.depth,ft,Ut,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,yt,pt.width,pt.height,j.depth,0,ft,Ut,pt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,mt,yt,Ft[0].width,Ft[0].height);for(let $=0,gt=Ft.length;$<gt;$++)pt=Ft[$],v.format!==fn?ft!==null?Ht?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,yt,pt.width,pt.height,0,pt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,Ut,pt.data):e.texImage2D(i.TEXTURE_2D,$,yt,pt.width,pt.height,0,ft,Ut,pt.data)}else if(v.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,yt,j.width,j.height,j.depth),F)if(v.layerUpdates.size>0){let $=eh(j.width,j.height,v.format,v.type);for(let gt of v.layerUpdates){let bt=j.data.subarray(gt*$/j.data.BYTES_PER_ELEMENT,(gt+1)*$/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,j.width,j.height,1,ft,Ut,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ft,Ut,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,j.width,j.height,j.depth,0,ft,Ut,j.data);else if(v.isData3DTexture)Ht?(Kt&&e.texStorage3D(i.TEXTURE_3D,mt,yt,j.width,j.height,j.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ft,Ut,j.data)):e.texImage3D(i.TEXTURE_3D,0,yt,j.width,j.height,j.depth,0,ft,Ut,j.data);else if(v.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(i.TEXTURE_2D,mt,yt,j.width,j.height);else{let $=j.width,gt=j.height;for(let bt=0;bt<mt;bt++)e.texImage2D(i.TEXTURE_2D,bt,yt,$,gt,0,ft,Ut,null),$>>=1,gt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),j.parentNode!==$){$.appendChild(j),f.add(v),$.onpaint=gt=>{let bt=gt.changedElements;for(let rt of f)bt.includes(rt.image)&&(rt.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let bt=i.RGBA,rt=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,rt,Ot,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ht&&Kt){let $=ne(Ft[0]);e.texStorage2D(i.TEXTURE_2D,mt,yt,$.width,$.height)}for(let $=0,gt=Ft.length;$<gt;$++)pt=Ft[$],Ht?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft,Ut,pt):e.texImage2D(i.TEXTURE_2D,$,yt,ft,Ut,pt);v.generateMipmaps=!1}else if(Ht){if(Kt){let $=ne(j);e.texStorage2D(i.TEXTURE_2D,mt,yt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Ut,j)}else e.texImage2D(i.TEXTURE_2D,0,yt,ft,Ut,j);m(v)&&M(G),ut.__version=ht.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Wt(C,v,B){if(v.image.length!==6)return;let G=ae(C,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let ht=n.get(Z);if(Z.version!==ht.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let ut=se.getPrimaries(se.workingColorSpace),K=v.colorSpace===si?null:se.getPrimaries(v.colorSpace),j=v.colorSpace===si||ut===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ft=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!ft&&!Ut?yt[rt]=g(v.image[rt],!0,s.maxCubemapSize):yt[rt]=Ut?v.image[rt].image:v.image[rt],yt[rt]=ce(v,yt[rt]);let pt=yt[0],Ft=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type),Kt=_(v.internalFormat,Ft,Ht,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,mt=ht.__version===void 0||G===!0,$=Z.dataReady,gt=w(v,pt);ee(i.TEXTURE_CUBE_MAP,v);let bt;if(ft){F&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,pt.width,pt.height);for(let rt=0;rt<6;rt++){bt=yt[rt].mipmaps;for(let Ot=0;Ot<bt.length;Ot++){let Lt=bt[Ot];v.format!==fn?Ft!==null?F?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Kt,Lt.width,Lt.height,0,Lt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Lt.width,Lt.height,Ft,Ht,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Kt,Lt.width,Lt.height,0,Ft,Ht,Lt.data)}}}else{if(bt=v.mipmaps,F&&mt){bt.length>0&&gt++;let rt=ne(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Ft,Ht,yt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,yt[rt].width,yt[rt].height,0,Ft,Ht,yt[rt].data);for(let Ot=0;Ot<bt.length;Ot++){let ve=bt[Ot].image[rt].image;F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,ve.width,ve.height,Ft,Ht,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Kt,ve.width,ve.height,0,Ft,Ht,ve.data)}}else{F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Ht,yt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ft,Ht,yt[rt]);for(let Ot=0;Ot<bt.length;Ot++){let Lt=bt[Ot];F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Ft,Ht,Lt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Kt,Ft,Ht,Lt.image[rt])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),ht.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function wt(C,v,B,G,Z,ht){let ut=r.convert(B.format,B.colorSpace),K=r.convert(B.type),j=_(B.internalFormat,ut,K,B.normalized,B.colorSpace),ft=n.get(v),Ut=n.get(B);if(Ut.__renderTarget=v,!ft.__hasExternalTextures){let yt=Math.max(1,v.width>>ht),pt=Math.max(1,v.height>>ht);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,j,yt,pt,v.depth,0,ut,K,null):e.texImage2D(Z,ht,j,yt,pt,0,ut,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,Ut.__webglTexture,0,qt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,Ut.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let G=v.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ht=b(v.stencilBuffer,Z),ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),ht,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,C)}else{let G=v.textures;for(let Z=0;Z<G.length;Z++){let ht=G[Z],ut=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),j=_(ht.internalFormat,ut,K,ht.normalized,ht.colorSpace);Zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),j,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(C,v,B){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v.depthTexture);let ft=r.convert(v.depthTexture.format),Ut=r.convert(v.depthTexture.type),yt;v.depthTexture.format===Un?yt=i.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(yt=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,yt,v.width,v.height,0,ft,Ut,null)}}else st(v.depthTexture,0);let ht=Z.__webglTexture,ut=qt(v),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,j=v.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Un)Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ht,0);else if(v.depthTexture.format===Ti)Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){let v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=G}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)fe(v.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?fe(v.__webglFramebuffer[0],C,0):fe(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),Xt(v.__webglDepthbuffer[G],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xt(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(C,v,B){let G=n.get(C);v!==void 0&&wt(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&et(C)}function lt(C){let v=C.texture,B=n.get(C),G=n.get(v);C.addEventListener("dispose",y);let Z=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),ht){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let j=0;j<v.mipmaps.length;j++)B.__webglFramebuffer[K][j]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let K=0,j=Z.length;K<j;K++){let ft=n.get(Z[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Zt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let j=Z[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ft=r.convert(j.format,j.colorSpace),Ut=r.convert(j.type),yt=_(j.internalFormat,ft,Ut,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),pt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)wt(B.__webglFramebuffer[K][j],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else wt(B.__webglFramebuffer[K],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let K=0,j=Z.length;K<j;K++){let ft=Z[K],Ut=n.get(ft),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Ut.__webglTexture),ee(yt,ft),wt(B.__webglFramebuffer,C,ft,i.COLOR_ATTACHMENT0+K,yt,0),m(ft)&&M(yt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),ee(K,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)wt(B.__webglFramebuffer[j],C,v,i.COLOR_ATTACHMENT0,K,j);else wt(B.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,K,0);m(v)&&M(K),e.unbindTexture()}C.depthBuffer&&et(C)}function ct(C){let v=C.textures;for(let B=0,G=v.length;B<G;B++){let Z=v[B];if(m(Z)){let ht=S(C),ut=n.get(Z).__webglTexture;e.bindTexture(ht,ut),M(ht),e.unbindTexture()}}}let dt=[],kt=[];function Bt(C){if(C.samples>0){if(Zt(C)===!1){let v=C.textures,B=C.width,G=C.height,Z=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(C),K=v.length>1;if(K)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Ut=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,Z,i.NEAREST),l===!0&&(dt.length=0,kt.length=0,dt.push(i.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ht),kt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Ut=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function N(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ce(C,v){let B=C.colorSpace,G=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==fr&&B!==si&&(se.getTransfer(B)===de?(G!==fn||Z!==je)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",B)),v}function ne(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=ot,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $_(i,t){function e(n,s=si){let r,a=se.getTransfer(s);if(n===je)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===fn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===No)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===Jr||n===$r)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fo||n===Oo||n===zo||n===Bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ko||n===Ho||n===Vo||n===Go||n===Wo||n===jr||n===Xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ko||n===Ho)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Go)return r.COMPRESSED_R11_EAC;if(n===Wo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===Xo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qo||n===Yo||n===Zo||n===Ko||n===Jo||n===$o||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===al||n===ol||n===ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===al)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cl||n===hl||n===Qr||n===ul)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===cl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:j_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Fn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new vh,m={},M=e.getContextAttributes(),S=null,_=null,b=[],w=[],A=new at,y=null,T=null,R=new Be;R.viewport=new we;let P=new Be;P.viewport=new we;let D=[R,P],z=new bo,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=b[J];return tt===void 0&&(tt=new Ts,b[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=b[J];return tt===void 0&&(tt=new Ts,b[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=b[J];return tt===void 0&&(tt=new Ts,b[J]=tt),tt.getHandSpace()};function W(J){let tt=w.indexOf(J.inputSource);if(tt===-1)return;let vt=b[tt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",st);for(let J=0;J<b.length;J++){let tt=w[J];tt!==null&&(w[J]=null,b[J].disconnect(tt))}L=null,O=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(S),d=null,u=null,f=null,s=null,_=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",k),s.addEventListener("inputsourceschange",st),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Wt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Ti:Un,Wt=M.stencil?ks:wn);let Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new $e(u.textureWidth,u.textureHeight,{format:fn,type:je,depthTexture:new xi(u.textureWidth,u.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new $e(d.framebufferWidth,d.framebufferHeight,{format:fn,type:je,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function st(J){for(let tt=0;tt<J.removed.length;tt++){let vt=J.removed[tt],Wt=w.indexOf(vt);Wt>=0&&(w[Wt]=null,b[Wt].disconnect(vt))}for(let tt=0;tt<J.added.length;tt++){let vt=J.added[tt],Wt=w.indexOf(vt);if(Wt===-1){for(let Xt=0;Xt<b.length;Xt++)if(Xt>=w.length){w.push(vt),Wt=Xt;break}else if(w[Xt]===null){w[Xt]=vt,Wt=Xt;break}if(Wt===-1)break}let wt=b[Wt];wt&&wt.connect(vt)}}let Y=new I,Q=new I;function nt(J,tt,vt){Y.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);let Wt=Y.distanceTo(Q),wt=tt.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,fe=wt[14]/(wt[10]-1),et=wt[14]/(wt[10]+1),ot=(wt[9]+1)/wt[5],lt=(wt[9]-1)/wt[5],ct=(wt[8]-1)/wt[0],dt=(Xt[8]+1)/Xt[0],kt=fe*ct,Bt=fe*dt,qt=Wt/(-ct+dt),Zt=qt*-ct;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Zt),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let N=fe+qt,ce=et+qt,ne=kt-Zt,C=Bt+(Wt-Zt),v=ot*et/ce*N,B=lt*et/ce*N;J.projectionMatrix.makePerspective(ne,C,v,B,N,ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Nt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,vt=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),z.near=P.near=R.near=tt,z.far=P.far=R.far=vt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Wt=J.parent,wt=z.cameras;Nt(z,Wt);for(let Xt=0;Xt<wt.length;Xt++)Nt(wt[Xt],Wt);wt.length===2?nt(z,R,P):z.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),At(J,z,Wt)};function At(J,tt,vt){vt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let le=null;function ee(J,tt){if(h=tt.getViewerPose(c||a),p=tt,h!==null){let vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Wt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Wt=!0);for(let et=0;et<vt.length;et++){let ot=vt[et],lt=null;if(d!==null)lt=d.getViewport(ot);else{let dt=f.getViewSubImage(u,ot);lt=dt.viewport,et===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let ct=D[et];ct===void 0&&(ct=new Be,ct.layers.enable(et),ct.viewport=new we,D[et]=ct),ct.matrix.fromArray(ot.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ot.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),et===0&&(z.matrix.copy(ct.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Wt===!0&&z.cameras.push(ct)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let et=f.getDepthInformation(vt[0]);et&&et.isValid&&et.texture&&g.init(et,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let et=0;et<vt.length;et++){let ot=vt[et].camera;if(ot){let lt=m[ot];lt||(lt=new Er,m[ot]=lt);let ct=f.getCameraImage(ot);lt.sourceTexture=ct}}}}for(let vt=0;vt<b.length;vt++){let Wt=w[vt],wt=b[vt];Wt!==null&&wt!==void 0&&wt.update(Wt,tt,c||a)}le&&le(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let ae=new Xd;ae.setAnimationLoop(ee),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}},ty=new te,$d=new Yt;$d.set(-1,0,0,0,1,0,0,0,1);function ey(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,S,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===De&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===De&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),S=M.envMap,_=M.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($d),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ny(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,b){let w=b.program;n.uniformBlockBinding(_,w)}function c(_,b){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(_,A);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let b=f();_.__bindingPointIndex=b;let w=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let b=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=w.length;y<T;y++){let R=w[y];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)d(R[P],y,P,A);else d(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,b,w,A){if(x(_,b,w,A)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let D=T[P],z=m(D);p(D,_.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,b,w){typeof _=="number"||typeof _=="boolean"?b[0]=_:_.isMatrix3?(b[0]=_.elements[0],b[1]=_.elements[1],b[2]=_.elements[2],b[3]=0,b[4]=_.elements[3],b[5]=_.elements[4],b[6]=_.elements[5],b[7]=0,b[8]=_.elements[6],b[9]=_.elements[7],b[10]=_.elements[8],b[11]=0):ArrayBuffer.isView(_)?b.set(new _.constructor(_.buffer,_.byteOffset,b.length)):_.toArray(b,w)}function x(_,b,w,A){let y=_.value,T=b+"_"+w;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(_){let b=_.uniforms,w=0,A=16;for(let T=0,R=b.length;T<R;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let D=0,z=P.length;D<z;D++){let L=P[D],O=Array.isArray(L.value)?L.value:[L.value];for(let W=0,k=O.length;W<k;W++){let st=O[W],Y=m(st),Q=w%A,nt=Q%Y.boundary,Nt=Q+nt;w+=nt,Nt!==0&&A-Nt<Y.storage&&(w+=A-Nt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Y.storage}}}let y=w%A;return y>0&&(w+=A-y),_.__size=w,_.__cache={},this}function m(_){let b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=48,b.storage=48):_.isMatrix4?(b.boundary=64,b.storage=64):_.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",_),b}function M(_){let b=_.target;b.removeEventListener("dispose",M);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function S(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function sy(){return Hn===null&&(Hn=new Sr(iy,16,16,Ai,En),Hn.name="DFG_LUT",Hn.minFilter=ke,Hn.magFilter=ke,Hn.wrapS=Dn,Hn.wrapT=Dn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var _l=class{constructor(t={}){let{canvas:e=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=je}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=d,g=new Set([Uo,No,Do]),m=new Set([je,wn,Bs,ks,Io,Po]),M=new Uint32Array(4),S=new Int32Array(4),_=new I,b=null,w=null,A=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null,z=null,L=null,O=null;this._outputColorSpace=ze;let W=0,k=0,st=null,Y=-1,Q=null,nt=new we,Nt=new we,At=null,le=new zt(0),ee=0,ae=e.width,J=e.height,tt=1,vt=null,Wt=null,wt=new we(0,0,ae,J),Xt=new we(0,0,ae,J),fe=!1,et=new Is,ot=!1,lt=!1,ct=new te,dt=new I,kt=new we,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Zt(){return st===null?tt:1}let N=n;function ce(E,U){return e.getContext(E,U)}let ne,C,v,B,G,Z,ht,ut,K,j,ft,Ut,yt,pt,Ft,Ht,Kt,F,mt,$,gt,bt,rt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",pn,!1),N===null){let U="webgl2";if(N=ce(U,E),N===null)throw ce(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(E){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Vt("WebGLRenderer: "+E.message),E}function Ot(){ne=new ux(N),ne.init(),gt=new $_(N,ne),C=new ex(N,ne,t,gt),v=new K_(N,ne),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),z=N.createFramebuffer(),L=N.createFramebuffer(),O=N.createFramebuffer(),B=new px(N),G=new U_,Z=new J_(N,ne,v,G,C,gt,B),ht=new hx(R),ut=new gm(N),bt=new Qg(N,ut),K=new dx(N,ut,B,bt),j=new gx(N,K,ut,bt,B),F=new mx(N,C,Z),Ft=new nx(G),ft=new N_(R,ht,ne,C,bt,Ft),Ut=new ey(R,G),yt=new O_,pt=new G_(ne),Kt=new jg(R,ht,v,j,p,l),Ht=new Z_(R,j,C),rt=new ny(N,B,C,v),mt=new tx(N,ne,B),$=new fx(N,ne,B),B.programs=ft.programs,R.capabilities=C,R.extensions=ne,R.properties=G,R.renderLists=yt,R.shadowMap=Ht,R.state=v,R.info=B}x!==je&&(T=new _x(x,e.width,e.height,o,s,r));let Lt=new Mh(R,N);this.xr=Lt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(ae,J,!1))},this.getSize=function(E){return E.set(ae,J)},this.setSize=function(E,U,q=!0){if(Lt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,J=U,e.width=Math.floor(E*tt),e.height=Math.floor(U*tt),q===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ae*tt,J*tt).floor()},this.setDrawingBufferSize=function(E,U,q){ae=E,J=U,tt=q,e.width=Math.floor(E*q),e.height=Math.floor(U*q),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===je){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,q,H){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,q,H),v.viewport(nt.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,U,q,H){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,U,q,H),v.scissor(Nt.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){v.setScissorTest(fe=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,q=!0){let H=0;if(E){let V=!1;if(st!==null){let St=st.texture.format;V=g.has(St)}if(V){let St=st.texture.type,Tt=m.has(St),Mt=Kt.getClearColor(),Ct=Kt.getClearAlpha(),Dt=Mt.r,$t=Mt.g,ie=Mt.b;Tt?(M[0]=Dt,M[1]=$t,M[2]=ie,M[3]=Ct,N.clearBufferuiv(N.COLOR,0,M)):(S[0]=Dt,S[1]=$t,S[2]=ie,S[3]=Ct,N.clearBufferiv(N.COLOR,0,S))}else H|=N.COLOR_BUFFER_BIT}U&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Kt.dispose(),yt.dispose(),pt.dispose(),G.dispose(),ht.dispose(),j.dispose(),bt.dispose(),rt.dispose(),ft.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Vh),Lt.removeEventListener("sessionend",Gh),Di.stop()};function ve(E){E.preventDefault(),gr("WebGLRenderer: Context Lost."),P=!0}function he(){gr("WebGLRenderer: Context Restored."),P=!1;let E=B.autoReset,U=Ht.enabled,q=Ht.autoUpdate,H=Ht.needsUpdate,V=Ht.type;Ot(),B.autoReset=E,Ht.enabled=U,Ht.autoUpdate=q,Ht.needsUpdate=H,Ht.type=V}function pn(E){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function In(E){let U=E.target;U.removeEventListener("dispose",In),Ff(U)}function Ff(E){Of(E),G.remove(E)}function Of(E){let U=G.get(E).programs;U!==void 0&&(U.forEach(function(q){ft.releaseProgram(q)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,q,H,V,St){U===null&&(U=Bt);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=kf(E,U,q,H,V);v.setMaterial(H,Tt);let Ct=q.index,Dt=1;if(H.wireframe===!0){if(Ct=K.getWireframeAttribute(q),Ct===void 0)return;Dt=2}let $t=q.drawRange,ie=q.attributes.position,It=$t.start*Dt,ue=($t.start+$t.count)*Dt;St!==null&&(It=Math.max(It,St.start*Dt),ue=Math.min(ue,(St.start+St.count)*Dt)),Ct!==null?(It=Math.max(It,0),ue=Math.min(ue,Ct.count)):ie!=null&&(It=Math.max(It,0),ue=Math.min(ue,ie.count));let Ce=ue-It;if(Ce<0||Ce===1/0)return;bt.setup(V,H,Mt,q,Ct);let Se,_e=mt;if(Ct!==null&&(Se=ut.get(Ct),_e=$,_e.setIndex(Se)),V.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Zt()),_e.setMode(N.LINES)):_e.setMode(N.TRIANGLES);else if(V.isLine){let He=H.linewidth;He===void 0&&(He=1),v.setLineWidth(He*Zt()),V.isLineSegments?_e.setMode(N.LINES):V.isLineLoop?_e.setMode(N.LINE_LOOP):_e.setMode(N.LINE_STRIP)}else V.isPoints?_e.setMode(N.POINTS):V.isSprite&&_e.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))_e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let He=V._multiDrawStarts,Et=V._multiDrawCounts,qe=V._multiDrawCount,oe=Ct?ut.get(Ct).bytesPerElement:1,cn=G.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<qe;Pn++)cn.setValue(N,"_gl_DrawID",Pn),_e.render(He[Pn]/oe,Et[Pn])}else if(V.isInstancedMesh)_e.renderInstances(It,Ce,V.count);else if(q.isInstancedBufferGeometry){let He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Et=Math.min(q.instanceCount,He);_e.renderInstances(It,Ce,Et)}else _e.render(It,Ce)};function Hh(E,U,q,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),ot===!0&&Ft.setState(E,q,!1),E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,da(E,U,H),E.side=bi,E.needsUpdate=!0,da(E,U,H),E.side=on):da(E,U,H)}this.compile=function(E,U,q=null){q===null&&(q=E),D!==null&&D.renderStart(E,U,q),w=pt.get(q),w.init(U),y.push(w),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==q&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),lt=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,lt),ot===!0&&Ft.setGlobalState(this.clippingPlanes,U),D!==null&&Ht.render(w.state.shadowsArray,q,U);let H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let St=V.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){let Mt=St[Tt];Hh(Mt,q,U,V),H.add(Mt)}else Hh(St,q,U,V),H.add(St)}),w=y.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,U,q=null){let H=this.compile(E,U,q);return new Promise(V=>{function St(){if(H.forEach(function(Tt){let Ct=G.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&H.delete(Tt)}),H.size===0){V(E);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Hl=null;function zf(E){Hl&&Hl(E)}function Vh(){Di.stop()}function Gh(){Di.start()}let Di=new Xd;Di.setAnimationLoop(zf),typeof self!="undefined"&&Di.setContext(self),this.setAnimationLoop=function(E){Hl=E,Lt.setAnimationLoop(E),E===null?Di.stop():Di.start()},Lt.addEventListener("sessionstart",Vh),Lt.addEventListener("sessionend",Gh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,U);let q=Lt.enabled===!0&&Lt.isPresenting===!0,H=T!==null&&(st===null||q)&&T.begin(R,st);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,st),w=pt.get(E,y.length),w.init(U),w.state.textureUnits=Z.getTextureUnits(),y.push(w),ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(ct,vn,U.reversedDepth),lt=this.localClippingEnabled,ot=Ft.init(this.clippingPlanes,lt),b=yt.get(E,A.length),b.init(),A.push(b),Lt.enabled===!0&&Lt.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Vl(Tt,U,-1/0,R.sortObjects)}Vl(E,U,0,R.sortObjects),b.finish(),D!==null&&D.updateLights(w.state.lightsArray),R.sortObjects===!0&&b.sort(vt,Wt),qt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,qt&&Kt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ft.beginShadows();let V=w.state.shadowsArray;if(Ht.render(V,E,U),ot===!0&&Ft.endShadows(),(H&&T.hasRenderPass())===!1){let Tt=b.opaque,Mt=b.transmissive;if(w.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(Mt.length>0)for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){let ie=Ct[Dt];Xh(Tt,Mt,E,ie)}qt&&Kt.render(E);for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){let ie=Ct[Dt];Wh(b,E,ie,ie.viewport)}}else Mt.length>0&&Xh(Tt,Mt,E,U),qt&&Kt.render(E),Wh(b,E,U)}st!==null&&k===0&&(Z.updateMultisampleRenderTarget(st),Z.updateRenderTargetMipmap(st)),H&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),bt.resetDefaultState(),Y=-1,Q=null,y.pop(),y.length>0?(w=y[y.length-1],Z.setTextureUnits(w.state.textureUnits),ot===!0&&Ft.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,D!==null&&D.renderEnd()};function Vl(E,U,q,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(et)){H&&kt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);let Tt=j.update(E),Mt=E.material;Mt.visible&&b.push(E,Tt,Mt,q,kt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(et))){let Tt=j.update(E),Mt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),kt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),kt.copy(Tt.boundingSphere.center)),kt.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){let Ct=Tt.groups;for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){let ie=Ct[Dt],It=Mt[ie.materialIndex];It&&It.visible&&b.push(E,Tt,It,q,kt.z,ie,U)}}else Mt.visible&&b.push(E,Tt,Mt,q,kt.z,null,U)}}let St=E.children;for(let Tt=0,Mt=St.length;Tt<Mt;Tt++)Vl(St[Tt],U,q,H)}function Wh(E,U,q,H){let{opaque:V,transmissive:St,transparent:Tt}=E;w.setupLightsView(q),ot===!0&&Ft.setGlobalState(R.clippingPlanes,q),H&&v.viewport(nt.copy(H)),V.length>0&&ua(V,U,q),St.length>0&&ua(St,U,q),Tt.length>0&&ua(Tt,U,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Xh(E,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let It=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new $e(1,1,{generateMipmaps:!0,type:It?En:je,minFilter:Ei,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let St=w.state.transmissionRenderTarget[H.id],Tt=H.viewport||nt;St.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(le),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Kt.render(q);let $t=R.toneMapping;R.toneMapping=bn;let ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),ot===!0&&Ft.setGlobalState(R.clippingPlanes,H),ua(E,q,H),Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ue=0,Ce=U.length;ue<Ce;ue++){let Se=U[ue],{object:_e,geometry:He,material:Et,group:qe}=Se;if(Et.side===on&&_e.layers.test(H.layers)){let oe=Et.side;Et.side=De,Et.needsUpdate=!0,qh(_e,q,H,He,Et,qe),Et.side=oe,Et.needsUpdate=!0,It=!0}}It===!0&&(Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,Ct,Dt),R.setClearColor(le,ee),ie!==void 0&&(H.viewport=ie),R.toneMapping=$t}function ua(E,U,q){let H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,St=E.length;V<St;V++){let Tt=E[V],{object:Mt,geometry:Ct,group:Dt}=Tt,$t=Tt.material;$t.allowOverride===!0&&H!==null&&($t=H),Mt.layers.test(q.layers)&&qh(Mt,U,q,Ct,$t,Dt)}}function qh(E,U,q,H,V,St){D!==null&&V.isNodeMaterial&&D.setObject(E,V),E.onBeforeRender(R,U,q,H,V,St),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,U,q,H,E,St),V.transparent===!0&&V.side===on&&V.forceSinglePass===!1?(V.side=De,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,E,St),V.side=bi,V.needsUpdate=!0,R.renderBufferDirect(q,U,H,V,E,St),V.side=on):R.renderBufferDirect(q,U,H,V,E,St),E.onAfterRender(R,U,q,H,V,St)}function da(E,U,q){U.isScene!==!0&&(U=Bt);let H=G.get(E),V=w.state.lights,St=w.state.shadowsArray,Tt=V.state.version,Mt=ft.getParameters(E,V.state,St,U,q,w.state.lightProbeGridArray),Ct=ft.getProgramCacheKey(Mt),Dt=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let $t=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=ht.get(E.envMap||H.environment,$t),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",In),Dt=new Map,H.programs=Dt);let ie=Dt.get(Ct);if(ie!==void 0){if(H.currentProgram===ie&&H.lightsStateVersion===Tt)return Zh(E,Mt),ie}else Mt.uniforms=ft.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,q,Mt),E.onBeforeCompile(Mt,R),ie=ft.acquireProgram(Mt,Ct),Dt.set(Ct,ie),H.uniforms=Mt.uniforms;let It=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=Ft.uniform),Zh(E,Mt),H.needsLights=Vf(E),H.lightsStateVersion=Tt,H.needsLights&&(It.ambientLightColor.value=V.state.ambient,It.lightProbe.value=V.state.probe,It.sunLights.value=V.state.sun,It.sunLightShadows.value=V.state.sunShadow,It.directionalLights.value=V.state.directional,It.directionalLightShadows.value=V.state.directionalShadow,It.spotLights.value=V.state.spot,It.spotLightShadows.value=V.state.spotShadow,It.rectAreaLights.value=V.state.rectArea,It.ltc_1.value=V.state.rectAreaLTC1,It.ltc_2.value=V.state.rectAreaLTC2,It.pointLights.value=V.state.point,It.pointLightShadows.value=V.state.pointShadow,It.hemisphereLights.value=V.state.hemi,It.sunShadowMatrix.value=V.state.sunShadowMatrix,It.sunShadowCascade.value=V.state.sunShadowCascade,It.directionalShadowMatrix.value=V.state.directionalShadowMatrix,It.spotLightMatrix.value=V.state.spotLightMatrix,It.spotLightMap.value=V.state.spotLightMap,It.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=ie,H.uniformsList=null,ie}function Yh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Zh(E,U){let q=G.get(E);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Bf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let q=0,H=E.length;q<H;q++){let V=E[q];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function kf(E,U,q,H,V){U.isScene!==!0&&(U=Bt),Z.resetTextureUnits();let St=U.fog,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Mt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:se.workingColorSpace,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Dt=ht.get(H.envMap||Tt,Ct),$t=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ie=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),It=!!q.morphAttributes.position,ue=!!q.morphAttributes.normal,Ce=!!q.morphAttributes.color,Se=bn;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Se=R.toneMapping);let _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,He=_e!==void 0?_e.length:0,Et=G.get(H),qe=w.state.lights;if(ot===!0&&(lt===!0||E!==Q)){let Me=E===Q&&H.id===Y;Ft.setState(H,E,Me)}let oe=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==qe.state.version||Et.outputColorSpace!==Mt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Dt||H.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ft.numPlanes||Et.numIntersection!==Ft.numIntersection)||Et.vertexAlphas!==$t||Et.vertexTangents!==ie||Et.morphTargets!==It||Et.morphNormals!==ue||Et.morphColors!==Ce||Et.toneMapping!==Se||Et.morphTargetsCount!==He||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Et.__version=H.version);let cn=Et.currentProgram;oe===!0&&(cn=da(H,U,V),D&&H.isNodeMaterial&&D.onUpdateProgram(H,cn,Et));let Pn=!1,li=!1,Qi=!1,ge=cn.getUniforms(),Re=Et.uniforms;if(v.useProgram(cn.program)&&(Pn=!0,li=!0,Qi=!0),H.id!==Y&&(Y=H.id,li=!0),Et.needsLights){let Me=Bf(w.state.lightProbeGridArray,V);Et.lightProbeGrid!==Me&&(Et.lightProbeGrid=Me,li=!0)}if(Pn||Q!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(N,"projectionMatrix",E.projectionMatrix),ge.setValue(N,"viewMatrix",E.matrixWorldInverse);let hi=ge.map.cameraPosition;hi!==void 0&&hi.setValue(N,dt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ge.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),Q!==E&&(Q=E,li=!0,Qi=!0)}if(Et.needsLights&&(qe.state.sunShadowMap.length>0&&ge.setValue(N,"sunShadowMap",qe.state.sunShadowMap,Z),qe.state.directionalShadowMap.length>0&&ge.setValue(N,"directionalShadowMap",qe.state.directionalShadowMap,Z),qe.state.spotShadowMap.length>0&&ge.setValue(N,"spotShadowMap",qe.state.spotShadowMap,Z),qe.state.pointShadowMap.length>0&&ge.setValue(N,"pointShadowMap",qe.state.pointShadowMap,Z)),V.isSkinnedMesh){ge.setOptional(N,V,"bindMatrix"),ge.setOptional(N,V,"bindMatrixInverse");let Me=V.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ge.setValue(N,"boneTexture",Me.boneTexture,Z))}V.isBatchedMesh&&(ge.setOptional(N,V,"batchingTexture"),ge.setValue(N,"batchingTexture",V._matricesTexture,Z),ge.setOptional(N,V,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",V._indirectTexture,Z),ge.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",V._colorsTexture,Z));let ci=q.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&F.update(V,q,cn),(li||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,ge.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Re.envMapIntensity.value=U.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=sy()),li){if(ge.setValue(N,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&Hf(Re,Qi),St&&H.fog===!0&&Ut.refreshFogUniforms(Re,St),Ut.refreshMaterialUniforms(Re,H,tt,J,w.state.transmissionRenderTarget[E.id]),Et.needsLights&&Et.lightProbeGrid){let Me=Et.lightProbeGrid;Re.probesSH.value=Me.texture,Re.probesMin.value.copy(Me.boundingBox.min),Re.probesMax.value.copy(Me.boundingBox.max),Re.probesResolution.value.copy(Me.resolution)}Ws.upload(N,Yh(Et),Re,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ws.upload(N,Yh(Et),Re,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ge.setValue(N,"center",V.center),ge.setValue(N,"modelViewMatrix",V.modelViewMatrix),ge.setValue(N,"normalMatrix",V.normalMatrix),ge.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){let Me=H.uniformsGroups;for(let hi=0,ts=Me.length;hi<ts;hi++){let Jh=Me[hi];rt.update(Jh,cn),rt.bind(Jh,cn)}}return cn}function Hf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Vf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(E,U,q){let H=G.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=U,G.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let q=G.get(E);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,q=0){st=E,W=U,k=q;let H=null,V=!1,St=!1;if(E){let Mt=G.get(E);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(N.FRAMEBUFFER,Mt.__webglFramebuffer),nt.copy(E.viewport),Nt.copy(E.scissor),At=E.scissorTest,v.viewport(nt),v.scissor(Nt),v.setScissorTest(At),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Mt.__hasExternalTextures)Z.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $t=E.depthTexture;if(Mt.__boundDepthTexture!==$t){if($t!==null&&G.has($t)&&(E.width!==$t.image.width||E.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);let Dt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?H=Dt[U][q]:H=Dt[U],V=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?H=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?H=Dt[q]:H=Dt,nt.copy(E.viewport),Nt.copy(E.scissor),At=E.scissorTest}else nt.copy(wt).multiplyScalar(tt).floor(),Nt.copy(Xt).multiplyScalar(tt).floor(),At=fe;if(q!==0&&(H=z),v.bindFramebuffer(N.FRAMEBUFFER,H)&&v.drawBuffers(E,H),v.viewport(nt),v.scissor(Nt),v.setScissorTest(At),V){let Mt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,q)}else if(St){let Mt=U;for(let Ct=0;Ct<E.textures.length;Ct++){let Dt=G.get(E.textures[Ct]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,q,Mt)}}else if(E!==null&&q!==0){let Mt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Mt.__webglTexture,q)}Y=-1};function Kh(E){let U=G.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,q,H,V,St,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){v.bindFramebuffer(N.FRAMEBUFFER,Ct);try{let Dt=E.textures[Mt],$t=Dt.format,ie=Dt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let It=Kh(Dt);if(It.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&q>=0&&q<=E.height-V&&N.readPixels(U,q,H,V,gt.convert($t),gt.convert(ie),St)}finally{let Dt=st!==null?G.get(st).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,q,H,V,St,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(U>=0&&U<=E.width-H&&q>=0&&q<=E.height-V){v.bindFramebuffer(N.FRAMEBUFFER,Ct);let Dt=E.textures[Mt],$t=Dt.format,ie=Dt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Mt);let It=Kh(Dt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.bufferData(N.PIXEL_PACK_BUFFER,St.byteLength,N.STREAM_READ),N.readPixels(U,q,H,V,gt.convert($t),gt.convert(ie),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ce=st!==null?G.get(st).__webglFramebuffer:null;v.bindFramebuffer(N.FRAMEBUFFER,Ce);let Se=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await pd(N,Se,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,St),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ue),N.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,q=0){let H=Math.pow(2,-q),V=Math.floor(E.image.width*H),St=Math.floor(E.image.height*H),Tt=U!==null?U.x:0,Mt=U!==null?U.y:0;Z.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Tt,Mt,V,St),v.unbindTexture()},this.copyTextureToTexture=function(E,U,q=null,H=null,V=0,St=0){let Tt,Mt,Ct,Dt,$t,ie,It,ue,Ce,Se=E.isCompressedTexture?E.mipmaps[St]:E.image;if(q!==null)Tt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Dt=q.min.x,$t=q.min.y,ie=q.isBox3?q.min.z:0;else{let Re=Math.pow(2,-V);Tt=Math.floor(Se.width*Re),Mt=Math.floor(Se.height*Re),E.isDataArrayTexture?Ct=Se.depth:E.isData3DTexture?Ct=Math.floor(Se.depth*Re):Ct=1,Dt=0,$t=0,ie=0}H!==null?(It=H.x,ue=H.y,Ce=H.z):(It=0,ue=0,Ce=0);let _e=gt.convert(U.format),He=gt.convert(U.type),Et;U.isData3DTexture?(Z.setTexture3D(U,0),Et=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),Et=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),Et=N.TEXTURE_2D),v.activeTexture(N.TEXTURE0),v.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let qe=v.getParameter(N.UNPACK_ROW_LENGTH),oe=v.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=v.getParameter(N.UNPACK_SKIP_PIXELS),Pn=v.getParameter(N.UNPACK_SKIP_ROWS),li=v.getParameter(N.UNPACK_SKIP_IMAGES);v.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),v.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(N.UNPACK_SKIP_ROWS,$t),v.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);let Qi=E.isDataArrayTexture||E.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Re=G.get(E),ci=G.get(U),Me=G.get(Re.__renderTarget),hi=G.get(ci.__renderTarget);v.bindFramebuffer(N.READ_FRAMEBUFFER,Me.__webglFramebuffer),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ts=0;ts<Ct;ts++)Qi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(E).__webglTexture,V,ie+ts),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(U).__webglTexture,St,Ce+ts)),N.blitFramebuffer(Dt,$t,Tt,Mt,It,ue,Tt,Mt,N.DEPTH_BUFFER_BIT,N.NEAREST);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||G.has(E)){let Re=G.get(E),ci=G.get(U);v.bindFramebuffer(N.READ_FRAMEBUFFER,L),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,O);for(let Me=0;Me<Ct;Me++)Qi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.__webglTexture,V,ie+Me):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Re.__webglTexture,V),ge?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ci.__webglTexture,St,Ce+Me):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ci.__webglTexture,St),V!==0?N.blitFramebuffer(Dt,$t,Tt,Mt,It,ue,Tt,Mt,N.COLOR_BUFFER_BIT,N.NEAREST):ge?N.copyTexSubImage3D(Et,St,It,ue,Ce+Me,Dt,$t,Tt,Mt):N.copyTexSubImage2D(Et,St,It,ue,Dt,$t,Tt,Mt);v.bindFramebuffer(N.READ_FRAMEBUFFER,null),v.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Et,St,It,ue,Ce,Tt,Mt,Ct,_e,He,Se.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,St,It,ue,Ce,Tt,Mt,Ct,_e,Se.data):N.texSubImage3D(Et,St,It,ue,Ce,Tt,Mt,Ct,_e,He,Se):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,St,It,ue,Tt,Mt,_e,He,Se.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,St,It,ue,Se.width,Se.height,_e,Se.data):N.texSubImage2D(N.TEXTURE_2D,St,It,ue,Tt,Mt,_e,He,Se);v.pixelStorei(N.UNPACK_ROW_LENGTH,qe),v.pixelStorei(N.UNPACK_IMAGE_HEIGHT,oe),v.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),v.pixelStorei(N.UNPACK_SKIP_ROWS,Pn),v.pixelStorei(N.UNPACK_SKIP_IMAGES,li),St===0&&U.generateMipmaps&&N.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){W=0,k=0,st=null,v.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Ml=class extends ki{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Le;t.deleteAttribute("uv");let e=new Jt({side:De}),n=new Jt,s=new Vr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Bn(t,n,6),o=new Pe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(t,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(t,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pt(t,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Pt(t,Zs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Pt(t,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Pt(t,Zs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zs(i){return new Or({color:0,emissive:16777215,emissiveIntensity:i})}var jd=Math.PI*2,Qe=18,Rt=(i,t,e)=>i<t?t:i>e?e:i,_t=(i,t,e)=>i+(t-i)*e,it=(i,t)=>i+Math.random()*(t-i);var sa=i=>i[Math.floor(Math.random()*i.length)];var Tn=(i,t)=>1-Math.exp(-i*t),ra=i=>1-(1-i)*(1-i),aa=i=>.5-.5*Math.cos(Math.PI*i);function Qd(i,t,e){return i<t?Math.min(i+e,t):Math.max(i-e,t)}function tn(i){return i=(i+Math.PI)%jd,i<0&&(i+=jd),i-Math.PI}function ri(i,t,e){let n=tn(t-i);return i+Rt(n,-e,e)}function An(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}var Ae={s:0,t:0,d2:0};function oa(i,t,e,n,s,r,a,o,l,c,h,f,u=Ae){let d=n-i,p=s-t,x=r-e,g=c-a,m=h-o,M=f-l,S=i-a,_=t-o,b=e-l,w=d*d+p*p+x*x,A=g*g+m*m+M*M,y=g*S+m*_+M*b,T,R;if(w<1e-9&&A<1e-9)T=0,R=0;else if(w<1e-9)T=0,R=Rt(y/A,0,1);else{let L=d*S+p*_+x*b;if(A<1e-9)R=0,T=Rt(-L/w,0,1);else{let O=d*g+p*m+x*M,W=w*A-O*O;T=W>1e-12?Rt((O*y-L*A)/W,0,1):0,R=(O*T+y)/A,R<0?(R=0,T=Rt(-L/w,0,1)):R>1&&(R=1,T=Rt((O-L)/w,0,1))}}let P=i+d*T-(a+g*R),D=t+p*T-(o+m*R),z=e+x*T-(l+M*R);return u.s=T,u.t=R,u.d2=P*P+D*D+z*z,u}var Ri={t:0,d2:0};function Sl(i,t,e,n,s,r,a,o,l,c=Ri){let h=a-n,f=o-s,u=l-r,d=h*h+f*f+u*u,p=d>0?Rt(((i-n)*h+(t-s)*f+(e-r)*u)/d,0,1):0,x=n+h*p-i,g=s+f*p-t,m=r+u*p-e;return c.t=p,c.d2=x*x+g*g+m*m,c}function Sh(i,t){try{let e=parseInt(localStorage.getItem(i),10);return Number.isFinite(e)?e:t}catch{return t}}function bh(i,t){try{localStorage.setItem(i,String(t))}catch{}}var xe=(()=>{let i=null,t=null,e=null,n=!1,s={};function r(){if(i){i.state==="suspended"&&i.resume();return}let h=window.AudioContext||window.webkitAudioContext;if(!h)return;try{i=new h}catch{i=null;return}t=i.createGain(),t.gain.value=.5;let f=i.createDynamicsCompressor();t.connect(f),f.connect(i.destination),e=i.createBuffer(1,i.sampleRate,i.sampleRate);let u=e.getChannelData(0);for(let d=0;d<u.length;d++)u[d]=Math.random()*2-1}function a(h,f){if(!i||n||i.state!=="running")return!1;let u=i.currentTime;return s[h]!==void 0&&u-s[h]<f?!1:(s[h]=u,!0)}function o(h,f,u,d){h.gain.setValueAtTime(1e-4,f),h.gain.exponentialRampToValueAtTime(d,f+Math.min(.012,u*.25)),h.gain.exponentialRampToValueAtTime(1e-4,f+u)}function l(h,f,u,d,p,x,g){let m=i.createBufferSource();m.buffer=e,m.loop=!0;let M=i.createBiquadFilter();M.type=u,M.Q.value=x,M.frequency.setValueAtTime(d,h),M.frequency.exponentialRampToValueAtTime(p,h+f);let S=i.createGain();o(S,h,f,g),m.connect(M),M.connect(S),S.connect(t),m.start(h,Math.random()*.8),m.stop(h+f+.05)}function c(h,f,u,d,p,x){let g=i.createOscillator();g.type=u,g.frequency.setValueAtTime(d,h),g.frequency.exponentialRampToValueAtTime(p,h+f);let m=i.createGain();o(m,h,f,x),g.connect(m),m.connect(t),g.start(h),g.stop(h+f+.05)}return{init:r,toggleMute(){return n=!n,n},get muted(){return n},swoosh(h){if(!a("swoosh",.03))return;let f=i.currentTime,u=h===2;l(f,u?.28:.16,"bandpass",u?400:700,u?2600:3400,1.4,.32)},slice(){if(!a("slice",.02))return;let h=i.currentTime;l(h,.08,"highpass",2500,7e3,.7,.3),c(h,.2,"triangle",it(1800,2300),1100,.06),l(h+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!a("wound",.03))return;let h=i.currentTime;l(h,.18,"lowpass",900,150,1,.45),c(h,.12,"sine",160,60,.25)},punch(){if(!a("punch",.05))return;let h=i.currentTime;c(h,.15,"sine",140,45,.5),l(h,.1,"lowpass",1500,200,1,.35)},hurt(){if(!a("hurt",.1))return;let h=i.currentTime;c(h,.3,"sawtooth",320,90,.12)},die(){if(!a("die",.5))return;let h=i.currentTime;c(h,1,"sawtooth",240,40,.14),l(h,.6,"lowpass",800,60,1,.3)},thud(h){if(!a("thud",.06))return;let f=i.currentTime,u=Rt(h/2500,.04,.3);c(f,.12,"sine",120,45,u),l(f,.07,"lowpass",500,120,1,u*.8)},clang(){if(!a("clang",.05))return;let h=i.currentTime;c(h,.35,"square",1750,1600,.05),c(h,.3,"triangle",2650,2500,.07),l(h,.06,"highpass",4e3,8e3,1,.25)},jump(h){if(!a("jump",.05))return;let f=i.currentTime,u=h||1;c(f,.12,"sine",260*u,560*u,.07)},combo(h){if(!a("combo",.04))return;let f=i.currentTime,u=520*Math.pow(1.06,Math.min(h,24));c(f,.14,"triangle",u,u*1.5,.07)},enemySwing(){a("eswing",.05)&&l(i.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!a("splash",.1))return;let h=i.currentTime;l(h,.5,"lowpass",2400,300,.8,.4),l(h+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!a("win",1))return;let h=i.currentTime;[523,659,784,1047].forEach((f,u)=>c(h+u*.09,.22,"triangle",f,f,.08))},skid(){if(!a("skid",.2))return;let h=i.currentTime;c(h,.22,"sine",it(950,1150),720,.05),l(h,.25,"bandpass",2200,1400,2,.12)},twang(){if(!a("twang",.08))return;let h=i.currentTime;c(h,.6,"triangle",it(170,210),70,.22),c(h,.35,"sawtooth",340,120,.05),l(h,.07,"highpass",2500,6e3,1,.35)},heal(){if(!a("heal",.2))return;let h=i.currentTime;c(h,.12,"sine",660,660,.08),c(h+.1,.18,"sine",990,990,.08)}}})();var X={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14},Ci=15,ry=[.5,1,1,1,.45,.8,1,.45,.8,1,.8,1.1,1,.8,1.1],ay=[.14,.07,.14,.08,.06,.06,.08,.06,.06,.09,.08,.07,.09,.08,.07],wh=.12,oy=5,ly=[[X.NECK,X.PELVIS,.17,"torso"],[X.NECK,X.HEAD,.07,"neck"],[X.NECK,X.LSH,0,"struct"],[X.NECK,X.RSH,0,"struct"],[X.LSH,X.RSH,0,"struct"],[X.PELVIS,X.LHIP,0,"struct"],[X.PELVIS,X.RHIP,0,"struct"],[X.LHIP,X.RHIP,0,"struct"],[X.LSH,X.LELB,.068,"arm"],[X.LELB,X.LHAND,.06,"arm"],[X.RSH,X.RELB,.068,"arm"],[X.RELB,X.RHAND,.06,"arm"],[X.LHIP,X.LKNEE,.092,"leg"],[X.LKNEE,X.LFOOT,.074,"leg"],[X.RHIP,X.RKNEE,.092,"leg"],[X.RKNEE,X.RFOOT,.074,"leg"]];function Eh(i){return{spine:.52*i,neck:.24*i,shW:.2*i,hipW:.11*i,ua:.29*i,fa:.27*i,th:.44*i,sh:.43*i,headR:.14*i}}function tf(i,t,e,n,s){return{x:i,y:t,z:e,px:i,py:t,pz:e,r:n,k:s,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var cy=1,bl=class{constructor(t,e,n){this.id=cy++,this.S=t,this.d=Eh(t),this.kBase=n.k,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(Ci*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let s=0;s<Ci;s++){let r=e[s*3],a=e[s*3+1],o=e[s*3+2];this.pts.push(tf(r,a,o,ay[s]*t,ry[s])),this.tgt[s*3]=r,this.tgt[s*3+1]=a,this.tgt[s*3+2]=o}this.pts[X.HEAD].r=this.d.headR,this.pts[X.HEAD].im=.8,this.pts[X.PELVIS].pin=!0;for(let[s,r,a,o]of ly)this.addBone(s,r,a*t,o);this.addAux(X.LSH,X.PELVIS,!1),this.addAux(X.RSH,X.PELVIS,!1),this.addAux(X.LHIP,X.NECK,!1),this.addAux(X.RHIP,X.NECK,!1),this.addAux(X.HEAD,X.PELVIS,!0,.85),this.addAux(X.HEAD,X.LSH,!0,.9),this.addAux(X.HEAD,X.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=s==="torso"?1:0,l=s==="torso"?0:1;this.bones.push({a:t,b:e,r:n,kind:s,sa:o,sb:l,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z),vis:s!=="struct",part:t*100+e})}addAux(t,e,n,s=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*s})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let s=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,f=1/t,u=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],g=(x.x-x.px)*s,m=(x.y-x.py)*s,M=(x.z-x.pz)*s;x.px=x.x,x.py=x.y,x.pz=x.z;let S=-Qe;if(x.y<u){let _=Math.exp(-4*t);g*=_,m*=_,M*=_,S+=Qe*Rt((u-x.y)*6,0,1.6)}else g*=.999,m*=.999,M*=.999;if(a&&x.attached&&p<Ci){let _=this.tgt[p*3],b=this.tgt[p*3+1],w=this.tgt[p*3+2];if(x.pin){x.x=_,x.y=b,x.z=w;continue}if(o>0){let A=l*x.k,y=(_-x.x)*A-(g*f-this.cvx)*c;S+=(b-x.y)*A-(m*f-this.cvy)*c;let T=(w-x.z)*A-(M*f-this.cvz)*c;x.x+=g+y*h,x.y+=m+S*h,x.z+=M+T*h;continue}}x.x+=g,x.y+=m+S*h,x.z+=M}for(let p=0;p<oy;p++){for(let x=0;x<this.bones.length;x++){let g=this.bones[x];this.solve(g.a,g.b,g.len,!1)}for(let x=0;x<this.aux.length;x++){let g=this.aux[x];this.solve(g.a,g.b,g.len,g.min)}for(let x=0;x<r.length;x++){let g=r[x],m=n.ground(g.x,g.z);g.y<m+g.r&&g.py>m-.25&&(g.y=m+g.r)}}let d=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],g=n.ground(x.x,x.z);if(x.y>g+x.r+.002||x.py<g-.25)continue;let m=x.y-x.py;m<0&&(-m*f>this.impact&&(this.impact=-m*f),x.py=x.y+m*.2),x.px=x.x-(x.x-x.px)*d,x.pz=x.z-(x.z-x.pz)*d}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||s&&h>=n)return;let f=this.invMass(r),u=this.invMass(a),d=f+u;if(d===0)return;let p=(h-n)/(h*d);r.x+=o*p*f,r.y+=l*p*f,r.z+=c*p*f,a.x-=o*p*u,a.y-=l*p*u,a.z-=c*p*u}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),s=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=s,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=s,r.push(c))}s++}let a=n[X.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=Rt(e,.18,.82);let s=this.pts[n.a],r=this.pts[n.b],a=()=>{let d=tf(_t(s.x,r.x,e),_t(s.y,r.y,e),_t(s.z,r.z,e),n.r*.9,0);return d.px=_t(s.px,r.px,e),d.py=_t(s.py,r.py,e),d.pz=_t(s.pz,r.pz,e),d.stump=!0,d.stumpR=n.r,d},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=_t(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),f=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,f),this.updateConnectivity(),this.version++;let u=this.pts[o];return{i1:o,i2:l,x:u.x,y:u.y,z:u.z,kind:n.kind}}addVel(t,e,n,s,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*s,o.py-=e*s,o.pz-=n*s}}addSpin(t,e,n,s){let r=0,a=0,o=0;for(let c of this.pts)r+=c.x,a+=c.y,o+=c.z;let l=this.pts.length;r/=l,a/=l,o/=l;for(let c of this.pts){let h=c.x-r,f=c.y-a,u=c.z-o;c.px-=(e*u-n*f)*s,c.py-=(n*h-t*u)*s,c.pz-=(t*f-e*h)*s}}bounds(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<s&&(s=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=s,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[X.PELVIS]}};function Th(i,t,e,n){let s=i.bones,r=i.pts,a=r[X.HEAD],o=i.d.headR;for(let l=1;l<=n;l++){let c=l/n,h=_t(t.bx,e.bx,c),f=_t(t.by,e.by,c),u=_t(t.bz,e.bz,c),d=_t(t.tx,e.tx,c),p=_t(t.ty,e.ty,c),x=_t(t.tz,e.tz,c),g=null,m=1/0;for(let M=0;M<s.length;M++){let S=s[M];if(!S.vis)continue;let _=r[S.a],b=r[S.b];oa(h,f,u,d,p,x,_.x,_.y,_.z,b.x,b.y,b.z);let w=S.r+.02;Ae.d2<w*w&&Ae.d2<m&&(m=Ae.d2,g={bone:M,u:Ae.t,t:Ae.s,x:_t(_.x,b.x,Ae.t),y:_t(_.y,b.y,Ae.t),z:_t(_.z,b.z,Ae.t),head:!1})}if(Sl(a.x,a.y,a.z,h,f,u,d,p,x),Ri.d2<o*o&&Ri.d2<m&&(g={bone:-1,u:.5,t:Ri.t,x:a.x,y:a.y,z:a.z,head:!0}),g)return g}return null}function Ah(i,t,e,n,s){let r=s*s;for(let a=1;a<=n;a++){let o=a/n;if(oa(_t(i.bx,t.bx,o),_t(i.by,t.by,o),_t(i.bz,t.bz,o),_t(i.tx,t.tx,o),_t(i.ty,t.ty,o),_t(i.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),Ae.d2<r)return{x:_t(e.bx,e.tx,Ae.t),y:_t(e.by,e.ty,Ae.t),z:_t(e.bz,e.tz,Ae.t)}}return null}var Rh=["lean","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Ki(){let i={};for(let t of Rh)i[t]=0;return i}function la(i,t,e,n){for(let s of Rh)i[s]=t[s]+(e[s]-t[s])*n;return i}function sf(i,t,e){for(let n of Rh)i[n]+=(t[n]-i[n])*e}var Rn={guard(i,t){return i.lean=.24,i.twist=0,i.side=0,i.headP=-.2,i.lP=.62,i.lB=1.15,i.lS=.34,i.rP=.28,i.rB=.95,i.rS=.3,i.bob=Math.sin(t*2.4)*.012,i},run(i,t){let e=Math.sin(t);return i.lean=.44,i.twist=-e*.16,i.side=0,i.headP=-.32,i.lP=.2+.92*e,i.lB=.3+1.5*Math.max(0,Math.cos(t+.5)),i.rP=.2-.92*e,i.rB=.3+1.5*Math.max(0,Math.cos(t+Math.PI+.5)),i.lS=.1,i.rS=.1,i.bob=-Math.abs(Math.cos(t))*.07+.05,i},kneel(i){return i.lean=.38,i.twist=0,i.side=0,i.headP=-.2,i.lP=1.2,i.lB=1.3,i.lS=.18,i.rP=-.25,i.rB=1.9,i.rS=.15,i.bob=-.06,i},lunge(i){return i.lean=.4,i.side=0,i.headP=-.3,i.lP=.85,i.lB=1,i.lS=.22,i.rP=-.45,i.rB=.35,i.rS=.2,i.bob=-.02,i},skid(i,t,e){let n=Math.sin(t*1.7);i.lean=.12,i.twist=0,i.side=.4*e,i.headP=-.1;let s=.25,r=.12,a=.62,o=.55+.45*n,l=1.3+.3*Math.cos(t*1.7),c=-.12;return e>0?(i.rP=s,i.rB=r,i.rS=a,i.lP=o,i.lB=l,i.lS=c):(i.lP=s,i.lB=r,i.lS=a,i.rP=o,i.rB=l,i.rS=c),i.bob=-.05,i},hop(i,t,e){let n=Math.abs(Math.sin(t));return i.lean=.3,i.twist=0,i.side=0,i.headP=-.25,i.lP=.15+(e?.25*Math.sin(t):0),i.lB=.35+(e?.5*n:0),i.lS=.05,i.rP=i.lP,i.rB=i.lB,i.rS=.05,i.bob=e?n*.13:Math.sin(t)*.01,i},stumps(i,t,e){let n=Math.sin(t);return i.lean=.5,i.twist=0,i.side=0,i.headP=-.45,i.lP=.3+(e?.7*n:0),i.lB=0,i.lS=.2,i.rP=.3-(e?.7*n:0),i.rB=0,i.rS=.2,i.bob=e?Math.abs(n)*.1:0,i},ride(i,t){return i.lean=.12,i.twist=0,i.side=0,i.headP=-.1,i.lP=.95,i.lB=1.55,i.lS=1.15,i.rP=.95,i.rB=1.55,i.rS=1.15,i.bob=Math.sin(t)*.03,i},air(i){return i.lean=.1,i.twist=0,i.side=0,i.headP=.1,i.lP=1,i.lB=1.6,i.lS=.25,i.rP=.4,i.rB=1.4,i.rS=.25,i.bob=0,i}};function Gn(i,t,e,n,s){i[t*3]=e,i[t*3+1]=n,i[t*3+2]=s}function ef(i,t,e,n){return(n.th*Math.cos(i)+n.sh*Math.cos(i-t))*Math.cos(e)}function nf(i,t,e,n,s,r,a,o,l,c,h){let f=Math.cos(c),u=Math.sin(c),d=Math.cos(o),p=s+d*u*h.th,x=r-d*f*h.th,g=a+Math.sin(o)*h.th;Gn(i,e,p,x,g),d=Math.cos(o-l),Gn(i,n,p+d*u*h.sh,x-d*f*h.sh,g+Math.sin(o-l)*h.sh),Gn(i,t,s,r,a)}var wl=[0,0,0];function El(i,t,e,n){let s=Math.cos(i.lean),r=Math.sin(i.lean),a=e*s-n*r,o=e*r+n*s;s=Math.cos(i.side),r=Math.sin(i.side);let l=t*s-a*r,c=t*r+a*s;return s=Math.cos(i.twist),r=Math.sin(i.twist),wl[0]=l*s+o*r,wl[1]=c,wl[2]=-l*r+o*s,wl}function Ch(i,t,e,n,s=3,r=null){let a=-i.lS,o=i.rS,l=0;s&1&&(l=Math.max(l,ef(i.lP,i.lB,a,t))),s&2&&(l=Math.max(l,ef(i.rP,i.rB,o,t)));let c=(r!==null?r:l+n)+i.bob;Gn(e,X.PELVIS,0,c,0);let h=El(i,0,t.spine,0),f=h[0],u=c+h[1],d=h[2];Gn(e,X.NECK,f,u,d);let p=Math.cos(i.headP),x=Math.sin(i.headP);h=El(i,0,t.neck*p,t.neck*x+.03*t.neck),Gn(e,X.HEAD,f+h[0],u+h[1],d+h[2]),h=El(i,-t.shW,-.03,0),Gn(e,X.LSH,f+h[0],u+h[1],d+h[2]),h=El(i,t.shW,-.03,0),Gn(e,X.RSH,f+h[0],u+h[1],d+h[2]);for(let[M,S,_,b]of[[X.LSH,X.LELB,X.LHAND,-1],[X.RSH,X.RELB,X.RHAND,1]]){let w=e[M*3],A=e[M*3+1],y=e[M*3+2];Gn(e,S,w+b*.04,A-t.ua,y+.05),Gn(e,_,w+b*.04,A-t.ua-t.fa*.9,y+.16)}let g=Math.cos(i.twist*.25),m=Math.sin(i.twist*.25);nf(e,X.LHIP,X.LKNEE,X.LFOOT,-t.hipW*g,c,t.hipW*m,i.lP,i.lB,a,t),nf(e,X.RHIP,X.RKNEE,X.RFOOT,t.hipW*g,c,-t.hipW*m,i.rP,i.rB,o,t)}function rf(i,t,e,n,s,r,a,o,l,c,h,f){let u=n-i,d=s-t,p=r-e,x=Math.hypot(u,d,p),g=(a+o)*.999;x<1e-5&&(u=0,d=-1,p=0,x=1e-5);let m=u/x,M=d/x,S=p/x;x>g&&(x=g);let _=(a*a-o*o+x*x)/(2*x),b=Math.sqrt(Math.max(0,a*a-_*_)),w=l*m+c*M+h*S,A=l-m*w,y=c-M*w,T=h-S*w,R=Math.hypot(A,y,T);return R<1e-5&&(A=0,y=-1,T=0,R=1),A/=R,y/=R,T/=R,f[0]=i+m*_+A*b,f[1]=t+M*_+y*b,f[2]=e+S*_+T*b,f[3]=i+m*x,f[4]=t+M*x,f[5]=e+S*x,f}var Pi=.135;function hy(i,t,e){let n=Pi,s=Pi+i*.86,r=Pi+i,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([u,,d])=>[u,s,d]),l=[0,r,0],c=[],h=(u,d,p)=>c.push(...u,...d,...p);for(let u=0;u<4;u++){let d=(u+1)%4;h(a[u],o[u],o[d]),h(a[u],o[d],a[d]),h(o[u],l,o[d])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let f=new ye;return f.setAttribute("position",new re(c,3)),f.computeVertexNormals(),f}var Ks={};function uy(){return Ks.guard||(Ks.guard=new Jt({color:4869975,metalness:.85,roughness:.35}),Ks.grip=new Jt({color:2760989,roughness:.85})),Ks}function lf(i){let e=uy(),n=new me,s=new Jt({color:14936302,metalness:.95,roughness:.2}),r=new Pt(hy(i,.07*1,.018*1),s),a=new Pt(new Le(.24*1,.035*1,.05*1),e.guard);a.position.y=.12*1;let o=new Pt(new Ke(.019*1,.022*1,.22*1,10),e.grip),l=new Pt(new un(.032*1,12,8),e.guard);l.position.y=-.125*1;for(let c of[r,a,o,l])c.castShadow=!0,n.add(c);return n.userData.bladeMat=s,n}function Ih(i){i.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==Ks.guard&&t.material!==Ks.grip&&t.material.dispose())})}var af=new te,Ii=new I,Ji=new I,of=new I;function Ph(i,t,e,n,s,r,a,o,l,c){Ji.set(s,r,a).normalize(),Ii.set(o,l,c),Ii.addScaledVector(Ji,-Ii.dot(Ji)),Ii.lengthSq()<1e-8&&Ii.set(1,0,0).addScaledVector(Ji,-Ji.x),Ii.normalize(),of.crossVectors(Ii,Ji),af.makeBasis(Ii,Ji,of),i.quaternion.setFromRotationMatrix(af),i.position.set(t,e,n)}var Tl=class{constructor(t,e,n,s,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:s.x,y:s.y,z:s.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let s=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*s,c=(o.y-o.py)*s,h=(o.z-o.pz)*s;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-Qe*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,f=Math.hypot(l,c,h)||1,u=(f-this.L)/(2*f);this.a.x+=l*u,this.a.y+=c*u,this.a.z+=h*u,this.b.x-=l*u,this.b.y-=c*u,this.b.z-=h*u;for(let d of[this.a,this.b]){let p=n.ground(d.x,d.z);if(d.y<p+.02&&d.py>p-.2){if(d===r&&!n.noStick&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,d.y=p-.12;return}d.y=p+.02,d.px=d.x-(d.x-d.px)*.6,d.pz=d.z-(d.z-d.pz)*.6}}}}render(){let t=this.a,e=this.b;Ph(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var ca=[[0,.165],[.2,.162],[.45,.142],[.72,.172],[.9,.168],[1,.118]];function dy(i){for(let t=1;t<ca.length;t++){let[e,n]=ca[t];if(i<=e){let[s,r]=ca[t-1],a=(i-s)/(e-s);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return ca[ca.length-1][1]}var fy={100:[.066,.06],304:[.072,.058],607:[.072,.058],405:[.058,.05],708:[.058,.05],910:[.108,.076],1213:[.108,.076],1011:[.078,.056],1314:[.078,.056]};function Lh(i,t){if(i.kind==="torso")return dy(t);let e=fy[i.part]||[i.r,i.r];return e[0]+(e[1]-e[0])*t}var cf=new Map;function py(i,t,e,n){let s=`${i.part}|${i.sa.toFixed(3)}|${i.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=cf.get(s);if(r)return r;let a=i.len,o=[],l=Lh(i,i.sa)*t,c=Lh(i,i.sb)*t;if(e)for(let f=0;f<5;f++){let u=-Math.PI/2+f/5*Math.PI/2;o.push(new at(l*Math.cos(u),l*Math.sin(u)))}else o.push(new at(1e-4,0));let h=i.kind==="torso"?14:4;for(let f=0;f<=h;f++){let u=f/h;o.push(new at(Lh(i,i.sa+(i.sb-i.sa)*u)*t,u*a))}if(n)for(let f=1;f<=5;f++){let u=f/5*Math.PI/2;o.push(new at(Math.max(1e-4,c*Math.cos(u)),a+c*Math.sin(u)))}else o.push(new at(1e-4,a));return r=new Fr(o,16),cf.set(s,r),r}var Al=new un(1,22,16),my=new un(1,12,10),gy=new Jt({color:14680092,roughness:.45,emissive:3801093}),xy=new Jt({color:16777215,roughness:.25}),_y=new Jt({color:1118481,roughness:.3}),hf=new I(0,1,0),Js=new I,uf=new I,ln=new I,Li=new I,Rl=new I,df=new te;function ff(i,t,e){Li.copy(t).addScaledVector(i,-t.dot(i)),Li.lengthSq()<1e-8&&Li.set(1,0,0).addScaledVector(i,-i.x),Li.normalize(),Rl.crossVectors(Li,i),df.makeBasis(Li,i,Rl),e.setFromRotationMatrix(df)}var Cl=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new me,this.mat=new yi({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new me;let s=new Pt(Al,this.mat),r=this.rag.d.headR;s.scale.set(r*.95,r*1.12,r*1.08),s.castShadow=!0,this.headGroup.add(s),this.pupils=[];for(let a of[-1,1]){let o=new Pt(Al,xy);o.scale.setScalar(.062*n),o.position.set(a*.058*n,.05*n,.105*n);let l=new Pt(my,_y);l.scale.setScalar(.027*n),l.userData.base=new I(a*.058*n,.05*n,.105*n+.05*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new I(1,0,0),this.headLateral=new I(1,0,0),this.pupilOff=new at,this.pupilVel=new at,this.prevHead=new I,this.deadLook=[new at(it(-1,1),it(-1,1)),new at(it(-1,1),it(-1,1))],this.extremities=[];for(let[a,o,l]of[[X.LHAND,.07,1],[X.RHAND,.07,1],[X.LFOOT,.082,.75],[X.RFOOT,.082,.75]]){let c=new Pt(Al,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let s=new Pt(py(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);s.castShadow=!0,n.kind==="torso"&&s.scale.set(1.15,1,.86),this.boneMeshes.set(n,s),this.group.add(s)}for(let[n,s]of this.boneMeshes)e.has(n)||(this.group.remove(s),this.boneMeshes.delete(n));t.pts.forEach((n,s)=>{if(!n.stump||this.stumpMeshes.has(s))return;let r=new Pt(Al,gy);r.userData.r=n.stumpR,this.stumpMeshes.set(s,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,s=this.ch,r=e.comp;Js.set(n[X.LSH].x-n[X.RSH].x,n[X.LSH].y-n[X.RSH].y,n[X.LSH].z-n[X.RSH].z),Js.lengthSq()>1e-6&&this.lateral.copy(Js).normalize(),uf.set(n[X.LHIP].x-n[X.RHIP].x,n[X.LHIP].y-n[X.RHIP].y,n[X.LHIP].z-n[X.RHIP].z).normalize();for(let[h,f]of this.boneMeshes){let u=n[h.a],d=n[h.b];ln.set(d.x-u.x,d.y-u.y,d.z-u.z);let p=ln.length();if(!(p<1e-6))if(ln.multiplyScalar(1/p),f.position.set(u.x,u.y,u.z),h.kind==="torso"){let x=r[h.a]===r[X.NECK]||r[h.b]===r[X.NECK];ff(ln,x?this.lateral:uf,f.quaternion)}else f.quaternion.setFromUnitVectors(hf,ln)}let a=n[X.HEAD],o=e.neighborOf(X.HEAD);if(o>=0?ln.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():ln.set(0,1,0),r[X.HEAD]===r[X.LSH]&&this.headLateral.copy(this.lateral),ff(ln,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){Js.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),Li.set(1,0,0).applyQuaternion(this.headGroup.quaternion),Rl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-Js.dot(Li)*.004,f=-Js.dot(Rl)*.004,u=this.pupilOff,d=this.pupilVel;d.x+=((h-u.x)*260-d.x*10)*t,d.y+=((f-u.y)*260-d.y*10)*t,u.x=Rt(u.x+d.x*t,-.022,.022),u.y=Rt(u.y+d.y*t,-.022,.022)}let l=s.S;this.pupils.forEach((h,f)=>{let u=h.userData.base;if(s.alive)h.position.set(u.x+this.pupilOff.x*l,u.y+this.pupilOff.y*l,u.z);else{let d=this.deadLook[f];h.position.set(u.x+d.x*.02*l,u.y+d.y*.02*l,u.z-.004*l)}});for(let h of this.extremities){let f=n[h.userData.idx];h.position.set(f.x,f.y,f.z),s.alive&&h.rotation.set(0,s.yaw,0)}for(let[h,f]of this.stumpMeshes){let u=n[h],d=e.neighborOf(h);if(d<0){f.visible=!1;continue}ln.set(u.x-n[d].x,u.y-n[d].y,u.z-n[d].z).normalize();let p=f.userData.r;f.position.set(u.x+ln.x*p*.45,u.y+ln.y*p*.45,u.z+ln.z*p*.45),f.quaternion.setFromUnitVectors(hf,ln),f.scale.set(p*1.06,p*.55,p*1.06)}let c=s.flash>0?.55:0;this.mat.emissive.setScalar(c)}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var vf=7,Nh=.95,Mf=1.65,yy=-1.95,vy=1.7,pf=1.9,mf=230,gf=15,xf=3.2,My=2.2,Sy=2,Dh=36,by=3.2,wy=4.2,_f=.07,Ey=[[0,-1],[.7,-.7],[-.7,-.7]],Ty=[[.8,.6],[-.8,.6],[0,1]],Ay={x:0,y:0,z:0},Il={vy:0,px:0,pz:0},Ry=Ki(),Cy=Ki(),Iy=Ki(),yf=Ki(),Pl=[0,0,0,0,0,0],Ll=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.titan=!!e.titan,this.heavy=!!e.heavy,this.boss=!!e.boss,this.aimCtl=!this.titan,this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.gy=0,this.vx=0,this.vz=0,this.vy=0,this.slideX=0,this.slideZ=0,this.slip=0,this.slipDir=1,this.skidding=!1,this.brakeK=0,this.launchT=0,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.t=it(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.mount=null,this.rope=null,this.flying=!1,this.stickW={x:0,z:1,mag:0},this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.aimK=this.isPlayer?mf:this.heavy?80:this.boss?100:_t(150,mf,this.skill),this.aimMaxW=this.isPlayer?gf:this.heavy?8:this.boss?10:_t(12,gf,this.skill),this.aimC=1.52*Math.sqrt(this.aimK),this.aimA=this.yaw,this.plan=null,this.grudge=null,this.grudgeT=0,this.pitchAdj=0,this.state="approach",this.timer=it(.6,1.2),this.cool=it(.3,.9)*_t(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=Eh(this.S),this.footR=.07*this.S,this.pose=Rn.guard(Ki(),0),this.tpose=Ki(),this.local=new Float32Array(Ci*3),this.world=new Float32Array(Ci*3),Ch(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new bl(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bladeLen=e.bladeLen||Nh,this.swordMesh=lf(this.bladeLen),this.swordMesh.scale.setScalar(this.S),this.view=new Cl(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,s=this.world;for(let r=0;r<Ci;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];s[r*3]=this.x-e*a+t*l,s[r*3+1]=this.y+o,s[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let s=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+s*t[2],e[n+1]=t[1],e[n+2]=s*t[0]+r*t[2]}get legMask(){let t=this.rag.pts;return(t[X.LFOOT].attached?1:0)|(t[X.RFOOT].attached?2:0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.grudgeT=Math.max(0,this.grudgeT-t),this.launchT=Math.max(0,this.launchT-t),this.isPlayer?this.thinkPlayer():this.aimCtl?this.thinkEnemy(t):this.thinkTitan(t),this.aimCtl&&(this.applyStick(),this.updateAim(t)),this.mount?this.ride():this.move(t),!!this.alive)){if(this.aimCtl){let e=this.mount?2.3:Sy,n=tn(this.swYaw-this.yaw);Math.abs(n)>e&&(this.mount?(this.swYaw=tn(this.yaw+Math.sign(n)*e),this.swW=0):this.yaw=this.swYaw-Math.sign(n)*e)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t),this.skidFx(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let s=Math.hypot(t,e)||1;t/=s,e/=s;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:yy,a1:vy,wind:n?.05:_t(.62,.24,r)*(this.counterT>0?.6:1)*1.8,dur:n?.2:.5,rec:n?.18:_t(.55,.35,r),hits:new Set,rolled:new Set,kills:0},this.game.onSwingStart(this)}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.aimCtl)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}get curEp(){return this.aimCtl?this.episode:this.swing}thinkPlayer(){let t=this.game,e=t.input.move(),n=Math.sin(t.camYaw),s=Math.cos(t.camYaw),r=n*e.y-s*e.x,a=s*e.y+n*e.x,o=Math.hypot(r,a)||1;this.stickW.x=r/o,this.stickW.z=a/o,this.stickW.mag=e.mag}applyStick(){let t=this.stickW,e=this.legMask,n=e===3?1:e?.62:.42,s=Rt((t.mag-.4)/.45,0,1)*this.speed*n;this.want.x=t.x*s,this.want.z=t.z*s,t.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(t.x,t.z))}updateAim(t){let e=tn(this.aimYaw-this.swYaw);this.swW=Rt(this.swW+(this.aimK*e-this.aimC*this.swW)*t,-this.aimMaxW,this.aimMaxW),this.swYaw=tn(this.swYaw+this.swW*t),this.faceYaw=this.swYaw;let n=Math.abs(this.swW);if(this.flying=(!!this.rope||this.y-this.gy>.4)&&Math.hypot(this.vx,this.vy,this.vz)>8,(n>xf||this.flying)&&this.hasSword){let s=n>xf?Math.sign(this.swW):2;(!this.episode||this.episode.dir!==s)&&(this.episode={hits:new Set,rolled:new Set,kills:0,dir:s,ux:s===2?1:-s,uy:0},this.game.onSwingStart(this),s!==2&&n>6&&(this.isPlayer?xe.swoosh(1):xe.enemySwing()))}else n<My&&(this.episode=null)}ride(){let t=this.mount,e=t.saddle(Ay);this.x=e.x,this.y=e.y,this.z=e.z,this.vx=t.vx,this.vz=t.vz,this.vy=0,this.yaw=t.yaw,this.faceYaw=t.yaw,this.phase=t.phase}moveAir(t){let e=this.game.world,n=this.rope;if(n){let h=n.anchor(),f=h.x-this.x,u=h.y-(this.y+1.1*this.S),d=h.z-this.z,p=Math.hypot(f,u,d)||1;this.vx+=f/p*n.pull*t,this.vy+=u/p*n.pull*t,this.vz+=d/p*n.pull*t,n.t+=t,(p<n.release||n.t>n.maxT)&&(this.rope=null)}this.vy-=Qe*(n?.55:.9)*t;let s=Math.exp(-.3*t);this.vx*=s,this.vz*=s;let r=this.stickW;r.mag>.3&&(this.vx+=r.x*7*t,this.vz+=r.z*7*t);let a=Math.hypot(this.vx,this.vy,this.vz);a>30&&(this.vx*=30/a,this.vy*=30/a,this.vz*=30/a),this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let o=Math.hypot(this.x,this.z),l=e.radius-.5;!e.grid&&o>l&&(this.x*=l/o,this.z*=l/o,this.vx*=.3,this.vz*=.3);let c=e.ground(this.x,this.z);if(c>-1/0&&this.y<=c){let h=e.tileMotion(this.x,this.z,Il).vy;this.vy<=h&&(this.y=c,this.gy=c,h>2.5?this.launch(Il):(this.vy=0,this.kb=.35))}c===-1/0&&this.y<this.gy-.3&&(this.falling=!0)}launch(t){this.vy=Math.max(this.vy,Math.min(t.vy*1.1,12)),this.y=this.gy+.13,this.launchT<=0&&(this.vx+=t.px,this.vz+=t.pz,this.isPlayer||(this.stun=Math.max(this.stun,.45))),this.launchT=.4}thinkEnemy(t){let e=this.game,n=this.stickW,s=e.player;this.grudge&&(this.grudgeT<=0||!this.grudge.alive)&&(this.grudge=null);let r=this.grudge||s,a=r.x-this.x,o=r.z-this.z,l=Math.hypot(a,o)||1,c=Math.atan2(a,o),h=(_,b)=>{this.aimA=tn(_),n.x=Math.sin(_),n.z=Math.cos(_),n.mag=b},f=(_,b,w)=>h(ri(this.aimA,_,b*t),w);n.mag=0;let u=this.local,d=r.local,p=this.y+_t(u[X.NECK*3+1],u[X.PELVIS*3+1],.28)-.1*this.S,x=r.y+_t(d[X.NECK*3+1],d[X.PELVIS*3+1],.4),g=Rt(Math.atan2(x-p,Math.max(.8,l-.3)),-.6,.35);if(this.pitchAdj+=(g-this.pitchAdj)*Tn(6,t),e.time<.8){f(c,3,.25);return}this.timer-=t,this.cool-=t,!s.alive&&this.state!=="panic"&&(this.state="cheer");let m=this.skill,M=1.6*this.S,S=_t(2.5,5.5,m)*(this.heavy?.6:1);switch(this.state){case"approach":{let _=Math.hypot(this.vx,this.vz);if(l<M+.25+_*_*_t(.05,.1,m)){this.state="fight",f(c,S,.25);break}if(this.cool<=0&&l<M+1+_*.3&&Math.random()<t*_t(.4,2.5,m)&&this.mayAttack(r,!0)){this.startFlick(!0);break}let b=Math.atan2(-a,-o)+Rt(this.spread(r,a,o)*.45,-1,1),w=r.x+Math.sin(b)*M-this.x,A=r.z+Math.cos(b)*M-this.z;f(Math.atan2(w,A),6,.95);break}case"fight":if(l>M+.8){this.state="approach";break}f(c,S,l>M+.2?.4+.45*Rt((l-M)/1.5,.15,.6):.25),(this.counterT>0||this.cool<=0&&l<M+.35&&this.mayAttack(r))&&this.startFlick(!1);break;case"attack":this.runPlan(t,c,S);break;case"stagger":this.stun<=0&&(this.state="fight",this.plan=null,this.cool=it(.2,.6));break;case"panic":{let _=this.x-s.x,b=this.z-s.z;h(Math.atan2(_,b),Math.min(.95,.4+.45*3.4/this.speed));break}case"cheer":this.y<=this.gy&&!this.falling&&Math.random()<t*2.2&&(this.vy=it(3.2,4.5));break}}spread(t,e,n){let s=Math.atan2(-e,-n),r=0;for(let a of this.game.enemies){if(a===this||a===t||!a.alive||a.state==="panic")continue;let o=tn(Math.atan2(a.x-t.x,a.z-t.z)-s);Math.abs(o)<1.6&&(r-=Math.sign(o)*(1.6-Math.abs(o)))}return r*(1.2+this.skill*1.5)}mayAttack(t,e=!1){let n=this.game;if(e||Math.random()<.6+.35*this.skill){let s=Math.atan2(t.x-this.x,t.z-this.z),r=2.2*this.S;for(let a of n.enemies)if(!(a===this||a===t||!a.alive)&&!(Math.hypot(a.x-this.x,a.z-this.z)>r)&&Math.abs(tn(Math.atan2(a.x-this.x,a.z-this.z)-s))<1.6)return this.cool=it(.25,.5),!1}return t!==n.player||n.takeAttackToken(this)}startFlick(t){let e=this.skill,n=Math.random()<.5?-1:1;if(!t&&e>.2&&!this.heavy&&Math.random()<.05+.13*e)this.plan={kind:"spin",t:0,side:n,base:this.aimA,dur:it(.7,1.1),rec:.35};else{let s=it(1.1,1.5),r=_t(2.3,4.2,e)*(this.heavy?.55:this.boss?.7:1)*(this.counterT>0?1.6:1);this.plan={kind:"flick",t:0,side:n,base:this.aimA,th:s,th2:Math.min(2.9-s,it(1.2,1.5)),wind:s/r,slash:this.heavy?.45:.28,rec:.3,run:t,fired:!1}}this.counterT=0,this.state="attack"}runPlan(t,e,n){let s=this.plan,r=this.stickW;if(!s){this.state="fight";return}s.t+=t,s.base=ri(s.base,e,n*t);let a=(l,c)=>{this.aimA=tn(l),r.x=Math.sin(l),r.z=Math.cos(l),r.mag=c};if(s.kind==="spin"){s.t<s.dur?a(s.base+s.side*10*s.t,.3):s.t<s.dur+s.rec?a(ri(this.aimA,e,5*t),.25):this.endPlan();return}let o=s.run?.7:.3;s.t<s.wind?a(s.base+s.side*s.th*(s.t/s.wind),o):s.t<s.wind+s.slash?a(s.base-s.side*s.th2,o):s.t<s.wind+s.slash+s.rec?a(ri(this.aimA,e,4*t),.25):this.endPlan()}endPlan(){this.plan=null,this.state="fight",this.cool=it(.5,1.2)*_t(1.3,.5,this.skill)*(this.boss?1.5:1)}thinkTitan(t){let e=this.game,n=e.player,s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(s,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=.5*this.S;switch(n.alive||(this.state="cheer"),this.state){case"approach":{let l=this.legMask,c=this.speed*(l===3?1:l?.6:.4);a>o+.2?(this.want.x=s/a*c,this.want.z=r/a*c):this.state="fight";break}case"fight":{this.want.x=s/a*Rt((a-o)*3,-2,this.speed),this.want.z=r/a*Rt((a-o)*3,-2,this.speed);let l=n.y>3;if(this.hasSword&&this.cool<=0&&a<o+.35+this.skill*.5+(l?4:0)&&e.takeAttackToken(this)){let[c,h]=sa(l?Ty:Ey);this.startSwing(c,h,!1),l&&(this.swing.wind*=.4),this.state="attack"}break}case"attack":this.swing||(this.state="fight",this.cool=it(.5,1.3)*_t(1.3,.55,this.skill));break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=it(.2,.6));break;default:break}}move(t){let e=this.game.world,n=this.y>this.gy+.02||this.vy>.01;if(this.isPlayer&&!this.falling&&(this.rope||n)){this.moveAir(t),this.turn(t);return}let s=this.want.x,r=this.want.z;if((this.stun>0||this.hurtT>0)&&(s*=.2,r*=.2),this.kb>0||this.falling){let S=Math.exp(-5*t);this.vx*=S,this.vz*=S}else if(this.aimCtl&&!n)this.drive(s,r,t);else{let S=(n?3:14)*t,_=s-this.vx,b=r-this.vz,w=Math.hypot(_,b);w>S?(this.vx+=_/w*S,this.vz+=b/w*S):(this.vx=s,this.vz=r)}let a=e.gx,o=e.gz,l=Math.hypot(a,o);if(!n&&!this.falling&&l>_f){let S=Qe*.85*(l-_f)/l*t;this.slideX-=a*S,this.slideZ-=o*S}let c=Math.exp(-1.2*t);this.slideX*=c,this.slideZ*=c;let h=this.vx+this.slideX,f=this.vz+this.slideZ;if(this.falling)this.x+=h*t,this.z+=f*t;else{let S=this.x+h*t,_=this.z+f*t,b=.35*this.S;e.solidAt(S,_,this.y)&&(e.solidAt(S,this.z,this.y)?e.solidAt(this.x,_,this.y)?(S=this.x,_=this.z,this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0):(S=this.x,this.vx=0,this.slideX=0):(_=this.z,this.vz=0,this.slideZ=0)),e.inside(S,_,b)||(this.kb>0||n)&&e.canFall&&!e.wallH?(this.x=S,this.z=_):this.overWall(e,h,f)?(this.x=S,this.z=_):e.clampInside(S,_,b,this)||(e.inside(S,this.z,b)?(this.x=S,this.vz=0,this.slideZ=0):e.inside(this.x,_,b)?(this.z=_,this.vx=0,this.slideX=0):(this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0));let w=e.ground(this.x,this.z);w===-1/0?this.falling=!0:this.falling||(this.gy=w)}!this.falling&&e.grid&&this.y<=this.gy+.12&&e.tileMotion(this.x,this.z,Il).vy>2.5&&this.launch(Il),!this.falling&&this.vy<=0&&this.y<=this.gy+.12?(this.y=this.gy,this.vy=0):(this.vy-=Qe*t,this.y+=this.vy*t,!this.falling&&this.y<=this.gy&&(this.y=this.gy,this.vy=0)),this.falling&&this.y<this.gy-e.fallDepth&&this.game.onFell(this);let u=Math.sin(this.yaw),d=Math.cos(this.yaw),p=-h*d+f*u,x=n||this.falling?0:Rt((Math.abs(p)-.7)/2,0,1);this.slip+=(x-this.slip)*Tn(10,t),Math.abs(p)>.3&&(this.slipDir=Math.sign(p));let g=Math.hypot(h,f),m=Math.max(this.speed,1),M=0;if(!n&&!this.falling&&g>.45*m){let S=(this.want.x*h+this.want.z*f)/g;M=Rt((g-.45*m)/(.35*m),0,1)*Rt(1-S/g,0,1)}this.brakeK+=(M-this.brakeK)*Tn(M>this.brakeK?12:5,t),this.turn(t)}drive(t,e,n){let s=Math.hypot(this.vx,this.vz);if(s<.3){let m=Dh*n,M=t-this.vx,S=e-this.vz,_=Math.hypot(M,S);_>m?(this.vx+=M/_*m,this.vz+=S/_*m):(this.vx=t,this.vz=e);return}let r=Math.max(this.speed,1),a=Math.sqrt(Rt((s-.15*r)/(.55*r),0,1)),o=this.legMask===3?1:.7,l=(this.isPlayer?20:15)*o,c=_t(Dh,by,a)*o,h=_t(Dh,wy,a)*o,f=this.vx/s,u=this.vz/s,d=t*f+e*u,p=-t*u+e*f,x=Rt(d-s,-h*n,l*n),g=Rt(p,-c*n,c*n);this.vx+=f*x-u*g,this.vz+=u*x+f*g}overWall(t,e,n){if(!t.wallH)return!1;let s=Math.abs(this.x),r=Math.abs(this.z),a=s>r?Math.sign(this.x):0,o=s>r?0:Math.sign(this.z);return a*e+o*n<t.overSpeed?!1:(this.falling=!0,this.vx=e,this.vz=n,this.slideX=0,this.slideZ=0,this.vy=3,this.kb=1,!0)}turn(t){let e=this.isPlayer?8:this.titan?1.2:this.heavy?2.5:7;this.yaw=ri(this.yaw,this.faceYaw,e*t);let n=this.vx+this.slideX,s=this.vz+this.slideZ,r=Math.hypot(n,s),a=n*this.forwardX+s*this.forwardZ<-.3*r?-1:1,o=this.legMask;this.phase+=(a*r+this.slip*5)*t/((o===3?pf:pf*.6)*this.S)*Math.PI*2}skidFx(t){let e=Math.max(this.slip,this.brakeK);if(e>.4&&this.y<=this.gy+.05&&Math.random()<t*45*e){let n=this.rag.pts[Math.random()<.5?X.LFOOT:X.RFOOT];n.attached&&this.game.fx.dust(n.x,n.y,n.z,-this.vx*.2,-this.vz*.2)}if(e>.55&&!this.skidding){this.skidding=!0;let n=this.game.player;(this.isPlayer||Math.hypot(n.x-this.x,n.z-this.z)<7)&&xe.skid()}else e<.3&&(this.skidding=!1)}animate(t){let e=this.tpose,n=Math.hypot(this.vx+this.slideX,this.vz+this.slideZ),s=this.legMask,r=null;if(this.mount)Rn.ride(e,this.mount.phase),r=.02;else if(this.y>this.gy+.05||this.falling)Rn.air(e,this.t);else if(s===3){let d=Rt(n/(this.isPlayer?3.2:2),0,1);la(e,Rn.guard(Ry,this.t),Rn.run(Cy,this.phase),d),e.side+=Math.sin(this.phase)*.08*d,e.headP+=Math.sin(this.phase*2)*.06*d,this.slip>.02&&la(e,e,Rn.skid(yf,this.phase,this.slipDir),this.slip*.85),this.brakeK>.03&&la(e,e,Rn.kneel(yf),this.brakeK*.9*(1-this.slip*.6))}else if(s)Rn.hop(e,this.phase,n>.5),e.side=s===1?.1:-.1;else{Rn.stumps(e,this.phase,n>.5);let d=this.rag.pts;r=d[X.LKNEE].attached&&d[X.RKNEE].attached?this.d.th*.85+.08*this.S:.3*this.S}let a=this.swingMode(),o=this.swing,l=0,c=0;if(this.aimCtl){let d=tn(this.yaw-this.swYaw);e.twist=Rt(d*.75,-1.1,1.1),e.lean+=Rt(Math.abs(this.swW)/15,0,1)*.15}else if(a){let d=p=>o.ux*Math.sin(p)*.55;if(a===1){let p=aa(o.t/o.wind);l=d(o.a0)*p,c=p*.5}else if(a===2){let p=ra((o.t-o.wind)/o.dur);l=d(_t(o.a0,o.a1,p)),c=1}else{let p=aa((o.t-o.wind-o.dur)/o.rec);l=d(o.a1)*(1-p),c=1-p}la(e,e,Rn.lunge(Iy),c*(n>1.5?.4:1)),e.twist=l,o.uy<-.5&&a===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.25,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.headP=-.4),sf(this.pose,e,Tn(a===2||this.aimCtl?24:12,t)),Ch(this.pose,this.d,this.local,this.footR,s,r),this.computeSword(t),this.applyArms(),this.localToWorld();let h=this.rag,f=this.world;h.tgt.set(f),h.setVel(this.vx,this.vy,this.vz);let u=this.hasSword;h.pts[X.LHAND].pin=u,h.pts[X.RHAND].pin=u}computeSword(){let t=this.local,e=this.S,n=t[X.NECK*3],s=t[X.NECK*3+1],r=t[X.NECK*3+2],a=t[X.PELVIS*3],o=t[X.PELVIS*3+1],l=t[X.PELVIS*3+2],c=_t(n,a,.28),h=_t(s,o,.28),f=_t(r,l,.28)+.1*e,u=[.38,.78,.5],d=Math.hypot(u[0],u[1],u[2]);u[0]/=d,u[1]/=d,u[2]/=d;let p=[c+.14*e,h-.16*e,f+.26*e],x=this.swing,g=this.swingMode(),m=.3*e,M=(D,z,L,O)=>{let W=Math.sin(D),k=Math.cos(D);z[0]=x.ux*W,z[1]=x.uy*W,z[2]=k,L[0]=x.ux*k,L[1]=x.uy*k,L[2]=-W,O[0]=c+z[0]*m,O[1]=h+z[1]*m,O[2]=f+z[2]*m},S=this.ld,_=this.lw,b=this.lg;if(this.aimCtl&&this.hasSword&&!(this.blockT>0&&!this.isPlayer)){let D=tn(this.yaw-this.swYaw),z=this.flying?1:Rt(Math.abs(this.swW)/7,0,1),L=_t(.45,.02,z)+Math.sin(this.phase)*.03+this.pitchAdj,O=Math.sin(D),W=Math.cos(D),k=Math.cos(L);S[0]=O*k,S[1]=Math.sin(L),S[2]=W*k,_[0]=W,_[1]=0,_[2]=-O;let st=(.33+z*.07)*e;b[0]=c+O*st,b[1]=h-.1*e,b[2]=f-.1*e+W*st}else if(this.blockT>0&&!g){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(S[0]=1,S[1]=.15,S[2]=.2,b[0]=c-.3*e,b[1]=h+.38*e,b[2]=f+.22*e):(S[0]=.1,S[1]=1,S[2]=.15,b[0]=c+this.blockUx*.3*e,b[1]=h-.05*e,b[2]=f+.3*e);let D=Math.hypot(S[0],S[1],S[2]);S[0]/=D,S[1]/=D,S[2]/=D,_[0]=0,_[1]=0,_[2]=1}else if(!g||!this.hasSword)S[0]=u[0],S[1]=u[1],S[2]=u[2],_[0]=1,_[1]=0,_[2]=0,b[0]=p[0],b[1]=p[1],b[2]=p[2];else if(g===2){let D=ra((x.t-x.wind)/x.dur);M(_t(x.a0,x.a1,D),S,_,b),b[2]+=.08*e*D}else{let D=[0,0,0],z=[0,0,0],L=[0,0,0],O;g===1?(M(x.a0,D,z,L),O=1-aa(x.t/x.wind)):(M(x.a1,D,z,L),O=aa((x.t-x.wind-x.dur)/x.rec));for(let k=0;k<3;k++)S[k]=_t(D[k],u[k],O),_[k]=_t(z[k],k===0?1:0,O),b[k]=_t(L[k],p[k],O);let W=Math.hypot(S[0],S[1],S[2])||1;S[0]/=W,S[1]/=W,S[2]/=W}let w=Math.sin(this.yaw),A=Math.cos(this.yaw),y=this.sw;y.gx=this.x-A*b[0]+w*b[2],y.gy=this.y+b[1],y.gz=this.z+w*b[0]+A*b[2],y.dx=-A*S[0]+w*S[2],y.dy=S[1],y.dz=w*S[0]+A*S[2],y.wx=-A*_[0]+w*_[2],y.wy=_[1],y.wz=w*_[0]+A*_[2];let T=Pi*e,R=(Pi+this.bladeLen)*e,P=this.bCur;P.bx=y.gx+y.dx*T,P.by=y.gy+y.dy*T,P.bz=y.gz+y.dz*T,P.tx=y.gx+y.dx*R,P.ty=y.gy+y.dy*R,P.tz=y.gz+y.dz*R}copyBlade(){let t=this.bCur,e=this.bPrev;e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,s=this.lg,r=this.ld,a=[[X.RSH,X.RELB,X.RHAND,.05*e,.8],[X.LSH,X.LELB,X.LHAND,-.065*e,-.8]];for(let[o,l,c,h,f]of a){let u=s[0]+r[0]*h,d=s[1]+r[1]*h,p=s[2]+r[2]*h;rf(t[o*3],t[o*3+1],t[o*3+2],u,d,p,n.ua,n.fa,f,-1,-.3,Pl),t[l*3]=Pl[0],t[l*3+1]=Pl[1],t[l*3+2]=Pl[2],t[c*3]=u,t[c*3+1]=d,t[c*3+2]=p}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;!t[X.LHAND].attached&&!t[X.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.plan=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function Py(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new Vi(i)}var $s=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new ye,this.attr=new Te(this.pos,3),this.attr.setUsage(Hs),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new br(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max&&this.list.shift(),this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},Dl=class{constructor(t){let e=Py();this.blood=new $s(t,2600,new ni({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.spark=new $s(t,400,new ni({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new $s(t,600,new ni({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.dustPool=new $s(t,500,new ni({color:15327956,size:.11,map:e,alphaTest:.5,sizeAttenuation:!0,transparent:!0,opacity:.75})),this.maxDecals=700;let n=new Tr(1,12).rotateX(-Math.PI/2),s=new ei({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new Bn(n,s,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new te,this._q=new Je,this._s=new I,this._p=new I,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.dustPool.list.length=0,this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,s,r,a,o,l,c){let h=Math.hypot(s,r,a)||1,f=s/h,u=r/h,d=a/h;for(let p=0;p<o;p++){let x=c*it(.25,1.15);this.blood.add({x:t,y:e,z:n,vx:(f+it(-l,l))*x,vy:(u+it(-l,l))*x+it(0,1),vz:(d+it(-l,l))*x,life:it(1,2)})}}sparks(t,e,n,s){for(let r=0;r<s;r++)this.spark.add({x:t,y:e,z:n,vx:it(-5,5),vy:it(-2,5),vz:it(-5,5),life:it(.15,.35)})}dust(t,e,n,s,r){for(let a=0;a<2;a++)this.dustPool.add({x:t+it(-.08,.08),y:e+.03,z:n+it(-.08,.08),vx:s+it(-.5,.5),vy:it(.3,1.1),vz:r+it(-.5,.5),life:it(.3,.6)})}setDecalParent(t){this.decals.parent!==t&&t.add(this.decals)}splash(t,e,n){for(let s=0;s<40;s++)this.water.add({x:t+it(-.3,.3),y:e,z:n+it(-.3,.3),vx:it(-1.5,1.5),vy:it(2,6),vz:it(-1.5,1.5),life:it(.5,1)})}bleed(t,e,n){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0})}popup(t,e,n,s,r,a,o){let l=0;for(let c of this.popups)c.age<.4&&Math.hypot(c.x-t,c.z-n)<1.2&&l++;this.popups.push({x:t,y:e+l*.42,z:n,text:s,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,s){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),it(0,Math.PI));let a=s*it(.8,1.4);r.compose(this._p,this._q,new I(a,1,s)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let r of this.bleeders){r.t+=t;let a=r.rag;if(a.removed){r.t=r.dur;continue}let o=a.pts[r.idx],l=a.neighborOf(r.idx);if(l<0)continue;let c=a.pts[l],h=o.x-c.x,f=o.y-c.y,u=o.z-c.z,d=Math.hypot(h,f,u)||1;h/=d,f/=d,u/=d;let p=1-r.t/r.dur,x=.55+.45*Math.sin(r.t*16);r.acc+=t*120*p*x;let g=(o.x-o.px)/t,m=(o.y-o.py)/t,M=(o.z-o.pz)/t;for(;r.acc>=1;){r.acc-=1;let S=it(1.5,3.8)*(.4+p);this.blood.add({x:o.x,y:o.y,z:o.z,vx:h*S+it(-.6,.6)+g*.5,vy:f*S+it(-.6,.6)+m*.5,vz:u*S+it(-.6,.6)+M*.5,life:it(.8,1.5)})}}this.bleeders=this.bleeders.filter(r=>r.t<r.dur);let n=this.blood.list,s=0;for(let r=0;r<n.length;r++){let a=n[r];a.life-=t,a.vy-=Qe*.8*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let o=e.ground(a.x,a.z);if(a.y<=o+.01){Math.random()<.55&&this.addDecal(a.x,e.decalLocal?0:o,a.z,it(.025,.07));continue}a.y<e.waterY||a.life>0&&(n[s++]=a)}n.length=s;for(let r of[this.spark,this.water,this.dustPool]){let a=r.list,o=0;for(let l=0;l<a.length;l++){let c=a[l];if(c.life-=t,r===this.spark)c.vx*=.92,c.vz*=.92,c.vy-=6*t;else if(r===this.dustPool){let h=Math.exp(-3*t);c.vx*=h,c.vz*=h,c.vy*=h}else c.vy-=Qe*.6*t;c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life>0&&(a[o++]=c)}a.length=o}for(let r of this.popups)r.age+=t,r.y+=.5*t;this.popups=this.popups.filter(r=>r.age<r.life)}flush(){this.blood.flush(),this.spark.flush(),this.water.flush(),this.dustPool.flush()}};function bf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ye,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Sf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let p=Sf(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Sf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Te(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Wn(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Vi(s);return r.colorSpace=ze,n&&(r.wrapS=r.wrapT=Qn,r.repeat.set(n,n)),r.anisotropy=8,r}function Ly(i,t,e){let s=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*s,(o+.15+Math.random()*.7)*s,Math.random()]);let a=i.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/s),h=Math.floor(o/s),f=1e9,u=1e9,d=0;for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){let S=(c+M+7)%7,_=(h+m+7)%7,b=r[_*7+S],w=b[0]+(c+M-S)*s,A=b[1]+(h+m-_)*s,y=Math.hypot(w-l,A-o);y<f?(u=f,f=y,d=b[2]):y<u&&(u=y)}let p=Rt((u-f)/5,0,1),x=(o*t+l)*4,g=222+d*18-f/s*18;a.data[x]=Uh(120,g-14,p),a.data[x+1]=Uh(160,g+6,p),a.data[x+2]=Uh(200,g+20,p),a.data[x+3]=255}i.putImageData(a,0,0)}function Uh(i,t,e){return i+(t-i)*e}function Dy(i,t,e){i.fillStyle="#4c9427",i.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];i.lineCap="round";for(let s=0;s<4200;s++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;i.strokeStyle=n[s%n.length],i.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])i.beginPath(),i.moveTo(r+c,a+h),i.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),i.stroke()}}function Ny(i,t,e){i.fillStyle="#d9a66e",i.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)i.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",i.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);i.strokeStyle="rgba(170,120,70,0.25)",i.lineWidth=2;for(let n=8;n<e;n+=22){i.beginPath();for(let s=0;s<=t;s+=8)i.lineTo(s,n+Math.sin(s/t*Math.PI*4+n)*4);i.stroke()}}function Uy(i,t,e){i.clearRect(0,0,t,e);let n=t/2;i.strokeStyle="#6f9a2b",i.lineWidth=3,i.beginPath(),i.moveTo(n,e),i.quadraticCurveTo(n+4,e*.5,n,6),i.stroke();for(let s=0;s<26;s++){let r=s/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;i.fillStyle=l;for(let c of[-1,1])i.save(),i.translate(n,a),i.rotate(c*(1.05-r*.25)),i.beginPath(),i.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),i.fill(),i.restore()}}function Fy(i,t,e){i.clearRect(0,0,t,e),i.lineCap="round";for(let n=0;n<18;n++){let s=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;i.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],i.lineWidth=2+Math.random()*2,i.beginPath(),i.moveTo(s,e),i.quadraticCurveTo(s,e*.6,s+a,r),i.stroke()}}function wf(i,t,e){i.clearRect(0,0,t,e);for(let n=0;n<14;n++){let s=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(s,r,a,0,Math.PI*2),i.fill()}}function Ef(i,t,e,n){let s=new _i(i,t,11,6);s.index&&(s=s.toNonIndexed());let r=s.attributes.position,a=new I;for(let f=0;f<r.count;f++){a.fromBufferAttribute(r,f);let u=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,d=1-(a.y+t/2)/t;a.x+=(An(u)-.5)*i*.35*d,a.z+=(An(u+1)-.5)*i*.35*d,a.y+=(An(u+2)-.5)*t*.12*d,r.setXYZ(f,a.x,a.y,a.z)}s.computeVertexNormals();let o=new Float32Array(r.count*3),l=s.attributes.normal,c=new zt;for(let f=0;f<r.count;f+=3){let d=((r.getY(f)+r.getY(f+1)+r.getY(f+2))/3+t/2)/t,p=l.getY(f);d>.82?c.set(n.snow):p>.55&&d<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(An(f*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(f+x)*3]=c.r,o[(f+x)*3+1]=c.g,o[(f+x)*3+2]=c.b}s.setAttribute("color",new Te(o,3));let h=new Pt(s,new Jt({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function Tf(i,t,e){let n=new Ps(i,0);n.index&&(n=n.toNonIndexed());let s=n.attributes.position;for(let a=0;a<s.count;a++){let o=Math.round(s.getX(a)*50)+Math.round(s.getY(a)*30)*3+Math.round(s.getZ(a)*70)*7+t;s.setXYZ(a,s.getX(a)*(1+(An(o)-.5)*.3),s.getY(a)*.7,s.getZ(a)*(1+(An(o+3)-.5)*.3))}n.computeVertexNormals();let r=new Pt(n,new Jt({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function Af(i,t,e,n){let s=[];for(let o=0;o<i;o++){let l=new Sn(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/i*Math.PI*2+Math.random()*.5),s.push(l)}let r=bf(s),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function Rf(i,t,e,n,s,r,a,o){let l=new Bn(i,t,e),c=new te,h=new Je,f=new I,u=new I,d=new I(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let g=Math.random()*Math.PI*2,m=n+Math.sqrt(Math.random())*(s-n),M=Math.cos(g)*m,S=Math.sin(g)*m;if(o&&o(M,S))continue;let _=r+Math.random()*(a-r);u.set(M,0,S),h.setFromAxisAngle(d,Math.random()*Math.PI*2),f.set(_,_*(.8+Math.random()*.4),_),c.compose(u,h,f),l.setMatrixAt(p++,c)}return l.count=p,l}function Oy(i,t,e){i.fillStyle="#cfd3d8",i.fillRect(0,0,t,e);for(let r=0;r<2600;r++)i.fillStyle=Math.random()<.5?"rgba(0,0,0,0.035)":"rgba(255,255,255,0.07)",i.fillRect(Math.random()*t,Math.random()*e,2,2);i.strokeStyle="#a3a9b0",i.lineWidth=3;let n=4,s=t/n;for(let r=0;r<=n;r++)i.beginPath(),i.moveTo(r*s,0),i.lineTo(r*s,e),i.stroke(),i.beginPath(),i.moveTo(0,r*s),i.lineTo(t,r*s),i.stroke()}function zy(i,t,e){i.fillStyle="#f3efe8",i.fillRect(0,0,t,e),i.fillStyle="#d7262d";for(let n=-t;n<=2*t;n+=t/2)i.beginPath(),i.moveTo(n,0),i.lineTo(n+t/4,0),i.lineTo(n+t/4-e,e),i.lineTo(n-e,e),i.closePath(),i.fill()}var Lf=.45,oi=8;function By(i,t){let e=new ye,n=i*(oi+1);e.setAttribute("position",new Te(new Float32Array(n*3),3).setUsage(Hs)),e.setAttribute("normal",new Te(new Float32Array(n*3),3).setUsage(Hs));let s=new Float32Array(n*2),r=[];for(let a=0;a<i;a++)for(let o=0;o<=oi;o++){let l=a*(oi+1)+o;if(s[l*2]=o/oi,s[l*2+1]=a*t/Lf,a<i-1&&o<oi){let c=l+oi+1;r.push(l,c,l+1,c,c+1,l+1)}}return e.setAttribute("uv",new Te(s,2)),e.setIndex(r),e}var ai=new I,Xn=new I,Nl=new I,ha=new I,ky=new I(0,1,0);function Cf(i,t,e){let n=i.attributes.position.array,s=i.attributes.normal.array,r=t.length-1;for(let a=0;a<=r;a++){let o=t[Math.max(0,a-1)],l=t[Math.min(r,a+1)];ai.set(l.x-o.x,l.y-o.y,l.z-o.z),ai.lengthSq()<1e-10&&ai.set(0,1,0),ai.normalize(),a===0?(Xn.crossVectors(ai,ha.set(1,0,0)),Xn.lengthSq()<1e-6&&Xn.crossVectors(ai,ha.set(0,0,1))):Xn.addScaledVector(ai,-ai.dot(Xn)),Xn.normalize(),Nl.crossVectors(ai,Xn);let c=t[a];for(let h=0;h<=oi;h++){let f=h/oi*Math.PI*2,u=Math.cos(f),d=Math.sin(f),p=(a*(oi+1)+h)*3,x=Xn.x*u+Nl.x*d,g=Xn.y*u+Nl.y*d,m=Xn.z*u+Nl.z*d;s[p]=x,s[p+1]=g,s[p+2]=m,n[p]=c.x+x*e,n[p+1]=c.y+g*e,n[p+2]=c.z+m*e}}i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0}function If(i,t,e,n,s,r,a,o){ha.set(r-e,a-n,o-s);let l=ha.length()||.001;i.position.set(e,n,s),i.scale.set(1,l/t,1),i.quaternion.setFromUnitVectors(ky,ha.multiplyScalar(1/l))}var Oh=[[8.4,8.4],[-8.4,8.4],[8.4,-8.4],[-8.4,-8.4],[9.6,1.3],[-9.6,-1.3],[-3.2,9.6],[3.2,-9.6]];for(let i=0;i<6;i++){let t=(20+i*60)*Math.PI/180,e=(50+i*60)*Math.PI/180;Oh.push([+(Math.sin(t)*4.5).toFixed(2),+(Math.cos(t)*4.5).toFixed(2)]),Oh.push([+(Math.sin(e)*7.2).toFixed(2),+(Math.cos(e)*7.2).toFixed(2)])}var Pf=1.6,Fh=.42,Hy=1.4,Vy=29,Gy=new zt(2614271),Wy=new zt(16722902),Xy=new zt(2829876);function qy(){let i=new We({uniforms:{top:{value:new zt},horizon:{value:new zt},bottom:{value:new zt}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:De,depthWrite:!1,fog:!1}),t=new Pt(new un(400,32,16),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function Yy(i,t){let e=pl.merge([xt.fog,{time:{value:0},deep:{value:new zt(i)},light:{value:new zt(t)}}]);return new We({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
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
      }`})}var Ul=class{constructor(t){this.scene=t,this.t=0,this.sky=qy(),t.add(this.sky),this.hemi=new Br(16777215,7829367,1.1),t.add(this.hemi);let e=new Gr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new I(.5,1,.35).normalize(),this.gx=0,this.gz=0,this.gvx=0,this.gvz=0,this.tgx=0,this.tgz=0,this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo(),roof:this.buildRoof(),grid:this.buildGrid()},this._m4=new te,this._col=new zt;for(let s of Object.values(this.envs))s.group.visible=!1,t.add(s.group);this.env=null}set(t,e=!1){this.env&&(this.env.group.visible=!1);let n=this.envs[t];this.env=n,this.name=t,n.group.visible=!0,this.radius=e?62:n.radius;for(let o of n.props||[])o.visible=!e;let s=this.sun.shadow.camera,r=e?26:14;s.right!==r&&(s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.far=e?120:70,s.updateProjectionMatrix()),this.shadowDist=e?60:30;let a=this.sky.material.uniforms;a.top.value.set(n.sky[0]),a.horizon.value.set(n.sky[1]),a.bottom.value.set(n.sky[2]),this.scene.fog=new _r(n.sky[1],n.fog[0],n.fog[1]),this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.sun.color.set(n.sun[0]),this.sun.intensity=n.sun[1],this.sunDir.set(n.sun[2],n.sun[3],n.sun[4]).normalize(),this.waterY=n.waterY,this.canFall=n.canFall,this.wallH=n.wallH||0,this.overSpeed=n.overSpeed||0,this.fallDepth=n.fallDepth||.9,this.gx=this.gz=this.gvx=this.gvz=this.tgx=this.tgz=0,this.noStick=!!n.grid,n.roof&&this.resetRoof(),n.grid&&this.resetGrid()}get decalLocal(){return!!(this.env&&(this.env.roof||this.env.grid))}get ropes(){return this.env&&this.env.roof?this.env.ropes:null}get grid(){return!!(this.env&&this.env.grid)}get tilt(){return Math.hypot(this.tgx,this.tgz)}ground(t,e){let n=this.env;if(n.grid){let s=this.tileAt(t,e);return s<0?-1/0:n.h[s]}return n.roof?Math.abs(t)<=n.half&&Math.abs(e)<=n.half?this.gx*t+this.gz*e:-1/0:n.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))?0:-1/0:0}inside(t,e,n){let s=this.env;return s.grid?Math.abs(t)<s.half-n&&Math.abs(e)<s.half-n:s.roof?Math.abs(t)<s.inner-n&&Math.abs(e)<s.inner-n:s.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n:Math.hypot(t,e)<this.radius-n}clampInside(t,e,n,s){let r=this.env;if(r.floe)return!1;if(r.roof||r.grid){let a=(r.grid?r.half:r.inner)-n-.001;Math.abs(t)>a&&(t=Math.sign(t)*a,s.vx=0,s.slideX=0),Math.abs(e)>a&&(e=Math.sign(e)*a,s.vz=0,s.slideZ=0)}else{let a=Math.hypot(t,e),o=this.radius-n-.001;if(a>o){let l=t/a,c=e/a;t=l*o,e=c*o;let h=s.vx*l+s.vz*c;h>0&&(s.vx-=l*h,s.vz-=c*h);let f=s.slideX*l+s.slideZ*c;f>0&&(s.slideX-=l*f,s.slideZ-=c*f)}}return s.x=t,s.z=e,!0}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let s=0;s<n;s++){let r=e[s],a=e[(s+1)%n],o=s+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,f=a.z-r.z,u=l*f-c*h;return Math.abs(u)<1e-9?r.r:(r.x*f-r.z*h)/u}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e);let s=this.shadowDist||30;this.sun.position.set(t+n.x*s,n.y*s,e+n.z*s)}update(t,e){this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t),this.env.roof&&this.renderRoof(e),this.env.grid&&this.renderGrid();for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,s,r){let a=Wn(256,128,wf),o=[];for(let l=0;l<e;l++){let c=new Hi(new gi({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,f=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*f,it(s,r),Math.sin(h)*f);let u=it(60,120);c.scale.set(u,u*.45,1),t.add(c),o.push(c)}return o}tileAt(t,e){let n=this.env,s=n.N,r=Math.floor(t/n.S+s/2),a=Math.floor(e/n.S+s/2);return r<0||a<0||r>=s||a>=s?-1:a*s+r}tileMotion(t,e,n){let s=this.env;if(n.vy=0,n.px=0,n.pz=0,!s.grid)return n;let r=this.tileAt(t,e);return r<0||(n.vy=s.v[r],n.px=s.px[r],n.pz=s.pz[r]),n}solidAt(t,e,n){let s=this.env;if(!s.grid)return!1;let r=this.tileAt(t,e);return r>=0&&s.h[r]>n+.45}resetGrid(){let t=this.envs.grid;t.h.fill(0),t.v.fill(0),t.px.fill(0),t.pz.fill(0),t.glow.fill(0),t.events.length=0,t.nextEv=3,t.dirty.fill(1),this.renderGrid()}spawnGridEvent(t){let e=this.env,n=e.N,s=e.S,r=t?t.x:0,a=t?t.z:0,o=e.half-2;if(Math.random()<.5){let u=it(0,Math.PI*2),d=it(2,7);e.events.push({kind:"ring",t:0,warn:1.1,x:Rt(r+Math.cos(u)*d,-o,o),z:Rt(a+Math.sin(u)*d,-o,o),speed:9,maxR:24,amp:1.25,width:1.9});return}let l=Rt(Math.floor(r/s+n/2),0,n-1),c=Rt(Math.floor(a/s+n/2),0,n-1),h=[],f=Math.floor(it(0,3));if(f===0){let u=Math.random()<.5?0:1;for(let d=c-4;d<=c+4;d++)for(let p=l-4;p<=l+4;p++)p>=0&&d>=0&&p<n&&d<n&&(p+d)%2===u&&h.push(d*n+p)}else if(f===1){let u=Rt(l+Math.floor(it(-2,3)),0,n-1),d=Rt(c+Math.floor(it(-2,3)),0,n-1);for(let p=0;p<n;p++)h.push(d*n+p),p!==d&&h.push(p*n+u)}else for(let u=0;u<16;u++){let d=Rt(l+Math.floor(it(-5,6)),0,n-1),p=Rt(c+Math.floor(it(-5,6)),0,n-1);h.push(p*n+d)}e.events.push({kind:"piston",t:0,warn:1,up:.2,hold:.7,down:.6,amp:1.6,tiles:h})}stepGrid(t,e){let n=this.env,s=n.N,r=n.S,a=n.h,o=n.v;n.nextEv-=t,n.nextEv<=0&&(this.spawnGridEvent(e),n.nextEv=it(3.5,6.5));let l=n.tgt,c=n.glow,h=n.px,f=n.pz;l.fill(0),c.fill(0),h.fill(0),f.fill(0);for(let d of n.events)if(d.t+=t,d.kind==="ring"){let p=(d.t-d.warn)*d.speed-d.width,x=Math.floor(d.x/r+s/2),g=Math.floor(d.z/r+s/2);if(d.t<d.warn){let y=.5+.5*Math.sin(d.t*22);for(let T=g-1;T<=g+1;T++)for(let R=x-1;R<=x+1;R++){if(R<0||T<0||R>=s||T>=s)continue;let P=T*s+R;c[P]=Math.max(c[P],y*(R===x&&T===g?1:.5)),n.gcol[P]=0}continue}let m=d.amp*(1-.5*p/d.maxR),M=Math.max(0,p-d.width),S=p+d.width,_=Math.max(0,Math.floor((d.x-S)/r+s/2)),b=Math.min(s-1,Math.floor((d.x+S)/r+s/2)),w=Math.max(0,Math.floor((d.z-S)/r+s/2)),A=Math.min(s-1,Math.floor((d.z+S)/r+s/2));for(let y=w;y<=A;y++)for(let T=_;T<=b;T++){let R=(T-s/2+.5)*r,P=(y-s/2+.5)*r,D=R-d.x,z=P-d.z,L=Math.hypot(D,z);if(L<M||L>S)continue;let O=(L-p)/d.width,W=(1-O*O)*(1-O*O),k=y*s+T;if(m*W>l[k]){l[k]=m*W,c[k]=Math.max(c[k],W),n.gcol[k]=0;let st=L||1;h[k]=D/st*3.5*W,f[k]=z/st*3.5*W}}d.done=p>d.maxR+d.width}else{let p=d.t,x=0,g=0;p<d.warn?g=.35+.65*(.5+.5*Math.sin(p*26)):p<d.warn+d.up?(x=d.amp*(p-d.warn)/d.up,g=1):p<d.warn+d.up+d.hold?(x=d.amp,g=1):(x=d.amp*Math.max(0,1-(p-d.warn-d.up-d.hold)/d.down),g=x/d.amp);for(let m of d.tiles)x>l[m]&&(l[m]=x),g>c[m]&&(c[m]=g,n.gcol[m]=1);d.done=p>d.warn+d.up+d.hold+d.down}n.events.length&&(n.events=n.events.filter(d=>!d.done));let u=1/t;for(let d=0;d<s*s;d++){let p=l[d];o[d]=Rt((p-a[d])*u,-20,12),(p!==a[d]||c[d]!==n.lastGlow[d])&&(n.dirty[d]=1),a[d]=p}}renderGrid(){let t=this.env,e=t.N,n=t.S,s=this._m4,r=this._col,a=!1,o=!1;for(let l=0;l<e*e;l++){if(!t.dirty[l])continue;t.dirty[l]=0;let c=l%e,h=l/e|0;s.makeTranslation((c-e/2+.5)*n,t.h[l],(h-e/2+.5)*n),t.tiles.setMatrixAt(l,s),a=!0;let f=t.glow[l];f!==t.lastGlow[l]&&(t.lastGlow[l]=f,r.copy(t.base[l]).lerp(t.gcol[l]?Wy:Gy,Rt(f,0,1)*.85),t.tiles.setColorAt(l,r),o=!0)}a&&(t.tiles.instanceMatrix.needsUpdate=!0),o&&(t.tiles.instanceColor.needsUpdate=!0)}buildGrid(){let t=new me,e=Vy,n=Hy,s=e*n/2,r=new Le(n-.08,4,n-.08).translate(0,-2,0),a=new Jt({color:16777215,roughness:.28,metalness:.3,envMapIntensity:.45}),o=new Bn(r,a,e*e);o.receiveShadow=!0,o.castShadow=!0,o.frustumCulled=!1;let l=[];for(let f=0;f<e*e;f++){let u=Xy.clone().offsetHSL(0,0,(An(f*3.7)-.5)*.025);l.push(u),o.setColorAt(f,u)}t.add(o);let c=new Pt(new Sn(s*2,s*2),new ei({color:197379}));c.rotation.x=-Math.PI/2,c.position.y=-.35,t.add(c);let h=e*e;return{group:t,grid:!0,tiles:o,base:l,N:e,S:n,half:s,h:new Float32Array(h),v:new Float32Array(h),tgt:new Float32Array(h),px:new Float32Array(h),pz:new Float32Array(h),glow:new Float32Array(h),lastGlow:new Float32Array(h).fill(-1),gcol:new Uint8Array(h),dirty:new Uint8Array(h).fill(1),events:[],nextEv:3,radius:s-.3,floe:null,water:null,waterY:-1/0,canFall:!0,fallDepth:2.5,clouds:[],sky:[1051404,1905686,197122],fog:[16,55],hemi:[16774380,1710618,.6],sun:[16777215,2.4,.35,1,.25]}}resetRoof(){let t=this.envs.roof;for(let e of t.ropes)e.intact=!0,e.up=null,e.stub&&(t.group.remove(e.stub.mesh),e.stub.mesh.geometry.dispose(),e.stub=null),e.mesh.visible=!0;this.renderRoof()}updateTilt(){let t=this.env,e=0,n=0,s=0;for(let l of t.ropes)l.intact&&(n+=l.x,s+=l.z,e++);e&&(n/=e,s/=e);let r=Pf*n/t.half,a=Pf*s/t.half,o=Math.hypot(r,a);o>Fh&&(r*=Fh/o,a*=Fh/o),this.gvx+=(r-this.tgx)*3,this.gvz+=(a-this.tgz)*3,this.tgx=r,this.tgz=a}cutRope(t,e,n,s){let r=this.env;t.intact=!1,e=Rt(e,.3,3.2);let a=this.ground(t.x,t.z),o=Math.max(3,Math.round(e/.2)),l=e/o,c=Math.hypot(n,s)||1,h=n/c*.03,f=s/c*.03,u=[];for(let p=0;p<=o;p++){let x=p/o,g=a+e*x;u.push({x:t.x,y:g,z:t.z,px:t.x-h*x,py:g,pz:t.z-f*x})}let d=new Pt(By(o+1,l),r.ropeMat);d.castShadow=!0,d.frustumCulled=!1,r.group.add(d),t.stub={pts:u,seg:l,mesh:d},Cf(d.geometry,u,t.r),t.up={y:a+e,len:t.top-(a+e),v:0,t:0,wx:h/.03,wz:f/.03},this.updateTilt()}step(t,e){let n=this.env;if(n&&n.grid){this.stepGrid(t,e);return}if(!n||!n.roof)return;let s=18,r=3.4;this.gvx+=(s*(this.tgx-this.gx)-r*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(s*(this.tgz-this.gz)-r*this.gvz)*t,this.gz+=this.gvz*t;for(let a of n.ropes)a.up&&(a.up.t+=t,a.up.v+=60*t,a.up.y+=a.up.v*t,a.up.t>2.5&&(a.up=null)),a.stub&&this.stepStub(a,t)}stepStub(t,e){let n=t.stub.pts,s=t.stub.seg,r=t.r,a=n[0];a.x=t.x,a.y=this.ground(t.x,t.z),a.z=t.z;for(let o=1;o<n.length;o++){let l=n[o],c=(l.x-l.px)*.99,h=(l.y-l.py)*.99,f=(l.z-l.pz)*.99;l.px=l.x,l.py=l.y,l.pz=l.z,l.x+=c,l.y+=h-Qe*e*e,l.z+=f}for(let o=0;o<6;o++){for(let l=1;l<n.length;l++){let c=n[l-1],h=n[l],f=h.x-c.x,u=h.y-c.y,d=h.z-c.z,p=Math.hypot(f,u,d)||1e-6,x=(p-s)/p,g=l===1?0:.5,m=1-g;c.x+=f*x*g,c.y+=u*x*g,c.z+=d*x*g,h.x-=f*x*m,h.y-=u*x*m,h.z-=d*x*m}for(let l=1;l<n.length;l++){let c=n[l],h=this.ground(c.x,c.z);c.y<h+r&&(c.y=h+r,c.px=c.x-(c.x-c.px)*.8,c.pz=c.z-(c.z-c.pz)*.8)}}}renderRoof(t){let e=this.env;e.plat.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),e.plat.matrixWorldNeedsUpdate=!0;for(let n of e.ropes){let s=n.mesh,r=t?Math.hypot(t.x-n.x,t.z-n.z):9,a=Rt((r-.7)/1.6,.12,1);if(s.material.opacity=a,s.material.transparent=a<1,s.material.depthWrite=a>=1,n.intact)s.visible=!0,If(s,n.L0,n.x,this.ground(n.x,n.z),n.z,n.x,n.top,n.z);else if(n.up){let o=n.up,l=Math.sin(o.t*24)*.6*Math.exp(-o.t*2.2);s.visible=!0,If(s,n.L0,n.x+o.wx*l,o.y,n.z+o.wz*l,n.x,o.y+o.len,n.z)}else s.visible=!1;n.stub&&Cf(n.stub.mesh.geometry,n.stub.pts,n.r)}}buildRoof(){let t=new me,e=new me;e.matrixAutoUpdate=!1,t.add(e);let n=11,s=.3,r=.45,a=Wn(256,256,Oy);a.wrapS=a.wrapT=Qn,a.repeat.set(n*2/4,n*2/4);let o=new Jt({map:a,roughness:.85}),l=new Jt({color:9278620,roughness:.9}),c=new Jt({color:6252142,roughness:.9}),h=new Pt(new Le(n*2,.8,n*2),[l,l,o,c,l,l]);h.position.y=-.4,h.receiveShadow=!0,h.castShadow=!0,e.add(h);for(let[b,w,A,y]of[[n*2,.5,0,-5],[n*2,.5,0,5],[.5,n*2,-5,0],[.5,n*2,5,0]]){let T=new Pt(new Le(b,.5,w),c);T.position.set(A,-1.05,y),e.add(T)}let f=new Jt({color:11712703,roughness:.8});for(let[b,w,A,y]of[[n*2,s,0,n-s/2],[n*2,s,0,-n+s/2],[s,n*2-s*2,n-s/2,0],[s,n*2-s*2,-n+s/2,0]]){let T=new Pt(new Le(b,r,w),f);T.position.set(A,r/2,y),T.castShadow=!0,T.receiveShadow=!0,e.add(T)}let u=Wn(64,64,zy);u.wrapS=u.wrapT=Qn;let d=new Jt({map:u,roughness:.55}),p=new Jt({color:4870232,roughness:.4,metalness:.6}),x=[],g=.075,m=46;for(let[b,w]of Oh){let A=m,y=new Ke(g,g,A,10,1,!0).translate(0,A/2,0),T=y.attributes.uv;for(let D=0;D<T.count;D++)T.setY(D,T.getY(D)*A/Lf);let R=new Pt(y,d.clone());R.castShadow=!0,t.add(R);let P=new Pt(new Ke(.2,.25,.07,14),p);P.position.set(b,.035,w),P.receiveShadow=!0,e.add(P),x.push({x:b,z:w,r:g,top:m,L0:A,mesh:R,intact:!0,stub:null,up:null})}let M=Wn(256,128,wf),S=[];for(let b=0;b<16;b++){let w=new Hi(new gi({map:M,fog:!1,transparent:!0,depthWrite:!1,opacity:.95})),A=Math.random()*Math.PI*2,y=it(25,150);w.position.set(Math.cos(A)*y,it(-48,-12),Math.sin(A)*y);let T=it(40,95);w.scale.set(T,T*.45,1),t.add(w),S.push(w)}let _=new Jt({color:10466505,roughness:.9});for(let b=0;b<16;b++){let w=b/16*Math.PI*2+it(-.15,.15),A=it(40,120),y=it(6,13),T=it(-30,5),R=new Pt(new Le(y,200,y*it(.7,1.3)),_);R.position.set(Math.cos(w)*A,T-100,Math.sin(w)*A),R.rotation.y=it(0,Math.PI),t.add(R)}return{group:t,plat:e,roof:!0,half:n,inner:n-s,wallH:r,overSpeed:5,fallDepth:1.5,ropes:x,ropeMat:d,radius:n-s,floe:null,water:null,waterY:-1/0,canFall:!0,clouds:S.concat(this.clouds(t,8,170,25,70)),sky:[4165600,14084600,15857403],fog:[55,240],hemi:[15398143,11122888,1.1],sun:[16777215,2.6,.4,1,.5]}}buildMeadow(){let t=new me,e=Wn(256,256,Dy,70),n=new Pt(new Sn(300,300),new Jt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Jt({map:Wn(128,256,Uy),alphaTest:.45,side:on,roughness:.9}),r=(c,h)=>Math.hypot(c,h)<20&&Math.random()<.85;t.add(Rf(Af(6,.42,1,.75),s,320,1.5,45,.6,1.5,r));let a=new Jt({map:Wn(64,64,Fy),alphaTest:.4,side:on,roughness:1});t.add(Rf(Af(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let c=0;c<14;c++){let h=c/14*Math.PI*2+it(-.15,.15),f=it(85,130),u=Ef(it(28,50),it(26,55),c*13.7,o);u.position.x=Math.cos(h)*f,u.position.z=Math.sin(h)*f,t.add(u)}let l=[];for(let c=0;c<16;c++){let h=Math.random()*Math.PI*2,f=it(31,48),u=Tf(it(.8,2.6),c*31,9078398);u.position.set(Math.cos(h)*f,0,Math.sin(h)*f),t.add(u),l.push(u)}return{group:t,props:l,radius:28,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new me,e=12,n=[];for(let d=0;d<e;d++){let p=d/e*Math.PI*2+it(-.1,.1)-Math.PI,x=it(14.5,17);n.push({a:p,r:x,x:Math.cos(p)*x,z:Math.sin(p)*x})}let s=new Ds;n.forEach((d,p)=>p?s.lineTo(d.x,-d.z):s.moveTo(d.x,-d.z)),s.closePath();let r=new Ur(s,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=Wn(256,256,Ly);a.wrapS=a.wrapT=Qn,a.repeat.set(.28,.28);let o=new Jt({map:a,roughness:.35,metalness:0}),l=new Jt({color:8829408,roughness:.3}),c=new Pt(r,[o,l]);c.receiveShadow=!0,t.add(c);let h=new Pt(new Sn(500,500),Yy(4869570,9080816));h.rotation.x=-Math.PI/2,h.position.y=-.35,t.add(h);let f=new Jt({color:10930408,roughness:.35,flatShading:!0}),u=(d,p,x,g,m,M)=>{let S=new Le(d,p,x,3,6,3);S.index&&(S=S.toNonIndexed());let _=S.attributes.position;for(let w=0;w<_.count;w++){let A=Math.round(_.getX(w)*10)*3.3+Math.round(_.getY(w)*10)*1.7+Math.round(_.getZ(w)*10)*5.1+M;_.setXYZ(w,_.getX(w)+(An(A)-.5)*d*.25,_.getY(w)+(An(A+1)-.5)*.6,_.getZ(w)+(An(A+2)-.5)*x*.25)}S.computeVertexNormals();let b=new Pt(S,f);b.position.set(g,p/2-1.5,m),b.rotation.y=it(0,Math.PI),t.add(b)};u(7,20,6,12,44,1),u(5,9,5,-38,30,2),u(9,6,7,-22,-46,3),u(4,13,4,46,-14,4);for(let d=0;d<14;d++){let p=Math.random()*Math.PI*2,x=it(20,40),g=Tf(it(.4,1.3),d*7,14281978);g.position.set(Math.cos(p)*x,-.35,Math.sin(p)*x),g.castShadow=!1,t.add(g)}return{group:t,floe:n,water:h,waterY:-.35,canFall:!0,radius:16,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}buildDojo(){let t=new me,e=Wn(256,256,Ny,60),n=new Pt(new Sn(300,300),new Jt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Jt({color:10127992,flatShading:!0,roughness:.9});for(let d=0;d<84;d++){let p=d/84*Math.PI*2,x=new Pt(new Ps(it(.22,.34),0),s);x.position.set(Math.cos(p)*22.6,.08,Math.sin(p)*22.6),x.castShadow=!0,t.add(x)}let r=new Jt({color:13116958,roughness:.6}),a=new Jt({color:2759190,roughness:.7}),o=new me;for(let d of[-2.6,2.6]){let p=new Pt(new Ke(.28,.34,6,12),r);p.position.set(d,3,0),o.add(p)}let l=new Pt(new Le(7.6,.45,.6),a);l.position.y=6.2;let c=new Pt(new Le(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(d=>{d.isMesh&&(d.castShadow=!0)}),o.position.set(0,0,30),t.add(o);for(let[d,p]of[[-9,27],[9,27],[-27,-6],[27,-6],[-16,-24],[16,-24]]){let x=new me,g=new Pt(new Ke(.35,.45,1.2,8),s);g.position.y=.6;let m=new Pt(new Le(.8,.6,.8),s);m.position.y=1.5;let M=new Pt(new _i(.75,.5,4),s);M.position.y=2.05,M.rotation.y=Math.PI/4,x.add(g,m,M),x.traverse(S=>{S.isMesh&&(S.castShadow=!0)}),x.position.set(d,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let d=0;d<12;d++){let p=d/12*Math.PI*2,x=Ef(it(40,70),it(10,22),d*5.3,h);x.position.x=Math.cos(p)*it(90,130),x.position.z=Math.sin(p)*it(90,130),t.add(x)}let f=Wn(128,128,(d,p)=>{let x=d.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),d.fillStyle=x,d.fillRect(0,0,p,p)}),u=new Hi(new gi({map:f,fog:!1,depthWrite:!1}));return u.position.set(0,38,190),u.scale.set(90,90,1),t.add(u),{group:t,radius:22,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var Zy=55,Fl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=Zy,this.taps=[],this.tapStart={t:0,x:0,y:0,moved:0},window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&this.end()}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){xe.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n}),Object.assign(this.tapStart,{t:performance.now(),x:e,y:n,moved:0})}end(){let t=this.tapStart;performance.now()-t.t<260&&t.moved<14&&this.taps.push({x:t.x,y:t.y}),this.stick.id=null}drag(t,e){let n=this.stick;n.x=t,n.y=e,this.tapStart.moved=Math.max(this.tapStart.moved,Math.hypot(t-this.tapStart.x,e-this.tapStart.y));let s=t-n.ox,r=e-n.oy,a=Math.hypot(s,r),o=this.stickR*1.3;a>o&&(n.ox=t-s/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),n==="Space"&&this.taps.push(null),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),xe.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.end()}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=Rt((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let s=Math.hypot(t,e);return s>1&&(t/=s,e/=s,s=1),{x:t,y:e,mag:s}}clear(){this.anyPress=!1,this.taps.length=0}endFrame(){this.anyPress=!1}};var Ky='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',Jy='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',Ol=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${Ky}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${Jy}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-grid">Izgara arenas\u0131na git</button>
        <button id="s-roof">Platform seviyesine git</button>
        <button id="s-horse">At seviyesine git</button>
        <button id="s-titan">Titan seviyesine git</button>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let s=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("mousedown",s);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),n.querySelector("#s-grid").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("grid")}),n.querySelector("#s-roof").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("roof")}),n.querySelector("#s-horse").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("horse")}),n.querySelector("#s-titan").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("titan")}),this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}drawBody(t,e,n){if(!e)return;let s=this.lv.getBoundingClientRect(),r=s.left+4,a=s.bottom+4,o=1.15*n,l=e.rag.pts,c=(d,p)=>{t.setLineDash(d?[]:[3,3]),t.strokeStyle=d?"rgba(255,255,255,0.9)":"rgba(255,59,92,0.95)",t.fillStyle=t.strokeStyle,t.beginPath(),p(),t.stroke()};t.save(),t.lineCap="round",t.lineWidth=3.2*n,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=3;let h=d=>r+d*o,f=d=>a+d*o,u=e.alive;c(u||l[X.HEAD].attached,()=>t.arc(h(14),f(7),5.5*o,0,Math.PI*2)),c(!0,()=>{t.moveTo(h(14),f(14)),t.lineTo(h(14),f(31))}),c(l[X.LHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(4),f(28))}),c(l[X.RHAND].attached,()=>{t.moveTo(h(14),f(16)),t.lineTo(h(24),f(28))}),c(l[X.LFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(7),f(47))}),c(l[X.RFOOT].attached,()=>{t.moveTo(h(14),f(31)),t.lineTo(h(21),f(47))}),t.restore()}show(t,e,n,s){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(s||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,s,r,a){let o=this.ctx,l=this.dpr;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,this.W,this.H);let c=Rt(Math.min(this.W,this.H)/400,.8,1.6);this.drawBody(o,r,c);let h=n.stick;if(h.id!==null||n.touchMode&&s>0){let f=n.stickR,u=h.id!==null,d=u?h.ox:this.W/2,p=u?h.oy:this.H-120*c;o.globalAlpha=u?.45:.25*Rt(s,0,1),o.strokeStyle="#fff",o.fillStyle="#fff",o.lineWidth=3,o.beginPath(),o.arc(d,p,f,0,Math.PI*2),o.stroke();let x=d,g=p;if(u){let m=h.x-h.ox,M=h.y-h.oy,S=Math.hypot(m,M),_=Math.min(S,f)/(S||1);x+=m*_,g+=M*_}o.beginPath(),o.arc(x,g,f*.42,0,Math.PI*2),o.fill(),o.globalAlpha=1}o.textAlign="center",o.textBaseline="middle",o.lineJoin="round";for(let f of e){let u=t(f.x,f.y,f.z);if(!u)continue;let d=1+.6*Math.max(0,1-f.age/.1),p=1-Math.max(0,(f.age/f.life-.7)/.3),x=Math.round(f.size*c*d);o.globalAlpha=p,o.font=`900 ${x}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.lineWidth=Math.max(3,x*.2),o.strokeStyle="#1a0d14",o.strokeText(f.text,u.x,u.y),o.fillStyle=f.col,o.fillText(f.text,u.x,u.y)}if(o.globalAlpha=1,this.flash>0){let f=o.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);f.addColorStop(0,"rgba(210,0,20,0)"),f.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),o.fillStyle=f,o.fillRect(0,0,this.W,this.H)}if(s>0){o.globalAlpha=Rt(s,0,1)*.9,o.font=`700 ${Math.round(14*c)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.fillStyle="#fff",o.strokeStyle="rgba(0,0,0,0.35)",o.lineWidth=3;let f=n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"];a==="titan"&&(f=[n.touchMode?"K\u0131sa dokun: halat at, u\xE7":"T\u0131kla / Bo\u015Fluk: halat at, u\xE7","Titana dokun: ona halat at","Sadece ENSES\u0130 \xF6ld\xFCr\xFCr: 3 kez kes","Ensesi t\xFCt\xFCnce uzakla\u015F: BUHAR savurur"]),a==="horse"&&(f=["S\xFCr\xFCkle: at o y\xF6ne d\xF6ner, k\u0131l\u0131\xE7 da","\xC7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","At s\u0131rt\u0131nda k\u0131l\u0131c\u0131n daha uzun"]),a==="grid"&&(f=["Parlayan karolardan uzak dur","Mavi halka ve pembe pistonlar havaya f\u0131rlat\u0131r","Kenardan bo\u015Flu\u011Fa d\xFC\u015Fen \xF6l\xFCr"]),a==="roof"&&(f=["Halatlar platformu tutuyor","Kesersen platform yan yatar, herkes kayar","Kenardan d\xFC\u015Fen \xF6l\xFCr"]),f.forEach((u,d)=>{let p=this.H*.72+d*22*c;o.strokeText(u,this.W/2,p),o.fillText(u,this.W/2,p)}),o.globalAlpha=1}}};var Df=11,Nf=.85,$y=1.72*Nf,$i=new un(1,22,16),jy=new Jt({color:16777215,roughness:.25}),Qy=new Jt({color:1118481,roughness:.3});function en(i,t,e,n,s){let r=new Pt(i,t);return r.scale.set(e,n,s),r.castShadow=!0,r}var zl=class{constructor(t,e,n,s){this.x=e,this.z=n,this.yaw=s,this.speed=0,this.vx=0,this.vz=0,this.phase=0,this.bob=0;let r=new yi({color:10115635,roughness:.3,clearcoat:1,clearcoatRoughness:.12}),a=new yi({color:3809812,roughness:.45,clearcoat:.6});this.mats=[r,a];let o=new me,l=new me;o.add(l),l.add(en($i,r,.42,.44,.98).translateY(1.3)),l.add(en($i,r,.36,.4,.42).translateY(1.36).translateZ(.62)),l.add(en($i,r,.4,.42,.45).translateY(1.33).translateZ(-.6));let c=new me;c.position.set(0,1.55,.78),c.rotation.x=.75,l.add(c),c.add(en(new ii(.2,.6,5,12),r,1,1,1).translateY(.35)),c.add(en(new ii(.07,.62,4,8),a,1,1,1.4).translateY(.35).translateZ(-.16));let h=new me;h.position.set(0,.78,.02),h.rotation.x=1.25,c.add(h),h.add(en($i,r,.17,.36,.2).translateY(.2)),h.add(en($i,a,.13,.12,.15).translateY(.5).translateZ(.01));for(let p of[-1,1]){let x=en(new _i(.05,.16,8),r,1,1,1);x.position.set(p*.08,.02,-.15),x.rotation.x=-.9,h.add(x);let g=en($i,jy,.07,.07,.07);g.position.set(p*.13,.12,-.06);let m=en($i,Qy,.03,.03,.03);m.position.set(p*.19,.14,-.05),h.add(g,m)}this.head=h,this.tail=new me,this.tail.position.set(0,1.45,-1),this.tail.add(en(new ii(.08,.6,4,8),a,1,1,1).translateY(-.35)),l.add(this.tail),this.legs=[];let f=new ii(.1,.5,4,10),u=new ii(.07,.5,4,10),d=new Ke(.085,.1,.1,10);for(let[p,x,g]of[[-.22,.62,0],[.22,.62,.35],[-.22,-.62,Math.PI],[.22,-.62,Math.PI+.35]]){let m=new me;m.position.set(p,1.12,x);let M=en(f,r,1,1,1);M.position.y=-.3;let S=new me;S.position.y=-.58;let _=en(u,r,1,1,1);_.position.y=-.28;let b=en(d,a,1,1,1);b.position.y=-.55,S.add(_,b),m.add(M,S),l.add(m),this.legs.push({hip:m,knee:S,off:g,front:x>0})}this.root=l,o.scale.setScalar(Nf),this.group=o,t.add(o)}update(t,e,n){if(e&&e.mag>.18){let h=Math.atan2(e.x,e.z);this.yaw=ri(this.yaw,h,_t(3.2,1.7,this.speed/Df)*t)}let s=e&&e.mag>.35?_t(4,Df,Rt((e.mag-.35)/.6,0,1)):0;this.speed=Qd(this.speed,s,(s>this.speed?6:9)*t);let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=this.x+r*this.speed*t,l=this.z+a*this.speed*t;n.inside(o,l,1.3)||(o=this.x,l=this.z,this.speed*=.4,this.yaw=ri(this.yaw,Math.atan2(-this.x,-this.z),3*t)),this.vx=(o-this.x)/t,this.vz=(l-this.z)/t,this.x=o,this.z=l;let c=this.speed>.3?1.3+this.speed*.17:0;this.phase+=t*Math.PI*2*c,this.bob=this.speed>.3?-Math.abs(Math.sin(this.phase))*.09*Rt(this.speed/6,0,1):0}saddle(t){return t.x=this.x-Math.sin(this.yaw)*.05,t.y=$y+this.bob,t.z=this.z-Math.cos(this.yaw)*.05,t}render(){let t=this.group;t.position.set(this.x,0,this.z),t.rotation.y=this.yaw;let e=Rt(this.speed/6,0,1),n=this.phase;this.root.position.y=this.bob,this.root.rotation.x=Math.sin(n)*.06*e;for(let s of this.legs){let r=n+s.off;s.hip.rotation.x=-Math.sin(r)*.6*e;let a=(.15+.9*Math.max(0,Math.sin(r+1.2)))*e;s.knee.rotation.x=s.front?a:-a*.8}this.tail.rotation.x=.4+Math.sin(n*.5)*.15+e*.5,this.head.rotation.x=1.25+Math.sin(n)*.08*e}dispose(t){t.remove(this.group);for(let e of this.mats)e.dispose()}};var zh=1/120,tv=16753951,Uf=10820863,ev=6951618,nv=11820272,iv={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo",roof:"Halatl\u0131 Platform",grid:"Karanl\u0131k Izgara"},sv=["meadow","ice","dojo"],Bh=["duel","duel","roof","horse","duel","boss","roof","titan"],rv=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function kh(i){let t=Bh[(i-1)%Bh.length],e=Math.floor((i-1)/Bh.length),n=Rt((i-1)/24,0,1);if(t==="roof")return{type:t,env:"roof",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(4,2+e)).fill("normal")};if(t==="horse")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:new Array(Math.min(6,3+e)).fill("big")};if(t==="titan")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan"]};let s=i%2?"grid":sv[Math.floor(i/2)%3],r=t==="boss",a=[];if(r){a.push("boss");for(let o=0;o<e;o++)a.push("normal")}else{let o=Math.min(4,1+Math.floor((i-1)/4));for(let l=0;l<o;l++)a.push("normal")}return{type:t,env:s,big:!1,skill:n,boss:r,enemies:a}}var Cn=new I,av=new I(0,1,0),ji={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},Bl=class{constructor(){let t=document.getElementById("gl"),e=new _l({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=ze,e.toneMapping=Xr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Wi,this.renderer=e,this.scene=new ki;let n=new Xs(e);this.scene.environment=n.fromScene(new Ml,.04).texture,this.scene.environmentIntensity=.85,this.camera=new Be(55,1,.1,900),this.world=new Ul(this.scene),this.fx=new Dl(this.scene);let s=document.getElementById("ui");this.input=new Fl(s),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new Ol(this,s),this.soundOn=!0,this.highQuality=Sh("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new I,this.hintT=8,this.lastH=zh,this.lastAttackT=-9,this._bb={},this.horse=null,this.titan=null,this.hookSide=1,this.raycaster=new Wr,this.ropeMesh=new Pt(new Ke(.025,.025,1,6).translate(0,.5,0),new Jt({color:2829104,roughness:.6})),this.ropeMesh.visible=!1,this.ropeMesh.frustumCulled=!1,this.scene.add(this.ropeMesh),this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(Sh("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=Rt(2*Math.atan(Math.tan(Jc.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,bh("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){xe.init(),xe.toggleMute(),this.soundOn=!xe.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),Ih(t.swordMesh));for(let t of this.loose)this.scene.remove(t.mesh),Ih(t.mesh);this.horse&&(this.horse.dispose(this.scene),this.horse=null),this.titan=null,this.ropeMesh.visible=!1,this.chars=[],this.enemies=[],this.loose=[],this.fx.clear()}addChar(t){let e=new Ll(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),this.chars.push(e),e}startLevel(t){this.clearLevel(),this.level=t,bh("rk3dLevel",t);let e=kh(t);this.spec=e,this.world.set(e.env,e.big),this.fx.setDecalParent(this.world.env.plat||this.scene),this.tiltWarned=!1,this.titanHinted=!1;let n=e.type==="titan"?-30:e.type==="horse"?0:-6;this.player=this.addChar({team:"player",x:0,z:n,yaw:0,hp:1,color:tv,speed:vf,bladeLen:e.type==="horse"?Mf:Nh}),e.type==="horse"&&(this.horse=new zl(this.scene,0,0,0),this.player.mount=this.horse);let s=e.enemies.length;e.enemies.forEach((a,o)=>{let l={team:"enemy",hp:1,skill:e.skill,color:Uf,yaw:Math.PI};if(a==="titan")Object.assign(l,{x:0,z:28,scale:7,titan:!0,hp:1,speed:2.6,skill:.4+e.skill*.6,color:nv});else if(a==="big"){let h=o/s*Math.PI*2+it(-.3,.3),f=it(16,28);Object.assign(l,{x:Math.sin(h)*f,z:Math.cos(h)*f,scale:1.6,speed:2.4,skill:e.skill*.5,heavy:!0})}else{let h=a==="boss";Object.assign(l,{x:(o-(s-1)/2)*2.6,z:6.5+o%2*1.2,hp:h?3:1,armored:h,scale:h?1.38:1,skill:h?e.skill*.5:e.skill,boss:h,color:h?ev:Uf,speed:h?3.2:_t(3.4,5.4,e.skill)})}let c=this.addChar(l);c.titan&&(this.titan=c,c.swordMesh.visible=!1,c.neckHp=3,c.steamT=it(5,7)),this.enemies.push(c)}),this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t);let r=e.type==="titan"?"T\u0130TAN!":e.type==="horse"?"At S\u0131rt\u0131nda":e.boss?"BOSS!":iv[e.env];this.hud.show(`SEV\u0130YE ${t}`,r,1.8,e.boss||e.type==="titan"?"boss":""),(e.type!=="duel"&&e.type!=="boss"||e.env==="grid")&&(this.hintT=Math.max(this.hintT,6)),this.input.clear()}restartLevel(){this.startLevel(this.level)}jumpTo(t){let e=this.level;for(;kh(e).type!==t&&kh(e).env!==t;)e++;this.startLevel(e)}frame(t){let e=this.input.taps;if(this.spec.type==="titan"&&this.phase==="play"&&this.player.alive)for(let s of e)this.fireHook(s);e.length=0,this.slowT>0?(this.slowT-=t,this.timeScale=_t(this.timeScale,this.slowScale,Tn(40,t))):this.timeScale=_t(this.timeScale,1,Tn(6,t));let n=t*this.timeScale;if(n>1e-5){let s=Math.ceil(n/zh-1e-6),r=n/s;for(let a=0;a<s;a++)this.step(r)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t,this.world.step(t,this.player),this.titan&&this.titan.alive&&this.titanSteam(this.titan,t),this.horse&&this.horse.update(t,this.player.alive?this.player.stickW:null,this.world);for(let s of this.chars)s.copyBlade(),s.update(t);this.separate();let e=this.world,n=this.lastH;for(let s of this.chars){let r=s.rag;r.step(t,n,e),!s.alive&&r.impact>6&&xe.thud(r.impact*250),r.impact=0;let a=r.pts[X.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),xe.splash())}for(let s of this.loose)s.step(t,n,e);this.combat(t),this.fx.update(t,e),this.lastH=t}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,s=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<s&&(s=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let s of this.enemies)s.alive&&s.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<_t(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars,e=this.horse,n=this.world.ropes;for(let s=0;s<t.length;s++){let r=t[s];if(!(!r.alive||r.falling||r.isPlayer&&r.y-r.gy>.5&&!r.mount)){if(n)for(let a of n){if(!a.intact)continue;let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=.28*r.S+a.r;c<h&&c>1e-4&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}if(e&&!r.isPlayer){let a=r.x-e.x,o=r.z-e.z,l=Math.hypot(a,o)||1,c=1+.3*r.S;l<c&&(r.x=e.x+a/l*c,r.z=e.z+o/l*c)}for(let a=s+1;a<t.length;a++){let o=t[a];if(!o.alive||o.falling||o.isPlayer&&o.y-o.gy>.5&&!o.mount)continue;let l=o.x-r.x,c=o.z-r.z,h=Math.hypot(l,c),f=.34*(r.S+o.S);if(h<f&&h>1e-4){let u=(f-h)*.5,d=l/h,p=c/h;this.world.inside(r.x-d*u,r.z-p*u,.3)&&(r.x-=d*u,r.z-=p*u),this.world.inside(o.x+d*u,o.z+p*u,.3)&&(o.x+=d*u,o.z+=p*u)}}}}}fireHook(t){let e=this.player,n=this.titan,s=null,r=t&&n&&n.alive?this.pickTitan(t.x,t.y):null;if(r){let a=n.rag,o=r.bone,l={x:r.x,y:r.y,z:r.z};s={pt:l,pull:48,release:1.6,maxT:2.2,t:0,titan:!0,anchor(){if(o==="head"){let c=a.pts[X.HEAD];l.x=c.x,l.y=c.y,l.z=c.z}else if(a.bones.includes(o)){let c=a.pts[o.a],h=a.pts[o.b];l.x=_t(c.x,h.x,r.u),l.y=_t(c.y,h.y,r.u),l.z=_t(c.z,h.z,r.u)}return l}}}else{let a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),l=30;n&&n.alive&&(a=n.x-e.x,o=n.z-e.z,l=Math.hypot(a,o)||1,a/=l,o/=l),this.hookSide=-this.hookSide;let c=Rt(l-8,5,18),h=6*this.hookSide,f={x:e.x+a*c+o*h,y:Rt(e.y+7,10,16),z:e.z+o*c-a*h};s={pt:f,pull:24,release:4,maxT:1.2,t:0,anchor:()=>f}}e.rope=s,e.y<.05&&(e.vy=Math.max(e.vy,4.5),e.y=.03),xe.swoosh(2)}pickTitan(t,e){let n=this.titan,s=n.rag;this.raycaster.setFromCamera({x:t/this.W*2-1,y:-(e/this.H)*2+1},this.camera);let r=this.raycaster.ray.origin,a=this.raycaster.ray.direction,o=r.x+a.x*400,l=r.y+a.y*400,c=r.z+a.z*400,h=null,f=1/0;for(let p of s.bones){if(!p.vis)continue;let x=s.pts[p.a],g=s.pts[p.b];oa(r.x,r.y,r.z,o,l,c,x.x,x.y,x.z,g.x,g.y,g.z);let m=p.r*1.3+.6;Ae.d2<m*m&&Ae.s<f&&(f=Ae.s,h={bone:p,u:Ae.t,x:_t(x.x,g.x,Ae.t),y:_t(x.y,g.y,Ae.t),z:_t(x.z,g.z,Ae.t)})}let u=s.pts[X.HEAD];Sl(u.x,u.y,u.z,r.x,r.y,r.z,o,l,c);let d=s.d.headR*1.3+.6;return Ri.d2<d*d&&Ri.t<f&&(h={bone:"head",u:0,x:u.x,y:u.y,z:u.z}),h}titanSteam(t,e){let n=t.rag.pts[X.NECK],s=this.player;if(t.steamT-=e,t.steamT<.9&&t.steamT>0&&Math.random()<e*40&&this.fx.dust(n.x+it(-1,1),n.y+.5,n.z+it(-1,1),it(-2,2),it(-2,2)),t.steamT>0)return;t.steamT=it(6,9)*_t(1,.7,t.skill);for(let f=0;f<40;f++)this.fx.dust(n.x+it(-1.5,1.5),n.y+it(-1,1.5),n.z+it(-1.5,1.5),it(-9,9),it(-9,9));if(xe.splash(),!s.alive)return;let a=s.x-n.x,o=s.y+1-n.y,l=s.z-n.z,c=Math.hypot(a,o,l)||1;if(c>11)return;let h=16*(1-c/14);s.vx+=a/c*h,s.vz+=l/c*h,s.vy=Math.max(s.vy,5),s.y=Math.max(s.y,s.gy+.05),s.rope=null,s.kb=.5,this.fx.popup(s.x,s.y+2,s.z,"BUHAR!","#ffffff",26,1.1),this.shake(.2)}knock(t,e,n,s){let r=Math.hypot(e,n)||1;t.vx+=e/r*s,t.vz+=n/r*s,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<_t(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.aimCtl){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null,t.isPlayer||(t.aimA=t.swYaw,t.plan=null,t.state==="attack"&&(t.state="fight",t.cool=it(.4,.9)));return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=_t(e.a0,e.a1,ra((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword=!1;let e=t.sw,n=this.h||zh,s={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(Pi+t.bladeLen)*t.S;this.loose.push(new Tl(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},s,r)),t.swordMesh=null}combat(t){for(let e of this.chars){if(!e.alive||!e.swingActive)continue;let n=e.bPrev,s=e.bCur,r=Math.min(n.bx,n.tx,s.bx,s.tx)-.2,a=Math.max(n.bx,n.tx,s.bx,s.tx)+.2,o=Math.min(n.by,n.ty,s.by,s.ty)-.2,l=Math.max(n.by,n.ty,s.by,s.ty)+.2,c=Math.min(n.bz,n.tz,s.bz,s.tz)-.2,h=Math.max(n.bz,n.tz,s.bz,s.tz)+.2;this.world.ropes&&this.cutRopes(e,n,s,r,a,c,h);let f=e.isPlayer?this.enemies:e.titan?[this.player]:this.chars;for(let u of f){let d=e.curEp;if(!d)break;if(u===e||d.hits.has(u)||!e.isPlayer&&!u.alive)continue;let p=u.rag.bounds(this._bb);if(p.x1<r||p.x0>a||p.y1<o||p.y0>l||p.z1<c||p.z0>h)continue;if(u.alive&&u.hasSword&&!u.titan&&!e.titan&&!d.rolled.has(u)){let b=Ah(n,s,u.bCur,3,.05);if(b){if(u.swingActive){this.parry(e,u,b);break}if(d.rolled.add(u),Math.random()<(u.isPlayer?.4:_t(.15,.45,u.skill))){this.block(e,u,b);break}}}let x=Th(u.rag,n,s,4);if(!x)continue;if(e.isPlayer&&!u.titan&&u.alive&&u.hasSword&&u.stun<=0&&u.state!=="attack"&&u.state!=="panic"&&!d.rolled.has(u)&&(d.rolled.add(u),Math.random()<_t(.08,.45,u.skill))){u.blockT=.35,u.blockUx=d.ux,u.blockUy=d.uy,u.counterT=.3,this.block(e,u,x);break}d.hits.add(u);let g=_t(s.bx-n.bx,s.tx-n.tx,x.t)/t,m=_t(s.by-n.by,s.ty-n.ty,x.t)/t,M=_t(s.bz-n.bz,s.tz-n.tz,x.t)/t,S=Math.hypot(g,m,M)||1,_=Rt(S,4,13);g=g/S*_,m=m/S*_,M=M/S*_,this.onHit(e,u,x,g,m,M)}}this.poke()}cutRopes(t,e,n,s,r,a,o){let l=this.world,c=this.h;for(let h of l.ropes){if(!h.intact||h.x<s-h.r||h.x>r+h.r||h.z<a-h.r||h.z>o+h.r)continue;let f=l.ground(h.x,h.z);ji.bx=h.x,ji.by=f,ji.bz=h.z,ji.tx=h.x,ji.ty=f+3.2,ji.tz=h.z;let u=Ah(e,n,ji,3,h.r+.03);u&&(l.cutRope(h,u.y-f,(n.tx-e.tx)/c,(n.tz-e.tz)/c),this.fx.sparks(u.x,u.y,u.z,16),this.fx.popup(u.x,u.y+.6,u.z,"HALAT KOPTU!","#ff7a5c",22,1.2),xe.twang(),this.shake(.14),this.slowmo(.15,.35),!this.tiltWarned&&l.tilt>.17&&(this.tiltWarned=!0,this.fx.popup(this.player.x,2.6,this.player.z,"PLATFORM YATIYOR!","#ffd23f",26,1.6)))}}poke(){for(let t of this.chars){if(!t.alive||!t.aimCtl||!t.hasSword||t.swingActive||t.pokeCd>0||t.y-t.gy>.3&&!t.mount)continue;let e=t.isPlayer?this.enemies:this.chars;for(let n of e){if(n===t||!n.alive||n.kb>0||n.titan)continue;let s=n.rag.bounds(this._bb),r=t.bCur;if(s.x1<Math.min(r.bx,r.tx)||s.x0>Math.max(r.bx,r.tx)||s.z1<Math.min(r.bz,r.tz)||s.z0>Math.max(r.bz,r.tz))continue;let a=Th(n.rag,t.bPrev,t.bCur,2);if(a){if(t.isPlayer&&n.state==="panic"){this.fx.popup(n.x,2.3*n.S,n.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,n,a,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),n.alive&&this.killEnemy(n,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(n,t.sw.dx,t.sw.dz,t.isPlayer?2.4:n.isPlayer?1.8:1.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,xe.punch();break}}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let s of[t,e])s.stun=.35,s.isPlayer||(s.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),xe.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),xe.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,s=e.u;return e.head&&(n=t.boneWith(X.HEAD),n>=0&&(s=t.bones[n].b===X.HEAD?.7:.3)),n<0||t.bones[n].len<wh*t.S?null:t.cut(n,s)}gore(t,e,n,s,r,a){let o=this.h;if(e){let l=t.comp[e.i1],c=t.comp[e.i2],h=t.compSize(l)<t.compSize(c)?l:c;t.addVel(s*.35,r*.35+2,a*.35,o,h),this.fx.spray(e.x,e.y,e.z,s,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,it(1.2,2.2)),this.fx.bleed(t,e.i2,it(1.2,2.2)),this.fx.sparks(e.x,e.y,e.z,5),xe.slice()}else this.fx.spray(n.x,n.y,n.z,s,r,a,16,.7,3),xe.wound()}onHit(t,e,n,s,r,a){let o=e.rag,l=e.alive,c=!t.isPlayer&&!e.isPlayer;if(c&&l&&Math.random()<.55&&(e.grudge=t,e.grudgeT=4),e.isPlayer&&l){this.hitPlayer(t,e,n,s,r,a);return}let h=n.head?"neck":o.bones[n.bone].kind,f=n.head||o.pts[o.bones[n.bone].a].attached,u=e.titan&&(e.neckHp>1||this.time<(e.neckCd||0)),d=l&&(e.armored&&e.hp>1||e.titan&&(h==="torso"||h==="neck"&&u)),p=o.pts,x=[X.LHAND,X.RHAND,X.LFOOT,X.RFOOT].map(M=>p[M].attached),g=d?null:this.applyCut(o,n),m=[X.LHAND,X.RHAND,X.LFOOT,X.RFOOT].some((M,S)=>x[S]&&!p[M].attached);if(o.addVel(s*.2,r*.2+.6,a*.2,this.h),this.gore(o,g,n,s,r,a),t.swordMesh){let M=t.swordMesh.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),M.color.setRGB(_t(.89,.75,t.blood),_t(.91,.12,t.blood),_t(.93,.15,t.blood))}if(l){if(e.titan){f&&this.hitTitan(e,t,g&&g.kind==="neck"||m?g:null,h,s,r,a);return}if(g?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,s,a,3),this.fx.popup(e.x,2.3*e.S,e.z,c?"HEY!":`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,g,s,r,a)}}hitTitan(t,e,n,s,r,a,o){if(n&&n.kind==="neck"){this.killEnemy(t,e,n,r,a,o);return}t.flash=.15;let l=t.rag.pts[X.NECK].y+1;if(s==="neck"){if(this.time<(t.neckCd||0))return;t.neckCd=this.time+.8,t.neckHp--,t.stun=.6,t.state="stagger",this.cancelSwing(t),t.steamT=Math.min(t.steamT,.9),this.fx.spray(e.x,e.y+1,e.z,r,a,o,30,.6,6),this.fx.popup(t.x,l,t.z,`ENSE! ${t.neckHp} darbe kald\u0131`,"#ffd23f",26,1.3),this.slowmo(.2,.3),this.shake(.2),xe.slice();return}n?(n.kind==="arm"&&t.checkGrip(),t.stun=.35,t.state="stagger",this.cancelSwing(t),this.fx.popup(t.x,l,t.z,n.kind==="leg"?"BACA\u011EI G\u0130TT\u0130!":"KOLU G\u0130TT\u0130!","#ffd23f",26,1.2),this.titanHinted||(this.titanHinted=!0,this.fx.popup(t.x,l-1.6,t.z,"\xD6lmedi! ENSES\u0130N\u0130 kes","#fff",20,1.8)),this.slowmo(.15,.35),this.shake(.15)):(this.fx.popup(e.x,e.y+2.2,e.z,s==="torso"?"\xC7OK KALIN!":"SIYRIK","#fff",18,.8),xe.thud(900))}hitPlayer(t,e,n,s,r,a){if(e.invuln>0)return;let o=e.rag,l=n.head?"neck":o.bones[n.bone].kind;this.hud.flash=.6,this.shake(.15),this.cancelSwing(e);let c=l==="torso"?null:this.applyCut(o,n);if(!c&&t.titan){let u=[];o.bones.forEach((d,p)=>{(d.kind==="arm"||d.kind==="leg")&&o.pts[d.a].attached&&o.pts[d.b].attached&&d.len>wh&&u.push(p)}),u.length&&(c=o.cut(sa(u),.5))}o.addVel(s*.25,r*.2+1.2,a*.25,this.h),this.gore(o,c,n,s,r,a);let h=o.pts;if(c&&(c.kind==="neck"||!h[X.LHAND].attached&&!h[X.RHAND].attached)){e.die(),o.addVel(s*.5,3,a*.5,this.h),this.lose(c.kind==="neck"?"Kafan gitti.":"\u0130ki kolun da gitti.");return}if(e.hurtT=.3,e.invuln=c?.9:.6,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,t.titan?10:c?4:5),t.titan&&!e.mount&&(e.vy=7,e.y=Math.max(e.y,.05),e.rope=null),xe.hurt(),!c){this.slowmo(.12,.4);return}e.checkGrip();let f=2.1*e.S;c.kind==="arm"?this.fx.popup(e.x,f,e.z,"KOLUN G\u0130TT\u0130!","#ff5a6e",22,1.3):c.kind==="leg"&&this.fx.popup(e.x,f,e.z,e.legMask?"TEK AYAK!":"BACAKSIZ DEVAM!","#ff5a6e",22,1.3),this.slowmo(.25,.3)}killEnemy(t,e,n,s,r,a){t.die();let o=this.h;t.rag.addVel(s*.45,r*.3+2.5,a*.45,o),t.rag.addSpin(it(-5,5),it(-3,3),it(-5,5),o);let l=2.2*t.S;t.titan&&(this.fx.popup(t.x,8,t.z,"ENSES\u0130 KES\u0130LD\u0130! T\u0130TAN D\xDC\u015ET\xDC!","#ffd23f",30,1.8),this.shake(.3)),n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"?this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2):n.kind==="arm"&&this.fx.popup(t.x,l,t.z,"KOL G\u0130TT\u0130!","#ffd23f",24,1.2));let c=e?e.curEp:null;c&&(c.kills++,c.kills>=2&&e.isPlayer&&this.fx.popup(e.x,2.6,e.z,c.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),e&&!e.isPlayer&&!t.titan&&this.fx.popup(t.x,l+.5,t.z,"DOST ATE\u015E\u0130!","#ff8ad8",24,1.3),xe.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){this.phase==="play"&&(this.enemies.some(t=>t.alive)||(this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",`Lv ${this.level} ge\xE7ildi`,2.6,"win"),xe.win()))}lose(t){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),xe.die(),this.hud.show("\xD6LD\xDCN",`${t||sa(rv)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){if(!t.alive)return;t.die();let e=this.world.env,n=!!(e.roof||e.grid);this.fx.popup(t.x,t.gy+1.2,t.z,n?"A\u015EA\u011EI D\xDC\u015ET\xDC!":"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?this.lose(e.roof?"Platformdan d\xFC\u015Ft\xFCn.":e.grid?"Bo\u015Flu\u011Fa d\xFC\u015Ft\xFCn.":"Suya d\xFC\u015Ft\xFCn."):(xe.combo(5),this.checkWin())}updateCamera(t,e){let n=this.player,s=n.rag.pts[X.PELVIS],r=n.alive?n.x:s.x,a=n.alive?n.z:s.z,o=this.spec.type,l=n.alive?n.y:Math.max(n.gy,s.y-.8),c=this.camTarget;if(o==="titan")c=this.titan&&this.titan.alive?this.titan:null;else if(o==="horse")c=null;else{let b=n.alive?this.nearestEnemy(n,14):null;(!c||!c.alive||c.state==="panic"&&b&&b.state!=="panic"||b&&b!==c&&Math.hypot(b.x-r,b.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=b)}this.camTarget=c;let h=this.camYaw;c&&n.alive?h=Math.atan2(c.x-r,c.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?h=n.yaw:n.alive||(h=this.camYaw+t*.3);let f=c&&Math.hypot(c.x-r,c.z-a)<2.4*c.S,u=o==="horse"?1.8:f?.6:c?2.5:1.2;this.camYaw=e?h:this.camYaw+tn(h-this.camYaw)*Tn(u,t);let d=this.H>this.W,p=d?4:4.1,x=d?3.5:2.6,g=1.9,m=d?.55:.8;o==="horse"&&(p=d?6.8:6.2,x=d?5.2:4.2,g=3.5,m=1.2),o==="titan"&&(p=d?9.5:8.5,x=d?4.5:3.6,g=7,m=3+l*.5);let M=Math.sin(this.camYaw),S=Math.cos(this.camYaw);Cn.set(r-M*p,x+l*(o==="titan"?.85:1),a-S*p),e?this.camera.position.copy(Cn):this.camera.position.lerp(Cn,Tn(7,t));let _=Cn.set(r+M*g,m+(o==="titan"?l*.5:o==="horse"?0:l),a+S*g);e?this.lookAt.copy(_):this.lookAt.lerp(_,Tn(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}updateRope(){let t=this.player,e=t.alive?t.rope:null,n=this.ropeMesh;if(!e){n.visible=!1;return}let s=e.anchor(),r=t.rag.pts[X.NECK];Cn.set(s.x-r.x,s.y-r.y,s.z-r.z);let a=Cn.length();n.visible=!0,n.position.set(r.x,r.y,r.z),n.scale.set(1,a,1),n.quaternion.setFromUnitVectors(av,Cn.multiplyScalar(1/a))}project(t,e,n){return Cn.set(t,e,n).project(this.camera),Cn.z>1?null:{x:(Cn.x+1)/2*this.W,y:(1-Cn.y)/2*this.H}}render(t){for(let s of this.chars)if(s.view.update(t),s.alive&&s.hasSword&&s.swordMesh){let r=s.sw;Ph(s.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz)}for(let s of this.loose)s.render();this.horse&&this.horse.render(),this.updateRope(),this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[X.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT,this.player,this.spec.env==="grid"?"grid":this.spec.type)}};function ov(i){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(i)}var kl=null;try{kl=new Bl}catch(i){ov(i)}if(kl){window.game=kl;let i=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-i)/1e3));i=e,kl.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
