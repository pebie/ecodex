/**
* Created by Pebie on 22/09/15.
*/

import React, { Component, PropTypes } from 'react';
import DocHelper from '../../helpers/DocHelper.js';
import $ from 'jquery';

export default class Doc extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $("pre > .line").each((i,line) => {

      let isComment = $("span.comment", line).length > 0;
      if(isComment){
        $(line).addClass("is-comment");
      }else{
        $(line).addClass("is-code");
      }
    });

    $("pre > .line").each((i,line) => {
      let wrap =  $(line).nextUntil('.is-code');
      $(wrap).wrapAll("<div class='comment-block'></div>");
    });


    $("pre > .line").each((i,line) => {
      let wrap =  $(line).nextUntil('.comment-block');
      $(wrap).wrapAll("<div class='code-block'></div>");
    });


    $("pre > .comment-block").each((i,line) => {
      // $(line).attr('data-doc-id',i);
      // $(line).bind('click',this, this.handleClick);
      let text = this.clean($(line).text());
      this.props.model[i] = text;
    });

    $("pre > .code-block").each((i,line) => {
      $(line).attr('data-doc-id',i);
      $(line).bind('click',this, this.handleClick);
    });


  }

  clean(text){
    text = text.toString();
    let pattern = "//";
    let re = new RegExp(pattern, "g");
    let filter = text.replace(re,"");
    return filter;
  }

  handleClick(e){
    let self = e.data;
    let $currentTarget = $(e.currentTarget);
    let id = $currentTarget.attr('data-doc-id');
    console.log(self.props.model[id]);
  }

  createMarkup() {
    return { __html: DocHelper.getDocHtml() };
  }

  render() {
    return (
      <div className="doc" dangerouslySetInnerHTML={this.createMarkup()}>

      </div>
    );
  }
}
Doc.propTypes = {
  model: PropTypes.object
};
Doc.defaultProps = { model: {} };
