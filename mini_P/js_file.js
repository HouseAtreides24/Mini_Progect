
fetch('https://jsonplaceholder.typicode.com/users')
.then(someResponse => someResponse.json())
.then(someUsers => {
    let ind = 0;
    for (const someUser of someUsers) {
        ind++;
        let divUser = document.createElement('div')
        let idUserDiv = document.createElement('div')
        let nameUserDiv = document.createElement('div')

        divUser.innerHTML = 'USER '+ ind;
        idUserDiv.innerHTML = `  ${someUser.id}`;
        nameUserDiv.innerHTML = `  ${someUser.name}`

        let detailsButton = document.createElement('button')
        detailsButton.innerText = 'SHOW DETAILS'
        detailsButton.onclick = ()=>{
            document.location = 'user-details.html?'+`${someUser.id}`
        }

        divUser.append(idUserDiv,nameUserDiv,detailsButton)
        document.body.appendChild(divUser)
        //console.log(ind  + `  ${someUser.id}` + `  ${someUser.name}`)
    }
    //console.log(someUsers)
});