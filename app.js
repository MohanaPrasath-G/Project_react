import React from "react"
import reactDOM from "react-dom/client"

const header=<h1>Welcome to React</h1>

//react Element 
const mailId="petermj@gmail.com"
const email=<>
<h3>Email:</h3>
<p>{mailId}</p>
</>

//functional Component
const Details = ()=>{
    return <>
    <h3>Name : Captain</h3> 
    <hr></hr>
    <h5>about</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat voluptate iure voluptatem est rem ab in alias optio nesciunt eveniet ratione esse ea, repudiandae aliquid modi qui perspiciatis amet?
    </p>
    {/*using react element inside react component*/}
    {email}
    {console.log("2+3 is "+ 2+3)}
    </>
}

const Contact = () => (
    <h3>Phone : 9876543211</h3>
)


const git= ()=>{
    return <>
    <h3>git name : Peter parker MJ</h3>
        </>
    
}

//component composition
function App(){
    return <>
    <Details/>
    <Contact></Contact>
    {git()}
    </>
}



const root=reactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)