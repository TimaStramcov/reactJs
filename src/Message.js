import './App.css';

function Message(props) {
 return (
   <div className="Message">
     <header className="Message-header">
       My First React App
       <h3 className="Message-text">Hello, {props.name}</h3>
     </header>
   </div>
 );
}

export default Message;