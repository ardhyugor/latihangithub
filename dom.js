function demoFunctions() {
 
    const judul = document.getElementById("judul");
    judul.style.border = "2px solid red";

    const paragraphs = document.getElementsByTagName("p");
    paragraphs[0].style.color = "green";
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "20px";
    }


    const boxes = document.getElementsByClassName("box");
    for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.border = "2px solid blue";
    }
    
    const yo = document.querySelector(".highlight");
    yo.style.fontWeight = "bold";

    const allboxes = document.querySelectorAll(".box");
    allboxes.forEach(box => {
        box.style.color = "red";
    });
    
}