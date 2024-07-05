
window.addEventListener('load', () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list_all = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        const task = input.value;

        if(!task){
            alert("please fill out the task");
            return;
        } 

        const task_new = document.createElement("div");
        task_new.classList.add("task");

        const task_content = document.createElement('div');
        task_content.classList.add("content");
        

         task_new.appendChild(task_content);

        const input_task = document.createElement("input");
        input_task.classList.add("text");
        input_task.type = "text";
        input_task.value = task;
        input_task.setAttribute("readonly", "readonly");

        task_content.appendChild(input_task);

        const task_actions_btn = document.createElement('div');
        task_actions_btn.classList.add("actions");

        const delete_task = document.createElement("button");
        delete_task.classList.add("delete")
        delete_task.innerHTML = "Delete";
        
        const edit_task = document.createElement("button");
        edit_task.classList.add("edit")
        edit_task.innerHTML = "Edit";
        
        
        task_actions_btn.appendChild(edit_task);

        task_actions_btn.appendChild(delete_task);
        

        task_new.appendChild(task_actions_btn)


        list_all.appendChild(task_new);

        input.value = "";

        edit_task.addEventListener("click", () => {
            if(edit_task.innerText.toLowerCase() == "edit"){
                input_task.removeAttribute("readonly");
                input_task.focus();
                edit_task.innerText = "Save";
            } else{
                input_task.setAttribute("readonly", "readonly");
                edit_task.innerText ="Edit"
            }   
        })

        delete_task.addEventListener("click",  () => {
            list_all.removeChild(task_new);
        })
    })
})
