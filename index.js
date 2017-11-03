/**
 *
 */

import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class API {
  constructor() {
    this.host = ''
  }

  submitReport() {
    return new Promise((resolve, reject) => {
      fetch(`${this.host}/report`)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}

class Header extends Component {
  render() {
    return (
      <div className='bg-orange white'>
        <header className='tc pv2'>
          <h1>stance.</h1>
          <nav>
            <a className='link white dib ml2 mr2' href='#'>File Report</a>
            <a className='link white dib ml2 mr2' href='#'>Overview</a>
            <a className='link white dib ml2 mr2' href='#'>Analysis</a>
            <a className='link white dib ml2 mr4' href='#'>Charts and shit</a>
          </nav>
        </header>
      </div>
    );
  }
}

class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reporter: null,
      reported: null,
      comments: null,
      error: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onFormUpdate(field, e) {
    this.setState({ [field]: e.target.value });
  }

  onSubmit() {
    const { reporter, reported, comments } = this.state;
    if (!reporter) {
      this.setState({ error: 'Reported field cannot be left blank. Only you will have access to that information.' });
    }
    if (!(reporter && reported && comments)) {
      return;
    }
    API.submitReport({ reporter, reported, comments });
  }

  render() {
    return (
      <div>

        <div>
          <h1>File A Report</h1>
        </div>

        <div>
          <main className='pa3'>
            <p className='f5 lh-copy measure'>
               This is text about anonymity and what happens with this report. Typography
               has one plain duty before it and that is to convey information
               in writing. No argument or consideration can absolve typography from this
               duty. A printed work which cannot be read becomes a product without
               purpose.
            </p>
          </main>
        </div>

        <form>
          <div className='measure'>
            <label>Your name</label>
            <input
              type='text'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              onChange={this.onFormUpdate.bind(this, 'reporter')}
            />
          </div>
          <div className='measure'>
            <label>The guy</label>
            <input
              type='text'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              onChange={this.onFormUpdate.bind(this, 'reported')}
            />
          </div>

          <div>
            <label>Comments</label>
            <textarea
              className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
              onChange={this.onFormUpdate.bind(this, 'comments')}
            >
            </textarea>
          </div>

          <a className="f6 link dim br2 ph3 pv2 mb2 dib white bg-orange" href="#0" onClick={this.onSubmit}>Submit</a>

        </form>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <ReportForm />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));