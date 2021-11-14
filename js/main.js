'use strict';
{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    const results=['FISH','EGG','BEEF','TOAST','VEGETABLE','NATTO','CURRY','CHICKEN','PORK','TOMATO','CHEESE','CHOCOLATE','BEER','ICE CREAM','YAKISOBA','OKONOMIYAKI','NOODLE','HAMBURGER','SUSHI','RICE BALL','SUNDUBU','BREAD','CAKE','CREAM PUFF','CREPE','FRUITS','POTATO CHIPS','FRENCH FRIES','PICKLES','GREEN TEA','TEMPURA','APPLE PIE','MISO SOUP','TOFU','MARITOZZO','CORN SOUP','SEAFOOD','WAKAME','CANDY','PIZZA','GYOZA','SOBA','RICE','SOY MILK','NUTS','BEANS','MEAT','MOCHI','CROQUETTE','SNACK','SANDWICH','SOUP','STEW','NABE','OCTOPUS','SQUID','KEBAB','TACO','SWEETS','AVOCADO','SHRIMP','PANCAKE','MACARONI','BAOZI','PLUM','MUSHROOM','SPRING ROLL','LASAGNA','CRAB','ODEN','GARLIC','SHUMAI','BUTTER','POTATO','RICE CRACKER','MILK','COCOA','CLAM CHOWDER','MINESTRONE','HANPEN','CHIKUWA','SEAWEED','HIJIKI','KIMCHI','CROUTON','BROCCOLI','UDON','CHESTNUT','GRATED YAM','PERSIMMON','CHAWANMUSHI','SWEET POTATO','JAM','HONEY','VINEGAR','CARROT','RADISH','CUCUMBER','TAPIOCA','YOGURT','CHILI','OLIVE','EGG','FISH','VEGETABLE','CHEESE','SOY','LAMB','HAMBURG STEAK','JELLY','PANNA COTTA','PUDDING','BAVARIAN CREAM','CHURRO','COOKIE','DONUT','WINE','PISTACHIO','PASTA','SALAD','HOT DOG','DIM SUM','POPCORN','SPINACH','PROTEIN DRINK','CROISSANT','CEREAL','BEEF','CHICKEN','RICE','TOAST','CURRY','AMERICAN HOTDOG','BURRITO','MONKFISH LIVER','CORN DOG'];

    btn.textContent=results[Math.floor(Math.random()*results.length)];
  });
}
