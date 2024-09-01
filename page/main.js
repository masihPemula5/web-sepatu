AOS.init();


    
    // document.getElementById('loginButton').addEventListener('click', function() {
    //     document.getElementById('formContainer').classList.add('show');
    //     showLoginForm();
    // });
    
    // document.getElementById('cancelButton').addEventListener('click', function() {
    //     document.getElementById('formContainer').classList.remove('show');
    // });
    
    // document.getElementById('formContainer').addEventListener('click', function(e) {
    //     if (e.target.id === 'formContainer') {
    //         document.getElementById('formContainer').classList.remove('show');
    //     }
    // });
    
    // document.getElementById('showRegisterForm').addEventListener('click', function() {
    //     showRegisterForm();
    // });
    
    // document.getElementById('showLoginForm').addEventListener('click', function() {
    //     showLoginForm();
    // });
    
    // function showLoginForm() {
    //     document.getElementById('loginForm').style.display = 'block';
    //     document.getElementById('registerForm').style.display = 'none';
    // }
    
    // function showRegisterForm() {
    //     document.getElementById('registerForm').style.display = 'block';
    //     document.getElementById('loginForm').style.display = 'none';
    // }

function out(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Apakah kamu yakin ingin log out?",
        text: "Anda akan keluar dari halaman ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya keluar!",
        cancelButtonText: "Batalkan!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Keluar!",
            text: "Anda telah keluar.",
            icon: "success"
          }).then(() => {
            window.location.href = "http://127.0.0.1:5500/halaman%20utama/index.html";
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Keluar di batalkan!",
            text: "Kamu gak jadi keluar :)",
            icon: "error"
          });
        }
      });
    
 }

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

//burger menu

let openBtn = document.querySelector(".open-btn");

        function openNav() {
            document.getElementById("mySidebar").style.right = "0";
            document.querySelector(".main-content").style.marginLeft = "250px";
            openBtn.style.display = "none";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.right = "-250px";
            document.querySelector(".main-content").style.marginLeft = "0";
            openBtn.style.display = "block";
        }
