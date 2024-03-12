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
                href="#!"
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
                href="#!"
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
            🚀 <span class="purple">Vchasno</span> - Твій Шлях<br> до Вдосконалення <br>Навчання!
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
        <p id="about">Vchasno - це не просто щоденник. Це інтелектуальна платформа, яка виходить за межі звичайного відстеження навчання. 🚀 Ми створили Vchasno, щоб надати учням, вчителям і батькам потужний інструмент, який спрощує навчальний процес та надає доступ до ключових інформаційних ресурсів. 📚</p>
      </div>
    </div>
  </section>
  <section class="our-profit">
    <div class="container">
      <div class="our-profit-row">
        <h1 class="our-profit-header">
          🚀 Основні Вигоди:
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'HomeVue',
})
</script>

<style>
  body {
    background-color: #000000;
  }
  /* Header */

  .header {
    padding-top: 46px;
    font-family: "Inter";
    font-weight: 400;
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
    column-gap: 101px;
    font-size: 18px;
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

  .header-content {
    margin-top: 60px;
    margin-left: 60px;
  }
  .header-heading {
    color: #ffffff;
    font-size: 4.6vh;
    font-family: monospace;
    text-transform: uppercase;
    padding-bottom: 32px;
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
  .header-img-details {
    height: 30%;
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  /* About */

  .about-us {
      padding:  305px 0px 0px 0px ;
  }

  .about-us-row {
    display: block;
    max-width: 512px;
  }

  .about-header {
    color: #ffffff;
    font-size: 4vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 32px;
  }

  .about-us-row p {
    color: #ffffff;
    font-size: 2.5vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 32px;
  }

  .our-profit {
      padding:  305px 0px 0px 0px ;
  }

  .our-profit-row {
    display: flex;
    max-width: 512px;
  }

  .our-profit-header {
    color: #ffffff;
    font-size: 4vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-bottom: 32px;
  }

</style>