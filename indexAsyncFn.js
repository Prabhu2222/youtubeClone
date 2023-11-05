// async function createArrayOfVideoObj(searchQuery){
//     let api_key="AIzaSyARRCGcxsgHyz7_LmBwMSU-Lbsrm8lJjBw";
//     let base_url="https://www.googleapis.com/youtube/v3";

//     let arrOfObj=[];
//     //first fetch list of videos
//     let videoArr=await getVideos(searchQuery,base_url,api_key);//for empty search it will array of vdeos
   
//       for(let i=0;i<videoArr.length;i++){
//         let objElement=videoArr[i];
//         let videoObj={
//             v_id:objElement.id.videoId,
//             v_title:objElement.snippet.title,
//             v_thumbnail:objElement.snippet.thumbnails.high.url,
//             v_thumbnail_default:objElement.snippet.thumbnails.default.url,
//             v_description:objElement.snippet.description,
//             v_publishedAt:objElement.snippet.publishedAt,

//             vc_id:objElement.snippet.channelId,
//             vc_title:objElement.snippet.channelTitle,
//             vc_logo:await getChannelLogo(objElement.snippet.channelId,base_url,api_key),

//             v_duration:await getVideoDuration(objElement.id.videoId,base_url,api_key),

//             v_iframe:await getVideoIframe(objElement.id.videoId,base_url,api_key),

//             v_stats:await getVideoStatistics(objElement.id.videoId,base_url,api_key),

//             v_comments:await getCommentsOfVideo(objElement.id.videoId,base_url,api_key),

//           };
        
//         arrOfObj.push(videoObj);  

//       }//objElement==>data.items[i]
//    return arrOfObj;
// }



// async function getVideos(searchQuery,base_url,api_key){
//     let responseObj=await  fetch(`${base_url}/search?key=${api_key}&query=${searchQuery}&part=snippet&maxResults=20`)
//     let data =await responseObj.json();
//     return data.items;//returns array of items
// }
// async function getVideoDuration(videoId,base_url,api_key){
//     //part contentDetails will give video duration
//     let responseObj=await  fetch(`${base_url}/videos?key=${api_key}&id=${videoId}&part=contentDetails`)
    
//     try{
//       let data =await responseObj.json();
//       return   data.items[0].contentDetails.duration;
//     }catch(error){
//           return "NA";
//     }
   
//     //duration Format    ->"PT58S"
// }
// async function getVideoIframe(videoId,base_url,api_key){
//   try{
//     let responseObj=await  fetch(`${base_url}/videos?key=${api_key}&id=${videoId}&part=player`)
//     let data =await responseObj.json();
//     return data.items[0].player.embedHtml;
//   }catch(error){
//     console.log("error in extracting iframe:",error);
//   }
   
//     //data.items[0].player.embedHtml   
// }
// async function getVideoStatistics(videoId,base_url,api_key){
//     //part=statistics will show commentCount,likeCount,viewCount,favoriteCount like 
//     try{
//       let responseObj=await  fetch(`${base_url}/videos?key=${api_key}&id=${videoId}&part=statistics`)
//       let data =await responseObj.json();
//       let dataObj={
//         commentCount:data.items[0].statistics.commentCount,
//         favoriteCount:data.items[0].statistics.favoriteCount,
//         likeCount:data.items[0].statistics.likeCount,
//         viewCount:data.items[0].statistics.viewCount
//       }
//       return dataObj;
//     }
//     catch(error){
//       console.log("error in extracting video statistics")
//     }

//   //for getting datas->
//   //data.items[0].statistics.commentCount
//   //data.items[0].statistics.favoriteCount
//   //data.items[0].statistics.likeCount
//   //data.items[0].statistics.viewCount
// }
// async function getCommentsOfVideo(videoId,base_url,api_key){
//     //part=snippet and /commentThreas will give all comments of A certain video form videoId
//        let responseObj=await  fetch(`${base_url}/commentThreads?key=${api_key}&videoId=${videoId}&part=snippet&maxResults=20`)
//        let data =await responseObj.json();

//        let arrayOfCommentObjects=[];
//       //  console.log(data)
//        try{
//         for(let i=0;i<data.items.length;i++){
//           let commentObj={
//             comment_msg:data.items[i].snippet.topLevelComment.snippet.textDisplay,
//             author_name:data.items[i].snippet.topLevelComment.snippet.authorDisplayName,
//             author_profpic:data.items[i].snippet.topLevelComment.snippet.authorProfileImageUrl,
//             like_count:data.items[i].snippet.topLevelComment.snippet.likeCount,
//             published_at:data.items[i].snippet.topLevelComment.snippet.publishedAt,
//             reply_count:data.items[i].snippet.totalReplyCount
//          }
//          arrayOfCommentObjects.push(commentObj);
//       }
//       return arrayOfCommentObjects;

//        }catch(error){
//         console.log(error)
//        }
       
//        //loop over array of data.items
//        //then 
//        //data.items[i].snippet.topLevelComment.snippet.textDisplay
// }
// async function getChannelLogo(channelId,base_url,api_key){
//     let responseObj=await  fetch(`${base_url}/channels?key=${api_key}&id=${channelId}&part=snippet`);
//     let data = await responseObj.json();
//      return data.items[0].snippet.thumbnails.default.url;
//     // data.items[0].snippet.thumbnails.high.url ->high resolution thumbanails
//     // data.items[0].snippet.thumbnails.medium.url ->medium resolution thumbanails
//     // data.items[0].snippet.thumbnails.default.url ->high resolution thumbanails
    
// }