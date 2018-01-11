console.log('App.js is running');

const app = {
  title: 'Application Title',
  subTitle: 'This is our application subtitle',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const onRemoveAll = (e) => {
  e.preventDefault();
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subTitle && <p>{app.subTitle}</p>} 
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All Options</button>
      <ol>
        {
          app.options.map((option, i) => {
            return <li key={i}>{option}</li>
          })
        }
      </ol>
      <p>Options: {app.options.length}</p>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();