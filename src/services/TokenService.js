export default {
  save(token) {
  // save(property,token) {
  	window.localStorage.setItem("authToken", token); 
    // window.localStorage.setItem(property, token); // store token in localStorage under the 'authToken' key

  },

  read() {
  	console.log("TokenService.read")
    return window.localStorage.getItem('authToken')|| ''; // fetch the token out of localStorage

  },

  destroy() {
    window.localStorage.removeItem('authToken'); // delete the token
  },

};
