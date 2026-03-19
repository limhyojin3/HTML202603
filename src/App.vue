<template>
  <div>
    <a href="introduction/intro.html">
      <h1>Welcome! <br> It's great to have you here. </h1>
    </a>
  </div>
</template>

<style>
/* 아까 만드신 CSS 부분을 여기에 넣으세요 */
    body {
        background-color: pink;
    }
    body>div{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    h1{
        font-size: 70px;
        padding: 5px 25px;
        background-color: white;
        border-radius: 20px;
        color:rgb(44, 53, 111);
        text-decoration: none;
    }

    h1:hover{
        background-color: rgb(179, 179, 179);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
    }
    a{
        
        text-decoration: none;
    }
</style>