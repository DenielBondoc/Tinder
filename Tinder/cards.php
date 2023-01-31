<?php

@include 'config.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
</head>
<body>
    <div class="tinder">
      
        <div class="tinder--status">
          <i class="fa fa-remove"></i>
          <i class="fa fa-heart"></i>
        </div>
       <div class="logbtn1">
         <button class="specBtn">
             <span class="button_top"><a href="logout.php">Logout</a>
             </span>
         </button>
         <button class="specBtn">
             <span class="button_top"><a href="cards.php">Reload</a>
             </span>
         </button>
       </div> 

       
      
        <div class="tinder--cards">
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1247482752351588352/EgHoUNqQ_400x400.jpg">
            <h3>Chris Hemsworth</h3>
            <p>Celebrity</p>
            <h2>Masculine</h2>
            <h1>"Travel"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg">
            <h3>DeadPool</h3>
            <p>Celebrity</p>
            <h2>Guns</h2>
            <h1>"Acting"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1309345216302899200/GRwcyAQ__400x400.jpg">
            <h3>Jeremy Renner</h3>
            <p>Celebrity</p>
            <h2>Bow and Arrow</h2>
            <h1>"Acting"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/672121350689959936/6FZ2iZvr_400x400.png">
            <h3>Hulk</h3>
            <p>Celebrity</p>
            <h2>Mr. Green Guy</h2>
            <h1>"Smash"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg">
            <h3>Dua Lipa</h3>
            <p>Celebrity</p>
            <h2>Singer</h2>
            <h1>"Concert"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1417948566287360000/4nmMbMAu_400x400.jpg">
            <h3>Kendall Jenner</h3>
            <p>Celebrity</p>
            <h2>Woman</h2>
            <h1>"Fashion"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1589659852271280128/KhrL02UB_400x400.jpg">
            <h3>Kim Kardashian</h3>
            <p>Celebrity</p>
            <h2>Woman</h2>
            <h1>"Fashion"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1395858482553757696/9_2OqRnn_400x400.jpg">
            <h3>Kylie Jenner</h3>
            <p>Celebrity</p>
            <h2>Woman</h2>
            <h1>"Fashion"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1563367209782906880/6JlrxLiZ_400x400.jpg">
            <h3>Jose Marie Viceral</h3>
            <p>Celebrity</p>
            <h2>Comedy</h2>
            <h1>"Acting"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1563319496097824769/buG2eJtn_400x400.jpg">
            <h3>Anne Curtis</h3>
            <p>Celebrity</p>
            <h2>Fashion</h2>
            <h1>"Life"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1602734219741962240/vT5h2MMw_400x400.jpg">
            <h3>Nick Jones</h3>
            <p>Celebrity</p>
            <h2>Acting and Travel</h2>
            <h1>"Life"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1599831054881374224/sx4KqXNX_400x400.jpg">
            <h3>Selena Gomez</h3>
            <p>Celebrity</p>
            <h2>Fashion and Travel</h2>
            <h1>"Life"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg">
            <h3>Barack Obama</h3>
            <p>Ex President</p>
            <h2>Social Life</h2>
            <h1>"Food"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg">
            <h3>Elon Musk</h3>
            <p>Rich</p>
            <h2>Tesla overpriced</h2>
            <h1>"Space"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg">
            <h3>Bill Gates</h3>
            <p>Computer Literate</p>
            <h2>Social Life</h2>
            <h1>"I hate Apple"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/1574877069845987329/YFV-4EU-_400x400.jpg">
            <h3>Lebron James</h3>
            <p>Sports</p>
            <h2>Social Life</h2>
            <h1>"Basketball is Money"</h1>
          </div>
          <div class="tinder--card">
            <img src="https://pbs.twimg.com/profile_images/3478244961/01ebfc40ecc194a2abc81e82ab877af4_400x400.jpeg">
            <h3>Dwayne Johnson</h3>
            <p>MR.Stone</p>
            <h2>Fitness</h2>
            <h1>"Acting"</h1>
          </div>
        </div>
        <div class="foot">
          <!-- <p class="p1"><i class="fa-solid fa-arrow-left"></i>PASS</p> -->


          <!-- <div class="loader">
              <span></span>
          </div> -->



          <!-- <p class="p2">LIKE<i class="fa-solid fa-arrow-right"></i></p>
        </div> -->

      
        <div class="tinder--buttons">
          <button id="nope"><i class="fa fa-remove"></i></button>
          <button id="love"><i class="fa fa-heart"></i></button>
        </div>
      </div>
      <script src="https://hammerjs.github.io/dist/hammer.min.js"></script>
      <script src="./render.js"></script>
      

</body>
</html>