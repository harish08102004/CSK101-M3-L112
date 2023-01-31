// create a function and following the progressions inside the function.
let array = [];
btnGet.onclick = function(){
function getData() {
  const getMessage = document.getElementById('message');

  // Progression 1: Create a promise call which fetches data
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      console.log(res.data);

      const result = res.data;

      // Progression 2: Display the fetched data in the form of list
      result.forEach((el) => {
        const getPlayer = document.createElement('div');
        getPlayer.setAttribute('id', 'player');
        getPlayer.setAttribute('class', 'player');

        const name = document.createElement('div');
        name.innerText = el.name;
        const email = document.createElement('div');
        email.innerText = el.email;
        const phone = document.createElement('div'); 
        phone.innerText = el.phone;
        const website = document.createElement('div');
        website.innerText = el.website;
        const company = document.createElement('div');
        company.innerText = el.company.name;
        const city = document.createElement('div');
        city.innerText = el.address.city;
        const zipcode = document.createElement('div');       
        zipcode.innerText = el.address.zipcode;

        getPlayer.append(name , email , phone , website , company , city , zipcode);
        array.push(getPlayer);
      });

      array.forEach((ele) => {
        getMessage.append(ele);
      });

      console.log(getBody);
    })
    //Progression 3: When the promise call is rejected then throw an error
    .catch((error) => {
      console.log('Promise rejected.');
      console.log(error.message);
    });
}
getData();
};