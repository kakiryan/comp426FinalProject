let myStorage = window.localStorage;
let jwt = myStorage.getItem('jwt');
let userProfile = myStorage.getItem('userProfile');
const userRoot = new axios.create({
  baseURL: `http://localhost:3000/user/${userProfile}`
})

async function renderPage() {
    $('#profileTitle').text(`${userProfile}'s Profile`)
    //userRoot = userRoot + userProfile;
    //console.log(userRoot);
    let x = await getBio();
    let y = await getPic();
    let html = `<img src="${y.data.result}">`;
    //console.log(user);
    $('.bio').text(x.data.result);
    $('.pic').text("");

    $('.pic').append(html);
  }


  async function getBio() {
    return await userRoot.get('/bios', {
      headers: { Authorization: `Bearer ${jwt}` }
    })
  }

async function getPic() {
  return await userRoot.get('/pics', {
    headers: {Authorization: `Bearer ${jwt}` }
  })
}
  
  
  $(document).ready(renderPage());