import{S,W as P,P as b,a as M,D as W,A as C,k as m,Q as v,p as L}from"./three.module-CrM3Sdgj.js";import{O as y}from"./OrbitControls-D8InQlht.js";import{I as R}from"./I3DMLoader-D1OZbdkw.js";import"./readMagicBytes-Da5ueiou.js";import"./LoaderBase-CVSPpjX2.js";import"./GLTFLoader-Cxf5qH03.js";let n,a,s,e,i;z();f();function z(){s=new S,e=new P({antialias:!0}),e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.setClearColor(1383455),e.shadowMap.enabled=!0,e.shadowMap.type=b,document.body.appendChild(e.domElement),n=new M(60,window.innerWidth/window.innerHeight,1,4e3),n.position.set(100,100,100),a=new y(n,e.domElement),a.screenSpacePanning=!1,a.minDistance=1,a.maxDistance=2e3,i=new W(16777215,1.25),i.position.set(1,2,3).multiplyScalar(40),i.castShadow=!0,i.shadow.bias=-.01,i.shadow.mapSize.setScalar(2048);const o=i.shadow.camera;o.left=-200,o.bottom=-200,o.right=200,o.top=200,o.updateProjectionMatrix(),s.add(i);const h=new C(16777215,.05);s.add(h),new R().loadAsync("https://raw.githubusercontent.com/CesiumGS/3d-tiles-samples/main/1.0/TilesetWithTreeBillboards/tree.i3dm").then(d=>{let t=null;if(d.scene.traverse(r=>{!t&&r.isInstancedMesh&&(t=r)}),t){d.scene.updateMatrixWorld(!0);const r=new m,u=new v,g=new m,w=new L,c=new m;for(let l=0,x=t.count;l<x;l++)t.getMatrixAt(l,w),w.premultiply(t.matrixWorld),w.decompose(r,u,g),c.add(r);c.divideScalar(t.count),a.target.copy(c),n.position.add(c),a.update()}console.log(d),s.add(d.scene)}),p(),window.addEventListener("resize",p,!1)}function p(){n.aspect=window.innerWidth/window.innerHeight,e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),n.updateProjectionMatrix()}function f(){requestAnimationFrame(f),A()}function A(){e.render(s,n)}
