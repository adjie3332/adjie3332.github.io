
const form = document.getElementById("contact-form");
const btn_send = document.querySelector(".btn-send");
const btn_load = document.querySelector(".btn-load");
const alert = document.querySelector(".alert");


form.addEventListener("submit", function(event){
    event.preventDefault();
    // membuat variable
    params = {
        // mengambil data melalui id
        from_name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value

    }
    emailjs.send("service_bgo3s19", "template_z3pktks", params).then(function(response){
        // menampilkan alert dengan menambahkan class show
        alert.classList.toggle("show");
        // mereset form
        form.reset();
        console.log("Success!", response);
    });
});

    
