function demoInnerHTML() {
    const gokgok = document.getElementById("uhuy");
    gokgok.innerHTML = `
    <h3>contoh innerHTML</h3>
    <p>kita bisa menyisipkan <strong>HTML lengkap</strong> dengan ini.</p>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>`;
}

function demoStyle() {
    const headers = document.getElementById("header");
    const paragraph = document.getElementById("text-paragraf");
    
    headers.style.backgroundColor = "blue";
    headers.style.color = "white";
    paragraph.style.color = "red";
    paragraph.style.fontWeight = "bold";
}

function demoSetAttribute() {
    const bok = document.getElementById("ja");

    bok.setAttribute("style", "background-color: green; padding: 10px; border-radius: 5px;");
    bok.setAttribute("class", "box");
    
}

function demoClassList() {
    const paragraph = document.getElementById("text-paragraf");

    paragraph.classList.add("highlight");
    paragraph.classList.add("big-text");

    paragraph.classList.toggle("hidden");

    setTimeout(() => {
        paragraph.classList.toggle("hidden");
    }, 1000);
    
}