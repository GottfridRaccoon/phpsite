window.onload = () => {
  //let la = document.querySelector('#some').dataset.items;// поиск html узла с JSON
  //window.open("")
  let la = document.querySelector("#some");
  let href = la.getAttribute("href");

  let container = document.getElementById("data_container");
  let table = document.createElement("table");
  container.appendChild(table);

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
        //console.log(` k = ${k} value = ${value[k]}`);
      }

      if (Object.prototype.hasOwnProperty.call(value, "Model")) {
        //save =   `${value.Model}`

        let a = value.Model;
        //console.dir(a);

        tr.innerText = `${value.Model}`;
        tm.appendChild(tr);

        //console.log(` k = ${k} value = ${value[k]}`);

        // setTable(value)
      }

      save++;
      if (typeof value[k] === "object") {
        setTable(value[k]);
      }
    }
  }


  
 
  fetch(href).then(function (response) {
    response.json().then(function (data) {
      let tr;
      let td;
      let eobj = new Object();
      eobj.model = "";
      eobj.val = "";
      eobj.colcount = 0;
      eobj.colIndexes = new Object();
    
      //разберись с нодами

      let newTr = () => {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        return tr;
      };

      ///console.dir(numerateline().next());
      //console.dir(numerateline().next());

      function setth(obj, prefix, value) {
        let th = document.createElement("th");
        tr.appendChild(th);
        th.setAttribute("value", prefix + "." + obj["ID"]);
        th.innerHTML = `${obj[value]}`; //строка таблицы features
        return th;
      }

      function settd(obj, prefix, value) {
        let selected
        let td = document.createElement("td");
        tr.appendChild(td);
        td.setAttribute("value", prefix + "." + obj["ID"]);
        td.innerHTML = `${obj[value]}`; //строка таблицы features
        td.setAttribute("name", prefix + "." + obj["ID"]);
        td.value = `${obj[value]}`
        return td;
      }
    
   

      if (typeof data != undefined) {
        //функция формирования ячейки таблицы

        //получение json через fetch
        tr = newTr(); //для таблицы features
        let tm = document.createElement("th");
        tr.appendChild(tm).innerHTML = `Модель`; // добавление узла модель

        //Формирование 0-й строки заголовков таблицы
        //Формирование заголовков из полей features
        for (p in data.features) {
          //console.log(` Выведем строку таблицы 'features': ${p} `);
          //console.log(data.features[p]);
          td = setth(data.features[p], "column_header", "Feature_name");
          eobj.colIndexes[data.features[p].ID] = td.cellIndex; //добавляем по ключу features[p].ID номер столбца таблицы
          eobj.colcount++;
          //console.log(`index: ${data.features[p].ID}, eobj.colIndexes[${data.features[p].ID}]: ${eobj.colIndexes[data.features[p].ID]}`);
        }
        //let containerelem = document.getElementById("container");
        //console.log(document.getElementById("container").style.width);
        //console.log(`${8000}px`);
        //document.getElementById("container").style.width = `${tr.style.width+200}px`;

        tr = newTr();
        //для таблицы models
        for (k in data.models) {
          //console.log(` Выведем строку таблицы 'models': ${k} `);
          //console.log(data.models[k]);

          td = settd(data.models[k], "model", "Model");

          //для таблицы models_features
          for (p in data.models_features) {
            //console.log(` Выведем строку таблицы 'models_features': ${p} `);
            //console.log(data.models_features[p]);

            //Вывести значение data.models_features[p].Val если атрибут value последнего стобца (td.cellIndex +1) == ..
            //..  data.models_features[p].Feature AND атрибут value 0-ой ячейки текущей строки (tr.sectionRowIndex) ..
            //.. == data.models_features[p].Model иначе далее
            if (
              tr.cells[0].getAttribute("value") ==
                "model." + data.models_features[p].Model &&
              table.rows[0].cells[
                eobj.colIndexes[data.models_features[p].Feature]
              ].getAttribute("value") ==
                "column_header." + data.models_features[p].Feature
            ) {
              //console.log(`Обнаружено пересечение строки: ${data.models_features[p].Model} и столбца: ${data.models_features[p].Feature}`);

              //Заполняем пустыми ячейками, если надо, от ячейки с индексом (td.indexcount + 1) по (eobj.colIndexes[data.models_features[p].Feature] - 1)
              //console.log('(td.indexcount + 1)' + (td.cellIndex + 1));
              //console.log('eobj.colIndexes[data.models_features[p].Feature]: ' + eobj.colIndexes[data.models_features[p].Feature]);
              while (
                td.cellIndex + 1 <
                eobj.colIndexes[data.models_features[p].Feature]
              ) {
                td = settd(eobj, "data", "val");
                // if (tr.cells[0].getAttribute("value") == "model.11") {
                //   console.log(`Adding new cell ${td.cellIndex}`);
                // }
              }
              td = settd(data.models_features[p], "data", "Val")
              // .onclick=()=>{
              //   let val = prompt('Введите значение')
              //   td =settd(val)
              // }; // data.models_features[p] consists of: ID,Feature, Model, Val
            }
          }
          //Дополняем строку пустыми ячейчами, если она не полная
          while (td.cellIndex < eobj.colcount) {
            td = settd(eobj, "data", "val");
          }
          tr = newTr();
        }

        document.getElementById("container").style.width = `${
          document.getElementsByTagName("table")[0].offsetWidth + 50
        }px`;
        //console.log(eobj);
        //console.log(data);
      }
    
     // button.onclick=()=>{
   //     let tablevalue = table.querySelectorAll('input')
 //       let obj = {}
   //     tablevalue.forEach(e=>{
  //       obj[e.getAttribute('name')] = e.value
 //       }) 
 //       let xhr = new XMLHttpRequest()
 //       xhr.open("POST","http://loclhost:8080/show_models_features.php")
 //       xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8', 'Access-Control-Allow-Origin: *');
//        xhr.send(JSON.stringify(obj));
   //    console.log( JSON.stringify(obj))
  //    }
      let tdsearch = document.querySelectorAll('td')
      
      
    for(i = 0 ;i< tdsearch.length; i++){

      
      
      
      tdsearch[i].addEventListener('click', function(){
        let ran = document.createRange();
       //   let self = this
          ran.selectNode(this);
    document.getSelection().addRange(ran);
      })
  
         
      
      
      tdsearch[i].addEventListener('dblclick', function func (){
            let input = document.createElement('input')
          //  input.setAttribute('type','text')
            input.value = this.innerHTML
            this.innerHTML = ""
            this.appendChild(input)
            input.focus()
            let self = this
            input.addEventListener('blur',()=>{
                    self.innerHTML = input.value
                    self.addEventListener('dblclick',func)

            })
            
          
            this.removeEventListener('dblclick',func)

           
          })
      }
    });
  });
};
