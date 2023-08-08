import { Component } from "react";
import "./SearchProduct.scss";
import Search from "./Search";
export default class SearchProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          name: "Nike Air Force 1 '07",
          stock: 5,
          price: 5000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
        },
        {
          name: "Nike Dunk Low Retro",
          stock: 20,
          price: 7000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fcdb78-eda4-4aaa-885e-de5c585d729b/dunk-low-retro-shoes-bCzchX.png",
        },
        {
          name: "Nike Metcon 9 AMP",
          stock: 2,
          price: 14000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b2c385a-a0bd-4bf7-9184-8391f195770c/metcon-9-amp-training-shoes-Dwx2GX.png",
        },
        {
          name: "Nike Ultrafly",
          stock: 35,
          price: 10000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d823b156-493d-4ad2-8d6d-dc7be755ef13/ultrafly-trail-running-shoes-4DRfrN.png",
        },
      ],
      productResultList: [
        {
          name: "Nike Air Force 1 '07",
          stock: 5,
          price: 5000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
        },
        {
          name: "Nike Dunk Low Retro",
          stock: 20,
          price: 7000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/67fcdb78-eda4-4aaa-885e-de5c585d729b/dunk-low-retro-shoes-bCzchX.png",
        },
        {
          name: "Nike Metcon 9 AMP",
          stock: 2,
          price: 14000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b2c385a-a0bd-4bf7-9184-8391f195770c/metcon-9-amp-training-shoes-Dwx2GX.png",
        },
        {
          name: "Nike Ultrafly",
          stock: 35,
          price: 10000,
          icon: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d823b156-493d-4ad2-8d6d-dc7be755ef13/ultrafly-trail-running-shoes-4DRfrN.png",
        },
      ],
    };
  }
  // filter dấu trong tiếng việt
  removeVietnameseAccent = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  };

  // xử lý search
  handleSearch = (searchInput) => {
    let filteredList;
    searchInput != ""
      ? (filteredList = this.state.productList.filter((product) =>
          this.removeVietnameseAccent(product.name.toLowerCase()).includes(
            this.removeVietnameseAccent(searchInput.toLowerCase()),
          ),
        ))
      : (filteredList = [...this.state.productList]);

    this.setState({
      productResultList: filteredList,
    });
  };

  render() {
    return (
      <>
        <div className="searchProduct__containeer">
          <div className="search__container">
            <Search handleSearch={this.handleSearch}></Search>
          </div>
          <table className="table">
            <thead>
              <tr className="title">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th>Tools</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productResultList.map((product, index) => (
                <tr key={product.name + index + product.price}>
                  <th scope="row">
                    <div className="item">{index + 1}</div>
                  </th>
                  <td>
                    <div className="item">{product.name}</div>
                  </td>
                  <td>
                    <div className="item">
                      <img className="product--img" src={product.icon} />
                    </div>
                  </td>
                  <td>
                    <div className="item">{product.price}</div>
                  </td>
                  <td>
                    <div className="item">{product.stock}</div>
                  </td>
                  <td>
                    <div className="item">
                      <button type="button" className="btn btn-primary">
                        Mua Ngay
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
