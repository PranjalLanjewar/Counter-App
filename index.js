const dec_btn = document.getElementById("dec_btn");
const re_btn = document.getElementById("re_btn");
const inc_btn = document.getElementById("inc_btn");
const count_label = document.getElementById("count_label");

let count = 0;

inc_btn.onclick = function(){
    count++;
    count_label.textContent = count;
}

dec_btn.onclick = function(){
    count--;
    count_label.textContent = count;
}

re_btn.onclick = function(){
    count = 0;
    count_label.textContent = count;
}