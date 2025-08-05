import Link from "next/link";


const Team = () => {
  const teamData = [
    {
      id: "derya-kurtulus",
      image: {
        src: "https://media.istockphoto.com/id/1434514711/photo/portrait-of-professional-worker-standing-by-solar-panel-and-holding-thumbs-up-installation-of.jpg?s=612x612&w=0&k=20&c=_KPyqTsyusJyzMWa6TAWop4DBafvc2-rV9w9-hrhBBM=",
      },
      name: "Derya Kurtulus",
      position: "Heating Expert",
      social_link: [
        {
          link: "https://linkedin.com",
          target: "_blank",
          icon: <i className="fab fa-linkedin-in"></i>,
        },
        {
          link: "https://twitter.com",
          target: "_blank",
          icon: <i className="fa-brands fa-x-twitter"></i>,
        },
        {
          link: "https://facebook.com",
          target: "_blank",
          icon: <i className="fab fa-facebook-f"></i>,
        },
      ],
    },
    {
      id: "john-doe",
      image: {
        src: "https://thumbs.dreamstime.com/b/engineer-solar-power-plant-portrait-happy-engineer-protective-helmet-standing-digital-tablet-solar-power-163556589.jpg",
      },
      name: "John Doe",
      position: "Solar Engineer",
      social_link: [
        {
          link: "https://linkedin.com",
          target: "_blank",
          icon: <i className="fab fa-linkedin-in"></i>,
        },
        {
          link: "https://twitter.com",
          target: "_blank",
          icon: <i className="fa-brands fa-x-twitter"></i>,
        },
      ],
    },
    {
      id: "jane-smith",
      image: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTed10Zah0bq5jIfrqeDfFrPBumza60vuiuZy2jlIW2S469ioNA01RMCyLG7S1sON2eRRg&usqp=CAU",
      },
      name: "Jane Smith",
      position: "Project Manager",
      social_link: [
        {
          link: "https://facebook.com",
          target: "_blank",
          icon: <i className="fab fa-facebook-f"></i>,
        },
        {
          link: "https://linkedin.com",
          target: "_blank",
          icon: <i className="fab fa-linkedin-in"></i>,
        },
      ],
    },
    {
      id: "mike-jones",
      image: {
        src: "https://test.solar-tec.com/wp-content/uploads/2024/10/Solar-panel-Repair-featured-1024x682.jpg",
      },
      name: "Mike Jones",
      position: "Electrical Expert",
      social_link: [
        {
          link: "https://twitter.com",
          target: "_blank",
          icon: <i className="fa-brands fa-x-twitter"></i>,
        },
        {
          link: "https://linkedin.com",
          target: "_blank",
          icon: <i className="fab fa-linkedin-in"></i>,
        },
      ],
    },
  ];

  return (
    <div className="team__one">
      <div className="container">
        <div className="row mb-35">
          <div className="col-xl-12">
            <div className="team__one-title t-center">
              <span className="subtitle-one">We're the best</span>
              <h2>Solar Design Engineer</h2>
            </div>
          </div>
        </div>
        <div className="row dark_image">
          {teamData.map((data, id) => (
            <div className="col-lg-3 col-md-6 mb-35" key={id}>
              <div className="team__one-item">
                <div className="team__one-item-image">
                  <img src={data.image.src} alt={data.name} />
                  <div className="team__one-item-image-content">
                    <div className="team__one-item-image-icon">
                      <span>
                        <i className="fas fa-share-alt"></i>
                      </span>
                      <div className="team__one-item-image-social">
                        <ul>
                          {data.social_link.map((social, idx) => (
                            <li key={idx}>
                              <Link href={social.link} target={social.target}>
                                {social.icon}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <h6>
                      <Link href={`/team/${data.id}`}>{data.name}</Link>
                    </h6>
                    <span>{data.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
