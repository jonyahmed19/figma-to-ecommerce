import React from "react";
import Title from "../../component/Title/Title";
import Promo from "../../component/Promo/Promo";
import image1 from "../../assets/image/prom-1.png";
import image2 from "../../assets/image/prom-2.png";
import image3 from "../../assets/image/prom-3.png";
import image4 from "../../assets/image/prom-4.png";

const PromoArea = () => {
  return (
    <div className="promo-area mt-14 md:mt-24">
      <div className="custom-container mx-auto">
        <Title label={"What Shopex Offer!"} />
        <div className="promo-inner md:grid-cols-4 grid grid-cols-2  gap-8 md:gap-12 mt-12 md:mt-20">
          <Promo
            image={image1}
            title="24/7 Support"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <Promo
            image={image2}
            title="24/7 Support"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <Promo
            image={image3}
            title="24/7 Support"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          <Promo
            image={image4}
            title="24/7 Support"
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </div>
    </div>
  );
};

export default PromoArea;
