const icons = document.querySelectorAll(".img");
const song = document.querySelectorAll(".song");
const title = document.getElementsByTagName('p');
 let isheart=false;
 let ispaused=false;
 let index = 0;
 let titlesongs=['bety1','bety2','bety3']
    icons[0].addEventListener('click', function(){
        if(isheart == false){
            icons[0].src="assets/heart_liked.png";
            icons[0].style.cssText="filter: drop-shadow (0 0 10px #000);";
            isheart=true;
            
        }
        else{
            icons[0].src="assets/heart_default.png";
            isheart=false;
        }
         
    });
    icons[2].addEventListener('click', function(){
        if(ispaused == false){
            icons[2].src="assets/pause.png";
            song[index].play();
            ispaused=true;
            title[0].innerHTML = titlesongs[index];
        }
        else{
            icons[2].src="assets/play-button.png";
            song[index].pause();
            ispaused=false;
        }
    });
    icons[3].addEventListener('click', function(){
        try{
            song[index].pause();
        
        index++;
        song[index].play();
        title[0].innerHTML = titlesongs[index];
        }
        catch(error){
             
            index=0;
            song[index].play();
            title[0].innerHTML = titlesongs[index];
        }
      
        
    });
    icons[1].addEventListener('click', function(){
        try{
            song[index].pause();
        
        index--;
        song[index].play();
        title[0].innerHTML = titlesongs[index];
        }
        catch(error){
             
            index=song.length-1;
            song[index].play();
            title[0].innerHTML = titlesongs[index];
        }
    });
   