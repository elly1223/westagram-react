import React from 'react';
import '../styles/common.css';
import './Main.scss';

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="main_bd">
                    <nav>
                        <div className="nav_icons">
                            <div className="left_icons">
                                <img src="./images/instagram.png" />
                                <h1>ㅣ</h1>
                                <h3>Westagram</h3>
                            </div>
                            <div className="search">
                                <input type="text" placeholder="검색" />
                            </div>
                            <div className="right_icons">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
                            </div>
                        </div>
                    </nav>
                    <div className="main">
                        <div className="feeds">
                            <div className="feeds_left">
                                <img src="./images/cat1.png" />
                                <h1>zzz_yk</h1>
                            </div>
                            <div className="feeds_right">
                                <p>…</p>
                            </div>
                            <div className="feeds_content">
                                <img src="./images/cat.jpg" />
                            </div>
                            <div className="feeds_icons">
                                <div className="feeds_icons_left">
                                    <a href="#">
                                        <img src="https://img.icons8.com/windows/32/000000/search.png" />
                                    </a>
                                    <a href="#">
                                        <img src="https://img.icons8.com/windows/32/000000/like.png" />
                                    </a>
                                    <a href="#">
                                        <img src="https://img.icons8.com/dotty/80/000000/filled-sent.png" />
                                    </a>
                                </div>
                                <div className="feeds_icons_right">
                                    <a href="#">
                                        <img src="https://img.icons8.com/material-outlined/24/000000/bookmark-ribbon--v2.png" />
                                    </a>
                                </div>
                            </div>
                            <div className="feeds_text">
                                <div className="feeds_text_top">
                                    <img src="./images/cat1.png" />
                                    <h1>
                                        <strong>Wecode</strong>님 외 <strong>36명</strong>이 좋아합니다
                                    </h1>
                                </div>
                                <h2>
                                    <strong>zzz_yk</strong> 위워크에서 진행한 베이킹 클래스
                                </h2>
                                <p>42분 전</p>
                                <ul id="list"></ul>
                            </div>
                            <div className="reply">
                                <input type="text" id="input" placeholder="댓글 달기..." onkeyup="enterKey()" />
                                <button type="button" id="reply-btn">
                                    게시
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main-right">
                        <div className="main-right-nav">
                            <div className="main-right-title">
                                <img src="./images/wecode.jpg" />
                                <h1>
                                    Wecode_bootcamp<p>WeCode | 위코드</p>
                                </h1>
                            </div>
                        </div>
                        <div className="main_right_top">
                            <div className="title">
                                <h1>스토리</h1>
                                <p>모두 보기</p>
                            </div>
                            <div className="profile">
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                            </div>
                        </div>
                        <div className="main_right_bottom">
                            <div className="title">
                                <h1>회원님을 위한 추천</h1>
                                <p>모두 보기</p>
                            </div>
                            <div className="profile">
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                                <div className="profile_detail">
                                    <img src="./images/cat1.png" />
                                    <h1>zzzyk</h1>
                                    <p>30분 전</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail_text">
                            <h1>Instagram 정보·지원·홍보 센터·API·채용 정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어</h1>
                            <br />
                            <h2>ⓒ 2019 INSTAGRAM</h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
