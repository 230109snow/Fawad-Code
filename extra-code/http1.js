fetch('https://reqres.in/api/user')
.then(res => {
    if (res.ok){
        console.log('SUCCESS')
    } else {
        console.log('Not Successful')
    }
})
.then(data => console.log(data))
