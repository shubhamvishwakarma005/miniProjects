let MyTaskbtn = document.querySelector('#my-task-btn')

MyTaskbtn.addEventListener('click', function createTask() {
   document.querySelector('.my-task').style.display = 'flex';
})



// const TaskList = document.querySelector('.all-Task')

const AddTaskbtn = document.querySelector('#ad-task-btn')

AddTaskbtn.addEventListener('click', function() {
   let taskTitle = document.getElementById('task-title').innerText.trim();
   let taskContent = document.getElementById('task-content').innerText.trim();

   if (taskTitle === '' && taskContent === '') {
      alert('Plese Enter Your Title and Content !');
   }

   console.log('Title :', taskTitle);
   console.log('Content : ', taskContent);

   document.getElementById('task-title').innerText = '';
   document.getElementById('task-content').innerText = '';
   
}
)