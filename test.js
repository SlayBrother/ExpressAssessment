const axios = require('axios');

axios.post('http://localhost:3000/', {
    developers: ["joelburton", "elie"]
})
.then(response => {
    console.log('Response:', response.data);
})
.catch(error => {
    console.error('Error:', error.message);
});
