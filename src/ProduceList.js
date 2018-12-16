import React, { Component } from 'react'
import ProduceListItem from './ProduceListItem';


class ProduceList extends Component {


  
  render() {
    return (
      <div className="product-list"> 
        { !this.props.seasonSelected ? 
        null
        :
        this.props.products.map(produceArray => 
            produceArray.map((produce) => 
            <ProduceListItem produce={produce} key={produce.id} supplier_products={this.props.supplier_products} suppliers={this.props.suppliers}> </ProduceListItem>)
          )
        // this.props.suppliers.map(suppliersArray => 
        //     produceArray.map((produce) => 
        //     <ProduceListItem produce={produce} key={produce.id}> </ProduceListItem>)
        //   )

        // `Show the products for ${this.props.seasonSelected}`
        } 
      </div>
    )
  }

} 
export default ProduceList;