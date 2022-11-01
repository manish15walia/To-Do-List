var btn=document.getElementById("addbtn");
var input=document.getElementById("input-size");
var box=document.getElementById("tasks");
var arr=[];
let i=1;
btn.addEventListener('click',()=>{

    if(input.value==""){
        return;
    }
    var boxcontent=document.createElement("div");
    var crossbtn=document.createElement("button");
    var upbtn=document.createElement("button");
    var downbtn=document.createElement("button");
    var span=document.createElement("span")


    upbtn.innerHTML=`<img src='https://cdn-icons-png.flaticon.com/512/2268/2268143.png' style="width:20px">` 
    crossbtn.innerHTML=`<img src='https://cdn-icons-png.flaticon.com/512/2961/2961937.png' style="width:20px">`
    downbtn.innerHTML=`<img src='https://cdn-icons-png.flaticon.com/512/2267/2267918.png' style="width:20px;">`
    
    crossbtn.setAttribute("id","cross")
    upbtn.setAttribute("id","up")
    downbtn.setAttribute("id","down")
    span.setAttribute("id","span")
    
    span.innerHTML=" "+input.value;
    boxcontent.appendChild(crossbtn)
    boxcontent.appendChild(upbtn)
    boxcontent.appendChild(downbtn)
    boxcontent.appendChild(span)
    input.value="";
    input.focus()
    boxcontent.setAttribute("class","view")
    arr.push(boxcontent);
    
    for(let a of arr)
        box.appendChild(a);
    
   
    
     crossbtn.addEventListener("click",()=>{
        var content=boxcontent;
        let idx;
        var newarr=[];
        for(let j=0;j<arr.length;j++){
            if(arr[j]!=content){
                newarr.push(arr[j]);
            }
        }
        arr.splice(0, arr.length)
        for(let a of newarr){
            arr.push(a);
        }
         
        box.removeChild(boxcontent);

       
     })
     upbtn.addEventListener("click",()=>{
         var content=boxcontent;
         let idx;
         for(let j=0;j<arr.length;j++){
             if(arr[j]==content){
                 idx=j;
                 break;
             }
         }

         if(idx!=0){
               var c=arr[idx];
               arr[idx]=arr[idx-1];
               arr[idx-1]=c;
         }
        
        
         for(let a of arr)
             box.appendChild(a);
            
        
    })

    downbtn.addEventListener("click",()=>{
        var content=boxcontent;
         let idx;
         for(let j=0;j<arr.length;j++){
             if(arr[j]==content){
                 idx=j;
                 break;
             }
         }

         if(idx!=arr.length-1){
               var c=arr[idx];
               arr[idx]=arr[idx+1];
               arr[idx+1]=c;
         }

         for(let a of arr)
         box.appendChild(a);
        
    })

   

    
})
input.focus()
