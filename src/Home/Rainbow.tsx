const Rainbow = () => {

  const rainbowitems = [
    { name: 'Rencontre les meufs chaudes de ta région', code: '807', color: 'fuchsia', textColor: ''},
    { name: 'Comment gagner de l\'argent au pmu', code: '808', color: 'cyan', textColor: ''},
    { name: 'ALICEBOX DECOUVREZ: ADSL + TEL + TV', code: '895', color: 'blue', textColor: ''},
    { name: 'Les tournois de PETANQUE près de chez toi', code: '900', color: 'yellow', textColor: 'blue'},
    { name: 'Les meilleures arbalètes de la toile', code: '897', color: 'lime', textColor: ''},
  ];

  return (
    <div className="rainbow mt-3 grid grid-rows-6">
      { rainbowitems.map((r, i) => (
        <div
          key={i}
          style={{ background: r.color, ...(r.textColor && { color: r.textColor }) }}
          className="item text-center relative"
        >
          <span>{r.name}</span>
          <span className="code absolute right-10">{r.code}</span>
        </div>
      ))}
    </div>
  );
};

export default Rainbow;