let btn = document.getElementById("btn");


btn.addEventListener("click",()=>{

    let MainMenu = prompt("What would you like to do?");

    let arr = [];

    while (MainMenu !="quit"){

        if (MainMenu === "new"){

            let newTask = prompt("Enter new Todo");
            arr.push(newTask);
            console.log(`${newTask} added to List`);
        
        }

        if(MainMenu ==="list"){

            console.log("**********");

            for(let i = 0; i<arr.length;i++){
                console.log(i+":"+arr[i]);
            }
        
        }

        if(MainMenu ==="delete"){
            let cut = prompt("Type number of what you want to delete");
            console.log(`${cut} Removed `);
            arr.splice(cut,1);
        }

        MainMenu = prompt("What would you like to do?");

        if(MainMenu==="quit"){
            console.log("App quitted");
            break;
        }
    }
})


 








