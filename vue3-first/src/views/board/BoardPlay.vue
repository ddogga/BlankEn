<template>
  <section class="get-in-touch">
    <div class="contact-form row">
      <!-- card - list-->

      <div class="col mb-5" id="card-row">
        <div class="container card">
          <nav class="navbar navbar-expand-lg star-btn">
            <div class="container gx-4 px-lg-5"></div>
            <div>
              <svg
                fill="#000000"
                height="30px"
                width="30px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 507.176 507.176"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M505.71,193.128c-4.604-14.052-19.424-23.544-41.732-26.724l-118.972-16.92L291.494,41.828 c-10.004-20.116-23.632-31.204-38.38-31.204c-14.812,0-28.44,11.164-38.372,31.416l-52.876,107.972L42.974,167.636 c-22.22,3.292-36.964,12.828-41.532,26.852c-4.232,13.016,0.924,28.044,14.544,42.664c0.172,0.276,0.596,0.532,0.84,0.764 l2.988,2.688v0.008l-0.152,0.06l-0.084,0.024c0.032,0.032,0.012,0.064,0.048,0.092l86.18,83.576l-19.972,118.54 c-3.136,18.584-0.524,33.464,7.576,43.048c5.864,6.928,14.308,10.6,24.424,10.6c9.132,0,19.296-2.928,30.2-8.704l106.22-56.244 l106.552,55.624c23.012,12.02,43.448,11.068,54.556-2.14c8.084-9.62,10.64-24.552,7.4-43.164L402.094,323.5l85.828-84.156 C503.99,223.576,510.314,207.172,505.71,193.128z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </nav>

          <div class="card-img-top">
            <div></div>
          </div>
          <!-- 한국어 뜻 -->
          <div class="card-body">
            <div class="arrows">
              <div id="arrow_left"></div>
              <div id="arrow_right"></div>
            </div>
            <div class="korean-input">
              <div class="card-input form-field">
                <input
                  class="input-text js-input"
                  placeholder="한국어 의미"
                  required
                />
              </div>
            </div>

            <!-- 빈칸 -->
            <div class="english-input">
              <div class="card-input form-field">
                <input
                  class="input-text js-input"
                  placeholder="first "
                  required
                />
              </div>

              <div class="card-input form-field">
                <input
                  class="input-text js-input"
                  placeholder="blank"
                  required
                />
              </div>

              <div class="card-input form-field">
                <input
                  class="input-text js-input"
                  placeholder="last"
                  required
                />
              </div>
            </div>

            <!-- 버튼 -->
            <div>
              <button class="update">확인</button>
              <button class="delete">정답보기</button>
            </div>

            <div class="page_view">1/20</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import "../../assets/css/write.css";

.star-btn {
  margin-top: 10px;
}

#arrow_left {
  float: left;
  border-right: 10px solid;
  border-bottom: 10px solid;
  height: 30px;
  width: 30px;
  transform: rotate(135deg);
}

#arrow_right {
  float: right;
  border-right: 10px solid;
  border-bottom: 10px solid;
  height: 30px;
  width: 30px;
  transform: rotate(-45deg);
}

.arrows {
  margin-top: 10px;
  margin-bottom: 50px;
}

.page_view {
  margin-top: 30px;
}

.active {
  display: "";
}

.hidden {
  display: none !important;
}

.english-input {
  display: flex;
}

.card {
  margin-top: 5%;
}

.card-input {
  flex: 1;
}

.close-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.add-image {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.profile_img {
  width: 300px;
  height: 300px;
  cursor: pointer;
}

.btn-hidden {
  width: 30px;
  height: 30px;
  margin-top: 15px;
}

.btn-hover:hover {
  background: #e0e5ec;
  color: #e0e5ec;
  transform: scale(1.05);
}

.update,
.delete {
  border: none;
  padding: 5px 10px;
  color: #fff;
  font-weight: bold;
}

.update {
  border-top-left-radius: 10px 40px;
  border-bottom-left-radius: 40px 10px;
  background-color: #95f0a4;
}

.delete {
  border-top-right-radius: 40px 10px;
  border-bottom-right-radius: 10px 40px;
  background-color: hsl(27, 100%, 66%);
}
</style>
