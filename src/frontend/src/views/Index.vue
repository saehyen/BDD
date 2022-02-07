<template>
<div>
    <div class="mainbanner">
        <main-banner/>
    </div>
    
    <div class="wrap">
        <div class="story-title">
            <h1>사람들을 위한 <span style="color:#a81431">다양한 사업</span>을 진행합니다.</h1>
            <a href="/sponsorship">전체보기 	&#8594;</a>
        </div>
       <div class="swiper-wrapper"> 
           <hooper :infiniteScroll="true" :wheelControl="false" :mouseDrag="true" :autoPlay="true" :playSpeed="3000" :itemsToShow="4" class="buhooper">
               <slide v-for="bulist in bulists" v-bind:key="bulist">
                    <div class="card" >
                        <a @click=" goStory(bulist.link)"  ><img :src="require(`@/assets/img/${bulist.img}`)"></a>
                        <h1> {{bulist.text}}</h1>
                    </div>
               </slide>
           </hooper>
        </div>
    </div>
    <div class = "support-status-wrap">
        <div class="wrap">
            <div class="support-status">
                <div class="donation-title">
                    <h1>많은 사람들이 <span style="color:#a81431">후원</span>에 참여하였습니다.</h1>
                </div>           
                <div class="status-box" >
                    <div>
                        <p>
                            <span >총 기증한 사람 : </span>
                            <span class="memberCountCon">{{total_donor}} 명</span>
                        </p>
                            <p>
                                <span>총  기증받은 사람 : </span>
                                <span class="memberCountCon">{{total_donee}} 명</span>
                            </p>
                    </div>
                    <div>
                        <p>
                            <span> 기증 받은 금액  : </span>
                            <span class="memberCountCon"> 2,736,000 원</span>
                        </p>
                        <p>
                            <span>누적 헌혈증서 기부 :</span>
                            <span class="memberCountCon">{{total_donation}} 개</span>
                        </p>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap">
            <div class="participating-companies-title">
                <h1>참여기업</h1>
            </div>
        </div>
        <div class="swiper-wrapper"> 
           <hooper :infiniteScroll="true" :wheelControl="false" :hoverPause="false" :mouseDrag="false" :autoPlay="true" :playSpeed="3000" :itemsToShow="6" class="pahooper">
               <slide v-for="palist in palists" v-bind:key="palist">
                    <div class="palist">
                        <a href="#none"><img :src="require(`@/assets/img/${palist.img}`)"></a>
                    </div>
               </slide>
           </hooper>
        </div>
</div>
    
    
</template>
<script>
//import axios from 'axios'
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import axios from 'axios';
import MainBanner from '../components/MainBanner.vue';
export default {
    components: {
        Hooper,
        Slide,
        MainBanner
    },
    data(){
        return{
            donation : [],
            title_lists : [],
            total_donation : 0,
            donee_list : [],
            total_donee:0,
            donor_list :[],
            total_donor:0,
            lists : [],
            pageNum: 0,
            idx : 5,
            palists:[
                {
                    img:"part_ent1.png",
                },
                {
                    img:"part_ent2.png",
                },
                {
                    img:"part_ent3.png",
                },
                {
                    img:"part_ent1.png",
                },
                {
                    img:"part_ent2.png",
                },
                {
                    img:"part_ent3.png",
                },
            ],
            bulists:[
                {
                    link: 1,
                    img:"story2.png",
                    text: "피1",
                },
                {
                    link:2,
                    img:"story6.png",
                    text:"피2",
                },
                {
                    link:3,
                    img:"story7.png",
                    text:"피3",
                },
                {
                    link:4,
                    img:"story8.png",
                    text:"피4",
                }
            ]
        }
    },
    methods: {
        goStory(idx){
            this.$router.push(''+idx);
        },
        getdonation(){
            console.log("hey");
        },
    },
    mounted(){
        this.getdonation();
    },
    created(){
        // 사연 hooper용
        this.getdonation();
        axios.get('http://192.168.0.57:9999/storylist')
            .then(res =>{ 
                this.lists = res.data;
                for(var i =0; i<5; i++){
                this.bulists[i].text = (this.lists[i].story_title);
                this.bulists[i].link = "/storydetail/"+[i+1];
                }
                console.log(this.bulists[1].text)
                // console.log(this.lists[1]);
                // console.log(this.title_lists);
            })
            
            .catch(error => 
            console.log(error));
        // 총 후원 관련
        axios.get('http://192.168.0.57:9999/d_detaillist')
        .then(res =>{ 
            this.donation = res.data;
            for(var i =0; i<this.donation.length; i++){
                this.total_donation += this.donation[i].donationCount;
                this.donee_list.push(this.donation[i].doneeUid) ;
                this.donor_list.push(this.donation[i].donorUid) ;
            }
            //console.log(this.donee_list);
            const donee_set = new Set(this.donee_list);
            const donor_set = new Set(this.donor_list);
            //console.log(set.size);
            this.total_donee = donee_set.size;
            this.total_donor = donor_set.size;
            // for(const item of this.donation){
            //     console.log(item);
            // }
            })
        .catch(error => 
            console.log(error));
            
        }
    }
