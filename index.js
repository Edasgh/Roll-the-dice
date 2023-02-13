

const Rolldice=()=>{ 
        var randomnum1= Math.floor(Math.random()*6) + 1;
        var randomimg1= "dice"+randomnum1+".png";
        var randImgsrc1="./img/"+randomimg1;
        console.log(randImgsrc1);
        
        var img1=document.getElementsByTagName('img')[0]
        img1.src=("src" , randImgsrc1);
        //img1.setAttribute=("src" , randImgsrc1); THIS SYNTAX DIDN'T WORK
 

       //For second image
       var randomnum2= Math.floor(Math.random()*6) + 1;
       var randomimg2= "dice"+randomnum2+".png";
       var randImgsrc2="./img/"+randomimg2;
       
       var img2=document.getElementsByTagName('img')[1]
       img2.src=("src" , randImgsrc2);
       

    //Win or Draw function
    if(randomnum1>randomnum2){
        document.querySelector("h1").innerHTML="&#128681;Player 1 Wins"
    }else if(randomnum2>randomnum1){
        document.querySelector("h1").innerHTML="Player 2 Wins&#128681;"
    }else{
        document.querySelector("h1").innerHTML="Match Draw!"
    }

}


