import React from "react";
import { listData } from "../lib/data";
import Filter from "../components/Filter";
import Card from "../components/Card";

function Search() {
  const data = listData;

  return (
    <div className="flex flex-col lg:flex-row bg-white h-full md:px-10 px-2">
      <div className="w-full lg:w-1/2 p-4 ">
        <div className="pr-6 flex flex-col gap-12">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-50 h-64 md:h-auto pb-2">Map</div>
    </div>
  );
}
export default Search;
