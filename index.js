update1();

butn.addEventListener('click',()=>{
    tit=document.getElementById("title").value;
    desc=document.getElementById('description').value;
    document.getElementById("title").value=null;
    document.getElementById('description').value=null;

    if(localStorage.getItem('itemJSON')==null){
        itemJSONarry=[];
        itemJSONarry.push([tit,desc]);
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarry));
    }
    else{
        item=localStorage.getItem('itemJSON');
        itemJSONarry=JSON.parse(item);
        itemJSONarry.push([tit,desc]);
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarry));
    }
    tbody=document.getElementById('tbody');
    str="";
    itemJSONarry.forEach((element,index) => {
        str+=
        `<tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger" onclick="Deleted(${index})">Delete</button></td>
        </tr>`
    });
    tbody.innerHTML=str;
});

function Deleted(ind)
{
    itemJSONarry.splice(ind,1);
    update2();
}

function DeleteAll(){
    localStorage.clear();
    update1();
}

function update1(){
    if(localStorage.getItem('itemJSON')==null){
        itemJSONarry=[];
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarry));
    }
    else{
        item=localStorage.getItem('itemJSON');
        itemJSONarry=JSON.parse(item);
        localStorage.setItem('itemJSON',JSON.stringify(itemJSONarry));
    }
    tbody=document.getElementById('tbody');
    str="";
    itemJSONarry.forEach((element,index) => {
        str+=
        `<tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger" onclick='Deleted(${index})'>Delete</button></td>
        </tr>`
    });
    tbody.innerHTML=str;
}

function update2(){
    localStorage.setItem('itemJSON',JSON.stringify(itemJSONarry));

    tbody=document.getElementById('tbody');
    str="";
    itemJSONarry.forEach((element,index) => {
        str+=
        `<tr>
        <td>${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger" onclick='Deleted(${index})'>Delete</button></td>
        </tr>`
    });
    tbody.innerHTML=str;
}