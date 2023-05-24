function inserer(infos){
    page.innerHTML = `
        <div id="picture"><img src="" alt="Picture"></div>
        <div id="infos">
            <ul>
                <li>Département: </li>
                <li>Ville: </li>
                <li>Pseudo: </li>
                <li>Âge: </li>
            </ul>
        </div>
    `
}

fetch('https://randomuser.me/api/?gender=male&nat=fr')
    .then(infos => infos.json())
    .then(data => {
        picture.innerHTML = `<img src="${data.results[0].picture.large}" alt="Picture">`;
        infos.innerHTML = `
            <ul>
                <li>Département: ${data.results[0].location.state} (${data.results[0].location.postcode})</li>
                <li>Ville: ${data.results[0].location.city}</li>
                <li>Pseudo: ${data.results[0].login.username}</li>
                <li>Âge: ${data.results[0].dob.age}</li
                `
    })