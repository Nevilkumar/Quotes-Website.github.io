const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const btn = document.getElementById('btn');
const url = 'https://type.fit/api/quotes';

let data={};

function setdata(temp){
    data = temp;
    changequote(data);
}

fetch(url)
    .then(res => res.json())
    .then(chunk => setdata(chunk));

const changequote = (data) => {
    let len=data.length;
    let ind = Math.floor((len)*Math.random());
    para1.innerHTML = '<i class="fas fa-quote-left"></i>&nbsp' + data[ind].text + '&nbsp<i class="fas fa-quote-right"></i>';
    if(data[ind].author!=null)
        para2.innerHTML = " — "+data[ind].author;
    else
        para2.innerHTML = " — Unknown";
};

btn.addEventListener('click', function(){ changequote(data); });

