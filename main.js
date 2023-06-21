var typed = new Typed(".auto-type",{
    strings: ["Developer", "Freelancer", "Designer"],
    typeSpeed:130,
    backSpeed:40,
    loop:true
})

var navBar = document.getElementById("navBar");
    window.onscroll = function(){
        if(window.scrollY > 543){
            navBar.classList.add("scrolled");
        }else{
            navBar.classList.remove("scrolled");
        }
    }

  const nama = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const pesan = document.getElementById('pesan'); 
  const submit = document.getElementsByClassName('form-contact') [0];  

  submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let body = `
    <b>Name     : </b>${nama.value}
    <br>
    <b>Email    : </b>${email.value}
    <br>
    <b>Subject  : </b>${subject.value}
    <br>
    <p>Message  : <p>${pesan.value} 
     `

    Email.send({
        SecureToken: "2f52d976-c4f5-4c07-8a6a-d31b751e7085",
        To: 'putrafauzan32@gmail.com',
        From: 'putrafauzan32@gmail.com',
        Subject: 'test email from' + email.value,
        Body: body
      }).then(
        function (message) {
          alert("Pesan telah berhasil dikirim!");
        }
      );
      return false;

  });

    
  
