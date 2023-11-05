//unload data from localstorage
let currentVideoObj=JSON.parse(localStorage.getItem("currentObj"));
let arrayOfVideoObj=JSON.parse(localStorage.getItem("video-data"));

let commentDiv= document.querySelector(".comments-div");
let rightSectionDiv=document.querySelector(".main-right");

window.addEventListener("load",()=>{
    setIframe();
    updateLeftSideVideoInfo();
    updateRightSide();
})

function setIframe(){
    let iframeDiv=document.querySelector(".iframe-div");
    let iframe=iframeDiv.querySelector("iframe");
    iframeDiv.innerHTML=currentVideoObj.v_iframe;
}

// update video statistics
function updateLeftSideVideoInfo(){
    let videoTitleDiv=document.querySelector(".video-title");
    videoTitleDiv.innerHTML=currentVideoObj.v_title;
    document.getElementById("viewSpan").innerText=`${currentVideoObj.v_stats.viewCount} views`;
    // document.getElementById("uploadDateSpan").innerText
    document.getElementById("likeSpan").innerText=currentVideoObj.v_stats.likeCount;
    document.getElementById("dislikeSpan").innerText="";
   let div= document.querySelector(".cidl-left");
   div.children[0].src=currentVideoObj.vc_logo;

    document.getElementById("channelTitleSpan").innerHTML=currentVideoObj.vc_title;
    // document.getElementById("channelSubscriber").innerHTML=
    document.getElementById("totalCommentSpan").innerHTML=`${currentVideoObj.v_stats.commentCount} Comments`;

    if(currentVideoObj.v_comments!=undefined){
        let arr=currentVideoObj.v_comments;
        for(let i=0;i<arr.length;i++){
            commentObj=arr[i];
            let imgSrc=commentObj.author_profpic;
            let authorName=commentObj.author_name;
            let commentMsg=commentObj.comment_msg;
            let commentLike=commentObj.like_count;
            // let commentDislike
            let commentReplyCount=commentObj.reply_count;
            let div=createExternalCommentDiv(imgSrc,authorName,commentMsg,commentLike,commentReplyCount);
            commentDiv.appendChild(div);
        }
    }    

}

function updateRightSide(){
    for(let i=0;i<arrayOfVideoObj.length;i++){
        let obj=arrayOfVideoObj[i];
        if(obj.v_id!=currentVideoObj.v_id){
            let image=obj.v_thumbnail;
            let videoTitle=obj.v_title;
            let channelTitle=obj.vc_title;
            let viewCount=obj.v_stats.viewCount;
            let card=createVidoCards(image,videoTitle,channelTitle,viewCount);
            rightSectionDiv.append(card);
        }
    }
}
/* <div class="external-comment">
<div class="ec-left-div">
    <img src="images2/User-Avatar (2).png" alt="">
</div>
<div class="ec-right-div">
    <p class="p1"><span>Janes Fouse<span> <span class="p1span1">8hours ago</span> </p>
    <p class="p2">Wow,world is full of different skills</p>
    <d class="p3"><span><i class="fa-solid fa-thumbs-up"></i>3</span> <span><i
                class="fa-solid fa-thumbs-down"></i></span><span>REPLY</span></p>
</div>
</div> */

function createExternalCommentDiv(imgSrc,authorName,commentMsg,commentLike=0,commentDislike=0,replyCount=0){
  let extCommentDiv=document.createElement("div");   
  extCommentDiv.className="external-comment"
          let leftDiv=document.createElement("div");
          leftDiv.className="ec-left-div";
              let img=document.createElement("img");
              img.src=imgSrc;
          leftDiv.append(img);
          
          let rightDiv=document.createElement("div");
          rightDiv.className="ec-right-div";
               let p1=document.createElement("p");   
               p1.className="p1";
                    let span1=document.createElement("span");
                    span1.innerText=authorName;
                    let span2=document.createElement("span");
                    span2.className="p1span1";
                    span2.innerText="8 hours ago";
                p1.append(span1,span2);
                
                let p2=document.createElement("p");
                p2.className="p2";
                p2.innerHTML=commentMsg;

                let p3=document.createElement("p");
                p3.className="p3";
                p3.innerHTML=`<span><i class="fa-solid fa-thumbs-up"></i>${commentLike}</span> <span><i
                class="fa-solid fa-thumbs-down"></i>${commentDislike}</span><span>${replyCount}REPLY</span>`;
          rightDiv.append(p1,p2,p3);
     
    extCommentDiv.append(leftDiv,rightDiv);  
    return extCommentDiv;    

}    





/* <div class="video-container">
<div class="video-thumbnail-div">
    <img alt=""
        src="https://i.ytimg.com/vi/X5QoAqHuaoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCdaY61YukZyIk5gv0qWeeAqHsVew">
</div>

<div class="video-channel-about-div">
    <p class="para1">Clash Royale *MESSED* Up Royal Recruits Evolution
    </p>
    <p class="para2">Ryley CR</p>
    <p class="para3"><span>225K views</span>&#x2027;<span>2 month ago</span></p>
</div>

</div> */
function createVidoCards(imageSrc,videoTitle,channelTitle,viewCount){
    let videoContainerDiv=document.createElement("div");
    videoContainerDiv.className="video-container";
          let videoThumbnailDiv=document.createElement("div");
          videoThumbnailDiv.className="video-thumbnail-div";
              let imgSrc=document.createElement("img");
              imgSrc.src=imageSrc;
           videoThumbnailDiv.append(imgSrc);
           
          let videoInfoDiv=document.createElement("div") 
          videoInfoDiv.className="video-channel-about-div";
                 let para1=document.createElement("p");
                 para1.className="para1";
                 para1.innerText=videoTitle;

                 let para2=document.createElement("div");
                 para2.className="para2";
                 para2.innerText=channelTitle;

                 let para3=document.createElement("div");
                 para3.className="para3";
                 para3.innerHTML=`<span>${viewCount} views</span>&#x2027;<span>2 month ago</span>`
         videoInfoDiv.append(para1,para2,para3);
     
    videoContainerDiv.append(videoThumbnailDiv,videoInfoDiv) ;
    
    return videoContainerDiv;
}