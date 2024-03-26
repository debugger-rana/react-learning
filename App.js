 // const heading =React.createElement("h1",{},"its running");

    // const root=ReactDOM.createRoot(document.getElementById("root"));

    // const subHeading=React.createElement("h2",{},"so lets begin");
    // const sub=ReactDOM.createRoot(document.getElementById("root"));
    

    // root.render(heading);
    // root.render(subHeading);
    const heading = React.createElement("h1",{id:"heading"}, "It's running");
const subHeading = React.createElement("h2", {id:"subheading"}, "So let's begin");
const App = React.createElement("div", {id:"container"}, heading, subHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(App);  // render () > is responsible for take the react object and convert it into  respective element

//heading , subHeading, App this all is react elemt and at the end of the day, 
// react element is an js object, so when we consolelo them we will see it,

const parent= React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"i am h1 tag"),React.createElement("h2",{},"i am h2 tag")]  //sibling elements
    )
)

root.render(parent);