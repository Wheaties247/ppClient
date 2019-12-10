export default {
  save(token) {
  // save(property,token) {
  	window.localStorage.setItem("currentUser", token); 
    // window.localStorage.setItem(property, token); // store token in localStorage under the 'authToken' key

  },

  read() {
  	console.log("TokenService.read")
    return window.localStorage.getItem('currentUser')|| ''; // fetch the token out of localStorage

  },

  destroy() {
    window.localStorage.removeItem('currentUser'); // delete the token
  },

};
