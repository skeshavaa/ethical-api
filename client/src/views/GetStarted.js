import Server from '../assets/server.png';

function GetStarted() {
  return (
    <div className="text-2xl px-20 flex flex-row flex-wrap lg:justify-between md:justify-center h-auto">
      <section className='flex flex-col justify-between my-10'>
        <p>Get Started</p>
        <p>
          GET{" "}
          <code className="bg-gray-300 ml-2">https://ethicalforms/newForm</code>
        </p>
        <p>Response Body:</p>
        <p className="bg-gray-300 p-5 rounded-md">
          <p>{"{"}</p>
          <p style={{ textIndent: "50px" }}>blockID: asdfw35029kljfsd</p>
          <p>{"}"}</p>
        </p>
        <p>
          POST{" "}
          <code className="bg-gray-300 ml-2">https://ethicalforms/addData</code>
        </p>
        <p>Request Body:</p>
        <p className="bg-gray-300 p-5 rounded-md">
          <p>{"{"}</p>
          <p style={{ textIndent: "50px" }}>blockID: asdfw35029kljfsd</p>
          <p style={{ textIndent: "50px" }}>data: {"{"}</p>
          <p style={{ textIndent: "100px" }}>{"//"} JSON Object</p>
          <p style={{ textIndent: "50px" }}>{"}"}</p>
          <p>{"}"}</p>
        </p>
        <p>Response Body:</p>
        <p className="bg-gray-300 p-5 rounded-md">
          <p>{"{"}</p>
          <p style={{ textIndent: "50px" }}>status: success</p>
          <p>{"}"}</p>
        </p>
      </section>
      <section className='flex flex-col justify-center lg:w-1/2 md:w-full my-10'>
        <img src={Server} alt="server"/>
      </section>
    </div>
  );
}

export default GetStarted;
