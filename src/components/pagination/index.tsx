import React from 'react'
import './style.css';
import { Diary } from 'src/types/interfaces';
import { PAGES_PER_SECTION } from 'src/constants';

// interface: 페이지네이션 컴포넌트 속성 //
interface Props {
	currentPage: number;
	currentSection: number;
	totalSection:number;
	pageList:number[];

	setCurrentSection: React.Dispatch<React.SetStateAction<number>>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

// component: 공통 페이지네이션 컴포넌트 //
export default function Pagination({
	currentPage, currentSection, totalSection, pageList,
	setCurrentSection, setCurrentPage
	}: Props) {

	// function: 페이지 클래스 //
	const pageClass = (page:number) => currentPage === page ? 'page active' : 'page';

	// event handler: 이전 섹션 클릭 이벤트 처리 //
	const onPreSectionClickHandler = () => {
		if (currentSection <= 1) return;
		setCurrentSection(currentSection - 1);
		setCurrentPage((currentSection - 1) * PAGES_PER_SECTION);
	}
	// event handler: 다음 섹션 클릭 이벤트 처리 //
	const onNextSectionClickHandler = () => {
		if (currentSection >= totalSection) return;
		setCurrentSection(currentSection + 1);
		setCurrentPage(currentSection * PAGES_PER_SECTION + 1);
	}

	// event handler: 페이지 변경 이벤트 처리 //
	const onPageClickHandler = (page:number) => {
		setCurrentPage(page)
	}

	// render: 페이지네이션 컴포넌트 렌더링 //
  return (
    <div className='pagination-box'>
			<div className='pagination-button left' onClick={onPreSectionClickHandler}></div>
			<div className='pagination'>
				{pageList.map((page, index) => <div className={pageClass(page)} key={index} onClick={()=>(onPageClickHandler(page))}>{page}</div> )}
			</div>
			<div className='pagination-button right' onClick={onNextSectionClickHandler}></div>
		</div>
  )
}
