<template>
<div>
    <div v-if="!prevlog">
    <div class="login-wrap" >
        <div class="login-box">
            <h2>통합 로그인</h2>
            <div class="login">
                <input v-model="token" type="hidden" th:name="${_csrf?.parameterName}"
						th:value="${_csrf?.token}" />
                    <ul>
                        <li><input v-model="id" name="username" type='text' placeholder="아이디"></li>
                        <li><input v-model="password" type='password' name="password" placeholder="패스워드"></li>
                        <li class = 'btn'>
                            <button @click="join">로그인</button>
                        </li>
                    </ul>
                    <div class="opt-box">
                        <span>
                            <input type="checkbox" id = "rem "><label for='rem'>로그인 기억하기</label>
                        </span>
                        <span>
                                <a href="$none">아이디 찾기</a>
                                <a href="$none">비밀번호 찾기</a>
                        </span>
                    </div>

                <div class= "join-btn">
                    <a href="/signup">회원가입하기</a>
                </div>
        </div>
    </div>
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
  name: 'Login',
  data(){
        return{
            id : "",
            password : "",
            prevlog : this.$session.get('islogin')
        }
    },
    methods :{
        join(){
            const config={
                    baseUrl:'http://192.168.0.57:9999'
            };
            var User ={
                'id' : this.id,
                'password' : this.password
            }
            console.log(User);
            axios.post(`${config.baseUrl}/testlogin`,User)
            .then((response)=>{
                console.log(response.data);
                var flag = response.data;
                if(response.status === 200){
                    if(flag==0){
                        this.$router.push('/');
                        this.$session.set('islogin', true);
                        this.$session.set('UserId', this.id);
                        this.$router.go();
                        alert("로그인 성공");
                    }
                    else if(flag==1){
                        this.$router.go();
                        alert("아이디 혹은 비밀번호가 틀렸습니다.");
                        console.log("일치하는 아이디가 없음");
                    }else if(flag==2){
                        this.$router.go();
                        alert("아이디 혹은 비밀번호가 틀렸습니다.");
                        console.log("비밀번호가 일치하지 않음");
                    }else {
                        this.$router.push('/login');
                        console.log("통신이 원활하지 않음");
                    }
                }else{
                    alert(response)
                    alert("통신에러");
                }
            }).catch((err)=>{
                alert(err);
                console.log(err);
                alert("예외 에러");
            })
        }
    }
  
}
</script>

<style scoped>
/* 모바일용 화면 */
@media(min-width: 300px) and (max-width: 599px) {
.login-box h2{
    text-align: center;
    font-size : 40px;
    margin-bottom : 20px;
    
}
input[type='text']{width: 100%; height: 40px;}

input[type='password']{width: 100%; height: 40px;}
.wrong_access{
    font-size:50px;
}
.login-box{
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin:30px auto;
    height: 50vh;
    margin-top : 10vh;
}
.login-box button{width:100%; height: 50px; background: #000; color: #fff; border:0;}
.login-box li{margin-bottom: 10px;}
.login .btn{
    display : block;
    margin : 0;
    padding : 0;
}
.login-box .opt-box {overflow: hidden; margin : 20px 0;}
.login-box .opt-box span{float: left;}
.login-box .opt-box span a{display : inline-block; padding: 0 10px;}
.login-box .opt-box span:first-child{float: left;}
.login-box .opt-box span:last-child{float: right;}

.login-box .join-btn { margin : 20px 0; display : block}
.login-box .join-btn a{
    display: block; border: 1px solid #ccc; line-height: 50px; text-align: center;
    border-radius: 30px;}
   
}
/* 컴퓨터용 화면 */
@media(min-width: 1400px) {
.login-box h2{
    text-align: center;
    font-size : 40px;
    margin-bottom : 20px;
}



input[type='text']{width: 100%; height: 40px; }

input[type='password']{width: 100%; height: 40px;}

.wrong_access{
    font-size:50px;
}
.login-box{
    text-align: center;
    width: 100%;
    max-width: 400px;
    margin:30px auto;
    height: 800px;
    margin-top : 300px;
}
.login-box button{width:100%; height: 50px; background: #000; color: #fff; border:0;}
.login-box li{margin-bottom: 10px;}
.login .btn{
    display : block;
    margin : 0;
    padding : 0;
}
.login-box .opt-box {overflow: hidden; margin : 20px 0;}
.login-box .opt-box span{float: left;}
.login-box .opt-box span a{display : inline-block; padding: 0 10px;}
.login-box .opt-box span:first-child{float: left;}
.login-box .opt-box span:last-child{float: right;}

.login-box .join-btn { margin : 20px 0; display : block}
.login-box .join-btn a{
    display: block; border: 1px solid #ccc; line-height: 50px; text-align: center;
    border-radius: 30px;}
}
</style>