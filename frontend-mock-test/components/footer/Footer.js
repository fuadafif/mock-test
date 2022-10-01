import style from "../../styles/Footer.module.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className={style.all}>
      <footer className={style.footer}>
        <div className={style["footer-wrapper"]}>
          <div className={style.container}>
            <div className={style.parent}>
              {/* about us */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>company</h4>
                <ul className={style.list}>
                  <li className={style.li}>
                    <Link href="#">
                      <a className={style.detail}>about us</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* get help */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>get help</h4>
                <ul className={style.list}>
                  <li className={style.li}>
                    <Link href="#">
                      <a className={style.detail}>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social links */}
              <div className={style["footer-col"]}>
                <h4 className={style.title}>follow us</h4>
                <div className={style["social-links"]}>
                  <Link href="https://www.facebook.com">
                    <a type="button" className={style.detail}>
                      <FaFacebookF />{" "}
                    </a>
                  </Link>
                  <Link href="https://twitter.com/">
                    <a type="button" className={style.detail}>
                      <FaTwitter />{" "}
                    </a>
                  </Link>
                  <Link href="https://www.google.com/">
                    <a type="button" className={style.detail}>
                      <FaGoogle />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
