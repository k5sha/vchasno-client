<template>
  <header class="header">
    <div class="container">
      <!-- Header nav -->
      <div class="header-nav">
        <a
          href="#!"
          class="logo"
        >
          <img src="../assets/logo_with_text.png">
        </a>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <a
                href="/"
                class="nav-link active"
              >Головне</a>
            </li>
            <li class="nav-item">
              <a
                href="#!"
                class="nav-link"
              >Щоденник</a>
            </li>
            <li class="nav-item">
              <a
                href="#about"
                class="nav-link"
              >Про нас</a>
            </li>
            <li class="nav-item">
              <a
                href="login"
                class="nav-link"
              >Увійти</a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Content -->
      <div class="header-row">
        <div class="header-content">
          <h1 class="header-heading">
            🚀 <span class="header-content-logo">Vchasno</span> - Твій Шлях<br> до Вдосконалення <br>Навчання!
          </h1>
          <a
            class="header-button"
            href="#!"
          >Приєднатися</a>
        </div>
        <div
          class="header-img"
        >
          <img
            src="../assets/group.png"
            alt="group"
          > <div />
        </div>
        <div
          class="header-img-details"
        >
          <img
            src="../assets/details.png"
            alt="details"
          > <div />
        </div>
      </div>
    </div>
  </header>
  <br>
  <section class="about-us">
    <div class="container">
      <div class="about-us-row">
        <h1 class="about-header">
          Що таке Vchasno?📚
        </h1>
        <p>
          <span class="about-logo">Vchasno</span> - це не просто щоденник. Це інтелектуальна платформа, яка виходить за межі звичайного відстеження навчання. 🚀 Ми створили Vchasno, щоб надати учням, вчителям і батькам потужний інструмент, який спрощує навчальний процес та надає доступ до ключових інформаційних ресурсів. 📚
        </p>
      </div>
    </div>
  </section>
  <br>
  <section class="profits">
    <div class="container">
      <h1 class="profit-header">
        🚀 Основні Вигоди:
      </h1>
      <div class="profits-row">
        <ul class="profits-list">
          <li class="profit">
            <img src="../assets/profit1.png">
          </li>
          <li class="profit">
            <img src="../assets/profit2.png">
          </li>
          <li class="profit">
            <img src="../assets/profit3.png">
          </li>
          <li class="profit">
            <img src="../assets/profit4.png">
          </li>
        </ul>
      </div>
    </div>
  </section>
  <footer>
    <div class="container">
      <div class="footer-row">
        <div>
          <h3 class="footer-header">
            Інформація прo сайт
          </h3>
          <ul class="footer-list">
            <li>Про нас</li>
            <li>Використання</li>
            <li>Контакти</li>
          </ul>
        </div>
        <div class="footer-vl" />
        <div>
          <h3 class="footer-header">
            Допомога
          </h3>
          <ul class="footer-list">
            <li>Технічна підтримка</li>
            <li>Чи є інструкції</li>
            <li>Найпопулярніші питання</li>
          </ul>
        </div>
        <div class="footer-vl" />
        <div>
          <h3 class="footer-header">
            Ми у соцмережах
          </h3>
          <ul class="footer-list">
            <li>Facebook</li>
            <li>Telegram</li>
            <li>Viber</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="footer-img-details"
    >
      <img
        src="../assets/details2.png"
        alt="details"
      > <div />
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'HomeVue',
})
</script>

