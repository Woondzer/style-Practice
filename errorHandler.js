class errorHandler {
    constructor() {
        this.errorActive = false;
    }

    checkEmptyInput(inputValue) {
        if (inputValue.trim() === "") {
            this.displayError("Inputfältet får inte vara tomt.");
            return false;
        }
        return true;
    }


    displayError(errorMessage) {
        if (this.errorActive) {
            return;
        } this.errorActive = true;
            
         const formMessages = document.getElementById("form-Messages")
        
        if (formMessages) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerText = errorMessage;

            formMessages.appendChild(errorDiv);

            setTimeout(() => {
                errorDiv.remove();
                this.errorActive = false;
            }, 1500);

            console.log(errorMessage)
            
        }


    }

    
}

export default errorHandler;