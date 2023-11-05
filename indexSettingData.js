// /* <div class="video-container">
// <div class="video-thumbnail-div">
//     <img alt=""
//         src="https://i.ytimg.com/vi/7eKDS4yUIbY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLA-xst065gDtFmd_T-zpxRcWMTMoQ">
//         <div class="duration">23.45</div>
// </div>
// <div class="video-info-div">
//     <div class="channel-profile-pic-div">
//         <img id="img" draggable="false" class="style-scope yt-img-shadow" alt="" width="48"
//             src="https://yt3.ggpht.com/RFlilySYtRRWOQaeoHj3mx58f_SbM4SVg7w3371akGUsOWzSfDtVqnGpbOCXvwcAfhbvA3OKepE=s68-c-k-c0x00ffffff-no-rj">
//     </div>


//     <div class="video-channel-about-div">
//         <p class="para11">Disciplining your Mind to do Hard things to Achieve Maximum Success | Swami
//             Mukundananda </p>
//         <p class="para22">Motivational Sprituality</p>
//         <p class="para33"><span>14K views</span><span></span>&#x2027;<span>1 day ago</span></p>
//     </div>
// </div>
// </div> */
// // create Video Container div for index
// function createVideoContainerIndex(videoThumbnail,duration,channelProfilePic,videoTitle,channelTitle,views){
//  let containerDiv=document.createElement("div");
//  containerDiv.className="video-container";

//     let thumbnailDiv=document.createElement("div");
//     thumbnailDiv.className="video-thumbnail-div";
//             let thumbnailImage=document.createElement("img");
//             thumbnailImage.src=videoThumbnail;
//             let durationDiv=document.createElement("div");
//             durationDiv.className="duration";
//             durationDiv.innerText=duration;
//     thumbnailDiv.append(thumbnailImage,durationDiv);   

// containerDiv.append(thumbnailDiv);
     
//     let videoInfoDiv=document.createElement("div");
//     videoInfoDiv.className="video-info-div";

//             let channelProfDiv=document.createElement("div");
//             channelProfDiv.className="channel-profile-pic-div"
//                 let channelProfImg=document.createElement("img");
//                 channelProfImg.src=channelProfilePic;
//             channelProfDiv.appendChild(channelProfImg);

//     videoInfoDiv.append(channelProfDiv); 
 

//             let videoChannelAboutDiv=document.createElement("div");
//             videoChannelAboutDiv.className="video-channel-about-div";
//                     let para11=document.createElement("p");
//                     para11.className="para11";   
//                     para11.innerText=videoTitle;

//                     let para22=document.createElement("p");
//                     para22.className="para22";
//                     para22.innerText=channelTitle;

//                     let para33=document.createElement("p");
//                     para33.className="para33";
//                         let span1=document.createElement("span")
//                         span1.innerText=`${views} views`;
//                         let span1_1=document.createElement("span")
//                         span1_1.innerHTML=`&nbsp; &#x2022; &nbsp`
//                         let span2=document.createElement("span");
//                         span2.innerText=`5 months ag0`
//                     para33.append(span1,span1_1,span2);    
//             videoChannelAboutDiv.append(para11,para22,para33);

//     videoInfoDiv.append(videoChannelAboutDiv);

// containerDiv.append(videoInfoDiv);

// return containerDiv;
// }

// let videoLayOutDiv=document.querySelector(".video-layout");

// createArrayOfVideoObj("").then((arrayOfObjects)=>{
//     // localStorage.clear();
//     localStorage.setItem("video-data",JSON.stringify(arrayOfObjects));
   
//     for(let i=0;i<arrayOfObjects.length;i++){
//            let obj=arrayOfObjects[i];
//            let v_thumbnail=obj.v_thumbnail;
//            let duration=obj.v_duration;
//            let channelProfPic=obj.vc_logo;
//            let videoTitle=obj.v_title;
//            let channelTitle=obj.vc_title;
//            let view=obj.v_stats.viewCount;
//            let divConatiner=createVideoContainerIndex(v_thumbnail,duration,channelProfPic,videoTitle,channelTitle,view);
//           videoLayOutDiv.append(divConatiner);
//           divConatiner.addEventListener('click',()=>{
//             localStorage.setItem("currentObj",JSON.stringify(obj));
//             window.location.href="index2.html";
//           })
//     }
//     document.querySelector(".loading").classList.add("hide");
      
// })

// window.addEventListener('load',()=>{
//     createArrayOfVideoObj("");
// })

let searchBar=document.getElementById("search");
let button=document.getElementById("button");
// console.log(searchBar)
console.log(button)

button.addEventListener("click",(event)=>{
  console.log("i am clicked",event.target)
    let inputValue=searchBar.value  ; 
    console.log(searchBar.value);
    console.log("i am clicked")

    // createArrayOfVideoObj(inputValue).then((arrayOfObjects)=>{
    //     // localStorage.clear();
    //     localStorage.setItem("video-data",JSON.stringify(arrayOfObjects));
       
    //     for(let i=0;i<arrayOfObjects.length;i++){
    //            let obj=arrayOfObjects[i];
    //            let v_thumbnail=obj.v_thumbnail;
    //            let duration=obj.v_duration;
    //            let channelProfPic=obj.vc_logo;
    //            let videoTitle=obj.v_title;
    //            let channelTitle=obj.vc_title;
    //            let view=obj.v_stats.viewCount;
    //            let divConatiner=createVideoContainerIndex(v_thumbnail,duration,channelProfPic,videoTitle,channelTitle,view);
    //           videoLayOutDiv.append(divConatiner);
    //           divConatiner.addEventListener('click',()=>{
    //             localStorage.setItem("currentObj",JSON.stringify(obj));
    //             window.location.href="index2.html";
    //           })
    //     }
       
          
    // })

})


