var pets = [];

function addPet() {
    var newPet = document.getElementById("new-pet");
    
    if (!!newPet.value.trim()) {
        var pet = {
            nome: newPet.value,
        };
        
        pets.push(pet);
        
        newPet.value = "";
        
        showPets();
    }
}

function showPets() {
        var list = document.getElementById("list-pets");

        list.innerHTML = "";

        for (var i = 0; i < pets.length; i++) {
            var pet = pets[i];
            
            var petText = document.createElement("p");
            petText.innerHTML = pet.nome;
            
            var list_item = document.createElement("li");
            
            list_item.appendChild(petText);
            list.appendChild(list_item);
        }

        if (pets.length > 15) {
            var resposta = document.getElementById("answer-pets");
            resposta.innerHTML = "Uau, você tem mais animais do que eu! :O";
        } else {
            var resposta = document.getElementById("answer-pets");
            resposta.innerHTML = "Por enquanto eu tenho mais animais que você >:)";
        }
}

showPets();