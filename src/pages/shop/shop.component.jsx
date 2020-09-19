import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data.js';

class Shop extends React.Component{

    constructor()
    {
        super();
        this.state = {
            collection: SHOP_DATA
        };
    }


    render()
    {
        const collection = this.state.collection;
        return (
            <div className='shop-page'>
              {collection.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
          );
    }


}


export default Shop;