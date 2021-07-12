const axios = require('axios');

export default async function FakeCarData() {

    let FakeCarData = [{ id: 1, heading:'black suv mitsubishi',name: 'mitsubishi', type: 'suv', price:60, description:'lorem ipsum text' , location:'lahore', image:'https://images.unsplash.com/photo-1594978100646-ccd2ae32b711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN1dnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}]
   return FakeCarData
    // try {
    //   const response = await axios.get('https://myfakeapi.com/api/cars');
    //   return response
    // } catch (error) {
    //   console.error(error);
    // }
}
