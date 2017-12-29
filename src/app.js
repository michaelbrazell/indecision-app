console.log('App.js is running');

const app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1> 
    {app.subTitle && <p>{app.subTitle}</p>} 
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
);

let count = 0;
const addOne = () => {
  console.log('Add One!');
}
const minusOne = () => {
  console.log('Minus One!');
}
const reset = () => {
  console.log('Reset!');
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
  </div>  
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);