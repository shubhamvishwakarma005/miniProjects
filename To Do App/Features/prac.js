const MyTASK = document.querySelector('.mytask')

MyTASK.addEventListener('click', function () {
    document.querySelector(".my-task").style.display = "flex";
})


const AddBtn = document.querySelector('#ad-task-btn')

AddBtn.addEventListener('click', function () {

    let Title = document.getElementById('task-title').innerText.trim();
    let Content = document.getElementById('task-content').innerText.trim();

    if (Title === '' && Content === '') {
        alert('Fill Empty space !');
    }

    console.log('Title :', Title);
    console.log('Content :', Content);

    const ListBtn = document.querySelector('.TasksList')

    ListBtn.addEventListener('click', function () {
        const newTask = document.createElement('div');
        newTask.className = 'task-box';
        newTask.innerHTML = `
                                <h2>${Title}</h2>
                                <p>${Content}</p>
                            `;
         document.querySelector('.Task-Area').appendChild(newTask);
    })



    document.getElementById('task-title').innerText = '';
    document.getElementById('task-content').innerText = '';

})







