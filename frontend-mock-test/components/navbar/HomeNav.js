import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Button, Modal, ModalBody } from "reactstrap";
import style from "../../styles/Navbar.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HomeNav() {
  const { username } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const user = document.getElementById("user");
    const register = document.getElementById("register");
    const login = document.getElementById("login");
    const loginUser = document.getElementById("loginUser");
    if (username !== true) {
      loginUser.innerHTML = `Welcome, ${username}`;
      register.hidden = true;
      login.hidden = true;
    } else {
      register.hidden = false;
      login.hidden = false;
    }
  });

  const toggle = () => {
    setModal(!modal);
  };

  const createProduct = async () => {
    try {
      const result = await axios.post(`http://localhost:4000/createProduct`, {
        productName: productName,
        price: price,
        imageUrl: imageUrl,
      });
      alert(result.data.message);
    } catch {
      alert("Success added a new product.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar className={style.navbar} color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">BukaToko</NavbarBrand>
        {/* Nav */}
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink>
              <Button onClick={toggle}>Create New</Button>
            </NavLink>
          </NavItem>
        </Nav>
        <Nav>
          <NavItem hidden id="login">
            <NavLink className={style.link} href="/login" activeStyle>
              Login
            </NavLink>
          </NavItem>
          <NavItem hidden id="register">
            <NavLink className={(style.link, style.signup)} href="/register" activeStyle>
              Sign Up
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      {/* MODAL CREATE */}
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalTransition={{ timeout: 100 }}
        style={{
          width: 500,
        }}
      >
        <ModalBody>
          <form onSubmit={createProduct}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input type="productName" className="form-control" id="productName" onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price (Dollar USD)
              </label>
              <input type="price" className="form-control" id="price" onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image URL
              </label>
              <input type="imageUrl" className="form-control" id="imageUrl" onChange={(e) => setImageUrl(e.target.value)} />
            </div>
            <button type="submit" className="btn-sm btn btn-primary">
              Create
            </button>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}

export default HomeNav;
