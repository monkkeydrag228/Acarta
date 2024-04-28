<template>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <header>
        <img src="../assets/Frame.png" alt="" />
        <div class="what">
          <ul>
            <li>What is arcarta?</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
          <button>Get Started</button>
        </div>
      </header>

      <main>
        <section class="rely">
          <div class="rely_text">
            <div class="two">
              <div class="new"><p>New</p></div>
              <div class="the"><p>The Art Market Report</p></div>
            </div>
            <div class="text_and_button">
              <h1>Rely on us</h1>
              <p>
                Our Customer Due Diligence platform helps you avoid fines or
                losing clients due to AML while protecting you from cybercrime.
              </p>
            </div>
            <button>Learn More</button>
            <div class="text_cards">
              <img src="../assets/Rectangle.png" alt="" />
              <img src="../assets/Rectangle (1).png" alt="" />
              <img src="../assets/Rectangle (2).png" alt="" />
              <img src="../assets/Rectangle (3).png" alt="" />
            </div>
            <div class="under_p">
              <p>What is arcarta?</p>
              <img src="../assets/Rectangle (4).png" alt="" />
            </div>
          </div>
        </section>
        <section class="cards_main">
          <div class="pic">
            <img src="../assets/Frame (2).png" alt="" />
          </div>
          <div class="cards">
            <div class="card">
              <img src="../assets/Rectangle (5).png" alt="" />
              <h1>For Art Dealers</h1>
              <p>Galleries and independent art dealers</p>
              <button>Learn More</button>
            </div>
            <div class="card">
              <img src="../assets/Rectangle (6).png" alt="" />
              <h1>For Advisors</h1>
              <p>Advisors, agents and consultants</p>
              <button>Learn More</button>
            </div>
            <div class="card1">
              <img src="../assets/Rectangle (7).png" alt="" />
              <h1>For Auctioneers</h1>
              <p>Online and offline auctioneers</p>
              <button>Learn More</button>
            </div>
            <div class="card2">
              <img src="../assets/Rectangle (8).png" alt="" />
              <h1>For Buyers & Collectors</h1>
              <p>Galleries and independent art dealers</p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
        <section class="quiz">
          <img src="../assets/Frame (3).png" alt="" />
          <div class="does">
            <p>New</p>
            <h1>Does Anti-money Laundering affect you?</h1>
            <h6>
              A short, interactive quiz to check if your art business is
              affected by 5AMLD regulation.
            </h6>
            <button>Take the Quiz</button>
          </div>
        </section>
        <section class="email">
          <img src="../assets/Frame (4).png" alt="" />
          <div class="text_input">
            <h1>Art world insight.</h1>
            <p>
              Receive our newsletter direct to your inbox to follow updates to
              legislation and the EU art-market's response.
            </p>
            <input placeholder="Your email" type="text" />
            <button><img src="../assets/Rectangle (10).png" alt="" /></button>
          </div>
        </section>
      </main>
      <footer></footer>
    </body>
  </html>
</template>

<style>
/* *{
  cursor: url('../assets/Remove-bg.ai_1705314705168.png'), pointer;
}
*:focus{
  cursor: url('../assets/Remove-bg.ai_1705314705168.png'), pointer;
} */
.text_input button {
  left: -50px;
  top: 40px;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
}
.text_input img {
  position: relative;
  right: 85px;
  top: -30px;
  width: 35px !important;
}
.text_input {
  margin-left: 100px;
}
.text_input input {
  margin-top: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.1);
  width: 420px;
  height: 60px;
  flex-shrink: 0;
  border: none;
  color: rgba(146, 142, 142, 0.45);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  padding-left: 40px;
}
.text_input p {
  color: #322f2e;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 0px;
  line-height: 42px; /* 160% */
  width: 670px;
  margin-bottom: 20px;
}
.text_input h1 {
  color: #1a1918;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px; /* 135% */
  width: 460px;
}
.email img {
  width: 450px;
  margin-top: 30px;
  margin-left: 80px;
}
.email {
  margin-top: 150px;
  display: flex;
  width: 1570px;
  align-items: center;
  height: 483px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #faf7f3;
  margin-left: 150px;
}

