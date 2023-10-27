import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

interface CardWorkProps {
  roles: string;
  title: string;
  img: string;
  comingSoon?: boolean;
}

const CardWork = ({ img, roles, title, comingSoon }: CardWorkProps) => {
  return (
    <div className="card-work">
      <div className="thumb">
        <img src={img} alt="" />
      </div>
      <div className="text">
        <p className="body-m">{roles}</p>
        <h3 className="">{title}</h3>
      </div>

      <Button disabled={comingSoon}>
        <p className="body-m">
          Ver caso de estudo {comingSoon && "(Em breve)"}
        </p>
        <ArrowUpRight size={24} />
      </Button>
    </div>
  );
};

export default CardWork;
