<template>
    <div>
        <table>
            <div id="wrapper">
                <div class="container">
                    <div class="col-md-12">
                        <table class="table table-striped table-horizontal table-bordered mt-3">
                        <thead class="thead-strong">
                            <tr>
                                <th width="10%">게시글번호</th>
               					<th width="">제목</th>
								<th width="10%">현재 후원 수</th>
								<th width="10%">작성일</th>
								<th width="10%">마감일</th>
								<th width="10%">작성자</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            
                  	  		<tr  v-for="(list,index) in ResultMap" :key = "index" >
								<th  scope="row">{{ index + 1 }} </th>
								<td  @mouseover="hover" id="storytd" @click="goStory(list.story_idx)">{{ list.story_title }}</td>
								<td>{{ list.num_donation }}</td>
								<td>{{ list.reg_date }}</td>
								<td>{{ list.fin_date }}</td>
								<td>{{ list.story_id }}</td>
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
		
		nowpage: 0,
		maxpage: 0,
		pageNum:0,
		ResultMap: [],
		baseUrl : 'http://192.168.0.57:9999',
        dates:"",
        story_title: '',
        story_content: '',
        story_id: '',
        num_donation: 0,
        story_file : '',
        fin_date : '',
		reg_date : '',
		
        pageListNum: 0,
        ResultPageMap: [],
        nowListpage: 0,
		maxListpage: 0,
       }
      
	},

	   props: {
      pageSize: {
        type: Number,
        required: false,
        default: 10
      }
    },
	
    name:"sponsorshiplist",
     
    methods:
    {
        async getpagelist(){
            await axios.get('http://192.168.0.57:9999/api/sponsorshiplist',{
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
				this.pageNum = this.nowpage;
                this.getpagelist();
            }
		},
		
        prevPage(){
            if(this.nowpage !=0){
				this.nowpage = this.nowpage-1;
                this.getpagelist();
            }
		},

		    getlist(){
        axios.get('http://192.168.0.57:9999/storylist')
            .then(res =>{ 
                this.lists = res.data;
                this.page = this.pageCount();
            })
            
            .catch(error => 
            console.log(error))
        },
		
		nextListPage(){
      	this.pageListNum+=1;
      	this.lists=this.listslice();
    	},
    	hover(){
            var storytd = document.getElementById("storytd")
            storytd.style.cursor = "pointer"; 
        },
    goStory(idx){
            this.$router.push('/storydetail/'+idx);
    },
    prevListPage(){
      this.pageListNum-=1;
      this.lists=this.listslice();
    },
    
    gettime(){
    var date = new Date();
    this.dates = date.getFullYear() + "-"
    + (date.getMonth()+1) + "-" +
    date.getDate();
    },


		
    },
    created(){
        },
    mounted(){
		this.getpagelist();
		this.getlist();
        this.gettime();
    },
}
</script>
<style scoped>

/* 모바일용 화면 */
@media(max-width: 480px) {
    
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
