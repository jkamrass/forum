var posts = document.getElementsByClassName('posts')[0];
var nameInput = document.getElementById('name');
var messageInput = document.getElementById('message');
var button = document.getElementById('submit');

button.addEventListener('click', () => {
  var postP = document.createElement('p');
  var authorP = document.createElement('p');
  authorP.innerHTML = 'Posted By: <strong>' + nameInput.value + '</strong>';
  postP.innerHTML = messageInput.value;
  posts.append(postP);
  posts.append(authorP);
})