
const body= document.querySelector("body");
const input= document.querySelector(".input-box");
const ol= document.querySelector("ol");
const btn= document.querySelector(".but");
btn.addEventListener("click", function() {
    //creating the list itmem and its assign it to text
    const liText=input.value;
    const li=document.createElement("li");
    li.innerText=liText;
    ol.appendChild(li);
    input.value="";

    //Saving to locastorage
    let listArray=[];
        listArray.push(liText);
        localStorage.setItem('list', JSON.stringify(listArray))
});


