React Folder Structure:

    node_modules -> those folder which required to run react app.
    public -> put images, and other
    src -> 
        assets -> for putting files and other related files.
        .jsx type files are the components.
        
        Flow: we create a components which has one parent component which used inside body tag. 

        Component is nothing but act like a function which return jsx 

        jsx is like html with some special qualities like:

            html: <h1>2+2</h1>  jsx: <h1>{2+2}</h1> -> 4

        code which write inside jsx will convert to js.

    App.jsx : 

    this is the file which gets import inside main.jsx for showing in the UI.

    Main.jsx: Its the file which create root elelment inside body which is the parent of all component and inside this file render function calls after which component content seeing in the UI.
    
        

    App.jsx: 

    Common important things to know: 

    we can only return one div at a time. 
    we have to import React first so when jsx tries to convert code into js on that time when React function will come it will not show the error.

    we have to export the App.jsx because this app is getting import on main.jsx.



    ---------------------------
    Styling in React:

    we can style in three ways: module css, tailwindcss, material ui 

    we can use talwind before using talwind class we have to import talwind first then we can use 

For Running a React Project we need to run this command at the project directory : npm run dev 

*. React will react when state changes and this is the main working flow of react. 
* The useState hook in React is a fundamental tool that allows functional components to manage and update their internal data (state) over time. This "component-specific memory" enables components to be dynamic and interactive, re-rendering automatically when the state changes

* value sharing between components :

we need to define the passing values inside jsx component where we are calling like <Product data={{name:"Shadab", age: "25"}}/>

then in your component in which you have added call the same name inside that component in here we need to add inside Product jsx 
function Product({data}) {

    return (
        {data.name}{data.age}
    )
}


js-topics: 


destructuring 
arrow function 