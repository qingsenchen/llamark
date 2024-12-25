import { Component } from "atomico";
import { c, html } from "atomico";

// 📌 Parameters for the function and set 
//    the structure rules for myComponent.props
interface Props{
    checked: boolean;
    value: string
}

// 📌 Optional, improves the typing experience 
//    in JSX (Atomico, Preact and React)
interface MetaProps {
    myMethod:(value: number)=>void;
    onMyEvent: Event;
}

const qsApp: Component<Props, MetaProps> = (props) => {
    const myMethod = (value: number)=>{};
    return html`<host shadowDom myMethod=${myMethod}>
        <h1>Hello Atomico</h1>
        <a href="#"><slot /></a>
    </host>`;
}

qsApp.props = {
    checked: Boolean,
    value: { type: String, event: {type: "MyEvent"} },
}

export const QsApp = c(qsApp)