'Use strict'
import "./style.scss";

let container = document.createElement('div');
container.className = 'container';
document.body.append(container);

let table = document.createElement('table');
table.className = 'table';
container.append(table);

let mask = document.createElement('span');
mask.id = 'mask';
table.append(mask);

let tr = document.createElement('tr');
tr.className = 'tr';
table.append(tr);

let tdLeft = document.createElement('td');
tdLeft.className = 'tdLeft';
tr.append(tdLeft);

let divLeft = document.createElement('div');
divLeft.className = 'divLeft';
divLeft.innerHTML ='Ваш номер...';
tdLeft.append(divLeft);

let tdRight = document.createElement('td');
tdRight.className = 'tdRight';
tr.append(tdRight);

let divRight = document.createElement('div');
divRight.className = 'divRight';
divRight.innerHTML ='ЗАКАЗАТЬ';
tdRight.append(divRight);

let i = document.createElement('i');
i.className = 'fas fa-shopping-bag';
divRight.append(i);

let input = document.createElement('input');
input.id = 'input-order';
tdLeft.append(input);

let btn = document.createElement('div');
btn.id = 'btn-order';
tdRight.append(btn);

divRight.addEventListener('click', function () {
    fetch("https://httpbin.org/post", {
        "method": "POST"
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
});

input.addEventListener('click', function() {
    divLeft.style.visibility = 'hidden';
});

divRight.addEventListener('click', function () {
    if (input.value.length == 0) {
        alert('Please enter your order!');
    } else {
        fetch("https://httpbin.org/post", {
            "method": "POST"
        })
        .then(response => {
            if (response.status == 200) {
                alert('Your order send! Thank you!');
            } else {
                alert('Sorry, something went wrong :) Please try again!');
            }
        })

        input.value = '';
        divLeft.style.visibility = 'visible';
    }
});

