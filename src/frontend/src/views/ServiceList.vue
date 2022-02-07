<template>
    <div>
        <table>
            <div id="wrapper">
                <div class="container">
                    <div class="col-md-12">
                        <table class="table table-striped table-horizontal table-bordered mt-3">
                        <thead class="thead-strong">
                            <tr>
                                <th width="10%">글번호</th>
                                <th width="">제목</th>
                                <th width="10%">작성자</th>
                                <th width="15%">작성일</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            
                            <tr v-for="(result,index) in ResultMap" :key = "result" >
                                <th  scope="row">{{ nowpage*5+index + 1 }} </th>
                                <td>{{ result.title }}</td>
                                <td>{{ result.registerId }}</td>
                                <td>{{ result.registerTime }}</td>
                            </tr>
                        </tbody>
                    </table>
                        <div class="btn-cover" >
                        <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">이전</button>
                        <span class="page-count">{{ nowpage+1 }}/{{ maxpage }} 페이지</span>
                        <button :disabled="pageNum >= page - 1" @click="nextPage" class="page-btn">다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </table>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
      return {
        ResultMap: [],
        nowpage: 0,
        maxpage: 0,
       }
      
    },
    name:"servicelist",
     
    methods:
    {
        async getlist(){
            await axios.get('http://192.168.0.57:9999/api/boardlist',{
                params : {
                    page : this.nowpage,
                    size : 10
                }
            })
            .then(res =>{
                    this.ResultMap = res.data.list;
                    this.maxpage = res.data.totalPage;
                })
            .catch(error => 
                console.log(error));
        },
        nextPage(){
            if(this.maxpage-1 != this.nowpage){
                this.nowpage = this.nowpage+1;
                this.getlist();
            }
        },
        prevPage(){
            if(this.nowpage !=0){
                this.nowpage = this.nowpage-1;
                this.getlist();
            }
        }
    },
    created(){
        },
    mounted(){
        this.getlist();
    },
}
</script>
<style scoped>

/* 모바일용 화면 */
@media(min-width: 300px) and (max-width: 599px) {
    .container{
        max-width: 480px;
        width: 100%;
    }
    .btn-cover{
        margin : 0 auto;
        width:30%;
    }
    .btn-cover button{
        margin : 0;
    }
}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
.container{
    max-width: 1800%;
}
.btn-cover{
    margin : 0 auto;
    width:100%;
    max-width: 200px;
}
.btn-cover button{
    margin : 0 5px;
}
}
</style>
