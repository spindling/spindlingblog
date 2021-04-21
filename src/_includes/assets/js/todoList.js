const startAgain = document.getElementById('newList')


    let input = document.getElementById('todoItem');
 	let listCount = 0;

	const todoList = [];
    // use enter key instead of submit...
    input.addEventListener("keyup", event => {
        if(event.keyCode == 13){
            addToList();
        }
    });

 	let allDone = () => {
		document.body.style.backgroundColor= 'black';
		document.body.style.color= 'white';
	};

 	let checkList = () => {

    let done = 0;
	 for(let i=0; i < todoList.length ; i++){
		 if(todoList[i].firstChild.checked){
			 done++
		     }
	        }
		if(done == todoList.length){
			allDone();
            startFw();
		}
      };

	let addToList = () => {
		listCount++;

		let newEl = document.createElement('li');
        newEl.classList.add('flex', 'justify-start', 'p-1')
		let newTodo = document.createTextNode(document.getElementById("todoItem").value);
			newEl.appendChild(newTodo);
		let position = document.getElementById('todoList');
			position.appendChild(newEl).insertAdjacentHTML('afterbegin', `<input id="tickBox${listCount}" class="mr-2" type="checkbox" />`);
			todoList.push(newEl);

        watch();
			};

    let watch = () => {

        if(listCount > 0){
	        let ticked = document.getElementById(`tickBox${listCount}`);
            ticked.addEventListener('change', checkList);
            };
        }

    let finished = () =>{
        let clearList = document.getElementById("todoList");
        while(clearList.firstChild){
            clearList.removeChild(clearList.lastChild);
            }
        document.body.style.backgroundColor= 'white';
        document.body.style.color= 'black';
        }