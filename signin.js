const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
function display(form){
    if(form.username.value=="rajawatbanna"){
                                 if(form.password.value=="sparkk"){
                                                             location="http://127.0.0.1:5500/trip.html";
                                                                     }
                                         else{
                                              alert('Invalid Password');
                                                 }                             
                                            }
                     else{
                            alert('Invalid Username');
                     }                       
}