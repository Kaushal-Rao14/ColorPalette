let body = document.querySelector("body");
let button = document.querySelector("#btn");
let container = document.querySelector(".container");
let lightbox = document.querySelector("#lightbox")
let cancel = document.querySelector("#cancel")
// onload window
window.onload(colorpelette())

function colorpelette() {
    container.innerHTML = "";
    for (i = 1; i <= 5; i++) {
        let box = document.createElement("div");
        let iconbox = document.createElement("div");
        iconbox.classList.add("iconbox")
        let icon = document.createElement("i")
        icon.classList.add("fa-solid", "fa-border-all");
        icon.setAttribute('title', 'View Shades');
        let icon2 = document.createElement("i")
        icon2.classList.add("fa-solid", "fa-copy");
        icon2.setAttribute('title', 'Copy HEX Code');
        let icon3 = document.createElement("i")
        icon3.classList.add("fa-solid", "fa-eye");
        icon3.setAttribute('title', 'Color Codes');
        let text1 = document.createElement("h2")
        let text2 = document.createElement("h2")

        iconbox.append(icon)
        iconbox.append(icon2)
        iconbox.append(icon3)
        box.append(iconbox)
        box.appendChild(text1)
        box.appendChild(text2)
        container.appendChild(box);

        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        color = `${red},${green},${blue}`;
        bgcolor = `rgb(${color})`;

        let haxred = red.toString(16);
        let haxgreen = green.toString(16);
        let haxblue = blue.toString(16);

        let colorhax = `#${haxred}${haxgreen}${haxblue}`;
        let colorhaxup = colorhax.toUpperCase();

        box.classList.add("box");
        box.style.backgroundColor = bgcolor;
        text1.innerHTML = color;
        text1.style.display="none"
        text2.innerHTML = colorhaxup;
        if (red < 50) {
            if (green < 50) {
                text2.style.color = "white";
                iconbox.style.color = "white";
            }
            else {
                if (blue < 50) {
                    text2.style.color = "white";
                    iconbox.style.color = "white";
                }
            }

        }
        else{
            if (green < 50) {
                text2.style.color = "white";
                iconbox.style.color = "white";
            }
            else {
                if (blue < 50) {
                    text2.style.color = "white";
                    iconbox.style.color = "white";
                }
            }

        }


        icon.addEventListener("click", function () {
            shades(text1.innerHTML)
        })
        icon3.addEventListener("click", function () {
            colorbox(text1.innerHTML,text2.innerHTML)
        })
        icon2.addEventListener("click", function () {
            // alert(box.innerHTML)
            navigator.clipboard.writeText(text2.innerHTML);
            showToast(`${text2.innerHTML} code copied!`);
        })


        // VIEW COLOR CODE
        let lgbox = document.querySelector("#lgbox");

        function colorbox(a, text2) {
            lgbox.innerHTML = "";
           
            lightbox.classList.toggle("showlightbox");
        
            // Create RGB color box
            let rgbcolor = document.createElement("div");
            rgbcolor.classList.add("colorbox-color");
            
            let titlergb = document.createElement("h3");
            titlergb.innerHTML = "RGB format :";
        
            let textrgb = document.createElement("p");
            textrgb.innerText = `rgb(${a})`;
            
            rgbcolor.append(titlergb);
            rgbcolor.append(textrgb);
            
            lgbox.append(rgbcolor);
        
            // Create HEX color box
            let hexcolor = document.createElement("div");
            hexcolor.classList.add("colorbox-color");
            
            let titlehex = document.createElement("h3");
            titlehex.innerHTML = "HEX format :";
        
            let texthex = document.createElement("p");
            texthex.innerHTML = text2; 
            
           
            hexcolor.append(titlehex);
            hexcolor.append(texthex);
            
            lgbox.append(hexcolor);
        }

// shades code--------------------------------
        
function shades(a) {
    lgbox.innerHTML=""
    lightbox.classList.toggle("showlightbox")
    for (i = 1; i <= 9; i++) {

        let shade = document.createElement("div");
        shade.classList.add("lgshade")
        shade.style.backgroundColor = `rgba(${a},0.${i})`

        let text3 = document.createElement("p")
        shade.append(text3)
        text3.innerHTML = `rgba(${a},0.${i})`

        lgbox.append(shade)
        shade.addEventListener("click", function () {
            // alert(text3.innerHTML)
            navigator.clipboard.writeText(text3.innerHTML);
            showToast(`${text3.innerHTML} code copied!`);
        })

    }
}
cancel.addEventListener("click",function(){
    lightbox.classList.toggle("showlightbox")
})
    }
}





function showToast(message) {
    Toastify({
        text: message,
        duration: 2000,  // Duration in milliseconds
        close: true,    // Whether to add a close button
        gravity: "top", // toast position (e.g., "top-right", "top-center", "top-left", etc.)
        position: 'right',
        backgroundColor: "linear-gradient(to right, lightgreen, green)", // Set your desired background color
    }).showToast();
}
