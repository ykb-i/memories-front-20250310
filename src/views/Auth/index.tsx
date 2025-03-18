import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css';
import InputBox from 'src/components/InputBox';
import SignIn from './Signin';
import SignUp from './Signup';
import { AuthPage } from 'src/types/aliases';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { ACCESS_TOKEN, JOIN_TYPE, MAIN_ABSOLUTE_PATH, SNS_ID } from 'src/constants';

// component: 로그인 회원가입 화면 컴포넌트 //
export default function Auth() {
  // state: cookie 상태 //
  const [cookies] = useCookies();

  // state: 페이지 상태//
  const [page, setPage] = useState<AuthPage>('sign-in');
  
  // function: 네비게이터 함수 //
  const navigator = useNavigate();

  // event handler: 페이지 변경 이벤트 처리//
  const onPageChangeHandler = (page: AuthPage) => {
    setPage(page);
  };

  // effect: 화면 렌더시 실행할 함수 //
  useEffect(() => {
    if(cookies[ACCESS_TOKEN]) navigator(MAIN_ABSOLUTE_PATH);
    if(cookies[JOIN_TYPE] && cookies[SNS_ID]) setPage('sign-up');
  },[]);
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
