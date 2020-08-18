window.onload = () => {
  //let la = document.querySelector('#some').dataset.items;// поиск html узла с JSON
  //window.open("")
  let la = document.querySelector("#some");
  let href = la.getAttribute("href");

  let container = document.getElementById("data_container");
  let table = document.createElement("table");
  container.appendChild(table);

  let tm = document.createElement("td");
  table.appendChild(tm).innerHTML = `Модель`; // добавление узла модель

  //console.log(href)
  //let a  = JSON.parse(href)//парсинг JSON
  // console.log (a)//сделать поиск по индексу

  function setTable(value) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let save = 0;

    for (let k in value) {
      if (Object.prototype.hasOwnProperty.call(value, "Feature_name")) {
        //поиск по ключу объекта
        td.innerHTML = `${value.Feature_name}`; // вывод содержимого
        table.appendChild(td);
        console.log(` k = ${k} value = ${value[k]}`);
      }

      if (Object.prototype.hasOwnProperty.call(value, "Model")) {
        //save =   `${value.Model}`

        let a = value.Model;
        console.dir(a);

        tr.innerText = `${value.Model}`;
        tm.appendChild(tr);

        console.log(` k = ${k} value = ${value[k]}`);

        // setTable(value)
      }

      save++;
      if (typeof value[k] === "object") {
        setTable(value[k]);
      }
    }
  }

  function settable2(tblobj) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    for (let k in tblobj) {
      if (typeof tblobj[k] === "object") {
        settable2(tblobj[k]);
      } else console.log(` k = ${k} tblobj = ${tblobj[k]} `);
    }
  }

  fetch(href).then(function (response) {
    response.json().then(function (data) {//разберись с нодами
      
      //получение json через fetch
      for (k in data) {
        //console.log(` Выведем таблицу ${k} `);
        //settable2(data[k]); //data[k] - k-тая таблица
        
        if (k =='features') {
          //для таблицы features
          for (p in data[k]) {
            console.log(` Выведем строку таблицы 'features': ${p} `);
            console.log(data[k][p]);
           table.appendChild(td)
            td.innerHTML =`${data[k][p].Feature_name}`; //строка таблицы features
            
          }
        }
      }
      for (k in data) {
        if (k == 0) {
          //для таблицы models
          for (p in data[k]) {
           // data[k][p]; //строка таблицы models
          }
        }
      }
      for (k in data) {
        if (k == 0) {
          //для таблицы models_features
          for (p in data[k]) {
           // data[k][p]; //строка таблицы models_features
          }
        }
      }
      //console.log(` Последняя таблица выведена `);
      //console.dir(Object.keys(data).length);
      // setTable(data)

      console.log(data);
    });
  });
};
