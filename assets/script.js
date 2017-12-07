window.onload = function () {
    var addCatBtn = document.querySelector('.addnewbtn');
    var categories = document.querySelector('.category-container');
    var catCounter = 0;
    var popup = document.querySelector('.overlay');
    popup.style.display = 'none';


    /*getCatFromLS();

    localStorage.clear();

    console.log(localStorage);

    if (localStorage.getItem("usersession") == null) {
        var arr = {};
        localStorage.setItem("usersession", JSON.stringify(arr));
    } else {

    }

    function saveCatToLS (catTitle){
        var arrayCat = JSON.parse(localStorage.getItem("usersession"));
        arrayCat[catTitle] = {};
        var row = localStorage.setItem("usersession", JSON.stringify(arrayCat));
    }

    function getCatFromLS () {
        var arrayCat = JSON.parse(localStorage.getItem("usersession"));
        for (var i in arrayCat) {

            catCounter++;

            var newDiv = document.createElement('div');
            addNewElements(newDiv, 'categories', categories);

            var newTitle = document.createElement('h2');
            addNewElements(newTitle, 'cat-titles', newDiv);
            newTitle.innerHTML += 'Category n°' + catCounter;

            var newTaskBtn = document.createElement('h4');
            addNewElements(newTaskBtn, 'addnewtaskbtn', newDiv);
            newTaskBtn.innerHTML += '+ ADD NEW TASK';
        }
    }*/

    function addNewElements(element, className, parent) {
        element.className += className;
        parent.appendChild(element);
    }

    function removeCat(element, parent){
        element.removeChild(parent);
    }

    function addNewCategory() {

        catCounter++;

        var newDiv = document.createElement('div');
        addNewElements(newDiv, 'category', categories);

        var newTitle = document.createElement('h2');
        newTitle.innerHTML += 'Category n°' + catCounter;
        addNewElements(newTitle, 'cat-titles', newDiv);

        var newTaskBtn = document.createElement('h4');
        newTaskBtn.innerHTML += '+ ADD NEW TASK';
        addNewElements(newTaskBtn, 'addnewtaskbtn', newDiv);

        var taskContainer = document.createElement('div');
        addNewElements(taskContainer, 'tasks-container', newDiv);

        var removeCatBtn = document.createElement('span');
        removeCatBtn.innerHTML += 'Remove';
        addNewElements(removeCatBtn, 'remove-cat-btn', newDiv);

        newTaskBtn.addEventListener('click', addNewTask);

        removeCatBtn.onclick = function () {
            removeCat(categories, newDiv);
        };
        //saveCatToLS(catCounter);
    }

    function addNewTask() {

        var taskContainer = this.parentNode;

        var newTask = document.createElement('div');
        addNewElements(newTask, 'task', taskContainer);

        var newInputs = document.createElement('div');
        addNewElements(newInputs, 'new-inputs', newTask);

        var newTitleLabel = document.createElement('label');
        addNewElements(newTitleLabel, 'task-title-label task-inputs', newInputs);
        newTitleLabel.innerHTML += 'Title';

        var taskInputTitle = document.createElement('input');
        addNewElements(taskInputTitle, 'task-input-title task-inputs', newInputs);
        taskInputTitle.setAttribute('name', 'title');
        taskInputTitle.setAttribute('type', 'text');
        taskInputTitle.setAttribute('placeholder', 'Task Title');

        var newDescLabel = document.createElement('label');
        addNewElements(newDescLabel, 'task-desc-label task-inputs', newInputs);
        newDescLabel.innerHTML += 'Description';

        var taskInputDesc = document.createElement('input');
        addNewElements(taskInputDesc, 'task-input-desc task-inputs', newInputs);
        taskInputDesc.setAttribute('name', 'description');
        taskInputDesc.setAttribute('type', 'text');
        taskInputDesc.setAttribute('placeholder', 'Task Description');

        var taskSaveBtn = document.createElement('button');
        addNewElements(taskSaveBtn, 'task-save-btn task-inputs', newInputs);
        taskSaveBtn.innerHTML += 'SAVE';

        taskSaveBtn.onclick = function () {

            var taskAfter = document.createElement('div');
            addNewElements(taskAfter, 'task-after', newTask);

            var taskTitle = document.querySelector('.task-input-title').value;

            var taskTitleAfter = document.createElement('h3');
            addNewElements(taskTitleAfter, 'task-title-after', taskAfter);
            taskTitleAfter.innerHTML += taskTitle;

            var taskDesc = document.querySelector('.task-input-desc').value;
            var taskDescAfter = document.createElement('p');
            addNewElements(taskDescAfter, 'task-desc-after', taskAfter);
            taskDescAfter.innerHTML += taskDesc;

            newTask.removeChild(newInputs);

            taskAfter.onclick = function () {
                popup.style.display = 'block';
                document.querySelector('.onrow').innerHTML += catCounter;

            };
        };
    }

    addCatBtn.onclick = function () {
        addNewCategory();
    };
};