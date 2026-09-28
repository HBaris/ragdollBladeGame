(()=>{var Cu=0,Rc=1,Pu=2;var Wi=1,Iu=2,Os=3,Si=0,De=1,on=2,Fn=0,zs=1,Cc=2,Pc=3,Ic=4,Lu=5;var Xi=100,Du=101,Nu=102,Uu=103,Fu=104,Ou=200,zu=201,Bu=202,ku=203,Lc=204,Dc=205,Hu=206,Vu=207,Gu=208,Wu=209,Xu=210,qu=211,Yu=212,Zu=213,Ku=214,ka=0,Ha=1,Va=2,vs=3,Ga=4,Wa=5,Xa=6,qa=7,bo=0,Ju=1,$u=2,Sn=0,Nc=1,Uc=2,Fc=3,Xr=4,Oc=5,zc=6,Bc=7;var kc=300,bi=301,qi=302,wo=303,Eo=304,qr=306,Qn=1e3,Cn=1001,Ya=1002,Oe=1003,Qu=1004;var Yr=1005;var ke=1006,To=1007;var wi=1008;var Qe=1009,Hc=1010,Vc=1011,Bs=1012,Ao=1013,bn=1014,dn=1015,wn=1016,Ro=1017,Co=1018,ks=1020,Gc=35902,Wc=35899,Xc=1021,qc=1022,fn=1023,In=1026,Ei=1027,Po=1028,Io=1029,Ti=1030,Lo=1031;var Do=1033,Zr=33776,Kr=33777,Jr=33778,$r=33779,No=35840,Uo=35841,Fo=35842,Oo=35843,zo=36196,Bo=37492,ko=37496,Ho=37488,Vo=37489,Qr=37490,Go=37491,Wo=37808,Xo=37809,qo=37810,Yo=37811,Zo=37812,Ko=37813,Jo=37814,$o=37815,Qo=37816,jo=37817,tl=37818,el=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,jr=36285,cl=36286;var dr=2300,Za=2301,za=2302,pc=2303,mc=2400,gc=2401,xc=2402;var ju=3200;var ta=0,td=1,ii="",ze="srgb",fr="srgb-linear",pr="linear",de="srgb";var Ba=7680;var ed=519,nd=512,id=513,sd=514,hl=515,rd=516,ad=517,ul=518,od=519,Yc=35044,Hs=35048;var Zc="300 es",vn=2e3,Ms=2001;function kf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ld(){let i=mr("canvas");return i.style.display="block",i}var Yh={},Ss=null;function gr(...i){let t="THREE."+i.shift();Ss?Ss("log",t,...i):console.log(t,...i)}function cd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=cd(i);let t="THREE."+i.shift();if(Ss)Ss("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ht(...i){i=cd(i);let t="THREE."+i.shift();if(Ss)Ss("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function zi(...i){let t=i.join(" ");t in Yh||(Yh[t]=!0,Vt(...i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var ud={[ka]:Ha,[Va]:Xa,[Ga]:qa,[vs]:Wa,[Ha]:ka,[Xa]:Va,[qa]:Ga,[Wa]:vs},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=1234567,lr=Math.PI/180,bs=180/Math.PI;function Pn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function Kc(i,t){return(i%t+t)%t}function Vf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Gf(i,t,e){return i!==t?(e-i)/(t-i):0}function cr(i,t,e){return(1-e)*i+e*t}function Wf(i,t,e,n){return cr(i,t,1-Math.exp(-e*n))}function Xf(i,t=1){return t-Math.abs(Kc(i,t*2)-t)}function qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kf(i,t){return i+Math.random()*(t-i)}function Jf(i){return i*(.5-Math.random())}function $f(i){i!==void 0&&(Zh=i);let t=Zh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qf(i){return i*lr}function jf(i){return i*bs}function tp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ip(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Jc={DEG2RAD:lr,RAD2DEG:bs,generateUUID:Pn,clamp:$t,euclideanModulo:Kc,mapLinear:Vf,inverseLerp:Gf,lerp:cr,damp:Wf,pingpong:Xf,smoothstep:qf,smootherstep:Yf,randInt:Zf,randFloat:Kf,randFloatSpread:Jf,seededRandom:$f,degToRad:Qf,radToDeg:jf,isPowerOfTwo:tp,ceilPowerOfTwo:ep,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:pe,denormalize:yn},nh=class nh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nh.prototype.isVector2=!0;var rt=nh,Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ih=class ih{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ih.prototype.isVector3=!0;var P=ih,Gl=new P,Kh=new Je,sh=class sh{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],M=s[1],b=s[4],_=s[7],S=s[2],w=s[5],A=s[8];return r[0]=a*x+o*M+l*S,r[3]=a*g+o*b+l*w,r[6]=a*m+o*_+l*A,r[1]=c*x+h*M+d*S,r[4]=c*g+h*b+d*w,r[7]=c*m+h*_+d*A,r[2]=u*x+f*M+p*S,r[5]=u*g+f*b+p*w,r[8]=u*m+f*_+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};sh.prototype.isMatrix3=!0;var Yt=sh,Wl=new Yt,Jh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sp(){let i={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fr]:{primaries:t,whitePoint:n,transfer:pr,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var se=sp();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var es,Ka=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=mr("canvas")),es.width=t.width,es.height=t.height;let s=es.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rp=0,ws=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ka.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var ap=0,ql=new P,Ze=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=ke,a=wi,o=fn,l=Qe,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Pn(),this.name="",this.source=new ws(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qn:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qn:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=kc;Ze.DEFAULT_ANISOTROPY=1;var rh=class rh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,_=(f+1)/2,S=(m+1)/2,w=(h+u)/4,A=(d+x)/4,y=(p+g)/4;return b>_&&b>S?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=A/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;var we=rh,Ja=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ws(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Ja{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},xr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var So=class So{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),a=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(op,t,lp)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(n,nn),hi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(n,nn)),hi.normalize(),ua.crossVectors(nn,hi),s[0]=hi.x,s[4]=ua.x,s[8]=nn.x,s[1]=hi.y,s[5]=ua.y,s[9]=nn.y,s[2]=hi.z,s[6]=ua.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],M=n[3],b=n[7],_=n[11],S=n[15],w=s[0],A=s[4],y=s[8],T=s[12],R=s[1],I=s[5],N=s[9],z=s[13],L=s[2],O=s[6],W=s[10],V=s[14],it=s[3],Y=s[7],j=s[11],nt=s[15];return r[0]=a*w+o*R+l*L+c*it,r[4]=a*A+o*I+l*O+c*Y,r[8]=a*y+o*N+l*W+c*j,r[12]=a*T+o*z+l*V+c*nt,r[1]=h*w+d*R+u*L+f*it,r[5]=h*A+d*I+u*O+f*Y,r[9]=h*y+d*N+u*W+f*j,r[13]=h*T+d*z+u*V+f*nt,r[2]=p*w+x*R+g*L+m*it,r[6]=p*A+x*I+g*O+m*Y,r[10]=p*y+x*N+g*W+m*j,r[14]=p*T+x*z+g*V+m*nt,r[3]=M*w+b*R+_*L+S*it,r[7]=M*A+b*I+_*O+S*Y,r[11]=M*y+b*N+_*W+S*j,r[15]=M*T+b*z+_*V+S*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],M=l*f-c*u,b=o*f-c*d,_=o*u-l*d,S=a*f-c*h,w=a*u-l*h,A=a*d-o*h;return e*(x*M-g*b+m*_)-n*(p*M-g*S+m*w)+s*(p*b-x*S+m*A)-r*(p*_-x*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],M=e*o-n*a,b=e*l-s*a,_=e*c-r*a,S=n*l-s*o,w=n*c-r*o,A=s*c-r*l,y=h*x-d*p,T=h*g-u*p,R=h*m-f*p,I=d*g-u*x,N=d*m-f*x,z=u*m-f*g,L=M*z-b*N+_*I+S*R-w*T+A*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/L;return t[0]=(o*z-l*N+c*I)*O,t[1]=(s*N-n*z-r*I)*O,t[2]=(x*A-g*w+m*S)*O,t[3]=(u*w-d*A-f*S)*O,t[4]=(l*R-a*z-c*T)*O,t[5]=(e*z-s*R+r*T)*O,t[6]=(g*_-p*A-m*b)*O,t[7]=(h*A-u*_+f*b)*O,t[8]=(a*N-o*R+c*y)*O,t[9]=(n*R-e*N-r*y)*O,t[10]=(p*w-x*_+m*M)*O,t[11]=(d*_-h*w-f*M)*O,t[12]=(o*T-a*I-l*y)*O,t[13]=(e*I-n*T+s*y)*O,t[14]=(x*b-p*S-g*M)*O,t[15]=(h*S-d*b+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,M=l*c,b=l*h,_=l*d,S=n.x,w=n.y,A=n.z;return s[0]=(1-(x+m))*S,s[1]=(f+_)*S,s[2]=(p-b)*S,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(u+m))*w,s[6]=(g+M)*w,s[7]=0,s[8]=(p+b)*A,s[9]=(g-M)*A,s[10]=(1-(u+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),l=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),mn.copy(this);let c=1/a,h=1/o,d=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=d,mn.elements[9]*=d,mn.elements[10]*=d,e.setFromRotationMatrix(mn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===vn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===vn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};So.prototype.isMatrix4=!0;var te=So,ns=new P,mn=new te,op=new P(0,0,0),lp=new P(1,1,1),hi=new P,ua=new P,nn=new P,Qh=new te,jh=new Je,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cp=0,tu=new P,is=new Je,Xn=new te,da=new P,Qs=new P,hp=new P,up=new Je,eu=new P(1,0,0),nu=new P(0,1,0),iu=new P(0,0,1),su={type:"added"},dp={type:"removed"},ss={type:"childadded",child:null},Yl={type:"childremoved",child:null},Ie=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Dn,n=new Je,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Yt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(eu,t)}rotateY(t){return this.rotateOnAxis(nu,t)}rotateZ(t){return this.rotateOnAxis(iu,t)}translateOnAxis(t,e){return tu.copy(t).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eu,t)}translateY(t){return this.translateOnAxis(nu,t)}translateZ(t){return this.translateOnAxis(iu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Qs,da,this.up):Xn.lookAt(da,Qs,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Xn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(su),ss.child=t,this.dispatchEvent(ss),ss.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dp),Yl.child=t,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(su),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ie.DEFAULT_UP=new P(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},fp={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ge;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Zl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Kc(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zl(a,r,t+1/3),this.g=Zl(a,r,t),this.b=Zl(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return se.workingToColorSpace(Ge.copy(this),t),Math.round($t(Ge.r*255,0,255))*65536+Math.round($t(Ge.g*255,0,255))*256+Math.round($t(Ge.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ze){se.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(fa);let n=cr(ui.h,fa.h,e),s=cr(ui.s,fa.s,e),r=cr(ui.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new zt;zt.NAMES=dd;var _r=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new P,qn=new P,Kl=new P,Yn=new P,rs=new P,as=new P,ru=new P,Jl=new P,$l=new P,Ql=new P,jl=new we,tc=new we,ec=new we,Jn=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),qn.subVectors(n,e),Kl.subVectors(t,e);let a=gn.dot(gn),o=gn.dot(qn),l=gn.dot(Kl),c=qn.dot(qn),h=qn.dot(Kl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return jl.setScalar(0),tc.setScalar(0),ec.setScalar(0),jl.fromBufferAttribute(t,e),tc.fromBufferAttribute(t,n),ec.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jl,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(ec,r.z),a}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),qn.subVectors(t,e),gn.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),gn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),Jl.subVectors(t,n);let l=rs.dot(Jl),c=as.dot(Jl);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,s);let h=rs.dot($l),d=as.dot($l);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(rs,a);Ql.subVectors(t,r);let f=rs.dot(Ql),p=as.dot(Ql);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(as,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return ru.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(ru,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),ma.subVectors(this.max,js),os.subVectors(t.a,js),ls.subVectors(t.b,js),cs.subVectors(t.c,js),di.subVectors(ls,os),fi.subVectors(cs,ls),Di.subVectors(os,cs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!nc(e,os,ls,cs,ma)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,os,ls,cs,ma))?!1:(ga.crossVectors(di,fi),e=[ga.x,ga.y,ga.z],nc(e,os,ls,cs,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,pa=new Nn,os=new P,ls=new P,cs=new P,di=new P,fi=new P,Di=new P,js=new P,ma=new P,ga=new P,Ni=new P;function nc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pe=new P,xa=new rt,pp=0,Te=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var yr=class extends Te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var vr=class extends Te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Te{constructor(t,e,n){super(new Float32Array(t),e,n)}},mp=new Nn,tr=new P,ic=new P,jn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):mp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(ic)),this.expandByPoint(tr.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gp=0,hn=new te,sc=new Ie,hs=new P,sn=new Nn,er=new Nn,Fe=new P,_e=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kf(t)?vr:yr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return sc.lookAt(t),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(sn.min,er.min),sn.expandByPoint(Fe),Fe.addVectors(sn.max,er.max),sn.expandByPoint(Fe)):(sn.expandByPoint(er.min),sn.expandByPoint(er.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(hs.fromBufferAttribute(t,c),Fe.add(hs)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Te(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new P,l[y]=new P;let c=new P,h=new P,d=new P,u=new rt,f=new rt,p=new rt,x=new P,g=new P;function m(y,T,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[y].add(x),o[T].add(x),o[R].add(x),l[y].add(g),l[T].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,T=M.length;y<T;++y){let R=M[y],I=R.start,N=R.count;for(let z=I,L=I+N;z<L;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new P,_=new P,S=new P,w=new P;function A(y){S.fromBufferAttribute(s,y),w.copy(S);let T=o[y];b.copy(T),b.sub(S.multiplyScalar(S.dot(T))).normalize(),_.crossVectors(w,T);let I=_.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,I)}for(let y=0,T=M.length;y<T;++y){let R=M[y],I=R.start,N=R.count;for(let z=I,L=I+N;z<L;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Te(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Ye=new P,As=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Te(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rc=new P,xp=new P,_p=new Yt,_n=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rc.subVectors(n,e).cross(xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_p.getNormalMatrix(t),s=this.coplanarPoint(rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},yp=0,Mn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=zs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lc,this.blendDst=Dc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _n().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},mi=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},us,nr=new P,ds=new P,fs=new P,ps=new rt,ir=new rt,fd=new te,_a=new P,sr=new P,ya=new P,au=new rt,ac=new rt,ou=new rt,ki=class extends Ie{constructor(t=new mi){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Mr(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new As(n,3,0,!1)),us.setAttribute("uv",new As(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),fd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;va(_a.set(-.5,-.5,0),fs,a,ds,s,r),va(sr.set(.5,-.5,0),fs,a,ds,s,r),va(ya.set(.5,.5,0),fs,a,ds,s,r),au.set(0,0),ac.set(1,0),ou.set(1,1);let o=t.ray.intersectTriangle(_a,sr,ya,!1,nr);if(o===null&&(va(sr.set(-.5,.5,0),fs,a,ds,s,r),ac.set(0,1),o=t.ray.intersectTriangle(_a,ya,sr,!1,nr),o===null))return;let l=t.ray.origin.distanceTo(nr);l<t.near||l>t.far||e.push({distance:l,point:nr.clone(),uv:Jn.getInterpolation(nr,_a,sr,ya,au,ac,ou,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function va(i,t,e,n,s,r){ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ir.x=r*ps.x-s*ps.y,ir.y=s*ps.x+r*ps.y):ir.copy(ps),i.copy(t),i.x+=ir.x,i.y+=ir.y,i.applyMatrix4(fd)}var Kn=new P,oc=new P,Ma=new P,Sa=new P,Rs=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oc.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Sa.copy(this.origin).sub(oc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ma),o=Sa.dot(this.direction),l=-Sa.dot(Ma),c=Sa.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oc).addScaledVector(Ma,u),f}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,M=n.y-a.y,b=n.z-a.z,_=Math.abs(l),S=Math.abs(c),w=Math.abs(h),A,y,T,R,I,N,z,L,O,W,V,it;if(_>=S&&_>=w?(T=l,N=d,O=p,it=m,l>=0?(A=c,y=h,R=u,I=f,z=x,L=g,W=M,V=b):(A=h,y=c,R=f,I=u,z=g,L=x,W=b,V=M)):S>=w?(T=c,N=u,O=x,it=M,c>=0?(A=h,y=l,R=f,I=d,z=g,L=p,W=b,V=m):(A=l,y=h,R=d,I=f,z=p,L=g,W=m,V=b)):(T=h,N=f,O=g,it=b,h>=0?(A=l,y=c,R=d,I=u,z=p,L=x,W=m,V=M):(A=c,y=l,R=u,I=d,z=x,L=p,W=M,V=m)),T===0)return null;let Y=A/T,j=y/T,nt=1/T,Dt=R-Y*N,At=I-j*N,le=z-Y*O,ee=L-j*O,ae=W-Y*it,J=V-j*it,tt=ae*ee-J*le,vt=Dt*J-At*ae,Wt=le*At-ee*Dt;if(s){if(tt<0||vt<0||Wt<0)return null}else if((tt<0||vt<0||Wt<0)&&(tt>0||vt>0||Wt>0))return null;let wt=tt+vt+Wt;if(wt===0)return null;let Xt=nt*(tt*N+vt*O+Wt*it);return(wt>0?Xt<0:Xt>0)?null:this.at(Xt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hi=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},lu=new te,Ui=new Rs,ba=new jn,cu=new P,wa=new P,Ea=new P,Ta=new P,lc=new P,Aa=new P,hu=new P,Ra=new P,Pt=class extends Ie{constructor(t=new _e,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Aa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(lc.fromBufferAttribute(d,t),a?Aa.addScaledVector(lc,h):Aa.addScaledVector(lc.sub(e),h))}e.add(Aa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(ba.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ba,cu)===null||Ui.origin.distanceToSquared(cu)>(t.far-t.near)**2))&&(lu.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(lu),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){let w=o.getX(_),A=o.getX(_+1),y=o.getX(_+2);s=Ca(this,m,t,n,c,h,d,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);s=Ca(this,a,t,n,c,h,d,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],M=Math.max(g.start,f.start),b=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=M,S=b;_<S;_+=3){let w=_,A=_+1,y=_+2;s=Ca(this,m,t,n,c,h,d,w,A,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let M=g,b=g+1,_=g+2;s=Ca(this,a,t,n,c,h,d,M,b,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function vp(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:i}}function Ca(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,wa),i.getVertexPosition(l,Ea),i.getVertexPosition(c,Ta);let h=vp(i,t,e,n,wa,Ea,Ta,hu);if(h){let d=new P;Jn.getBarycoord(hu,wa,Ea,Ta,d),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,l,c,d,new rt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,l,c,d,new rt)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new P,materialIndex:0};Jn.getNormal(wa,Ea,Ta,u.normal),h.face=u,h.barycoord=d}return h}var Sr=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Oe,h=Oe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Te{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ms=new te,uu=new te,Pa=[],du=new Nn,Mp=new te,rr=new Pt,ar=new jn,ti=class extends Pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),du.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),ar.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),uu.multiplyMatrices(n,ms),rr.matrixWorld=uu,rr.raycast(t,Pa);for(let a=0,o=Pa.length;a<o;a++){let l=Pa[a];l.instanceId=r,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(s*this.count),s,this.count,Po,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fi=new jn,Sp=new rt(.5,.5),Ia=new P,Ps=class{constructor(t=new _n,e=new _n,n=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],M=r[12],b=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-a,f-h,m-p,S-M).normalize(),s[1].setComponents(c+a,f+h,m+p,S+M).normalize(),s[2].setComponents(c+o,f+d,m+x,S+b).normalize(),s[3].setComponents(c-o,f-d,m-x,S-b).normalize(),n)s[4].setComponents(l,u,g,_).normalize(),s[5].setComponents(c-l,f-u,m-g,S-_).normalize();else if(s[4].setComponents(c-l,f-u,m-g,S-_).normalize(),e===vn)s[5].setComponents(c+l,f+u,m+g,S+_).normalize();else if(e===Ms)s[5].setComponents(l,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=Sp.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ei=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fu=new te,_c=new Rs,La=new jn,Da=new P,br=class extends Ie{constructor(t=new _e,e=new ei){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;fu.copy(s).invert(),_c.copy(t.ray).applyMatrix4(fu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);Da.fromBufferAttribute(d,g),pu(Da,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Da.fromBufferAttribute(d,p),pu(Da,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function pu(i,t,e,n,s,r,a){let o=_c.distanceSqToPoint(i);if(o<e){let l=new P;_c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var wr=class extends Ze{constructor(t=[],e=bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vi=class extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends Ze{constructor(t,e,n=bn,s,r,a,o=Oe,l=Oe,c,h=In,d=1){if(h!==In&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ws(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends gi{constructor(t,e=bn,n=bi,s,r,a=Oe,o=Oe,l,c=In){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Er=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Le=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function p(x,g,m,M,b,_,S,w,A,y,T){let R=_/A,I=S/y,N=_/2,z=S/2,L=w/2,O=A+1,W=y+1,V=0,it=0,Y=new P;for(let j=0;j<W;j++){let nt=j*I-z;for(let Dt=0;Dt<O;Dt++){let At=Dt*R-N;Y[x]=At*M,Y[g]=nt*b,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Dt/A),d.push(1-j/y),V+=1}}for(let j=0;j<y;j++)for(let nt=0;nt<A;nt++){let Dt=u+nt+O*j,At=u+nt+O*(j+1),le=u+(nt+1)+O*(j+1),ee=u+(nt+1)+O*j;l.push(Dt,At,ee),l.push(At,le,ee),it+=6}o.addGroup(f,it,T),f+=it,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ni=class i extends _e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=s+1,g=new P,m=new P;for(let M=0;M<=p;M++){let b=0,_=0,S=0,w=0;if(M<=n){let T=M/n,R=T*Math.PI/2;_=-h-t*Math.cos(R),S=t*Math.sin(R),w=-t*Math.cos(R),b=T*d}else if(M<=n+r){let T=(M-n)/r;_=-h+T*e,S=t,w=0,b=d+T*u}else{let T=(M-n-r)/n,R=T*Math.PI/2;_=h+t*Math.sin(R),S=t*Math.cos(R),w=t*Math.sin(R),b=d+u+T*d}let A=Math.max(0,Math.min(1,b/f)),y=0;M===0?y=.5/s:M===p&&(y=-.5/s);for(let T=0;T<=s;T++){let R=T/s,I=R*Math.PI*2,N=Math.sin(I),z=Math.cos(I);m.x=-S*z,m.y=_,m.z=S*N,o.push(m.x,m.y,m.z),g.set(-S*z,w,S*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+y,A)}if(M>0){let T=(M-1)*x;for(let R=0;R<s;R++){let I=T+R,N=T+R+1,z=M*x+R,L=M*x+R+1;a.push(I,N,z),a.push(N,L,z)}}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Tr=class i extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new P,h=new rt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ke=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function M(){let _=new P,S=new P,w=0,A=(e-t)/n;for(let y=0;y<=r;y++){let T=[],R=y/r,I=R*(e-t)+t;for(let N=0;N<=s;N++){let z=N/s,L=z*l+o,O=Math.sin(L),W=Math.cos(L);S.x=I*O,S.y=-R*n+g,S.z=I*W,d.push(S.x,S.y,S.z),_.set(O,A,W).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-R),T.push(p++)}x.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let R=x[T][y],I=x[T+1][y],N=x[T+1][y+1],z=x[T][y+1];(t>0||T!==0)&&(h.push(R,I,z),w+=3),(e>0||T!==r-1)&&(h.push(I,N,z),w+=3)}c.addGroup(m,w,0),m+=w}function b(_){let S=p,w=new rt,A=new P,y=0,T=_===!0?t:e,R=_===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*R,0),u.push(0,R,0),f.push(.5,.5),p++;let I=p;for(let N=0;N<=s;N++){let L=N/s*l+o,O=Math.cos(L),W=Math.sin(L);A.x=T*W,A.y=g*R,A.z=T*O,d.push(A.x,A.y,A.z),u.push(0,R,0),w.x=O*.5+.5,w.y=W*.5*R+.5,f.push(w.x,w.y),p++}for(let N=0;N<s;N++){let z=S+N,L=I+N;_===!0?h.push(L,L+1,z):h.push(L+1,L,z),y+=3}c.addGroup(m,y,_===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xi=class i extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ja=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new P,_=new P,S=new P;for(let w=0;w<e.length;w+=3)f(e[w+0],b),f(e[w+1],_),f(e[w+2],S),l(b,_,S,M)}function l(M,b,_,S){let w=S+1,A=[];for(let y=0;y<=w;y++){A[y]=[];let T=M.clone().lerp(_,y/w),R=b.clone().lerp(_,y/w),I=w-y;for(let N=0;N<=I;N++)N===0&&y===w?A[y][N]=T:A[y][N]=T.clone().lerp(R,N/I)}for(let y=0;y<w;y++)for(let T=0;T<2*(w-y)-1;T++){let R=Math.floor(T/2);T%2===0?(u(A[y][R+1]),u(A[y+1][R]),u(A[y][R])):(u(A[y][R+1]),u(A[y+1][R+1]),u(A[y+1][R]))}}function c(M){let b=new P;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new P;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=g(M)/2/Math.PI+.5,S=m(M)/Math.PI+.5;a.push(_,1-S)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let b=a[M+0],_=a[M+2],S=a[M+4],w=Math.max(b,_,S),A=Math.min(b,_,S);w>.9&&A<.1&&(b<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),S<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,b){let _=M*3;b.x=t[_+0],b.y=t[_+1],b.z=t[_+2]}function p(){let M=new P,b=new P,_=new P,S=new P,w=new rt,A=new rt,y=new rt;for(let T=0,R=0;T<r.length;T+=9,R+=6){M.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),w.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),S.copy(M).add(b).add(_).divideScalar(3);let I=g(S);x(w,R+0,M,I),x(A,R+2,b,I),x(y,R+4,_,I)}}function x(M,b,_,S){S<0&&M.x===1&&(a[b]=M.x-1),_.x===0&&_.z===0&&(a[b]=S/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}},Is=class i extends ja{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new te;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ls=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},to=class extends Ls{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $c(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var mu=new P,gu=new P,cc=new $c,hc=new $c,uc=new $c,eo=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(gu.subVectors(s[0],s[1]).add(s[0]),c=gu);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),cc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),hc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),uc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),uc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(cc.calc(l),hc.calc(l),uc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function bp(i,t){let e=1-i;return e*e*t}function wp(i,t){return 2*(1-i)*i*t}function Ep(i,t){return i*i*t}function hr(i,t,e,n){return bp(i,t)+wp(i,e)+Ep(i,n)}function Tp(i,t){let e=1-i;return e*e*e*t}function Ap(i,t){let e=1-i;return 3*e*e*i*t}function Rp(i,t){return 3*(1-i)*i*i*t}function Cp(i,t){return i*i*i*t}function ur(i,t,e,n,s){return Tp(i,t)+Ap(i,e)+Rp(i,n)+Cp(i,s)}var Ar=class extends rn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},no=class extends rn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rr=class extends rn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends rn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends rn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends rn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(xu(o,l.x,c.x,h.x,d.x),xu(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},yc=Object.freeze({__proto__:null,ArcCurve:to,CatmullRomCurve3:eo,CubicBezierCurve:Ar,CubicBezierCurve3:no,EllipseCurve:Ls,LineCurve:Rr,LineCurve3:io,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:so,SplineCurve:Pr}),ro=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new yc[s.type]().fromJSON(s))}return this}},Ir=class extends ro{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Rr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Cr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ar(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Ls(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ds=class extends Ir{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function Pp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=pd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Up(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Lr(r,a,e,o,l,c,0),a}function pd(i,t,e,n,s){let r;if(s===qp(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=_u(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=_u(a/n|0,i[a],i[a+1],r);return r&&Ns(r,r.next)&&(Nr(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ns(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Lr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&kp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Lp(i,n,s,r):Ip(i)){t.push(l.i,i.i,c.i),Nr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Dp(Gi(i),t),Lr(i,t,e,n,s,r,2)):a===2&&Np(i,t,e,n,s,r):Lr(Gi(i),t,e,n,s,r,1);break}}}function Ip(i){let t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&or(s,o,r,l,a,c,p.x,p.y)&&Ee(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Lp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ee(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=vc(f,p,t,e,n),M=vc(x,g,t,e,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=m&&_&&_.z<=M;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&or(o,h,l,d,c,u,b.x,b.y)&&Ee(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&or(o,h,l,d,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=m;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&or(o,h,l,d,c,u,b.x,b.y)&&Ee(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=g&&_!==s&&_!==a&&or(o,h,l,d,c,u,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Dp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ns(n,s)&&gd(n,e,e.next,s)&&Dr(n,s)&&Dr(s,n)&&(t.push(n.i,e.i,s.i),Nr(e),Nr(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function Np(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gp(a,o)){let l=xd(a,o);a=Gi(a,a.next),l=Gi(l,l.next),Lr(a,t,e,n,s,r,0),Lr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Up(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=pd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Vp(c))}s.sort(Fp);for(let r=0;r<s.length;r++)e=Op(s[r],e);return e}function Fp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Op(i,t){let e=zp(i,t);if(!e)return t;let n=xd(e,i);return Gi(n,n.next),Gi(e,e.next)}function zp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ns(i,e))return e;do{if(Ns(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&md(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Dr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Bp(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Bp(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function kp(i,t,e,n){let s=i;do s.z===0&&(s.z=vc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hp(s)}function Hp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function vc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Vp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function md(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function or(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&md(i,t,e,n,s,r,a,o)}function Gp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wp(i,t)&&(Dr(i,t)&&Dr(t,i)&&Xp(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||Ns(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ns(i,t){return i.x===t.x&&i.y===t.y}function gd(i,t,e,n){let s=Ua(Ee(i,t,e)),r=Ua(Ee(i,t,n)),a=Ua(Ee(e,n,i)),o=Ua(Ee(e,n,t));return!!(s!==r&&a!==o||s===0&&Na(i,e,t)||r===0&&Na(i,n,t)||a===0&&Na(e,i,n)||o===0&&Na(e,t,n))}function Na(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ua(i){return i>0?1:i<0?-1:0}function Wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Dr(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Xp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xd(i,t){let e=Mc(i.i,i.x,i.y),n=Mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _u(i,t,e,n){let s=Mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qp(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Sc=class{static triangulate(t,e,n=2){return Pp(t,e,n)}},Oi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yu(t),vu(n,t);let a=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,vu(n,e[l]);let o=Sc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function yu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ur=class i extends _e{constructor(t=new Ds([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Yp,b,_=!1,S,w,A,y;if(m){b=m.getSpacedPoints(h),_=!0,u=!1;let et=m.isCatmullRomCurve3?m.closed:!1;S=m.computeFrenetFrames(h,et),w=new P,A=new P,y=new P}u||(g=0,f=0,p=0,x=0);let T=o.extractPoints(c),R=T.shape,I=T.holes;if(!Oi.isClockWise(R)){R=R.reverse();for(let et=0,at=I.length;et<at;et++){let ot=I[et];Oi.isClockWise(ot)&&(I[et]=ot.reverse())}}function z(et){let ot=10000000000000001e-36,lt=et[0];for(let dt=1;dt<=et.length;dt++){let Bt=dt%et.length,Ot=et[Bt],qt=Ot.x-lt.x,Zt=Ot.y-lt.y,D=qt*qt+Zt*Zt,ce=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(lt.x),Math.abs(lt.y)),ne=ot*ce*ce;if(D<=ne){et.splice(Bt,1),dt--;continue}lt=Ot}}z(R),I.forEach(z);let L=I.length,O=R;for(let et=0;et<L;et++){let at=I[et];R=R.concat(at)}function W(et,at,ot){return at||Ht("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(at,ot)}let V=R.length;function it(et,at,ot){let lt,dt,Bt,Ot=et.x-at.x,qt=et.y-at.y,Zt=ot.x-et.x,D=ot.y-et.y,ce=Ot*Ot+qt*qt,ne=Ot*D-qt*Zt;if(Math.abs(ne)>Number.EPSILON){let C=Math.sqrt(ce),v=Math.sqrt(Zt*Zt+D*D),B=at.x-qt/C,G=at.y+Ot/C,Z=ot.x-D/v,ht=ot.y+Zt/v,ut=((Z-B)*D-(ht-G)*Zt)/(Ot*D-qt*Zt);lt=B+Ot*ut-et.x,dt=G+qt*ut-et.y;let K=lt*lt+dt*dt;if(K<=2)return new rt(lt,dt);Bt=Math.sqrt(K/2)}else{let C=!1;Ot>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Ot<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(D)&&(C=!0),C?(lt=-qt,dt=Ot,Bt=Math.sqrt(ce)):(lt=Ot,dt=qt,Bt=Math.sqrt(ce/2))}return new rt(lt/Bt,dt/Bt)}let Y=[];for(let et=0,at=O.length,ot=at-1,lt=et+1;et<at;et++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),Y[et]=it(O[et],O[ot],O[lt]);let j=[],nt,Dt=Y.concat();for(let et=0,at=L;et<at;et++){let ot=I[et];nt=[];for(let lt=0,dt=ot.length,Bt=dt-1,Ot=lt+1;lt<dt;lt++,Bt++,Ot++)Bt===dt&&(Bt=0),Ot===dt&&(Ot=0),nt[lt]=it(ot[lt],ot[Bt],ot[Ot]);j.push(nt),Dt=Dt.concat(nt)}let At;if(g===0)At=Oi.triangulateShape(O,I);else{let et=[],at=[];for(let ot=0;ot<g;ot++){let lt=ot/g,dt=f*Math.cos(lt*Math.PI/2),Bt=p*Math.sin(lt*Math.PI/2)+x;for(let Ot=0,qt=O.length;Ot<qt;Ot++){let Zt=W(O[Ot],Y[Ot],Bt);vt(Zt.x,Zt.y,-dt),lt===0&&et.push(Zt)}for(let Ot=0,qt=L;Ot<qt;Ot++){let Zt=I[Ot];nt=j[Ot];let D=[];for(let ce=0,ne=Zt.length;ce<ne;ce++){let C=W(Zt[ce],nt[ce],Bt);vt(C.x,C.y,-dt),lt===0&&D.push(C)}lt===0&&at.push(D)}}At=Oi.triangulateShape(et,at)}let le=At.length,ee=p+x;for(let et=0;et<V;et++){let at=u?W(R[et],Dt[et],ee):R[et];_?(A.copy(S.normals[0]).multiplyScalar(at.x),w.copy(S.binormals[0]).multiplyScalar(at.y),y.copy(b[0]).add(A).add(w),vt(y.x,y.y,y.z)):vt(at.x,at.y,0)}for(let et=1;et<=h;et++)for(let at=0;at<V;at++){let ot=u?W(R[at],Dt[at],ee):R[at];_?(A.copy(S.normals[et]).multiplyScalar(ot.x),w.copy(S.binormals[et]).multiplyScalar(ot.y),y.copy(b[et]).add(A).add(w),vt(y.x,y.y,y.z)):vt(ot.x,ot.y,d/h*et)}for(let et=g-1;et>=0;et--){let at=et/g,ot=f*Math.cos(at*Math.PI/2),lt=p*Math.sin(at*Math.PI/2)+x;for(let dt=0,Bt=O.length;dt<Bt;dt++){let Ot=W(O[dt],Y[dt],lt);vt(Ot.x,Ot.y,d+ot)}for(let dt=0,Bt=I.length;dt<Bt;dt++){let Ot=I[dt];nt=j[dt];for(let qt=0,Zt=Ot.length;qt<Zt;qt++){let D=W(Ot[qt],nt[qt],lt);_?vt(D.x,D.y+b[h-1].y,b[h-1].x+ot):vt(D.x,D.y,d+ot)}}}ae(),J();function ae(){let et=s.length/3;if(u){let at=0,ot=V*at;for(let lt=0;lt<le;lt++){let dt=At[lt];Wt(dt[2]+ot,dt[1]+ot,dt[0]+ot)}at=h+g*2,ot=V*at;for(let lt=0;lt<le;lt++){let dt=At[lt];Wt(dt[0]+ot,dt[1]+ot,dt[2]+ot)}}else{for(let at=0;at<le;at++){let ot=At[at];Wt(ot[2],ot[1],ot[0])}for(let at=0;at<le;at++){let ot=At[at];Wt(ot[0]+V*h,ot[1]+V*h,ot[2]+V*h)}}n.addGroup(et,s.length/3-et,0)}function J(){let et=s.length/3,at=0;tt(O,at),at+=O.length;for(let ot=0,lt=I.length;ot<lt;ot++){let dt=I[ot];tt(dt,at),at+=dt.length}n.addGroup(et,s.length/3-et,1)}function tt(et,at){let ot=et.length;for(;--ot>=0;){let lt=ot,dt=ot-1;dt<0&&(dt=et.length-1);for(let Bt=0,Ot=h+g*2;Bt<Ot;Bt++){let qt=V*Bt,Zt=V*(Bt+1),D=at+lt+qt,ce=at+dt+qt,ne=at+dt+Zt,C=at+lt+Zt;wt(D,ce,ne,C)}}}function vt(et,at,ot){l.push(et),l.push(at),l.push(ot)}function Wt(et,at,ot){Xt(et),Xt(at),Xt(ot);let lt=s.length/3,dt=M.generateTopUV(n,s,lt-3,lt-2,lt-1);fe(dt[0]),fe(dt[1]),fe(dt[2])}function wt(et,at,ot,lt){Xt(et),Xt(at),Xt(lt),Xt(at),Xt(ot),Xt(lt);let dt=s.length/3,Bt=M.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);fe(Bt[0]),fe(Bt[1]),fe(Bt[3]),fe(Bt[1]),fe(Bt[2]),fe(Bt[3])}function Xt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function fe(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yc[s.type]().fromJSON(s)),new i(n,t.options)}},Yp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-d),new rt(u,1-p),new rt(x,1-m)]:[new rt(o,1-l),new rt(h,1-d),new rt(f,1-p),new rt(g,1-m)]}};function Zp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fr=class i extends _e{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new P,u=new rt,f=new P,p=new P,x=new P,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let M=0;M<=e;M++){let b=n+M*h*s,_=Math.sin(b),S=Math.cos(b);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*_,d.y=t[w].y,d.z=t[w].x*S,a.push(d.x,d.y,d.z),u.x=M/e,u.y=w/(t.length-1),o.push(u.x,u.y);let A=l[3*w+0]*_,y=l[3*w+1],T=l[3*w+0]*S;c.push(A,y,T)}}for(let M=0;M<e;M++)for(let b=0;b<t.length-1;b++){let _=b+M*t.length,S=_,w=_+t.length,A=_+t.length+1,y=_+1;r.push(S,w,y),r.push(A,y,w)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Un=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let M=m*u-a;for(let b=0;b<c;b++){let _=b*d-r;p.push(_,-M,0),x.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let b=M+c*m,_=M+c*(m+1),S=M+1+c*(m+1),w=M+1+c*m;f.push(b,_,w),f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var un=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let M=[],b=m/n,_=a+b*o,S=t*Math.cos(_),w=Math.sqrt(t*t-S*S),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let T=y/e,R=s+T*r;d.x=-w*Math.cos(R),d.y=S,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+A,1-b),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let b=h[m][M+1],_=h[m][M],S=h[m+1][M],w=h[m+1][M+1];(m!==0||a>0)&&f.push(b,_,w),(m!==n-1||l<Math.PI)&&f.push(_,S,w)}this.setIndex(f),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Mu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Mu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Mu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Kp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Qc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var dl={clone:Yi,merge:Xe},Jp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yi(t.uniforms),this.uniformsGroups=Kp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ao=class extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},_i=class extends Qt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Or=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},oo=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},co=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=t,o=2*e-n;break;case xc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:a=t,l=2*n-e;break;case xc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,M=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*g+(1.5+f)*x+.5*p,_=f*g-f*x;for(let S=0;S!==o;++S)r[S]=m*a[h+S]+M*a[c+S]+b*a[l+S]+_*a[d+S];return r}},ho=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},uo=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fo=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,M=d[m],b=d[m+1],_=t*u+p*2,S=h[_],w=h[_+1],A=jp(n,e,M,S,s);r[p]=_d(A,x,b,w,g)}return r}};function _d(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Qp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function jp(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=_d(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Qp(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dc(t.settings)&&(n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break;case pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return za;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dc(this.settings)&&(Su(this.settings.inTangents,t),Su(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ht("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Su(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Za;var vi=class extends an{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=dr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var po=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};po.prototype.ValueTypeName="color";var mo=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};mo.prototype.ValueTypeName="number";var go=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Je.slerpFlat(r,0,a,c-o,a,c,l);return r}},zr=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new go(this.times,this.values,this.getValueSize(),t)}};zr.prototype.ValueTypeName="quaternion";zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends an{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=dr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};xo.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},yd=new _o,yo=class{constructor(t){this.manager=t!==void 0?t:yd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Br=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fc=new te,bu=new P,wu=new P,kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(bu),wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new P,Oa=new Je,Rn=new P,Hr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Oa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fa,Oa,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Oa,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new P,Eu=new rt,Tu=new rt,Be=class extends Hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Eu,Tu),e.subVectors(Tu,Eu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bc=class extends kr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Fs=class extends Hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},wc=class extends kr{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var xs=-90,_s=1,vo=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Be(xs,_s,t,e);s.layers=this.layers,this.add(s);let r=new Be(xs,_s,t,e);r.layers=this.layers,this.add(r);let a=new Be(xs,_s,t,e);a.layers=this.layers,this.add(a);let o=new Be(xs,_s,t,e);o.layers=this.layers,this.add(o);let l=new Be(xs,_s,t,e);l.layers=this.layers,this.add(l);let c=new Be(xs,_s,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var jc="\\[\\]\\.:\\/",tm=new RegExp("["+jc+"]","g"),th="[^"+jc+"]",em="[^"+jc.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",th),im=/(WCOD+)?/.source.replace("WCOD",em),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),am=new RegExp("^"+nm+im+sm+rm+"$"),om=["material","materials","bones","map"],Ec=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(t){let e=am.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Ec;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);var Au=new te,Wr=class{constructor(t,e,n=0,s=1/0){this.ray=new Rs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Au.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Au),this}intersectObject(t,e=!0,n=[]){return Tc(t,this,n,e),n.sort(Ru),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tc(t[s],this,n,e);return n.sort(Ru),n}};function Ru(i,t){return i.distance-t.distance}function Tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Tc(r[a],t,e,!0)}}var ah=class ah{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};ah.prototype.isMatrix2=!0;var Ac=ah;function eh(i,t,e,n){let s=lm(n);switch(e){case Xc:return i*t;case Po:return i*t/s.components*s.byteLength;case Io:return i*t/s.components*s.byteLength;case Ti:return i*t*2/s.components*s.byteLength;case Lo:return i*t*2/s.components*s.byteLength;case qc:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Do:return i*t*4/s.components*s.byteLength;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Oo:return Math.max(i,16)*Math.max(t,8)/4;case No:case Fo:return Math.max(i,8)*Math.max(t,8)/2;case zo:case Bo:case Ho:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ko:case Qr:case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sl:case rl:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ol:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jr:case cl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(i){switch(i){case Qe:case Hc:return{byteLength:1,components:1};case Bs:case Vc:case wn:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case bn:case Ao:case dn:return{byteLength:4,components:1};case Gc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Hd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fm(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,bm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,zm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,d0=`uniform sampler2D dfgLUT;
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
}`,f0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,x0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eg=`#ifdef USE_SKINNING
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
#endif`,ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lg=`#ifdef USE_TRANSMISSION
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
#endif`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mg=`uniform sampler2D t2D;
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
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,Sg=`#define DISTANCE
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
}`,bg=`#define DISTANCE
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tg=`uniform float scale;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Pg=`#define LAMBERT
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
}`,Ig=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Dg=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define NORMAL
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
}`,Fg=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,kg=`#define TOON
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
}`,Hg=`#define TOON
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
}`,Vg=`uniform float size;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,qg=`uniform float rotation;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:xm,alphatest_fragment:_m,alphatest_pars_fragment:ym,aomap_fragment:vm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:bm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Im,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:zm,defaultnormal_vertex:Bm,displacementmap_pars_vertex:km,displacementmap_vertex:Hm,emissivemap_fragment:Vm,emissivemap_pars_fragment:Gm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:Zm,envmap_pars_vertex:Km,envmap_physical_pars_fragment:a0,envmap_vertex:Jm,fog_vertex:$m,fog_pars_vertex:Qm,fog_fragment:jm,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:l0,lights_phong_fragment:c0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,lightprobes_pars_fragment:g0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:v0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:b0,map_particle_pars_fragment:w0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:R0,morphnormal_vertex:C0,morphtarget_pars_vertex:P0,morphtarget_vertex:I0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:U0,normal_vertex:F0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:z0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:k0,iridescence_pars_fragment:H0,opaque_fragment:V0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:X0,dithering_fragment:q0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:$0,shadowmap_vertex:Q0,shadowmask_pars_fragment:j0,skinbase_vertex:tg,skinning_pars_vertex:eg,skinning_vertex:ng,skinnormal_vertex:ig,specularmap_fragment:sg,specularmap_pars_fragment:rg,tonemapping_fragment:ag,tonemapping_pars_fragment:og,transmission_fragment:lg,transmission_pars_fragment:cg,uv_pars_fragment:hg,uv_pars_vertex:ug,uv_vertex:dg,worldpos_vertex:fg,background_vert:pg,background_frag:mg,backgroundCube_vert:gg,backgroundCube_frag:xg,cube_vert:_g,cube_frag:yg,depth_vert:vg,depth_frag:Mg,distance_vert:Sg,distance_frag:bg,equirect_vert:wg,equirect_frag:Eg,linedashed_vert:Tg,linedashed_frag:Ag,meshbasic_vert:Rg,meshbasic_frag:Cg,meshlambert_vert:Pg,meshlambert_frag:Ig,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Ng,meshnormal_frag:Ug,meshphong_vert:Fg,meshphong_frag:Og,meshphysical_vert:zg,meshphysical_frag:Bg,meshtoon_vert:kg,meshtoon_frag:Hg,points_vert:Vg,points_frag:Gg,shadow_vert:Wg,shadow_frag:Xg,sprite_vert:qg,sprite_frag:Yg},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},zn={basic:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Xe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Xe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Xe([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Xe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Xe([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Xe([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Xe([xt.common,xt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Xe([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};zn.physical={uniforms:Xe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var fl={r:0,b:0,g:0},Zg=new te,Vd=new Yt;Vd.set(-1,0,0,0,1,0,0,0,1);function Kg(i,t,e,n,s,r){let a=new zt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let _=M.backgroundBlurriness>0;b=t.get(b,_)}return b}function p(M){let b=!1,_=f(M);_===null?g(a,o):_&&_.isColor&&(g(_,1),b=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,b){let _=f(b);_&&(_.isCubeTexture||_.mapping===qr)?(c===void 0&&(c=new Pt(new Le(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Yi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=se.getTransfer(_.colorSpace)!==de,(h!==_||d!==_.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new Un(2,2),new We({name:"BackgroundMaterial",uniforms:Yi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=se.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,b){M.getRGB(fl,Qc(i)),e.buffers.color.setClear(fl.r,fl.g,fl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Jg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,N,z,L,O){let W=!1,V=d(I,L,z,N);r!==V&&(r=V,c(r.object)),W=f(I,L,z,O),W&&p(I,L,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(I,N,z,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function d(I,N,z,L){let O=L.wireframe===!0,W=n[N.id];W===void 0&&(W={},n[N.id]=W);let V=I.isInstancedMesh===!0?I.id:0,it=W[V];it===void 0&&(it={},W[V]=it);let Y=it[z.id];Y===void 0&&(Y={},it[z.id]=Y);let j=Y[O];return j===void 0&&(j=u(l()),Y[O]=j),j}function u(I){let N=[],z=[],L=[];for(let O=0;O<e;O++)N[O]=0,z[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,N,z,L){let O=r.attributes,W=N.attributes,V=0,it=z.getAttributes();for(let Y in it)if(it[Y].location>=0){let nt=O[Y],Dt=W[Y];if(Dt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(Dt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(Dt=I.instanceColor)),nt===void 0||nt.attribute!==Dt||Dt&&nt.data!==Dt.data)return!0;V++}return r.attributesNum!==V||r.index!==L}function p(I,N,z,L){let O={},W=N.attributes,V=0,it=z.getAttributes();for(let Y in it)if(it[Y].location>=0){let nt=W[Y];nt===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor));let Dt={};Dt.attribute=nt,nt&&nt.data&&(Dt.data=nt.data),O[Y]=Dt,V++}r.attributes=O,r.attributesNum=V,r.index=L}function x(){let I=r.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function g(I){m(I,0)}function m(I,N){let z=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;z[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),O[I]!==N&&(i.vertexAttribDivisor(I,N),O[I]=N)}function M(){let I=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==I[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function b(I,N,z,L,O,W,V){V===!0?i.vertexAttribIPointer(I,N,z,O,W):i.vertexAttribPointer(I,N,z,L,O,W)}function _(I,N,z,L){x();let O=L.attributes,W=z.getAttributes(),V=N.defaultAttributeValues;for(let it in W){let Y=W[it];if(Y.location>=0){let j=O[it];if(j===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let nt=j.normalized,Dt=j.itemSize,At=t.get(j);if(At===void 0)continue;let le=At.buffer,ee=At.type,ae=At.bytesPerElement,J=ee===i.INT||ee===i.UNSIGNED_INT||j.gpuType===Ao;if(j.isInterleavedBufferAttribute){let tt=j.data,vt=tt.stride,Wt=j.offset;if(tt.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)m(Y.location+wt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let wt=0;wt<Y.locationSize;wt++)g(Y.location+wt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let wt=0;wt<Y.locationSize;wt++)b(Y.location+wt,Dt/Y.locationSize,ee,nt,vt*ae,(Wt+Dt/Y.locationSize*wt)*ae,J)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<Y.locationSize;tt++)g(Y.location+tt);i.bindBuffer(i.ARRAY_BUFFER,le);for(let tt=0;tt<Y.locationSize;tt++)b(Y.location+tt,Dt/Y.locationSize,ee,nt,Dt*ae,Dt/Y.locationSize*tt*ae,J)}}else if(V!==void 0){let nt=V[it];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(Y.location,nt);break;case 3:i.vertexAttrib3fv(Y.location,nt);break;case 4:i.vertexAttrib4fv(Y.location,nt);break;default:i.vertexAttrib1fv(Y.location,nt)}}}}M()}function S(){T();for(let I in n){let N=n[I];for(let z in N){let L=N[z];for(let O in L){let W=L[O];for(let V in W)h(W[V].object),delete W[V];delete L[O]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let N=n[I.id];for(let z in N){let L=N[z];for(let O in L){let W=L[O];for(let V in W)h(W[V].object),delete W[V];delete L[O]}}delete n[I.id]}function A(I){for(let N in n){let z=n[N];for(let L in z){let O=z[L];if(O[I.id]===void 0)continue;let W=O[I.id];for(let V in W)h(W[V].object),delete W[V];delete O[I.id]}}}function y(I){for(let N in n){let z=n[N],L=I.isInstancedMesh===!0?I.id:0,O=z[L];if(O!==void 0){for(let W in O){let V=O[W];for(let it in V)h(V[it].object),delete V[it];delete O[W]}delete z[L],Object.keys(z).length===0&&delete n[N]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function $g(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Qg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qe&&A!==dn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:S,samples:w}}function jg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new _n,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,b=M*4,_=m.clippingState||null;l.value=_,_=h(p,u,b,f);for(let S=0;S!==b;++S)_[S]=e[S];m.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,_=f;b!==x;++b,_+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Gs=4,tx=6,ex=20,nx=256,ea=new Fs,vd=new zt,oh=null,lh=0,ch=0,hh=!1,ix=new P,Zi=new P,Xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ix}=r;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=hh,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:wn,format:fn,colorSpace:fr,depthBuffer:!1},s=Md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sx(r)),this._blurMaterial=ax(r,t,e),this._ggxMaterial=rx(r,t,e)}return s}_compileMaterial(t){let e=new Pt(new _e,t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,s,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(vd),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Le,new Hi({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(vd),m=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let S=this._cubeSize;Vs(s,_*S,b>2?S:0,S,S),d.setRenderTarget(s),m&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===bi||t.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ea)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Gs?n-p+Gs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Vs(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,ea),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Vs(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,ea)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),u=4*(this._cubeSize-h);Vs(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ea)}};function sx(i){let t=[],e=[],n=i,s=i-Gs+1+tx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,b=m>2?0:-1,_=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];p.set(_,f*u*m);for(let S=0;S<u;S++){let w=h[S*2]*2-1,A=h[S*2+1]*2-1;m===0?Zi.set(1,A,w):m===1?Zi.set(-w,1,-A):m===2?Zi.set(-w,A,1):m===3?Zi.set(-1,A,-w):m===4?Zi.set(-w,-1,A):Zi.set(w,A,-1),Zi.toArray(x,(m*u+S)*f)}}let g=new _e;g.setAttribute("position",new Te(p,f)),g.setAttribute("outputDirection",new Te(x,f)),e.push(new Pt(g,null)),n>Gs&&n--}return{lodMeshes:e,sizeLods:t}}function Md(i,t,e){let n=new $e(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rx(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ax(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:ex,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Sd(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function bd(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ml=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Le(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Fn});r.uniforms.tEquirect.value=e;let a=new Pt(s,r),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=ke),new vo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function ox(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===wo||f===Eo)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new ml(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===wo||f===Eo,x=f===bi||f===qi;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Xs(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new Xs(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===wo?u.mapping=bi:f===Eo&&(u.mapping=qi),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function lx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zi("WebGLRenderer: "+n+" extension not supported."),s}}}function cx(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let b=0,_=M.length;b<_;b+=3){let S=M[b+0],w=M[b+1],A=M[b+2];u.push(S,w,w,A,A,S)}}else{let M=p.array;x=p.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let S=b+0,w=b+1,A=b+2;u.push(S,w,w,A,A,S)}}let g=new(p.count>=65535?vr:yr)(u,1);g.version=x;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function hx(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ux(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dx(i,t,e){let n=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let _=o.attributes.position.count*b,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*S*4*d),A=new xr(w,_,S,d);A.type=dn,A.needsUpdate=!0;let y=b*4;for(let R=0;R<d;R++){let I=g[R],N=m[R],z=M[R],L=_*S*4*R;for(let O=0;O<I.count;O++){let W=O*y;f===!0&&(s.fromBufferAttribute(I,O),w[L+W+0]=s.x,w[L+W+1]=s.y,w[L+W+2]=s.z,w[L+W+3]=0),p===!0&&(s.fromBufferAttribute(N,O),w[L+W+4]=s.x,w[L+W+5]=s.y,w[L+W+6]=s.z,w[L+W+7]=0),x===!0&&(s.fromBufferAttribute(z,O),w[L+W+8]=s.x,w[L+W+9]=s.y,w[L+W+10]=s.z,w[L+W+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new rt(_,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function fx(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var px={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Xr]:"ACES_FILMIC_TONE_MAPPING",[zc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function mx(i,t,e,n,s,r){let a=new $e(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new _e;c.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pt(c,h),u=new Fs(-1,1,1,-1,0,1),f=null,p=null,x=!1,g,m=null,M=[],b=!1;this.setSize=function(_,S){a.setSize(_,S),o!==null&&o.setSize(_,S),l!==null&&l.setSize(_,S);for(let w=0;w<M.length;w++){let A=M[w];A.setSize&&A.setSize(_,S)}},this.setEffects=function(_){M=_,b=M.length>0&&M[0].isRenderPass===!0;let S=a.width,w=a.height;M.length>0&&o===null&&(o=new $e(S,w,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new $e(S,w,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(S,w)}},this.begin=function(_,S){if(x||_.toneMapping===Sn&&M.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return b===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Sn,!0},this.hasRenderPass=function(){return b},this.end=function(_,S){_.toneMapping=g,x=!0;let w=a,A=o;for(let y=0;y<M.length;y++){let T=M[y];T.enabled!==!1&&(T.render(_,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==_.outputColorSpace||p!==_.toneMapping){f=_.outputColorSpace,p=_.toneMapping,h.defines={},se.getTransfer(f)===de&&(h.defines.SRGB_TRANSFER="");let y=px[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(m),_.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Gd=new Ze,fh=new gi(1,1),Wd=new xr,Xd=new $a,qd=new wr,wd=[],Ed=[],Td=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function qs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=wd[s];if(r===void 0&&(r=new Float32Array(s),wd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _l(i,t){let e=Ed[t];e===void 0&&(e=new Int32Array(t),Ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function vx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Rd.set(n),i.uniformMatrix2fv(this.addr,!1,Rd),Ue(e,n)}}function Mx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Ad.set(n),i.uniformMatrix3fv(this.addr,!1,Ad),Ue(e,n)}}function Sx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Td.set(n),i.uniformMatrix4fv(this.addr,!1,Td),Ue(e,n)}}function bx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Ex(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Ax(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fh.compareFunction=e.isReversedDepthBuffer()?ul:hl,r=fh):r=Gd,e.setTexture2D(t||r,s)}function Lx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xd,s)}function Dx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qd,s)}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wd,s)}function Ux(i){switch(i){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return yx;case 35674:return vx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Fx(i,t){i.uniform1fv(this.addr,t)}function Ox(i,t){let e=qs(t,this.size,2);i.uniform2fv(this.addr,e)}function zx(i,t){let e=qs(t,this.size,3);i.uniform3fv(this.addr,e)}function Bx(i,t){let e=qs(t,this.size,4);i.uniform4fv(this.addr,e)}function kx(i,t){let e=qs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hx(i,t){let e=qs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Vx(i,t){let e=qs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Gx(i,t){i.uniform1iv(this.addr,t)}function Wx(i,t){i.uniform2iv(this.addr,t)}function Xx(i,t){i.uniform3iv(this.addr,t)}function qx(i,t){i.uniform4iv(this.addr,t)}function Yx(i,t){i.uniform1uiv(this.addr,t)}function Zx(i,t){i.uniform2uiv(this.addr,t)}function Kx(i,t){i.uniform3uiv(this.addr,t)}function Jx(i,t){i.uniform4uiv(this.addr,t)}function $x(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=fh:a=Gd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Qx(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Xd,r[a])}function jx(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||qd,r[a])}function t_(i,t,e){let n=this.cache,s=t.length,r=_l(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Wd,r[a])}function e_(i){switch(i){case 5126:return Fx;case 35664:return Ox;case 35665:return zx;case 35666:return Bx;case 35674:return kx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Zx;case 36295:return Kx;case 36296:return Jx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Qx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return t_}}var ph=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e_(e.type)}},gh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Cd(i,t){i.seq.push(t),i.map[t.id]=t}function n_(i,t,e){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cd(e,c===void 0?new ph(o,i,t):new mh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new gh(o),Cd(e,d)),e=d}}}var Ws=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);n_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i_=37297,s_=0;function r_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Id=new Yt;function a_(i){se._getMatrix(Id,se.workingColorSpace,i);let t=`mat3( ${Id.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case pr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(t),o)}else return r}function o_(i,t){let e=a_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var l_={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[Xr]:"ACESFilmic",[zc]:"AgX",[Bc]:"Neutral",[Oc]:"Custom"};function c_(i,t){let e=l_[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new P;function h_(){se.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function d_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function f_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ia(i){return i!==""}function Dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,t){let e=jt[t];if(e===void 0){let n=m_.get(t);if(n!==void 0)e=jt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return xh(e)}var x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(i){return i.replace(x_,__)}function __(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var y_={[Wi]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function v_(i){return y_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var M_={[bi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function S_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":M_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var b_={[qi]:"ENVMAP_MODE_REFRACTION"};function w_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var E_={[bo]:"ENVMAP_BLENDING_MULTIPLY",[Ju]:"ENVMAP_BLENDING_MIX",[$u]:"ENVMAP_BLENDING_ADD"};function T_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":E_[i.combine]||"ENVMAP_BLENDING_NONE"}function A_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function R_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=v_(e),c=S_(e),h=w_(e),d=T_(e),u=A_(e),f=u_(e),p=d_(r),x=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ia).join(`
`),m.length>0&&(m+=`
`)):(g=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),m=[Fd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?c_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),h_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),a=xh(a),a=Dd(a,e),a=Nd(a,e),o=xh(o),o=Dd(o,e),o=Nd(o,e),a=Ud(a),o=Ud(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+g+a,_=M+m+o,S=Pd(s,s.VERTEX_SHADER,b),w=Pd(s,s.FRAGMENT_SHADER,_);s.attachShader(x,S),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(w)||"",O=N.trim(),W=z.trim(),V=L.trim(),it=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,w);else{let j=Ld(s,S,"vertex"),nt=Ld(s,w,"fragment");Ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+j+`
`+nt)}else O!==""?Vt("WebGLProgram: Program Info Log:",O):(W===""||V==="")&&(Y=!1);Y&&(I.diagnostics={runnable:it,programLog:O,vertexShader:{log:W,prefix:g},fragmentShader:{log:V,prefix:m}})}s.deleteShader(S),s.deleteShader(w),y=new Ws(s,x),T=f_(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,i_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}var C_=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yh(t),e.set(t,n)),n}},yh=class{constructor(t){this.id=C_++,this.code=t,this.usedTimes=0}};function P_(i){return i===Ti||i===Qr||i===jr}function I_(i,t,e,n,s,r){let a=new Es,o=new _h,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,T,R,I,N,z){let L=I.fog,O=N.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||W,V),Y=it&&it.mapping===qr?it.image.height:null,j=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Vt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let nt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Dt=nt!==void 0?nt.length:0,At=0;O.morphAttributes.position!==void 0&&(At=1),O.morphAttributes.normal!==void 0&&(At=2),O.morphAttributes.color!==void 0&&(At=3);let le,ee,ae,J;if(j){let ye=zn[j];le=ye.vertexShader,ee=ye.fragmentShader}else{le=y.vertexShader,ee=y.fragmentShader;let ye=o.getVertexShaderStage(y),he=o.getFragmentShaderStage(y);o.update(y,ye,he),ae=ye.id,J=he.id}let tt=i.getRenderTarget(),vt=i.state.buffers.depth.getReversed(),Wt=N.isInstancedMesh===!0,wt=N.isBatchedMesh===!0,Xt=!!y.map,fe=!!y.matcap,et=!!it,at=!!y.aoMap,ot=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,dt=!!y.normalMap,Bt=!!y.displacementMap,Ot=!!y.emissiveMap,qt=!!y.metalnessMap,Zt=!!y.roughnessMap,D=y.anisotropy>0,ce=y.clearcoat>0,ne=y.dispersion>0,C=y.retroreflectivity>0,v=y.iridescence>0,B=y.sheen>0,G=y.transmission>0,Z=D&&!!y.anisotropyMap,ht=ce&&!!y.clearcoatMap,ut=ce&&!!y.clearcoatNormalMap,K=ce&&!!y.clearcoatRoughnessMap,Q=v&&!!y.iridescenceMap,ft=v&&!!y.iridescenceThicknessMap,Nt=B&&!!y.sheenColorMap,_t=B&&!!y.sheenRoughnessMap,pt=!!y.specularMap,Ut=!!y.specularColorMap,kt=!!y.specularIntensityMap,Kt=G&&!!y.transmissionMap,F=G&&!!y.thicknessMap,mt=!!y.gradientMap,$=!!y.alphaMap,gt=y.alphaTest>0,bt=!!y.alphaHash,st=!!y.extensions,Ft=Sn;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let It={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:ee,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:wt,batchingColor:wt&&N._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&N.instanceColor!==null,instancingMorph:Wt&&N.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:fe,envMap:et,envMapMode:et&&it.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:dt,displacementMap:Bt,emissiveMap:Ot,normalMapObjectSpace:dt&&y.normalMapType===td,normalMapTangentSpace:dt&&y.normalMapType===ta,packedNormalMap:dt&&y.normalMapType===ta&&P_(y.normalMap.format),metalnessMap:qt,roughnessMap:Zt,anisotropy:D,anisotropyMap:Z,clearcoat:ce,clearcoatMap:ht,clearcoatNormalMap:ut,clearcoatRoughnessMap:K,dispersion:ne,retroreflection:C,iridescence:v,iridescenceMap:Q,iridescenceThicknessMap:ft,sheen:B,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:pt,specularColorMap:Ut,specularIntensityMap:kt,transmission:G,transmissionMap:Kt,thicknessMap:F,gradientMap:mt,opaque:y.transparent===!1&&y.blending===zs&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:gt,alphaHash:bt,combine:y.combine,mapUv:Xt&&p(y.map.channel),aoMapUv:at&&p(y.aoMap.channel),lightMapUv:ot&&p(y.lightMap.channel),bumpMapUv:lt&&p(y.bumpMap.channel),normalMapUv:dt&&p(y.normalMap.channel),displacementMapUv:Bt&&p(y.displacementMap.channel),emissiveMapUv:Ot&&p(y.emissiveMap.channel),metalnessMapUv:qt&&p(y.metalnessMap.channel),roughnessMapUv:Zt&&p(y.roughnessMap.channel),anisotropyMapUv:Z&&p(y.anisotropyMap.channel),clearcoatMapUv:ht&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(y.sheenRoughnessMap.channel),specularMapUv:pt&&p(y.specularMap.channel),specularColorMapUv:Ut&&p(y.specularColorMap.channel),specularIntensityMapUv:kt&&p(y.specularIntensityMap.channel),transmissionMapUv:Kt&&p(y.transmissionMap.channel),thicknessMapUv:F&&p(y.thicknessMap.channel),alphaMapUv:$&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||D),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Xt||$),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:At,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&se.getTransfer(y.map.colorSpace)===de,decodeVideoTextureEmissive:Ot&&y.emissiveMap.isVideoTexture===!0&&se.getTransfer(y.emissiveMap.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===De,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:st&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&y.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let T=f[y.type],R;if(T){let I=zn[T];R=dl.clone(I.uniforms)}else R=y.uniforms;return R}function _(y,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new R_(i,T,y,s),c.push(R),h.set(T,R)),R}function S(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:b,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function L_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function D_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Od(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=a(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,x,g,m,M){M.reversedDepth===!0&&(g=-g);let b=o(u,f,p,x,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(u,f,p,x,g,m){let M=o(u,f,p,x,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||D_),n.length>1&&n.sort(f||Od),s.length>1&&s.sort(f||Od)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function N_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new zd,i.set(n,[a])):s>=r.length?(a=new zd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new zt};break;case"SpotLight":e={position:new P,direction:new P,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function F_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var O_=0;function z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function B_(i){let t=new U_,e=F_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new te,a=new te;function o(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,M=0,b=0,_=0,S=0,w=0,A=0,y=0,T=0,R=0;c.sort(z_);for(let N=0,z=c.length;N<z;N++){let L=c[N],O=L.color,W=L.intensity,V=L.distance,it=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ti?it=L.shadow.map.texture:it=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=O.r*W,d+=O.g*W,u+=O.b*W;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],W);R++}else if(L.isSunLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=it;let Dt=j.getViewportCount();for(let At=0;At<Dt;At++)n.sunShadowMatrix[x+At]=j.getMatrix(At),n.sunShadowCascade[x+At]=j._cascadeData[At];x+=Dt,p++}n.sun[f]=Y,f++}else if(L.isDirectionalLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.directionalShadow[g]=nt,n.directionalShadowMap[g]=it,n.directionalShadowMatrix[g]=L.shadow.matrix,S++}n.directional[g]=Y,g++}else if(L.isSpotLight){let Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(O).multiplyScalar(W),Y.distance=V,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[M]=Y;let j=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[M]=j.matrix,L.castShadow){let nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,n.spotShadow[M]=nt,n.spotShadowMap[M]=it,A++}M++}else if(L.isRectAreaLight){let Y=t.get(L);Y.color.copy(O).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=Y,b++}else if(L.isPointLight){let Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let j=L.shadow,nt=e.get(L);nt.shadowIntensity=j.intensity,nt.shadowBias=j.bias,nt.shadowNormalBias=j.normalBias,nt.shadowRadius=j.radius,nt.shadowMapSize=j.mapSize,nt.shadowCameraNear=j.camera.near,nt.shadowCameraFar=j.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=it,n.pointShadowMatrix[m]=L.shadow.matrix,w++}n.point[m]=Y,m++}else if(L.isHemisphereLight){let Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(W),Y.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[_]=Y,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;(I.sunLength!==f||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==b||I.hemiLength!==_||I.numSunShadows!==p||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==y||I.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=f,I.directionalLength=g,I.pointLength=m,I.spotLength=M,I.rectAreaLength=b,I.hemiLength=_,I.numSunShadows=p,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=y,I.numLightProbes=R,n.version=O_++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let _=c[M];if(_.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),d++}else if(_.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(_.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Bd(i){let t=new B_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function k_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bd(i),t.set(s,[o])):r>=a.length?(o=new Bd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`,G_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],W_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],kd=new te,na=new P,dh=new P;function X_(i,t,e){let n=new Ps,s=new rt,r=new rt,a=new we,o=new oo,l=new lo,c={},h=e.maxTextureSize,d={[Si]:De,[De]:Si,[on]:on},u=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:H_,fragmentShader:V_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Pt(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let m=this.type;this.render=function(w,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Iu&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Fn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=m!==this.type;z&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=w.length;L<O;L++){let W=w[L],V=W.shadow;if(V===void 0){Vt("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Os){if(W.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $e(s.x,s.y,{format:Ti,type:wn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new gi(s.x,s.y,dn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=In,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe}else W.isPointLight?(V.map=new ml(s.x),V.map.depthTexture=new Qa(s.x,bn)):(V.map=new $e(s.x,s.y),V.map.depthTexture=new gi(s.x,s.y,bn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=In,this.type===Wi?(V.map.depthTexture.compareFunction=Y?ul:hl,V.map.depthTexture.minFilter=ke,V.map.depthTexture.magFilter=ke):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Oe,V.map.depthTexture.magFilter=Oe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let j=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,y);for(let nt=0;nt<j;nt++){let Dt=V.getCamera(nt);if(W.isPointLight){let At=V.camera,le=V.matrix,ee=W.distance||At.far;ee!==At.far&&(At.far=ee,At.updateProjectionMatrix()),na.setFromMatrixPosition(W.matrixWorld),At.position.copy(na),dh.copy(At.position),dh.add(G_[nt]),At.up.copy(W_[nt]),At.lookAt(dh),At.updateMatrixWorld(),le.makeTranslation(-na.x,-na.y,-na.z),kd.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),V._frustum.setFromProjectionMatrix(kd,At.coordinateSystem,At.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(V.map),i.clear());let At=V.getViewport(nt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),N.viewport(a)}n=V.getFrustum(nt),_(A,y,Dt,W,this.type)}V.isPointLightShadow!==!0&&this.type===Os&&M(V,y),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,I)};function M(w,A){let y=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new $e(s.x,s.y,{format:Ti,type:wn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,y,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function b(w,A,y,T){let R=null,I=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)R=I;else if(R=y.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,z=A.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let O=L[z];O===void 0&&(O=R.clone(),L[z]=O,A.addEventListener("dispose",S)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Os?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=y}return R}function _(w,A,y,T,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Os)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let z=t.update(w),L=w.material;if(Array.isArray(L)){let O=z.groups;for(let W=0,V=O.length;W<V;W++){let it=O[W],Y=L[it.materialIndex];if(Y&&Y.visible){let j=b(w,Y,T,R);w.onBeforeShadow(i,w,A,y,z,j,it),i.renderBufferDirect(y,null,z,j,w,it),w.onAfterShadow(i,w,A,y,z,j,it)}}}else if(L.visible){let O=b(w,L,T,R);w.onBeforeShadow(i,w,A,y,z,O,null),i.renderBufferDirect(y,null,z,O,w,null),w.onAfterShadow(i,w,A,y,z,O,null)}}let N=w.children;for(let z=0,L=N.length;z<L;z++)_(N[z],A,y,T,R)}function S(w){w.target.removeEventListener("dispose",S);for(let y in c){let T=c[y],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function q_(i,t){function e(){let F=!1,mt=new we,$=null,gt=new we(0,0,0,0);return{setMask:function(bt){$!==bt&&!F&&(i.colorMask(bt,bt,bt,bt),$=bt)},setLocked:function(bt){F=bt},setClear:function(bt,st,Ft,It,ye){ye===!0&&(bt*=It,st*=It,Ft*=It),mt.set(bt,st,Ft,It),gt.equals(mt)===!1&&(i.clearColor(bt,st,Ft,It),gt.copy(mt))},reset:function(){F=!1,$=null,gt.set(-1,0,0,0)}}}function n(){let F=!1,mt=!1,$=null,gt=null,bt=null;return{setReversed:function(st){if(mt!==st){let Ft=t.get("EXT_clip_control");st?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=st;let It=bt;bt=null,this.setClear(It)}},getReversed:function(){return mt},setTest:function(st){st?tt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(st){$!==st&&!F&&(i.depthMask(st),$=st)},setFunc:function(st){if(mt&&(st=ud[st]),gt!==st){switch(st){case ka:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Va:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case Ga:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=st}},setLocked:function(st){F=st},setClear:function(st){bt!==st&&(bt=st,mt&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,$=null,gt=null,bt=null,mt=!1}}}function s(){let F=!1,mt=null,$=null,gt=null,bt=null,st=null,Ft=null,It=null,ye=null;return{setTest:function(he){F||(he?tt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(he){mt!==he&&!F&&(i.stencilMask(he),mt=he)},setFunc:function(he,pn,Tn){($!==he||gt!==pn||bt!==Tn)&&(i.stencilFunc(he,pn,Tn),$=he,gt=pn,bt=Tn)},setOp:function(he,pn,Tn){(st!==he||Ft!==pn||It!==Tn)&&(i.stencilOp(he,pn,Tn),st=he,Ft=pn,It=Tn)},setLocked:function(he){F=he},setClear:function(he){ye!==he&&(i.clearStencil(he),ye=he)},reset:function(){F=!1,mt=null,$=null,gt=null,bt=null,st=null,Ft=null,It=null,ye=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,b=null,_=null,S=null,w=null,A=null,y=new zt(0,0,0),T=0,R=!1,I=null,N=null,z=null,L=null,O=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,it=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=it>=1):Y.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=it>=2);let j=null,nt={},Dt=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),le=new we().fromArray(Dt),ee=new we().fromArray(At);function ae(F,mt,$,gt){let bt=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<$;Ft++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(mt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return st}let J={};J[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(vs),lt(!1),dt(Rc),tt(i.CULL_FACE),at(Fn);function tt(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function vt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Wt(F,mt){return u[F]!==mt?(i.bindFramebuffer(F,mt),u[F]=mt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function wt(F,mt){let $=p,gt=!1;if(F){$=f.get(mt),$===void 0&&($=[],f.set(mt,$));let bt=F.textures;if($.length!==bt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ft=bt.length;st<Ft;st++)$[st]=i.COLOR_ATTACHMENT0+st;$.length=bt.length,gt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,gt=!0);gt&&i.drawBuffers($)}function Xt(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let fe={[Xi]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Nu]:i.FUNC_REVERSE_SUBTRACT};fe[Uu]=i.MIN,fe[Fu]=i.MAX;let et={[Ou]:i.ZERO,[zu]:i.ONE,[Bu]:i.SRC_COLOR,[Lc]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[ku]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Vu]:i.ONE_MINUS_DST_ALPHA,[qu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function at(F,mt,$,gt,bt,st,Ft,It,ye,he){if(F===Fn){g===!0&&(vt(i.BLEND),g=!1);return}if(g===!1&&(tt(i.BLEND),g=!0),F!==Lu){if(F!==m||he!==R){if((M!==Xi||S!==Xi)&&(i.blendEquation(i.FUNC_ADD),M=Xi,S=Xi),he)switch(F){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ht("WebGLState: Invalid blending: ",F);break}else switch(F){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",F);break}b=null,_=null,w=null,A=null,y.set(0,0,0),T=0,m=F,R=he}return}bt=bt||mt,st=st||$,Ft=Ft||gt,(mt!==M||bt!==S)&&(i.blendEquationSeparate(fe[mt],fe[bt]),M=mt,S=bt),($!==b||gt!==_||st!==w||Ft!==A)&&(i.blendFuncSeparate(et[$],et[gt],et[st],et[Ft]),b=$,_=gt,w=st,A=Ft),(It.equals(y)===!1||ye!==T)&&(i.blendColor(It.r,It.g,It.b,ye),y.copy(It),T=ye),m=F,R=!1}function ot(F,mt){F.side===on?vt(i.CULL_FACE):tt(i.CULL_FACE);let $=F.side===De;mt&&($=!$),lt($),F.blending===zs&&F.transparent===!1?at(Fn):at(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let gt=F.stencilWrite;o.setTest(gt),gt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function dt(F){F!==Cu?(tt(i.CULL_FACE),F!==N&&(F===Rc?i.cullFace(i.BACK):F===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),N=F}function Bt(F){F!==z&&(V&&i.lineWidth(F),z=F)}function Ot(F,mt,$){F?(tt(i.POLYGON_OFFSET_FILL),(L!==mt||O!==$)&&(L=mt,O=$,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,$))):vt(i.POLYGON_OFFSET_FILL)}function qt(F){F?tt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function Zt(F){F===void 0&&(F=i.TEXTURE0+W-1),j!==F&&(i.activeTexture(F),j=F)}function D(F,mt,$){$===void 0&&(j===null?$=i.TEXTURE0+W-1:$=j);let gt=nt[$];gt===void 0&&(gt={type:void 0,texture:void 0},nt[$]=gt),(gt.type!==F||gt.texture!==mt)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(F,mt||J[F]),gt.type=F,gt.texture=mt)}function ce(){let F=nt[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function ht(){try{i.texStorage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function ut(){try{i.texStorage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){Ht("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Ht("WebGLState:",F)}}function ft(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Nt(F,mt){d[F]!==mt&&(i.pixelStorei(F,mt),d[F]=mt)}function _t(F){le.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),le.copy(F))}function pt(F){ee.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ee.copy(F))}function Ut(F,mt){let $=c.get(mt);$===void 0&&($=new WeakMap,c.set(mt,$));let gt=$.get(F);gt===void 0&&(gt=i.getUniformBlockIndex(mt,F.name),$.set(F,gt))}function kt(F,mt){let gt=c.get(mt).get(F);l.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,F.__bindingPointIndex),l.set(mt,gt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,nt={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,M=null,b=null,_=null,S=null,w=null,A=null,y=new zt(0,0,0),T=0,R=!1,I=null,N=null,z=null,L=null,O=null,le.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Wt,drawBuffers:wt,useProgram:Xt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:dt,setLineWidth:Bt,setPolygonOffset:Ot,setScissorTest:qt,activeTexture:Zt,bindTexture:D,unbindTexture:ce,compressedTexImage2D:ne,compressedTexImage3D:C,texImage2D:K,texImage3D:Q,pixelStorei:Nt,getParameter:ft,updateUBOMapping:Ut,uniformBlockBinding:kt,texStorage2D:ht,texStorage3D:ut,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:Z,scissor:_t,viewport:pt,reset:Kt}}function Y_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):mr("canvas")}function g(C,v,B){let G=1,Z=ne(C);if((Z.width>B||Z.height>B)&&(G=B/Math.max(Z.width,Z.height)),G<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let ht=Math.floor(G*Z.width),ut=Math.floor(G*Z.height);u===void 0&&(u=x(ht,ut));let K=v?x(ht,ut):u;return K.width=ht,K.height=ut,K.getContext("2d").drawImage(C,0,0,ht,ut),Vt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ut+")."),K}else return"data"in C&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,v,B,G,Z,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut;G&&(ut=t.get("EXT_texture_norm16"),ut||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.R16_EXT),B===i.SHORT&&ut&&(K=ut.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),v===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.RG16_EXT),B===i.SHORT&&ut&&(K=ut.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ut&&(K=ut.RGB16_EXT),B===i.SHORT&&ut&&(K=ut.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let Q=ht?pr:se.getTransfer(Z);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=Q===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ut&&(K=ut.RGBA16_EXT),B===i.SHORT&&ut&&(K=ut.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(C,v){let B;return C?v===null||v===bn||v===ks?B=i.DEPTH24_STENCIL8:v===dn?B=i.DEPTH32F_STENCIL8:v===Bs&&(B=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===ks?B=i.DEPTH_COMPONENT24:v===dn?B=i.DEPTH_COMPONENT32F:v===Bs&&(B=i.DEPTH_COMPONENT16),B}function w(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Oe&&C.minFilter!==ke?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(C){let v=C.target;v.removeEventListener("dispose",y),I(v)}function T(C){let v=n.get(C);if(v.__webglInit===void 0)return;let B=C.source,G=f.get(B);if(G){let Z=G[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(G).length===0&&f.delete(B)}n.remove(C)}function R(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let B=C.source,G=f.get(B);delete G[v.__cacheKey],a.memory.textures--}function I(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let Z=0;Z<v.__webglFramebuffer[G].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[G][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=C.textures;for(let G=0,Z=B.length;G<Z;G++){let ht=n.get(B[G]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(B[G])}n.remove(C)}let N=0;function z(){N=0}function L(){return N}function O(C){N=C}function W(){let C=N;return C>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function V(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function it(C,v){let B=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){let G=C.image;if(G===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,C,v);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function Y(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function j(C,v){let B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){vt(B,C,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function nt(C,v){let B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){Wt(B,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Dt={[Qn]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},At={[Oe]:i.NEAREST,[Qu]:i.NEAREST_MIPMAP_NEAREST,[Yr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},le={[nd]:i.NEVER,[od]:i.ALWAYS,[id]:i.LESS,[hl]:i.LEQUAL,[sd]:i.EQUAL,[ul]:i.GEQUAL,[rd]:i.GREATER,[ad]:i.NOTEQUAL};function ee(C,v){if(v.type===dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ke||v.magFilter===To||v.magFilter===Yr||v.magFilter===wi||v.minFilter===ke||v.minFilter===To||v.minFilter===Yr||v.minFilter===wi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Dt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Dt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Dt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,At[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,At[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Oe||v.minFilter!==Yr&&v.minFilter!==wi||v.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(C,v){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let G=v.source,Z=f.get(G);Z===void 0&&(Z={},f.set(G,Z));let ht=V(v);if(ht!==C.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ht].usedTimes++;let ut=Z[C.__cacheKey];ut!==void 0&&(Z[C.__cacheKey].usedTimes--,ut.usedTimes===0&&R(v)),C.__cacheKey=ht,C.__webglTexture=Z[ht].texture}return B}function J(C,v,B){return Math.floor(Math.floor(C/B)/v)}function tt(C,v,B,G){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,G,v.data);else{ht.sort((Nt,_t)=>Nt.start-_t.start);let ut=0;for(let Nt=1;Nt<ht.length;Nt++){let _t=ht[ut],pt=ht[Nt],Ut=_t.start+_t.count,kt=J(pt.start,v.width,4),Kt=J(_t.start,v.width,4);pt.start<=Ut+1&&kt===Kt&&J(pt.start+pt.count-1,v.width,4)===kt?_t.count=Math.max(_t.count,pt.start+pt.count-_t.start):(++ut,ht[ut]=pt)}ht.length=ut+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Nt=0,_t=ht.length;Nt<_t;Nt++){let pt=ht[Nt],Ut=Math.floor(pt.start/4),kt=Math.ceil(pt.count/4),Kt=Ut%v.width,F=Math.floor(Ut/v.width),mt=kt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Kt,F,mt,$,B,G,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function vt(C,v,B){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let Z=ae(C,v),ht=v.source;e.bindTexture(G,C.__webglTexture,i.TEXTURE0+B);let ut=n.get(ht);if(ht.version!==ut.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let $=se.getPrimaries(se.workingColorSpace),gt=v.colorSpace===ii?null:se.getPrimaries(v.colorSpace),bt=v.colorSpace===ii||$===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=g(v.image,!1,s.maxTextureSize);Q=ce(v,Q);let ft=r.convert(v.format,v.colorSpace),Nt=r.convert(v.type),_t=_(v.internalFormat,ft,Nt,v.normalized,v.colorSpace,v.isVideoTexture);ee(G,v);let pt,Ut=v.mipmaps,kt=v.isVideoTexture!==!0,Kt=ut.__version===void 0||Z===!0,F=ht.dataReady,mt=w(v,Q);if(v.isDepthTexture)_t=S(v.format===Ei,v.type),Kt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,ft,Nt,null));else if(v.isDataTexture)if(Ut.length>0){kt&&Kt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Ut[0].width,Ut[0].height);for(let $=0,gt=Ut.length;$<gt;$++)pt=Ut[$],kt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,Nt,pt.data):e.texImage2D(i.TEXTURE_2D,$,_t,pt.width,pt.height,0,ft,Nt,pt.data);v.generateMipmaps=!1}else kt?(Kt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Q.width,Q.height),F&&tt(v,Q,ft,Nt)):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,ft,Nt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,Ut[0].width,Ut[0].height,Q.depth);for(let $=0,gt=Ut.length;$<gt;$++)if(pt=Ut[$],v.format!==fn)if(ft!==null)if(kt){if(F)if(v.layerUpdates.size>0){let bt=eh(pt.width,pt.height,v.format,v.type);for(let st of v.layerUpdates){let Ft=pt.data.subarray(st*bt/pt.data.BYTES_PER_ELEMENT,(st+1)*bt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,st,pt.width,pt.height,1,ft,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,Q.depth,ft,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,_t,pt.width,pt.height,Q.depth,0,pt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pt.width,pt.height,Q.depth,ft,Nt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,_t,pt.width,pt.height,Q.depth,0,ft,Nt,pt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{kt&&Kt&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Ut[0].width,Ut[0].height);for(let $=0,gt=Ut.length;$<gt;$++)pt=Ut[$],v.format!==fn?ft!==null?kt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,_t,pt.width,pt.height,0,pt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,pt.width,pt.height,ft,Nt,pt.data):e.texImage2D(i.TEXTURE_2D,$,_t,pt.width,pt.height,0,ft,Nt,pt.data)}else if(v.isDataArrayTexture)if(kt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,Q.width,Q.height,Q.depth),F)if(v.layerUpdates.size>0){let $=eh(Q.width,Q.height,v.format,v.type);for(let gt of v.layerUpdates){let bt=Q.data.subarray(gt*$/Q.data.BYTES_PER_ELEMENT,(gt+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,Q.width,Q.height,1,ft,Nt,bt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ft,Nt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,ft,Nt,Q.data);else if(v.isData3DTexture)kt?(Kt&&e.texStorage3D(i.TEXTURE_3D,mt,_t,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ft,Nt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,ft,Nt,Q.data);else if(v.isFramebufferTexture){if(Kt)if(kt)e.texStorage2D(i.TEXTURE_2D,mt,_t,Q.width,Q.height);else{let $=Q.width,gt=Q.height;for(let bt=0;bt<mt;bt++)e.texImage2D(i.TEXTURE_2D,bt,_t,$,gt,0,ft,Nt,null),$>>=1,gt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),d.add(v),$.onpaint=gt=>{let bt=gt.changedElements;for(let st of d)bt.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let bt=i.RGBA,st=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,st,Ft,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(kt&&Kt){let $=ne(Ut[0]);e.texStorage2D(i.TEXTURE_2D,mt,_t,$.width,$.height)}for(let $=0,gt=Ut.length;$<gt;$++)pt=Ut[$],kt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ft,Nt,pt):e.texImage2D(i.TEXTURE_2D,$,_t,ft,Nt,pt);v.generateMipmaps=!1}else if(kt){if(Kt){let $=ne(Q);e.texStorage2D(i.TEXTURE_2D,mt,_t,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Nt,Q)}else e.texImage2D(i.TEXTURE_2D,0,_t,ft,Nt,Q);m(v)&&M(G),ut.__version=ht.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Wt(C,v,B){if(v.image.length!==6)return;let G=ae(C,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);let ht=n.get(Z);if(Z.version!==ht.__version||G===!0){e.activeTexture(i.TEXTURE0+B);let ut=se.getPrimaries(se.workingColorSpace),K=v.colorSpace===ii?null:se.getPrimaries(v.colorSpace),Q=v.colorSpace===ii||ut===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ft=v.isCompressedTexture||v.image[0].isCompressedTexture,Nt=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let st=0;st<6;st++)!ft&&!Nt?_t[st]=g(v.image[st],!0,s.maxCubemapSize):_t[st]=Nt?v.image[st].image:v.image[st],_t[st]=ce(v,_t[st]);let pt=_t[0],Ut=r.convert(v.format,v.colorSpace),kt=r.convert(v.type),Kt=_(v.internalFormat,Ut,kt,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,mt=ht.__version===void 0||G===!0,$=Z.dataReady,gt=w(v,pt);ee(i.TEXTURE_CUBE_MAP,v);let bt;if(ft){F&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,pt.width,pt.height);for(let st=0;st<6;st++){bt=_t[st].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){let It=bt[Ft];v.format!==fn?Ut!==null?F?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Kt,It.width,It.height,0,It.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,0,0,It.width,It.height,Ut,kt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft,Kt,It.width,It.height,0,Ut,kt,It.data)}}}else{if(bt=v.mipmaps,F&&mt){bt.length>0&&gt++;let st=ne(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(Nt){F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,_t[st].width,_t[st].height,Ut,kt,_t[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,_t[st].width,_t[st].height,0,Ut,kt,_t[st].data);for(let Ft=0;Ft<bt.length;Ft++){let ye=bt[Ft].image[st].image;F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,ye.width,ye.height,Ut,kt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Kt,ye.width,ye.height,0,Ut,kt,ye.data)}}else{F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ut,kt,_t[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Ut,kt,_t[st]);for(let Ft=0;Ft<bt.length;Ft++){let It=bt[Ft];F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,0,0,Ut,kt,It.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ft+1,Kt,Ut,kt,It.image[st])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),ht.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function wt(C,v,B,G,Z,ht){let ut=r.convert(B.format,B.colorSpace),K=r.convert(B.type),Q=_(B.internalFormat,ut,K,B.normalized,B.colorSpace),ft=n.get(v),Nt=n.get(B);if(Nt.__renderTarget=v,!ft.__hasExternalTextures){let _t=Math.max(1,v.width>>ht),pt=Math.max(1,v.height>>ht);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,Q,_t,pt,v.depth,0,ut,K,null):e.texImage2D(Z,ht,Q,_t,pt,0,ut,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Z,Nt.__webglTexture,0,qt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Z,Nt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let G=v.depthTexture,Z=G&&G.isDepthTexture?G.type:null,ht=S(v.stencilBuffer,Z),ut=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),ht,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),ht,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ht,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,C)}else{let G=v.textures;for(let Z=0;Z<G.length;Z++){let ht=G[Z],ut=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),Q=_(ht.internalFormat,ut,K,ht.normalized,ht.colorSpace);Zt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),Q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(C,v,B){let G=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v.depthTexture);let ft=r.convert(v.depthTexture.format),Nt=r.convert(v.depthTexture.type),_t;v.depthTexture.format===In?_t=i.DEPTH_COMPONENT24:v.depthTexture.format===Ei&&(_t=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,_t,v.width,v.height,0,ft,Nt,null)}}else it(v.depthTexture,0);let ht=Z.__webglTexture,ut=qt(v),K=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Q=v.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===In)Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ht,0);else if(v.depthTexture.format===Ei)Zt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,ht,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){let v=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",Z)};G.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=G}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)fe(v.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?fe(v.__webglFramebuffer[0],C,0):fe(v.__webglFramebuffer,C,0)}else if(B){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),Xt(v.__webglDepthbuffer[G],C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Xt(v.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,v,B){let G=n.get(C);v!==void 0&&wt(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&et(C)}function ot(C){let v=C.texture,B=n.get(C),G=n.get(v);C.addEventListener("dispose",y);let Z=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,a.memory.textures++),ht){B.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[K]=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[K][Q]=i.createFramebuffer()}else B.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)B.__webglFramebuffer[K]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let K=0,Q=Z.length;K<Q;K++){let ft=n.get(Z[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Zt(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let Q=Z[K];B.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[K]);let ft=r.convert(Q.format,Q.colorSpace),Nt=r.convert(Q.type),_t=_(Q.internalFormat,ft,Nt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),pt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,_t,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,B.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),ee(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)wt(B.__webglFramebuffer[K][Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else wt(B.__webglFramebuffer[K],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let K=0,Q=Z.length;K<Q;K++){let ft=Z[K],Nt=n.get(ft),_t=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Nt.__webglTexture),ee(_t,ft),wt(B.__webglFramebuffer,C,ft,i.COLOR_ATTACHMENT0+K,_t,0),m(ft)&&M(_t)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),ee(K,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)wt(B.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,K,Q);else wt(B.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,K,0);m(v)&&M(K),e.unbindTexture()}C.depthBuffer&&et(C)}function lt(C){let v=C.textures;for(let B=0,G=v.length;B<G;B++){let Z=v[B];if(m(Z)){let ht=b(C),ut=n.get(Z).__webglTexture;e.bindTexture(ht,ut),M(ht),e.unbindTexture()}}}let dt=[],Bt=[];function Ot(C){if(C.samples>0){if(Zt(C)===!1){let v=C.textures,B=C.width,G=C.height,Z=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(C),K=v.length>1;if(K)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Nt=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,B,G,0,0,B,G,Z,i.NEAREST),l===!0&&(dt.length=0,Bt.length=0,dt.push(i.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Bt.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let Nt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(C){let v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ce(C,v){let B=C.colorSpace,G=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==fr&&B!==ii&&(se.getTransfer(B)===de?(G!==fn||Z!==Qe)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",B)),v}function ne(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=O,this.setTexture2D=it,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=nt,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Z_(i,t){function e(n,s=ii){let r,a=se.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Bs)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===fn)return i.RGBA;if(n===In)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Po)return i.RED;if(n===Io)return i.RED_INTEGER;if(n===Ti)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Zr||n===Kr||n===Jr||n===$r)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===No||n===Uo||n===Fo||n===Oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===No)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo||n===Bo||n===ko||n===Ho||n===Vo||n===Qr||n===Go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zo||n===Bo)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ho)return r.COMPRESSED_R11_EAC;if(n===Vo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qr)return r.COMPRESSED_RG11_EAC;if(n===Go)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Ko||n===Jo||n===$o||n===Qo||n===jo||n===tl||n===el||n===nl||n===il)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ll||n===jr||n===cl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Er(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:K_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding!="undefined",g=new vh,m={},M=e.getContextAttributes(),b=null,_=null,S=[],w=[],A=new rt,y=null,T=null,R=new Be;R.viewport=new we;let I=new Be;I.viewport=new we;let N=[R,I],z=new Mo,L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new Ts,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new Ts,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new Ts,S[J]=tt),tt.getHandSpace()};function W(J){let tt=w.indexOf(J.inputSource);if(tt===-1)return;let vt=S[tt];vt!==void 0&&(vt.update(J.inputSource,J.frame,c||a),vt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",it);for(let J=0;J<S.length;J++){let tt=w[J];tt!==null&&(w[J]=null,S[J].disconnect(tt))}L=null,O=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(b),f=null,u=null,d=null,s=null,_=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",it),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Wt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=M.stencil?Ei:In,Wt=M.stencil?ks:bn);let Xt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new $e(u.textureWidth,u.textureHeight,{format:fn,type:Qe,depthTexture:new gi(u.textureWidth,u.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let vt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new $e(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function it(J){for(let tt=0;tt<J.removed.length;tt++){let vt=J.removed[tt],Wt=w.indexOf(vt);Wt>=0&&(w[Wt]=null,S[Wt].disconnect(vt))}for(let tt=0;tt<J.added.length;tt++){let vt=J.added[tt],Wt=w.indexOf(vt);if(Wt===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=w.length){w.push(vt),Wt=Xt;break}else if(w[Xt]===null){w[Xt]=vt,Wt=Xt;break}if(Wt===-1)break}let wt=S[Wt];wt&&wt.connect(vt)}}let Y=new P,j=new P;function nt(J,tt,vt){Y.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(vt.matrixWorld);let Wt=Y.distanceTo(j),wt=tt.projectionMatrix.elements,Xt=vt.projectionMatrix.elements,fe=wt[14]/(wt[10]-1),et=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],ot=(wt[9]-1)/wt[5],lt=(wt[8]-1)/wt[0],dt=(Xt[8]+1)/Xt[0],Bt=fe*lt,Ot=fe*dt,qt=Wt/(-lt+dt),Zt=qt*-lt;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Zt),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),wt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let D=fe+qt,ce=et+qt,ne=Bt-Zt,C=Ot+(Wt-Zt),v=at*et/ce*D,B=ot*et/ce*D;J.projectionMatrix.makePerspective(ne,C,v,B,D,ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Dt(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let tt=J.near,vt=J.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(vt=g.depthFar)),z.near=I.near=R.near=tt,z.far=I.far=R.far=vt,(L!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,O=z.far),z.layers.mask=J.layers.mask|6,R.layers.mask=z.layers.mask&-5,I.layers.mask=z.layers.mask&-3;let Wt=J.parent,wt=z.cameras;Dt(z,Wt);for(let Xt=0;Xt<wt.length;Xt++)Dt(wt[Xt],Wt);wt.length===2?nt(z,R,I):z.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),At(J,z,Wt)};function At(J,tt,vt){vt===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(vt.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=bs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(J){return m[J]};let le=null;function ee(J,tt){if(h=tt.getViewerPose(c||a),p=tt,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Wt=!1;vt.length!==z.cameras.length&&(z.cameras.length=0,Wt=!0);for(let et=0;et<vt.length;et++){let at=vt[et],ot=null;if(f!==null)ot=f.getViewport(at);else{let dt=d.getViewSubImage(u,at);ot=dt.viewport,et===0&&(t.setRenderTargetTextures(_,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(_))}let lt=N[et];lt===void 0&&(lt=new Be,lt.layers.enable(et),lt.viewport=new we,N[et]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),et===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Wt===!0&&z.cameras.push(lt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let et=d.getDepthInformation(vt[0]);et&&et.isValid&&et.texture&&g.init(et,s.renderState)}if(wt&&wt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let et=0;et<vt.length;et++){let at=vt[et].camera;if(at){let ot=m[at];ot||(ot=new Er,m[at]=ot);let lt=d.getCameraImage(at);ot.sourceTexture=lt}}}}for(let vt=0;vt<S.length;vt++){let Wt=w[vt],wt=S[vt];Wt!==null&&wt!==void 0&&wt.update(Wt,tt,c||a)}le&&le(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let ae=new Hd;ae.setAnimationLoop(ee),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}},$_=new te,Yd=new Yt;Yd.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Qc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,_){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===De&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===De&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,_=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4($_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===De&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let w=S.program;n.uniformBlockBinding(_,w)}function c(_,S){let w=s[_.id];w===void 0&&(g(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let A=S.program;n.updateUBOMapping(_,A);let y=t.render.frame;r[_.id]!==y&&(u(_),r[_.id]=y)}function h(_){let S=d();_.__bindingPointIndex=S;let w=i.createBuffer(),A=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,w),w}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,T=w.length;y<T;y++){let R=w[y];if(Array.isArray(R))for(let I=0,N=R.length;I<N;I++)f(R[I],y,I,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,S,w,A){if(x(_,S,w,A)===!0){let y=_.__offset,T=_.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let N=T[I],z=m(N);p(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function p(_,S,w){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,w)}function x(_,S,w,A){let y=_.value,T=S+"_"+w;if(A[T]===void 0)return typeof y=="number"||typeof y=="boolean"?A[T]=y:ArrayBuffer.isView(y)?A[T]=y.slice():A[T]=y.clone(),!0;{let R=A[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(_){let S=_.uniforms,w=0,A=16;for(let T=0,R=S.length;T<R;T++){let I=Array.isArray(S[T])?S[T]:[S[T]];for(let N=0,z=I.length;N<z;N++){let L=I[N],O=Array.isArray(L.value)?L.value:[L.value];for(let W=0,V=O.length;W<V;W++){let it=O[W],Y=m(it),j=w%A,nt=j%Y.boundary,Dt=j+nt;w+=nt,Dt!==0&&A-Dt<Y.storage&&(w+=A-Dt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=Y.storage}}}let y=w%A;return y>0&&(w+=A-y),_.__size=w,_.__cache={},this}function m(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",_),S}function M(_){let S=_.target;S.removeEventListener("dispose",M);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function ey(){return On===null&&(On=new Sr(ty,16,16,Ti,wn),On.name="DFG_LUT",On.minFilter=ke,On.magFilter=ke,On.wrapS=Cn,On.wrapT=Cn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var gl=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Qe}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([Do,Lo,Io]),m=new Set([Qe,bn,Bs,ks,Ro,Co]),M=new Uint32Array(4),b=new Int32Array(4),_=new P,S=null,w=null,A=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,N=null,z=null,L=null,O=null;this._outputColorSpace=ze;let W=0,V=0,it=null,Y=-1,j=null,nt=new we,Dt=new we,At=null,le=new zt(0),ee=0,ae=e.width,J=e.height,tt=1,vt=null,Wt=null,wt=new we(0,0,ae,J),Xt=new we(0,0,ae,J),fe=!1,et=new Ps,at=!1,ot=!1,lt=new te,dt=new P,Bt=new we,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Zt(){return it===null?tt:1}let D=n;function ce(E,U){return e.getContext(E,U)}let ne,C,v,B,G,Z,ht,ut,K,Q,ft,Nt,_t,pt,Ut,kt,Kt,F,mt,$,gt,bt,st;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",pn,!1),D===null){let U="webgl2";if(D=ce(U,E),D===null)throw ce(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(E){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Ht("WebGLRenderer: "+E.message),E}function Ft(){ne=new lx(D),ne.init(),gt=new Z_(D,ne),C=new Qg(D,ne,t,gt),v=new q_(D,ne),C.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),z=D.createFramebuffer(),L=D.createFramebuffer(),O=D.createFramebuffer(),B=new ux(D),G=new L_,Z=new Y_(D,ne,v,G,C,gt,B),ht=new ox(R),ut=new fm(D),bt=new Jg(D,ut),K=new cx(D,ut,B,bt),Q=new fx(D,K,ut,bt,B),F=new dx(D,C,Z),Ut=new jg(G),ft=new I_(R,ht,ne,C,bt,Ut),Nt=new Q_(R,G),_t=new N_,pt=new k_(ne),Kt=new Kg(R,ht,v,Q,p,l),kt=new X_(R,Q,C),st=new j_(D,B,C,v),mt=new $g(D,ne,B),$=new hx(D,ne,B),B.programs=ft.programs,R.capabilities=C,R.extensions=ne,R.properties=G,R.renderLists=_t,R.shadowMap=kt,R.state=v,R.info=B}x!==Qe&&(T=new mx(x,e.width,e.height,o,s,r));let It=new Mh(R,D);this.xr=It,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(ae,J,!1))},this.getSize=function(E){return E.set(ae,J)},this.setSize=function(E,U,X=!0){if(It.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=E,J=U,e.width=Math.floor(E*tt),e.height=Math.floor(U*tt),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ae*tt,J*tt).floor()},this.setDrawingBufferSize=function(E,U,X){ae=E,J=U,tt=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===Qe){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(nt)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,X,k){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,X,k),v.viewport(nt.copy(wt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,U,X,k){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,U,X,k),v.scissor(Dt.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){v.setScissorTest(fe=E)},this.setOpaqueSort=function(E){vt=E},this.setTransparentSort=function(E){Wt=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let k=0;if(E){let H=!1;if(it!==null){let St=it.texture.format;H=g.has(St)}if(H){let St=it.texture.type,Tt=m.has(St),Mt=Kt.getClearColor(),Rt=Kt.getClearAlpha(),Lt=Mt.r,Jt=Mt.g,ie=Mt.b;Tt?(M[0]=Lt,M[1]=Jt,M[2]=ie,M[3]=Rt,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=Lt,b[1]=Jt,b[2]=ie,b[3]=Rt,D.clearBufferiv(D.COLOR,0,b))}else k|=D.COLOR_BUFFER_BIT}U&&(k|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",pn,!1),Kt.dispose(),_t.dispose(),pt.dispose(),G.dispose(),ht.dispose(),Q.dispose(),bt.dispose(),st.dispose(),ft.dispose(),It.dispose(),It.removeEventListener("sessionstart",zh),It.removeEventListener("sessionend",Bh),Li.stop()};function ye(E){E.preventDefault(),gr("WebGLRenderer: Context Lost."),I=!0}function he(){gr("WebGLRenderer: Context Restored."),I=!1;let E=B.autoReset,U=kt.enabled,X=kt.autoUpdate,k=kt.needsUpdate,H=kt.type;Ft(),B.autoReset=E,kt.enabled=U,kt.autoUpdate=X,kt.needsUpdate=k,kt.type=H}function pn(E){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tn(E){let U=E.target;U.removeEventListener("dispose",Tn),Df(U)}function Df(E){Nf(E),G.remove(E)}function Nf(E){let U=G.get(E).programs;U!==void 0&&(U.forEach(function(X){ft.releaseProgram(X)}),E.isShaderMaterial&&ft.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,k,H,St){U===null&&(U=Ot);let Tt=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=Of(E,U,X,k,H);v.setMaterial(k,Tt);let Rt=X.index,Lt=1;if(k.wireframe===!0){if(Rt=K.getWireframeAttribute(X),Rt===void 0)return;Lt=2}let Jt=X.drawRange,ie=X.attributes.position,Ct=Jt.start*Lt,ue=(Jt.start+Jt.count)*Lt;St!==null&&(Ct=Math.max(Ct,St.start*Lt),ue=Math.min(ue,(St.start+St.count)*Lt)),Rt!==null?(Ct=Math.max(Ct,0),ue=Math.min(ue,Rt.count)):ie!=null&&(Ct=Math.max(Ct,0),ue=Math.min(ue,ie.count));let Ce=ue-Ct;if(Ce<0||Ce===1/0)return;bt.setup(H,k,Mt,X,Rt);let Se,xe=mt;if(Rt!==null&&(Se=ut.get(Rt),xe=$,xe.setIndex(Se)),H.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*Zt()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(H.isLine){let He=k.linewidth;He===void 0&&(He=1),v.setLineWidth(He*Zt()),H.isLineSegments?xe.setMode(D.LINES):H.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else H.isPoints?xe.setMode(D.POINTS):H.isSprite&&xe.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))xe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let He=H._multiDrawStarts,Et=H._multiDrawCounts,qe=H._multiDrawCount,oe=Rt?ut.get(Rt).bytesPerElement:1,cn=G.get(k).currentProgram.getUniforms();for(let An=0;An<qe;An++)cn.setValue(D,"_gl_DrawID",An),xe.render(He[An]/oe,Et[An])}else if(H.isInstancedMesh)xe.renderInstances(Ct,Ce,H.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,He);xe.renderInstances(Ct,Ce,Et)}else xe.render(Ct,Ce)};function Oh(E,U,X,k){N!==null&&E.isNodeMaterial&&N.setObject(k,E),at===!0&&Ut.setState(E,X,!1),E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,ha(E,U,k),E.side=Si,E.needsUpdate=!0,ha(E,U,k),E.side=on):ha(E,U,k)}this.compile=function(E,U,X=null){X===null&&(X=E),N!==null&&N.renderStart(E,U,X),w=pt.get(X),w.init(U),y.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==X&&E.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,ot),at===!0&&Ut.setGlobalState(this.clippingPlanes,U),N!==null&&kt.render(w.state.shadowsArray,X,U);let k=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let Tt=0;Tt<St.length;Tt++){let Mt=St[Tt];Oh(Mt,X,U,H),k.add(Mt)}else Oh(St,X,U,H),k.add(St)}),w=y.pop(),N!==null&&N.renderEnd(),k},this.compileAsync=function(E,U,X=null){let k=this.compile(E,U,X);return new Promise(H=>{function St(){if(k.forEach(function(Tt){let Rt=G.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&k.delete(Tt)}),k.size===0){H(E);return}setTimeout(St,10)}ne.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Hl=null;function Uf(E){Hl&&Hl(E)}function zh(){Li.stop()}function Bh(){Li.start()}let Li=new Hd;Li.setAnimationLoop(Uf),typeof self!="undefined"&&Li.setContext(self),this.setAnimationLoop=function(E){Hl=E,It.setAnimationLoop(E),E===null?Li.stop():Li.start()},It.addEventListener("sessionstart",zh),It.addEventListener("sessionend",Bh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,U);let X=It.enabled===!0&&It.isPresenting===!0,k=T!==null&&(it===null||X)&&T.begin(R,it);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,it),w=pt.get(E,y.length),w.init(U),w.state.textureUnits=Z.getTextureUnits(),y.push(w),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),et.setFromProjectionMatrix(lt,vn,U.reversedDepth),ot=this.localClippingEnabled,at=Ut.init(this.clippingPlanes,ot),S=_t.get(E,A.length),S.init(),A.push(S),It.enabled===!0&&It.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&Vl(Tt,U,-1/0,R.sortObjects)}Vl(E,U,0,R.sortObjects),S.finish(),N!==null&&N.updateLights(w.state.lightsArray),R.sortObjects===!0&&S.sort(vt,Wt),qt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,qt&&Kt.addToRenderList(S,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ut.beginShadows();let H=w.state.shadowsArray;if(kt.render(H,E,U),at===!0&&Ut.endShadows(),(k&&T.hasRenderPass())===!1){let Tt=S.opaque,Mt=S.transmissive;if(w.setupLights(),U.isArrayCamera){let Rt=U.cameras;if(Mt.length>0)for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let ie=Rt[Lt];Hh(Tt,Mt,E,ie)}qt&&Kt.render(E);for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let ie=Rt[Lt];kh(S,E,ie,ie.viewport)}}else Mt.length>0&&Hh(Tt,Mt,E,U),qt&&Kt.render(E),kh(S,E,U)}it!==null&&V===0&&(Z.updateMultisampleRenderTarget(it),Z.updateRenderTargetMipmap(it)),k&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),bt.resetDefaultState(),Y=-1,j=null,y.pop(),y.length>0?(w=y[y.length-1],Z.setTextureUnits(w.state.textureUnits),at===!0&&Ut.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function Vl(E,U,X,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(et)){k&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let Tt=Q.update(E),Mt=E.material;Mt.visible&&S.push(E,Tt,Mt,X,Bt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(et))){let Tt=Q.update(E),Mt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Bt.copy(Tt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){let Rt=Tt.groups;for(let Lt=0,Jt=Rt.length;Lt<Jt;Lt++){let ie=Rt[Lt],Ct=Mt[ie.materialIndex];Ct&&Ct.visible&&S.push(E,Tt,Ct,X,Bt.z,ie,U)}}else Mt.visible&&S.push(E,Tt,Mt,X,Bt.z,null,U)}}let St=E.children;for(let Tt=0,Mt=St.length;Tt<Mt;Tt++)Vl(St[Tt],U,X,k)}function kh(E,U,X,k){let{opaque:H,transmissive:St,transparent:Tt}=E;w.setupLightsView(X),at===!0&&Ut.setGlobalState(R.clippingPlanes,X),k&&v.viewport(nt.copy(k)),H.length>0&&ca(H,U,X),St.length>0&&ca(St,U,X),Tt.length>0&&ca(Tt,U,X),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Hh(E,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Ct=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new $e(1,1,{generateMipmaps:!0,type:Ct?wn:Qe,minFilter:wi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let St=w.state.transmissionRenderTarget[k.id],Tt=k.viewport||nt;St.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Lt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(le),ee=R.getClearAlpha(),ee<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Kt.render(X);let Jt=R.toneMapping;R.toneMapping=Sn;let ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),at===!0&&Ut.setGlobalState(R.clippingPlanes,k),ca(E,X,k),Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let ue=0,Ce=U.length;ue<Ce;ue++){let Se=U[ue],{object:xe,geometry:He,material:Et,group:qe}=Se;if(Et.side===on&&xe.layers.test(k.layers)){let oe=Et.side;Et.side=De,Et.needsUpdate=!0,Vh(xe,X,k,He,Et,qe),Et.side=oe,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,Rt,Lt),R.setClearColor(le,ee),ie!==void 0&&(k.viewport=ie),R.toneMapping=Jt}function ca(E,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let H=0,St=E.length;H<St;H++){let Tt=E[H],{object:Mt,geometry:Rt,group:Lt}=Tt,Jt=Tt.material;Jt.allowOverride===!0&&k!==null&&(Jt=k),Mt.layers.test(X.layers)&&Vh(Mt,U,X,Rt,Jt,Lt)}}function Vh(E,U,X,k,H,St){N!==null&&H.isNodeMaterial&&N.setObject(E,H),E.onBeforeRender(R,U,X,k,H,St),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(R,U,X,k,E,St),H.transparent===!0&&H.side===on&&H.forceSinglePass===!1?(H.side=De,H.needsUpdate=!0,R.renderBufferDirect(X,U,k,H,E,St),H.side=Si,H.needsUpdate=!0,R.renderBufferDirect(X,U,k,H,E,St),H.side=on):R.renderBufferDirect(X,U,k,H,E,St),E.onAfterRender(R,U,X,k,H,St)}function ha(E,U,X){U.isScene!==!0&&(U=Ot);let k=G.get(E),H=w.state.lights,St=w.state.shadowsArray,Tt=H.state.version,Mt=ft.getParameters(E,H.state,St,U,X,w.state.lightProbeGridArray),Rt=ft.getProgramCacheKey(Mt),Lt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let Jt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=ht.get(E.envMap||k.environment,Jt),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Tn),Lt=new Map,k.programs=Lt);let ie=Lt.get(Rt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===Tt)return Wh(E,Mt),ie}else Mt.uniforms=ft.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,X,Mt),E.onBeforeCompile(Mt,R),ie=ft.acquireProgram(Mt,Rt),Lt.set(Rt,ie),k.uniforms=Mt.uniforms;let Ct=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ct.clippingPlanes=Ut.uniform),Wh(E,Mt),k.needsLights=Bf(E),k.lightsStateVersion=Tt,k.needsLights&&(Ct.ambientLightColor.value=H.state.ambient,Ct.lightProbe.value=H.state.probe,Ct.sunLights.value=H.state.sun,Ct.sunLightShadows.value=H.state.sunShadow,Ct.directionalLights.value=H.state.directional,Ct.directionalLightShadows.value=H.state.directionalShadow,Ct.spotLights.value=H.state.spot,Ct.spotLightShadows.value=H.state.spotShadow,Ct.rectAreaLights.value=H.state.rectArea,Ct.ltc_1.value=H.state.rectAreaLTC1,Ct.ltc_2.value=H.state.rectAreaLTC2,Ct.pointLights.value=H.state.point,Ct.pointLightShadows.value=H.state.pointShadow,Ct.hemisphereLights.value=H.state.hemi,Ct.sunShadowMatrix.value=H.state.sunShadowMatrix,Ct.sunShadowCascade.value=H.state.sunShadowCascade,Ct.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ct.spotLightMatrix.value=H.state.spotLightMatrix,Ct.spotLightMap.value=H.state.spotLightMap,Ct.pointShadowMatrix.value=H.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=ie,k.uniformsList=null,ie}function Gh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=Ws.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Wh(E,U){let X=G.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Ff(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let X=0,k=E.length;X<k;X++){let H=E[X];if(H.texture!==null&&H.boundingBox.containsPoint(_))return H}return null}function Of(E,U,X,k,H){U.isScene!==!0&&(U=Ot),Z.resetTextureUnits();let St=U.fog,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,Mt=it===null?R.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:se.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Lt=ht.get(k.envMap||Tt,Rt),Jt=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ie=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color,Se=Sn;k.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Se=R.toneMapping);let xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=xe!==void 0?xe.length:0,Et=G.get(k),qe=w.state.lights;if(at===!0&&(ot===!0||E!==j)){let ve=E===j&&k.id===Y;Ut.setState(k,E,ve)}let oe=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==qe.state.version||Et.outputColorSpace!==Mt||H.isBatchedMesh&&Et.batching===!1||!H.isBatchedMesh&&Et.batching===!0||H.isBatchedMesh&&Et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Et.instancing===!1||!H.isInstancedMesh&&Et.instancing===!0||H.isSkinnedMesh&&Et.skinning===!1||!H.isSkinnedMesh&&Et.skinning===!0||H.isInstancedMesh&&Et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Et.instancingMorph===!1&&H.morphTexture!==null||Et.envMap!==Lt||k.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Ut.numPlanes||Et.numIntersection!==Ut.numIntersection)||Et.vertexAlphas!==Jt||Et.vertexTangents!==ie||Et.morphTargets!==Ct||Et.morphNormals!==ue||Et.morphColors!==Ce||Et.toneMapping!==Se||Et.morphTargetsCount!==He||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Et.__version=k.version);let cn=Et.currentProgram;oe===!0&&(cn=ha(k,U,H),N&&k.isNodeMaterial&&N.onUpdateProgram(k,cn,Et));let An=!1,oi=!1,ji=!1,me=cn.getUniforms(),Re=Et.uniforms;if(v.useProgram(cn.program)&&(An=!0,oi=!0,ji=!0),k.id!==Y&&(Y=k.id,oi=!0),Et.needsLights){let ve=Ff(w.state.lightProbeGridArray,H);Et.lightProbeGrid!==ve&&(Et.lightProbeGrid=ve,oi=!0)}if(An||j!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(D,"projectionMatrix",E.projectionMatrix),me.setValue(D,"viewMatrix",E.matrixWorldInverse);let ci=me.map.cameraPosition;ci!==void 0&&ci.setValue(D,dt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,oi=!0,ji=!0)}if(Et.needsLights&&(qe.state.sunShadowMap.length>0&&me.setValue(D,"sunShadowMap",qe.state.sunShadowMap,Z),qe.state.directionalShadowMap.length>0&&me.setValue(D,"directionalShadowMap",qe.state.directionalShadowMap,Z),qe.state.spotShadowMap.length>0&&me.setValue(D,"spotShadowMap",qe.state.spotShadowMap,Z),qe.state.pointShadowMap.length>0&&me.setValue(D,"pointShadowMap",qe.state.pointShadowMap,Z)),H.isSkinnedMesh){me.setOptional(D,H,"bindMatrix"),me.setOptional(D,H,"bindMatrixInverse");let ve=H.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),me.setValue(D,"boneTexture",ve.boneTexture,Z))}H.isBatchedMesh&&(me.setOptional(D,H,"batchingTexture"),me.setValue(D,"batchingTexture",H._matricesTexture,Z),me.setOptional(D,H,"batchingIdTexture"),me.setValue(D,"batchingIdTexture",H._indirectTexture,Z),me.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&me.setValue(D,"batchingColorTexture",H._colorsTexture,Z));let li=X.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&F.update(H,X,cn),(oi||Et.receiveShadow!==H.receiveShadow)&&(Et.receiveShadow=H.receiveShadow,me.setValue(D,"receiveShadow",H.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Re.envMapIntensity.value=U.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=ey()),oi){if(me.setValue(D,"toneMappingExposure",R.toneMappingExposure),Et.needsLights&&zf(Re,ji),St&&k.fog===!0&&Nt.refreshFogUniforms(Re,St),Nt.refreshMaterialUniforms(Re,k,tt,J,w.state.transmissionRenderTarget[E.id]),Et.needsLights&&Et.lightProbeGrid){let ve=Et.lightProbeGrid;Re.probesSH.value=ve.texture,Re.probesMin.value.copy(ve.boundingBox.min),Re.probesMax.value.copy(ve.boundingBox.max),Re.probesResolution.value.copy(ve.resolution)}Ws.upload(D,Gh(Et),Re,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ws.upload(D,Gh(Et),Re,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(D,"center",H.center),me.setValue(D,"modelViewMatrix",H.modelViewMatrix),me.setValue(D,"normalMatrix",H.normalMatrix),me.setValue(D,"modelMatrix",H.matrixWorld),k.uniformsGroups!==void 0){let ve=k.uniformsGroups;for(let ci=0,ts=ve.length;ci<ts;ci++){let qh=ve[ci];st.update(qh,cn),st.bind(qh,cn)}}return cn}function zf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Bf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(E,U,X){let k=G.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=U,G.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=G.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){it=E,W=U,V=X;let k=null,H=!1,St=!1;if(E){let Mt=G.get(E);if(Mt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,Mt.__webglFramebuffer),nt.copy(E.viewport),Dt.copy(E.scissor),At=E.scissorTest,v.viewport(nt),v.scissor(Dt),v.setScissorTest(At),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Mt.__hasExternalTextures)Z.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Jt=E.depthTexture;if(Mt.__boundDepthTexture!==Jt){if(Jt!==null&&G.has(Jt)&&(E.width!==Jt.image.width||E.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Lt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?k=Lt[U][X]:k=Lt[U],H=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?k=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?k=Lt[X]:k=Lt,nt.copy(E.viewport),Dt.copy(E.scissor),At=E.scissorTest}else nt.copy(wt).multiplyScalar(tt).floor(),Dt.copy(Xt).multiplyScalar(tt).floor(),At=fe;if(X!==0&&(k=z),v.bindFramebuffer(D.FRAMEBUFFER,k)&&v.drawBuffers(E,k),v.viewport(nt),v.scissor(Dt),v.setScissorTest(At),H){let Mt=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,X)}else if(St){let Mt=U;for(let Rt=0;Rt<E.textures.length;Rt++){let Lt=G.get(E.textures[Rt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Rt,Lt.__webglTexture,X,Mt)}}else if(E!==null&&X!==0){let Mt=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,X)}Y=-1};function Xh(E){let U=G.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,k,H,St,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){v.bindFramebuffer(D.FRAMEBUFFER,Rt);try{let Lt=E.textures[Mt],Jt=Lt.format,ie=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let Ct=Xh(Lt);if(Ct.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&X>=0&&X<=E.height-H&&D.readPixels(U,X,k,H,gt.convert(Jt),gt.convert(ie),St)}finally{let Lt=it!==null?G.get(it).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,k,H,St,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(U>=0&&U<=E.width-k&&X>=0&&X<=E.height-H){v.bindFramebuffer(D.FRAMEBUFFER,Rt);let Lt=E.textures[Mt],Jt=Lt.format,ie=Lt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let Ct=Xh(Lt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ue),D.bufferData(D.PIXEL_PACK_BUFFER,St.byteLength,D.STREAM_READ),D.readPixels(U,X,k,H,gt.convert(Jt),gt.convert(ie),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ce=it!==null?G.get(it).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Ce);let Se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await hd(D,Se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ue),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,St),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ue),D.deleteSync(Se),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let k=Math.pow(2,-X),H=Math.floor(E.image.width*k),St=Math.floor(E.image.height*k),Tt=U!==null?U.x:0,Mt=U!==null?U.y:0;Z.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,Tt,Mt,H,St),v.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,k=null,H=0,St=0){let Tt,Mt,Rt,Lt,Jt,ie,Ct,ue,Ce,Se=E.isCompressedTexture?E.mipmaps[St]:E.image;if(X!==null)Tt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Lt=X.min.x,Jt=X.min.y,ie=X.isBox3?X.min.z:0;else{let Re=Math.pow(2,-H);Tt=Math.floor(Se.width*Re),Mt=Math.floor(Se.height*Re),E.isDataArrayTexture?Rt=Se.depth:E.isData3DTexture?Rt=Math.floor(Se.depth*Re):Rt=1,Lt=0,Jt=0,ie=0}k!==null?(Ct=k.x,ue=k.y,Ce=k.z):(Ct=0,ue=0,Ce=0);let xe=gt.convert(U.format),He=gt.convert(U.type),Et;U.isData3DTexture?(Z.setTexture3D(U,0),Et=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),Et=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),Et=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let qe=v.getParameter(D.UNPACK_ROW_LENGTH),oe=v.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=v.getParameter(D.UNPACK_SKIP_PIXELS),An=v.getParameter(D.UNPACK_SKIP_ROWS),oi=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,Se.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Lt),v.pixelStorei(D.UNPACK_SKIP_ROWS,Jt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let ji=E.isDataArrayTexture||E.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Re=G.get(E),li=G.get(U),ve=G.get(Re.__renderTarget),ci=G.get(li.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,ve.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let ts=0;ts<Rt;ts++)ji&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(E).__webglTexture,H,ie+ts),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(U).__webglTexture,St,Ce+ts)),D.blitFramebuffer(Lt,Jt,Tt,Mt,Ct,ue,Tt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||G.has(E)){let Re=G.get(E),li=G.get(U);v.bindFramebuffer(D.READ_FRAMEBUFFER,L),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ve=0;ve<Rt;ve++)ji?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,H,ie+ve):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,H),me?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,li.__webglTexture,St,Ce+ve):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,li.__webglTexture,St),H!==0?D.blitFramebuffer(Lt,Jt,Tt,Mt,Ct,ue,Tt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):me?D.copyTexSubImage3D(Et,St,Ct,ue,Ce+ve,Lt,Jt,Tt,Mt):D.copyTexSubImage2D(Et,St,Ct,ue,Lt,Jt,Tt,Mt);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Et,St,Ct,ue,Ce,Tt,Mt,Rt,xe,He,Se.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,St,Ct,ue,Ce,Tt,Mt,Rt,xe,Se.data):D.texSubImage3D(Et,St,Ct,ue,Ce,Tt,Mt,Rt,xe,He,Se):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,St,Ct,ue,Tt,Mt,xe,He,Se.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,St,Ct,ue,Se.width,Se.height,xe,Se.data):D.texSubImage2D(D.TEXTURE_2D,St,Ct,ue,Tt,Mt,xe,He,Se);v.pixelStorei(D.UNPACK_ROW_LENGTH,qe),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),v.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),v.pixelStorei(D.UNPACK_SKIP_ROWS,An),v.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),St===0&&U.generateMipmaps&&D.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){W=0,V=0,it=null,v.reset(),bt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var yl=class extends Bi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Le;t.deleteAttribute("uv");let e=new Qt({side:De}),n=new Qt,s=new Vr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Pt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ti(t,n,6),o=new Ie;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Pt(t,Zs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Pt(t,Zs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Pt(t,Zs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Pt(t,Zs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Pt(t,Zs(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Pt(t,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Zs(i){return new Or({color:0,emissive:16777215,emissiveIntensity:i})}var Zd=Math.PI*2,je=18,Gt=(i,t,e)=>i<t?t:i>e?e:i,yt=(i,t,e)=>i+(t-i)*e,ct=(i,t)=>i+Math.random()*(t-i);var vl=i=>i[Math.floor(Math.random()*i.length)];var Bn=(i,t)=>1-Math.exp(-i*t),sa=i=>1-(1-i)*(1-i),ra=i=>.5-.5*Math.cos(Math.PI*i);function Kd(i,t,e){return i<t?Math.min(i+e,t):Math.max(i-e,t)}function tn(i){return i=(i+Math.PI)%Zd,i<0&&(i+=Zd),i-Math.PI}function si(i,t,e){let n=tn(t-i);return i+Gt(n,-e,e)}function kn(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}var Ae={s:0,t:0,d2:0};function aa(i,t,e,n,s,r,a,o,l,c,h,d,u=Ae){let f=n-i,p=s-t,x=r-e,g=c-a,m=h-o,M=d-l,b=i-a,_=t-o,S=e-l,w=f*f+p*p+x*x,A=g*g+m*m+M*M,y=g*b+m*_+M*S,T,R;if(w<1e-9&&A<1e-9)T=0,R=0;else if(w<1e-9)T=0,R=Gt(y/A,0,1);else{let L=f*b+p*_+x*S;if(A<1e-9)R=0,T=Gt(-L/w,0,1);else{let O=f*g+p*m+x*M,W=w*A-O*O;T=W>1e-12?Gt((O*y-L*A)/W,0,1):0,R=(O*T+y)/A,R<0?(R=0,T=Gt(-L/w,0,1)):R>1&&(R=1,T=Gt((O-L)/w,0,1))}}let I=i+f*T-(a+g*R),N=t+p*T-(o+m*R),z=e+x*T-(l+M*R);return u.s=T,u.t=R,u.d2=I*I+N*N+z*z,u}var Ai={t:0,d2:0};function Ml(i,t,e,n,s,r,a,o,l,c=Ai){let h=a-n,d=o-s,u=l-r,f=h*h+d*d+u*u,p=f>0?Gt(((i-n)*h+(t-s)*d+(e-r)*u)/f,0,1):0,x=n+h*p-i,g=s+d*p-t,m=r+u*p-e;return c.t=p,c.d2=x*x+g*g+m*m,c}function Sh(i,t){try{let e=parseInt(localStorage.getItem(i),10);return Number.isFinite(e)?e:t}catch{return t}}function bh(i,t){try{localStorage.setItem(i,String(t))}catch{}}var Me=(()=>{let i=null,t=null,e=null,n=!1,s={};function r(){if(i){i.state==="suspended"&&i.resume();return}let h=window.AudioContext||window.webkitAudioContext;if(!h)return;try{i=new h}catch{i=null;return}t=i.createGain(),t.gain.value=.5;let d=i.createDynamicsCompressor();t.connect(d),d.connect(i.destination),e=i.createBuffer(1,i.sampleRate,i.sampleRate);let u=e.getChannelData(0);for(let f=0;f<u.length;f++)u[f]=Math.random()*2-1}function a(h,d){if(!i||n||i.state!=="running")return!1;let u=i.currentTime;return s[h]!==void 0&&u-s[h]<d?!1:(s[h]=u,!0)}function o(h,d,u,f){h.gain.setValueAtTime(1e-4,d),h.gain.exponentialRampToValueAtTime(f,d+Math.min(.012,u*.25)),h.gain.exponentialRampToValueAtTime(1e-4,d+u)}function l(h,d,u,f,p,x,g){let m=i.createBufferSource();m.buffer=e,m.loop=!0;let M=i.createBiquadFilter();M.type=u,M.Q.value=x,M.frequency.setValueAtTime(f,h),M.frequency.exponentialRampToValueAtTime(p,h+d);let b=i.createGain();o(b,h,d,g),m.connect(M),M.connect(b),b.connect(t),m.start(h,Math.random()*.8),m.stop(h+d+.05)}function c(h,d,u,f,p,x){let g=i.createOscillator();g.type=u,g.frequency.setValueAtTime(f,h),g.frequency.exponentialRampToValueAtTime(p,h+d);let m=i.createGain();o(m,h,d,x),g.connect(m),m.connect(t),g.start(h),g.stop(h+d+.05)}return{init:r,toggleMute(){return n=!n,n},get muted(){return n},swoosh(h){if(!a("swoosh",.03))return;let d=i.currentTime,u=h===2;l(d,u?.28:.16,"bandpass",u?400:700,u?2600:3400,1.4,.32)},slice(){if(!a("slice",.02))return;let h=i.currentTime;l(h,.08,"highpass",2500,7e3,.7,.3),c(h,.2,"triangle",ct(1800,2300),1100,.06),l(h+.01,.24,"lowpass",1100,180,1.2,.45)},wound(){if(!a("wound",.03))return;let h=i.currentTime;l(h,.18,"lowpass",900,150,1,.45),c(h,.12,"sine",160,60,.25)},punch(){if(!a("punch",.05))return;let h=i.currentTime;c(h,.15,"sine",140,45,.5),l(h,.1,"lowpass",1500,200,1,.35)},hurt(){if(!a("hurt",.1))return;let h=i.currentTime;c(h,.3,"sawtooth",320,90,.12)},die(){if(!a("die",.5))return;let h=i.currentTime;c(h,1,"sawtooth",240,40,.14),l(h,.6,"lowpass",800,60,1,.3)},thud(h){if(!a("thud",.06))return;let d=i.currentTime,u=Gt(h/2500,.04,.3);c(d,.12,"sine",120,45,u),l(d,.07,"lowpass",500,120,1,u*.8)},clang(){if(!a("clang",.05))return;let h=i.currentTime;c(h,.35,"square",1750,1600,.05),c(h,.3,"triangle",2650,2500,.07),l(h,.06,"highpass",4e3,8e3,1,.25)},jump(h){if(!a("jump",.05))return;let d=i.currentTime,u=h||1;c(d,.12,"sine",260*u,560*u,.07)},combo(h){if(!a("combo",.04))return;let d=i.currentTime,u=520*Math.pow(1.06,Math.min(h,24));c(d,.14,"triangle",u,u*1.5,.07)},enemySwing(){a("eswing",.05)&&l(i.currentTime,.14,"bandpass",500,1800,1.2,.18)},splash(){if(!a("splash",.1))return;let h=i.currentTime;l(h,.5,"lowpass",2400,300,.8,.4),l(h+.03,.3,"bandpass",1200,500,1,.2)},win(){if(!a("win",1))return;let h=i.currentTime;[523,659,784,1047].forEach((d,u)=>c(h+u*.09,.22,"triangle",d,d,.08))},skid(){if(!a("skid",.2))return;let h=i.currentTime;c(h,.22,"sine",ct(950,1150),720,.05),l(h,.25,"bandpass",2200,1400,2,.12)},twang(){if(!a("twang",.08))return;let h=i.currentTime;c(h,.6,"triangle",ct(170,210),70,.22),c(h,.35,"sawtooth",340,120,.05),l(h,.07,"highpass",2500,6e3,1,.35)},heal(){if(!a("heal",.2))return;let h=i.currentTime;c(h,.12,"sine",660,660,.08),c(h+.1,.18,"sine",990,990,.08)}}})();var q={HEAD:0,NECK:1,PELVIS:2,LSH:3,LELB:4,LHAND:5,RSH:6,RELB:7,RHAND:8,LHIP:9,LKNEE:10,LFOOT:11,RHIP:12,RKNEE:13,RFOOT:14},Ri=15,ny=[.5,1,1,1,.45,.8,1,.45,.8,1,.8,1.1,1,.8,1.1],iy=[.14,.07,.14,.08,.06,.06,.08,.06,.06,.09,.08,.07,.09,.08,.07],$d=.12,sy=5,ry=[[q.NECK,q.PELVIS,.17,"torso"],[q.NECK,q.HEAD,.07,"neck"],[q.NECK,q.LSH,0,"struct"],[q.NECK,q.RSH,0,"struct"],[q.LSH,q.RSH,0,"struct"],[q.PELVIS,q.LHIP,0,"struct"],[q.PELVIS,q.RHIP,0,"struct"],[q.LHIP,q.RHIP,0,"struct"],[q.LSH,q.LELB,.068,"arm"],[q.LELB,q.LHAND,.06,"arm"],[q.RSH,q.RELB,.068,"arm"],[q.RELB,q.RHAND,.06,"arm"],[q.LHIP,q.LKNEE,.092,"leg"],[q.LKNEE,q.LFOOT,.074,"leg"],[q.RHIP,q.RKNEE,.092,"leg"],[q.RKNEE,q.RFOOT,.074,"leg"]];function wh(i){return{spine:.52*i,neck:.24*i,shW:.2*i,hipW:.11*i,ua:.29*i,fa:.27*i,th:.44*i,sh:.43*i,headR:.14*i}}function Jd(i,t,e,n,s){return{x:i,y:t,z:e,px:i,py:t,pz:e,r:n,k:s,im:1,pin:!1,attached:!0,stump:!1,stumpR:0}}var ay=1,Sl=class{constructor(t,e,n){this.id=ay++,this.S=t,this.d=wh(t),this.kBase=n.k,this.cBase=n.c,this.alive=!0,this.muscle=1,this.impact=0,this.removed=!1,this.version=0,this.pts=[],this.bones=[],this.aux=[],this.comp=null,this.tgt=new Float32Array(Ri*3),this.cvx=0,this.cvy=0,this.cvz=0;for(let s=0;s<Ri;s++){let r=e[s*3],a=e[s*3+1],o=e[s*3+2];this.pts.push(Jd(r,a,o,iy[s]*t,ny[s])),this.tgt[s*3]=r,this.tgt[s*3+1]=a,this.tgt[s*3+2]=o}this.pts[q.HEAD].r=this.d.headR,this.pts[q.HEAD].im=.8,this.pts[q.PELVIS].pin=!0;for(let[s,r,a,o]of ry)this.addBone(s,r,a*t,o);this.addAux(q.LSH,q.PELVIS,!1),this.addAux(q.RSH,q.PELVIS,!1),this.addAux(q.LHIP,q.NECK,!1),this.addAux(q.RHIP,q.NECK,!1),this.addAux(q.HEAD,q.PELVIS,!0,.85),this.addAux(q.HEAD,q.LSH,!0,.9),this.addAux(q.HEAD,q.RSH,!0,.9),this.updateConnectivity()}addBone(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=s==="torso"?1:0,l=s==="torso"?0:1;this.bones.push({a:t,b:e,r:n,kind:s,sa:o,sb:l,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z),vis:s!=="struct",part:t*100+e})}addAux(t,e,n,s=1){let r=this.pts[t],a=this.pts[e];this.aux.push({a:t,b:e,min:n,len:Math.hypot(a.x-r.x,a.y-r.y,a.z-r.z)*s})}setVel(t,e,n){this.cvx=t,this.cvy=e,this.cvz=n}step(t,e,n){let s=e>0?t/e:1,r=this.pts,a=this.alive,o=a?this.muscle:0,l=this.kBase*o,c=this.cBase*Math.min(1,o*1.5),h=t*t,d=1/t,u=n.waterY;for(let p=0;p<r.length;p++){let x=r[p],g=(x.x-x.px)*s,m=(x.y-x.py)*s,M=(x.z-x.pz)*s;x.px=x.x,x.py=x.y,x.pz=x.z;let b=-je;if(x.y<u){let _=Math.exp(-4*t);g*=_,m*=_,M*=_,b+=je*Gt((u-x.y)*6,0,1.6)}else g*=.999,m*=.999,M*=.999;if(a&&x.attached&&p<Ri){let _=this.tgt[p*3],S=this.tgt[p*3+1],w=this.tgt[p*3+2];if(x.pin){x.x=_,x.y=S,x.z=w;continue}if(o>0){let A=l*x.k,y=(_-x.x)*A-(g*d-this.cvx)*c;b+=(S-x.y)*A-(m*d-this.cvy)*c;let T=(w-x.z)*A-(M*d-this.cvz)*c;x.x+=g+y*h,x.y+=m+b*h,x.z+=M+T*h;continue}}x.x+=g,x.y+=m+b*h,x.z+=M}for(let p=0;p<sy;p++){for(let x=0;x<this.bones.length;x++){let g=this.bones[x];this.solve(g.a,g.b,g.len,!1)}for(let x=0;x<this.aux.length;x++){let g=this.aux[x];this.solve(g.a,g.b,g.len,g.min)}for(let x=0;x<r.length;x++){let g=r[x],m=n.ground(g.x,g.z);g.y<m+g.r&&g.py>m-.25&&(g.y=m+g.r)}}let f=a?.7:.86;for(let p=0;p<r.length;p++){let x=r[p],g=n.ground(x.x,x.z);if(x.y>g+x.r+.002||x.py<g-.25)continue;let m=x.y-x.py;m<0&&(-m*d>this.impact&&(this.impact=-m*d),x.py=x.y+m*.2),x.px=x.x-(x.x-x.px)*f,x.pz=x.z-(x.z-x.pz)*f}}invMass(t){return this.alive&&t.pin&&t.attached?0:t.im}solve(t,e,n,s){let r=this.pts[t],a=this.pts[e],o=a.x-r.x,l=a.y-r.y,c=a.z-r.z,h=Math.sqrt(o*o+l*l+c*c);if(h<1e-7||s&&h>=n)return;let d=this.invMass(r),u=this.invMass(a),f=d+u;if(f===0)return;let p=(h-n)/(h*f);r.x+=o*p*d,r.y+=l*p*d,r.z+=c*p*d,a.x-=o*p*u,a.y-=l*p*u,a.z-=c*p*u}kill(){this.alive=!1}neighborOf(t,e=!0){for(let n of this.bones)if(!(e&&!n.vis)){if(n.a===t)return n.b;if(n.b===t)return n.a}return-1}boneWith(t){for(let e=0;e<this.bones.length;e++){let n=this.bones[e];if(n.vis&&(n.a===t||n.b===t))return e}return-1}updateConnectivity(){let t=this.pts.length,e=[];for(let o=0;o<t;o++)e.push([]);for(let o of this.bones)e[o.a].push(o.b),e[o.b].push(o.a);let n=new Int32Array(t).fill(-1),s=0,r=[];for(let o=0;o<t;o++)if(!(n[o]>=0)){for(n[o]=s,r.push(o);r.length;){let l=r.pop();for(let c of e[l])n[c]<0&&(n[c]=s,r.push(c))}s++}let a=n[q.PELVIS];for(let o=0;o<t;o++)this.pts[o].attached=n[o]===a;this.aux=this.aux.filter(o=>n[o.a]===n[o.b]),this.comp=n}compSize(t){let e=0;for(let n=0;n<this.comp.length;n++)this.comp[n]===t&&e++;return e}cut(t,e){let n=this.bones[t];e=Gt(e,.18,.82);let s=this.pts[n.a],r=this.pts[n.b],a=()=>{let f=Jd(yt(s.x,r.x,e),yt(s.y,r.y,e),yt(s.z,r.z,e),n.r*.9,0);return f.px=yt(s.px,r.px,e),f.py=yt(s.py,r.py,e),f.pz=yt(s.pz,r.pz,e),f.stump=!0,f.stumpR=n.r,f},o=this.pts.push(a())-1,l=this.pts.push(a())-1,c=yt(n.sa,n.sb,e),h=Object.assign({},n,{b:o,len:n.len*e,sb:c}),d=Object.assign({},n,{a:l,len:n.len*(1-e),sa:c});this.bones.splice(t,1,h,d),this.updateConnectivity(),this.version++;let u=this.pts[o];return{i1:o,i2:l,x:u.x,y:u.y,z:u.z,kind:n.kind}}addVel(t,e,n,s,r){for(let a=0;a<this.pts.length;a++){if(r!==void 0&&this.comp[a]!==r)continue;let o=this.pts[a];o.px-=t*s,o.py-=e*s,o.pz-=n*s}}addSpin(t,e,n,s){let r=0,a=0,o=0;for(let c of this.pts)r+=c.x,a+=c.y,o+=c.z;let l=this.pts.length;r/=l,a/=l,o/=l;for(let c of this.pts){let h=c.x-r,d=c.y-a,u=c.z-o;c.px-=(e*u-n*d)*s,c.py-=(n*h-t*u)*s,c.pz-=(t*d-e*h)*s}}bounds(t){let e=1/0,n=1/0,s=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l of this.pts)l.x-l.r<e&&(e=l.x-l.r),l.x+l.r>r&&(r=l.x+l.r),l.y-l.r<n&&(n=l.y-l.r),l.y+l.r>a&&(a=l.y+l.r),l.z-l.r<s&&(s=l.z-l.r),l.z+l.r>o&&(o=l.z+l.r);return t.x0=e,t.y0=n,t.z0=s,t.x1=r,t.y1=a,t.z1=o,t}center(){return this.pts[q.PELVIS]}};function Eh(i,t,e,n){let s=i.bones,r=i.pts,a=r[q.HEAD],o=i.d.headR;for(let l=1;l<=n;l++){let c=l/n,h=yt(t.bx,e.bx,c),d=yt(t.by,e.by,c),u=yt(t.bz,e.bz,c),f=yt(t.tx,e.tx,c),p=yt(t.ty,e.ty,c),x=yt(t.tz,e.tz,c),g=null,m=1/0;for(let M=0;M<s.length;M++){let b=s[M];if(!b.vis)continue;let _=r[b.a],S=r[b.b];aa(h,d,u,f,p,x,_.x,_.y,_.z,S.x,S.y,S.z);let w=b.r+.02;Ae.d2<w*w&&Ae.d2<m&&(m=Ae.d2,g={bone:M,u:Ae.t,t:Ae.s,x:yt(_.x,S.x,Ae.t),y:yt(_.y,S.y,Ae.t),z:yt(_.z,S.z,Ae.t),head:!1})}if(Ml(a.x,a.y,a.z,h,d,u,f,p,x),Ai.d2<o*o&&Ai.d2<m&&(g={bone:-1,u:.5,t:Ai.t,x:a.x,y:a.y,z:a.z,head:!0}),g)return g}return null}function Th(i,t,e,n,s){let r=s*s;for(let a=1;a<=n;a++){let o=a/n;if(aa(yt(i.bx,t.bx,o),yt(i.by,t.by,o),yt(i.bz,t.bz,o),yt(i.tx,t.tx,o),yt(i.ty,t.ty,o),yt(i.tz,t.tz,o),e.bx,e.by,e.bz,e.tx,e.ty,e.tz),Ae.d2<r)return{x:yt(e.bx,e.tx,Ae.t),y:yt(e.by,e.ty,Ae.t),z:yt(e.bz,e.tz,Ae.t)}}return null}var Ah=["lean","twist","side","headP","lP","lB","lS","rP","rB","rS","bob"];function Ki(){let i={};for(let t of Ah)i[t]=0;return i}function El(i,t,e,n){for(let s of Ah)i[s]=t[s]+(e[s]-t[s])*n;return i}function tf(i,t,e){for(let n of Ah)i[n]+=(t[n]-i[n])*e}var Vn={guard(i,t){return i.lean=.24,i.twist=0,i.side=0,i.headP=-.2,i.lP=.62,i.lB=1.15,i.lS=.34,i.rP=.28,i.rB=.95,i.rS=.3,i.bob=Math.sin(t*2.4)*.012,i},run(i,t){let e=Math.sin(t);return i.lean=.32,i.twist=-e*.12,i.side=0,i.headP=-.25,i.lP=.15+.75*e,i.lB=.25+1.35*Math.max(0,Math.cos(t+.5)),i.rP=.15-.75*e,i.rB=.25+1.35*Math.max(0,Math.cos(t+Math.PI+.5)),i.lS=.08,i.rS=.08,i.bob=-Math.abs(Math.cos(t))*.04+.03,i},lunge(i){return i.lean=.4,i.side=0,i.headP=-.3,i.lP=.85,i.lB=1,i.lS=.22,i.rP=-.45,i.rB=.35,i.rS=.2,i.bob=-.02,i},skid(i,t,e){let n=Math.sin(t*1.7);i.lean=.12,i.twist=0,i.side=.4*e,i.headP=-.1;let s=.25,r=.12,a=.62,o=.55+.45*n,l=1.3+.3*Math.cos(t*1.7),c=-.12;return e>0?(i.rP=s,i.rB=r,i.rS=a,i.lP=o,i.lB=l,i.lS=c):(i.lP=s,i.lB=r,i.lS=a,i.rP=o,i.rB=l,i.rS=c),i.bob=-.05,i},hop(i,t,e){let n=Math.abs(Math.sin(t));return i.lean=.3,i.twist=0,i.side=0,i.headP=-.25,i.lP=.15+(e?.25*Math.sin(t):0),i.lB=.35+(e?.5*n:0),i.lS=.05,i.rP=i.lP,i.rB=i.lB,i.rS=.05,i.bob=e?n*.13:Math.sin(t)*.01,i},stumps(i,t,e){let n=Math.sin(t);return i.lean=.5,i.twist=0,i.side=0,i.headP=-.45,i.lP=.3+(e?.7*n:0),i.lB=0,i.lS=.2,i.rP=.3-(e?.7*n:0),i.rB=0,i.rS=.2,i.bob=e?Math.abs(n)*.1:0,i},ride(i,t){return i.lean=.12,i.twist=0,i.side=0,i.headP=-.1,i.lP=.95,i.lB=1.55,i.lS=1.15,i.rP=.95,i.rB=1.55,i.rS=1.15,i.bob=Math.sin(t)*.03,i},air(i){return i.lean=.1,i.twist=0,i.side=0,i.headP=.1,i.lP=1,i.lB=1.6,i.lS=.25,i.rP=.4,i.rB=1.4,i.rS=.25,i.bob=0,i}};function Hn(i,t,e,n,s){i[t*3]=e,i[t*3+1]=n,i[t*3+2]=s}function Qd(i,t,e,n){return(n.th*Math.cos(i)+n.sh*Math.cos(i-t))*Math.cos(e)}function jd(i,t,e,n,s,r,a,o,l,c,h){let d=Math.cos(c),u=Math.sin(c),f=Math.cos(o),p=s+f*u*h.th,x=r-f*d*h.th,g=a+Math.sin(o)*h.th;Hn(i,e,p,x,g),f=Math.cos(o-l),Hn(i,n,p+f*u*h.sh,x-f*d*h.sh,g+Math.sin(o-l)*h.sh),Hn(i,t,s,r,a)}var bl=[0,0,0];function wl(i,t,e,n){let s=Math.cos(i.lean),r=Math.sin(i.lean),a=e*s-n*r,o=e*r+n*s;s=Math.cos(i.side),r=Math.sin(i.side);let l=t*s-a*r,c=t*r+a*s;return s=Math.cos(i.twist),r=Math.sin(i.twist),bl[0]=l*s+o*r,bl[1]=c,bl[2]=-l*r+o*s,bl}function Rh(i,t,e,n,s=3,r=null){let a=-i.lS,o=i.rS,l=0;s&1&&(l=Math.max(l,Qd(i.lP,i.lB,a,t))),s&2&&(l=Math.max(l,Qd(i.rP,i.rB,o,t)));let c=(r!==null?r:l+n)+i.bob;Hn(e,q.PELVIS,0,c,0);let h=wl(i,0,t.spine,0),d=h[0],u=c+h[1],f=h[2];Hn(e,q.NECK,d,u,f);let p=Math.cos(i.headP),x=Math.sin(i.headP);h=wl(i,0,t.neck*p,t.neck*x+.03*t.neck),Hn(e,q.HEAD,d+h[0],u+h[1],f+h[2]),h=wl(i,-t.shW,-.03,0),Hn(e,q.LSH,d+h[0],u+h[1],f+h[2]),h=wl(i,t.shW,-.03,0),Hn(e,q.RSH,d+h[0],u+h[1],f+h[2]);for(let[M,b,_,S]of[[q.LSH,q.LELB,q.LHAND,-1],[q.RSH,q.RELB,q.RHAND,1]]){let w=e[M*3],A=e[M*3+1],y=e[M*3+2];Hn(e,b,w+S*.04,A-t.ua,y+.05),Hn(e,_,w+S*.04,A-t.ua-t.fa*.9,y+.16)}let g=Math.cos(i.twist*.25),m=Math.sin(i.twist*.25);jd(e,q.LHIP,q.LKNEE,q.LFOOT,-t.hipW*g,c,t.hipW*m,i.lP,i.lB,a,t),jd(e,q.RHIP,q.RKNEE,q.RFOOT,t.hipW*g,c,-t.hipW*m,i.rP,i.rB,o,t)}function ef(i,t,e,n,s,r,a,o,l,c,h,d){let u=n-i,f=s-t,p=r-e,x=Math.hypot(u,f,p),g=(a+o)*.999;x<1e-5&&(u=0,f=-1,p=0,x=1e-5);let m=u/x,M=f/x,b=p/x;x>g&&(x=g);let _=(a*a-o*o+x*x)/(2*x),S=Math.sqrt(Math.max(0,a*a-_*_)),w=l*m+c*M+h*b,A=l-m*w,y=c-M*w,T=h-b*w,R=Math.hypot(A,y,T);return R<1e-5&&(A=0,y=-1,T=0,R=1),A/=R,y/=R,T/=R,d[0]=i+m*_+A*S,d[1]=t+M*_+y*S,d[2]=e+b*_+T*S,d[3]=i+m*x,d[4]=t+M*x,d[5]=e+b*x,d}var Pi=.135;function oy(i,t,e){let n=Pi,s=Pi+i*.86,r=Pi+i,a=[[t/2,n,0],[0,n,e/2],[-t/2,n,0],[0,n,-e/2]],o=a.map(([u,,f])=>[u,s,f]),l=[0,r,0],c=[],h=(u,f,p)=>c.push(...u,...f,...p);for(let u=0;u<4;u++){let f=(u+1)%4;h(a[u],o[u],o[f]),h(a[u],o[f],a[f]),h(o[u],l,o[f])}h(a[0],a[2],a[1]),h(a[0],a[3],a[2]);let d=new _e;return d.setAttribute("position",new re(c,3)),d.computeVertexNormals(),d}var Ks={};function ly(){return Ks.guard||(Ks.guard=new Qt({color:4869975,metalness:.85,roughness:.35}),Ks.grip=new Qt({color:2760989,roughness:.85})),Ks}function rf(i){let e=ly(),n=new ge,s=new Qt({color:14936302,metalness:.95,roughness:.2}),r=new Pt(oy(i,.07*1,.018*1),s),a=new Pt(new Le(.24*1,.035*1,.05*1),e.guard);a.position.y=.12*1;let o=new Pt(new Ke(.019*1,.022*1,.22*1,10),e.grip),l=new Pt(new un(.032*1,12,8),e.guard);l.position.y=-.125*1;for(let c of[r,a,o,l])c.castShadow=!0,n.add(c);return n.userData.bladeMat=s,n}function Ch(i){i.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material!==Ks.guard&&t.material!==Ks.grip&&t.material.dispose())})}var nf=new te,Ci=new P,Ji=new P,sf=new P;function Ph(i,t,e,n,s,r,a,o,l,c){Ji.set(s,r,a).normalize(),Ci.set(o,l,c),Ci.addScaledVector(Ji,-Ci.dot(Ji)),Ci.lengthSq()<1e-8&&Ci.set(1,0,0).addScaledVector(Ji,-Ji.x),Ci.normalize(),sf.crossVectors(Ci,Ji),nf.makeBasis(Ci,Ji,sf),i.quaternion.setFromRotationMatrix(nf),i.position.set(t,e,n)}var Tl=class{constructor(t,e,n,s,r,a){this.mesh=t,this.a={x:e.x,y:e.y,z:e.z,px:e.x-r.x/60,py:e.y-r.y/60,pz:e.z-r.z/60};let o=a;this.b={x:e.x+n.x*o,y:e.y+n.y*o,z:e.z+n.z*o},this.b.px=this.b.x-r.x/60+(Math.random()-.5)*.05,this.b.py=this.b.y-r.y/60-.03,this.b.pz=this.b.z-r.z/60+(Math.random()-.5)*.05,this.w={x:s.x,y:s.y,z:s.z},this.L=o,this.stuck=!1}step(t,e,n){if(this.stuck)return;let s=e>0?t/e:1;for(let o of[this.a,this.b]){let l=(o.x-o.px)*s,c=(o.y-o.py)*s,h=(o.z-o.pz)*s;o.y<n.waterY&&(l*=.9,c*=.9,h*=.9),o.px=o.x,o.py=o.y,o.pz=o.z,o.x+=l,o.y+=c-je*t*t,o.z+=h}let r=this.b,a=(r.y-r.py)/t;for(let o=0;o<3;o++){let l=this.b.x-this.a.x,c=this.b.y-this.a.y,h=this.b.z-this.a.z,d=Math.hypot(l,c,h)||1,u=(d-this.L)/(2*d);this.a.x+=l*u,this.a.y+=c*u,this.a.z+=h*u,this.b.x-=l*u,this.b.y-=c*u,this.b.z-=h*u;for(let f of[this.a,this.b]){let p=n.ground(f.x,f.z);if(f.y<p+.02&&f.py>p-.2){if(f===r&&a<-4&&(this.b.y-this.a.y)/this.L<-.55){this.stuck=!0,f.y=p-.12;return}f.y=p+.02,f.px=f.x-(f.x-f.px)*.6,f.pz=f.z-(f.z-f.pz)*.6}}}}render(){let t=this.a,e=this.b;Ph(this.mesh,t.x,t.y,t.z,e.x-t.x,e.y-t.y,e.z-t.z,this.w.x,this.w.y,this.w.z)}};var oa=[[0,.165],[.2,.162],[.45,.142],[.72,.172],[.9,.168],[1,.118]];function cy(i){for(let t=1;t<oa.length;t++){let[e,n]=oa[t];if(i<=e){let[s,r]=oa[t-1],a=(i-s)/(e-s);return r+(n-r)*(.5-.5*Math.cos(Math.PI*a))}}return oa[oa.length-1][1]}var hy={100:[.066,.06],304:[.072,.058],607:[.072,.058],405:[.058,.05],708:[.058,.05],910:[.108,.076],1213:[.108,.076],1011:[.078,.056],1314:[.078,.056]};function Ih(i,t){if(i.kind==="torso")return cy(t);let e=hy[i.part]||[i.r,i.r];return e[0]+(e[1]-e[0])*t}var af=new Map;function uy(i,t,e,n){let s=`${i.part}|${i.sa.toFixed(3)}|${i.sb.toFixed(3)}|${t}|${e?1:0}${n?1:0}`,r=af.get(s);if(r)return r;let a=i.len,o=[],l=Ih(i,i.sa)*t,c=Ih(i,i.sb)*t;if(e)for(let d=0;d<5;d++){let u=-Math.PI/2+d/5*Math.PI/2;o.push(new rt(l*Math.cos(u),l*Math.sin(u)))}else o.push(new rt(1e-4,0));let h=i.kind==="torso"?14:4;for(let d=0;d<=h;d++){let u=d/h;o.push(new rt(Ih(i,i.sa+(i.sb-i.sa)*u)*t,u*a))}if(n)for(let d=1;d<=5;d++){let u=d/5*Math.PI/2;o.push(new rt(Math.max(1e-4,c*Math.cos(u)),a+c*Math.sin(u)))}else o.push(new rt(1e-4,a));return r=new Fr(o,16),af.set(s,r),r}var Al=new un(1,22,16),dy=new un(1,12,10),fy=new Qt({color:14680092,roughness:.45,emissive:3801093}),py=new Qt({color:16777215,roughness:.25}),my=new Qt({color:1118481,roughness:.3}),of=new P(0,1,0),Js=new P,lf=new P,ln=new P,Ii=new P,Rl=new P,cf=new te;function hf(i,t,e){Ii.copy(t).addScaledVector(i,-t.dot(i)),Ii.lengthSq()<1e-8&&Ii.set(1,0,0).addScaledVector(i,-i.x),Ii.normalize(),Rl.crossVectors(Ii,i),cf.makeBasis(Ii,i,Rl),e.setFromRotationMatrix(cf)}var Cl=class{constructor(t,e){this.ch=t,this.rag=t.rag;let n=t.S;this.group=new ge,this.mat=new _i({color:e,roughness:.24,metalness:0,clearcoat:1,clearcoatRoughness:.07,emissive:0}),this.boneMeshes=new Map,this.stumpMeshes=new Map,this.version=-1,this.headGroup=new ge;let s=new Pt(Al,this.mat),r=this.rag.d.headR;s.scale.set(r*.95,r*1.12,r*1.08),s.castShadow=!0,this.headGroup.add(s),this.pupils=[];for(let a of[-1,1]){let o=new Pt(Al,py);o.scale.setScalar(.062*n),o.position.set(a*.058*n,.05*n,.105*n);let l=new Pt(dy,my);l.scale.setScalar(.027*n),l.userData.base=new P(a*.058*n,.05*n,.105*n+.05*n),l.position.copy(l.userData.base),this.headGroup.add(o,l),this.pupils.push(l)}this.group.add(this.headGroup),this.lateral=new P(1,0,0),this.headLateral=new P(1,0,0),this.pupilOff=new rt,this.pupilVel=new rt,this.prevHead=new P,this.deadLook=[new rt(ct(-1,1),ct(-1,1)),new rt(ct(-1,1),ct(-1,1))],this.extremities=[];for(let[a,o,l]of[[q.LHAND,.07,1],[q.RHAND,.07,1],[q.LFOOT,.082,.75],[q.RFOOT,.082,.75]]){let c=new Pt(Al,this.mat);c.scale.set(o*n,o*n*l,o*n*(l<1?1.35:1)),c.castShadow=!0,c.userData.idx=a,this.extremities.push(c),this.group.add(c)}this.sync()}sync(){let t=this.rag;if(this.version===t.version)return;this.version=t.version;let e=new Set;for(let n of t.bones){if(!n.vis||(e.add(n),this.boneMeshes.has(n)))continue;let s=new Pt(uy(n,this.ch.S,!t.pts[n.a].stump,!t.pts[n.b].stump),this.mat);s.castShadow=!0,n.kind==="torso"&&s.scale.set(1.15,1,.86),this.boneMeshes.set(n,s),this.group.add(s)}for(let[n,s]of this.boneMeshes)e.has(n)||(this.group.remove(s),this.boneMeshes.delete(n));t.pts.forEach((n,s)=>{if(!n.stump||this.stumpMeshes.has(s))return;let r=new Pt(Al,fy);r.userData.r=n.stumpR,this.stumpMeshes.set(s,r),this.group.add(r)})}update(t){this.sync();let e=this.rag,n=e.pts,s=this.ch,r=e.comp;Js.set(n[q.LSH].x-n[q.RSH].x,n[q.LSH].y-n[q.RSH].y,n[q.LSH].z-n[q.RSH].z),Js.lengthSq()>1e-6&&this.lateral.copy(Js).normalize(),lf.set(n[q.LHIP].x-n[q.RHIP].x,n[q.LHIP].y-n[q.RHIP].y,n[q.LHIP].z-n[q.RHIP].z).normalize();for(let[h,d]of this.boneMeshes){let u=n[h.a],f=n[h.b];ln.set(f.x-u.x,f.y-u.y,f.z-u.z);let p=ln.length();if(!(p<1e-6))if(ln.multiplyScalar(1/p),d.position.set(u.x,u.y,u.z),h.kind==="torso"){let x=r[h.a]===r[q.NECK]||r[h.b]===r[q.NECK];hf(ln,x?this.lateral:lf,d.quaternion)}else d.quaternion.setFromUnitVectors(of,ln)}let a=n[q.HEAD],o=e.neighborOf(q.HEAD);if(o>=0?ln.set(a.x-n[o].x,a.y-n[o].y,a.z-n[o].z).normalize():ln.set(0,1,0),r[q.HEAD]===r[q.LSH]&&this.headLateral.copy(this.lateral),hf(ln,this.headLateral,this.headGroup.quaternion),this.headGroup.position.set(a.x,a.y,a.z),t>0){Js.set(a.x,a.y,a.z).sub(this.prevHead).multiplyScalar(1/t),this.prevHead.set(a.x,a.y,a.z),Ii.set(1,0,0).applyQuaternion(this.headGroup.quaternion),Rl.set(0,1,0).applyQuaternion(this.headGroup.quaternion);let h=-Js.dot(Ii)*.004,d=-Js.dot(Rl)*.004,u=this.pupilOff,f=this.pupilVel;f.x+=((h-u.x)*260-f.x*10)*t,f.y+=((d-u.y)*260-f.y*10)*t,u.x=Gt(u.x+f.x*t,-.022,.022),u.y=Gt(u.y+f.y*t,-.022,.022)}let l=s.S;this.pupils.forEach((h,d)=>{let u=h.userData.base;if(s.alive)h.position.set(u.x+this.pupilOff.x*l,u.y+this.pupilOff.y*l,u.z);else{let f=this.deadLook[d];h.position.set(u.x+f.x*.02*l,u.y+f.y*.02*l,u.z-.004*l)}});for(let h of this.extremities){let d=n[h.userData.idx];h.position.set(d.x,d.y,d.z),s.alive&&h.rotation.set(0,s.yaw,0)}for(let[h,d]of this.stumpMeshes){let u=n[h],f=e.neighborOf(h);if(f<0){d.visible=!1;continue}ln.set(u.x-n[f].x,u.y-n[f].y,u.z-n[f].z).normalize();let p=d.userData.r;d.position.set(u.x+ln.x*p*.45,u.y+ln.y*p*.45,u.z+ln.z*p*.45),d.quaternion.setFromUnitVectors(of,ln),d.scale.set(p*1.06,p*.55,p*1.06)}let c=s.flash>0?.55:0;this.mat.emissive.setScalar(c)}addTo(t){t.add(this.group)}dispose(t){t.remove(this.group),this.mat.dispose()}};var gf=4.6,Il=.95,gy=-1.95,xy=1.7,uf=1.5,df=230,ff=15,pf=3.2,_y=2.2,yy=2,Lh=36,vy=5,My=6.5,mf=.07,Sy=[[0,-1],[.7,-.7],[-.7,-.7]],by=[[1,0],[-1,0]],wy={x:0,y:0,z:0},Ey=Ki(),Ty=Ki(),Ay=Ki(),Ry=Ki(),Pl=[0,0,0,0,0,0],Ll=class{constructor(t,e){this.game=t,this.isPlayer=e.team==="player",this.titan=!!e.titan,this.heavy=!!e.heavy,this.aimCtl=!this.titan,this.S=e.scale||1,this.x=e.x,this.z=e.z,this.y=0,this.gy=0,this.vx=0,this.vz=0,this.vy=0,this.slideX=0,this.slideZ=0,this.slip=0,this.slipDir=1,this.skidding=!1,this.yaw=e.yaw||0,this.faceYaw=this.yaw,this.want={x:0,z:0},this.hp=e.hp||1,this.maxHp=this.hp,this.armored=!!e.armored,this.skill=e.skill||0,this.speed=e.speed||2.5,this.alive=!0,this.falling=!1,this.hasSword=!0,this.t=ct(0,10),this.phase=0,this.flash=0,this.invuln=0,this.hurtT=0,this.kb=0,this.stun=0,this.blockT=0,this.blockUx=0,this.blockUy=0,this.counterT=0,this.swing=null,this.mount=null,this.rope=null,this.flying=!1,this.stickW={x:0,z:1,mag:0},this.aimYaw=this.yaw,this.swYaw=this.yaw,this.swW=0,this.episode=null,this.pokeCd=0,this.aimK=this.isPlayer?df:this.heavy?80:yt(150,df,this.skill),this.aimMaxW=this.isPlayer?ff:this.heavy?8:yt(12,ff,this.skill),this.aimC=1.52*Math.sqrt(this.aimK),this.aimA=this.yaw,this.plan=null,this.grudge=null,this.grudgeT=0,this.pitchAdj=0,this.state="approach",this.timer=ct(.6,1.2),this.cool=ct(.3,.9)*yt(1,.35,this.skill),this.strafeDir=Math.random()<.5?-1:1,this.deathT=0,this.d=wh(this.S),this.footR=.07*this.S,this.pose=Vn.guard(Ki(),0),this.tpose=Ki(),this.local=new Float32Array(Ri*3),this.world=new Float32Array(Ri*3),Rh(this.pose,this.d,this.local,this.footR),this.localToWorld(),this.rag=new Sl(this.S,this.world,{k:this.isPlayer?1100:850,c:this.isPlayer?30:24}),this.lg=[0,0,0],this.ld=[0,0,1],this.lw=[1,0,0],this.sw={gx:0,gy:0,gz:0,dx:0,dy:1,dz:0,wx:1,wy:0,wz:0},this.bCur={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.bPrev={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},this.swordMesh=rf(Il),this.swordMesh.scale.setScalar(this.S),this.view=new Cl(this,e.color),this.computeSword(0),this.copyBlade()}localToWorld(){let t=Math.sin(this.yaw),e=Math.cos(this.yaw),n=this.local,s=this.world;for(let r=0;r<Ri;r++){let a=n[r*3],o=n[r*3+1],l=n[r*3+2];s[r*3]=this.x-e*a+t*l,s[r*3+1]=this.y+o,s[r*3+2]=this.z+t*a+e*l}}dirToWorld(t,e,n){let s=Math.sin(this.yaw),r=Math.cos(this.yaw);e[n]=-r*t[0]+s*t[2],e[n+1]=t[1],e[n+2]=s*t[0]+r*t[2]}get legMask(){let t=this.rag.pts;return(t[q.LFOOT].attached?1:0)|(t[q.RFOOT].attached?2:0)}get forwardX(){return Math.sin(this.yaw)}get forwardZ(){return Math.cos(this.yaw)}update(t){if(this.t+=t,!!this.alive&&(this.flash=Math.max(0,this.flash-t),this.invuln=Math.max(0,this.invuln-t),this.hurtT=Math.max(0,this.hurtT-t),this.kb=Math.max(0,this.kb-t),this.stun=Math.max(0,this.stun-t),this.blockT=Math.max(0,this.blockT-t),this.counterT=Math.max(0,this.counterT-t),this.pokeCd=Math.max(0,this.pokeCd-t),this.grudgeT=Math.max(0,this.grudgeT-t),this.isPlayer?this.thinkPlayer():this.aimCtl?this.thinkEnemy(t):this.thinkTitan(t),this.aimCtl&&(this.applyStick(),this.updateAim(t)),this.mount?this.ride():this.move(t),!!this.alive)){if(this.aimCtl){let e=this.mount?2.3:yy,n=tn(this.swYaw-this.yaw);Math.abs(n)>e&&(this.mount?(this.swYaw=tn(this.yaw+Math.sign(n)*e),this.swW=0):this.yaw=this.swYaw-Math.sign(n)*e)}if(this.swing){this.swing.t+=t;let e=this.swing;e.t>=e.wind+e.dur+e.rec&&(this.swing=null)}this.rag.muscle=this.hurtT>0?.2:this.stun>0?.55:1,this.animate(t),this.skidFx(t)}}canSwing(){let t=this.swing;return this.stun>0||!this.hasSword?!1:!t||t.t>=t.wind+t.dur+t.rec*.35}startSwing(t,e,n){let s=Math.hypot(t,e)||1;t/=s,e/=s;let r=this.skill;this.swing={t:0,ux:t,uy:e,a0:gy,a1:xy,wind:n?.05:yt(.62,.24,r)*(this.counterT>0?.6:1)*1.8,dur:n?.2:.5,rec:n?.18:yt(.55,.35,r),hits:new Set,rolled:new Set,kills:0},this.game.onSwingStart(this)}swingMode(){let t=this.swing;return t?t.t<t.wind?1:t.t<t.wind+t.dur?2:3:0}get swingActive(){if(this.aimCtl)return!!this.episode;let t=this.swing;return!!t&&t.t>t.wind&&t.t<=t.wind+t.dur+.02}get curEp(){return this.aimCtl?this.episode:this.swing}thinkPlayer(){let t=this.game,e=t.input.move(),n=Math.sin(t.camYaw),s=Math.cos(t.camYaw),r=n*e.y-s*e.x,a=s*e.y+n*e.x,o=Math.hypot(r,a)||1;this.stickW.x=r/o,this.stickW.z=a/o,this.stickW.mag=e.mag}applyStick(){let t=this.stickW,e=this.legMask,n=e===3?1:e?.62:.42,s=Gt((t.mag-.4)/.45,0,1)*this.speed*n;this.want.x=t.x*s,this.want.z=t.z*s,t.mag>.18&&this.stun<=0&&(this.aimYaw=Math.atan2(t.x,t.z))}updateAim(t){let e=tn(this.aimYaw-this.swYaw);this.swW=Gt(this.swW+(this.aimK*e-this.aimC*this.swW)*t,-this.aimMaxW,this.aimMaxW),this.swYaw=tn(this.swYaw+this.swW*t),this.faceYaw=this.swYaw;let n=Math.abs(this.swW);if(this.flying=(!!this.rope||this.y-this.gy>.4)&&Math.hypot(this.vx,this.vy,this.vz)>8,(n>pf||this.flying)&&this.hasSword){let s=n>pf?Math.sign(this.swW):2;(!this.episode||this.episode.dir!==s)&&(this.episode={hits:new Set,rolled:new Set,kills:0,dir:s,ux:s===2?1:-s,uy:0},this.game.onSwingStart(this),s!==2&&n>6&&(this.isPlayer?Me.swoosh(1):Me.enemySwing()))}else n<_y&&(this.episode=null)}ride(){let t=this.mount,e=t.saddle(wy);this.x=e.x,this.y=e.y,this.z=e.z,this.vx=t.vx,this.vz=t.vz,this.vy=0,this.yaw=t.yaw,this.faceYaw=t.yaw,this.phase=t.phase}moveAir(t){let e=this.game.world,n=this.rope;if(n){let h=n.anchor(),d=h.x-this.x,u=h.y-(this.y+1.1*this.S),f=h.z-this.z,p=Math.hypot(d,u,f)||1;this.vx+=d/p*n.pull*t,this.vy+=u/p*n.pull*t,this.vz+=f/p*n.pull*t,n.t+=t,(p<n.release||n.t>n.maxT)&&(this.rope=null)}this.vy-=je*(n?.55:.9)*t;let s=Math.exp(-.3*t);this.vx*=s,this.vz*=s;let r=this.stickW;r.mag>.3&&(this.vx+=r.x*7*t,this.vz+=r.z*7*t);let a=Math.hypot(this.vx,this.vy,this.vz);a>30&&(this.vx*=30/a,this.vy*=30/a,this.vz*=30/a),this.x+=this.vx*t,this.y+=this.vy*t,this.z+=this.vz*t;let o=Math.hypot(this.x,this.z),l=e.radius-.5;o>l&&(this.x*=l/o,this.z*=l/o,this.vx*=.3,this.vz*=.3);let c=e.ground(this.x,this.z);c>-1/0&&this.y<=c&&this.vy<=0&&(this.y=c,this.gy=c,this.vy=0,this.kb=.35)}thinkEnemy(t){let e=this.game,n=this.stickW,s=e.player;this.grudge&&(this.grudgeT<=0||!this.grudge.alive)&&(this.grudge=null);let r=this.grudge||s,a=r.x-this.x,o=r.z-this.z,l=Math.hypot(a,o)||1,c=Math.atan2(a,o),h=(_,S)=>{this.aimA=tn(_),n.x=Math.sin(_),n.z=Math.cos(_),n.mag=S},d=(_,S,w)=>h(si(this.aimA,_,S*t),w);n.mag=0;let u=this.local,f=r.local,p=this.y+yt(u[q.NECK*3+1],u[q.PELVIS*3+1],.28)-.1*this.S,x=r.y+yt(f[q.NECK*3+1],f[q.PELVIS*3+1],.4),g=Gt(Math.atan2(x-p,Math.max(.8,l-.3)),-.6,.35);if(this.pitchAdj+=(g-this.pitchAdj)*Bn(6,t),e.time<.8){d(c,3,.25);return}this.timer-=t,this.cool-=t,!s.alive&&this.state!=="panic"&&(this.state="cheer");let m=this.skill,M=1.6*this.S,b=yt(2.5,5.5,m)*(this.heavy?.6:1);switch(this.state){case"approach":{let _=Math.hypot(this.vx,this.vz);if(l<M+.25+_*_*yt(.04,.09,m)){this.state="fight",d(c,b,.25);break}if(this.cool<=0&&l<M+1+_*.3&&Math.random()<t*yt(.4,2.5,m)&&this.mayAttack(r,!0)){this.startFlick(!0);break}let S=Math.atan2(-a,-o)+Gt(this.spread(r,a,o)*.45,-1,1),w=r.x+Math.sin(S)*M-this.x,A=r.z+Math.cos(S)*M-this.z;d(Math.atan2(w,A),6,.95);break}case"fight":if(l>M+.8){this.state="approach";break}d(c,b,l>M+.2?.4+.45*Gt((l-M)/1.5,.15,.6):.25),(this.counterT>0||this.cool<=0&&l<M+.35&&this.mayAttack(r))&&this.startFlick(!1);break;case"attack":this.runPlan(t,c,b);break;case"stagger":this.stun<=0&&(this.state="fight",this.plan=null,this.cool=ct(.2,.6));break;case"panic":{let _=this.x-s.x,S=this.z-s.z;h(Math.atan2(_,S),Math.min(.95,.4+.45*3.4/this.speed));break}case"cheer":this.y<=this.gy&&!this.falling&&Math.random()<t*2.2&&(this.vy=ct(3.2,4.5));break}}spread(t,e,n){let s=Math.atan2(-e,-n),r=0;for(let a of this.game.enemies){if(a===this||a===t||!a.alive||a.state==="panic")continue;let o=tn(Math.atan2(a.x-t.x,a.z-t.z)-s);Math.abs(o)<1.6&&(r-=Math.sign(o)*(1.6-Math.abs(o)))}return r*(1.2+this.skill*1.5)}mayAttack(t,e=!1){let n=this.game;if(e||Math.random()<.25+.5*this.skill){let s=Math.atan2(t.x-this.x,t.z-this.z),r=1.8*this.S;for(let a of n.enemies)if(!(a===this||a===t||!a.alive)&&!(Math.hypot(a.x-this.x,a.z-this.z)>r)&&Math.abs(tn(Math.atan2(a.x-this.x,a.z-this.z)-s))<1.6)return this.cool=ct(.25,.5),!1}return t!==n.player||n.takeAttackToken(this)}startFlick(t){let e=this.skill,n=Math.random()<.5?-1:1;if(!t&&e>.2&&!this.heavy&&Math.random()<.05+.13*e)this.plan={kind:"spin",t:0,side:n,base:this.aimA,dur:ct(.7,1.1),rec:.35};else{let s=ct(1.1,1.5),r=yt(2.3,4.2,e)*(this.heavy?.55:1)*(this.counterT>0?1.6:1);this.plan={kind:"flick",t:0,side:n,base:this.aimA,th:s,th2:Math.min(2.9-s,ct(1.2,1.5)),wind:s/r,slash:this.heavy?.45:.28,rec:.3,run:t,fired:!1}}this.counterT=0,this.state="attack"}runPlan(t,e,n){let s=this.plan,r=this.stickW;if(!s){this.state="fight";return}s.t+=t,s.base=si(s.base,e,n*t);let a=(l,c)=>{this.aimA=tn(l),r.x=Math.sin(l),r.z=Math.cos(l),r.mag=c};if(s.kind==="spin"){s.t<s.dur?a(s.base+s.side*10*s.t,.3):s.t<s.dur+s.rec?a(si(this.aimA,e,5*t),.25):this.endPlan();return}let o=s.run?.7:.3;s.t<s.wind?a(s.base+s.side*s.th*(s.t/s.wind),o):s.t<s.wind+s.slash?a(s.base-s.side*s.th2,o):s.t<s.wind+s.slash+s.rec?a(si(this.aimA,e,4*t),.25):this.endPlan()}endPlan(){this.plan=null,this.state="fight",this.cool=ct(.5,1.2)*yt(1.3,.5,this.skill)}thinkTitan(t){let e=this.game,n=e.player,s=n.x-this.x,r=n.z-this.z,a=Math.hypot(s,r)||1;if(this.want.x=0,this.want.z=0,this.faceYaw=Math.atan2(s,r),e.time<.8)return;this.timer-=t,this.cool-=t;let o=.5*this.S;switch(n.alive||(this.state="cheer"),this.state){case"approach":{let l=this.legMask,c=this.speed*(l===3?1:l?.6:.4);a>o+.2?(this.want.x=s/a*c,this.want.z=r/a*c):this.state="fight";break}case"fight":if(this.want.x=s/a*Gt((a-o)*3,-2,this.speed),this.want.z=r/a*Gt((a-o)*3,-2,this.speed),this.cool<=0&&a<o+.35+this.skill*.5&&e.takeAttackToken(this)){let[l,c]=vl(n.y>3?by:Sy);this.startSwing(l,c,!1),this.state="attack"}break;case"attack":this.swing||(this.state="fight",this.cool=ct(.5,1.3)*yt(1.3,.55,this.skill));break;case"stagger":this.stun<=0&&(this.state="fight",this.cool=ct(.2,.6));break;default:break}}move(t){let e=this.game.world,n=this.y>this.gy+.02||this.vy>.01;if(this.isPlayer&&!this.falling&&(this.rope||n)){this.moveAir(t),this.turn(t);return}let s=this.want.x,r=this.want.z;if((this.stun>0||this.hurtT>0)&&(s*=.2,r*=.2),this.kb>0||this.falling){let g=Math.exp(-5*t);this.vx*=g,this.vz*=g}else if(this.aimCtl&&!n)this.drive(s,r,t);else{let g=(n?3:14)*t,m=s-this.vx,M=r-this.vz,b=Math.hypot(m,M);b>g?(this.vx+=m/b*g,this.vz+=M/b*g):(this.vx=s,this.vz=r)}let a=e.gx,o=e.gz,l=Math.hypot(a,o);if(!n&&!this.falling&&l>mf){let g=je*.85*(l-mf)/l*t;this.slideX-=a*g,this.slideZ-=o*g}let c=Math.exp(-1.2*t);this.slideX*=c,this.slideZ*=c;let h=this.vx+this.slideX,d=this.vz+this.slideZ;if(this.falling)this.x+=h*t,this.z+=d*t;else{let g=this.x+h*t,m=this.z+d*t,M=.35*this.S;e.inside(g,m,M)||this.kb>0&&e.canFall&&!e.wallH?(this.x=g,this.z=m):this.overWall(e,h,d)?(this.x=g,this.z=m):e.clampInside(g,m,M,this)||(e.inside(g,this.z,M)?(this.x=g,this.vz=0,this.slideZ=0):e.inside(this.x,m,M)?(this.z=m,this.vx=0,this.slideX=0):(this.vx=0,this.vz=0,this.slideX=0,this.slideZ=0));let b=e.ground(this.x,this.z);b===-1/0?this.falling=!0:this.falling||(this.gy=b)}!this.falling&&this.vy<=0&&this.y<=this.gy+.12?(this.y=this.gy,this.vy=0):(this.vy-=je*t,this.y+=this.vy*t,!this.falling&&this.y<=this.gy&&(this.y=this.gy,this.vy=0)),this.falling&&this.y<this.gy-e.fallDepth&&this.game.onFell(this);let u=Math.sin(this.yaw),f=Math.cos(this.yaw),p=-h*f+d*u,x=n||this.falling?0:Gt((Math.abs(p)-.7)/2,0,1);this.slip+=(x-this.slip)*Bn(10,t),Math.abs(p)>.3&&(this.slipDir=Math.sign(p)),this.turn(t)}drive(t,e,n){let s=Math.hypot(this.vx,this.vz);if(s<.3){let m=Lh*n,M=t-this.vx,b=e-this.vz,_=Math.hypot(M,b);_>m?(this.vx+=M/_*m,this.vz+=b/_*m):(this.vx=t,this.vz=e);return}let r=Math.max(this.speed,1),a=Math.sqrt(Gt((s-.15*r)/(.55*r),0,1)),o=this.legMask===3?1:.7,l=(this.isPlayer?17:12)*o,c=yt(Lh,vy,a)*o,h=yt(Lh,My,a)*o,d=this.vx/s,u=this.vz/s,f=t*d+e*u,p=-t*u+e*d,x=Gt(f-s,-h*n,l*n),g=Gt(p,-c*n,c*n);this.vx+=d*x-u*g,this.vz+=u*x+d*g}overWall(t,e,n){if(!t.wallH)return!1;let s=Math.abs(this.x),r=Math.abs(this.z),a=s>r?Math.sign(this.x):0,o=s>r?0:Math.sign(this.z);return a*e+o*n<t.overSpeed?!1:(this.falling=!0,this.vx=e,this.vz=n,this.slideX=0,this.slideZ=0,this.vy=3,this.kb=1,!0)}turn(t){let e=this.isPlayer?8:this.titan?1.2:this.heavy?2.5:7;this.yaw=si(this.yaw,this.faceYaw,e*t);let n=this.vx+this.slideX,s=this.vz+this.slideZ,r=Math.hypot(n,s),a=n*this.forwardX+s*this.forwardZ<-.3*r?-1:1,o=this.legMask;this.phase+=(a*r+this.slip*5)*t/((o===3?uf:uf*.6)*this.S)*Math.PI*2}skidFx(t){let e=this.slip;if(e>.4&&this.y<=this.gy+.05&&Math.random()<t*45*e){let n=this.rag.pts[Math.random()<.5?q.LFOOT:q.RFOOT];n.attached&&this.game.fx.dust(n.x,n.y,n.z,-this.vx*.2,-this.vz*.2)}if(e>.55&&!this.skidding){this.skidding=!0;let n=this.game.player;(this.isPlayer||Math.hypot(n.x-this.x,n.z-this.z)<7)&&Me.skid()}else e<.3&&(this.skidding=!1)}animate(t){let e=this.tpose,n=Math.hypot(this.vx+this.slideX,this.vz+this.slideZ),s=this.legMask,r=null;if(this.mount)Vn.ride(e,this.mount.phase),r=.02;else if(this.y>this.gy+.05||this.falling)Vn.air(e,this.t);else if(s===3){let f=Gt(n/(this.isPlayer?3.2:2),0,1);El(e,Vn.guard(Ey,this.t),Vn.run(Ty,this.phase),f),e.side+=Math.sin(this.phase)*.08*f,e.headP+=Math.sin(this.phase*2)*.06*f,this.slip>.02&&El(e,e,Vn.skid(Ry,this.phase,this.slipDir),this.slip*.85)}else if(s)Vn.hop(e,this.phase,n>.5),e.side=s===1?.1:-.1;else{Vn.stumps(e,this.phase,n>.5);let f=this.rag.pts;r=f[q.LKNEE].attached&&f[q.RKNEE].attached?this.d.th*.85+.08*this.S:.3*this.S}let a=this.swingMode(),o=this.swing,l=0,c=0;if(this.aimCtl){let f=tn(this.yaw-this.swYaw);e.twist=Gt(f*.75,-1.1,1.1),e.lean+=Gt(Math.abs(this.swW)/15,0,1)*.15}else if(a){let f=p=>o.ux*Math.sin(p)*.55;if(a===1){let p=ra(o.t/o.wind);l=f(o.a0)*p,c=p*.5}else if(a===2){let p=sa((o.t-o.wind)/o.dur);l=f(yt(o.a0,o.a1,p)),c=1}else{let p=ra((o.t-o.wind-o.dur)/o.rec);l=f(o.a1)*(1-p),c=1-p}El(e,e,Vn.lunge(Ay),c*(n>1.5?.4:1)),e.twist=l,o.uy<-.5&&a===2&&(e.lean+=.25)}(this.hurtT>0||this.stun>0)&&(e.lean=-.25,e.headP=.3),this.state==="cheer"&&!this.isPlayer&&(e.lean=-.1,e.headP=-.4),tf(this.pose,e,Bn(a===2||this.aimCtl?24:12,t)),Rh(this.pose,this.d,this.local,this.footR,s,r),this.computeSword(t),this.applyArms(),this.localToWorld();let h=this.rag,d=this.world;h.tgt.set(d),h.setVel(this.vx,this.vy,this.vz);let u=this.hasSword;h.pts[q.LHAND].pin=u,h.pts[q.RHAND].pin=u}computeSword(){let t=this.local,e=this.S,n=t[q.NECK*3],s=t[q.NECK*3+1],r=t[q.NECK*3+2],a=t[q.PELVIS*3],o=t[q.PELVIS*3+1],l=t[q.PELVIS*3+2],c=yt(n,a,.28),h=yt(s,o,.28),d=yt(r,l,.28)+.1*e,u=[.38,.78,.5],f=Math.hypot(u[0],u[1],u[2]);u[0]/=f,u[1]/=f,u[2]/=f;let p=[c+.14*e,h-.16*e,d+.26*e],x=this.swing,g=this.swingMode(),m=.3*e,M=(N,z,L,O)=>{let W=Math.sin(N),V=Math.cos(N);z[0]=x.ux*W,z[1]=x.uy*W,z[2]=V,L[0]=x.ux*V,L[1]=x.uy*V,L[2]=-W,O[0]=c+z[0]*m,O[1]=h+z[1]*m,O[2]=d+z[2]*m},b=this.ld,_=this.lw,S=this.lg;if(this.aimCtl&&this.hasSword&&!(this.blockT>0&&!this.isPlayer)){let N=tn(this.yaw-this.swYaw),z=this.flying?1:Gt(Math.abs(this.swW)/7,0,1),L=yt(.45,.02,z)+Math.sin(this.phase)*.03+this.pitchAdj,O=Math.sin(N),W=Math.cos(N),V=Math.cos(L);b[0]=O*V,b[1]=Math.sin(L),b[2]=W*V,_[0]=W,_[1]=0,_[2]=-O;let it=(.33+z*.07)*e;S[0]=c+O*it,S[1]=h-.1*e,S[2]=d-.1*e+W*it}else if(this.blockT>0&&!g){Math.abs(this.blockUy)>Math.abs(this.blockUx)?(b[0]=1,b[1]=.15,b[2]=.2,S[0]=c-.3*e,S[1]=h+.38*e,S[2]=d+.22*e):(b[0]=.1,b[1]=1,b[2]=.15,S[0]=c+this.blockUx*.3*e,S[1]=h-.05*e,S[2]=d+.3*e);let N=Math.hypot(b[0],b[1],b[2]);b[0]/=N,b[1]/=N,b[2]/=N,_[0]=0,_[1]=0,_[2]=1}else if(!g||!this.hasSword)b[0]=u[0],b[1]=u[1],b[2]=u[2],_[0]=1,_[1]=0,_[2]=0,S[0]=p[0],S[1]=p[1],S[2]=p[2];else if(g===2){let N=sa((x.t-x.wind)/x.dur);M(yt(x.a0,x.a1,N),b,_,S),S[2]+=.08*e*N}else{let N=[0,0,0],z=[0,0,0],L=[0,0,0],O;g===1?(M(x.a0,N,z,L),O=1-ra(x.t/x.wind)):(M(x.a1,N,z,L),O=ra((x.t-x.wind-x.dur)/x.rec));for(let V=0;V<3;V++)b[V]=yt(N[V],u[V],O),_[V]=yt(z[V],V===0?1:0,O),S[V]=yt(L[V],p[V],O);let W=Math.hypot(b[0],b[1],b[2])||1;b[0]/=W,b[1]/=W,b[2]/=W}let w=Math.sin(this.yaw),A=Math.cos(this.yaw),y=this.sw;y.gx=this.x-A*S[0]+w*S[2],y.gy=this.y+S[1],y.gz=this.z+w*S[0]+A*S[2],y.dx=-A*b[0]+w*b[2],y.dy=b[1],y.dz=w*b[0]+A*b[2],y.wx=-A*_[0]+w*_[2],y.wy=_[1],y.wz=w*_[0]+A*_[2];let T=Pi*e,R=(Pi+Il)*e,I=this.bCur;I.bx=y.gx+y.dx*T,I.by=y.gy+y.dy*T,I.bz=y.gz+y.dz*T,I.tx=y.gx+y.dx*R,I.ty=y.gy+y.dy*R,I.tz=y.gz+y.dz*R}copyBlade(){let t=this.bCur,e=this.bPrev;e.bx=t.bx,e.by=t.by,e.bz=t.bz,e.tx=t.tx,e.ty=t.ty,e.tz=t.tz}applyArms(){if(!this.hasSword)return;let t=this.local,e=this.S,n=this.d,s=this.lg,r=this.ld,a=[[q.RSH,q.RELB,q.RHAND,.05*e,.8],[q.LSH,q.LELB,q.LHAND,-.065*e,-.8]];for(let[o,l,c,h,d]of a){let u=s[0]+r[0]*h,f=s[1]+r[1]*h,p=s[2]+r[2]*h;ef(t[o*3],t[o*3+1],t[o*3+2],u,f,p,n.ua,n.fa,d,-1,-.3,Pl),t[l*3]=Pl[0],t[l*3+1]=Pl[1],t[l*3+2]=Pl[2],t[c*3]=u,t[c*3+1]=f,t[c*3+2]=p}}checkGrip(){if(!this.hasSword)return;let t=this.rag.pts;!t[q.LHAND].attached&&!t[q.RHAND].attached&&this.game.dropSword(this)}die(){this.alive&&(this.alive=!1,this.swing=null,this.episode=null,this.plan=null,this.deathT=this.game.time,this.rag.kill(),this.hasSword&&this.game.dropSword(this))}dispose(t){this.view.dispose(t)}};function Cy(){let i=document.createElement("canvas");i.width=i.height=32;let t=i.getContext("2d");return t.fillStyle="#fff",t.beginPath(),t.arc(16,16,14,0,Math.PI*2),t.fill(),new Vi(i)}var $s=class{constructor(t,e,n){this.max=e,this.list=[],this.pos=new Float32Array(e*3),this.geo=new _e,this.attr=new Te(this.pos,3),this.attr.setUsage(Hs),this.geo.setAttribute("position",this.attr),this.geo.setDrawRange(0,0),this.points=new br(this.geo,n),this.points.frustumCulled=!1,t.add(this.points)}add(t){this.list.length>=this.max&&this.list.shift(),this.list.push(t)}flush(){let t=this.list.length;for(let e=0;e<t;e++){let n=this.list[e];this.pos[e*3]=n.x,this.pos[e*3+1]=n.y,this.pos[e*3+2]=n.z}this.geo.setDrawRange(0,t),this.attr.needsUpdate=!0}},Dl=class{constructor(t){let e=Cy();this.blood=new $s(t,2600,new ei({color:12845082,size:.05,map:e,alphaTest:.5,sizeAttenuation:!0})),this.spark=new $s(t,400,new ei({color:16773544,size:.06,map:e,alphaTest:.5,sizeAttenuation:!0})),this.water=new $s(t,600,new ei({color:16777215,size:.08,map:e,alphaTest:.5,sizeAttenuation:!0})),this.dustPool=new $s(t,500,new ei({color:15327956,size:.11,map:e,alphaTest:.5,sizeAttenuation:!0,transparent:!0,opacity:.75})),this.maxDecals=700;let n=new Tr(1,12).rotateX(-Math.PI/2),s=new Hi({color:10813462,transparent:!0,opacity:.92,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.decals=new ti(n,s,this.maxDecals),this.decals.count=0,this.decals.frustumCulled=!1,this.decals.renderOrder=1,t.add(this.decals),this.decalNext=0,this.decalTotal=0,this._m=new te,this._q=new Je,this._s=new P,this._p=new P,this.bleeders=[],this.popups=[]}clear(){this.blood.list.length=0,this.spark.list.length=0,this.water.list.length=0,this.dustPool.list.length=0,this.bleeders.length=0,this.popups.length=0,this.decals.count=0,this.decalNext=0,this.decalTotal=0}spray(t,e,n,s,r,a,o,l,c){let h=Math.hypot(s,r,a)||1,d=s/h,u=r/h,f=a/h;for(let p=0;p<o;p++){let x=c*ct(.25,1.15);this.blood.add({x:t,y:e,z:n,vx:(d+ct(-l,l))*x,vy:(u+ct(-l,l))*x+ct(0,1),vz:(f+ct(-l,l))*x,life:ct(1,2)})}}sparks(t,e,n,s){for(let r=0;r<s;r++)this.spark.add({x:t,y:e,z:n,vx:ct(-5,5),vy:ct(-2,5),vz:ct(-5,5),life:ct(.15,.35)})}dust(t,e,n,s,r){for(let a=0;a<2;a++)this.dustPool.add({x:t+ct(-.08,.08),y:e+.03,z:n+ct(-.08,.08),vx:s+ct(-.5,.5),vy:ct(.3,1.1),vz:r+ct(-.5,.5),life:ct(.3,.6)})}setDecalParent(t){this.decals.parent!==t&&t.add(this.decals)}splash(t,e,n){for(let s=0;s<40;s++)this.water.add({x:t+ct(-.3,.3),y:e,z:n+ct(-.3,.3),vx:ct(-1.5,1.5),vy:ct(2,6),vz:ct(-1.5,1.5),life:ct(.5,1)})}bleed(t,e,n){this.bleeders.push({rag:t,idx:e,t:0,dur:n,acc:0})}popup(t,e,n,s,r,a,o){let l=0;for(let c of this.popups)c.age<.4&&Math.hypot(c.x-t,c.z-n)<1.2&&l++;this.popups.push({x:t,y:e+l*.42,z:n,text:s,col:r||"#fff",size:a||22,age:0,life:o||1})}addDecal(t,e,n,s){let r=this._m;this._p.set(t,e+.004+this.decalTotal%50*5e-5,n),this._q.setFromAxisAngle(this._s.set(0,1,0),ct(0,Math.PI));let a=s*ct(.8,1.4);r.compose(this._p,this._q,new P(a,1,s)),this.decals.setMatrixAt(this.decalNext,r),this.decalNext=(this.decalNext+1)%this.maxDecals,this.decalTotal++,this.decals.count=Math.min(this.decalTotal,this.maxDecals),this.decals.instanceMatrix.needsUpdate=!0}update(t,e){for(let r of this.bleeders){r.t+=t;let a=r.rag;if(a.removed){r.t=r.dur;continue}let o=a.pts[r.idx],l=a.neighborOf(r.idx);if(l<0)continue;let c=a.pts[l],h=o.x-c.x,d=o.y-c.y,u=o.z-c.z,f=Math.hypot(h,d,u)||1;h/=f,d/=f,u/=f;let p=1-r.t/r.dur,x=.55+.45*Math.sin(r.t*16);r.acc+=t*120*p*x;let g=(o.x-o.px)/t,m=(o.y-o.py)/t,M=(o.z-o.pz)/t;for(;r.acc>=1;){r.acc-=1;let b=ct(1.5,3.8)*(.4+p);this.blood.add({x:o.x,y:o.y,z:o.z,vx:h*b+ct(-.6,.6)+g*.5,vy:d*b+ct(-.6,.6)+m*.5,vz:u*b+ct(-.6,.6)+M*.5,life:ct(.8,1.5)})}}this.bleeders=this.bleeders.filter(r=>r.t<r.dur);let n=this.blood.list,s=0;for(let r=0;r<n.length;r++){let a=n[r];a.life-=t,a.vy-=je*.8*t,a.x+=a.vx*t,a.y+=a.vy*t,a.z+=a.vz*t;let o=e.ground(a.x,a.z);if(a.y<=o+.01){Math.random()<.55&&this.addDecal(a.x,e.decalLocal?0:o,a.z,ct(.025,.07));continue}a.y<e.waterY||a.life>0&&(n[s++]=a)}n.length=s;for(let r of[this.spark,this.water,this.dustPool]){let a=r.list,o=0;for(let l=0;l<a.length;l++){let c=a[l];if(c.life-=t,r===this.spark)c.vx*=.92,c.vz*=.92,c.vy-=6*t;else if(r===this.dustPool){let h=Math.exp(-3*t);c.vx*=h,c.vz*=h,c.vy*=h}else c.vy-=je*.6*t;c.x+=c.vx*t,c.y+=c.vy*t,c.z+=c.vz*t,c.life>0&&(a[o++]=c)}a.length=o}for(let r of this.popups)r.age+=t,r.y+=.5*t;this.popups=this.popups.filter(r=>r.age<r.life)}flush(){this.blood.flush(),this.spark.flush(),this.water.flush(),this.dustPool.flush()}};function _f(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=xf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=xf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function xf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Te(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function Gn(i,t,e,n){let s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);let r=new Vi(s);return r.colorSpace=ze,n&&(r.wrapS=r.wrapT=Qn,r.repeat.set(n,n)),r.anisotropy=8,r}function Py(i,t,e){let s=t/7,r=[];for(let o=0;o<7;o++)for(let l=0;l<7;l++)r.push([(l+.15+Math.random()*.7)*s,(o+.15+Math.random()*.7)*s,Math.random()]);let a=i.createImageData(t,e);for(let o=0;o<e;o++)for(let l=0;l<t;l++){let c=Math.floor(l/s),h=Math.floor(o/s),d=1e9,u=1e9,f=0;for(let m=-1;m<=1;m++)for(let M=-1;M<=1;M++){let b=(c+M+7)%7,_=(h+m+7)%7,S=r[_*7+b],w=S[0]+(c+M-b)*s,A=S[1]+(h+m-_)*s,y=Math.hypot(w-l,A-o);y<d?(u=d,d=y,f=S[2]):y<u&&(u=y)}let p=Gt((u-d)/5,0,1),x=(o*t+l)*4,g=222+f*18-d/s*18;a.data[x]=Dh(120,g-14,p),a.data[x+1]=Dh(160,g+6,p),a.data[x+2]=Dh(200,g+20,p),a.data[x+3]=255}i.putImageData(a,0,0)}function Dh(i,t,e){return i+(t-i)*e}function Iy(i,t,e){i.fillStyle="#4c9427",i.fillRect(0,0,t,e);let n=["#3d8420","#5aab33","#6fbd3f","#2f6e17","#83c94b","#4a9a2a"];i.lineCap="round";for(let s=0;s<4200;s++){let r=Math.random()*t,a=Math.random()*e,o=4+Math.random()*9,l=-Math.PI/2+(Math.random()-.5)*1.2;i.strokeStyle=n[s%n.length],i.lineWidth=1+Math.random()*1.5;for(let[c,h]of[[0,0],[t,0],[-t,0],[0,e],[0,-e]])i.beginPath(),i.moveTo(r+c,a+h),i.lineTo(r+c+Math.cos(l)*o,a+h+Math.sin(l)*o),i.stroke()}}function Ly(i,t,e){i.fillStyle="#d9a66e",i.fillRect(0,0,t,e);for(let n=0;n<6e3;n++)i.fillStyle=Math.random()<.5?"rgba(160,110,60,0.35)":"rgba(250,220,170,0.35)",i.fillRect(Math.random()*t,Math.random()*e,1.5,1.5);i.strokeStyle="rgba(170,120,70,0.25)",i.lineWidth=2;for(let n=8;n<e;n+=22){i.beginPath();for(let s=0;s<=t;s+=8)i.lineTo(s,n+Math.sin(s/t*Math.PI*4+n)*4);i.stroke()}}function Dy(i,t,e){i.clearRect(0,0,t,e);let n=t/2;i.strokeStyle="#6f9a2b",i.lineWidth=3,i.beginPath(),i.moveTo(n,e),i.quadraticCurveTo(n+4,e*.5,n,6),i.stroke();for(let s=0;s<26;s++){let r=s/26,a=e-14-r*(e-26),o=(1-r*.85)*t*.44,l=`rgb(${Math.round(120+r*60)},${Math.round(170+r*30)},${Math.round(50+r*10)})`;i.fillStyle=l;for(let c of[-1,1])i.save(),i.translate(n,a),i.rotate(c*(1.05-r*.25)),i.beginPath(),i.ellipse(0,-o/2,o*.13,o/2,0,0,Math.PI*2),i.fill(),i.restore()}}function Ny(i,t,e){i.clearRect(0,0,t,e),i.lineCap="round";for(let n=0;n<18;n++){let s=t*(.2+Math.random()*.6),r=e*(.05+Math.random()*.4),a=(Math.random()-.5)*t*.5;i.strokeStyle=["#5fae36","#7cc447","#4a9429","#8fd05a"][n%4],i.lineWidth=2+Math.random()*2,i.beginPath(),i.moveTo(s,e),i.quadraticCurveTo(s,e*.6,s+a,r),i.stroke()}}function yf(i,t,e){i.clearRect(0,0,t,e);for(let n=0;n<14;n++){let s=t*(.2+Math.random()*.6),r=e*(.45+Math.random()*.25),a=e*(.15+Math.random()*.2),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(255,255,255,0.95)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.beginPath(),i.arc(s,r,a,0,Math.PI*2),i.fill()}}function vf(i,t,e,n){let s=new xi(i,t,11,6);s.index&&(s=s.toNonIndexed());let r=s.attributes.position,a=new P;for(let d=0;d<r.count;d++){a.fromBufferAttribute(r,d);let u=Math.round(a.x*10)*7.3+Math.round(a.y*10)*3.1+Math.round(a.z*10)*5.7+e,f=1-(a.y+t/2)/t;a.x+=(kn(u)-.5)*i*.35*f,a.z+=(kn(u+1)-.5)*i*.35*f,a.y+=(kn(u+2)-.5)*t*.12*f,r.setXYZ(d,a.x,a.y,a.z)}s.computeVertexNormals();let o=new Float32Array(r.count*3),l=s.attributes.normal,c=new zt;for(let d=0;d<r.count;d+=3){let f=((r.getY(d)+r.getY(d+1)+r.getY(d+2))/3+t/2)/t,p=l.getY(d);f>.82?c.set(n.snow):p>.55&&f<.7?c.set(n.top):c.set(n.rock),c.offsetHSL(0,0,(kn(d*1.7+e)-.5)*.06);for(let x=0;x<3;x++)o[(d+x)*3]=c.r,o[(d+x)*3+1]=c.g,o[(d+x)*3+2]=c.b}s.setAttribute("color",new Te(o,3));let h=new Pt(s,new Qt({vertexColors:!0,flatShading:!0,roughness:.95}));return h.position.y=t/2-1,h}function Mf(i,t,e){let n=new Is(i,0);n.index&&(n=n.toNonIndexed());let s=n.attributes.position;for(let a=0;a<s.count;a++){let o=Math.round(s.getX(a)*50)+Math.round(s.getY(a)*30)*3+Math.round(s.getZ(a)*70)*7+t;s.setXYZ(a,s.getX(a)*(1+(kn(o)-.5)*.3),s.getY(a)*.7,s.getZ(a)*(1+(kn(o+3)-.5)*.3))}n.computeVertexNormals();let r=new Pt(n,new Qt({color:e,flatShading:!0,roughness:.9}));return r.castShadow=!0,r.receiveShadow=!0,r}function Sf(i,t,e,n){let s=[];for(let o=0;o<i;o++){let l=new Un(t,e,1,2);l.translate(0,e/2,0),l.rotateX(-n*(.8+Math.random()*.4)),l.rotateY(o/i*Math.PI*2+Math.random()*.5),s.push(l)}let r=_f(s),a=r.attributes.normal;for(let o=0;o<a.count;o++)a.setXYZ(o,0,1,0);return r}function bf(i,t,e,n,s,r,a,o){let l=new ti(i,t,e),c=new te,h=new Je,d=new P,u=new P,f=new P(0,1,0),p=0;for(let x=0;x<e*3&&p<e;x++){let g=Math.random()*Math.PI*2,m=n+Math.sqrt(Math.random())*(s-n),M=Math.cos(g)*m,b=Math.sin(g)*m;if(o&&o(M,b))continue;let _=r+Math.random()*(a-r);u.set(M,0,b),h.setFromAxisAngle(f,Math.random()*Math.PI*2),d.set(_,_*(.8+Math.random()*.4),_),c.compose(u,h,d),l.setMatrixAt(p++,c)}return l.count=p,l}function Uy(i,t,e){i.fillStyle="#cfd3d8",i.fillRect(0,0,t,e);for(let r=0;r<2600;r++)i.fillStyle=Math.random()<.5?"rgba(0,0,0,0.035)":"rgba(255,255,255,0.07)",i.fillRect(Math.random()*t,Math.random()*e,2,2);i.strokeStyle="#a3a9b0",i.lineWidth=3;let n=4,s=t/n;for(let r=0;r<=n;r++)i.beginPath(),i.moveTo(r*s,0),i.lineTo(r*s,e),i.stroke(),i.beginPath(),i.moveTo(0,r*s),i.lineTo(t,r*s),i.stroke()}function Fy(i,t,e){i.fillStyle="#f3efe8",i.fillRect(0,0,t,e),i.fillStyle="#d7262d";for(let n=-t;n<=2*t;n+=t/2)i.beginPath(),i.moveTo(n,0),i.lineTo(n+t/4,0),i.lineTo(n+t/4-e,e),i.lineTo(n-e,e),i.closePath(),i.fill()}var Af=.45,ai=8;function Oy(i,t){let e=new _e,n=i*(ai+1);e.setAttribute("position",new Te(new Float32Array(n*3),3).setUsage(Hs)),e.setAttribute("normal",new Te(new Float32Array(n*3),3).setUsage(Hs));let s=new Float32Array(n*2),r=[];for(let a=0;a<i;a++)for(let o=0;o<=ai;o++){let l=a*(ai+1)+o;if(s[l*2]=o/ai,s[l*2+1]=a*t/Af,a<i-1&&o<ai){let c=l+ai+1;r.push(l,c,l+1,c,c+1,l+1)}}return e.setAttribute("uv",new Te(s,2)),e.setIndex(r),e}var ri=new P,Wn=new P,Nl=new P,la=new P,zy=new P(0,1,0);function wf(i,t,e){let n=i.attributes.position.array,s=i.attributes.normal.array,r=t.length-1;for(let a=0;a<=r;a++){let o=t[Math.max(0,a-1)],l=t[Math.min(r,a+1)];ri.set(l.x-o.x,l.y-o.y,l.z-o.z),ri.lengthSq()<1e-10&&ri.set(0,1,0),ri.normalize(),a===0?(Wn.crossVectors(ri,la.set(1,0,0)),Wn.lengthSq()<1e-6&&Wn.crossVectors(ri,la.set(0,0,1))):Wn.addScaledVector(ri,-ri.dot(Wn)),Wn.normalize(),Nl.crossVectors(ri,Wn);let c=t[a];for(let h=0;h<=ai;h++){let d=h/ai*Math.PI*2,u=Math.cos(d),f=Math.sin(d),p=(a*(ai+1)+h)*3,x=Wn.x*u+Nl.x*f,g=Wn.y*u+Nl.y*f,m=Wn.z*u+Nl.z*f;s[p]=x,s[p+1]=g,s[p+2]=m,n[p]=c.x+x*e,n[p+1]=c.y+g*e,n[p+2]=c.z+m*e}}i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0}function Ef(i,t,e,n,s,r,a,o){la.set(r-e,a-n,o-s);let l=la.length()||.001;i.position.set(e,n,s),i.scale.set(1,l/t,1),i.quaternion.setFromUnitVectors(zy,la.multiplyScalar(1/l))}var Rf=[[5.3,5.3],[-5.3,5.3],[5.3,-5.3],[-5.3,-5.3],[6,.8],[-6,-.8],[-2,6],[2,-6]];for(let i=0;i<6;i++){let t=(20+i*60)*Math.PI/180;Rf.push([+(Math.sin(t)*3).toFixed(2),+(Math.cos(t)*3).toFixed(2)])}var Tf=1.6,Nh=.42;function By(){let i=new We({uniforms:{top:{value:new zt},horizon:{value:new zt},bottom:{value:new zt}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, clamp(-h * 4.0, 0.0, 1.0));
      gl_FragColor = vec4(c, 1.0); }`,side:De,depthWrite:!1,fog:!1}),t=new Pt(new un(400,32,16),i);return t.renderOrder=-10,t.frustumCulled=!1,t}function ky(i,t){let e=dl.merge([xt.fog,{time:{value:0},deep:{value:new zt(i)},light:{value:new zt(t)}}]);return new We({uniforms:e,fog:!0,vertexShader:`varying vec3 vW;
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
      }`})}var Ul=class{constructor(t){this.scene=t,this.t=0,this.sky=By(),t.add(this.sky),this.hemi=new Br(16777215,7829367,1.1),t.add(this.hemi);let e=new Gr(16777215,2.4);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);let n=e.shadow.camera;n.left=-11,n.right=11,n.top=11,n.bottom=-11,n.near=1,n.far=70,e.shadow.bias=-4e-4,e.shadow.normalBias=.03,t.add(e,e.target),this.sun=e,this.sunDir=new P(.5,1,.35).normalize(),this.gx=0,this.gz=0,this.gvx=0,this.gvz=0,this.tgx=0,this.tgz=0,this.envs={meadow:this.buildMeadow(),ice:this.buildIce(),dojo:this.buildDojo(),roof:this.buildRoof()};for(let s of Object.values(this.envs))s.group.visible=!1,t.add(s.group);this.env=null}set(t,e=!1){this.env&&(this.env.group.visible=!1);let n=this.envs[t];this.env=n,this.name=t,n.group.visible=!0,this.radius=e?62:n.radius;for(let o of n.props||[])o.visible=!e;let s=this.sun.shadow.camera,r=e?26:11;s.right!==r&&(s.left=-r,s.right=r,s.top=r,s.bottom=-r,s.far=e?120:70,s.updateProjectionMatrix()),this.shadowDist=e?60:30;let a=this.sky.material.uniforms;a.top.value.set(n.sky[0]),a.horizon.value.set(n.sky[1]),a.bottom.value.set(n.sky[2]),this.scene.fog=new _r(n.sky[1],n.fog[0],n.fog[1]),this.hemi.color.set(n.hemi[0]),this.hemi.groundColor.set(n.hemi[1]),this.hemi.intensity=n.hemi[2],this.sun.color.set(n.sun[0]),this.sun.intensity=n.sun[1],this.sunDir.set(n.sun[2],n.sun[3],n.sun[4]).normalize(),this.waterY=n.waterY,this.canFall=n.canFall,this.wallH=n.wallH||0,this.overSpeed=n.overSpeed||0,this.fallDepth=n.fallDepth||.9,this.gx=this.gz=this.gvx=this.gvz=this.tgx=this.tgz=0,n.roof&&this.resetRoof()}get decalLocal(){return!!(this.env&&this.env.roof)}get ropes(){return this.env&&this.env.roof?this.env.ropes:null}get tilt(){return Math.hypot(this.tgx,this.tgz)}ground(t,e){let n=this.env;return n.roof?Math.abs(t)<=n.half&&Math.abs(e)<=n.half?this.gx*t+this.gz*e:-1/0:n.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))?0:-1/0:0}inside(t,e,n){let s=this.env;return s.roof?Math.abs(t)<s.inner-n&&Math.abs(e)<s.inner-n:s.floe?Math.hypot(t,e)<this.floeRadius(Math.atan2(e,t))-n:Math.hypot(t,e)<this.radius-n}clampInside(t,e,n,s){let r=this.env;if(r.floe)return!1;if(r.roof){let a=r.inner-n-.001;Math.abs(t)>a&&(t=Math.sign(t)*a,s.vx=0,s.slideX=0),Math.abs(e)>a&&(e=Math.sign(e)*a,s.vz=0,s.slideZ=0)}else{let a=Math.hypot(t,e),o=this.radius-n-.001;if(a>o){let l=t/a,c=e/a;t=l*o,e=c*o;let h=s.vx*l+s.vz*c;h>0&&(s.vx-=l*h,s.vz-=c*h);let d=s.slideX*l+s.slideZ*c;d>0&&(s.slideX-=l*d,s.slideZ-=c*d)}}return s.x=t,s.z=e,!0}floeRadius(t){let e=this.envs.ice.floe,n=e.length;t<e[0].a&&(t+=Math.PI*2);for(let s=0;s<n;s++){let r=e[s],a=e[(s+1)%n],o=s+1<n?a.a:a.a+Math.PI*2;if(t>=r.a&&t<=o){let l=Math.cos(t),c=Math.sin(t),h=a.x-r.x,d=a.z-r.z,u=l*d-c*h;return Math.abs(u)<1e-9?r.r:(r.x*d-r.z*h)/u}}return e[0].r}followShadow(t,e){let n=this.sunDir;this.sun.target.position.set(t,0,e);let s=this.shadowDist||30;this.sun.position.set(t+n.x*s,n.y*s,e+n.z*s)}update(t,e){this.t+=t,this.sky.position.copy(e),this.env.water&&(this.env.water.material.uniforms.time.value=this.t),this.env.roof&&this.renderRoof(e);for(let n of this.env.clouds||[])n.position.x+=t*.6,n.position.x>220&&(n.position.x=-220)}clouds(t,e,n,s,r){let a=Gn(256,128,yf),o=[];for(let l=0;l<e;l++){let c=new ki(new mi({map:a,fog:!1,transparent:!0,depthWrite:!1,opacity:.9})),h=Math.random()*Math.PI*2,d=n*(.7+Math.random()*.5);c.position.set(Math.cos(h)*d,ct(s,r),Math.sin(h)*d);let u=ct(60,120);c.scale.set(u,u*.45,1),t.add(c),o.push(c)}return o}resetRoof(){let t=this.envs.roof;for(let e of t.ropes)e.intact=!0,e.up=null,e.stub&&(t.group.remove(e.stub.mesh),e.stub.mesh.geometry.dispose(),e.stub=null),e.mesh.visible=!0;this.renderRoof()}updateTilt(){let t=this.env,e=0,n=0,s=0;for(let l of t.ropes)l.intact&&(n+=l.x,s+=l.z,e++);e&&(n/=e,s/=e);let r=Tf*n/t.half,a=Tf*s/t.half,o=Math.hypot(r,a);o>Nh&&(r*=Nh/o,a*=Nh/o),this.gvx+=(r-this.tgx)*3,this.gvz+=(a-this.tgz)*3,this.tgx=r,this.tgz=a}cutRope(t,e,n,s){let r=this.env;t.intact=!1,e=Gt(e,.3,3.2);let a=this.ground(t.x,t.z),o=Math.max(3,Math.round(e/.2)),l=e/o,c=Math.hypot(n,s)||1,h=n/c*.03,d=s/c*.03,u=[];for(let p=0;p<=o;p++){let x=p/o,g=a+e*x;u.push({x:t.x,y:g,z:t.z,px:t.x-h*x,py:g,pz:t.z-d*x})}let f=new Pt(Oy(o+1,l),r.ropeMat);f.castShadow=!0,f.frustumCulled=!1,r.group.add(f),t.stub={pts:u,seg:l,mesh:f},wf(f.geometry,u,t.r),t.up={y:a+e,len:t.top-(a+e),v:0,t:0,wx:h/.03,wz:d/.03},this.updateTilt()}step(t){let e=this.env;if(!e||!e.roof)return;let n=18,s=3.4;this.gvx+=(n*(this.tgx-this.gx)-s*this.gvx)*t,this.gx+=this.gvx*t,this.gvz+=(n*(this.tgz-this.gz)-s*this.gvz)*t,this.gz+=this.gvz*t;for(let r of e.ropes)r.up&&(r.up.t+=t,r.up.v+=60*t,r.up.y+=r.up.v*t,r.up.t>2.5&&(r.up=null)),r.stub&&this.stepStub(r,t)}stepStub(t,e){let n=t.stub.pts,s=t.stub.seg,r=t.r,a=n[0];a.x=t.x,a.y=this.ground(t.x,t.z),a.z=t.z;for(let o=1;o<n.length;o++){let l=n[o],c=(l.x-l.px)*.99,h=(l.y-l.py)*.99,d=(l.z-l.pz)*.99;l.px=l.x,l.py=l.y,l.pz=l.z,l.x+=c,l.y+=h-je*e*e,l.z+=d}for(let o=0;o<6;o++){for(let l=1;l<n.length;l++){let c=n[l-1],h=n[l],d=h.x-c.x,u=h.y-c.y,f=h.z-c.z,p=Math.hypot(d,u,f)||1e-6,x=(p-s)/p,g=l===1?0:.5,m=1-g;c.x+=d*x*g,c.y+=u*x*g,c.z+=f*x*g,h.x-=d*x*m,h.y-=u*x*m,h.z-=f*x*m}for(let l=1;l<n.length;l++){let c=n[l],h=this.ground(c.x,c.z);c.y<h+r&&(c.y=h+r,c.px=c.x-(c.x-c.px)*.8,c.pz=c.z-(c.z-c.pz)*.8)}}}renderRoof(t){let e=this.env;e.plat.matrix.set(1,0,0,0,this.gx,1,this.gz,0,0,0,1,0,0,0,0,1),e.plat.matrixWorldNeedsUpdate=!0;for(let n of e.ropes){let s=n.mesh,r=t?Math.hypot(t.x-n.x,t.z-n.z):9,a=Gt((r-.7)/1.6,.12,1);if(s.material.opacity=a,s.material.transparent=a<1,s.material.depthWrite=a>=1,n.intact)s.visible=!0,Ef(s,n.L0,n.x,this.ground(n.x,n.z),n.z,n.x,n.top,n.z);else if(n.up){let o=n.up,l=Math.sin(o.t*24)*.6*Math.exp(-o.t*2.2);s.visible=!0,Ef(s,n.L0,n.x+o.wx*l,o.y,n.z+o.wz*l,n.x,o.y+o.len,n.z)}else s.visible=!1;n.stub&&wf(n.stub.mesh.geometry,n.stub.pts,n.r)}}buildRoof(){let t=new ge,e=new ge;e.matrixAutoUpdate=!1,t.add(e);let n=7,s=.3,r=.45,a=Gn(256,256,Uy);a.wrapS=a.wrapT=Qn,a.repeat.set(n*2/4,n*2/4);let o=new Qt({map:a,roughness:.85}),l=new Qt({color:9278620,roughness:.9}),c=new Qt({color:6252142,roughness:.9}),h=new Pt(new Le(n*2,.8,n*2),[l,l,o,c,l,l]);h.position.y=-.4,h.receiveShadow=!0,h.castShadow=!0,e.add(h);for(let[S,w,A,y]of[[n*2,.5,0,-3.5],[n*2,.5,0,3.5],[.5,n*2,-3.5,0],[.5,n*2,3.5,0]]){let T=new Pt(new Le(S,.5,w),c);T.position.set(A,-1.05,y),e.add(T)}let d=new Qt({color:11712703,roughness:.8});for(let[S,w,A,y]of[[n*2,s,0,n-s/2],[n*2,s,0,-n+s/2],[s,n*2-s*2,n-s/2,0],[s,n*2-s*2,-n+s/2,0]]){let T=new Pt(new Le(S,r,w),d);T.position.set(A,r/2,y),T.castShadow=!0,T.receiveShadow=!0,e.add(T)}let u=Gn(64,64,Fy);u.wrapS=u.wrapT=Qn;let f=new Qt({map:u,roughness:.55}),p=new Qt({color:4870232,roughness:.4,metalness:.6}),x=[],g=.075,m=46;for(let[S,w]of Rf){let A=m,y=new Ke(g,g,A,10,1,!0).translate(0,A/2,0),T=y.attributes.uv;for(let N=0;N<T.count;N++)T.setY(N,T.getY(N)*A/Af);let R=new Pt(y,f.clone());R.castShadow=!0,t.add(R);let I=new Pt(new Ke(.2,.25,.07,14),p);I.position.set(S,.035,w),I.receiveShadow=!0,e.add(I),x.push({x:S,z:w,r:g,top:m,L0:A,mesh:R,intact:!0,stub:null,up:null})}let M=Gn(256,128,yf),b=[];for(let S=0;S<16;S++){let w=new ki(new mi({map:M,fog:!1,transparent:!0,depthWrite:!1,opacity:.95})),A=Math.random()*Math.PI*2,y=ct(25,150);w.position.set(Math.cos(A)*y,ct(-48,-12),Math.sin(A)*y);let T=ct(40,95);w.scale.set(T,T*.45,1),t.add(w),b.push(w)}let _=new Qt({color:10466505,roughness:.9});for(let S=0;S<16;S++){let w=S/16*Math.PI*2+ct(-.15,.15),A=ct(40,120),y=ct(6,13),T=ct(-30,5),R=new Pt(new Le(y,200,y*ct(.7,1.3)),_);R.position.set(Math.cos(w)*A,T-100,Math.sin(w)*A),R.rotation.y=ct(0,Math.PI),t.add(R)}return{group:t,plat:e,roof:!0,half:n,inner:n-s,wallH:r,overSpeed:5,fallDepth:1.5,ropes:x,ropeMat:f,radius:n-s,floe:null,water:null,waterY:-1/0,canFall:!0,clouds:b.concat(this.clouds(t,8,170,25,70)),sky:[4165600,14084600,15857403],fog:[55,240],hemi:[15398143,11122888,1.1],sun:[16777215,2.6,.4,1,.5]}}buildMeadow(){let t=new ge,e=Gn(256,256,Iy,70),n=new Pt(new Un(300,300),new Qt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Qt({map:Gn(128,256,Dy),alphaTest:.45,side:on,roughness:.9}),r=(c,h)=>Math.hypot(c,h)<6&&Math.random()<.85;t.add(bf(Sf(6,.42,1,.75),s,320,1.5,45,.6,1.5,r));let a=new Qt({map:Gn(64,64,Ny),alphaTest:.4,side:on,roughness:1});t.add(bf(Sf(3,.35,.3,.2),a,1400,.5,40,.6,1.3));let o={rock:8354935,top:6069043,snow:15988214};for(let c=0;c<14;c++){let h=c/14*Math.PI*2+ct(-.15,.15),d=ct(85,130),u=vf(ct(28,50),ct(26,55),c*13.7,o);u.position.x=Math.cos(h)*d,u.position.z=Math.sin(h)*d,t.add(u)}let l=[];for(let c=0;c<16;c++){let h=Math.random()*Math.PI*2,d=ct(15,30),u=Mf(ct(.6,2.2),c*31,9078398);u.position.set(Math.cos(h)*d,0,Math.sin(h)*d),t.add(u),l.push(u)}return{group:t,props:l,radius:13,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,9,170,45,90),sky:[6203626,15135483,10470794],fog:[45,190],hemi:[14216447,5208620,1],sun:[16774368,2.6,.45,1,.3]}}buildIce(){let t=new ge,e=9,n=[];for(let f=0;f<e;f++){let p=f/e*Math.PI*2+ct(-.12,.12)-Math.PI,x=ct(7.4,8.8);n.push({a:p,r:x,x:Math.cos(p)*x,z:Math.sin(p)*x})}let s=new Ds;n.forEach((f,p)=>p?s.lineTo(f.x,-f.z):s.moveTo(f.x,-f.z)),s.closePath();let r=new Ur(s,{depth:1.4,bevelEnabled:!0,bevelThickness:.08,bevelSize:.08,bevelSegments:1});r.rotateX(-Math.PI/2),r.translate(0,-1.4-.08,0);let a=Gn(256,256,Py);a.wrapS=a.wrapT=Qn,a.repeat.set(.28,.28);let o=new Qt({map:a,roughness:.35,metalness:0}),l=new Qt({color:8829408,roughness:.3}),c=new Pt(r,[o,l]);c.receiveShadow=!0,t.add(c);let h=new Pt(new Un(500,500),ky(4869570,9080816));h.rotation.x=-Math.PI/2,h.position.y=-.35,t.add(h);let d=new Qt({color:10930408,roughness:.35,flatShading:!0}),u=(f,p,x,g,m,M)=>{let b=new Le(f,p,x,3,6,3);b.index&&(b=b.toNonIndexed());let _=b.attributes.position;for(let w=0;w<_.count;w++){let A=Math.round(_.getX(w)*10)*3.3+Math.round(_.getY(w)*10)*1.7+Math.round(_.getZ(w)*10)*5.1+M;_.setXYZ(w,_.getX(w)+(kn(A)-.5)*f*.25,_.getY(w)+(kn(A+1)-.5)*.6,_.getZ(w)+(kn(A+2)-.5)*x*.25)}b.computeVertexNormals();let S=new Pt(b,d);S.position.set(g,p/2-1.5,m),S.rotation.y=ct(0,Math.PI),t.add(S)};u(7,20,6,9,34,1),u(5,9,5,-30,26,2),u(9,6,7,-18,-40,3),u(4,13,4,38,-12,4);for(let f=0;f<12;f++){let p=Math.random()*Math.PI*2,x=ct(11,30),g=Mf(ct(.4,1.3),f*7,14281978);g.position.set(Math.cos(p)*x,-.35,Math.sin(p)*x),g.castShadow=!1,t.add(g)}return{group:t,floe:n,water:h,waterY:-.35,canFall:!0,radius:8,clouds:this.clouds(t,7,170,40,80),sky:[9421550,16054524,7106768],fog:[35,170],hemi:[15660799,9086678,1.15],sun:[16777215,2.5,-.4,1,.45]}}buildDojo(){let t=new ge,e=Gn(256,256,Ly,60),n=new Pt(new Un(300,300),new Qt({map:e,roughness:1}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,t.add(n);let s=new Qt({color:10127992,flatShading:!0,roughness:.9});for(let f=0;f<44;f++){let p=f/44*Math.PI*2,x=new Pt(new Is(ct(.22,.34),0),s);x.position.set(Math.cos(p)*11.6,.08,Math.sin(p)*11.6),x.castShadow=!0,t.add(x)}let r=new Qt({color:13116958,roughness:.6}),a=new Qt({color:2759190,roughness:.7}),o=new ge;for(let f of[-2.6,2.6]){let p=new Pt(new Ke(.28,.34,6,12),r);p.position.set(f,3,0),o.add(p)}let l=new Pt(new Le(7.6,.45,.6),a);l.position.y=6.2;let c=new Pt(new Le(6.4,.35,.45),r);c.position.y=5.1,o.add(l,c),o.traverse(f=>{f.isMesh&&(f.castShadow=!0)}),o.position.set(0,0,18),t.add(o);for(let[f,p]of[[-6,15],[6,15],[-15,-4],[15,-4],[-9,-14],[9,-14]]){let x=new ge,g=new Pt(new Ke(.35,.45,1.2,8),s);g.position.y=.6;let m=new Pt(new Le(.8,.6,.8),s);m.position.y=1.5;let M=new Pt(new xi(.75,.5,4),s);M.position.y=2.05,M.rotation.y=Math.PI/4,x.add(g,m,M),x.traverse(b=>{b.isMesh&&(b.castShadow=!0)}),x.position.set(f,0,p),t.add(x)}let h={rock:13209178,top:14064738,snow:14855538};for(let f=0;f<12;f++){let p=f/12*Math.PI*2,x=vf(ct(40,70),ct(10,22),f*5.3,h);x.position.x=Math.cos(p)*ct(90,130),x.position.z=Math.sin(p)*ct(90,130),t.add(x)}let d=Gn(128,128,(f,p)=>{let x=f.createRadialGradient(p/2,p/2,0,p/2,p/2,p/2);x.addColorStop(0,"rgba(255,90,50,1)"),x.addColorStop(.55,"rgba(255,90,50,1)"),x.addColorStop(.6,"rgba(255,140,90,0.35)"),x.addColorStop(1,"rgba(255,160,100,0)"),f.fillStyle=x,f.fillRect(0,0,p,p)}),u=new ki(new mi({map:d,fog:!1,depthWrite:!1}));return u.position.set(0,38,190),u.scale.set(90,90,1),t.add(u),{group:t,radius:11,floe:null,water:null,waterY:-1/0,canFall:!1,clouds:this.clouds(t,5,170,50,90),sky:[16043944,15964774,13208154],fog:[40,170],hemi:[16769216,10119744,1],sun:[16760970,2.4,-.2,.55,.8]}}};var Hy=55,Fl=class{constructor(t){this.el=t,this.keys=Object.create(null),this.stick={id:null,ox:0,oy:0,x:0,y:0},this.anyPress=!1,this.touchMode="ontouchstart"in window||(navigator.maxTouchPoints||0)>0,this.onKeyAction=null,this.stickR=Hy,this.taps=[],this.tapStart={t:0,x:0,y:0,moved:0},window.addEventListener("keydown",n=>this.onKey(n,!0)),window.addEventListener("keyup",n=>this.onKey(n,!1)),window.addEventListener("blur",()=>{this.keys=Object.create(null),this.stick.id=null}),t.addEventListener("mousedown",n=>{n.button===0&&(this.press(),this.begin("mouse",n.clientX,n.clientY))}),window.addEventListener("mousemove",n=>{this.stick.id==="mouse"&&this.drag(n.clientX,n.clientY)}),window.addEventListener("mouseup",()=>{this.stick.id==="mouse"&&this.end()}),t.addEventListener("contextmenu",n=>n.preventDefault());let e={passive:!1};t.addEventListener("touchstart",n=>this.onTouchStart(n),e),t.addEventListener("touchmove",n=>this.onTouchMove(n),e),t.addEventListener("touchend",n=>this.onTouchEnd(n),e),t.addEventListener("touchcancel",n=>this.onTouchEnd(n),e)}press(){Me.init(),this.anyPress=!0}begin(t,e,n){Object.assign(this.stick,{id:t,ox:e,oy:n,x:e,y:n}),Object.assign(this.tapStart,{t:performance.now(),x:e,y:n,moved:0})}end(){let t=this.tapStart;performance.now()-t.t<260&&t.moved<14&&this.taps.push({x:t.x,y:t.y}),this.stick.id=null}drag(t,e){let n=this.stick;n.x=t,n.y=e,this.tapStart.moved=Math.max(this.tapStart.moved,Math.hypot(t-this.tapStart.x,e-this.tapStart.y));let s=t-n.ox,r=e-n.oy,a=Math.hypot(s,r),o=this.stickR*1.3;a>o&&(n.ox=t-s/a*o,n.oy=e-r/a*o)}onKey(t,e){let n=t.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n)&&t.preventDefault(),e&&!t.repeat&&(this.press(),n==="Space"&&this.taps.push(null),this.onKeyAction&&this.onKeyAction(n)),this.keys[n]=e}onTouchStart(t){t.preventDefault(),this.press(),this.touchMode=!0;for(let e of t.changedTouches)this.stick.id===null&&this.begin(e.identifier,e.clientX,e.clientY)}onTouchMove(t){t.preventDefault();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.drag(e.clientX,e.clientY)}onTouchEnd(t){t.preventDefault(),Me.init();for(let e of t.changedTouches)e.identifier===this.stick.id&&this.end()}move(){let t=0,e=0,n=this.keys;if((n.KeyA||n.ArrowLeft)&&(t-=1),(n.KeyD||n.ArrowRight)&&(t+=1),(n.KeyW||n.ArrowUp)&&(e+=1),(n.KeyS||n.ArrowDown)&&(e-=1),this.stick.id!==null){let r=this.stick.x-this.stick.ox,a=this.stick.oy-this.stick.y,o=Math.hypot(r,a);if(o>6){let l=Gt((o-6)/(this.stickR-6),0,1);t=r/o*l,e=a/o*l}}let s=Math.hypot(t,e);return s>1&&(t/=s,e/=s,s=1),{x:t,y:e,mag:s}}clear(){this.anyPress=!1,this.taps.length=0}endFrame(){this.anyPress=!1}};var Vy='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3h-4l-.4 2.9a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.5L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.5 2.5-1c.5.4 1.1.7 1.7 1L11 21h4l.4-2.9c.6-.3 1.2-.6 1.7-1l2.5 1 2-3.5zM13 15.5A3.5 3.5 0 1 1 13 8.5a3.5 3.5 0 0 1 0 7z"/></svg>',Gy='<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" d="M19 12a7 7 0 1 1-2.05-4.95"/><path fill="currentColor" d="M20.5 3.5v6h-6z"/></svg>',Ol=class{constructor(t,e){this.game=t,this.cv=e,this.ctx=e.getContext("2d");let n=document.getElementById("hud");n.innerHTML=`
      <div id="lv">Lv 1</div>
      <div id="btns"><button id="b-gear" aria-label="Ayarlar">${Vy}</button><button id="b-restart" aria-label="Yeniden ba\u015Flat">${Gy}</button></div>
      <div id="banner"><div id="b-main"></div><div id="b-sub"></div></div>
      <div id="settings" hidden>
        <button id="s-sound"></button>
        <button id="s-quality"></button>
        <button id="s-roof">Platform seviyesine git</button>
        <button id="s-horse">At seviyesine git</button>
        <button id="s-titan">Titan seviyesine git</button>
        <button id="s-close">Kapat</button>
      </div>`,this.lv=n.querySelector("#lv"),this.banner=n.querySelector("#banner"),this.bMain=n.querySelector("#b-main"),this.bSub=n.querySelector("#b-sub"),this.settings=n.querySelector("#settings");let s=r=>r.stopPropagation();for(let r of n.querySelectorAll("button"))r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("mousedown",s);n.querySelector("#b-restart").addEventListener("click",()=>t.restartLevel()),n.querySelector("#b-gear").addEventListener("click",()=>{this.settings.hidden=!this.settings.hidden,this.refreshSettings()}),n.querySelector("#s-close").addEventListener("click",()=>{this.settings.hidden=!0}),n.querySelector("#s-sound").addEventListener("click",()=>{t.toggleSound(),this.refreshSettings()}),n.querySelector("#s-quality").addEventListener("click",()=>{t.toggleQuality(),this.refreshSettings()}),n.querySelector("#s-roof").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("roof")}),n.querySelector("#s-horse").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("horse")}),n.querySelector("#s-titan").addEventListener("click",()=>{this.settings.hidden=!0,t.jumpTo("titan")}),this.bannerT=0,this.flash=0,this.resize()}refreshSettings(){let t=this.game;this.settings.querySelector("#s-sound").textContent=`Ses: ${t.soundOn?"A\xE7\u0131k":"Kapal\u0131"}`,this.settings.querySelector("#s-quality").textContent=`Grafik: ${t.highQuality?"Y\xFCksek":"D\xFC\u015F\xFCk"}`}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.W=window.innerWidth,this.H=window.innerHeight,this.cv.width=Math.round(this.W*t),this.cv.height=Math.round(this.H*t),this.cv.style.width=this.W+"px",this.cv.style.height=this.H+"px"}setLevel(t){this.lv.textContent=`Lv ${t}`}drawBody(t,e,n){if(!e)return;let s=this.lv.getBoundingClientRect(),r=s.left+4,a=s.bottom+4,o=1.15*n,l=e.rag.pts,c=(f,p)=>{t.setLineDash(f?[]:[3,3]),t.strokeStyle=f?"rgba(255,255,255,0.9)":"rgba(255,59,92,0.95)",t.fillStyle=t.strokeStyle,t.beginPath(),p(),t.stroke()};t.save(),t.lineCap="round",t.lineWidth=3.2*n,t.shadowColor="rgba(0,0,0,0.35)",t.shadowBlur=3;let h=f=>r+f*o,d=f=>a+f*o,u=e.alive;c(u||l[q.HEAD].attached,()=>t.arc(h(14),d(7),5.5*o,0,Math.PI*2)),c(!0,()=>{t.moveTo(h(14),d(14)),t.lineTo(h(14),d(31))}),c(l[q.LHAND].attached,()=>{t.moveTo(h(14),d(16)),t.lineTo(h(4),d(28))}),c(l[q.RHAND].attached,()=>{t.moveTo(h(14),d(16)),t.lineTo(h(24),d(28))}),c(l[q.LFOOT].attached,()=>{t.moveTo(h(14),d(31)),t.lineTo(h(7),d(47))}),c(l[q.RFOOT].attached,()=>{t.moveTo(h(14),d(31)),t.lineTo(h(21),d(47))}),t.restore()}show(t,e,n,s){this.bMain.textContent=t,this.bSub.textContent=e||"",this.banner.className="show "+(s||""),this.bannerT=n||0}hide(){this.banner.className="",this.bannerT=0}update(t){this.flash=Math.max(0,this.flash-t*1.6),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.hide())}draw(t,e,n,s,r,a){let o=this.ctx,l=this.dpr;o.setTransform(l,0,0,l,0,0),o.clearRect(0,0,this.W,this.H);let c=Gt(Math.min(this.W,this.H)/400,.8,1.6);this.drawBody(o,r,c);let h=n.stick;if(h.id!==null||n.touchMode&&s>0){let d=n.stickR,u=h.id!==null,f=u?h.ox:this.W/2,p=u?h.oy:this.H-120*c;o.globalAlpha=u?.45:.25*Gt(s,0,1),o.strokeStyle="#fff",o.fillStyle="#fff",o.lineWidth=3,o.beginPath(),o.arc(f,p,d,0,Math.PI*2),o.stroke();let x=f,g=p;if(u){let m=h.x-h.ox,M=h.y-h.oy,b=Math.hypot(m,M),_=Math.min(b,d)/(b||1);x+=m*_,g+=M*_}o.beginPath(),o.arc(x,g,d*.42,0,Math.PI*2),o.fill(),o.globalAlpha=1}o.textAlign="center",o.textBaseline="middle",o.lineJoin="round";for(let d of e){let u=t(d.x,d.y,d.z);if(!u)continue;let f=1+.6*Math.max(0,1-d.age/.1),p=1-Math.max(0,(d.age/d.life-.7)/.3),x=Math.round(d.size*c*f);o.globalAlpha=p,o.font=`900 ${x}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.lineWidth=Math.max(3,x*.2),o.strokeStyle="#1a0d14",o.strokeText(d.text,u.x,u.y),o.fillStyle=d.col,o.fillText(d.text,u.x,u.y)}if(o.globalAlpha=1,this.flash>0){let d=o.createRadialGradient(this.W/2,this.H/2,Math.min(this.W,this.H)*.3,this.W/2,this.H/2,Math.max(this.W,this.H)*.75);d.addColorStop(0,"rgba(210,0,20,0)"),d.addColorStop(1,`rgba(210,0,20,${(this.flash*.8).toFixed(3)})`),o.fillStyle=d,o.fillRect(0,0,this.W,this.H)}if(s>0){o.globalAlpha=Gt(s,0,1)*.9,o.font=`700 ${Math.round(14*c)}px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`,o.fillStyle="#fff",o.strokeStyle="rgba(0,0,0,0.35)",o.lineWidth=3;let d=n.touchMode?["Parma\u011F\u0131n\u0131 s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"]:["WASD ya da fareyle s\xFCr\xFCkle: k\u0131l\u0131\xE7 o y\xF6ne d\xF6ner","Fareyle az it = yerinde \xE7evir \xB7 \xE7ok it = ko\u015F","H\u0131zl\u0131 \xE7evir = KES"];a==="titan"&&(d=[n.touchMode?"K\u0131sa dokun: halat at, u\xE7":"T\u0131kla / Bo\u015Fluk: halat at, u\xE7","Titana dokun: ona halat at","U\xE7arken k\u0131l\u0131\xE7 de\u011Fdi\u011Fi yeri keser"]),a==="horse"&&(d=["S\xFCr\xFCkle: at o y\xF6ne d\xF6ner, k\u0131l\u0131\xE7 da","\xC7ok it = d\xF6rtnala \xB7 h\u0131zl\u0131 \xE7evir = KES","At \xF6n\xFCndekini ezer"]),a==="roof"&&(d=["Halatlar platformu tutuyor","Kesersen platform yan yatar, herkes kayar","Kenardan d\xFC\u015Fen \xF6l\xFCr"]),d.forEach((u,f)=>{let p=this.H*.72+f*22*c;o.strokeText(u,this.W/2,p),o.fillText(u,this.W/2,p)}),o.globalAlpha=1}}};var Cf=11,Pf=.85,Wy=1.72*Pf,$i=new un(1,22,16),Xy=new Qt({color:16777215,roughness:.25}),qy=new Qt({color:1118481,roughness:.3});function en(i,t,e,n,s){let r=new Pt(i,t);return r.scale.set(e,n,s),r.castShadow=!0,r}var zl=class{constructor(t,e,n,s){this.x=e,this.z=n,this.yaw=s,this.speed=0,this.vx=0,this.vz=0,this.phase=0,this.bob=0;let r=new _i({color:10115635,roughness:.3,clearcoat:1,clearcoatRoughness:.12}),a=new _i({color:3809812,roughness:.45,clearcoat:.6});this.mats=[r,a];let o=new ge,l=new ge;o.add(l),l.add(en($i,r,.42,.44,.98).translateY(1.3)),l.add(en($i,r,.36,.4,.42).translateY(1.36).translateZ(.62)),l.add(en($i,r,.4,.42,.45).translateY(1.33).translateZ(-.6));let c=new ge;c.position.set(0,1.55,.78),c.rotation.x=.75,l.add(c),c.add(en(new ni(.2,.6,5,12),r,1,1,1).translateY(.35)),c.add(en(new ni(.07,.62,4,8),a,1,1,1.4).translateY(.35).translateZ(-.16));let h=new ge;h.position.set(0,.78,.02),h.rotation.x=1.25,c.add(h),h.add(en($i,r,.17,.36,.2).translateY(.2)),h.add(en($i,a,.13,.12,.15).translateY(.5).translateZ(.01));for(let p of[-1,1]){let x=en(new xi(.05,.16,8),r,1,1,1);x.position.set(p*.08,.02,-.15),x.rotation.x=-.9,h.add(x);let g=en($i,Xy,.07,.07,.07);g.position.set(p*.13,.12,-.06);let m=en($i,qy,.03,.03,.03);m.position.set(p*.19,.14,-.05),h.add(g,m)}this.head=h,this.tail=new ge,this.tail.position.set(0,1.45,-1),this.tail.add(en(new ni(.08,.6,4,8),a,1,1,1).translateY(-.35)),l.add(this.tail),this.legs=[];let d=new ni(.1,.5,4,10),u=new ni(.07,.5,4,10),f=new Ke(.085,.1,.1,10);for(let[p,x,g]of[[-.22,.62,0],[.22,.62,.35],[-.22,-.62,Math.PI],[.22,-.62,Math.PI+.35]]){let m=new ge;m.position.set(p,1.12,x);let M=en(d,r,1,1,1);M.position.y=-.3;let b=new ge;b.position.y=-.58;let _=en(u,r,1,1,1);_.position.y=-.28;let S=en(f,a,1,1,1);S.position.y=-.55,b.add(_,S),m.add(M,b),l.add(m),this.legs.push({hip:m,knee:b,off:g,front:x>0})}this.root=l,o.scale.setScalar(Pf),this.group=o,t.add(o)}update(t,e,n){if(e&&e.mag>.18){let h=Math.atan2(e.x,e.z);this.yaw=si(this.yaw,h,yt(3.2,1.7,this.speed/Cf)*t)}let s=e&&e.mag>.35?yt(4,Cf,Gt((e.mag-.35)/.6,0,1)):0;this.speed=Kd(this.speed,s,(s>this.speed?6:9)*t);let r=Math.sin(this.yaw),a=Math.cos(this.yaw),o=this.x+r*this.speed*t,l=this.z+a*this.speed*t;n.inside(o,l,1.3)||(o=this.x,l=this.z,this.speed*=.4,this.yaw=si(this.yaw,Math.atan2(-this.x,-this.z),3*t)),this.vx=(o-this.x)/t,this.vz=(l-this.z)/t,this.x=o,this.z=l;let c=this.speed>.3?1.3+this.speed*.17:0;this.phase+=t*Math.PI*2*c,this.bob=this.speed>.3?-Math.abs(Math.sin(this.phase))*.09*Gt(this.speed/6,0,1):0}saddle(t){return t.x=this.x-Math.sin(this.yaw)*.05,t.y=Wy+this.bob,t.z=this.z-Math.cos(this.yaw)*.05,t}render(){let t=this.group;t.position.set(this.x,0,this.z),t.rotation.y=this.yaw;let e=Gt(this.speed/6,0,1),n=this.phase;this.root.position.y=this.bob,this.root.rotation.x=Math.sin(n)*.06*e;for(let s of this.legs){let r=n+s.off;s.hip.rotation.x=-Math.sin(r)*.6*e;let a=(.15+.9*Math.max(0,Math.sin(r+1.2)))*e;s.knee.rotation.x=s.front?a:-a*.8}this.tail.rotation.x=.4+Math.sin(n*.5)*.15+e*.5,this.head.rotation.x=1.25+Math.sin(n)*.08*e}dispose(t){t.remove(this.group);for(let e of this.mats)e.dispose()}};var Uh=1/120,Yy=16753951,If=10820863,Zy=6951618,Ky=11820272,Jy={meadow:"\xC7ay\u0131r",ice:"Buz Sahanl\u0131\u011F\u0131",dojo:"G\xFCn Bat\u0131m\u0131 Dojo",roof:"Halatl\u0131 Platform"},Fh=["duel","duel","roof","horse","duel","boss","roof","titan"],$y=["Ragdoll fizi\u011Fi 1 \u2014 Sen 0","Par\xE7alar\u0131n\u0131 toplamak biraz s\xFCrecek.","K\u0131l\u0131c\u0131n keskin, refleksin de\u011Fil.","Hi\xE7 de\u011Filse g\xFCzel u\xE7tun."];function Lf(i){let t=Fh[(i-1)%Fh.length],e=Math.floor((i-1)/Fh.length),n=Gt((i-1)/24,0,1);if(t==="roof")return{type:t,env:"roof",big:!1,skill:n,boss:!1,enemies:new Array(Math.min(4,2+e)).fill("normal")};if(t==="horse")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:new Array(Math.min(6,3+e)).fill("big")};if(t==="titan")return{type:t,env:"meadow",big:!0,skill:n,boss:!1,enemies:["titan"]};let s=["meadow","ice","dojo"][(i-1)%3],r=t==="boss",a=[];if(r){a.push("boss");for(let o=0;o<e;o++)a.push("normal")}else{let o=Math.min(4,1+Math.floor((i-1)/4));for(let l=0;l<o;l++)a.push("normal")}return{type:t,env:s,big:!1,skill:n,boss:r,enemies:a}}var En=new P,Qy=new P(0,1,0),Qi={bx:0,by:0,bz:0,tx:0,ty:0,tz:0},Bl=class{constructor(){let t=document.getElementById("gl"),e=new gl({canvas:t,antialias:!0,powerPreference:"high-performance"});e.outputColorSpace=ze,e.toneMapping=Xr,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Wi,this.renderer=e,this.scene=new Bi;let n=new Xs(e);this.scene.environment=n.fromScene(new yl,.04).texture,this.scene.environmentIntensity=.85,this.camera=new Be(55,1,.1,900),this.world=new Ul(this.scene),this.fx=new Dl(this.scene);let s=document.getElementById("ui");this.input=new Fl(s),this.input.onKeyAction=r=>{r==="KeyR"&&this.restartLevel(),r==="KeyM"&&this.toggleSound()},this.hud=new Ol(this,s),this.soundOn=!0,this.highQuality=Sh("rk3dQuality",1)===1,this.chars=[],this.enemies=[],this.loose=[],this.time=0,this.timeScale=1,this.slowT=0,this.slowScale=1,this.shakeAmt=0,this.camYaw=0,this.camTarget=null,this.lookAt=new P,this.hintT=8,this.lastH=Uh,this.lastAttackT=-9,this._bb={},this.horse=null,this.titan=null,this.hookSide=1,this.raycaster=new Wr,this.ropeMesh=new Pt(new Ke(.025,.025,1,6).translate(0,.5,0),new Qt({color:2829104,roughness:.6})),this.ropeMesh.visible=!1,this.ropeMesh.frustumCulled=!1,this.scene.add(this.ropeMesh),this.projectFn=(r,a,o)=>this.project(r,a,o),window.addEventListener("resize",()=>this.resize()),this.resize(),this.applyQuality(),this.startLevel(Sh("rk3dLevel",1))}resize(){let t=window.innerWidth,e=window.innerHeight;this.W=t,this.H=e,this.renderer.setSize(t,e,!1),this.renderer.domElement.style.width=t+"px",this.renderer.domElement.style.height=e+"px";let n=t/e;this.camera.aspect=n,this.camera.fov=Gt(2*Math.atan(Math.tan(Jc.degToRad(27))/n)*180/Math.PI,50,86),this.camera.updateProjectionMatrix(),this.hud.resize()}applyQuality(){let t=this.highQuality;this.renderer.setPixelRatio(t?Math.min(window.devicePixelRatio||1,2):1),this.renderer.shadowMap.enabled=t,this.world.sun.castShadow=t,this.scene.traverse(e=>{e.material&&e.isMesh&&(e.material.needsUpdate=!0)}),this.resize()}toggleQuality(){this.highQuality=!this.highQuality,bh("rk3dQuality",this.highQuality?1:0),this.applyQuality()}toggleSound(){Me.init(),Me.toggleMute(),this.soundOn=!Me.muted}clearLevel(){for(let t of this.chars)t.rag.removed=!0,t.dispose(this.scene),t.swordMesh&&(this.scene.remove(t.swordMesh),Ch(t.swordMesh));for(let t of this.loose)this.scene.remove(t.mesh),Ch(t.mesh);this.horse&&(this.horse.dispose(this.scene),this.horse=null),this.titan=null,this.ropeMesh.visible=!1,this.chars=[],this.enemies=[],this.loose=[],this.fx.clear()}addChar(t){let e=new Ll(this,t);return e.view.addTo(this.scene),this.scene.add(e.swordMesh),this.chars.push(e),e}startLevel(t){this.clearLevel(),this.level=t,bh("rk3dLevel",t);let e=Lf(t);this.spec=e,this.world.set(e.env,e.big),this.fx.setDecalParent(this.world.env.plat||this.scene),this.tiltWarned=!1;let n=e.type==="titan"?-30:e.type==="horse"?0:-3.2;this.player=this.addChar({team:"player",x:0,z:n,yaw:0,hp:1,color:Yy,speed:gf}),e.type==="horse"&&(this.horse=new zl(this.scene,0,0,0),this.player.mount=this.horse);let s=e.enemies.length;e.enemies.forEach((a,o)=>{let l={team:"enemy",hp:1,skill:e.skill,color:If,yaw:Math.PI};if(a==="titan")Object.assign(l,{x:0,z:28,scale:7,titan:!0,hp:3,speed:1.7,skill:e.skill*.5,color:Ky});else if(a==="big"){let h=o/s*Math.PI*2+ct(-.3,.3),d=ct(16,28);Object.assign(l,{x:Math.sin(h)*d,z:Math.cos(h)*d,scale:1.6,speed:1.6,skill:e.skill*.5,heavy:!0})}else{let h=a==="boss";Object.assign(l,{x:(o-(s-1)/2)*1.9,z:3.6+o%2*.9,hp:h?3:1,armored:h,scale:h?1.38:1,color:h?Zy:If,speed:h?2.1:yt(2.1,3.3,e.skill)})}let c=this.addChar(l);c.titan&&(this.titan=c,c.swordMesh.visible=!1),this.enemies.push(c)}),this.phase="play",this.endT=0,this.time=0,this.slowT=0,this.timeScale=1,this.lastAttackT=-9,this.camYaw=0,this.camTarget=null,this.updateCamera(0,!0),this.hud.setLevel(t);let r=e.type==="titan"?"T\u0130TAN!":e.type==="horse"?"At S\u0131rt\u0131nda":e.boss?"BOSS!":Jy[e.env];this.hud.show(`SEV\u0130YE ${t}`,r,1.8,e.boss||e.type==="titan"?"boss":""),e.type!=="duel"&&e.type!=="boss"&&(this.hintT=Math.max(this.hintT,6)),this.input.clear()}restartLevel(){this.startLevel(this.level)}jumpTo(t){let e=this.level;for(;Lf(e).type!==t;)e++;this.startLevel(e)}frame(t){let e=this.input.taps;if(this.spec.type==="titan"&&this.phase==="play"&&this.player.alive)for(let s of e)this.fireHook(s);e.length=0,this.slowT>0?(this.slowT-=t,this.timeScale=yt(this.timeScale,this.slowScale,Bn(40,t))):this.timeScale=yt(this.timeScale,1,Bn(6,t));let n=t*this.timeScale;if(n>1e-5){let s=Math.ceil(n/Uh-1e-6),r=n/s;for(let a=0;a<s;a++)this.step(r)}this.phase==="win"?(this.endT+=t,this.endT>2.7&&this.startLevel(this.level+1)):this.phase==="lose"&&(this.endT+=t,(this.endT>1.2&&this.input.anyPress||this.endT>5)&&this.restartLevel()),this.hintT>0&&this.level>1&&(this.hintT=Math.min(this.hintT,3)),this.hintT-=t,this.shakeAmt*=Math.exp(-8*t),this.hud.update(t),this.updateCamera(t,!1),this.render(t),this.input.endFrame(t)}step(t){this.h=t,this.time+=t,this.world.step(t),this.horse&&this.horse.update(t,this.player.alive?this.player.stickW:null,this.world);for(let s of this.chars)s.copyBlade(),s.update(t);this.separate(),this.trample();let e=this.world,n=this.lastH;for(let s of this.chars){let r=s.rag;r.step(t,n,e),!s.alive&&r.impact>6&&Me.thud(r.impact*250),r.impact=0;let a=r.pts[q.PELVIS];!r.splashed&&a.y<e.waterY&&(r.splashed=!0,this.fx.splash(a.x,e.waterY,a.z),Me.splash())}for(let s of this.loose)s.step(t,n,e);this.combat(t),this.fx.update(t,e),this.lastH=t}slowmo(t,e){this.slowScale=this.slowT>0?Math.min(this.slowScale,e):e,this.slowT=Math.max(this.slowT,t)}shake(t){this.shakeAmt=Math.min(.35,this.shakeAmt+t)}nearestEnemy(t,e){let n=null,s=e,r=null,a=e;for(let o of this.enemies){if(!o.alive)continue;let l=Math.hypot(o.x-t.x,o.z-t.z);if(o.state==="panic"){l<a&&(a=l,r=o);continue}l<s&&(s=l,n=o)}return n||r}takeAttackToken(){let t=this.spec.skill,e=1+Math.floor(t*2),n=0;for(let s of this.enemies)s.alive&&s.state==="attack"&&n++;return n>=e||this.time-this.lastAttackT<yt(.9,.15,t)?!1:(this.lastAttackT=this.time,!0)}separate(){let t=this.chars,e=this.horse,n=this.world.ropes;for(let s=0;s<t.length;s++){let r=t[s];if(!(!r.alive||r.falling||r.isPlayer&&r.y-r.gy>.5&&!r.mount)){if(n)for(let a of n){if(!a.intact)continue;let o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=.28*r.S+a.r;c<h&&c>1e-4&&(r.x=a.x+o/c*h,r.z=a.z+l/c*h)}if(e&&!r.isPlayer){let a=r.x-e.x,o=r.z-e.z,l=Math.hypot(a,o)||1,c=1+.3*r.S;l<c&&(r.x=e.x+a/l*c,r.z=e.z+o/l*c)}for(let a=s+1;a<t.length;a++){let o=t[a];if(!o.alive||o.falling||o.isPlayer&&o.y-o.gy>.5&&!o.mount)continue;let l=o.x-r.x,c=o.z-r.z,h=Math.hypot(l,c),d=.34*(r.S+o.S);if(h<d&&h>1e-4){let u=(d-h)*.5,f=l/h,p=c/h;this.world.inside(r.x-f*u,r.z-p*u,.3)&&(r.x-=f*u,r.z-=p*u),this.world.inside(o.x+f*u,o.z+p*u,.3)&&(o.x+=f*u,o.z+=p*u)}}}}}trample(){let t=this.horse;if(!t||t.speed<4)return;let e=Math.sin(t.yaw),n=Math.cos(t.yaw),s=t.x+e*1.1,r=t.z+n*1.1;for(let a of this.enemies)!a.alive||a.kb>0||this.time<(a.trampleT||0)||Math.hypot(a.x-s,a.z-r)>.9+.25*a.S||(a.trampleT=this.time+1.5,this.knock(a,e+(a.x-t.x)*.2,n+(a.z-t.z)*.2,t.speed*.9),a.stun=.9,a.state="stagger",a.rag.muscle=.15,a.flash=.1,this.cancelSwing(a),t.speed*=.55,this.fx.popup(a.x,2.6*a.S,a.z,"EZ\u0130LD\u0130!","#fff",20,.8),Me.punch(),this.shake(.1))}fireHook(t){let e=this.player,n=this.titan,s=null,r=t&&n&&n.alive?this.pickTitan(t.x,t.y):null;if(r){let a=n.rag,o=r.bone,l={x:r.x,y:r.y,z:r.z};s={pt:l,pull:48,release:1.6,maxT:2.2,t:0,titan:!0,anchor(){if(o==="head"){let c=a.pts[q.HEAD];l.x=c.x,l.y=c.y,l.z=c.z}else if(a.bones.includes(o)){let c=a.pts[o.a],h=a.pts[o.b];l.x=yt(c.x,h.x,r.u),l.y=yt(c.y,h.y,r.u),l.z=yt(c.z,h.z,r.u)}return l}}}else{let a=Math.sin(this.camYaw),o=Math.cos(this.camYaw),l=30;n&&n.alive&&(a=n.x-e.x,o=n.z-e.z,l=Math.hypot(a,o)||1,a/=l,o/=l),this.hookSide=-this.hookSide;let c=Gt(l-8,5,18),h=6*this.hookSide,d={x:e.x+a*c+o*h,y:Gt(e.y+7,10,16),z:e.z+o*c-a*h};s={pt:d,pull:24,release:4,maxT:1.2,t:0,anchor:()=>d}}e.rope=s,e.y<.05&&(e.vy=Math.max(e.vy,4.5),e.y=.03),Me.swoosh(2)}pickTitan(t,e){let n=this.titan,s=n.rag;this.raycaster.setFromCamera({x:t/this.W*2-1,y:-(e/this.H)*2+1},this.camera);let r=this.raycaster.ray.origin,a=this.raycaster.ray.direction,o=r.x+a.x*400,l=r.y+a.y*400,c=r.z+a.z*400,h=null,d=1/0;for(let p of s.bones){if(!p.vis)continue;let x=s.pts[p.a],g=s.pts[p.b];aa(r.x,r.y,r.z,o,l,c,x.x,x.y,x.z,g.x,g.y,g.z);let m=p.r*1.3+.6;Ae.d2<m*m&&Ae.s<d&&(d=Ae.s,h={bone:p,u:Ae.t,x:yt(x.x,g.x,Ae.t),y:yt(x.y,g.y,Ae.t),z:yt(x.z,g.z,Ae.t)})}let u=s.pts[q.HEAD];Ml(u.x,u.y,u.z,r.x,r.y,r.z,o,l,c);let f=s.d.headR*1.3+.6;return Ai.d2<f*f&&Ai.t<d&&(h={bone:"head",u:0,x:u.x,y:u.y,z:u.z}),h}knock(t,e,n,s){let r=Math.hypot(e,n)||1;t.vx+=e/r*s,t.vz+=n/r*s,t.kb=.3}onSwingStart(t){if(t.isPlayer)for(let e of this.enemies){if(!e.alive||e.state!=="fight"||e.stun>0)continue;Math.hypot(e.x-t.x,e.z-t.z)<2&&Math.random()<yt(.04,.3,e.skill)&&this.knock(e,e.x-t.x,e.z-t.z,4.2)}}cancelSwing(t){if(t.aimCtl){t.swW=-t.swW*.5,t.aimYaw=t.swYaw,t.episode=null,t.isPlayer||(t.aimA=t.swYaw,t.plan=null,t.state==="attack"&&(t.state="fight",t.cool=ct(.4,.9)));return}let e=t.swing;if(!e)return;let n=t.swingMode();n===1?t.swing=null:n===2&&(e.a1=yt(e.a0,e.a1,sa((e.t-e.wind)/e.dur)),e.t=e.wind+e.dur)}dropSword(t){if(!t.hasSword||!t.swordMesh)return;t.hasSword=!1;let e=t.sw,n=this.h||Uh,s={x:(t.bCur.bx-t.bPrev.bx)/n,y:(t.bCur.by-t.bPrev.by)/n,z:(t.bCur.bz-t.bPrev.bz)/n},r=(Pi+Il)*t.S;this.loose.push(new Tl(t.swordMesh,{x:e.gx,y:e.gy,z:e.gz},{x:e.dx,y:e.dy,z:e.dz},{x:e.wx,y:e.wy,z:e.wz},s,r)),t.swordMesh=null}combat(t){for(let e of this.chars){if(!e.alive||!e.swingActive)continue;let n=e.bPrev,s=e.bCur,r=Math.min(n.bx,n.tx,s.bx,s.tx)-.2,a=Math.max(n.bx,n.tx,s.bx,s.tx)+.2,o=Math.min(n.by,n.ty,s.by,s.ty)-.2,l=Math.max(n.by,n.ty,s.by,s.ty)+.2,c=Math.min(n.bz,n.tz,s.bz,s.tz)-.2,h=Math.max(n.bz,n.tz,s.bz,s.tz)+.2;this.world.ropes&&this.cutRopes(e,n,s,r,a,c,h);let d=e.isPlayer?this.enemies:e.titan?[this.player]:this.chars;for(let u of d){let f=e.curEp;if(!f)break;if(u===e||f.hits.has(u)||!e.isPlayer&&!u.alive)continue;let p=u.rag.bounds(this._bb);if(p.x1<r||p.x0>a||p.y1<o||p.y0>l||p.z1<c||p.z0>h)continue;if(u.alive&&u.hasSword&&!u.titan&&!e.titan&&!f.rolled.has(u)){let S=Th(n,s,u.bCur,3,.05);if(S){if(u.swingActive){this.parry(e,u,S);break}if(f.rolled.add(u),Math.random()<(u.isPlayer?.4:yt(.15,.45,u.skill))){this.block(e,u,S);break}}}let x=Eh(u.rag,n,s,4);if(!x)continue;if(e.isPlayer&&!u.titan&&u.alive&&u.hasSword&&u.stun<=0&&u.state!=="attack"&&u.state!=="panic"&&!f.rolled.has(u)&&(f.rolled.add(u),Math.random()<yt(.08,.45,u.skill))){u.blockT=.35,u.blockUx=f.ux,u.blockUy=f.uy,u.counterT=.3,this.block(e,u,x);break}f.hits.add(u);let g=yt(s.bx-n.bx,s.tx-n.tx,x.t)/t,m=yt(s.by-n.by,s.ty-n.ty,x.t)/t,M=yt(s.bz-n.bz,s.tz-n.tz,x.t)/t,b=Math.hypot(g,m,M)||1,_=Gt(b,4,13);g=g/b*_,m=m/b*_,M=M/b*_,this.onHit(e,u,x,g,m,M)}}this.poke()}cutRopes(t,e,n,s,r,a,o){let l=this.world,c=this.h;for(let h of l.ropes){if(!h.intact||h.x<s-h.r||h.x>r+h.r||h.z<a-h.r||h.z>o+h.r)continue;let d=l.ground(h.x,h.z);Qi.bx=h.x,Qi.by=d,Qi.bz=h.z,Qi.tx=h.x,Qi.ty=d+3.2,Qi.tz=h.z;let u=Th(e,n,Qi,3,h.r+.03);u&&(l.cutRope(h,u.y-d,(n.tx-e.tx)/c,(n.tz-e.tz)/c),this.fx.sparks(u.x,u.y,u.z,16),this.fx.popup(u.x,u.y+.6,u.z,"HALAT KOPTU!","#ff7a5c",22,1.2),Me.twang(),this.shake(.14),this.slowmo(.15,.35),!this.tiltWarned&&l.tilt>.17&&(this.tiltWarned=!0,this.fx.popup(this.player.x,2.6,this.player.z,"PLATFORM YATIYOR!","#ffd23f",26,1.6)))}}poke(){for(let t of this.chars){if(!t.alive||!t.aimCtl||!t.hasSword||t.swingActive||t.pokeCd>0||t.y-t.gy>.3&&!t.mount)continue;let e=t.isPlayer?this.enemies:this.chars;for(let n of e){if(n===t||!n.alive||n.kb>0||n.titan)continue;let s=n.rag.bounds(this._bb),r=t.bCur;if(s.x1<Math.min(r.bx,r.tx)||s.x0>Math.max(r.bx,r.tx)||s.z1<Math.min(r.bz,r.tz)||s.z0>Math.max(r.bz,r.tz))continue;let a=Eh(n.rag,t.bPrev,t.bCur,2);if(a){if(t.isPlayer&&n.state==="panic"){this.fx.popup(n.x,2.3*n.S,n.z,"\u015E\u0130\u015ELEND\u0130!","#ffd23f",22,1.1),this.onHit(t,n,a,t.sw.dx*7,t.sw.dy*7,t.sw.dz*7),n.alive&&this.killEnemy(n,t,null,t.sw.dx*7,1,t.sw.dz*7),t.pokeCd=.2;break}this.knock(n,t.sw.dx,t.sw.dz,t.isPlayer?2.4:n.isPlayer?1.8:1.4),this.knock(t,-t.sw.dx,-t.sw.dz,1),t.pokeCd=.35,Me.punch();break}}}}parry(t,e,n){this.cancelSwing(t),this.cancelSwing(e);for(let s of[t,e])s.stun=.35,s.isPlayer||(s.state="stagger");this.knock(t,t.x-e.x,t.z-e.z,2.6),this.knock(e,e.x-t.x,e.z-t.z,2.6),this.fx.sparks(n.x,n.y,n.z,26),this.fx.popup(n.x,n.y+.3,n.z,"KLANG!","#ffe38a",20,.7),Me.clang(),this.slowmo(.1,.3),this.shake(.08)}block(t,e,n){this.cancelSwing(t),t.stun=t.isPlayer?.6:.45,t.isPlayer||(t.state="stagger"),this.knock(t,t.x-e.x,t.z-e.z,2.2),this.fx.sparks(n.x,n.y,n.z,18),this.fx.popup(n.x,n.y+.3,n.z,"BLOK!","#9be7ff",18,.7),Me.clang(),this.shake(.05)}applyCut(t,e){let n=e.bone,s=e.u;return e.head&&(n=t.boneWith(q.HEAD),n>=0&&(s=t.bones[n].b===q.HEAD?.7:.3)),n<0||t.bones[n].len<$d*t.S?null:t.cut(n,s)}gore(t,e,n,s,r,a){let o=this.h;if(e){let l=t.comp[e.i1],c=t.comp[e.i2],h=t.compSize(l)<t.compSize(c)?l:c;t.addVel(s*.35,r*.35+2,a*.35,o,h),this.fx.spray(e.x,e.y,e.z,s,r,a,34,.5,5),this.fx.spray(e.x,e.y,e.z,0,1,0,14,.9,3),this.fx.bleed(t,e.i1,ct(1.2,2.2)),this.fx.bleed(t,e.i2,ct(1.2,2.2)),this.fx.sparks(e.x,e.y,e.z,5),Me.slice()}else this.fx.spray(n.x,n.y,n.z,s,r,a,16,.7,3),Me.wound()}onHit(t,e,n,s,r,a){let o=e.rag,l=e.alive,c=!t.isPlayer&&!e.isPlayer;if(c&&l&&Math.random()<.55&&(e.grudge=t,e.grudgeT=4),e.isPlayer&&l){this.hitPlayer(t,e,n,s,r,a);return}let d=l&&e.armored&&e.hp>1?null:this.applyCut(o,n);if(o.addVel(s*.2,r*.2+.6,a*.2,this.h),this.gore(o,d,n,s,r,a),t.swordMesh){let u=t.swordMesh.userData.bladeMat;t.blood=Math.min(1,(t.blood||0)+.12),u.color.setRGB(yt(.89,.75,t.blood),yt(.91,.12,t.blood),yt(.93,.15,t.blood))}if(l){if(e.titan&&d&&(d.kind==="arm"||d.kind==="leg")){if(e.hp--,d.kind==="arm"&&e.checkGrip(),e.hp>0){e.flash=.15,e.stun=.8,e.state="stagger",this.cancelSwing(e),this.fx.popup(e.x,9,e.z,d.kind==="leg"?"BACA\u011EI G\u0130TT\u0130!":"KOLU G\u0130TT\u0130!","#ffd23f",26,1.2),this.fx.popup(e.x,7.5,e.z,`${e.hp} CAN KALDI`,"#fff",18,1.1),this.slowmo(.2,.3),this.shake(.15);return}this.killEnemy(e,t,d,s,r,a);return}if(d&&d.kind==="arm"){e.checkGrip(),e.flash=.1,e.hasSword?(e.stun=.45,e.state="stagger",this.fx.popup(e.x,2.1*e.S,e.z,"KOLSUZ!","#ffd23f",18,1)):(e.state="panic",e.grudge=null,this.fx.popup(e.x,2.1*e.S,e.z,"AAAA!","#fff",22,1.2)),this.knock(e,s,a,2.5),this.slowmo(.08,.35);return}if(d?e.hp=0:e.hp--,e.hp>0){e.flash=.12,e.stun=.5,e.state="stagger",e.rag.muscle=.3,this.knock(e,s,a,3),this.fx.popup(e.x,2.3*e.S,e.z,c?"HEY!":`${e.hp} CAN KALDI`,"#fff",16,.9),this.slowmo(.08,.35),this.shake(.06);return}this.killEnemy(e,t,d,s,r,a)}}hitPlayer(t,e,n,s,r,a){if(e.invuln>0)return;let o=e.rag,l=n.head?"neck":o.bones[n.bone].kind;this.hud.flash=.6,this.shake(.15),this.cancelSwing(e);let c=l==="torso"?null:this.applyCut(o,n);o.addVel(s*.25,r*.2+1.2,a*.25,this.h),this.gore(o,c,n,s,r,a);let h=o.pts;if(c&&(c.kind==="neck"||!h[q.LHAND].attached&&!h[q.RHAND].attached)){e.die(),o.addVel(s*.5,3,a*.5,this.h),this.lose(c.kind==="neck"?"Kafan gitti.":"\u0130ki kolun da gitti.");return}if(e.hurtT=.3,e.invuln=c?.9:.6,e.flash=.12,this.knock(e,e.x-t.x,e.z-t.z,t.titan?10:c?4:5),t.titan&&!e.mount&&(e.vy=7,e.y=Math.max(e.y,.05),e.rope=null),Me.hurt(),!c){this.slowmo(.12,.4);return}e.checkGrip();let d=2.1*e.S;c.kind==="arm"?this.fx.popup(e.x,d,e.z,"KOLUN G\u0130TT\u0130!","#ff5a6e",22,1.3):c.kind==="leg"&&this.fx.popup(e.x,d,e.z,e.legMask?"TEK AYAK!":"BACAKSIZ DEVAM!","#ff5a6e",22,1.3),this.slowmo(.25,.3)}killEnemy(t,e,n,s,r,a){t.die();let o=this.h;t.rag.addVel(s*.45,r*.3+2.5,a*.45,o),t.rag.addSpin(ct(-5,5),ct(-3,3),ct(-5,5),o);let l=2.2*t.S;t.titan&&(this.fx.popup(t.x,8,t.z,"T\u0130TAN D\xDC\u015ET\xDC!","#ffd23f",34,1.6),this.shake(.3)),n&&(n.kind==="neck"?this.fx.popup(t.x,l,t.z,"KAFA G\u0130TT\u0130!","#ffd23f",26,1.2):n.kind==="torso"?this.fx.popup(t.x,l,t.z,"\u0130K\u0130YE B\xD6L\xDCND\xDC!","#ffd23f",26,1.2):n.kind==="leg"&&this.fx.popup(t.x,l,t.z,"BACAKSIZ!","#ffd23f",24,1.2));let c=e?e.curEp:null;c&&(c.kills++,c.kills>=2&&e.isPlayer&&this.fx.popup(e.x,2.6,e.z,c.kills===2?"\xC7\u0130FTE!":"KATL\u0130AM!","#ff5a36",30,1.3)),e&&!e.isPlayer&&!t.titan&&this.fx.popup(t.x,l+.5,t.z,"DOST ATE\u015E\u0130!","#ff8ad8",24,1.3),Me.combo(3),this.shake(.12),this.checkWin(),this.phase!=="win"&&this.slowmo(.16,.28)}checkWin(){this.phase==="play"&&(this.enemies.some(t=>t.alive)||(this.phase="win",this.endT=0,this.slowmo(1.1,.2),this.hud.show("TEM\u0130ZLEND\u0130!",`Lv ${this.level} ge\xE7ildi`,2.6,"win"),Me.win()))}lose(t){this.phase==="play"&&(this.phase="lose",this.endT=0,this.slowmo(1.2,.25),Me.die(),this.hud.show("\xD6LD\xDCN",`${t||vl($y)}  \xB7  Tekrar i\xE7in dokun`,0,"lose"))}onFell(t){if(!t.alive)return;t.die();let e=!!this.world.env.roof;this.fx.popup(t.x,t.gy+1.2,t.z,e?"A\u015EA\u011EI D\xDC\u015ET\xDC!":"SUYA D\xDC\u015ET\xDC!","#9be7ff",24,1.3),t.isPlayer?this.lose(e?"Platformdan d\xFC\u015Ft\xFCn.":"Suya d\xFC\u015Ft\xFCn."):(Me.combo(5),this.checkWin())}updateCamera(t,e){let n=this.player,s=n.rag.pts[q.PELVIS],r=n.alive?n.x:s.x,a=n.alive?n.z:s.z,o=this.spec.type,l=n.alive?n.y:Math.max(n.gy,s.y-.8),c=this.camTarget;if(o==="titan")c=this.titan&&this.titan.alive?this.titan:null;else if(o==="horse")c=null;else{let S=n.alive?this.nearestEnemy(n,14):null;(!c||!c.alive||c.state==="panic"&&S&&S.state!=="panic"||S&&S!==c&&Math.hypot(S.x-r,S.z-a)<.6*Math.hypot(c.x-r,c.z-a))&&(c=S)}this.camTarget=c;let h=this.camYaw;c&&n.alive?h=Math.atan2(c.x-r,c.z-a):n.alive&&Math.hypot(n.vx,n.vz)>1?h=n.yaw:n.alive||(h=this.camYaw+t*.3);let d=c&&Math.hypot(c.x-r,c.z-a)<2.4*c.S,u=o==="horse"?1.8:d?.6:c?2.5:1.2;this.camYaw=e?h:this.camYaw+tn(h-this.camYaw)*Bn(u,t);let f=this.H>this.W,p=f?4:4.1,x=f?3.5:2.6,g=1.9,m=f?.55:.8;o==="horse"&&(p=f?6.8:6.2,x=f?5.2:4.2,g=3.5,m=1.2),o==="titan"&&(p=f?9.5:8.5,x=f?4.5:3.6,g=7,m=3+l*.5);let M=Math.sin(this.camYaw),b=Math.cos(this.camYaw);En.set(r-M*p,x+l*(o==="titan"?.85:1),a-b*p),e?this.camera.position.copy(En):this.camera.position.lerp(En,Bn(7,t));let _=En.set(r+M*g,m+(o==="titan"?l*.5:o==="roof"?l:0),a+b*g);e?this.lookAt.copy(_):this.lookAt.lerp(_,Bn(9,t)),this.camera.lookAt(this.lookAt),this.shakeAmt>.001&&(this.camera.position.x+=(Math.random()-.5)*this.shakeAmt,this.camera.position.y+=(Math.random()-.5)*this.shakeAmt)}updateRope(){let t=this.player,e=t.alive?t.rope:null,n=this.ropeMesh;if(!e){n.visible=!1;return}let s=e.anchor(),r=t.rag.pts[q.NECK];En.set(s.x-r.x,s.y-r.y,s.z-r.z);let a=En.length();n.visible=!0,n.position.set(r.x,r.y,r.z),n.scale.set(1,a,1),n.quaternion.setFromUnitVectors(Qy,En.multiplyScalar(1/a))}project(t,e,n){return En.set(t,e,n).project(this.camera),En.z>1?null:{x:(En.x+1)/2*this.W,y:(1-En.y)/2*this.H}}render(t){for(let s of this.chars)if(s.view.update(t),s.alive&&s.hasSword&&s.swordMesh){let r=s.sw;Ph(s.swordMesh,r.gx,r.gy,r.gz,r.dx,r.dy,r.dz,r.wx,r.wy,r.wz)}for(let s of this.loose)s.render();this.horse&&this.horse.render(),this.updateRope(),this.fx.flush(),this.world.update(t,this.camera.position);let e=this.player,n=e.rag.pts[q.PELVIS];this.world.followShadow(n.x,n.z),this.renderer.render(this.scene,this.camera),this.hud.draw(this.projectFn,this.fx.popups,this.input,this.hintT,this.player,this.spec.type)}};function jy(i){let t=document.createElement("div");t.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;background:#1c1a2e;color:#fff;font:600 17px/1.5 system-ui,sans-serif;text-align:center;z-index:9",t.innerHTML=`<div style="max-width:420px"><div style="font-size:26px;font-weight:900;margin-bottom:10px">3D ba\u015Flat\u0131lamad\u0131</div>Bu taray\u0131c\u0131 WebGL a\xE7amad\u0131. Telefonda Safari ya da Chrome'un g\xFCncel s\xFCr\xFCm\xFCn\xFC kullan; bilgisayarda taray\u0131c\u0131 ayarlar\u0131ndan donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7.</div>`,document.body.appendChild(t),console.error(i)}var kl=null;try{kl=new Bl}catch(i){jy(i)}if(kl){window.game=kl;let i=performance.now(),t=e=>{let n=Math.min(.05,Math.max(0,(e-i)/1e3));i=e,kl.frame(n),requestAnimationFrame(t)};requestAnimationFrame(t)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
