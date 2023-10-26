import { Avatar, Breadcrumb, Card } from "antd";

import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useGlobalState } from "../hooks";
import { Link } from "react-router-dom";
const { Meta } = Card;

export const Contact = () => {
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
            title: "Liên hệ",
          },
        ]}
      />
      <div className="mt-5">
        <h1 class="text-gray-600  hover:text-gray-800 rounded-md text-xl text-center font-medium">
          Đội ngũ thành viên Snowball với tinh thần cầu thị, tư duy cởi mở, tính
          cách vui vẻ sẽ rất vui được gặp bạn!​
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8 mt-4">
          <img
            src="/assets/SnowballContact1.jpg"
            className="rounded-lg"
            alt=""
          />
          <img
            src="/assets/SnowballContact2.jpg"
            className="rounded-lg"
            alt=""
          />
          <img
            src="/assets/SnowballContact3.jpg"
            className="rounded-lg"
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-10">
        <h1 class="text-gray-600  hover:text-gray-800  rounded-md text-xl text-center font-medium">
          Hãy liên hệ với Snowball theo cách mà bạn thích.
        </h1>
        <div className="mt-4 flex items-center  justify-center bg-[url('/assets/SnowballContact4.jpg')] min-h-[400px] md:min-h-[600px] bg-center bg-cover">
          {/* <img
            src="/assets/SnowballContact4.jpg"
            className="rounded-lg object-center"
            alt=""
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-20 my-10 contact">
          <Card
            actions={["Nhắn zalo ngay"]}
            className="hover:scale-110 duration-100"
          >
            <Meta
              title="Nhắn zalo cho Snowball"
              className="hover:scale-110 duration-100"
              description="Snowball sẽ phản hồi bạn nhanh nhất và không quá 2 tiếng trong giờ làm việc."
            />
          </Card>
          <Card
            actions={[setting?.Email || "contact@snowball.asia"]}
            className="hover:scale-110 duration-100"
          >
            <Meta
              className="text-slate-700"
              title="Email Snowball"
              description="Hãy email cho Snowball nếu bạn cần hỗ trợ hay muốn tìm hiểu thêm thông tin."
            />
          </Card>
          <Card
            actions={[setting?.Hotline || "086 8586 123"]}
            className="hover:scale-110 duration-100"
          >
            <Meta
              title="Gọi điện thoại cho Snowball"
              description="Đây là cách nhanh để nhận ngay phản hồi và hỗ trợ. Hãy gọi cho Snowball nhé."
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-4  my-10 py-10 contact border-t border-cyan-500">
          <div className="col-span-2">
            <iframe
              src={setting?.Map}
              allowfullscreen=""
              loading="lazy"
              className="w-full h-[300px] rounded-lg"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="font-normal text-slate-500">
            Mời bạn ghé thăm văn phòng của Snowball tại Lầu 5, 231-233 Lê Thánh
            Tôn, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh
          </div>
        </div>
      </div>
    </div>
  );
};
