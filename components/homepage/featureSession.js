import {TbTruckDelivery} from "react-icons/tb"
import {LiaMoneyBillWaveSolid} from "react-icons/lia"
import {RiCustomerService2Line} from "react-icons/ri"

const Feature = ({ icon, title, description }) => (
  <div className="mx-5 flex flex-row items-center justify-center border-2 border-indigo-300 py-4 px-5">
    <div>
      {icon}
    </div>
    <div className="ml-6 flex flex-col justify-center">
      <h3 className="text-left text-xs font-bold lg:text-sm">{title}</h3>
      <p className="text-light text-left text-xs lg:text-sm">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">
    <Feature
      icon={
     <TbTruckDelivery className="h-6 w-6 text-teal-900 lg:mr-2" />
      }
      title="Free Delivery"
      description="On Eligible Orders"
    />

    <Feature
      icon={
       <LiaMoneyBillWaveSolid  className="h-6 w-6 text-teal-900 lg:mr-2" />
      }
      title="Money Returns"
      description="30 Days guarantee"
    />

    <Feature
      icon={
       <RiCustomerService2Line className="h-6 w-6 text-teal-900 lg:mr-2" />
      }
      title="24/7 Support"
      description="Consumer support"
    />
  </section>
);

export default FeaturesSection;
