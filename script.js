let input = document.getElementById('location')
let btn = document.getElementById('btn')
let temps = document.getElementById('temp')
let desc = document.getElementById('description')
let locationVal = document.getElementById('location-description')

// let para = document.getElementById('para')
// console.log(para.outerHTML)

const apikey = 'e11f4384118a43be349a4584f3fe6bdf'


btn.onclick = function(){
    if(input.value ==""){
        alert(' please enter location ')
    }else{

        loc = input.value

        var url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`


        fetch(url).then(res => res.json()).then(data =>{

         console.log(data)
        
// const temperature = data.main.temp

const {temp} = data.main
const {name} = data
const {description} = data.weather[0]

temps.innerText = Math.floor(temp-272)

desc.innerHTML = description
        
locationVal.textContent = name

        }).catch(e => alert('please enter valid location'))


input.value = ""

    }
}





















// btn.onclick = function(){
//     if(input.value.length === 0){
//         alert('enter something')
//     }else{

//         lat=17.498751
//         lon=78.384430
//         loc = input.value
//         var url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

//         fetch(url).then(res => res.json()).then(data =>{

//             console.log(data)

//             let {temp}  = data.main 
//             let {name} = data
//             let {description} = data.weather[0]

//             temps.textContent = Math.floor(temp - 272)

//        locationVal.innerText = name

//        desc.innerHTML = description

//         } )

//         .catch(e => {
//             console.log(e.message)
//         })

//     }

// input.value = ''



// }









// btn.onclick = function(){
//     if(input.value == ""){
//         alert('enter location')
//     }else{
//         loc = input.value
//        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`

//         fetch(url).then(res => res.json())
//         .then(data => {
//             console.log(data)
  
// btn.onclick = function(){
//     if(input.value=="")
//     {
//         alert('please enter some location')
//     }else{
//         loc = input.value
//         url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
//         fetch(url).then(res => res.json())
//         .then(data => {
//             console.log(data)
//             const{name} = data;
//             const{feels_like}=data.main
//             const{description}=data.weather[0]
//             locationVal.innerText = name;
//             temp.innerText =Math.round( feels_like-276)
//             desc.innerText = description
//         })
//       .catch(()=>{
//             alert('enter valid location')
//         })
//         input.value = ""
//     }
// }
