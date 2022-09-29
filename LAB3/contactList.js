const deleteContact = (mobile) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", "http://localhost:3000/contact/"+mobile, false);
    xhttp.send();
    location.reload();
}

const setEditModal = (mobile) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/contact/"+mobile, false);
    xhttp.send();

    const contact= JSON.parse(xhttp.responseText);

    document.write(document.getElementById('editModal').innerHTML);
   
}



const loadcontacts = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/contact", false);
    xhttp.send();

    const contacts = JSON.parse(xhttp.responseText);

    for (let contact of contacts) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-name">${contact.name}</h5>

                        <div>Profession: ${contact.profession}</div>
                        <div>Mobile Number: ${contact.mobile}</div>
                        <div>Telephone Number: ${contact.telephone}</div>

                        <hr>

                        <button type="button" class="btn btn-primary" data-toggle="modal" onclick="deleteContact(${contact.mobile})" >Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"  onclick=setEditModal('${contact.mobile}')>Edit</button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('contacts').innerHTML = document.getElementById('contacts').innerHTML + x;
    }
}

loadcontacts();