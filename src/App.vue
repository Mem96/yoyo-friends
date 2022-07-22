<template>
  <div class='title-container'>
    <h1 class='supertitle'>Yoyo ~ Friends</h1>
  </div>
  
  <router-view/>
</template>

<style>
@font-face{
  font-family: 'mainFont';
  src: url('@/assets/fonts/AfternoonCoffee.ttf');
  font-weight: normal;
}
@font-face{
  font-family: 'plainFont';
  src: url('@/assets/fonts/simple-print.ttf')
}
  *{
    text-align: center;
    font-family: 'mainFont';
    font-weight: normal;
  }
  h1{
    font-family: 'mainFont';
    margin-top: 10px;
    word-spacing: 3px;

  }
  .title-container{
    background-color: #E2EAFC;
  }
  .supertitle{
    margin-top: 0px;
    padding-top: 5px;
    border-bottom: ridge #EDF2FB 3px;
    font-size: 20px;
    background: linear-gradient(#1b4965, #0A8754);
    background-clip: text;
    color: transparent;
  }
  @media only screen and (min-width: 900px){
       .supertitle{
        font-size: 30px;
       } 
       h1{
        font-size: 30px;
       }
  }
</style>
