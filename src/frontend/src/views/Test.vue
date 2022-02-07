<template>
<div class="signup">
    <div class="container">
        <div class="member_wrap">
            <div class="tit_wrap">
                <h2 class="member_tit">회원가입</h2>
            </div>
            <input v-model="name" placeholder="이름" required="" type="text"/>
            <input v-model="id" name="아이디" placeholder="아이디" type="text"/>
            <input v-model="password" name="비밀번호" placeholder="비밀번호" type="password"/>
            <input v-model="checkpassword" placeholder="비밀번호 확인" required="" type="password"/>
            <input v-model="email" placeholder="이메일" required="" type="text"/>
            <input v-model="post" placeholder="우편번호" required="" type="text"/>
            <input v-model="address" placeholder="주소" required="" type="text"/>
            <input v-model="detailaddress" placeholder="상세주소" required="" type="text"/>
            <input v-model="phonenum" placeholder="전화번호" required="" type="text"/>
            <div class="join-btns">
                <button @click="join">가입하기</button><br>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            address: "",
            detailaddress : "",
            email : " ",
            id : "",
            name : "" ,
            password : "",
            phonenum : 0, // int
            post : 3 // 우편번호 int    
        }
    },
    methods :{
        join(){
            const config={
                    baseUrl:'http://192.168.0.57:9999'
            };
            // // function joinUser(User){
                //     // }
            // // console.log(config);
            var User ={
                'address' : this.address,
                'detailaddress': this.detailaddress,
                'email' : this.email,
                'id' : this.id,
                'name' : this.name,
                'password' : this.password,
                'phonenum' : this.phonenum,
                'post' : this.post
            }
            // // this.joinUser(User);
            axios.post(`${config.baseUrl}/signtoo`,User)
            // axios.get('http://192.168.0.57:9999/test')
            .then((res)=>{
                console.log(res)
                // console.log(message.data)
            })
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
.signup {
	margin-top: 200px;
}

.container {
	height: 800px;
	max-width: 1000px;
	margin: 30px auto;
}

.join_wrap {
	border-top: 3px solid #a81431;
}

.join_detail {
	display: flex;
	flex-direction: column;
}

.info_row {
	display: flex;
	height: 50px;
	border-bottom: 1px solid rgb(158, 158, 158);
}

.info_name {
	line-height: 50px;
	width: 15%;
	background-color: rgb(238, 238, 238);
	text-align: left;
}
.info_data_post {
	width: 85%;
	padding-left: 30px;
	display: flex;
	align-items: center;
}

.info_data_post input{
	width: 90px;
	height: 30px;
	border: 1px solid silver;
	border-radius: 5px;
	margin-right: 10px;
	}
	
.info_data_address {
	width: 85%;
	padding-left: 30px;
	display: flex;
	align-items: center;
	}

.info_data_address input{
	width: 270px;
	height: 30px;
	border: 1px solid silver;
	border-radius: 5px;
	margin-right: 10px;
	}
	
.info_data_address p{
	font-size: 15px;
	font-weight: bold;
	margin-right: 10px;
}

.info_data {
	width: 85%;
	padding-left: 30px;
	display: flex;
	align-items: center;
}

.info_data input {
	width: 160px;
	height: 30px;
	border: 1px solid silver;
	border-radius: 5px;
	margin-right: 10px;
}

.info_name p {
	font-size: 15px;
	font-weight: bold;
}

.container .member_tit {
	font-size: 30px;
	margin: 30px 0;
	text-align: left;
}

.container .join_filed {
	display: flex;
}

.join_filed div {
	width: 50%;
	font-size: 25px;
	background-color: black;
	color: white;
	text-align: center;
	border: 1px solid black;
}

.join_filed div:first-child {
	background-color: black;
	color: white;
}

.join_filed div:last-child {
	background-color: white;
	color: black;
}

.join_wrap .normal {
	color: white
}

.input_area {
	margin: 15px 0;
	height: 40px;
}

.select_box {
	
}

.chk_content {
	text-align: center;
	margin: 0 auto;
}

.chk_area {
	margin: 15px 0;
	display: flex;
	justify-content: flex-start;
}

.chk_area a{
	cursor:pointer;
}


.btn_join {
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color: #ededed;
	border-radius: 6px;
	border: 1px solid #dcdcdc;
	display: inline-block;
	cursor: pointer;
	color: #777777;
	font-family: Arial;
	font-size: 15px;
	font-weight: bold;
	padding: 6px 168px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #ffffff;
}

.tn_join:hover {
	background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color: #dfdfdf;
}

.btn_join:active {
	position: relative;
	top: 1px;
}

.myButton {
	box-shadow: inset 0px 1px 0px 0px #ffffff;
	background: linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color: #f9f9f9;
	border-radius: 6px;
	border: 1px solid #dcdcdc;
	display: block;
	cursor: pointer;
	color: #666666;
	font-family: Arial;
	font-size: 14px;
	font-weight: bold;
	padding: 0;
	text-align: center;
	text-decoration: none;
	text-shadow: 0px 1px 0px #ffffff;
}

.myButton:hover {
	background: linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color: #e9e9e9;
}

.myButton:active {
	position: relative;
	top: 1px;
}

.add_btn {
	display: flex;
}

.add_btn a {
	width: 130px;
	height: 40px;
	line-height: 40px;
	vertical-align: middle;
	margin-left: 10px;
}

.layer {
	display: inline-block;
}

.btn_area {
	display: flex;
	justify-content: center;
}



.pop-layer {
	width: 80%;
	height: 80%;
	background: white;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 102;
	transform: translate(-50%, -50%);
	display: none;
}

.pop-layer .pop-title {
	width: 100%;
	height: 15%;
	background-color: rgb(56, 57, 58);
	color: white;
	text-align: center;
	vertical-align: middle;
	font-size: 40px;
	line-height: 100px;
	position: relative;
}

.pop-layer .pop-title .pop-title-r {
	position: absolute;
	right: 20px;
}

.pop-layer .pop-title .pop-title-r button {
	border: none;
	background: none;
	color: white;
	vertical-align: middle;
	padding: 0 0 15px 0;
}

.dimlayer {
	width: 100%;
	height: 100%;
	background: rgba(7, 7, 7, 0.5);
	z-index: 100;
	position: absolute;
	top: 0%;
	left: 0%;
	display: none;
}

.pop-layer .pop-main {
	width: 100%;
	height: 90%;
	background: rgb(233, 232, 230);
}

.pop-layer .text-box {
	width: 90%;
	height: 90%;
	top: 5%;
	left: 5%;
	z-index: 103;
	background-color: rgb(255, 255, 255);
	color: balck;
	text-align: left;
	vertical-align: middle;
	font-size: 20px;
	position: relative;
	overflow-y: scroll;
}

#layer.active .pop-layer {
	display: block;
}

#layer.active .dimlayer {
	display: block;
}

a:hover {
	color: rgb(27, 111, 194);
	cursor: pointer;
}
}
</style>