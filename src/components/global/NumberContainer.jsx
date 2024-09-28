import CountUp from "react-countup";

const NumberContainer = () => {
  return (
    <div className="bg-primary text-white py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-2xl text-xl font-semibold">
            <CountUp
              start={0}
              end={200}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />{" "}
            X
          </p>
          <p>Antar Dalam Kota</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-2xl text-xl font-semibold">
            <CountUp
              start={0}
              end={100}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />{" "}
            X
          </p>
          <p>Antar Keluar Kota</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-2xl text-lg font-semibold">
            <CountUp
              start={0}
              end={90}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            %
          </p>
          <p>Aman & Cepat</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="md:text-2xl text-xl font-semibold">
            <CountUp
              start={0}
              end={100}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            %
          </p>
          <p>Keselamatan</p>
        </div>
      </div>
    </div>
  );
};

export default NumberContainer;
