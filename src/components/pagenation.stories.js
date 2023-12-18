import { BrowserRouter } from "react-router-dom";
import Pagination from "./pagenation";

export default {
  component: Pagination,
  title: "Pagination",
  tags: ["autodocs"],
  // decorators:[
  //     (Story)=>(
  //         <BrowserRouter>
  //             <Story/>
  //         </BrowserRouter>
  //     )
  // ]
  argTypes: { variant: { control: "radio" }, size: { control: "select" } },
};

export const Primary = {
  args: {
    size: "size",
    variant: "primary",
    totalLength: 200,
    pagesPerGroup: 5,
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
    totalLength: 100,
    pagesPerGroup: 5,
  },
};
