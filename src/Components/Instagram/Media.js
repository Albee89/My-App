import React, { Component } from "react";
import { Link } from 'react';

class Media extends Component {
  render() {
    return (
        <>
    <div className="Media"></div>
    <Link href={this.props.url} rel="noopener" target="_blank"></Link>
    <Link src={this.props.src} alt={this.props.alt}></Link>
</>
    );
  }
}

export default Media;