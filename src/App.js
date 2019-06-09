import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1
    };
  }

  goToHome = () => {
    this.setState({
      section: 1
    });
  }

  goToProducts = () => {
    this.setState({
      section: 2
    });
  }

  goToContactUs = () => {
    this.setState({
      section: 3
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <Home />;
    }

    if (this.state.section === 2) {
      return <Products />;
    }

    if (this.state.section === 3) {
      return <ContactUs />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My page
          </h1>
        </header>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={this.goToHome}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={this.goToProducts}>Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus" onClick={this.goToContactUs}>Contact Us</a>
            </li>
          </ul>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: this.state.section * 33 + '%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </nav>

        {this.currentSection()}

      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <section>
        <h4>Home</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum magna id libero ultricies, a dictum nunc venenatis. Cras lacinia at erat nec dictum. Aliquam varius arcu in felis tempor rhoncus. Vivamus sed nisl dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et augue eget odio imperdiet bibendum eleifend lobortis nulla. Suspendisse viverra dolor sed massa fringilla accumsan. Nam sit amet ex sit amet sapien pharetra euismod fermentum eget enim.</p>
      </section>
    );
  }
}

class ContactUs extends React.Component {
  render() {
    return (
      <section>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </section>
    );
  }
}

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.products = [
      {
        id: 1,
        name: 'Car',
        description: 'This is the awesome red car you always wanted to buy.'
      },
      {
        id: 2,
        name: 'House',
        description: 'Buy this house now and you will get 50% off.'
      },
      {
        id: 3,
        name: 'Pencil',
        description: 'You can also buy the pack of 10 colors for the price of 5.'
      },
      {
        id: 4,
        name: 'Camera',
        description: 'This brand new 50MP camera with x30 zoom is awesome!'
      },
      {
        id: 5,
        name: 'Mobile Phone',
        description: 'Now you can receive messages from far away!'
      },
      {
        id: 6,
        name: 'Torch',
        description: 'Now you can see at night. Warning do not use indoors!'
      },
      {
        id: 7,
        name: 'Coke',
        description: 'My coke'
      }
    ];
  }

  render() {
    return (
      <section className="products">
        {this.products.map(product => <Product product={product} key={product.id} />)}
      </section>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" width={100} height={180} src="prod.svg" alt="Card cap" />
        <div className="card-body">
          <ProductData product={this.props.product} />
          <a href="#." className="btn btn-primary">Buy</a>
        </div>
      </div>
    );
  }
}

class ProductData extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h5 className="card-title">{this.props.product.name}</h5>
        <p className="card-text">{this.props.product.description}</p>
      </React.Fragment>
    );
  }
}

export default App;
