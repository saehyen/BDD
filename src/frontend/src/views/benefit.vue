<template>
<div>
    <sub-banner/>
	<div class="benefit-wrap">
		<div class="wrap">
			<div class="benefit-title">
				<h1>후원 기념 상품 선택</h1>
			</div>
			<div class="total-donation-box">
				<p> 내 후원 수 : <span  style="color:a81431"> {{ userlists[0].member_donation }}</span> 개</p>
				<div>
					<p>상품 선택 : </p>
				</div>
                <div>
                    <select @change="get_select($event)" class="product-option">
                         <option value="wrong" selected disabled hidden >선택해주세요</option>
                        <option v-if="userlists[0].member_donation>=10&&(lists[0].is_get10!=='Y')" value="medal10">10회 메달,키링</option>
                        <option v-if="userlists[0].member_donation>=20&&(lists[0].is_get20!=='Y')" value="medal20">20회 메달,팔찌</option>
                        <option v-if="userlists[0].member_donation>=30&&(lists[0].is_get30!=='Y')" value="medal30">30회 메달,링</option>
                    </select>
                </div>
                <div>
                    <button @click="post_updatelist"><p>받기</p></button>
                </div>
				
			</div>
			<!--	<div id='result'></div>-->

		</div>


		<!--contents-->

	</div>
	<div class="benefit-product-wrap">
		<div class="wrap">
            <!-- 받지 못한 경우 -->
			<div v-if="(lists[0].is_get10=='N')" class="product">
				<p >10회</p>
				<hr size="3" noshade color="EAEAEA">
				<ul >
					<li><img src="../assets/img/medal0.png" alt="메달1">
						<p>10회 메달</p>
					</li>
					<li><img src="../assets/img/product0.png" alt="메달1">
						<p>10회 키링</p>
					</li>
				</ul>
                <p v-if="(lists[0].is_get10=='Y')">10회 상품을 모두 획득하셨습니다.</p>
				<hr size="3" noshade color="EAEAEA">
			</div>
            <!-- 받은 경우 -->
            <div v-if="(lists[0].is_get10=='Y')" class="product">
				<p>10회 상품을 모두 획득하셨습니다.</p>
				<hr size="3" noshade color="EAEAEA">
			</div>
		</div>

		<div class="wrap">
            <!-- 받지 못한 경우 -->
			<div v-if="(lists[0].is_get20=='N')" class="product">
				<p>20회</p>
				<hr size="3" noshade color="EAEAEA">
				<ul>
					<li><img src="../assets/img/medal1.png" alt="메달1">
						<p>20회 메달</p>
					</li>
					<li><img src="../assets/img/product1.png" alt="반지">
						<p>20회 팔찌</p>
					</li>
				</ul>
			</div>
            <!-- 받은 경우 -->
            <div v-if="(lists[0].is_get20=='Y')" class="product">
				<p>20회 상품을 모두 획득하셨습니다.</p>
				<hr size="3" noshade color="EAEAEA">
			</div>
		</div>

		<div class="wrap">
             <!-- 받지 못한 경우 -->
			<div v-if="(lists[0].is_get30=='N')" class="product">
				<p>30회</p>
				<hr size="3" noshade color="EAEAEA">
				<ul>
					<li><img src="../assets/img/medal2.png" alt="메달1">
						<p>30회 메달</p>
					</li>
					<li><img src="../assets/img/product2.jpg" alt="반지">
						<p>30회 반지</p>
					</li>
				</ul>
			</div>
            <!-- 받은 경우 -->
            <div v-if="(lists[0].is_get30=='Y')" class="product">
				<p>30회 상품을 모두 획득하셨습니다.</p>
				<hr size="3" noshade color="EAEAEA">
			</div>
		</div>
	</div>
    </div>
