import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useGlobalState } from "../hooks";
import parse from "html-react-parser";
export const Project = () => {
  const location = useLocation();
  const [globalState, dispatch] = useGlobalState();
  const { news } = globalState;
  const project = news.filter((x) => x.Url === location.pathname);
  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="container mx-auto my-5 px-4 md:px-0">
      {" "}
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
            title: "Dự án",
          },
        ]}
      />
      {project.map((a) => {
        const parsedContent = parse(a.NewsContent || "", {
          replace: (node) => {
            if (node.type === "tag" && node.name === "iframe") {
              return (
                <p className=" relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe
                    src={node.attribs.src}
                    alt={node.attribs.alt}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                  ></iframe>
                </p>
              );
            }
            // Giữ nguyên các phần khác của content
            return node;
          },
        });
        return (
          <div
            class="grid md:grid-cols-2 gap-4  p-4 mt-10 shadow-xl rounded-md"
            key={x.NewsId}
          >
            <div class="">
              <div className=" font-medium text-2xl text-main line-clamp-2">
                {a.NewsTitle}
              </div>
              <p class="leading-relaxed text-md mt-5 line-clamp-6 ">
                {a.NewsDescription}
              </p>
            </div>
            <div className=" font-poppins ">{parsedContent}</div>
          </div>
        );
      })}
    </div>
  );
};
