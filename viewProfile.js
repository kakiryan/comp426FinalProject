let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let userProfile = myStorage.getItem('userProfile');

async function renderPage() {
    $('#profileTitle').text(`${userProfile}'s Profile`)
  
  }
  
  
  $(document).ready(renderPage());