</template>
<script>
import axios from 'axios';
import subBanner from '../components/SubBanner.vue';
export default {
    components:{subBanner},
  name: 'Benefit',
  data(){
        return {
            userlists : [],
            tDonation : 0,
            id : this.$session.get('UserId'),
            sel_product : "",
            lists: [],
        }
  },
  methods:{
        get_user(){
            axios.get('http://192.168.0.57:9999/userlist', {
                params : {
                    id : this.id
                }
            })
        .then(res =>{ 
            //console.log(res);
            this.userlists = res.data;
            console.log("test");
            this.get_benefitlist();
            //console.log(this.userlists);
        })
        .catch(error => 
            console.log(error))
            },
        get_select(event){
            console.log(event.target.value);
            this.sel_product = event.target.value;
        },
        get_benefitlist(){
        axios.get('http://192.168.0.57:9999/allbenefitlist',{
            params : {
                id : this.id
            }
            })
            .then(res =>{ 
                this.lists = res.data;
                console.log(this.lists)
            })
            .catch(error => 
            console.log(error))
        },
        post_updatelist(){
            if(this.sel_product == "medal10"){
                this.lists[0].is_get10 = "Y"
}
            else if(this.sel_product == "medal20"){ 
                this.lists[0].is_get20 = "Y"
            }
            else if(this.sel_product == "medal30"){
                this.lists[0].is_get30 = "Y"
            }
            else {
                alert("상품을 선택하세요");
                return 0;
            }
            axios.post('http://192.168.0.57:9999/checkbenefit',this.lists[0])
            .than(
                alert("상품 획득")
            )
            .catch(error => 
            console.log(error))
        },    
  },
  created(){
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
.total-donation-box button p {
    font-size : 15px;  
    padding : 10px 20px; 
}
.total-donation-box button{
    border-radius: 10%;
}
.benefit-title h1 {
    font-size: 40px;
    text-align: center;
}
.total-donation-box{
    width : 50%;
    border : 1px solid rgb(240, 240, 240);
    border-radius: 3%;
    margin-top: 5vh;
    padding : 10px 10px;
    background-color: rgb(253, 253, 253);
    display : flex;
    align-items: center;
    justify-content: space-between;
}

.product-option {
	height: 40px;
	width: 100%;
	font-size: 20px;
}

.total-donation-box p{
    font-size : 30px;
    text-align: left;
}
.benefit-product-wrap .wrap .product{
    width: 100%;
    margin-top: 2vh;
}
.benefit-product-wrap .wrap .product ul{
    width: 100%;
    display: flex;
    
}
.benefit-product-wrap .wrap .product ul > li{
    width: 20%; 
    height: 30vh;
    border: 1px solid silver; 
    border-radius: 5%;
    margin-right: 4vw;  
    padding : 15px;
}

.benefit-product-wrap .wrap .product img{
    width : 100%;
    height: 85%;
}
.benefit-product-wrap .wrap .product >ul >li > p{
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    height: 15%;
    background-color: rgb(244, 247, 250);
    line-height: 60px;
}
.benefit-product-wrap .wrap .product p{
    font-size: 30px;
    margin-bottom: 1vh;
    width: auto;
    background-color: rgb(250, 252, 253);
}

.benefit-product-wrap .wrap .product hr{
    font-size: 30px;
    margin-bottom: 1vh;
}

.benefit-product-wrap{
    margin-bottom: 50px;
}
.total-donation-box{
    padding : 20px;
}






/*팝업창*/
/* #popup {
    display: none; 숨기기
    position: fixed;
    width: 100%;
    top: 0%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    z-index: 9999;
    
}

#popmenu {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 30vw;
    height: 30vh;
    text-align: center;
    background: white;
    border: 1px solid black;
}

#popmenu p {
    margin-top: 80px;
}

.exit {
    position: absolute;
    left: 52%;
    bottom: 10px;
    width: 8%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgb(192, 192, 192);
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
}
.select {
    position: absolute;
    left: 41%;
    bottom: 10px;
    width: 8%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: rgb(192, 192, 192);
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
}
.product-select-box{
	margin-top: 20px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    font-size: 40px;
}
본문내용
#contents {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    background: #555;
    cursor: pointer;
    margin-left: 2vw;
    font-weight: 700;
    font-size: 15px;
    border-radius: 10px;
} */
}
</style>