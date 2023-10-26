import { Link } from "react-router-dom";
import { useGlobalState } from "../hooks";

export const Footer = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting, menu } = globalState;
  return (
    <section className="flex flex-col  lg:justify-end font-poppins">
      <div className="w-full   bg-gray-900 ">
        <div className="justify-center flex-1 container px-4 md:px-0 mx-auto py-5 md:py-10">
          <div className="flex flex-wrap  -mx-3">
            <div className="w-full px-4 mb-11 md:w-1/2 lg:w-1/2 lg:mb-0 flex flex-col text-gray-400 font-normal gap-1 ">
              <div className="flex items-center gap-4 mb-3">
                <img class="w-10 h-104" src={setting.Logo} alt="Workflow" />
                <span className="font-medium text-lg text-white">
                  Công ty TNHH Tư vấn SNOWBALL
                </span>
              </div>
              <span class=" text-start">
                <i class="fa-solid fa-location-dot"></i> {setting.Address}
              </span>

              <span class="">
                <i class="fas fa-phone" aria-hidden="true"></i> Phone:{" "}
                {setting.Hotline}
              </span>
              <span class="">
                <i class="fas fa-at" aria-hidden="true"></i> Email:{" "}
                {setting.Email}
              </span>
            </div>
            <div className="w-full px-4 md:w-1/4 lg:w-1/4 mb-11 lg:mb-0">
              <h2 className="mb-4 text-lg font-bold text-gray-400">Menu</h2>
              <ul>
                {menu.map((x) => {
                  return (
                    <li className="mb-4" key={x.MenuId + x.MenuName}>
                      <Link
                        to={x.MenuUrl}
                        className="inline-block text-base font-normal text-gray-400"
                      >
                        {x.MenuName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full px-4 mb-11 lg:mb-0 md:w-1/4 lg:w-1/4">
              <h2 className="mb-4 text-lg font-bold text-gray-400">Liên kết</h2>
              <ul>
                <li className="mb-4">
                  <Link
                    to="/gioi-thieu"
                    className="inline-block text-base font-normal text-gray-400"
                  >
                    Về chúng tôi
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/chinh-sach-bao-mat"
                    className="inline-block text-base font-normal text-gray-400"
                  >
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/lien-he"
                    className="inline-block text-base font-normal text-gray-400"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/dieu-khoan-va-dieu-kien"
                    className="inline-block text-base font-normal text-gray-400"
                  >
                    Điều khoản và điều kiện
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-center  bg-gray-800 text-gray-400">
          <span>
            © Snowball 2023. Design by{" "}
            <a
              className="italic underline"
              href="https://cak-solution.com/"
              target="_blank"
            >
              Cak Solution
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
