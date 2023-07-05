const Header = () => {
  const links = [
    { name: 'MODE D\'EMPLOI', count: 880 },
    { name: 'LINKEDIN', count: 885 },
    { name: 'GITHUB', count: 400 },
  ];

  const date = new Date();

  return (
    <>
      <div className="header-1 grid px-10 grid-cols-12 gap-8">
        <div className="title col-span-6">
          <h1>Simon<span>2</span></h1>
        </div>
        <div className="links col-span-6 h-full flex flex-col justify-between">
          { links.map((l, i) => (
            <div className="flex justify-between" key={i}>
              <p>{l.name}</p><p>..{l.count}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="header-2 grid px-10 grid-cols-12">
        <span className="col-span-5 flex flex-col mx-16">
          <div className="flex justify-between">
            <span>à</span>
            <span>l'antenne</span>
          </div>
          <div className="flex justify-between">
            <span>à</span>
            <span>{date.getHours() + 2}h</span>
          </div>
        </span>
        <span className="col-span-7 flex flex-col">
          <span>Fort Boyard</span>
          <span>Joséphine Ange Gardien</span>
        </span>
      </div>
    </>
  )
};

export default Header;