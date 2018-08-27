myCanvas=document.querySelector('canvas');
play=document.querySelector("#play");
puase=document.querySelector("#puase");
reset=document.querySelector("#reset");
player=document.querySelector("input");
ctx=myCanvas.getContext('2d');
myCanvas.width=660;
myCanvas.height=500;
xd=310;
yd=460;
xball=310; yball=250;
dxball=1; dyball=1;
arrDel=[];

play.onclick=function(e){

    var play= setInterval(ball,10)
    function ball(){
      
         if(yball+10>=500){
            ctx.clearRect(0,0,660,500)
            ctx.fillStyle="black";
            ctx.font = "70px Lobster";
            ctx.fillText("Game Over",180,250)
            ctx.closePath();
        }
        else if(arrDel.length==60){
            ctx.clearRect(0,0,660,500)
            ctx.fillStyle="black";
            ctx.font = "70px Lobster";
            ctx.fillText("You won",330,250)
            ctx.closePath();
        }
        else{
      

        ctx.beginPath();
        xbox=50;
        ybox=50;
        ctx.clearRect(0,0,660,500)
      for(i=0;i<60;i++){
        ctx.fillStyle="black";
        ctx.fillRect(xbox,ybox,40,20);
        ctx.fill();
        if(arrDel.includes(i)){
            ctx.fillStyle="aqua";
            ctx.fillRect(xbox,ybox,40,20);
            ctx.fill();
 
        }
        else{
        if((ybox==yball+10)&&(xball>=xbox)&&(xball<=xbox+40)){
            dyball=-dyball;
            arrDel.push(i);

        
        }      
        else if((ybox+20==yball-10)&&(xball>=xbox)&&(xball<=xbox+40)){
            dyball=-dyball;
            arrDel.push(i);

        } 
        
        else if((xbox==xball+10)&&(yball>=ybox)&&(yball<=ybox+20)){
            dxball=-dxball;
            arrDel.push(i);

        
        }      
        else if((xbox+40==xball-10)&&(yball>=ybox)&&(yball<=ybox+20)){
            dxball=-dxball;
            arrDel.push(i);

        }
        else if((xbox-10==xball)&&(ybox-10==yball)){
            dxball=-dxball;
            arrDel.push(i);

        }
        else if((xbox+50==xball)&&(ybox-10==yball)){
            dxball=-dxball;
            arrDel.push(i);

        }
        else if((xbox-10==xball)&&(ybox+30==yball)){
            dxball=-dxball;
            arrDel.push(i);

        }
        else if((xbox+50==xball)&&(ybox+30==yball)){
            dxball=-dxball;
            arrDel.push(i);

        }
    else{
        ctx.fillStyle="black";
    ctx.fillRect(xbox,ybox,40,20);
    ctx.fill();
    } }
 
            
           
        xbox=xbox+55;
        if(xbox==600){
            xbox=50;
            ybox=ybox+25;
        }
      
 
        }
        


        document.onkeypress=function(e){
            if(e.key==6){
                if(xd>=560){
                }
                else{xd=xd+20;}
                
            }
            if(e.key==4){
                if(xd<=0){
                }
                else{xd=xd-20;}            }
        }
            ctx.fillStyle="red";
            ctx.fillRect(xd,yd,100,20);
            ctx.fill();
        
     
             
         
        ctx.fillStyle="yellow";

        xball=xball+dxball;
        yball=yball+dyball;
ctx.arc(xball,yball,10,0,Math.PI*2);
ctx.fill();
 if(yball<=10){
     dyball=-dyball;
 }
 if(xball<=10||xball>=650){
    dxball=-dxball;
}
if((yball==yd-10)&&(xball>=xd)&&(xball<=xd+100)){
    dyball=-dyball;

}
         ctx.fillStyle="black";
ctx.font = "20px Arial";
ctx.fillText(player.value+" "+"score :"+arrDel.length,10,20)
ctx.closePath();

}
   
}
puase.onclick=function(e){
    clearInterval(play);
 }
 reset.onclick=function(e){
    clearInterval(play);
    ctx.clearRect(0,0,660,500)

    ctx.beginPath();
    xbox=50;
    ybox=50;
  for(i=0;i<60;i++){
    ctx.fillStyle="black";

    ctx.fillRect(xbox,ybox,40,20);
    ctx.fill();
      
        
       
    xbox=xbox+55;
    if(xbox==600){
        xbox=50;
        ybox=ybox+25;
    }
  

    }
    ctx.fillStyle="red";
    xd=310;
    yd=460;
            ctx.fillRect(xd,yd,100,20);
            ctx.fill();
            ctx.fillStyle="yellow";
            xball=310;
            yball=250;
    ctx.arc(xball,yball,10,0,Math.PI*2);
    ctx.fill();
    arrDel=[];
    dxball=1; dyball=1;

        
 }
}

