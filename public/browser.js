console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">
                        ${item.reja}
                    </span>
                    <div>
                        <button data-id="${item._id}"
                            class="edit-me btn btn-secondary btn-sm mr-1">O'zgartirish</button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
                    </div>
                
            </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", (e) => {
    e.preventDefault();

    axios
        .post("/create-item", { reja: createField.value })  // 1 Frontend dan Backend ga ma'lumot ketishi
        .then(response => {
            // 6 Backend dan Frontend ga qabul qilish // Hali ishlov bermadik
            document
            .getElementById("item-list") // <ul>
            .insertAdjacentHTML("beforeend", itemTemplate(response.data)) // Endi ishlov beramiz
            createField.value = "";
            createField.focus();
        })
        .catch(err => {
            console.log("Iltimos qaytadan harakat qiling!");            
        });
});

document.addEventListener("click", function(e) {
    console.log(e.target);

    // Delete oper
    if(e.target.classList.contains("delete-me")) {
        // alert("Siz delete tugmasini bosdingiz");
        if(confirm("Anniq o'chirmoqchimisiz???")) {
            // alert("Yes deb javob berildi");
            axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();               
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        } /*else {
            // alert("No deb javob berildi");
        }*/
    }

    // Edit oper
    if(e.target.classList.contains("edit-me")) {
        // alert("Siz edit tugmasini bosdingiz");
        const text = e.target.closest("li").querySelector(".item-text").textContent.trim();
        let userInput = prompt("O'zgartirishni kiriting", text);
        if(userInput) {
            // console.log(userInput);
            console.log("DB jRyon sodir bo'ldi");
            
            axios
            .post("/edit-item",{
                id: e.target.getAttribute("data-id"), 
                new_input: userInput,
            })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(
                    ".item-text"
                ).innerHTML = userInput;
            })
            .catch ((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            })           
        }
    }         
});

document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", { delete_all: true }).then((response) => {
        // console.log(response.data);
        alert(response.data.state);
        document.location.reload();        
    });
});