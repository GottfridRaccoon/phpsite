window.onload = () => {
  let la = document.getElementById("some");
  let href = la.getAttribute("href");

  let container = document.getElementById("data_container");
  let table = document.createElement("table");
  container.appendChild(table);

  fetch(href).then(function (response) {
    response.json().then(function (data) {
      let tr;
      let td;
      let eobj = new Object();
      eobj.model = "";
      eobj.val = "";
      eobj.colcount = 0;
      eobj.colIndexes = new Object();

      const buttonSend = document.createElement('button')
      table.append(buttonSend)
      buttonSend.innerHTML ="Отправить"

      let newTr = () => {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        return tr;
      };

      function setth(obj, prefix, value) {
        let th = document.createElement("th");
        tr.appendChild(th);
        th.setAttribute("value", prefix + "." + obj["ID"]);
        th.innerHTML = `${obj[value]}`; //строка таблицы features
        return th;
      }

      function settd(obj, prefix, value) {
        let td = document.createElement("td");
        tr.appendChild(td);
        td.setAttribute("value", prefix + "." + obj["ID"]);
        td.innerHTML = `${obj[value]}`; //строка таблицы features
        td.setAttribute("name", prefix + "." + obj["ID"]);
        td.value = `${obj[value]}`
        td.setAttribute('class', 'table-value')
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
          
              td = setth(data.features[p], "column_header", "Feature_name");
            //добавляем по ключу features[p].ID номер столбца таблицы
              eobj.colIndexes[data.features[p].ID] = td.cellIndex; 
              eobj.colcount++;
          }
        tr = newTr();
        //для таблицы models
        for (k in data.models) {
          
          td = settd(data.models[k], "model", "Model");
          //для таблицы models_features
          for (p in data.models_features) {

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
              //Заполняем пустыми ячейками, если надо, от ячейки с индексом (td.indexcount + 1) по (eobj.colIndexes[data.models_features[p].Feature] - 1)
              
               while (td.cellIndex + 1 < eobj.colIndexes[data.models_features[p].Feature]) {
                   td = settd(eobj, "data", "val");
               }
              td = settd(data.models_features[p], "data", "Val")
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
       
      }
      
 document.querySelectorAll('td').forEach((el)=>{
      //добавление кадому i лементу эвенты

  //    tdsearch[i].addEventListener('click', function(){
    //    let ran = document.createRange();
    //      ran.selectNode(this);
   // document.getSelection().addRange(ran);
   //   })
      //cоздание инпута при клике на элемент
    el.addEventListener('dblclick', function func (){
            let input = document.createElement('input')
            input.value = this.innerHTML
            this.innerHTML = ""
            this.appendChild(input)
            input.setAttribute('class', 'set-value')
            input.focus()
            let obj = {}

            input.addEventListener('blur',()=>{
                    this.innerHTML = input.value
                    this.addEventListener('dblclick',func)
                    let xhr = new XMLHttpRequest()
                    const tablevalue = table.querySelectorAll('td')
        

       //  tablevalue.forEach(e=>{
                  obj[this.getAttribute('name')] = input.value
      //  }) 
              
               xhr.open("POST","/pages/show_models_features.php")
               xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8'
                                );
               
                xhr.send(JSON.stringify(obj));
                console.log( JSON.stringify(obj))
            })

            this.removeEventListener('dblclick',func)
          })
      })

    // buttonSend.onclick=()=>{
        
     // }
      });
    });
};
