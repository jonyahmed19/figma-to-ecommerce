import React from "react";
import { useForm } from "react-hook-form";
import TopHeader from "../../containers/TopHeader/TopHeader";
import BottomHeader from "../../containers/BottomHeader/BottomHeader";
import Breadcumb from "../../containers/Breadcumb/Breadcumb";
import Footer from "../../containers/Footer/Footer";
import BrandArea from "../../containers/BrandArea/BrandArea";

const Contactpage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (d) => console.log(JSON.stringify(d));

  return (
    <div className="contactpage">
      <TopHeader />
      <BottomHeader />
      <Breadcumb label={"Contact Us"} />
      <div className="custom-container mx-auto">
        <div className="form-area">
          {
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">
                Full Name:<span>*</span>
              </label>
              <input
                {...register("name", { required: true, maxLength: 20 })}
                id="name"
                name="name"
                type="text"
                className={errors.name && "error"}
              />
              <label htmlFor="mail">
                Email:<span>*</span>
              </label>
              <input
                {...register("mail", { required: true })}
                id="mail"
                name="mail"
                type="mail"
                className={errors.mail && "error"}
              />
              <label htmlFor="message">
                Message:<span>*</span>
              </label>
              <textarea
                {...register("message", { required: true })}
                rows="5"
                id="message"
                name="message"
                className={errors.message && "error"}
              />
              <button
                type="submit"
                className="bg-pinish mt-7 text-white text-xl py-2"
              >
                Send
              </button>
            </form>
          }
        </div>
      </div>
      <BrandArea />
      <Footer />
    </div>
  );
};

export default Contactpage;
