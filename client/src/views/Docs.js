import data from '../assets/Requests.json'

function Docs() {
  return (
    <div className="text-2xl px-20 flex flex-row flex-wrap lg:justify-between md:justify-center h-auto">
      <section className="flex flex-col justify-between my-10">
        {data.endpoints.map((route) => {
          return(
            <h1>sdf</h1>
          )
        })}
      </section>
    </div>
  );
}

export default Docs;