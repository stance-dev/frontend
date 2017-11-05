/**
 *
 */
import React, { Component } from 'react';

export default class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (!(reported && comments)) {
      return;
    }
    API.submitReport({ reported, comments });
  }

  render() {
    return (
      <div>

        <div className='big'>File A Report</div>

        <div>
          <main className='pa3'>
            <p className='f5 lh-copy measure'>
              This report is filed anonymously unless you choose
              to be revealed or to reveal the offender.<br/>
              If you need to speak to <a>Human Resources</a>, the can
              be reached at <a>(000) 000 - 0000</a> or at <a>hr@company.net</a>.
              You employee handbook can also be accessed online at <a></a><br/>
              For a list of other resources, visit the stance <a>Resources</a> page.
            </p>
          </main>
        </div>

        <form>
          <div className='mb4'>
            <input type="radio" checked onChange={this.onFormUpdate.bind(this, 'anonymous')}/> Keep me anonymous
          </div>
          <div className='mb4'>
            <input type="radio" checked onChange={this.onFormUpdate.bind(this, 'anonymous')}/> Keep the offender anonymous
          </div>

          <div className='measure mb4'>
            <div className='mb2'>Offender</div>
            <input
              type='text'
              className='input-reset ba b--black-20 pa2 mb2 db w-100'
              onChange={this.onFormUpdate.bind(this, 'reported')}
            />
          </div>

          <div className='measure mb4'>
            <div className='mb2'>Type</div>
            <div>
              <select id="" name="Type" style={{width: '100%'}}>
                <option value="">Sexual Imposition</option>
                <option value="">Gender Harrassment</option>
                <option value="">Physical</option>
                <option value="">Bribery</option>
                <option value="">Coercion</option>
                <option value="">Option</option>
              </select>
            </div>
          </div>

          <div className='mb4'>
            <div className='mb2'>Comments</div>
            <textarea
              className='db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2'
              onChange={this.onFormUpdate.bind(this, 'comments')}
            >
            </textarea>
          </div>

          <a
            className="f6 link dim br2 ph3 pv2 mb2 dib white bg-orange"
            href="#0"
            onClick={this.onSubmit}
          >
            Submit
          </a>

        </form>

      </div>
    );
  }
}
