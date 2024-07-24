// import React  from "react";
import pic from "./virat.jpg";
import pic1 from "./1.jpeg";
import pic2 from "./2.jpeg";
import pic3 from "./pic3.jpeg";


export default function Demo() {
    var a={
        minHeight:"100vh",
        width:"100%",
        background:"blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        flexWrap:"wrap"
    }
    var b={
        height:"400px",
        width:"250px",
        background:"lightblue",
        padding:"20px",
        textAlign:"center"
    }
    let i={
        height:"200px",
        width:"200px",
        borderRadius:"50%"  

    }
    return (
        <>
        <div className="overall" style={a}>
        <div className="box1" style={b}>
        <img src={pic}style={i}></img>
        <h1 className="txt">JOHN DOE</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias delectus cumque amet rem! 
        </h4>
        </div>
        <div className="box2" style={b}>
        <img src={pic1}style={i}></img>
        <h1 className="txt">JOHN DOE</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias delectus cumque amet rem! 
        </h4>
        </div>
        <div className="box3" style={b}>
        <img src={pic2}style={i}></img>
        <h1 className="txt">JOHN DOE</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias delectus cumque amet rem! 
        </h4>
        </div>
        <div className="box4" style={b}>
        <img src={pic3}style={i}></img>
        <h1 className="txt">JOHN DOE</h1>
        <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias delectus cumque amet rem! 
        </h4>
        </div>
        </div>
        </>
    )

        //inline css 

    // // let a=30;
    // return(
    //     // <>
    //     // <h1 style={{color:"Red", textAlign:"center",transform:"rotate(10deg)"}}> I AM {a} FUNCTION </h1>
    //     // <b>vicky is {a>=18 ? "eligible for election" : "not eligible"}</b>
    //     // </>
    // )
    // internal css

//     let abc ={
//         background:"lightblue",
//         textAlign:"center"
//     }
//     return (
//         <h1 style={abc}><marquee scrollAmount="30" direction="right">I AM VICKY</marquee></h1>
//     )

};