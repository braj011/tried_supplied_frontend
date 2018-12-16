import React from 'react'


class ProduceListItem extends React.Component {

  findSupplier = () => {
    debugger
    if (this.props.produce.id === this.props.supplier_products.product_id) {
      debugger
    }
  }

  render() {
    return (
      <div>
        <li> {this.props.produce.name} | Suppliers: {() => this.findSupplier()}
        
        {/* { this.props.supplier_products.supplier_id === this.props.suppliers.id ?
          this.props.suppliers.name 
        : 
          null } */}
        {/* {this.props.suppliers.map( supplier => supplier.name)} */}

        {/* | {this.props.produce.description}  */}
        </li>
      </div>
    ) 
  } 

} 

export default ProduceListItem