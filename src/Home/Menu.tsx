const Menu = () => {

  const menuItems = [
    { name: 'ACTU', code: 200 },
    { name: 'SPORT', code: 300 },
    { name: 'METEO', code: 500 },
    { name: 'LOTO / JEUX', code: 600 },
    { name: 'SMS-FORUM', code: 700 },
  ];

  return (
    <div className="menu mt-3 grid grid-cols-12 gap-18 relative">
      <div className="list col-span-6">
        { menuItems.map((m, i) => (
          <div key={i} className="flex justify-between">
            <span className="name">{m.name}</span>
            <span className="code">{m.code}</span>
          </div>
        ))}
      </div>
      <div className="panel col-span-6">
        <p><span>INFO PMU:</span> Le PMU il a changé... </p>
        <span className="absolute right-12 bottom-12">...page 620</span>
      </div>
    </div>
  )
};

export default Menu;