
let originalText = "";

function pageLoad() {
    originalText = document.getElementById('Text').innerHTML;
}

function findText() {
    let phrase = document.getElementById('find').value;
    let txt = originalText;

    document.getElementById('Text').innerHTML = txt.split(phrase).join
        ('<span class="highlight">' + phrase + '</span>')
}
     

// ?????????????????????????????????????????????


// date
setInterval(() =>{
    let d = new Date();
    document.getElementById('date').innerText = d.toLocaleDateString('fa-IR');
})