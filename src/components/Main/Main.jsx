import React from 'react';
import './Main.css';



export default function Main() {
  return (
    <main id="main_container">
      <form className="form_box">
        <p className="form_text_expert">
          나는
          <input type="text" placeholder="예&#41;프로그래밍" required />
          전문가가 될것이다.
        </p>
        <p className="form_text_time">
          그래서 앞으로 매일 하루에
          <input type="number" placeholder="예&#41;5시간" required />
          시간씩 훈련할 것이다.
        </p>
        <button className="training_day_button" type="submit">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>

      <section className="training_result">
        <h2 className="blind">
          결과 확인
        </h2>
        <p className="form_text_expert">
          당신은 <strong>프로그래밍</strong> 전문가가 되기 위해서
        </p>
        <p className="form_text_time">
          대략 <strong> 1000</strong>일 이상 훈련하셔야 됩니다.
        </p>
        <button type="button" className="training_go_button">
          훈련하러가기 GO!GO!
        </button>
        <button type="button" className="training_share_button">
          공유하기
        </button>
      </section>
    </main>
  )
}