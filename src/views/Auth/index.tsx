import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import SignIn from './Signin';
import SignUp from './Signup';
import { AuthPage } from 'src/types/aliases';


export default function Auth() {

  // state: 페이지 상태//
  const [page, setPage] = useState<AuthPage>('sign-in');
  
  // event handler: 페이지 변경 이벤트 처리//
  const onPageChangeHandler = (page: AuthPage) => {
    setPage(page);
  };

  // container : 실제 내용물
  // card : container와 비슷한데 테두리가 존재하는 것
  // box : 레이아웃 지정
  // render: 로그인 회원가입 화면 컴포넌트 //
  return (
    <div id='auth-wrapper'>
      <div className='auth-side-image'></div>
      <div className='auth-box'>
        { page === 'sign-in' ? <SignIn onPageChange={onPageChangeHandler}/> 
                             : <SignUp onPageChange={onPageChangeHandler}/> }
      </div>
    </div>
  )
}
