<template>
    <div>
        <div v-if="!prevlog">
        <div class="signup">
            <div class="container">
                <div class="member_wrap">
                    <div class="tit_wrap">
                        <h2 class="member_tit">회원가입</h2>
                    </div>
                    <div class="join_wrap">
                    <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}" />
                            
                    <div class="join_detail">
                    <div class="info_row">
                        <div class="info_name">
                        <p>이름</p>
                        </div>
                        <div class="info_data">
                            <input v-model="name" type="text" name="name" required="" autocomplete="off">
                        </div>
                    </div>
                        
                    <div class="info_row">
                        <div class="info_name">
                            <p>아이디</p>
                        </div>
                        <div class="info_data">
                            <input v-model="id" type="text" name="id" required="" autocomplete="off" placeholder="  숫자 영문 혼합 20자리">
                            </div>
                        </div>
                        
                        <div class="info_row">
                            <div class="info_name">
                            <p>비밀번호</p>
                            </div>
                            <div class="info_data">
                            <input v-model="password" type="password" name="password" id="pass"  placeholder="  숫자 영문 혼합 20자리">
                            </div>
                        </div>
                        
                        <div class="info_row">
                            <div class="info_name">
                            <p>비밀번호 확인</p>
                            </div>
                            <div class="info_data">
                            <input v-model="checkpassword" type="password" name="checkpassword" id="checkpass">
                            <p><font id="chkNotice" size="2"></font></p>
                            </div>
                        </div>
                        
                        <div class="info_row">
                            <div class="info_name">
                            <p>이메일</p>
                            </div>
                            <div class="info_data">
                            <input v-model="email" type="text" name="email">
                            </div>
                        </div>
                        
                        
                        <div class="info_row">
                            <div class="info_name">
                            <p>주소</p>
                            </div>
                            <div class="info_data_address">
                            <input v-model="address" type="text" name="address" >
                            </div>
                        </div>

                        <div class="info_row">
                            <div class="info_name">
                            <p>상세주소</p>
                            </div>
                            <div class="info_data_address">
                            <input v-model="detailaddress" type="text" name="detailaddress" >
                            </div>
                        </div>
                        <div class="info_row">
                            <div class="info_name">
                            <p>전화번호</p>
                            </div>
                            <div class="info_data">
                            <input v-model="phonenum" type="text" name="phonenum" >
                            </div>
                        </div>
                        
                    </div>
                    <div class="join_con02">
                        <div class="select_box">
                            <div class="chk_tit">
                            <div class="chk_area"></div>
                            </div>
                            <div class="chk_content">
                            <div class="chk_area">
                                <input type="checkbox" name="terms01_1" id="terms01_1" class="normal" value="Y"> <label for="terms01_1" class="chk"> 
                                <i class="ico_chk"></i> 서비스 이용약관동의(필수)
                                 <a target="blank" class="btn btn_pop pop_open">내용보기</a>
                                </label></div> 
                               
                            </div>
                            <div class="chk_area">
                            <div>
                                <input type="checkbox" name="terms01_2" id="terms01_2"
                                    class="normal" value="Y"> <label for="terms01_2"
                                    class="chk"> <i class="ico_chk"></i> 개인정보 취급방침(필수)
                                </label> 
                                <a target="blank" class="btn btn_pop pop_open">내용보기</a>
                                </div>
                                
                            </div>
                            <div class="chk_area">
                                <div>
                                <input type="checkbox" name="terms01_3" id="terms01_3"
                                    class="" value="Y"> <label for="terms01_3"
                                    class="chk"> <i class="ico_chk"></i> 마케팅 수신 정보 동의
                                    (선택)
                                </label>
                                </div>
                                <a class="btn btn_pop pop_open">내용보기</a>
                            </div>
                        </div>
                    </div>
                
                <div class="btn_area">
                    <button class="btn_join" @click="join">회원가입</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div id='layer'>
        <div class="pop-layer">
            <div class="pop-title">
                <span class="pop-title-r">
                <button class="btn_exit">
                    <i class="fas fa-times"></i>
                </button>
                </span> 사용자 이용약관동의
            </div>
            <div class="pop-main">
                <div class="text-box">
                여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, 네이버는 이에 대한 승낙을 통해 회원 가입 절차를
                완료하고 여러분께 네이버 서비스 이용 계정(이하 ‘계정’)을 부여합니다.<br>
                <br> 계정이란 회원이 네이버 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기
                위해 설정한김세현 바보 멍청이 회원 식별 단위를 말합니다.<br>
                <br>
                <br> 회원은 자신의 계정을 통해 좀더 다양한 네이버 서비스를 보다 편리하게 이용할 수 있습니다.<br>

                이와 관련한 상세한 내용은 계정 운영정책 및 고객센터 내 네이버 회원가입 방법 등에서 확인해 주세요.<br>
                <br> 네이버는 단체에 속한 여러 구성원들이김세현 바보 멍청이 공동의 계정으로 네이버 서비스를 함께 이용할 수
                있도록 단체회원 계정도 부여하고 있습니다.<br>
                <br> 단체회원 구성원들은 하나의 계정 및 아이디(ID)를 공유하되 각자 개별적으로 설정한 비밀번호를 입력하여
                계정에 로그인하고 각종 서비스를 이용하게 됩r니다. <br>
                <br> 단체회원은 관리자와 멤버로 구성되며, 관리자는 구성원 전부로부터 권한을 위임 받아 단체회원을 대표하고
                단체회원 계정을 운용합니다. 따라서 관리자는 단체회원 계정을 통해 별도 약관 또는 기존 약관 개정에 대해 동의하거나
                단체회원에서 탈퇴할 수 있고, 멤버들의 단체회원 계정 로그인 방법 및 이를 통한 게시물 게재 등 네이버 서비스 이용을
                관리(게시물 삭제 포함)할 수 있습니다.<br>
                <br>
                <br> 본약관에서 규정한 사항은 원칙적으로 구성원 모두에게 적용되며, 각각의 구성원은 다른 구성원들의 단체회원
                계정 및 아이디(ID)를 통한 서비스 이용에 관해 연대책임을 부담합니다.<br>
                <br> 단체회원 계정 사용에서의 관리자, 멤버 등의 권한 및 (공동)책임에 관한 사항 등은 계정 운영정책 및
                고객센터 내 네이버 단체회원(단체 아이디) 소개 등에서 확인해 주시기 바랍니다.<br>
                <br> 여러분은 본 약관을 읽고 동의하신 후 회원 가입을 신청하실 수 있으며, 네이버는 이에 대한 승낙을 통해
                회원 가입 절차를 완료하고 여러분께 네이버 서비스 이용 계정(이하 ‘계정’)을 부여합니다.<br>
                <br> 계정이란 회원이 네이버 서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기
                위해 설정한 회원 식별 단위를 말합니다.<br>
                <br>
                <br> 회원은 자신의 계정을 통해 좀더 다양한 네이버 서비스를 보다 편리하게 이용할 수 있습니다.<br>

                이와 관련한 상세한 내용은 계정 운영정책 및 고객센터 내 네이버 회원가입 방법 등에서 확인해 주세요.<br>
                <br> 네이버는 단체에 속한 여러 구성원들이 공동의 계정으로 네이버 서비스를 함께 이용할 수 있도록 단체회원
                계정도 부여하고 있습니다.<br>
                <br> 단체회원 구성원들은 하나의 계정 및 아이디(ID)를 공유하되 각자 개별적으로 설정한 비밀번호를 입력하여
                계정에 로그인하고 각종 서비스를 이용하게 됩니다. <br>
                <br> 단체회원은 관리자와 멤버로 구성되며, 관리자는 구성원 전부로부터 권한을 위임 받아 단체회원을 대표하고
                단체회원 계정을 운용합니다. 따라서 관리자는 단체회원 계정을 통해 별도 약관 또는 기존 약관 개정에 대해 동의하거나
                단체회원에서 탈퇴할 수 있고, 멤버들의 단체회원 계정 로그인 방법 및 이를 통한 게시물 게재 등 네이버 서비스 이용을
                관리(게시물 삭제 포함)할 수 있습니다.<br>
                <br>

                <br> 본약관에서 규정한 사항은 원칙적으로 구성원 모두에게 적용되며, 각각의 구성원은 다른 구성원들의 단체회원
                계정 및 아이디(ID)를 통한 서비스 이용에 관해 연대책임을 부담합니다.<br>
                <br> 단체회원 계정 사용에서의 관리자, 멤버 등의 권한 및 (공동)책임에 관한 사항 등은 계정 운영정책 및
                고객센터 내 네이버 단체회원(단체 아이디) 소개 등에서 확인해 주시기 바랍니다.<br>
                <br>
                </div>
            </div>
        </div>
        <div class="dimlayer"></div>
    </div>
    </div>
    <div v-if="prevlog">
    <p class="wrong_access"> 잘못된 접근입니다. </p>
</div>
     </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data(){
        return{
            address: "",
            detailaddress : "",
            email : " ",
            id : "",
            name : "" ,
            password : "",
            phonenum : 0, // int
            post : 3, // 우편번호 int    
            prevlog : this.$session.get('islogin')
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
            axios.post(`${config.baseUrl}/testgo`,User)
            // axios.get('http://192.168.0.57:9999/test')
            .then((res)=>{
                console.log(res)
                this.$router.push('/login');
                // console.log(message.data)
            })
        }
    }
}
</script>
   
<style scoped>
/* 모바일용 화면 */
@media(min-width: 300px) and (max-width: 599px) 
{
.wrong_access{
font-size:50px;
}
.btn_join{
    width:100%;
}
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
	width: 25%;
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
	width: 70%;
	height: 30px;
	border: 1px solid silver;
	border-radius: 5px;
	margin-right: 10px;
	}
	
.info_data_address {
	padding-left: 30px;
	display: flex;
	align-items: center;
	}

.info_data_address input{
	width: 100%;
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
	width: 70%;
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
	padding: 1vh 5vw;
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

ㅈ
a:hover {
	color: rgb(27, 111, 194);
	cursor: pointer;
}
}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
.wrong_access{
    font-size:50px;
}
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