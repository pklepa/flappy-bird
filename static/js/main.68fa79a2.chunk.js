(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[0],{51:function(e,t,i){var n={"./ion-phaser.entry.js":[58,5]};function r(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return i.e(t[1]).then((function(){return i(r)}))}r.keys=function(){return Object.keys(n)},r.id=51,e.exports=r},54:function(e,t,i){"use strict";i.r(t);var n=i(0),r=i.n(n),o=i(11),s=i.n(o),a=i(71),c=i(73),l=i(19),p=i(12),h=i(2),u=new function e(){var t=this;Object(p.a)(this,e),this.currentScore=0,this.isCurrentlyPlaying=!1,this.showOverlay=!0,this.increaseScore=function(){t.currentScore+=1},this.resetScore=function(){t.currentScore=0},this.startGame=function(){t.isCurrentlyPlaying=!0},this.endGame=function(){t.isCurrentlyPlaying=!1,t.showOverlay=!0},this.hideOverlay=function(){t.showOverlay=!1},Object(h.m)(this,{currentScore:h.n,isCurrentlyPlaying:h.n,showOverlay:h.n,increaseScore:h.f,resetScore:h.f,startGame:h.f,endGame:h.f,hideOverlay:h.f})},d=i(3),f=Object(a.a)({wrapper:{display:"flex",width:"320px",height:"480px",margin:"30px",position:"relative"}});var y=function(e){var t=e.children,i=f();return Object(d.jsx)("div",{id:"game-wrapper",className:i.wrapper,children:t})},g=i(31),b=i(13),m=i.n(b),j=i(15),O=i(17),x=i(16),v="INCREASE_SCORE",S="RESET_SCORE",k="GAME_START",w="GAME_END",P=[{key:v,handler:function(){console.log(v),u.increaseScore(1)}},{key:S,handler:function(){console.log(S),u.resetScore()}},{key:k,handler:function(){console.log(k),u.startGame()}},{key:w,handler:function(){console.log(w),u.endGame()}}],C=800,G=125,E=300,N=50,A=[220,280],T=[120,150],I="bestFlappyScore",B=480,F=function(e){Object(O.a)(i,e);var t=Object(x.a)(i);function i(e){return Object(p.a)(this,i),t.call(this,"PlayGame")}return Object(j.a)(i,[{key:"preload",value:function(){this.load.image("bird","images/neil.png"),this.load.image("pipe","images/pipe2.png"),this.load.image("background","/images/background.png")}},{key:"create",value:function(){var e=this;P.map((function(t){return e.events.on(t.key,t.handler,e)})),this.add.sprite(0,0,"background").setOrigin(0,0),this.pipeGroup=this.physics.add.group(),this.pipePool=[];for(var t=0;t<4;t++)this.pipePool.push(this.pipeGroup.create(0,0,"pipe")),this.pipePool.push(this.pipeGroup.create(0,0,"pipe")),this.placePipes(!1);this.bird=this.physics.add.sprite(80,B/2,"bird"),this.input.once("pointerdown",(function(){e.pipeGroup.setVelocityX(-G),e.bird.body.gravity.y=C,e.input.on("pointerdown",e.flap,e),e.events.emit(k)}),this),this.score=0,this.topScore=null==localStorage.getItem(I)?0:localStorage.getItem(I),this.scoreText=this.add.text(10,10,""),this.updateScore(this.score)}},{key:"updateScore",value:function(e){this.score+=e,this.scoreText.text="Score: "+this.score+"\nBest: "+this.topScore}},{key:"placePipes",value:function(e){var t=this.getRightmostPipe(),i=m.a.Math.Between(T[0],T[1]),n=m.a.Math.Between(N+i/2,B-N-i/2);this.pipePool[0].x=t+this.pipePool[0].getBounds().width+m.a.Math.Between(A[0],A[1]),this.pipePool[0].y=n-i/2,this.pipePool[0].setOrigin(0,1),this.pipePool[1].x=this.pipePool[0].x,this.pipePool[1].y=n+i/2,this.pipePool[1].setOrigin(0,0),this.pipePool=[],e&&(this.updateScore(1),this.events.emit(v))}},{key:"flap",value:function(){this.bird.body.velocity.y=-E}},{key:"getRightmostPipe",value:function(){var e=0;return this.pipeGroup.getChildren().forEach((function(t){e=Math.max(e,t.x)})),e}},{key:"update",value:function(){this.physics.world.collide(this.bird,this.pipeGroup,(function(){this.die()}),null,this),(this.bird.y>B||this.bird.y<0)&&this.die(),this.pipeGroup.getChildren().forEach((function(e){e.getBounds().right<0&&(this.pipePool.push(e),2===this.pipePool.length&&this.placePipes(!0))}),this)}},{key:"die",value:function(){var e=this;localStorage.setItem(I,Math.max(this.score,this.topScore)),this.scene.restart("PlayGame"),this.events.emit(w),P.map((function(t){return e.events.removeListener(t.key)}))}}]),i}(m.a.Scene),M=i(37),R=Object(l.a)((function(){var e=Object(n.useState)(!0),t=Object(g.a)(e,1)[0],i=Object(n.useState)({width:"100%",height:"100%",type:m.a.AUTO,backgroundColor:5270709,scale:{mode:m.a.Scale.FIT,autoCenter:m.a.Scale.CENTER_BOTH,width:320,height:480},pixelArt:!0,physics:{default:"arcade",arcade:{gravity:{y:0}}},scene:F}),r=Object(g.a)(i,1)[0];return Object(d.jsx)(M.a,{game:r,initialize:t})})),_=i(75),z=Object(a.a)({appbar:{background:"none",alignItems:"center"},title:{display:"flex",alignItems:"center",fontWeight:400,fontSize:"26px",fontFamily:"'Josefin Sans', sans-serif",letterSpacing:"1px"},logo:{width:"150px",height:"50px",margin:"0 10px"}});var D=function(){var e=z();return Object(d.jsx)(_.a,{className:e.appbar,position:"absolute",children:Object(d.jsxs)("h1",{className:e.title,children:["Flappy",Object(d.jsx)("img",{className:e.logo,src:"/flappy-bird/images/adeptly.png",alt:"Adeptly"})]})})},J=Object(a.a)({title:{fontFamily:"monospace",fontSize:"18px",textAlign:"center",color:"whitesmoke",width:"100%",display:"block",position:"absolute",top:0,left:0,animation:"$scaleAndBounce 2s ease-in-out infinite"},"@keyframes scaleAndBounce":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(.8)"},"100%":{transform:"scale(1)"}}});var U=function(){var e=J();return Object(d.jsx)("h1",{className:e.title,children:"Click to start"})},H=i(74),L=Object(a.a)({container:{position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(3px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},title:{fontFamily:"monospace",fontSize:"24px",textAlign:"center",textTransform:"uppercase"}}),V=Object(l.a)((function(e){var t=e.store,i=L();return Object(d.jsxs)("div",{className:i.container,children:[Object(d.jsx)("h1",{className:i.title,children:"Game Over"}),Object(d.jsxs)("h2",{children:["Score: ",t.currentScore]}),Object(d.jsx)(H.a,{onClick:function(){t.hideOverlay(),t.resetScore()},variant:"contained",color:"primary",children:"Play Again"})]})})),W=Object(a.a)({root:{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#202430",color:"whitesmoke",paddingTop:"100px",minHeight:"100vh",width:"100%"}}),X=Object(l.a)((function(){var e=W();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(c.a,{}),Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(D,{}),Object(d.jsxs)(y,{children:[Object(d.jsx)(R,{}),u.showOverlay&&Object(d.jsx)(V,{store:u}),!u.isCurrentlyPlaying&&Object(d.jsx)(U,{})]})]})]})}));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(X,{})}),document.getElementById("root"))}},[[54,2,3]]]);
//# sourceMappingURL=main.68fa79a2.chunk.js.map