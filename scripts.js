function about(){
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#sobre__mim').style.display = 'flex';
    document.querySelector('#formacao').style.display = 'none';
    document.querySelector('#hobbies').style.display = 'none';
    document.querySelector('#projetos').style.display = 'none';
    document.querySelector('#contato').style.display = 'none';
}
function formacao(){
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#sobre__mim').style.display = 'none';
    document.querySelector('#formacao').style.display = 'block';
    document.querySelector('#hobbies').style.display = 'none';
    document.querySelector('#projetos').style.display = 'none';
    document.querySelector('#contato').style.display = 'none';
}
function hobbies(){
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#sobre__mim').style.display = 'none';
    document.querySelector('#formacao').style.display = 'none';
    document.querySelector('#hobbies').style.display = 'block';
    document.querySelector('#projetos').style.display = 'none';
    document.querySelector('#contato').style.display = 'none';
}
function projetos(){
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#sobre__mim').style.display = 'none';
    document.querySelector('#formacao').style.display = 'none';
    document.querySelector('#hobbies').style.display = 'none';
    document.querySelector('#projetos').style.display = 'block';
    document.querySelector('#contato').style.display = 'none';
}
function contato(){
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#sobre__mim').style.display = 'none';
    document.querySelector('#formacao').style.display = 'none';
    document.querySelector('#hobbies').style.display = 'none';
    document.querySelector('#projetos').style.display = 'none';
    document.querySelector('#contato').style.display = 'block';
}
function email(){
    const Email = document.querySelector('#email').innerText;
      navigator.clipboard.writeText(Email);
  }