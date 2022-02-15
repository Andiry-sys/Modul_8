let req = new XMLHttpRequest();

req.open('GET', ' https://jsonplaceholder.typicode.com/users');
req.responseType = 'json';

req.onload = function () {
  if (req.status === 200) {
    let grid = document.createElement('div');
    grid.className = 'container';
    for (let i = 0; i < req.response.length; i++) {
      let div = document.createElement('div');
      div.id = req.response[i]['id'];
      div.className = 'box';
      div.innerText = req.response[i]['name'];
      div.onclick = function (e) {
        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let li3 = document.createElement('li');
        let li4 = document.createElement('li');
        let li5 = document.createElement('li');
        let li6 = document.createElement('li');

        li1.innerText = 'Name: ' + req.response[e.target.id]['name'];
        li2.innerText = 'Username: ' + req.response[e.target.id]['username'];
        li3.innerText =
          'Address: ' +
          req.response[e.target.id]['address']['city'] +
          ', ' +
          req.response[e.target.id]['address']['street'];
        li4.innerText = 'Email: ' + req.response[e.target.id]['email'];
        li5.innerText = 'Phone: ' + req.response[e.target.id]['phone'];
        li6.innerText = 'Website: ' + req.response[e.target.id]['website'];

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
        document.body.appendChild(ul);
      };
      grid.appendChild(div);
    }

    document.body.appendChild(grid);
  }
};

req.send();
