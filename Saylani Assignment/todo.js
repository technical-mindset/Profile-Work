let orderList = document.getElementById('ol');
let inputValue = document.getElementById('floatingInput');
let addbtn = document.getElementById('add-btn');

function appendChildren(){
let para = document.createElement('span');
let list = document.createElement('li');
let ediT = document.createElement('button');
let deletE = document.createElement('button');
para.classList.add();
para.innerText = inputValue.value;
list.classList.add('my-3');
ediT.innerHTML = "Edit";
ediT.classList.add("btn");ediT.classList.add("btn-info");ediT.classList.add("mx-2");ediT.classList.add("p-2");
deletE.innerHTML = "Delete";
deletE.classList.add("btn");deletE.classList.add("btn-info");deletE.classList.add("mx-2");deletE.classList.add("p-2");
deletE.onclick=()=>{
    orderList.removeChild(list);
    inputValue.value = "";
    addbtn.innerHTML = 'Add In List';
};
ediT.onclick=()=>{
   addbtn.innerHTML = 'Update';
   inputValue.value = para.innerText;
   addbtn.removeAttribute(onclick);
   addbtn.onclick=()=>{
    para.innerText = inputValue.value;
    addbtn.innerHTML = 'Add In List';
    addbtn.setAttribute("onclick","javascript:appendChildren();")
    inputValue.value="";
   }
  
}

list.appendChild(para);
list.appendChild(ediT);
list.appendChild(deletE);
orderList.appendChild(list);
    inputValue.value="";

}



