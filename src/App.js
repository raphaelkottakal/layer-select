import React, { Component } from 'react';
import LayerSelect from './LayerSelect';

class App extends Component {
  render() {

    const search = [
      {
        image: 'http://placehold.it/300x400?text=000',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 0,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=100',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 0,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=010',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 1,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=001',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 0,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=110',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 1,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=101',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 0,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=011',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 1,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=111',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 1,
        item3: 1
      },


      {
        image: 'http://placehold.it/300x400?text=200',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 0,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=020',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 2,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=002',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 0,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=220',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 2,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=202',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 0,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=022',
        link: 'http://www.myntra.com/shoes',
        item1: 0,
        item2: 2,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=222',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 2,
        item3: 2
      },



      {
        image: 'http://placehold.it/300x400?text=211',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 1,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=121',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 2,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=112',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 1,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=221',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 2,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=212',
        link: 'http://www.myntra.com/shoes',
        item1: 2,
        item2: 1,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=122',
        link: 'http://www.myntra.com/shoes',
        item1: 1,
        item2: 2,
        item3: 2
      },



      {
        image: 'http://placehold.it/300x400?text=012',
        item1: 0,
        item2: 1,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=021',
        item1: 0,
        item2: 2,
        item3: 1
      },
      {
        image: 'http://placehold.it/300x400?text=120',
        item1: 1,
        item2: 2,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=210',
        item1: 2,
        item2: 1,
        item3: 0
      },
      {
        image: 'http://placehold.it/300x400?text=102',
        item1: 1,
        item2: 0,
        item3: 2
      },
      {
        image: 'http://placehold.it/300x400?text=201',
        item1: 2,
        item2: 0,
        item3: 1
      },



    ];

    const items1 = [
      {
        image: 'http://placehold.it/64/FF9627?text=zero'
      },
      {
        image: 'http://placehold.it/64/FF9627?text=one'
      },
      {
        image: 'http://placehold.it/64/FF9627?text=two'
      },
    ];

    const items2= [
      {
        image: 'http://placehold.it/64/41FF5D?text=zero'
      },
      {
        image: 'http://placehold.it/64/41FF5D?text=one'
      },
      {
        image: 'http://placehold.it/64/41FF5D?text=two'
      },
    ];

    const items3 = [
      {
        image: 'http://placehold.it/64/4A0BCC?text=zero'
      },
      {
        image: 'http://placehold.it/64/4A0BCC?text=one'
      },
      {
        image: 'http://placehold.it/64/4A0BCC?text=two'
      },
    ];

    return (
      <div>
        <LayerSelect
          search={search}
          items1={items1}
          items2={items2}
          items3={items3}
        />
          <h2>Layer Select</h2>

      </div>
    );
  }
}

export default App;
