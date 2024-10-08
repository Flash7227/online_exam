import type { Metadata } from "next";
import FormData from "./formData";

export const metadata: Metadata = {
  title: "Нэвтрэх",
  description: "Нэвтрэх нүүр хэсэг",
};

const Page = () => {
  return (
    <div className="">
      <h5>Шалгалтын программ</h5>
      <FormData />
    </div>
  );
};

export default Page;
