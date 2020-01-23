// console.log(document)
// document.getElementById('myDiv').innerHTML = `<h1 id='myHeader'>Hello there!</h1>`
// document.getElementById('myDiv').textContent = "Cheers"
document.getElementById('myDiv').innerHTML = `
<style>{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 90%;
    flex: 0 0 90%;
    max-width: 90%;
  }
</style><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-1 h1">Navbar</span>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <!-- End Nav -->
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>About Me</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="https://i.imgur.com/SLdta8P.jpg" alt="Placeholder" class="img-thumbnail">
          </div>
          <div class="col-md-9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique,
              nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae
              felis vulputate pretium. Nullam commodo, est ac auctor ornare, eros nisi fringilla sem,
              non pulvinar tortor lorem sit amet sem. Aenean quis erat facilisis, porttitor ex cursus,
              luctus enim. Curabitur et metus in lacus tristique sagittis et in lorem. Nunc id nisi et
              neque fringilla ultricies. Aenean at feugiat elit, a posuere justo. Pellentesque egestas
              dolor et nisi venenatis, nec fermentum urna fringilla. Etiam efficitur porta purus, id
              posuere sem congue a.
            </p>
          </div>
        </div>
      </div>
      <!--Create Card taking up 4 Columns-->
      <div class="col-md-4">
        <div class="card mt-2">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
let formElem = document.createElement('form')
formElem.innerHTML = `
  <form>
    <label>email</label>
    <input type="text"></input>
    <label>password</label>
    <input type="text"></input>
    <button>Submit</button>
  </form>
  `
document.querySelector('#myDiv').append(formElem)

let users = [
  {
    username: 'johndoe',
    password: '1234'
  },
  {
    username: 'janedoe',
    password: '4321'
  },
  {
    username: 'jackdoe',
    password: '1423'
  },
  {
    username: 'jerrydoe',
    password: '2314'
  }
]
users.forEach(username => {
  console.log(username)
});

for (i = 0; i < users.length; i++) {
  let userText = users[i].username
  let passText = users[i].password

  let myList = document.createElement('div')
  myList.innerHTML = `
      <label>Username: ${userText}</label>
      <br>
      <label>Password: ${passText}</label>
      `
  document.querySelector('#myDiv').append(myList)
}