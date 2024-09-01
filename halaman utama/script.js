document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('formContainer').classList.add('show');
    showLoginForm();
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('formContainer').classList.remove('show');
});

document.getElementById('formContainer').addEventListener('click', function(e) {
    if (e.target.id === 'formContainer') {
        document.getElementById('formContainer').classList.remove('show');
    }
});

document.getElementById('showRegisterForm').addEventListener('click', function() {
    showRegisterForm();
});

document.getElementById('showLoginForm').addEventListener('click', function() {
    showLoginForm();
});

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

function klik1(){
    let user = document.getElementById("user").value
    if(user === "ADMIN"){
       window.open("http://127.0.0.1:5500/page/page1.html")
       
    }else if (user === ""){
       alert("Eiits isi dulu")
    }else{
        alert("USERNAME SALAH😡👊")
    }
}
function klik(){
    alert("Register sukses")
}
    function showUp(){
        let popup = document.getElementById("popup")
        popup.style.display = "block"
        setTimeout(function() {
            popup.style.display = "none"; // Menghilangkan pop-up setelah 3 detik (3000ms)
        }, 2000); 
    }
    showUp();
