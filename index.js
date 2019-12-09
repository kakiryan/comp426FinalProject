let count = 0;
let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

const pubRoot = new axios.create({
  baseURL: 'http://localhost:3000/public'
})

async function handleSubmit(event) {
  event.preventDefault();
  let y = document.getElementById('emailHolder').value;
  console.log(y);
  let z = addEmail(y);
  console.log(z)
}


async function addEmail(email) {
  count++;
  return await pubRoot.post(`/emails/`+count,
    {data: { email} })
}

async function getAllEmails() {
  return await pubRoot.get('/emails');
}

async function renderPage() {
    /*
  $('#email').on('click', handleSubmit);
  getAllEmails().then(function(result) {
    console.log(result.data.result);
    let a = result.data.result;
    for (var key in a) {
      if (a.hasOwnProperty(key)) {
        count++;
      }
    }
    count--;
    console.log(count);
  })
  console.log(count)
  */
  getUsers();
  var countries = ["hi", "hey"];
  autocomplete(document.getElementById("myInput"), countries);
  // $('#email').click(function (e) {
  //   event.preventDefault();
  //   console.log(e.target);
  //   let y = document.getElementById('emailHolder').value;
  //   const response = axios({
  //     method: 'POST',
  //     url: 'http://localhost:3000/public/',
  //     data: {
  //       "email": y,
      
  //     }
  //   }).catch(e => {
  //     console.log(e);
  //   });
  // });
}

$(document).ready(renderPage());

async function getUsers() {
    const response2 = await axios({
        method: 'GET',
        url: 'http://localhost:3000/private/users',
        
          headers: { Authorization: `Bearer ${jwt}` }
      }
      )
      console.log(response2.data.result);
}
