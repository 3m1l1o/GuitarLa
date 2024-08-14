const url = 'https//:api/com';
fetch( url )
.then((response)=>{
if(response.ok){
      return response.json()
}
throw new Error('hubo un error...');
})
.then(data =>(console.log(data)));
.catch(error => console.log(error.message))