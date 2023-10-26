import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useGlobalState } from "../hooks";
import { Link } from "react-router-dom";
export const PrivacyPolicy = () => {
  const [globalState, dispatch] = useGlobalState();
  const { setting } = globalState;
  return (
    <div className="container mx-auto my-5 px-4 md:px-0">
      <Breadcrumb
        items={[
          {
            title: (
              <Link to="/">
                {" "}
                <HomeOutlined className="mr-2" />
                Trang chủ
              </Link>
            ),
          },

          {
            title: "Chính sách bảo mật",
          },
        ]}
      />
      <div className="py-4">
        <div
          dangerouslySetInnerHTML={{ __html: setting?.PrivacyPolicy }}
        >
        </div>
      </div>
    </div>
  );
};
