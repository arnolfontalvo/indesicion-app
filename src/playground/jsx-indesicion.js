console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in hands of a computer',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderCounterApp();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderCounterApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum]
  alert(option);
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  // JSX - JavaScript XML
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>Subtitle: {app.subtitle}</h2>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={onRemoveAll}>Remove all</button>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <ol>
        {
          app.options.map((option) => <li key={option} id={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}


renderCounterApp();