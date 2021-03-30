function Docs() {
  return (
    <div className="text-2xl px-20 flex flex-row flex-wrap lg:justify-between md:justify-center h-auto">
      <section className="flex flex-col justify-between my-10">
        <p>Documentation</p>
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
        <p>Making a Form</p>
        <p>Updating a Block</p>
        <p>Deleting a Block</p>
        <p>Deleting a chain</p>
        <p>Getting All Blocks</p>
        <p>Getting a single block</p>
      </section>
    </div>
  );
}

export default Docs;