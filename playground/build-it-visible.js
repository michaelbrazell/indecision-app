console.log('Visible is running');

let visibility = false;

const onToggleContent = () => {
  if ( visibility === false ) {
    visibility = true;
    render();
  } else {
    visibility = false;
    render();
  }
  /*
    Alternatively this could be written:
    visibility = !visibility; 
  */
}


const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onToggleContent}>{visibility == false ? 'Show Content' : 'Hide Content' }</button>
      <p>{visibility == false ? ' ' : 'Here is some content' }</p>
      {
        /* can simplify:
          {
            visibility && (
              <p>Here is some content</p>
            )
          }
        */
      }
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
}

render();