function setup(ca,cb) {
   createCanvas(400, 400);
   colorMode(RGB,1);
   pixelDensity(1);
   loadPixels();
  
  for(var x=0;x<width;x++)//noprotect
  {
    for(var y=0;y<height;y++)
    {
      var a=map(x,0,width,-2,2);
      var b=map(y,0,height,-2,2);
      
       
      var z=0;
      var n=0;
      for(n=0;n<100;n++)
      {
        var aa=(a*a - b*b);
        var bb=(2*a*b);
        
        a=aa + ca;
        b=bb + cb;
        if((aa*aa+bb*bb)>16)
        {
          break;
        }
         var bright=map(n,0,100,0,255);
      if(n==100)
      {
        bright=255;
      }
       var pix=(x+y*width)*4;
       pixels[pix+0]=bright%256;
       pixels[pix+1]=bright%256;
       pixels[pix+2]=bright%256;
       pixels[pix+3]=255;
      // pixels[pix+4]=255;
      }
     
    }
      
  }
  updatePixels();
  
  
}

function draw() {
    var ca=map(mouseX,0,width,-1,1);
    var cb=map(mouseY,0,height,-1,1);
    setup(ca,cb);
     
  
  
}
 