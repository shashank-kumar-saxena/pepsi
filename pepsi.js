function bluecolor() {
    body.className = "colorblue";
    img.innerHTML = '<img src="pepsi\\blue.png" alt="Product Image">';
    var deatils = document.getElementById("Product-Detail");
    deatils.innerHTML = 'Diet Pepsi is a no-calorie carbonated cola soft drink produced by PepsiCo,introduced in 1964 as a variant of Pepsi with no sugar.Diet Coke was introduced in 1982 and quickly became the primary competing diet cola to Diet Pepsi...<br><br><a href="https://www.pepsi.com/#!products/pepsi" target="_blink" id="product-details">VIEW ALL PRODUCT</a>';
}
function whitecolor() {
    body.className = "colorred";
    img.innerHTML = '<img src="pepsi\\white.png" alt="Product Image">';
    var deatils = document.getElementById("Product-Detail");
    deatils.innerHTML = "Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961'...<br><br><a href='https://www.pepsi.com/#!products/pepsi-wild-cherry' target='_blink' id='product-details'>VIEW ALL PRODUCT</a>";
}
function blackcolor() {
    body.className = "colorblack";
    img.innerHTML = '<img src="pepsi\\black.png" alt="Product Image">';
    var deatils = document.getElementById("Product-Detail");
    deatils.innerHTML = "Pepsi Zero Sugar (sold under the names Diet Pepsi Max until early 2009 and then Pepsi Max until August 2016), is a zero-calorie, sugar-free, ginseng-infused cola sweetened with aspartame and acesulfame K, marketed by PepsiCo.<br><br><a href='https://www.pepsi.com/#!products/pepsi-zero-sugar' target='_blink' id='product-details'>VIEW ALL PRODUCT</a>";
}
var blue = document.getElementById("blue");
var white = document.getElementById("white");
var black = document.getElementById("black");
var body = document.getElementById("color");
var img = document.getElementById("product-img");
blue.addEventListener("click", bluecolor, false);
white.addEventListener("click", whitecolor, false);
black.addEventListener("click", blackcolor, false);
window.addEventListener("load", bluecolor, false);
blue.addEventListener("mouseover", bluecolor, false);
white.addEventListener("mouseover", whitecolor, false);
black.addEventListener("mouseover", blackcolor, false);
