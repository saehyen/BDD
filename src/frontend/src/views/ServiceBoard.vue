<template>
<div>
    <div v-if="prevlog">
    <sub-banner/>
    <div class="service-wrap">
        <div class="board">
            <h1>1:1 문의</h1>
            <!-- <form id="frm" action="/ServiceView/action" method="post"> -->
            <input type="hidden" name="id" th:value = "${info.id}">
                <div class="write-form">
                    <ul>
                        <li class="board-ctg">
                            <div class="board-name"><h4>제목</h4></div>
                            <div class="board-data">
                                <input v-model="title" type="text" class="form-control" name="title" >
                            </div>
                        </li>
                        <li class="board-ctg">
                            <div class="board-name"><h4>내용</h4></div>
                            <div class="board-data">
                                <textarea v-model="content" class="form-control" rows="5" cols="" name="content"></textarea>
                            </div>
                        </li>
                        <li class="board-ctg">
                            <div class="board-name"><h4>첨부파일</h4></div>
                            <div class="board-data" style="font-size: 20px;"><input type="file"></div>
                        </li>
                    </ul>
                </div>
                    <button type="button" class="btn btn-success" onclick="javascript:location.href='/service'">이전</button>
                    <button @click="submit" type="submit" class="btn btn-primary">등록</button>
                <div class="float-right">
                    <button type="button" class="btn btn-danger" th:onclick="fnViewDelete()">Delete</button>
                </div>
            <!-- </form> -->
        </div>
    </div>
    
    </div>
    <div v-if="!prevlog">
    <p class="wrong_access"> 잘못된 접근입니다. </p>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import subBanner from '../components/SubBanner.vue';
export default {
    components:{subBanner},
     name: 'ServiceBoard',
     data(){
        return{
            id : 1,
            title : "",
            content : "",
            registerId : "test",
            prevlog : this.$session.get('islogin')
        }
    },
    methods :{
    submit(){
        var Params ={
            'id' : this.id,
            'title' : this.title,
            'content' : this.content,
            'registerId' : this.$session.get('UserId'),
            }
        const config={
                    baseUrl:'http://192.168.0.57:9999'
            };
        
        axios.post(`${config.baseUrl}/page/service_board/action`,Params     
        )       
            .then((response)=>{
                console.log(response);
                alert("글을 등록하셨습니다.");
                this.$router.push("/service");
            })
            .catch(error => {
                console.log(error);
            })//alert("에러");    
             
        }
    }
}
</script>


<style scoped>
/* 모바일용 화면 */
@media(max-width: 480px) {
    
}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
.board{
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    align-items: center;
    font-size: 25px;
    padding: 80px 50px;
}
.board > h1{
    text-align: center;
    font-size: 40px;
    letter-spacing: 7px;
    margin: 40px 0px;
}
.write-form{
    padding-right: 10%;
}
.board-ctg{
    display: flex;
    padding: 10px 0px;
    text-align: center;
}
.board-ctg .board-name{width: 20%;}
.board-ctg .board-data {width: 80%;}
.board-ctg .board-data input{width: 100%;}
.board-ctg .board-data textarea{width: 100%;height: 500px;}

.board-btn{margin-top:30px; text-align: center;}
.board-btn a{ border: 1.5px solid rgb(160, 156, 156); padding: 10px 20px; margin: 0px 20px;}
.wrong_access{
    font-size:50px;
}
}
</style>