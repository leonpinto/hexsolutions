const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if(scrollPos > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// function sendEmail() {
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "baboomba84@gmail.com",
//         Password : "lava192004",
//         To : "leon.pinto2004@gmail.com",
//         From : document.getElementById("email").value,
//         Subject : "New Contact Form Enquiry",
//         Body : "And this is the body"
//     }).then(
//         message => alert(message)
//     )
// }