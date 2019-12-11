let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let user = myStorage.getItem('user');

const userRoot = new axios.create({
    baseURL: 'http://localhost:3000/user'
  })

async function renderPage() {
    console.log(jwt);
    if (jwt==null){
      window.location.replace("http://localhost:3000/index.html");
      alert("Please Make a Profile First to View Your Library!")
    }else{
    $('#libraryTitle').text(`${user}'s Profile`)
    $('#credentials').text(`Logged in as: ${user}`)
  
  }
  }
  
  
  $(document).ready(renderPage());