<style scoped>
  /* Header */
  
  .header {
    padding-top: 24px;
    font-family: "Inter";
    font-weight: 400;
  }
  @media (min-width: 1280px) {
    .header {
      padding-top: 46px;
    }
  }

  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 110px;
  }

  .logo {
    max-width: 282px;
    max-height: 46px;
  }

  /* Nav */

  .nav-list {
    display: flex;
    column-gap: 50px;
    font-size: 18px;
  }

  @media (min-width: 1280px) {
  .nav-list {
    column-gap: 101px;
    font-size: 20px;
  }
  }


  .nav-item:last-child {
    padding-right: 128px;
  }

  .nav-link {
    color: #ffffff;
    line-height: 250%;
  }

  .nav-link.active {
    color: #bebebe;
  }

  /* Content */

  .header-content-logo {
    color: #B844C0;
    font-size: 7vh;
    font-family: "Dongle", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .header-content {
    margin-top: 0px;
    margin-left: 35px;
  }

  @media (min-width: 1280px) {
    .header-content {
      margin-top: 60px;
      margin-left: 35px;
    }
  }

  .header-heading {
    color: #ffffff;
    font-size: 4.6vh;
    font-family: monospace;
    text-transform: uppercase;
    padding-bottom: 32px;
    line-height: 120%;
  }
  .header-row {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
  }

  .header-button {
    display: block;
    background-color: white;
    text-align: center;
    padding: 24px 32px 24px 32px;
    max-width: 35vh;
    border-radius: 32px;
    font-size: 3vh;
    color: #A737D5;
  }
  
  .header-img {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 0;
  }
  @media (max-width: 1280px) {
    .header-img {
      width: 75%;
    }
  }
  .header-img-details {
    height: 30%;
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  /* About */

  .about-us {
      padding:  200px 0px 0px 0px ;
  }

  @media (min-width: 1280px) {
    .about-us {
        padding:  305px 0px 0px 0px ;
    }
  }

  .about-us-row {
    display: block;
    max-width: 712px;
  }

  .about-header {
      padding-left: 40%;
      color: #ffffff;
      font-size: 5vh;
      font-family: "Dongle", sans-serif;
      font-weight: 400;
      font-style: normal;
      padding-bottom: 32px;
    }

    .about-logo {
      color: #AD3FB4;
      font-size: 5vh;
      font-family: "Dongle", sans-serif;
      font-weight: 400;
      font-style: normal;
    }


    .about-us-row p {
      padding-left: 40%;
      color: #ffffff;
      font-size: 3vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding-bottom: 32px;
      line-height: 140%;
    }

  @media (min-width: 1280px) {
  .about-header {
      padding-left: 50%;
    }

    .about-us-row p {
      padding-left: 50%;
    }
  }

  @media (min-width: 1280px) {
    .about-header {
      padding-left: 8%;
    }

    .about-us-row p {
      padding-left: 8%;
      font-size: 2.5vh;
      padding-bottom: 32px;
    }
  }
  

  /* Profits */

  .profits {
      padding:  128px 0px 0px 0px ;
  }

  @media (min-width: 1280px) {
    .profits {
        padding:  125px 0px 0px 0px ;
    }
  }

  .profits-row {
    display: flex;
  }

  .profit-header {
    color: #ffffff;
    font-size: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 32px;
    padding-left: 4%;
  }

  @media (max-width: 1280px) {
    .profit-header {
      padding-left: 29%;
    }
  }
  .profit-header {
    color: #ffffff;
    font-size: 5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 32px;
  }

  .profits-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .profit {
      max-width:472px;
  }

  @media (min-width: 1280px) {
    .profit {
      max-width:612px;
    }
  }

  .profit p {
    position: absolute;
    max-width: 512px;
    text-align: center;
    color: #ffffff;
    font-size: 2vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  /* Footer */
  footer {
    margin: auto;
    margin-top: 200px;
    margin-bottom: 128px;
    position: relative;
    bottom: 0;
  }

  .footer-row {
      display: flex;
      justify-content: space-between;
      align-items: end;
      padding-left: 128px;
      width: 80%;
  }

  @media (min-width: 1280px) {
    .footer-row {
      width: 90%;
      padding-left: 0px;
    }
  }

  .border-middle {
    border-left: #FFFFFF 1px solid;
  }

  .footer-header {
    color: white;
    font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 2vh;
    padding-bottom: 24px;    
    font-weight: 700;
  }

  .footer-vl {
    border-left: 1px solid #FFFFFF;
    height: 142px;
  }

  .footer-list li{
    color: white;
    font-family: Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.75vh;
    padding-bottom: 12px;
  }

  .footer-img-details {
    max-width: 96px;
    right: 5%;
    top: 85%;
    position: absolute;
  }
</style>