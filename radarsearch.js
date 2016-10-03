//rador search
  
  function mapFR(){
  
  
  
      
        service.radarSearch({
          bounds: map.getBounds(),
          keyword: 'eat'
        }, cb);
      
    
  function cb(results, status) {
      
      
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);

          return;
        }
        
     

        
    
      
    
                                                                    
          function startrplace(results,rmarker){//console log function 
        
          console.log(results,results.length,typeof(results),rplace(results));
           console.log(results[0].geometry.location,rmaker);
        
          }
         
        
        
        
      //    var rmap=document.getElementById('rmapholder');
       //   var rplace1 = rplace(results);
        
       //  createrplace(rmap,rplace1.place_id);
      
         // document.getElementById('pickagain').onclick=function(){
          //  var rmap=document.getElementById('rmapholder');
           // var rplace1 = rplace(results);
        
           //   createrplace(rmap,rplace1.place_id);
          //  };
    
    
          function letgo(ele,rid){// let go button
            var uc=markeryoucenter();
            ele.onclick=function(){
             window.open('https://www.google.com.my/maps/dir'+uc.lat+','+uc.lng+'/'+'place_id:'+rid);
           };
      }
    
    
      
    }
  //radar search end