</script>
<style scoped>
/* 모바일용 화면 */
@media(min-width: 300px) and (max-width: 599px) {
.swiper-wrapper .banner1{
    background:url("../assets/img/banner2.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}
.swiper-wrapper .banner1 p{
    font-size : 35px;
    color: white;
}
.swiper-wrapper .banner1 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner2{
    background:url("../assets/img/banner1.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}

.swiper-wrapper .banner2 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner2 > div> p{
    font-size : 35px;
    color: white;
}

.swiper-wrapper .banner3{
    background:url("../assets/img/banner4.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}

.swiper-wrapper .banner3 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner3 > div> p{
    font-size : 35px;
    color: white;
}    
.card{
    height: 400px;
    border-radius: 50%;
    margin: 10px;
    color: white;
}
.card a:focus{
    outline: none;
}
.card a img{
    display:block;
    object-fit: cover;
    border-radius: 10% 10% 0% 0%;;
}

.card h1{
    width:100%;
    height:40px;
    line-height: 40px;
    background-color: #a81431;
    border-radius: 0 0 10% 10%;
    margin-inline-start: 0px;
    margin-block-end: 0px;
    font-weight:bold;
    text-align: center;
    font-size: 20px;
}
    .story-title a{
        font-size : 30px;
    }
    .status-boxd p>span{
        letter-spacing: 10px;
    }
    .hooper{
        height: 100px;
    }
    .card h1{
    color :white;
    width:100%;
    height:20px;
    line-height: 20px;
    background-color: #a81431;
    border-radius: 0 0 10% 10%;
    margin-inline-start: 0px;
    margin-block-end: 0px;
    font-weight:bold;
    text-align: center;
    font-size: 5px;
}
    .mainbanner{
        min-height: 200px;
    }
    .wrap .story-title {
        flex-direction: column;
    }
    .wrap .story-title a{
        font-size: 15px;
        text-align: right;
        padding-right : 3vw;
    }
    .wrap .story-title > h1 {
        margin-top:2vh;
        font-size : 17px;
        text-align: center;
    }
    .wrap .support-status .donation-title{
        margin: 20px 0;
    }
    .wrap .support-status .donation-title h1{
        text-align: center;
        font-size: 17px;
        padding-top : 2vh;
    }
    .wrap .support-status .status-box {
        display: contents;    
    }
    .wrap .support-status .status-box > div{
        width : 80%;
        height: 10vh;
        background-color:#a81431;;
        border-radius: 5%;
        color: white;
        box-shadow: 3px 3px 3px 3px rgb(37, 11, 11);
        margin : 20px auto;
    } 
    .wrap .support-status .status-box > div > p{
        font-size : 15px;
        height: 50%;
        line-height: 20px;
        display : flex;
        justify-content: center;
        padding : 0 10px;
        font-weight: 200;
    }
    .wrap .participating-companies-title {
    margin :10px 0;
    }
    .wrap .participating-companies-title > h1{
        font-size: 17px;        
    }
    .wrap .story-title {
    width : 100%;
    text-align: left;
    margin:0 auto;
    line-height: 20px;
    display : flex;
    justify-content: space-between;
}

}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
    
.palist{
    width:13vw;
}

.buhooper{
    height:100%;
}
.card{
    height: 400px;
    border-radius: 50%;
    margin: 10px;
    color: white;
}
.card a:focus{
    outline: none;
}
.card a img{
    display:block;
    object-fit: cover;
    height: 360px;
    border-radius: 10% 10% 0% 0%;;
}
.card h1{
    width:100%;
    height:40px;
    line-height: 40px;
    background-color: #a81431;
    border-radius: 0 0 10% 10%;
    margin-inline-start: 0px;
    margin-block-end: 0px;
    font-weight:bold;
    text-align: center;
    font-size: 20px;
}
.mainbanner{
    height: 60vh;
    min-height: 400px;
}
.section{
    height: 100vh;
    font-family: "jua";
    
}
.swiper-wrapper .banner1{
    background:url("../assets/img/banner2.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}
.swiper-wrapper .banner1 p{
    font-size : 35px;
    color: white;
}
.swiper-wrapper .banner1 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner2{
    background:url("../assets/img/banner1.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}

.swiper-wrapper .banner2 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner2 > div> p{
    font-size : 35px;
    color: white;
}

.swiper-wrapper .banner3{
    background:url("../assets/img/banner4.jpg");
    object-fit: cover;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size:100% 100%;
}

.swiper-wrapper .banner3 h1{
    font-size : 60px;
    color: white;
    text-align: center;
}
.swiper-wrapper .banner3 > div> p{
    font-size : 35px;
    color: white;
}
.mySwiper {
    width: 100%;
    height: 60vh;
    margin-bottom: 30px;
  }
.mySwiper02 {
    max-width: 1800px;
    width: 100%;
    height: 30vh;
    margin-bottom: 30px;
  }
.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.swiper-slide3{
      background-color:none;
      margin : 10px;
}
.participating-companies-box{
    background-color: #fdfdfd;
}
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 85%;
}
.mySwiper02 div{
    width : 20%;
}
.mySwiper02 .swiper-slide{
    color: white;
}
.mySwiper02 .swiper-slide img {
    display: block;
    width: 100%;
    height:85%;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    object-fit: cover;
  }
  .mySwiper02 .swiper-slide h1{
      width:100%;
      height: 15%;
      line-height: 70px;
      background-color: #a81431;
      border-bottom-left-radius: 10%;
      border-bottom-right-radius: 10%;
  }
.wrap .story-title {
    width : 100%;
    text-align: left;
    margin:0 auto;
    line-height: 90px;
    display : flex;
    justify-content: space-between;
}
.wrap .story-title a{
    font-weight: 600;
    font-size: 20px;
}
.wrap .story-title a:hover{
    font-weight: 600;
    color:silver;
}
.wrap .story-content{
    height: 50vh;
}
.wrap .story-title > h1 {
    font-size : 40px;
    font-family: "jua";
    color:black;
}
.story-content{
    background-color: rgb(153, 173, 190);
    max-width: 1800px;
}
.wrap .support-status .donation-title{
    margin: 30px 0;
}
.wrap .support-status .donation-title h1{
    text-align: left;
    font-size:40px;
    
}
.wrap .support-status .status-box > div > p{
    font-size : 30px;
    font-weight: bolder;
    height: 50%;
    line-height: 150px;
    
    display : flex;
    justify-content: space-between;
    align-items: center;
    padding : 0 40px;
    font-weight: 400;
}
.support-status-wrap{
    background-color: #f4f4f4;
    padding-bottom : 30px;
}
.wrap .support-status .status-box {
    display: flex;
    max-width: 3000px;
    justify-content: center;
    
    height: 30vh;
    
}

.wrap .support-status .status-box > div{
    width : 40%;
    height: 20vh;
    margin : 50px; 
    background-color:#a81431;;
    border-radius: 5%;
    color: white;
    box-shadow: 3px 3px 3px 3px rgb(37, 11, 11);
} 
.wrap .participating-companies{
   height: 20vh;
   margin : 50px 0;

}
.wrap .participating-companies-title {
    margin :30px 0;
}
.wrap .participating-companies-title > h1{
    font-size: 40px;
    text-align: center;
    
}
.memberCountCon{
    font-weight: bold;
}

.wrap .story-content {
    max-width: 1800px;
    margin : 0 auto;
}
.mySwiper03 .swiper-slide >div>a{
    width: 100%;
    height: 100%;
    background-color:rgb(129, 109, 109) ;
}
.mySwiper03 .swiper-slide {
    margin:0 auto;
}
.mySwiper03 .swiper-slide div{
    width: 100%;
    height: 100%;
    border : 1px solid silver;
    border-radius: 20%;
    padding:50px 10px;
}
.mySwiper03 .swiper-slide img{
 width : 150px;
 height: 100px;

 margin:auto auto;

}}
</style>