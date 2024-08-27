import React from 'react';
import lacat from '../../assets/modal_licat.png';
import './Modal.css';



export default function Modal() {
  return (
    <dialog id="modal_container">
      <form className="modal_form" method="dialog">
        <h2 className="modal_form_title">화이팅!!♥♥♥</h2>
        <h3 className="modal_form_subtitle">당신의 꿈을 응원합니다!</h3>
        <img src={lacat} className="modal_image" alt="초롱초롱한 눈으로 당신의 꿈을 응원하는 라이캣" />
        <button className="modal_close_button">
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </form>
    </dialog>
  )
}