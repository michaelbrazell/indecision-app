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

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1> 
      {app.subTitle && <p>{app.subTitle}</p>} 
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <form onSubmit={onRemoveAll}>
        <button>Remove All Options</button>
      </form>
      <ol>
        <li>Option 1</li>
        <li>Option 2</li>
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