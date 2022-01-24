
var icons = [
    'Cadeau.png',
    'Cadeau.png',
    'Chapeau.png',
    'Chapeau.png',
    'ChocoChaud.png',
    'ChocoChaud.png',
    'Etoile.png',
    'Etoile.png',
    'Sapin.png',
    'Sapin.png',
    'Snowman.png',
    'Snowman.png',
    ]

    function random_Image (){
        let index = 1;
        while (icons.length > 0) {
            
            randomIndex = Math.floor(Math.random()* icons.length);
            selectedImage = icons[randomIndex];

            let img = document.querySelector('img[data-card-number="'+index+'"]');
            console.log(icons.length);
            if (img !== null){
                img.src= `./style/Icons/${selectedImage}`;


                icons.splice(randomIndex, 1);
            }
            index ++
        }
    }

    random_Image()

    var pair = 0;
    var checkCard = [];

    function flip(event){
        var element = event
        var image = event.querySelector('img')
        checkCard.push (image);
        pair ++;

        if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
        }
        else {
        element.style.transform = "rotateY(180deg)";
        }

    }
    console.log(pair);
    console.log(checkCard);
    memory(checkCard)
    };


    function memory (tab){
        let image1 = tab[0]
        let image2 = tab[1]
        if (pair === 2 ){
            if (image1 === image2){
                console.log("C'est une bonne paire !")
            } else if (image1 != image2) {
                console.log("Mauvaise paire ")
            }
            console.log("Deux Cartes on été retourné !")
            pair = 0;
        }
    }

