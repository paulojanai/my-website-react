import { ICase } from "@data/cases/casesWork";

const CardWork: React.FC<ICase> = ({
  images,
  client,
  date,
  role,
  title,
  description,
  href,
  comingSoon,
}: ICase) => {
  return (
    <div className="card-work" data-aos="fade-up">
      <div className="text">
        <p className="body-lg-strong">{client}</p>
        <h4>{title}</h4>
        <p className="body-md">
          {role}, {date}
        </p>
        <p className="body-md paragraph-medium">{description}</p>
      </div>
      <a
        href={href}
        className={`thumb ${!comingSoon ? "cursor-active" : ""}`}
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        {comingSoon && <span className="coming-soon"></span>}
        <img src={images[0]} alt="" />
      </a>
    </div>
  );
};

export default CardWork;
