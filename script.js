const reels = [
  {
    username: "rishi_01",
    likeCount: 1200,
    isLiked: false,
    commentCount: 85,
    caption: "Beautiful sunset vibes 🌅",
    video: "./vedio/4832019-uhd_2160_3840_30fps.mp4",
    userProfile: "https://example.com/user1.jpg",
    shareCount: 34,
    isFollowed: true,
  },
  {
    username: "travel_guru",
    likeCount: 5400,
    isLiked: true,
    commentCount: 310,
    caption: "Exploring hidden waterfalls 💧",
    video: "./vedio/4832217-uhd_2160_3840_30fps.mp4",
    userProfile: "https://example.com/user2.jpg",
    shareCount: 102,
    isFollowed: false,
  },
  {
    username: "foodie_world",
    likeCount: 2100,
    isLiked: false,
    commentCount: 122,
    caption: "Trying out street food in Delhi 😋",
    video: "./vedio/5159101-uhd_2160_4096_25fps.mp4",
    userProfile: "https://example.com/user3.jpg",
    shareCount: 67,
    isFollowed: true,
  },
  {
    username: "fitness_freak",
    likeCount: 3300,
    isLiked: true,
    commentCount: 190,
    caption: "Morning workout grind 💪",
    video: "./vedio/5561642-uhd_2160_3840_25fps.mp4",
    userProfile: "https://example.com/user4.jpg",
    shareCount: 80,
    isFollowed: false,
  },
  {
    username: "coder_life",
    likeCount: 900,
    isLiked: false,
    commentCount: 45,
    caption: "JavaScript all day everyday 👨‍💻",
    video: "./vedio/5999376-uhd_2160_4096_25fps.mp4",
    userProfile: "https://example.com/user5.jpg",
    shareCount: 15,
     isFollowed: true,
  },
];


var sum = "";
reels.forEach((elem) => {
  sum += ` <div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img src="./download.jpg" alt="" />
              <h4>${elem.username}</h4>
              <button>${elem.isFollowed?'follow':'unfollow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div class="like a">
              <h4 class="likeIcon">${elem.isLiked?'<i class="red ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment a">
                <h4 class="commentIcon"><i class="ri-chat-1-line"></i></h4>
                <h6>${elem.commentCount}</h6>
            </div>
            <div class="share a">
                <h4 class="shareIcon "><i class="ri-share-forward-line"></i></h4>
                <h6>${elem.shareCount}</h6>
            </div>
             <div class="menu a">
                <h4 class="menuIcon "><i class="ri-more-2-fill"></i></h4>
                
            </div>
          </div>
        </div>`;
});

document.querySelector(".allReels").innerHTML = sum;
