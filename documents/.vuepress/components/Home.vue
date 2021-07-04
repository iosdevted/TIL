<template>
  <div>
    <div class="titleContainer">
      <h1>오늘 배운 건
        <br>오늘 적자
      </h1>

      <div class="infoContainer">
        <div class="infoContainer-en">Today I Learned</div>
        <!--
        <ul class="infoContainer-info">
          <li>
            <a href="https://sunggweon.dev">Blog</a>
          </li>
          <li>
            <a href="https://github.com/iosdevted">GitHub</a>
          </li>
        </ul>
        -->
      </div>
    </div>
  </div>
</template>

<style>
@import "https://fonts.googleapis.com/css?family=Gugi";

.infoContainer {
  text-align: right;
}
.titleContainer h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid #997EFA;
  word-break: keep-all;
  font-size: 5rem;
}
h1 { 
  color: #111; 
  font-family: 'Helvetica Neue', sans-serif; 
  font-size: 50px; 
  font-weight: bold; 
  letter-spacing: -1px; 
}
.infoContainer-en {
  font-weight: 900;
  font-size: 2rem;
} 

.infoContainer-info {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
