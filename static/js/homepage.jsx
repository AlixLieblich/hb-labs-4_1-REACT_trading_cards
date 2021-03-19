"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <div>
        <p>This is a great site for viewing trading cards.</p>
        <a href="/cards" > View cards here </a>
      </div>
      <img src="/static/img/balloonicorn.jpg"></img>
      <a href="/about" > About Us! </a>
      <p>Another element #3</p>
      <p>anotha one</p>
    </React.Fragment>

  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
