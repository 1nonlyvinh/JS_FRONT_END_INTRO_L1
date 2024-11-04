// stores text and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors [Math.floor (Math.random() * colors.length)];
        textElement.style.color = randomColor; 
    });
}
changeTextColor();

//---------------------------------------------------------------------------------------------------------//

const pictureElement  = document.getElementById("toggle-image");

function changePicture(){
    const images = [
        "https://vid.alarabiya.net/images/2021/09/08/6b221f49-728a-4a2b-a1f6-7529e4bbe998/6b221f49-728a-4a2b-a1f6-7529e4bbe998.jpg?width=372&format=jpg",
        "https://www.rd.com/wp-content/uploads/2021/04/GettyImages-1145794687.jpg",
        "https://media.wired.com/photos/593261cab8eb31692072f129/191:100/w_1280,c_limit/85120553.jpg",
        "https://cdn.ishencai.com/gallery/publish/2024/08/10/5d1837de1884424e8623b11cfab26de4.png?x-oss-process=image/resize,w_500,h_500",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP60vz4lPHRQlLVIBDAhlVK4Xjk13ONQoneR3RrAwwz7_EG8En:https://factanimal.com/wp-content/uploads/2023/03/cute-red-panda.jpg&s",
        "https://listproducer.com/wp-content/uploads/2014/10/cute.jpg"
    ]; 
    
    let currentIndex = 0; 
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; 
        pictureElement.src = images[currentIndex]; 
    });
}

changePicture();

