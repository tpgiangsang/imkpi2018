import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="bg-cl padding-15 footer">
            <footer>
                <div className="float-left">
                        <p>Copyright &copy;2018 by NashTech</p>
                </div>
                <div className="float-right">
                    <a ><i class="fa fa-behance-square fa-icon font-icon "></i></a>
                    <a ><i class="fa fa-twitter-square fa-icon font-icon "></i></a>
                    <a ><i class="fa fa-skype fa-icon font-icon "></i></a>
                    <a ><i class="fa fa-facebook-square fa-icon font-icon"></i></a>
                </div>
            </footer>
      </div>
    )
  }
}

export default Footer;
