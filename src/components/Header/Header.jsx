import React from 'react';
import headerLogo from '../../assets/hour10000_title.png';
import headerSubtitle from '../../assets/txt_subtitle.png';
import './Header.css';



export default function Header() {
  return (
    <header id="header_container">
      <h1 className="header_title">
        <img src={headerLogo} className="header_logo" alt="1만 시간의 법칙" />
      </h1>
      <img src={headerSubtitle} className="header_quote" alt="연습은 어제의 당신보다 당신을 더 낫게 만든다." />
      <p className="header_quote_meaning">
        <strong className="header_quote_meaning_bold">1만 시간의 법칙</strong>은<br />
        어떤 분야의 전문가가 되기 위해서는<br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </p>
    </header>
  )
}