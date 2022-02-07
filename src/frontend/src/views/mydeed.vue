<template>
<div>
<sub-banner/>
    <div class="wrap">
        <div id="deed_history" class="deed-history">
            <h1>내 후원증</h1>
            <p> 내가 한 후원 수 : <span  style="color:a81431">{{ tDonation }}</span> 개</p>
            <p> 남은 후원증 : <span  style="color:a81431">{{ userlists[0].my_deednum }}</span>개</p>
            <table>
                <tr>
                    <th width="10%">번호</th>
                    <th width="30%">사연제목</th>
                    <th width="15%">후원증서 기부수</th>                         
                    <th width="10%">수혜자</th>
                </tr>
                <tr  v-for="(list,index) in lists" :key = "index" >
                <th  scope="row">{{ index + 1 }} </th>
                <td @click="goStory(list.story_idx+1)">{{storylists[list.story_idx].story_title}}</td>
                <td> {{ list.donationCount }} </td>
                <td>{{ list.doneeUid }}</td>
                    
                    
            </tr>
                <!-- <tr>
                    <td>1</td>
                    <td>후원증을 <span style="font-weight:700; color:red">{{isdonation}}</span>하셨습니다.</td>
                    <td>5</td>
                    <td>김세현</td>
                    <td>2021.01.01</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>후원증을 <span style="font-weight:700; color:red">{{ischarge}}</span>하셨습니다.</td>
                    <td>3</td>
                    <td>김세현</td>
                    <td>2021.01.01</td>
                </tr> -->
            </table>
        </div>
        
    </div>
    
</div>
   
</template>
<script>
import axios from 'axios';
import subBanner from '../components/SubBanner.vue';
export default {
    components:{subBanner},
    name: 'Mydeed',
    data(){
        return {
            lists:[],
            tDonation : 0,
            remain_deed : 0,
            isdonation : "기증",
            ischarge : "충전",
            donorUid : this.$session.get('UserId'),
            id : this.$session.get('UserId'),
            storylists : [],
            userlists:[]
            
        }
    },
    methods : {
        // 스토리 이동
        goStory(idx){
            this.$router.push('/storydetail/'+idx);
        },
        // axios
        detail_get(){
            axios.get('http://192.168.0.57:9999/d_detail_get',{
                params : {
                    donorUid : this.donorUid
                }
            })
        .then(res =>{ 
            console.log(res);
            this.lists = res.data;
            for(var i=0; i<this.lists.length; i++){
                this.tDonation += this.lists[i].donationCount;
            }
            //console.log(this.lists);
        })
        .catch(error => 
            console.log(error))
        },
        get_stroy(){
        axios.get('http://192.168.0.57:9999/storylist')
        .then(res =>{ 
            //console.log(res);
            this.storylists = res.data;
            //console.log(this.storylists);
        })
        .catch(error => 
            console.log(error))
    }, 
        get_user(){
            axios.get('http://192.168.0.57:9999/userlist', {
                params : {
                    id : this.id
                }
            })
        .then(res =>{ 
            //console.log(res);
            this.userlists = res.data;
            console.log(this.userlists);
        })
        .catch(error => 
            console.log(error))
        }
    },
    created(){
        this.detail_get();
        this.get_stroy();
        this.get_user();
    }
}

</script>


<style scoped>
/* 모바일용 화면 */
@media(max-width: 480px) {
    
}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
.wrap {
    margin : 0 auto;
    max-width: 1800px;
    width:100%;
    
}
.deed-history{
    margin: 50px;
    padding: 50px;
    border: 1px solid black;
}
.deed-history> h1{
    font-size: 40px;
    background-color: #f4f4f4;
}
.deed-history> p{
    font-size : 30px;
    padding : 30px 0;

}
.deed-history tr,td{
    padding : 15px;
}
.deed-history tr:first-child {
    font-size : 20px;
    font-weight: 550;
    padding : 30px;
}
}
</style>