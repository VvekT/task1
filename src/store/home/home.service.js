const showMessage = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({data: {
                title: 'Home', description: "This is Home"
            }})
        }, 2000)
    })
}

const HomeService = {
    showMessage
}

export default HomeService