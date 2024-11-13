import errorHandler from './errorHandler.js';

class ToDoManager {
    constructor (addButtonId,resetBtnId, inputFieldId, listContainerId, donelistContainerId) {
        this.addBtn = document.getElementById(addButtonId);
        this.resetBtn = document.getElementById(resetBtnId);
        this.inputToDo = document.getElementById(inputFieldId);
        this.todoListContainer = document.getElementById(listContainerId); // ul todo container
        this.doneListContainer = document.getElementById(donelistContainerId) // ul done container
        this.errorHandler = new errorHandler();


        this.addBtn.addEventListener('click', this.handleAddToDo.bind(this));
        this.resetBtn.addEventListener('click', this.handleResetPage.bind(this));
        // this.doneBtn.addEventListener('click', this.handleDoneToDo.bind(this)); //working on this
    }


    handleAddToDo(event) {
        event.preventDefault();

        let inputValue = this.inputToDo.value;

        if (!this.errorHandler.checkEmptyInput(inputValue)) {
            return;
        }


        const newListItem = document.createElement('li');
        const newInput = document.createElement('input');
   

        const changeBtn = document.createElement('button');
        const doneBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        newInput.type = 'text';
        newInput.maxLength = 35;
        newInput.style.width = '230px'
        newInput.value = inputValue;
        newInput.className = 'input-ToDo-copy';
        newInput.disabled = 'true';
    
        
        changeBtn.type = 'button';
        changeBtn.className = 'changeBtn, fa fa-pencil'
        // changeBtn.innerText = 'Ändra'
        changeBtn.addEventListener('click', () => this.handleEditToDo(newInput, changeBtn));


        doneBtn.type = 'button';
        doneBtn.innerText = 'Färdig';
        doneBtn.addEventListener('click', () => this.handleDoneToDo(newInput, newListItem))


        deleteBtn.type = 'button';
        // deleteBtn.innerText = 'Radera'
        deleteBtn.className = 'fa fa-trash'
        deleteBtn.addEventListener('click', () => this.handleDeleteToDo(newListItem));

        
        newListItem.appendChild(newInput);
        newListItem.appendChild(changeBtn);
        newListItem.appendChild(doneBtn);
        newListItem.appendChild(deleteBtn);
        this.todoListContainer.appendChild(newListItem);

        this.inputToDo.value = "";
    }

    handleResetPage() {
        location.reload()
    }

    handleEditToDo(newInput, changeBtn){
        if(newInput.disabled === true || !this.errorHandler.checkEmptyInput(newInput.value)){
            newInput.disabled = false;
            // changeBtn.innerText = 'Spara'
            return;
        } else {
            newInput.disabled = true;
            // changeBtn.innerText = 'Ändra'
        }
    }

    handleDoneToDo(inputElement, listItem) {
        event.preventDefault();

        let doneValue = inputElement.value;

        if(!this.errorHandler.checkEmptyInput(doneValue)){
            return;
        }
        
        const doneListItem = document.createElement('li');
        const doneInput = document.createElement('input');
        const changeBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');
        
        doneInput.type = 'text';
        doneInput.maxLength = 35;
        doneInput.style.width = '230px'
        doneInput.value = doneValue;
        doneInput.className = 'done-ToDo-copy';
        doneInput.disabled = 'true';
       

        changeBtn.type = 'button';
        // changeBtn.innerText = 'Ändra'
        changeBtn.className = 'fa fa-pencil'
        changeBtn.addEventListener('click', () => this.handleEditToDo(doneInput, changeBtn));

        deleteBtn.type = 'button';
        // deleteBtn.innerText = 'Radera'
        deleteBtn.className = 'fa fa-trash'
        deleteBtn.addEventListener('click', () => this.handleDeleteToDo(doneListItem));

        doneListItem.appendChild(doneInput);
        doneListItem.appendChild(changeBtn);
        doneListItem.appendChild(deleteBtn);
        this.doneListContainer.appendChild(doneListItem);

        listItem.remove();
    }

    handleDeleteToDo(listItem) {
        listItem.remove();
    }

    



}

export default ToDoManager;