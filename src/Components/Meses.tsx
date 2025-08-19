import MesBtn from './MesBtn';

export const Meses = () => {
  return (
    <div className="flex">
      <MesBtn n={-4} />
      <MesBtn n={-3} />
      <MesBtn n={-2} />
      <MesBtn n={-1} />
    </div>
  );
};
