import React, { Component } from 'react';
import { find } from 'lodash';

class LayerSelect extends Component {

  constructor() {
    super();
    this.state = {
      item1: 0,
      item2: 0,
      item3: 0,
      loadedCount: 0,
      loaded: false
    }
  }

  componentDidMount() {

    const imageCount = this.props.search.length;

    this.props.search.forEach((val,i) => {
      const tempImage = new Image();

      tempImage.src = val.image;

      tempImage.onload = () => {
        if (this.state.loadedCount === imageCount - 1) {
          this.setState({ loaded: true });
        } else {
          this.setState({ loadedCount: this.state.loadedCount + 1 });
        }
      }

    });
  }

  handelItemClick(i,num) {
    
    const changeState = {};

    changeState['item' + num] = i;

    // console.log(changeState);

    this.setState(changeState);
  }

  renderMain() {
    const { item1, item2, item3 } = this.state;
    const main = find(this.props.search, { item1, item2, item3 });
    // console.log('find', main);
    return (
		<a style={{ display: 'block', width: '100%', height: 'auto' }} href={main.link} target="_blank">
			<img style={{ display: 'block', width: '100%', height: 'auto' }} src={main.image} alt="main" />
		</a>
    );
  }

  renderItems(items,num) {
    // console.log(items);
    return items.map((val,i) => {
      return (
        <div onClick={this.handelItemClick.bind(this,i,num)} key={i}>
          <img src={val.image} alt="item" />
        </div>
      );
    });
  }

  render() {

    const css = {
      itemsLeft: {
      	position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        top: '30%',
        left: 0
      },
      itemsRight: {
      	position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        top: '30%',
        right: 0
      },
      itemsBottom: {
      	position: 'absolute',
      	bottom: 0,
      	left: 0,
      	width: '100%',
      	height: 'auto',
        display: 'flex',
        justifyContent: 'center'
      },
      wrapper: {
        display: 'flex',
        position: 'relative',
        lineHeight: 0
      }
    }

    return (
      <div>
          <h2>Layer Select</h2>
          <div style={css.wrapper}>
			<div style={css.itemsLeft}>
				{this.renderItems(this.props.items1,1)}
			</div>
				{this.renderMain()}
			<div style={css.itemsRight}>
				{this.renderItems(this.props.items2,2)}
			</div>
			<div style={css.itemsBottom}>
				{this.renderItems(this.props.items3,3)}
			</div>
          </div>
      </div>
    );
  }
}

export default LayerSelect;
