import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";
import style from "../styles/RegistLogin.module.css";

import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Can not be empty!");
    } else {
      try {
        const result = await axios.post("https://test-binar.herokuapp.com/auth/login", {
          email: email,
          password: password,
        });
        localStorage.setItem("pass", result.data.result.access_token);
        navigate("/dashboard");
      } catch (error) {
        alert("Wrong Password!");
      }
    }
  };

  const btnClick = () => {
    const btn = document.getElementById("btn");
    btn.innerHTML = "Processing";
    btn.classList.add(style["active"]);
  };

  return (
    <div className="vh-100 section-css">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-5">
            <div className={`card ${style["card-css"]}`}>
              <div className="row g-0">
                <div className={`d-flex align-items-center ${style.bg}`}>
                  <div className="card-body p-4 p-lg-5 text-black">
                    <Form inline onSubmit={submit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className={`fas fa-cubes fa-2x me-3 ${style["i-cubes-css"]}`}></i>
                        {/* <span className="h1 fw-bold mb-0"></span> */}
                      </div>
                      <h2 className={`fw-normal mb-3 pb-3 ${style["sign-css"]}`}>Login</h2>
                      <FormGroup>
                        <Label for="email" hidden>
                          E-mail
                        </Label>
                        <Input
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter your e-mail"
                        />
                      </FormGroup>{" "}
                      <FormGroup>
                        <Label for="password" hidden>
                          Password
                        </Label>
                        <Input
                          onChange={(event) => {
                            setPassword(event.target.value);
                          }}
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                      </FormGroup>{" "}
                      <div className="pt-1 mb-4 d-grid gap-2">
                        <Button className="btn-dark" type="submit" id="btn" onClick={btnClick}>
                          Login
                        </Button>
                      </div>
                      <p className={`small mb-5 pb-lg-2 ${style["d-acnt-css"]}`}>
                        Don&apos;t have an account?{" "}
                        <Link href="/register">
                          <a className={style["reg-css"]}>Register here</a>
                        </Link>
                      </p>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