.quiz {
  margin-top: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz img {
  width: 350px;
}
.does {
  margin-left: 80px;
}
.does button {
  position: relative;
  top: -68px;
  width: 156px;
  height: 55px;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
  border-radius: 50px;
  border: 2px solid #e1ded9;
  background: none;
}
.does h6 {
  position: relative;
  top: -25px;
  color: #322f2e;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 157.143% */
  width: 486px;
}
.does h1 {
  color: #322f2e;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px; /* 116.981% */
  width: 620px;
}
.does p {
  position: relative;
  top: 32px;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  /* line-height: 25px; 208.333% */
  border-radius: 20px;
  background: #f9a38f;
  width: 60px;
  padding-top: 6px;
  height: 22px;
  flex-shrink: 0;
}
.card2 img {
  width: 230px;
  margin-left: 170px;
  margin-top: 40px;
}
.card2 {
  border-radius: 10px;
  margin-left: 45px;
  border: 1px solid #ddd;
  background: #fffaf2;
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.08);
  width: 600px;
  margin-top: 40px;
  height: 550px;
  flex-shrink: 0;
}
.card2 button {
  position: relative;
  top: -35px;
  width: 172.113px;
  height: 55px;
  flex-shrink: 0;
  background: none;
  font-weight: 700;
  font-size: 15px;
  border-radius: 50px;
  border: 2px solid #e1ded9;
  margin-left: 215px;
}
.card2 p {
  position: relative;
  top: -35px;
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}
.card2 h1 {
  color: #322f2e;
  position: relative;
  top: -35px;
  text-align: center;
  margin-left: 55px;
  width: 500px;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
}

.card1 img {
  width: 230px;
  margin-left: 170px;
  margin-top: 40px;
}
.card1 {
  border-radius: 10px;
  margin-left: 45px;
  border: 1px solid #ddd;
  background: #fffaf2;
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.08);
  width: 600px;
  margin-top: 40px;
  height: 550px;
  flex-shrink: 0;
}
.card1 button {
  width: 172.113px;
  height: 55px;
  flex-shrink: 0;
  background: none;
  font-weight: 700;
  font-size: 15px;
  border-radius: 50px;
  border: 2px solid #e1ded9;
  margin-left: 215px;
}
.card1 p {
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}
.card1 h1 {
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
}

.card button {
  width: 182.113px;
  height: 55px;
  flex-shrink: 0;
  background: none;
  font-weight: 700;
  font-size: 15px;
  border-radius: 50px;
  border: 2px solid #e1ded9;
  margin-left: 210px;
  position: relative;
  top: -30px;
}
.card p {
  color: #322f2e;
  position: relative;
  top: -40px;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
}
.card h1 {
  position: relative;
  top: -30px;
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
}
.cards {
  margin-top: 80px;
  display: flex;
  margin-left: 240px;
  width: 1350px;
  background: none;
  flex-wrap: wrap;
}
.card img {
  width: 250px;
  margin-left: 170px;
  margin-top: 40px;
}
.card {
  border-radius: 10px;
  margin-left: 45px;
  border: 1px solid #ddd;
  background: #fffaf2;
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.08);
  width: 600px;
  margin-top: 40px;
  height: 550px;
  flex-shrink: 0;
}
.pic img {
  width: 1900px;
}
.pic {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  top: -50px;
}
.under_p {
  display: flex;
  align-items: center;
  color: #c47344;
  font-family: Roboto;
  font-size: 24px;
  margin-left: 850px;
  position: relative;
  top: -180px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
}
.text_cards {
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 70px;
  position: relative;
  top: -190px;
}
.text_cards img {
  width: 255px;
}
.rely_text button {
  width: 158px;
  height: 47px;
  border-radius: 50px;
  background: #c47344;
  border: none;
  color: #ffff;
  font-weight: 700;
  position: relative;
  top: -230px;
  left: 835px;
}
.text_and_button {
  margin-bottom: 200px;
}
.text_and_button p {
  position: relative;
  top: -60px;
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 33px; /* 157.143% */
  align-items: center;
  margin-left: 610px;
  width: 620px;
}
.text_and_button h1 {
  color: #322f2e;
  text-align: center;
  font-family: Roboto;
  font-size: 150px;
  font-style: normal;
  font-weight: 700;
  /* padding-bottom: 40px; */
}
.the p {
  color: #4d4d4d;
  position: relative;
  left: -15px;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  /* line-height: 25px; 208.333% */
  border-radius: 20px;
  background: #ffe9e5;
  width: 260px;
  padding-top: 6px;
  height: 30px;
  flex-shrink: 0;
}
.new p {
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  /* line-height: 25px; 208.333% */
  border-radius: 20px;
  background: #f9a38f;
  width: 80px;
  padding-top: 6px;
  height: 30px;
  flex-shrink: 0;
}
.rely_text {
}
.two {
  display: flex;
  position: relative;
  top: 100px;
  align-items: center;
  margin-left: 770px;
  margin-top: 50px;
}
header img {
  margin-left: 40px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
main {
  margin-top: 40px;
}
.what {
  margin-left: 600px;
  display: flex;
  align-items: center;
  gap: 40px;
}
.what button {
  border: none;
  border-radius: 65px;
  background: #c47344;
  width: 129px;
  height: 45px;
  flex-shrink: 0;
  color: #ffff;
}
.what ul {
  gap: 45px;
  color: #322f2e;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  display: flex;
  list-style: none;
}

body {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 37%,
    rgba(255, 248, 238, 1) 45%
  );
  background-repeat: no-repeat;
}
</style>