window.onload = () => {
  //let la = document.querySelector('#some').dataset.items;// поиск html узла с JSON
  //window.open("")
  let la = document.querySelector("#some");
  let href = la.getAttribute("href");

  let container = document.getElementById("data_container");
  let table = document.createElement("table");
  container.appendChild(table);

  fetch(href).then(function (response) {
    response.json().then(function (data) {
      let tr;
      let td;

      //разберись с нодами

      let newTr = () => {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        return tr;
      };
      function* numerateline() {
        let i = 0;

        yield i++;
      }
      ///console.dir(numerateline().next());
      //console.dir(numerateline().next());

      function settd(obj, prefix, value) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.setAttribute("value", prefix + "." + obj["ID"]);
        td.innerHTML = `${obj[value]}`; //строка таблицы features
        return td;
      }

      if (typeof data != undefined) {
        //функция формирования ячейки таблицы

        //получение json через fetch
        tr = newTr(); //для таблицы features
        let tm = document.createElement("td");
        tr.appendChild(tm).innerHTML = `Модель`; // добавление узла модель

        //Формирование заголовков
        for (p in data.features) {
          console.log(` Выведем строку таблицы 'features': ${p} `);
          console.log(data.features[p]);
          settd(data.features[p], "column_header", "Feature_name");
        }

        tr = newTr();
        //для таблицы features
        for (k in data.models) {
          console.log(` Выведем строку таблицы 'models': ${k} `);
          console.log(data.models[k]);

          //строка таблицы features
          td = settd(data.models[k], "model", "Model");

          //для таблицы models_features
          for (p in data.models_features) {
            console.log(` Выведем строку таблицы 'models_features': ${p} `);
            console.log(data.models_features[p]);

            //Вывести значение data.models_features[p].Val если атрибут value последнего стобца (td.cellIndex +1) == ..
            //..  data.models_features[p].Feature AND атрибут value 0-ой ячейки текущей строки (tr.sectionRowIndex) ..
            //.. == data.models_features[p].Model иначе далее

            if (
              table.rows[0].cells[td.cellIndex + 1].getAttribute("value") ==
                "column_header." + data.models_features[p].Feature &&
              tr.cells[0].getAttribute("value") ==
                "model." + data.models_features[p].Model
            ) {
              td = settd(data.models_features[p], "data", "Val"); // data.models_features[p] consists of: ID,Feature, Model, Val
            }
          }

          tr = newTr();
        }
      }
    });
  });
};
