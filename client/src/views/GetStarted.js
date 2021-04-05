import Server from '../assets/server.png';
import '../styles/GettingStarted.css'
import Doc from '../components/Doc'
import data from '../assets/GettingStarted.json'

function GetStarted() {
  return (
    <div className="text-2xl px-20 flex flex-row flex-wrap lg:justify-between md:justify-center h-auto">
      <section className="flex flex-col justify-between my-10">
        {data.endpoints.map((route) => {
          return(
            <Doc doc={route}/>
          )
        })}
      </section>
      <section className='flex flex-col justify-center lg:w-1/2 md:w-full my-10'>
        <img className={"gettingStartedImage"} src={Server} alt="server"/>
      </section>
    </div>
  );
}

export default GetStarted;
