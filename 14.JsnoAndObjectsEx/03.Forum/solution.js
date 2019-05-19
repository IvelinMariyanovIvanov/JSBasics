function solve() {
 let form = document.getElementsByTagName('form')[0];
 let submitBtn = form.lastElementChild;

 

 submitBtn.addEventListener('click', event => {
    event.preventDefault();
    // event.preventDefault();
    // console.log(form);
    // console.log(submitBtn);

    let divUserInfo = document.getElementsByClassName('user-info')[0];
    let userName = divUserInfo.children[1].value;
    let password = divUserInfo.children[3].value;
    let email = divUserInfo.children[5].value;

    let topics = Array.from(document.getElementsByClassName('topics')[0].children).filter(el =>el.checked).map(el =>el.value);
 
    let user= {userName, password, email};

    let tableBody = document.getElementsByTagName('tbody')[0];

    let newRow = document.createElement('tr');

    let userNameTd = document.createElement('td');
    userNameTd.textContent = userName;

    let topicsTd = document.createElement('td');
    topicsTd.textContent = topics.join(' ');

    let emailTd = document.createElement('td');
    emailTd.textContent = email;

    newRow.appendChild(userNameTd);
    newRow.appendChild(emailTd);
     newRow.appendChild(topicsTd);

    tableBody.appendChild(newRow);   
 });
 
 
 let searchBtn = document.getElementsByTagName('button')[1];

 searchBtn.addEventListener('click' , () => {
     let searchValue = document.getElementById('exercise').children[1].value;
     // let tds = Array.from(document.getElementsByTagName('td')).map(el => el.textContent).includes(searchValue);
     let tds = Array.from(document.getElementsByTagName('td'));

     tds.forEach(td => {
         if(!td.textContent.includes(searchValue)){
             td.style.visibility = 'hidden';
         }
         else{
             td.style.visibility = 'visible';
         }
     });
     console.log(tds);
 })
 
}