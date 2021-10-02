const greenThumb = document.getElementById('green')
const roseThumb = document.getElementById('rose')
const purpleThumb = document.getElementById('purple')
const circle = document.getElementById('circle')
const bigThumb = document.getElementById('bigThumb')
const bigWord = document.getElementById('bigWord')
const LM = document.getElementById('LM')
const loadingPage = document.getElementById('loading-page')



window.addEventListener("load", () => setTimeout(function () {
    loadingPage.style.display = 'none';
}, 1000));

console.log(roseThumb);


greenThumb.addEventListener('mouseover', _ => {
    bigThumb.innerHTML = '<img src="images/img1.png" alt="bigStarbucks" class="img1">';
    circle.style.backgroundColor = '#296d51'
    bigWord.style.color = '#296d51'
    LM.style.backgroundColor = '#296d51'
});


roseThumb.addEventListener('mouseover', _ => {
    bigThumb.innerHTML = '<img src="images/img2.png" alt="bigStarbucks"  class="img2">';
    circle.style.backgroundColor = '#CDBBA7'
    bigWord.style.color = '#CDBBA7'
    LM.style.backgroundColor = '#CDBBA7'
});
purpleThumb.addEventListener('mouseover', _ => {
    bigThumb.innerHTML = '<img src="images/img3.png" alt="bigStarbucks" class="img3">';
    circle.style.backgroundColor = '#D62AD0'
    bigWord.style.color = '#D62AD0'
    LM.style.backgroundColor = '#D62AD0'
});


